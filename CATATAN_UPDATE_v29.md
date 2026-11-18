# Update v29

## 1. Soal TKP lebih bervariasi
- Penyebab: 325 dari 569 soal TKP hanya berisi 6 skenario yang diulang (beda judul lokasi & urutan opsi).
- Perbaikan: 319 soal template diganti skenario baru (±53 per aspek: Pelayanan Publik, Jejaring Kerja,
  Sosial Budaya, TIK, Profesionalisme, Anti Radikalisme) dengan topik beragam gaya tes CPNS.
- Soal diganti di slot yang sama (id sama), jadi jumlah paket, isi paket, dan jumlah tryout TIDAK berubah.
  Catatan: soal di paket yang sudah dikerjakan ikut berganti; skor lama tetap tersimpan.
- 6 soal template yang dipertahankan dirapikan (judul "Studi Kasus Situasional" & lokasi tempelan dibuang).
- File baru: db/skd/db_skd_tkp_v6.js

## 2. Beranda: 4 kartu geser
- Kartu "Mulai belajar" kini 4 kartu: TWK, TIU, TKP, SKB. Pindah otomatis tiap 2 detik,
  berhenti saat disentuh/di-hover, bisa digeser manual atau lewat titik indikator.
- Tiap kartu menampilkan topik terakhir yang dipelajari di jalur itu (atau topik berikutnya).
  Kartu SKB menampilkan bidang SKB yang sedang/sudah dikerjakan.

## File yang berubah
js/app.js, css/app.css, src/input.css, index.html, sw.js, db/skd/db_skd_tkp_v6.js
