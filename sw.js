/* Service worker CAT CPNS — agar bisa dipasang & dibuka offline.
   Strategi: jaringan dulu (selalu dapat versi terbaru), cadangan dari cache saat offline.
   Naikkan VERSI jika menambah/mengganti file agar cache lama dibersihkan. */
const VERSI = 'cat-cpns-v2';
const INTI = [
  './', './index.html', './manifest.webmanifest',
  './css/app.css',
  './js/db-core.js', './js/materi.js', './js/app.js',
  './db/skd/db_skd_twk.js', './db/skd/db_skd_tiu.js', './db/skd/db_skd_tkp.js',
  './db/skb/db_skb_prakom.js', './db/skb/db_skb_kesehatan.js', './db/skb/db_skb_hukum.js',
  './db/skb/db_skb_keuangan.js', './db/skb/db_skb_pendidikan.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'
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
