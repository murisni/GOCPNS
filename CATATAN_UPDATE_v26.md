# Update v26 (menggantikan semua update sebelumnya — timpa langsung ke folder project)

## Audit bank soal lama
- Bank lama berisi banyak soal ganda (isi sama, hanya beda nomor "#N"). Kini difilter saat dimuat (js/db-core.js). Jumlah soal tampil lebih kecil tetapi tidak ada pengulangan.
- 41 soal cacat dibuang (opsi jawaban kembar) + template silogisme yang kuncinya tidak sah; 1 soal TKP dibetulkan skornya (js/patches_v26.js).
## Soal baru
- 44 soal figural BERGAMBAR (SVG buatan sendiri): serial putaran, serial sisi poligon, kotak bergerak, matriks 3x3, cermin. Aplikasi kini bisa menampilkan gambar di soal & opsi (app.js).
- 35 soal SKB Prakom: Manajemen Risiko TI, Arsitektur Enterprise (TOGAF), Pengelolaan Data, studi kasus. + 3 materi baru (materi_extra3.js).
- Tambahan v20: materi pendalaman TWK/TIU/TKP/Prakom, soal v2/v3.
## Status kisi-kisi 2027 (per 13 Nov 2026) — BELUM resmi
- Berita: pendaftaran direncanakan pekan ke-4 Nov 2026, formasi sekitar 150 ribuan, prioritas guru/PHTC. Detail jadwal & formasi Prakom pemprov belum terkonfirmasi. Pantau sscasn.bkn.go.id dan bkn.go.id.
- Dasar SKD: KepmenPANRB 321/2024 (passing grade 2024: TWK 65, TIU 80, TKP 166). Nilai 2027 bisa berbeda.
- SKB Prakom Ahli Pertama 2024: 6 materi pokok (IT Enterprise, Manajemen Layanan TI, Pengelolaan Data, Manajemen Risiko TI, Infrastruktur TI, Sistem Informasi & Multimedia) — dari sumber sekunder.

## Tambahan v26 (hasil audit lanjutan)
- Soal salinan (pilihan jawaban sama persis, hanya kalimat pembuka beda) kini disaring otomatis. Jumlah soal UNIK sebenarnya: TWK 263, TIU 368, TKP 142, Prakom 299.
- 56 soal TKP baru (db_skd_tkp_v4.js), 9-10 per subtopik.
- Soal hitungan TIU (deret, soal cerita, perbandingan) dihitung ulang dengan kode: semua kunci benar.
- Belum diaudit isi: TKP lama dan Prakom lama (v1).

## Tambahan v26
- Audit isi selesai: TKP lama (skor & kunci wajar), Prakom lama (subnetting dan kode HTTP dihitung ulang: semua benar; templat berulang disaring).
- Soal baru: TKP +108 (kini 250 unik, pembahasan per soal), Prakom +108 (jaringan, keamanan, pemrograman, SQL, tata kelola), TWK +60 (Pancasila, NKRI, Sejarah, Otda, Integritas, Bela Negara).
- Jumlah soal unik sekarang: TWK 323, TIU 368, TKP 250, Prakom 352.
- Fakta regulasi pada soal baru ditulis dari pengetahuan, belum dicek ke dokumen resmi: cocokkan dengan peraturannya.

## v26
- Materi TIU ditulis ulang (11 materi "kelas intensif"): setiap rumus disertai 2-3 contoh soal bertahap (mudah, sedang, gaya CPNS), kesalahan umum, cara cepat. Materi TIU lama yang tumpang tindih diganti; gambar/diagram bawaan dipertahankan.
- Peta Pasal UUD 1945 per Bab ditambahkan (v25). Gambar materi dipulihkan (v25).
