/* ==========================================================================
   BANK SOAL REAL-BKN: WACANA PANJANG HOTS (TWK & TKP) + NUMERIK DESIMAL REALISTIS
   25 soal orisinal untuk melatih stamina baca paragraf panjang CAT BKN,
   penghitungan angka desimal/tak bulat, serta opsi jawaban panjang berimbang
   dan skor TKP teracak anti-bias. ID: SKD-*-X59xx.
   ========================================================================== */
(function () {
  if (typeof window.registerCPNSQuestions !== 'function') return;

  const BG = '<rect width="100%" height="100%" rx="8" fill="#ffffff"/>';
  const SVG_SERAPAN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 175" width="420" height="175">${BG}`
    + '<text x="210" y="20" text-anchor="middle" fill="#0f172a" font-size="11.5" font-weight="bold">Realisasi &amp; Efisiensi Belanja 4 Perangkat Daerah (Miliar Rupiah)</text>'
    + '<rect x="16" y="32" width="388" height="26" fill="#1e293b"/>'
    + '<text x="72" y="49" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="bold">Unit</text>'
    + '<text x="168" y="49" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="bold">Pagu (M)</text>'
    + '<text x="262" y="49" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="bold">Realisasi (M)</text>'
    + '<text x="354" y="49" text-anchor="middle" fill="#fff" font-size="10.5" font-weight="bold">Target</text>'
    + '<rect x="16" y="58" width="388" height="24" fill="#f8fafc" stroke="#cbd5e1"/><text x="72" y="74" text-anchor="middle" fill="#0f172a" font-size="10">Dinas A</text><text x="168" y="74" text-anchor="middle" fill="#0f172a" font-size="10">25,00</text><text x="262" y="74" text-anchor="middle" fill="#0f172a" font-size="10">19,60</text><text x="354" y="74" text-anchor="middle" fill="#0f172a" font-size="10">80,0%</text>'
    + '<rect x="16" y="82" width="388" height="24" fill="#fff" stroke="#cbd5e1"/><text x="72" y="98" text-anchor="middle" fill="#0f172a" font-size="10">Dinas B</text><text x="168" y="98" text-anchor="middle" fill="#0f172a" font-size="10">40,00</text><text x="262" y="98" text-anchor="middle" fill="#0f172a" font-size="10">33,04</text><text x="354" y="98" text-anchor="middle" fill="#0f172a" font-size="10">80,0%</text>'
    + '<rect x="16" y="106" width="388" height="24" fill="#f8fafc" stroke="#cbd5e1"/><text x="72" y="122" text-anchor="middle" fill="#0f172a" font-size="10">Dinas C</text><text x="168" y="122" text-anchor="middle" fill="#0f172a" font-size="10">16,00</text><text x="262" y="122" text-anchor="middle" fill="#0f172a" font-size="10">13,68</text><text x="354" y="122" text-anchor="middle" fill="#0f172a" font-size="10">80,0%</text>'
    + '<rect x="16" y="130" width="388" height="24" fill="#fff" stroke="#cbd5e1"/><text x="72" y="146" text-anchor="middle" fill="#0f172a" font-size="10">Dinas D</text><text x="168" y="146" text-anchor="middle" fill="#0f172a" font-size="10">32,00</text><text x="262" y="146" text-anchor="middle" fill="#0f172a" font-size="10">25,92</text><text x="354" y="146" text-anchor="middle" fill="#0f172a" font-size="10">80,0%</text>'
    + '</svg>';

  /* ==================== 12 TWK WACANA PANJANG REAL-BKN (700-1000 CHAR) ==================== */
  const TWK_LONG = [
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5901',
      'Selama hampir dua dekade pasca-Reformasi, berbagai daerah menerbitkan peraturan daerah (perda) yang mewajibkan retribusi tambahan bagi pelaku usaha kecil di pelabuhan penyeberangan guna mendongkrak Pendapatan Asli Daerah. Akan tetapi, sebuah asosiasi logistik rakyat menilai aturan itu bertentangan dengan Undang-Undang Pajak Daerah dan Retribusi Daerah yang lebih tinggi kedudukannya serta menghambat kelancaran distribusi bahan pokok antarpulau. Asosiasi tersebut kemudian mengajukan permohonan pengujian materiil terhadap perda yang dimaksud agar dicabut kekuatan mengikatnya secara nasional. Berdasarkan konstruksi pembagian kewenangan lembaga yudikatif dalam Perubahan UUD NRI Tahun 1945 beserta sistem tata urutan peraturan perundang-undangan, lembaga manakah yang berwenang memutus permohonan uji materiil tersebut dan bagaimana dampaknya terhadap asas otonomi daerah?',
      [
        'A. Mahkamah Agung berwenang membatalkannya karena berada di bawah undang-undang, dan hal itu menjaga keselarasan hukum nasional tanpa menghapus otonomi',
        'B. Mahkamah Konstitusi berwenang membatalkannya karena menyangkut hak konstitusional warga negara dan berhak mencabut seluruh kewenangan fiskal pemerintah daerah',
        'C. Dewan Perwakilan Daerah langsung membatalkan peraturan daerah tersebut melalui rapat paripurna guna melindungi arus distribusi logistik antarpulau di daerah',
        'D. Presiden bersama Menteri Dalam Negeri menerbitkan putusan yudikatif tertinggi untuk mencabut peraturan daerah itu sekaligus membatalkan asas desentralisasi',
        'E. Badan Pemeriksa Keuangan bersama Komisi Yudisial berwenang memutus sengketa retribusi daerah dan menjatuhkan sanksi pidana kepada kepala daerahnya'
      ],
      0,
      'Objek uji materi adalah PERDA (peraturan DI BAWAH UU) terhadap UU → kewenangan MA (Pasal 24A ayat 1), bukan MK!',
      'Perda berkedudukan di bawah Undang-Undang sehingga uji materiil terhadap UU menjadi kewenangan Mahkamah Agung (Pasal 24A ayat 1 UUD 1945). Pembatalan Perda bermasalah bukan penghapusan otonomi, melainkan menjaga kesatuan sistem hukum nasional (Lex Superior).',
      ''
    ],
    [
      'TWK HOTS - Pancasila HOTS', 'twk56-pancasila', 'SKD-TWK-X5902',
      'Sejumlah pemerintah daerah mulai memanfaatkan kecerdasan buatan (AI) untuk menilai kelayakan penerima bantuan sosial dengan memadukan data konsumsi listrik, riwayat pekerjaan, dan kepemilikan aset warga secara otomatis. Meskipun sistem tersebut mempercepat verifikasi jutaan keluarga, audit sosial menemukan bahwa algoritma lama cenderung mengeluarkan kelompok lansia tinggal sendiri di kawasan urban padat yang kebetulan memiliki rumah warisan tua tanpa penghasilan tetap. Apabila kebijakan tata kelola teknologi publik tersebut ditinjau melalui kerangka dimensi fleksibilitas Pancasila sebagai ideologi terbuka dan nilai keadilan proporsional, langkah korektif manakah yang paling tepat dirumuskan?',
      [
        'A. Menghentikan seluruh penggunaan teknologi kecerdasan buatan dalam birokrasi selamanya karena inovasi digital selalu bertentangan dengan nilai kemanusiaan luhur',
        'B. Menolak bantuan sosial untuk seluruh lansia pemilik rumah warisan tua karena hasil perhitungan algoritma sudah mencerminkan kesamaan perlakuan yang objektif',
        'C. Mengubah rumusan kelima sila dasar dalam Pembukaan UUD NRI Tahun 1945 agar memuat ketentuan teknis mengenai batas audit sistem kecerdasan buatan publik',
        'D. Menyesuaikan nilai instrumental dan parameter algoritma verifikasi terhadap kerentanan riil tanpa mengubah lima nilai dasar Pancasila',
        'E. Memberikan nominal bantuan seragam kepada seluruh penduduk kaya maupun miskin tanpa verifikasi data apa pun agar semua warga merasa diperlakukan sama'
      ],
      3,
      'Ideologi terbuka (dimensi fleksibilitas) memperbarui NILAI INSTRUMENTAL (regulasi/parameter kebijakan) agar adaptif zaman tanpa mengubah nilai dasar Pancasila!',
      'Pancasila terbuka menerima kemajuan teknologi melalui pembaruan nilai instrumental (regulasi dan parameter audit algoritma) agar keadilan sosial bersifat proporsional memperhatikan kerentanan nyata warga lansia, tanpa mengubah nilai dasar (Opsi D).',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5903',
      'Menjelang penetapan pasangan calon kepala daerah, seorang pejabat fungsional ahli muda pada instansi pemerintah daerah tetap aktif berpartisipasi dalam grup percakapan alumni perguruan tinggi di luar jam kerja resminya. Ketika salah satu anggota grup mengunggah poster digital kampanye kerabat si pejabat sembari mengajak anggota lain memberikan dukungan suara, pejabat muda tersebut tidak sekadar menyimak, melainkan menekan tombol suka pada unggahan kampanye serta meneruskannya ke grup komunitas hobi sepeda dengan keterangan singkat agar warga memilih figur yang dekat dengan anak muda. Ketika diperiksa pengawas internal, ia berdalih bahwa tindakannya berlangsung pada hari Minggu malam dari ponsel pribadi. Penilaian paling tepat atas tindakan pejabat tersebut berdasarkan prinsip netralitas ASN dan etika integritas jabatan adalah...',
      [
        'A. Tindakan tersebut sepenuhnya dibenarkan oleh undang-undang karena kebebasan berekspresi di luar jam kedinasan menggunakan ponsel pribadi tidak mengikat status ASN',
        'B. Tindakan menyukai unggahan dapat dimaklumi selama yang bersangkutan tidak berorasi di atas panggung kampanye terbuka serta tidak memakai fasilitas kendaraan dinas milik instansi',
        'C. Pelanggaran tetap terjadi karena netralitas ASN melekat sepanjang waktu, termasuk memberi tanda suka serta meneruskan ajakan kampanye di media sosial',
        'D. Pejabat hanya wajib dikenai teguran lisan ringan apabila pasangan calon yang didukungnya terbukti kalah suara pada rekapitulasi resmi Komisi Pemilihan Umum daerah',
        'E. Pelanggaran hanya berlaku apabila pejabat fungsional itu menduduki jabatan struktural kepala dinas yang berwenang mencairkan anggaran bantuan sosial daerah'
      ],
      2,
      'Netralitas ASN UU 20/2023 berlaku 24 jam (tidak berhenti di akhir pekan atau ponsel pribadi!), termasuk larangan like/comment/repost/simbol kampanye!',
      'Sesuai UU ASN No. 20/2023 dan ketentuan netralitas pegawai pemerintah, pembatasan aktivitas politik praktis melekat sepanjang berstatus ASN, baik di jam kerja maupun di ruang digital pribadi pada hari libur (Opsi C).',
      ''
    ],
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5904',
      'Selama bertahun-tahun, sebuah provinsi kaya mineral bauksit hanya mengekspor bijih mentah secara besar-besaran melalui pelabuhan lokal tanpa membangun fasilitas pengolahan lanjutan, sehingga ketika permintaan industri otomotif nasional meningkat, pabrik komponen dalam negeri justru harus mengimpor aluminium olahan dengan harga berkali-kali lipat lebih tinggi. Kondisi tersebut mengakibatkan rentannya rantai pasok industri strategis nasional terhadap gejolak kurs mata uang asing serta hilangnya kesempatan kerja terampil bagi lulusan vokasi lokal. Apabila pemerintah pusat mendorong kebijakan hilirisasi terpadu bersama pembukaan kawasan industri berstandar lingkungan ketat, keterkaitan paling mendasar antara kebijakan tersebut dengan amanat Pasal 33 UUD NRI Tahun 1945 dan ketahanan bela negara nirmiliter adalah...',
      [
        'A. Hilirisasi mengharuskan negara menutup seluruh hubungan perdagangan internasional dengan negara sahabat agar ekonomi nasional terisolasi dari pasar dunia',
        'B. Ekspor bahan mentah tetap lebih menguntungkan bagi ketahanan ekonomi jangka panjang karena bebas dari tanggung jawab pengelolaan limbah industri serta biaya logistik domestik',
        'C. Bela negara nirmiliter mewajibkan setiap pekerja pabrik pengolahan mineral menjadi prajurit cadangan bersenjata di perbatasan maritim Indonesia bagian timur',
        'D. Kebijakan penguasaan negara berarti seluruh perusahaan swasta dan investor domestik dilarang keras memiliki pabrik pengolahan komponen di wilayah Indonesia',
        'E. Pengolahan sumber daya alam melalui industri hilir berdaulat memberi nilai tambah bagi rakyat serta menekan ketergantungan impor strategis nasional'
      ],
      4,
      'Pasal 33 ayat (3) + Bela Negara Ekonomi = ciptakan nilai tambah & lapangan kerja di dalam negeri guna memutus ketergantungan impor dan menguatkan kemandirian bangsa!',
      'Hilirisasi berstandar lingkungan mewujudkan amanat Pasal 33 ayat (3) agar kekayaan alam memberi manfaat optimal bagi kemakmuran rakyat (nilai tambah & lapangan kerja) sekaligus memperkokoh kedaulatan ekonomi sebagai bagian ketahanan nasional nirmiliter (Opsi E).',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5905',
      'Saat terjadi pandemi penyakit menular berisiko fatal di seluruh wilayah Indonesia, pemerintah menerbitkan regulasi berbasis undang-undang kekarantinaan kesehatan yang membatasi kegiatan berkumpul secara fisik, menutup sementara rumah makan di zona merah, dan mewajibkan isolasi bagi warga terkonfirmasi positif menular. Sebagian kelompok mengajukan protes keras dengan argumen bahwa hak bergerak dan mencari nafkah merupakan hak asasi manusia yang dijamin mutlak oleh UUD NRI Tahun 1945 sehingga negara dilarang membatasinya dengan alasan apa pun. Penjelasan konstitusional paling akurat berdasarkan Bab XA tentang Hak Asasi Manusia (Pasal 28I dan Pasal 28J) untuk menjawab keberatan tersebut adalah...',
      [
        'A. Seluruh ketentuan hak asasi manusia di dalam UUD NRI Tahun 1945 otomatis gugur tanpa syarat hukum apa pun setiap kali kepala daerah menyatakan status bencana daerah',
        'B. Pelaksanaan HAM tetap dapat dibatasi oleh undang-undang demi menghormati hak orang lain serta memenuhi tuntutan ketertiban dan keselamatan umum',
        'C. Pasal 28I ayat (1) mengizinkan negara menangguhkan hak hidup warga negara apabila kapasitas ruang perawatan darurat rumah sakit pemerintah daerah telah melampaui batas',
        'D. Pembatasan aktivitas berkumpul warga cukup ditetapkan secara lisan melalui pengumuman kepala puskesmas tanpa perlu didasarkan pada peraturan setingkat undang-undang',
        'E. Negara hanya boleh membatasi mobilitas warga negara asing pemegang izin tinggal sementara, sementara warga negara Indonesia dibebaskan dari kewajiban karantina kesehatan'
      ],
      1,
      'Pisahkan Pasal 28I ayat (1) [hak absolut tak bisa dikurangi: hidup, bebas siksa, agama, dll.] vs Pasal 28J ayat (2) [pembatasan hak lewat UU demi keamanan & ketertiban umum]!',
      'Pasal 28J ayat (2) UUD 1945 menegaskan bahwa dalam menjalankan hak dan kebebasannya, setiap orang wajib tunduk kepada pembatasan yang ditetapkan dengan undang-undang demi menghormati hak orang lain, moral, keamanan, serta ketertiban/kesehatan umum (Opsi B).',
      ''
    ],
    [
      'TWK HOTS - Pancasila HOTS', 'twk56-pancasila', 'SKD-TWK-X5906',
      'Sebuah tim perumus rancangan peraturan internal di lembaga publik menghadapi perdebatan alot mengenai jadwal rapat koordinasi rutin. Kelompok pertama yang berjumlah delapan puluh persen anggota menginginkan rapat tetap berlangsung setiap hari Jumat siang pukul dua belas hingga dua belas tiga puluh agar seluruh target laporan rampung lebih cepat, tanpa jeda apa pun bagi anggota minoritas di unit tersebut yang memiliki kewajiban ibadah salat Jumat berjemaah. Kelompok pemrakarsa berdalih bahwa keputusan tersebut sah secara demokratis karena didukung suara mayoritas mutlak dalam pemungutan suara tertutup. Ditinjau dari hakikat Empat Konsensus Kebangsaan khususnya Sila Pertama dan Sila Keempat Pancasila, kekeliruan mendasar dari argumen kelompok mayoritas tersebut adalah...',
      [
        'A. Pemungutan suara dilarang keras oleh UUD NRI Tahun 1945 meskipun jalan musyawarah telah menemui jalan buntu setelah dibahas berkali-kali secara jujur',
        'B. Keputusan rapat tim baru sah secara hukum tata negara apabila disahkan terlebih dahulu oleh Dewan Perwakilan Rakyat Republik Indonesia di tingkat nasional',
        'C. Jadwal seluruh rapat resmi pemerintahan di Indonesia harus diputuskan sepihak oleh pemimpin rapat senior tanpa perlu mendengarkan aspirasi anggota tim kerja lainnya',
        'D. Setiap anggota tim minoritas wajib menunda pelaksanaan kewajiban ibadah keagamaannya kapan pun pimpinan proyek merasa mengejar penyelesaian laporan bulanan instansi',
        'E. Sila Keempat menuntut hikmat kebijaksanaan yang melindungi hak ibadah warga, bukan sekadar legitimasi suara terbanyak yang mengabaikan toleransi'
      ],
      4,
      'Sila Ke-4 adalah "Kerakyatan yang dipimpin oleh HIKMAT KEBIJAKSANAAN..." (bukan tirani mayoritas!) dan harus selaras Sila ke-1 menghormati hak ibadah!',
      'Voting dalam Pancasila tidak boleh menjadi tirani mayoritas yang menindas hak beribadah warga lain. Sila keempat menuntut hikmat kebijaksanaan berlandaskan moral serta penghormatan terhadap Sila Pertama dan Sila Kedua (Opsi E).',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5907',
      'Seorang ketua panitia pengadaan sistem arsip elektronik di kementerian baru saja menyelesaikan proses serah terima pekerjaan secara penuh sesuai kontrak tanpa temuan cacat mutu. Dua pekan kemudian, saat dirinya tidak lagi memegang proyek lanjutan, kurir ekspedisi mengantarkan sebuah bingkisan berisi jam tangan mewah dan kartu ucapan terima kasih pribadi dari direktur perusahaan pemenang tender langsung ke alamat rumah tinggal pribadinya tanpa ada permintaan sebelumnya dari sang pejabat. Pejabat itu segera melaporkan serta menyerahkan barang tersebut kepada Unit Pengendalian Gratifikasi instansi untuk diteruskan ke Komisi Pemberantasan Korupsi (KPK) lima hari kerja setelah diterima. Evaluasi paling tepat atas sifat pemberian dan langkah hukum pejabat tersebut menurut UU Tipikor adalah...',
      [
        'A. Pemberian itu bukan merupakan pelanggaran etika apa pun karena dikirimkan dua pekan setelah proyek serah terima resmi berakhir tanpa perjanjian awal di kantor',
        'B. Pejabat tersebut tetap wajib dijatuhi hukuman pidana suap karena menerima kiriman paket di alamat rumah pribadinya sebelum dikembalikan langsung ke direksi perusahaan vendor',
        'C. Pemberian tersebut tergolong gratifikasi karena terkait jabatan, namun ancaman pidananya gugur akibat dilaporkan sebelum 30 hari kerja',
        'D. Barang mewah itu boleh langsung dimiliki secara sah oleh panitia pengadaan asalkan nilainya dibagi rata kepada seluruh staf administrasi sebagai uang lembur proyek',
        'E. Pelaporan ke KPK baru diperlukan apabila nilai barang pemberian mencapai batas minimal seratus juta rupiah atau dikirimkan secara resmi ke ruang kerja kantor pemerintah'
      ],
      2,
      'Pasal 12B UU Tipikor: gratifikasi dianggap suap KECUALI penerima melapor ke KPK paling lambat 30 HARI KERJA sejak tanggal diterima!',
      'Pemberian dari rekanan terkait proyek jabatan termasuk gratifikasi. Karena pejabat melaporkannya melalui jalur resmi UPG/KPK dalam 5 hari kerja (jauh di bawah batas wajib 30 hari kerja), status dugaan pidananya gugur sesuai Pasal 12C UU Tipikor (Opsi C).',
      ''
    ],
    [
      'TWK HOTS - Geopolitik, Hilirisasi & Soft Power', 'twk56-nasionalisme-bela', 'SKD-TWK-X5908',
      'Ketika negara tetangga memicu ketegangan di perairan perbatasan Zona Ekonomi Eksklusif (ZEE) utara Indonesia melalui masuknya kapal ikan asing tanpa izin berulang kali, beberapa warganet muda di dalam negeri terpancing menyebarkan potongan video lama bentrokan kapal militer dari negara lain dengan narasi provokatif bahwa armada pertahanan Indonesia telah lumpuh total. Padahal, pada saat bersamaan, diplomasi maritim terpadu antara Bakamla, TNI Angkatan Laut, dan Kementerian Luar Negeri tengah bekerja efektif melakukan pengusiran terukur sekaligus menjaga stabilitas jalur perdagangan kawasan sesuai hukum laut internasional UNCLOS 1982. Di antara respons masyarakat sipil berikut, sikap manakah yang paling tepat mencerminkan nasionalisme konstruktif sekaligus kewajiban bela negara di era informasi?',
      [
        'A. Membagikan potongan video provokatif tersebut ke grup warga lokal agar masyarakat mendesak pemerintah mengambil langkah serangan militer terbuka secara sepihak',
        'B. Menggelar boikot ekstrem terhadap seluruh produk budaya, wisatawan, dan warga negara asing asal kawasan tersebut yang tinggal sah di Indonesia tanpa memandang aturan',
        'C. Menghindari seluruh berita tentang perbatasan laut maupun kebijakan luar negeri sama sekali karena persoalan kedaulatan maritim sepenuhnya hanya urusan korps militer saja',
        'D. Memverifikasi sumber informasi sebelum menyebarkannya, meluruskan hoaks dengan rilis resmi, serta mendukung penegakan kedaulatan hukum',
        'E. Menuliskan komentar bernada merendahkan bangsa lain di forum resmi lembaga internasional guna menunjukkan keberanian warga negara menjaga wibawa maritim nasional'
      ],
      3,
      'Bela negara siber warga = verifikasi informasi (stop disinformasi yang memperkeruh ketegangan) + dukung diplomasi & penegakan hukum UNCLOS yang bermartabat!',
      'Di era hibrida, hoaks pertahanan dapat memicu kepanikan dan merusak legitimasi negara. Memverifikasi informasi, menghentikan disinformasi, serta mendukung langkah konstitusional & hukum laut UNCLOS 1982 merupakan wujud bela negara sipil dan nasionalisme dewasa (Opsi D).',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5909',
      'Bacalah teks berita resmi berikut dengan cermat:\n"Untuk menyukseskan agenda transformasi birokrasi di daerah terpencil, setiap warga negara berhak memperoleh layanan publik setara tanpa perlakuan diskriminatif dari pihak mana pun. Oleh sebab itu, kementerian terkait memperbarui buku panduan *Pedoman Layanan Inklusif* serta menggandeng pakar dari World Health Organization untuk meninjau standar aksesibilitas fasilitas kesehatan primer. Para analis kebijakan juga memengaruhi penyusunan regulasi daerah agar menghindari istilah teknis asing seperti *zero tolerance* tanpa padanan penjelas yang memadai bagi masyarakat."\n(Catatan: teks di antara tanda *...* dicetak miring). Mengacu pada EYD Edisi V dan KBBI resmi, penilaian ketepatan ejaan pada paragraf tersebut adalah...',
      [
        'A. Penulisan tepat seluruhnya: "warga negara" terpisah, "memengaruhi" luluh, judul buku dan istilah asing miring, serta nama lembaga asing tegak',
        'B. Semua ejaan salah karena kata "warga negara" harus digabung serangkai menjadi "warganegara" dan kata "memengaruhi" wajib ditulis menjadi bentuk "mempengaruhi"',
        'C. Penulisan keliru karena nama organisasi asing World Health Organization seharusnya wajib dicetak miring seluruhnya, sedangkan judul buku pedoman tidak boleh dicetak miring',
        'D. Terdapat pelanggaran pada penggunaan preposisi kalimat pertama karena kata "Untuk menyukseskan" tidak boleh mengawali keterangan tujuan sebelum koma pemisah subjek kalimat',
        'E. Kata "diskriminatif" harus dicetak miring karena berasal dari bahasa serapan asing, sedangkan frasa "mana pun" wajib ditulis serangkai menjadi bentuk "manapun"'
      ],
      0,
      'Cek 4 kunci EYD V sekaligus: (1) warga negara = terpisah; (2) memengaruhi = luluh; (3) *Judul Buku* & *istilah asing* = miring; (4) World Health Organization = nama lembaga asing tetap TEGAK; mana pun = terpisah!',
      'Berdasarkan KBBI dan EYD V: gabungan kata dasar "warga negara" dan "mana pun" ditulis terpisah; awalan meN- + pengaruh luluh menjadi "memengaruhi"; judul buku (*Pedoman Layanan Inklusif*) dan istilah belum diserap (*zero tolerance*) dicetak miring; nama lembaga asing (World Health Organization) ditulis tegak; "diskriminatif" sudah kata serapan baku (Opsi A).',
      ''
    ],
    [
      'TWK HOTS - EYD V & Penalaran Wacana', 'twk56-bahasa', 'SKD-TWK-X5910',
      'Bacalah paragraf analisis kebijakan publik berikut secara utuh!\n"Selama dekade terakhir, banyak pemerintah kota berinvestasi membangun portal aduan warga berbasis aplikasi ponsel guna mempermudah pelaporan jalan rusak dan gangguan penerangan jalan umum. Namun, evaluasi independen terhadap delapan belas kota menunjukkan bahwa hampir separuh laporan warga hanya terhenti pada status diterima sistem tanpa kejelasan tenggat perbaikan di lapangan, karena unit teknis kekurangan armada kerja maupun kejelasan anggaran pemeliharaan rutin. Akibatnya, tingkat kepercayaan publik di kota-kota tersebut justru menurun lebih tajam dibanding masa sebelum portal diluncurkan sebab harapan warga yang tinggi tidak diimbangi kepastian tindak lanjut nyata."\nSimpulan paling menyeluruh dan akurat berdasarkan paragraf tersebut adalah...',
      [
        'A. Aplikasi aduan warga berbasis ponsel selalu gagal diterapkan di kota mana pun sehingga sebaiknya seluruh instansi segera kembali pada pencatatan buku tamu kertas manual',
        'B. Penurunan kepercayaan publik dalam sepuluh tahun terakhir semata-mata disebabkan oleh antarmuka aplikasi portal aduan warga yang terlalu rumit dibuka dari ponsel pribadi',
        'C. Seluruh warga kota pada umumnya lebih mengutamakan perbaikan penerangan jalan umum daripada pengaspalan jalan berlubang yang diajukan melalui aplikasi ponsel',
        'D. Kekurangan armada lapangan hanya dialami oleh pemerintah kota besar sementara pemerintah kabupaten di pedesaan telah memiliki anggaran pemeliharaan rutin berlimpah',
        'E. Pembangunan kanal pengaduan digital belum menumbuhkan kepercayaan publik tanpa dukungan kesiapan unit teknis serta kepastian tindak lanjut nyata'
      ],
      4,
      'Simpulan wacana harus menyatukan TEMA (portal aduan digital) + AKAR MASALAH (unit teknis/anggaran tak siap tindak lanjut) + DAMPAK (kepercayaan publik turun)!',
      'Paragraf membandingkan tujuan baik portal aduan digital dengan realitas buruk di lapangan (tindak lanjut mandek akibat keterbatasan armada & anggaran rutin) yang membuat kepercayaan publik justru turun. Hanya opsi E yang merangkum keseluruhan isi teks secara presisi tanpa asumsi berlebih.',
      ''
    ],
    [
      'TWK HOTS - Etika Publik & Keteladanan', 'twk56-integritas', 'SKD-TWK-X5911',
      'Seorang auditor muda inspektorat daerah menemukan selisih pertanggungjawaban biaya perjalanan dinas sebesar dua koma lima juta rupiah pada berkas kegiatan sebuah unit kerja yang dikenal sering menerima penghargaan kinerja terbaik nasional. Atasan langsung sang auditor menyarankan agar temuan itu tidak dimasukkan ke dalam laporan hasil pemeriksaan resmi dengan pertimbangan nilainya kecil, baru pertama kali terjadi, serta berpotensi mencoreng citra kementerian menjelang penilaian zona integritas. Auditor muda tersebut menyadari adanya tekanan halus demi menjaga nama baik bersama, namun ingat pada sumpah profesi pengawasan. Sikap paling tepat yang mencerminkan integritas sekaligus keteladanan tata kelola akuntabel adalah...',
      [
        'A. Menghapus catatan selisih anggaran dari draf laporan akhir setelah pimpinan unit kerja yang diperiksa berjanji mengganti uang secara pribadi tanpa kuitansi resmi',
        'B. Mencatat secara objektif temuan selisih tersebut di kertas kerja pemeriksaan disertai rekomendasi pengembalian resmi ke kas negara guna membangun budaya transparansi',
        'C. Mengunggah salinan draf temuan audit sementara itu secara terbuka ke media sosial pribadi supaya publik luas ikut mendesak unit kerja tersebut segera mengembalikan dana',
        'D. Menyetujui penghapusan temuan dengan syarat unit kerja tersebut berkomitmen tidak mengulangi kekeliruan pencatatan anggaran pada tahun anggaran berikutnya',
        'E. Menyerahkan tanggung jawab penandatanganan hasil audit kepada rekan tim lain sehingga nama pribadi auditor muda tersebut tidak tercatat dalam laporan akhir'
      ],
      1,
      'Integritas akuntabel tak kenal kompromi nominal kecil! Temuan tetap dicatat objektif + rekomendasikan penyetoran resmi ke kas negara lewat jalur prosedural!',
      'Dalam pengawasan keuangan negara, nilai kecil sekalipun menyangkut akuntabilitas publik dan integritas proses. Mencatat temuan apa adanya secara objektif dan mewajibkan pengembalian ke kas negara lewat mekanisme resmi justru memperkuat zona integritas yang sejati (Opsi B).',
      ''
    ],
    [
      'TWK HOTS - Konstitusi & Tata Negara', 'twk56-konstitusi', 'SKD-TWK-X5912',
      'Pada masa berlakunya Undang-Undang Dasar Sementara (UUDS) 1950, Indonesia kembali menerapkan bentuk negara kesatuan yang menggantikan sistem federal Konstitusi Republik Indonesia Serikat (RIS) 1949, namun tetap mempraktikkan sistem pemerintahan kabinet parlementer seperti yang berlaku pada masa RIS. Dalam praktiknya sepanjang tahun 1950 hingga 1959, ketegangan antarfraksi partai di parlemen kerap menjatuhkan kabinet melalui mosi tidak percaya sehingga program pembangunan nasional berjalan singkat dan tersendat, ditambah gagalnya Konstituante menuntaskan penyusunan undang-undang dasar tetap. Latar belakang ketatanegaraan tersebut akhirnya mendorong keluarnya Dekret Presiden 5 Juli 1959. Pelajaran konstitusional paling penting dari pergulatan sistem pemerintahan Indonesia dari masa ke masa hingga UUD NRI 1945 hasil amandemen adalah...',
      [
        'A. Majelis Permusyawaratan Rakyat pasca-amandemen kembali ditetapkan sebagai lembaga tertinggi negara yang berhak memberhentikan presiden sewaktu-waktu tanpa alasan hukum',
        'B. Penghapusan hak interpelasi dan hak angket DPR pasca-amandemen bertujuan menempatkan kedudukan presiden di atas konstitusi tanpa mekanisme pengawasan parlemen apa pun',
        'C. Sistem presidensial pasca-amandemen menetapkan presiden dipilih langsung oleh rakyat dengan masa jabatan tetap lima tahun demi stabilitas eksekutif',
        'D. Sistem federal terbukti jauh lebih efektif daripada negara kesatuan untuk mencegah pergantian menteri kabinet maupun mempercepat pembangunan infrastruktur antarpulau',
        'E. Konstitusi RIS 1949 dan UUDS 1950 resmi diaktifkan kembali sebagai hukum dasar tambahan dalam Pasal II Aturan Tambahan Perubahan Keempat UUD NRI Tahun 1945'
      ],
      2,
      'Pelajaran pasca-UUDS 1950 → Amandemen UUD 1945 memurnikan SISTEM PRESIDENSIAL: masa jabatan tetap 5 tahun + Presiden dipilih langsung (Pasal 6A), namun tetap ada checks & balances DPR!',
      'Ketidakstabilan kabinet parlementer UUDS 1950 memberi pelajaran tentang pentingnya eksekutif yang stabil dalam sistem presidensial murni (masa jabatan tetap dan dipilih langsung oleh rakyat pada Pasal 6A & Pasal 7 UUD 1945) dengan tetap diawasi DPR melalui checks and balances (Opsi C).',
      ''
    ]
  ];

  /* ==================== 8 TKP DILEMA PANJANG (680-900 CHAR) & SKOR ACAK ==================== */
  const TKP_LONG = [
    [
      'TKP HOTS - Dilema Layanan Publik', 'tkp56-pelayanan', 'SKD-TKP-X5901',
      'Dua hari menjelang batas akhir pelaporan pajak daerah tahunan, aplikasi portal pelaporan daring pemerintah provinsi mengalami gangguan berat karena lonjakan akses hingga ratusan ribu pengguna secara bersamaan, membuat banyak wajib pajak gagal mengunggah bukti setor sejak pagi. Pada saat yang sama, loket tatap muka dibanjiri warga yang panik karena takut terkena denda administrasi keterlambatan, sementara tim TI pusat menginformasikan perbaikan kapasitas server membutuhkan waktu minimal enam jam. Sebagai koordinator pelayanan loket daerah pada hari krusial tersebut, langkah paling strategis dan menenangkan yang Anda ambil adalah...',
      [
        'A. Menenangkan pengantre secara santun, membuka pencatatan tanda terima pelaporan darurat secara luring sementara, serta segera berkoordinasi dengan pimpinan tentang usulan kebijakan relaksasi batas waktu tanpa denda',
        'B. Memasang pengumuman tertulis berukuran besar di depan gedung pelayanan yang menjelaskan gangguan teknis berasal dari pengelola pusat sehingga warga diminta bersabar menunggu hingga sore hari',
        'C. Meminta seluruh wajib pajak pulang dulu dan menenangkan mereka bahwa kelonggaran denda hampir pasti akan diberikan pemerintah karena kejadiannya tergolong keadaan kahar nasional',
        'D. Menerima berkas warga secara bertahap dengan cara memprioritaskan berkas wajib pajak berbadan usaha bernilai besar terlebih dahulu agar target penerimaan utama daerah tetap tercapai tepat waktu',
        'E. Menutup loket tatap muka sementara selama enam jam mengikuti estimasi perbaikan tim teknologi informasi agar tidak timbul kerumunan maupun perdebatan antara petugas dan warga'
      ],
      [5, 4, 3, 2, 1],
      'Krisis layanan menjelang tenggat: tenangkan warga + buka solusi darurat sementara (tanda terima manual) + koordinasikan kebijakan perlindungan warga tanpa denda!'
    ],
    [
      'TKP HOTS - Akuntabilitas & Etos Kerja', 'tkp56-profesional', 'SKD-TKP-X5902',
      'Menjelang peluncuran dasbor data pembangunan daerah oleh gubernur lusa pagi, Anda yang bertugas mengompilasi data akhir menemukan ketidaksesuaian angka kemiskinan sebesar empat koma dua persen antara laporan resmi Dinas Sosial, data survei BPS provinsi, dan rekap kecamatan di tiga kabupaten. Atasan unit pengelola aplikasi meminta Anda tetap memakai angka versi terendah saja agar grafik capaian pemerintah tampak paling baik di hadapan media massa saat acara seremonial peresmian. Padahal Anda tahu keputusan tersebut melanggar prinsip akuntabilitas satu data serta berisiko menyesatkan arah bantuan anggaran daerah tahun depan. Tindakan paling berintegritas yang Anda lakukan adalah...',
      [
        'A. Menghapus sementara kolom angka dari tiga kabupaten yang bermasalah tersebut dari tampilan utama dasbor agar tidak memicu pertanyaan sulit dari wartawan saat acara berlangsung',
        'B. Segera mengundang perwakilan teknis dari ketiga sumber data untuk mencocokkan definisi serta metodologi angka secara langsung dan melaporkan hasil akuratnya kepada pimpinan',
        'C. Menggunakan nilai rata-rata aritmetika ketiga sumber angka yang berselisih itu supaya semua instansi terkait merasa masukannya diakomodasi secara adil dan berimbang di layar',
        'D. Menolak seluruh permintaan atasan sambil langsung mempublikasikan perbedaan angka tersebut di forum media massa agar publik luas mengerti kendala akurasi pemerintah',
        'E. Menuruti arahan atasan menampilkan angka versi terendah dalam acara peluncuran karena pimpinan unit yang memegang penuh tanggung jawab politik atas paparan gubernur'
      ],
      [2, 5, 3, 4, 1],
      'Integritas data satu instansi: jangan memoles angka atau menyembunyikan data! Rekonsiliasi metodologi lintas sumber + laporkan angka akurat secara prosedural.'
    ],
    [
      'TKP HOTS - Harmoni & Anti-Gentrifikasi', 'tkp56-sosbud', 'SKD-TKP-X5903',
      'Pemerintah daerah Anda berencana membangun fasilitas tempat pengolahan sampah terpadu modern di sebuah kecamatan pinggiran guna mengakhiri krisis penumpukan sampah perkotaan. Namun, lahan strategis yang telah ditetapkan berada tepat berdekatan dengan permukiman warga masyarakat adat yang khawatir tempat ritual leluhur mereka tercemar bau dan lalu lintas truk pengangkut setiap hari. Sebagian kepala bidang mendesak agar proyek langsung dipaksakan berdasar kekuatan legal sertifikat aset pemda supaya target serapan anggaran kuartal ini tidak hangus. Sebagai perencana sosial dalam tim pelaksana proyek daerah, langkah terbaik yang Anda usulkan adalah...',
      [
        'A. Memaksakan pengerjaan fisik di atas lahan aset pemerintah daerah sambil menyiagakan aparat keamanan gabungan guna mencegah warga setempat mendekati kawasan proyek',
        'B. Menunda pembangunan tempat pengolahan sampah secara permanen tanpa batas waktu dan meminta seluruh warga kota memikul sendiri biaya pembuangan sampah mereka ke daerah lain',
        'C. Membuka dialog terbuka bersama tokoh adat untuk menyepakati teknologi pengendali bau ramah lingkungan serta jalur khusus non-area sakral',
        'D. Menyerahkan santunan uang tunai dalam jumlah kecil kepada segelintir pengurus kampung saja agar tidak terdengar suara protes saat alat berat masuk ke lokasi pembangunan',
        'E. Mengadakan sosialisasi aturan resmi kepemilikan aset pemerintah daerah melalui pemerintah desa setempat guna memohon pengertian masyarakat adat atas pentingnya lokasi proyek'
      ],
      [2, 3, 5, 1, 4],
      'Keseimbangan proyek strategis vs kearifan lokal: buka dialog empatik dengan tokoh adat + tawarkan solusi teknis mitigasi bau & pelestarian situs sakral, bukan paksakan alat berat!'
    ],
    [
      'TKP HOTS - TIK & Sistem Digital', 'tkp56-tik', 'SKD-TKP-X5904',
      'Dalam rangka efisiensi anggaran rapat, unit layanan Anda menerapkan alat asisten kecerdasan buatan (AI) publik untuk merangkum otomatis rekaman transkrip rapat pengaduan masyarakat lengkap beserta nomor identitas kependudukan dan alamat pelapor tanpa mengaktifkan pembatasan privasi awan. Ketika Anda mengecek ketentuan layanan penyedia perangkat lunak gratis tersebut, ternyata seluruh data masukan pengguna digunakan ulang untuk melatih model global milik vendor komersial luar negeri. Rekan-rekan setim menganggap hal ini sepele karena sangat membantu mempercepat notulensi harian yang sebelumnya memakan waktu dua jam. Sikap paling tepat yang Anda ambil berlandaskan UU Pelindungan Data Pribadi dan etika TIK ASN adalah...',
      [
        'A. Tetap menggunakan alat daring gratis itu secara normal setiap rapat berlangsung namun berpesan secara lisan kepada seluruh staf agar tidak membicarakan kebocoran data kepada pihak luar',
        'B. Melarang keras pegawai kantor memakai komputer sama sekali dalam membuat notulensi rapat dan memerintahkan pengembalian ke sistem pencatatan buku tulis tangan sepenuhnya',
        'C. Melaporkan potensi risiko kebocoran data warga tersebut secara tertulis kepada pimpinan unit dan bagian hukum sambil menunggu kebijakan resmi penggunaan perangkat kantor',
        'D. Mengunduh semua salinan rekaman rapat beserta nomor induk kependudukan pelapor ke flash disk pribadi Anda untuk diketik ulang sendiri di rumah saat akhir pekan',
        'E. Menghentikan unggahan data pribadi warga ke AI publik, menerapkan anonimisasi identitas, serta mengusulkan platform aman internal ke tim TI'
      ],
      [1, 3, 4, 2, 5],
      'UU PDP & Etika AI: hentikan pemrosesan data pribadi ke vendor publik + lakukan anonimisasi + usulkan solusi AI/alat internal yang terproteksi resmi!'
    ],
    [
      'TKP HOTS - Sinergi & Kepemimpinan Tim', 'tkp56-jejaring', 'SKD-TKP-X5905',
      'Sebagai ketua satuan tugas percepatan reformasi birokrasi lintas empat unit kerja, Anda mendapati kinerja kelompok terhambat karena dua koordinator subtim senior terlibat konflik dingin akibat kegagalan proyek tiga tahun lalu. Keduanya menolak menghadiri rapat bersama apabila salah satu berbicara, saling menahan bahan paparan hingga tenggat terlewat, dan menyeret staf junior memihak kubu masing-masing sehingga suasana kantor menegang tajam. Pimpinan puncak memberi batas waktu sepuluh hari bagi satgas Anda untuk menyerahkan draf peta jalan terpadu. Langkah kepemimpinan dan jejaring kerja paling efektif yang Anda tempuh adalah...',
      [
        'A. Langsung memisahkan tugas kedua koordinator senior menjadi dua draf laporan terpisah tanpa komunikasi satu sama lain lalu menjahit isinya sendiri pada malam sebelum paparan',
        'B. Memanggil keduanya secara terbuka di hadapan seluruh staf junior dalam rapat pleno gabungan serta menegur keras sikap kekanak-kanakan mereka supaya segera berdamai seketika',
        'C. Menemui masing-masing secara empat mata untuk menyelaraskan target kerja bersama serta menetapkan pembagian tugas dan tanggung jawab terukur',
        'D. Mengembalikan mandat ketua satuan tugas kepada pimpinan puncak dengan alasan suasana konflik personal di antara senior membuat target sepuluh hari mustahil diselesaikan',
        'E. Mengambil alih penuh pengerjaan seluruh isi draf dokumen peta jalan oleh Anda sendiri bersama dua staf favorit tanpa melibatkan kedua subtim yang sedang berseteru tersebut'
      ],
      [3, 2, 5, 1, 4],
      'Mediasi konflik tim lintas unit: pendekatan personal empat mata (non-konfrontatif di depan umum) → tarik fokus kembali ke tujuan bersama + perjelas pembagian tanggung jawab!'
    ],
    [
      'TKP HOTS - Moderasi & Pencegahan Dini', 'tkp56-radikal', 'SKD-TKP-X5906',
      'Anda merupakan pegawai senior yang dipercaya mengelola pembinaan asrama pegawai muda penugasan daerah di lingkungan instansi vertikal. Sejak tiga bulan terakhir, seorang pegawai muda cerdas lulusan baru mulai menarik diri dari kegiatan olahraga maupun diskusi ringan asrama, hanya bergaul dengan lingkar kecil tertutup di luar kantor, dan kedapatan membagikan pesan singkat yang menyebut sistem hukum konstitusional negara sebagai produk gagal yang tidak wajib dipatuhi ASN. Sebagian penghuni asrama mengusulkan agar ia langsung dikucilkan dan dilaporkan ke aparat penegak hukum hari ini juga. Tindakan pencegahan dini paling tepat dan bijaksana yang Anda tempuh adalah...',
      [
        'A. Mendekatinya secara empatik dalam dialog kebangsaan terbuka dan mengajaknya kembali mengikuti aktivitas inklusif sambil memantau perkembangannya',
        'B. Mengucilkan pegawai muda itu dari seluruh grup percakapan asrama dan meminta penghuni lain berhenti menyapanya agar paham ekstrem tidak menyebar luas di lingkungan kantor',
        'C. Membiarkannya menyendiri tanpa berkomentar apa pun karena kebebasan memilih bacaan dan lingkar pergaulan setelah jam kantor berakhir sepenuhnya menjadi hak pribadi pegawai',
        'D. Menyebarkan tangkapan layar pesan singkat pribadinya ke media sosial internal seluruh cabang kementerian supaya dirinya jera oleh sanksi sosial masyarakat luas',
        'E. Menantangnya berdebat ideologi secara keras dan terbuka di aula makan asrama disaksikan puluhan pegawai lain untuk membuktikan ketidaktepatan pandangannya seketika'
      ],
      [5, 2, 3, 1, 4],
      'Pencegahan dini paparan ekstremisme (soft approach): hindari pengucilan/permalukan terbuka yang memicu defensif; dekati empatik + dialog kebangsaan + rangkul ke aktivitas inklusif!'
    ],
    [
      'TKP HOTS - Dilema Layanan Publik', 'tkp56-pelayanan', 'SKD-TKP-X5907',
      'Anda ditempatkan di kantor kecamatan kepulauan terluar yang hanya menerima kapal pasokan barang seminggu sekali dan akses internet satelitnya kerap terputus saat badai angin kencang. Pagi ini datang sepasang warga nelayan dari pulau kecil seberang mendayung dua jam untuk mengurus surat keterangan usaha mikro guna syarat pencairan pinjaman modal melaut hari ini juga. Sayangnya, jaringan verifikasi daring ke server kabupaten terputus akibat cuaca buruk sejak subuh sehingga sistem cetak ber-QR tidak merespons. Sikap pelayanan publik terbaik yang Anda ambil dalam keterbatasan tersebut adalah...',
      [
        'A. Memohon maaf dengan tulus tanpa memberikan opsi lanjutan dan meminta pasangan nelayan tersebut mendayung pulang dulu menunggu cuaca cerah minggu depan agar jaringan pulih',
        'B. Menolak melayani seluruh permohonan warga kepulauan sejak pagi dengan alasan kantor sedang mengalami gangguan teknis di luar tanggung jawab petugas kecamatan',
        'C. Meminta pasangan nelayan tersebut menghubungi pengelola menara telekomunikasi kabupaten sendiri supaya perbaikan sinyal satelit kecamatan segera diprioritaskan hari ini',
        'D. Menerima salinan berkas fisik warga secara lengkap untuk ditahan sementara di meja layanan dan meminta warga kembali lagi keesokan harinya setelah jaringan kabupaten membaik',
        'E. Memeriksa kelengkapan berkas fisik langsung, menghubungi petugas kabupaten via telepon, serta menyiapkan penerbitan segera saat sinyal pulih'
      ],
      [3, 1, 2, 4, 5],
      'Layanan publik daerah 3T saat kendala infrastruktur: periksa kelengkapan berkas langsung + proaktif kontak jalur komunikasi alternatif (telepon/relay) tanpa melanggar syarat verifikasi!'
    ],
    [
      'TKP HOTS - Sinergi & Kepemimpinan Tim', 'tkp56-jejaring', 'SKD-TKP-X5908',
      'Unit Anda menerima hibah perangkat lunak pemantau keluhan publik baru dari kementerian pusat yang mewajibkan kolaborasi harian antara tiga bagian berbeda: pelayanan depan, pengendali TI, dan tim lapangan teknis. Sebulan berjalan, tingkat penyelesaian aduan masih rendah karena tim lapangan merasa tidak pernah diajak merancang tata cara pengisian aplikasi yang rumit di lokasi perbaikan bersinyal lemah, sedangkan tim TI mengeluh data lapangan selalu tidak lengkap. Sebagai wakil tim lintas bagian yang ditunjuk mengevaluasi kendala ini, langkah paling kolaboratif untuk membenahi situasi tersebut adalah...',
      [
        'A. Mewajibkan seluruh petugas lapangan menyalin ulang isi laporan harian secara manual ke formulir kertas terpisah sebelum pulang ke rumah masing-masing selepas jam kerja selesai',
        'B. Mengadakan lokakarya tiga pihak untuk memetakan kendala riil serta menyederhanakan kolom aplikasi agar mendukung penyimpanan luring',
        'C. Menyampaikan laporan resmi kepada pimpinan pusat bahwa perangkat lunak hibah tersebut gagal total dan meminta penghentian seluruh penggunaannya dalam kegiatan operasional daerah',
        'D. Meminta tim teknologi informasi menghukum akun petugas lapangan yang mengisi laporan tidak lengkap dengan menonaktifkan akses masuk sistem mereka selama satu minggu penuh',
        'E. Menyarankan tim pelayanan depan mengurangi penerimaan keluhan warga sementara waktu supaya beban pelaporan petugas lapangan dan tim pengelola data berkurang secara alami'
      ],
      [3, 5, 2, 1, 4],
      'Kolaborasi lintas fungsi & adopsi TIK: duduk bareng 3 pihak cari kendala riil → sederhanakan alur aplikasi (dukung mode offline saat sinyal lemah)!'
    ]
  ];
  // Catatan: x5901 sudah dirotasi (skor 5 di indeks 3 / Opsi D) dan X5902..X5908 seimbang panjang opsinya.
  const x5901 = TKP_LONG[0];
  x5901[4] = [
    'A. Menenangkan pengantre sementara sambil memasang pengumuman bahwa gangguan server berpusat dari aplikasi pusat sehingga warga dimohon menunggu hingga sistem kembali normal sore hari',
    'B. Menerima berkas warga secara bertahap dengan cara memprioritaskan berkas wajib pajak berbadan usaha bernilai besar terlebih dahulu agar target penerimaan utama daerah tetap tercapai tepat waktu',
    'C. Menutup loket tatap muka sementara selama enam jam mengikuti estimasi perbaikan tim teknologi informasi agar tidak timbul kerumunan maupun perdebatan antara petugas dan warga',
    'D. Menenangkan pengantre secara santun, membuka pencatatan tanda terima darurat luring sementara, serta segera berkoordinasi dengan pimpinan soal usulan relaksasi batas waktu tanpa denda',
    'E. Meminta seluruh wajib pajak pulang dulu dan meyakinkan mereka bahwa kelonggaran denda hampir pasti akan diberikan pemerintah karena kejadiannya tergolong keadaan kahar nasional'
  ];
  x5901[5] = [4, 2, 1, 5, 3];

  /* ==================== 5 TIU NUMERIK DESIMAL & GRAFIK REALISTIS (<= 650 CHAR) ==================== */
  const TIU_DEC = [
    [
      'Numerik - Hitung Desimal Realistis', 'tiu59-numerik-desimal', 'SKD-TIU-X5901',
      'Pada kuartal I, ekspor daerah tercatat Rp125,00 miliar. Pada kuartal II naik sebesar 5,12%, kemudian pada kuartal III terkoreksi turun 4,00% dari nilai kuartal II. Berapakah nilai ekspor daerah pada kuartal III (dalam miliar rupiah)?',
      [
        'A. Rp126,14 miliar',
        'B. Rp126,40 miliar',
        'C. Rp127,12 miliar',
        'D. Rp128,15 miliar',
        'E. Rp125,00 miliar'
      ],
      0,
      'Pakai faktor pengali beruntun: 125 × 1,0512 = (1000/8) × 1,0512 = 131,40; lalu × 0,96 = 131,40 − 5,256 = 126,144 miliar!',
      'Kuartal II = 125 × 1,0512 = 131,40 miliar (trik cepat: 125 = 1000 ÷ 8, sehingga 1,0512 ÷ 8 × 1000 = 131,40). Kuartal III = 131,40 × 0,96 = 131,40 − (4% × 131,40) = 131,40 − 5,256 = Rp126,144 ≈ Rp126,14 miliar (Opsi A).',
      ''
    ],
    [
      'Numerik - Hitung Desimal Realistis', 'tiu59-numerik-desimal', 'SKD-TIU-X5902',
      'Sebanyak 24 liter larutan disinfektan berkadar 12,5% dicampur dengan 16 liter larutan sejenis berkadar 17,5%. Berapakah kadar persentase campuran baru yang terbentuk?',
      [
        'A. 14,0%',
        'B. 14,5%',
        'C. 15,0%',
        'D. 15,5%',
        'E. 16,0%'
      ],
      1,
      'Trik rata-rata berbobot cepat: 24 : 16 = 3 : 2 (total 5 bagian). Selisih kadar 17,5 − 12,5 = 5%, jadi kadar = 12,5% + (2/5 × 5%) = 14,5%!',
      'Zat aktif total = (24 × 12,5%) + (16 × 17,5%) = 3,0 + 2,8 = 5,8 liter. Volume campuran = 24 + 16 = 40 liter. Kadar akhir = 5,8 ÷ 40 = 0,145 = 14,5% (Opsi B).',
      ''
    ],
    [
      'Numerik - Hitung Desimal Realistis', 'tiu59-numerik-desimal', 'SKD-TIU-X5903',
      'Mengacu tabel realisasi anggaran 4 perangkat daerah berikut, manakah dinas yang mencatat PERSENTASE realisasi tertinggi sekaligus melampaui target 80,0% dengan selisih persentase terbesar?',
      [
        'A. Dinas A (78,4%)',
        'B. Dinas B (82,6%)',
        'C. Dinas C (85,5%)',
        'D. Dinas D (81,0%)',
        'E. Dinas B dan Dinas C sama tinggi'
      ],
      2,
      'Uji cepat per pagu: A = 19,6/25 = 78,4%; B = 33,04/40 = 8,26/10 = 82,6%; C = 13,68/16 = 85,5%; D = 25,92/32 = 81,0%!',
      'Persentase serapan masing-masing: Dinas A = 19,60 ÷ 25,00 = 78,4% (di bawah target); Dinas B = 33,04 ÷ 40,00 = 82,6%; Dinas C = 13,68 ÷ 16,00 = 0,855 = 85,5%; Dinas D = 25,92 ÷ 32,00 = 81,0%. Tertinggi adalah Dinas C (Opsi C).',
      SVG_SERAPAN
    ],
    [
      'Numerik - Hitung Desimal Realistis', 'tiu59-numerik-desimal', 'SKD-TIU-X5904',
      'Tim pengolah data menyelesaikan verifikasi dokumen dalam 4,5 hari jika ditangani 12 staf bekerja 8 jam per hari. Apabila jumlah staf dikurangi menjadi 9 orang dan target penyelesaian dipercepat menjadi 4 hari, berapa jam kerja per hari yang dibutuhkan per staf?',
      [
        'A. 9,5 jam',
        'B. 10,0 jam',
        'C. 11,0 jam',
        'D. 12,0 jam',
        'E. 12,5 jam'
      ],
      3,
      'Rumus beban kerja konstan (Orang × Hari × Jam): 12 × 4,5 × 8 = 9 × 4 × J → J = 432 ÷ 36 = 12,0 jam/hari!',
      'Total beban kerja = 12 staf × 4,5 hari × 8 jam/hari = 54 × 8 = 432 jam-orang. Dengan 9 staf selama 4 hari (36 hari-orang), durasi per hari = 432 ÷ 36 = 12,0 jam/hari (Opsi D).',
      ''
    ],
    [
      'Numerik - Hitung Desimal Realistis', 'tiu59-numerik-desimal', 'SKD-TIU-X5905',
      'Jika x = (3,75 × 1,6) + (2,5 × 0,48) dan y = 14,4 ÷ 1,8 − 0,8, maka hubungan yang benar antara x dan y adalah...',
      [
        'A. x > y',
        'B. x < y',
        'C. x = y',
        'D. 2x = 3y',
        'E. Hubungan x dan y tidak dapat ditentukan'
      ],
      2,
      'Hitung pecahan senilai: 3,75 = 15/4 -> 15/4 × 1,6 = 6,0; 2,5 × 0,48 = 1,2 → x = 7,2! Sementara y = 144/18 − 0,8 = 8 − 0,8 = 7,2!',
      'x = (15/4 × 1,6) + (5/2 × 0,48) = 6,0 + 1,2 = 7,2. y = (14,4 ÷ 1,8) − 0,8 = 8,0 − 0,8 = 7,2. Jadi x = y (Opsi C).',
      ''
    ]
  ];

  const twkObjs = TWK_LONG.map(([sub, fam, id, q, options, ans, trick, explanation, img]) => ({
    id, examType: 'SKD_TWK', category: 'TWK', sub, fam, q, options, ans,
    scores: options.map((_, i) => (i === ans ? 5 : 0)), trick, explanation,
    level: 'HOTS', practice: 'GOCPNS', ...(img ? { img } : {})
  }));
  const tkpObjs = TKP_LONG.map(([sub, fam, id, q, options, scores, trick]) => ({
    id, examType: 'SKD_TKP', category: 'TKP', sub, fam, q, options,
    ans: scores.indexOf(5), scores, trick,
    explanation: `Skor 5 terletak pada pilihan ${['A', 'B', 'C', 'D', 'E'][scores.indexOf(5)]}: ${trick}`,
    level: 'HOTS', practice: 'GOCPNS'
  }));
  const tiuObjs = TIU_DEC.map(([sub, fam, id, q, options, ans, trick, explanation, img]) => ({
    id, examType: 'SKD_TIU', category: 'TIU', sub, fam, q, options, ans,
    scores: options.map((_, i) => (i === ans ? 5 : 0)), trick, explanation,
    level: 'HOTS', practice: 'GOCPNS', ...(img ? { img } : {})
  }));

  window.registerCPNSQuestions({ packId: 'skd_twk_wacana_v59', bucket: 'SKD_TWK', questions: twkObjs });
  window.registerCPNSQuestions({ packId: 'skd_tkp_wacana_v59', bucket: 'SKD_TKP', questions: tkpObjs });
  window.registerCPNSQuestions({ packId: 'skd_tiu_desimal_v59', bucket: 'SKD_TIU', questions: tiuObjs });
})();
