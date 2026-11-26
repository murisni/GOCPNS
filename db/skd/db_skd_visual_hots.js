/* Bank Soal SKD HOTS & Visual (TWK Penalaran + Diagram SVG, TIU Visual/Tabel/Figural/HOTS, TKP BerAKHLAK Ultra-HOTS)
   Dirancang untuk mengejar ambang kompetitif tertinggi 500++ Kementerian & Pemda. */
(function () {
  if (!window.registerCPNSQuestions) return;

  const BG = '<rect width="100%" height="100%" rx="8" fill="#ffffff"/>';
  const wrapSvg = (vb, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="420" height="220">${BG}${body}</svg>`;

  const TWK_SVG_KEHAKIMAN = wrapSvg('0 0 420 200',
    '<rect x="130" y="10" width="160" height="32" rx="6" fill="#0f172a"/><text x="210" y="30" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">UUD NRI Tahun 1945</text>' +
    '<line x1="150" y1="42" x2="75" y2="78" stroke="#334155" stroke-width="2"/><line x1="210" y1="42" x2="210" y2="78" stroke="#334155" stroke-width="2"/><line x1="270" y1="42" x2="345" y2="78" stroke="#334155" stroke-width="2"/>' +
    '<rect x="15" y="78" width="120" height="44" rx="6" fill="#0284c7"/><text x="75" y="97" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Mahkamah Agung</text><text x="75" y="112" text-anchor="middle" fill="#e0f2fe" font-size="9">Uji PUU di bawah UU</text>' +
    '<rect x="150" y="78" width="120" height="44" rx="6" fill="#7c3aed"/><text x="210" y="97" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Mahkamah Konstitusi</text><text x="210" y="112" text-anchor="middle" fill="#ede9fe" font-size="9">Uji UU terhadap UUD</text>' +
    '<rect x="285" y="78" width="120" height="44" rx="6" fill="#059669"/><text x="345" y="97" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">Komisi Yudisial</text><text x="345" y="112" text-anchor="middle" fill="#d1fae5" font-size="9">Etik Hakim &amp; Calon MA</text>' +
    '<rect x="15" y="142" width="390" height="44" rx="6" fill="#f8fafc" stroke="#cbd5e1"/><text x="210" y="162" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Pasal 24 UUD 1945 &amp; Putusan MK No. 005/PUU-IV/2006</text><text x="210" y="177" text-anchor="middle" fill="#64748b" font-size="9">Lingkup pengawasan etik oleh KY fokus pada Hakim di bawah MA (bukan Hakim Konstitusi)</text>'
  );

  const TWK_SVG_IMPEACH = wrapSvg('0 0 420 180',
    '<rect x="14" y="45" width="112" height="62" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="70" y="70" text-anchor="middle" fill="#1e3a8a" font-size="11" font-weight="bold">1. DPR</text><text x="70" y="86" text-anchor="middle" fill="#1e40af" font-size="9">Hadir >=2/3 anggota</text><text x="70" y="98" text-anchor="middle" fill="#1e40af" font-size="9">Setuju >=2/3 hadir</text>' +
    '<line x1="126" y1="76" x2="152" y2="76" stroke="#0f172a" stroke-width="2"/><polygon points="152,71 160,76 152,81" fill="#0f172a"/>' +
    '<rect x="160" y="45" width="104" height="62" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="212" y="70" text-anchor="middle" fill="#4c1d95" font-size="11" font-weight="bold">2. MK</text><text x="212" y="86" text-anchor="middle" fill="#5b21b6" font-size="9">Wajib memutus</text><text x="212" y="98" text-anchor="middle" fill="#5b21b6" font-size="9">max 90 hari</text>' +
    '<line x1="264" y1="76" x2="290" y2="76" stroke="#0f172a" stroke-width="2"/><polygon points="290,71 298,76 290,81" fill="#0f172a"/>' +
    '<rect x="298" y="45" width="108" height="62" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="352" y="70" text-anchor="middle" fill="#78350f" font-size="11" font-weight="bold">3. MPR</text><text x="352" y="86" text-anchor="middle" fill="#92400e" font-size="9">Hadir >=3/4 anggota</text><text x="352" y="98" text-anchor="middle" fill="#92400e" font-size="9">Setuju >=2/3 hadir</text>' +
    '<text x="210" y="140" text-anchor="middle" fill="#334155" font-size="10" font-weight="bold">Alur Pemberhentian Presiden/Wapres (Pasal 7B UUD 1945)</text>'
  );

  const TIU_SVG_MATRIX = wrapSvg('0 0 360 220',
    '<g transform="translate(80,10)" stroke="#334155" stroke-width="2" fill="none">' +
    '<rect x="0" y="0" width="200" height="200"/><line x1="66" y1="0" x2="66" y2="200"/><line x1="133" y1="0" x2="133" y2="200"/><line x1="0" y1="66" x2="200" y2="66"/><line x1="0" y1="133" x2="200" y2="133"/>' +
    // Baris 1: panah kanan (1 dot), panah bawah (2 dots), panah kiri (3 dots)
    '<path d="M18 33 H44 M38 27 L44 33 L38 39" stroke="#0f172a"/><circle cx="33" cy="52" r="3" fill="#0284c7" stroke="none"/>' +
    '<path d="M100 18 V44 M94 38 L100 44 L106 38" stroke="#0f172a"/><circle cx="94" cy="54" r="3" fill="#0284c7" stroke="none"/><circle cx="106" cy="54" r="3" fill="#0284c7" stroke="none"/>' +
    '<path d="M180 33 H154 M160 27 L154 33 L160 39" stroke="#0f172a"/><circle cx="155" cy="54" r="3" fill="#0284c7" stroke="none"/><circle cx="167" cy="54" r="3" fill="#0284c7" stroke="none"/><circle cx="179" cy="54" r="3" fill="#0284c7" stroke="none"/>' +
    // Baris 2: panah bawah (2 dots), panah kiri (3 dots), panah atas (4 dots)
    '<path d="M33 84 V110 M27 104 L33 110 L39 104" stroke="#0f172a"/><circle cx="27" cy="121" r="3" fill="#0284c7" stroke="none"/><circle cx="39" cy="121" r="3" fill="#0284c7" stroke="none"/>' +
    '<path d="M114 98 H88 M94 92 L88 98 L94 104" stroke="#0f172a"/><circle cx="88" cy="121" r="3" fill="#0284c7" stroke="none"/><circle cx="100" cy="121" r="3" fill="#0284c7" stroke="none"/><circle cx="112" cy="121" r="3" fill="#0284c7" stroke="none"/>' +
    '<path d="M167 110 V84 M161 90 L167 84 L173 90" stroke="#0f172a"/><circle cx="150" cy="121" r="2.8" fill="#0284c7" stroke="none"/><circle cx="161" cy="121" r="2.8" fill="#0284c7" stroke="none"/><circle cx="172" cy="121" r="2.8" fill="#0284c7" stroke="none"/><circle cx="183" cy="121" r="2.8" fill="#0284c7" stroke="none"/>' +
    // Baris 3: panah kiri (3 dots), panah atas (4 dots), ?
    '<path d="M46 164 H20 M26 158 L20 164 L26 170" stroke="#0f172a"/><circle cx="21" cy="186" r="2.8" fill="#0284c7" stroke="none"/><circle cx="33" cy="186" r="2.8" fill="#0284c7" stroke="none"/><circle cx="45" cy="186" r="2.8" fill="#0284c7" stroke="none"/>' +
    '<path d="M100 176 V150 M94 156 L100 150 L106 156" stroke="#0f172a"/><circle cx="83" cy="186" r="2.8" fill="#0284c7" stroke="none"/><circle cx="94" cy="186" r="2.8" fill="#0284c7" stroke="none"/><circle cx="105" cy="186" r="2.8" fill="#0284c7" stroke="none"/><circle cx="116" cy="186" r="2.8" fill="#0284c7" stroke="none"/>' +
    '<text x="167" y="176" text-anchor="middle" fill="#dc2626" font-size="28" font-weight="bold" stroke="none">?</text></g>'
  );

  const TIU_SVG_KUBUS = wrapSvg('0 0 380 220',
    '<g transform="translate(80,15)" stroke="#0f172a" stroke-width="2" fill="#f8fafc">' +
    '<rect x="55" y="0" width="55" height="55"/><text x="82" y="34" text-anchor="middle" fill="#0284c7" font-size="20" stroke="none">▲</text>' +
    '<rect x="0" y="55" width="55" height="55"/><text x="27" y="89" text-anchor="middle" fill="#16a34a" font-size="20" stroke="none">■</text>' +
    '<rect x="55" y="55" width="55" height="55"/><text x="82" y="89" text-anchor="middle" fill="#0f172a" font-size="20" stroke="none">●</text>' +
    '<rect x="110" y="55" width="55" height="55"/><text x="137" y="89" text-anchor="middle" fill="#dc2626" font-size="20" stroke="none">✖</text>' +
    '<rect x="165" y="55" width="55" height="55"/><text x="192" y="89" text-anchor="middle" fill="#7c3aed" font-size="20" stroke="none">◆</text>' +
    '<rect x="55" y="110" width="55" height="55"/><text x="82" y="144" text-anchor="middle" fill="#d97706" font-size="20" stroke="none">★</text>' +
    '</g><text x="190" y="202" text-anchor="middle" fill="#475569" font-size="11">Jaring-jaring kubus utuh (simbol menghadap luar)</text>'
  );

  const TIU_SVG_GRAFIK = wrapSvg('0 0 420 220',
    '<text x="210" y="18" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Anggaran vs Realisasi Belanja Pemda X (Miliar Rp)</text>' +
    '<line x1="50" y1="175" x2="390" y2="175" stroke="#334155" stroke-width="2"/><line x1="50" y1="30" x2="50" y2="175" stroke="#334155" stroke-width="2"/>' +
    // Bar pairs (max 600 -> h=130)
    '<rect x="75" y="88" width="24" height="87" fill="#93c5fd"/><rect x="101" y="97" width="24" height="78" fill="#0284c7"/><text x="87" y="83" text-anchor="middle" fill="#334155" font-size="9">400</text><text x="113" y="92" text-anchor="middle" fill="#0369a1" font-size="9" font-weight="bold">360</text><text x="100" y="192" text-anchor="middle" fill="#0f172a" font-size="11">2021</text>' +
    '<rect x="155" y="77" width="24" height="98" fill="#93c5fd"/><rect x="181" y="87" width="24" height="88" fill="#0284c7"/><text x="167" y="72" text-anchor="middle" fill="#334155" font-size="9">450</text><text x="193" y="82" text-anchor="middle" fill="#0369a1" font-size="9" font-weight="bold">405</text><text x="180" y="192" text-anchor="middle" fill="#0f172a" font-size="11">2022</text>' +
    '<rect x="235" y="67" width="24" height="108" fill="#93c5fd"/><rect x="261" y="72" width="24" height="103" fill="#0284c7"/><text x="247" y="62" text-anchor="middle" fill="#334155" font-size="9">500</text><text x="273" y="67" text-anchor="middle" fill="#0369a1" font-size="9" font-weight="bold">475</text><text x="260" y="192" text-anchor="middle" fill="#0f172a" font-size="11">2023</text>' +
    '<rect x="315" y="45" width="24" height="130" fill="#93c5fd"/><rect x="341" y="51" width="24" height="124" fill="#0284c7"/><text x="327" y="40" text-anchor="middle" fill="#334155" font-size="9">600</text><text x="353" y="46" text-anchor="middle" fill="#0369a1" font-size="9" font-weight="bold">570</text><text x="340" y="192" text-anchor="middle" fill="#0f172a" font-size="11">2024</text>' +
    '<rect x="115" y="204" width="10" height="10" fill="#93c5fd"/><text x="130" y="213" fill="#475569" font-size="10">Pagu Anggaran</text><rect x="225" y="204" width="10" height="10" fill="#0284c7"/><text x="240" y="213" fill="#475569" font-size="10">Realisasi</text>'
  );

  const TIU_SVG_CERMIN = wrapSvg('0 0 380 200',
    '<text x="190" y="22" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Bentuk Awal -> Cermin sumbu Y -> Putar 90° Searah Jarum Jam</text>' +
    '<rect x="120" y="40" width="140" height="140" fill="#f8fafc" stroke="#cbd5e1"/>' +
    '<line x1="190" y1="40" x2="190" y2="180" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="2"/>' +
    // L-shape on left half pointing up-right: vertical bar x=142..154 y=75..145, foot at top? Let foot be bottom-right: vertical x=140..154 y=75..145, bottom arm x=140..178 y=131..145, red dot near top-left x=147 y=84
    '<path d="M140 75 H154 V131 H178 V145 H140 Z" fill="#1e293b"/>' +
    '<circle cx="147" cy="83" r="4" fill="#facc15"/>' +
    '<text x="198" y="54" fill="#dc2626" font-size="10" font-weight="bold">Sumbu Y (Cermin)</text>'
  );

  const TIU_SVG_TABEL = wrapSvg('0 0 420 180',
    '<text x="210" y="22" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Kapasitas Keran Kolam Cadangan Instansi (1 Kolam Penuh)</text>' +
    '<rect x="25" y="38" width="370" height="118" rx="6" fill="#f8fafc" stroke="#94a3b8"/>' +
    '<line x1="25" y1="68" x2="395" y2="68" stroke="#94a3b8"/><line x1="25" y1="98" x2="395" y2="98" stroke="#94a3b8"/><line x1="25" y1="128" x2="395" y2="128" stroke="#94a3b8"/>' +
    '<line x1="145" y1="38" x2="145" y2="156" stroke="#94a3b8"/><line x1="265" y1="38" x2="265" y2="156" stroke="#94a3b8"/>' +
    '<text x="85" y="57" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">Pipa</text><text x="205" y="57" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">Fungsi</text><text x="330" y="57" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="bold">Waktu Tunggal</text>' +
    '<text x="85" y="87" text-anchor="middle" fill="#334155" font-size="11">Keran A</text><text x="205" y="87" text-anchor="middle" fill="#059669" font-size="11">Mengisi (+)</text><text x="330" y="87" text-anchor="middle" fill="#334155" font-size="11">6 jam penuh</text>' +
    '<text x="85" y="117" text-anchor="middle" fill="#334155" font-size="11">Keran B</text><text x="205" y="117" text-anchor="middle" fill="#059669" font-size="11">Mengisi (+)</text><text x="330" y="117" text-anchor="middle" fill="#334155" font-size="11">4 jam penuh</text>' +
    '<text x="85" y="146" text-anchor="middle" fill="#334155" font-size="11">Katup C</text><text x="205" y="146" text-anchor="middle" fill="#dc2626" font-size="11">Menguras (-)</text><text x="330" y="146" text-anchor="middle" fill="#334155" font-size="11">12 jam habis</text>'
  );

  const mkMc = (bucket, cat, items) => items.map(([sub, id, q, options, ans, trick, explanation, img]) => {
    const scores = [0, 0, 0, 0, 0];
    scores[ans] = 5;
    const obj = { id, examType: bucket, category: cat, sub, q, options, ans, scores, trick, explanation, level: 'HOTS', practice: 'GOCPNS' };
    if (img) obj.img = img;
    return obj;
  });

  const TWK_HOTS = mkMc('SKD_TWK', 'TWK', [
    [
      'Pilar Negara - UUD 1945', 'twk-hots-ky-mk-01',
      'Perhatikan bagan kewenangan kekuasaan kehakiman pasca Amandemen UUD 1945 di bawah. Apabila seorang Ketua Pengadilan Negeri diduga melanggar kode etik berat saat memutus perkara sengketa lahan pemerintah, sementara sebuah Undang-Undang diduga menabrak hak konstitusional warga, lembaga mana saja yang berwenang secara berurutan memeriksa kedua hal tersebut?',
      [
        'A. Mahkamah Konstitusi memeriksa etik hakim PN; Mahkamah Agung menguji UU terhadap UUD',
        'B. Komisi Yudisial memeriksa etik hakim PN; Mahkamah Konstitusi menguji UU terhadap UUD 1945',
        'C. DPR memanggil hakim PN lewat hak angket; Komisi Yudisial membatalkan pasal UU',
        'D. Komisi Yudisial mengawasi etik Hakim Konstitusi; MA menguji UU terhadap UUD 1945',
        'E. Ombudsman RI menjatuhkan sanksi hakim PN; Presiden menerbitkan Perppu pembatalan UU'
      ],
      1,
      'Etik hakim peradilan umum = KY (dan MA internal); Uji UU vs UUD = MK!',
      'Pasca Amandemen UUD 1945 Pasal 24B dan 24C serta Putusan MK 005/PUU-IV/2006, KY mengawasi perilaku hakim agung/hakim peradilan di bawah MA, sedangkan uji materi UU terhadap UUD NRI 1945 adalah kewenangan eksklusif MK.',
      TWK_SVG_KEHAKIMAN
    ],
    [
      'Pilar Negara - UUD 1945', 'twk-hots-impeach-02',
      'Berdasarkan bagan alur Pasal 7B UUD NRI Tahun 1945 di bawah, syarat sah pengajuan usul pemberhentian Presiden dan keputusan akhir oleh MPR yang paling tepat adalah...',
      [
        'A. DPR cukup menyetujui dengan 50%+1 hadir, lalu MPR memutus tanpa perlu sidang MK',
        'B. Usul DPR disetujui >=2/3 dari anggota hadir (kuorum >=2/3 anggota), MK memutus max 90 hari, lalu MPR memutuskan dengan >=2/3 hadir dari kuorum >=3/4 jumlah anggota MPR',
        'C. MK berhak memberhentikan Presiden langsung begitu putusan pelanggaran hukum dibacakan',
        'D. MPR wajib mengadakan pemilu sela dalam 30 hari sebelum meminta pendapat hukum MK',
        'E. DPR bersama DPD langsung memberhentikan Presiden jika Presiden tidak hadir dalam rapat paripurna'
      ],
      1,
      'Hafal angka emas Pasal 7B: DPR (2/3 dari 2/3) -> MK (90 hari) -> MPR (2/3 dari 3/4).',
      'Pasal 7B UUD 1945 mensyaratkan DPR hadir minimal 2/3 anggota dan disetujui >=2/3 yang hadir, lalu MK memeriksa dan wajib memutus maksimal 90 hari. Jika terbukti, MPR bersidang dengan kuorum >=3/4 dan disetujui >=2/3 anggota yang hadir.',
      TWK_SVG_IMPEACH
    ],
    [
      'Pilar Negara - UUD 1945', 'twk-hots-perda-ujimateri-03',
      'DPRD dan Kepala Daerah sebuah provinsi mengesahkan Perda tentang retribusi digital yang ternyata bertentangan dengan Peraturan Pemerintah di atasnya. Mekanisme hukum yang sah untuk membatalkan Perda Provinsi tersebut saat ini adalah...',
      [
        'A. Dibatalkan langsung melalui Surat Keputusan Menteri Dalam Negeri lewat executive review',
        'B. Diajukan permohonan uji materi (judicial review) ke Mahkamah Agung',
        'C. Diajukan permohonan uji materi ke Mahkamah Konstitusi bersama gubernur',
        'D. Diubah sepihak lewat Peraturan Kepala Daerah tanpa persetujuan DPRD',
        'E. Dibekukan oleh BPK saat melakukan audit pendapatan daerah'
      ],
      1,
      'Pasca Putusan MK No. 137/PUU-XIII/2015 & 56/PUU-XIV/2016, Perda TIDAK lagi dicabut Kemendagri/Gubernur, melainkan lewat MA.',
      'Semua peraturan perundang-undangan di bawah UU (termasuk PP, Perpres, Perda Provinsi/Kab/Kota) yang bertentangan dengan peraturan di atasnya hanya dapat dibatalkan melalui uji materi di Mahkamah Agung (Pasal 24A UUD 1945).',
      ''
    ],
    [
      'Pilar Negara - Pancasila', 'twk-hots-nilai-pancasila-04',
      'Pemerintah meluncurkan program subsidi energi tepat sasaran berbasis KTP digital agar kelompok miskin menerima manfaat penuh, namun di lapangan sebagian lansia di pelosok tidak memiliki gawai sehingga petugas kelurahan turun mendata door-to-door sambil tetap membuka loket manual. Praktik tersebut mencerminkan perwujudan...',
      [
        'A. Nilai Dasar yang hanya berlaku di kota metropolitan dengan infrastruktur serat optik penuh',
        'B. Nilai Instrumental saja karena fokus pada penyusunan aplikasi digital tanpa pendampingan',
        'C. Nilai Praksis Sila Ke-5 Keadilan Sosial yang dikawinkan dengan nilai kemanusiaan adil dan beradab',
        'D. Pengingkaran terhadap reformasi birokrasi karena tetap mempertahankan layanan tatap muka',
        'E. Chauvinisme teknologi yang menolak sistem verifikasi otomatis pusat'
      ],
      2,
      'Tindakan nyata di lapangan menjawab hambatan keadilan akses warga rentan = Nilai Praksis Sila ke-5 + Sila ke-2.',
      'Pancasila sebagai ideologi terbuka diwujudkan dalam Nilai Praksis (perbuatan nyata sehari-hari). Menjamin akses kelompok rentan agar tidak terpinggirkan oleh digitalisasi adalah implementasi keadilan sosial (Sila 5) dan kemanusiaan (Sila 2).',
      ''
    ],
    [
      'Bela Negara & Pertahanan', 'twk-hots-belanegara-siber-05',
      'Seorang ASN Pranata Komputer/Analis menemukan akun media sosial palsu memakai video deepfake pimpinan instansinya yang memprovokasi warga agar memboikot layanan pajak daerah. Dalam perspektif UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional (PSDN), langkah ASN tersebut yang termasuk komponen Bela Negara non-fisik paling strategis adalah...',
      [
        'A. Membalas komentar provokatif dengan akun pribadi tanpa melapor atasan agar cepat reda',
        'B. Melakukan verifikasi forensik konten, berkoordinasi dengan tim humas/PPID dan CSIRT merilis klarifikasi resmi berbasis fakta, serta mengamankan kanal instansi',
        'C. Mematikan seluruh situs layanan pajak daerah selama 1 bulan agar bebas dari komentar warga',
        'D. Meminta pegawai lain menyebarkan balik isu tandingan mengenai kelompok pengkritik',
        'E. Menunggu laporan masuk ke Ombudsman sebelum melakukan klarifikasi publik'
      ],
      1,
      'Bela negara sipil era digital = menjaga kedaulatan informasi & keandalan layanan publik secara profesional dan sah.',
      'Menurut UU 23/2019, kesadaran bela negara dapat diaktualisasikan sesuai profesi sebagai pengabdian profesi untuk menjaga ketahanan nasional (termasuk ketahanan siber, integritas informasi publik, dan kelancaran pelayanan negara).',
      ''
    ],
    [
      'Integritas', 'twk-hots-gratifikasi-suap-06',
      'Dua situasi terjadi pada pejabat pengadaan: (1) Penyedia kalah tender mengirimi parsel hari raya senilai Rp1,2 juta ke rumah pejabat tanpa janji apa pun 2 bulan pascaproyek; (2) Penyedia menjanjikan komisi 5% sebelum pengumuman pemenang agar syarat teknis diubah untuk mengarah padanya. Perbedaan hukum keduanya menurut UU Tipikor adalah...',
      [
        'A. Keduanya otomatis bebas pidana selama uang dikembalikan setelah audit BPK selesai',
        'B. Situasi (1) adalah gratifikasi yang wajib dilaporkan ke KPK dalam 30 hari kerja agar tidak menjadi suap, sedangkan (2) langsung merupakan tindak pidana suap/permufakatan jahat',
        'C. Situasi (1) adalah pemerasan jabatan, sedangkan (2) adalah sumbangan sukarela rekanan',
        'D. Keduanya baru dapat diproses hukum jika nilai transaksi melebihi Rp50 juta',
        'E. Situasi (2) boleh dilaporkan ke UPG dalam 60 hari untuk menggugurkan unsur niat jahat'
      ],
      1,
      'Gratifikasi (Ps 12B) pasif tanpa kesepakatan = lapor <= 30 hari kerja ke KPK; Suap (Ps 5/11) ada transaksional/meeting of minds = pidana seketika!',
      'Pasal 12B UU Tipikor menganggap gratifikasi >=10jt atau terkait jabatan menjadi suap jika TIDAK dilaporkan ke KPK dalam <=30 hari kerja. Sementara janji imbalan untuk mengarahkan spesifikasi tender sejak awal sudah memenuhi unsur suap aktif/pasif tanpa bisa diputihkan pelaporan.',
      ''
    ],
    [
      'Nasionalisme', 'twk-hots-tkdn-nasionalisme-07',
      'Kementerian mengetatkan penggunaan Produk Dalam Negeri (PDN) dengan bobot TKDN + BMP >= 40% dalam e-Katalog meskipun harga produk impor serupa sedikit lebih murah di awal. Makna kebijakan ini ditinjau dari nilai Nasionalisme Pancasila adalah...',
      [
        'A. Bentuk chauvinisme sempit yang memusuhi investasi dan perdagangan internasional',
        'B. Perwujudan nasionalisme ekonomi dan kemandirian bangsa untuk menumbuhkan industri serta lapangan kerja domestik',
        'C. Pemborosan APBN karena melanggar prinsip efisiensi harga terendah semata',
        'D. Primordialisme kedaerahan yang hanya menguntungkan pengusaha satu provinsi',
        'E. Monopoli negara yang bertentangan dengan Pasal 33 UUD NRI Tahun 1945'
      ],
      1,
      'Nasionalisme sehat (bukan chauvinisme) memberdayakan ekonomi nasional & kemandirian industri dalam negeri (Pasal 33 UUD 1945 & Perpres PBJ).',
      'Nasionalisme modern bukan membenci negara lain (chauvinisme), melainkan berpihak pada kemandirian bangsa, nilai tambah manufaktur lokal, dan penyerapan tenaga kerja nasional sesuai amanat Pasal 33 UUD 1945 dan Inpres P3DN.',
      ''
    ],
    [
      'Pilar Negara - NKRI & Bhinneka Tunggal Ika', 'twk-hots-otda-urusan-08',
      'Sebuah pemerintah kabupaten ingin menerbitkan perjanjian pertahanan perbatasan dan pencetakan mata uang lokal guna mempercepat ekonomi perbatasan. Dalam desain negara kesatuan dengan otonomi luas menurut UU 23/2014, usulan tersebut ditolak karena...',
      [
        'A. Kabupaten belum memiliki Perda tentang tata ruang wilayah pesisir',
        'B. Pertahanan dan kebijakan moneter/fiskal nasional termasuk 6 urusan pemerintahan absolut yang sepenuhnya menjadi kewenangan Pemerintah Pusat',
        'C. Urusan tersebut termasuk urusan konkuren pilihan yang hanya boleh dikelola tingkat provinsi',
        'D. Kepala daerah belum meminta pertimbangan teknis kepada Dewan Perwakilan Daerah',
        'E. Perjanjian tersebut hanya boleh dilakukan oleh Badan Usaha Milik Daerah (BUMD)'
      ],
      1,
      '6 Urusan Absolut Pusat (Polugri, Pertahanan, Keamanan, Yustisi, Moneter/Fiskal Nasional, Agama)!',
      'Pasal 10 UU 23/2014 menetapkan 6 urusan absolut Pemerintah Pusat: politik luar negeri, pertahanan, keamanan, yustisi, moneter & fiskal nasional, dan agama. Pemda hanya menyelenggarakan urusan konkuren (wajib dasar, wajib non-dasar, pilihan).',
      ''
    ],
    [
      'Pilar Negara - UUD 1945', 'twk-hots-prerogatif-dpr-ma-09',
      'Salah satu ciri checks and balances dalam sistem presidensial Indonesia adalah keterlibatan lembaga lain dalam kewenangan Presiden. Pasangan kewenangan Presiden dan lembaga yang memberikan pertimbangan menurut Pasal 14 UUD NRI 1945 yang benar adalah...',
      [
        'A. Grasi & Rehabilitasi dengan pertimbangan DPR; Amnesti & Abolisi dengan pertimbangan MA',
        'B. Grasi & Rehabilitasi dengan pertimbangan MA; Amnesti & Abolisi dengan pertimbangan DPR',
        'C. Seluruh grasi, amnesti, abolisi, dan rehabilitasi diputus bersama MPR dalam sidang tahunan',
        'D. Duta & Konsul diangkat Presiden dengan pertimbangan Mahkamah Agung',
        'E. Menteri negara diangkat Presiden setelah mendapat persetujuan Komisi Yudisial'
      ],
      1,
      'Ingat akronim cepat: GR-MA (Grasi & Rehabilitasi = MA, ranah pidana individu), AA-DPR (Amnesti & Abolisi = DPR, bernuansa politik/massal).',
      'Pasal 14 UUD 1945 ayat (1) dan (2) membagi tegas: Grasi dan Rehabilitasi memperhatikan pertimbangan MA (yudikatif individual), sedangkan Amnesti dan Abolisi memperhatikan pertimbangan DPR (representasi politik).',
      ''
    ],
    [
      'Bahasa Indonesia (EYD V & Penalaran)', 'twk-hots-bahasa-eydv-10',
      'Cermati kalimat rancangan surat dinas berikut: "Para hadirin sekalian dimohon agar supaya tidak mengaktifkan gawai selama prosesi ujian berlangsung di dalam ruangan." Perbaikan kalimat tersebut agar efektif dan sesuai EYD V adalah...',
      [
        'A. "Para hadirin-hadirin dimohon agar tidak mengaktifkan gawai selama ujian berlangsung."',
        'B. "Hadirin dimohon tidak mengaktifkan gawai selama ujian berlangsung di ruangan."',
        'C. "Para hadirin sekalian di mohon tidak mengaktifkan gawai selama prosesi berlangsung."',
        'D. "Dimohon bagi seluruh para hadirin agar supaya tidak mengaktifkan gawainya."',
        'E. "Semua hadirin sekalian dimohon menon-aktifkan gawai masing-masing sekarang."'
      ],
      1,
      'Hapus pleonasme ("Para hadirin sekalian", "agar supaya"), "non-" ditulis serangkai ("menonaktifkan").',
      '"Hadirin" sudah bermakna jamak sehingga "para hadirin sekalian" tidak hemat; "agar supaya" adalah sinonim bertumpuk; bentuk "dimohon" dirangkai (awalan di-). Opsi B paling ringkas, baku, dan efektif.',
      ''
    ],
    [
      'Pilar Negara - Pancasila', 'twk-hots-ideologi-ai-11',
      'Kementerian menetapkan etika pemanfaatan kecerdasan buatan (AI) agar algoritma layanan publik transparan, tidak mendiskriminasi suku/wilayah tertentu, dan tetap menghormati putusan kemanusiaan ASN. Dalam konsep Alfian mengenai Pancasila sebagai ideologi terbuka, penyesuaian aturan terhadap kemajuan teknologi AI tanpa mengubah sila dasarnya mencerminkan dimensi...',
      [
        'A. Dimensi Realitas semata karena hanya memotret tradisi masyarakat masa lalu',
        'B. Dimensi Fleksibilitas (pengembangan) karena nilai dasar mampu menjawab tantangan zaman baru secara adaptif',
        'C. Dimensi Dogmatis yang memaksa teknologi lama dipertahankan tanpa inovasi',
        'D. Dimensi Keterbukaan tanpa batas yang membolehkan penggantian dasar negara',
        'E. Dimensi Eksklusivitas yang menolak seluruh standar riset global'
      ],
      1,
      '3 Dimensi Ideologi Terbuka (Alfian): Realitas (berakar di masyarakat), Idealitas (cita-cita harapan), Fleksibilitas (luwes ikuti perkembangan zaman).',
      'Dimensi Fleksibilitas memungkinkan Pancasila mengembangkan penafsiran, kebijakan baru, dan instrumen hukum (seperti etika AI dan UU PDP) mengikuti dinamika zaman tanpa meninggalkan nilai fundamentalnya.',
      ''
    ],
    [
      'Nasionalisme & Moderasi Beragama', 'twk-hots-bhinneka-layanan-12',
      'Di sebuah kecamatan, kelompok mayoritas menolak pembangunan fasilitas kesehatan terpadu karena bersebelahan dengan rumah ibadah minoritas dengan dalih ketertiban. Sikap camat/ASN yang paling mencerminkan Bhinneka Tunggal Ika dan netralitas hukum adalah...',
      [
        'A. Langsung membatalkan izin klinik tanpa kajian agar kelompok mayoritas tidak memprotes',
        'B. Membiarkan kedua kelompok menyelesaikan sendiri secara bebas tanpa kehadiran negara',
        'C. Mengadakan dialog inklusif lintas tokoh agama/masyarakat berbasis fakta tata ruang, hak warga atas layanan kesehatan, dan regulasi PBM tanpa mengorbankan hak minoritas',
        'D. Mengutamakan aspirasi suara terbanyak mutlak walaupun melanggar hak konstitusional warga lain',
        'E. Menutup sementara rumah ibadah demi menghindari gesekan selama proyek berlangsung'
      ],
      2,
      'Negara hadir melindungi hak konstitusional semua warga (bukan tirani mayoritas) lewat dialog & hukum objektif.',
      'Bhinneka Tunggal Ika menuntut keadilan setara dan musyawarah berkeadaban berdasar hukum tata negara, bukan tunduk pada tekanan eksklusi atau membungkam hak kelompok minoritas.',
      ''
    ],
    [
      'Sejarah Nasional & Kemerdekaan', 'twk-hots-sejarah-konsensus-13',
      'Peristiwa perubahan tujuh kata pada Pembukaan UUD 1945 (Piagam Jakarta) pada sidang PPKI 18 Agustus 1945 demi menjaga keutuhan wilayah Indonesia bagian timur hingga hari ini mengajarkan prinsip kepemimpinan negara berupa...',
      [
        'A. Sentralisasi kekuasaan eksekutif tanpa mempertimbangkan keberagaman daerah',
        'B. Kesediaan berjiwa besar menomorsatukan persatuan nasional di atas kepentingan golongan',
        'C. Pengabaian aspirasi kelompok keagamaan dalam penyusunan konstitusi',
        'D. Penghapusan nilai ketuhanan dari seluruh norma dasar bernegara',
        'E. Penundaan pengesahan kemerdekaan hingga seluruh negara mengakui kedaulatan'
      ],
      1,
      'Tokoh BPUPKI/PPKI merelakan ego golongan demi persatuan seluruh Nusantara (Sila ke-3).',
      'Kesepakatan 18 Agustus 1945 merupakan kompromi luhur pendiri bangsa (Moh. Hatta, Ki Bagus Hadikusumo, Teuku M. Hasan, dll.) yang mengutamakan persatuan NKRI sambil tetap menjunjung Ketuhanan Yang Maha Esa.',
      ''
    ],
    [
      'Pilar Negara - UUD 1945', 'twk-hots-apbn-bpk-14',
      'Jika Rancangan APBN yang diajukan Presiden tidak disetujui oleh DPR sebelum tahun anggaran baru dimulai, sekaligus ditemukan indikasi penyimpangan dana kementerian pada tahun berjalan, langkah konstitusional menurut Pasal 23 dan 23E UUD NRI 1945 yang benar adalah...',
      [
        'A. Pemerintah otomatis berhenti beroperasi total sampai DPR mengesahkan APBN baru; audit dilakukan oleh DPR sendiri',
        'B. Pemerintah menjalankan APBN tahun yang lalu; pemeriksaan pengelolaan tanggung jawab keuangan negara dilakukan oleh BPK untuk diserahkan ke DPR, DPD, dan DPRD',
        'C. Presiden langsung menerbitkan PP APBN darurat tanpa persetujuan DPR; BPKP menjatuhkan vonis pidana',
        'D. Menteri Keuangan meminjam dana darurat tanpa batas dari bank komersial; hasil audit dirahasiakan dari publik',
        'E. DPD menggantikan fungsi DPR mengesahkan APBN, sementara MK mengaudit kas negara'
      ],
      1,
      'Pasal 23 ayat (3): APBN ditolak -> pakai APBN tahun lalu! Pasal 23E: BPK audit, serahkan ke DPR, DPD, dan DPRD sesuai kewenangan.',
      'Desain konstitusi UUD 1945 mencegah government shutdown lewat Pasal 23 ayat (3) (memakai APBN tahun lalu), sementara pengawasan eksternal keuangan negara bersifat independen oleh BPK.',
      ''
    ],
    [
      'Bahasa Indonesia (EYD V & Penalaran)', 'twk-hots-paragraf-kebijakan-15',
      'Bacalah teks singkat berikut: "Indeks SPBE kementerian tahun ini melonjak ke predikat Sangat Baik, namun tingkat keluhan warga terhadap antrean tatap muka tetap tinggi. Hal ini mengindikasikan banyak aplikasi dibangun hanya untuk memenuhi skor administratif, bukan memangkas kerumitan proses bisnis warga." Simpulan yang paling tepat dan logis atas teks tersebut adalah...',
      [
        'A. Skor SPBE yang tinggi selalu menjamin kepuasan warga meningkat otomatis',
        'B. Perlu penyelarasan pembangunan sistem digital dengan penyederhanaan proses bisnis nyata yang dirasakan masyarakat',
        'C. Seluruh layanan tatap muka harus dihapus besok agar keluhan warga langsung nol',
        'D. Penilaian indeks SPBE tidak memerlukan integrasi data antarunit',
        'E. Warga belum mampu menggunakan gawai sehingga antrean fisik tidak perlu ditata'
      ],
      1,
      'Fokus pada jurang antara "skor administratif" vs "proses bisnis warga" — hindari kesimpulan ekstrem ("hapus semua/selalu").',
      'Premis utama menyoroti ketimpangan antara skor teknis-administratif dengan pengalaman layanan warga, sehingga kesimpulan logis yang menjawab masalahnya adalah perbaikan proses bisnis agar digitalisasi berdampak nyata.',
      ''
    ]
  ]);

  const TIU_HOTS = mkMc('SKD_TIU', 'TIU', [
    [
      'Figural - Penalaran Matriks 3x3', 'tiu-hots-figural-matriks-01',
      'Amati pola baris dan kolom pada matriks figural 3×3 berikut (perubahan arah panah + pertambahan jumlah titik biru). Gambar yang tepat untuk mengisi kotak bertanda "?" adalah...',
      [
        'A. Panah mengarah ke BAWAH disertai 5 titik biru',
        'B. Panah mengarah ke ATAS disertai 5 titik biru',
        'C. Panah mengarah ke KANAN disertai 5 titik biru',
        'D. Panah mengarah ke KANAN disertai 4 titik biru',
        'E. Panah mengarah ke KIRI disertai 6 titik biru'
      ],
      2,
      'Cek arah panah tiap langkah ke kanan: +90° searah jarum jam! Baris 3: Kiri (←) -> Atas (↑) -> KANAN (→), titik: 3 -> 4 -> 5!',
      'Di setiap baris, bergerak ke kanan memutar panah 90° searah jarum jam (Baris 1: →, ↓, ←; Baris 2: ↓, ←, ↑; Baris 3: ←, ↑, maka sel terakhir → ke kanan) dan jumlah titik selalu +1 (3, 4, menjadi 5 titik).',
      TIU_SVG_MATRIX
    ],
    [
      'Figural - Jaring-jaring Kubus', 'tiu-hots-figural-kubus-02',
      'Jika jaring-jaring pada gambar dilipat membentuk kubus tertutup dengan seluruh simbol berada di sisi luar, pernyataan mana yang PASTI SALAH mengenai dua sisi yang saling bersebelahan?',
      [
        'A. Sisi ▲ bersebelahan dengan sisi ●',
        'B. Sisi ▲ berhadapan langsung dengan sisi ★ dan TIDAK mungkin bersebelahan',
        'C. Sisi ■ berhadapan langsung dengan sisi ● dan TIDAK mungkin bersebelahan',
        'D. Sisi ◆ berhadapan dengan sisi ●',
        'E. Sisi ■ berhadapan langsung dengan sisi ✖'
      ],
      2,
      'Pasangan berhadapan (lompat 1 kotak lurus): (▲, ★), (■, ✖), (●, ◆)! Jadi ■ bersebelahan dengan ● (BUKAN berhadapan).',
      'Dalam jaring salib memanjang 4 kotak horizontal [■, ●, ✖, ◆] serta cabang vertikal [▲, ●, ★], sisi berlawanan selalu berselang satu petak: ■ berlawanan ✖, ● berlawanan ◆, dan ▲ berlawanan ★. Jadi menyebut ■ berhadapan dengan ● adalah salah.',
      TIU_SVG_KUBUS
    ],
    [
      'Numerik - Interpretasi Grafik Data', 'tiu-hots-grafik-pemda-03',
      'Berdasarkan grafik batang Pagu vs Realisasi Belanja Pemda X tahun 2021–2024 di bawah, persentase pertumbuhan REALISASI belanja tahun ke tahun tertinggi terjadi pada periode...',
      [
        'A. 2021 ke 2022 (+12,5%)',
        'B. 2022 ke 2023 (+17,3%)',
        'C. 2023 ke 2024 (+20,0%)',
        'D. 2021 ke 2022 karena persentase serapan awalnya sudah di atas 95%',
        'E. Sama rata tepat 15% setiap tahun'
      ],
      2,
      'Hitung kenaikan realisasi (batang biru tua): 360->405 (+45/360=12,5%), 405->475 (+70/405=17,3%), 475->570 (+95/475=1/5=20,0%).',
      'Kenaikan 2023 -> 2024: (570 - 475) / 475 = 95 / 475 = 1/5 = 20%, jauh melampaui 2021->2022 (12,5%) dan 2022->2023 (17,28%).',
      TIU_SVG_GRAFIK
    ],
    [
      'Figural - Transformasi Cermin & Rotasi', 'tiu-hots-figural-cermin-04',
      'Bentuk huruf L gelap bertitik kuning pada gambar dicerminkan terhadap Sumbu Y merah, lalu bayangannya diputar 90° SEARAH jarum jam terhadap titik pusat objek. Posisi bentuk L dan titik kuning hasil akhir adalah...',
      [
        'A. Batang panjang vertikal di kanan, kaki pendek ke kanan atas, titik kuning di kanan bawah',
        'B. Batang panjang horizontal di sisi atas, kaki pendek mengarah ke bawah kanan, titik kuning di kiri atas',
        'C. Batang panjang rebah horizontal di sisi BAWAH dengan kaki pendek mengarah ke ATAS di sisi KIRI, dan titik kuning di ujung KANAN BAWAH',
        'D. Tetap tegak menghadap kanan seperti posisi awal dengan titik kuning di kiri atas',
        'E. Batang panjang horizontal di sisi BAWAH dengan kaki pendek mengarah ke BAWAH di sisi kanan dan titik kuning di kiri'
      ],
      2,
      'Cermin Y: vertikal pindah ke KANAN, kaki ke KIRI bawah, titik di KANAN ATAS. Putar 90° CW ((dx,dy)->(-dy,dx)): kanan-atas pindah ke KANAN-BAWAH; kaki kiri-bawah naik ke KIRI-ATAS!',
      'Langkah 1 (Cermin sumbu Y): batang vertikal berada di sisi kanan, kaki pendek menunjuk ke kiri bawah, dan titik kuning di kanan atas. Langkah 2 (Putar 90° searah jarum jam): sisi kanan atas berpindah ke kanan bawah, sehingga batang panjang rebah di sisi bawah dengan titik kuning di ujung kanan bawah, sementara kaki pendek tegak ke atas di ujung kiri.',
      TIU_SVG_CERMIN
    ],
    [
      'Numerik - Tabel Debit & Waktu', 'tiu-hots-tabel-keran-05',
      'Merujuk tabel spesifikasi pipa kolam cadangan di bawah, petugas membuka Keran A, Keran B, dan lupa menutup Katup C secara bersamaan sejak pukul 08.00 WIB saat kolam kosong. Pada pukul berapa kolam terisi penuh?',
      [
        'A. 10.24 WIB',
        'B. 11.00 WIB',
        'C. 11.30 WIB',
        'D. 12.00 WIB',
        'E. Tidak pernah penuh karena terkuras Katup C'
      ],
      1,
      'Laju bersih = 1/6 + 1/4 - 1/12 = (2 + 3 - 1)/12 = 4/12 = 1/3 kolam/jam -> butuh 3 jam!',
      'Dalam 1 jam: A mengisi 1/6 bagian, B mengisi 1/4 bagian, C membuang 1/12 bagian. Total laju = (2+3-1)/12 = 4/12 = 1/3 per jam. Kolam penuh dalam 3 jam setelah 08.00 = pukul 11.00 WIB.',
      TIU_SVG_TABEL
    ],
    [
      'Numerik - Perbandingan Kuantitatif', 'tiu-hots-perbandingan-kuadrat-06',
      'Diketahui persamaan x² - 5x - 14 = 0 dan bilangan y = 4. Jika P = x dan Q = y, manakah pernyataan yang paling tepat?',
      [
        'A. P > Q',
        'B. P < Q',
        'C. P = Q',
        'D. P = Q + 3',
        'E. Hubungan antara P dan Q tidak dapat ditentukan'
      ],
      4,
      'Faktorkan: (x - 7)(x + 2) = 0 -> x = 7 (> 4) ATAU x = -2 (< 4)! Ada dua tanda pertidaksamaan -> Tidak bisa ditentukan!',
      'Akar-akar x² - 5x - 14 = 0 adalah x₁ = 7 dan x₂ = -2. Saat x = 7 maka P > Q, namun saat x = -2 maka P < Q. Karena menghasilkan dua hubungan berbeda, P dan Q tidak dapat ditentukan.',
      ''
    ],
    [
      'Numerik - Perbandingan Kuantitatif', 'tiu-hots-perbandingan-pecahan-07',
      'Tanpa kalkulator, bandingkan nilai P = (1/19 - 1/23) dan Q = (1/21 - 1/25). Hubungan antara P dan Q yang benar adalah...',
      [
        'A. P > Q',
        'B. P < Q',
        'C. P = Q',
        'D. P + Q = 1',
        'E. Hubungan P dan Q tidak dapat ditentukan'
      ],
      0,
      'Samakan pembilang: P = (23-19)/(19×23) = 4/437; Q = (25-21)/(21×25) = 4/525. Pembilang sama (4), penyebut LEBIH KECIL -> pecahan LEBIH BESAR!',
      'Selisih pembilang keduanya sama-sama 4, namun penyebut P (19×23 = 437) lebih kecil daripada penyebut Q (21×25 = 525), sehingga nilai P pasti lebih besar daripada Q (P > Q).',
      ''
    ],
    [
      'Numerik - Soal Cerita Campuran & Untung', 'tiu-hots-campuran-dagang-08',
      'Koperasi pegawai mencampur 20 kg beras jenis A (harga beli Rp12.000/kg) dengan 30 kg beras jenis B (harga beli Rp15.000/kg). Jika seluruh campuran hendak dijual dengan target keuntungan bersih 20%, harga jual per kilogram harus ditetapkan sebesar...',
      [
        'A. Rp15.600/kg',
        'B. Rp16.200/kg',
        'C. Rp16.560/kg',
        'D. Rp16.800/kg',
        'E. Rp17.250/kg'
      ],
      2,
      'Modal rata-rata = (20×12rb + 30×15rb) / 50 = (240rb + 450rb)/50 = 690rb/50 = 13.800. Jual = 13.800 × 1,2 = 16.560!',
      'Total modal 50 kg = Rp240.000 + Rp450.000 = Rp690.000 -> modal per kg = Rp13.800. Dengan margin 20%: 13.800 + (20% × 13.800 = 2.760) = Rp16.560/kg.',
      ''
    ],
    [
      'Numerik - Peluang & Kombinatorika', 'tiu-hots-peluang-tim-09',
      'Inspektorat akan membentuk tim audit berisi 4 orang dari 5 auditor dan 3 pranata hukum. Peluang terpilihnya tim yang berisi tepat 2 auditor dan 2 pranata hukum adalah...',
      [
        'A. 1/7',
        'B. 2/7',
        'C. 3/7',
        'D. 4/7',
        'E. 5/14'
      ],
      2,
      'C(5,2) = 10, C(3,2) = 3 -> cara berhasil = 30. Ruang sampel C(8,4) = (8×7×6×5)/(4×3×2×1) = 70. Peluang = 30/70 = 3/7.',
      'Banyak kombinasi tim target = C(5,2) × C(3,2) = 10 × 3 = 30. Total seluruh cara memilih 4 dari 8 pegawai = C(8,4) = 70. Peluang = 30/70 = 3/7.',
      ''
    ],
    [
      'Numerik - Deret Angka Ganda', 'tiu-hots-deret-berselang-10',
      'Tentukan dua bilangan berikutnya pada deret: 2, 6, 5, 12, 8, 24, 11, 48, ..., ...',
      [
        'A. 14 dan 72',
        'B. 14 dan 96',
        'C. 15 dan 96',
        'D. 16 dan 84',
        'E. 13 dan 96'
      ],
      1,
      'Pisah posisi ganjil & genap! Ganjil: 2, 5, 8, 11 (+3) -> 14. Genap: 6, 12, 24, 48 (×2) -> 96!',
      'Pola berselang dua larik: suku ganjil bertambah konstan +3 (2 -> 5 -> 8 -> 11 -> 14) dan suku genap dikali 2 (6 -> 12 -> 24 -> 48 -> 96).',
      ''
    ],
    [
      'Verbal - Silogisme HOTS', 'tiu-hots-silogisme-negasi-11',
      'Semua pelamar CPNS yang lolos administrasi berhak mengikuti SKD. Tidak satu pun peserta dengan berkas KTP palsu yang lolos administrasi. Sebagian pendaftar formasi Analis memiliki pengalaman kerja lebih dari 5 tahun. Simpulan yang PASTI BENAR adalah...',
      [
        'A. Semua pelamar berpengalaman 5 tahun pasti lolos administrasi dan ikut SKD',
        'B. Tidak ada peserta dengan berkas KTP palsu yang berhak mengikuti SKD',
        'C. Sebagian peserta KTP palsu tetap boleh ikut SKD jika berpengalaman 5 tahun',
        'D. Semua yang berhak mengikuti SKD adalah pelamar berpengalaman 5 tahun',
        'E. Sebagian yang tidak lolos administrasi pasti memakai KTP palsu'
      ],
      1,
      'Cek rantai syarat: KTP palsu -> TIDAK lolos administrasi. Jika syarat lolos SKD = lolos administrasi -> KTP palsu pasti gagal ikut SKD.',
      'Semua yang berhak ikut SKD pasti lolos administrasi. Karena tidak ada pemilik KTP palsu yang lolos administrasi, maka secara mutlak tidak ada pemilik KTP palsu yang berhak mengikuti SKD.',
      ''
    ],
    [
      'Verbal - Analitis Posisi Melingkar', 'tiu-hots-analitis-bundar-12',
      'Enam pejabat (A, B, C, D, E, F) rapat di meja bundar bernomor kursi 1–6 searah jarum jam: (1) A duduk di kursi 1 berhadapan tepat dengan D; (2) B dan C duduk berurutan searah jarum jam tepat di antara A dan D; (3) E duduk tepat di sebelah kiri A (sebelum A searah jarum jam). Siapakah yang duduk berhadapan tepat dengan C?',
      [
        'A. B',
        'B. F',
        'C. E',
        'D. A',
        'E. D'
      ],
      2,
      'Susun kursi 1–6 searah jarum jam: A=1, D=4 -> B=2, C=3 -> kiri A = kursi 6 = E -> tersisa F=5. Berhadapan: (1-4), (2-5), (3-6)!',
      'Urutan melingkar 1..6: 1=A, 2=B, 3=C, 4=D, 5=F, 6=E. Dalam lingkaran 6 kursi, kursi berhadapan selalu berselisih 3 posisi: kursi 3 (C) berhadapan tepat dengan kursi 6 (E).',
      ''
    ],
    [
      'Verbal - Analogi Bertingkat', 'tiu-hots-analogi-profesi-13',
      'DOKTER : STETOSKOP : DIAGNOSIS = ... : ... : ...',
      [
        'A. AUDITOR : KERTAS KERJA : OPINI',
        'B. PETANI : SAWAH : HAMA',
        'C. HAKIM : PENJARA : POLISI',
        'D. GURU : MURID : SEKOLAH',
        'E. ARSITEK : SEMEN : RUMAH'
      ],
      0,
      'Pola: Profesi + Alat/Instrumen Kerja Utama + Keluaran Evaluatif (Opini/Diagnosis)!',
      'Dokter menggunakan stetoskop untuk menghasilkan diagnosis; sejajar secara logis dengan Auditor menggunakan Kertas Kerja Audit (KKA) untuk merumuskan opini/simpulan audit.',
      ''
    ],
    [
      'Numerik - Proyek & Tambah Pekerja', 'tiu-hots-pekerja-henti-14',
      'Proyek gedung arsip ditargetkan selesai dalam 30 hari oleh 12 pekerja. Setelah bekerja tepat 10 hari, pekerjaan terpaksa dihentikan selama 4 hari karena cuaca ekstrem. Agar selesai tepat waktu pada hari ke-30, berapa tambahan pekerja minimal yang harus didatangkan?',
      [
        'A. 2 orang',
        'B. 3 orang',
        'C. 4 orang',
        'D. 5 orang',
        'E. 6 orang'
      ],
      1,
      'Rumus cepat tambahan pekerja = (Pekerja awal × Hari berhenti) ÷ Sisa hari kerja = (12 × 4) ÷ 16 = 48 ÷ 16 = 3 orang!',
      'Sisa hari normal = 30 - 10 = 20 hari, terhenti 4 hari -> sisa hari efektif = 16 hari. Tambahan = (12 × 4) / 16 = 3 orang (total 15 pekerja selama 16 hari).',
      ''
    ],
    [
      'Numerik - Ketimpangan Ganda & Persen', 'tiu-hots-diskon-bertingkat-15',
      'Harga awal komputer instansi dinaikkan 25% karena penyesuaian komponen, lalu saat negosiasi e-Katalog mendapat diskon berjenjang 20%. Bagaimana harga akhir dibandingkan harga awal sebelum naik?',
      [
        'A. Kembali persis sama (100% harga awal)',
        'B. Lebih mahal 5% dari harga awal',
        'C. Lebih murah 5% dari harga awal',
        'D. Lebih mahal 2,5% dari harga awal',
        'E. Lebih murah 10% dari harga awal'
      ],
      0,
      'Uji angka 100 -> naik 25% = 125 -> diskon 20% = 125 - (20% × 125 = 25) = 100! Persis sama!',
      'Kenaikan +25% (faktor 1,25) diikuti penurunan -20% (faktor 0,80) menghasilkan faktor gabung 1,25 × 0,80 = 1,00 -> harga kembali 100% sama persis dengan awal.',
      ''
    ]
  ]);

  // 15 TKP Ultra-HOTS: seluruh 5 opsi tampak konstruktif dengan pembedaan skor 5,4,3,2,1 tajam berdasar nilai BerAKHLAK BKN
  const TKP_HOTS = [
    [
      'Pelayanan Publik', 'tkp-hots-medsos-komplain-01',
      'Sistem antrean online puskesmas/kantor layanan mendadak macet karena lonjakan akses pagi hari, sementara seorang warga sudah merekam situasi dan mengunggah keluhan tajam ke media sosial yang mulai ramai dikomentari. Sikap Anda di loket layanan adalah...',
      [
        'A. Mengaktifkan antrean cadangan manual/QR lokal segera, melayani pemohon dengan tenang, menginformasikan estimasi pemulihan, dan melaporkan insiden ke tim TI untuk rilis klarifikasi resmi',
        'B. Memberikan pelayanan manual sambil meminta warga tersebut menghapus video sebelum berkasnya diproses agar tidak mengganggu suasana',
        'C. Meminta maaf secara sopan dengan layanan manual sementara dan mengarahkan semua pertanyaan teknis kepada petugas TI',
        'D. Fokus mengamankan data di ruang belakang terlebih dahulu sampai sistem pulih total baru membuka loket lagi',
        'E. Menenangkan warga secara lisan dan berjanji keluhan antrean akan disampaikan dalam rapat evaluasi bulanan'
      ],
      [5, 1, 4, 2, 3],
      'Pelayanan publik prima saat krisis: solusi kontingensi langsung + transparansi informasi + eskalasi teknis tanpa mengancam warga.',
      'A (5) langsung memberi solusi riil di lapangan, menjaga ketenangan informasi, dan eskalasi resmi. C (4) masih solutif namun pasif soal eskalasi. E (3) kurang cepat, D (2) menghentikan layanan, B (1) bersifat transaksional/menekan warga.'
    ],
    [
      'Teknologi Informasi dan Komunikasi (TIK)', 'tkp-hots-senior-resisten-02',
      'Instansi Anda beralih ke aplikasi persuratan digital terpadu (SRIKANDI), namun beberapa pegawai senior kewalahan sehingga tetap mengantar berkas kertas yang memperlambat disposisi unit. Sikap paling tepat yang Anda lakukan adalah...',
      [
        'A. Mengusulkan jadwal mentoring singkat 15 menit per minggu dengan panduan visual sederhana dan mendampingi mereka langsung saat memproses dokumen pertama kali',
        'B. Membuatkan ringkasan panduan PDF lalu mengirimkannya ke grup chat kantor untuk dipelajari masing-masing',
        'C. Menolak tegas seluruh berkas kertas tanpa pengecualian sejak hari pertama agar pegawai senior terpaksa segera belajar',
        'D. Tetap menerima berkas kertas mereka lalu Anda ketik ulang seluruh surat mereka diam-diam agar target unit selesai',
        'E. Melaporkan keterlambatan pegawai senior tersebut langsung kepada pimpinan agar segera diberi teguran kinerja'
      ],
      [5, 4, 2, 3, 1],
      'Adaptif + Kolaboratif: ajarkan berdaya (enablement), bukan mengerjakan terus-menerus atau menolak kaku/menghukum langsung.',
      'A (5) membangun kapasitas tim berkelanjutan dengan empati. B (4) informatif namun kurang pendampingan aktif. D (3) menjaga output sesaat tapi tidak mendidik kemandirian sistem. C (2) berisiko melumpuhkan layanan. E (1) minim empati.'
    ],
    [
      'Anti Radikalisme', 'tkp-hots-wa-intoleran-03',
      'Di grup WhatsApp tidak resmi pegawai, seorang rekan mulai rutin membagikan artikel provokatif bernada menyudutkan kelompok warga tertentu dan menyindir kebijakan moderasi beragama instansi. Banyak anggota memilih diam karena rekan tersebut cukup vokal. Tindakan Anda...',
      [
        'A. Mengingatkan secara objektif dan santun etika netralitas ASN serta UU ITE lewat pesan pribadi/grup dengan rujukan resmi, serta melaporkan ke atasan/PPK bila terus berulang',
        'B. Membagikan pengumuman etika ASN secara umum di grup tanpa menyinggung langsung pesan rekan tersebut agar mereda perlahan',
        'C. Keluar diam-diam dari grup WhatsApp tersebut agar tidak ikut terseret masalah disiplin ASN',
        'D. Membalas dengan argumen emosional di grup hingga terjadi perdebatan panjang guna membuktikan kekeliruannya',
        'E. Ikut menyukai unggahan rekan tersebut sekadar menjaga keakraban agar tidak dikucilkan di kantor'
      ],
      [5, 4, 3, 2, 1],
      'Anti-radikalisme ASN: berani meluruskan dengan elegan berbasis netralitas & regulasi, bukan ikut menyebarkan atau membiarkan api konflik.',
      'A (5) tegas menjaga ideologi Pancasila & etika ASN dengan cara konstruktif serta terukur. B (4) persuasif namun kurang menargetkan penghentian perilaku. C (3) menghindari risiko pribadi tanpa mencegah penyebaran di unit. D (2) kontra-produktif. E (1) memfasilitasi intoleransi.'
    ],
    [
      'Profesionalisme', 'tkp-hots-deadline-integritas-04',
      'Anda menjadi ketua tim penyusunan laporan anggaran akhir tahun. Pada H-1 batas waktu penyerahan, Anda menemukan kekeliruan hitung pada lampiran satu sub-bagian yang jika direvisi butuh lembur 4 jam, padahal rekan lain mengusulkan membiarkan dulu agar tepat waktu. Pilihan Anda...',
      [
        'A. Mengajak tim langsung membagi pos pengecekan untuk memperbaiki hitungan hingga tuntas malam ini sambil mengabarkan atasan tentang status finalisasi agar akurat 100%',
        'B. Memperbaiki sendiri bagian penting saja sampai larut malam tanpa merepotkan rekan lain agar cepat selesai',
        'C. Mengirimkan laporan sesuai tenggat lalu menyisipkan catatan kaki bahwa lampiran masih dalam tahap verifikasi lanjutan',
        'D. Menyerahkan laporan apa adanya sambil menyiapkan draf perbaikan terpisah keesokan harinya bila diminta inspektorat',
        'E. Menyetujui usulan rekan membiarkannya karena angkanya hanya selisih kecil pada lampiran pendukung'
      ],
      [5, 4, 3, 2, 1],
      'Akuntabel + Kompeten: kualitas data akurat tidak boleh dikorbankan demi kecepatan semu; ajak kolaborasi tim!',
      'A (5) menggabungkan ketuntasan akuntabilitas, koordinasi pimpinan, dan kerja tim. B (4) akuntabel namun tidak memberdayakan tim. C (3) transparan namun belum menuntaskan kewajiban utama. D (2) dan E (1) menurunkan integritas pelaporan.'
    ],
    [
      'Jejaring Kerja', 'tkp-hots-lintas-opd-05',
      'Anda ditunjuk sebagai penghubung program penurunan stunting terpadu antar 4 instansi/OPD berbeda. Pada rapat perdana, masing-masing perwakilan bersikukuh bahwa data dan anggaran mereka adalah yang paling valid sehingga pembagian tugas macet. Langkah Anda...',
      [
        'A. Mengalihkan fokus rapat ke sasaran warga terdampak yang sama, menyamakan definisi indikator inti, lalu memfasilitasi pemetaan kontribusi nyata tiap OPD berdasarkan kewenangan masing-masing',
        'B. Meminta waktu jeda lalu menyusun usulan pembagian tugas tertulis berdasarkan aturan induk untuk dibahas kembali minggu depan',
        'C. Menyerahkan sepenuhnya keputusan pembagian tugas kepada pimpinan daerah karena semua instansi setara jabatannya',
        'D. Menggunakan data instansi Anda sebagai patokan utama terlebih dahulu agar pekerjaan segera berjalan',
        'E. Membiarkan tiap OPD menjalankan program sendiri-sendiri lalu hasilnya saja yang digabungkan di akhir tahun'
      ],
      [5, 4, 3, 2, 1],
      'Jejaring kerja lintas sektor: kembalikan ke outcome bersama (warga), samakan standar, lalu petakan peran objektif!',
      'A (5) efektif memecah ego sektoral dengan orientasi dampak nyata dan pembagian peran adil. B (4) terstruktur namun tertunda seminggu. C (3) melempar eskalasi tanpa fasilitasi solusi. D (2) memicu resistensi. E (1) mengagalkan konvergensi.'
    ],
    [
      'Sosial Budaya', 'tkp-hots-adat-vs-sop-06',
      'Anda ditugaskan memimpin verifikasi bantuan sosial di wilayah dengan adat musyawarah tokoh setempat yang kuat. Tokoh desa menghendaki daftar penerima disepakati di balai adat meski sebagian belum memenuhi kriteria miskin objektif sesuai pedoman resmi. Sikap Anda...',
      [
        'A. Menghadiri pertemuan adat dengan santun, menjelaskan secara terbuka indikator objektif pedoman resmi bersama tokoh masyarakat agar kesepakatan musyawarah selaras dan bebas temuan hukum',
        'B. Mempersilakan tokoh adat menyusun daftar usulan terlebih dahulu, lalu menapisnya diam-diam di kantor agar tidak berdebat di balai desa',
        'C. Membagikan berkas persyaratan ke perangkat desa dan meminta mereka menjelaskannya sendiri kepada tokoh masyarakat',
        'D. Menolak undangan pertemuan adat dan langsung memverifikasi pintu ke pintu tanpa pemberitahuan tokoh lokal',
        'E. Mengikuti daftar tokoh adat seluruhnya sebagai bentuk penghormatan kearifan lokal agar kegiatan aman'
      ],
      [5, 4, 3, 2, 1],
      'Harmonis + Akuntabel: rangkul kearifan lokal tanpa melanggar SOP/kriteria objektif negara!',
      'A (5) memadukan kecerdasan budaya/komunikasi empatik dan kepatuhan regulasi secara transparan. B (4) patuh aturan tapi kurang terbuka. C (3) menghindari komunikasi langsung. D (2) kaku dan berpotensi menimbulkan penolakan. E (1) berisiko salah sasaran dan temuan audit.'
    ],
    [
      'Pelayanan Publik', 'tkp-hots-disabilitas-akses-07',
      'Kantor Anda melayani ratusan pemohon harian, namun jalur pemandu dan formulir khusus penyandang disabilitas netra belum tersedia memadai saat seorang pemohon tunanetra datang seorang diri mengurus izin. Sikap Anda...',
      [
        'A. Mendampingi pemohon dengan ramah membacakan formulir secara akurat tanpa memaksa, menuntaskan permohonan prioritasnya, lalu mengusulkan pengadaan formulir aksesibel/audio kepada pimpinan',
        'B. Memprioritaskan antrean pemohon tersebut di loket depan dan membantunya mengisi formulir hingga selesai',
        'C. Meminta petugas keamanan mencarikan kursi terdekat agar pemohon menunggu hingga ada pendamping keluarganya yang datang',
        'D. Menerima berkasnya dulu namun menyarankan pengisian rincian dilanjutkan di rumah bersama kerabatnya',
        'E. Meminta maaf bahwa kantor belum memiliki fasilitas khusus disabilitas sehingga memohon agar kembali lain hari'
      ],
      [5, 4, 3, 2, 1],
      'Layanan inklusif + perbaikan sistemik: tangani kebutuhan individu saat itu AND dorong perbaikan fasilitas kantor!',
      'A (5) tuntas untuk layanan hari ini sekaligus memperbaiki sistem jangka panjang. B (4) melayani baik namun belum memperbaiki celah aksesibilitas. C/D (3/2) menunda layanan. E (1) diskriminatif terhadap warga.'
    ],
    [
      'Profesionalisme', 'tkp-hots-mutasi-baru-08',
      'Anda baru dipindahkan ke unit kerja baru yang metode dokumentasi, ritme kerja, dan perangkat lunaknya jauh lebih kompleks dari bidang Anda sebelumnya. Pada minggu pertama Anda merasa tertinggal. Tindakan terbaik adalah...',
      [
        'A. Membuat peta kompetensi yang belum dikuasai, memelajari SOP unit di luar jam sibuk, dan proaktif meminta umpan balik terarah dari rekan/mentor senior',
        'B. Mengikuti alur kerja yang diberikan sambil mencatat hal-hal yang belum paham untuk ditanyakan bila rapat evaluasi',
        'C. Berfokus pada tugas administratif ringan yang sudah dikuasai sambil menunggu jadwal diklat resmi dari SDM',
        'D. Meminta atasan menunda pembebanan target kinerja kepada Anda selama 3 bulan masa adaptasi',
        'E. Mengusulkan pengubahan seluruh SOP unit baru agar mirip dengan kebiasaan unit kerja lama Anda'
      ],
      [5, 4, 3, 2, 1],
      'Kompeten & Adaptif: jangan menunggu disuapi, langsung susun self-learning plan + cari mentor teknis.',
      'A (5) menunjukkan inisiatif belajar cepat dan tanggung jawab penuh atas target unit. B (4) cukup kooperatif tapi lambat. C/D (3/2) pasif menunggu. E (1) tidak menghormati sistem kerja yang sudah berjalan.'
    ],
    [
      'Teknologi Informasi dan Komunikasi (TIK)', 'tkp-hots-phishing-dataleak-09',
      'Anda menerima pesan email tampak meyakinkan mengatasnamakan Admin Kepegawaian Nasional yang meminta pengisian NIP, NIK, dan kata sandi email dinas guna "pemutakhiran tunjangan kinerja", lengkap dengan tautan pendek. Banyak rekan kerja sudah bersiap mengeklik tautan tersebut. Tindakan Anda...',
      [
        'A. Tidak mengeklik tautan, memverifikasi domain resmi pengirim ke unit SDM/TI, segera memperingatkan rekan kerja di grup internal agar tidak mengisi data, serta melaporkan insiden phishing ke tim keamanan TI',
        'B. Mengabaikan pesan tersebut dan menghapusnya dari kotak masuk pribadi agar akun Anda tetap aman',
        'C. Memberitahu 1-2 teman terdekat saja secara lisan supaya lebih berhati-hati terhadap tautan tersebut',
        'D. Membuka tautannya melalui peramban mode penyamaran sekadar melihat tampilan formulirnya sebelum melapor',
        'E. Meneruskan pesan tersebut secara langsung ke semua grup pegawai sambil menanyakan apakah itu asli atau bukan'
      ],
      [5, 3, 4, 2, 1],
      'Keamanan data ASN (UU PDP & CSIRT): jangan klik, verifikasi kanal resmi, cegah rekan jadi korban, dan eskalasi ke TI!',
      'A (5) melindungi diri sekaligus mengamankan seluruh ekosistem pegawai. C (4) membantu terbatas. B (3) hanya aman untuk diri sendiri. D (2) berbahaya (eksploitasi browser/tracking). E (1) menyebarkan tautan phishing lebih luas!'
    ],
    [
      'Anti Radikalisme', 'tkp-hots-penolakan-simbol-negara-10',
      'Dalam suatu kegiatan pembinaan kepemudaan di daerah penugasan, sebagian peserta menolak mengikuti sesi pengenalan wawasan kebangsaan dengan alasan paham tertentu yang mereka yakini melarang hormat pada simbol negara. Sikap Anda sebagai ASN pembina...',
      [
        'A. Tetap menghormati dialog tanpa memusuhi secara pribadi, mengajak diskusi terbuka dengan pendekatan nilai persatuan, rasionalitas sejarah, serta regulasi kewarganegaraan agar mereka memahami makna simbol negara bukan penyembahan',
        'B. Mengizinkan mereka tidak mengikuti sesi seremonial tetapi tetap mewajibkan materi pelayanan sosial masyarakat',
        'C. Membacakan peraturan disiplin dan langsung mengeluarkan peserta tersebut dari seluruh rangkaian kegiatan pembinaan',
        'D. Mengubah format acara menjadi diskusi santai bebas agar isu simbol negara tidak perlu dibahas sama sekali',
        'E. Menghentikan acara sepenuhnya saat itu juga karena merasa tersinggung sebagai aparatur negara'
      ],
      [5, 4, 3, 2, 1],
      'Pendekatan dialogis ideologi Pancasila: tegas pada prinsip NKRI namun persuasif meluruskan salah paham konseptual.',
      'A (5) mengedepankan dialog kebangsaan yang mencerahkan tanpa sikap agresif atau tunduk pada penolakan nilai dasar NKRI. B (4) kompromis parsial. C (3) tegas tapi memutus ruang pembinaan. D (2) membiarkan kekeliruan ideologis. E (1) emosional.'
    ],
    [
      'Pelayanan Publik', 'tkp-hots-pungli-oknum-11',
      'Seorang kenalan dekat menawarkan imbalan "ucapan terima kasih" uang tunai kepada Anda setelah berkas perizinannya selesai lebih cepat sesuai prosedur antrean resmi, dan menyatakan ingin mentransfer secara pribadi. Sikap Anda...',
      [
        'A. Menolak dengan santun namun tegas, menjelaskan bahwa seluruh layanan berbiaya sesuai PNBP/retribusi resmi tanpa tip pribadi, serta mendorongnya mengisi survei kepuasan layanan secara resmi',
        'B. Menolak uang tunai tersebut secara tegas dan langsung menyudahi percakapan agar tidak canggung',
        'C. Mengarahkan kenalan tersebut menitipkan ucapan terima kasih berupa makanan di meja lobi umum untuk seluruh staf',
        'D. Menerimanya sementara lalu memasukkannya ke kas sosial non-resmi ruangan pegawai',
        'E. Menerimanya sebagai bentuk menjaga silaturahmi karena berkas memang sudah selesai secara sah'
      ],
      [5, 4, 3, 2, 1],
      'BerAKHLAK Akuntabel & Zona Integritas WBK: nol toleransi uang/hadiah layanan meski setelah proses selesai!',
      'A (5) menolak bersih sekaligus mengedukasi masyarakat soal budaya anti-gratifikasi dan kanal evaluasi resmi. B (4) berintegritas namun kurang edukatif. C (3) masih berisiko gratifikasi layanan. D/E (2/1) melanggar etika ASN & WBK.'
    ],
    [
      'Jejaring Kerja', 'tkp-hots-konflik-mentor-rekan-12',
      'Dua rekan kunci di tim proyek strategis Anda sedang berselisih paham pribadi hingga saling tidak menyapa, akibatnya koordinasi integrasi data tersendat dua minggu sebelum peluncuran aplikasi publik. Sebagai anggota/koordinator proyek, sikap Anda...',
      [
        'A. Mengajak keduanya berdialog secara netral di ruang terpisah fokus pada standar teknis proyek yang disepakati, menetapkan kanal serah-terima kerja tertulis yang jelas, dan memantau progres harian secara objektif',
        'B. Menjadi perantara komunikasi bolak-balik di antara keduanya sementara waktu agar pekerjaan teknis selesai dulu',
        'C. Meminta salah satu dari mereka mengalah di hadapan rapat tim agar masalah cepat dianggap selesai',
        'D. Menunggu mereka berdamai sendiri sambil fokus mengerjakan porsi tugas Anda masing-masing',
        'E. Meminta pimpinan memindahkan salah satu rekan tersebut ke tim lain segera tanpa pembicaraan awal'
      ],
      [5, 4, 2, 3, 1],
      'Kolaboratif: pisahkan konflik personal dari objektivitas proses kerja, mediasi netral fokus pada target layanan!',
      'A (5) menyelesaikan hambatan sistem kerja sekaligus meredakan ketegangan secara adil. B (4) menolong proyek tapi melelahkan dan sementara. D (3) pasif. C (2) berisiko melukai harga diri. E (1) gegabah.'
    ],
    [
      'Profesionalisme', 'tkp-hots-cuti-keadaan-darurat-13',
      'Anda sudah memperoleh izin cuti keluarga jauh hari ke luar kota. Sehari sebelum keberangkatan, terjadi bencana banjir bandang di wilayah kerja instansi Anda dan pimpinan memerlukan tenaga lapangan untuk pendataan posko darurat. Sikap Anda...',
      [
        'A. Mengonfirmasi detail kebutuhan posko kepada pimpinan; bila peran teknis Anda krusial dan belum tergantikan, bersedia menunda/menyesuaikan jadwal keberangkatan atau membantu koordinasi data jarak jauh sebelum berangkat',
        'B. Menyampaikan rincian cadangan pegawai yang dapat menggantikan Anda terlebih dahulu sembari bersiap bila memang tetap dibutuhkan',
        'C. Membantu merapikan seluruh berkas data awal hari ini sampai malam hari sebelum tetap berangkat cuti esok pagi',
        'D. Mengirimkan ucapan simpati ke grup kantor sambil tetap berangkat cuti karena tiket keluarga sudah dipesan',
        'E. Mematikan ponsel selama perjalanan cuti agar tidak terganggu urusan tugas darurat kantor'
      ],
      [5, 4, 3, 2, 1],
      'Loyal & Adaptif pada situasi krisis kemanusiaan: utamakan kepentingan darurat publik/keselamatan secara komunikatif.',
      'A (5) menunjukkan jiwa pengabdian ASN tinggi dalam kondisi bencana tanpa menutup komunikasi. B (4) kolaboratif menyiapkan backup. C (3) membantu sebagian. D/E (2/1) abai terhadap kondisi kedaruratan publik.'
    ],
    [
      'Sosial Budaya', 'tkp-hots-penempatan-daerah-3t-14',
      'Setelah dinyatakan lulus CPNS, Anda ditempatkan di unit pelayanan wilayah kepulauan dengan akses internet terbatas dan bahasa daerah yang sangat berbeda dari daerah asal Anda. Langkah adaptasi paling efektif di bulan pertama...',
      [
        'A. Mengamati kebiasaan serta tata krama lokal dengan rendah hati, mempelajari kosakata layanan harian bahasa setempat bersama rekan lokal, dan menyesuaikan cara penyuluhan agar mudah dipahami warga',
        'B. Bekerja profesional menggunakan Bahasa Indonesia baku secara penuh sambil perlahan menyesuaikan ritme lingkungan',
        'C. Berkoordinasi terutama dengan sesama pegawai perantau agar meminimalkan kesalahpahaman budaya',
        'D. Menyarankan langsung perombakan sistem kantor agar persis sama dengan kota besar asal Anda',
        'E. Memfokuskan diri bekerja di balik meja saja sambil mengajukan rencana pindah tugas di akhir masa percobaan'
      ],
      [5, 4, 3, 2, 1],
      'Harmonis dalam kebinekaan Nusantara: pelajari bahasa & kearifan setempat agar pelayanan berdampak nyata!',
      'A (5) mencerminkan adaptasi lintas budaya aktif dan empati sosial tinggi. B (4) sopan tetapi kurang merangkul kedekatan budaya lokal. C (3) membentuk eksklusivitas. D/E (2/1) resisten terhadap konteks penugasan.'
    ],
    [
      'Teknologi Informasi dan Komunikasi (TIK)', 'tkp-hots-inovasi-otomatisasi-15',
      'Anda melihat petugas rekap laporan harian di unit masih menyalin manual data dari 15 berkas Excel berbeda selama 3 jam setiap hari dan kerap memicu salah ketik. Pimpinan belum menganggarkan pembelian aplikasi mahal. Inisiatif TIK terbaik Anda...',
      [
        'A. Merancang templat terpadu gratis menggunakan fitur validasi otomatis/Power Query atau skrip internal aman yang disetujui atasan dan melatih tim menggunakannya',
        'B. Membuatkan ringkasan makro/rumus sederhana untuk dipakai sendiri dulu lalu dibagikan bila ada yang bertanya',
        'C. Mengajukan proposal pengadaan software vendor bernilai ratusan juta untuk anggaran tahun berikutnya',
        'D. Membuat daftar checklist pengecekan ganda manual agar kesalahan salah ketik rekan kerja berkurang',
        'E. Membiarkan alur lama berjalan karena perubahan format Excel bukan menjadi tugas pokok resmi Anda'
      ],
      [5, 4, 3, 2, 1],
      'Inovasi TIK berdampak & efisien biaya: manfaatkan tools yang ada + libatkan persetujuan atasan + latih tim!',
      'A (5) solutif cepat, hemat anggaran, aman secara prosedur, dan memberdayakan tim. B (4) inovatif tapi kurang disebarluaskan. C (3) lambat menunggu anggaran. D (2) tidak menghilangkan akar masalah. E (1) pasif.'
    ]
  ];

  window.registerCPNSQuestions({ packId: 'skd_hots_twk_v53', bucket: 'SKD_TWK', questions: TWK_HOTS });
  window.registerCPNSQuestions({ packId: 'skd_hots_tiu_v53', bucket: 'SKD_TIU', questions: TIU_HOTS });

  window.registerCPNSQuestions({
    packId: 'skd_hots_tkp_v53',
    bucket: 'SKD_TKP',
    questions: TKP_HOTS.map(([sub, id, q, options, scores, trick, explanation]) => ({
      id,
      examType: 'SKD_TKP',
      category: 'TKP',
      sub,
      q,
      options,
      ans: scores.indexOf(5),
      scores,
      trick,
      explanation,
      level: 'HOTS',
      practice: 'GOCPNS'
    }))
  });
})();
