/* Latihan orisinal SKB Pranata Komputer Ahli Pertama.
   Enam area mengacu pada lampiran Surat Menteri PANRB B/5457/M.SM.01.00/2024, butir jabatan 404. */
(function () {
  const rows = [
    // IT Enterprise
    ['Arsitektur Enterprise','Pemerintah kabupaten punya tiga aplikasi pengaduan dengan fungsi sama dan definisi status berbeda. Tim arsitektur akan memilih layanan yang digabung. Artefak awal yang paling membantu adalah…',
      ['Katalog versi sistem operasi pada server','Peta kapabilitas pengaduan yang dikaitkan dengan proses, pemilik data, dan aplikasi saat ini','Diagram rak pusat data','Daftar lisensi akun pengembang','Jadwal pengadaan perangkat baru'],1,
      'Petakan kebutuhan organisasi ke aplikasi yang memenuhinya.','Peta tersebut memperlihatkan fungsi yang tumpang tindih, data yang berbagi pemilik, serta layanan yang perlu dipertahankan.'],
    ['Arsitektur Enterprise','Sebuah kementerian ingin migrasi ke arsitektur bersama, tetapi unit daerah tidak bisa berpindah sekaligus. Keputusan arsitektur yang paling mengurangi gangguan layanan adalah…',
      ['Mematikan semua sistem lama pada tanggal yang sama','Membiarkan tiap unit memilih format data sesuka hati','Mendefinisikan tahap transisi, antarmuka yang kompatibel, dan kriteria perpindahan per unit','Menggandakan data seluruh unit tanpa menentukan sumber otoritatif','Memusatkan infrastruktur tanpa menyelaraskan model data'],2,
      'Cari arsitektur transisi dan kriteria keluar yang terukur.','Kompatibilitas antarmuka mendukung koeksistensi sementara. Tahapan dan kriteria memberi cara menilai kesiapan dan menghentikan komponen lama secara terkendali.'],
    ['Arsitektur Enterprise','Proyek nasional harus berbagi umur kelompok pemohon dengan pemda, sedangkan identitas individual tetap dikelola unit asal. Pemisahan tanggung jawab yang paling tepat adalah…',
      ['Memakai akun bersama agar pusat dapat mengambil seluruh entri','Memindahkan semua tabel sumber ke unit pusat','Membuat pemda mengirim tangkapan layar setiap akhir bulan','Menetapkan kontrak data agregat dan pemilik definisi indikator sambil menjaga data individual di unit asal','Membebaskan setiap pemda menentukan rentang umur tanpa dokumentasi'],3,
      'Tentukan apa yang dibutuhkan bersama dan siapa pemiliknya.','Kontrak agregat memungkinkan integrasi sesuai kebutuhan informasi. Pemilik definisi menjaga keseragaman, sementara unit asal mengelola data individual.'],
    ['Arsitektur Enterprise','Tim mengukur apakah arsitektur baru meningkatkan layanan izin lintas unit. Metrik yang paling langsung terkait hasil layanan adalah…',
      ['Jumlah diagram arsitektur yang dibuat','Jumlah kontainer yang berjalan','Persentase permohonan yang selesai sesuai waktu layanan dari pengajuan hingga keputusan','Kapasitas penyimpanan yang dialokasikan','Jumlah rapat komite per bulan'],2,
      'Pilih metrik dari sudut hasil yang dialami pengguna.','Durasi ujung ke ujung mencakup seluruh unit yang dilalui pengguna. Jumlah komponen dan rapat mengukur aktivitas, bukan mutu layanan.'],

    // Manajemen Layanan TI
    ['Tata Kelola & Manajemen Layanan TI','Jam 08.00 layanan gagal dan tim memulihkannya dengan mengalihkan lalu lintas. Setelah stabil, tim menyelidiki mengapa kegagalan berulang tiap awal bulan. Praktik yang paling tepat untuk penyelidikan itu adalah…',
      ['Service request management','Service catalog management','Service level management','Problem management','Relationship management'],3,
      'Pemulihan cepat dan penghilangan penyebab berulang adalah pekerjaan yang berbeda.','Incident management membantu memulihkan layanan. Problem management menganalisis penyebab dan risiko pengulangan.'],
    ['Tata Kelola & Manajemen Layanan TI','Jendela layanan yang disepakati adalah 20 jam per hari. Dalam satu hari layanan tidak tersedia selama 24 menit di dalam jendela tersebut. Berapa ketersediaannya untuk hari itu?',
      ['97%','98%','98,8%','99%','99,8%'],1,
      'Penyebut adalah 20 × 60 menit yang disepakati.','Downtime 24 ÷ 1.200 = 2%. Ketersediaan adalah 100% − 2% = 98%.'],
    ['Tata Kelola & Manajemen Layanan TI','Permintaan pembuatan akun baru rutin disetujui manajer unit dan dapat dipenuhi dalam satu hari. Informasi mana paling tepat dicantumkan pada katalog layanan untuk pengguna?',
      ['Skema tabel akun dan hash kredensial','Nama akun admin dan perangkat petugas','Rincian seluruh perubahan kode layanan','Grafik utilisasi CPU harian','Syarat permintaan, langkah pengajuan, pemberi persetujuan, dan waktu pemenuhan'],4,
      'Katalog menjelaskan cara pengguna memperoleh layanan.','Syarat, jalur pengajuan, pihak yang menyetujui, dan komitmen waktu membantu pengguna mengajukan permintaan dengan benar.'],
    ['Tata Kelola & Manajemen Layanan TI','Tim merencanakan pemindahan sistem antrean ke pusat data baru. Dalam penilaian sebelum perubahan, informasi mana paling membantu penanggung jawab membuat keputusan?',
      ['Dampak ke unit, kriteria uji, dan kondisi yang memicu rollback','Nama penyedia layanan tanpa menyertakan dampak migrasi','Data kapasitas dengan asumsi seluruh unit sedang tidak aktif','Perbandingan fitur yang belum divalidasi oleh pengguna','Daftar masalah lama tanpa rencana pengujian perpindahan'],0,
      'Siapkan bukti keberhasilan dan batas kapan harus mundur.','Dampak dan kriteria uji mendukung keputusan. Kondisi rollback membantu tim bertindak cepat bila perpindahan mengganggu layanan.'],

    // Pengelolaan Data
    ['Pengelolaan Data','Data permohonan dari dua aplikasi dikirim ulang jika konfirmasi terlambat. Gudang data harus menghitung setiap peristiwa satu kali. Pendekatan terbaik adalah…',
      ['Menolak semua pengiriman yang datang lebih dari satu kali per hari','Menambah kolom waktu masuk sebagai satu-satunya pembeda','Menetapkan identitas peristiwa dari sistem sumber dan menangani pengulangan dengan upsert atau deduplikasi','Menjalankan ulang seluruh impor dengan nomor acak baru','Menghapus setiap baris yang punya waktu pengajuan sama'],2,
      'Gunakan identitas peristiwa yang sama ketika pesan dikirim ulang.','Kunci stabil dan pemrosesan idempoten mencegah satu peristiwa dihitung dua kali tanpa menghapus peristiwa lain yang waktunya sama.'],
    ['Basis Data & SQL Lanjutan','Sebuah laporan harus menampilkan semua kecamatan, termasuk yang tidak punya pengaduan terbuka. Query memakai LEFT JOIN dari kecamatan ke pengaduan. Di mana syarat status terbuka sebaiknya diletakkan?',
      ['Di ON pada LEFT JOIN menuju tabel pengaduan','Di WHERE sebagai satu-satunya syarat status = terbuka','Di IN pada tabel kecamatan dengan daftar yang punya pengaduan terbuka','Di INNER JOIN tambahan ke pengaduan yang berstatus terbuka','Di HAVING COUNT(id_pengaduan) > 0'],0,
      'Tempatkan filter tabel kanan sebelum baris tanpa pasangan tersaring.','Syarat status di ON membatasi baris pengaduan yang cocok. Kecamatan tanpa pasangan tetap ada; COUNT(id_pengaduan) akan menghasilkan nol untuknya.'],
    ['Pengelolaan Data','Apabila nomenklatur jenis bantuan berubah di tengah tahun, laporan historis harus tetap dapat ditelusuri sebagaimana tercatat saat transaksi. Desain mana paling tepat?',
      ['Menimpa label lama pada semua transaksi setiap kali nomenklatur berubah','Menyimpan satu label terbaru tanpa tanggal berlaku','Memakai warna sel spreadsheet sebagai penanda versi','Menyimpan versi data referensi dengan masa berlaku dan mengaitkan transaksi ke versi yang sesuai','Membuat salinan transaksi tanpa referensi ke kode jenis bantuan'],3,
      'Bedakan data referensi saat ini dan data referensi saat transaksi.','Versi dengan masa berlaku menjaga ketertelusuran laporan lama dan memungkinkan analisis berdasarkan tanggal transaksi.'],
    ['Pengelolaan Data','Target mutu data adalah minimal 98% catatan warga memiliki kode wilayah resmi yang valid. Dari 2.500 catatan, 30 kosong dan 25 berisi kode tidak dikenal, tanpa tumpang tindih. Kesimpulannya?',
      ['99% valid dan memenuhi target','98,8% valid dan memenuhi target','98% valid dan tepat memenuhi target','97,8% valid dan belum memenuhi target','97,5% valid dan belum memenuhi target'],3,
      'Jumlahkan dua jenis invalid, lalu bagi total catatan.','Invalid = 55 ÷ 2.500 = 2,2%. Valid = 97,8%, kurang 0,2 poin persentase dari target.'],

    // Manajemen Risiko TI
    ['Manajemen Risiko TI','Risiko ketergantungan pada satu layanan pihak ketiga sudah ditangani dengan kanal cadangan. Kanal cadangan tetap bergantung pada penyedia jaringan yang sama. Apa yang harus dicatat sesudah kontrol diterapkan?',
      ['Dampak risiko awal tanpa menilai perubahan','Risiko residual akibat kegagalan jaringan bersama dan pihak yang berwenang menerimanya','Nilai risiko nol karena kanal cadangan sudah ada','Hanya harga kontrak kedua layanan','Asumsi bahwa dua kanal menjamin independensi'],1,
      'Tanyakan risiko apa yang masih tersisa sesudah kontrol bekerja.','Ketergantungan bersama dapat mematikan kedua kanal. Analisis residual mencakup dampak dan kemungkinan tersisa serta pemilik keputusan penerimaan.'],
    ['Manajemen Risiko TI','Uji pemulihan mensyaratkan layanan kembali dalam 2 jam dan kehilangan data maksimal 15 menit. Uji menunjukkan layanan kembali 90 menit setelah henti, tetapi data terakhir tertinggal 25 menit. Hasilnya?',
      ['Lulus RTO dan gagal RPO','Gagal RTO dan lulus RPO','Lulus RTO dan lulus RPO','Gagal RTO dan gagal RPO','RTO dan RPO keduanya belum dapat dinilai'],0,
      'RTO menilai durasi pemulihan; RPO menilai seberapa jauh data mundur.','90 menit masih dalam batas 120 menit. Kehilangan 25 menit data melampaui batas RPO 15 menit.'],
    ['Manajemen Risiko TI','Unit memakai matriks skor sederhana berupa kemungkinan × dampak. Risiko A = 4 × 3, B = 2 × 5, C = 3 × 3. Kebijakan melarang pemeringkatan tambahan untuk kasus ini dan meminta prioritas menurut skor. Urutan tertinggi ke terendah?',
      ['B, A, C','C, B, A','A, C, B','A, B, C','B, C, A'],3,
      'Kalikan dulu; jangan memilih berdasarkan dampak saja.','Skor A 12, B 10, dan C 9. Dengan aturan yang diberikan, prioritasnya A, B, C.'],
    ['Manajemen Risiko TI','Vendor menawarkan kontrak dengan ganti rugi bila sistem tidak tersedia. Waktu layanan publik tetap hilang jika terjadi gangguan. Apa arti kontrak terhadap perlakuan risiko?',
      ['Risiko sepenuhnya dihindari sejak kontrak ditandatangani','Kontrak otomatis memenuhi target ketersediaan','Tidak ada perlakuan risiko karena gangguan masih mungkin','Risiko dialihkan seluruhnya sehingga rencana pemulihan tak diperlukan','Sebagian dampak finansial dialihkan, sedangkan keberlangsungan layanan masih perlu dikelola'],4,
      'Pisahkan dampak finansial dan operasional.','Klausul dapat mengalihkan sebagian biaya. Instansi tetap menanggung gangguan layanan dan perlu rencana kontinuitas sendiri.'],

    // Infrastruktur TI
    ['Jaringan Komputer Lanjutan','Sebuah jaringan kantor memerlukan subnet IPv4 konvensional untuk 26 host dan satu alamat gateway. Prefiks terkecil kapasitasnya yang dapat menampung kebutuhan itu adalah…',
      ['/25','/26','/27','/28','/29'],2,
      'Butuh 27 alamat host yang dapat dipakai. Cari 2ʰ − 2 ≥ 27.','Dengan 5 bit host, tersedia 30 alamat host. Prefiksnya 32 − 5 = /27. /28 hanya menyediakan 14 alamat host.'],
    ['Infrastruktur TI, Server & Cloud','Sistem memakai tiga simpul identik. Beban puncak total 180 permintaan/detik harus tetap tertangani saat satu simpul gagal. Bila beban dibagi merata tanpa margin tambahan, kapasitas minimal per simpul?',
      ['60 permintaan/detik','75 permintaan/detik','80 permintaan/detik','90 permintaan/detik','120 permintaan/detik'],3,
      'Bagi beban puncak dengan jumlah simpul yang tersisa.','Setelah satu gagal, dua simpul harus memproses total 180. Setiap simpul perlu setidaknya 90 permintaan per detik.'],
    ['Infrastruktur TI, Server & Cloud','Layanan makin lambat setiap Senin pagi. CPU dan memori stabil, tetapi latensi penulisan penyimpanan naik seiring antrean operasi. Langkah diagnosis pertama yang paling relevan?',
      ['Mengganti antarmuka pengguna','Memeriksa IOPS, waktu tunggu I/O, dan korelasinya dengan tugas terjadwal','Menambah vCPU tanpa mengukur perubahan','Mengganti penyedia DNS sebelum melihat pengukuran lebih lanjut','Menghapus metrik penyimpanan agar dasbor lebih sederhana'],1,
      'Ikuti metrik yang berubah bersama gejala.','Antrean operasi dan latensi tulis mengarahkan diagnosis ke beban media penyimpanan. Korelasi jadwal membantu menentukan apakah pencadangan atau impor memicu puncak.'],
    ['Infrastruktur TI, Server & Cloud','Untuk pemulihan bencana, pencadangan harian sudah berhasil menurut log. Bukti tambahan paling kuat untuk memastikan data benar-benar dapat digunakan saat bencana adalah…',
      ['Menambah ukuran media cadangan','Menyalin log sukses ke penyimpanan lain','Membandingkan nomor versi perangkat lunak saja','Menghapus satu salinan cadangan untuk menguji alarm','Memulihkan sampel di lingkungan terpisah dan menguji integritas serta waktu pemulihan'],4,
      'Log pembuatan cadangan dan bukti pemulihan menjawab pertanyaan berbeda.','Pemulihan teruji membuktikan bahwa salinan dapat dibaca dan digunakan. Pengukuran waktu membantu menilai apakah target layanan tercapai.'],

    // Sistem Informasi dan Multimedia
    ['Rekayasa Perangkat Lunak & Pengujian','Kebutuhan aplikasi berbunyi “warga bisa memperbaiki alamat sebelum permohonan diverifikasi”. Skenario uji penerimaan yang paling lengkap adalah…',
      ['Memeriksa apakah tombol edit memiliki warna yang benar','Menguji setelah status diterima saja','Mencoba edit dengan akun petugas tanpa menilai status','Menguji edit berhasil sebelum verifikasi dan ditolak setelah verifikasi, serta memeriksa riwayat perubahan','Menjalankan uji beban tanpa memeriksa alamat'],3,
      'Uji kedua sisi batas perubahan status.','Skenario tersebut memverifikasi kondisi izin dan larangan serta memastikan perubahan yang sah dapat ditelusuri.'],
    ['Sistem Informasi, Multimedia, SIG & Data','Dua lapisan peta dari sistem koordinat berbeda terlihat selaras di layar. Untuk menghitung luas total poligon per kecamatan, langkah awal paling tepat adalah…',
      ['Menghitung luas langsung dari jumlah piksel tampilan','Menggunakan luas dari koordinat derajat tanpa memeriksa satuan','Memverifikasi definisi CRS dan mentransformasi lapisan ke proyeksi yang sesuai untuk pengukuran luas','Mengubah nama kedua lapisan menjadi EPSG yang sama tanpa transformasi','Menggabungkan semua atribut tanpa operasi geometri'],2,
      'Kecocokan visual tidak menjamin satuan pengukuran sesuai.','Sistem GIS bisa menyelaraskan tampilan dinamis. Perhitungan planar memerlukan proyeksi yang sesuai atau metode geodesik yang sengaja dipilih.'],
    ['Sistem Informasi, Multimedia, SIG & Data','Rekaman pelatihan memuat penjelasan lisan dan diagram penting. Untuk peserta tunarungu dan pengguna pembaca layar, peningkatan yang paling lengkap adalah…',
      ['Keterangan waktu tersinkron untuk penjelasan lisan dan deskripsi teks setara untuk diagram','Resolusi video lebih tinggi tanpa teks','Mengurangi kecepatan audio tanpa teks','Menambahkan ikon pengeras suara pada halaman','Menaruh semua informasi penting dalam tangkapan layar'],0,
      'Sediakan padanan untuk informasi audio dan visual.','Takarir tersinkron membantu pengguna yang tidak mendengar penjelasan. Deskripsi diagram menyediakan makna yang dapat diakses pembaca layar.'],
    ['Sistem Informasi, Multimedia, SIG & Data','Dashboard menampilkan rata-rata 80 menit untuk cabang A dengan 100 permohonan dan 20 menit untuk cabang B dengan 25 permohonan. Berapa rata-rata gabungan dari seluruh permohonan?',
      ['50 menit','56 menit','60 menit','65 menit','68 menit'],4,
      'Bobot tiap cabang adalah jumlah permohonan.','Total waktu = 80 × 100 + 20 × 25 = 8.500 menit. Dibagi 125 permohonan memberi 68 menit.']
  ];
  window.registerCPNSQuestions({
    packId: 'gocpns-skb-prakom', bucket: 'SKB_PRAKOM',
    questions: rows.map(([sub, q, options, ans, trick, explanation], i) => ({
      id: 'SKB-PRAKOM-X' + (7400 + i), category: 'SKB PRANATA KOMPUTER', sub, q,
      options, ans, trick, explanation, practice: 'GOCPNS',
    }))
  });
})();
