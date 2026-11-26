/* ==========================================================================
   BANK SOAL TIU VERBAL HOTS: PENALARAN INDUKTIF (GENERALISASI, KAUSALITAS, ANALOGI INDUKTIF)
   15 soal orisinal standar KepmenPANRB 321/2024. ID -X57xx agar urutan paket lama tetap stabil.
   Semua teks soal <= 650 karakter agar lolos lessonChoices() di Materi & Rangkuman.
   ========================================================================== */
(function () {
  if (typeof window.registerCPNSQuestions !== 'function') return;

  const ITEMS = [
    // ==================== 1. GENERALISASI INDUKTIF (5 soal) ====================
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5701',
      'Evaluasi uji coba layanan izin daring menunjukkan Dinas Perizinan Kota A memangkas antrean 65%, Dinas Kependudukan Kabupaten B turun 58%, dan PTSP Kota C turun 62% setelah memakai autentikasi tunggal SSO. Simpulan induktif paling tepat berdasarkan data tersebut adalah...',
      [
        'A. Semua dinas di seluruh Indonesia pasti bebas antrean jika memakai SSO',
        'B. Penerapan autentikasi tunggal SSO berpotensi besar memangkas antrean di berbagai unit layanan publik',
        'C. Kota A merupakan daerah dengan kualitas ASN paling baik di seluruh negeri',
        'D. Tanpa sistem SSO, layanan di Kabupaten B pasti lumpuh total',
        'E. Layanan perizinan lebih penting daripada layanan kependudukan'
      ],
      1,
      'Generalisasi induktif yang sah wajib mencakup keseluruhan fakta uji coba tanpa melebih-lebihkan menjadi klaim mutlak ("pasti 100% semua daerah")!',
      'Dari tiga unit uji coba berbeda (kota/kabupaten dan jenis layanan berbeda), ketiganya sama-sama mencatat penurunan antrean 58%–65% setelah memakai SSO. Simpulan induktif yang wajar dan paling kuat ialah pola kecenderungan ("berpotensi besar memangkas antrean"), bukan klaim absolut opsi A/D yang melampaui sampel.',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5702',
      'Dalam pengujian laboratorium material nasional, batang tembaga bertambah panjang 1,7 mm saat dipanaskan hingga 100°C, aluminium memuai 2,3 mm, baja memuai 1,2 mm, dan kuningan memuai 1,9 mm. Kesimpulan generalisasi yang paling valid adalah...',
      [
        'A. Logam aluminium pasti selalu lebih kuat daripada baja pada suhu ruang',
        'B. Pada umumnya benda berbahan logam mengalami pemuaian panjang ketika dipanaskan',
        'C. Semua benda padat di alam semesta memuai minimal 1,2 mm pada suhu 100°C',
        'D. Hanya empat jenis logam tersebut yang terpengaruh perubahan suhu panas',
        'E. Baja tidak cocok dipakai untuk jembatan karena pemuaiannya paling kecil'
      ],
      1,
      'Tarik benang merah seluruh sampel (tembaga, aluminium, baja, kuningan = semuanya golongan LOGAM) -> sama-sama memuai saat dipanaskan!',
      'Keempat sampel yang diuji merupakan material logam dan seluruhnya mengalami pertambahan panjang ketika dipanaskan. Maka generalisasi induktif paling tepat adalah bahwa logam pada umumnya mengalami pemuaian bila dipanaskan (Opsi B). Opsi C terlalu luas ke semua benda padat nonlogam.',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5703',
      'Empat puskesmas di Kecamatan Maju yang menerapkan rekam medis elektronik (RME) sekaligus mengirim pengingat jadwal imunisasi via SMS mencatat kenaikan kepatuhan kontrol pasien ibu-anak di atas 30% dibanding kuartal sebelumnya. Pernyataan manakah yang paling tepat sebagai generalisasi sementara?',
      [
        'A. SMS selalu lebih efektif dibandingkan aplikasi ponsel di seluruh sektor publik',
        'B. Seluruh warga Kecamatan Maju sudah melek teknologi informasi dengan sangat baik',
        'C. Integrasi RME dan pengingat pesan terstruktur berkorelasi positif meningkatkan kepatuhan kontrol pasien',
        'D. Puskesmas di luar Kecamatan Maju dipastikan gagal meningkatkan kepatuhan imunisasi',
        'E. Kepatuhan pasien hanya ditentukan oleh pengingat SMS tanpa peran tenaga medis'
      ],
      2,
      'Jaga batasan data: empat puskesmas memakai RME + pengingat SMS -> kepatuhan kontrol naik >30%. Hindari kata "selalu", "seluruh", atau "hanya"!',
      'Generalisasi ilmiah menyimpulkan pola konsisten pada sampel yang diamati tanpa menafikan faktor lain di luar data. Opsi C tepat merangkum keterkaitan RME + pengingat dengan naiknya kepatuhan kontrol, sementara opsi lain melakukan klaim mutlak berlebihan.',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5704',
      'Sebuah tim evaluasi menyimpulkan "Seluruh warga kabupaten sangat puas terhadap aplikasi pajak daerah" hanya berdasarkan wawancara terhadap 50 pengunjung pusat perbelanjaan modern di pusat ibu kota kabupaten pada akhir pekan. Kelemahan utama penalaran induktif tim tersebut adalah...',
      [
        'A. Jumlah responden seharusnya minimal seribu orang agar tidak usah dianalisis lagi',
        'B. Sampel tidak representatif karena hanya mengambil kelompok perkotaan modern dan mengabaikan warga desa/non-pengguna ponsel',
        'C. Wawancara dilakukan pada akhir pekan yang seharusnya menjadi waktu libur ASN',
        'D. Aplikasi pajak daerah semestinya dinilai dari desain warnanya saja',
        'E. Kesimpulan tidak mencantumkan nama pengembang aplikasi secara lengkap'
      ],
      1,
      'Kualitas generalisasi induktif ditentukan oleh DUA syarat: kecukupan ukuran & KETERWAKILAN (representativitas) sampel terhadap seluruh populasi!',
      'Populasi klaim adalah "seluruh warga kabupaten", padahal sampel diambil secara bias hanya di pusat perbelanjaan modern ibu kota kota pada akhir pekan (cenderung berpendidikan tinggi & punya akses gawai). Karena warga pedesaan, lansia, dan kelompok non-digital tidak terwakili, generalisasinya cacat secara metodologi (Opsi B).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5705',
      'Berdasarkan uji coba di lima kelurahan perkotaan, loket terpadu keliling terbukti mempercepat waktu terbit dokumen kependudukan hingga 40%. Informasi tambahan manakah yang PALING MEMPERKUAT kesimpulan bahwa model itu layak diterapkan di seluruh wilayah provinsi?',
      [
        'A. Anggaran pembelian kendaraan operasional tahun lalu mengalami sisa lebih penghitungan',
        'B. Uji coba serupa di desa kepulauan dan daerah pegunungan juga mempercepat terbit dokumen hingga 38–42%',
        'C. Kepala dinas provinsi menyampaikan apresiasi atas kerja keras lima lurah tersebut',
        'D. Petugas loket keliling di lima kelurahan tersebut semuanya berstatus ASN baru',
        'E. Warga di lima kelurahan perkotaan merasa desain mobil layanan terlihat modern'
      ],
      1,
      'Untuk memperkuat generalisasi induktif dari sampel terbatas (5 kelurahan kota) ke skala provinsi, tambahkan bukti keberhasilan dari wilayah yang BERBEDA karakteristiknya!',
      'Kelemahan argumen awal adalah sampel hanya terbatas di 5 kelurahan perkotaan. Jika model tersebut juga terbukti sukses dengan angka sebanding di desa kepulauan dan wilayah pegunungan (Opsi B), cakupan induksi menjadi luas dan representatif untuk level provinsi.',
      ''
    ],

    // ==================== 2. HUBUNGAN KAUSALITAS (5 soal) ====================
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5706',
      'Perhatikan alur kausal berantai: kenaikan tarif tol dan harga solar memicu lonjakan biaya angkut truk antarkota; naiknya ongkos logistik menaikkan harga eceran bahan pokok di pasar tradisional, sehingga daya beli rumah tangga berpendapatan tetap ikut tertekan. Jika harga solar kembali naik tajam bulan depan, akibat paling logis selanjutnya adalah...',
      [
        'A. Tarif tol otomatis menjadi gratis bagi seluruh angkutan penumpang umum',
        'B. Biaya distribusi barang cenderung meningkat dan memberi tekanan lanjutan pada daya beli rumah tangga',
        'C. Pasar tradisional pasti tutup permanen dalam satu minggu ke depan',
        'D. Pendapatan seluruh sopir truk di kota besar otomatis berlipat dua',
        'E. Kebutuhan bahan pokok masyarakat hilang karena harga eceran naik'
      ],
      1,
      'Ikuti mata rantai SEBAB -> AKIBAT I -> AKIBAT II secara proporsional tanpa loncatan ekstrem ("otomatis tutup / gratis")!',
      'Dalam pola multi-kausal teks: solar naik -> biaya logistik naik -> harga eceran naik -> daya beli tertekan. Bila solar kembali naik tajam, konsekuensi induktif yang paling wajar dalam rantai itu adalah kenaikan ongkos distribusi yang menekan daya beli (Opsi B).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5707',
      'Selama triwulan II, jumlah laporan peretasan akun kepegawaian ASN melonjak empat kali lipat. Investigasi tim CSIRT menemukan 88% korban menggunakan kata sandi standar tanggal lahir dan mengklik tautan formulir palsu yang dikirim nomor tidak dikenal. Faktor sebab utama lonjakan insiden tersebut adalah...',
      [
        'A. Jaringan internet kantor pemerintah bekerja terlalu cepat di jam sibuk',
        'B. Jumlah pegawai yang baru diangkat pada triwulan II lebih banyak daripada tahun lalu',
        'C. Lemahnya kebersihan keamanan kata sandi dan rendahnya kewaspadaan terhadap rekayasa sosial (phishing)',
        'D. Hari libur nasional pada triwulan II jumlahnya lebih sedikit dibanding triwulan I',
        'E. Warna antarmuka portal kepegawaian baru saja diperbarui oleh tim desain'
      ],
      2,
      'Pola AKIBAT -> SEBAB: telusuri temuan faktual 88% korban untuk merumuskan akar penyebab yang langsung menjelaskan akibatnya!',
      'Data CSIRT menghubungkan langsung lonjakan peretasan (akibat) dengan dua penyebab dominan pada 88% korban: sandi lemah (tanggal lahir) serta klik tautan palsu (*phishing*). Oleh karena itu akar penyebab paling kuat adalah lemahnya keamanan sandi & kewaspadaan *phishing* (Opsi C).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5708',
      'Catatan statistik kota pesisir menunjukkan bahwa setiap bulan Juli–Agustus terjadi peningkatan bersamaan antara angka penjualan es kelapa muda dan jumlah kasus dehidrasi di UGD rumah sakit. Kesalahan penalaran kausal yang harus dihindari dari data tersebut adalah...',
      [
        'A. Memastikan apakah kedua data dicatat pada bulan kalender yang sama',
        'B. Menyimpulkan bahwa minum es kelapa muda merupakan penyebab utama pasien mengalami dehidrasi',
        'C. Memeriksa suhu udara rata-rata harian sepanjang bulan Juli–Agustus',
        'D. Membandingkan tren data yang sama dengan catatan tahun-tahun sebelumnya',
        'E. Menanyakan riwayat aktivitas luar ruangan pasien dehidrasi di UGD'
      ],
      1,
      'Korelasi tidak sama dengan kausalitas! Dua hal naik bersamaan (penjualan es & dehidrasi) sering dipicu VARIABEL KETIGA (musim kemarau panas)!',
      'Kenaikan penjualan es kelapa muda dan kasus dehidrasi sama-sama dipicu oleh faktor ketiga, yakni cuaca panas terik pada musim kemarau Juli–Agustus. Menyimpulkan es kelapa *menyebabkan* dehidrasi (Opsi B) adalah kekeliruan logika kausal (*false cause*).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5709',
      'Sebuah laporan menyimpulkan: "Kebijakan kerja hybrid (sebagian dari rumah) pasti menyebabkan penurunan kinerja tim proyek pemerintah karena keterlambatan penyelesaian laporan meningkat 15% saat kebijakan itu berlaku." Fakta manakah yang PALING MEMPERLEMAH klaim sebab-akibat laporan tersebut?',
      [
        'A. Sebagian pegawai menyukai kerja hybrid karena menghemat ongkos transportasi harian',
        'B. Di waktu bersamaan, aplikasi pelaporan keuangan mengalami gangguan server berulang dan belum disediakan panduan kerja daring',
        'C. Beberapa kantor swasta di luar negeri juga menerapkan kerja hybrid selama tiga hari seminggu',
        'D. Pegawai tetap memakai seragam kerja formal saat rapat video dari rumah',
        'E. Laporan tahunan instansi dicetak dengan kertas lebih sedikit dibanding tahun lalu'
      ],
      1,
      'Untuk melemahkan klaim "A menyebabkan B", cari PENYEBAB ALTERNATIF yang masuk akal dan terjadi bersamaan dengan B!',
      'Jika gangguan server aplikasi pelaporan terjadi bersamaan tanpa panduan daring yang jelas (Opsi B), keterlambatan 15% besar kemungkinan dipicu hambatan infrastruktur/SOP itu, bukan oleh skema *hybrid* itu sendiri. Ini langsung menggoyang hubungan sebab-akibat pada klaim awal.',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5710',
      'Rapat evaluasi daerah mencatat tiga kondisi: (1) Tanpa verifikasi RKA tepat waktu, proses lelang tertunda; (2) Penundaan lelang memundurkan jadwal pembangunan fisik; (3) Memasuki musim hujan, pekerjaan fisik luar ruang berisiko terhenti sementara. Jika verifikasi RKA baru rampung menjelang musim hujan, rangkaian akibat paling mungkin adalah...',
      [
        'A. Pembangunan fisik selesai lebih cepat karena pekerja menghindari terik matahari',
        'B. Proses lelang terlambat sehingga pekerjaan fisik rawan terhambat jadwal oleh datangnya musim hujan',
        'C. Verifikasi RKA otomatis dibatalkan agar anggaran langsung cair tanpa lelang',
        'D. Tidak ada pengaruh apa pun terhadap proyek fisik karena lelang berjalan otomatis',
        'E. Seluruh proyek gedung dialihkan menjadi proyek daring tanpa kontraktor'
      ],
      1,
      'Gabungkan 3 mata rantai sebab-akibat: RKA telat -> Lelang mundur -> Pekerjaan fisik bertabrakan dengan musim hujan!',
      'Menelusuri rantai kausal: keterlambatan verifikasi RKA menunda lelang (1), penundaan lelang menggeser konstruksi fisik (2), dan pertemuan jadwal fisik dengan musim hujan membuat pekerjaan rentan terhenti/terhambat (Opsi B).',
      ''
    ],

    // ==================== 3. ANALOGI INDUKTIF PARAGRAF & POLA SISTEM (5 soal) ====================
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5711',
      'Vaksinasi memperkenalkan versi lemah virus kepada tubuh dalam dosis aman agar sistem imun mengenali pola serangan dan siap memblokir infeksi asli di masa depan. Secara analogi induktif, praktik tata kelola TI pemerintah yang paling sejajar prinsip kerjanya adalah...',
      [
        'A. Menghapus seluruh data warga dari server agar tidak bisa dicuri peretas',
        'B. Melakukan simulasi serangan terkendali (penetration testing) untuk menambal celah keamanan sebelum peretas asli menyerang',
        'C. Membeli monitor berukuran lebih besar untuk meja operator pusat data',
        'D. Mengganti semua komputer kantor setiap tiga bulan tanpa mengecek sistem keamanan',
        'E. Mematikan koneksi internet seluruh instansi selamanya ketika terjadi insiden'
      ],
      1,
      'Analogi induktif kasus: ekstrak PRINSIP INTI sistem 1 ("latihan menghadapi ancaman terkendali agar kebal saat ancaman nyata"), lalu cari padanan prinsipnya!',
      'Prinsip inti vaksinasi adalah simulasi ancaman terkendali guna membangun kesiapan pertahanan sebelum serangan sesungguhnya datang. Pada keamanan TI (SPBE), hal ini setara dengan uji penetrasi (*penetration testing*) yang mensimulasikan celah secara aman agar tim siap menambalnya sebelum peretasan nyata (Opsi B).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5712',
      'Bendungan yang dikelola baik menahan kelebihan debit air pada musim hujan agar hilir tidak kebanjiran, lalu melepaskan air cadangan secara terukur saat musim kemarau agar sawah tidak kekeringan. Analogi induktif kebijakan ekonomi publik yang paling sesuai dengan mekanisme bendungan tersebut adalah...',
      [
        'A. Menghabiskan seluruh dana cadangan daerah hanya pada awal tahun anggaran',
        'B. Menyimpan surplus penerimaan saat ekonomi tumbuh tinggi dan mengucurkan stimulus perlindungan saat terjadi krisis pelambatan',
        'C. Menaikkan pajak setinggi-tingginya justru ketika daya beli warga sedang merosot',
        'D. Menolak seluruh investasi asing meskipun daerah membutuhkan lapangan kerja',
        'E. Mencetak kuitansi kosong guna menutup selisih laporan belanja rutin'
      ],
      1,
      'Cari struktur mekanisme yang identik: [Menahan surplus saat melimpah] + [Melepas penyangga saat paceklik/krisis]!',
      'Fungsi penyeimbang bendungan ("simpan saat berlebih, alirkan saat kurang") sejajar secara prinsip dengan kebijakan fiskal *counter-cyclical* pemerintah: mengakumulasi cadangan saat ekonomi ekspansif dan mengucurkan bantuan/stimulus ketika terjadi kelesuan ekonomi (Opsi B).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5713',
      'Pemerintah Daerah X menyalin mentah-mentah desain sumur resapan dangkal dari Daerah Y yang bertanah kapur berpori tinggi, padahal Daerah X berdiri di atas tanah lempung kedap air dengan muka air tanah dangkal. Mengapa analogi induktif Pemda X berisiko keliru?',
      [
        'A. Karena nama kepala daerah di Daerah X dan Daerah Y tidak sama',
        'B. Terjadi false analogy: perbedaan mendasar pada sifat daya serap tanah dan tinggi muka air mematahkan kesimpulan keberhasilan',
        'C. Karena setiap daerah wajib menggunakan warna cat dinding sumur yang berbeda',
        'D. Sumur resapan di daerah kapur umumnya berdiameter lebih kecil daripada di daerah pantai',
        'E. Desain dari daerah lain hanya boleh dipakai apabila jarak kedua daerah kurang dari 10 km'
      ],
      1,
      'Syarat sah analogi induktif: sifat yang dibandingkan harus RELEVAN dengan hasil yang diharapkan! Bila faktor penentu (jenis tanah/air) berlawanan, analogi gugur.',
      'Analogi induktif menjadi lemah (*false analogy*) ketika ada perbedaan kausal yang relevan di objek kedua. Daya serap tanah kapur vs lempung kedap air secara langsung menentukan berhasil atau gagalnya sumur resapan (Opsi B).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5714',
      'Membeli armada kendaraan dinas listrik terbaru tanpa membenahi rute layanan dan manajemen antrean membuat warga tetap menunggu lama; sama halnya seperti memasang perangkat server mutakhir di unit layanan yang masih mewajibkan fotokopi berkas berlapis secara manual. Pola induktif yang ditekankan kedua kejadian tersebut adalah...',
      [
        'A. Kendaraan listrik membutuhkan tempat pengisian daya lebih banyak daripada mobil lama',
        'B. Pembaruan teknologi/perangkat keras tidak otomatis memperbaiki kinerja layanan bila alur kerja (SOP) yang berbelit tidak ikut dibenahi',
        'C. Mesin fotokopi merupakan aset terpenting di kantor layanan terpadu',
        'D. Server modern hanya cocok digunakan pada instansi bidang perhubungan',
        'E. Pembelian perangkat baru selalu menyebabkan pemborosan anggaran tanpa pengecualian'
      ],
      1,
      'Gabungkan analogi dua kasus berbeda (armada listrik tanpa manajemen antre & server baru tanpa reformasi SOP kertas) -> temukan benang merah induktifnya!',
      'Kedua kasus berlawanan sektor (transportasi vs TI administrasi) memperlihatkan pola kausal identik: mengganti alat fisik menjadi canggih sia-sia jika hambatan inti ada pada proses bisnis/SOP yang berbelit (Opsi B).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5715',
      'Bangunan megah berlantai sepuluh yang didirikan tanpa fondasi beton dalam akan mudah retak begitu diterpa gempa kecil. Apabila ditarik analogi induktif ke tata kelola inovasi aplikasi layanan pemerintah, simpulan paling tepat adalah...',
      [
        'A. Kantor layanan pemerintah sebaiknya dibangun maksimal dua lantai saja',
        'B. Inovasi aplikasi berantarmuka indah tetapi tanpa regulasi, SOP pengaduan, dan pelatihan petugas mudah gagal saat beban warga meningkat',
        'C. Warna tampilan aplikasi pelayanan publik harus memakai tema abu-abu seperti beton',
        'D. Daerah rawan gempa tidak perlu membangun layanan publik berbasis internet',
        'E. Semakin sedikit fitur aplikasi, semakin tidak mungkin terjadi error sistem'
      ],
      1,
      'Pasangkan "Tampilan luar megah tanpa fondasi teknis -> rapuh saat diuji" ke konteks sistem layanan digital pemerintah!',
      'Fondasi bangunan analog dengan fondasi tata kelola layanan (aturan hukum, SOP respons gangguan, serta kesiapan SDM petugas), sedangkan megahnya gedung analog dengan antarmuka indah. Tanpa fondasi operasional, aplikasi rapuh ketika menerima lonjakan pengguna (Opsi B).',
      ''
    ]
  ];

  const questions = ITEMS.map(([sub, fam, id, q, options, ans, trick, explanation, img]) => ({
    id,
    examType: 'SKD_TIU',
    category: 'TIU',
    sub,
    fam,
    q,
    options,
    ans,
    scores: options.map((_, i) => (i === ans ? 5 : 0)),
    trick,
    explanation,
    level: 'HOTS',
    practice: 'GOCPNS',
    ...(img ? { img } : {})
  }));

  window.registerCPNSQuestions({ packId: 'skd_tiu_induktif_v57', bucket: 'SKD_TIU', questions });
})();
