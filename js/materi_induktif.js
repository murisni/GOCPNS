/* ==========================================================================
   MODUL MATERI TIU VERBAL: PENALARAN INDUKTIF (KEPMENPANRB 321/2024 & CAT BKN)
   Melengkapi komponen Verbal (Silogisme, Penalaran Induktif, Analitis) sesuai
   kisi-kisi terbaru agar materi, kuis langkah, dan Rangkuman TIU lengkap 100%.
   ========================================================================== */
(function () {
  const M = window.MATERI;
  if (!Array.isArray(M) || window.__materiInduktif57) return;
  window.__materiInduktif57 = 1;

  M.push({
    id: 'tiu-penalaran-induktif',
    group: 'TIU',
    title: 'Penalaran Induktif TIU: Generalisasi, Kausalitas & Analogi Induktif',
    summary: 'Menguasai pilar Verbal TIU terbaru selain silogisme & analitis: menarik simpulan umum (generalisasi) bebas bias, melacak hubungan sebab-akibat & korelasi semu, serta memindahkan prinsip pada analogi induktif HOTS.',
    buckets: ['SKD_TIU'],
    subs: ['Verbal - Penalaran Induktif', 'Penalaran Induktif'],
    sections: [
      {
        title: 'Peta Penalaran Induktif vs Deduktif (Silogisme) dalam TIU 35 Soal',
        fam: [],
        html: '<p>Dalam peta materi <b>TIU Verbal (Nalar Umum)</b> modern, terdapat tiga poros utama: <b>Silogisme (Deduktif)</b>, <b>Penalaran Induktif</b>, dan <b>Penalaran Analitis</b>. Agar tidak tertukar saat membaca pilihan jawaban, kenali arah logika keduanya:</p>'
          + '<table class="table table-sm"><thead><tr><th>Aspek Pembanding</th><th>Penalaran Deduktif (Silogisme)</th><th>Penalaran Induktif</th></tr></thead><tbody>'
          + '<tr><td><b>Arah Berpikir</b></td><td><b>Umum → Khusus</b><br>Dari aturan/premis umum ("Semua A...") ke kasus khusus.</td><td><b>Khusus → Umum</b><br>Dari beberapa contoh data/fakta khusus ke simpulan umum/pola paling kuat.</td></tr>'
          + '<tr><td><b>Sifat Kesimpulan</b></td><td><b>Pasti mutlak</b> (selama premis benar).</td><td><b>Probabilistik / Paling Kuat &amp; Wajar</b> berdasar bukti yang tersaji.</td></tr>'
          + '<tr><td><b>3 Subpola di TIU</b></td><td>Modus Ponens, Tollens, Kuantor Semua/Sebagian, Kontraposisi.</td><td><b>1. Generalisasi</b> (fakta → pola)<br><b>2. Kausalitas</b> (sebab ↔ akibat)<br><b>3. Analogi Induktif</b> (kesamaan prinsip dua sistem)</td></tr>'
          + '</tbody></table>'
          + '<div class="callout"><b>💡 Kapan soal meminta jawaban Induktif?</b> Biasanya diawali perintah: <i>"Simpulan induktif yang paling tepat...", "Kelemahan generalisasi di atas...", "Pernyataan yang paling memperkuat/memperlemah argumen..."</i>, atau <i>"Mekanisme kebijakan yang paling sejajar prinsipnya..."</i>.</div>'
      },
      {
        title: 'Generalisasi Induktif: Menarik Simpulan Data, Bias Sampel & Penguat/Pelemah',
        fam: ['ind57-generalisasi'],
        html: '<p><b>Generalisasi</b> adalah menarik simpulan menyeluruh dari sejumlah fakta atau unit uji coba khusus. Dua syarat mutlak generalisasi yang baik adalah <b>jumlah kasus cukup</b> dan <b>sampel mewakili (representatif)</b> seluruh populasi.</p>'
          + '<table class="table table-sm"><thead><tr><th>Jebakan Soal Generalisasi</th><th>Ciri Pengecoh</th><th>Jawaban Benar</th></tr></thead><tbody>'
          + '<tr><td><b>1. Overgeneralization (Klaim Mutlak)</b></td><td>Memakai kata ekstrem seperti <i>"pasti semua", "selamanya", "100%", "hanya itu satu-satunya"</i> walau sampel cuma 3–5 daerah.</td><td>Gunakan bahasa proporsional: <i>"cenderung...", "berpotensi besar...", "pada umumnya..."</i> yang memayungi seluruh sampel.</td></tr>'
          + '<tr><td><b>2. Sampling Bias (Sampel Tidak Mewakili)</b></td><td>Menyimpulkan nasib warga seluruh kabupaten hanya dari wawancara pengunjung mal pusat kota di akhir pekan.</td><td>Tunjukkan bahwa kelompok penting (desa 3T, lansia, non-digital) belum terwakili.</td></tr>'
          + '<tr><td><b>3. Memperkuat Generalisasi</b></td><td>Opsi hanya memuji pejabat pelaksana atau mengulang satu contoh lama tanpa memperluas bukti.</td><td>Tambahkan bukti keberhasilan dari <b>sampel berkarakteristik berbeda</b> (misal desa kepulauan / pegunungan).</td></tr>'
          + '</tbody></table>'
          + '<div class="studi"><div class="studi-h">📘 STUDI KASUS — Menguji Validitas Generalisasi Layanan</div>'
          + '<div class="studi-soal"><b>SOAL:</b> Uji coba sistem antrean QR di Kota A, Kabupaten B, dan Kota C memangkas waktu tunggu 58–65%. Apa simpulan paling sah?</div>'
          + '<ol class="studi-langkah"><li>Ketiga wilayah beragam (kota &amp; kabupaten) menunjukkan arah hasil konsisten turun ~60%.</li><li>Tolak opsi <i>"Pasti semua dinas di Indonesia nol antrean"</i> karena melampaui data uji coba.</li><li>Pilih kesimpulan wajar yang mencakup semua unit uji: <b>penerapan sistem berpotensi besar memangkas waktu tunggu di berbagai unit layanan</b>.</li></ol>'
          + '<div class="studi-jawab">✅ <b>PRINSIP:</b> Jangan pernah memilih simpulan induktif yang lebih sempit dari gabungan data atau jauh lebih mutlak dari bukti!</div></div>'
      },
      {
        title: 'Hubungan Kausalitas: Sebab–Akibat, Multi-Kausal & Korelasi Semu (Post Hoc)',
        fam: ['ind57-kausalitas'],
        html: '<p>Penalaran kausalitas melacak hubungan penggerak peristiwa melalui tiga bentuk soal:</p>'
          + '<ul>'
          + '<li><b>Sebab → Akibat &amp; Rantai Multi-Kausal:</b> Peristiwa A memicu B, lalu B memicu C (mis. Solar naik → Ongkos logistik naik → Harga pasar naik → Daya beli turun). Pastikan loncatan tetap wajar dalam alur rantai.</li>'
          + '<li><b>Akibat → Akar Sebab:</b> Diberikan suatu masalah (mis. peretasan naik 4× lipat), lalu temuan data menunjukkan penyebab dominan (88% sandi lemah &amp; klik tautan <i>phishing</i>).</li>'
          + '<li><b>Waspada Korelasi Semu (Bukan Kausal!):</b> Dua grafik yang bergerak naik bersamaan belum tentu saling menyebabkan—bisa jadi keduanya dipicu oleh <b>variabel ketiga</b>!</li>'
          + '<li><b>Strategi Memperlemah Klaim Kausal:</b> Jika teks menuduh "A menyebabkan B", cara paling ampuh melemahkannya adalah menghadirkan <b>faktor penyebab alternatif C</b> yang terjadi bersamaan dengan B (mis. gangguan server/SOP belum siap).</li>'
          + '</ul>'
          + '<div class="ingat">⚠️ <b>Jebakan Klasik Korelasi = Kausalitas:</b> Setiap Juli–Agustus penjualan es kelapa naik bersamaan dengan kasus dehidrasi di UGD. Bukan es kelapa yang memicu dehidrasi, melainkan keduanya digerakkan <b>suhu terik musim kemarau</b> sebagai variabel ketiga!</div>'
      },
      {
        title: 'Analogi Induktif HOTS: Kesetaraan Mekanisme Sistem & Menghindari False Analogy',
        fam: ['ind57-analogi-induktif'],
        html: '<p>Selain analogi dua kata (`A : B = C : D`), TIU terbaru menguji <b>analogi induktif berbasis skenario</b>: membandingkan dua bidang yang sekilas tampak berbeda (mis. biologi vs keamanan siber, bendungan air vs anggaran daerah) untuk menyimpulkan hasil atau cara kerja yang sama.</p>'
          + '<table class="table table-sm"><thead><tr><th>Langkah Bedah Analogi Induktif</th><th>Penerapan Nyata</th></tr></thead><tbody>'
          + '<tr><td><b>1. Kupas Kulit Kasus, Ambil Prinsip Mesinnya</b></td><td><i>Vaksinasi</i>: mengenalkan ancaman lemah terkendali agar sistem imun kebal saat serangan nyata.<br><i>Padanan di TI SPBE</i>: <b>Penetration testing</b> (simulasi serangan terkendali guna menambal celah sebelum peretasan asli).</td></tr>'
          + '<tr><td><b>2. Cek Kesesuaian Faktor Penentu (Anti False Analogy)</b></td><td>Meniru sumur resapan dari daerah berkapur ke tanah lempung kedap air keliru karena <b>sifat daya serap tanah</b> mematahkan dasar kesamaannya.</td></tr>'
          + '<tr><td><b>3. Tarik Benang Merah Lintas Sektor</b></td><td>Armada listrik tanpa rute jelas :: Server baru tanpa memotong birokrasi fotokopi = <b>ganti alat tanpa membenahi SOP tetap gagal!</b></td></tr>'
          + '</tbody></table>'
          + '<div class="callout"><b>🔎 Aturan Emas Analogi Paragraf:</b> Jangan memilih opsi hanya karena mengandung kata benda yang mirip topik bacaan (mis. sama-sama bahas air/komputer); pilih opsi dengan <b>hubungan peran &amp; konsekuensi paling identik</b>!</div>'
      }
    ],
    tips: [
      'Di soal Generalisasi, singkirkan cepat pilihan yang memuat kata mutlak (<b>pasti semua, selalu, satu-satunya, tak mungkin gagal</b>).',
      'Kualitas sampel induktif wajib diperiksa: sampel besar pun tetap cacat jika cuma mewakili satu kelompok bias (misal warga kota besar saja).',
      'Jika diminta <b>memperkuat argumen</b>, cari bukti dari segmen baru/berbeda; jika diminta <b>memperlemah argumen</b>, cari penyebab alternatif yang bekerja di saat bersamaan.',
      'Dua kejadian muncul berurutan atau naik bersama belum tentu sebab–akibat: cek apakah ada <b>variabel ketiga</b> yang menggerakkan keduanya.',
      'Pada Analogi Induktif skenario, ubah cerita kasus 1 menjadi kalimat prinsip ("simpan berlebih, alirkan saat kurang"), lalu cari kebijakan yang menjalankan prinsip persis sama.'
    ]
  });
})();
