/* Bank Soal SKD HOTS Berstandar E-book SKD CPNS 2027 & Kisi-Kisi BKN (KepmenPANRB 321/2024).
   Berisi:
   - 32 TWK HOTS Penalaran (Konstitusi/RIS/Penjelasan UUD, Pancasila Vertikal-Horizontal & Ideologi Terbuka,
     Integritas & Teladan Tokoh, Bela Negara Nirmiliter/Hilirisasi/Ruang Hidup/Soft Power, EYD V & Penalaran Teks)
   - 18 TIU HOTS Pelengkap (4 Analogi, 3 Tim Bersyarat, 2 Hitung Taktis & Diskon Berantai,
     3 Analisis Tabel SVG, 6 Figural Matriks 3x3 SVG penuh)
   - 16 TKP HOTS Dilema Birokrasi Modern (Skor tajam 5-4-3-2-1 across 6 indikator BerAKHLAK) */
(function () {
  if (!window.registerCPNSQuestions) return;

  const BG = '<rect width="100%" height="100%" rx="8" fill="#ffffff"/>';
  const svgWrap = (vb, w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${w}" height="${h}">${BG}${body}</svg>`;

  const mkMc = (bucket, cat, items) => items.map(([sub, fam, id, q, options, ans, trick, explanation, img]) => {
    const scores = [0, 0, 0, 0, 0];
    scores[ans] = 5;
    const obj = { id, examType: bucket, category: cat, sub, fam, q, options, ans, scores, trick, explanation, level: 'HOTS', practice: 'GOCPNS' };
    if (img) obj.img = img;
    return obj;
  });

  /* ==================== 32 SOAL TWK HOTS ==================== */
  const TWK_ITEMS = [
    // 1. Konstitusi, Sejarah Ketatanegaraan & Tata Negara (7 soal -> twk56-konstitusi)
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5601',
      'Indonesia pernah mempraktikkan Konstitusi RIS (Desember 1949–Agustus 1950) dan UUDS 1950 dengan banyak pergantian kabinet, termasuk era Kabinet Natsir hingga Dekret Presiden 5 Juli 1959. Perbedaan paling mendasar pada era Konstitusi RIS terhadap desain UUD NRI 1945 pasca-amandemen adalah...',
      [
        'A. Kepala negara dijabat perdana menteri sementara DPR periode transisi tidak memiliki hak interpelasi atau hak angket',
        'B. Bentuk negara berubah sementara menjadi serikat (federal) dengan negara bagian',
        'C. Mahkamah Konstitusi dibubarkan dan fungsinya digantikan seluruhnya oleh majelis Dewan Konstituante',
        'D. Wilayah Indonesia dibatasi kembali hanya pada garis Van Mook tanpa mengakui kedaulatan perairan antarpulau',
        'E. Ketentuan ekonomi kerakyatan pasal 33 dihapuskan sementara guna memenuhi seluruh syarat perjanjian Konferensi Meja Bundar'
      ],
      1,
      'Pembeda khas RIS (1949–1950) vs UUD 1945 = bentuk negara FEDERAL (serikat), sedangkan UUD 1945 tetap negara KESATUAN (Pasal 1 ayat 1).',
      'Ciri paling fundamental Konstitusi RIS adalah perubahan bentuk negara kesatuan menjadi federal (negara-negara bagian seperti RI Yogyakarta, Pasundan, dll.), dengan sistem pemerintahan parlementer semu. Opsi A keliru karena Kepala Negara RIS tetap Presiden (Soekarno), sedangkan Perdana Menteri adalah Kepala Pemerintahan.',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5602',
      'Sebelum Amandemen UUD 1945, naskah "Penjelasan UUD 1945" sering dijadikan rujukan penafsiran pasal, seperti istilah negara berdasar atas hukum (rechtsstaat). Namun pasca-Amandemen IV tahun 2002 melalui Pasal II Aturan Tambahan, kedudukan hukum Penjelasan UUD 1945 tersebut adalah...',
      [
        'A. Tetap menjadi hukum tertinggi setingkat Pembukaan yang tidak boleh diubah siapa pun dalam sidang parlemen',
        'B. Ditingkatkan statusnya menjadi Ketetapan MPR yang wajib diuji oleh Mahkamah Agung secara rutin setiap tahun',
        'C. Digunakan khusus untuk menyelesaikan sengketa kewenangan konstitusional antara Presiden dan DPRD Provinsi',
        'D. Tidak lagi bagian mengikat UUD karena muatan pentingnya telah masuk ke dalam pasal-pasal',
        'E. Berlaku hanya apabila DPR dan DPD gagal mencapai kuorum dalam pembahasan Rancangan Undang-Undang prioritas'
      ],
      3,
      'Pasal II Aturan Tambahan UUD NRI 1945 menetapkan UUD kini HANYA terdiri atas Pembukaan dan Pasal-pasal — Penjelasan resmi ditiadakan!',
      'Setelah Perubahan Keempat UUD 1945, Pasal II Aturan Tambahan menyatakan UUD NRI 1945 terdiri atas Pembukaan dan Pasal-pasal. Materi normatif penting dalam Penjelasan lama (misalnya Indonesia sebagai negara hukum pada Pasal 1 ayat 3) telah diangkat langsung ke dalam pasal-pasal sehingga Penjelasan lama tidak mengikat secara hukum.',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5603',
      'UUD NRI Tahun 1945 menetapkan syarat usia, kewarganegaraan, rekam jejak kesetiaan pada negara, serta mekanisme pengisian jabatan Presiden dan Wakil Presiden secara rinci. Pengaturan normatif tersebut secara teoretis menunjukkan fungsi konstitusi sebagai...',
      [
        'A. Instrumen pengendalian sosial sehari-hari atas perilaku privat warga negara',
        'B. Manifesto historis kemerdekaan tanpa daya paksa administratif terhadap lembaga tinggi',
        'C. Pedoman dan aturan main baku dalam penyelenggaraan kekuasaan negara',
        'D. Dokumen teknis kepegawaian untuk mengatur jenjang karier ASN dan kepala dinas',
        'E. Kesepakatan sementara antarkoalisi pemenang pemilu yang berlaku lima tahunan'
      ],
      2,
      'Menetapkan struktur lembaga, syarat pejabat tinggi negara, dan batas wewenang = fungsi konstitusi sebagai PEDOMAN penyelenggaraan negara.',
      'Konstitusi berperan sebagai "aturan main" tertinggi (manual ketatanegaraan) yang mengatur bagaimana kekuasaan diisi, dibatasi, dan dijalankan antarlembaga negara agar terhindar dari kesewenang-wenangan.',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5604',
      'Alinea keempat Pembukaan UUD 1945 mengamanatkan tujuan negara "ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial." Saat terjadi konflik bersenjata di kawasan strategis yang memicu krisis pangan global, implikasi konstitusional bagi diplomasi Indonesia adalah...',
      [
        'A. Bergabung ke aliansi pakta pertahanan negara adidaya agar memperoleh jaminan pasokan logistik militer dan diplomasi keamanan',
        'B. Menutup seluruh hubungan dagang, perwakilan diplomatik, dan kerja sama ekonomi dengan seluruh negara yang terlibat perselisihan',
        'C. Mengirimkan pasukan tempur ofensif secara sepihak demi mempercepat berakhirnya konflik bersenjata di kawasan strategis tersebut',
        'D. Mengutamakan urusan domestik semata karena penyelesaian konflik lintas negara bukan kewenangan pemerintah berdaulat di kawasan',
        'E. Aktif memelopori mediasi damai, bantuan kemanusiaan, dan menjaga kemandirian nonblok'
      ],
      4,
      'Alinea 4 Pembukaan UUD 1945 = dasar Politik Luar Negeri Bebas Aktif: aktif menciptakan perdamaian & keadilan tanpa mengikatkan diri pada pakta militer.',
      '"Bebas" berarti menentukan sikap secara merdeka tanpa tekanan blok kekuatan besar, sedangkan "Aktif" berarti proaktif memperjuangkan perdamaian dunia, hukum internasional, dan bantuan kemanusiaan (seperti peran pasukan perdamaian PBB & diplomasi bebas aktif).',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5605',
      'Dalam praktik ketatanegaraan modern, koalisi partai pendukung pemerintah yang sangat besar di DPR sering dikhawatirkan melemahkan fungsi pengawasan parlemen terhadap Presiden dalam proses pembentukan undang-undang. Sesuai desain UUD NRI 1945 pasca-amandemen, mekanisme koreksi konstitusional yang tetap menjaga prinsip checks and balances adalah...',
      [
        'A. Menguatkan independensi yudikatif (MK dan MA) serta ruang uji materi norma publik',
        'B. Mengembalikan kedudukan MPR sebagai lembaga tertinggi negara yang berhak mencabut undang-undang secara sepihak tanpa sidang',
        'C. Meminta Presiden menerbitkan Perppu pembekuan fungsi pengawasan legislatif apabila koalisi oposisi dinilai menghambat kebijakan',
        'D. Membiarkan seluruh produk undang-undang tetap berlaku penuh lima tahun karena sudah disahkan suara mayoritas parlemen',
        'E. Menyerahkan hak veto mutlak pembatalan rancangan undang-undang kepada Dewan Perwakilan Daerah di parlemen nasional'
      ],
      0,
      'Checks & balances pasca-amandemen menjaga yudikatif independen (MK menguji UU vs UUD, MA menguji aturan di bawah UU) + hak uji warga negara!',
      'Ketika cabang eksekutif dan legislatif beririsan kuat akibat koalisi mayoritas, perimbangan kekuasaan negara hukum modern bertumpu pada yudikatif yang independen (MK melalui judicial review UU terhadap UUD) serta ruang koreksi hukum konstitusional oleh warga.',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5606',
      'Saat merancang Perda penanggulangan wabah atau ancaman siber, sebuah pemerintah daerah hendak membatasi kebebasan berkumpul sekaligus berencana menangguhkan hak tidak dituntut atas dasar hukum yang berlaku surut. Ditinjau dari Pasal 28I dan Pasal 28J UUD NRI 1945, sikap hukum yang benar adalah...',
      [
        'A. Keduanya boleh dibatasi lewat Peraturan Kepala Daerah sepanjang mendapat dukungan penuh forum tokoh masyarakat lokal',
        'B. Seluruh hak asasi manusia dapat ditangguhkan sementara waktu oleh kepala daerah saat berlakunya status darurat sipil daerah',
        'C. Hak berkumpul bersifat mutlak tanpa pembatasan apa pun sehingga karantina kesehatan dinilai bertentangan dengan konstitusi',
        'D. Hak berkumpul bisa dibatasi UU (Ps 28J), sedangkan larangan berlaku surut absolut tak bisa ditangguhkan (Ps 28I)',
        'E. Pasal 28J membolehkan penyimpangan asas non-retroaktif asal disetujui bersama oleh pimpinan DPRD dan Kejaksaan'
      ],
      3,
      'Pasal 28I ayat (1) = 7 hak absolut (non-derogable rights: hidup, bebas siksaan, nurani, agama, tak diperbudak, diakui hukum, bebas hukum berlaku surut); Ps 28J(2) = batasan dgn UU.',
      'Pasal 28J ayat (2) mengizinkan pembatasan pelaksanaan HAM melalui undang-undang demi menghormati hak orang lain dan ketertiban/kesehatan umum. Sebaliknya, Pasal 28I ayat (1) melarang pengurangan dalam keadaan apa pun (non-derogable) atas hak tidak dituntut atas dasar hukum yang berlaku surut.',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5607',
      'Sebuah pemerintah kabupaten menerbitkan Peraturan Daerah tentang retribusi data digital yang ternyata bertentangan dengan Peraturan Pemerintah dan Undang-Undang HKPD. Sesuai tata urutan peraturan dan putusan Mahkamah Konstitusi mengenai pengawasan Perda, mekanisme pembatalan hukum yang sah adalah...',
      [
        'A. Gubernur atau Menteri Dalam Negeri langsung menerbitkan keputusan pembatalan sepihak atas Perda Kabupaten tersebut',
        'B. Diajukan permohonan hak uji materiil (judicial review) kepada Mahkamah Agung',
        'C. Diajukan permohonan uji materiil ke Mahkamah Konstitusi karena Perda setara dengan UU di daerah',
        'D. BPK membatalkan pasal Perda saat melakukan pemeriksaan laporan keuangan daerah akhir tahun',
        'E. Kepala Dinas Kominfo menghapus tarif lewat surat edaran agar selaras dengan Peraturan Pemerintah'
      ],
      1,
      'Pasca-Putusan MK 137/2015 & 56/2016: Perda Prov/Kab/Kota TIDAK lagi dicabut Kemendagri/Gubernur, melainkan lewat uji materi di Mahkamah Agung (MA)!',
      'Menurut Pasal 24A ayat (1) UUD 1945 dan putusan MK terkait UU Pemda, executive review oleh Kemendagri/Gubernur atas Perda telah dicabut. Pembatalan peraturan perundang-undangan di bawah undang-undang (termasuk Perda) hanya sah melalui uji materi di Mahkamah Agung.',
      ''
    ],

    // 2. Pancasila Terapan: Vertikal-Horizontal & Ideologi Terbuka (5 soal -> twk56-pancasila)
    [
      'TWK HOTS - Pancasila HOTS', 'twk56-pancasila', 'SKD-TWK-X5608',
      'Sebuah yayasan keagamaan mengelola rumah singgah dan layanan pemeriksaan kesehatan gratis yang didanai sedekah jemaah, namun terbuka bagi seluruh warga prasejahtera dari agama dan suku mana pun tanpa syarat berpindah keyakinan. Ditinjau dari pengamalan Sila Pertama Pancasila, praktik tersebut menggambarkan...',
      [
        'A. Pengurangan kemurnian nilai ketuhanan karena mencampurkan ibadah privat dengan program pelayanan sosial publik',
        'B. Pelaksanaan nilai kemanusiaan yang berdiri terpisah sama sekali dari nilai ketuhanan di dalam negara berkonstitusi sekuler',
        'C. Upaya asimilasi budaya lintas golongan supaya seluruh warga menggunakan satu tata cara peribadatan bersama yang seragam',
        'D. Pemenuhan nilai instrumental peraturan semata tanpa menyentuh substansi nilai dasar Ketuhanan Yang Maha Esa',
        'E. Dimensi vertikal (ketakwaan kepada Tuhan) yang memancar ke dimensi horizontal (amal sosial)'
      ],
      4,
      'Sila Ke-1 berdimensi ganda: VERTIKAL (hubungan khusyuk dengan Tuhan) + HORIZONTAL (kasih sayang, toleransi, & amal sosial bagi sesama manusia).',
      'Pengamalan Sila Pertama tidak berhenti pada ritual privat (dimensi vertikal), tetapi juga menuntut ketaatan spiritual itu memancar menjadi tindakan sosial inklusif dan bermanfaat bagi semua manusia tanpa membedakan keyakinan (dimensi horizontal).',
      ''
    ],
    [
      'TWK HOTS - Pancasila HOTS', 'twk56-pancasila', 'SKD-TWK-X5609',
      'Arus modal asing membawa sistem kerja kompetitif yang efisien, namun di sisi lain berisiko mendorong pragmatisme individualistis di lingkungan kerja. Agar pembangunan ekonomi tetap berdaulat sebagai cerminan Pancasila sebagai ideologi terbuka, dimensi yang berfungsi menyaring dan menyesuaikan regulasi baru tersebut adalah...',
      [
        'A. Dimensi Fleksibilitas guna menyusun nilai instrumental baru tanpa mengubah nilai dasar',
        'B. Dimensi Dogmatis tertutup yang menolak seluruh investasi asing dan teknologi kerja modern dari luar negeri',
        'C. Dimensi Realitas semata yang hanya mempertahankan kebiasaan lama tanpa boleh merumuskan aturan kerja baru',
        'D. Dimensi Keterbukaan tanpa batas yang membolehkan penggantian sila dasar demi menarik minat investor global',
        'E. Dimensi Elitis yang menyerahkan sepenuhnya etika ketenagakerjaan nasional kepada mekanisme pasar bebas'
      ],
      0,
      '3 Dimensi Ideologi Terbuka (Alfian): Realitas (mengakar nyata), Idealitas (harapan luhur), Fleksibilitas (pengembangan luwes menghadapi tantangan zaman tanpa ubah nilai dasar).',
      'Pancasila terbuka berarti nilai dasarnya tetap, tetapi nilai instrumental dan praksisnya luwes berkembang (Dimensi Fleksibilitas) menjawab isu baru—seperti investasi asing, AI, atau tata kelola digital—sebagai filter agar pragmatisme ekonomi tidak menggerus nilai kemanusiaan dan keadilan sosial.',
      ''
    ],
    [
      'TWK HOTS - Pancasila HOTS', 'twk56-pancasila', 'SKD-TWK-X5610',
      'Dalam sebuah musyawarah perencanaan desa, kelompok mayoritas bersikukuh menggunakan seluruh dana desa untuk proyek mercusuar di dusun mereka dan mengabaikan usulan air bersih dusun terpencil karena jumlah penduduknya sedikit. Jika dinilai berdasarkan Sila Keempat Pancasila, kekeliruan utama dalam pengambilan keputusan tersebut adalah...',
      [
        'A. Musyawarah berjalan terlalu panjang tanpa langsung mengadakan pemungutan suara cepat sejak pembukaan rapat desa',
        'B. Perwakilan dusun terpencil tidak berhak mengusulkan program pembangunan apabila setoran pajaknya masih lebih kecil',
        'C. Kepala desa semestinya menetapkan lokasi proyek secara sepihak tanpa mengundang forum musyawarah masyarakat mana pun',
        'D. Keputusan bertumpu pada suara mayoritas tanpa hikmat kebijaksanaan serta mengabaikan nilai keadilan',
        'E. Penyediaan air bersih sepenuhnya merupakan kewenangan pemerintah pusat sehingga dilarang dibahas dalam musyawarah desa'
      ],
      3,
      'Sila Ke-4 = "dipimpin oleh hikmat kebijaksanaan" + musyawarah untuk kepentingan bersama & tanggung jawab kepada Tuhan, bukan dominasi angka mayoritas (tirani mayoritas)!',
      'Demokrasi Pancasila dalam Sila Keempat menuntut "hikmat kebijaksanaan", yaitu akal sehat, kejujuran nurani, dan keberpihakan pada keadilan bersama—bukan sekadar menang jumlah suara yang meminggirkan kelompok kecil atau rentan.',
      ''
    ],
    [
      'TWK HOTS - Pancasila HOTS', 'twk56-pancasila', 'SKD-TWK-X5611',
      'Sebuah kementerian meluncurkan aplikasi layanan administrasi yang efisien, tetapi tetap mewajibkan unit layanan menyediakan meja pendampingan khusus bagi penyandang disabilitas, lansia tanpa gawai, dan warga daerah 3T agar tidak tertinggal layanan. Kebijakan ini paling kuat mencerminkan perpaduan nilai...',
      [
        'A. Nilai dasar Sila Pertama semata karena hanya berkaitan dengan rasa belas kasih keagamaan masing-masing petugas loket',
        'B. Penghambatan transformasi digital birokrasi nasional karena tetap mempertahankan meja layanan tatap muka bagi masyarakat',
        'C. Chauvinisme teknologi daerah yang menolak pemanfaatan standar pengembangan aplikasi layanan publik bertaraf internasional',
        'D. Prinsip kesamarataan mutlak yang melarang adanya bentuk pelayanan afirmatif bagi kelompok masyarakat penyandang kerentanan',
        'E. Nilai Instrumental dan Praksis Sila Ke-5 (Keadilan Sosial) serta Sila Ke-2'
      ],
      4,
      'Menjamin akses setara bagi warga rentan lewat kebijakan nyata di lapangan = Nilai Instrumental + Nilai Praksis Sila 5 (Keadilan Sosial) & Sila 2 (Kemanusiaan).',
      'Keadilan sosial dalam Sila Ke-5 bersifat proporsional (bukan menyamaratakan tanpa melihat hambatan), sehingga negara menyediakan afirmasi pendampingan agar seluruh warga—termasuk disabilitas dan lansia—memperoleh hak pelayanan yang bermartabat (Sila 2).',
      ''
    ],
    [
      'TWK HOTS - Pancasila HOTS', 'twk56-pancasila', 'SKD-TWK-X5612',
      'Dalam sidang PPKI tanggal 18 Agustus 1945, tujuh kata pada Piagam Jakarta disepakati diubah menjadi "Ketuhanan Yang Maha Esa" setelah mendengar keberatan wakil-wakil wilayah timur. Pelajaran kenegaraan paling penting dari konsensus pendiri bangsa tersebut bagi ASN masa kini adalah...',
      [
        'A. Aspirasi mayoritas berhak memaksakan rumusan konstitusi asalkan diumumkan sesudah kemerdekaan',
        'B. Nilai spiritual dapat dihapus dari kehidupan bernegara demi menghindari dialog perbedaan',
        'C. Jiwa besar mendahulukan keutuhan dan persatuan nasional di atas ego golongan adalah fondasi tegaknya NKRI',
        'D. Setiap perjanjian nasional bersifat sementara dan dapat dibatalkan sepihak bila komposisi parlemen berubah',
        'E. Perumusan kebijakan publik sebaiknya dilakukan tertutup tanpa melibatkan perwakilan daerah terpencil'
      ],
      2,
      'Konsensus 18 Agustus 1945 (Hatta, Ki Bagus Hadikusumo, Teuku M. Hasan, dkk.) = rela berkorban ego golongan demi persatuan NKRI (Sila ke-3).',
      'Para tokoh bangsa mendahulukan persatuan seluruh Nusantara daripada kepentingan kelompok sendiri, sambil tetap meneguhkan dasar ketuhanan yang inklusif bagi seluruh rakyat Indonesia.',
      ''
    ],

    // 3. Integritas, Teladan Tokoh & Netralitas ASN (7 soal -> twk56-integritas)
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5613',
      'Aparatur Sipil Negara berasal dari beragam daerah dan golongan yang dipersatukan oleh sumpah jabatan untuk melayani publik secara adil. Alasan paling fundamental mengapa integritas pribadi setiap ASN menentukan keberlangsungan negara adalah...',
      [
        'A. Menjaga kepercayaan publik (public trust) agar pemerintahan berjalan efektif',
        'B. Menjadi prasyarat kenaikan pangkat otomatis dan perolehan tunjangan kinerja maksimal pada akhir setiap tahun anggaran',
        'C. Menjaga reputasi media sosial resmi instansi pemerintah agar senantiasa memperoleh komentar positif dari para warganet',
        'D. Menghindari suasana kerja yang kaku apabila dilakukan audit berkala oleh aparat pengawas internal pemerintah',
        'E. Menunjukkan kepatuhan disiplin jam kerja pribadi di hadapan atasan langsung menjelang penilaian kinerja tahunan'
      ],
      0,
      'Bedakan dampak turunan (citra, bebas sanksi, karier) vs akar fundamental integritas ASN = PUBLIC TRUST (kepercayaan rakyat terhadap negara)!',
      'Integritas ASN bukan sekadar moralitas individual atau pencitraan instansi, melainkan pilar penopang kepercayaan publik. Tanpa public trust, kebijakan negara kehilangan legitimasi dan negara gagal berfungsi adil untuk seluruh rakyat.',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5614',
      'Wakil Presiden pertama RI, Mohammad Hatta, dikenal tidak pernah memakai anggaran atau fasilitas negara untuk urusan pribadi—bahkan konon menggunting catatan keinginan sepatu Bally kesukaannya karena mendahulukan kebutuhan keluarga dari gaji halal. Nilai integritas yang paling tepat dipetik dari keteladanan tersebut adalah...',
      [
        'A. Keahlian seorang ekonom dalam menyusun pembukuan rumah tangga agar bebas utang jangka pendek',
        'B. Komitmen mutlak memisahkan secara tegas batas antara hak pribadi dan kewenangan jabatan publik',
        'C. Sikap menjauhi semua produk buatan luar negeri meskipun dibeli dengan penghasilan resmi sendiri',
        'D. Strategi pencitraan pemimpin nasional untuk meraih simpati pemilih menjelang pemilihan umum',
        'E. Ketidakmampuan lembaga negara menyediakan tunjangan operasional bagi pejabat tinggi di masa awal kemerdekaan'
      ],
      1,
      'Keteladanan Bung Hatta (maupun tokoh bersih lainnya) menguji kesadaran memisahkan secara tegas HAK PRIBADI vs KEWENANGAN/UANG JABATAN!',
      'Esensi integritas pejabat publik pada kisah Bung Hatta adalah kesederhanaan yang lahir dari kejujuran prinsip: jabatan adalah amanah untuk melayani rakyat, bukan jalan memperkaya diri atau mengambil hak di luar ketentuan.',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5615',
      'Saat menjabat sebagai menteri, Jenderal M. Jusuf menolak fasilitas pengawalan protokoler dan kendaraan dinas ketika pulang ke kampung halamannya di Sulawesi Selatan, lalu memilih menaiki angkutan umum biasa dengan alasan ia pulang sebagai warga pribadi, bukan menteri. Sikap beliau paling mendasar mencerminkan...',
      [
        'A. Keinginan menguji kualitas mutu layanan transportasi umum darat secara rahasia tanpa sepengetahuan pemerintah provinsi',
        'B. Ketidakpercayaan pribadi terhadap kesigapan aparat pengamanan protokoler resmi negara di luar wilayah Ibu Kota Jakarta',
        'C. Keharusan seluruh pejabat tinggi pemerintahan menghindari perjalanan dinas dengan memakai kendaraan resmi kementerian',
        'D. Ketegasan etika jabatan untuk memisahkan kepentingan pribadi dari fasilitas negara',
        'E. Upaya menunjukkan kesaktian dan keberanian tampil sendirian di depan umum tanpa didampingi pengawalan pengamanan resmi'
      ],
      3,
      'Sama seperti Hatta, teladan Jenderal M. Jusuf = pemisahan tegas KEPENTINGAN PRIBADI vs FASILITAS NEGARA, bukan sekadar ingin tampak merakyat!',
      'Pengecoh seperti "merendah hati" atau "memantau angkutan umum" hanya kesan permukaan. Inti integritas birokrasi pada kisah Jenderal M. Jusuf adalah batas tegas kapan seseorang bertindak dalam tugas dinas dan kapan sebagai pribadi.',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5616',
      'Menjelang pemungutan suara pilkada, seorang ASN mengunggah ulang kampanye bakal calon beserta komentar dukungan dari akun media sosial pribadinya pada hari Minggu, dengan dalih hak berekspresi di luar jam kerja. Menurut prinsip integritas dan UU ASN No. 20 Tahun 2023, tindakan tersebut keliru karena...',
      [
        'A. Pegawai aparatur sipil negara tidak mempunyai hak memilih sama sekali baik di dalam maupun di luar bilik suara pemilihan',
        'B. Pemakaian akun media sosial pribadi dilarang total bagi seluruh pegawai negeri sejak awal masa orientasi pengangkatan ASN',
        'C. Komentar dukungan politik praktis hanya boleh diterbitkan apabila melalui siaran pers resmi humas instansi pemerintah daerah',
        'D. Tindakan dukungan di media sosial baru menjadi pelanggaran kode etik apabila pasangan calon tersebut mengalami kekalahan suara',
        'E. Status ASN melekat penuh sehingga dukungan terbuka merusak netralitas birokrasi'
      ],
      4,
      'ASN TETAP punya hak pilih di bilik suara (rahasia), tetapi status abdi negara melekat 24 jam sehingga DILARANG menunjukkan dukungan politik terbuka di medsos pribadi/luar jam kerja!',
      'Pasal 2 dan ketentuan netralitas UU ASN No. 20/2023 menuntut birokrasi netral agar layanan publik adil bagi seluruh golongan. ASN bebas memilih secara rahasia, namun ekspresi dukungan publik—termasuk suka/bagikan ulang di akun pribadi pada hari libur—menggerus kepercayaan netralitas negara.',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5617',
      'Seorang pegawai menyaksikan rekan satu bidangnya sering memanipulasi bukti perjalanan dinas, namun ia memilih diam dengan alasan ingin menjaga keharmonisan tim dan "bersikap netral terhadap urusan orang lain." Ditinjau dari nilai integritas pemberantasan korupsi, sikap paling tepat untuk melawan apatisme tersebut adalah...',
      [
        'A. Mengambil langkah korektif: mengingatkan rekan atau melaporkan penyimpangan via kanal resmi',
        'B. Memfokuskan diri hanya pada pencapaian target kinerja individu agar aman dan terhindar dari proses pemeriksaan audit',
        'C. Membiarkannya terus berlangsung selama penyimpangan tersebut tidak mengganggu kelancaran jadwal rapat internal unit',
        'D. Membahas dugaan penyimpangan anggaran itu secara santai di grup obrolan non-resmi agar pegawai lain ikut berhati-hati',
        'E. Mengurangi interaksi sosial dengan rekan tersebut hingga batas akhir masa penilaian sasaran kinerja tahunan pegawai'
      ],
      0,
      'Melawan sikap APATIS terhadap pelanggaran wewenang = tindakan KOREKTIF & BERANI via jalur sah; "diam agar harmonis" justru membiarkan KKN!',
      'Nilai integritas meliputi kejujuran, kepedulian, keberanian, dan tanggung jawab kolektif atas nama baik lembaga. Bersikap "netral" atau diam atas fraud rekan kerja adalah bentuk pembiaran (apatisme) yang melemahkan akuntabilitas negara.',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5618',
      'Seorang analis hukum mengetahui draf peraturan dan nilai pagu rahasia lelang yang belum diumumkan resmi, lalu diminta sahabat lamanya memberi bocoran informasi "sekadar untuk persiapan." Landasan integritas paling fundamental yang mendorong ASN menjaga kerahasiaan jabatan dalam situasi tersebut adalah...',
      [
        'A. Kekhawatiran apabila kebocoran data terdeteksi oleh tim audit forensik teknologi informasi kementerian pusat',
        'B. Kesadaran bahwa info jabatan ialah amanah negara yang wajib dijaga demi keadilan sumpah ASN',
        'C. Keinginan menjaga jarak pergaulan sosial supaya sahabat lama tidak merasa berutang budi pada masa mendatang',
        'D. Keyakinan bahwa draf naskah kebijakan selalu berubah mendadak sehingga informasi awal dianggap tak lagi berguna',
        'E. Sekadar menghindari tambahan beban pekerjaan administrasi klarifikasi apabila muncul spekulasi dari wartawan media'
      ],
      1,
      'Pembeda motivasi integritas tertinggi: prinsip bahwa informasi jabatan adalah AMANAH & tanggung jawab sumpah ASN, bukan sekadar takut sanksi atau rumor!',
      'Menolak permintaan pihak luar dan mematuhi SOP adalah wujud luarnya, tetapi fondasi prinsipnya (opsi B) ialah meyakini informasi jabatan sebagai amanah publik yang harus dilindungi dari ketidakadilan tender/insider abuse.',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5619',
      'Dua kejadian terjadi pada panitia pengadaan: (X) Pemenang lelang meninggalkan amplop uang di meja petugas sebelum penetapan pemenang disertai pesan "mohon bantu kelancaran"; (Y) Enam bulan usai proyek tuntas bersih, vendor mengirim parsel kue Rp900 ribu ke rumah pejabat tanpa kesepakatan apa pun. Pembedaan hukum paling akurat menurut UU Tipikor adalah...',
      [
        'A. Kejadian X tergolong gratifikasi yang diputihkan dengan melapor ke atasan dalam 60 hari; kejadian Y adalah sumbangan wajar yang bebas sanksi',
        'B. Keduanya otomatis gugur unsur pidananya apabila nilai uang maupun parsel masih di bawah sepuluh juta rupiah sebelum masuk rekening bank',
        'C. Kejadian X merupakan pemerasan dalam jabatan pegawai; kejadian Y hanya boleh diproses hukum apabila ditemukan BPK saat audit tahun berikutnya',
        'D. Kejadian X termasuk suap (langsung pidana); kejadian Y tergolong gratifikasi yang wajib dilaporkan <=30 hari kerja',
        'E. Keduanya wajib dibagikan secara merata kepada seluruh staf ruangan kantor supaya tidak dinikmati pejabat panitia pengadaan seorang diri'
      ],
      3,
      'Ingat rumus UU Tipikor: SUAP = ada meeting of minds/transaksional (pidana seketika, tak bisa dilaporkan untuk hapus pidana); GRATIFIKASI = pasif tanpa kesepakatan -> wajib lapor KPK <= 30 hari kerja (Ps 12B & 12C)!',
      'Pada kejadian X, pemberian dikaitkan langsung dengan maksud memengaruhi keputusan pengadaan (suap aktif/pasif). Pada kejadian Y, tidak ada kesepakatan transaksional, tetapi berhubungan dengan jabatan sehingga berstatus gratifikasi yang wajib dilaporkan ke KPK maksimal 30 hari kerja.',
      ''
    ],

    // 4. Nasionalisme & Bela Negara Visioner (6 soal -> twk56-nasionalisme-bela)
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5620',
      'Pasal 30 ayat (1) UUD NRI 1945 menegaskan hak dan kewajiban warga negara dalam usaha pertahanan dan keamanan negara. Pada era perang informasi nirmiliter saat ini, perilaku sehari-hari warga negara yang berdampak paling langsung memperkuat ketahanan ideologi bangsa adalah...',
      [
        'A. Membayar pajak daerah tepat waktu menjelang penutupan tahun anggaran belanja pemerintah setempat',
        'B. Mengikuti lomba gerak jalan kemerdekaan dengan mengenakan pakaian seragam instansi pemerintah setiap bulan Agustus',
        'C. Memperbanyak unggahan promosi destinasi wisata unggulan lokal agar kunjungan wisatawan mancanegara meningkat pesat',
        'D. Menyimpan seluruh keluhan pelayanan publik untuk diri sendiri supaya citra resmi instansi selalu terlihat sangat stabil',
        'E. Menolak sebaran paham radikal, ujaran kebencian, serta aktif memverifikasi kebenaran fakta'
      ],
      4,
      'Fokus pertanyaan: bela negara non-militer yang berdampak LANGSUNG ke KETAHANAN IDEOLOGI -> memutus penyebaran radikalisme/intoleransi/hoaks ideologis!',
      'Membayar pajak atau mempromosikan wisata berdampak pada ketahanan ekonomi, sedangkan upacara/gerak jalan menguatkan simbol nasionalisme. Ketahanan ideologi secara langsung dijaga dengan membendung infiltrasi intoleransi dan radikalisme di ruang sosial dan media digital.',
      ''
    ],
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5621',
      'Pasal 27 ayat (3) UUD NRI 1945 menyebut bela negara secara bersamaan sebagai "hak dan kewajiban" setiap warga negara. Secara filosofis ketatanegaraan, perumusan ganda "hak sekaligus kewajiban" ini mengandung makna mendalam bahwa membela negara adalah...',
      [
        'A. Upaya menjaga "ruang hidup bersama" yang terjamin oleh partisipasi aktif setiap warganya',
        'B. Kewajiban hukum mutlak yang meniadakan seluruh ruang hak asasi sipil warga negara selama pemerintahan resmi masih berdiri',
        'C. Transaksi sepihak di mana warga menukar kebebasan berpikir dengan jaminan imbalan perlindungan militer bersenjata lengkap',
        'D. Cara seremonial tahunan untuk membalas jasa pengorbanan fisik generasi terdahulu tanpa relevansi kebijakan sipil modern',
        'E. Wewenang eksklusif pasukan komponen cadangan militer yang harus dipisahkan penuh dari pengabdian profesi warga sipil'
      ],
      0,
      'Mengapa HAK sekaligus KEWAJIBAN? HAK = membela masa depan & ruang aman diri sendiri di dalam negara; KEWAJIBAN = ruang hidup bersama itu butuh kontribusi semua warga!',
      'Negara bukanlah entitas asing di luar rakyat, melainkan rumah dan ruang hidup bersama. Membela negara adalah hak karena warga melindungi kepentingannya sendiri atas rasa aman dan keadilan, sekaligus kewajiban karena keberlanjutan rumah bersama menuntut tanggung jawab seluruh warganya.',
      ''
    ],
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5622',
      'Seorang pimpinan pengadaan BUMN strategis dihadapkan pada dilema: membeli komponen kunci impor yang saat ini 12% lebih murah dan siap pakai, atau menggandeng industri manufaktur dalam negeri yang baru merintis teknologi agar mampu memenuhi standar mutu dalam jangka panjang. Kebijakan yang paling mencerminkan Bela Negara yang visioner adalah...',
      [
        'A. Membeli komponen impor seluruhnya tanpa pembinaan manufaktur lokal demi mengejar efisiensi biaya jangka pendek kuartal ini',
        'B. Menutup akses semua teknologi luar negeri secara total meski proyek infrastruktur strategis nasional terhenti selama lima tahun',
        'C. Menunggu industri swasta lokal meniru produk manufaktur asing secara mandiri tanpa keterlibatan belanja modal negara',
        'D. Menyusun peta jalan kemitraan bertahap dengan pemasok lokal disertai alih teknologi terukur',
        'E. Meminta pemerintah melarang seluruh arus impor komponen sejenis secara mendadak esok hari tanpa masa penyesuaian transisi'
      ],
      3,
      'Bela Negara strategis/visioner di sektor industri = investasi pada kemandirian rantai pasok nasional (bina vendor lokal + transfer standar mutu bertahap), bukan pasif atau menutup diri ekstrem!',
      'Memilih produk impor semata membuat ketergantungan strategis berlanjut, sementara menolak impor mendadak melumpuhkan proyek. Membina pemasok lokal lewat peta jalan bertahap menumbuhkan kedaulatan ekonomi dan teknologi nasional jangka panjang.',
      ''
    ],
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5623',
      'Pemerintah melarang ekspor bijih mineral mentah (seperti nikel dan bauksit) dan mewajibkan pengolahan hilirisasi di dalam negeri. Dilihat dari filosofi pertahanan ekonomi dan Bela Negara paling mendasar (di luar kenaikan kas negara semata), tujuan transformasi struktural kebijakan ini adalah...',
      [
        'A. Menghapus sama sekali peran perdagangan bebas internasional bersama seluruh negara mitra manufaktur di kawasan regional',
        'B. Memusatkan seluruh perizinan kepemilikan tambang hanya pada perusahaan kota besar agar proses pengawasan berjalan lebih cepat',
        'C. Memastikan harga pasar komoditas mentah dunia jatuh drastis sehingga negara lain menghentikan kegiatan eksplorasi tambang',
        'D. Menurunkan standar keselamatan pekerja pabrik peleburan berat demi mempercepat kuota ekspor logam olahan ke luar negeri',
        'E. Melepas ketergantungan ekspor bahan mentah guna mewujudkan kedaulatan industri nasional'
      ],
      4,
      'Filosofi pertahanan ekonomi dari hilirisasi (Pasal 33 UUD 1945) = memutus ketergantungan "pemasok bahan mentah" agar bangsa berdaulat di rantai nilai industri global!',
      'Hilirisasi bukan sekadar menaikkan devisa sesaat, melainkan transformasi struktural: mencegah "kutukan sumber daya alam" di mana bahan mentah dijual murah lalu bangsa membeli produk jadinya dengan harga tinggi. Ini memperkuat kemandirian dan posisi tawar strategis Indonesia.',
      ''
    ],
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5624',
      'Sebuah provinsi kaya hutan hujan tropis menolak tawaran konversi lahan skala besar untuk perkebunan monokultur meski menjanjikan lonjakan PAD jangka pendek, demi menjaga penyangga air, keanekaragaman hayati, dan ekologi warga. Prinsip Bela Negara paling esensial di balik keputusan strategis tersebut adalah...',
      [
        'A. Perlindungan "ruang hidup" dan ketahanan ekologis bangsa demi generasi mendatang',
        'B. Sekadar mengejar penghargaan ekowisata taraf internasional supaya mampu menarik lebih banyak wisatawan mancanegara',
        'C. Penolakan total tanpa pengecualian terhadap seluruh bentuk investasi maupun kegiatan ekonomi modern di wilayah provinsi',
        'D. Pemanfaatan narasi kelestarian lingkungan sebagai alasan administratif untuk menunda seluruh proyek pembangunan antardaerah',
        'E. Pembatasan hak kelola tanah bagi masyarakat hukum adat setempat agar kawasan hutan ditutup penuh bagi semua warga'
      ],
      0,
      'Ekologi & kedaulatan SDA berkelanjutan = membela "RUANG HIDUP" bangsa (kedaulatan pangan, air bersih, dan masa depan generasi mendatang)!',
      'Dalam konsepsi pertahanan modern, tanah air adalah "ruang hidup" yang menopang kedaulatan pangan, air, dan kesehatan rakyat. Mengorbankan ekosistem vital demi PAD sesaat justru mengancam ketahanan hidup bangsa dalam jangka panjang.',
      ''
    ],
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5625',
      'Dominasi gelombang budaya populer asing (seperti K-Pop, drama, dan gim global) membuat generasi muda lebih akrab dengan ikon budaya luar dibandingkan cerita rakyat Nusantara. Strategi Bela Negara dan nasionalisme kultural paling konstruktif menghadapi "invasi soft power" tersebut adalah...',
      [
        'A. Memblokir secara permanen seluruh platform penayangan konten hiburan luar negeri di dalam jaringan internet nasional',
        'B. Mewajibkan seluruh pelajar dan pekerja mengenakan pakaian adat daerah lengkap setiap hari selama jam sekolah dan jam kerja',
        'C. Mengejek para penggemar budaya pop luar negeri di ruang media sosial sebagai generasi yang kehilangan jati diri kebangsaan',
        'D. Mengadaptasi kekayaan budaya lokal ke format kreatif modern (animasi, gim, audio) yang digemari muda',
        'E. Membiarkan tradisi lokal menghilang secara alami karena dinilai tidak lagi mampu bersaing pada era keterbukaan informasi'
      ],
      3,
      'Hadapi soft power global secara konstruktif: bangun SOFT POWER tandingan dari dalam lewat inovasi format modern (bukan sensor ekstrem atau pasif menyerah)!',
      'Sensor mutlak memicu resistensi dan tertinggal dari arus teknologi, sedangkan mengejek generasi muda justru memperlebar jarak budaya. Mengemas ulang legenda dan budaya Nusantara ke medium kreatif modern membuat warisan bangsa tetap hidup dan berdaya saing global.',
      ''
    ],

    // 5. Bahasa Indonesia: EYD V, Kata Bentukan, Kalimat Efektif & Penalaran Teks (7 soal -> twk56-bahasa)
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5626',
      'Cermati penggunaan bentuk terikat, imbuhan, dan gabungan kata berikut! Kalimat yang seluruh penulisannya TEPAT sesuai kaidah EYD Edisi V dan KBBI adalah...',
      [
        'A. Sikap anti Pancasila harus di berantas bersama karena jelas bertentangan dengan tanggungjawab warga negara.',
        'B. Sikap anti-Pancasila harus diberantas karena mengingkari tanggung jawab warga negara.',
        'C. Sikap anti-Pancasila wajib segera diberantas karena mengingkari tanggungjawab kita sebagai warganegara Indonesia.',
        'D. Mahasiswa non aktif tersebut wajib mempertanggung jawabkan penggunaan dana beasiswa pendidikan di hadapan tim penilai.',
        'E. Kemerdekaan bangsa kita terwujud atas berkat rahmat Tuhan Yang Mahaesa serta kerja keras seluruh lapisan warga negara.'
      ],
      1,
      'Cek 4 jebakan EYD V: "anti-" + kapital = pakai hubung (anti-Pancasila); awalan pasif "di-" = serangkai (diberantas); "tanggung jawab" & "warga negara" = terpisah (bukan tanggungjawab/warganegara); "Maha Esa" = terpisah!',
      'Sesuai EYD V & KBBI: (1) anti- bertemu huruf kapital memakai tanda hubung -> anti-Pancasila (sedangkan nonaktif tanpa kapital ditulis serangkai); (2) diberantas adalah awalan pasif -> serangkai; (3) tanggung jawab dan warga negara ditulis terpisah (kecuali berkonfiks seperti mempertanggungjawabkan); (4) bentuk terikat maha yang diikuti sifat/nama Tuhan seperti Maha Esa ditulis terpisah.',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5627',
      'Berdasarkan aturan penggunaan huruf miring dalam EYD Edisi V, manakah kalimat berikut yang penulisannya PALING BENAR? (Keterangan: kata dalam tanda *...* menunjukkan teks cetak miring)',
      [
        'A. Buku *Habis Gelap Terbitlah Terang* menguraikan gagasan *emansipasi* perempuan di ruang publik.',
        'B. Konsep negara hukum atau *Rechtsstaat* tercantum dalam *Undang-Undang Dasar Negara Republik Indonesia*.',
        'C. Presiden Soekarno pernah menyampaikan pidato berjudul *To Build the World Anew* di hadapan Majelis Umum PBB.',
        'D. Organisasi kesehatan dunia, *World Health Organization*, mendukung program imunisasi terpadu di daerah terpencil.',
        'E. Setelah proses lobi cukup panjang, rancangan aturan disahkan lewat mekanisme *voting* terbuka di parlemen.'
      ],
      2,
      '3 fungsi huruf miring EYD V: (1) judul karya/media, (2) penegasan kata, (3) kata/ungkapan asing/daerah BELUM diserap. Jebakan: kata serapan baku (emansipasi, voting) & NAMA LEMBAGA asing (World Health Organization) TIDAK dimiringkan!',
      'Opsi C tepat karena judul pidato berbahasa asing (*To Build the World Anew*) ditulis miring, sedangkan PBB dan Presiden Soekarno tegak. Opsi A keliru memiringkan kata serapan baku "emansipasi"; B keliru memiringkan nama dokumen resmi negara; D keliru memiringkan nama lembaga resmi asing (EYD V melarang pemiringan nama diri/lembaga asing); E keliru memiringkan kata serapan "voting".',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5628',
      'Perhatikan kalimat berikut: "Setiap pejabat publik harus mendahulukan kepentingan umum dan memegang teguh integritas, karena sikap itu merupakan cerminan dari amanah yang diembannya." Apabila dilakukan usulan perbaikan pada kata bentukan di bawah ini, manakah usulan yang SALAH dan justru merusak ketepatan sintaksis kalimat?',
      [
        'A. Kata "mendahulukan" diganti menjadi bentuk pasif "didahulukan" disertai penyesuaian susunan subjek dan objek kalimat',
        'B. Kata "kepentingan" diubah menjadi bentuk verba intransitif "berkepentingan"',
        'C. Kata "memegang" diubah menjadi bentuk pasif "dipegang" apabila keseluruhan struktur kalimat dipasifkan secara seimbang',
        'D. Kata "cerminan" diganti dengan kata benda baku "pencerminan" yang sesuai dengan konteks proses pelaksanaannya',
        'E. Bentuk pasif "diembannya" diubah menjadi bentuk aktif "mengembannya" disertai penyesuaian posisi subjek pelaku'
      ],
      1,
      'Verba transitif aktif "mendahulukan" WAJIB diikuti objek KATA BENDA (kepentingan), BUKAN verba intransitif "berkepentingan"!',
      'Mengubah kata benda "kepentingan" menjadi kata kerja "berkepentingan" menghasilkan frasa tidak gramatikal dan tidak logis ("mendahulukan berkepentingan umum"). Sementara opsi lain (A, C, D, E) masih membentuk kategori gramatikal yang sah apabila konstruksi kalimat aktif-pasifnya disesuaikan.',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5629',
      'Cermatilah penerapan huruf kapital, kata depan, dan tanda baca pada kalimat berikut. Penulisan yang PALING SESUAI dengan kaidah EYD V adalah...',
      [
        'A. Presiden bersama Dewan Perwakilan Rakyat berwenang membentuk Undang-Undang yang kedudukannya berada di bawah Undang-Undang Dasar 1945.',
        'B. Presiden bersama dewan perwakilan rakyat berwenang membentuk peraturan perundang-undangan yang berkedudukan tepat di bawah Undang-Undang Dasar 1945.',
        'C. Presiden bersama Dewan Perwakilan Rakyat berwenang membentuk undang-undang, yang berada di bawah Undang-Undang Dasar 1945.',
        'D. Presiden bersama Dewan Perwakilan Rakyat berwenang membentuk produk hukum undang-undang; yang kedudukannya tepat dibawah Undang-Undang Dasar 1945.',
        'E. Presiden bersama Dewan Perwakilan Rakyat berwenang membentuk undang-undang, yang berada dibawah aturan Undang-undang Dasar Negara Republik Indonesia 1945.'
      ],
      2,
      'Cek 5 kunci: (1) lembaga resmi kapital (Dewan Perwakilan Rakyat); (2) jenis produk umum kecil (undang-undang); (3) nama dokumen spesifik kapital (Undang-Undang Dasar 1945); (4) kata depan tempat pisah (di bawah); (5) koma aposisi, bukan titik koma (;).',
      'Opsi C memenuhi seluruh kaidah EYD V: Presiden dan Dewan Perwakilan Rakyat kapital (nama jabatan/lembaga negara), "undang-undang" ditulis huruf kecil (merujuk jenis produk hukum secara umum, bukan judul UU tertentu), koma mengapit klausa penjelas "yang...", "di bawah" terpisah, dan Undang-Undang Dasar 1945 kapital.',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5630',
      'Dalam rancangan nota dinas tertulis kalimat: "Dalam rangka untuk meningkatkan kualitas layanan publik, maka bagi seluruh pegawai diimbau agar supaya tidak menunda verifikasi berkas." Perbaikan paling efektif dan hemat sesuai kaidah kalimat efektif adalah...',
      [
        'A. "Untuk meningkatkan kualitas layanan publik, maka seluruh pegawai diimbau agar tidak menunda verifikasi berkas."',
        'B. "Dalam rangka meningkatkan kualitas layanan publik, seluruh pegawai diimbau tidak menunda verifikasi berkas."',
        'C. "Bagi seluruh pegawai diimbau tidak menunda verifikasi berkas dalam rangka untuk meningkatkan layanan."',
        'D. "Dalam rangka untuk meningkatkan layanan publik, seluruh para pegawai diimbau tidak menunda verifikasi."',
        'E. "Agar supaya meningkatkan kualitas layanan publik, maka semua pegawai diimbau jangan menunda verifikasi."'
      ],
      1,
      'Hapus 3 cacat klasik kalimat efektif: (1) redundan ("dalam rangka untuk", "agar supaya"), (2) konjungsi "maka" setelah keterangan awal, (3) preposisi "bagi" di depan subjek!',
      'Kalimat asli bermasalah karena menumpuk "Dalam rangka untuk" (pilih satu), memakai konjungsi "maka" di tengah induk kalimat, meletakkan preposisi "bagi" yang melenyapkan fungsi Subjek ("seluruh pegawai"), dan mengulang "agar supaya". Hanya opsi B yang jernih struktur Keterangan + Subjek + Predikat + Pelengkap tanpa pemborosan.',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5631',
      'Bacalah paragraf berikut! "Masuknya investasi teknologi sering dipandang sebagai penggerak utama ekonomi dan penciptaan lapangan kerja. Namun di balik manfaat ekonomi itu, muncul tantangan berupa nilai kerja pragmatis yang dapat menggeser nilai luhur bangsa. Oleh sebab itu, sikap bangsa semestinya tidak menutup diri secara membabi buta, melainkan memperkuat ketahanan ideologi sebagai penyaring pembangunan." Simpulan paling tepat atas paragraf tersebut adalah...',
      [
        'A. Negara Indonesia wajib menolak seluruh arus investasi teknologi asing agar budaya kerja pragmatis tidak masuk menyebar ke dalam masyarakat luas',
        'B. Keterbukaan terhadap investasi teknologi diimbangi penguatan ideologi Pancasila sebagai penyaring pembangunan',
        'C. Laju pertumbuhan ekonomi jauh lebih menentukan masa depan kemajuan bangsa daripada sekadar mempertahankan kemurnian nilai luhur ideologi negara',
        'D. Masuknya investasi asing hanya mendatangkan dampak negatif bagi etos kerja nasional sehingga harus terus diawasi ketat oleh aparat keamanan negara',
        'E. Upaya penguatan ketahanan ideologi nasional merupakan satu-satunya faktor utama penghambat arus masuknya investasi asing di kancah global'
      ],
      1,
      'Simpulan yang baik MERANGKUM kalimat penegas tanpa terlalu sempit (hanya menyebut masalahnya) atau melanggar isi teks ("menolak semua / satu-satunya")!',
      'Paragraf ini menekankan keseimbangan dua gagasan: menerima manfaat ekonomi investasi sekaligus membangun filter ketahanan ideologi. Opsi B merangkum keduanya secara akurat; opsi A & D bertentangan dengan kalimat terakhir teks, sedangkan C & E menyimpang dari fokus argumen penulis.',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5632',
      'Bacalah paragraf berikut! "Menjaga integritas nasional di era digital memiliki cakupan yang lebih luas daripada sekadar mempertahankan batas wilayah fisik. Ancaman kini hadir lewat penetrasi ideologi ekstrem di ruang siber, penyebaran disinformasi terstruktur, dan rekayasa algoritma yang memicu konflik sosial. Oleh karena itu, literasi digital dan ketahanan siber menjadi elemen penting bela negara kontemporer." Ide pokok paragraf tersebut adalah...',
      [
        'A. Penyebaran hoaks dan disinformasi terstruktur merupakan penyebab utama munculnya berbagai konflik antarwarga di platform media sosial',
        'B. Penjagaan integritas nasional era digital meluas dari batas fisik mencakup ancaman ruang siber',
        'C. Rekayasa algoritma berbagai platform digital komersial merupakan bentuk agresi militer gaya baru dari kekuatan negara luar',
        'D. Peningkatan literasi digital masyarakat dinilai jauh lebih penting dibanding pertahanan teritorial wilayah perbatasan darat dan laut negara',
        'E. Seluruh konflik sosial modern di perkotaan dapat diselesaikan seketika apabila pemerintah pusat menutup seluruh akses media sosial'
      ],
      1,
      'Paragraf deduktif menaruh kalimat utama di KALIMAT PERTAMA; kalimat 2 merinci contoh ancaman, kalimat terakhir memberi solusi/simpulan!',
      'Ide pokok mencerminkan gagasan inti kalimat utama di awal paragraf: penjagaan integritas nasional era digital melampaui aspek teritorial fisik menjadi perlindungan atas ancaman ruang siber. Opsi A hanya mengambil rincian kalimat penjelas, sementara C/D/E melebih-lebihkan klaim teks.',
      ''
    ]
  ];

  /* ==================== 18 SOAL TIU HOTS (ANALO, TIM, TAKTIS, TABEL SVG, MATRIKS 3x3 SVG) ==================== */

  // Helper SVG builders untuk 3 Analisis Tabel Data + 6 Figural Matriks 3x3 (setara E-book #57-65)
  const SVG_TBL_ROTI = svgWrap('0 0 430 185', 430, 185,
    '<text x="215" y="22" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Laporan Penjualan Unit Usaha Koperasi ASN (Mingguan)</text>' +
    '<rect x="16" y="34" width="398" height="136" rx="6" fill="#f8fafc" stroke="#94a3b8"/>' +
    '<line x1="16" y1="64" x2="414" y2="64" stroke="#94a3b8"/><line x1="16" y1="90" x2="414" y2="90" stroke="#94a3b8"/>' +
    '<line x1="16" y1="116" x2="414" y2="116" stroke="#94a3b8"/><line x1="16" y1="142" x2="414" y2="142" stroke="#94a3b8"/>' +
    '<line x1="126" y1="34" x2="126" y2="170" stroke="#94a3b8"/><line x1="224" y1="34" x2="224" y2="170" stroke="#94a3b8"/><line x1="322" y1="34" x2="322" y2="170" stroke="#94a3b8"/>' +
    '<text x="71" y="53" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Produk</text>' +
    '<text x="175" y="53" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Harga Jual</text>' +
    '<text x="273" y="53" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Biaya/Unit</text>' +
    '<text x="368" y="53" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Terjual</text>' +
    '<text x="71" y="81" text-anchor="middle" fill="#334155" font-size="10.5">Roti Gandum</text><text x="175" y="81" text-anchor="middle" fill="#334155" font-size="10.5">Rp12.000</text><text x="273" y="81" text-anchor="middle" fill="#334155" font-size="10.5">Rp7.500</text><text x="368" y="81" text-anchor="middle" fill="#334155" font-size="10.5">240</text>' +
    '<text x="71" y="107" text-anchor="middle" fill="#334155" font-size="10.5">Bolu Pandan</text><text x="175" y="107" text-anchor="middle" fill="#334155" font-size="10.5">Rp28.000</text><text x="273" y="107" text-anchor="middle" fill="#334155" font-size="10.5">Rp16.500</text><text x="368" y="107" text-anchor="middle" fill="#334155" font-size="10.5">75</text>' +
    '<text x="71" y="133" text-anchor="middle" fill="#334155" font-size="10.5">Donat Kentang</text><text x="175" y="133" text-anchor="middle" fill="#334155" font-size="10.5">Rp9.000</text><text x="273" y="133" text-anchor="middle" fill="#334155" font-size="10.5">Rp6.000</text><text x="368" y="133" text-anchor="middle" fill="#334155" font-size="10.5">380</text>' +
    '<text x="71" y="159" text-anchor="middle" fill="#334155" font-size="10.5">Tart Cokelat</text><text x="175" y="159" text-anchor="middle" fill="#334155" font-size="10.5">Rp18.000</text><text x="273" y="159" text-anchor="middle" fill="#334155" font-size="10.5">Rp12.500</text><text x="368" y="159" text-anchor="middle" fill="#334155" font-size="10.5">140</text>'
  );

  const SVG_TBL_DIVISI = svgWrap('0 0 430 165', 430, 165,
    '<text x="215" y="22" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Kinerja Pendapatan &amp; Margin Laba Bersih per Divisi</text>' +
    '<rect x="16" y="34" width="398" height="112" rx="6" fill="#f8fafc" stroke="#94a3b8"/>' +
    '<line x1="16" y1="62" x2="414" y2="62" stroke="#94a3b8"/><line x1="16" y1="90" x2="414" y2="90" stroke="#94a3b8"/><line x1="16" y1="118" x2="414" y2="118" stroke="#94a3b8"/>' +
    '<line x1="156" y1="34" x2="156" y2="146" stroke="#94a3b8"/><line x1="306" y1="34" x2="306" y2="146" stroke="#94a3b8"/>' +
    '<text x="86" y="52" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Divisi</text>' +
    '<text x="231" y="52" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Pendapatan (Miliar Rp)</text>' +
    '<text x="360" y="52" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Margin Laba</text>' +
    '<text x="86" y="80" text-anchor="middle" fill="#334155" font-size="10.5">Infrastruktur</text><text x="231" y="80" text-anchor="middle" fill="#334155" font-size="10.5">300</text><text x="360" y="80" text-anchor="middle" fill="#334155" font-size="10.5">12%</text>' +
    '<text x="86" y="108" text-anchor="middle" fill="#334155" font-size="10.5">Aplikasi GovTech</text><text x="231" y="108" text-anchor="middle" fill="#334155" font-size="10.5">500</text><text x="360" y="108" text-anchor="middle" fill="#334155" font-size="10.5">24%</text>' +
    '<text x="86" y="136" text-anchor="middle" fill="#334155" font-size="10.5">Layanan Cloud</text><text x="231" y="136" text-anchor="middle" fill="#334155" font-size="10.5">200</text><text x="360" y="136" text-anchor="middle" fill="#334155" font-size="10.5">42%</text>'
  );

  const SVG_TBL_WILAYAH = svgWrap('0 0 430 185', 430, 185,
    '<text x="215" y="22" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">Penduduk Usia Produktif Antar-Kecamatan (2020 vs 2025)</text>' +
    '<rect x="16" y="34" width="398" height="136" rx="6" fill="#f8fafc" stroke="#94a3b8"/>' +
    '<line x1="16" y1="64" x2="414" y2="64" stroke="#94a3b8"/><line x1="16" y1="90" x2="414" y2="90" stroke="#94a3b8"/>' +
    '<line x1="16" y1="116" x2="414" y2="116" stroke="#94a3b8"/><line x1="16" y1="142" x2="414" y2="142" stroke="#94a3b8"/>' +
    '<line x1="144" y1="34" x2="144" y2="170" stroke="#94a3b8"/><line x1="278" y1="34" x2="278" y2="170" stroke="#94a3b8"/>' +
    '<text x="80" y="53" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Kecamatan</text>' +
    '<text x="211" y="53" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Tahun 2020</text>' +
    '<text x="346" y="53" text-anchor="middle" fill="#0f172a" font-size="10.5" font-weight="bold">Tahun 2025</text>' +
    '<text x="80" y="81" text-anchor="middle" fill="#334155" font-size="10.5">Jaya</text><text x="211" y="81" text-anchor="middle" fill="#334155" font-size="10.5">80.000</text><text x="346" y="81" text-anchor="middle" fill="#334155" font-size="10.5">100.000</text>' +
    '<text x="80" y="107" text-anchor="middle" fill="#334155" font-size="10.5">Makmur</text><text x="211" y="107" text-anchor="middle" fill="#334155" font-size="10.5">120.000</text><text x="346" y="107" text-anchor="middle" fill="#334155" font-size="10.5">144.000</text>' +
    '<text x="80" y="133" text-anchor="middle" fill="#334155" font-size="10.5">Harmoni</text><text x="211" y="133" text-anchor="middle" fill="#334155" font-size="10.5">45.000</text><text x="346" y="133" text-anchor="middle" fill="#334155" font-size="10.5">63.000</text>' +
    '<text x="80" y="159" text-anchor="middle" fill="#334155" font-size="10.5">Sejahtera</text><text x="211" y="159" text-anchor="middle" fill="#334155" font-size="10.5">160.000</text><text x="346" y="159" text-anchor="middle" fill="#334155" font-size="10.5">192.000</text>'
  );

  // Figural Matrix 3x3 helper: draw 3x3 grid inside 210x210 cell size 70
  const mGrid = cells => svgWrap('0 0 230 230', 230, 230,
    '<g transform="translate(10,10)">' +
    '<rect x="0" y="0" width="210" height="210" fill="#fff" stroke="#1e293b" stroke-width="2"/>' +
    '<line x1="70" y1="0" x2="70" y2="210" stroke="#334155" stroke-width="1.6"/>' +
    '<line x1="140" y1="0" x2="140" y2="210" stroke="#334155" stroke-width="1.6"/>' +
    '<line x1="0" y1="70" x2="210" y2="70" stroke="#334155" stroke-width="1.6"/>' +
    '<line x1="0" y1="140" x2="210" y2="140" stroke="#334155" stroke-width="1.6"/>' +
    cells.map((c, idx) => {
      const col = idx % 3, row = Math.floor(idx / 3);
      return `<g transform="translate(${col * 70},${row * 70})">${c === '?' ? '<text x="35" y="45" text-anchor="middle" fill="#dc2626" font-size="30" font-weight="bold">?</text>' : c}</g>`;
    }).join('') +
    '</g>'
  );
  const optSvg = body => 'IMG:' + `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="72" height="72"><rect width="70" height="70" rx="6" fill="#fff" stroke="#cbd5e1"/>${body}</svg>`;

  // #60-style: Arrow rotates +90deg CW + shape sides = dots added outside/inside
  // Baris 1: [panah kiri <-] + [segitiga 3 sisi] => [segitiga + panah atas ↑ + 3 titik]
  // Baris 2: [panah atas ↑] + [persegi 4 sisi] => [persegi + panah kanan -> + 4 titik]
  // Baris 3: [?] + [segilima 5 sisi] => [segilima + panah bawah ↓ + 5 titik]  => maka [?] = panah kanan ->!
  // Let's keep [?] at bottom-right so user guesses final merged shape:
  // Baris 3: [panah kanan ->] + [segilima 5 sisi] => [?] = segilima + panah bawah ↓ + 5 titik biru!
  const arrowCell = deg => `<g transform="translate(35,35) rotate(${deg})"><path d="M-16 0 H14 M7 -7 L14 0 L7 7" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const polyPath = {
    3: '<polygon points="35,14 55,50 15,50" fill="none" stroke="#0f172a" stroke-width="2.4"/>',
    4: '<rect x="17" y="17" width="36" height="36" fill="none" stroke="#0f172a" stroke-width="2.4"/>',
    5: '<polygon points="35,14 55,29 47,53 23,53 15,29" fill="none" stroke="#0f172a" stroke-width="2.4"/>'
  };
  const dotsRow = (n, y) => {
    const xs = n === 3 ? [27, 35, 43] : n === 4 ? [23, 31, 39, 47] : [21, 28, 35, 42, 49];
    return xs.map(x => `<circle cx="${x}" cy="${y}" r="2.5" fill="#0284c7"/>`).join('');
  };
  const mergedF1 = (sides, deg) => polyPath[sides] + `<g transform="translate(35,34) rotate(${deg}) scale(0.55)"><path d="M-16 0 H14 M7 -7 L14 0 L7 7" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/></g>` + dotsRow(sides, 62);
  const SVG_FIG_1 = mGrid([
    arrowCell(180), polyPath[3], mergedF1(3, -90),
    arrowCell(-90), polyPath[4], mergedF1(4, 0),
    arrowCell(0), polyPath[5], '?'
  ]);
  const OPT_FIG_1 = [
    'A. ' + optSvg(mergedF1(5, 0)),
    'B. ' + optSvg(mergedF1(5, 90)),
    'C. ' + optSvg(mergedF1(5, 180)),
    'D. ' + optSvg(mergedF1(4, 90)),
    'E. ' + optSvg(polyPath[5] + `<g transform="translate(35,34) rotate(90) scale(0.55)"><path d="M-16 0 H14 M7 -7 L14 0 L7 7" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/></g>` + dotsRow(3, 62))
  ];

  // #61-style: Kolom 1 + Kolom 2 -> gabung di Kolom 3 dengan elemen Kolom 2 di-FLIP horizontal (mirror X) & separuh sisi kanan diarsir diagonal!
  // Cukup jelas & 100% deterministik:
  const fHalfLeftBar = '<rect x="10" y="14" width="12" height="42" rx="3" fill="#0f172a"/>';
  const fHalfLeftTri = '<polygon points="10,16 26,35 10,54" fill="#0f172a"/>';
  const fHalfLeftDia = '<polygon points="18,16 26,35 18,54 10,35" fill="#0f172a"/>';
  const fFlagRight = '<path d="M30 16 V54 M30 16 H52 L44 26 L52 36 H30" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>';
  const fFlagFlipped = '<path d="M54 16 V54 M54 16 H32 L40 26 L32 36 H54" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>';
  const fStepRight = '<path d="M30 50 V18 H44 V34 H56 V50 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>';
  const fStepFlipped = '<path d="M56 50 V18 H42 V34 H30 V50 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>';
  const fLRight = '<path d="M32 16 H42 V42 H56 V52 H32 Z" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2.5"/>';
  const fLFlipped = '<path d="M56 16 H46 V42 H32 V52 H56 Z" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2.5"/>';
  const fCutDiag = '<line x1="8" y1="8" x2="62" y2="62" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="4 3"/>';
  const SVG_FIG_2 = mGrid([
    fHalfLeftBar, fFlagRight, fHalfLeftBar + fFlagFlipped + fCutDiag,
    fHalfLeftTri, fStepRight, fHalfLeftTri + fStepFlipped + fCutDiag,
    fHalfLeftDia, fLRight, '?'
  ]);
  const OPT_FIG_2 = [
    'A. ' + optSvg(fHalfLeftDia + fLFlipped + fCutDiag),
    'B. ' + optSvg(fHalfLeftDia + fLRight + fCutDiag),
    'C. ' + optSvg(fHalfLeftTri + fLFlipped + fCutDiag),
    'D. ' + optSvg(fHalfLeftDia + fLFlipped),
    'E. ' + optSvg(fHalfLeftDia + fLFlipped + '<line x1="62" y1="8" x2="8" y2="62" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="4 3"/>')
  ];

  // #62-style: Gabungan bentuk menyusut ke dalam bingkai tetap (Kolom 3 = gabungan bentuk K1 + K2 dengan ukuran kecil berpasangan simetris, orientasi tidak berubah)
  const SVG_FIG_3 = mGrid([
    '<circle cx="24" cy="24" r="10" fill="#0f172a"/><circle cx="48" cy="48" r="10" fill="#0f172a"/>',
    '<rect x="14" y="38" width="16" height="16" fill="#0284c7"/><rect x="40" y="14" width="16" height="16" fill="#0284c7"/>',
    '<circle cx="22" cy="22" r="7" fill="#0f172a"/><circle cx="48" cy="48" r="7" fill="#0f172a"/><rect x="15" y="41" width="12" height="12" fill="#0284c7"/><rect x="41" y="15" width="12" height="12" fill="#0284c7"/>',

    '<polygon points="22,12 31,29 13,29" fill="#0f172a"/><polygon points="48,40 57,57 39,57" fill="#0f172a"/>',
    '<polygon points="48,12 56,22 48,32 40,22" fill="#dc2626"/><polygon points="22,40 30,50 22,60 14,50" fill="#dc2626"/>',
    '<polygon points="22,14 29,27 15,27" fill="#0f172a"/><polygon points="48,42 55,55 41,55" fill="#0f172a"/><polygon points="48,14 54,22 48,30 42,22" fill="#dc2626"/><polygon points="22,42 28,50 22,58 16,50" fill="#dc2626"/>',

    '<path d="M12 22 H30 M24 16 L30 22 L24 28" stroke="#0f172a" stroke-width="3" fill="none"/><path d="M38 48 H56 M50 42 L56 48 L50 54" stroke="#0f172a" stroke-width="3" fill="none"/>',
    '<path d="M56 22 H38 M44 16 L38 22 L44 28" stroke="#059669" stroke-width="3" fill="none"/><path d="M30 48 H12 M18 42 L12 48 L18 54" stroke="#059669" stroke-width="3" fill="none"/>',
    '?'
  ]);
  const OPT_FIG_3 = [
    'A. ' + optSvg('<path d="M13 22 H27 M22 17 L27 22 L22 27" stroke="#0f172a" stroke-width="2.5" fill="none"/><path d="M41 48 H55 M50 43 L55 48 L50 53" stroke="#0f172a" stroke-width="2.5" fill="none"/><path d="M55 22 H41 M46 17 L41 22 L46 27" stroke="#059669" stroke-width="2.5" fill="none"/><path d="M27 48 H13 M18 43 L13 48 L18 53" stroke="#059669" stroke-width="2.5" fill="none"/>'),
    'B. ' + optSvg('<path d="M27 22 H13 M18 17 L13 22 L18 27" stroke="#0f172a" stroke-width="2.5" fill="none"/><path d="M41 48 H55 M50 43 L55 48 L50 53" stroke="#0f172a" stroke-width="2.5" fill="none"/><path d="M41 22 H55 M50 17 L55 22 L50 27" stroke="#059669" stroke-width="2.5" fill="none"/><path d="M27 48 H13 M18 43 L13 48 L18 53" stroke="#059669" stroke-width="2.5" fill="none"/>'),
    'C. ' + optSvg('<path d="M13 22 H27 M22 17 L27 22 L22 27" stroke="#0f172a" stroke-width="2.5" fill="none"/><path d="M41 48 H55 M50 43 L55 48 L50 53" stroke="#0f172a" stroke-width="2.5" fill="none"/>'),
    'D. ' + optSvg('<path d="M13 22 H27 M22 17 L27 22 L22 27" stroke="#059669" stroke-width="2.5" fill="none"/><path d="M55 48 H41 M46 43 L41 48 L46 53" stroke="#0f172a" stroke-width="2.5" fill="none"/>'),
    'E. ' + optSvg('<circle cx="22" cy="22" r="7" fill="#0f172a"/><circle cx="48" cy="48" r="7" fill="#059669"/>')
  ];

  // #63-style: Urutan Ukuran Bangun dari KECIL (atas-kiri) -> SEDANG (kanan-bawah) -> BESAR (tengah) berdasar JUMLAH SUDUT (semakin banyak sisi semakin besar)
  const shp = (n, cx, cy, r, col) => {
    const pts = Array.from({ length: n }, (_, i) => {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="${col}"/>`;
  };
  const cell63 = (smallN, medN, bigN) =>
    shp(smallN, 17, 17, 6.5, '#0284c7') + shp(medN, 52, 52, 10, '#7c3aed') + shp(bigN, 35, 35, 14, '#0f172a');
  const SVG_FIG_4 = mGrid([
    cell63(3, 4, 5), cell63(4, 5, 6), cell63(5, 6, 8),
    cell63(4, 5, 6), cell63(5, 6, 8), '?',
    cell63(5, 6, 8), cell63(6, 7, 8), cell63(3, 5, 6)
  ]);
  // Baris 2 sel 3 harus sisi (6, 8, 10) or even simpler exact Latin-like triad:
  // Wait let's look at Row 2: [4,5,6], [5,6,8], -> [3,4,5]? No, notice column 1->2->3 increases small/med/big!
  // Let's make Row 1: (3,4,5), (4,5,6), (5,6,7) -> wait 7-gon vs 8-gon: let's make ALL rows follow exact strict ascending sides AND Baris 1 = (3,4,5)->(4,5,6)->(5,6,8); Baris 2 = (3,4,6)->(4,5,8)->?=(5,6,8) wait if Baris 2 is (3,4,5), (4,5,6), ? -> too obvious!
  // Better: Latin shift of size-positions! Every cell uses the trio (3=segitiga, 4=persegi, 6=segienam) with KECIL=3, SEDANG=4, BESAR=6 — WAIT in e-book #63 small->medium->large always places FEWEST angles as small, MIDDLE angles as medium, MOST angles as large, AND shifts positions OR shifts angle counts (+1,+1,+1)!
  // Let's do: Baris 2: [4,5,6], [5,6,8], ? = [6,7,8]? Even clearer between 3,4,5,6,8: Baris 2 = [3,4,6], [4,5,8], ? -> what if KECIL, SEDANG, BESAR are positioned clockwise around the cell? Yes! Position rule + side-count rule:
  // Every cell in grid: KECIL selalu bersisi 3 (segitiga biru), SEDANG selalu bersisi 4 (persegi ungu), BESAR selalu bersisi 6 (segienam gelap)! Wait look at e-book #63: each row adds +1/+2 sides to K1->K2->K3 AND orders size strictly by angle count (3 < 4 < 5 < 6 < 8)!
  // In Baris 2: Cell(2,1) = (3,4,5), Cell(2,2) = (4,5,6), Cell(2,3) = ? -> (5,6,8)! And in options ONLY ONE has strict ascending size (kecil=5, sedang=6, besar=8) while distractors invert sizes (e.g. segienam KECIL, segilima BESAR) or wrong polygon! Let's check Baris 2 with ? at (2,3) and distinct shapes:
  const cell63b = (kN, kPos, mN, mPos, bN) => shp(kN, kPos[0], kPos[1], 7, '#0284c7') + shp(mN, mPos[0], mPos[1], 11, '#d97706') + shp(bN, 35, 36, 15, '#0f172a');
  const SVG_FIG_4B = mGrid([
    cell63b(3, [16,16], 4, [53,53], 5), cell63b(4, [16,16], 5, [53,53], 6), cell63b(5, [16,16], 6, [53,53], 8),
    cell63b(3, [53,16], 4, [16,53], 6), cell63b(4, [53,16], 5, [16,53], 8), '?',
    cell63b(3, [16,53], 5, [53,16], 6), cell63b(4, [16,53], 6, [53,16], 8), cell63b(5, [16,53], 6, [53,16], 8)
  ]);
  // In Row 2: [Kecil Kanan-Atas, Sedang Kiri-Bawah, Besar Tengah]; Col 1=(3,4,6), Col 2=(4,5,8), Wait Col 3 in Row 2: let's do exact progression Col1=(3,4,5) Col2=(4,5,6) Col3=(5,6,8) in Row 2 too! That way pattern of sides per column is invariant: Col1=(3,4,5/6), Col2=(4,5,6/8), wait exact match with Row 1:
  // Row 1: (3,4,5) -> (4,5,6) -> (5,6,8)
  // Row 2: (3,4,5) -> (4,5,6) -> (5,6,8)  (positions: Kecil Kanan-Atas, Sedang Kiri-Bawah, Besar Tengah)
  // Row 3: (3,4,5) -> (4,5,6) -> (5,6,8)  (positions: Kecil Kiri-Bawah, Sedang Kanan-Atas, Besar Tengah)
  const SVG_FIG_4_FINAL = mGrid([
    cell63b(3, [15,16], 4, [54,53], 5), cell63b(4, [15,16], 5, [54,53], 6), cell63b(5, [15,16], 6, [54,53], 8),
    cell63b(3, [54,16], 4, [15,53], 5), cell63b(4, [54,16], 5, [15,53], 6), '?',
    cell63b(3, [15,53], 4, [54,16], 5), cell63b(4, [15,53], 5, [54,16], 6), cell63b(5, [15,53], 6, [54,16], 8)
  ]);
  const OPT_FIG_4 = [
    'A. ' + optSvg(cell63b(8, [54,16], 6, [15,53], 5)), // terbalik: besar=5, kecil=8 (salah!)
    'B. ' + optSvg(cell63b(5, [15,16], 6, [54,53], 8)), // posisi pojok salah (milik baris 1)
    'C. ' + optSvg(cell63b(5, [54,16], 6, [15,53], 8)), // BENAR! Kecil=5 kanan atas, Sedang=6 kiri bawah, Besar=8 tengah
    'D. ' + optSvg(cell63b(4, [54,16], 5, [15,53], 6)), // punya kolom 2
    'E. ' + optSvg(cell63b(6, [54,16], 5, [15,53], 8))  // kecil=6 > sedang=5 (langgar aturan sisi!)
  ];

  // #64-style: Bangun datar membungkus bangun sebelumnya + titik luar bergerak masuk & bangun baru memunculkan titik luar sejumlah sudut bangun terluar!
  // Baris 1: [Segiempat (4 sisi) + 4 titik luar] -> [Segilima membungkus Segiempat (4 titik masuk) + 5 titik luar] -> [Segienam membungkus Segilima-Segiempat (5 titik) + 6 titik luar]
  // Baris 3 (tanda ? di kanan bawah!): [Segitiga (3 sisi) + 3 titik luar] -> [Segiempat membungkus Segitiga (3 titik dalam) + 4 titik luar] -> [?] = Segilima membungkus Segiempat-Segitiga + 4 titik dalam + 5 titik luar!
  const ringPoly = (n, r, stroke, fill = 'none') => {
    const pts = Array.from({ length: n }, (_, i) => {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      return `${(35 + r * Math.cos(a)).toFixed(1)},${(35 + r * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="1.8"/>`;
  };
  const ringDots = (n, r, col) => Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 4 + (2 * Math.PI * i) / n;
    return `<circle cx="${(35 + r * Math.cos(a)).toFixed(1)}" cy="${(35 + r * Math.sin(a)).toFixed(1)}" r="2.2" fill="${col}"/>`;
  }).join('');
  const SVG_FIG_5 = mGrid([
    ringPoly(4, 15, '#0f172a') + ringDots(4, 24, '#dc2626'),
    ringPoly(4, 11, '#0f172a') + ringDots(4, 16, '#0284c7') + ringPoly(5, 22, '#0f172a') + ringDots(5, 29, '#dc2626'),
    ringPoly(4, 9, '#0f172a') + ringPoly(5, 16, '#0f172a') + ringDots(5, 20, '#0284c7') + ringPoly(6, 25, '#0f172a') + ringDots(6, 30, '#dc2626'),

    ringPoly(3, 14, '#0f172a') + ringDots(3, 22, '#dc2626'),
    ringPoly(3, 10, '#0f172a') + ringDots(3, 14, '#0284c7') + ringPoly(4, 20, '#0f172a') + ringDots(4, 28, '#dc2626'),
    ringPoly(3, 8, '#0f172a') + ringPoly(4, 15, '#0f172a') + ringDots(4, 19, '#0284c7') + ringPoly(5, 24, '#0f172a') + ringDots(5, 30, '#dc2626'),

    ringPoly(4, 14, '#0f172a') + ringDots(4, 23, '#dc2626'),
    ringPoly(4, 10, '#0f172a') + ringDots(4, 15, '#0284c7') + ringPoly(6, 21, '#0f172a') + ringDots(6, 29, '#dc2626'),
    '?'
  ]);
  // Baris 3 sel 1: segi-4 (4 titik luar); sel 2: segi-6 membungkus segi-4 (4 titik masuk, 6 titik luar); sel 3: segi-8/lingkaran/atau buat saja pakai (3)->(4)->(6) atau (4)->(5)->(6) yang bersih! Wait in row 3 let's use Segi-3 -> Segi-5 -> Segi-6 or better:
  // Wait Row 3 already is: [4] -> [6 wraps 4] -> [3? no 8-gon outside with 6 inner dots and 8 outer dots!]
  const SVG_FIG_5_OK = mGrid([
    ringPoly(3, 14, '#0f172a') + ringDots(3, 23, '#dc2626'),
    ringPoly(3, 10, '#0f172a') + ringDots(3, 15, '#0284c7') + ringPoly(4, 21, '#0f172a') + ringDots(4, 28, '#dc2626'),
    ringPoly(3, 8, '#0f172a') + ringPoly(4, 14, '#0f172a') + ringDots(4, 19, '#0284c7') + ringPoly(5, 24, '#0f172a') + ringDots(5, 30, '#dc2626'),

    ringPoly(4, 14, '#0f172a') + ringDots(4, 23, '#dc2626'),
    ringPoly(4, 10, '#0f172a') + ringDots(4, 15, '#0284c7') + ringPoly(5, 21, '#0f172a') + ringDots(5, 28, '#dc2626'),
    ringPoly(4, 8, '#0f172a') + ringPoly(5, 14, '#0f172a') + ringDots(5, 19, '#0284c7') + ringPoly(6, 24, '#0f172a') + ringDots(6, 30, '#dc2626'),

    ringPoly(3, 14, '#0f172a') + ringDots(3, 23, '#dc2626'),
    ringPoly(3, 10, '#0f172a') + ringDots(3, 15, '#0284c7') + ringPoly(5, 21, '#0f172a') + ringDots(5, 28, '#dc2626'),
    '?'
  ]);
  // In Row 3: [3-gon, 3 out] -> [5-gon wrapping 3-gon, 3 in, 5 out] -> [? = 6-gon wrapping 5 wrapping 3, 5 blue in, 6 red out]! (Or wait: in Baris 1 & 2 n bertambah +1, in Baris 3 boleh +2 -> +1 = 3->5->6? Wait lebih seragam jika +1 = 3->4->5, 4->5->6, 5->6->8 atau 3->4->6? Nah, pakai 3->4->5 dengan [?] di Baris 3 sel 2/3 lebih jelas lagi! Look at Baris 3: [Segi-4 (4 out)] -> [Segi-5 wrap Segi-4 (4 in, 5 out)] -> [? = Segi-6 wrap Segi-5 wrap Segi-4 (5 in, 6 out)], dan di baris 2 [?] ditaruh di sel 2 (`5-gon wrap 4-gon`, 4 in, 5 out) — no, keeping `?` at Row 3 Col 3 is fine if we make Row 3 `[Segi-3] -> [Segi-4 wrap Segi-3] -> [? = Segi-6 wrap Segi-4 wrap Segi-3]`? No, rule "+1 sisi tiap langkah": Row 1 `3->4->5`, Row 2 `4->5->6`, Row 3 `3->4->?` too similar to Row 1! Better: Row 3 is `5 -> 6 -> 8`? Or Row 3 has `[?]` at Row 1 Col 2 (`?` di tengah atas persis seperti e-book #64!!))
  // WAIT A SECOND! Look at e-book #64 page 88: `?` is in Row 1 Col 2! Putting `?` in Row 2 Col 2 (`Segi-5 wrapping Segi-4, 4 titik biru di dalam, 5 titik merah di luar`!) makes Row 1 (`3->4->5`), Row 2 (`4->?->6`), Row 3 (`3->4->5`? Or Row 3 `5->6->8`) 100% consistent `+1 sisi` in Rows 1 & 2! Let's check Row 2 with `?` at (2,2):
  const SVG_FIG_5_FINAL = mGrid([
    ringPoly(3, 14, '#0f172a') + ringDots(3, 23, '#dc2626'),
    ringPoly(3, 10, '#0f172a') + ringDots(3, 15, '#0284c7') + ringPoly(4, 21, '#0f172a') + ringDots(4, 28, '#dc2626'),
    ringPoly(3, 8, '#0f172a') + ringPoly(4, 14, '#0f172a') + ringDots(4, 19, '#0284c7') + ringPoly(5, 24, '#0f172a') + ringDots(5, 30, '#dc2626'),

    ringPoly(4, 14, '#0f172a') + ringDots(4, 23, '#dc2626'),
    '?',
    ringPoly(4, 8, '#0f172a') + ringPoly(5, 14, '#0f172a') + ringDots(5, 19, '#0284c7') + ringPoly(6, 24, '#0f172a') + ringDots(6, 30, '#dc2626'),

    ringPoly(3, 14, '#0f172a') + ringDots(3, 23, '#dc2626'),
    ringPoly(3, 10, '#0f172a') + ringDots(3, 15, '#0284c7') + ringPoly(5, 21, '#0f172a') + ringDots(5, 28, '#dc2626'),
    ringPoly(3, 8, '#0f172a') + ringPoly(5, 14, '#0f172a') + ringDots(5, 19, '#0284c7') + ringPoly(6, 24, '#0f172a') + ringDots(6, 30, '#dc2626')
  ]);
  const OPT_FIG_5 = [
    'A. ' + optSvg(ringPoly(4, 10, '#0f172a') + ringDots(5, 15, '#0284c7') + ringPoly(5, 21, '#0f172a') + ringDots(4, 28, '#dc2626')), // titik dalam/luar tertukar (5 in, 4 out)
    'B. ' + optSvg(ringPoly(4, 10, '#0f172a') + ringDots(4, 15, '#0284c7') + ringPoly(6, 21, '#0f172a') + ringDots(6, 28, '#dc2626')), // bangun luar segi-6 bukan segi-5
    'C. ' + optSvg(ringPoly(4, 10, '#0f172a') + ringDots(4, 15, '#0284c7') + ringPoly(5, 21, '#0f172a') + ringDots(5, 28, '#dc2626')), // BENAR! segi-4 di dalam, 4 titik biru di dalam, segi-5 di luar, 5 titik merah di luar!
    'D. ' + optSvg(ringPoly(4, 10, '#0f172a') + ringDots(4, 15, '#0284c7') + ringPoly(5, 21, '#0f172a') + ringDots(6, 28, '#dc2626')), // titik luar 6 salah
    'E. ' + optSvg(ringPoly(3, 10, '#0f172a') + ringDots(4, 15, '#0284c7') + ringPoly(5, 21, '#0f172a') + ringDots(5, 28, '#dc2626'))  // bangun dalam segi-3 salah
  ];

  // #65-style: Jumlah elemen dalam satu baris adalah kelipatan {a, 2a, 4a} acak posisi:
  // Row 1: 2 bintang, 4 bintang, 8 bintang
  // Row 2: 3 wajik, 12 wajik, 6 wajik  (a=3, 4a=12, 2a=6)
  // Row 3: 4 segienam, 2 segienam, ?  (a=2, 2a=4, -> 4a=8 segienam!)
  const starAt = (cx, cy, r = 5.5, col = '#0f172a') => {
    const pts = Array.from({ length: 10 }, (_, i) => {
      const rr = i % 2 === 0 ? r : r * 0.45;
      const a = -Math.PI / 2 + (Math.PI * i) / 5;
      return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="${col}"/>`;
  };
  const gridStars = n => {
    const pos = [[16,18],[35,18],[54,18],[16,35],[35,35],[54,35],[16,52],[35,52],[54,52],[25,26],[45,26],[25,44]];
    return pos.slice(0, n).map(([x, y]) => starAt(x, y, 5.2, '#0f172a')).join('');
  };
  const gridDia = n => {
    const pos = [[14,15],[28,15],[42,15],[56,15],[14,30],[28,30],[42,30],[56,30],[14,45],[28,45],[42,45],[56,45]];
    return pos.slice(0, n).map(([x, y]) => `<polygon points="${x},${y-5} ${x+5},${y} ${x},${y+5} ${x-5},${y}" fill="#0284c7"/>`).join('');
  };
  const gridHex = n => {
    const pos = [[16,18],[35,18],[54,18],[16,36],[35,36],[54,36],[25,54],[45,54]];
    return pos.slice(0, n).map(([x, y]) => shp(6, x, y, 6.2, '#7c3aed')).join('');
  };
  const SVG_FIG_6 = mGrid([
    gridStars(2), gridStars(4), gridStars(8),
    gridDia(3), gridDia(12), gridDia(6),
    gridHex(4), gridHex(2), '?'
  ]);
  const OPT_FIG_6 = [
    'A. ' + optSvg(gridHex(1)),
    'B. ' + optSvg(gridHex(3)),
    'C. ' + optSvg(gridHex(5)),
    'D. ' + optSvg(gridHex(6)),
    'E. ' + optSvg(gridHex(8))
  ];

  const TIU_ITEMS = [
    // 4 Analogi Verbal HOTS (tiu56-analogi)
    [
      'Verbal - Penalaran Analogi HOTS', 'tiu56-analogi', 'SKD-TIU-X5601',
      'TERMOMETER : MENGUKUR SUHU = BAROMETER : ...',
      [
        'A. Mengatur ketinggian awan',
        'B. Memantau kecepatan angin',
        'C. Mengukur tekanan udara',
        'D. Menghasilkan aliran uap air',
        'E. Menurunkan tingkat kelembapan'
      ],
      2,
      'Pola [ALAT : FUNGSI KERJA SPESIFIK]. Pastikan kelas kata paralel ("mengukur suhu" -> "mengukur tekanan udara")!',
      'Termometer adalah alat dengan fungsi kerja utama untuk mengukur suhu. Secara paralel, barometer berfungsi untuk mengukur tekanan udara (perhatikan pula kesetaraan bentuk verba "mengukur").',
      ''
    ],
    [
      'Verbal - Penalaran Analogi HOTS', 'tiu56-analogi', 'SKD-TIU-X5602',
      'ASTRONOM : TELESKOP = ... : ...',
      [
        'A. Guru : Papan tulis kelas',
        'B. Koki : Sendok sayur besi',
        'C. Filatelis : Perangko',
        'D. Petani : Pasar tradisional',
        'E. Montir : Mobil penumpang'
      ],
      2,
      'Pola [AHLI/PENELITI KHUSUS : OBJEK/INSTRUMEN YANG SANGAT KHAS]. Papan tulis dan sendok terlalu umum!',
      'Astronom identik dengan instrumen utamanya yakni teleskop. Kesepadanan paling erat dan khas adalah filatelis (ahli/kolektor) yang objek utamanya perangko.',
      ''
    ],
    [
      'Verbal - Penalaran Analogi HOTS', 'tiu56-analogi', 'SKD-TIU-X5603',
      'BENIH : TUNAS : TANAMAN DEWASA = ... : ... : ...',
      [
        'A. Pagi : Siang : Malam',
        'B. Benang : Kain : Pakaian',
        'C. Belajar : Ujian : Ijazah',
        'D. Telur : Berudu : Katak',
        'E. Bayi : Remaja : Bekerja'
      ],
      3,
      'Bedakan siklus PERKEMBANGAN BIOLOGIS (Telur->Berudu->Katak) vs urutan waktu (pagi-siang-malam) vs manufaktur (benang-kain-baju)!',
      'Benih -> Tunas -> Tanaman dewasa menggambarkan tahapan metamorfosis/perkembangan biologis makhluk hidup dari awal hingga dewasa. Padanan paling tepat adalah Telur : Berudu : Katak.',
      ''
    ],
    [
      'Verbal - Penalaran Analogi HOTS', 'tiu56-analogi', 'SKD-TIU-X5604',
      '... : SIANG = SUNYI : ...',
      [
        'A. Matahari : Malam',
        'B. Panas : Hening',
        'C. Terang : Malam',
        'D. Putih : Gelap',
        'E. Fajar : Senja'
      ],
      2,
      'Pasang pola simetris [SIFAT KHAS : WAKTU] = [SIFAT KHAS : WAKTU]. Uji kalimat jembatan!',
      'Kalimat jembatan: TERANG adalah ciri khas waktu SIANG sebagaimana SUNYI adalah ciri khas waktu MALAM (opsi C). Opsi lain mencampur benda langit atau lawan kata.',
      ''
    ],

    // 3 Pemilihan Tim Bersyarat HOTS -> directly mapped to v38-pemilihan-tim!
    [
      'Verbal - Logika Tim Bersyarat', 'v38-pemilihan-tim', 'SKD-TIU-X5605',
      'Suatu kementerian memilih 4 orang tim audit dari 7 kandidat: P, Q, R, S, T, U, dan V. Syaratnya: (1) Jika P dipilih, maka Q tidak boleh dipilih; (2) R harus selalu dipilih bersama S; (3) Jika T dipilih, maka V juga harus dipilih. Jika U dan V pasti terpilih menjadi anggota tim, pernyataan manakah yang PASTI BENAR?',
      [
        'A. P harus terpilih mengisi sisa kursi tim',
        'B. Q tidak boleh dipilih dalam kondisi apa pun',
        'C. T tidak boleh dipilih karena V sudah masuk tim',
        'D. Jika R dipilih, maka S juga harus dipilih',
        'E. R dan S wajib masuk bersamaan ke dalam dua kursi sisa'
      ],
      3,
      'Jangan terkecoh aturan T -> V! V sudah masuk (V=benar) tidak mengunci T; R dan S bisa masuk atau tidak masuk -> aturan dasar (2) tetap kebenaran mutlak!',
      'Slot tim: {U, V, _, _}. Kemungkinan sisa 2 slot yang sah ialah {R, S}, {P, T}, atau {Q, T}. Karena P, Q, R, S, dan T masih punya skenario masuk atau tidak, satu-satunya pernyataan yang PASTI BENAR di semua kemungkinan adalah hukum syaratnya sendiri: jika R dipilih, maka S juga harus dipilih.',
      ''
    ],
    [
      'Verbal - Logika Tim Bersyarat', 'v38-pemilihan-tim', 'SKD-TIU-X5606',
      'Akan dibentuk tim 4 orang dari 6 pegawai: K, L, M, N, O, P. Syarat: (1) Jika K terpilih, L wajib terpilih; (2) M dan N tidak boleh dipilih bersama; (3) Jika O terpilih, P tidak boleh dipilih. Bila K dan P dipastikan terpilih, simpulan yang PASTI BENAR adalah...',
      [
        'A. L terpilih dan O tidak boleh terpilih',
        'B. M terpilih dan O harus terpilih',
        'C. N tidak boleh terpilih dalam komposisi mana pun',
        'D. L tidak terpilih dan M pasti masuk tim',
        'E. O terpilih bersama L mengisi empat kursi'
      ],
      0,
      'Slot: {K, P, _, _}. Pakai syarat (1): K -> L (L masuk!); Pakai kontraposisi syarat (3): O -> ~P setara P -> ~O (O keluar!). Sisa 1 kursi diisi M atau N!',
      'Karena K masuk, aturan (1) mewajibkan L masuk. Karena P masuk, aturan (3) (jika O maka bukan P) berkontraposisi bahwa O tidak boleh masuk. Sisa 1 kursi dapat diisi M atau N tanpa melanggar aturan (2). Jadi yang pasti benar adalah L terpilih dan O tidak boleh terpilih (Opsi A).',
      ''
    ],
    [
      'Verbal - Logika Tim Bersyarat', 'v38-pemilihan-tim', 'SKD-TIU-X5607',
      'Tim tugas khusus beranggotakan 3 orang dipilih dari 5 analis: A, B, C, D, dan E. Syarat: (1) Jika A dipilih, B tidak boleh dipilih; (2) C harus selalu bersama D (C ↔ D); (3) Jika E tidak dipilih, A harus dipilih. Jika D dipastikan TIDAK terpilih, siapa sajakah anggota tim yang terbentuk?',
      [
        'A. A, B, dan E',
        'B. A, B, dan C',
        'C. B, D, dan E',
        'D. A, C, dan E',
        'E. Tidak ada komposisi tim yang memenuhi seluruh syarat'
      ],
      4,
      'Uji kandidat tersisa! D keluar -> aturan (2) C ↔ D membuat C ikut keluar! Tersisa HANYA A, B, E (3 orang), padahal aturan (1) melarang A dan B bersama!',
      'Perhatikan jebakan syarat berantai! Jika D tidak terpilih, maka karena C ↔ D (selalu bersama), C juga tidak boleh dipilih. Tersisa hanya 3 calon (A, B, E) untuk 3 kursi, tetapi aturan (1) melarang A dan B berada di tim yang sama. Akibatnya tidak ada komposisi 3 orang yang memenuhi semua syarat jika D dikeluarkan (Opsi E).',
      ''
    ],

    // 2 Soal Taktis (Diskon Berantai + Aljabar & Pencoretan Faktor)
    [
      'Numerik - TIU HOTS Taktis', 'tiu56-taktis', 'SKD-TIU-X5608',
      'Sebuah perangkat kerja dibanderol Rp450.000, lalu memperoleh diskon bertahap: diskon pertama 20% dan diskon tambahan 15% dari harga setelah diskon pertama. Berapa harga bersih yang harus dibayar?',
      [
        'A. Rp292.500',
        'B. Rp306.000',
        'C. Rp315.000',
        'D. Rp324.000',
        'E. Rp360.000'
      ],
      1,
      'Diskon berantai BUKAN 20%+15%=35%! Gunakan faktor sisa: 450.000 × 0,80 × 0,85 = 360.000 × 0,85 = 306.000!',
      'Harga setelah diskon 20% = 80% × Rp450.000 = Rp360.000. Diskon kedua 15% dihitung dari Rp360.000 (= Rp54.000), sehingga harga akhir = Rp360.000 - Rp54.000 = Rp306.000 (opsi A menjebak dengan menjumlahkan diskon menjadi 35%).',
      ''
    ],
    [
      'Numerik - TIU HOTS Taktis', 'tiu56-taktis', 'SKD-TIU-X5609',
      'Diketahui bilangan a = 7 dan b = -3, serta X = (a + b)² dan Y = a² + b² + 26. Hubungan yang paling tepat antara X dan Y adalah...',
      [
        'A. X > Y',
        'B. X < Y',
        'C. X = Y',
        'D. X = 2Y',
        'E. Hubungan X dan Y tidak dapat ditentukan'
      ],
      1,
      'Hitung teliti tanda negatif: X = (7 + (-3))² = 4² = 16; Y = 49 + 9 + 26 = 84 (ingat (-3)² = +9, bukan -9!).',
      'Substitusi nilai: X = (7 - 3)² = 4² = 16. Sementara Y = 7² + (-3)² + 26 = 49 + 9 + 26 = 84. Jelas X < Y.',
      ''
    ],

    // 3 Soal Analisis Tabel Data SVG (tiu56-tabel-data)
    [
      'Numerik - TIU HOTS Tabel Data', 'tiu56-tabel-data', 'SKD-TIU-X5610',
      'Koperasi pegawai mengevaluasi laporan penjualan di bawah menggunakan metrik efisiensi "Margin Laba per Unit" (= Harga Jual − Biaya/Unit). Produk manakah yang memberi efisiensi laba per unit TERTINGGI?',
      [
        'A. Roti Gandum',
        'B. Bolu Pandan',
        'C. Donat Kentang',
        'D. Tart Cokelat',
        'E. Bolu Pandan dan Tart Cokelat sama tinggi'
      ],
      1,
      'Jangan terkecoh jumlah Terjual (380)! Pertanyaan meminta laba PER UNIT -> kurangi Harga Jual - Biaya/Unit tiap item.',
      'Margin per unit: Roti Gandum = 12.000 - 7.500 = Rp4.500; Bolu Pandan = 28.000 - 16.500 = Rp11.500; Donat Kentang = 9.000 - 6.000 = Rp3.000; Tart Cokelat = 18.000 - 12.500 = Rp5.500. Tertinggi per unit adalah Bolu Pandan (Rp11.500).',
      SVG_TBL_ROTI
    ],
    [
      'Numerik - TIU HOTS Tabel Data', 'tiu56-tabel-data', 'SKD-TIU-X5611',
      'Mengacu tabel kinerja tiga divisi teknologi pemerintah di bawah ini, berapakah rata-rata margin laba bersih TERTIMBANG terhadap total keseluruhan pendapatan?',
      [
        'A. 22,0%',
        'B. 24,0%',
        'C. 25,5%',
        'D. 26,0%',
        'E. 28,0%'
      ],
      1,
      'Jebakan klasik: jangan dirata-ratakan langsung (12+24+42)/3 = 26%! Kalikan tiap pendapatan × margin -> total laba ÷ total pendapatan!',
      'Laba Infrastruktur = 300 × 12% = 36 M; Aplikasi GovTech = 500 × 24% = 120 M; Cloud = 200 × 42% = 84 M. Total laba = 36 + 120 + 84 = 240 M. Total pendapatan = 300 + 500 + 200 = 1.000 M. Rata-rata margin tertimbang = 240/1.000 = 24,0%.',
      SVG_TBL_DIVISI
    ],
    [
      'Numerik - TIU HOTS Tabel Data', 'tiu56-tabel-data', 'SKD-TIU-X5612',
      'Berdasarkan tabel penduduk usia produktif 2020 vs 2025 di bawah ini, kecamatan manakah yang mengalami PERSENTASE pertumbuhan penduduk produktif TERTINGGI?',
      [
        'A. Jaya',
        'B. Makmur',
        'C. Harmoni',
        'D. Sejahtera',
        'E. Jaya dan Makmur sama tinggi'
      ],
      2,
      'Jangan tertipu selisih orang terbanyak (Sejahtera +32rb)! Persen pertumbuhan = (Baru - Lama) ÷ Lama × 100%!',
      'Jaya = (20/80) = 25%; Makmur = (24/120) = 20%; Harmoni = (18/45) = 2/5 = 40%; Sejahtera = (32/160) = 20%. Tertinggi adalah Kecamatan Harmoni (40%).',
      SVG_TBL_WILAYAH
    ],

    // 6 Soal Figural Matriks 3x3 SVG (tiu56-figural-matriks) — setara E-book #60-65
    [
      'Figural - TIU HOTS Matriks 3x3', 'tiu56-figural-matriks', 'SKD-TIU-X5613',
      'Amati pola penggabungan dan rotasi panah pada matriks 3×3 berikut (tiap baris: kotak 1 + kotak 2 menghasilkan kotak 3). Gambar yang tepat mengisi tanda "?" adalah...',
      OPT_FIG_1,
      1,
      'Periksa 3 aturan sekaligus: (1) bangun K2 masuk ke K3; (2) panah diputar +90° searah jarum jam; (3) titik biru = jumlah sisi bangun K2!',
      'Baris 1: panah kiri (←) + segitiga (3 sisi) → segitiga + panah atas (↑) + 3 titik. Baris 2: panah atas (↑) + persegi (4 sisi) → persegi + panah kanan (→) + 4 titik. Baris 3: panah kanan (→) + segilima (5 sisi) → segilima + panah BAWAH (↓) + 5 titik (Opsi B).',
      SVG_FIG_1
    ],
    [
      'Figural - TIU HOTS Matriks 3x3', 'tiu56-figural-matriks', 'SKD-TIU-X5614',
      'Tentukan gambar yang tepat mengisi tanda "?" pada matriks 3×3 berikut berdasarkan transformasi dari kolom 1 dan kolom 2 menjadi kolom 3!',
      OPT_FIG_2,
      0,
      'Perhatikan 3 perubahan ke kolom 3: (1) motif K1 tetap di kiri; (2) objek K2 dicerminkan mendatar (flip kiri-kanan); (3) muncul garis putus diagonal kiri atas ke kanan bawah!',
      'Di Baris 3, Kolom 1 adalah belah ketupat gelap (kiri) dan Kolom 2 adalah huruf L ungu menghadap kanan. Saat digabung ke Kolom 3, belah ketupat tetap di kiri, huruf L ungu dibalik menghadap KIRI, serta terdapat garis putus diagonal dari kiri atas ke kanan bawah (Opsi A).',
      SVG_FIG_2
    ],
    [
      'Figural - TIU HOTS Matriks 3x3', 'tiu56-figural-matriks', 'SKD-TIU-X5615',
      'Amati cara dua pola di kolom 1 dan kolom 2 disatukan dalam satu sel pada kolom 3. Gambar manakah yang tepat menggantikan tanda "?"?',
      OPT_FIG_3,
      0,
      'Kolom 3 menggabungkan seluruh elemen Kolom 1 dan Kolom 2 dengan ukuran mengecil dan warna/arah/posisi pojok yang tetap sama!',
      'Pada Baris 3: Kolom 1 berisi dua panah hitam menghadap kanan di kiri-atas dan kanan-bawah; Kolom 2 berisi dua panah hijau menghadap kiri di kanan-atas dan kiri-bawah. Gabungannya di Kolom 3 mempertahankan kedua pasang panah dengan warna dan arah identik (Opsi A).',
      SVG_FIG_3
    ],
    [
      'Figural - TIU HOTS Matriks 3x3', 'tiu56-figural-matriks', 'SKD-TIU-X5616',
      'Perhatikan pola jumlah sisi dan tata letak ukuran bangun (kecil–sedang–besar) di dalam tiap sel matriks 3×3 ini. Gambar yang tepat menggantikan tanda "?" adalah...',
      OPT_FIG_4,
      2,
      'Cek dua hukum: (1) ukuran Kecil < Sedang < Besar mengikuti jumlah sisi (5 < 6 < 8); (2) di Baris 2, kecil ada di KANAN ATAS dan sedang di KIRI BAWAH!',
      'Setiap baris melaju sisi (3,4,5) → (4,5,6) → (5,6,8), dengan ukuran bertambah seiring jumlah sisi. Khusus Baris 2, bangun terkecil (segilima biru) menempati kanan-atas, bangun sedang (segienam oranye) di kiri-bawah, dan segidelapan terbesar di tengah (Opsi C).',
      SVG_FIG_4_FINAL
    ],
    [
      'Figural - TIU HOTS Matriks 3x3', 'tiu56-figural-matriks', 'SKD-TIU-X5617',
      'Amati perpindahan titik dan pembungkusan bangun datar pada matriks 3×3 berikut (setiap kotak di kanan menambah satu bangun pembungkus di luar). Gambar yang tepat mengisi tanda "?" di baris 2 adalah...',
      OPT_FIG_5,
      2,
      'Hukum dua lapis: titik merah di luar sel sebelumnya MASUK jadi titik biru di antara bangun; bangun pembungkus baru memunculkan titik merah luar sebanyak jumlah sisinya!',
      'Baris 2 dimulai segi-4 (4 titik merah luar). Langkah ke kolom 2 membungkus segi-4 dengan segi-5, sehingga 4 titik tadi masuk menjadi 4 titik BIRU di dalam dan muncul 5 titik MERAH di luar segi-5 (Opsi C).',
      SVG_FIG_5_FINAL
    ],
    [
      'Figural - TIU HOTS Matriks 3x3', 'tiu56-figural-matriks', 'SKD-TIU-X5618',
      'Amati perubahan jumlah elemen gambar dalam setiap baris pada matriks 3×3 berikut. Gambar manakah yang paling tepat menggantikan tanda "?"?',
      OPT_FIG_6,
      4,
      'Lihat himpunan jumlah per baris (urutan kolom boleh acak): Baris 1 = {2, 4, 8} (×2); Baris 2 = {3, 6, 12} (×2); Baris 3 punya 4 dan 2 -> {2, 4, ?}!',
      'Setiap baris membentuk barisan kelipatan ×2 {a, 2a, 4a}: Baris 1 memiliki {2, 4, 8} bintang; Baris 2 memiliki {3, 6, 12} wajik. Baris 3 sudah memiliki 4 dan 2 segienam, maka nilai ketiga dalam himpunan {2, 4, 8} adalah 8 segienam (Opsi E).',
      SVG_FIG_6
    ]
  ];

  /* ==================== 16 SOAL TKP HOTS PELENGKAP E-BOOK ==================== */
  const TKP_HOTS_ITEMS = [
    // Pelayanan Publik (4)
    [
      'TKP HOTS - Dilema Layanan Publik', 'tkp56-pelayanan', 'SKD-TKP-X5601',
      'Layanan konsultasi kesehatan via WhatsApp di puskesmas tempat Anda bekerja mendadak viral hingga ratusan pesan masuk setiap hari termasuk di luar jam kerja, membuat staf kewalahan membalas satu per satu. Usulan kebijakan paling strategis kepada kepala puskesmas adalah...',
      [
        'A. Menetapkan jam operasional pesan resmi pukul 08.00–14.00 lalu mengumumkannya di seluruh kanal informasi resmi puskesmas agar warga tahu jadwal layanan',
        'B. Usulkan sistem balasan otomatis (chatbot) untuk FAQ dan triase awal sebelum ditangani petugas',
        'C. Menjadwalkan giliran seluruh tenaga kesehatan secara bergantian setiap hari kerja guna membalas tuntas semua pesan pertanyaan warga',
        'D. Membalas seluruh pesan yang masuk pada hari kerja berikutnya sesuai nomor urutan tanpa melayani pesan yang masuk di luar jam kedinasan',
        'E. Menghentikan sementara layanan konsultasi WhatsApp masyarakat karena jumlah petugas aktif puskesmas tidak sebanding dengan antrean pesan harian'
      ],
      [4, 5, 3, 2, 1],
      'Inovasi digital atas lonjakan layanan = selesaikan akar beban (chatbot triase/FAQ), bukan hentikan layanan atau lempar giliran semata!',
      'B (5) memberi solusi sistemik memanfaatkan teknologi untuk menyaring pertanyaan umum & triase. A (4) menata ekspektasi jam kerja tapi tak mengurangi beban puncak. C (3) membagi beban tanpa mengurangi kerja berulang. D (2) pasif menunda. E (1) langkah mundur menghentikan layanan publik.'
    ],
    [
      'TKP HOTS - Dilema Layanan Publik', 'tkp56-pelayanan', 'SKD-TKP-X5602',
      'Di loket pelayanan pertanahan, seorang lansia dari desa jauh datang menyerahkan berkas tanah warisan, namun surat keterangan warisnya belum dilegalisir camat sesuai SOP wajib. Pemohon memohon kebijakan karena biaya pulang ke desa sangat besar. Sikap Anda...',
      [
        'A. Memberikan kartu antrean prioritas khusus kepada beliau agar saat kembali membawa berkas lengkap tidak perlu menunggu antre lagi sejak awal',
        'B. Menolak berkas permohonan dengan santun sambil menegaskan bahwa SOP legalisir camat mutlak dijaga demi kepastian hukum sertifikat tanah warga',
        'C. Menjelaskan syarat ramah dan menelepon kecamatan apakah legalisir bisa daring atau diwakilkan sah',
        'D. Menyarankan pemohon menghubungi jasa perantara resmi di sekitar kantor kecamatan setempat guna mempercepat proses urusan legalisir berkasnya',
        'E. Tetap memproses permohonan hari ini dengan membuatkan surat pernyataan menyusul supaya warga lansia dari desa jauh tersebut tidak merasa kecewa'
      ],
      [4, 3, 5, 2, 1],
      'Seimbangkan KEPATUHAN SOP (jangan proses berkas cacat hukum!) + SOLUSI PROAKTIF saat itu juga (koordinasi antarunit/kecamatan)!',
      'C (5) teguh aturan sekaligus kreatif proaktif mencarikan solusi saat itu juga. A (4) empatik tapi reaktif menunggu pulang dulu. B (3) benar secara hukum tapi kaku tanpa solusi bantu. D (2) mendorong pihak perantara luar. E (1) melanggar SOP & menciptakan cacat hukum dokumen.'
    ],
    [
      'TKP HOTS - Dilema Layanan Publik', 'tkp56-pelayanan', 'SKD-TKP-X5603',
      'Saat bertugas di loket pelayanan, seorang ibu melaporkan lantai dekat toilet umum licin karena tumpahan sabun hingga ia hampir terpeleset, padahal area itu ramai dilalui lansia dan anak-anak. Tindakan pertama Anda yang paling sigap adalah...',
      [
        'A. Langsung mencari kain pel terdekat di gudang kantor untuk membersihkan sendiri area tumpahan sabun sebelum ada pengunjung lain tergelincir',
        'B. Berterima kasih hangat atas laporan ibu tersebut lalu segera menelepon petugas kebersihan unit agar area licin tersebut segera dipel bersih',
        'C. Menyampaikan sopan kepada ibu tersebut bahwa kebersihan ditangani unit khusus namun Anda pasti segera mencatat dan meneruskannya ke petugas',
        'D. Segera pasang papan peringatan "Awas Lantai Licin", minta maaf, lalu hubungi petugas kebersihan',
        'E. Meminta ibu tersebut mengadu langsung ke pos satuan pengamanan atau meja pengaduan karena berada lebih dekat dengan area ruang toilet'
      ],
      [4, 3, 2, 5, 1],
      'Standar Keselamatan Kerja (K3): urutan pertama WAJIB mitigasi bahaya segera (pasang rambu "Lantai Licin") sebelum petugas datang membersihkan!',
      'D (5) memutus risiko kecelakaan detik itu juga lewat papan peringatan sebelum panggil petugas. A (4) proaktif tapi menyalahi alat/keahlian standar dan tinggalkan loket. B (3) masih menyisakan jeda risiko sebelum petugas tiba. C (2) dan E (1) lambat serta melempar beban.'
    ],
    [
      'TKP HOTS - Dilema Layanan Publik', 'tkp56-pelayanan', 'SKD-TKP-X5604',
      'Seorang warga merasa puas lalu mengunggah video pujian yang menyebut nama Anda secara spesifik di media sosial hingga viral, membuat atasan turut senang atas citra baik tersebut. Respons profesional terbaik Anda adalah...',
      [
        'A. Membalas kolom komentar video dengan ucapan terima kasih yang hangat dan menyatakan selalu siap melayani kebutuhan seluruh warga masyarakat',
        'B. Mengirimkan pesan pribadi kepada warga tersebut guna berterima kasih secara langsung agar tetap rendah hati dan tidak menjadi sorotan publik',
        'C. Membagikan ulang unggahan video pujian tersebut ke akun pribadi Anda sebagai bukti portofolio kinerja pribadi dan penyemangat rekan kerja',
        'D. Mengabaikan unggahan video pujian tersebut sepenuhnya agar Anda tetap berfokus bekerja melayani di loket tanpa terpengaruh media sosial',
        'E. Membalas tulus serta menegaskan layanan prima terwujud berkat kerja sama tim dan dukungan sistem'
      ],
      [4, 3, 2, 1, 5],
      'Terima apresiasi publik secara rendah hati dan arahkan ke KEBERHASILAN TIM/INSTITUSI di ruang publik tempat pujian muncul!',
      'E (5) responsif sekaligus menguatkan semangat korps/citra institusi. A (4) ramah tapi masih berpusat pada diri sendiri. B (3) melewatkan dampak positif publik lembaga. C (2) terkesan menonjolkan individu. D (1) terkesan kurang responsif.'
    ],

    // Profesionalisme (4)
    [
      'TKP HOTS - Akuntabilitas & Etos Kerja', 'tkp56-profesional', 'SKD-TKP-X5605',
      'Sebagai ketua tim penyusun laporan tahunan gabungan, Anda menemukan banyak data Unit X yang tidak lengkap dan inkonsisten menjelang tenggat akhir. Agar kualitas laporan tetap akurat tepat waktu, tindakan terbaik Anda adalah...',
      [
        'A. Menghubungi narahubung Unit X dengan tenang dan mengajak duduk bersama satu jam guna verifikasi data',
        'B. Mengembalikan seluruh berkas data kepada Unit X disertai daftar catatan poin revisi tertulis lengkap agar mereka segera memperbaikinya sendiri',
        'C. Melaporkan kendala kualitas kelengkapan data Unit X kepada atasan langsung supaya pimpinan segera mengeluarkan instruksi revisi kepada Unit X',
        'D. Menyempurnakan sendiri seluruh angka laporan yang tampak janggal menggunakan rata-rata capaian tahun sebelumnya agar tenggat terpenuhi',
        'E. Memasukkan data Unit X apa adanya ke dalam laporan tahunan gabungan sambil menyisipkan catatan kaki bahwa sumber data tersebut belum valid'
      ],
      [5, 4, 3, 2, 1],
      'Kolaborasi + Akuntabilitas: tawarkan duduk bersama memverifikasi data (cepat + akurat + jaga hubungan unit), bukan merekayasa asumsi atau menyalahkan di laporan!',
      'A (5) cepat menyelesaikan akar masalah tanpa merusak sinergi lintas unit. B (4) benar secara prosedur tapi berisiko lambat di tenggat mepet. C (3) eskalasi dini sebelum berusaha operasional. D (2) manipulasi integritas data. E (1) merilis laporan resmi bermutu rendah sambil menyalahkan unit lain.'
    ],
    [
      'TKP HOTS - Akuntabilitas & Etos Kerja', 'tkp56-profesional', 'SKD-TKP-X5606',
      'Saat reviu akhir sebagai analis anggaran, Anda mendapati kekeliruan hitung pribadi yang menurunkan efektivitas program 0,5% dan mustahil diketahui pihak lain bila didiamkan, sementara jadwal revisi sistem sudah tertutup kecuali atas izin tertulis pimpinan. Sikap Anda...',
      [
        'A. Berjanji memperketat daftar periksa ketelitian diri sendiri di masa depan dan memastikan program berjalan optimal agar selisih 0,5% tertutup',
        'B. Menghadap atasan segera memaparkan kekeliruan secara jujur dan mengajukan koreksi sesuai prosedur',
        'C. Mencatat temuan kesalahan hitung tersebut di dalam arsip pribadi sebagai bahan pembelajaran internal unit pada evaluasi audit tahun depan',
        'D. Mencari pos anggaran cadangan internal lain untuk digeser secara diam-diam menutupi selisih angka 0,5% tanpa mengubah dokumen resmi',
        'E. Membiarkannya tetap berjalan apa adanya sebab selisih 0,5% sangat kecil dibanding potensi penundaan pencairan jika dibuka lagi'
      ],
      [4, 5, 3, 2, 1],
      'Integritas tak mengenal "kesalahan kecil tak terdeteksi": transparan akui + lapor atasan untuk koreksi sah, HARAM menggeser anggaran diam-diam!',
      'B (5) menegakkan integritas penuh dan akuntabilitas keuangan negara. A (4) & C (3) gagal memperbaiki kesalahan berjalan. D (2) melanggar aturan pengelolaan anggaran secara sepihak. E (1) mengabaikan akuntabilitas.'
    ],
    [
      'TKP HOTS - Akuntabilitas & Etos Kerja', 'tkp56-profesional', 'SKD-TKP-X5607',
      'Tim Anda diberi proyek kompleks dengan tenggat waktu sangat singkat hingga seluruh anggota tampak pesimis dan kewalahan. Kontribusi profesional utama yang akan Anda ambil sebagai anggota tim adalah...',
      [
        'A. Menyemangati rekan-rekan tim kerja agar tetap optimistis menjaga kekompakan dan fokus mengerjakan upaya terbaik meski tenggat menantang',
        'B. Melaporkan kepada atasan langsung di awal proyek bahwa target tersebut dinilai terlalu berat agar ekspektasi pimpinan disesuaikan realistis',
        'C. Memecah beban proyek menjadi langkah prioritas terukur dan mengusulkan alur kerja kepada tim',
        'D. Berfokus menyelesaikan tugas bagian pribadi Anda dengan cepat dan rapi terlebih dahulu tanpa mencampuri beban pekerjaan anggota tim yang lain',
        'E. Mengajukan nota keberatan resmi bersama seluruh anggota tim mengenai ketidakadilan pembagian beban kerja serta tenggat waktu yang singkat'
      ],
      [4, 3, 5, 2, 1],
      'Solusi kepemimpinan di situasi krisis = ciptakan STRUKTUR NYATA (pecah tugas menjadi sub-target terkelola), bukan sekadar menyemangati atau protes!',
      'C (5) mengubah beban abstrak menjadi peta kerja konkret sehingga tim kembali bergerak efektif. A (4) baik secara moral tapi belum menyelesaikan kebuntuan teknis. B (3) cepat menyerah sebelum berupaya. D (2) individualistis. E (1) destruktif.'
    ],
    [
      'TKP HOTS - Akuntabilitas & Etos Kerja', 'tkp56-profesional', 'SKD-TKP-X5608',
      'Setelah program selesai dilaksanakan, Anda menyadari ada beberapa pos kegiatan kecil yang kuitansi/foto dokumentasinya hilang saat menyusun laporan pertanggungjawaban. Tindakan Anda yang paling mencerminkan integritas ASN adalah...',
      [
        'A. Meminta rekan-rekan panitia pelaksana menandatangani surat berita acara pernyataan bersama guna memverifikasi kegiatan benar-benar terlaksana',
        'B. Menghapus beberapa item pos kegiatan kecil yang tidak memiliki bukti fisik foto dari draf laporan akhir supaya dokumen tampak rapi',
        'C. Menggunakan foto dokumentasi cadangan dari kegiatan sejenis bulan sebelumnya yang sangat mirip agar seluruh kelengkapan dokumen terpenuhi',
        'D. Melaporkan kegiatan sesuai fakta di lapangan serta mencantumkan keterangan jujur kekurangan bukti',
        'E. Membuatkan ulang salinan kuitansi pengganti sendiri secukupnya sesuai perkiraan ingatan harga agar angka realisasi biaya cocok diperiksa audit'
      ],
      [4, 3, 2, 5, 1],
      'Kejujuran pelaporan: laporkan FAKTA apa adanya dan terbuka atas kekurangan bukti fisik; JANGAN pernah memalsukan kuitansi/foto atau menghapus fakta!',
      'D (5) paling jujur dan akuntabel mengungkapkan kondisi faktual apa adanya. A (4) beritikad baik mengonfirmasi, namun tetap bukan pengganti dokumen primer jika tanpa catatan kehilangan bukti asli. B (3) menyembunyikan realisasi. C (2) dan E (1) termasuk manipulasi/pemalsuan dokumen audit.'
    ],

    // Jejaring Kerja (3)
    [
      'TKP HOTS - Sinergi & Kepemimpinan Tim', 'tkp56-jejaring', 'SKD-TKP-X5609',
      'Anda dan Budi (rekan dari unit lain) sama-sama mengajukan usulan inovasi perbaikan layanan kepada pimpinan. Setelah evaluasi, pimpinan memilih usulan Budi dan menolak usulan Anda. Sikap yang paling menunjukkan kematangan jejaring kerja adalah...',
      [
        'A. Menerima keputusan pimpinan dengan lapang dada serta langsung merancang kerangka usulan inovasi layanan lain untuk periode triwulan depan',
        'B. Mempelajari ulang aspek keunggulan gagasan Budi sebagai bahan evaluasi konstruktif untuk meningkatkan kualitas usulan Anda di masa mendatang',
        'C. Menghadap pimpinan guna menanyakan detail kekurangan konsep usulan Anda secara objektif demi perbaikan mutu kinerja di waktu mendatang',
        'D. Menerima keputusan tersebut sesuai tata tertib birokrasi sambil memilih menjaga jarak interaksi profesional dengan Budi untuk sementara waktu',
        'E. Menemui Budi memberi selamat tulus serta menawarkan bantuan untuk menyukseskan gagasannya'
      ],
      [4, 3, 2, 1, 5],
      'Kolaboratif lintas unit: ubah kompetisi menjadi kemitraan—ucapkan selamat + dukung eksekusi ide rekan demi keberhasilan organisasi!',
      'E (5) mengutamakan keberhasilan organisasi di atas ego pribadi dan memperkuat aliansi lintas unit. A (4) & B (3) positif tapi fokus pada diri sendiri. C (2) berisiko terkesan mempermasalahkan keputusan. D (1) mencampuradukkan kompetisi kerja menjadi jarak personal.'
    ],
    [
      'TKP HOTS - Sinergi & Kepemimpinan Tim', 'tkp56-jejaring', 'SKD-TKP-X5610',
      'Sebagai koordinator tim proyek, Anda memiliki seorang anggota yang sangat andal secara teknis, namun bertipe "lone wolf" yang senang bekerja sendiri dan jarang berbagi progres ke tim sehingga menghambat sinkronisasi antarbagian. Tindakan kepemimpinan paling efektif Anda...',
      [
        'A. Menerapkan sistem papan pelaporan perkembangan tugas harian ringkas yang wajib diperbarui seluruh anggota tim demi kelancaran transparansi',
        'B. Mengajaknya diskusi empat mata, mengapresiasi keahliannya, dan menekankan pentingnya sinkronisasi tim',
        'C. Mengingatkannya secara tegas dalam rapat evaluasi tim mingguan agar segera mengubah kebiasaan kerja tertutupnya demi kepentingan proyek',
        'D. Membiarkannya menyesuaikan gaya kerja sendiri seiring berjalannya waktu proyek supaya kreativitas teknisnya tidak tertekan aturan baru',
        'E. Menyalurkan khusus hanya tugas-tugas teknis mandiri yang terisolasi kepadanya agar ketertutupannya tidak mengganggu alur komunikasi tim'
      ],
      [4, 5, 3, 2, 1],
      'Kelola individu andal tapi penyendiri: rangkul personal dulu (akui keahliannya!) + bangun kesadaran sinergi tim, bukan memisahkannya terus!',
      'B (5) menyentuh akar perilaku lewat pendekatan persuasif yang menghargai keahliannya. A (4) solusi sistemik tapi belum menyelesaikan resistensi personal. C (3) mempermalukan di depan forum. D (2) pasif membiarkan hambatan. E (1) melegalkan perilaku kerja silo.'
    ],
    [
      'TKP HOTS - Sinergi & Kepemimpinan Tim', 'tkp56-jejaring', 'SKD-TKP-X5611',
      'Pada proyek kolaborasi antarlembaga, Anda mengetahui seorang pegawai muda dari instansi mitra memiliki gagasan sangat brilian, tetapi ia tampak pendiam dan ragu berbicara di rapat besar penuh pejabat senior. Tindakan Anda yang paling tepat adalah...',
      [
        'A. Memberi tahu pimpinan rapat bahwa rekan muda mitra tersebut tampaknya memiliki ide bagus sehingga pimpinan rapat yang mengundangnya bicara',
        'B. Memberinya dorongan semangat singkat di kursi sebelahnya agar ia segera berani mengangkat tangan ketika sesi tanya jawab rapat dibuka',
        'C. Berdiskusi empat mata dan membawakan atau mendampinginya memaparkan ide dengan kredit penuh atas namanya',
        'D. Tetap diam menghormati kenyamanan pribadinya karena menyampaikan pendapat dalam forum rapat merupakan tanggung jawab masing-masing peserta',
        'E. Menyampaikan gagasannya sebagai usulan pribadi Anda sesudah disempurnakan sedikit agar rapat proyek tetap mendapatkan manfaat terbaiknya'
      ],
      [4, 3, 5, 2, 1],
      'Kolaborasi sejati = berdayakan potensi rekan yang ragu secara nyaman + WAJIB beri pengakuan/kredit penuh atas idenya!',
      'C (5) memfasilitasi kontribusi hebat untuk tim sekaligus menjaga etika kredit gagasan. A (4) & B (3) kurang nyaman bagi pribadi pemalu jika tiba-tiba disorot. D (2) melewatkan manfaat besar tim. E (1) plagiarisme ide.'
    ],

    // TIK (2)
    [
      'TKP HOTS - TIK & Sistem Digital', 'tkp56-tik', 'SKD-TKP-X5612',
      'Rapat koordinasi mingguan tim Anda kerap memakan waktu berjam-jam hanya untuk membaca ulang progres tugas rutin. Sebagai pimpinan tim yang ingin mengoptimalkan TIK untuk efisiensi kerja, solusi paling transformatif adalah...',
      [
        'A. Mewajibkan tiap anggota mengirim laporan perkembangan pekerjaan tertulis via surat elektronik sehari sebelum jadwal rapat rutin digelar',
        'B. Membuat grup pesan singkat khusus pembaruan harian tugas supaya seluruh anggota membaca kemajuan proyek tanpa rapat tatap muka panjang',
        'C. Mempersingkat durasi waktu rapat rutin memakai agenda lebih ketat serta menugaskan seorang moderator untuk membatasi durasi giliran bicara',
        'D. Menggunakan papan manajemen proyek kolaboratif real-time sehingga rapat berfokus pada solusi kendala',
        'E. Langsung memotong setengah jatah durasi waktu rapat tim dan mewajibkan setiap anggota menyampaikan paparan langsung pada poin intinya saja'
      ],
      [4, 3, 2, 5, 1],
      'Pemanfaatan TIK terbaik = transformasi alur kerja kolaboratif real-time, bukan sekadar email menumpuk atau obrolan chat yang tenggelam!',
      'D (5) mengubah tata kelola kerja menjadi terstruktur dan real-time. A (4) digital tapi statis menumpuk. B (3) pesan chat mudah tercecer tidak terstruktur. C (2) dan E (1) tidak memanfaatkan solusi TIK.'
    ],
    [
      'TKP HOTS - TIK & Sistem Digital', 'tkp56-tik', 'SKD-TKP-X5613',
      'Sebagai ASN bidang komunikasi dan informatika, Anda mencermati algoritma rekomendasi media sosial kerap mengurung pengguna ke dalam "gelembung informasi" (filter bubble) yang memperkuat pandangan ekstrem dan intoleran. Usulan kebijakan strategis paling mendasar yang tepat adalah...',
      [
        'A. Mendorong aturan transparansi algoritma agar pengguna bebas menonaktifkan personalisasi umpan',
        'B. Meluncurkan kampanye masif literasi digital nasional mengenai bahaya filter bubble dan cara menyeimbangkan berbagai sumber berita harian',
        'C. Menggandeng para kreator konten muda populer untuk membanjiri linimasa warga digital dengan narasi konten moderat serta beragam sudut pandang',
        'D. Mengembangkan platform media sosial alternatif khusus milik pemerintah daerah sebagai ruang diskusi publik yang terbebas dari iklan komersial',
        'E. Mengusulkan pemblokiran permanen seluruh platform media sosial global berbayar ataupun gratis yang terindikasi memicu polarisasi opini warga'
      ],
      [5, 4, 3, 2, 1],
      'Kebijakan TIK strategis menyasar AKAR SISTEM (kontrol pengguna atas algoritma personalisasi) sekaligus memberdayakan warga secara demokratis!',
      'A (5) langsung menyelesaikan penyebab teknis filter bubble tanpa menutup ruang demokrasi. B (4) & C (3) baik namun tidak mengubah mekanisme algoritmik. D (2) mahal & minim adopsi. E (1) represif dan tidak efektif.'
    ],

    // Sosial Budaya (2)
    [
      'TKP HOTS - Harmoni & Anti-Gentrifikasi', 'tkp56-sosbud', 'SKD-TKP-X5614',
      'Revitalisasi kawasan kampung tua menjadikan kawasan itu ramai kafe wisata modern, tetapi lonjakan harga sewa membuat perajin dan seniman asli kampung tersingkir keluar kota (gentrifikasi). Sebagai perencana di dinas tata kota, usulan paling berkelanjutan adalah...',
      [
        'A. Mengajak seluruh pemilik kafe dan pengelola objek wisata modern berkolaborasi rutin memajang serta memasarkan karya buatan perajin setempat',
        'B. Mendata seluruh perajin terdampak kenaikan tarif sewa lalu merelokasi usaha mereka ke sentra kerajinan terpadu baru di wilayah pinggiran kota',
        'C. Memandang lonjakan harga sewa bangunan sebagai mekanisme wajar dinamika ekonomi perkotaan yang tidak perlu dicampuri kebijakan pemerintah',
        'D. Menyesalkan tersisihnya komunitas perajin asli kampung tua sambil menyerahkan pemecahan masalah sepenuhnya kepada daya saing pasar bebas',
        'E. Merancang insentif keringanan sewa dan zonasi ruang usaha terproteksi bagi perajin asli lokal'
      ],
      [4, 3, 2, 1, 5],
      'Lawan gentrifikasi budaya lewat INTERVENSI KEBIJAKAN STRUKTURAL yang melindungi warga asli di kawasan asalnya, bukan merelokasi mereka keluar!',
      'E (5) menggunakan instrumen kebijakan pemerintah menjaga keberlanjutan manusia & budaya lokal. A (4) positif namun bergantung itikad swasta. B (3) memutus "jiwa" otentik kampung. C (2) & D (1) abai atas fungsi keadilan sosial tata kota.'
    ],
    [
      'TKP HOTS - Harmoni & Anti-Gentrifikasi', 'tkp56-sosbud', 'SKD-TKP-X5615',
      'Seorang tokoh politik lokal berpengaruh mendesak tim Anda memprioritaskan pembangunan balai kerja di kecamatannya (asal suku mayoritas), padahal data objektif menunjukkan kecamatan lain yang dihuni kelompok minoritas dan lebih miskin jauh lebih membutuhkan. Sebagai ketua tim, sikap Anda...',
      [
        'A. Berdiskusi aktif mencari opsi kompromi pembagian pagu anggaran proyek ke dua lokasi agar kepentingan warga miskin dan tokoh lokal terpenuhi',
        'B. Melaporkan adanya tekanan politik tersebut secara langsung kepada atasan tertinggi lalu menyerahkan penentuan lokasi proyek sepenuhnya kepada pimpinan',
        'C. Menyesuaikan sebagian bobot skor rekomendasi lokasi agar usulan tokoh politik daerah ikut terakomodasi demi kelancaran suasana proyek wilayah',
        'D. Tetap merekomendasikan lokasi prioritas berbasis data objektif demi keadilan sosial sambil menyiapkan buktinya',
        'E. Mengubah angka indikator survei kemiskinan di lapangan supaya wilayah kecamatan pilihan sang tokoh berpengaruh tampak paling layak mendapat proyek'
      ],
      [4, 3, 2, 5, 1],
      'Tekanan politik vs Kebutuhan objektif warga rentan = berdiri tegak di atas DATA & KEADILAN SOSIAL; haram mengubah data atau mengorbankan warga termiskin!',
      'D (5) menunjukkan integritas sosial tinggi berpihak pada data kebutuhan riil. A (4) pragmatis namun menurunkan efisiensi dampak optimal. B (3) menghindari pendirian tegas di level teknis tim. C (2) tunduk sebagian pada tekanan. E (1) kecurangan data berat.'
    ],

    // Anti Radikalisme (1 pelengkap -> gabung di modul TKP HOTS!)
    [
      'TKP HOTS - Moderasi & Pencegahan Dini', 'tkp56-radikal', 'SKD-TKP-X5616',
      'Anda melihat seorang pemuda cerdas namun tertutup di lingkungan sekitar mulai aktif mengunjungi situs kajian eksklusif serta mengunggah pandangan merendahkan kelompok agama lain. Upaya pencegahan dini (soft approach) paling bijaksana adalah...',
      [
        'A. Mengajaknya ikut aktif di karang taruna atau bakti sosial inklusif agar wawasan sosialnya terbuka',
        'B. Mendekatinya guna berdiskusi santai empat mata tentang bahaya pemikiran intoleran serta pentingnya sikap saling menghormati keragaman warga',
        'C. Menasihati kedua orang tuanya secara baik-baik agar lebih memantau lingkar pergaulan harian serta aktivitas akses internet anaknya di rumah',
        'D. Segera melaporkannya kepada aparat penegak hukum setempat sebagai langkah antisipasi pengawasan keamanan lingkungan di wilayah permukiman',
        'E. Mengingatkan seluruh warga lingkungan sekitar agar menjaga jarak sosial dengan pemuda tersebut supaya tidak terpengaruh narasi intoleransinya'
      ],
      [5, 4, 3, 2, 1],
      'Pencegahan dini paparan ekstremisme (soft approach): RANGKUL kembali ke komunitas positif inklusif agar tembok eksklusivitasnya runtuh tanpa memicu defensif!',
      'A (5) merangkul tanpa konfrontasi langsung yang sering membuat anak muda makin tertutup atau defensif. B (4) baik tetapi diskusi ideologis rentan buntu bila ia sudah terbiasa defensif. C (3) baik sebagai pendukung. D (2) eskalasi terlalu dini yang bisa mendorong penolakan lebih dalam. E (1) mengucilkan justru mempercepat radikalisasi.'
    ]
  ];

  const TKP_OBJECTS = TKP_HOTS_ITEMS.map(([sub, fam, id, q, options, scores, trick, explanation]) => ({
    id,
    examType: 'SKD_TKP',
    category: 'TKP',
    sub,
    fam,
    q,
    options,
    ans: scores.indexOf(5),
    scores,
    trick,
    explanation,
    level: 'HOTS',
    practice: 'GOCPNS'
  }));

  window.registerCPNSQuestions({ packId: 'skd_ebook_twk_v56', bucket: 'SKD_TWK', questions: mkMc('SKD_TWK', 'TWK', TWK_ITEMS) });
  window.registerCPNSQuestions({ packId: 'skd_ebook_tiu_v56', bucket: 'SKD_TIU', questions: mkMc('SKD_TIU', 'TIU', TIU_ITEMS) });
  window.registerCPNSQuestions({ packId: 'skd_ebook_tkp_v56', bucket: 'SKD_TKP', questions: TKP_OBJECTS });
})();
