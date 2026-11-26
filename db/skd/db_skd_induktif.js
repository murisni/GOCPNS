/* ==========================================================================
   BANK SOAL TIU VERBAL HOTS: PENALARAN INDUKTIF (GENERALISASI, KAUSALITAS, ANALOGI INDUKTIF)
   15 soal orisinal standar KepmenPANRB 321/2024. ID -X57xx agar urutan paket lama tetap stabil.
   Panjang kelima opsi diseimbangkan (anti-bias panjang) dan letak kunci tersebar merata A–E.
   ========================================================================== */
(function () {
  if (typeof window.registerCPNSQuestions !== 'function') return;

  const ITEMS = [
    // ==================== 1. GENERALISASI INDUKTIF (5 soal) ====================
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5701',
      'Evaluasi uji coba layanan izin daring menunjukkan Dinas Perizinan Kota A memangkas antrean 65%, Dinas Kependudukan Kabupaten B turun 58%, dan PTSP Kota C turun 62% setelah memakai autentikasi tunggal SSO. Simpulan induktif paling tepat berdasarkan data tersebut adalah...',
      [
        'A. Setiap instansi di Indonesia pasti bebas antrean total seratus persen segera setelah memasang autentikasi tunggal SSO',
        'B. Penerapan autentikasi tunggal SSO berpotensi besar memangkas waktu antrean pada berbagai unit layanan publik',
        'C. Dinas Perizinan Kota A merupakan unit dengan integritas dan disiplin pegawai paling tinggi dibanding kabupaten lainnya',
        'D. Tanpa integrasi sistem autentikasi tunggal SSO, seluruh loket pelayanan di Kabupaten B otomatis berhenti total melayani warga',
        'E. Pelayanan penerbitan izin usaha perkotaan membutuhkan reformasi digital lebih mendesak dibanding administrasi kependudukan'
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
        'A. Batang aluminium memiliki ketahanan panas paling tinggi di antara seluruh material konstruksi gedung bertingkat tinggi',
        'B. Seluruh benda padat nonlogam maupun logam di alam memuai minimal sebesar 1,2 milimeter ketika dipanaskan hingga 100°C',
        'C. Bahan baja tidak direkomendasikan untuk pembangunan rangka jembatan bentang panjang karena muainya paling kecil di uji lab',
        'D. Pada umumnya bahan golongan logam mengalami pemuaian panjang ketika menerima kenaikan suhu',
        'E. Hanya keempat jenis logam hasil pengujian laboratorium itulah yang mengalami pertambahan ukuran saat terkena panas tinggi'
      ],
      3,
      'Tarik benang merah seluruh sampel (tembaga, aluminium, baja, kuningan = semuanya golongan LOGAM) -> sama-sama memuai saat dipanaskan!',
      'Keempat sampel yang diuji merupakan material logam dan seluruhnya mengalami pertambahan panjang ketika dipanaskan. Maka generalisasi induktif paling tepat adalah bahwa logam pada umumnya mengalami pemuaian bila dipanaskan (Opsi D). Opsi B terlalu luas ke benda nonlogam.',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5703',
      'Empat puskesmas di Kecamatan Maju yang menerapkan rekam medis elektronik (RME) sekaligus mengirim pengingat jadwal imunisasi via SMS mencatat kenaikan kepatuhan kontrol pasien ibu-anak di atas 30% dibanding kuartal sebelumnya. Pernyataan manakah yang paling tepat sebagai generalisasi sementara?',
      [
        'A. Layanan pengingat SMS selalu jauh lebih unggul dibandingkan penggunaan aplikasi ponsel pintar di seluruh wilayah Indonesia',
        'B. Seluruh warga yang tinggal di Kecamatan Maju sudah terampil memanfaatkan teknologi informasi kesehatan tanpa kendala apa pun',
        'C. Integrasi RME dan pengingat pesan berkorelasi positif meningkatkan kepatuhan kontrol pasien',
        'D. Puskesmas di luar wilayah Kecamatan Maju dipastikan tidak mampu mencapai peningkatan imunisasi di atas sepuluh persen',
        'E. Tingkat kepatuhan jadwal kontrol ibu dan anak sepenuhnya hanya ditentukan pesan SMS tanpa keterlibatan penyuluhan tenaga medis'
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
        'A. Sampel wawancara seharusnya berjumlah minimal seribu orang warga kota agar hasilnya tidak perlu dianalisis menggunakan tabel statistik',
        'B. Pengambilan data berlangsung saat hari akhir pekan yang semestinya menjadi jadwal istirahat resmi bagi aparatur pemerintah daerah setempat',
        'C. Penilaian kinerja aplikasi pajak daerah sebaiknya lebih difokuskan pada keindahan tata warna antarmuka daripada tingkat kepuasan wajib pajak',
        'D. Laporan simpulan evaluasi belum mencantumkan nama pengembang perangkat lunak beserta tanggal peresmian portal pajak kabupaten secara rinci',
        'E. Sampel tidak representatif karena bias warga kota dan mengabaikan kelompok desa maupun non-pengguna ponsel'
      ],
      4,
      'Kualitas generalisasi induktif ditentukan oleh DUA syarat: kecukupan ukuran & KETERWAKILAN (representativitas) sampel terhadap seluruh populasi!',
      'Populasi klaim adalah "seluruh warga kabupaten", padahal sampel diambil secara bias hanya di pusat perbelanjaan modern ibu kota kabupaten pada akhir pekan. Karena warga pedesaan, lansia, dan kelompok non-digital tidak terwakili, generalisasinya cacat secara metodologi (Opsi E).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-generalisasi', 'SKD-TIU-X5705',
      'Berdasarkan uji coba di lima kelurahan perkotaan, loket terpadu keliling terbukti mempercepat waktu terbit dokumen kependudukan hingga 40%. Informasi tambahan manakah yang PALING MEMPERKUAT kesimpulan bahwa model itu layak diterapkan di seluruh wilayah provinsi?',
      [
        'A. Uji coba serupa di desa kepulauan dan pegunungan juga mempercepat terbit dokumen hingga kisaran 38–42%',
        'B. Anggaran belanja modal pengadaan kendaraan dinas operasional pemerintah provinsi tahun lalu masih menyisakan sisa lebih anggaran yang sangat besar',
        'C. Kepala dinas kependudukan tingkat provinsi secara terbuka menyampaikan piagam penghargaan dan apresiasi tinggi kepada lima lurah pelaksana uji coba',
        'D. Seluruh petugas loket terpadu keliling yang ditempatkan di lima kelurahan percontohan tersebut berasal dari rekrutmen CPNS angkatan terbaru',
        'E. Responden warga di lima kelurahan perkotaan menilai desain eksterior mobil layanan keliling terlihat jauh lebih rapi dan menarik perhatian publik'
      ],
      0,
      'Untuk memperkuat generalisasi induktif dari sampel terbatas (5 kelurahan kota) ke skala provinsi, tambahkan bukti keberhasilan dari wilayah yang BERBEDA karakteristiknya!',
      'Kelemahan argumen awal adalah sampel hanya terbatas di 5 kelurahan perkotaan. Jika model tersebut juga terbukti sukses dengan angka sebanding di desa kepulauan dan wilayah pegunungan (Opsi A), cakupan induksi menjadi luas dan representatif untuk level provinsi.',
      ''
    ],

    // ==================== 2. HUBUNGAN KAUSALITAS (5 soal) ====================
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5706',
      'Perhatikan alur kausal berantai: kenaikan tarif tol dan harga solar memicu lonjakan biaya angkut truk antarkota; naiknya ongkos logistik menaikkan harga eceran bahan pokok di pasar tradisional, sehingga daya beli rumah tangga berpendapatan tetap ikut tertekan. Jika harga solar kembali naik tajam bulan depan, akibat paling logis selanjutnya adalah...',
      [
        'A. Pengelola jalan tol otomatis menggratiskan seluruh tarif gerbang bagi angkutan penumpang dan distribusi pangan antarkota',
        'B. Pasar tradisional di berbagai kabupaten dipastikan tutup permanen dalam satu minggu pertama setelah penyesuaian tarif berlaku',
        'C. Biaya distribusi barang cenderung meningkat dan memberi tekanan lanjutan pada daya beli rumah tangga',
        'D. Pendapatan bersih seluruh pengemudi truk barang di kota besar otomatis berlipat dua akibat kenaikan tarif angkut per kilometer',
        'E. Kebutuhan bahan pokok rumah tangga harian langsung menghilang drastis karena konsumen berhenti berbelanja makanan sama sekali'
      ],
      2,
      'Ikuti mata rantai SEBAB -> AKIBAT I -> AKIBAT II secara proporsional tanpa loncatan ekstrem ("otomatis tutup / gratis")!',
      'Dalam pola multi-kausal teks: solar naik -> biaya logistik naik -> harga eceran naik -> daya beli tertekan. Bila solar kembali naik tajam, konsekuensi induktif yang paling wajar dalam rantai itu adalah kenaikan ongkos distribusi yang menekan daya beli (Opsi C).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5707',
      'Selama triwulan II, jumlah laporan peretasan akun kepegawaian ASN melonjak empat kali lipat. Investigasi tim CSIRT menemukan 88% korban menggunakan kata sandi standar tanggal lahir dan mengklik tautan formulir palsu yang dikirim nomor tidak dikenal. Faktor sebab utama lonjakan insiden tersebut adalah...',
      [
        'A. Kecepatan akses jaringan internet di lingkungan kantor pemerintah yang bekerja terlalu tinggi selama jam layanan sibuk berlangsung',
        'B. Jumlah pegawai baru hasil pengadaan ASN yang dilantik pada triwulan kedua tahun ini lebih banyak dibanding tahun anggaran lalu',
        'C. Hari libur nasional dan cuti bersama yang jatuh pada triwulan kedua berjumlah jauh lebih sedikit dibanding triwulan pertama tahun berjalan',
        'D. Lemahnya keamanan kata sandi akun dan rendahnya kewaspadaan terhadap jebakan tautan phishing',
        'E. Skema warna tampilan halaman muka portal kepegawaian baru saja diperbarui oleh tim pengelola sistem aplikasi pusat beberapa hari lalu'
      ],
      3,
      'Pola AKIBAT -> SEBAB: telusuri temuan faktual 88% korban untuk merumuskan akar penyebab yang langsung menjelaskan akibatnya!',
      'Data CSIRT menghubungkan langsung lonjakan peretasan (akibat) dengan dua penyebab dominan pada 88% korban: sandi lemah (tanggal lahir) serta klik tautan palsu (*phishing*). Oleh karena itu akar penyebab paling kuat adalah lemahnya keamanan sandi & kewaspadaan *phishing* (Opsi D).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5708',
      'Catatan statistik kota pesisir menunjukkan bahwa setiap bulan Juli–Agustus terjadi peningkatan bersamaan antara angka penjualan es kelapa muda dan jumlah kasus dehidrasi di UGD rumah sakit. Kesalahan penalaran kausal yang harus dihindari dari data tersebut adalah...',
      [
        'A. Menyimpulkan minum es kelapa muda merupakan penyebab utama tingginya pasien dehidrasi di UGD',
        'B. Memeriksa kembali kesesuaian bulan kalender pencatatan antara laporan penjual minuman segar dan catatan rekam medis rumah sakit daerah',
        'C. Mengumpulkan data suhu udara rata-rata harian serta kelembapan pesisir sepanjang musim kemarau bulan Juli hingga Agustus tiap tahunnya',
        'D. Membandingkan pola musiman dua indikator tersebut dengan rangkaian catatan arsip statistik milik dinas kesehatan selama lima tahun sebelumnya',
        'E. Menanyakan riwayat lama aktivitas fisik di luar ruangan kepada para pasien yang datang menjalani perawatan akibat dehidrasi di rumah sakit'
      ],
      0,
      'Korelasi tidak sama dengan kausalitas! Dua hal naik bersamaan (penjualan es & dehidrasi) sering dipicu VARIABEL KETIGA (musim kemarau panas)!',
      'Kenaikan penjualan es kelapa muda dan kasus dehidrasi sama-sama dipicu oleh faktor ketiga, yakni cuaca panas terik pada musim kemarau Juli–Agustus. Menyimpulkan es kelapa *menyebabkan* dehidrasi (Opsi A) adalah kekeliruan logika kausal (*false cause*).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5709',
      'Sebuah laporan menyimpulkan: "Kebijakan kerja hybrid (sebagian dari rumah) pasti menyebabkan penurunan kinerja tim proyek pemerintah karena keterlambatan penyelesaian laporan meningkat 15% saat kebijakan itu berlaku." Fakta manakah yang PALING MEMPERLEMAH klaim sebab-akibat laporan tersebut?',
      [
        'A. Sebagian besar pegawai menyatakan menyukai skema kerja hybrid karena menghemat biaya transportasi dan waktu tempuh harian ke kantor',
        'B. Beberapa perusahaan konsultan swasta di luar negeri juga menerapkan kerja hybrid tiga hari kerja jarak jauh dan dua hari di kantor pusat',
        'C. Selama periode sama, server pelaporan error berulang dan panduan daring belum siap',
        'D. Pegawai tetap mengenakan kemeja kerja formal resmi setiap kali mengikuti rapat koordinasi melalui konferensi video dari rumah masing-masing',
        'E. Jumlah rim kertas pencetakan draf laporan tahunan seluruh instansi berkurang signifikan dibandingkan tahun sebelumnya tanpa mengubah tenggat'
      ],
      2,
      'Untuk melemahkan klaim "A menyebabkan B", cari PENYEBAB ALTERNATIF yang masuk akal dan terjadi bersamaan dengan B!',
      'Jika gangguan server aplikasi pelaporan terjadi bersamaan tanpa panduan daring yang jelas (Opsi C), keterlambatan 15% besar kemungkinan dipicu hambatan infrastruktur/SOP itu, bukan oleh skema *hybrid* itu sendiri. Ini langsung menggoyang hubungan sebab-akibat pada klaim awal.',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-kausalitas', 'SKD-TIU-X5710',
      'Rapat evaluasi daerah mencatat tiga kondisi: (1) Tanpa verifikasi RKA tepat waktu, proses lelang tertunda; (2) Penundaan lelang memundurkan jadwal pembangunan fisik; (3) Memasuki musim hujan, pekerjaan fisik luar ruang berisiko terhenti sementara. Jika verifikasi RKA baru rampung menjelang musim hujan, rangkaian akibat paling mungkin adalah...',
      [
        'A. Seluruh konstruksi fisik gedung dapat selesai jauh lebih awal karena para tukang terhindar dari terik matahari kemarau yang menyengat',
        'B. Proses verifikasi dokumen anggaran otomatis dibatalkan agar uang proyek dapat dicairkan langsung secara tunai tanpa melalui proses tender',
        'C. Rencana jadwal pelaksanaan kegiatan lelang sama sekali tidak berpengaruh terhadap waktu dimulainya pengerjaan pondasi fisik di lokasi',
        'D. Seluruh proyek jalan raya daerah otomatis dialihkan menjadi pekerjaan administrasi daring di dalam ruangan tanpa kontraktor pelaksana',
        'E. Proses lelang terlambat sehingga pekerjaan fisik rawan terhambat datangnya musim hujan'
      ],
      4,
      'Gabungkan 3 mata rantai sebab-akibat: RKA telat -> Lelang mundur -> Pekerjaan fisik bertabrakan dengan musim hujan!',
      'Menelusuri rantai kausal: keterlambatan verifikasi RKA menunda lelang (1), penundaan lelang menggeser konstruksi fisik (2), dan pertemuan jadwal fisik dengan musim hujan membuat pekerjaan rentan terhenti/terhambat (Opsi E).',
      ''
    ],

    // ==================== 3. ANALOGI INDUKTIF PARAGRAF & POLA SISTEM (5 soal) ====================
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5711',
      'Vaksinasi memperkenalkan versi lemah virus kepada tubuh dalam dosis aman agar sistem imun mengenali pola serangan dan siap memblokir infeksi asli di masa depan. Secara analogi induktif, praktik tata kelola TI pemerintah yang paling sejajar prinsip kerjanya adalah...',
      [
        'A. Menghapus secara permanen seluruh basis data kependudukan warga dari server agar tidak memiliki risiko dicuri peretas internet',
        'B. Membeli monitor komputer beresolusi ekstra lebar dan kursi ergonomis baru untuk seluruh ruang operator pusat data kementerian pusat',
        'C. Melakukan uji serangan simulasi terkendali (penetration testing) guna menambal celah keamanan sebelum peretasan nyata datang',
        'D. Mengganti seluruh unit komputer desktop kantor setiap tiga bulan dengan seri terbaru tanpa memeriksa konfigurasi sistem keamanan',
        'E. Mematikan sambungan jaringan internet seluruh kantor pelayanan publik selamanya sesudah satu insiden gangguan akses ditemukan petugas'
      ],
      2,
      'Analogi induktif kasus: ekstrak PRINSIP INTI sistem 1 ("latihan menghadapi ancaman terkendali agar kebal saat ancaman nyata"), lalu cari padanan prinsipnya!',
      'Prinsip inti vaksinasi adalah simulasi ancaman terkendali guna membangun kesiapan pertahanan sebelum serangan sesungguhnya datang. Pada keamanan TI (SPBE), hal ini setara dengan uji penetrasi (*penetration testing*) yang mensimulasikan celah secara aman agar tim siap menambalnya sebelum peretasan nyata (Opsi C).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5712',
      'Bendungan yang dikelola baik menahan kelebihan debit air pada musim hujan agar hilir tidak kebanjiran, lalu melepaskan air cadangan secara terukur saat musim kemarau agar sawah tidak kekeringan. Analogi induktif kebijakan ekonomi publik yang paling sesuai dengan mekanisme bendungan tersebut adalah...',
      [
        'A. Menghabiskan seluruh pagu dana cadangan kas daerah untuk proyek seremonial pada minggu pertama awal tahun anggaran berjalan berlangsung',
        'B. Menaikkan seluruh tarif pajak konsumsi bahan pokok setinggi-tingginya justru pada saat daya beli rumah tangga miskin sedang merosot tajam',
        'C. Menolak seluruh rencana investasi padat karya meskipun daerah menghadapi lonjakan angka pengangguran terbuka di kalangan lulusan muda',
        'D. Menyimpan surplus penerimaan saat ekonomi ekspansif dan mengucurkan stimulus pengaman ketika krisis melanda',
        'E. Membuat kuitansi pencatatan pengeluaran kosong guna menutup selisih belanja operasional kantor yang terlanjur melebihi pagu triwulan'
      ],
      3,
      'Cari struktur mekanisme yang identik: [Menahan surplus saat melimpah] + [Melepas penyangga saat paceklik/krisis]!',
      'Fungsi penyeimbang bendungan ("simpan saat berlebih, alirkan saat kurang") sejajar secara prinsip dengan kebijakan fiskal *counter-cyclical* pemerintah: mengakumulasi cadangan saat ekonomi ekspansif dan mengucurkan bantuan/stimulus ketika terjadi kelesuan ekonomi (Opsi D).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5713',
      'Pemerintah Daerah X menyalin mentah-mentah desain sumur resapan dangkal dari Daerah Y yang bertanah kapur berpori tinggi, padahal Daerah X berdiri di atas tanah lempung kedap air dengan muka air tanah dangkal. Mengapa analogi induktif Pemda X berisiko keliru?',
      [
        'A. Karena latar belakang profesi kepala daerah di Daerah X dan Daerah Y berasal dari perguruan tinggi serta masa jabatan yang berbeda',
        'B. Karena setiap daerah otonom menurut aturan tata kota wajib mengecat dinding bibir sumur resapan memakai warna ciri khas daerah masing-masing',
        'C. Karena ukuran diameter rata-rata sumur resapan wilayah kapur pedalaman selalu sedikit lebih kecil daripada wilayah pantai selatan Jawa',
        'D. Karena model desain percontohan dari kabupaten lain hanya boleh direplikasi apabila jarak perbatasan kedua wilayah di bawah sepuluh kilometer',
        'E. Terjadi false analogy akibat perbedaan sifat daya serap tanah serta muka air tanah mematahkan kesamaan hasil'
      ],
      4,
      'Syarat sah analogi induktif: sifat yang dibandingkan harus RELEVAN dengan hasil yang diharapkan! Bila faktor penentu (jenis tanah/air) berlawanan, analogi gugur.',
      'Analogi induktif menjadi lemah (*false analogy*) ketika ada perbedaan kausal yang relevan di objek kedua. Daya serap tanah kapur vs lempung kedap air secara langsung menentukan berhasil atau gagalnya sumur resapan (Opsi E).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5714',
      'Membeli armada kendaraan dinas listrik terbaru tanpa membenahi rute layanan dan manajemen antrean membuat warga tetap menunggu lama; sama halnya seperti memasang perangkat server mutakhir di unit layanan yang masih mewajibkan fotokopi berkas berlapis secara manual. Pola induktif yang ditekankan kedua kejadian tersebut adalah...',
      [
        'A. Pembaruan perangkat keras tanpa membenahi alur kerja SOP tidak otomatis memperbaiki kinerja layanan',
        'B. Pengadaan armada kendaraan dinas berbasis listrik memerlukan infrastruktur stasiun pengisian daya jauh lebih banyak daripada mobil konvensional',
        'C. Mesin fotokopi berkecepatan tinggi tetap merupakan aset utama paling menentukan di seluruh meja pendaftaran kantor pelayanan terpadu',
        'D. Server jaringan berkapasitas besar hanya efektif dimanfaatkan oleh kementerian bidang perhubungan darat dan dinas pekerjaan umum daerah',
        'E. Setiap pembelian perangkat kerja teknologi baru di lingkungan instansi pemerintah selalu menyebabkan pemborosan APBN tanpa ada manfaatnya'
      ],
      0,
      'Gabungkan analogi dua kasus berbeda (armada listrik tanpa manajemen antre & server baru tanpa reformasi SOP kertas) -> temukan benang merah induktifnya!',
      'Kedua kasus berlawanan sektor (transportasi vs TI administrasi) memperlihatkan pola kausal identik: mengganti alat fisik menjadi canggih sia-sia jika hambatan inti ada pada proses bisnis/SOP yang berbelit (Opsi A).',
      ''
    ],
    [
      'Verbal - Penalaran Induktif', 'ind57-analogi-induktif', 'SKD-TIU-X5715',
      'Bangunan megah berlantai sepuluh yang didirikan tanpa fondasi beton dalam akan mudah retak begitu diterpa gempa kecil. Apabila ditarik analogi induktif ke tata kelola inovasi aplikasi layanan pemerintah, simpulan paling tepat adalah...',
      [
        'A. Gedung kantor layanan terpadu milik pemerintah sebaiknya selalu dibangun maksimal setinggi dua lantai saja di daerah rawan bencana',
        'B. Aplikasi bertampilan indah namun miskin aturan, SOP aduan, serta kesiapan SDM mudah gagal saat beban melonjak',
        'C. Skema warna antarmuka aplikasi pelayanan publik daring hendaknya memilih nuansa netral abu-abu kokoh menyerupai permukaan beton bangunan',
        'D. Pemerintah daerah di wilayah rawan guncangan tektonik tidak perlu mengembangkan portal pelayanan administrasi masyarakat berbasis daring',
        'E. Semakin sedikit jumlah fitur pelayanan yang disediakan di portal pemerintah maka semakin mustahil terjadi gangguan teknis maupun keluhan warga'
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
