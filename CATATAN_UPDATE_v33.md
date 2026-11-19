# Update v33 — Planning belajar

- Navigasi bawah (HP): tab Profil diganti **Planning**. Profil pindah ke tombol garis tiga (kanan atas): klik -> 2 tombol (**Input DB**, **Profil**), masing-masing membuka lembar dari bawah.
- Halaman `#/planning`: tombol **Atur planning** & **Reset planning** (reset hanya menghapus pengaturan planning, bukan progres materi).
- Atur planning: pilih tes (SKD / SKB satu bidang) + 1–30 hari. SKD dibagi blok TWK/TIU/TKP dengan beban harian paling merata; SKB dipotong merata.
- Jalur bulat per hari: hijau + centang bila 100%, selain itu tampil % tuntas (dari langkah materi + soal). Klik hari -> daftar topik & tombol belajar.
- Pengaturan disimpan di localStorage `cpns_plan_v1` (per perangkat).

File: js/app.js, src/input.css, css/app.css (aturan baru ditambahkan di akhir), index.html (versi), sw.js (cache v35)
