/* ==========================================================================
   MATERI PELENGKAP v58:
   1. Menambahkan subbab Ketidaksamaan Kiral & Analogi/Serial Dua Elemen (SVG)
      ke topik 'tiu-figural-kasus-v25' (mengikat fig58-ketidaksamaan,
      fig58-analogi-gambar, & fig58-serial-gambar).
   2. Menambahkan subbab Hitung Desimal Realistis CAT BKN ke 'tiu-bedah-hots-ebook'
      (mengikat tiu59-numerik-desimal).
   3. Menambah modul baru 'rencana-sebulan-noncat' (Jadwal 30 Hari Menuju Tes
      CPNS + Strategi Tryout CAT Ketat + Persiapan SKB Non-CAT Instansi).
   ========================================================================== */
(function () {
  const M = window.MATERI;
  if (!Array.isArray(M) || window.__materiStrategiV58) return;
  window.__materiStrategiV58 = 1;

  const figSvgDemo = '<div style="margin:.45rem 0"><svg viewBox="0 0 330 92" width="100%" style="max-width:360px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px" role="img" aria-label="Ilustrasi uji kiralitas rotasi vs cermin" xmlns="http://www.w3.org/2000/svg">'
    + '<rect x="10" y="10" width="70" height="70" rx="6" fill="#fff" stroke="#334155" stroke-width="1.5"/>'
    + '<path d="M35,22 V56 H54" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/><circle cx="54" cy="56" r="3.5" fill="#dc2626"/>'
    + '<text x="45" y="75" text-anchor="middle" font-family="Arial" font-size="9" fill="#475569">Asli (Belok Kiri/CCW)</text>'
    + '<rect x="92" y="10" width="70" height="70" rx="6" fill="#fff" stroke="#334155" stroke-width="1.5"/>'
    + '<g transform="rotate(90,127,45)"><path d="M117,22 V56 H136" fill="none" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round"/><circle cx="136" cy="56" r="3.5" fill="#0284c7"/></g>'
    + '<text x="127" y="75" text-anchor="middle" font-family="Arial" font-size="9" fill="#16a34a">Putar 90° (SAMA)</text>'
    + '<rect x="174" y="10" width="70" height="70" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.6"/>'
    + '<path d="M218,22 V56 H199" fill="none" stroke="#dc2626" stroke-width="4.5" stroke-linecap="round"/><circle cx="199" cy="56" r="3.5" fill="#dc2626"/>'
    + '<text x="209" y="75" text-anchor="middle" font-family="Arial" font-size="9" font-weight="700" fill="#dc2626">Cermin (BEDA!)</text>'
    + '<text x="287" y="38" text-anchor="middle" font-family="Arial" font-size="10" font-weight="700" fill="#0f172a">Tips Kilat:</text>'
    + '<text x="287" y="53" text-anchor="middle" font-family="Arial" font-size="9.5" fill="#334155">Telusuri jalur</text>'
    + '<text x="287" y="66" text-anchor="middle" font-family="Arial" font-size="9.5" fill="#334155">kiri vs kanan</text>'
    + '</svg></div>';

  // 1. Perluas tiu-figural-kasus-v25 untuk Ketidaksamaan & Analogi/Serial Gambar
  const figTopic = M.find(t => t.id === 'tiu-figural-kasus-v25');
  if (figTopic) {
    if (!Array.isArray(figTopic.subs)) figTopic.subs = [];
    if (!figTopic.subs.includes('Figural - Ketidaksamaan')) figTopic.subs.push('Figural - Ketidaksamaan');
    if (!figTopic.subs.includes('Figural - Analogi Gambar')) figTopic.subs.push('Figural - Analogi Gambar');
    if (!figTopic.subs.includes('Figural - Serial Gambar')) figTopic.subs.push('Figural - Serial Gambar');
    figTopic.sections.push(
      {
        title: 'Figural Ketidaksamaan (Odd One Out): Uji Kiralitas Cermin, Sudut & Paritas Elemen',
        fam: ['fig58-ketidaksamaan'],
        html: '<p>Soal <b>Ketidaksamaan Gambar</b> menampilkan lima pilihan (A–E) dan meminta Anda menunjuk <b>SATU gambar yang menyimpang</b>. Empat pengecoh yang tersisa selalu berbagi tepat satu aturan konsisten. Gunakan cek urutan tercepat ini:</p>'
          + figSvgDemo
          + '<table class="table table-sm"><thead><tr><th>Cek Lapis</th><th>Pola yang Paling Sering Menguji Peserta</th><th>Cara Menguncinya dalam 8 Detik</th></tr></thead><tbody>'
          + '<tr><td><b>1. Kiralitas (Rotasi vs Cermin)</b></td><td>4 gambar huruf L/F/bendera asimetris hanya diputar 0°–270°, sedangkan 1 gambar dicerminkan terbalik.</td><td>Bayangkan Anda berjalan dari pangkal menuju ujung: apakah beloknya selalu ke kanan atau ke kiri? Yang berbelok berlawanan = <b>gambar beda</b>!</td></tr>'
          + '<tr><td><b>2. Relasi Jumlah (Sisi vs Titik/Garis)</b></td><td>Titik dalam = jumlah sisi − 1, atau jumlah wajik = jumlah garis di bawah.</td><td>Hitung angka pada dua pilihan pertama; begitu cocok rumusnya, cek tiga sisa lainnya.</td></tr>'
          + '<tr><td><b>3. Posisi Relatif (Kanan/Kiri Panah, Irisan)</b></td><td>Titik merah selalu di sisi kanan arah panah melaju, atau tepat di dalam irisan dua bangun.</td><td>Arahkan kepala searah kepala panah untuk melihat mana yang berada di sisi kiri menyimpang.</td></tr>'
          + '<tr><td><b>4. Simetri Lipat & Sudut/Singgung</b></td><td>4 bersudut lancip vs 1 tumpul; 4 bersinggungan 1 titik vs 1 berpotongan 2 titik; 4 ber-simetri vs 1 segitiga sembarang.</td><td>Pisahkan properti geometris mendasar dahulu sebelum mencari hal rumit.</td></tr>'
          + '</tbody></table>'
      },
      {
        title: 'Figural Analogi & Serial Dua Elemen: Lacak Per Fitur Secara Terpisah',
        fam: ['fig58-analogi-gambar', 'fig58-serial-gambar'],
        html: '<p>Baik pada <b>Analogi Gambar (`A : B = C : ?`)</b> maupun <b>Serial Deret 4 Langkah (`1 → 2 → 3 → ?`)</b>, kesalahan terbesar adalah menebak bentuk keseluruhan sekaligus. Lakukan pelacakan <b>satu fitur dalam satu waktu</b>:</p>'
          + '<ul>'
          + '<li><b>Analogi Gambar (Tukar Lapis & Invers):</b> Periksa perubahan antara Kotak 1 → Kotak 2: apakah bangun luar-dalam bertukar posisi, apakah warna hitam ↔ putih terbalik, apakah garis pembagi bertambah `+1`, atau apakah objek pecah membelah ke 4 sudut?</li>'
          + '<li><b>Serial Dua Elemen (Aturan Gerak Berbeda):</b> Sering kali jarum di tengah berputar `+45° searah jarum jam (CW)` sementara titik sudut bergerak `+1 langkah berlawanan jarum jam (CCW)`. Fokuslah dulu pada <b>1 elemen yang paling mudah dihitung</b> (misalnya panah ↑→↘), coret 3 opsi yang salah arahnya, lalu pakai elemen kedua untuk memastikan jawaban akhir!</li>'
          + '</ul>'
          + '<div class="ingat">⚠️ <b>Jebakan Klasik:</b> Terbalik antara searah jarum jam (CW: atas → kanan → bawah → kiri) dan berlawanan jarum jam (CCW: atas → kiri → bawah → kanan) saat kejar-kejaran dengan waktu ujian.</div>'
      }
    );
  }

  // 2. Perluas tiu-bedah-hots-ebook untuk Hitung Desimal Realistis CAT BKN
  const tiuHots = M.find(t => t.id === 'tiu-bedah-hots-ebook');
  if (tiuHots) {
    if (!Array.isArray(tiuHots.subs)) tiuHots.subs = [];
    if (!tiuHots.subs.includes('Hitung Desimal Realistis')) tiuHots.subs.push('Hitung Desimal Realistis');
    tiuHots.sections.push({
      title: 'Hitung Cepat Desimal & Pecahan Realistis BKN (Non-Angka Bulat Rapi)',
      fam: ['tiu59-numerik-desimal'],
      html: '<p>Selain soal berangka bulat bersih, soal TIU CAT BKN kerap menyisipkan angka desimal realistis seperti <b>5,12%</b>, <b>12,5%</b>, <b>4,5 hari</b>, atau serapan pagu <b>33,04 miliar</b>. Jangan mengalikannya secara manual panjang—pakai <b>konversi pecahan istimewa</b> dan <b>faktor pengali</b>:</p>'
        + '<table class="table table-sm"><thead><tr><th>Angka Desimal / Persen</th><th>Bentuk Pecahan / Trik Kilat</th><th>Contoh Hitung 5 Detik</th></tr></thead><tbody>'
        + '<tr><td><b>125</b> atau <b>12,5%</b></td><td><b>125 = 1.000 ÷ 8</b> · <b>12,5% = 1/8</b></td><td>125 × 1,0512 = 1.051,2 ÷ 8 = <b>131,40</b></td></tr>'
        + '<tr><td><b>3,75</b> · <b>2,5</b> · <b>0,75</b></td><td>3,75 = <b>15/4</b> · 2,5 = <b>5/2</b> · 0,75 = <b>3/4</b></td><td>3,75 × 1,6 = (15/4) × 1,6 = 15 × 0,4 = <b>6,0</b></td></tr>'
        + '<tr><td><b>Campuran Kadar Desimal</b></td><td>Pakai selisih perbandingan bobot <b>a : b</b></td><td>24 L (12,5%) + 16 L (17,5%) → rasio 3:2, selisih 5% → 12,5% + (2/5 × 5%) = <b>14,5%</b></td></tr>'
        + '<tr><td><b>Persen Pagu / Realisasi Desimal</b></td><td>Ubah penyebut ke basis 10 atau 100</td><td>33,04 / 40 = 8,26 / 10 = <b>82,6%</b>; 25,92 / 32 → bagi 8 = 3,24 / 4 = <b>81,0%</b></td></tr>'
        + '</tbody></table>'
    });
  }

  // 3. Tambah modul baru: Strategi 30 Hari Menuju Tes & SKB Non-CAT
  M.push({
    id: 'rencana-sebulan-noncat',
    group: 'SKB',
    title: 'Strategi 30 Hari Menuju CAT CPNS & Panduan SKB Non-CAT',
    summary: 'Peta jalan persiapan intensif 4 pekan sebelum tes (cara memadukan Mode CAT Ketat, Simulasi 500++, Tryout BKN eksternal, serta kesiapan SKB Non-CAT seperti wawancara, microteaching, psikotes, dan praktik kerja).',
    buckets: ['SKB_PRAKOM', 'SKB_HUKUM', 'SKB_KEUANGAN', 'SKB_KESEHATAN', 'SKB_PENDIDIKAN', 'SKB_TEKNIK', 'SKB_STATISTIK', 'SKB_SOSIAL'],
    subs: null,
    sections: [
      {
        title: 'Peta Jalan 4 Pekan (30 Hari Terakhir) Agar Skor Tembus 450–500++',
        fam: [],
        html: '<p>Satu bulan terakhir bukan waktu membaca semua buku dari nol, melainkan mengunci <b>akurasi HOTS</b>, <b>manajemen waktu 100 menit</b>, dan <b>menambal subtes terlemah</b>:</p>'
          + '<table class="table table-sm"><thead><tr><th>Rentang Waktu</th><th>Fokus Utama &amp; Target</th><th>Aktivitas Praktis di Aplikasi &amp; Luar Aplikasi</th></tr></thead><tbody>'
          + '<tr><td><b>Pekan 1 (Hari 1–7)<br>Diagnosis &amp; Fondasi HOTS</b></td><td>Petakan kelemahan TWK/TIU/TKP; kuasai materi jebakan terbaru.</td><td>Kerjakan <b>Simulasi HOTS &amp; Visual BKN 500++</b> (wajib nyalakan <b>Mode CAT BKN Ketat</b>). Baca modul <i>Bedah HOTS E-Book</i> + <i>Penalaran Induktif</i> + cek menu Ulasan Kelemahan.</td></tr>'
          + '<tr><td><b>Pekan 2 (Hari 8–14)<br>Kecepatan TIU &amp; Ketajaman TWK</b></td><td>Pangkas waktu TIU ke rata-rata <b>60–75 detik/soal</b>; amankan TWK >= 115.</td><td>Latih <i>Hitung Desimal</i>, <i>Figural Ketidaksamaan/Matriks</i>, <i>Silogisme</i>, serta baca wacana panjang TWK Empat Konsensus &amp; EYD V tanpa melewatkan detail.</td></tr>'
          + '<tr><td><b>Pekan 3 (Hari 15–21)<br>Stamina Tryout &amp; TKP Skor 5</b></td><td>Stabilitas TKP >= 195–205 dan tahan membaca 110 soal tanpa lelah.</td><td>Kerjakan 3–4 kali Tryout Lengkap (<i>Mode CAT Ketat aktif!</i>) plus 1–2 simulasi resmi <b>cat.bkn.go.id / Tryout eksternal ber-ranking</b> untuk menguji mental papan skor real-time.</td></tr>'
          + '<tr><td><b>Pekan 4 (Hari 22–30)<br>Tapering, SKB &amp; Ketenangan</b></td><td>Kunci pola refleks tanpa begadang berat H-2 ujian.</td><td>Ulangi hanya soal salah/ditandai &amp; Flashcard H-1. Pelajari SKB CAT rumpun Anda dan cek pengumuman instansi terkait komponen SKB Non-CAT.</td></tr>'
          + '</tbody></table>'
      },
      {
        title: 'Manajemen Waktu 100 Menit CAT BKN & Taktik Saat Terjebak Wacana Panjang',
        fam: [],
        html: '<p>Banyak peserta pintar gagal bukan karena tidak bisa, melainkan kehabisan waktu di 25 soal terakhir akibat memaksakan satu soal hitung rumit selama 4 menit:</p>'
          + '<ul>'
          + '<li><b>Pembagian Ideal 100 Menit (110 Soal):</b> <b>TKP 30 menit</b> (kerjakan cepat di awal saat pikiran segar atau selesaikan dengan target ~40 detik/soal, JANGAN ada yang kosong karena 1 poin pun berarti), <b>TWK 22–25 menit</b>, <b>TIU 38–40 menit</b>, sisa <b>5–8 menit</b> untuk putaran kedua soal yang ditandai ragu-ragu.</li>'
          + '<li><b>Aturan 60 Detik Baca Wacana Panjang:</b> Baca dulu <b>kalimat pertanyaan paling akhir</b> sebelum membaca paragraf 6 kalimat dari atas! Anda jadi tahu persis apa yang sedang dicari (uji MA/MK, Sila berapa, atau ide pokok/simpulan).</li>'
          + '<li><b>Aturan 75 Detik Hitung TIU:</b> Bila dalam 75 detik belum tampak jalan hitung/polanya, klik tanda ragu-ragu/lewati—amankan poin pasti dari soal Figural atau Verbal lain dulu!</li>'
          + '</ul>'
      },
      {
        title: 'Mengenal & Mempersiapkan SKB Non-CAT Instansi Pusat maupun Pemda',
        fam: [],
        html: '<p>Selain SKB CAT BKN (umumnya berbobot 50%–100% sesuai pengumuman instansi), sejumlah Kementerian/Lembaga dan Pemda mengadakan <b>SKB Tambahan / Non-CAT</b> dengan bobot terukur:</p>'
          + '<table class="table table-sm"><thead><tr><th>Bentuk SKB Tambahan</th><th>Umumnya Berlaku Untuk</th><th>Persiapan Taktis yang Harus Dilakukan</th></tr></thead><tbody>'
          + '<tr><td><b>1. Wawancara Kompetensi &amp; Komitmen</b></td><td>Kemenkeu, Kemenkumham, Kemenlu, Kemendikbud/Dosen, banyak K/L pusat.</td><td>Siapkan jawaban terstruktur metode <b>STAR</b> (<i>Situation–Task–Action–Result</i>), pahami tugas pokok jabatan (PermenPANRB Jabfung), serta nilai ASN <b>BerAKHLAK</b> dan wawasan isu aktual instansi tujuan.</td></tr>'
          + '<tr><td><b>2. Microteaching / Praktik Mengajar</b></td><td>Formasi Guru Pemda, Dosen Perguruan Tinggi, Widyaiswara.</td><td>Susun RPP/RPS ringkas 15 menit (Pembukaan + Tujuan → Inti Interaktif → Evaluasi Singkat &amp; Penutup) sesuai Kurikulum Merdeka/MBKM.</td></tr>'
          + '<tr><td><b>3. Praktik Kerja / Komputer / Bahasa Asing</b></td><td>Pranata Komputer, Humas, Analis Kebijakan, Peneliti, Diplomat (TOEFL/IELTS).</td><td>Siapkan portofolio teknis (query SQL/desain arsitektur SPBE/policy brief 1 halaman) serta latihan menulis/berbicara bahasa Inggris profesional bila dipersyaratkan.</td></tr>'
          + '<tr><td><b>4. Psikotes Lanjutan / Kesamaptaan Fisik</b></td><td>Kemenkumham, Kejaksaan, Basarnas, Kemenhub, Satpol PP/BPBD Pemda.</td><td>Jaga kebugaran fisik bertahap sejak 1 bulan sebelumnya (lari 12 menit, push-up, sit-up, shuttle run) dan latih tes ketelitian Kraepelin/Pauli serta kepribadian kerja konsisten.</td></tr>'
          + '</tbody></table>'
          + '<div class="callout"><b>📌 Cek Pengumuman Resmi Instansi Anda:</b> Selalu baca pengumuman teknis instansi (SSCASN &amp; situs resmi K/L/Pemda) mengenai bobot SKB CAT vs Non-CAT serta apakah ada syarat gugur pada tes kesehatan/kesamaptaan/TOEFL.</div>'
      }
    ],
    tips: [
      'Nyalakan selalu <b>Mode CAT BKN Ketat</b> setiap simulasi agar refleks ujian asli terlatih tanpa bergantung urutan opsi atau kunci instan.',
      'Jangan hanya mengulang Tryout Paket 1–5; kerjakan <b>Simulasi HOTS &amp; Visual BKN 500++</b> untuk melatih soal tersulit.',
      'Di soal TWK/TKP berparagraf panjang, <b>baca kalimat tanya paling bawah dahulu</b> sebelum memindai paragraf dari awal.',
      'Catat kesalahan pribadi di tiap topik lalu tuntaskan lewat modul Ulasan Kelemahan sebelum melangkah ke paket baru.',
      'Cek sedini mungkin apakah formasi tujuan Anda memakai <b>SKB CAT 100%</b> (umumnya Pemda) atau menyertakan <b>SKB Tambahan Non-CAT</b> (umumnya Kementerian).'
    ]
  });
})();
