# Update v38 — Paket soal baru TIU, TWK, TKP

## TIU (+117 soal, db_skd_tiu_v38.js)
- Geometri, statistika, barisan-deret, berhitung cepat, soal cerita (kerja bersama, pipa-bocor, kecepatan rata-rata, persen kenaikan).
- Penalaran logis (modus ponens/tollens, silogisme, kontraposisi, negasi, disjungsi), penalaran analitis (penjadwalan, solusi dijamin tunggal), kecukupan data.
- Seluruh kunci dihitung program dan diverifikasi ulang secara terpisah.

## TWK (+47 soal, db_skd_twk_v38.js)
- Soal berbasis kasus/HOTS: Pancasila, UUD 1945, NKRI, bela negara, integritas, nasionalisme, otonomi daerah, sejarah, bahasa.
- Kunci diperiksa manual; perlu ditinjau ulang terhadap sumber resmi bila ada perubahan regulasi.

## TKP (+66 soal, db_skd_tkp_v38.js)
- Kasus 6 indikator (pelayanan publik, jejaring kerja, sosial budaya, TIK, profesionalisme, anti radikalisme) dengan skor 1–5 pada setiap opsi.
- Panjang opsi sudah diseimbangkan, namun opsi bernilai 5 masih terpanjang pada sekitar 45% soal.

## Teknis
- index.html: skrip js/materi_v38.js ditambahkan setelah materi_gocpns.js (sebelum dedupe_v35.js).
- ID soal v38 diganti ke pola X38xx/X39xx (isi soal tidak berubah).
- sw.js: berkas v38 + materi_v38.js masuk daftar cache, VERSI naik ke cat-cpns-v41.
- Soal lama tidak diubah.

## Penempatan soal
- ID soal baru memakai pola -X38xx/-X39xx, sehingga ditaruh di belakang bank dan isi Paket/Tryout lama tidak bergeser.
- Muncul di: latihan per paket (TWK/TIU/TKP), latihan per topik, dan planning belajar. Tryout Lengkap bertambah dari 15 menjadi 17 paket; soal baru TWK dan TKP masuk di paket-paket terakhir.

## Materi baru (js/materi_v38.js) — 5 topik, 20 bagian
Ditulis orisinal; ebook hanya dipakai untuk memahami alur/jenis soal, tidak ada soal atau penjelasan yang disalin.
- TIU: Penalaran Analitis (penjadwalan & kecukupan data), Numerik Terapan (geometri, bangun ruang, statistika, barisan-deret, soal cerita, berhitung cepat; 19 studi kasus), Logika Bersyarat.
- TWK: Kasus HOTS (netralitas, benturan kepentingan, hilirisasi/Pasal 33, checks and balances, sejarah kunci).
- TKP: Teknik Skor (tangga skor 1–5, kata kunci 6 indikator, kasus baru).
- Setiap bagian terhubung ke keluarga soal v38 (fam), sehingga tombol latihan topik memunculkan soal yang sesuai lebih dulu.
