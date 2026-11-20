# Update v33 — Planning belajar

- Navigasi bawah (HP): tab Profil diganti **Planning**. Profil pindah ke tombol garis tiga (kanan atas): klik -> 2 tombol (**Input DB**, **Profil**), masing-masing membuka lembar dari bawah.
- Halaman `#/planning`: tombol **Atur planning** & **Reset planning** (reset hanya menghapus pengaturan planning, bukan progres materi).
- Atur planning: pilih tes (SKD / SKB satu bidang) + 1–30 hari. SKD dibagi blok TWK/TIU/TKP dengan beban harian paling merata; SKB dipotong merata.
- Jalur bulat per hari: hijau + centang bila 100%, selain itu tampil % tuntas (dari langkah materi + soal). Klik hari -> daftar topik & tombol belajar.
- Pengaturan disimpan di localStorage `cpns_plan_v1` (per perangkat).

File: js/app.js, src/input.css, css/app.css (aturan baru ditambahkan di akhir), index.html (versi), sw.js (cache v35)

## v34 — Try Out & latihan harian di Planning
- Total hari (maks. 30) SUDAH termasuk hari Try Out. SKD: tiap kelompok (TWK, TIU, TKP) = hari belajar lalu 1 hari **Try Out 30 soal campuran** dari seluruh materi kelompok itu. Minimal 6 hari (SKB: 2 hari).
- Soal Try Out dipilih yang belum pernah muncul di langkah materi dan belum pernah dikerjakan (bila habis, baru memakai sisanya). Disimpan di `cpns_plan_q_v1` agar tetap sama; tidak dipakai ulang di Try Out/latihan lain di planning yang sama, dan tidak dipakai sebagai soal pengganti di langkah materi.
- TIU: tiap hari belajar ada **Latihan Harian 20 soal** baru (bobot 25% dari persen hari itu). TWK & TKP tanpa latihan tambahan.
- Hari Try Out tuntas setelah dikerjakan; hasil tampil di lembar hari. Tombol keluar/daftar paket dari ujian kembali ke Planning.
File: js/app.js, src/input.css, css/app.css, index.html, sw.js (cache v36)
