/* Service worker CAT CPNS — agar bisa dipasang & dibuka offline.
   Strategi: jaringan dulu (selalu dapat versi terbaru), cadangan dari cache saat offline.
   Naikkan VERSI jika menambah/mengganti file agar cache lama dibersihkan. */
const VERSI = 'cat-cpns-v39';
const INTI = [
  './', './index.html', './manifest.webmanifest',
  './css/app.css',
  './js/db-core.js', './js/materi.js', './js/materi_extra.js', './js/materi_extra2.js', './js/materi_extra3.js', './js/materi_fix_v23.js', './js/materi_uud_pasal_v23.js', './db/skd/db_skd_tkp_v4.js', './db/skd/db_skd_tkp_v5.js', './db/skd/db_skd_tkp_v6.js', './db/skd/db_skd_twk_v4.js', './db/skb/db_skb_prakom_v4.js', './js/patches_v21.js', './js/patches_v24.js', './js/materi_tiu_v25.js', './js/materi_tiu_studi_v27.js', './js/patches_v25.js', './js/patches_v28.js', './db/skd/db_skd_fix_v30.js', './js/patches_v30.js', './db/skd/db_skd_tiu_v4.js', './db/skd/db_skd_tiu_figural.js', './db/skb/db_skb_prakom_v3.js', './js/materi_v31_core.js', './js/materi_twk_v31.js', './js/materi_twk_v31b.js', './js/materi_tiu_v31.js', './js/materi_tiu_sulit_v31.js', './db/skd/db_skd_twk_v31.js', './db/skd/db_skd_tiu_v31a.js', './db/skd/db_skd_tiu_v31b.js', './db/skd/db_skd_tkp_v7.js', './js/materi_tiu_v32.js', './db/skd/db_skd_tiu_v32.js', './db/skd/db_skd_twk_v32.js', './js/patches_v35.js', './js/materi_skb_hukum_v35.js', './js/materi_skb_keuangan_v35.js', './js/materi_skb_pendidikan_v35.js', './js/materi_skb_kesehatan_v35.js', './db/skb/db_skb_hukum_v35.js', './db/skb/db_skb_keuangan_v35.js', './db/skb/db_skb_pendidikan_v35.js', './db/skb/db_skb_kesehatan_v35.js', './db/skd/db_skd_tiu_v36.js', './db/skd/db_skd_twk_v36.js', './db/skd/db_skd_tkp_v36.js', './js/materi_tiu_v36.js', './js/materi_twk_v36.js', './js/materi_tkp_v36.js', './js/dedupe_v35.js', './js/config.js', './js/auth.js', './js/app.js', './js/notif_v37.js',
  './db/skd/db_skd_twk.js', './db/skd/db_skd_tiu.js', './db/skd/db_skd_tkp.js',
  './db/skd/db_skd_twk_v2.js', './db/skd/db_skd_twk_v3.js', './db/skd/db_skd_tiu_v2.js', './db/skd/db_skd_tiu_v3.js', './db/skd/db_skd_tkp_v2.js', './db/skd/db_skd_tkp_v3.js', './db/skb/db_skb_prakom_v2.js',
  './db/skb/db_skb_prakom.js', './db/skb/db_skb_kesehatan.js', './db/skb/db_skb_hukum.js',
  './db/skb/db_skb_keuangan.js', './db/skb/db_skb_pendidikan.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png',
  './img/garuda-pancasila.png', './img/sila-1-bintang.png', './img/sila-2-rantai.png', './img/sila-3-pohon-beringin.png',
  './img/sila-4-kepala-banteng.png', './img/sila-5-padi-kapas.png', './img/struktur-lembaga-negara.png',
  './img/hierarki-peraturan.png', './img/wilayah-laut-indonesia.png', './img/osi-7-layer.png',
  './img/topologi-jaringan.png', './img/arsitektur-spbe.png', './img/triase-igd.png',
  './img/segitiga-epidemiologi.png', './img/transformasi-kesehatan.png', './img/diagram-venn-tiu.png',
  './img/kecepatan-papasan-tiu.png',
  './img/twk-amandemen-uud.svg', './img/twk-asta-gatra.svg', './img/twk-bela-negara-nilai.svg', './img/twk-berakhlak.svg', './img/twk-dpr-dpd.svg', './img/twk-hak-presiden.svg', './img/twk-identitas-negara.svg', './img/twk-ideologi-terbuka.svg', './img/twk-jenis-paragraf.svg', './img/twk-kehakiman.svg', './img/twk-komponen-pertahanan.svg', './img/twk-kpk-9-nilai.svg', './img/twk-menuju-proklamasi.svg', './img/twk-mpr-susunan.svg', './img/twk-otda-urusan.svg', './img/twk-pembeda-korupsi.svg', './img/twk-pembukaan-uud.svg', './img/twk-pergerakan-nasional.svg', './img/twk-perjanjian-belanda.svg', './img/twk-perumusan-pancasila.svg', './img/twk-sistem-politik.svg', './img/twk-tonggak-sejarah.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSI).then(c => Promise.all(INTI.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSI).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok) { const salin = res.clone(); caches.open(VERSI).then(c => c.put(req, salin)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});

/* v37: klik notifikasi pengingat belajar -> buka/fokuskan aplikasi ke materi terkait */
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const hash = (e.notification.data && e.notification.data.url) || '#/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) {
      if ('focus' in c) { c.focus(); if ('navigate' in c) { try { c.navigate(new URL(hash, self.registration.scope).href); } catch (x) { /* abaikan */ } } return; }
    }
    return self.clients.openWindow(new URL(hash, self.registration.scope).href);
  }));
});
