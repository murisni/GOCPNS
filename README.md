# CAT CPNS — Belajar & Simulasi

Buka `index.html` langsung di browser (tanpa server). 

- `js/materi.js`  → tambah/ubah materi (format dijelaskan di bagian atas file)
- `db/skd`, `db/skb` → bank soal (taruh `db_skd_extra.js` / `db_skb_extra.js` untuk soal tambahan)
- Ubah tampilan: edit `js/app.js` / `index.html` / `tailwind.config.js` (tema warna), lalu `npm install` (sekali) dan `npm run build` untuk membangun `css/app.css`.

## Akun & sinkron progres (opsional)

- Pengguna daftar dengan **nama panggilan + PIN 6 digit**; progres disalin ke server dan bisa dipulihkan lewat tombol *Masuk*.
- Backend: `api/sync.php` (butuh hosting **PHP 7.4+**, tanpa database). Data per akun: `data/u_<nama>.json`, PIN ter-hash.
- Pastikan folder `data/` **bisa ditulis** oleh PHP (chmod 755/775) dan tidak bisa diakses publik (`data/.htaccess` untuk Apache; di Nginx tambahkan `location /data/ { deny all; }`).
- Tanpa server PHP, app tetap berjalan seperti semula (mode "tanpa akun", data di perangkat).
