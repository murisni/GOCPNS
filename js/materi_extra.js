/* ==========================================================================
   MATERI TAMBAHAN (v18) — Rencana belajar 7 hari, SKB Prakom Pemprov (mendalam),
   dan pelengkap SKD. File ini MENAMBAH ke window.MATERI (tidak mengubah materi.js).
   Muat SETELAH js/materi.js.
   ========================================================================== */
(function () {
  if (!window.MATERI) window.MATERI = [];
  var tbl = function (head, rows) {
    return '<table class="table table-sm"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
  var ul = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  var note = function (t) { return '<div class="callout">' + t + '</div>'; };
  var P = function (id, title, summary, subs, sections, tips) {
    return { id: id, group: 'SKB', skbCategory: 'PRAKOM', title: title, summary: summary, buckets: ['SKB_PRAKOM'], subs: subs, sections: sections, tips: tips };
  };

  var extra = [];

  /* ------------------------------------------------------------------ RENCANA 7 HARI */
  extra.push({
    id: 'rencana-7-hari', group: 'SKB', skbCategory: 'PRAKOM',
    title: 'Rencana Belajar 7 Hari — CPNS Prakom Pemprov',
    summary: 'Jadwal harian, target skor, urutan prioritas, dan aturan main tryout agar 7 hari benar-benar efektif.',
    buckets: [],
    sections: [
      {
        title: 'Peta Ujian & Target Skor',
        html: note('<b>Catatan jujur:</b> 7 hari tidak menggantikan pemahaman bertahun-tahun, tetapi cukup untuk melampaui peserta yang belajar tanpa sistem. Kuncinya: <b>prioritas, pengulangan berjarak, dan tryout ber-timer</b>.') +
          tbl(['Tahap', 'Isi', 'Catatan'], [
            ['SKD', '110 soal / 100 menit: TWK 30, TIU 35, TKP 45', 'Jawaban benar TWK/TIU = 5, salah/kosong = 0. TKP skor 1–5.'],
            ['Nilai maks.', 'TWK 150 · TIU 175 · TKP 225 (total 550)', 'Ambang batas SKD ditetapkan tiap periode seleksi (Kepmen PANRB). Contoh ambang CPNS umum 2024: TWK 65, TIU 80, TKP 166.'],
            ['SKB', 'Kompetensi bidang sesuai formasi (Prakom) via CAT', 'Format, jumlah soal, bobot SKD:SKB ditetapkan di pengumuman resmi instansi/BKN.']
          ]) +
          ul(['Pantau <b>pengumuman resmi</b> (SSCASN/BKN/portal instansi) untuk jadwal & kisi-kisi 2027 — saat ini belum ada kepastian jadwal.',
              'Target belajar: <b>TWK ≥ 105</b> (21 benar), <b>TIU ≥ 120</b> (24 benar), <b>TKP ≥ 185</b>. Di atas ambang batas supaya aman dan bersaing.',
              'Untuk Prakom Pemprov, SKB biasanya menentukan peringkat akhir — alokasikan ±45% waktu ke SKB.'])
      },
      {
        title: 'Jadwal Harian 1–3',
        html: tbl(['Hari', 'Pagi (materi)', 'Siang (latihan)', 'Malam (evaluasi)'], [
          ['1', 'TWK: Pancasila, UUD 1945, NKRI (materi + kuis)', 'Paket TWK 1–2 (30 soal / 30 menit)', 'Catat 10 kesalahan di buku kecil; ulang pembahasan'],
          ['2', 'TIU numerik: deret, berhitung cepat, soal cerita', 'Paket TIU 1–2 ber-timer (35 soal ≤ 60 dtk/soal)', 'Hafal rumus; kerjakan ulang soal salah'],
          ['3', 'SKB Prakom: regulasi JF Prakom, SPBE, tata kelola TI', 'Paket SKB Prakom 1 (20 soal)', 'Buat tabel ringkas Perpres/PermenPANRB (nomor–isi)']
        ])
      },
      {
        title: 'Jadwal Harian 4–7',
        html: tbl(['Hari', 'Pagi (materi)', 'Siang (latihan)', 'Malam (evaluasi)'], [
          ['4', 'SKB Prakom: basis data/SQL + algoritma + RPL', 'Paket SKB Prakom 2–3 + latihan query tulis tangan', 'Ulang soal salah; jelaskan ulang dengan kata sendiri'],
          ['5', 'SKB Prakom: jaringan (VLSM!), keamanan, infrastruktur/cloud', 'Paket SKB Prakom 4–5', 'Latihan subnetting 10 soal tanpa kalkulator'],
          ['6', 'TKP (pola skor 5) + TIU verbal/analitis + TWK bahasa', 'Tryout SKD lengkap #1 (100 menit)', 'Analisis per bagian: bagian terlemah jadi fokus besok'],
          ['7', 'Ringkasan: cheat sheet SKB + TWK; hanya baca ulang', 'Tryout SKD #2 (pagi) + paket SKB campuran (siang)', 'Tidur cukup. Tidak ada materi baru setelah jam 18.00']
        ]) + note('<b>Aturan emas:</b> soal yang salah dikerjakan ulang <b>besoknya</b> dan <b>3 hari kemudian</b> (spaced repetition). Itu lebih efektif daripada menambah soal baru.')
      },
      {
        title: 'Strategi Waktu di CAT',
        html: ul([
          '<b>Urutan pengerjaan SKD:</b> TWK (cepat, ±20 menit) → TKP (±35 menit) → TIU (sisa waktu ±45 menit). TIU paling menyita waktu, jadi sisakan waktu terbanyak.',
          '<b>Jangan lama di satu soal TIU:</b> lewat 90 detik → tandai, lanjut. Kembali di akhir.',
          '<b>TKP:</b> tidak ada jawaban salah; hindari ekstrem, pilih yang solutif–tuntas–sesuai aturan–berkolaborasi.',
          '<b>TWK:</b> waspadai kata mutlak (selalu, hanya, tidak pernah) dan pilihan yang bersikap diskriminatif atau melanggar hukum.',
          '<b>Tidak ada pengurangan nilai</b> untuk jawaban salah di TWK/TIU: isi semua soal, jangan dikosongkan.'
        ])
      }
    ],
    tips: ['Tryout dikerjakan <b>serius dengan timer</b>, bukan sambil membuka catatan.', 'Soal salah → tulis <b>alasan kesalahan</b> (konsep? ceroboh? waktu?).', 'Hari terakhir: ringkasan saja. Kualitas tidur lebih berharga daripada 20 soal tambahan.']
  });

  /* ------------------------------------------------------------------ PRAKOM */
  extra.push(P('prakom-regulasi', 'Prakom 1 — Regulasi JF Prakom & Manajemen ASN',
    'PermenPANRB 32/2020, UU ASN 20/2023, PP manajemen, disiplin & kinerja PNS, BerAKHLAK, gratifikasi.',
    ['Regulasi JF Prakom & Manajemen ASN'],
    [
      {
        title: 'JF Pranata Komputer (PermenPANRB 32/2020)',
        html: ul(['<b>Definisi:</b> PNS yang diberi tugas, tanggung jawab, wewenang, dan hak untuk melaksanakan kegiatan sistem teknologi informasi berbasis komputer.',
          '<b>Rumpun:</b> kekomputeran. <b>Penetapan:</b> 26 Mei 2020, berlaku (cek kembali jika ada perubahan terbaru).',
          '<b>3 unsur kegiatan (Pasal 7):</b> (1) tata kelola &amp; tata laksana TI, (2) infrastruktur TI, (3) sistem informasi &amp; multimedia.']) +
          tbl(['Kategori', 'Jenjang (rendah → tinggi)'], [
            ['Keterampilan', 'Terampil → Mahir → Penyelia'],
            ['Keahlian', 'Ahli Pertama → Ahli Muda → Ahli Madya → Ahli Utama']
          ]) + note('Mnemonik: <b>T-M-P</b> untuk keterampilan; <b>P-M-M-U</b> untuk keahlian. Lulusan S1/D-IV pada formasi keahlian umumnya mulai dari <b>Ahli Pertama</b>.')
      },
      {
        title: 'UU 20/2023 tentang ASN & turunannya',
        html: ul(['ASN = <b>PNS + PPPK</b>. Jabatan: manajerial (pimpinan tinggi, administrasi) &amp; nonmanajerial (fungsional dll).',
          '<b>PP 17/2020</b> (perubahan PP 11/2017): manajemen PNS. <b>PP 30/2019</b>: penilaian kinerja (SKP + perilaku kerja). <b>PP 94/2021</b>: disiplin PNS (ringan–sedang–berat).',
          'Seleksi dan pengangkatan CPNS mengikuti asas kompetensi, kualifikasi, dan kinerja secara terbuka tanpa diskriminasi.']) +
          tbl(['Peraturan', 'Substansi'], [['PP 94/2021', 'Disiplin PNS — kewajiban, larangan, hukuman'], ['PP 30/2019', 'Penilaian kinerja PNS'], ['PP 17/2020', 'Manajemen PNS (ubah PP 11/2017)'], ['PP 71/2019', 'PSTE (sistem &amp; transaksi elektronik) — bukan kepegawaian']])
      },
      {
        title: 'BerAKHLAK & Anti-Gratifikasi',
        html: tbl(['Nilai', 'Inti perilaku'], [['Berorientasi Pelayanan', 'Ramah, cekatan, solutif; melayani masyarakat'], ['Akuntabel', 'Bertanggung jawab, jaga data/aset, tidak menyalahgunakan wewenang'], ['Kompeten', 'Tingkatkan kompetensi, bantu orang lain belajar'], ['Harmonis', 'Saling peduli &amp; menghargai perbedaan'], ['Loyal', 'Setia pada Pancasila, UUD 1945, NKRI; jaga nama baik'], ['Adaptif', 'Cepat menyesuaikan, inovatif'], ['Kolaboratif', 'Kerja sama lintas pihak']]) +
          ul(['Gratifikasi terkait jabatan: <b>tolak</b>; bila telanjur terima → <b>lapor KPK/UPG ≤ 30 hari kerja</b>.', 'Benturan kepentingan: deklarasikan dan mundur dari proses keputusan.'])
      }
    ],
    ['Soal angka (nomor PP/Perpres): hafal pasangan <b>topik–nomor</b>, bukan isi detail.', 'Pilih jawaban yang taat aturan DAN melaporkan, bukan sekadar menolak.', 'Opsi berisi "ASN honorer" selalu salah pada soal definisi ASN.']));

  extra.push(P('prakom-spbe', 'Prakom 2 — SPBE & Kebijakan Digital Nasional',
    'Perpres 95/2018, Arsitektur SPBE 132/2022, Indeks SPBE, Satu Data, UU PDP, ITE, keamanan siber.',
    ['SPBE & Kebijakan Digital Nasional'],
    [
      {
        title: 'Perpres 95/2018 (SPBE) & Arsitektur',
        html: ul(['SPBE: penyelenggaraan pemerintahan memanfaatkan TIK untuk memberi layanan kepada pengguna SPBE.',
          '<b>Layanan SPBE:</b> administrasi pemerintahan berbasis elektronik + layanan publik berbasis elektronik.',
          '<b>Infrastruktur SPBE:</b> Pusat Data, Jaringan Intra, Sistem Penghubung Layanan. <b>Aplikasi:</b> umum (dipakai bersama) &amp; khusus (satu instansi).',
          '<b>Arsitektur SPBE (6 domain):</b> proses bisnis, data &amp; informasi, infrastruktur, aplikasi, keamanan, layanan. Perpres <b>132/2022</b> = Arsitektur SPBE Nasional.']) +
          note('Prinsip: <b>keterpaduan &amp; berbagi pakai</b> — hindari duplikasi aplikasi; bangun sesuai arsitektur.')
      },
      {
        title: 'Evaluasi SPBE & Satu Data',
        html: tbl(['Regulasi', 'Pokok'], [['PermenPANRB 59/2020', 'Pemantauan &amp; evaluasi SPBE: Indeks SPBE dengan 4 domain — kebijakan, tata kelola, manajemen, layanan'], ['Perpres 39/2019', 'Satu Data Indonesia: standar data, metadata baku, interoperabilitas, kode referensi/data induk; ada walidata &amp; produsen data'], ['Perpres 82/2023', 'Percepatan transformasi digital &amp; keterpaduan layanan digital nasional']])
      },
      {
        title: 'Perlindungan Data, ITE, & Keamanan Siber',
        html: tbl(['Regulasi', 'Inti'], [['UU 27/2022 (PDP)', 'Subjek data, pengendali, prosesor; data spesifik (kesehatan, biometrik, genetika, anak, dll.); kegagalan PDP wajib diberitahukan ≤ 3×24 jam'], ['UU ITE', '11/2008 → 19/2016 → 1/2024 (perubahan kedua)'], ['PP 71/2019', 'Penyelenggaraan sistem &amp; transaksi elektronik (PSTE)'], ['Perpres 47/2023', 'Strategi Keamanan Siber Nasional &amp; manajemen krisis siber'], ['BSSN / BSrE', 'Otoritas siber &amp; sertifikat elektronik (tanda tangan tersertifikasi)']])
      }
    ],
    ['Hafal pasangan <b>nomor ↔ topik</b>: 95/2018 SPBE · 132/2022 Arsitektur · 39/2019 Satu Data · 27/2022 PDP · 47/2023 Siber.', 'Soal skenario: pilih jawaban yang <b>mengacu arsitektur &amp; berbagi pakai</b>.', 'Interoperabilitas = kunci integrasi antarinstansi.']));

  extra.push(P('prakom-tata-kelola', 'Prakom 3 — Tata Kelola & Manajemen Layanan TI',
    'COBIT 2019, ITIL 4, ISO 27001/20000/22301/38500/31000, TOGAF, RTO/RPO, SLA.',
    ['Tata Kelola & Manajemen Layanan TI'],
    [
      {
        title: 'COBIT 2019 & ISO 38500',
        html: tbl(['Domain', 'Arti', 'Jenis'], [['EDM', 'Evaluate, Direct &amp; Monitor', 'Governance'], ['APO', 'Align, Plan &amp; Organize', 'Management'], ['BAI', 'Build, Acquire &amp; Implement', 'Management'], ['DSS', 'Deliver, Service &amp; Support', 'Management'], ['MEA', 'Monitor, Evaluate &amp; Assess', 'Management']]) +
          ul(['Total 40 tujuan (1 domain governance, 4 domain management).', 'ISO/IEC 38500: Evaluate–Direct–Monitor untuk pimpinan.'])
      },
      {
        title: 'ITIL 4',
        html: ul(['<b>4 dimensi:</b> organisasi &amp; manusia; informasi &amp; teknologi; mitra &amp; pemasok; aliran nilai &amp; proses.',
          '<b>7 prinsip:</b> fokus pada nilai · mulai dari kondisi sekarang · maju iteratif dengan umpan balik · kolaborasi &amp; visibilitas · berpikir holistik · sederhana &amp; praktis · optimalkan &amp; otomatiskan.',
          '<b>Service Value Chain:</b> Plan, Improve, Engage, Design &amp; Transition, Obtain/Build, Deliver &amp; Support.',
          '<b>Insiden</b> = pulihkan layanan secepatnya; <b>masalah</b> = akar penyebab.'])
      },
      {
        title: 'Standar ISO, TOGAF, Kontinuitas',
        html: tbl(['Standar', 'Fokus'], [['ISO/IEC 27001', 'SMKI (keamanan informasi). Versi 2022: 93 kontrol / 4 tema (organisasi, orang, fisik, teknologi)'], ['ISO/IEC 20000-1', 'Manajemen layanan TI'], ['ISO 22301', 'Kelangsungan bisnis (BCMS)'], ['ISO 31000', 'Manajemen risiko'], ['ISO/IEC 38500', 'Tata kelola TI']]) +
          ul(['<b>RTO</b>: batas waktu pemulihan layanan. <b>RPO</b>: batas kehilangan data (diukur waktu). <b>MTPD</b>: gangguan maksimum yang masih dapat ditoleransi.',
            '<b>SLA</b> (dengan pelanggan), <b>OLA</b> (antar-tim internal), <b>UC</b> (dengan pemasok).',
            '<b>TOGAF ADM:</b> Prelim → A Vision → B Business → C Information Systems → D Technology → E Opportunities &amp; Solutions → F Migration Planning → G Implementation Governance → H Change Management.'])
      }
    ],
    ['EDM = satu-satunya <b>governance</b> di COBIT.', 'RPO ↔ interval backup; RTO ↔ kecepatan pemulihan.', 'Kata "akar penyebab" → problem management.']));

  extra.push(P('prakom-basis-data', 'Prakom 4 — Basis Data & SQL',
    'Query, JOIN, agregat & NULL, normalisasi, ACID, indeks, backup, NoSQL, data warehouse.',
    ['Basis Data & SQL Lanjutan'],
    [
      {
        title: 'Rumus Baca Query & Perilaku NULL',
        html: ul(['Urutan eksekusi: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.',
          '<b>WHERE</b> menyaring baris sebelum dikelompokkan; <b>HAVING</b> menyaring kelompok setelah agregasi.',
          'Agregat (AVG, SUM, MIN, MAX, COUNT(kolom)) <b>mengabaikan NULL</b>; <b>COUNT(*)</b> menghitung semua baris.',
          'Perbandingan dengan NULL menghasilkan UNKNOWN → baris tidak terpilih; gunakan <code>IS NULL</code>.']) +
          tbl(['JOIN', 'Hasil'], [['INNER', 'Hanya baris yang cocok (duplikat ikut terhitung)'], ['LEFT', 'Semua baris kiri + yang cocok (NULL bila tidak)'], ['RIGHT', 'Kebalikan LEFT'], ['FULL', 'Semua baris kedua tabel']]) +
          note('Latihan: tabel A = {1,2,3}, B = {2,3,3,4}. INNER = 3 baris, LEFT = 4 baris, FULL = 5 baris.')
      },
      {
        title: 'Kategori Perintah, Kunci, Normalisasi',
        html: tbl(['Kategori', 'Contoh'], [['DDL', 'CREATE, ALTER, DROP, TRUNCATE'], ['DML', 'SELECT, INSERT, UPDATE, DELETE'], ['DCL', 'GRANT, REVOKE'], ['TCL', 'COMMIT, ROLLBACK, SAVEPOINT']]) +
          tbl(['Bentuk normal', 'Syarat'], [['1NF', 'Nilai atomik, tanpa grup berulang'], ['2NF', '1NF + tidak ada ketergantungan parsial pada kunci komposit'], ['3NF', '2NF + tidak ada ketergantungan transitif'], ['BCNF', 'Setiap determinan adalah kunci kandidat']]) +
          ul(['Relasi M:N → tabel penghubung dengan dua kunci asing.'])
      },
      {
        title: 'Transaksi, Indeks, Backup, NoSQL, DWH',
        html: ul(['<b>ACID:</b> Atomicity (semua/tidak sama sekali), Consistency, Isolation, Durability.',
          '<b>Isolasi:</b> Read Uncommitted &lt; Read Committed (cegah dirty read) &lt; Repeatable Read &lt; Serializable (cegah phantom).',
          '<b>Indeks B-tree:</b> baca/range cepat, tulis lebih lambat, makan ruang. <b>Deadlock</b> = saling menunggu kunci.',
          '<b>Backup:</b> full; differential (sejak full terakhir); incremental (sejak backup terakhir apa pun).',
          '<b>NoSQL:</b> Redis (key-value), MongoDB (document), Cassandra (wide-column), Neo4j (graph).',
          '<b>DWH:</b> OLTP (transaksi) vs OLAP (analisis); star schema = 1 tabel fakta + tabel dimensi.',
          '<b>SQL injection:</b> mitigasi utama = prepared statement/parameterized query.'])
      }
    ],
    ['Soal output query: gambar tabel kecil, jalankan urutan eksekusi.', 'Lihat kata <b>NULL</b> → waspada jebakan.', 'Normalisasi: tanyakan "bergantung pada <b>sebagian</b> kunci (2NF)" atau "pada atribut <b>non-kunci</b> (3NF)".']));

  extra.push(P('prakom-algoritma', 'Prakom 5 — Algoritma, Struktur Data & Analisis Kode',
    'Big-O, sorting, traversal pohon, stack/queue, rekursi, tebak output, OOP.',
    ['Pemrograman & Logika Algoritma'],
    [
      {
        title: 'Kompleksitas & Algoritma Dasar',
        html: tbl(['Algoritma', 'Waktu'], [['Binary search', 'O(log n) — maks ⌊log₂n⌋+1 langkah'], ['Linear search', 'O(n)'], ['Bubble/Selection/Insertion sort', 'O(n²)'], ['Merge/Heap sort', 'O(n log n)'], ['Hash lookup (rata-rata)', 'O(1)']]) +
          note('n = 100 → binary search maksimal ⌊log₂100⌋+1 = <b>7</b> perbandingan. Satu pass bubble sort memindahkan elemen terbesar ke ujung.')
      },
      {
        title: 'Struktur Data & Traversal',
        html: ul(['<b>Stack</b> LIFO (push/pop); <b>queue</b> FIFO (enqueue/dequeue).',
          'Traversal pohon biner — <b>Preorder:</b> akar–kiri–kanan; <b>Inorder:</b> kiri–akar–kanan; <b>Postorder:</b> kiri–kanan–akar.',
          'Contoh pohon: akar 1; kiri 2 (anak 4,5); kanan 3 → preorder 1 2 4 5 3; inorder 4 2 5 1 3; postorder 4 5 2 3 1.',
          'Slicing Python <code>x[a:b]</code> mengambil indeks a sampai b−1.',
          'JavaScript: <code>"5"+3</code> = "53", <code>"5"-3</code> = 2.'])
      },
      {
        title: 'OOP & Pola Berpikir Tebak Output',
        html: ul(['<b>Enkapsulasi</b> (sembunyikan data), <b>pewarisan</b>, <b>polimorfisme</b> (satu antarmuka, banyak perilaku), <b>abstraksi</b>.',
          'Teknik tebak output: buat tabel nilai variabel per iterasi; periksa batas atas eksklusif (<code>range(1,10,2)</code> → 1,3,5,7,9).',
          'Rekursi: tulis kasus dasar dulu, lalu hitung dari bawah (Fibonacci f(6)=13 jika f(0)=f(1)=1).'])
      }
    ],
    ['Kerjakan soal kode di kertas: tabel variabel per baris.', 'Perhatikan <b>batas eksklusif</b> dan indeks mulai 0.', 'Hafal tabel Big-O di atas.']));

  extra.push(P('prakom-rpl', 'Prakom 6 — RPL, Agile, Pengujian, API & DevSecOps',
    'SDLC, Scrum, UML, pengujian, REST/HTTP, JWT, OWASP, Git, CI/CD.',
    ['Rekayasa Perangkat Lunak & DevSecOps'],
    [
      {
        title: 'SDLC, Scrum, UML',
        html: ul(['<b>Scrum:</b> Product Owner (nilai produk &amp; backlog), Scrum Master (proses), Developers. Event: Sprint, Sprint Planning, Daily Scrum, Review, Retrospective.',
          '<b>UML:</b> use case (aktor–fungsi), class, sequence (urutan pesan), activity, state. <b>Komposisi</b> = bagian tidak dapat hidup tanpa keseluruhan; <b>agregasi</b> = bagian dapat berdiri sendiri.'])
      },
      {
        title: 'Pengujian & Kualitas',
        html: tbl(['Teknik', 'Inti'], [['Black box', 'Equivalence partitioning, boundary value analysis'], ['White box', 'Statement/branch/path coverage'], ['Regression', 'Pastikan perubahan tidak merusak fitur lama'], ['UAT', 'Penerimaan oleh pengguna']]) +
          note('Boundary value: rentang valid 18–58 → uji <b>17, 18, 19, 57, 58, 59</b>.')
      },
      {
        title: 'API, Keamanan Aplikasi, Git & CI/CD',
        html: tbl(['Kode HTTP', 'Arti'], [['200 / 201 / 204', 'OK / Created / No Content'], ['301 / 302', 'Redirect permanen / sementara'], ['400', 'Permintaan tidak valid'], ['401', 'Belum/gagal autentikasi'], ['403', 'Terautentikasi tapi tidak berhak'], ['404', 'Tidak ditemukan'], ['429', 'Terlalu banyak permintaan'], ['500 / 503', 'Kesalahan server / layanan tidak tersedia']]) +
          ul(['Idempoten: GET, PUT, DELETE, HEAD, OPTIONS (POST tidak). <b>JWT</b> = header.payload.signature.',
            '<b>OWASP Top 10 (2021):</b> A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection. XSS → output encoding/CSP; CSRF → token anti-CSRF.',
            '<code>git pull</code> = fetch + merge. CI/CD sehat: build → test → pindai keamanan → deploy bertahap; jangan simpan rahasia di repositori.'])
      }
    ],
    ['401 ≠ 403: <b>401 = siapa kamu?</b> · <b>403 = kamu tidak boleh</b>.', 'Pilihan yang menyebut "lewati pengujian demi tenggat" selalu salah.', 'OWASP: Access Control nomor 1 (2021).']));

  extra.push(P('prakom-jaringan', 'Prakom 7 — Jaringan Komputer & Subnetting VLSM',
    'OSI, routing, VLAN, DHCP/DNS, IPv6, wireless, dan trik subnetting/VLSM/summarization.',
    ['Jaringan Komputer Lanjutan'],
    [
      {
        title: 'Trik Subnetting Cepat',
        html: tbl(['Prefix', 'Mask', 'Blok', 'Host usable'], [['/24', '255.255.255.0', '256', '254'], ['/25', '.128', '128', '126'], ['/26', '.192', '64', '62'], ['/27', '.224', '32', '30'], ['/28', '.240', '16', '14'], ['/29', '.248', '8', '6'], ['/30', '.252', '4', '2'], ['/23', '255.255.254.0', '512', '510'], ['/22', '255.255.252.0', '1024', '1022'], ['/20', '255.255.240.0', '4096', '4094']]) +
          ul(['Host usable = 2<sup>h</sup> − 2 (h = bit host).',
            'Cari blok: network = kelipatan ukuran blok terbesar ≤ alamat. Contoh <b>172.16.40.77/20</b> → blok oktet-3 = 16 → network 172.16.32.0, broadcast 172.16.47.255.',
            '<b>Wildcard</b> = 255.255.255.255 − mask (/27 → 0.0.0.31).',
            '<b>Summarization:</b> 192.168.0.0–3.0/24 → 192.168.0.0/22.',
            '<b>VLSM:</b> urutkan kebutuhan dari terbesar; 100 host → /25, 50 → /26, 25 → /27.'])
      },
      {
        title: 'OSI, TCP/IP, Perangkat, Protokol',
        html: tbl(['Layer', 'PDU', 'Perangkat/Protokol'], [['7 Application', 'Data', 'HTTP, DNS, DHCP, SMTP'], ['6 Presentation', 'Data', 'TLS/enkripsi, format'], ['5 Session', 'Data', 'Sesi/NetBIOS'], ['4 Transport', 'Segment/Datagram', 'TCP, UDP'], ['3 Network', 'Paket', 'Router, IP, ICMP'], ['2 Data Link', 'Frame', 'Switch, MAC, VLAN'], ['1 Physical', 'Bit', 'Hub, kabel, repeater']]) +
          tbl(['Port', 'Layanan'], [['22', 'SSH'], ['25 / 587', 'SMTP'], ['53', 'DNS (UDP/TCP)'], ['80 / 443', 'HTTP / HTTPS'], ['3306', 'MySQL'], ['5432', 'PostgreSQL'], ['3389', 'RDP'], ['161', 'SNMP']])
      },
      {
        title: 'Routing, VLAN, DHCP, DNS, IPv6, Wireless',
        html: ul(['<b>AD default:</b> static 1 · eBGP 20 · EIGRP 90 · OSPF 110 · RIP 120. RIP = distance vector (maks 15 hop); OSPF = link-state (Dijkstra).',
          '<b>VLAN trunk:</b> IEEE 802.1Q (tag 4 byte). STP mencegah loop Layer 2.',
          '<b>DHCP:</b> Discover, Offer, Request, Acknowledge (DORA). <b>DNS:</b> A, AAAA, CNAME, MX, NS, PTR, TXT.',
          '<b>IPv6:</b> 128 bit; link-local FE80::/10; loopback ::1; "::" hanya sekali.',
          '<b>Wireless:</b> WPA3 memakai SAE; Wi-Fi 6 = 802.11ax.',
          'Traceroute "* * *" bukan bukti tujuan mati (bisa diblokir firewall).'])
      }
    ],
    ['Subnetting: tentukan <b>blok</b> dulu, lalu cari kelipatan.', 'VLSM: <b>terbesar dulu</b>.', 'Layer 3 = router/IP; Layer 2 = switch/MAC.']));

  extra.push(P('prakom-keamanan', 'Prakom 8 — Keamanan Informasi & Siber',
    'CIA, kriptografi, serangan, IDS/IPS, zero trust, insiden NIST, forensik, backup 3-2-1.',
    ['Keamanan Informasi & Siber'],
    [
      {
        title: 'Konsep Inti & Kriptografi',
        html: ul(['<b>CIA:</b> Confidentiality, Integrity, Availability. <b>AAA:</b> Authentication, Authorization, Accounting.',
          '<b>Simetris:</b> AES (satu kunci). <b>Asimetris:</b> RSA/ECC (publik–privat). <b>Hash:</b> SHA-256 (satu arah, panjang tetap).',
          '<b>Tanda tangan digital:</b> ditandatangani dengan kunci <b>privat pengirim</b>, diverifikasi dengan kunci <b>publik</b>. <b>Enkripsi rahasia:</b> kunci <b>publik penerima</b>.',
          '<b>Penyimpanan sandi:</b> hash lambat + salt (bcrypt/Argon2), bukan enkripsi/Base64.',
          '<b>MFA:</b> something you know / have / are.'])
      },
      {
        title: 'Ancaman & Kontrol',
        html: tbl(['Ancaman', 'Mitigasi utama'], [['Phishing', 'Edukasi, MFA, jangan klik tautan'], ['Ransomware', 'Backup 3-2-1 (offline/immutable), patch'], ['DDoS', 'CDN/anti-DDoS, rate limiting'], ['SQL injection', 'Prepared statement'], ['XSS', 'Output encoding, CSP'], ['MITM', 'TLS, sertifikat valid']]) +
          ul(['<b>IDS</b> mendeteksi/alarm; <b>IPS</b> memblokir (inline). <b>Zero Trust:</b> never trust, always verify; least privilege.'])
      },
      {
        title: 'Insiden & Forensik',
        html: ul(['<b>NIST IR:</b> Persiapan → Deteksi &amp; Analisis → Containment, Eradication, Recovery → Aktivitas pascainsiden.',
          '<b>Chain of custody</b> menjaga keabsahan barang bukti digital. Jangan hapus log/bukti.',
          'Insiden siber di instansi: <b>isolasi → amankan log → lapor atasan/CSIRT/BSSN</b>. Kebocoran data pribadi: notifikasi ≤ 3×24 jam (UU PDP).'])
      }
    ],
    ['Tanda tangan = <b>privat pengirim</b>.', 'Pilihan "menyembunyikan insiden" selalu salah.', 'Backup yang tidak pernah diuji pemulihannya = belum teruji.']));

  extra.push(P('prakom-infrastruktur', 'Prakom 9 — Infrastruktur, Server, Cloud & Pusat Data',
    'Linux, RAID, virtualisasi/container, cloud, availability & tier pusat data, DRC.',
    ['Infrastruktur TI, Server & Cloud'],
    [
      {
        title: 'RAID, Availability, Tier Data Center',
        html: tbl(['RAID', 'Kapasitas usable (n disk)', 'Toleransi'], [['0', 'n', '0 disk'], ['1', 'n/2 (2 disk = 1)', '1 disk per pasangan'], ['5', '(n−1)', '1 disk'], ['6', '(n−2)', '2 disk'], ['10', 'n/2', '1 per pasangan mirror']]) +
          tbl(['Availability', 'Downtime / tahun'], [['99%', '3,65 hari'], ['99,9%', '8,76 jam'], ['99,99%', '52,56 menit'], ['99,999%', '5,26 menit']]) +
          tbl(['Tier (Uptime)', 'Availability', 'Ciri'], [['I', '99,671%', 'Tanpa redundansi'], ['II', '99,741%', 'Redundansi parsial'], ['III', '99,982%', 'Concurrently maintainable'], ['IV', '99,995%', 'Fault tolerant']])
      },
      {
        title: 'Linux, Virtualisasi, Container, Cloud',
        html: ul(['<b>chmod:</b> r=4, w=2, x=1. 640 = rw-r-----; 755 = rwxr-xr-x. <code>df -h</code> (ruang disk per filesystem), <code>du</code> (per folder), <code>free</code> (memori).',
          '<b>Cron:</b> menit jam tanggal bulan hari-minggu. <code>30 2 * * 1</code> = Senin 02.30.',
          '<b>Hypervisor:</b> tipe 1 (bare-metal) vs tipe 2 (di atas OS). <b>Container</b> berbagi kernel host (lebih ringan dari VM).',
          '<b>Cloud:</b> IaaS (VM/jaringan/storage; pengguna kelola OS), PaaS (platform), SaaS (aplikasi jadi). Model: public, private, hybrid. <b>Shared responsibility.</b>',
          '<b>DR site:</b> hot (siap segera) &gt; warm &gt; cold. <b>DRC</b> tersedia untuk RTO/RPO kecil.'])
      }
    ],
    ['RAID 5 empat disk 2 TB → 6 TB; RAID 10 → 4 TB.', 'Downtime = (1 − A) × 8760 jam.', 'Container ≠ VM: tidak ada OS tamu penuh.']));

  extra.push(P('prakom-sig-data', 'Prakom 10 — Sistem Informasi, Multimedia, SIG & Data',
    'Jenis SI, DFD/ERD, SIG vektor-raster & CRS, WMS/WFS, multimedia, ML dasar.',
    ['Sistem Informasi, Multimedia, SIG & Data'],
    [
      {
        title: 'SIG & Multimedia',
        html: ul(['<b>Vektor:</b> titik/garis/poligon + atribut. <b>Raster:</b> grid piksel (citra, DEM).',
          '<b>WGS 84 = EPSG:4326</b> (lintang–bujur derajat); Web Mercator = EPSG:3857; UTM = proyeksi metrik per zona.',
          '<b>WMS:</b> gambar peta; <b>WFS:</b> fitur vektor; <b>WCS:</b> coverage raster.',
          '<b>Lossless:</b> PNG, FLAC. <b>Lossy:</b> JPEG, MP3, H.264. RGB (aditif, layar) vs CMYK (subtraktif, cetak).',
          'Ukuran gambar mentah = lebar × tinggi × bit / 8. (1920×1080×24 bit ≈ 6,2 MB).'])
      },
      {
        title: 'Jenis SI & Data/ML Dasar',
        html: tbl(['Sistem', 'Fokus'], [['TPS', 'Transaksi harian'], ['MIS', 'Laporan manajerial rutin'], ['DSS', 'Analisis keputusan semi-terstruktur'], ['EIS', 'Eksekutif, strategis'], ['ERP', 'Integrasi proses bisnis']]) +
          ul(['<b>Precision</b> = TP/(TP+FP); <b>Recall</b> = TP/(TP+FN). <b>Overfitting:</b> bagus di data latih, buruk di data baru.', 'Etika AI di pemerintahan: transparansi, akuntabilitas, pelindungan data pribadi, mitigasi bias.'])
      }
    ],
    ['WMS = gambar, WFS = fitur.', 'Precision menjawab "dari yang diprediksi positif, berapa yang benar".', 'MIS = laporan; DSS = keputusan.']));

  /* ------------------------------------------------------------------ SKD */
  extra.push({
    id: 'twk-sejarah-otda', group: 'TWK', title: 'Sejarah Nasional, Tata Negara & Otonomi Daerah',
    summary: 'Tanggal kunci sejarah, amandemen UUD 1945, lembaga negara, UNCLOS, dan UU 23/2014.',
    buckets: ['SKD_TWK'], subs: ['Sejarah Nasional', 'Sistem Pemerintahan'],
    sections: [
      {
        title: 'Garis Waktu Kunci',
        html: tbl(['Tanggal', 'Peristiwa'], [['20 Mei 1908', 'Budi Utomo — Kebangkitan Nasional'], ['28 Okt 1928', 'Sumpah Pemuda (Kongres Pemuda II)'], ['1 Juni 1945', 'Pidato Soekarno tentang dasar negara'], ['22 Juni 1945', 'Piagam Jakarta (Panitia Sembilan)'], ['16 Agt 1945', 'Rengasdengklok'], ['17 Agt 1945', 'Proklamasi'], ['18 Agt 1945', 'PPKI: UUD 1945, Presiden &amp; Wapres'], ['10 Nov 1945', 'Pertempuran Surabaya (Hari Pahlawan)'], ['19 Des 1948', 'PDRI (Hari Bela Negara)'], ['27 Des 1949', 'Pengakuan kedaulatan (KMB)'], ['1955', 'Konferensi Asia-Afrika (Dasasila Bandung)'], ['5 Juli 1959', 'Dekrit: kembali UUD 1945']])
      },
      {
        title: 'UUD 1945, Laut & Otonomi Daerah',
        html: ul(['<b>Amandemen:</b> 4 kali (1999–2002). Presiden maksimal 2 periode (Pasal 7). MPR = DPR + DPD. MK &amp; KY lahir dari amandemen III.',
          '<b>Pasal 1(3):</b> negara hukum. <b>Pasal 31(4):</b> anggaran pendidikan ≥ 20%. <b>Pasal 33(3):</b> bumi, air, kekayaan alam dikuasai negara. <b>Pasal 36:</b> bahasa negara.',
          '<b>UNCLOS 1982:</b> laut teritorial 12 mil, zona tambahan 24 mil, ZEE 200 mil, landas kontinen ≤ 350 mil. Deklarasi Djuanda 13 Des 1957.',
          '<b>UU 23/2014:</b> asas desentralisasi, dekonsentrasi, tugas pembantuan. Urusan absolut: politik luar negeri, pertahanan, keamanan, yustisi, moneter-fiskal nasional, agama. Gubernur = wakil pemerintah pusat.'])
      }
    ],
    tips: ['Hafal 5 tanggal: <b>1/6, 22/6, 17/8, 18/8, 5/7/1959</b>.', 'MK = UU vs UUD; MA = di bawah UU vs UU.', 'Urusan absolut = enam, bukan pendidikan/kesehatan.']
  });

  extra.push({
    id: 'twk-bahasa-lanjut', group: 'TWK', title: 'Bahasa Indonesia: Kata Baku, Imbuhan & Kalimat Efektif',
    summary: 'Daftar kata baku, kaidah peluluhan, penulisan di/ke, huruf kapital, dan pleonasme.',
    buckets: ['SKD_TWK'], subs: ['Bahasa Negara'],
    sections: [
      {
        title: 'Kata Baku Paling Sering Keluar',
        html: tbl(['Baku', 'Tidak baku'], [['analisis', 'analisa'], ['aktivitas', 'aktifitas'], ['apotek', 'apotik'], ['risiko', 'resiko'], ['izin', 'ijin'], ['nasihat', 'nasehat'], ['objek', 'obyek'], ['sistem', 'sistim'], ['kualitas', 'kwalitas'], ['praktik', 'praktek'], ['jadwal', 'jadual'], ['silakan', 'silahkan'], ['sekadar', 'sekedar'], ['saksama', 'seksama']]) +
          ul(['Peluluhan: me + pengaruh → <b>memengaruhi</b>; me + tulis → <b>menulis</b>; me + sapu → <b>menyapu</b>.'])
      },
      {
        title: 'Penulisan & Kalimat Efektif',
        html: ul(['<b>di-</b> sebagai awalan serangkai (dipindahkan); <b>di</b> sebagai kata depan dipisah (di Jakarta, ke Bandung).',
          'Jabatan yang diikuti nama orang/tempat → kapital (Gubernur Jawa Barat); jabatan umum tanpa nama → huruf kecil.',
          '<b>Pleonasme (hindari):</b> para + jamak ganda, naik ke atas, mundur ke belakang, agar supaya, para hadirin sekalian.',
          'Kalimat efektif: <b>hemat, jelas, logis, tepat subjek–predikat, paralel</b>.'])
      }
    ],
    tips: ['Pilih pasangan kata baku dengan menghafal 15 kata di atas.', 'Waspadai "para + -nya" dan "agar supaya".', 'Peluluhan huruf p, t, k, s (me+p → mem-).']
  });

  extra.push({
    id: 'tiu-logika-analitis', group: 'TIU', title: 'Logika Analitis, Silogisme & Padanan Kata',
    summary: 'Cara cepat soal posisi, jadwal, jujur-bohong, kondisional (modus ponens/tollens), dan sinonim-antonim.',
    buckets: ['SKD_TIU'], subs: ['Verbal - Analitis', 'Verbal - Penalaran Logis', 'Verbal - Padanan Kata'],
    sections: [
      {
        title: 'Teknik Analitis',
        html: ul(['Buat <b>tabel/garis posisi</b>; isi petunjuk yang pasti (ujung, hari tetap) terlebih dahulu.',
          'Petunjuk "tepat di sebelah" → perlakukan sebagai blok.',
          'Soal jujur–bohong: asumsikan satu orang jujur, cek kontradiksi.',
          '<b>Kondisional:</b> p→q. Modus ponens: p benar ⟹ q benar. <b>Modus tollens: q tidak ⟹ p tidak.</b> Kontraposisi: ¬q→¬p. <b>Hati-hati:</b> q benar ⟹ p belum tentu benar.'])
      },
      {
        title: 'Silogisme & Padanan Kata',
        html: ul(['Semua A adalah B; semua B adalah C ⟹ semua A adalah C.',
          'Sebagian A adalah B + semua B adalah C ⟹ sebagian A adalah C.',
          'Tidak ada A adalah B + sebagian C adalah A ⟹ sebagian C bukan B.',
          'Padanan kata: cek makna di KBBI, bukan kesan umum (efisien = berdaya guna; transparan = terbuka, antonim tertutup).'])
      }
    ],
    tips: ['Gambar diagram Venn untuk silogisme.', 'Kesimpulan yang <b>PASTI benar</b> sering memakai kata "sebagian".', 'Jika tidak yakin: eliminasi opsi mutlak.']
  });

  extra.push({
    id: 'tiu-himpunan-peluang', group: 'TIU', title: 'Himpunan, Peluang, Permutasi & Kombinasi',
    summary: 'Rumus kilat Venn, permutasi/kombinasi, peluang dasar, dan susunan berulang.',
    buckets: ['SKD_TIU'], subs: ['Himpunan, Peluang'],
    sections: [
      {
        title: 'Rumus Kilat',
        html: tbl(['Topik', 'Rumus'], [['Himpunan', 'n(A∪B) = n(A)+n(B)−n(A∩B); semesta = A∪B + di luar'], ['Permutasi', 'P(n,r) = n!/(n−r)!'], ['Kombinasi', 'C(n,r) = n!/(r!(n−r)!)'], ['Permutasi berulang', 'n!/(k₁!·k₂!…) — SISTEM: 6!/2! = 360'], ['Peluang', 'Kejadian/ruang sampel; dua dadu = 36 hasil'], ['Tanpa pengembalian', 'Kalikan peluang bersyarat: 4/10 × 3/9']]) +
          ul(['Orang harus bersebelahan → anggap satu blok, kali 2! (urutan internal).'])
      }
    ],
    tips: ['Venn: tulis dulu "tidak keduanya".', 'Dua dadu jumlah 7 = 6/36 = 1/6.', 'Soal "memilih" = kombinasi; "menyusun" = permutasi.']
  });

  extra.push({
    id: 'tkp-playbook', group: 'TKP', title: 'TKP Playbook: Dari Skor 3 ke Skor 5',
    summary: 'Cara membedakan opsi skor 5 vs 4 vs 3 pada skenario, tanpa trik "opsi terpanjang".',
    buckets: ['SKD_TKP'],
    sections: [
      {
        title: 'Anatomi Opsi Skor 5',
        html: tbl(['Skor', 'Ciri'], [['5', 'Tuntas (memecahkan akar masalah), sesuai aturan, proaktif, melibatkan pihak tepat, melaporkan/mendokumentasikan'], ['4', 'Benar dan sopan tetapi kurang tuntas atau kurang inisiatif / tanpa tindak lanjut'], ['3', 'Netral/pasif; menunggu; mengalihkan tanggung jawab dengan wajar'], ['2', 'Menghindar; menyalahkan; jalan pintas yang mulai melanggar'], ['1', 'Melanggar aturan/etika, merugikan, emosional, menutupi masalah']]) +
          note('<b>Panjang opsi bukan indikator.</b> Perhatikan kata kerja: <i>memastikan, melaporkan, mengusulkan, memperbaiki</i> (tinggi) vs <i>menunggu, membiarkan, meminta orang lain</i> (rendah).')
      },
      {
        title: 'Pola Per Indikator',
        html: ul(['<b>Pelayanan publik:</b> ramah + solutif + tuntas; kelompok rentan diprioritaskan; tolak pungli/gratifikasi dan laporkan.',
          '<b>Jejaring kerja:</b> komunikasi proaktif, win-win, patuh aturan, terima kritik.',
          '<b>Sosial budaya:</b> inklusif, toleran, edukasi tanpa menyudutkan.',
          '<b>TIK:</b> verifikasi informasi, keamanan data, prosedur insiden, hormati lisensi, adaptif &amp; membantu pengguna.',
          '<b>Profesionalisme:</b> akuntabel, akui kesalahan, negosiasi prioritas, kompeten, jujur pada data.',
          '<b>Anti radikalisme:</b> tolak ujaran kebencian &amp; paham anti-Pancasila secara santun, edukasi, lapor sesuai prosedur; jangan main hakim sendiri.'])
      }
    ],
    tips: ['Kata kunci skor 5: <b>melaporkan + memperbaiki + memastikan</b>.', 'Hindari opsi yang menutupi, menyalahkan, atau menunggu.', 'Jika dua opsi baik: pilih yang <b>lebih tuntas dan sistemik</b>.']
  });

  /* ------------------------------------------------------------------ TWK LENGKAP (v18.1) — ditaruh SEBELUM materi lama agar tautan pembahasan memakai versi lengkap */
  var twkFull = [];

  twkFull.push({
    id: 'twk-uud-lengkap', group: 'TWK', title: 'UUD 1945 Lengkap: Sejarah, Amandemen I–IV & Pasal Penting',
    summary: 'Naskah & sejarah konstitusi, isi tiap amandemen (tanggal, pasal), perubahan Pasal 1–3, lembaga negara, dan pasal-pasal yang paling sering ditanyakan.',
    buckets: ['SKD_TWK'], subs: ['Pilar Negara - UUD 1945'],
    sections: [
      {
        title: 'Sejarah Naskah & Struktur UUD',
        html: tbl(['Waktu', 'Peristiwa'], [
          ['29 Mei–1 Jun 1945', 'Sidang I BPUPKI (ketua dr. Radjiman Wedyodiningrat) — Mr. Moh. Yamin, Prof. Soepomo, Ir. Soekarno (1 Juni) mengusulkan dasar negara'],
          ['22 Jun 1945', 'Panitia Sembilan menyusun Piagam Jakarta'],
          ['10–17 Jul 1945', 'Sidang II BPUPKI — membahas rancangan UUD (Panitia Perancang diketuai Soekarno; Panitia Kecil/perumus diketuai Soepomo)'],
          ['18 Agt 1945', 'PPKI (ketua Soekarno) mengesahkan UUD 1945, memilih Presiden &amp; Wapres, mengubah sila pertama'],
          ['27 Des 1949', 'Konstitusi RIS (hasil KMB) berlaku'],
          ['17 Agt 1950', 'UUDS 1950 berlaku'],
          ['5 Jul 1959', 'Dekrit Presiden: (1) <b>kembali ke UUD 1945</b>, (2) <b>pembubaran Konstituante</b>, (3) pembentukan MPRS &amp; DPAS'],
          ['1999–2002', 'Amandemen I–IV (MPR)']
        ]) +
          ul(['<b>Sebelum amandemen:</b> Pembukaan + Batang Tubuh (16 bab, 37 pasal) + Aturan Peralihan + Aturan Tambahan + <b>Penjelasan</b>.',
            '<b>Sesudah amandemen:</b> Penjelasan <b>dihapus</b> (isi penting dimasukkan ke batang tubuh); 21 bab, 73 pasal, 170 ayat, 3 pasal Aturan Peralihan, 2 pasal Aturan Tambahan.',
            '<b>Pembukaan (4 alinea):</b> (1) kemerdekaan hak segala bangsa, penjajahan harus dihapuskan; (2) perjuangan sampai pintu gerbang kemerdekaan; (3) atas berkat rahmat Allah, didorong keinginan luhur; (4) <b>tujuan negara</b>, bentuk negara, dan <b>dasar negara (Pancasila)</b>.',
            '<b>Tujuan negara (alinea 4):</b> melindungi segenap bangsa &amp; tumpah darah; memajukan kesejahteraan umum; mencerdaskan kehidupan bangsa; ikut melaksanakan ketertiban dunia (kemerdekaan, perdamaian abadi, keadilan sosial).',
            'Pembukaan <b>tidak boleh diubah</b> menurut kesepakatan MPR; bentuk NKRI <b>tidak dapat diubah</b> (Pasal 37 ayat 5).'])
      },
      {
        title: 'Peta 4 Amandemen (Hafal Tahun, Sidang, Isi Pokok)',
        html: tbl(['Amandemen', 'Waktu', 'Isi pokok'], [
          ['I', '14–21 Okt 1999 (Sidang Umum MPR)', '<b>Membatasi kekuasaan Presiden</b> &amp; menguatkan DPR: Pasal 5(1), 7 (maks 2 periode), 9, 13, 14, 15, 17, 20, 21. Kekuasaan membentuk UU pindah ke DPR (Pasal 20).'],
          ['II', '7–18 Agt 2000 (Sidang Tahunan)', '<b>Daerah, DPR, wilayah, HAM, pertahanan, lambang:</b> Pasal 18–18B (pemda), 19–20A (DPR), 22A–22B, Bab IXA wilayah (25A), Bab X (26–28 warga negara), <b>Bab XA HAM (28A–28J)</b>, Bab XII (30), Bab XV (36A–36C: lambang, lagu kebangsaan).'],
          ['III', '1–9 Nov 2001 (Sidang Tahunan)', '<b>Lembaga negara &amp; pemilu:</b> Pasal 1(2) &amp; 1(3), 3, 6–6A (pilpres langsung), 7A–7C (pemberhentian Presiden), 8, 11, 17, 22C–22E (DPD, pemilu), 23–23G (APBN, BPK), 24–24C (MA, <b>KY, MK</b>).'],
          ['IV', '1–11 Agt 2002 (Sidang Tahunan)', '<b>MPR &amp; sosial-ekonomi:</b> Pasal 2(1) (MPR = DPR + DPD, utusan golongan dihapus), 6A(4), 8(3), 11, 16 (<b>DPA dihapus</b>), 23B, 23D (bank sentral), 24, <b>31 (pendidikan)</b>, 32 (budaya), <b>33 (ekonomi)</b>, 34 (kesejahteraan sosial), <b>37 (perubahan UUD)</b>, aturan peralihan &amp; tambahan.']
        ]) + note('<b>Mnemonik:</b> A-I = <b>Presiden dibatasi</b> · A-II = <b>Daerah + HAM</b> · A-III = <b>Lembaga + Pemilu (MK, KY, DPD, pilpres langsung)</b> · A-IV = <b>MPR + Pendidikan/Ekonomi/Sosial</b>. Pemilu presiden langsung pertama: <b>2004</b>.')
      },
      {
        title: 'Pasal 1–3: Kedaulatan Rakyat (Sering Dijebak!)',
        html: tbl(['Pasal', 'Sebelum amandemen', 'Sesudah amandemen'], [
          ['1 ayat 2', 'Kedaulatan di tangan rakyat dan <b>dilakukan sepenuhnya oleh MPR</b>', 'Kedaulatan di tangan rakyat dan <b>dilaksanakan menurut UUD</b> (diubah A-III, 9 Nov 2001)'],
          ['1 ayat 3', '— (belum ada)', '<b>Negara Indonesia adalah negara hukum</b> (A-III)'],
          ['2 ayat 1', 'MPR = DPR + utusan daerah + utusan golongan', 'MPR = <b>anggota DPR + anggota DPD</b> dipilih melalui pemilu (A-IV)'],
          ['3', 'MPR menetapkan UUD &amp; GBHN', 'MPR berwenang: <b>mengubah &amp; menetapkan UUD</b>; <b>melantik</b> Presiden &amp; Wapres; <b>memberhentikan</b> Presiden/Wapres dalam masa jabatan menurut UUD. GBHN tidak lagi ditetapkan.']
        ]) +
          ul(['Pasal 1 ayat 1: Negara Indonesia ialah negara kesatuan yang berbentuk republik (tidak berubah).',
            'MPR bukan lagi <b>lembaga tertinggi</b>; semua lembaga negara sejajar (checks and balances), kedaulatan dijalankan menurut UUD.'])
      },
      {
        title: 'Presiden & Wakil Presiden (Pasal 4–17)',
        html: tbl(['Pasal', 'Isi yang sering ditanyakan'], [
          ['4', 'Presiden memegang kekuasaan pemerintahan menurut UUD, dibantu Wakil Presiden'],
          ['5(1)', 'Presiden berhak mengajukan RUU kepada DPR; 5(2) menetapkan PP'],
          ['6A', 'Pasangan calon diusulkan parpol/gabungan sebelum pemilu; terpilih bila <b>&gt;50% suara</b> dan <b>≥20% di tiap provinsi</b>, tersebar di <b>&gt;1/2 jumlah provinsi</b>; bila tidak, putaran kedua dua suara terbanyak'],
          ['7', 'Masa jabatan <b>5 tahun</b>, dapat dipilih kembali <b>sekali</b> (maks 2 periode)'],
          ['7A–7B', 'Pemberhentian: pengkhianatan terhadap negara, korupsi, penyuapan, tindak pidana berat lainnya, perbuatan tercela, tidak lagi memenuhi syarat. Alur: <b>DPR usul → MK memutus → DPR → MPR</b>'],
          ['7C', 'Presiden <b>tidak dapat membekukan/membubarkan DPR</b>'],
          ['8', 'Presiden &amp; Wapres berhalangan bersamaan → <b>Menlu, Mendagri, Menhan</b> sebagai pelaksana tugas maks <b>30 hari</b>; MPR memilih pengganti'],
          ['11', 'Perang, damai, perjanjian internasional → <b>dengan persetujuan DPR</b>'],
          ['13', 'Duta &amp; konsul: Presiden mengangkat duta (dengan pertimbangan DPR); menerima penempatan duta negara lain (dengan pertimbangan DPR)'],
          ['14', '<b>Grasi &amp; rehabilitasi</b> → pertimbangan <b>MA</b>; <b>amnesti &amp; abolisi</b> → pertimbangan <b>DPR</b>'],
          ['15', 'Gelar, tanda jasa, tanda kehormatan'],
          ['17', 'Menteri diangkat dan diberhentikan oleh Presiden; membidangi urusan tertentu']
        ]) + note('<b>Trik:</b> GR-MA (<b>G</b>rasi-<b>R</b>ehabilitasi → <b>MA</b>); A-A-DPR (<b>A</b>mnesti-<b>A</b>bolisi → <b>DPR</b>).')
      },
      {
        title: 'DPR, DPD, Pemilu, BPK, Pemda',
        html: tbl(['Pasal', 'Isi'], [
          ['18, 18A, 18B', 'Pemda provinsi, kabupaten, kota; <b>otonomi seluas-luasnya</b> &amp; <b>tugas pembantuan</b>; 18B(1) satuan pemda <b>khusus/istimewa</b>; 18B(2) pengakuan <b>kesatuan masyarakat hukum adat</b>'],
          ['19–20', 'DPR dipilih melalui pemilu; <b>DPR memegang kekuasaan membentuk UU</b> (Pasal 20 ayat 1); RUU dibahas bersama Presiden'],
          ['20A', '<b>Fungsi DPR:</b> legislasi, anggaran, pengawasan. <b>Hak DPR:</b> interpelasi, angket, menyatakan pendapat. <b>Hak anggota:</b> mengajukan usul, menyampaikan pendapat, imunitas'],
          ['22(1)', 'Hal ihwal kegentingan memaksa → Presiden menetapkan <b>Perppu</b>'],
          ['22C–22D', '<b>DPD:</b> wakil provinsi, jumlah sama tiap provinsi, maks 1/3 jumlah DPR; dapat mengajukan RUU (otonomi daerah, hubungan pusat-daerah, SDA, perimbangan keuangan), ikut membahas, memberi pertimbangan (APBN, pajak, pendidikan, agama), mengawasi'],
          ['22E', '<b>Pemilu</b> tiap 5 tahun; asas <b>Luber-Jurdil</b>; peserta DPR/DPRD = parpol; peserta DPD = perseorangan; penyelenggara = KPU yang nasional, tetap, mandiri'],
          ['23', 'APBN ditetapkan tiap tahun dengan UU, dilaksanakan <b>terbuka &amp; bertanggung jawab</b> untuk sebesar-besar kemakmuran rakyat'],
          ['23D', 'Negara memiliki <b>bank sentral</b> (independen)'],
          ['23E–23G', '<b>BPK</b> bebas &amp; mandiri memeriksa pengelolaan &amp; tanggung jawab keuangan negara; berkedudukan di ibu kota, ada perwakilan di tiap provinsi']
        ])
      },
      {
        title: 'Kekuasaan Kehakiman (Pasal 24–24C)',
        html: tbl(['Lembaga', 'Wewenang utama'], [
          ['MA (24A)', 'Mengadili tingkat <b>kasasi</b>; <b>menguji peraturan di bawah UU terhadap UU</b>; empat lingkungan peradilan: umum, agama, militer, tata usaha negara'],
          ['KY (24B)', '<b>Mengusulkan pengangkatan hakim agung</b>; menjaga &amp; menegakkan <b>kehormatan, keluhuran martabat, perilaku hakim</b>'],
          ['MK (24C)', '<b>9 hakim</b> (3 dari MA, 3 dari DPR, 3 dari Presiden). Wewenang: (1) menguji <b>UU terhadap UUD</b>; (2) memutus <b>sengketa kewenangan lembaga negara</b> yang diberikan UUD; (3) memutus <b>pembubaran parpol</b>; (4) memutus <b>perselisihan hasil pemilu</b>; kewajiban: memutus pendapat DPR soal dugaan pelanggaran Presiden/Wapres']
        ]) + note('<b>Mnemonik MK = 4 wewenang + 1 kewajiban:</b> <b>U-S-P-P</b> + pemakzulan → Uji UU, Sengketa lembaga, Parpol bubar, Perselisihan pemilu.')
      },
      {
        title: 'Warga Negara, HAM, Pertahanan, Sosial-Ekonomi, Perubahan',
        html: tbl(['Pasal', 'Isi'], [
          ['25A', 'NKRI adalah <b>negara kepulauan</b> berciri nusantara; wilayah &amp; batas ditetapkan dengan UU'],
          ['27', '(1) segala warga bersamaan kedudukan dalam <b>hukum &amp; pemerintahan</b>; (2) hak atas <b>pekerjaan &amp; penghidupan layak</b>; (3) hak &amp; kewajiban <b>bela negara</b>'],
          ['28A–28J', '<b>Bab XA HAM</b> (A-II): hak hidup, berkeluarga, anak, pendidikan, kepastian hukum, berserikat, bebas dari penyiksaan, dst; 28J: kewajiban menghormati HAM orang lain'],
          ['29', 'Negara berdasar Ketuhanan Yang Maha Esa; jaminan <b>kemerdekaan memeluk agama &amp; beribadat</b>'],
          ['30', '<b>Sishankamrata</b> (pertahanan &amp; keamanan rakyat semesta); TNI alat negara bidang pertahanan; Polri alat negara menjaga kamtibmas'],
          ['31', '(1) hak pendidikan; (2) <b>wajib pendidikan dasar</b>, pemerintah wajib membiayai; (3) satu sistem pendidikan nasional; (4) <b>anggaran pendidikan ≥20% APBN &amp; APBD</b>; (5) kemajuan iptek'],
          ['32', 'Memajukan <b>kebudayaan nasional</b>; negara menghormati &amp; memelihara <b>bahasa daerah</b>'],
          ['33', '(1) perekonomian usaha bersama, <b>asas kekeluargaan</b>; (2) cabang produksi penting &amp; hajat hidup orang banyak <b>dikuasai negara</b>; (3) bumi, air, kekayaan alam <b>dikuasai negara</b> untuk kemakmuran rakyat; (4) demokrasi ekonomi: kebersamaan, efisiensi berkeadilan, berkelanjutan, berwawasan lingkungan, kemandirian, keseimbangan'],
          ['34', '<b>Fakir miskin &amp; anak terlantar</b> dipelihara negara; pengembangan <b>sistem jaminan sosial</b>'],
          ['36', 'Bahasa negara = <b>bahasa Indonesia</b>; 36A lambang negara <b>Garuda Pancasila</b> berselogan <b>Bhinneka Tunggal Ika</b>; 36B lagu kebangsaan <b>Indonesia Raya</b>'],
          ['37', 'Usul perubahan: <b>≥1/3 anggota MPR</b> secara tertulis; sidang dihadiri <b>≥2/3</b> anggota; putusan <b>≥50% + 1</b>; bentuk <b>NKRI tidak dapat diubah</b>']
        ])
      }
    ],
    tips: ['Soal "kapan/di tangan siapa kedaulatan": <b>Pasal 1(2)</b>, diubah <b>A-III (9 Nov 2001)</b>: dari "dilakukan sepenuhnya oleh MPR" → "dilaksanakan menurut UUD".', 'Hafal 4 baris peta amandemen (tahun + tema) — itu menjawab ±40% soal.', 'Perhatikan siapa memberi <b>pertimbangan</b>: MA (grasi/rehabilitasi) vs DPR (amnesti/abolisi/duta).']
  });

  twkFull.push({
    id: 'twk-sejarah-tokoh', group: 'TWK', title: 'Sejarah Pergerakan, Tokoh & Perjanjian (Nasionalisme)',
    summary: 'Organisasi pergerakan, tokoh, perjanjian dengan Belanda, dan tonggak kemerdekaan sampai Reformasi dalam satu tabel.',
    buckets: ['SKD_TWK'], subs: ['Nasionalisme'],
    sections: [
      {
        title: 'Organisasi Pergerakan Nasional',
        html: tbl(['Tahun', 'Organisasi / Peristiwa', 'Tokoh &amp; ciri'], [
          ['1908', '<b>Budi Utomo</b> (20 Mei = Hari Kebangkitan Nasional)', 'dr. Soetomo &amp; mahasiswa STOVIA; dr. Wahidin Soedirohoesodo sebagai inspirator; gerakan pendidikan/budaya Jawa'],
          ['1905/1912', '<b>Sarekat Dagang Islam → Sarekat Islam</b>', 'H. Samanhudi, H.O.S. Tjokroaminoto; bersifat massa &amp; ekonomi-politik'],
          ['1912', '<b>Indische Partij</b>', 'Tiga Serangkai: E.F.E. Douwes Dekker, dr. Cipto Mangunkusumo, Soewardi Soerjaningrat (Ki Hajar Dewantara); pertama menuntut Indonesia merdeka'],
          ['1912', 'Muhammadiyah', 'K.H. Ahmad Dahlan, pendidikan &amp; sosial keagamaan'],
          ['1922', 'Taman Siswa', 'Ki Hajar Dewantara; pendidikan nasional; semboyan <i>ing ngarso sung tulodho, ing madyo mangun karso, tut wuri handayani</i>'],
          ['1926', 'Nahdlatul Ulama', 'K.H. Hasyim Asy\'ari'],
          ['1927', '<b>Partai Nasional Indonesia (PNI)</b>', 'Ir. Soekarno; non-kooperasi, marhaenisme'],
          ['1926 &amp; 1928', 'Kongres Pemuda I &amp; <b>II (27–28 Okt 1928, Batavia)</b>', 'Sumpah Pemuda 28 Okt 1928; lagu Indonesia Raya (W.R. Supratman) pertama dikumandangkan'],
          ['1930-an', 'Perhimpunan Indonesia (Mohammad Hatta, di Belanda), Gerindo, Parindra', 'Diaspora pelajar memperkuat gagasan kemerdekaan']
        ]) + note('<b>Sumpah Pemuda:</b> satu tanah air, satu bangsa, <b>menjunjung</b> bahasa persatuan (bukan "satu bahasa").')
      },
      {
        title: 'Menuju Proklamasi & Perang Kemerdekaan',
        html: tbl(['Waktu', 'Peristiwa'], [
          ['1942', 'Jepang menduduki Indonesia'],
          ['1 Mar 1945', 'BPUPKI dibentuk (dilantik 28 Mei 1945)'],
          ['6 &amp; 9 Agt 1945', 'Bom atom Hiroshima &amp; Nagasaki; 14 Agt Jepang menyerah'],
          ['16 Agt 1945', 'Rengasdengklok; malam: perumusan naskah proklamasi di rumah Laksamana Maeda'],
          ['17 Agt 1945', 'Proklamasi; teks diketik <b>Sayuti Melik</b>, ditandatangani Soekarno-Hatta; bendera dijahit <b>Fatmawati</b>'],
          ['18 Agt 1945', 'PPKI: UUD 1945; Soekarno Presiden, Hatta Wapres'],
          ['10 Nov 1945', 'Pertempuran Surabaya (Bung Tomo, Hari Pahlawan)'],
          ['24 Des 1945', 'Pertempuran Ambarawa (Kol. Soedirman)'],
          ['Mar 1946', 'Bandung Lautan Api'],
          ['21 Jul 1947', 'Agresi Militer Belanda I'],
          ['19 Des 1948', 'Agresi Militer II; Yogyakarta jatuh; <b>PDRI</b> di Sumatra Barat (Sjafruddin Prawiranegara) = Hari Bela Negara'],
          ['1 Mar 1949', 'Serangan Umum 1 Maret di Yogyakarta (gagasan Sri Sultan HB IX; pelaksana Letkol Soeharto)']
        ])
      },
      {
        title: 'Perjanjian dengan Belanda & Pasca-Kemerdekaan',
        html: tbl(['Perjanjian', 'Waktu', 'Isi pokok'], [
          ['<b>Linggarjati</b>', 'Nov 1946', 'Belanda mengakui <b>de facto</b> Jawa, Madura, Sumatra'],
          ['<b>Renville</b>', 'Jan 1948 (kapal USS Renville)', 'Wilayah RI makin menyempit; garis Van Mook'],
          ['<b>Roem-Roijen</b>', 'Mei 1949', 'Pemerintah RI dikembalikan ke Yogyakarta; Belanda menghentikan operasi militer'],
          ['<b>Konferensi Meja Bundar (KMB)</b>', 'Agt–Nov 1949 (Den Haag)', 'Penyerahan kedaulatan <b>27 Des 1949</b> kepada RIS']
        ]) + tbl(['Tahun', 'Tonggak'], [
          ['1955', 'Pemilu pertama; Konferensi Asia-Afrika (Dasasila Bandung)'],
          ['1959', 'Dekrit Presiden 5 Juli → kembali ke UUD 1945 &amp; Konstituante dibubarkan'],
          ['1965–66', 'G30S; <b>Supersemar 11 Maret 1966</b>'],
          ['1998', 'Krisis moneter; <b>Reformasi</b> (21 Mei 1998 Soeharto mundur; B.J. Habibie menjadi Presiden)'],
          ['1999–2002', 'Amandemen UUD 1945']
        ])
      },
      {
        title: 'Nasionalisme: Konsep & Sikap',
        html: ul(['<b>Nasionalisme</b> = rasa cinta tanah air, kesetiaan, dan kebanggaan sebagai bangsa; tidak sama dengan <b>chauvinisme</b> (berlebihan, merendahkan bangsa lain).',
          'Bung Karno: nasionalisme Indonesia bukan nasionalisme yang menyendiri, tetapi <b>berperikemanusiaan (internasionalisme)</b>.',
          'Politik luar negeri <b>bebas aktif</b>: bebas (tidak terikat blok) dan aktif (ikut menjaga perdamaian dunia, mis. Pasukan Garuda).',
          'Contoh sikap: bangga produk dalam negeri, melestarikan budaya, disiplin, ikut menjaga persatuan; contoh yang <b>bukan</b>: mengutamakan kelompok/SARA, bangga berlebihan hingga menutup diri.'])
      }
    ],
    tips: ['Urutan paling sering ditanya: <b>1908 → 1928 → 1945 → 1949</b>.', '<b>Linggarjati</b> = de facto Jawa-Madura-Sumatra; <b>Renville</b> = di kapal; <b>Roem-Roijen</b> = kembali ke Yogya; <b>KMB</b> = kedaulatan.', 'Tokoh ↔ organisasi: Wahidin/Soetomo-Budi Utomo; Tjokroaminoto-SI; Tiga Serangkai-Indische Partij; Ki Hajar-Taman Siswa.']
  });

  twkFull.push({
    id: 'twk-bela-negara-lengkap', group: 'TWK', title: 'Bela Negara: Dasar Hukum, Bentuk, Ancaman & Contoh',
    summary: 'UUD Pasal 27(3) &amp; 30, UU 3/2002, UU 23/2019, 5 nilai dasar, komponen pertahanan, jenis ancaman, dan pola soal studi kasus.',
    buckets: ['SKD_TWK'], subs: ['Bela Negara'],
    sections: [
      {
        title: 'Dasar Hukum & 5 Nilai Dasar',
        html: tbl(['Dasar', 'Isi'], [
          ['UUD 1945 Pasal 27 ayat 3', 'Setiap warga negara berhak dan <b>wajib</b> ikut serta dalam upaya pembelaan negara'],
          ['UUD 1945 Pasal 30', 'Hak dan kewajiban usaha pertahanan &amp; keamanan negara; sistem <b>Sishankamrata</b>; TNI (pertahanan), Polri (kamtibmas)'],
          ['UU 3/2002', 'Pertahanan Negara — Pasal 9: bela negara melalui (1) <b>pendidikan kewarganegaraan</b>, (2) <b>pelatihan dasar kemiliteran</b> (wajib), (3) <b>pengabdian sebagai prajurit TNI</b> (sukarela/wajib), (4) <b>pengabdian sesuai profesi</b>'],
          ['UU 23/2019', 'Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (PSDN): komponen utama (TNI), cadangan, pendukung']
        ]) +
          tbl(['5 Nilai dasar bela negara'], [['1. Cinta tanah air'], ['2. Sadar berbangsa dan bernegara'], ['3. Yakin Pancasila sebagai ideologi negara'], ['4. Rela berkorban untuk bangsa dan negara'], ['5. Memiliki kemampuan awal bela negara']]) +
          note('<b>Mnemonik:</b> <b>C-S-Y-R-K</b> — Cinta, Sadar, Yakin, Rela, Kemampuan awal.')
      },
      {
        title: 'Komponen Pertahanan & Jenis Ancaman',
        html: tbl(['Komponen', 'Isi'], [['Utama', 'TNI'], ['Cadangan', 'Warga negara, sumber daya alam/buatan, sarana prasarana yang disiapkan untuk memperkuat komponen utama'], ['Pendukung', 'Warga negara, SDA/SDB, sarana prasarana yang secara langsung/tidak langsung meningkatkan kekuatan komponen utama &amp; cadangan']]) +
          tbl(['Jenis ancaman', 'Contoh'], [['Militer', 'Agresi, pelanggaran wilayah, spionase, sabotase, terorisme bersenjata'], ['Nonmiliter', 'Ideologi (paham anti-Pancasila), politik, ekonomi, sosial budaya, teknologi (serangan siber, hoaks), keselamatan umum (bencana, pandemi)'], ['Hibrida', 'Gabungan militer dan nonmiliter']])
      },
      {
        title: 'Pola Soal Studi Kasus & Sejarah Bela Negara',
        html: ul(['<b>Pola:</b> tokoh/profesi melakukan tindakan positif → dikaitkan dengan bentuk bela negara <b>pengabdian sesuai profesi</b>. Contoh: dokter bertugas di daerah 3T, petugas TI menangkal serangan siber/hoaks, guru mengabdi di perbatasan, petani menjaga ketahanan pangan.',
          'Tindakan sehari-hari (taat pajak, menjaga fasilitas umum, tertib lalu lintas) = <b>kesadaran bela negara</b> dalam kehidupan sehari-hari.',
          'Hari Bela Negara <b>19 Desember</b> — PDRI 1948 di Sumatra Barat, dipimpin <b>Sjafruddin Prawiranegara</b> setelah Yogyakarta diduduki Belanda.',
          'Bela negara <b>tidak identik</b> dengan militer; bukan hanya dalam keadaan perang.'])
      }
    ],
    tips: ['Pilih opsi <b>"pengabdian sesuai profesi"</b> untuk studi kasus warga sipil yang bekerja profesional.', 'Lima nilai dasar selalu <b>5</b>, bukan 4 atau 6.', 'Waspadai opsi "bela negara = wajib militer".']
  });

  twkFull.push({
    id: 'twk-bahasa-lengkap', group: 'TWK', title: 'Bahasa Indonesia Lengkap: EBI, Kalimat Efektif, Paragraf & UU 24/2009',
    summary: 'Huruf kapital, gelar, tanda baca, kata baku, imbuhan, kalimat efektif, ide pokok paragraf, dan kewajiban berbahasa Indonesia menurut UU 24/2009.',
    buckets: ['SKD_TWK'], subs: ['Bahasa Negara', 'Bahasa Indonesia'],
    sections: [
      {
        title: 'Huruf Kapital & Gelar',
        html: tbl(['Dikapitalkan', 'Contoh benar'], [
          ['Awal kalimat &amp; petikan langsung', 'Ia berkata, "Rapat dimulai pukul 09.00."'],
          ['Nama Tuhan, kitab suci', 'Allah, Al-Qur\'an, Alkitab'],
          ['Jabatan/pangkat <b>diikuti nama orang, instansi, atau tempat</b>', 'Presiden Prabowo, Gubernur Jawa Barat, Kepala Dinas Kominfo'],
          ['Jabatan <b>tidak diikuti nama</b> → huruf kecil', 'Ia dilantik menjadi gubernur. Mereka memilih presiden.'],
          ['Nama bangsa, suku, bahasa', 'bangsa Indonesia, suku Bugis, bahasa Sunda (<b>tapi</b> kata turunan: keinggris-inggrisan, pengindonesiaan)'],
          ['Tahun, bulan, hari, hari besar', 'tahun Hijriah, bulan Agustus, hari Senin, Hari Pahlawan, Ramadan'],
          ['Nama geografi (unsur utama)', 'Sungai Mahakam, Pulau Jawa (<b>tapi</b> "berlayar di sungai", "garam inggris")'],
          ['Nama resmi lembaga &amp; dokumen negara (kata penghubung tetap kecil)', 'Dewan Perwakilan Rakyat, Undang-Undang Dasar Republik Indonesia Tahun 1945, Peraturan Pemerintah Nomor 94 Tahun 2021'],
          ['Judul buku/artikel (kecuali partikel: di, ke, dari, dan, yang, untuk)', 'Panduan Praktis Pengelolaan Basis Data']
        ]) +
          tbl(['Penulisan gelar', 'Benar'], [['Gelar akademik: titik + koma antar-gelar, koma sebelum gelar belakang', 'Dr. Andi Pratama, S.H., M.H.'], ['Gelar depan tanpa koma', 'Prof. Dr. Siti Rahma, M.Si.'], ['Haji/Hajah', 'Haji Agus Salim (kapital jika diikuti nama)']])
      },
      {
        title: 'Tanda Baca, Angka & Penulisan Kata',
        html: ul(['<b>Koma</b> dipakai: pada rincian/pemerincian (A, B, dan C); sebelum <i>tetapi, melainkan, sedangkan</i>; setelah anak kalimat yang mendahului induk kalimat (<i>Jika hujan, rapat ditunda.</i>); setelah <i>oleh karena itu, jadi, namun</i> di awal kalimat. <b>Tidak</b> dipakai bila anak kalimat mengikuti induk (<i>Rapat ditunda jika hujan.</i>).',
          '<b>Titik dua</b> setelah pernyataan <b>lengkap</b> yang diikuti rincian; <b>tidak</b> dipakai setelah kata kerja/preposisi (salah: "Syaratnya adalah: KTP, ijazah").',
          '<b>Angka:</b> bilangan ≤ sepuluh umumnya dengan huruf; kalimat <b>tidak dimulai dengan angka</b>; tanggal: <i>17 Agustus 1945</i>; waktu: <i>pukul 09.30</i>.',
          '<b>Kata depan di, ke, dari</b> ditulis <b>terpisah</b> (di Jakarta, ke Bandung); <b>awalan di-</b> serangkai (dipindahkan, dikirim).',
          '<b>Partikel</b> -lah, -kah, -tah, -pun serangkai: <i>adapun, bagaimanapun, walaupun, sekalipun</i>; tetapi <i>apa pun, siapa pun, ke mana pun</i> dipisah.',
          '<b>Tanda hubung:</b> ke-5, se-Indonesia, pan-Afrika, anti-Pancasila (huruf kapital); gabungan dengan awalan serangkai: antikorupsi, nonblok, subbagian, ekstrakurikuler.',
          '<b>Peluluhan:</b> me+p → mem-… (<i>memengaruhi</i>, <i>memukul</i>); me+t → men-… (<i>menulis</i>); me+k → meng-… (<i>mengubah</i> dari ubah); me+s → meny-… (<i>menyapu</i>). Kata serapan berawalan huruf tertentu dan kata satu suku (<i>mengebom, mengecat</i>) memiliki aturan khusus.'])
      },
      {
        title: 'Daftar Kata Baku yang Paling Sering Keluar',
        html: tbl(['Baku', 'Tidak baku', 'Baku', 'Tidak baku'], [
          ['analisis', 'analisa', 'aktivitas', 'aktifitas'],
          ['apotek', 'apotik', 'risiko', 'resiko'],
          ['izin', 'ijin', 'nasihat', 'nasehat'],
          ['objek', 'obyek', 'sistem', 'sistim'],
          ['kualitas', 'kwalitas', 'praktik', 'praktek'],
          ['jadwal', 'jadual', 'silakan', 'silahkan'],
          ['sekadar', 'sekedar', 'saksama', 'seksama'],
          ['karier', 'karir', 'andal', 'handal'],
          ['imbau', 'himbau', 'lembap', 'lembab'],
          ['antre', 'antri', 'napas', 'nafas'],
          ['perajin', 'pengrajin', 'hierarki', 'hirarki'],
          ['sinkron', 'sinkron/sinkronisasi (tulisan lain)', 'kuitansi', 'kwitansi'],
          ['Jumat', 'Jum\'at', 'azan', 'adzan'],
          ['ijazah', 'ijasah', 'teknik', 'tehnik'],
          ['hakikat', 'hakekat', 'ekstrem', 'ekstrim'],
          ['metode', 'metoda', 'standar', 'standard']
        ]) + note('Jika dua opsi tampak benar, pilih yang <b>sesuai KBBI/EBI</b>; hafal 20 pasangan di atas dulu.')
      },
      {
        title: 'Kalimat Efektif',
        html: tbl(['Ciri', 'Penjelasan &amp; contoh'], [
          ['Kehematan', 'Hindari pleonasme: <i>para hadirin sekalian, naik ke atas, mundur ke belakang, agar supaya, sangat sekali, kembali lagi</i>'],
          ['Kesejajaran (paralelisme)', 'Bentuk kata sejajar: <i>Ia suka membaca, menulis, dan berdiskusi.</i> (bukan: membaca, menulis, dan diskusi)'],
          ['Kecermatan', 'Tidak menimbulkan tafsir ganda; subjek-predikat jelas'],
          ['Kepaduan', 'Tidak bertele-tele; <b>tidak ada subjek ganda</b>'],
          ['Kelogisan', 'Masuk akal secara makna'],
          ['Ketegasan', 'Penekanan pada gagasan pokok']
        ]) +
          ul(['<b>Kalimat tak bersubjek:</b> kalimat yang diawali preposisi (<i>Bagi, Untuk, Dalam, Pada</i>) sehingga subjek tidak tampak. Salah: "Bagi pegawai harus hadir." Benar: "Pegawai harus hadir."',
            '<b>Hindari:</b> "di mana", "yang mana" (pengaruh asing); "daripada" bukan untuk perbandingan; "dengan demikian" berlebihan; dua kata penghubung bersamaan: "walaupun ... tetapi ...".',
            '<b>Kata mubazir</b> pada jabatan/institusi: "para pegawai-pegawai", "banyak orang-orang".'])
      },
      {
        title: 'Ide Pokok Paragraf & Struktur',
        html: tbl(['Jenis paragraf', 'Letak kalimat utama'], [['Deduktif', 'Di <b>awal</b> paragraf (umum → khusus)'], ['Induktif', 'Di <b>akhir</b> paragraf (khusus → umum)'], ['Campuran', 'Di <b>awal dan akhir</b>'], ['Ineratif/deskriptif', 'Tersebar, tidak ada kalimat utama tunggal']]) +
          ul(['Ide pokok = gagasan utama; bisa dicari dengan membaca kalimat pertama/terakhir dan menguji "apakah kalimat lain menjelaskan ini?".',
            '<b>Kalimat penjelas</b>: contoh, data, alasan. <b>Simpulan</b> harus logis dari isi paragraf.',
            '<b>Kohesi:</b> penghubung antarkalimat (<i>namun, oleh karena itu, selain itu</i>); <b>koherensi:</b> kepaduan makna.'])
      },
      {
        title: 'UU 24/2009 — Wajib Berbahasa Indonesia',
        html: tbl(['Bahasa Indonesia <b>wajib</b> digunakan dalam...', 'Keterangan'], [
          ['Peraturan perundang-undangan', 'Pasal 26'],
          ['Dokumen resmi negara', 'Pasal 27'],
          ['Pidato resmi Presiden, Wapres, dan pejabat negara lain', 'Pasal 28 (di dalam &amp; luar negeri)'],
          ['Pengantar dalam pendidikan nasional', 'Pasal 29'],
          ['Pelayanan administrasi publik', 'Pasal 30'],
          ['Nota kesepahaman/perjanjian yang melibatkan lembaga negara, instansi pemerintah, atau swasta Indonesia', 'Pasal 31 (disertai bahasa pihak asing dan/atau Inggris)'],
          ['Komunikasi resmi di lingkungan kerja pemerintah &amp; swasta', 'Pasal 33'],
          ['Nama geografi, bangunan, jalan, permukiman, perkantoran, merek dagang, lembaga usaha/pendidikan', 'Pasal 36'],
          ['Rambu umum, penunjuk jalan, fasilitas umum, spanduk', 'Pasal 38'],
          ['Media massa', 'Pasal 39']
        ]) + note('UU 24/2009 juga mengatur Bendera, <b>Bahasa</b>, Lambang Negara, serta Lagu Kebangsaan. Soal sering memakai kalimat "wajib digunakan dalam..." — jawabannya hampir selalu <b>peraturan perundang-undangan, dokumen resmi negara, pidato resmi pejabat</b>.')
      }
    ],
    tips: ['Latih 20 pasangan kata baku, 8 aturan huruf kapital, dan 6 ciri kalimat efektif — itu cukup untuk sebagian besar soal bahasa.', 'Tanya diri: "ada <b>pleonasme</b>? ada <b>subjek ganda</b>? ada <b>kata depan salah</b>?"', 'Jabatan + nama/tempat = kapital; jabatan tanpa nama = kecil.']
  });

  /* sisipkan materi lengkap SEBELUM materi lama pada subtopik yang sama */
  twkFull.forEach(function (n) {
    var oldId = { 'twk-uud-lengkap': 'uud-1945', 'twk-sejarah-tokoh': 'nasionalisme-bela-negara', 'twk-bela-negara-lengkap': 'nasionalisme-bela-negara', 'twk-bahasa-lengkap': 'bahasa-negara' }[n.id];
    var i = -1;
    for (var k = 0; k < window.MATERI.length; k++) { if (window.MATERI[k].id === oldId) { i = k; break; } }
    if (i < 0) window.MATERI.push(n); else window.MATERI.splice(i, 0, n);
  });

  /* Sisipkan di urutan terdepan agar rencana & materi Prakom mudah ditemukan */
  Array.prototype.splice.apply(window.MATERI, [window.MATERI.length, 0].concat(extra));
})();
