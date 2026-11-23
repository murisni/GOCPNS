/* Akun sederhana (nama panggilan + PIN 6 digit) & sinkron progres.
   Progres tetap ditulis ke localStorage seperti biasa (app tetap jalan offline);
   salinannya dikirim ke server (api/sync.php) agar bisa dibuka di browser / HP lain. */
(function () {
  const API = window.CPNS_API || '', HAS_SERVER = !!API && !/GANTI/.test(API), SK = 'cpns_session_v1', GUEST = 'cpns_guest_v1';
  const KEYS = ['cpns_lesson_v1', 'cpns_seen_qids_v2', 'cpns_results_v3',
    'cpns_review_v1', 'cpns_plan_v1', 'cpns_plan_q_v1', 'cpns_target_v1', 'cpns_exam_history_v1'];
  const dict = value => value && typeof value === 'object' && !Array.isArray(value);
  const records = value => Object.entries(value || {}).filter(([key]) => !['__proto__', 'constructor', 'prototype'].includes(key));
  const rd = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };
  const wr = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } };
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
    const L = Object.create(null);
    for (const source of [a, b]) {
      for (const [id, item] of records(source.cpns_lesson_v1)) {
        if (!dict(item)) continue;
        const e = L[id] || (L[id] = { done: Object.create(null), at: 0 });
        for (const [i, done] of records(item.done)) if (done) e.done[i] = done;
        e.at = Math.max(e.at, item.at || 0);
        for (const [i, next] of records(item.part)) {
          if (!dict(next)) continue;
          const part = e.part || (e.part = Object.create(null));
          const prev = part[i];
          if (!prev || next.solved > prev.solved || (next.solved === prev.solved && (next.at || 0) >= (prev.at || 0))) part[i] = next;
        }
      }
    }
    Object.values(L).forEach(e => {
      if (e.part) Object.keys(e.done).forEach(i => delete e.part[i]);
    });

    const R = Object.create(null), review = Object.create(null);
    for (const source of [a, b]) {
      for (const [key, next] of records(source.cpns_results_v3)) {
        if (!dict(next) || !dict(next.best)) continue;
        const last = dict(next.last) ? next.last : next.best;
        const prev = R[key];
        if (!prev) { R[key] = { ...next, last }; continue; }
        const newer = (last.date || 0) >= (prev.last.date || 0);
        const best = next.best.score > prev.best.score || (next.best.score === prev.best.score && newer) ? next.best : prev.best;
        R[key] = { attempts: Math.max(next.attempts || 0, prev.attempts || 0), best, last: newer ? last : prev.last };
      }
      for (const [bucket, next] of records(source.cpns_review_v1)) {
        if (!/^(?:SKD_(TWK|TIU|TKP)|SKB_[A-Z0-9_]+)$/.test(bucket) || !dict(next) || !Array.isArray(next.issues)) continue;
        const prev = review[bucket] || { at: 0, issues: [], cleared: {} };
        const cleared = Object.create(null);
        for (const values of [prev.cleared, next.cleared]) {
          for (const [key, time] of records(values)) if (Number.isFinite(time)) cleared[key] = Math.max(cleared[key] || 0, time);
        }
        const issues = new Map();
        for (const record of [prev, next]) {
          for (const item of record.issues) {
            if (!dict(item) || item.bucket !== bucket || typeof item.id !== 'string' || typeof item.sub !== 'string'
              || !Number.isFinite(item.score) || !Number.isFinite(item.time)) continue;
            const at = item.at || record.at || 1;
            const key = JSON.stringify([item.sub, item.fam || '']);
            if ((cleared[key] || 0) >= at) continue;
            if (!issues.has(item.id) || issues.get(item.id).at <= at) issues.set(item.id, { ...item, at });
          }
        }
        review[bucket] = { at: Math.max(prev.at, next.at || 0), cleared,
          issues: [...issues.values()].sort((x, y) => y.at - x.at).slice(0, 120) };
      }
    }

    const sessions = new Map();
    for (const source of [a, b]) {
      if (!Array.isArray(source.cpns_exam_history_v1)) continue;
      for (const item of source.cpns_exam_history_v1) {
        if (!dict(item) || typeof item.id !== 'string' || !/^(?:SKD_FULL|SKB_[A-Z0-9_]+)$/.test(item.group)
          || !Number.isFinite(item.date) || item.date <= 0 || item.date > 8.64e15 || !Number.isFinite(item.max) || item.max <= 0
          || !Number.isFinite(item.score) || item.score < 0 || item.score > item.max) continue;
        const parts = Object.fromEntries(records(item.parts).filter(([name, value]) =>
          ['TWK', 'TIU', 'TKP', 'Verbal', 'Numerik', 'Figural'].includes(name) && dict(value)
          && Number.isFinite(value.score) && Number.isFinite(value.max)));
        sessions.set(item.id, { id: item.id, date: item.date, group: item.group, score: item.score,
          max: item.max, parts, fresh: Number.isFinite(item.fresh) ? item.fresh : 0,
          lessons: Number.isFinite(item.lessons) ? item.lessons : 0, assisted: !!item.assisted });
      }
    }

    const ap = a.cpns_plan_v1, bp = b.cpns_plan_v1;
    const plan = (ap?.updated || ap?.at || 0) > (bp?.updated || bp?.at || 0) ? ap : bp || ap || null;
    const aTarget = a.cpns_target_v1, bTarget = b.cpns_target_v1;
    const target = (aTarget?.at || 0) > (bTarget?.at || 0) ? aTarget : bTarget || aTarget || null;
    const sets = plan && !plan.reset ? [a.cpns_plan_q_v1, b.cpns_plan_q_v1].filter(p => p && p.at === plan.at) : [];
    return {
      cpns_lesson_v1: L, cpns_results_v3: R, cpns_review_v1: review,
      cpns_seen_qids_v2: Array.from(new Set([a.cpns_seen_qids_v2, b.cpns_seen_qids_v2]
        .flatMap(ids => Array.isArray(ids) ? ids.filter(id => typeof id === 'string') : []))),
      cpns_exam_history_v1: [...sessions.values()].sort((x, y) => x.date - y.date || x.id.localeCompare(y.id)).slice(-160),
      cpns_target_v1: target, cpns_plan_v1: plan, cpns_plan_q_v1: sets.length ? { at: plan.at, sets: Object.assign({}, ...sets.map(p => p.sets)) } : null
    };
  }

  function restore(data) {
    const before = snapshot(), merged = merge(data, before), written = [];
    for (const key of KEYS) {
      if (!wr(key, merged[key])) {
        for (const restored of written) del(restored);
        for (const restored of written) if (Object.hasOwn(before, restored)) wr(restored, before[restored]);
        throw new Error('Penyimpanan perangkat penuh atau diblokir. Simpan kode dan coba lagi.');
      }
      written.push(key);
    }
  }

  /* ---------- kirim ke server (ditunda agar hemat) ---------- */
  let timer = null, pending = null, revision = 0;
  async function push(keepalive) {
    if (pending) {
      await pending;
      if (keepalive || !rd('cpns_dirty')) return null;
      return push(false);
    }
    const s = sess(); if (!s) return null;
    const sent = revision;
    pending = (async () => {
      try {
        const r = await fetch(API, { method: 'POST', keepalive: !!keepalive, headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'push', username: s.u, token: s.t, data: snapshot() }) });
        if (r.ok && sent === revision) del('cpns_dirty');
        else if (!r.ok) wr('cpns_dirty', 1);
        return r.ok;
      } catch (e) { wr('cpns_dirty', 1); return false; }
    })();
    try { return await pending; } finally { pending = null; }
  }
  function touch(k) {
    if (!sess() || KEYS.indexOf(k) < 0) return;
    revision++;
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
    if (window.CompressionStream && window.DecompressionStream) {
      try {
        const buf = new Uint8Array(await new Response(new Blob([json]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer());
        return 'CPNS1.' + b64(buf);
      } catch (e) { /* Browser lama dapat memakai format tanpa kompresi. */ }
    }
    return 'CPNS0.' + b64(new TextEncoder().encode(json));
  }
  async function fromCode(code) {
    const m = /^CPNS([01])\.([A-Za-z0-9_-]+)$/.exec(String(code).replace(/\s+/g, ''));
    if (!m) throw new Error('Kode tidak valid. Salin kode lengkap dari perangkat lama.');
    if (m[1] === '1' && !window.DecompressionStream) throw new Error('Browser ini belum mendukung kode terkompresi. Coba kode ini di browser yang lebih baru.');
    const bytes = unb64(m[2]);
    let u8 = bytes;
    if (m[1] === '1') {
      try {
        u8 = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
      } catch (e) { throw new Error('Kode terkompresi rusak atau belum didukung browser ini. Periksa kode atau gunakan browser yang lebih baru.'); }
    }
    let data;
    try { data = JSON.parse(new TextDecoder().decode(u8)); }
    catch (e) { throw new Error('Kode tidak valid. Salin kode lengkap dari perangkat lama.'); }
    if (!dict(data) || (Object.keys(data).length && !KEYS.some(k => Object.hasOwn(data, k)))) throw new Error('Kode ini tidak berisi data progres GOCPNS.');
    return Object.fromEntries(KEYS.filter(k => Object.hasOwn(data, k)).map(k => [k, data[k]]));
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
          restore(r.data);
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
    clearTimeout(timer);
    if (await push(false) !== true || rd('cpns_dirty')) { if (window.toast) window.toast('Gagal menyimpan ke server. Coba lagi saat online.'); return; }
    KEYS.forEach(del); del(SK); del(GUEST); del('cpns_dirty'); location.reload();
  }
  function menuHTML() {
    if (!HAS_SERVER) return '';
    const s = sess();
    return s
      ? `<div class="mb-3 flex items-center justify-between gap-2 rounded-xl border border-base-300 px-3 py-2 text-sm"><span>Akun: <b>${esc(s.u)}</b></span><button class="btn btn-ghost btn-xs text-error" onclick="Auth.logout()">Keluar</button></div>`
      : `<div class="mb-3 flex items-center justify-between gap-2 rounded-xl border border-base-300 px-3 py-2 text-sm"><span>Belum masuk akun</span><button class="btn btn-primary btn-xs" onclick="Auth.open('masuk')">Masuk / Daftar</button></div>`;
  }

  function openReset(d, back) {
    d.setAttribute('aria-labelledby', 'profile-reset-title');
    d.innerHTML = `
      <div class="modal-box max-w-sm">
        <h3 id="profile-reset-title" class="text-center text-lg font-extrabold text-error">Reset progres belajar</h3>
        <p class="mt-1 text-center text-sm text-base-content/70">Seluruh progres materi, soal yang sudah dikerjakan, dan hasil latihan akan dikosongkan${sess() ? ' (termasuk di akunmu)' : ''}. Sebelum itu, kode cadangan progres lamamu dibuat di bawah. Simpan kode ini agar progres bisa dikembalikan kapan saja lewat "Pulihkan progres".</p>
        <textarea id="rs-out" readonly rows="4" class="textarea textarea-bordered mt-3 w-full text-xs" aria-label="Kode cadangan progres lama">Membuat kode…</textarea>
        <button id="rs-copy" class="btn btn-primary mt-2 w-full" disabled>Salin kode cadangan</button>
        <p id="rs-msg" class="mt-2 min-h-5 text-center text-sm font-semibold text-error" role="alert"></p>
        <button id="rs-go" class="btn btn-error w-full" disabled>Reset sekarang</button>
        <button id="rs-back" class="btn btn-ghost mt-1 w-full">Batal</button>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    const q = s => d.querySelector(s), msg = (t, ok) => { const m = q('#rs-msg'); m.textContent = t || ''; m.className = 'mt-2 min-h-5 text-center text-sm font-semibold ' + (ok ? 'text-success' : 'text-error'); };
    let code = '', copied = false;
    q('#rs-back').onclick = () => back();
    toCode().then(c => {
      code = c; q('#rs-out').value = c; q('#rs-copy').disabled = false;
    }).catch(() => msg('Gagal membuat kode cadangan. Reset dibatalkan.'));
    q('#rs-copy').onclick = async () => {
      const o = q('#rs-out'); o.select();
      try {
        await navigator.clipboard.writeText(code);
        msg('Kode disalin. Simpan di catatan pribadimu.', true);
      } catch (e) {
        msg('Clipboard tidak tersedia. Salin manual kode yang dipilih sebelum mereset.', true);
      }
      copied = true; q('#rs-go').disabled = false;
    };
    q('#rs-go').onclick = async () => {
      if (!copied || !code) return;
      q('#rs-go').disabled = true; q('#rs-go').classList.add('loading');
      clearTimeout(timer);
      KEYS.filter(key => key !== 'cpns_target_v1').forEach(del); del('cpns_dirty');
      if (sess()) { wr('cpns_dirty', 1); await push(false); }
      location.reload();
    };
    if (!d.open) d.showModal();
  }

  function openBackup(d) {
    d.setAttribute('aria-labelledby', 'profile-backup-title');
    d.innerHTML = `
      <div class="modal-box max-w-sm">
        <h3 id="profile-backup-title" class="text-center text-lg font-extrabold">Pindahkan progres</h3>
        <p class="mt-1 text-center text-sm text-base-content/70">Kode ini membawa progres materi, hasil latihan, daftar kelemahan, riwayat grafik, profil, dan Planning. Salin di perangkat lama lalu tempel di perangkat baru.</p>
        <button id="bk-copy" class="btn btn-primary mt-4 w-full">Salin kode progres</button>
        <textarea id="bk-out" readonly rows="3" class="textarea textarea-bordered mt-2 hidden w-full text-xs" aria-label="Kode progres"></textarea>
        <div class="divider my-3 text-xs">atau pulihkan</div>
        <textarea id="bk-in" rows="3" placeholder="Tempel kode progres dari perangkat lama…" class="textarea textarea-bordered w-full text-xs"></textarea>
        <p id="bk-msg" class="mt-2 min-h-5 text-center text-sm font-semibold text-error" role="alert"></p>
        <button id="bk-load" class="btn btn-outline w-full">Pulihkan progres</button>
        <div class="divider my-3 text-xs">atau mulai dari awal</div>
        <button id="bk-reset" class="btn btn-outline btn-error w-full">Reset progres</button>
        <button id="bk-close" class="btn btn-ghost mt-1 w-full">Kembali ke Profil</button>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    const q = s => d.querySelector(s), msg = (t, ok) => { const m = q('#bk-msg'); m.textContent = t || ''; m.className = 'mt-2 min-h-5 text-center text-sm font-semibold ' + (ok ? 'text-success' : 'text-error'); };
    q('#bk-close').onclick = () => openProfile(d.dataset.scope);
    q('#bk-reset').onclick = () => openReset(d, () => openBackup(d));
    q('#bk-copy').onclick = async () => {
      try {
        const code = await toCode(), o = q('#bk-out');
        o.value = code; o.classList.remove('hidden'); o.select();
        if (navigator.clipboard) {
          try { await navigator.clipboard.writeText(code); msg('Kode disalin. Tempel di perangkat baru.', true); return; } catch (e) {}
        }
        msg('Salin kode yang dipilih, lalu tempel di perangkat baru.', true);
      } catch (e) { msg('Gagal membuat kode progres.'); }
    };
    q('#bk-load').onclick = async () => {
      const load = q('#bk-load');
      load.disabled = true;
      try {
        restore(await fromCode(q('#bk-in').value));
        const account = sess();
        if (account) touch('cpns_plan_v1');
        msg('Progres berhasil dipulihkan di perangkat ini. Memuat ulang…', true);
        setTimeout(() => location.reload(), 700);
      } catch (e) { msg(e.message || 'Kode tidak valid.'); load.disabled = false; }
    };
    if (!d.open) d.showModal();
  }

  /* lembar profil: dibuka dari tab Profil (paling kanan) */
  function openProfile(scope = 'SKD_FULL', notice = '') {
    const u = (sess() || {}).u, dirty = !!rd('cpns_dirty');
    let d = document.getElementById('dlg-profile');
    if (!d) { d = document.createElement('dialog'); d.id = 'dlg-profile'; d.className = 'modal modal-bottom sm:modal-middle'; document.body.appendChild(d); }
    d.dataset.scope = scope;
    d.setAttribute('aria-labelledby', 'profile-display-name');
    const preferred = window.App?.targetPreference() || {};
    const name = preferred.name || u || 'Profil belajar';
    const initials = Array.from(name.trim().split(/\s+/).slice(0, 2), part => Array.from(part)[0] || '').join('').toLocaleUpperCase('id');
    const field = window.App?.profileFieldName(preferred.bucket);
    d.innerHTML = `
      <div class="modal-box pf-modal">
        <header class="pf-hero">
          <div class="pf-avatar" aria-hidden="true">${esc(initials)}</div>
          <div class="pf-identity">
            <h2 id="profile-display-name">${esc(name)}</h2>
            <dl class="pf-target-card">
              <div><dt>Jabatan yang diincar</dt><dd>${esc(preferred.role || 'Belum ditentukan')}</dd></div>
              <div><dt>Bidang latihan SKB</dt><dd>${esc(field || 'Belum dipilih')}</dd></div>
            </dl>
          </div>
          <button type="button" id="pf-close" class="pf-close" aria-label="Tutup profil">×</button>
          <button type="button" id="pf-edit" class="btn btn-sm pf-edit">Edit profil</button>
        </header>
        ${notice ? `<p class="pf-notice" role="status">${esc(notice)}</p>` : ''}
        <section id="profile-progress" class="pf-content" aria-label="Grafik dan kelemahan">${window.App?.profileProgressHTML(scope) || ''}</section>
        <footer class="pf-footer">
          <button type="button" id="pf-backup" class="btn btn-outline btn-sm">Pindahkan progres</button>
          ${HAS_SERVER ? (u
            ? '<button id="pf-out" class="btn btn-ghost btn-sm">Keluar dari akun</button>'
            : '<button id="pf-in" class="btn btn-ghost btn-sm">Masuk</button><button id="pf-reg" class="btn btn-ghost btn-sm">Daftar</button>') : ''}
          ${HAS_SERVER && u ? `<p>${dirty ? 'Progres menunggu sinkronisasi.' : 'Progres tersimpan di akun ini.'}</p>` : ''}
        </footer>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    const q = s => d.querySelector(s);
    q('#pf-close').onclick = () => d.close();
    q('#pf-edit').onclick = () => {
      d.setAttribute('aria-labelledby', 'profile-edit-title');
      d.innerHTML = `<div class="modal-box pf-edit-modal"><h2 id="profile-edit-title">Edit profil</h2>
        ${window.App?.targetEditorHTML() || ''}</div>
        <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
      d.querySelector('#target-name')?.focus();
    };
    q('#pf-backup').onclick = () => openBackup(d);
    if (q('#pf-out')) q('#pf-out').onclick = () => { d.close(); logout(); };
    if (q('#pf-in')) q('#pf-in').onclick = () => { d.close(); open('masuk'); };
    if (q('#pf-reg')) q('#pf-reg').onclick = () => { d.close(); open('daftar'); };
    if (!d.open) d.showModal();
  }

  window.Auth = { hasServer: HAS_SERVER, _toCode: toCode, _fromCode: fromCode, touch, open, openProfile, logout, menuHTML, user: () => (sess() || {}).u || null };

  /* gerbang awal: tampil bila belum login dan belum memilih "tanpa akun" */
  if (HAS_SERVER && !sess() && !rd(GUEST)) {
    const start = () => { forced = true; view('daftar'); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  }
})();
