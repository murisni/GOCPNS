/* Revisi panduan 7 hari dengan ID materi dan urutan langkah lama. */
(function () {
  const guide = (window.MATERI || []).find(t => t.id === 'rencana-7-hari');
  if (!guide) return;
  guide.title = 'Panduan 7 Hari — SKD & SKB Pranata Komputer';
  guide.summary = 'Belajar untuk formasi pemda, instansi pusat, atau kementerian. Target latihan SKD 505/550 dan SKB Prakom 90%.';
  const table = (headers, rows) => `<table><thead><tr>${headers.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const skd = '<a href="#/skd">Paket SKD</a>';
  const skb = '<a href="#/skb/SKB_PRAKOM">Paket SKB Prakom</a>';
  const practice = '<p>Nomor paket dan skor terbaik tetap tercatat. Saat membuka paket, aplikasi mendahulukan soal yang belum pernah ditampilkan. Untuk meninjau sesi terakhir, gunakan <b>Tinjau pembahasan</b> di hasil tryout.</p>';
  const panrb = 'https://jdih.menpan.go.id/dokumen-hukum/keputusan-menteri-pendayagunaan-aparatur-negara-dan-reformasi-birokrasi-nomor-321-tahun-2024-tentang-1851';
  const prakom = 'https://www.bkn.go.id/wp-content/uploads/2024/11/5457_Materi-Pokok-SKB-dengan-CAT-Pengadaan-CPNS-TA-2024.pdf';

  guide.sections[0].html = `<p>Mulai dengan satu tryout untuk mengukur skor, waktu per bagian, dan topik terlemah. Gunakan tabel ini untuk memilih apa yang dikejar selama tujuh hari.</p>`
    + table(['Bagian', 'Target latihan', 'Ukuran'], [
      ['TWK', '140/150', '28 benar dari 30 soal'],
      ['TIU', '160/175', '32 benar dari 35 soal'],
      ['TKP', '205/225', 'Rata-rata sekitar 4,56 poin dari 45 soal'],
      ['SKD total', '505/550', '110 soal dalam 100 menit, acuan CPNS 2024'],
      ['SKB Prakom', '90% nilai latihan', '18/20 benar pada paket reguler atau 27/30 pada Try Out Planning']
    ])
    + `<p>Enam area SKB Prakom Ahli Pertama adalah IT Enterprise, manajemen layanan TI, pengelolaan data, risiko TI, infrastruktur TI, serta sistem informasi dan multimedia. Cek pengumuman instansi yang kamu lamar untuk jenjang jabatan, komponen SKB, dan ketentuan seleksi.</p>
       <p>Per 22 November 2026, penelusuran publik belum menemukan butir ujian resmi baru untuk SKD umum atau SKB Prakom Ahli Pertama. Paket GOCPNS memuat latihan orisinal. Rujukan: <a href="${panrb}" target="_blank" rel="noopener">KepmenPANRB 321/2024</a>, <a href="${prakom}" target="_blank" rel="noopener">materi pokok SKB CAT 2024, butir 404</a>, <a href="https://cat.bkn.go.id/" target="_blank" rel="noopener">simulasi CAT BKN</a>, dan <a href="https://sscasn.bkn.go.id/" target="_blank" rel="noopener">SSCASN</a>.</p>`;

  guide.sections[1].html = table(['Hari', 'SKD', 'SKB Prakom'], [
    ['1 · Ukur posisi awal', 'Kerjakan satu tryout lengkap 100 menit dengan pembahasan instan dimatikan. Catat skor per bagian dan jenis kesalahan.', 'Kerjakan satu paket 20 soal. Tandai dua area teknis dengan hasil terendah.'],
    ['2 · Pangkas waktu TIU', 'Latih persentase, rasio, kerja bersama, dan kecepatan. Targetkan pola atau rumus terlihat dalam 20 detik dan batas putaran pertama 75–90 detik.', 'IT Enterprise dan manajemen layanan TI. Jelaskan hubungan proses, aplikasi, dan data. Bedakan insiden, problem, dan perubahan.'],
    ['3 · Stabilkan TWK', 'Latih soal kasus Pancasila, nasionalisme, integritas, dan bahasa. Jelaskan satu alasan kenapa opsi pilihan paling sesuai.', 'Pengelolaan data. Latih kualitas data, kunci deduplikasi, dan LEFT JOIN untuk baris tanpa pasangan.']
  ]) + `<p>Buka ${skd} dan ${skb}. Tulis untuk setiap kesalahan satu penyebab dan satu aturan singkat untuk soal berikutnya.</p>`;

  guide.sections[2].html = table(['Hari', 'SKD', 'SKB Prakom'], [
    ['4 · Tingkatkan akurasi', 'Latih TIU verbal dan figural. Buat diagram kecil untuk silogisme dan periksa siklus rotasi sebelum menghitung.', 'Risiko dan infrastruktur TI. Latih risiko residual, RTO/RPO, kapasitas cadangan, dan ukuran subnet.'],
    ['5 · Tingkatkan TKP', 'Kerjakan satu paket dengan timer. Untuk skor di bawah 5, bandingkan dampak, aturan, pihak terdampak, dan tindak lanjut tiap opsi.', 'Sistem informasi dan multimedia. Latih skenario uji penerimaan, aksesibilitas, dan keputusan memakai peta atau data.'],
    ['6 · Simulasi penuh', 'Ambil tryout SKD berikutnya. Tinjau lima kesalahan paling mahal atau soal yang memakan waktu di atas 90 detik.', 'Ambil paket campuran. Jika kurang dari 18 benar, gunakan pembahasan untuk menemukan dua konsep yang perlu dilatih lagi.'],
    ['7 · Konfirmasi target', 'Ambil tryout baru dalam 100 menit. Bandingkan skor dengan 505 dan alokasi waktu yang kamu pakai.', 'Kerjakan paket baru 20 soal atau Try Out SKB Prakom di Planning. Cek 18/20 atau 27/30.']
  ]) + practice;

  guide.sections[3].html = `<p>Contoh pembagian 100 menit: TWK 20, TKP 30, TIU 40, peninjauan 10. Tandai dan lewati soal TIU jika cara hitung belum jelas setelah 75–90 detik. Pada putaran kedua, mulai dari soal dengan langkah tersingkat. Isi semua jawaban sebelum waktu habis.</p>`
    + table(['Bentuk soal', 'Rumus cepat dan kapan dipakai', 'Contoh'], [
      ['Diskon bertingkat', 'Kalikan faktor sisa. Penurunan x% memakai (1 − x/100).', '15% lalu 25%: 0,85 × 0,75 = 0,6375 dari harga awal.'],
      ['Rasio berubah', 'Ubah rasio menjadi bagian terhadap total. Cocok jika total tetap.', '5:3 menjadi 3:1 → 5/8 menjadi 6/8. Kenaikan 8 orang berarti total 64.'],
      ['Kerja bersama', 'Pakai KPK durasi sebagai total satuan kerja, lalu jumlahkan laju per satuan waktu.', '12 dan 18 jam → total 36 unit, laju gabungan 5 unit/jam. Pisahkan fase jika pekerja keluar.'],
      ['Kecepatan rata-rata', 'Gunakan 2ab/(a+b) untuk dua jarak sama tanpa berhenti. Untuk kasus lain, pakai jarak total ÷ waktu total.', '40 dan 60 km/jam pada dua jarak sama → 48 km/jam.'],
      ['Rata-rata berubah', 'Jumlah nilai gabungan = jumlah nilai lama + jumlah nilai tambahan. Jika ukuran kelompok berbeda, pakai rata-rata berbobot.', '18 orang × 72, lalu 20 orang × 73,5 → dua orang tambahan menyumbang 174 poin.'],
      ['Selisih kuadrat', 'a² − b² = (a − b)(a + b).', '96² − 84² = 12 × 180 = 2.160.'],
      ['Minimal satu kejadian', 'Peluang = 1 − peluang tidak ada yang terjadi. Perbarui penyebut jika pengambilan tanpa pengembalian.', 'P(≥1 merah) = 1 − (5/8 × 4/7) = 9/14.']
    ]) + `<p>Gunakan <a href="#/planning">Planning</a> untuk menjadwalkan salah satu jalur latihan. Panduan ini memberi urutan gabungan SKD dan SKB untuk tujuh hari yang sama.</p>`;

  guide.tips = [
    'Setelah tryout, kelompokkan kesalahan menjadi <b>konsep, hitung, baca soal, atau waktu</b>. Pilih teknik perbaikan sesuai penyebabnya.',
    'Saat kembali ke topik yang sama, uji teknikmu dengan soal baru. Untuk kesalahan yang belum dipahami, baca lagi pembahasan dari sesi tersebut.',
    'Target 505/550 dan 90% dipakai untuk mengukur kesiapan latihan. Ketentuan dan peringkat seleksi mengikuti pengumuman resmi instansi.'
  ];
})();
