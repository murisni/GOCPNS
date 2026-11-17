# Update v25 + v26 + v27 — timpa langsung ke folder project (file yang tidak ada di paket ini tidak diubah)

## 1. Pecahan "1/2" jadi tampilan bertingkat (pembilang di atas, penyebut di bawah)
- Berlaku di **soal TIU** (soal, opsi, cara cepat, pembahasan) dan **materi TIU lama**.
- Hanya pecahan/rumus yang diubah. Satuan (km/jam), pasangan kata (pembuka/pendahuluan), dan tanggal sengaja dibiarkan.
- Cara kerja: `js/patches_v25.js` menandai pecahan di teks soal, lalu `esc()` di `js/app.js` menampilkannya bertingkat. Kunci jawaban tidak berubah.

## 2. Materi TIU baru (9 topik, tampil paling atas di grup TIU)
Setiap topik berisi rumus, **studi kasus** (kotak ungu "KASUS" + kotak kuning "Ingat"), dan kartu "Cara cepat". Semua angka kasus dihitung ulang dengan kode.
1. Strategi Nilai TIU Tercepat (target 16 benar = 80 poin, 3 putaran pengerjaan, jatah waktu, studi kasus Budi vs Sari, rencana latihan 7 hari)
2. Pecahan, Persen & Desimal Kilat (tabel hafalan, kasus Gaji Naik Lalu Turun, deret teleskopik)
3. Perbandingan Kuantitatif X vs Y (kasus Variabel Licik, Persen Tukar Tempat, dll.)
4. Soal Cerita (kerja bersama, papasan/menyusul, usia, untung-rugi, rata-rata gabungan, senilai/berbalik)
5. Himpunan, Peluang & Kombinatorik
6. Silogisme & Logika (5 kasus pengingat)
7. Deret Angka & Huruf (setiap pola punya julukan: Tangga, Berlipat, Kotak, Kelinci, Loncat-loncat)
8. Analogi & Padanan Kata
9. Figural (checklist, dadu, jaring-jaring, rotasi)
Materi TIU lama tidak dihapus. Soal latihan tiap langkah dipilih otomatis dari bank soal yang sudah ada.

## File dalam paket
Baru: `js/materi_tiu_v25.js`, `js/patches_v25.js`, `CATATAN_UPDATE_v25.md`
Diubah: `js/app.js` (hanya fungsi `esc`), `index.html` (2 tag script + versi app.js), `sw.js` (cache v27)

## 3. (v26) Kemajuan langkah materi tampil sebagian, mis. 2/3 — tidak langsung centang
- Begitu materi satu langkah selesai dibaca dan kamu masuk ke soal, kemajuan **tersimpan**. Tiap jawaban benar menambah angka (1/3, 2/3, 3/3).
- Centang hijau (selesai) baru muncul setelah **semua soal langkah itu benar**.
- Terlihat di: jalur materi (node berwarna oranye dengan gelembung "2/3" dan tulisan "Materi dibaca · soal 2/3"), kartu "Lanjutkan belajar" di beranda, dan kartu di daftar materi (bar ikut terisi sebagian).
- Kalau materi ditutup di tengah soal lalu dibuka lagi, kamu langsung lanjut dari soal yang tersisa. Ada tombol **"Baca ulang materi"** di layar soal bila ingin membaca lagi (soal tetap tersimpan).
- Tombol di kartu beranda tetap membuka jalur materi, jadi kamu bisa lihat dulu langkah mana yang sudah dan belum.
- File tambahan yang berubah: `js/app.js` (logika kemajuan), `js/patches_v25.js` (gaya node oranye + tombol baca ulang).

## 4. (v27) Studi kasus TIU langkah demi langkah (jelas dan panjang)
Setiap topik TIU baru mendapat langkah tambahan **"Studi Kasus Lengkap"** di akhir jalur (total 46 kasus). Format tiap kasus selalu sama supaya mudah diikuti:
SOAL → kata kunci pengenal → rumus/ide → Langkah 1, 2, 3 … → JAWABAN → cek cepat → ingat.
Isinya antara lain: pecahan dari bilangan, kali silang, persen naik-turun, deret teleskopik; X vs Y dengan variabel dan pangkat; kerja bersama (lengkap dengan asal rumusnya), pipa isi-kuras, berpapasan beda jam berangkat, rata-rata kecepatan, usia, untung-rugi, rata-rata gabungan, campuran, orang-hari; Venn, aturan perkalian, permutasi vs kombinasi, peluang; silogisme dengan uji tiap pilihan; deret dengan tabel selisih, suku ke-n, geometri, huruf; analogi; dadu, rotasi, pola figural; menghitung skor dan jatah waktu.
Semua angka dihitung ulang dengan kode. Soal latihan tiap langkah tetap otomatis (3 soal per langkah).
- File baru: `js/materi_tiu_studi_v27.js`. File berubah: `index.html`, `sw.js` (cache v29), `js/patches_v25.js` (gaya kotak studi kasus).

## Paket ini adalah project LENGKAP (siap timpa seluruh folder)
