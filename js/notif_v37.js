/* v37 — Pengingat belajar TIU & TWK (notifikasi). Dimuat setelah app.js.
   Cara kerja: izin diminta lewat tombol; jadwal dicek berdasarkan jam sebenarnya selama web/PWA terbuka
   (tab terbuka atau aplikasi terpasang masih berjalan). Web statis tanpa server tidak bisa mengirim notifikasi saat browser ditutup total. */
(function () {
  'use strict';
  var KEY = 'cpns_notif_v1', INTERVALS = [5, 10, 15, 30, 60];
  var supported = ('Notification' in window);
  function load() { try { return Object.assign({ on: false, mins: 10, asked: 0, next: 0, n: 0 }, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return { on: false, mins: 10, asked: 0, next: 0, n: 0 }; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* abaikan */ } }
  var S = load(), timer = null;
  function plain(h) { var d = document.createElement('div'); d.innerHTML = String(h || ''); return (d.textContent || '').replace(/\s+/g, ' ').trim(); }

  /* ---------- isi pesan: merotasi TIU, TWK, SKB (sesuai target profil), & Planning ---------- */
  function readJson(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function buildMsg() {
    var tgt = readJson('cpns_target_v1') || {};
    var plan = readJson('cpns_plan_v1');
    var slot = S.n % 4;
    if (slot === 3 && plan && plan.days) {
      return {
        title: 'Cek jadwal Planning ' + plan.days + ' hari! 📅',
        body: 'Pastikan target belajar & tryout adaptif hari ini tuntas agar nilai tembus 500++.',
        url: '#/planning',
        grp: 'PLAN'
      };
    }
    var grp = slot === 0 ? 'TIU' : slot === 1 ? 'TWK' : 'SKB';
    var skbCat = tgt.bucket ? String(tgt.bucket).replace(/^SKB_/, '') : '';
    var topics = (window.MATERI || []).filter(function (t) {
      if (t.hidden || !t.tips || !t.tips.length) return false;
      if (t.group !== grp) return false;
      return grp !== 'SKB' || !skbCat || t.skbCategory === skbCat;
    });
    if (!topics.length && grp === 'SKB') {
      topics = (window.MATERI || []).filter(function (t) { return !t.hidden && t.group === 'SKB' && t.tips && t.tips.length; });
    }
    var t = topics.length ? topics[Math.floor(Math.random() * topics.length)] : null;
    var tip = t ? plain(t.tips[Math.floor(Math.random() * t.tips.length)]) : '';
    if (tip.length > 130) tip = tip.slice(0, 127).replace(/\s+\S*$/, '') + '…';
    var title = grp === 'TIU' ? 'AYO belajar rumus TIU! 🧮'
      : grp === 'TWK' ? 'AYO belajar TWK HOTS! 🇮🇩'
      : 'AYO kuasai SKB ' + (skbCat || 'Formasi') + '! 🎯';
    var fallbackUrl = grp === 'SKB' ? (tgt.bucket ? '#/skb/' + tgt.bucket : '#/skb') : '#/';
    return {
      title: title,
      body: tip ? (t.title + ': ' + tip) : 'Luangkan beberapa menit untuk latihan ' + grp + ' menuju skor 500++.',
      url: t ? '#/materi/' + t.id : fallbackUrl,
      grp: grp
    };
  }

  /* ---------- tampil ---------- */
  function toast(m) {
    var old = document.getElementById('ntf-toast'); if (old) old.remove();
    var el = document.createElement('div'); el.id = 'ntf-toast'; el.className = 'ntf-toast'; el.setAttribute('role', 'status');
    el.innerHTML = '<div class="ntf-tt"></div><div class="ntf-tb"></div><div class="ntf-ta"><button type="button" class="ntf-go">Belajar sekarang</button><button type="button" class="ntf-x">Tutup</button></div>';
    el.querySelector('.ntf-tt').textContent = m.title; el.querySelector('.ntf-tb').textContent = m.body;
    el.querySelector('.ntf-x').onclick = function () { el.remove(); };
    el.querySelector('.ntf-go').onclick = function () { el.remove(); location.hash = m.url; };
    document.body.appendChild(el); setTimeout(function () { if (el.parentNode) el.remove(); }, 15000);
  }
  function system(m) {
    var opt = { body: m.body, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png', tag: 'cpns-belajar', renotify: true, data: { url: m.url } };
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(function (reg) { return reg.showNotification(m.title, opt); }).catch(function () { try { new Notification(m.title, opt); } catch (e) { /* abaikan */ } });
    } else { try { new Notification(m.title, opt); } catch (e) { /* abaikan */ } }
  }
  function fire() {
    var m = buildMsg(); S.n++; S.next = Date.now() + S.mins * 60000; save(S);
    if (document.visibilityState === 'visible') toast(m);
    else if (supported && Notification.permission === 'granted') system(m);
  }
  function tick() {
    if (!S.on) return;
    if (supported && Notification.permission !== 'granted') return;
    if (!S.next) { S.next = Date.now() + S.mins * 60000; save(S); return; }
    if (Date.now() >= S.next) fire();
  }
  function start() { stop(); if (!S.on) return; if (!S.next || S.next < Date.now()) { S.next = Date.now() + S.mins * 60000; save(S); } timer = setInterval(tick, 15000); }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') tick(); });

  /* ---------- dialog izin & pengaturan ---------- */
  function close() { var d = document.getElementById('ntf-dlg'); if (d) d.remove(); }
  function open(first) {
    close();
    var perm = supported ? Notification.permission : 'unsupported';
    var el = document.createElement('div'); el.id = 'ntf-dlg'; el.className = 'ntf-ov'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    var chips = INTERVALS.map(function (m) { return '<button type="button" class="ntf-chip' + (m === S.mins ? ' on' : '') + '" data-m="' + m + '">' + m + ' menit</button>'; }).join('');
    var warn = perm === 'denied' ? '<p class="ntf-warn">Notifikasi sedang diblokir di browser. Buka pengaturan situs (ikon gembok di address bar) dan izinkan Notifikasi, lalu buka dialog ini lagi.</p>'
      : perm === 'unsupported' ? '<p class="ntf-warn">Browser ini belum mendukung notifikasi web. Di iPhone, pasang web ke Layar Utama dulu (iOS 16.4 ke atas).</p>' : '';
    el.innerHTML = '<div class="ntf-box"><div class="ntf-ic">🔔</div><h2 class="ntf-h">Pengingat belajar SKD, SKB &amp; Planning</h2>' +
      '<p class="ntf-p">Mau diingatkan belajar? Notifikasi bergantian untuk <b>TIU</b>, <b>TWK</b>, <b>SKB bidang targetmu</b>, dan <b>jadwal Planning</b> akan muncul otomatis. Pilih jarak waktunya:</p>' +
      '<div class="ntf-chips">' + chips + '</div>' + warn +
      '<p class="ntf-note">Pengingat berjalan selama web/aplikasi ini masih terbuka di browser. Jika browser ditutup total, pengingat berhenti.</p>' +
      '<div class="ntf-act"><button type="button" class="ntf-btn ntf-main" id="ntf-on"' + (perm === 'unsupported' || perm === 'denied' ? ' disabled' : '') + '>' + (S.on ? 'Simpan' : 'Aktifkan') + '</button>' +
      (S.on ? '<button type="button" class="ntf-btn ntf-off" id="ntf-off">Matikan</button>' : '') +
      '<button type="button" class="ntf-btn ntf-ghost" id="ntf-later">' + (first && !S.on ? 'Nanti saja' : 'Tutup') + '</button></div></div>';
    document.body.appendChild(el);
    var sel = S.mins;
    Array.prototype.forEach.call(el.querySelectorAll('.ntf-chip'), function (b) { b.onclick = function () { sel = +b.getAttribute('data-m'); Array.prototype.forEach.call(el.querySelectorAll('.ntf-chip'), function (x) { x.classList.toggle('on', x === b); }); }; });
    el.querySelector('#ntf-later').onclick = function () { if (!S.asked) { S.asked = Date.now(); save(S); } close(); };
    var off = el.querySelector('#ntf-off'); if (off) off.onclick = function () { S.on = false; S.next = 0; save(S); stop(); close(); toast({ title: 'Pengingat dimatikan', body: 'Kamu bisa mengaktifkannya lagi dari menu.', url: '#/' }); };
    el.querySelector('#ntf-on').onclick = function () {
      S.asked = Date.now(); S.mins = sel;
      var done = function (p) {
        if (p === 'granted') { S.on = true; S.next = Date.now() + S.mins * 60000; save(S); start(); close(); toast({ title: 'Pengingat aktif ✅', body: 'Kamu akan diingatkan belajar TIU & TWK setiap ' + S.mins + ' menit.', url: '#/' }); }
        else { save(S); open(false); }
      };
      var r = Notification.requestPermission(function (p) { done(p); });
      if (r && r.then) r.then(done);
    };
  }
  window.CPNSNotif = { open: function () { open(false); } };

  /* ---------- pasang ---------- */
  function init() {
    if (S.on && supported && Notification.permission === 'granted') start(); else if (S.on) { S.on = false; save(S); }
    if (!S.asked && supported) setTimeout(function () { if (!document.querySelector('#lesson, .lx-overlay, dialog[open]')) open(true); }, 3500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
