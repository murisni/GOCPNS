# Update v24 — timpa langsung ke folder project (file yang tidak ada di paket ini tidak diubah)

## 1. Beranda 2 kolom di layar besar
- Layar >= 1024px: kartu "Mulai belajar" + "Progres belajarmu" di kiri, kartu Materi / SKD / SKB di kanan. Mobile & tablet tetap 1 kolom (tidak diubah).
- File: `js/app.js` (renderHome), `css/app.css` (+ `src/input.css` supaya aman bila `npm run build`).

## 2. Audit materi & soal TIU
**Penyebab materi Silogisme tanpa soal:** materi mencari subtopik "Logika Silogisme", sedangkan soalnya berlabel "Verbal - Silogisme" -> 0 soal. Kini cocok (53 soal). Kasus serupa di TWK "Bahasa Negara" (0 -> 33 soal) ikut dibetulkan.

**Penyebab tanda `$$$$$`:** rumus LaTeX di materi tidak pernah dirender, dan sebagian rusak (`\rightarrow` jadi "ightarrow", `\sim` jadi "sim", `\dots` jadi "dots"). Semua `$...$` di materi/soal kini diubah jadi simbol biasa (P → Q, ~P, 45°, 2⁸, ...). Termasuk materi Deret, Perbandingan Kuantitatif, Figural, Soal Cerita, dan SKB Prakom (subnetting).

**Soal bermasalah yang diperbaiki (dibuktikan dengan brute-force):**
- SKD-TIU-0009 (meja bundar): syaratnya tidak punya solusi sama sekali, pembahasannya berisi "Tunggu: ..." -> diganti soal yang konsisten.
- SKD-TIU-0011 (jadwal presentasi): ada 2 susunan sah, padahal soal menanyakan yang "PASTI" -> ditambah 1 syarat agar jawabannya tunggal.
- SKD-TIU-0007: opsi jawaban yang benar bersifat janggal ("... atau mahir berbahasa Inggris") -> dirapikan.
- 2 soal figural (N1111, N1117) punya dua opsi gambar yang identik -> pengecoh diganti.
- Label templat "(Studi Logika #267)", "(Kajian Analogi Verbal #270)", "(Variasi Evaluasi EYD V #N)", "(Kasus Integrasi #N)" dibuang dari teks soal.

**Soal baru TIU (+43, `db/skd/db_skd_tiu_v4.js`, id SKD-TIU-X0001..X0043):**
Silogisme 13, Himpunan/Peluang/Kombinatorika 14, Padanan Kata 8, Penalaran Logis 4, Analitis (logika posisi) 4.
Jawaban dihitung/diverifikasi dengan kode (kombinatorika dihitung, puzzle di-brute-force, silogisme dicek lewat model-checking).
Soal baru ditaruh di urutan paling belakang bank TIU sehingga isi "Paket 1..N" yang sudah ada tidak bergeser.

**Yang sudah diperiksa dan dinyatakan benar:** 64 soal deret angka dan 67 soal perbandingan kuantitatif (kunci dihitung ulang dengan kode: semua cocok).

## File dalam paket
Baru: `js/patches_v24.js`, `db/skd/db_skd_tiu_v4.js`, `CATATAN_UPDATE_v24.md`
Diubah: `index.html`, `js/app.js`, `css/app.css`, `src/input.css`, `sw.js` (cache v26)
