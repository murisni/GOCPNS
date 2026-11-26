/* ==========================================================================
   GOCPNS v59 — Figural SVG Option Upgrades & Legacy Anti-Bias Rebalancing
   Tujuan:
   1. Mengonversi 4 soal Figural legacy (0032, 0034, X7421, X7422) yang masih
      memakai opsi teks deskriptif menjadi 5 opsi gambar IMG:<svg> sejati.
   2. Menormalkan panjang opsi pada bank soal legacy SKD_TWK & SKD_TKP agar
      kunci jawaban (atau skor 5) tidak bisa ditebak dari panjang kalimatnya
      (rasio "opsi terpanjang == kunci" ditekan dari 40%/48% menjadi <= 20%),
      tetap alami, akurat, dan bebas filler buatan.
   ========================================================================== */
(function () {
  'use strict';
  const DB = window.MASTER_DB;
  if (!DB) return;

  function boxSvg(body, vb = '0 0 88 88', w = 84, h = 84) {
    return 'IMG:<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '" width="' + w + '" height="' + h + '">' + body + '</svg>';
  }

  function fig0032(dots, dir) {
    const pts = {
      tl: [24, 24], tr: [64, 24], br: [64, 64], bl: [24, 64], c: [44, 44]
    };
    const dotSvg = dots.map(k => '<circle cx="' + pts[k][0] + '" cy="' + pts[k][1] + '" r="7" fill="#1e40af"/>').join('');
    const needles = {
      up: '<line x1="44" y1="44" x2="44" y2="16" stroke="#dc2626" stroke-width="3.5" stroke-linecap="round"/><polygon points="44,9 38.5,19 49.5,19" fill="#dc2626"/>',
      right: '<line x1="44" y1="44" x2="72" y2="44" stroke="#dc2626" stroke-width="3.5" stroke-linecap="round"/><polygon points="79,44 69,38.5 69,49.5" fill="#dc2626"/>',
      down: '<line x1="44" y1="44" x2="44" y2="72" stroke="#dc2626" stroke-width="3.5" stroke-linecap="round"/><polygon points="44,79 38.5,69 49.5,69" fill="#dc2626"/>',
      left: '<line x1="44" y1="44" x2="16" y2="44" stroke="#dc2626" stroke-width="3.5" stroke-linecap="round"/><polygon points="9,44 19,38.5 19,49.5" fill="#dc2626"/>'
    };
    return boxSvg('<rect x="4" y="4" width="80" height="80" fill="#fff" stroke="#334155" stroke-width="2" rx="6"/>' + dotSvg + needles[dir] + '<circle cx="44" cy="44" r="2.5" fill="#fff" stroke="#dc2626" stroke-width="1"/>');
  }

  function fig0034(outer, inner) {
    return boxSvg('<rect x="4" y="4" width="80" height="80" fill="#fff" stroke="#334155" stroke-width="2" rx="6"/>' + outer + inner);
  }

  function figArrow(deg, fill) {
    const tr = deg ? ' transform="rotate(' + deg + ' 38 38)"' : '';
    return boxSvg(
      '<rect x="2" y="2" width="72" height="72" rx="8" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>' +
      '<path d="M38 19 52 38H43V57H33V38H24Z" fill="' + fill + '" stroke="#102758" stroke-width="2" stroke-linejoin="round"' + tr + '/>',
      '0 0 76 76', 76, 76
    );
  }

  function figDots(cx1, cy1, cx2, cy2) {
    return boxSvg(
      '<rect x="14" y="14" width="60" height="60" fill="#fff" stroke="#102758" stroke-width="2"/>' +
      '<circle cx="' + cx1 + '" cy="' + cy1 + '" r="6" fill="#102758"/>' +
      '<circle cx="' + cx2 + '" cy="' + cy2 + '" r="5" fill="#f8bd35" stroke="#102758" stroke-width="1.5"/>'
    );
  }

  const TIU_FIGURAL_PATCH = {
    'SKD-TIU-0032': [
      'A. ' + fig0032(['tl', 'tr', 'br', 'bl', 'c'], 'up'),
      'B. ' + fig0032(['tl', 'tr', 'br', 'bl'], 'down'),
      'C. ' + fig0032(['tl', 'tr', 'br', 'bl', 'c'], 'right'),
      'D. ' + fig0032(['tl', 'tr', 'br'], 'up'),
      'E. ' + fig0032(['tl', 'tr', 'br', 'bl', 'c'], 'left')
    ],
    'SKD-TIU-0034': [
      'A. ' + fig0034('<polygon points="44,14 74,44 44,74 14,44" fill="#ffffff" stroke="#1e293b" stroke-width="2.5"/>', '<rect x="33" y="33" width="22" height="22" fill="#1e293b"/>'),
      'B. ' + fig0034('<polygon points="44,14 74,44 44,74 14,44" fill="#1e293b"/>', '<rect x="33" y="33" width="22" height="22" fill="#ffffff"/>'),
      'C. ' + fig0034('<rect x="18" y="18" width="52" height="52" fill="#ffffff" stroke="#1e293b" stroke-width="2.5"/>', '<polygon points="44,29 59,44 44,59 29,44" fill="#1e293b"/>'),
      'D. ' + fig0034('<circle cx="44" cy="44" r="28" fill="#ffffff" stroke="#1e293b" stroke-width="2.5"/>', '<rect x="33" y="33" width="22" height="22" fill="#1e293b"/>'),
      'E. ' + fig0034('<polygon points="44,14 74,44 44,74 14,44" fill="#ffffff" stroke="#1e293b" stroke-width="2.5"/>', '<polygon points="44,30 57,54 31,54" fill="#1e293b"/>')
    ],
    'SKD-TIU-X7421': [
      figArrow(90, '#102758'),
      figArrow(270, '#fff'),
      figArrow(180, '#fff'),
      figArrow(90, '#fff'),
      figArrow(0, '#102758')
    ],
    'SKD-TIU-X7422': [
      figDots(14, 74, 44, 74),
      figDots(74, 14, 14, 44),
      figDots(14, 14, 44, 74),
      figDots(74, 74, 44, 14),
      figDots(14, 74, 74, 44)
    ]
  };

  const TWK_PATCH = {
    'SKD-TWK-0003': { a: 2, o: [
      'A. Chauvinisme yang menempatkan kejayaan negara sebagai hukum tertinggi dalam diplomasi',
      'B. Kosmopolitanisme yang menghapus batas-batas kedaulatan negara bangsa demi warga dunia',
      'C. Nasionalisme humanis berdasarkan kemanusiaan yang adil dan perdamaian dunia',
      'D. Etnosentrisme yang menjadikan budaya nasional sebagai tolok ukur penilaian budaya bangsa lain',
      'E. Isolasionisme politik untuk menjaga kemurnian ideologi negara dari pengaruh blok kekuatan besar'
    ] },
    'SKD-TWK-0026': { a: 2, o: [
      'A. Apotik dekat rumah sakit itu menyediakan obat generik dengan kwalitas terjamin.',
      'B. Dokter spesialis itu sedang menganalisa gejala pasien sebelum menulis kwitansi pemeriksaan.',
      'C. Para atlet nasional berlatih intensif menghadapi kejuaraan antarnegara bulan depan.',
      'D. Jadual keberangkatan kereta api eksekutif mengalami perubahan akibat cuaca ekstrim.',
      'E. Pemerintah menghimbau masyarakat agar merubah pola konsumsi energi fosil ke energi terbarukan.'
    ] },
    'SKD-TWK-0027': { a: 0, o: [
      'A. Dr. Andi Pratama, S.H., M.H. dilantik menjadi staf ahli bidang regulasi.',
      'B. Dr. Andi Pratama S.H., M.Hum. dilantik menjadi staf ahli bidang regulasi.',
      'C. DR. Andi Pratama, SH., MH. dilantik menjadi staf ahli bidang regulasi.',
      'D. Dr, Andi Pratama, S.H, M.H, dilantik menjadi staf ahli bidang regulasi.',
      'E. Dr. Andi Pratama, S.H, M.H. dilantik menjadi staf ahli bidang regulasi.'
    ] },
    'SKD-TWK-0032': { a: 1, o: [
      'A. Dapat dipercaya oleh seluruh rakyat',
      'B. Dapat dipertanggungjawabkan',
      'C. Dapat dibatalkan',
      'D. Dapat diperbaiki',
      'E. Dapat dinegosiasikan'
    ] },
    'SKD-TWK-0215': { a: 3, o: [
      'A. Lembaga tertinggi negara pemegang kedaulatan rakyat sepenuhnya',
      'B. Lembaga di bawah Presiden',
      'C. Badan penasihat Presiden',
      'D. Lembaga negara yang setara dengan lembaga lain',
      'E. Lembaga yudikatif tertinggi'
    ] },
    'SKD-TWK-N0005': { a: 3, o: [
      'A. Kepala banteng sebagai lambang kedaulatan rakyat',
      'B. Rantai emas sebagai lambang kemanusiaan',
      'C. Padi dan kapas sebagai lambang keadilan sosial',
      'D. Pohon beringin sebagai lambang persatuan',
      'E. Bintang emas sebagai lambang ketuhanan'
    ] },
    'SKD-TWK-X8057': { a: 3, o: [
      'A. Membatasi ekspor produk jadi karya usaha mikro dalam negeri',
      'B. Menyerahkan seluruh keuntungan pengelolaan sumber daya alam kepada perusahaan asing',
      'C. Menghapus kewajiban menjaga kelestarian lingkungan di sekitar kawasan industri',
      'D. Menciptakan nilai tambah industri dan kemandirian ekonomi',
      'E. Menghentikan seluruh hubungan dagang Indonesia dengan negara mitra'
    ] },
    'SKD-TWK-X8068': { a: 2, o: [
      'A. Memperoleh informasi kejelasan identitas pengendali dan tujuan pemrosesan data',
      'B. Mengakhiri pemrosesan dan menarik kembali persetujuan pemrosesan data',
      'C. Menghapus catatan riwayat hukum pidana sah tanpa putusan',
      'D. Menggugat dan menerima ganti rugi atas pelanggaran pemrosesan data pribadinya',
      'E. Melengkapi, memperbarui, atau memperbaiki kesalahan data pribadi dirinya'
    ] },
    'SKD-TWK-0025': { a: 1, o: [
      'A. Pendidikan dasar, kesehatan masyarakat, dan pekerjaan umum daerah',
      'B. Politik luar negeri, pertahanan, keamanan, yustisi, moneter, agama',
      'C. Pariwisata daerah, perikanan tangkap lokal, dan pengelolaan pasar tradisional',
      'D. Perhubungan darat antarkabupaten, tata ruang wilayah provinsi, dan kebudayaan lokal',
      'E. Pertanian pangan, koperasi usaha kecil menengah, dan ketenagakerjaan daerah'
    ] },
    'SKD-TWK-0047': { a: 0, o: [
      'A. 12 Tahun 2011 tentang Peraturan Perundang-undangan',
      'B. 24 Tahun 2009 tentang Bendera, Bahasa, Lambang Negara',
      'C. 5 Tahun 2014 tentang Aparatur Sipil Negara',
      'D. 23 Tahun 2014 tentang Pemerintahan Daerah',
      'E. 3 Tahun 2002 tentang Pertahanan Negara'
    ] },
    'SKD-TWK-X3803': { a: 3, o: [
      'A. membagi bantuan sama rata kepada semua warga tanpa melihat tingkat kebutuhan mereka',
      'B. mendahulukan warga yang memiliki hubungan baik dengan aparat pelaksana program itu',
      'C. memberikan bantuan hanya kepada warga yang memilih pemimpin daerah saat pemilu',
      'D. menyalurkan bantuan sesuai data kebutuhan yang terverifikasi',
      'E. menyalurkan bantuan kepada warga yang paling dahulu mendaftar tanpa pemeriksaan data'
    ] },
    'SKD-TWK-X8028': { a: 1, o: [
      'A. Berhak memberhentikan Presiden sewaktu-waktu tanpa putusan Mahkamah Konstitusi',
      'B. Sejajar dengan lembaga negara lain sesuai UUD',
      'C. Dihapus dan digantikan fungsinya oleh Dewan Perwakilan Daerah',
      'D. Mengambil alih fungsi pembentukan undang-undang dari DPR',
      'E. Tetap sebagai lembaga tertinggi negara yang membawahi Presiden dan MA'
    ] },
    'SKD-TWK-X8052': { a: 2, o: [
      'A. Merasa bangga terhadap warisan budaya daerah dan bahasa persatuan',
      'B. Mengkritisi kebijakan publik secara konstruktif demi kemajuan negara',
      'C. Cinta tanah air berlebihan dan memandang rendah bangsa lain',
      'D. Mempelajari teknologi dari negara maju untuk diterapkan di Indonesia',
      'E. Mendukung atlet nasional saat bertanding dengan tetap menjunjung sportivitas'
    ] },
    'SKD-TWK-X8073': { a: 1, o: [
      'A. Upaya menggantikan fungsi TNI dalam operasi militer',
      'B. Bela negara di bidang lingkungan dan keberlanjutan',
      'C. Aktivitas sosial yang tidak berkaitan dengan ketahanan nasional',
      'D. Kewenangan eksklusif Kementerian Pertahanan saja',
      'E. Pelanggaran terhadap efisiensi anggaran pengadaan plastik kantor'
    ] },
    'SKD-TWK-0002': { a: 1, o: [
      'A. Mengutamakan penempatan pegawai putra daerah di seluruh jabatan strategis kementerian pusat',
      'B. Menyatukan keberagaman suku menjadi satu visi pengabdian nasional',
      'C. Menghapus penggunaan bahasa daerah dalam percakapan sehari-hari di lingkungan keluarga agar bahasa Indonesia semakin dominan',
      'D. Menyeragamkan seluruh tradisi adat istiadat di Indonesia agar tidak terjadi konflik horizontal antarwilayah',
      'E. Membentuk organisasi profesi berdasarkan kesamaan asal daerah untuk memperkuat solidaritas internal instansi'
    ] },
    'SKD-TWK-0192': { a: 0, o: [
      'A. Edukasi, pencegahan, dan penindakan',
      'B. Penindakan, pembinaan, dan rehabilitasi',
      'C. Pengawasan, penyidikan, dan pemidanaan',
      'D. Pencegahan, pengampunan, dan penindakan',
      'E. Sosialisasi, mediasi, dan restitusi'
    ] },
    'SKD-TWK-N0015': { a: 4, o: [
      'A. Presiden bersama DPR',
      'B. Mahkamah Konstitusi',
      'C. Sekurang-kurangnya dua pertiga anggota DPR',
      'D. Seluruh gubernur',
      'E. Minimal sepertiga anggota MPR'
    ] },
    'SKD-TWK-N0018': { a: 2, o: [
      'A. Laut teritorial',
      'B. Zona tambahan',
      'C. Zona Ekonomi Eksklusif',
      'D. Laut lepas internasional',
      'E. Perairan pedalaman RI'
    ] },
    'SKD-TWK-N0118': { a: 2, o: [
      'A. Kebangsaan, internasionalisme, mufakat, kesejahteraan sosial, dan ketuhanan',
      'B. Persatuan, kekeluargaan, keseimbangan lahir batin, musyawarah, dan keadilan rakyat',
      'C. Peri kebangsaan, kemanusiaan, ketuhanan, kerakyatan, kesejahteraan',
      'D. Sosio-nasionalisme, sosio-demokrasi, dan ketuhanan yang berkebudayaan',
      'E. Gotong royong sebagai satu-satunya asas kehidupan bernegara'
    ] },
    'SKD-TWK-N0124': { a: 2, o: [
      'A. Seluruh perairan antarpulau menjadi wilayah kedaulatan penuh Indonesia',
      'B. Indonesia otomatis memiliki ZEE 200 mil di seluruh perairan',
      'C. Laut antarpulau dianggap laut bebas terpisah',
      'D. Kapal asing dilarang melintas di seluruh perairan Nusantara',
      'E. Batas wilayah laut dijadikan satu kesatuan wilayah negara'
    ] },
    'SKD-TWK-X0012': { a: 4, o: [
      'A. Persatuan, Kekeluargaan, Keseimbangan Lahir Batin, Musyawarah, dan Keadilan Rakyat',
      'B. Kebangsaan, Internasionalisme, Mufakat, Kesejahteraan Sosial, dan Ketuhanan',
      'C. Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, dan Keadilan Sosial',
      'D. Nasionalisme, Demokrasi, Sosialisme, Kemandirian, dan Keadilan',
      'E. Peri Kebangsaan, Kemanusiaan, Ketuhanan, Kerakyatan, Kesejahteraan'
    ] },
    'SKD-TWK-X0014': { a: 0, o: [
      'A. Disepakati bersama pendiri bangsa sebagai dasar negara',
      'B. Dibuat oleh pemerintah kolonial untuk menyatukan wilayah',
      'C. Ditetapkan dalam perjanjian internasional',
      'D. Merupakan pidato salah satu tokoh yang dipaksakan kepada rakyat',
      'E. Hanya berlaku dalam bidang hukum pidana'
    ] },
    'SKD-TWK-X0016': { a: 3, o: [
      'A. Dasar negara',
      'B. Perjanjian luhur',
      'C. Sumber hukum tertulis formal',
      'D. Pandangan hidup bangsa',
      'E. Ideologi tertutup'
    ] },
    'SKD-TWK-X0218': { a: 1, o: [
      'A. 1 (Ketuhanan Yang Maha Esa dan takwa)',
      'B. 2 (Kemanusiaan adil dan beradab)',
      'C. 3 (Persatuan Indonesia)',
      'D. 4 (Kerakyatan)',
      'E. 5 (Keadilan sosial)'
    ] },
    'SKD-TWK-X0220': { a: 4, o: [
      'A. Kepala negara bagian',
      'B. Pimpinan DPRD provinsi',
      'C. Hakim sengketa daerah',
      'D. Penguasa tunggal seluruh aset daerah',
      'E. Wakil Pemerintah Pusat di daerah'
    ] },
    'SKD-TWK-X0307': { a: 2, o: [
      'A. mendahulukan keluarga dalam pelayanan',
      'B. tidak peduli pada isu nasional karena bukan tugasnya',
      'C. memakai produk lokal dan melayani warga tanpa diskriminasi',
      'D. menolak seluruh produk luar negeri',
      'E. menyebarkan kabar keberhasilan daerah dengan membesar-besarkan data'
    ] },
    'SKD-TWK-0072': { a: 0, o: [
      'A. Otonomi daerah serta pusat–daerah',
      'B. Pertahanan negara',
      'C. Pengesahan perjanjian internasional',
      'D. Pemberian amnesti dan abolisi',
      'E. Pengangkatan duta besar'
    ] },
    'SKD-TWK-N0017': { a: 0, o: [
      'A. Paling jauh 12 mil laut',
      'B. 3 mil laut dari garis pantai',
      'C. 24 mil laut dari garis pangkal',
      'D. 200 mil laut dari garis pangkal',
      'E. 350 mil laut dari garis pangkal'
    ] },
    'SKD-TWK-X0037': { a: 1, o: [
      'A. Lima orang oleh DPR dan empat orang oleh Presiden',
      'B. Tiga oleh MA, tiga oleh DPR, dan tiga oleh Presiden',
      'C. Tiga orang oleh MPR, tiga orang oleh DPD, dan tiga orang oleh Presiden',
      'D. Seluruhnya oleh Komisi Yudisial',
      'E. Empat orang oleh MA dan lima orang oleh DPR'
    ] },
    'SKD-TWK-X0064': { a: 3, o: [
      'A. Didirikan tahun 1830 dan dibubarkan 1901',
      'B. Didirikan tahun 1799 dan dibubarkan 1945',
      'C. Didirikan Inggris untuk menguasai Jawa',
      'D. Berdiri tahun 1602 dan bubar akhir 1799',
      'E. Pelaksana sistem Politik Etis'
    ] },
    'SKD-TWK-X0304': { a: 1, o: [
      'A. satu agama, satu suku, dan satu adat',
      'B. satu tanah air, bangsa, dan bahasa',
      'C. pembentukan negara serikat',
      'D. kemerdekaan Indonesia pada tahun berikutnya',
      'E. penghapusan bahasa daerah'
    ] },
    'SKD-TWK-X8006': { a: 0, o: [
      'A. Sila ke-5 karena tidak menjauhi pemborosan dan pamer',
      'B. Sila ke-2 karena tidak membagikan hartanya secara langsung',
      'C. Sila ke-3 karena mengimpor barang bermerek luar negeri',
      'D. Sila ke-4 karena tidak bermusyawarah dengan warga sekitar',
      'E. Sila ke-1 karena tidak bersyukur secara tertutup'
    ] },
    'SKD-TWK-X8044': { a: 0, o: [
      'A. Menyatukan akses pasar nasional tanpa menghapus identitas budaya daerah',
      'B. Melarang perajin daerah memasarkan motifnya di luar provinsi asal',
      'C. Membatasi penjualan hanya untuk motif yang sudah populer di kota besar',
      'D. Menetapkan tarif lebih mahal bagi produk daerah terpencil agar tampak eksklusif',
      'E. Menyeragamkan seluruh motif daerah menjadi satu nama nasional yang seragam'
    ] },
    'SKD-TWK-X8083': { a: 1, o: [
      'A. Meminta imbalan kecil untuk mempercepat penerbitan dokumen resmi',
      'B. Mengelola BMN secara tertib, melapor capaian sesuai fakta, dan menolak suap',
      'C. Menunda penyerahan laporan kegiatan hingga rekan lain selesai agar nilainya seragam',
      'D. Menutup-nutupi kekurangan anggaran di laporan akhir tahun demi menjaga citra unit',
      'E. Menggunakan mobil dinas untuk perjalanan liburan keluarga di akhir pekan asalkan bahan bakarnya dibeli sendiri'
    ] },
    'SKD-TWK-N0127': { a: 2, o: [
      'A. Pendidikan, kesehatan, pekerjaan umum, perumahan rakyat, dan sosial',
      'B. Pariwisata, perikanan, pertanian, kehutanan, serta perdagangan dan perindustrian',
      'C. Politik luar negeri, pertahanan, keamanan, yustisi, moneter, dan agama',
      'D. Pangan, tenaga kerja, lingkungan hidup, kependudukan, dan pemberdayaan perempuan',
      'E. Penataan ruang, ketenteraman ketertiban umum, linmas, dan transmigrasi daerah'
    ] },
    'SKD-TWK-N0144': { a: 4, o: [
      'A. Percakapan pribadi di lingkungan keluarga',
      'B. Seluruh nama merek dagang asing',
      'C. Karya sastra dalam bahasa daerah',
      'D. Penerbitan karya ilmiah berbahasa asing',
      'E. Peraturan dan dokumen resmi negara'
    ] },
    'SKD-TWK-X0089': { a: 3, o: [
      'A. 7 hari kalender',
      'B. 14 hari kalender',
      'C. 60 hari kerja',
      'D. 30 hari kerja',
      'E. 1 tahun'
    ] },
    'SKD-TWK-X7402': { a: 4, o: [
      'Membagikan nama dan nomor pribadi pengirim pesan',
      'Meneruskan pesan dengan catatan bahwa sumbernya belum pasti',
      'Membuat jalur sendiri berdasarkan jarak terpendek',
      'Menunggu pesan lama berhenti beredar dengan sendirinya',
      'Konfirmasi posko resmi lalu bagikan info yang valid'
    ] },
    'SKD-TWK-X8002': { a: 4, o: [
      'A. Sila ke-1: Ketuhanan Yang Maha Esa',
      'B. Sila ke-4: Kerakyatan dalam Permusyawaratan',
      'C. Sila ke-2: Kemanusiaan yang Adil dan Beradab',
      'D. Sila ke-3: Persatuan Bangsa Indonesia',
      'E. Sila ke-5: Keadilan Sosial bagi Rakyat'
    ] },
    'SKD-TWK-X8042': { a: 4, o: [
      'A. Memberi grasi kepada terpidana kasus narkotika',
      'B. Mengangkat menteri-menteri negara untuk memimpin kementerian',
      'C. Membentuk dewan pertimbangan presiden di lingkungan istana',
      'D. Memberikan rehabilitasi kepada warga yang dipulihkan haknya',
      'E. Menyatakan perang, damai, dan perjanjian antarnegara'
    ] },
    'SKD-TWK-X8096': { a: 2, o: [
      'A. Pemohon dapat mendownload formulir langsung dari portal resmi.',
      'B. Seluruh arsip digital telah di backup secara berkala setiap malam.',
      'C. Petugas diminta memverifikasi dan meng-upload berkas sebelum usai.',
      'D. Tim teknis sedang mengupdate modul keamanan pada peladen utama.',
      'E. Semua dokumen asli harus di scan terlebih dahulu oleh petugas loket.'
    ] },
    'SKD-TWK-N0245': { a: 0, o: [
      'A. Pasal 18 ayat (2) dan (5)',
      'B. Pasal 1 ayat (2)',
      'C. Pasal 5 ayat (1)',
      'D. Pasal 28 ayat (1)',
      'E. Pasal 33 ayat (3) UUD NRI 1945'
    ] },
    'SKD-TWK-N0246': { a: 0, o: [
      'A. 30 hari kerja',
      'B. 7 hari kalender',
      'C. 14 hari kerja',
      'D. 60 hari kerja',
      'E. 1 tahun'
    ] },
    'SKD-TWK-N0250': { a: 1, o: [
      'A. Provokator',
      'B. Whistleblower',
      'C. Saksi ahli perkara',
      'D. Penyidik',
      'E. Mediator'
    ] },
    'SKD-TWK-X0028': { a: 3, o: [
      'A. Pengkhianatan terhadap negara',
      'B. Korupsi dan penyuapan',
      'C. Perbuatan tercela',
      'D. Gagal menuntaskan program dalam lima tahun',
      'E. Tidak lagi memenuhi syarat sebagai Presiden'
    ] },
    'SKD-TWK-X0085': { a: 1, o: [
      'A. Ancaman militer bersenjata',
      'B. Nonmiliter (siber)',
      'C. Alam murni',
      'D. Ekonomi global',
      'E. Biologis'
    ] },
    'SKD-TWK-X0315': { a: 3, o: [
      'A. diplomasi antarnegara',
      'B. pertukaran pelajar',
      'C. pariwisata internasional',
      'D. separatisme dan konflik',
      'E. perdagangan bebas'
    ] },
    'SKD-TWK-X8018': { a: 0, o: [
      'A. Sila ke-2 dan ke-5: solidaritas dan gotong royong',
      'B. Sila ke-1 dan Sila ke-5 dalam pengelolaan pajak daerah',
      'C. Sila ke-3 dan Sila ke-4 dalam sengketa batas kecamatan',
      'D. Sila ke-1 dan Sila ke-4 dalam prosedur pemilihan kepala desa',
      'E. Sila ke-4 saja karena diputuskan lewat surat edaran camat'
    ] },
    'SKD-TWK-X8065': { a: 3, o: [
      'A. Transparansi anggaran hanya boleh dibagikan melalui grup pesan tertutup',
      'B. Pelindungan data pribadi hanya berlaku untuk perusahaan swasta dan perbankan',
      'C. Pegawai berhak mengunggah data warga asal tujuan awalnya untuk kepentingan publikasi pribadi',
      'D. Melanggar UU PDP karena memublikasikan data tanpa dasar hukum',
      'E. Foto KTP dianggap sah disebarkan selama nama penerima tidak disebutkan secara lisan'
    ] },
    'SKD-TWK-X8092': { a: 4, o: [
      'A. Rapat koordinasi diselenggarakan bersama PT *Telkom Indonesia* di ruang utama.',
      'B. Ia membeli majalah Tempo dan koran *Kompas* di bandara sebelum berangkat.',
      'C. Semboyan *Bhinneka Tunggal Ika* tertulis pada pita lambang *Garuda Pancasila*.',
      'D. Seluruh pegawai wajib memahami *Undang-Undang Nomor 20 Tahun 2023* tentang ASN.',
      'E. Instansi tersebut meluncurkan siniar *Suara Birokrasi* untuk sosialisasi.'
    ] },
    'SKD-TWK-0228': { a: 2, o: [
      'A. Pemberlakuan UUDS 1950',
      'B. Pembentukan Republik Indonesia Serikat',
      'C. Pembubaran Konstituante dan kembali UUD 1945',
      'D. Pengesahan Piagam Jakarta sebagai pembukaan UUD',
      'E. Penetapan Pancasila sebagai asas tunggal'
    ] },
    'SKD-TWK-X0221': { a: 2, o: [
      'A. Gubernur bersama dengan DPRD provinsi',
      'B. DPR bersama Presiden',
      'C. DPRD kabupaten/kota bersama kepala daerah',
      'D. Bupati sendiri',
      'E. Camat bersama kepala desa'
    ] },
    'SKD-TWK-X8062': { a: 0, o: [
      'A. Xenomania budaya',
      'B. Bela negara aktif',
      'C. Chauvinisme',
      'D. Xenofobia',
      'E. Patriotisme'
    ] },
    'SKD-TWK-0068': { a: 3, o: [
      'A. Soekarno, Mohammad Hatta, dan Sutan Sjahrir',
      'B. H.O.S. Tjokroaminoto, Agus Salim, dan Abdoel Moeis',
      'C. Wahidin Soedirohoesodo, Soetomo, dan Goenawan',
      'D. Douwes Dekker, Cipto, dan Suwardi',
      'E. Mas Marco, Semaoen, dan Darsono'
    ] },
    'SKD-TWK-0199': { a: 4, o: [
      'A. Menyelamatkan kelangsungan pemerintahan konstitusional RI saat Yogyakarta diduduki Belanda pada Agresi Militer II, diperingati sebagai Hari Bela Negara',
      'B. Pelopor organisasi pergerakan nasional modern di bidang pendidikan dan pengajaran sehingga diperingati sebagai Hari Kebangkitan Nasional',
      'C. Belanda mengakui secara de facto wilayah Republik Indonesia yang meliputi Sumatera, Jawa, dan Madura',
      'D. Menetapkan garis demarkasi Van Mook yang mengharuskan pasukan TNI (Divisi Siliwangi) hijrah dari Jawa Barat ke Yogyakarta',
      'E. Membahas rumusan dasar negara lewat pidato Yamin, Soepomo, dan Soekarno (yang mengenalkan istilah Pancasila)'
    ] },
    'SKD-TWK-0210': { a: 2, o: [
      'A. Mosi Integral Natsir (3 April 1950)',
      'B. Perhimpunan Indonesia (Indische Vereeniging)',
      'C. Konferensi Meja Bundar (Ags – Nov 1949)',
      'D. Perundingan Renville (Januari 1948)',
      'E. Sidang Pertama BPUPKI (29 Mei – 1 Juni 1945)'
    ] },
    'SKD-TWK-N0137': { a: 3, o: [
      'A. Menganggap bangsa sendiri paling unggul dan menolak seluruh produk asing',
      'B. Menutup diri dari pergaulan internasional demi menjaga kemurnian budaya',
      'C. Mengutamakan kepentingan kelompok daerah di atas kepentingan nasional',
      'D. Bangga pada bangsa sendiri sambil tetap menghormati bangsa lain',
      'E. Mengkritik budaya bangsa lain untuk menunjukkan keunggulan bangsa'
    ] },
    'SKD-TWK-N0247': { a: 3, o: [
      'A. Kemampuan berbicara dengan meyakinkan',
      'B. Kepatuhan penuh pada atasan dalam semua hal',
      'C. Kesediaan menerima semua pemberian',
      'D. Keselarasan ucapan, tindakan, dan nilai',
      'E. Kemampuan menyembunyikan kesalahan'
    ] },
    'SKD-TWK-N0253': { a: 3, o: [
      'A. Mengikuti karena perintah atasan',
      'B. Mengubah laporan sebagian saja',
      'C. Meminta rekan melakukannya',
      'D. Menolak sopan dan melapor data sesuai fakta',
      'E. Mengerjakan perintah atasan dan melapor bila ada audit'
    ] },
    'SKD-TWK-X0058': { a: 4, o: [
      'A. Penguasaan wilayah laut seluas-luasnya',
      'B. Kekuatan militer terhadap negara tetangga',
      'C. Pembangunan ekonomi di pulau terpadat',
      'D. Perluasan wilayah teritorial',
      'E. Persatuan bangsa dan kesatuan wilayah'
    ] },
    'SKD-TWK-X0332': { a: 2, o: [
      'A. 1 tahun',
      'B. 14 hari kerja',
      'C. 30 hari kerja',
      'D. 60 hari kalender',
      'E. 7 hari kerja'
    ] },
    'SKD-TWK-X8012': { a: 2, o: [
      'A. Mengulang pemungutan suara hingga kelompok mayoritas berbalik arah',
      'B. Membatalkan seluruh kesepakatan rapat dan menyerahkan ke aparat keamanan',
      'C. Menerima dan menjalankan keputusan rapat dengan tanggung jawab',
      'D. Mengajukan protes terbuka agar pimpinan rapat diganti secepatnya',
      'E. Membiarkan masing-masing RT menentukan jam ronda sendiri tanpa koordinasi'
    ] },
    'SKD-TWK-X8023': { a: 2, o: [
      'A. Pengisian jabatan struktural diprioritaskan bagi putra daerah setempat tanpa seleksi terbuka',
      'B. Pengangkatan dan promosi ASN didasarkan pada senioritas usia dan masa kerja semata',
      'C. Manajemen ASN berdasarkan kualifikasi, kompetensi, dan kinerja secara adil',
      'D. Evaluasi kinerja ASN dilakukan oleh perwakilan masyarakat setiap lima tahun sekali',
      'E. Hak pengembangan kompetensi hanya diberikan kepada pegawai berstatus PNS'
    ] },
    'SKD-TWK-X8061': { a: 4, o: [
      'A. Ketertinggalan teknologi pertanian modern',
      'B. Pengabaian standar gizi masyarakat demi penghematan anggaran',
      'C. Pemaksaan budaya makan satu daerah ke daerah lain',
      'D. Sikap antipati terhadap seluruh perdagangan internasional',
      'E. Kemandirian pangan demi ketahanan nasional'
    ] },
    'SKD-TWK-0010': { a: 1, o: [
      'A. Memberikan kisi-kisi wawancara secara tertutup kepada anaknya agar terlihat lulus secara murni',
      'B. Mendeklarasikan benturan kepentingan dan mundur dari tim penilai',
      'C. Membatalkan seluruh proses seleksi tenaga ahli di dinas tersebut hingga masa jabatannya berakhir',
      'D. Meminta panitia seleksi meloloskan anaknya dengan syarat anaknya bekerja dua kali lebih keras setelah diterima',
      'E. Membiarkan proses berjalan sambil memantau nilai pesaing anaknya agar dapat disesuaikan bila perlu'
    ] },
    'SKD-TWK-0108': { a: 1, o: [
      'A. Pemberian Grasi dan Rehabilitasi oleh Presiden',
      'B. Pemeliharaan fakir miskin dan jaminan sosial negara',
      'C. Pemajuan kebudayaan nasional dan penghormatan bahasa daerah',
      'D. Pemberian Amnesti dan Abolisi oleh Presiden',
      'E. Indonesia sebagai Negara Hukum (Rechtsstaat)'
    ] },
    'SKD-TWK-X0310': { a: 1, o: [
      'A. meniru budaya asing sepenuhnya agar dianggap modern',
      'B. menyaring budaya luar dan menjaga budaya lokal',
      'C. menutup perbatasan dari semua kegiatan internasional',
      'D. menolak seluruh pengaruh asing',
      'E. membiarkan budaya daerah punah demi kemajuan'
    ] },
    'SKD-TWK-X7415': { a: 4, o: [
      'Mengabaikannya karena peta baru digunakan untuk simulasi',
      'Membagikan peta lama agar setiap orang memilih rute sendiri',
      'Mengubah seluruh penanda gedung sendiri sebelum disetujui',
      'Meminta pengguna kursi roda menunggu di ruang kerja selama semua simulasi',
      'Melaporkan hambatan, ajukan rute aksesibel, dan uji bersama'
    ] },
    'SKD-TWK-X8005': { a: 0, o: [
      'A. Mengatur jadwal istirahat atau sesi pengganti agar pegawai tetap beribadah',
      'B. Melarang seluruh kegiatan rapat pada hari Jumat seharian penuh',
      'C. Mengimbau pegawai yang beribadah untuk menebus materi lewat rekaman tanpa perlu hadir lagi',
      'D. Meminta pegawai memilih antara mengikuti pelatihan penuh atau mengajukan cuti tahunan',
      'E. Menyerahkan keputusan kehadiran sepenuhnya kepada masing-masing peserta tanpa catatan'
    ] },
    'SKD-TWK-X8069': { a: 4, o: [
      'A. Pihak netral yang tidak memiliki kewajiban hukum membela negara',
      'B. Penentu kebijakan operasi tempur TNI di perbatasan',
      'C. Pengganti Kepolisian dalam penyidikan tindak pidana korupsi',
      'D. Kekuatan utama pertahanan bersenjata bersama pasukan khusus',
      'E. Kekuatan pendukung dalam sistem pertahanan semesta'
    ] },
    'SKD-TWK-0056': { a: 4, o: [
      'A. Paham yang menolak hubungan dengan bangsa lain',
      'B. Paham yang mengutamakan kelompok etnis tertentu',
      'C. Paham kebebasan individu tanpa batas',
      'D. Paham pemerintahan oleh kaum agamawan',
      'E. Paham kesetiaan tertinggi pada negara'
    ] },
    'SKD-TWK-N0131': { a: 1, o: [
      'A. Hanya satu kali pada saat diangkat menjadi penyelenggara negara',
      'B. Awal menjabat, berkala setiap tahun, dan saat akhir masa jabatan',
      'C. Hanya apabila ada laporan masyarakat mengenai dugaan tindak pidana korupsi',
      'D. Setiap bulan kepada atasan langsung di instansi masing-masing penyelenggara',
      'E. Hanya ketika pejabat dipindahkan atau dimutasi ke instansi atau daerah lain'
    ] },
    'SKD-TWK-N0248': { a: 4, o: [
      'A. Menerima karena izin sudah terbit',
      'B. Menerima lalu membagikannya kepada rekan kerja',
      'C. Menerima asalkan nilainya kecil',
      'D. Menyimpannya tanpa melapor',
      'E. Menolak dan melapor ke UPG/KPK resmi'
    ] },
    'SKD-TWK-X0020': { a: 4, o: [
      'A. Nilai dasar bersumber dari cita-cita luhur',
      'B. Nilai dasar bersifat mengikat dan dituangkan dalam norma hukum',
      'C. Nilai dasar bersifat abstrak dan tidak berubah',
      'D. Nilai dasar hanya berlaku pada lembaga negara',
      'E. Nilai dasar tercermin nyata dalam hidup bermasyarakat'
    ] },
    'SKD-TWK-N0119': { a: 3, o: [
      'A. Pancasila yang diperas menjadi Trisila dan Ekasila gotong royong sebagai dasar negara',
      'B. Lima asas peri kebangsaan hingga kesejahteraan rakyat sebagai rumusan dasar negara',
      'C. Negara berdasarkan syariat agama bagi seluruh warganya tanpa memandang golongan',
      'D. Negara integralistik: persatuan, kekeluargaan, dan musyawarah',
      'E. Negara federal dengan kedaulatan pada negara-negara bagian yang bersifat otonom penuh'
    ] },
    'SKD-TWK-N0243': { a: 3, o: [
      'A. Kepala negara saja',
      'B. Kepala pemerintahan tertinggi saja',
      'C. Simbol tanpa kekuasaan',
      'D. Kepala negara & pemerintahan',
      'E. Anggota parlemen'
    ] },
    'SKD-TWK-N0260': { a: 4, o: [
      'A. Cinta tanah air',
      'B. Rela berkorban untuk bangsa dan negara',
      'C. Yakin Pancasila sebagai ideologi negara',
      'D. Kesadaran berbangsa dan bernegara',
      'E. Sikap individualistis dan egois'
    ] },
    'SKD-TWK-X0003': { a: 3, o: [
      'A. Menggunakan produk dalam negeri',
      'B. Rela berkorban demi kepentingan bangsa',
      'C. Bangga berbangsa dan bertanah air Indonesia',
      'D. Mengutamakan golongan di atas kepentingan bangsa',
      'E. Menjaga persatuan di tengah perbedaan suku dan agama'
    ] },
    'SKD-TWK-X0213': { a: 3, o: [
      'A. Gedung Joang 45',
      'B. Kediaman Laksamana Maeda',
      'C. Rengasdengklok',
      'D. Jl. Pegangsaan Timur 56',
      'E. Lapangan Ikada'
    ] },
    'SKD-TWK-X0308': { a: 4, o: [
      'A. kepentingan nasional ditentukan oleh negara lain',
      'B. kepentingan nasional selalu sama dengan kepentingan ekonomi',
      'C. kepentingan nasional adalah kepentingan pemerintah yang sedang berkuasa',
      'D. kepentingan nasional hanya berlaku di masa perang',
      'E. kepentingan seluruh bangsa sebagai dasar kebijakan'
    ] },
    'SKD-TWK-X8022': { a: 1, o: [
      'A. Dominasi prosedur administratif di atas empati (Sila ke-4)',
      'B. Persamaan derajat tanpa diskriminasi (Sila ke-2)',
      'C. Sentralisasi layanan oleh pemerintah pusat (Sila ke-3)',
      'D. Pemenuhan target pendapatan layanan daerah (Sila ke-5)',
      'E. Kebebasan menjalankan keyakinan pribadi petugas (Sila ke-1)'
    ] },
    'SKD-TWK-0061': { a: 3, o: [
      'A. Individualisme',
      'B. Apatisme',
      'C. Eksklusivisme',
      'D. Bela negara',
      'E. Oportunisme'
    ] },
    'SKD-TWK-0214': { a: 1, o: [
      'A. Menyimpannya karena tidak diminta',
      'B. Lapor ke KPK maksimal 30 hari kerja',
      'C. Membagikannya ke rekan kantor tanpa melapor',
      'D. Mengembalikannya secara diam-diam tanpa melapor',
      'E. Menerimanya jika nilainya kecil'
    ] },
    'SKD-TWK-N0103': { a: 1, o: [
      'A. Membentuk Mahkamah Konstitusi dan Komisi Yudisial sebagai pelaku kekuasaan kehakiman',
      'B. Membatasi kuasa Presiden (maks. dua periode) dan memperkuat DPR',
      'C. Menambahkan Bab Hak Asasi Manusia (Pasal 28A–28J) ke dalam batang tubuh',
      'D. Menghapus Dewan Pertimbangan Agung dan mengubah susunan keanggotaan MPR',
      'E. Menetapkan pemilihan Presiden dan Wakil Presiden secara langsung oleh rakyat'
    ] },
    'SKD-TWK-X0048': { a: 4, o: [
      'A. Selat Sunda dan Laut Natuna',
      'B. Laut Timor dan Laut Arafura',
      'C. Selat Malaka',
      'D. Selat Bali dan Laut Jawa',
      'E. Selat Makassar dan Lombok'
    ] },
    'SKD-TWK-X8077': { a: 1, o: [
      'A. Pelanggaran protokol kerahasiaan data pribadi warga',
      'B. Mobilisasi sumber daya terpadu saat keadaan darurat',
      'C. Pemisahan peran antara warga kota dan warga pedesaan',
      'D. Swastanisasi seluruh layanan pertahanan dan keamanan negara',
      'E. Sentralisasi penuh tanpa melibatkan unsur masyarakat'
    ] },
    'SKD-TWK-0028': { a: 1, o: [
      'A. Ide pokok: Kenaikan tiket pesawat domestik; Kalimat sumbang: kalimat (1)',
      'B. Ide pokok: Pembangunan IKN sebagai kota hutan berkelanjutan; Kalimat sumbang: (5)',
      'C. Ide pokok: Kewajiban gedung perkantoran hemat energi; Kalimat sumbang: kalimat (2)',
      'D. Ide pokok: Kendaraan listrik bebas emisi di pusat pemerintahan; Kalimat sumbang: kalimat (3)',
      'E. Ide pokok: Reforestasi hutan tropis di Kalimantan; Kalimat sumbang: kalimat (4)'
    ] },
    'SKD-TWK-0095': { a: 0, o: [
      'A. Memulihkan keamanan dan ketertiban',
      'B. Menyatakan darurat perang nasional',
      'C. Membubarkan DPR-GR',
      'D. Mengangkat dirinya sebagai presiden seumur hidup',
      'E. Membubarkan Konstituante'
    ] },
    'SKD-TWK-0220': { a: 4, o: [
      'A. Perhimpunan Indonesia (Indische Vereeniging)',
      'B. Pertempuran Surabaya (10 November 1945)',
      'C. Indische Partij (25 Desember 1912)',
      'D. Taman Siswa (3 Juli 1922)',
      'E. PDRI Bukittinggi (19 Desember 1948)'
    ] },
    'SKD-TWK-X7408': { a: 4, o: [
      'Memberi tempat terpisah bagi motif dari daerah kecil tanpa penjelasan',
      'Menghapus identitas pameran bersama agar tiap daerah berdiri sendiri',
      'Membiarkan nama baru supaya semua pengunjung membaca istilah yang sama',
      'Membatasi pameran pada motif yang sudah dikenal luas',
      'Pulihkan nama lokal dengan terjemahan di pameran bersama'
    ] },
    'SKD-TWK-0001': { a: 1, o: [
      'A. Mengusulkan pelarangan impor seluruh barang konsumsi luar negeri agar masyarakat terpaksa membeli produk dalam negeri',
      'B. Mengampanyekan bangga produk lokal lewat keteladanan serta mendorong inovasi UMKM di ruang digital',
      'C. Membuat petisi pemblokiran media sosial asing yang menyebarkan budaya populer luar negeri kepada remaja Indonesia',
      'D. Mewajibkan denda administratif bagi pegawai pemerintah yang kedapatan mengenakan barang bermerek luar negeri di luar jam kerja',
      'E. Membatasi pertukaran budaya internasional agar nilai-nilai tradisional lokal tidak mengalami akulturasi sedikit pun'
    ] },
    'SKD-TWK-0008': { a: 1, o: [
      'A. Kemandirian ekonomi dengan menolak gaji resmi sebagai Wakil Presiden',
      'B. Kejujuran memisahkan secara tegas milik pribadi dari uang negara',
      'C. Keberanian mengambil risiko politik dalam perundingan Konferensi Meja Bundar',
      'D. Kerja keras dalam menyusun sistem koperasi nasional sejak masa kemerdekaan',
      'E. Kepedulian sosial dengan membagikan seluruh anggaran kementerian kepada rakyat miskin'
    ] },
    'SKD-TWK-X0316': { a: 2, o: [
      'A. menjual produk asing dengan label dalam negeri',
      'B. membeli apa pun asal buatan dalam negeri walau berbahaya',
      'C. memakai produk lokal berkualitas dan tetap terbuka',
      'D. melarang tetangga memakai produk asing',
      'E. membenci semua produk impor'
    ] },
    'SKD-TWK-X7400': { a: 1, o: [
      'Menandatangani dan meminta penyedia mengirim konfirmasi',
      'Rekonsiliasi pengukuran dan catat selisih sebelum menyetujui',
      'Menahan seluruh kontrak lain yang dimiliki penyedia',
      'Mengoreksi angka pada salinan pribadi lalu menandatangani berita acara',
      'Meneruskan dokumen tanpa catatan karena selisihnya kecil'
    ] },
    'SKD-TWK-0004': { a: 1, o: [
      'A. Merupakan organisasi pertama yang secara terbuka menuntut kemerdekaan penuh Indonesia melalui jalur bersenjata',
      'B. Memelopori organisasi modern terstruktur yang berfokus pada pendidikan dan martabat bangsa',
      'C. Memiliki jumlah anggota terbanyak yang tersebar di seluruh kepulauan Nusantara sejak hari pertama berdiri',
      'D. Berhasil memenangkan kursi mayoritas di dalam Volksraad (Dewan Rakyat) pemerintahan Hindia Belanda',
      'E. Menjadi partai politik pertama yang memproklamasikan penggunaan nama Indonesia dalam anggaran dasarnya'
    ] },
    'SKD-TWK-X0301': { a: 4, o: [
      'A. penyeragaman budaya seluruh daerah',
      'B. kesetiaan pada pemimpin daerah masing-masing',
      'C. kepentingan kelompok yang paling kuat dalam masyarakat',
      'D. penutupan diri dari pengaruh bangsa lain',
      'E. tujuan bersama tanpa menghapus identitas'
    ] },
    'SKD-TWK-X8010': { a: 0, o: [
      'A. Sila ke-5 karena gotong royong demi makmur bersama',
      'B. Sila ke-4 karena jembatan merupakan milik kepala dusun',
      'C. Sila ke-2 karena membantu petani secara perorangan',
      'D. Sila ke-1 karena dilakukan dengan niat ibadah',
      'E. Sila ke-3 karena mencegah perselisihan antarwarga pasar'
    ] },
    'SKD-TWK-X8040': { a: 3, o: [
      'A. Majelis Permusyawaratan Rakyat secara langsung',
      'B. Komisi Yudisial setelah mendapat persetujuan DPD',
      'C. Komisi Pemberantasan Korupsi bersama Kepolisian',
      'D. Mahkamah Konstitusi dalam waktu maks. 90 hari',
      'E. Mahkamah Agung dalam sidang paripurna'
    ] },
    'SKD-TWK-X8089': { a: 0, o: [
      'A. Konsistensi sikap saat tak diawasi',
      'B. Pengetahuan peraturan tata ruang',
      'C. Keterampilan negosiasi lintas divisi',
      'D. Kreativitas teknis',
      'E. Kemampuan berbahasa asing'
    ] },
    'SKD-TWK-0187': { a: 1, o: [
      'A. Menghemat biaya operasional kantor',
      'B. Menyalahgunakan fasilitas negara',
      'C. Menunjukkan sikap sederhana',
      'D. Sudah menjadi hak pejabat',
      'E. Tidak merugikan siapa pun'
    ] },
    'SKD-TWK-N0221': { a: 1, o: [
      'A. Memisahkan wilayah menurut suku',
      'B. Utuh mengutamakan persatuan dan kesatuan',
      'C. Mengutamakan kepentingan daerah masing-masing',
      'D. Menekankan keunggulan ekonomi semata',
      'E. Terbatas pada pertahanan militer'
    ] },
    'SKD-TWK-X0088': { a: 0, o: [
      'A. Paduan ancaman militer dan nonmiliter',
      'B. Ancaman yang hanya berupa senjata nuklir',
      'C. Bencana alam berskala besar',
      'D. Ancaman dari satu negara saja',
      'E. Gangguan keamanan lokal'
    ] },
    'SKD-TWK-X8016': { a: 2, o: [
      'A. Penghapusan nilai-nilai keagamaan dalam penyelenggaraan negara',
      'B. Mengutamakan kepentingan kelompok mayoritas secara mutlak',
      'C. Berjiwa besar mengutamakan persatuan di atas golongan',
      'D. Penolakan terhadap prinsip musyawarah demi mempercepat sidang',
      'E. Penyerahan seluruh dasar negara kepada pemerintah pendudukan'
    ] },
    'SKD-TWK-X8066': { a: 0, o: [
      'A. Pengabdian profesi untuk ketahanan bencana masyarakat',
      'B. Penolakan terhadap kerja sama antarinstansi',
      'C. Mobilisasi militer di wilayah perbatasan negara',
      'D. Pengambilalihan kewenangan aparat keamanan oleh pegawai sipil',
      'E. Pelaporan pelanggaran keuangan daerah kepada lembaga internasional'
    ] },
    'SKD-TWK-N0205': { a: 3, o: [
      'A. Nilai dasarnya boleh diubah mengikuti keinginan penguasa',
      'B. Pancasila boleh digabung dengan ideologi lain tanpa batas',
      'C. Pancasila hanya berlaku bagi kelompok tertentu',
      'D. Nilai dasar tetap, penjabarannya ikuti zaman',
      'E. Penjabaran Pancasila tidak boleh berubah sama sekali'
    ] },
    'SKD-TWK-X0029': { a: 1, o: [
      'A. Hak untuk berserikat dan berkumpul',
      'B. Bebas dari tuntutan hukum surut',
      'C. Hak memperoleh informasi',
      'D. Hak atas jaminan sosial',
      'E. Hak mengeluarkan pendapat'
    ] },
    'SKD-TWK-X7401': { a: 3, o: [
      'Mewajibkan aplikasi identik di seluruh wilayah',
      'Mengizinkan setiap daerah mengubah definisi dan kategori aduan',
      'Membatasi proyek pada daerah dengan akses internet baik',
      'Jaga standar data sembari beri opsi pengisian luring',
      'Membuat dua jenis hak pengaduan berdasarkan wilayah'
    ] },
    'SKD-TWK-X8020': { a: 2, o: [
      'A. Membiarkan dua kepengurusan RT berjalan bersamaan',
      'B. Mengumumkan nama calon tersebut di papan pengumuman kelurahan sebagai pelaku pelanggaran berat',
      'C. Mengajak berdialog bersama tokoh warga untuk menegaskan hasil musyawarah',
      'D. Mengulang pemilihan setiap bulan sampai tidak ada calon yang keberatan',
      'E. Menghentikan seluruh layanan surat keterangan warga hingga tahun depan'
    ] },
    'SKD-TWK-X8091': { a: 4, o: [
      'A. Penghargaan resmi negara atas kinerja pegawai pelayanan publik',
      'B. Bentuk kolaborasi pemerintah dan swasta dalam pengadaan perumahan',
      'C. Hak promosi komersial yang wajib diterima seluruh pegawai pemerintah',
      'D. Keringanan pajak daerah yang diberikan oleh pengembang swasta',
      'E. Potensi gratifikasi terselubung yang ganggu objektivitas izin'
    ] },
    'SKD-TWK-0090': { a: 1, o: [
      'A. Menyelamatkan keduanya dari serangan Sekutu',
      'B. Mendesak pelaksanaan proklamasi tanpa menunggu janji Jepang',
      'C. Menandatangani perjanjian dengan Jepang',
      'D. Membentuk pemerintahan darurat di pengasingan luar Pulau Jawa',
      'E. Menghadiri sidang PPKI'
    ] },
    'SKD-TWK-0093': { a: 1, o: [
      'A. Membagikan setiap pesan viral populer di media sosial tanpa verifikasi',
      'B. Menyaring informasi dan menolak penyebaran hoaks pemecah bangsa',
      'C. Meniru seluruh tren budaya asing tanpa seleksi',
      'D. Menutup akses internet bagi masyarakat',
      'E. Menghindari penggunaan teknologi'
    ] },
    'SKD-TWK-X0095': { a: 1, o: [
      'A. UU Nomor 5 Tahun 2014 tentang Aparatur Sipil Negara',
      'B. UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001',
      'C. UU Nomor 24 Tahun 2009 tentang Bendera dan Bahasa',
      'D. UU Nomor 23 Tahun 2014 tentang Pemerintahan Daerah',
      'E. UU Nomor 12 Tahun 2011 tentang Pembentukan Peraturan'
    ] },
    'SKD-TWK-X7405': { a: 3, o: [
      'Memberi skor serendah mungkin untuk menghindari kesan memihak dalam penilaian',
      'Mengundurkan diri dari semua kegiatan kantor tanpa memberi alasan',
      'Menilai setelah membaca skor anggota tim lain',
      'Mengungkapkan konflik kepentingan agar penilaian dialihkan ke penilai lain',
      'Tetap menilai karena Anda tidak menerima gaji dari organisasi'
    ] },
    'SKD-TWK-X8003': { a: 2, o: [
      'A. Menunda keputusan tanpa batas waktu sampai seluruh pihak sepakat secara mutlak',
      'B. Menyerahkan penentuan keputusan kepada pemilik modal terbesar',
      'C. Memberi giliran bicara setara kepada nelayan dan menimbang data sebelum mufakat',
      'D. Menutup rapat dan melakukan pemungutan suara cepat tanpa mendengar nelayan',
      'E. Meminta perwakilan nelayan mengirim masukan tertulis setelah rapat ditutup dan keputusan disahkan'
    ] },
    'SKD-TWK-0007': { a: 1, o: [
      'A. Disiplin waktu dan kepatuhan pada jam kerja kantor',
      'B. Kejujuran dan keberanian menolak suap meski proyek diklaim aman',
      'C. Kesederhanaan gaya hidup dalam mengelola keuangan keluarga sehari-hari',
      'D. Empati dan kepedulian sosial terhadap keberlangsungan usaha vendor lokal',
      'E. Kompromi taktis demi menjaga hubungan baik antara birokrasi dan sektor swasta'
    ] },
    'SKD-TWK-0102': { a: 0, o: [
      'A. Hak pendidikan warga dan wajib belajar dasar',
      'B. Komposisi keanggotaan MPR hasil amandemen',
      'C. Pemberian Grasi dan Rehabilitasi oleh Presiden',
      'D. Kekuasaan membentuk undang-undang berada pada DPR',
      'E. Penegasan Indonesia sebagai Negara Hukum (Rechtsstaat)'
    ] },
    'SKD-TWK-0224': { a: 3, o: [
      'A. Tetap menilai sendiri secara objektif tanpa perlu melapor ke atasan',
      'B. Membantu kerabatnya secara diam-diam',
      'C. Mengancam peserta lain agar mundur',
      'D. Melapor benturan kepentingan dan mundur dari tim penilai',
      'E. Menunda proses tanpa alasan'
    ] },
    'SKD-TWK-0226': { a: 1, o: [
      'A. Indische Partij (25 Desember 1912)',
      'B. Sistem Pengendalian Intern Pemerintah (PP 60/2008)',
      'C. Taman Siswa (3 Juli 1922)',
      'D. Perundingan Linggarjati antara Indonesia dan Belanda (1946)',
      'E. Pertempuran Surabaya (10 November 1945)'
    ] },
    'SKD-TWK-0227': { a: 3, o: [
      'A. Belanda mengakui kedaulatan Republik Indonesia Serikat (RIS) secara penuh pada 27 Desember 1949, dengan masalah Irian Barat ditunda satu tahun',
      'B. Menghasilkan kesepakatan luhur Piagam Jakarta (Jakarta Charter) yang menjadi cikal bakal Pembukaan UUD 1945',
      'C. Melaksanakan tugas pencegahan, koordinasi, supervisi, monitoring, penyelidikan, penyidikan, dan penuntutan tindak pidana korupsi',
      'D. Memberikan keyakinan memadai atas efektivitas, efisiensi, keandalan laporan keuangan, pengamanan aset negara, dan ketaatan aturan',
      'E. Organisasi mahasiswa di Belanda yang pertama kali menggunakan nama \'Indonesia\' secara politis dan mengumandangkan manifesto politik kemerdekaan di forum internasional'
    ] },
    'SKD-TWK-N0106': { a: 4, o: [
      'A. Lebih dari 50% suara nasional tanpa syarat sebaran provinsi, kemudian ditetapkan oleh KPU',
      'B. Suara terbanyak pertama dengan minimal 20% suara di seluruh provinsi yang ada di Indonesia',
      'C. Sedikitnya 30% suara di setiap provinsi dan lebih dari 60% suara nasional secara keseluruhan',
      'D. Suara terbanyak yang dipilih oleh anggota MPR dalam sidang paripurna hasil pemilihan umum',
      'E. >50% suara nasional serta >=20% di lebih dari separuh provinsi'
    ] },
    'SKD-TWK-N0209': { a: 2, o: [
      'A. Alat politik bagi golongan tertentu',
      'B. Sumber hukum satu-satunya selain UUD',
      'C. Pedoman bersikap dan bertingkah laku sehari-hari',
      'D. Lambang yang tidak perlu diamalkan',
      'E. Perjanjian kerja sama internasional antarnegara berdaulat'
    ] },
    'SKD-TWK-N0235': { a: 3, o: [
      'A. Kesatuan agama bagi seluruh warga',
      'B. Satu kerajaan',
      'C. Kesatuan mata uang di seluruh daerah',
      'D. Bahasa persatuan Indonesia',
      'E. Satu pemerintahan'
    ] },
    'SKD-TWK-N0254': { a: 1, o: [
      'A. Berhak mendapatkan pekerjaan',
      'B. Hak dan kewajiban bela negara',
      'C. Wajib membayar pajak',
      'D. Berhak atas pendidikan',
      'E. Kewajiban bergabung ke kesatuan TNI'
    ] },
    'SKD-TWK-X8037': { a: 0, o: [
      'A. Manajemen karier, kinerja, dan pensiun jadi transparan dan terukur',
      'B. Pegawai negeri tidak lagi perlu mengikuti uji kompetensi saat pindah jabatan',
      'C. Instansi daerah dapat menetapkan standar penggajian tanpa koordinasi pusat',
      'D. Data pribadi pegawai dapat diakses bebas oleh publik',
      'E. Seluruh keputusan mutasi ASN dilakukan secara tertutup tanpa jejak elektronik'
    ] },
    'SKD-TWK-X0330': { a: 1, o: [
      'A. ikut memakai kendaraan dinas bila kebetulan ada keperluan',
      'B. menegur baik-baik dan melapor resmi bila berlanjut',
      'C. mendiamkan agar tidak merusak hubungan',
      'D. meminta imbalan agar tidak melapor',
      'E. menyebarkan kejadian itu ke media sosial'
    ] },
    'SKD-TWK-X8019': { a: 1, o: [
      'A. Pancasila hanya mengatur hubungan antarlembaga tinggi negara',
      'B. Kebebasan individu dibatasi kewajiban menghormati hak orang lain',
      'C. Ujaran kebencian dijamin selama tidak dilakukan secara tatap muka',
      'D. Kebebasan berekspresi hanya dimiliki pejabat negara',
      'E. Media sosial berada di luar wilayah hukum Indonesia'
    ] },
    'SKD-TWK-X8054': { a: 1, o: [
      'A. Menghapus kewajiban penggunaan bahasa Indonesia di dokumen resmi',
      'B. Menjaga standar data nasional sekaligus menghargai bahasa daerah',
      'C. Membatasi penggunaan aplikasi hanya untuk wilayah perkotaan',
      'D. Mengorbankan kejelasan informasi bagi warga demi keseragaman kaku',
      'E. Membuat sistem terpisah di setiap kabupaten yang tidak saling terhubung'
    ] },
    'SKD-TWK-X0008': { a: 2, o: [
      'A. BPUPKI',
      'B. Chuo Sangi In',
      'C. PPKI',
      'D. Jawa Hokokai',
      'E. Panitia Sembilan'
    ] },
    'SKD-TWK-X8088': { a: 1, o: [
      'A. Tetap menilai secara ketat bahkan memberi skor lebih rendah agar terlihat objektif',
      'B. Mengungkapkan posisi pembina ke ketua tim dan mengalihkan penilaian',
      'C. Membiarkan saja karena Anda tidak menerima gaji dari yayasan tersebut',
      'D. Menyuruh staf yayasan mengganti nama pembina secara diam-diam',
      'E. Meminta rekan penilai lain meloloskan proposal tersebut tanpa diskusi'
    ] },
    'SKD-TWK-N0259': { a: 1, o: [
      'A. Agresi pasukan negara lain',
      'B. Serangan siber dan disinformasi digital',
      'C. Invasi bersenjata',
      'D. Pemboman wilayah perbatasan',
      'E. Blokade wilayah perairan oleh armada perang asing'
    ] },
    'SKD-TWK-X0086': { a: 4, o: [
      'A. Menjadi komponen cadangan tanpa pelatihan',
      'B. Mengikuti perang di perbatasan',
      'C. Menghindari pajak yang dianggap memberatkan',
      'D. Mengutamakan golongan sendiri',
      'E. Bekerja profesional dan menolak suap'
    ] },
    'SKD-TWK-X7403': { a: 2, o: [
      'Mengikuti pilihan pemilik lahan karena jumlahnya lebih besar',
      'Menunda sampai semua orang memiliki pendapat yang identik',
      'Mendengar penyewa dan menimbang data sebelum mufakat',
      'Menyerahkan keputusan kepada pihak dengan lahan terluas',
      'Mengubah agenda agar air dibagi tanpa diskusi'
    ] },
    'SKD-TWK-X8004': { a: 2, o: [
      'A. Ikut menimpali dengan candaan lain agar suasana grup kembali cair',
      'B. Mengabaikan pesan tersebut karena dianggap sekadar selingan di luar jam dinas',
      'C. Mengingatkan santun bahwa ragam logat adalah kekayaan bangsa',
      'D. Menyimpan tangkapan layar untuk disebarkan ke media sosial agar pelaku jera',
      'E. Keluar dari grup secara diam-diam agar tidak terlibat dalam perdebatan'
    ] },
    'SKD-TWK-0208': { a: 3, o: [
      'A. Gabungan daerah yang berdiri sendiri-sendiri',
      'B. Pulau-pulau yang dipisahkan oleh laut bebas',
      'C. Federasi negara bagian yang otonom penuh',
      'D. Kesatuan politik, ekonomi, sosbud, dan hankam',
      'E. Kesatuan ekonomi semata'
    ] },
    'SKD-TWK-X0013': { a: 3, o: [
      'A. UU Nomor 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara',
      'B. UU Nomor 23 Tahun 2014 tentang Pemerintahan Daerah',
      'C. UU Nomor 5 Tahun 2014 tentang ASN',
      'D. UU Nomor 12 Tahun 2011 tentang Pembentukan Peraturan',
      'E. UU Nomor 17 Tahun 2014 tentang MD3'
    ] },
    'SKD-TWK-X7414': { a: 1, o: [
      'Menghapus semua istilah lokal dari layanan kepada warga',
      'Memetakan istilah lokal ke kode nasional sekaligus menampilkan nama daerah',
      'Membatalkan pelaporan kabupaten tersebut',
      'Menggantikan standar pelaporan nasional dengan daftar istilah bebas dari tiap daerah',
      'Menggandakan setiap entri menjadi dua laporan terpisah'
    ] },
    'SKD-TWK-X8074': { a: 2, o: [
      'A. Mengikuti ajakan diskusi tertutup agar mengetahui kelanjutan rencana mereka',
      'B. Membagikan tautan donasi tersebut agar orang lain berhati-hati',
      'C. Menolak ajakan, menyimpan bukti secara tertutup, dan melapor ke aparat',
      'D. Menghujat akun tersebut secara terbuka agar memicu pertengkaran massal di kolom komentar',
      'E. Menganggap hal itu wajar sebagai kebebasan berpendapat tanpa batas'
    ] },
    'SKD-TWK-X8087': { a: 1, o: [
      'A. Menggantikan fungsi pengadilan tindak pidana korupsi dalam menjatuhkan vonis penjara',
      'B. Melindungi pelapor sehingga berani mengungkap penyimpangan secara resmi',
      'C. Membuka identitas pelapor ke publik agar mendapat penghargaan langsung',
      'D. Mengurangi kewajiban inspektorat melakukan pemeriksaan berkala',
      'E. Menghukum pegawai hanya berdasarkan laporan lisan tanpa pemeriksaan bukti'
    ] },
    'SKD-TWK-N0132': { a: 4, o: [
      'A. Suap selalu berupa uang tunai, sedangkan gratifikasi selalu berupa barang berwujud',
      'B. Suap hanya dilakukan oleh pihak swasta, sedangkan gratifikasi hanya dilakukan oleh seorang ASN',
      'C. Suap tidak dapat dipidana karena bersifat sukarela, sedangkan gratifikasi selalu dipidana',
      'D. Suap dilaporkan kepada atasan langsung, sedangkan gratifikasi dilaporkan kepada kepolisian',
      'E. Suap disertai kesepakatan dua pihak; gratifikasi terkait jabatan tanpa deal'
    ] },
    'SKD-TWK-N0215': { a: 4, o: [
      'A. Wilayah laut Indonesia hanya sejauh 3 mil dari pantai',
      'B. Indonesia tidak memiliki hak atas laut antarpulau',
      'C. Seluruh laut dunia dikuasai Indonesia',
      'D. ZEE Indonesia ditetapkan sejauh 12 mil',
      'E. Laut antarpulau termasuk wilayah kedaulatan RI'
    ] },
    'SKD-TWK-X0047': { a: 1, o: [
      'A. Kedaulatan penuh seperti di perairan pedalaman',
      'B. Hak berdaulat mengelola sumber daya alam',
      'C. Hak melarang semua kapal asing melintas',
      'D. Hak mengatur seluruh kegiatan penerbangan sipil asing',
      'E. Hak memungut pajak atas kapal yang melintas'
    ] },
    'SKD-TWK-X8048': { a: 4, o: [
      'A. Kedaulatan penuh atas seluruh wilayah sehingga kapal asing dilarang melintas meski damai',
      'B. Hak wilayah udara tertutup yang melarang penerbangan sipil internasional melintas',
      'C. Kewenangan bersama negara tetangga tanpa batas wilayah hukum nasional',
      'D. Status perairan bebas internasional di mana semua negara bebas mengambil sumber daya ikan',
      'E. Hak berdaulat mengeksplorasi dan mengelola sumber daya alamnya'
    ] },
    'SKD-TWK-X8060': { a: 1, o: [
      'A. Persatuan Indonesia hanya dapat bertahan jika seluruh suku memiliki kesamaan bahasa ibu',
      'B. Keragaman suku, agama, dan budaya dirawat lewat tekad persatuan',
      'C. Wilayah kepulauan tidak dapat disatukan dalam satu pemerintahan nasional',
      'D. Kelompok mayoritas berhak memaksakan budaya daerahnya kepada kelompok lain',
      'E. Nasionalisme hanya bergantung pada kesamaan garis keturunan nenek moyang'
    ] },
    'SKD-TWK-X7409': { a: 0, o: [
      'Melapor resmi dan mengedukasi warga memakai contoh anonim',
      'Menyebarkan identitas orang yang diduga sebagai pelaku',
      'Membuat simulasi publik yang memuat nomor korban asli',
      'Membalas penipu sambil mengirim data palsu',
      'Memblokir semua nomor yang belum tersimpan di ponsel tetangga'
    ] },
    'SKD-TWK-X8021': { a: 0, o: [
      'A. Menjamin hak lingkungan sehat dan keadilan sumber daya berkelanjutan',
      'B. Menyerahkan pengawasan reklamasi sepenuhnya kepada pasar internasional',
      'C. Membebaskan warga adat dari seluruh aturan perizinan negara',
      'D. Memindahkan seluruh pemukiman warga adat agar aktivitas tambang lancar',
      'E. Mengutamakan pendapatan pajak korporasi di atas kesehatan masyarakat lokal'
    ] },
    'SKD-TWK-X8024': { a: 3, o: [
      'A. Seluruh tenaga non-ASN otomatis diangkat menjadi pejabat struktural eselon II',
      'B. Netralitas ASN hanya berlaku bagi pegawai yang bertugas di tingkat pusat',
      'C. Jabatan manajerial hanya boleh diisi oleh lulusan sekolah kedinasan',
      'D. PPPK berhak memperoleh jaminan pensiun dan jaminan hari tua',
      'E. PNS dibebaskan dari penilaian kinerja tahunan setelah lima tahun masa kerja'
    ] },
    'SKD-TWK-X8039': { a: 2, o: [
      'A. Ketentuan tersebut hanya mengikat pemerintah pusat dan tidak berlaku untuk APBD',
      'B. Anggaran 20% hanya dihitung dari anggaran gaji pegawai dinas pendidikan',
      'C. Daerah wajib menganggarkan minimal 20% belanja untuk pendidikan nasional',
      'D. Daerah boleh mengurangi anggaran pendidikan menjadi 10% bila infrastruktur jalan belum selesai',
      'E. Dana pendidikan daerah sepenuhnya menjadi tanggung jawab komite sekolah dan orang tua'
    ] },
    'SKD-TWK-X0214': { a: 0, o: [
      'A. Membuktikan eksistensi TNI dan RI',
      'B. Merebut kembali pusat pemerintahan di Jakarta',
      'C. Mengakhiri perundingan Renville',
      'D. Mengusir Jepang dari Jawa',
      'E. Mengesahkan UUD 1945'
    ] },
    'SKD-TWK-X0309': { a: 2, o: [
      'A. meluasnya perdagangan internasional',
      'B. meningkatnya kerja sama antarnegara',
      'C. masuknya budaya asing tanpa saringan',
      'D. kemudahan memperoleh informasi',
      'E. berkembangnya teknologi komunikasi'
    ] },
    'SKD-TWK-X8049': { a: 3, o: [
      'A. Menutup akses pulau dari seluruh kegiatan ekonomi masyarakat nelayan',
      'B. Membiarkan pulau terluar dikelola pihak asing sepenuhnya agar cepat maju',
      'C. Mengalokasikan anggaran hanya di pulau berpenduduk paling padat',
      'D. Membangun konektivitas, layanan dasar, dan patroli maritim terpadu',
      'E. Memindahkan seluruh penduduk pulau tersebut ke ibu kota provinsi agar hemat anggaran'
    ] },
    'SKD-TWK-0232': { a: 2, o: [
      'A. Nilai dasarnya boleh diubah sesuai kehendak penguasa',
      'B. Menerima seluruh ideologi asing tanpa seleksi',
      'C. Nilai dasar tetap, penjabaran ikuti zaman',
      'D. Hanya berlaku bagi kalangan tertentu',
      'E. Tidak boleh ditafsirkan sama sekali'
    ] },
    'SKD-TWK-X7404': { a: 1, o: [
      'Menaikkan kuota untuk wilayah dengan pelamar terbanyak',
      'Pakai indikator kebutuhan dan umumkan kriteria',
      'Menghapus syarat kelayakan untuk seluruh pemohon',
      'Membagi sama rata ke setiap sekolah tanpa menilai kebutuhan',
      'Mempertahankan rumus lama dan memublikasikan hasilnya'
    ] },
    'SKD-TWK-X8085': { a: 1, o: [
      'A. Status lokasi penyerahan uang apakah di kantor atau di luar kantor',
      'B. Ada sepakat kehendak versus unsur paksaan pejabat',
      'C. Waktu penyerahan uang apakah sebelum atau sesudah rapat dimulai',
      'D. Bentuk pemberian apakah berupa uang tunai atau barang elektronik',
      'E. Besaran nominal uang yang diserahkan kepada pejabat'
    ] },
    'SKD-TWK-0030': { a: 1, o: [
      'A. Percakapan sehari-hari di dalam lingkungan rumah tangga seluruh warga negara',
      'B. Peraturan perundang-undangan, dokumen negara, dan pidato Presiden',
      'C. Penulisan karya sastra daerah dan tembang tradisional warisan leluhur',
      'D. Seluruh naskah doa keagamaan pada setiap rumah ibadah di Indonesia',
      'E. Komunikasi internal antarpegawai perusahaan asing di negara asalnya'
    ] },
    'SKD-TWK-0052': { a: 2, o: [
      'A. Sila Pertama: Ketuhanan Yang Maha Esa',
      'B. Sila Ketiga: Persatuan dalam keberagaman bangsa',
      'C. Sila Keempat: Kerakyatan dan permusyawaratan',
      'D. Sila Kelima: Keadilan sosial seluruh rakyat',
      'E. Sila Kedua: Kemanusiaan yang adil dan beradab'
    ] },
    'SKD-TWK-X0001': { a: 2, o: [
      'A. 1 (Ketuhanan Yang Maha Esa dan keyakinan)',
      'B. 2 (Kemanusiaan yang adil serta beradab)',
      'C. 4 (Kerakyatan dan permusyawaratan)',
      'D. 3 (Persatuan Indonesia dan kebangsaan)',
      'E. 5 (Keadilan sosial bagi seluruh rakyat Indonesia)'
    ] },
    'SKD-TWK-X8059': { a: 0, o: [
      'A. Gencatan senjata, pembebasan pemimpin RI, dan pulangnya pemerintah ke Yogyakarta',
      'B. Seluruh tentara Indonesia dibubarkan dan digabung ke dalam tentara Belanda',
      'C. Indonesia sepakat melepas seluruh wilayah Sumatera dan Kalimantan kepada Belanda',
      'D. Ibu kota negara dipindahkan secara permanen ke Den Haag',
      'E. Perjanjian tersebut mengakhiri keberadaan PBB di Asia Tenggara'
    ] },
    'SKD-TWK-X0340': { a: 1, o: [
      'A. bahasa asing hanya boleh dipakai oleh pegawai swasta',
      'B. bahasa daerah dihormati, bahasa asing dipakai tanpa ganti bahasa Indonesia',
      'C. bahasa daerah dan asing setara dengan bahasa Indonesia dalam dokumen negara',
      'D. bahasa asing wajib dipakai pada semua dokumen resmi',
      'E. bahasa daerah dilarang di ruang publik'
    ] },
    'SKD-TWK-X8041': { a: 0, o: [
      'A. Jaminan sosial seluruh rakyat serta pemberdayaan warga lemah dan tak mampu',
      'B. Pembatasan fasilitas pelayanan umum hanya bagi warga pembayar pajak tinggi',
      'C. Sistem asuransi swasta yang dikelola murni oleh pasar bebas tanpa campur tangan negara',
      'D. Pengalihan seluruh tanggung jawab fakir miskin kepada organisasi kemasyarakatan',
      'E. Pemberian bantuan tunai tanpa batas waktu tanpa disertai fasilitas pelayanan kesehatan'
    ] },
    'SKD-TWK-0014': { a: 1, o: [
      'A. Ancaman militer konvensional berupa agresi bersenjata dari negara asing',
      'B. Ancaman nirmiliter dan hibrida pada ketahanan ideologi, sosial, serta siber',
      'C. Gangguan ketertiban lalu lintas yang cukup ditangani oleh dinas perhubungan daerah',
      'D. Bencana alam geologis yang membutuhkan tanggap darurat logistik',
      'E. Konflik perbatasan darat yang harus diselesaikan melalui Mahkamah Internasional'
    ] },
    'SKD-TWK-X7412': { a: 2, o: [
      'Menghubungi beberapa pembaca saja agar koreksi tidak ramai',
      'Mengganti dokumen diam-diam supaya salinan lama hilang',
      'Verifikasi ulang, terbitkan revisi berlabel, dan jelaskan dampaknya',
      'Membiarkan angka lama terus beredar hingga laporan periode berikutnya',
      'Menghapus seluruh lampiran tanpa memberi keterangan'
    ] },
    'SKD-TWK-X0090': { a: 2, o: [
      'A. Menerima karena menyenangkan pemberi',
      'B. Membagikannya merata kepada seluruh bawahan agar adil',
      'C. Menolak, atau melapor ke KPK/UPG <= 30 hari kerja',
      'D. Menyimpan dan melapor tahun depan',
      'E. Menjual lalu menyumbangkan uangnya'
    ] },
    'SKD-TWK-X0219': { a: 0, o: [
      'A. Pemberian keluarga inti tanpa konflik jabatan',
      'B. Parsel dari rekanan pengadaan',
      'C. Voucer belanja dari pihak pengurus izin dinas',
      'D. Uang terima kasih dari warga setelah layanan',
      'E. Hadiah mahal dari penyedia jasa'
    ] },
    'SKD-TWK-X0313': { a: 4, o: [
      'A. menghindari seluruh media digital',
      'B. membagikan kabar tanpa memeriksa sumber',
      'C. menyerang akun negara lain',
      'D. memviralkan setiap kekurangan pemerintah tanpa verifikasi',
      'E. berbagi informasi benar dan mempromosikan budaya bangsa'
    ] },
    'SKD-TWK-X8090': { a: 0, o: [
      'A. Verifikasi ulang, terbitkan revisi berlabel, dan jelaskan koreksi',
      'B. Menunggu hingga laporan tahun depan untuk memperbaikinya',
      'C. Membiarkan angka itu karena perubahannya hanya sekitar dua persen',
      'D. Mengganti file di server diam-diam tanpa memberi keterangan revisi',
      'E. Menghapus laporan dari situs tanpa pemberitahuan agar publik lupa'
    ] },
    'SKD-TWK-0020': { a: 2, o: [
      'A. Nilai-nilai dasar Pancasila mengandung cita-cita luhur yang memberikan harapan masa depan yang lebih baik',
      'B. Nilai-nilai Pancasila dijabarkan ke dalam sistem norma hukum ketatanegaraan yang mengikat penyelenggara negara',
      'C. Nilai Pancasila berakar nyata dari budaya, adat, dan hidup masyarakat Indonesia sehari-hari',
      'D. Pancasila dapat diubah sila-silanya mengikuti tren ideologi kapitalisme maupun sosialisme global',
      'E. Pancasila hanya berlaku bagi warga negara yang bekerja di sektor pemerintahan formal'
    ] },
    'SKD-TWK-0015': { a: 2, o: [
      'A. Pelatihan dasar kemiliteran secara wajib',
      'B. Pengabdian sebagai prajurit Tentara Nasional Indonesia secara sukarela',
      'C. Pengabdian profesi menghadapi ancaman nirmiliter di bidang kesehatan',
      'D. Mobilisasi umum dalam menghadapi invasi militer negara tetangga',
      'E. Diplomasi politik luar negeri di wilayah perbatasan maritim'
    ] },
    'SKD-TWK-0195': { a: 2, o: [
      'A. Membuktikan kepada dunia internasional dan Dewan Keamanan PBB bahwa TNI dan Republik Indonesia masih eksis, sehingga memperkuat posisi diplomasi RI',
      'B. Organisasi massa besar pertama yang menghimpun pedagang pribumi dan rakyat luas untuk kemandirian ekonomi dan kesadaran politik',
      'C. Melahirkan ikrar Sumpah Pemuda serta pengumandangan perdana lagu Indonesia Raya oleh W.R. Supratman',
      'D. Menghasilkan kesepakatan luhur Piagam Jakarta (Jakarta Charter) yang menjadi cikal bakal Pembukaan UUD 1945',
      'E. Menetapkan garis demarkasi Van Mook yang mengharuskan pasukan TNI (Divisi Siliwangi) hijrah dari Jawa Barat ke Yogyakarta'
    ] },
    'SKD-TWK-X8053': { a: 2, o: [
      'A. Menghapus peran Perserikatan Bangsa-Bangsa dalam diplomasi multilateral',
      'B. Mendorong pembentukan blok militer tertutup di kawasan Asia',
      'C. Menghormati kedaulatan bangsa, kesetaraan ras, dan solusi damai',
      'D. Mewajibkan negara berkembang memakai sistem pemerintahan yang seragam',
      'E. Menutup kerja sama ekonomi dengan seluruh negara di luar Asia dan Afrika'
    ] },
    'SKD-TWK-X8076': { a: 4, o: [
      'A. Mengutamakan kepentingan kelompok alumni dalam rekrutmen tenaga ahli',
      'B. Menjalankan perintah atasan meskipun bertentangan dengan peraturan perundang-undangan',
      'C. Membatasi penggunaan sistem informasi hanya pada instansi pusat',
      'D. Menghafalkan urutan tanggal sidang BPUPKI hanya saat menghadapi ujian kenaikan pangkat',
      'E. Menjadikan Pancasila pedoman etika layanan serta menolak diskriminasi'
    ] },
    'SKD-TWK-X8045': { a: 2, o: [
      'A. Menganggap budaya lokal sudah usang sehingga cukup dilestarikan di museum',
      'B. Meniru persis konten luar negeri dan mengganti seluruh referensi budaya lokal',
      'C. Memanfaatkan teknologi secara selektif untuk mengangkat budaya lokal',
      'D. Melarang generasi muda mempelajari bahasa asing karena mengancam jati diri',
      'E. Memboikot seluruh perangkat lunak dan karya kreatif buatan luar negeri'
    ] },
    'SKD-TWK-X8081': { a: 1, o: [
      'A. Menyusun ringkasan laporan sebelum diserahkan kepada pimpinan unit',
      'B. Memasukkan data rahasia jabatan ke platform luar tanpa izin',
      'C. Memeriksa kembali tata bahasa laporan sebelum dicetak',
      'D. Menggunakan komputer kantor untuk membuka aplikasi kerja',
      'E. Memakai teknologi digital untuk mempercepat penulisan laporan'
    ] },
    'SKD-TWK-0088': { a: 1, o: [
      'A. Kesamaan ras semata',
      'B. Kehendak hidup bersama dan sejarah',
      'C. Kesamaan agama semata',
      'D. Kesamaan batas wilayah geografis saja',
      'E. Kesamaan bahasa saja'
    ] },
    'SKD-TWK-X0005': { a: 0, o: [
      'A. Sidang I BPUPKI – Panitia Sembilan – Sidang II BPUPKI – Sidang PPKI',
      'B. Sidang PPKI – Sidang I BPUPKI – Panitia Sembilan – Sidang II BPUPKI',
      'C. Panitia Sembilan – Sidang I BPUPKI – Sidang PPKI – Sidang II BPUPKI',
      'D. Sidang II BPUPKI – Sidang I BPUPKI – Panitia Sembilan – Sidang PPKI',
      'E. Sidang I BPUPKI – Sidang PPKI – Panitia Sembilan – Sidang II BPUPKI'
    ] },
    'SKD-TWK-X8014': { a: 2, o: [
      'A. Mengembangkan sikap cinta tanah air dan rela berkorban untuk negara',
      'B. Menghormati pemeluk agama lain dalam menjalankan peribadatan khusus',
      'C. Mengakui persamaan derajat dan hak manusia tanpa membedakan golongan',
      'D. Menjauhkan diri dari sikap boros demi keberlanjutan dana sosial',
      'E. Mengutamakan kepentingan golongan minoritas di atas aturan panti yang berlaku'
    ] },
    'SKD-TWK-X8078': { a: 1, o: [
      'A. Tetap menilai secara diam-diam agar proses lelang cepat selesai dan hemat anggaran',
      'B. Melapor benturan kepentingan tertulis lalu mundur dari tim penilai',
      'C. Meminta saudaranya mengundurkan diri dari tender sebelum pengumuman dibuka',
      'D. Membatalkan seluruh paket pengadaan tanpa melaporkan alasannya',
      'E. Meminta rekan setim memberi nilai tinggi asalkan tidak dicatat atas namanya'
    ] },
    'SKD-TWK-X8086': { a: 2, o: [
      'A. Mengubah tanggal sesuai arahan lisan atasan karena takut penilaian kinerja turun',
      'B. Menyetujui permintaan atasan asalkan dibuatkan surat pernyataan rahasia',
      'C. Menolak sopan dengan info risiko hukum dan mencatat tanggal riilnya',
      'D. Meminta rekan junior yang menandatangani berita acara tersebut',
      'E. Mengosongkan kolom tanggal agar tidak ada pihak yang disalahkan'
    ] },
    'SKD-TWK-X0306': { a: 2, o: [
      'A. patriotisme hanya dimiliki prajurit, chauvinisme dimiliki warga sipil',
      'B. keduanya sama-sama bermakna cinta tanah air tanpa perbedaan',
      'C. patriotisme cinta tanah air wajar; chauvinisme merendahkan bangsa',
      'D. patriotisme menolak kerja sama internasional, chauvinisme menerimanya',
      'E. patriotisme berasal dari dalam negeri, chauvinisme dari luar negeri'
    ] },
    'SKD-TWK-0012': { a: 1, o: [
      'A. Adaptif, yaitu terus berinovasi dan antusias dalam menggerakkan ataupun menghadapi perubahan',
      'B. Akuntabel, bertanggung jawab atas kepercayaan secara jujur dan cermat',
      'C. Amanah, yaitu menjaga rahasia jabatan dan dokumen negara dari pihak luar',
      'D. Aspiratif, yaitu menampung seluruh keluhan masyarakat tanpa terkecuali',
      'E. Antikorupsi, yaitu menolak segala bentuk suap dan pemerasan dalam pelayanan'
    ] },
    'SKD-TWK-X0074': { a: 1, o: [
      'A. Pengakuan kedaulatan Indonesia',
      'B. Pemerintah RI kembali ke Yogyakarta',
      'C. Garis demarkasi Van Mook diakui',
      'D. Pembentukan Uni Indonesia-Belanda permanen',
      'E. Pembagian Jawa menjadi dua negara'
    ] },
    'SKD-TWK-X0091': { a: 2, o: [
      'A. Suap hanya dilakukan swasta',
      'B. Pemerasan selalu menyangkut kerugian keuangan negara secara langsung',
      'C. Suap bersifat kesepakatan, pemerasan bersifat paksaan',
      'D. Suap tidak dapat dipidana',
      'E. Keduanya sama'
    ] },
    'SKD-TWK-0051': { a: 4, o: [
      'A. Menghormati simbol-simbol negara',
      'B. Menjaga persatuan di tengah perbedaan',
      'C. Ketaatan penuh terhadap hukum nasional yang berlaku',
      'D. Bangga menggunakan bahasa Indonesia',
      'E. Chauvinisme yang merendahkan bangsa lain'
    ] },
    'SKD-TWK-X8056': { a: 3, o: [
      'A. Ikut mengajak warga menolak kewajiban pajak hingga seluruh proyek dipindahkan',
      'B. Mengusulkan daerah tersebut mengatur anggaran tanpa koordinasi nasional',
      'C. Membalas dengan menyalahkan kelompok masyarakat di provinsi lain',
      'D. Membuka data capaian musrenbang dan mengajak dialog konstitusional',
      'E. Menutup seluruh saluran pengaduan publik agar isu tidak semakin melebar'
    ] },
    'SKD-TWK-0018': { a: 1, o: [
      'A. Kemampuan awal bela negara secara fisik militer',
      'B. Kesadaran berbangsa lewat ketaatan pada hukum',
      'C. Diplomasi pertahanan lintas batas negara',
      'D. Penanggulangan konflik bersenjata di daerah rawan',
      'E. Mobilisasi komponen cadangan pertahanan'
    ] },
    'SKD-TWK-X8034': { a: 2, o: [
      'A. Memutus perkara kasasi dan menguji Perda terhadap undang-undang',
      'B. Menetapkan masa pensiun hakim dan menyusun anggaran Mahkamah Agung',
      'C. Mengusulkan hakim agung dan menjaga keluhuran perilaku hakim',
      'D. Melantik hakim konstitusi dan memeriksa keuangan pengadilan',
      'E. Mengadili sengketa hasil pemilu dan membubarkan partai politik'
    ] },
    'SKD-TWK-0024': { a: 1, o: [
      'A. Menyatukan pasukan kerajaan-kerajaan Nusantara untuk mengusir armada Kekaisaran Mongol (Tartar)',
      'B. Membangun toleransi pemeluk Hindu (Siwa) dan Buddha hidup berdampingan damai',
      'C. Menetapkan pajak perdagangan maritim di sepanjang Selat Malaka dan Laut Jawa',
      'D. Mengatur sistem pewarisan takhta kerajaan di antara keturunan Raden Wijaya',
      'E. Menyeragamkan bahasa pengantar sastra Jawa Kuno dengan bahasa Sanskerta'
    ] },
    'SKD-TWK-X0096': { a: 0, o: [
      'A. Bertanggung jawab atas amanah dan kinerja',
      'B. Menunggu perintah atasan',
      'C. Menghindari seluruh kritik publik yang muncul',
      'D. Bekerja sesuai keinginan sendiri',
      'E. Bekerja keras semata demi meraih penghargaan'
    ] },
    'SKD-TWK-X0305': { a: 2, o: [
      'A. primordialisme yang kaku dan sempit',
      'B. etnosentrisme',
      'C. nasionalisme (utamakan bangsa)',
      'D. separatisme',
      'E. isolasionisme'
    ] },
    'SKD-TWK-X8063': { a: 3, o: [
      'A. Otonomi daerah dilarang karena bertentangan dengan bentuk negara kesatuan',
      'B. Pemerintah daerah boleh memisahkan diri jika mendapat persetujuan DPRD',
      'C. Presiden dapat mengubah sistem pemerintahan menjadi serikat melalui Perppu',
      'D. UUD boleh diubah kecuali bentuk negara kesatuan Republik Indonesia',
      'E. UUD 1945 sama sekali tidak boleh diamandemen pada pasal mana pun'
    ] },
    'SKD-TWK-X0099': { a: 1, o: [
      'A. Percakapan di rumah',
      'B. Dokumen dan pidato resmi negara',
      'C. Lagu daerah',
      'D. Upacara adat setempat',
      'E. Daftar menu masakan khas tradisional daerah'
    ] },
    'SKD-TWK-X0311': { a: 3, o: [
      'A. membalas dengan merendahkan suku lain',
      'B. ikut membagikan pesan agar makin banyak orang tahu',
      'C. menghapus grup tanpa melakukan apa pun',
      'D. menahan sebaran, mengingatkan, dan melapor',
      'E. mendiamkan karena bukan urusannya'
    ] },
    'SKD-TWK-X8070': { a: 1, o: [
      'A. Meneruskan pesan dengan tambahan kalimat agar keluarga segera menarik uang',
      'B. Verifikasi ke otoritas resmi, hentikan hoaks, dan beri pelurusan',
      'C. Menonaktifkan ponsel agar tidak menerima informasi apa pun',
      'D. Menyimpan pesan tersebut dan mengirimkannya ke grup kantor untuk bahan bercanda',
      'E. Menulis komentar marah di media sosial tanpa mengecek fakta terlebih dahulu'
    ] },
    'SKD-TWK-X8038': { a: 0, o: [
      'A. Tugas penasihat cukup di bawah Presiden agar lembaga lebih efektif',
      'B. Seluruh anggotanya dipindahkan menjadi anggota Dewan Perwakilan Daerah',
      'C. DPA dianggap bertentangan dengan bentuk negara kesatuan',
      'D. Presiden dilarang meminta nasihat atau pertimbangan dari pihak mana pun',
      'E. Fungsi pertimbangan telah digantikan sepenuhnya oleh Mahkamah Konstitusi'
    ] },
    'SKD-TWK-0078': { a: 3, o: [
      'A. Perdana menteri sebagai kepala pemerintahan',
      'B. Presiden dipilih oleh parlemen',
      'C. Kabinet bertanggung jawab kepada parlemen',
      'D. Presiden kepala negara dan pemerintahan',
      'E. Presiden hanya simbol kepala negara'
    ] },
    'SKD-TWK-X8050': { a: 2, o: [
      'A. Didirikan sebagai organisasi semi-militer di bawah pengawasan pemerintah kolonial',
      'B. Menolak penggunaan bahasa Melayu dalam surat kabar pergerakan',
      'C. Menuntut kemerdekaan penuh serta terbuka bagi semua golongan',
      'D. Hanya berfokus pada bidang perdagangan batik bagi pengusaha lokal Jawa',
      'E. Bertujuan mempertahankan status Hindia Belanda sebagai bagian kerajaan Belanda'
    ] },
    'SKD-TWK-X8080': { a: 2, o: [
      'A. Menerima lalu menyumbangkannya ke kotak amal tanpa mencatat sumbernya',
      'B. Menerima amplop itu karena besarannya tidak seberapa dan dianggap lumrah',
      'C. Menolak tegas sesuai aturan dinas dan melapor ke UPG jika terpaksa',
      'D. Mengambil separuhnya dan mengembalikan sisanya ke bendahara vendor',
      'E. Meminta panitia mentransfer saja ke rekening pribadi agar tidak terlihat peserta lain'
    ] },
    'SKD-TWK-X8100': { a: 4, o: [
      'A. Lambang kebanggaan kebangsaan dan alat pemersatu berbagai suku bangsa',
      'B. Sarana pelestarian sastra lisan daerah di tingkat kecamatan',
      'C. Identitas etnis tertentu di wilayah pesisir Kepulauan Riau',
      'D. Alat perhubungan antarbudaya daerah dalam upacara adat setempat',
      'E. Bahasa pengantar pendidikan, kenegaraan, dan alat perhubungan nasional'
    ] },
    'SKD-TWK-X8102': { a: 4, o: [
      'A. Bebas menggunakan bahasa asing sepenuhnya selama disertai logo perusahaan',
      'B. Harus menggunakan bahasa daerah walaupun berada di kantor perwakilan kementerian pusat',
      'C. Hanya diwajibkan untuk gedung sekolah negeri dan balai desa',
      'D. Dilarang memakai kata serapan yang sudah terdaftar di dalam KBBI',
      'E. Wajib bahasa Indonesia, kecuali memiliki nilai sejarah, budaya, atau agama'
    ] },
    'SKD-TWK-X8072': { a: 1, o: [
      'A. Menutup seluruh informasi mengenai celah keamanan agar nama instansi tidak tercoreng',
      'B. Tutup celah, amankan log, lapor ke tim CSIRT, dan beri info pihak terdampak',
      'C. Membiarkan sistem tetap berjalan hingga masa pemeliharaan tahun depan',
      'D. Menghapus seluruh data pengaduan warga tanpa memberi tahu pelapor',
      'E. Menyalahkan warga karena mengirimkan dokumen pengaduan lewat situs resmi'
    ] },
    'SKD-TWK-X0084': { a: 2, o: [
      'A. Proklamasi kemerdekaan',
      'B. Serangan Umum 1 Maret',
      'C. Pembentukan PDRI (1948)',
      'D. Peristiwa Rengasdengklok',
      'E. Pertempuran Surabaya'
    ] },
    'SKD-TWK-X0087': { a: 1, o: [
      'A. Sepenuhnya dikuasai oleh Kepolisian',
      'B. Memperkuat kemampuan komponen utama',
      'C. Hanya terdiri dari kader partai',
      'D. Tidak boleh dilatih sebelum perang',
      'E. Dipakai untuk kegiatan komersial'
    ] },
    'SKD-TWK-0058': { a: 0, o: [
      'A. Pengakuan kedaulatan RI (RIS) oleh Belanda',
      'B. Pengakuan Indonesia sebagai negara kesatuan',
      'C. Pengembalian Irian Barat seketika',
      'D. Pembubaran seluruh pasukan Indonesia',
      'E. Pembentukan Perserikatan Bangsa-Bangsa'
    ] },
    'SKD-TWK-X0101': { a: 4, o: [
      'A. Pendidikan dasar, kesehatan masyarakat, dan kebudayaan daerah',
      'B. Pekerjaan umum, penataan ruang, perumahan rakyat, serta pertanahan',
      'C. Sosial, ketenteraman umum, ketenagakerjaan, serta perlindungan warga',
      'D. Lingkungan hidup, pertanian pangan, kelautan, dan energi daerah',
      'E. Politik luar negeri, pertahanan, keamanan, yustisi, moneter, agama'
    ] },
    'SKD-TWK-X8084': { a: 0, o: [
      'A. Menolak tanda tangan, mengingatkan rekan, dan melapor ke kanal internal',
      'B. Ikut menandatangani agar tidak dikucilkan oleh kelompok kerja',
      'C. Membagikan foto daftar hadir tersebut secara anonim di forum publik internet',
      'D. Meminta bagian honorarium sebagai uang tutup mulut',
      'E. Diam saja karena menilai jumlah honorariumnya tidak terlalu besar'
    ] },
    'SKD-TWK-X0079': { a: 1, o: [
      'A. Membubarkan DPR dan MPRS',
      'B. Menjamin keamanan serta wibawa pemerintah',
      'C. Menyerahkan jabatan Presiden',
      'D. Memproklamasikan Demokrasi Terpimpin',
      'E. Membentuk susunan Kabinet Dwikora yang disempurnakan'
    ] },
    'SKD-TWK-X0102': { a: 2, o: [
      'A. UUD 1945 – UU – TAP MPR – Perpres – PP – Perda Prov – Perda Kab',
      'B. TAP MPR – UUD 1945 – UU – PP – Perda – Perpres',
      'C. UUD 1945 – TAP MPR – UU/Perppu – PP – Perpres – Perda Prov/Kab',
      'D. UUD 1945 – TAP MPR – PP – UU – Perpres – Perda',
      'E. UUD 1945 – UU – PP – Perpres – TAP MPR – Perda'
    ] },
    'SKD-TWK-X8075': { a: 2, o: [
      'A. Polri bertugas memutus uji materi undang-undang; TNI mengawasi keuangan daerah',
      'B. TNI dan Polri hanya bertugas pada masa perang terbuka',
      'C. TNI jaga kedaulatan dan keutuhan negara; Polri jaga kamtibmas dan hukum',
      'D. Kejaksaan memimpin operasi pertahanan udara menggantikan TNI',
      'E. TNI menjaga ketertiban lalu lintas kota; Polri menjaga perbatasan laut internasional'
    ] },
    'SKD-TWK-X0026': { a: 2, o: [
      'A. Ketua MPR Republik Indonesia',
      'B. Ketua DPR',
      'C. Mendagri, Menlu, dan Menhan secara bersama',
      'D. Panglima TNI dan Kepala Staf Angkatan',
      'E. Perdana Menteri bersama Menteri Keuangan RI'
    ] },
    'SKD-TWK-X8093': { a: 4, o: [
      'A. Mengganti kata "tingkat" menjadi "para tingkat"',
      'B. Memindahkan kata "signifikan" ke awal kalimat',
      'C. Mengubah kata "menunjukkan" menjadi "ditunjukkan"',
      'D. Menambahkan tanda koma setelah kata "inspektorat"',
      'E. Menghilangkan kata "menurut" pada awal kalimat'
    ] },
    'SKD-TWK-X0025': { a: 4, o: [
      'A. >50% suara nasional tanpa ketentuan sebaran wilayah provinsi',
      'B. 30% suara di seluruh provinsi',
      'C. 40% suara dengan sebaran 10 provinsi',
      'D. Suara terbanyak tanpa batas minimal',
      'E. >50% suara sah dengan >=20% di lebih dari separuh provinsi'
    ] },
    'SKD-TWK-0013': { a: 1, o: [
      'A. Bela negara hanya berlaku saat darurat militer, sedangkan pertahanan keamanan berlaku pada masa damai',
      'B. Bela negara berspektrum luas jaga eksistensi negara; hankam fokus fisik dengan TNI-Polri sebagai kekuatan utama',
      'C. Bela negara khusus bagi Aparatur Sipil Negara, sedangkan pertahanan keamanan khusus bagi anggota TNI dan Polri',
      'D. Bela negara bersifat sukarela tanpa dasar undang-undang, sedangkan pertahanan keamanan bersifat wajib militer',
      'E. Bela negara hanya dilakukan di dalam wilayah teritorial Indonesia, sedangkan pertahanan keamanan dilakukan di luar negeri'
    ] }
  };
  const TKP_PATCH = {
    'SKD-TKP-0073': { a: 0, s: 'A. Tetap tenang, hargai masukan, minta rincian, dan tindak lanjuti kritik yang valid' },
    'SKD-TKP-0101': { a: 4, s: 'E. Lapor ke aparat setempat, dokumentasikan aman, dan hindari aksi berbahaya' },
    'SKD-TKP-0108': { a: 1, s: 'B. Catat rincian, arahkan warga melapor resmi, dan teruskan ke unit pengawasan' },
    'SKD-TKP-0164': { a: 0, s: 'A. Fasilitasi dialog warga dan pengungsi, edukasi kemanusiaan, dan jaga bantuan' },
    'SKD-TKP-0176': { a: 2, s: 'C. Berusaha berbahasa daerah sebisanya lalu mencari rekan fasih bila perlu' },
    'SKD-TKP-0202': { a: 1, s: 'B. Hubungi penyelenggara untuk salinan resmi dan kabari kepegawaian sesuai aturan' },
    'SKD-TKP-0231': { a: 1, s: 'B. Sediakan rekaman, materi tertulis, serta catat kendala sinyal untuk perbaikan' },
    'SKD-TKP-0260': { a: 1, s: 'B. Gandeng sekolah dan tokoh warga untuk kegiatan bersama dan edukasi toleransi' },
    'SKD-TKP-0311': { a: 4, s: 'E. Tegur santun bahwa sikap itu melanggar etika ASN, lalu lapor bila berlanjut' },
    'SKD-TKP-0318': { a: 1, s: 'B. Jelaskan syarat, bantu pendaftaran kelompok tani, dan beri info jadwal berikut' },
    'SKD-TKP-0320': { a: 1, s: 'B. Jelaskan acara terbuka tanpa syarat pakaian dan undang secara personal' },
    'SKD-TKP-N0012': { a: 1, s: 'B. Ajak berbaur, ingatkan rekan secara santun untuk menghargai, dan buat acara bersama' },
    'SKD-TKP-N0256': { a: 4, s: 'E. Tolak ajakan, tegaskan setia pada Pancasila dan NKRI, lalu lapor pimpinan' },
    'SKD-TKP-N0395': { a: 2, s: 'C. Jelaskan agenda dengan sopan, atur pembagian waktu bersama rekan, dan selesaikan tepat waktu' },
    'SKD-TKP-X3828': { a: 1, s: 'B. Ajak makan siang, berkenalan, dan kenalkan pada rekan serta kebiasaan kerja.' },
    'SKD-TKP-X3836': { a: 0, s: 'A. Usulkan akses per akun, 2FA, dan penggantian kata sandi secara berkala.' },
    'SKD-TKP-X3844': { a: 3, s: 'D. Akui kesiapan secara jujur, susun rencana belajar, dan minta bimbingan.' },
    'SKD-TKP-X3865': { a: 1, s: 'B. Usulkan jeda singkat lalu beri tiap pihak giliran menyampaikan alasan.' },
    'SKD-TKP-X8078': { a: 3, s: 'D. Simak kritik tenang, tanyakan poin lapangan, dan perbaiki konsep bersama.' },
    'SKD-TKP-X8084': { a: 3, s: 'D. Laporkan penyimpangan pemakaian BMN lewat pengawasan resmi disertai bukti jadwal.' },
    'SKD-TKP-0072': { a: 0, s: 'A. Sambut ramah, arahkan ke humas atau jubir resmi, lalu beri tahu atasan' },
    'SKD-TKP-0100': { a: 4, s: 'E. Minta klarifikasi kriteria secara sopan disertai bukti lewat mekanisme resmi' },
    'SKD-TKP-0154': { a: 3, s: 'D. Sajikan data kemampuan tim, ajukan target bertahap, dan tetap berkomitmen' },
    'SKD-TKP-0255': { a: 0, s: 'A. Minta rekan segera menghapusnya, jelaskan risiko, dan lapor atasan bila meluas' },
    'SKD-TKP-0283': { a: 0, s: 'A. Susun jadwal adil, dengarkan alasan sah, dan jelaskan kriteria ke tim' },
    'SKD-TKP-0288': { a: 1, s: 'B. Jawab poin inti singkat, jadwalkan konsultasi, dan beri panduan agar lancar' },
    'SKD-TKP-X3811': { a: 1, s: 'B. Hubungi mitra, cek kendala, sepakati tenggat tertulis, dan lapor atasan.' },
    'SKD-TKP-X3818': { a: 4, s: 'E. Usulkan pembagian waktu bicara dan minta peserta lain mengirim masukan tertulis.' },
    'SKD-TKP-X3835': { a: 1, s: 'B. Usulkan pembaruan rutin, tetapkan petugas respons, dan siapkan FAQ resmi.' },
    'SKD-TKP-X3855': { a: 2, s: 'C. Laporkan ke atasan atau unit berwenang beserta bukti tanpa menyebarkannya.' },
    'SKD-TKP-X3857': { a: 4, s: 'E. Tanyakan alasannya, jelaskan makna upacara, dan ingatkan kewajiban ASN.' },
    'SKD-TKP-X8029': { a: 0, s: 'A. Buat ringkasan 1 halaman dan studi kasus, adakan sesi berbagi singkat dan diskusi.' },
    'SKD-TKP-X8069': { a: 0, s: 'A. Apresiasi pelapor, teruskan rincian ke tim keamanan siber untuk ditambal, dan catat.' },
    'SKD-TKP-X8089': { a: 3, s: 'D. Ingatkan santun bahwa grup kerja bebas konten kebencian, dan lapor bila berulang.' },
    'SKD-TKP-0182': { a: 3, s: 'D. Laporkan ke atasan atau aparat, minta klarifikasi, dan ajak jaga persatuan' },
    'SKD-TKP-0184': { a: 3, s: 'D. Nilai urgensinya, balas bila mendesak, lalu bahas batas komunikasi dengan atasan' },
    'SKD-TKP-0296': { a: 2, s: 'C. Kunjungi, koordinasi dengan kader setempat, dan hubungkan ke layanan sosial' },
    'SKD-TKP-0298': { a: 2, s: 'C. Jaga kerahasiaan, jelaskan info bersifat resmi, dan minta rekan menunggu' },
    'SKD-TKP-0347': { a: 0, s: 'A. Tolak membahasnya, sampaikan pesan persaudaraan, dan ajak hargai perbedaan' },
    'SKD-TKP-N0202': { a: 4, s: 'E. Minta maaf, cek status berkas, hubungi unit terkait, dan beri kepastian waktu' },
    'SKD-TKP-N0248': { a: 4, s: 'E. Tegur baik-baik, ingatkan netralitas ASN dan bahaya kebencian, lalu lapor bila berulang' },
    'SKD-TKP-X3804': { a: 0, s: 'A. Analisis jam padat lalu usulkan antrean daring bertahap dan loket tambahan.' },
    'SKD-TKP-X3831': { a: 2, s: 'C. Abaikan tautan, verifikasi ke atasan lewat kanal resmi, dan lapor ke tim TI.' },
    'SKD-TKP-X8001': { a: 3, s: 'D. Tanggapi empatik, cek nomor registrasi untuk penyelesaian, dan beri kabar resmi.' },
    'SKD-TKP-X8096': { a: 0, s: 'A. Ajak dialog bersahabat soal makna persatuan di balik simbol upacara kenegaraan.' },
    'SKD-TKP-0335': { a: 3, s: 'D. Hentikan secara santun, edukasi remaja, dan lapor kepada pengelola atau aparat' },
    'SKD-TKP-X3806': { a: 3, s: 'D. Terima berkas lewat jalur resmi darurat dan laporkan kendala beserta bukti ke TI.' },
    'SKD-TKP-X3813': { a: 3, s: 'D. Kenalkan diri, sepakati format dan tenggat bersama, dan tunjuk narahubung.' },
    'SKD-TKP-X3820': { a: 4, s: 'E. Buat ringkasan inti, bagikan dalam sesi singkat, dan buka tanya jawab tim.' },
    'SKD-TKP-X3854': { a: 3, s: 'D. Dekati dengan empati, buka dialog, dan konsultasi ke aparat bila ada tanda keras.' },
    'SKD-TKP-X3858': { a: 1, s: 'B. Tolak bergabung dan laporkan bila komunitas menyebarkan kebencian atau paksaan.' },
    'SKD-TKP-X3860': { a: 2, s: 'C. Tolak dengan menjelaskan aturan kantor, lalu laporkan permintaan itu ke atasan.' },
    'SKD-TKP-X3866': { a: 3, s: 'D. Bantu langsung warga di tempat dan siapkan panduan bergambar serta pendamping.' },
    'SKD-TKP-X8071': { a: 1, s: 'B. Sampaikan kondisi keluarga jujur, namun tetap tuntaskan bahan paparan malam itu dengan izin.' },
    'SKD-TKP-0046': { a: 0, s: 'A. Tolak sopan, jelaskan layanan tanpa imbalan, dan lapor sesuai aturan bila diterima' },
    'SKD-TKP-0157': { a: 4, s: 'E. Atur prioritas, jelaskan beban kerja, lalu tawarkan bantu di waktu realistis' },
    'SKD-TKP-0278': { a: 4, s: 'E. Dengarkan penuh hormat, jaga kebersamaan, dan hargai keragaman minat rekan' },
    'SKD-TKP-N0209': { a: 2, s: 'C. Jelaskan instansi berwenang, arahkan kontak atau lokasi, dan pastikan warga paham alur' },
    'SKD-TKP-X3822': { a: 0, s: 'A. Tegur candaan secara santun, ajak rekan baru bergabung, dan hargai ragam logat.' },
    'SKD-TKP-X3824': { a: 3, s: 'D. Sampaikan keberatan dengan sopan, ingatkan dampaknya, lalu keluar dari grup.' },
    'SKD-TKP-X3850': { a: 1, s: 'B. Tolak sopan dan jelaskan bahwa aset kantor tidak boleh dipakai urusan pribadi.' },
    'SKD-TKP-X7414': { a: 1, s: 'Beri format contoh serta pemetaan sementara lalu jadwalkan orientasi' },
    'SKD-TKP-X8023': { a: 2, s: 'C. Hargai masukan senior, rangkum poinnya, lalu bagi waktu diskusi tim daerah secara adil.' },
    'SKD-TKP-X8041': { a: 3, s: 'D. Geser jadwal rapat ke slot bebas jam ibadah rekan sambil menjaga target kerja.' },
    'SKD-TKP-0104': { a: 0, s: 'A. Ingatkan jaminan konstitusi atas hak ibadah, ajak tokoh berdialog, dan cari solusi' },
    'SKD-TKP-0159': { a: 4, s: 'E. Segera ganti sandi, keluarkan sesi aktif, aktifkan 2FA, dan lapor ke tim TI' },
    'SKD-TKP-0263': { a: 1, s: 'B. Laporkan konten ke platform, edukasi keluarga, dan ajak remaja berdiskusi aman' },
    'SKD-TKP-0267': { a: 2, s: 'C. Terapkan fitur aksesibel (teks alt, kontras, screen reader) dan uji bersama pengguna' },
    'SKD-TKP-N0204': { a: 2, s: 'C. Tolak sopan, tegaskan layanan gratis sesuai antrean, dan lapor ke atasan atau UPG' },
    'SKD-TKP-N0206': { a: 1, s: 'B. Analisis titik lambat, ajukan perbaikan alur ke pimpinan, dan sesuaikan SOP resmi' },
    'SKD-TKP-N0236': { a: 0, s: 'A. Hindari mengunggah foto memuat data warga atau samarkan sesuai kebijakan komunikasi' },
    'SKD-TKP-X3815': { a: 0, s: 'A. Akui keterbatasan secara jujur, sampaikan hal dikuasai, dan susulkan masukan.' },
    'SKD-TKP-X3832': { a: 1, s: 'B. Jadwalkan di jam sepi, umumkan ke pengguna, dan cadangkan data lebih dulu.' },
    'SKD-TKP-X3846': { a: 0, s: 'A. Kumpulkan data pemborosan waktu, rancang perbaikan, dan ajukan ke atasan.' },
    'SKD-TKP-X8002': { a: 4, s: 'E. Hampiri pemohon lansia, bantu ambil nomor antrean, dan jelaskan langkah ramah.' },
    'SKD-TKP-X8076': { a: 1, s: 'B. Kumpulkan data waktu, rancang alur kerja ramping, dan ajukan resmi ke pimpinan.' },
    'SKD-TKP-X8077': { a: 4, s: 'E. Laporkan capaian jujur disertai bukti kendala eksternal dan rencana pemulihan.' },
    'SKD-TKP-0160': { a: 4, s: 'E. Tolak sopan, tegaskan mobil dinas hanya untuk dinas, dan tawarkan kendaraan pribadi' },
    'SKD-TKP-0173': { a: 1, s: 'B. Tetap tenang, dokumentasikan kejadian, lalu lapor tokoh warga atau aparat' },
    'SKD-TKP-0208': { a: 2, s: 'C. Susun dengan data valid, catat bukti tertunda, beri info atasan, dan lengkapi segera' },
    'SKD-TKP-0222': { a: 0, s: 'A. Segera tolong korban, pasang tanda licin, dan lapor agar prosedur diperbaiki' },
    'SKD-TKP-0287': { a: 0, s: 'A. Hindari prasangka, kumpulkan fakta hati-hati, dan lapor atasan bila ada bukti' },
    'SKD-TKP-0342': { a: 0, s: 'A. Layani sesuai kuota, data sisanya, lalu jadwalkan layanan lanjutan ke sekolah' },
    'SKD-TKP-X3840': { a: 2, s: 'C. Cek kebijakan kantor, pakai aplikasi resmi, dan ajukan fitur ke bagian TI.' },
    'SKD-TKP-X8005': { a: 4, s: 'E. Cek slot pembatalan atau konsultasi darurat sah tanpa menyerobot antrean lain.' },
    'SKD-TKP-X8049': { a: 2, s: 'C. Gunakan bahasa sederhana agar semua paham dan aktif libatkan pegawai senior.' },
    'SKD-TKP-X8058': { a: 2, s: 'C. Buat panduan bergambar singkat, dampingi rekan, dan catat bug ke pengembang.' },
    'SKD-TKP-X8065': { a: 4, s: 'E. Pakai perangkat resmi, ajukan pengadaan ke tim TI, dan ingatkan risiko malware.' },
    'SKD-TKP-X8075': { a: 4, s: 'E. Akui hal baru, pelajari modul teknis, diskusi ke ahli, dan susun rencana kerja.' },
    'SKD-TKP-X8086': { a: 0, s: 'A. Atur jadwal ketat fokus kelengkapan bukti sah tanpa potong prosedur dan beri info.' },
    'SKD-TKP-0093': { a: 3, s: 'D. Segera koreksi unggahan, beri klarifikasi, lapor atasan, dan buat pencegahan' },
    'SKD-TKP-0162': { a: 0, s: 'A. Jelaskan kanal darurat atau daring, catat aduan awal, dan beri jadwal layanan' },
    'SKD-TKP-0163': { a: 0, s: 'A. Akui peran rekan terbuka, berterima kasih, dan bagikan peluang pembinaan bersama' },
    'SKD-TKP-0258': { a: 1, s: 'B. Akui keliru, minta maaf, bantu selesaikan hari itu, dan perbaiki info ke depan' },
    'SKD-TKP-0316': { a: 0, s: 'A. Atur prioritas dan delegasi, ikuti pelatihan serius, dan pantau tugas utama' },
    'SKD-TKP-0338': { a: 4, s: 'E. Hormati tradisi pembuka, beri waktu berdoa sesuai keyakinan, dan jaga inklusivitas' },
    'SKD-TKP-N0223': { a: 3, s: 'D. Libatkan panitia lintas agama, pastikan acara inklusif, dan beri porsi yang adil' },
    'SKD-TKP-N0390': { a: 0, s: 'A. Rekam sesuai aturan, bagikan bahan rapat, dan beri kanal tanya jawab tertulis' },
    'SKD-TKP-X3849': { a: 2, s: 'C. Tolak menandatangani dan minta laporan disesuaikan dengan realisasi nyata.' },
    'SKD-TKP-X3853': { a: 0, s: 'A. Tahan undangan itu, beri edukasi ke warga, dan berkoordinasi dengan aparat.' },
    'SKD-TKP-X8015': { a: 2, s: 'C. Tolak pemberian ramah, jelaskan layanan gratis ASN, dan arahkan isi survei saja.' },
    'SKD-TKP-X8081': { a: 3, s: 'D. Ajak cek penyebab galat, bagi trik cegah, dan ajukan validasi sederhana di form.' },
    'SKD-TKP-X8092': { a: 2, s: 'C. Amankan selebaran agar tak tersebar, dokumentasikan, dan lapor keamanan/pimpinan.' },
    'SKD-TKP-X8102': { a: 0, s: 'A. Gandeng tokoh agama dan warga untuk dialog empatik serta sajikan bukti medis jelas.' },
    'SKD-TKP-0014': { a: 1, s: 'B. Hormati rekan berpuasa dengan makan di pantri tertutup serta jaga suasana nyaman' },
    'SKD-TKP-0107': { a: 4, s: 'E. Dokumentasikan, lapor aparat untuk ditindak, dan ajak buat karya pemersatu' },
    'SKD-TKP-0165': { a: 0, s: 'A. Dokumentasikan error, beri solusi manual, dan ajukan perbaikan lewat atasan' },
    'SKD-TKP-0292': { a: 1, s: 'B. Revisi redaksi lebih jelas, konsultasi hukum atau atasan, dan sosialisasikan' },
    'SKD-TKP-0304': { a: 3, s: 'D. Komunikasikan dampak baik-baik, sepakati tenggat, dan libatkan atasan bila perlu' },
    'SKD-TKP-0317': { a: 0, s: 'A. Ingatkan rekan kewajiban netral ASN, simpan bukti, dan lapor bila tak dihapus' },
    'SKD-TKP-N0107': { a: 1, s: 'B. Ingatkan risiko secara personal, bantu ganti sandi dan aktifkan 2FA, serta edukasi tim' },
    'SKD-TKP-N0239': { a: 2, s: 'C. Terima tugas, pelajari panduan serta minta bimbingan, lalu lapor progres berkala' },
    'SKD-TKP-X3837': { a: 3, s: 'D. Tahan pesan, cek situs resmi, lalu klarifikasi ke rekan yang membagikannya.' },
    'SKD-TKP-X8014': { a: 4, s: 'E. Catat kendala akses, siapkan pengisian terpandu sementara, dan ajukan ke tim TI.' },
    'SKD-TKP-X8027': { a: 0, s: 'A. Cek arsip terakhir, hubungi rekan seperlunya, lanjutkan tugas, dan buat catatan.' },
    'SKD-TKP-X8035': { a: 4, s: 'E. Sediakan template pemetaan sementara agar tepat waktu lalu adakan orientasi singkat.' },
    'SKD-TKP-X8073': { a: 4, s: 'E. Paparkan beban kerja objektif lalu diskusikan prioritas dan pembagian tenggat.' },
    'SKD-TKP-X8087': { a: 3, s: 'D. Belajar mandiri lewat modul resmi, praktik data simulasi, dan konsultasi ke ahli.' },
    'SKD-TKP-X8098': { a: 1, s: 'B. Ajak diskusi empat mata secara empatik, tanamkan etika inklusif, dan koordinasi.' },
    'SKD-TKP-0175': { a: 2, s: 'C. Sajikan paparan jujur soal hasil dan kendala, libatkan tim, dan buka diskusi' },
    'SKD-TKP-0179': { a: 2, s: 'C. Ajak siswa berdialog, tanamkan wawasan kebangsaan, dan libatkan guru-orang tua' },
    'SKD-TKP-0339': { a: 4, s: 'E. Tolak tawaran, laporkan sebagai gratifikasi, dan pilih berdasar kajian objektif' },
    'SKD-TKP-N0251': { a: 4, s: 'E. Dialog dengan tokoh warga, jelaskan makna kebangsaan, dan lapor jika tetap lanjut' },
    'SKD-TKP-N0253': { a: 1, s: 'B. Jangan menyumbang, cek info organisasi ke sumber resmi, dan lapor bila menyimpang' },
    'SKD-TKP-X3833': { a: 0, s: 'A. Ingatkan risikonya, jelaskan akses remote resmi, dan sarankan untuk melapor.' },
    'SKD-TKP-X3848': { a: 1, s: 'B. Pahami harapan atasan baru, sesuaikan cara kerja, dan beri masukan konstruktif.' },
    'SKD-TKP-X8008': { a: 3, s: 'D. Tuntaskan layanan tiga warga tersebut atau atur petugas piket pengganti tetap lancar.' },
    'SKD-TKP-X8032': { a: 3, s: 'D. Simak catatan dengan tenang, klarifikasi data faktual, lalu perbaiki dokumentasi.' },
    'SKD-TKP-X8037': { a: 0, s: 'A. Data pantangan peserta lebih dulu, pilih menu aman bersama, dan beri label bahan.' },
    'SKD-TKP-X8044': { a: 0, s: 'A. Koordinasi jalur alternatif atau layanan daring sementara dengan panitia dan umumkan.' },
    'SKD-TKP-X8047': { a: 3, s: 'D. Terima masukannya, uji padanan bersama penutur lokal, lalu revisi buku saku itu.' },
    'SKD-TKP-X8067': { a: 4, s: 'E. Tolak pelacakan terus-menerus sesuai UU PDP; minta izin lokasi saat diperlukan saja.' },
    'SKD-TKP-0067': { a: 4, s: 'E. Jelaskan manfaat data bersama, tawarkan perjanjian jelas, dan lapor ke atasan' },
    'SKD-TKP-0132': { a: 0, s: 'A. Telusuri alur distribusi, identifikasi kendala, koordinasi ke desa, dan beri kabar' },
    'SKD-TKP-0136': { a: 0, s: 'A. Nyatakan benturan kepentingan tertulis ke atasan dan mundur dari penilaian itu' },
    'SKD-TKP-0290': { a: 1, s: 'B. Gunakan bahasa sederhana atau penerjemah, tetap ramah, dan minta bantuan rekan' },
    'SKD-TKP-0350': { a: 1, s: 'B. Lapor ke atasan, usulkan revisi istilah inklusif, dan tarik sementara bahannya' },
    'SKD-TKP-X8022': { a: 4, s: 'E. Tunjuk satu narahubung terpadu, susun prioritas revisi tim, lalu kirim ke vendor.' },
    'SKD-TKP-X8070': { a: 0, s: 'A. Aktifkan sertifikat TTE sesuai prosedur dan pelajari alurnya demi percepatan kerja.' },
    'SKD-TKP-0049': { a: 1, s: 'B. Bahas semua ide berbasis data, hargai senior dan muda, serta jaga keharmonisan' },
    'SKD-TKP-0161': { a: 4, s: 'E. Laporkan akun itu, jangan sebarkan, dan bagikan info akurat dari sumber resmi' },
    'SKD-TKP-0188': { a: 4, s: 'E. Catat warga, jelaskan prosedur dukcapil, dan bantu pengurusan dengan hormati adat' },
    'SKD-TKP-0275': { a: 3, s: 'D. Tolak tegas secara santun, ingatkan anggota lain, dan laporkan grup ke aparat' },
    'SKD-TKP-0306': { a: 4, s: 'E. Layani sisa antrean terdaftar, tutup loket, dan usulkan tambah petugas ke atasan' },
    'SKD-TKP-N0218': { a: 4, s: 'E. Jelaskan kondisi tugas, tawarkan bantuan sesuai jadwal realistis atas izin atasan' },
    'SKD-TKP-N0370': { a: 0, s: 'A. Tetapkan kriteria berbasis data kebutuhan secara terbuka lalu jalankan bersama relawan' },
    'SKD-TKP-X7405': { a: 4, s: 'Jaga keselamatan staf, simpan bukti, dan lapor lewat prosedur resmi' },
    'SKD-TKP-X8009': { a: 4, s: 'E. Susun bagan SLA layanan, pasang pelacak status daring, dan evaluasi hambatan tiap tahap.' },
    'SKD-TKP-X8019': { a: 0, s: 'A. Hubungi narahubung dinas mitra langsung, tanya kendalanya, bantu format, catat tenggat.' },
    'SKD-TKP-X8020': { a: 4, s: 'E. Gelar rapat penyelarasan definisi data, tetapkan standar bersama, dan dokumentasikan.' },
    'SKD-TKP-X8030': { a: 0, s: 'A. Sepakati indikator keberhasilan lebih dulu lalu bandingkan data kedua usulan objektif.' },
    'SKD-TKP-X8082': { a: 0, s: 'A. Pelajari rincian aturan baru, ajak tim menyesuaikan target, dan beri masukan kendala.' },
    'SKD-TKP-0055': { a: 2, s: 'C. Ajak bicara, cari tahu kesulitannya, bantu bimbingan, dan sesuaikan pembagian' },
    'SKD-TKP-0243': { a: 3, s: 'D. Tetapkan format standar, koordinasi pembersihan data, dan beri catatan batasan' },
    'SKD-TKP-0281': { a: 4, s: 'E. Tegur santun, beri penjelasan sejarah benar, dan lapor bila penghinaan lanjut' },
    'SKD-TKP-0293': { a: 1, s: 'B. Kumpulkan fakta hati-hati, lapor unit pengawas, dan hindari sebar isu liar' },
    'SKD-TKP-0360': { a: 3, s: 'D. Catat aduan lengkap ke tim teknis, beri estimasi perbaikan, dan tawarkan air darurat' },
    'SKD-TKP-N0219': { a: 3, s: 'D. Klarifikasi langsung ke rekan, lalu jelaskan ke atasan secara profesional pakai bukti' },
    'SKD-TKP-N0380': { a: 3, s: 'D. Luangkan waktu ikut kerja bakti, ajak rekan, dan dukung perlengkapan sesuai aturan' },
    'SKD-TKP-X8028': { a: 4, s: 'E. Berterima kasih lalu tegaskan terbuka bahwa hasil itu kerja tim sambil menyebut rekan.' },
    'SKD-TKP-X8046': { a: 0, s: 'A. Sapa hangat, ajak makan bersama tim, dan kenalkan pada rekan serta budaya kerja unit.' },
    'SKD-TKP-X8061': { a: 4, s: 'E. Jadwalkan di luar jam sibuk, pastikan backup selesai, dan umumkan waktu henti layanan.' },
    'SKD-TKP-X8064': { a: 2, s: 'C. Usulkan domain resmi atau cloud internal berbagi dokumen dan edukasi tautan aman.' },
    'SKD-TKP-X8074': { a: 4, s: 'E. Tolak santun dengan jelaskan risiko hukum dokumen fiktif serta usulkan berita acara parsial.' },
    'SKD-TKP-X8080': { a: 4, s: 'E. Periksa ulang kualitas hasil sendiri lalu tawarkan bantuan ke rekan atau pelajari materi.' },
    'SKD-TKP-X8085': { a: 2, s: 'C. Ungkapkan relasi ke ketua panitia dan minta alih peran demi objektivitas penilaian.' },
    'SKD-TKP-X8105': { a: 0, s: 'A. Usulkan proyek pelayanan sosial lintas unit dan dialog kebangsaan bagi seluruh staf.' },
    'SKD-TKP-0045': { a: 0, s: 'A. Cek log dan pantau beban, kurangi beban sementara, infokan warga, perbaiki' },
    'SKD-TKP-0186': { a: 4, s: 'E. Atur arus antrean, beri info alur ke warga-petugas, dan catat bahan evaluasi' },
    'SKD-TKP-0257': { a: 0, s: 'A. Hadir sopan, tidak ikut memfitnah, luruskan fakta bila sempat, lapor jika menghasut' },
    'SKD-TKP-0322': { a: 1, s: 'B. Ikuti format baru, catat plus minusnya, dan ajukan masukan berbasis data' },
    'SKD-TKP-N0112': { a: 3, s: 'D. Ajak dialog empatik, libatkan tokoh agama moderat serta keluarga, dan konsultasi ke aparat bila mengarah ke kekerasan' },
    'SKD-TKP-X8010': { a: 4, s: 'E. Tolak jalur khusus secara santun, jelaskan aturan sama, dan bantu daftar normal.' },
    'SKD-TKP-X8017': { a: 1, s: 'B. Tawarkan bantuan menerjemahkan dengan sopan serta beri catatan istilah ke rekan.' },
    'SKD-TKP-X8021': { a: 1, s: 'B. Pelajari dokumen proyek berjalan, kenalkan diri, dan selaraskan cara komunikasi.' },
    'SKD-TKP-X7404': { a: 3, s: 'Kirim draf berlabel, jelaskan bagian belum valid, dan sepakati final' },
    'SKD-TKP-X7406': { a: 2, s: 'Beri info tertulis, jaga urutan antrean, dan siapkan layar cadangan' },
    'SKD-TKP-X7409': { a: 0, s: 'Uji terjemahan baru bersama penutur lokal lalu perbarui panduan' },
    'SKD-TKP-X7410': { a: 2, s: 'Sediakan cek status berbasis nomor acak dan kontrol akses data' },
    'SKD-TKP-X7411': { a: 4, s: 'Pisahkan opini dari indikasi kekerasan, minta bukti, dan lapor resmi' },
    'SKD-TKP-X7412': { a: 0, s: 'Gunakan kanal darurat sah agar berkas masuk sebelum tenggat' },
    'SKD-TKP-X7413': { a: 3, s: 'Koreksi bersama, jelaskan sebabnya, dan usulkan validasi form' },
    'SKD-TKP-X8026': { a: 3, s: 'D. Temukan kedua tim berorientasi solusi, petakan pasal sisa, dan sepakati jadwal.' },
    'SKD-TKP-X8034': { a: 3, s: 'D. Ajak diskusi empat mata untuk sepakati jam sinkronisasi dan pembagian tugas.' },
    'SKD-TKP-X8052': { a: 3, s: 'D. Tarik sementara unggahan, minta maaf tulus, dan susun narasi bersama tokoh adat.' },
    'SKD-TKP-X8093': { a: 1, s: 'B. Ajak pisahkan prasangka dari kinerja, jaga inklusi tim, dan lapor pelanggaran.' },
    'SKD-TKP-0145': { a: 2, s: 'C. Ajak bicara dengan empati, tawarkan bantu wajar, dan lapor atasan agar beban adil' },
    'SKD-TKP-0158': { a: 4, s: 'E. Ikuti tradisi dengan hormat sesuai keyakinan, jelaskan batas sopan, dan hargai' },
    'SKD-TKP-X8006': { a: 2, s: 'C. Siapkan kartu nomor atau komunikasi tulis jelas, jaga antrean, dan lapor layar.' },
    'SKD-TKP-X8025': { a: 2, s: 'C. Akui yang dikuasai, catat poin baru, koordinasi ahli, dan kirim masukan tulis.' },
    'SKD-TKP-X8031': { a: 3, s: 'D. Usulkan alur hibrida integrasi notulen ke papan daring serta dampingi rekan.' },
    'SKD-TKP-X8038': { a: 0, s: 'A. Gelar dialog terbuka dengan tokoh adat dan warga lalu sesuaikan lokasi bersama.' },
    'SKD-TKP-X8072': { a: 1, s: 'B. Segera lapor atasan jujur, kirim revisi berlabel koreksi, dan cek ulang rumus.' },
    'SKD-TKP-X8097': { a: 2, s: 'C. Simpan bukti tangkapan layar, moderasi ajakan melanggar, dan lapor otoritas siber.' },
    'SKD-TKP-X8101': { a: 2, s: 'C. Cari video utuh untuk klarifikasi, hentikan sebaran provokasi, dan luruskan.' },
    'SKD-TKP-X8104': { a: 2, s: 'C. Ingatkan pribadi soal etika dan moderasi ASN, minta hapus, dan lapor bila abai.' },
    'SKD-TKP-0129': { a: 4, s: 'E. Catat risiko, usulkan enkripsi dan batasi akses ke TI, tunda rilis hingga aman' },
    'SKD-TKP-0269': { a: 2, s: 'C. Tolak sebarkan, lapor ke aparat, dan jelaskan kewajiban hukum sebagai warga' },
    'SKD-TKP-N0205': { a: 3, s: 'D. Layani seluruh warga hadir, minta izin tambah waktu, dan bagi tugas tim' },
    'SKD-TKP-X7400': { a: 2, s: 'Cek dasar syarat, bantu pemenuhan sah hari ini, dan ajukan koreksi situs' },
    'SKD-TKP-X7415': { a: 2, s: 'Pakai kanal cadangan resmi terbatas, verifikasi penerima, dan catat' },
    'SKD-TKP-X8004': { a: 4, s: 'E. Simak keluhan tenang, tunjukkan rincian tarif PP, dan bantu cek status berkas.' },
    'SKD-TKP-X8024': { a: 4, s: 'E. Tolak kirim lewat jalur pribadi, tanya kebutuhan data, dan bantu proses izin resmi.' },
    'SKD-TKP-X8033': { a: 0, s: 'A. Sambut inisiatifnya, cek kesesuaian materi, dan fasilitasi koordinasi pimpinan.' },
    'SKD-TKP-X8042': { a: 4, s: 'E. Tegur santun bahwa stereotip suku tidak pantas dan jaga suasana saling hormat.' },
    'SKD-TKP-X8062': { a: 2, s: 'C. Ingatkan risiko bocor, sarankan hapus salinan, dan ajukan akses VPN resmi.' },
    'SKD-TKP-X8091': { a: 2, s: 'C. Tolak tegas secara santun sesuai komitmen bangsa dan waspadai perekrutan.' },
    'SKD-TKP-X8095': { a: 4, s: 'E. Hadirkan studi kasus dilema digital, dialog inklusif, dan penguatan moderasi ASN.' },
    'SKD-TKP-0089': { a: 2, s: 'C. Ajak tokoh berdialog bersama pemuka agama dan sesuaikan pendekatan aturan' },
    'SKD-TKP-0143': { a: 1, s: 'B. Jelaskan makna acara, buat konsep menarik, dan ajak rekan berperan aktif' },
    'SKD-TKP-0345': { a: 0, s: 'A. Pantau bandwidth, tetapkan aturan pakai, sosialisasikan, dan utamakan kerja' },
    'SKD-TKP-N0102': { a: 4, s: 'E. Lapor tim teknis, buka jalur manual dengan tanda terima, dan usul perpanjang waktu agar warga terbantu' },
    'SKD-TKP-N0111': { a: 1, s: 'B. Jangan sebarkan, sampaikan keberatan santun sesuai moderasi dan Pancasila, lalu lapor bila berlanjut' },
    'SKD-TKP-N0249': { a: 1, s: 'B. Tolak tegas, tegaskan kesetiaan Pancasila dan UUD 1945, lalu lapor atasan' },
    'SKD-TKP-X8039': { a: 1, s: 'B. Ajak ngobrol akrab, jelaskan komunikasi tim, dan luruskan soal perbedaan logat.' },
    'SKD-TKP-X8048': { a: 4, s: 'E. Pelajari etiket tamu lebih dulu, bersikap adaptif, dan infokan ke tim tuan rumah.' },
    'SKD-TKP-X8059': { a: 4, s: 'E. Usulkan cabut akses lama, aktifkan 2FA dan akun individu, serta ganti sandi rutin.' },
    'SKD-TKP-X8063': { a: 1, s: 'B. Aktifkan SOP darurat, kabari TI serta atasan, infokan pemohon, dan catat log.' },
    'SKD-TKP-X8090': { a: 2, s: 'C. Hentikan penyebaran, verifikasi ke otoritas resmi, bagikan fakta, dan lapor hoaks.' },
    'SKD-TKP-0334': { a: 3, s: 'D. Atur prioritas, bahas beban kerja ke atasan, minta dukungan, jaga kesehatan' },
    'SKD-TKP-N0244': { a: 1, s: 'B. Sampaikan keberatan sopan berdasar aturan, tawarkan opsi sah, dan catat arahan' },
    'SKD-TKP-X8003': { a: 4, s: 'E. Buka pencatatan darurat resmi, lapor bukti ke TI, dan umumkan perpanjangan.' },
    'SKD-TKP-X8053': { a: 2, s: 'C. Ingatkan larangan unggah data rahasia ke AI publik, pakai alat resmi/data anonim.' },
    'SKD-TKP-X8055': { a: 1, s: 'B. Jangan turuti, verifikasi ke pimpinan lewat saluran resmi (waspada deepfake), lapor.' },
    'SKD-TKP-X8100': { a: 2, s: 'C. Tolak tegas ikut petisi, ingatkan netralitas ASN, dan lapor bila ada paksaan.' },
    'SKD-TKP-X8011': { a: 0, s: 'A. Kirim notif bagian yang buram disertai contoh dan tautan unggah ulang satu klik.' },
    'SKD-TKP-X8068': { a: 0, s: 'A. Buat daftar cek pra-publikasi (hapus komentar/metadata) dan bagikan ke staf.' },
    'SKD-TKP-X8083': { a: 0, s: 'A. Selesaikan poin krusial akurat, serah terima sementara ke atasan, lalu berobat.' },
    'SKD-TKP-0071': { a: 4, s: 'E. Lapor atasan, pisahkan pengaruh sesuai SOP, dan dukung deradikalisasi tokoh' },
    'SKD-TKP-0099': { a: 4, s: 'E. Pisahkan arsip rusak, restorasi sesuai SOP, catat sisanya, dan lapor atasan' },
    'SKD-TKP-0149': { a: 2, s: 'C. Lapor aparat dan tokoh warga, ajak jaga kondusivitas, hindari kabar tak pasti' },
    'SKD-TKP-X8094': { a: 2, s: 'C. Hentikan sebaran foto dan spekulasi suku, rujuk rilis resmi, sampaikan empati.' },
    'SKD-TKP-0167': { a: 0, s: 'A. Tolak sebarkan, kembalikan buku sopan, dan lapor bila ada indikasi perekrutan' },
    'SKD-TKP-0321': { a: 1, s: 'B. Jelaskan aturan perlindungan data, verifikasi pemohon, dan proses sesuai jalur' },
    'SKD-TKP-0357': { a: 2, s: 'C. Jelaskan aturan perangkat kantor, aktifkan layanan resmi, dan ajari cara dasar' },
    'SKD-TKP-N0208': { a: 4, s: 'E. Infokan kendala ke warga, catat berkas manual untuk segera diproses, dan hubungi teknisi' },
    'SKD-TKP-X7403': { a: 1, s: 'Pakai data sintetis representatif lalu uji di lingkungan terpisah' },
    'SKD-TKP-0043': { a: 0, s: 'A. Paparkan manfaat kebijakan, ajukan aturan etika riset jelas, dan serahkan keputusan' },
    'SKD-TKP-0285': { a: 0, s: 'A. Ingatkan risiko hukum/keamanan, ajukan software berlisensi, dan lapor bila lanjut' },
    'SKD-TKP-N0226': { a: 3, s: 'D. Tegaskan penilaian berbasis kompetensi bukan logat, ajak saling hargai di forum' },
    'SKD-TKP-X8045': { a: 0, s: 'A. Beri tugas berdasar kompetensi objektif dan dukung jadwal ramah keluarga sah.' },
    'SKD-TKP-X8056': { a: 4, s: 'E. Jangan klik tautan, cek domain pengirim, konfirmasi TI, dan lapor phishing.' },
    'SKD-TKP-0047': { a: 0, s: 'A. Tolak tegas dengan merujuk aturan kesetaraan ASN dan ajak nilai kompetensi' },
    'SKD-TKP-0065': { a: 3, s: 'D. Dengarkan alasan, jelaskan makna hormat kebangsaan, dan ajak tokoh berdialog' },
    'SKD-TKP-N0400': { a: 0, s: 'A. Amankan selebaran sebagai bukti, lapor pimpinan dan keamanan, serta edukasi ASN' },
    'SKD-TKP-X8103': { a: 4, s: 'E. Tegaskan Indonesia negara hukum sehingga penertiban wajib sesuai prosedur sah.' },
    'SKD-TKP-X8013': { a: 2, s: 'C. Tenangkan penelepon, catat inti, sambungkan ke nomor darurat aktif hingga tersambung.' },
    'SKD-TKP-X8043': { a: 1, s: 'B. Diskusikan pembagian peran atau sesuaikan titik aksesibel agar ia berpartisipasi.' },
    'SKD-TKP-N0213': { a: 2, s: 'C. Lapor beban dan estimasi waktu ke atasan, minta prioritas, lalu minta bantu tim bila perlu' },
    'SKD-TKP-X7402': { a: 4, s: 'Adakan sesi alternatif, terima masukan tertulis, dan rangkum keputusan' },
    'SKD-TKP-X7407': { a: 1, s: 'Sepakati indikator ukur, bandingkan data, dan putuskan berbasis kriteria' },
    'SKD-TKP-X8016': { a: 0, s: 'A. Usulkan notifikasi status otomatis serta pasang kode QR cek mandiri di ruang tunggu.' },
    'SKD-TKP-X8088': { a: 3, s: 'D. Tolak pembayaran tunai non-kontrak sopan, jelaskan aturan APBN, cek klausul sah.' },
    'SKD-TKP-0028': { a: 1, s: 'B. Tolak tegas dan sopan demi menjaga netralitas ASN dari politik praktis' },
    'SKD-TKP-0191': { a: 4, s: 'E. Dengarkan tenang, ajak diskusi tokoh yang dihormati, dan cari bantuan ahli' },
    'SKD-TKP-N0029': { a: 2, s: 'C. Ingatkan santun soal kebinekaan di grup, ajak rukun, dan lapor admin bila berlanjut' },
    'SKD-TKP-0094': { a: 3, s: 'D. Kumpulkan bahan utama, adaptasi pola sebelumnya, dan minta masukan rekan' },
    'SKD-TKP-X8066': { a: 4, s: 'E. Kunci layar sementara, ingatkan rekan kunci otomatis/Win+L, usulkan timeout TI.' },
    'SKD-TKP-X8012': { a: 3, s: 'D. Jelaskan unit berwenang beserta syarat dan arahkan ruangannya hingga terlayani.' },
    'SKD-TKP-0245': { a: 3, s: 'D. Ajak dialog, paparkan nilai kebangsaan ASN, dan bagi pengalaman positif' },
    'SKD-TKP-X8018': { a: 0, s: 'A. Umumkan kondisi tenang, catat antrean manual sebagai cadangan, dan lanjutkan kembali.' },
    'SKD-TKP-0009': { a: 1, s: 'B. Kesampingkan masalah pribadi, jaga komunikasi objektif, dan fokus pada target tim' },
    'SKD-TKP-0197': { a: 0, s: 'A. Dekati empatik, libatkan ke kegiatan positif, dan koordinasi tokoh masyarakat' },
    'SKD-TKP-0233': { a: 1, s: 'B. Tolak tanda tangan secara santun dan arahkan menyampaikan pendapat konstitusional' },
    'SKD-TKP-0332': { a: 3, s: 'D. Telusuri tujuan acara lebih dulu lalu tolak bila bertentangan nilai ASN/Pancasila' },
    'SKD-TKP-X8036': { a: 2, s: 'C. Pelajari istilah lokal, sampaikan materi sederhana, dan pakai penerjemah bila perlu.' },
    'SKD-TKP-X8060': { a: 0, s: 'A. Ingatkan sopan larangan foto data warga (UU PDP), minta hapus, dan foto tanpa layar.' },
    'SKD-TKP-0005': { a: 1, s: 'B. Petakan hambatan alur layanan bersama tim dan usulkan penyederhanaan prosedur' },
    'SKD-TKP-0323': { a: 1, s: 'B. Tenangkan rekan, arahkan ke jalur resmi, dan lapor bila ancaman tampak serius' },
    'SKD-TKP-N0238': { a: 1, s: 'B. Pantau teknis, batasi beban darurat, beri info ke pengguna, dan rancang perbaikan permanen' },
    'SKD-TKP-0008': { a: 1, s: 'B. Kenalkan diri hangat, pelajari budaya unit, dan tawarkan kontribusi aktif tim' },
    'SKD-TKP-N0216': { a: 0, s: 'A. Hubungi staf dinas langsung dengan sopan, kirim surat tembusan, tawarkan bantu kirim' },
    'SKD-TKP-N0243': { a: 3, s: 'D. Tolak sopan sesuai kode etik seleksi, dan nyatakan benturan kepentingan ke atasan' },
    'SKD-TKP-N0360': { a: 1, s: 'B. Bantu daftar via jalur prioritas di tempat, ajari aplikasi dasar, usulkan bantuan layanan ke atasan' },
    'SKD-TKP-0111': { a: 1, s: 'B. Jelaskan tujuan rekam, minta izin aman, dan beri risalah bagi yang keberatan' },
    'SKD-TKP-0221': { a: 4, s: 'E. Tolak santun, tegaskan kesetiaan Pancasila dan NKRI, dan lapor indikasi rekrut' },
    'SKD-TKP-0261': { a: 1, s: 'B. Isolasi situs, amankan bukti, pulihkan cadangan, lapor TI, dan umumkan jujur' },
    'SKD-TKP-N0222': { a: 1, s: 'B. Tegur baik-baik secara pribadi soal nilai kebinekaan serta etika berkomunikasi' },
    'SKD-TKP-N0203': { a: 1, s: 'B. Cek kondisi langsung, lapor ke bagian umum bertenggat jelas, lalu beri kabar tindak lanjut' },
    'SKD-TKP-N0405': { a: 4, s: 'E. Pahami alasan pegawai, jelaskan wajib hormat lagu kebangsaan, lalu lapor bila terus menolak' },
    'SKD-TKP-0303': { a: 3, s: 'D. Jelaskan risiko, ajukan kanal resmi aman, dan minta persetujuan tertulis bila perlu' },
    'SKD-TKP-N0254': { a: 3, s: 'D. Dekati empatik, luruskan pemahaman, libatkan pembimbing, dan koordinasi aparat bila perlu' },
    'SKD-TKP-0200': { a: 1, s: 'B. Hormati keputusan rekan, carikan peran lain yang sesuai, jaga kekompakan' },
    'SKD-TKP-N0252': { a: 0, s: 'A. Sampaikan sopan prinsip Pancasila dan Bhinneka Tunggal Ika lalu ajak diskusi konstitusional' },
    'SKD-TKP-0004': { a: 1, s: 'B. Tolak tegas dan sopan dengan menjelaskan prinsip antrean adil bagi semua' },
    'SKD-TKP-0185': { a: 3, s: 'D. Ajak dialog santun soal hormat bendera bukan ibadah, lalu lapor jika terus mengajak' },
    'SKD-TKP-N0365': { a: 4, s: 'E. Jelaskan aturan penerimaan, ajak bahas syarat dengan pimpinan dan hukum agar bebas benturan' },
    'SKD-TKP-0001': { a: 2, s: 'C. Layani lansia ramah dan bantu fotokopikan berkas kurang agar selesai hari itu juga' },
    'SKD-TKP-0010': { a: 1, s: 'B. Aktif berdiskusi, bertukar kontak, dan jajaki peluang replikasi inovasi unit' },
    'SKD-TKP-0012': { a: 1, s: 'B. Apresiasi ide komunitas lalu ajak sesuaikan skala kegiatan dengan pagu anggaran' },
    'SKD-TKP-N0385': { a: 3, s: 'D. Anonimkan atau agregasi data sebelum terbit sesuai keterbukaan info dan UU PDP lalu lapor pimpinan' },
    'SKD-TKP-X0006': { a: 4, s: 'E. Balas sopan, minta maaf, cek data via DM, lalu proses keluhan dan infokan hasil' },
    'SKD-TKP-0011': { a: 1, s: 'B. Tawarkan bimbingan fitur rumus agar rekan paham dan laporan selesai tepat waktu' },
    'SKD-TKP-0006': { a: 1, s: 'B. Sapa ramah, tawarkan pendampingan, dan panggil konsultan ke layanan lantai dasar' },
    'SKD-TKP-0003': { a: 1, s: 'B. Bantu pandu warga daftar di gerai lokasi serta sosialisasikan cara pakai aplikasi' },
    'SKD-TKP-0025': { a: 1, s: 'B. Akui kekeliruan terbuka, tanggung jawab penuh, dan segera serahkan koreksi data' },
    'SKD-TKP-X7408': { a: 3, s: 'Jelaskan opsi ke pimpinan, nonaktifkan fitur minor, dan jadwalkan patch' },
    'SKD-TKP-0021': { a: 1, s: 'B. Buat template otomatisasi Pivot/makro guna pangkas waktu lalu bagikan ke tim' },
    'SKD-TKP-0037': { a: 3, s: 'D. Gelar rapat lintas dinas, samakan target bersama, dan bangun pertukaran data adil' },
    'SKD-TKP-0054': { a: 2, s: 'C. Kabari kepala desa, cari bantuan perbaikan, tetap layani warga meski harus lembur' },
    'SKD-TKP-0312': { a: 0, s: 'A. Jelaskan alur perizinan daring, bantu daftar, dan catat keluhan perbaikan' },
    'SKD-TKP-0002': { a: 1, s: 'B. Simak keluhan tenang, minta maaf, dan jelaskan kendala serta estimasi tindak lanjut' },
    'SKD-TKP-0019': { a: 1, s: 'B. Pakai SPBE konsisten sambil membimbing pegawai senior beradaptasi bertahap' },
    'SKD-TKP-0026': { a: 1, s: 'B. Pelajari regulasi baru, sesuaikan dokumentasi kerja, dan jaga mutu capaian' },
    'SKD-TKP-X0021': { a: 2, s: 'C. Ajak bicara netral, dengar keduanya, lalu sepakati pembagian tugas' },
    'SKD-TKP-0007': { a: 1, s: 'B. Bangun forum lintas instansi dan sepakati protokol interoperabilitas data bersama' },
    'SKD-TKP-0015': { a: 1, s: 'B. Sediakan menu utama inklusif serta paket khusus berlabel untuk pantangan dan alergi' },
    'SKD-TKP-0024': { a: 1, s: 'B. Tolak sopan di jam kerja, tuntaskan evaluasi anggaran, lalu jadwalkan di luar jam' },
    'SKD-TKP-X0009': { a: 3, s: 'D. Jelaskan antrean adil secara santun lalu tawarkan opsi daring atau janji temu' },
    'SKD-TKP-0013': { a: 1, s: 'B. Hormati kearifan adat dan kenalkan metode pemupukan modern lewat musyawarah kampung' },
    'SKD-TKP-0029': { a: 1, s: 'B. Terima tugas antusias, pelajari referensi, diskusi ahli, dan susun rencana kerja' },
    'SKD-TKP-0023': { a: 1, s: 'B. Siapkan salindia ringkas, uji audio-koneksi lebih awal, dan cadangkan file di cloud' },
    'SKD-TKP-0020': { a: 1, s: 'B. Jangan klik tautan, segera lapor tim keamanan TI, dan ingatkan grup soal phishing' },
    'SKD-TKP-0032': { a: 1, s: 'B. Hentikan sebar foto dan provokasi, tunggu info resmi aparat, serta suarakan empati' },
    'SKD-TKP-0039': { a: 2, s: 'C. Pelajari aplikasi baru mandiri, terapkan rutin, dan bantu rekan yang kesulitan teknis' },
    'SKD-TKP-0027': { a: 1, s: 'B. Atur prioritas, koordinasi delegasi tugas mendesak saat diklat, dan tuntaskan kerja' },
    'SKD-TKP-0017': { a: 1, s: 'B. Atur kerja bakti dalam dua sesi atau geser jam agar ibadah dan gotong royong jalan' },
    'SKD-TKP-0016': { a: 1, s: 'B. Ajak santun pakai Bahasa Indonesia di rapat sembari belajar istilah daerah setempat' },
    'SKD-TKP-0022': { a: 1, s: 'B. Anonimkan data pribadi dahulu, masukkan kerangka umum ke AI, lalu verifikasi hasilnya' },
    'SKD-TKP-0038': { a: 1, s: 'B. Hormati budaya lokal, berbaur santun ke warga, dan selaraskan program dengan adat baik' },
    'SKD-TKP-0034': { a: 1, s: 'B. Biasakan nilai Pancasila dan BerAKHLAK, buka ruang dialog, serta teladani sikap moderat' },
    'SKD-TKP-0040': { a: 1, s: 'B. Susun skala prioritas, tuntaskan kedua tugas dinas bermutu tinggi, dan geser agenda pribadi' },
    'SKD-TKP-0036': { a: 3, s: 'D. Mohon maaf santun ke pengantre, jelaskan pemulihan jaringan, dan catat awal berkas secara tertib' },
    'SKD-TKP-0030': { a: 1, s: 'B. Tolak ajakan, ingatkan rekan soal sumpah ASN, lalu lapor indikasi ke pengawasan resmi' },
    'SKD-TKP-0018': { a: 1, s: 'B. Jelaskan ke tim soal dialek budayanya sekaligus beri masukan santun agar rekan menyesuaikan' },
    'SKD-TKP-0031': { a: 1, s: 'B. Pegang prinsip moderasi, ajak pengurus hentikan hasutan bermartabat, dan lapor aparat' },
    'SKD-TKP-0041': { a: 1, s: 'B. Hentikan rantai pesan, edukasi tenang dengan data Pancasila, dan lapor ke kanal resmi' },
    'SKD-TKP-0033': { a: 1, s: 'B. Dukung reintegrasi inklusif warga sambil tetap berkoordinasi wajar dengan RT dan pembina' },
    'SKD-TKP-0035': { a: 1, s: 'B. Ajak dialog edukatif soal bahaya kelompok eksklusif, libatkan keluarga, arahkan ke organisasi resmi' }
  };

  function applyOptionPatch(arr, patch) {
    if (!Array.isArray(arr) || !patch) return;
    for (const q of arr) {
      const item = patch[q && q.id];
      if (!item) continue;
      if (Array.isArray(item) && item.length === 5) {
        q.options = item.slice();
      } else if (item && Array.isArray(item.o) && item.o.length === 5 && q.ans === item.a) {
        q.options = item.o.slice();
      } else if (item && typeof item.s === 'string' && q.ans === item.a && Array.isArray(q.options) && q.options[item.a]) {
        const next = q.options.slice();
        next[item.a] = item.s;
        q.options = next;
      }
    }
  }

  applyOptionPatch(DB.SKD_TIU, TIU_FIGURAL_PATCH);
  applyOptionPatch(DB.SKD_TWK, TWK_PATCH);
  applyOptionPatch(DB.SKD_TKP, TKP_PATCH);
  window.__patchesAntibiasV59 = {
    tiu: Object.keys(TIU_FIGURAL_PATCH).length,
    twk: Object.keys(TWK_PATCH).length,
    tkp: Object.keys(TKP_PATCH).length
  };
})();
