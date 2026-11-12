/* Akun sederhana (nama panggilan + PIN 6 digit) & sinkron progres.
   Progres tetap ditulis ke localStorage seperti biasa (app tetap jalan offline);
   salinannya dikirim ke server (api/sync.php) agar bisa dibuka di browser / HP lain. */
(function () {
  const API = window.CPNS_API || '', HAS_SERVER = !!API && !/GANTI/.test(API), SK = 'cpns_session_v1', GUEST = 'cpns_guest_v1';
  const KEYS = ['cpns_lesson_v1', 'cpns_seen_qids_v2', 'cpns_results_v3'];
  const rd = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const wr = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ } };
  const del = k => { try { localStorage.removeItem(k); } catch (e) { /* abaikan */ } };
  const sess = () => rd(SK);
  const snapshot = () => KEYS.reduce((o, k) => { const v = rd(k); if (v != null) o[k] = v; return o; }, {});

  async function call(body) {
    let r;
    try { r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }); }
    catch (e) { throw new Error('Tidak bisa terhubung ke server. Periksa koneksi internet.'); }
    let j = {}; try { j = await r.json(); } catch (e) { throw new Error('Server akun tidak merespons dengan benar. Periksa alamat Worker di js/auth.js.'); }
    if (!r.ok) throw new Error(j.error || 'Terjadi kesalahan.');
    return j;
  }

  /* gabung dua data progres tanpa menghilangkan apa pun */
  function merge(a, b) {
    a = a || {}; b = b || {};
    const L = {};
    [a, b].forEach(s => { const l = s.cpns_lesson_v1 || {}; Object.keys(l).forEach(id => {
      const e = L[id] || (L[id] = { done: {}, at: 0 });
      Object.assign(e.done, l[id].done || {}); e.at = Math.max(e.at, l[id].at || 0);
    }); });
    const R = {}, ra = a.cpns_results_v3 || {}, rb = b.cpns_results_v3 || {};
    new Set([...Object.keys(ra), ...Object.keys(rb)]).forEach(k => {
      R[k] = !ra[k] ? rb[k] : !rb[k] ? ra[k] : ((rb[k].attempts || 0) > (ra[k].attempts || 0) ? rb[k] : ra[k]);
    });
    return {
      cpns_lesson_v1: L, cpns_results_v3: R,
      cpns_seen_qids_v2: Array.from(new Set([...(a.cpns_seen_qids_v2 || []), ...(b.cpns_seen_qids_v2 || [])]))
    };
  }

  /* ---------- kirim ke server (ditunda agar hemat) ---------- */
  let timer = null;
  async function push(keepalive) {
    const s = sess(); if (!s) return;
    try {
      await fetch(API, { method: 'POST', keepalive: !!keepalive, headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'push', username: s.u, token: s.t, data: snapshot() }) })
        .then(r => { if (r.status === 401) { del(SK); } else if (r.ok) del('cpns_dirty'); });
    } catch (e) { wr('cpns_dirty', 1); }
  }
  function touch(k) {
    if (!sess() || KEYS.indexOf(k) < 0) return;
    wr('cpns_dirty', 1); clearTimeout(timer); timer = setTimeout(() => push(false), 1500);
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && rd('cpns_dirty')) push(true); });
  window.addEventListener('online', () => { if (rd('cpns_dirty')) push(false); });
  if (rd('cpns_dirty')) setTimeout(() => push(false), 2000);


  /* ---------- mode TANPA server: pindah perangkat lewat kode progres ---------- */
  const b64 = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const unb64 = t => { t = t.replace(/-/g, '+').replace(/_/g, '/'); while (t.length % 4) t += '='; const s = atob(t), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; };
  async function toCode() {
    const json = JSON.stringify(snapshot());
    if (window.CompressionStream) {
      const buf = new Uint8Array(await new Response(new Blob([json]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer());
      return 'CPNS1.' + b64(buf);
    }
    return 'CPNS0.' + b64(new TextEncoder().encode(json));
  }
  async function fromCode(code) {
    const m = /^CPNS([01])\.([A-Za-z0-9_-]+)$/.exec(String(code).replace(/\s+/g, ''));
    if (!m) throw new Error('Kode tidak valid. Salin kode lengkap dari perangkat lama.');
    let u8 = unb64(m[2]);
    if (m[1] === '1') u8 = new Uint8Array(await new Response(new Blob([u8]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
    const d = JSON.parse(new TextDecoder().decode(u8)), o = {};
    KEYS.forEach(k => { if (d && d[k] !== undefined) o[k] = d[k]; });
    return o;
  }

  /* ---------- UI ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pinBoxes = (id, label) => `
    <div class="mt-3"><span class="mb-1 block text-xs font-bold text-base-content/70">${label}</span>
      <div id="${id}" class="flex justify-center gap-2" role="group" aria-label="${label}">${[0, 1, 2, 3, 4, 5].map(i =>
        `<input type="password" inputmode="numeric" pattern="[0-9]*" maxlength="1" autocomplete="off" aria-label="Digit ${i + 1}" class="input input-bordered h-14 w-11 p-0 text-center text-2xl font-bold">`).join('')}
      </div></div>`;
  function wirePin(root, onEnter) {
    const b = Array.from(root.querySelectorAll('input'));
    b.forEach((el, i) => {
      el.addEventListener('input', () => { el.value = el.value.replace(/\D/g, '').slice(-1); if (el.value && b[i + 1]) b[i + 1].focus(); });
      el.addEventListener('keydown', e => {
        if (e.key === 'Backspace' && !el.value && b[i - 1]) { b[i - 1].focus(); b[i - 1].value = ''; }
        else if (e.key === 'Enter') onEnter();
        else if (e.key === 'ArrowLeft' && b[i - 1]) b[i - 1].focus();
        else if (e.key === 'ArrowRight' && b[i + 1]) b[i + 1].focus();
      });
      el.addEventListener('paste', e => {
        const t = ((e.clipboardData && e.clipboardData.getData('text')) || '').replace(/\D/g, '').slice(0, 6); if (!t) return;
        e.preventDefault(); b.forEach((x, j) => { x.value = t[j] || ''; }); b[Math.min(t.length, 5)].focus();
      });
    });
  }
  const pinVal = root => Array.from(root.querySelectorAll('input')).map(i => i.value).join('');

  let dlg = null, forced = false;
  function ensureDlg() {
    if (dlg) return dlg;
    dlg = document.createElement('dialog'); dlg.id = 'dlg-auth'; dlg.className = 'modal modal-bottom sm:modal-middle';
    dlg.addEventListener('cancel', e => { if (forced) e.preventDefault(); });
    document.body.appendChild(dlg); return dlg;
  }

  function view(mode) {
    const reg = mode === 'daftar', d = ensureDlg();
    d.innerHTML = `
      <div class="modal-box max-w-sm">
        <div class="text-center">
          <h3 class="text-xl font-extrabold">${reg ? 'Buat akun belajar' : 'Masuk ke akun'}</h3>
          <p class="mt-1 text-sm text-base-content/70">${reg ? 'Progres tersimpan di akunmu dan bisa dibuka di HP / browser lain.' : 'Pakai nama panggilan & PIN yang dulu kamu buat.'}</p>
        </div>
        <label class="mt-4 block"><span class="mb-1 block text-xs font-bold text-base-content/70">Nama panggilan</span>
          <input id="au-user" type="text" maxlength="20" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="mis. budi_cpns" class="input input-bordered w-full">
        </label>
        ${pinBoxes('au-pin', 'PIN 6 digit')}
        ${reg ? pinBoxes('au-pin2', 'Ulangi PIN') : ''}
        <p id="au-err" class="mt-3 min-h-5 text-center text-sm font-semibold text-error" role="alert"></p>
        ${reg ? '<p class="mb-3 text-center text-xs text-base-content/60">Ingat PIN-mu. PIN tidak bisa dipulihkan jika lupa.</p>' : ''}
        <button id="au-go" class="btn btn-primary w-full">${reg ? 'Buat akun &amp; mulai' : 'Masuk'}</button>
        <div class="divider my-3 text-xs">atau</div>
        <button id="au-sw" class="btn btn-outline w-full">${reg ? 'Sudah punya akun? Masuk' : 'Belum punya akun? Daftar'}</button>
        <div class="mt-3 text-center">
          <button id="au-skip" class="btn btn-ghost btn-xs text-base-content/60">${forced ? 'Lanjut tanpa akun (data hanya di perangkat ini)' : 'Tutup'}</button>
        </div>
      </div>`;
    const $ = s => d.querySelector(s), err = m => { $('#au-err').textContent = m || ''; };
    const user = $('#au-user'), p1 = $('#au-pin'), p2 = $('#au-pin2'), go = $('#au-go');
    user.addEventListener('input', () => { user.value = user.value.toLowerCase().replace(/[^a-z0-9_]/g, ''); });
    user.addEventListener('keydown', e => { if (e.key === 'Enter') p1.querySelector('input').focus(); });
    wirePin(p1, submit); if (p2) wirePin(p2, submit);
    $('#au-sw').onclick = () => view(reg ? 'masuk' : 'daftar');
    $('#au-skip').onclick = () => { if (forced) wr(GUEST, 1); forced = false; d.close(); };

    async function submit() {
      const u = user.value.trim(), pin = pinVal(p1);
      if (u.length < 3) return err('Nama panggilan minimal 3 karakter (huruf, angka, _).');
      if (pin.length !== 6) return err('PIN harus 6 digit angka.');
      if (reg && pin !== pinVal(p2)) return err('PIN dan ulangi PIN tidak sama.');
      err(''); go.disabled = true; go.classList.add('loading');
      try {
        if (reg) {
          const r = await call({ action: 'register', username: u, pin, data: snapshot() });
          wr(SK, { u, t: r.token }); del(GUEST); forced = false; d.close();
          if (window.toast) window.toast('Akun dibuat. Progres otomatis tersimpan.');
          if (typeof window.route === 'function' && !document.documentElement.classList.contains('in-exam')) window.route();
        } else {
          const r = await call({ action: 'login', username: u, pin });
          const m = merge(r.data, snapshot());
          KEYS.forEach(k => wr(k, m[k]));
          wr(SK, { u, t: r.token }); del(GUEST); wr('cpns_dirty', 1);
          await push(false);
          location.reload();
        }
      } catch (e) { err(e.message); }
      go.disabled = false; go.classList.remove('loading');
    }
    go.onclick = submit;
    if (!d.open) d.showModal();
    setTimeout(() => user.focus(), 50);
  }

  function open(mode) { forced = false; view(mode || 'daftar'); }
  async function logout() {
    const ok = window.ask ? await window.ask({ title: 'Keluar dari akun?', text: 'Progres sudah tersimpan di akunmu. Data di perangkat ini akan dibersihkan; masuk lagi untuk memulihkannya.', ok: 'Keluar', danger: true }) : true;
    if (!ok) return;
    clearTimeout(timer); await push(false);
    if (sess() && rd('cpns_dirty')) { if (window.toast) window.toast('Gagal menyimpan ke server. Coba lagi saat online.'); return; }
    KEYS.forEach(del); del(SK); del(GUEST); del('cpns_dirty'); location.reload();
  }
  function menuHTML() {
    if (!HAS_SERVER) return '';
    const s = sess();
    return s
      ? `<div class="mb-3 flex items-center justify-between gap-2 rounded-xl border border-base-300 px-3 py-2 text-sm"><span>Akun: <b>${esc(s.u)}</b></span><button class="btn btn-ghost btn-xs text-error" onclick="Auth.logout()">Keluar</button></div>`
      : `<div class="mb-3 flex items-center justify-between gap-2 rounded-xl border border-base-300 px-3 py-2 text-sm"><span>Belum masuk akun</span><button class="btn btn-primary btn-xs" onclick="Auth.open('masuk')">Masuk / Daftar</button></div>`;
  }

  function openBackup(d) {
    d.innerHTML = `
      <div class="modal-box max-w-sm">
        <h3 class="text-center text-lg font-extrabold">Pindahkan progres</h3>
        <p class="mt-1 text-center text-sm text-base-content/70">Progres tersimpan di perangkat ini. Untuk pindah HP atau browser, salin kode di sini lalu tempel di sana.</p>
        <button id="bk-copy" class="btn btn-primary mt-4 w-full">Salin kode progres</button>
        <textarea id="bk-out" readonly rows="3" class="textarea textarea-bordered mt-2 hidden w-full text-xs" aria-label="Kode progres"></textarea>
        <div class="divider my-3 text-xs">atau pulihkan</div>
        <textarea id="bk-in" rows="3" placeholder="Tempel kode progres dari perangkat lama…" class="textarea textarea-bordered w-full text-xs"></textarea>
        <p id="bk-msg" class="mt-2 min-h-5 text-center text-sm font-semibold text-error" role="alert"></p>
        <button id="bk-load" class="btn btn-outline w-full">Pulihkan progres</button>
        <button id="bk-close" class="btn btn-ghost mt-1 w-full">Tutup</button>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    const q = s => d.querySelector(s), msg = (t, ok) => { const m = q('#bk-msg'); m.textContent = t || ''; m.className = 'mt-2 min-h-5 text-center text-sm font-semibold ' + (ok ? 'text-success' : 'text-error'); };
    q('#bk-close').onclick = () => d.close();
    q('#bk-copy').onclick = async () => {
      const code = await toCode(), o = q('#bk-out'); o.value = code; o.classList.remove('hidden'); o.select();
      try { await navigator.clipboard.writeText(code); msg('Kode disalin. Tempel di perangkat baru.', true); } catch (e) { msg('Tekan lama pada kotak lalu pilih Salin.', true); }
    };
    q('#bk-load').onclick = async () => {
      try {
        const inc = await fromCode(q('#bk-in').value), m = merge(inc, snapshot());
        KEYS.forEach(k => wr(k, m[k])); msg('Berhasil. Memuat ulang…', true); setTimeout(() => location.reload(), 700);
      } catch (e) { msg(e.message || 'Kode tidak valid.'); }
    };
    d.showModal();
  }

  /* lembar profil: dibuka dari tab Profil (paling kanan) */
  function openProfile() {
    const u = (sess() || {}).u, dirty = !!rd('cpns_dirty');
    let d = document.getElementById('dlg-profile');
    if (!d) { d = document.createElement('dialog'); d.id = 'dlg-profile'; d.className = 'modal modal-bottom sm:modal-middle'; document.body.appendChild(d); }
    if (!HAS_SERVER) return openBackup(d);
    d.innerHTML = `
      <div class="modal-box max-w-sm text-center">
        <div class="mx-auto grid h-16 w-16 place-items-center rounded-full ${u ? 'bg-primary text-white' : 'bg-base-200 text-base-content/50'} text-2xl font-black">${u ? esc(u[0].toUpperCase()) : '?'}</div>
        <h3 class="mt-3 text-lg font-extrabold">${u ? esc(u) : 'Belum masuk akun'}</h3>
        <p class="mt-1 text-sm text-base-content/70">${u
          ? (dirty ? 'Ada progres yang menunggu tersinkron. Akan terkirim otomatis saat online.' : 'Progres belajarmu tersimpan otomatis di akun ini.')
          : 'Progres hanya tersimpan di perangkat ini. Masuk agar bisa dibuka di HP atau browser lain.'}</p>
        <div class="mt-5 flex flex-col gap-2">
          ${u
            ? '<button id="pf-out" class="btn btn-outline btn-error w-full">Keluar dari akun</button>'
            : '<button id="pf-in" class="btn btn-primary w-full">Masuk</button><button id="pf-reg" class="btn btn-outline w-full">Daftar akun baru</button>'}
          <button id="pf-close" class="btn btn-ghost w-full">Tutup</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    const q = s => d.querySelector(s);
    q('#pf-close').onclick = () => d.close();
    if (q('#pf-out')) q('#pf-out').onclick = () => { d.close(); logout(); };
    if (q('#pf-in')) q('#pf-in').onclick = () => { d.close(); open('masuk'); };
    if (q('#pf-reg')) q('#pf-reg').onclick = () => { d.close(); open('daftar'); };
    d.showModal();
  }

  window.Auth = { hasServer: HAS_SERVER, _toCode: toCode, _fromCode: fromCode, touch, open, openProfile, logout, menuHTML, user: () => (sess() || {}).u || null };

  /* gerbang awal: tampil bila belum login dan belum memilih "tanpa akun" */
  if (HAS_SERVER && !sess() && !rd(GUEST)) {
    const start = () => { forced = true; view('daftar'); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  }
})();
