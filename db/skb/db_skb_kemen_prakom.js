/* Bank Soal & Materi Khusus SKB Pranata Komputer (Prakom) Kementerian & Bahasa Inggris Kementerian */
(function () {
  if (!window.registerCPNSQuestions) return;

  // 1) +40 Soal SKB Prakom Kementerian Terkini (SPBE/Pemerintah Digital, UU PDP, BSSN/OWASP, Cloud/DevSecOps, Data Engineering)
  const PRAKOM_ROWS = [
    [
      'SPBE & Pemerintah Digital Kementerian', 'kmp-spbe-perpres82',
      'Berdasarkan Perpres Nomor 82 Tahun 2023 tentang Percepatan Transformasi Digital dan Keterpaduan Layanan Digital Nasional, prinsip utama pembangunan aplikasi layanan pemerintah yang baru adalah…',
      [
        'Setiap kementerian membangun aplikasi terpisah sesuai selera unit kerja tanpa integrasi nasional',
        'Mengutamakan keterpaduan layanan lewat Portal Layanan Nasional, interoperabilitas API, serta pemanfaatan aplikasi umum berbagi pakai',
        'Menyimpan seluruh data layanan ke media lokal tanpa pertukaran data lintas instansi',
        'Mewajibkan penggunaan perangkat lunak berlisensi tertutup dari satu vendor tunggal',
        'Menghapus layanan tatap muka sepenuhnya sebelum infrastruktur daerah tersedia'
      ], 1,
      'Perpres 82/2023 fokus pada keterpaduan layanan nasional & aplikasi berbagi pakai (GovTech/INA Digital).',
      'Perpres 82/2023 mendorong keterpaduan aplikasi prioritas SPBE agar tidak terjadi silo antar-kementerian melalui interoperabilitas Sistem Penghubung Layanan Pemerintah dan aplikasi umum.'
    ],
    [
      'SPBE & Pemerintah Digital Kementerian', 'kmp-spbe-perpres95',
      'Dalam arsitektur SPBE menurut Perpres Nomor 95 Tahun 2018, domain yang memetakan keterkaitan antarproses bisnis, kebutuhan data, aplikasi, serta infrastruktur untuk mendukung tujuan strategis kementerian mencakup 6 domain. Domain mana yang menjadi pengikat dasar seluruh domain lainnya?',
      [
        'Domain Arsitektur Layanan dan Domain Infrastruktur',
        'Domain Arsitektur Proses Bisnis dan Domain Data dan Informasi',
        'Domain Keamanan Siber Perangkat Akhir saja',
        'Domain Pengadaan Barang Jasa Elektronik saja',
        'Domain Tata Kelola Aset Fisik Perkantoran'
      ], 1,
      'Arsitektur SPBE berawal dari Proses Bisnis -> Data & Informasi -> Layanan -> Aplikasi -> Infrastruktur -> Keamanan.',
      'Domain Arsitektur Proses Bisnis dan Data menjadi fondasi desain aplikasi, infrastruktur, serta keamanan SPBE agar seluruh sistem informasi kementerian selaras dengan mandat layanan publik.'
    ],
    [
      'SPBE & Pemerintah Digital Kementerian', 'kmp-satudata',
      'Kementerian menerbitkan dataset statistik bantuan sosial ke Portal Satu Data Indonesia. Menurut Perpres Nomor 39 Tahun 2019, pihak di kementerian yang bertugas memeriksa kesesuaian data terhadap standar data dan metadata sebelum disebarluaskan adalah…',
      [
        'Produsen Data tanpa penelaahan siapa pun',
        'Walidata tingkat kementerian/instansi pusat',
        'Pengguna Data eksternal dari sektor swasta',
        'Penyedia jasa hosting pusat data sementara',
        'Tim pengadaan infrastruktur jaringan gedung'
      ], 1,
      'Perpres 39/2019: Pembina Data (standar), Walidata (periksa & publikasi), Produsen Data (menghasilkan).',
      'Walidata bertugas mengumpulkan, memeriksa kesesuaian standar data dan metadata, serta menyebarluaskan data di portal. Produsen Data menghasilkan data sesuai standar dari Pembina Data.'
    ],
    [
      'Regulasi JF Prakom & ASN', 'kmp-jf-prakom',
      'Berdasarkan PermenPANRB Nomor 32 Tahun 2020 juncto PermenPANRB Nomor 1 Tahun 2023 tentang Jabatan Fungsional, penilaian kinerja Pranata Komputer Ahli Pertama untuk kenaikan pangkat/jenjang kini berfokus pada…',
      [
        'Pengumpulan butir kegiatan harian secara kaku tanpa memperhatikan target organisasi',
        'Predikat kinerja SKP periodik dan tahunan yang dikonversi menjadi Angka Kredit sesuai ekspektasi pimpinan unit',
        'Jumlah sertifikat seminar umum tanpa kontribusi pada sistem TI unit kerja',
        'Lama masa kerja administratif semata walaupun sistem tidak beroperasi',
        'Banyaknya kode program yang dicetak di atas kertas setiap akhir tahun'
      ], 1,
      'PermenPANRB 1/2023 menggeser DUPAK butir kegiatan ke konversi predikat kinerja SKP.',
      'Sejak PermenPANRB 1/2023, evaluasi kinerja JF Pranata Komputer didasarkan pada hasil kerja dan perilaku pada SKP yang selaras dengan sasaran organisasi, lalu dikonversi menjadi Angka Kredit.'
    ],
    [
      'Regulasi JF Prakom & ASN', 'kmp-jf-etika',
      'Seorang Pranata Komputer Kementerian mengelola basis data pengadaan dan menerima tawaran komisi dari calon vendor aplikasi agar spesifikasi teknis diarahkan ke produk mereka. Tindakan yang sesuai kode etik JF Prakom dan UU ASN 20/2023 adalah…',
      [
        'Menolak permintaan, menyusun spesifikasi teknis netral berbasis kinerja/standar terbuka, dan melaporkan upaya suap ke atasan/WBS',
        'Menyesuaikan sebagian spesifikasi secara halus asalkan harga penawaran tetap paling murah',
        'Menerima penawaran tersebut di luar jam kantor karena tidak memakai fasilitas dinas',
        'Menyerahkan penyusunan spesifikasi ke vendor agar dokumen cepat selesai sebelum tenggat',
        'Menghapus seluruh nama vendor namun menyisipkan nomor seri eksklusif produk tertentu'
      ], 0,
      'Integritas pengadaan TI: spesifikasi berbasis standar/fungsi netral + tolak dan laporkan suap.',
      'Sesuai prinsip pengadaan dan kode etik ASN BerAKHLAK (Akuntabel), Prakom wajib menyusun KAK/spesifikasi secara objektif tanpa mengarah ke merek tertentu dan melaporkan indikasi suap/gratifikasi.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-uupdp-notif',
      'Jika terjadi insiden kebocoran data pribadi pemohon layanan pada sistem yang dikelola kementerian, menurut Pasal 46 UU Nomor 27 Tahun 2022 (UU PDP), Pengendali Data Pribadi wajib menyampaikan pemberitahuan tertulis paling lambat…',
      [
        '1 × 24 jam setelah selesai audit tahunan',
        '3 × 24 jam kepada Subjek Data Pribadi dan lembaga yang berwenang',
        '7 × 24 jam hanya melalui pengumuman media massa nasional',
        '14 hari kerja kepada vendor aplikasi tanpa memberi tahu pemilik data',
        '30 hari kalender apabila data berhasil dipulihkan dari cadangan'
      ], 1,
      'UU PDP Pasal 46: notifikasi tertulis wajib maksimal 3 × 24 jam sejak diketahui gagal melindungi data.',
      'Pasal 46 ayat (1) UU No. 27/2022 mewajibkan Pengendali Data Pribadi memberitahukan secara tertulis paling lambat 3 × 24 jam kepada Subjek Data Pribadi dan lembaga penyelenggara PDP.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-uupdp-dpo',
      'Dalam struktur tata kelola pelindungan data di kementerian yang memproses data pribadi berskala besar untuk layanan publik secara rutin, kewajiban penunjukan Pejabat/Petugas Pelindungan Data Pribadi (DPO) menurut UU PDP bertujuan utama untuk…',
      [
        'Mengambil alih seluruh pekerjaan pengkodean aplikasi milik pengembang',
        'Menginformasikan, memantau kepatuhan UU PDP, memberi saran DPIA/Dampak Pelindungan Data, serta menjadi narahubung resmi',
        'Menyetujui penjualan data warga ke pihak komersial untuk menambah PNBP',
        'Menggantikan tugas tim infrastruktur untuk mengatur kabel server',
        'Menyembunyikan laporan insiden kebocoran dari inspektorat dan publik'
      ], 1,
      'DPO (Pasal 53–54 UU PDP): pantau kepatuhan, advis DPIA, dan penghubung lembaga & subjek data.',
      'Pejabat PDP bertugas memastikan kepatuhan pengendali/prosesor data terhadap UU PDP, mengawasi analisis dampak pelindungan data (DPIA), dan berkoordinasi dengan lembaga otoritas.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-owasp-idor',
      'Pada API portal layanan kementerian, pengguna yang sudah login dengan akun ID 104 dapat mengunduh dokumen SK pengguna ID 105 hanya dengan mengganti angka parameter URL menjadi /api/v1/dokumen/105. Kerentanan OWASP API/Web Security ini disebut…',
      [
        'Cross-Site Request Forgery (CSRF)',
        'Broken Object Level Authorization (BOLA / IDOR)',
        'Server-Side Request Forgery (SSRF)',
        'DNS Cache Poisoning',
        'Buffer Overflow pada lapisan fisik'
      ], 1,
      'Mengakses objek pengguna lain hanya dengan mengubah ID = Broken Object Level Authorization (IDOR).',
      'BOLA/IDOR terjadi ketika server tidak memvalidasi bahwa pengguna yang terautentikasi memiliki hak kepemilikan atas ID objek yang diminta di endpoint API.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-owasp-ssrf',
      'Fitur pratinjau dokumen kementerian menerima input URL eksternal dan server langsung melakukan fetch ke URL tersebut. Penyerang memasukkan http://169.254.169.254/latest/meta-data/ untuk mencuri kredensial IAM cloud. Serangan ini adalah…',
      [
        'Server-Side Request Forgery (SSRF)',
        'Reflected XSS',
        'Clickjacking',
        'ARP Spoofing',
        'SQL Union Injection'
      ], 0,
      'Memaksa server mengakses metadata/jaringan internal via URL input = SSRF.',
      'SSRF memanfaatkan server sebagai proxy untuk menjangkau layanan internal atau metadata cloud (169.254.169.254). Mitigasi: allowlist domain, blokir IP privat/link-local, dan nonaktifkan redirect.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-zero-trust',
      'Dalam penerapan arsitektur Zero Trust pada jaringan dan aplikasi kementerian (sejalan standar CSIRT/BSSN), prinsip "never trust, always verify" diwujudkan melalui…',
      [
        'Mempercayai otomatis seluruh lalu lintas yang berasal dari subnet LAN gedung kantor',
        'Autentikasi MFA adaptif, otorisasi berbasis konteks perangkat/identitas di tiap permintaan, serta segmentasi mikro (micro-segmentation)',
        'Membuka seluruh port internal agar komunikasi antarmikroservis lebih cepat',
        'Menggunakan satu akun root bersama agar pencatatan log lebih singkat',
        'Menonaktifkan enkripsi TLS pada lalu lintas internal antarpeladen'
      ], 1,
      'Zero Trust: verifikasi eksplisit di setiap request, least privilege, dan micro-segmentation/mTLS.',
      'Zero Trust tidak lagi mengandalkan batas perimeter kantor (VPN saja); setiap permintaan diverifikasi identitas, kondisi perangkat, hak akses minimal (least privilege), dan enkripsi end-to-end.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-ransomware-321',
      'Sebagai Prakom penanggung jawab infrastruktur kementerian, strategi cadangan data terbaik untuk memastikan data tetap dapat dipulihkan jika ransomware mengenkripsi seluruh server produksi beserta NAS yang terpasang (mounted) di jaringan adalah…',
      [
        'Menyimpan salinan backup harian di partisi drive yang sama pada server produksi',
        'Menerapkan aturan 3-2-1-1-0 dengan minimal 1 salinan immutable/air-gapped (offline/write-once) dan teruji pemulihannya',
        'Menyalakan sinkronisasi otomatis real-time tanpa versioning ke penyimpanan bersama',
        'Mematikan antivirus agar proses backup harian selesai lebih cepat',
        'Hanya menyimpan log transaksi bulan berjalan tanpa data historis'
      ], 1,
      'Aturan 3-2-1-1-0: 3 salinan, 2 media, 1 offsite, 1 immutable/offline, 0 error saat uji restore.',
      'Ransomware modern menyasar share jaringan dan backup online. Salinan immutable (WORM/Object Lock) atau air-gapped memastikan penyerang tidak dapat mengubah atau menghapus cadangan.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-pki-tte',
      'Layanan perizinan elektronik kementerian menggunakan Tanda Tangan Elektronik (TTE) tersertifikasi BSrE-BSSN. Pada kriptografi asimetris TTE, proses menandatangani hash dokumen agar terjamin keutuhan dan nirpenyangkalan (non-repudiation) dilakukan dengan…',
      [
        'Kunci publik (public key) pemohon layanan',
        'Kunci privat (private key) milik penanda tangan yang sertifikatnya diterbitkan PSrE berinduk',
        'Algoritma hashing MD5 tanpa kunci kriptografi',
        'Kunci simetris AES yang dibagikan secara terbuka di portal publik',
        'Kata sandi database pusat yang di-encode Base64'
      ], 1,
      'Sign = enkripsi digest hash memakai Private Key penanda tangan; Verify = Public Key.',
      'Dalam TTE/PKI, hash dokumen (mis. SHA-256) ditandatangani memakai private key pemilik sertifikat sehingga dapat diverifikasi siapa saja dengan public key, menjamin keaslian & integritas.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-csp-xss',
      'Untuk mencegah eksekusi skrip berbahaya akibat kerentanan Cross-Site Scripting (XSS) di portal layanan kementerian, header respons HTTP keamanan terbaik yang membatasi sumber skrip yang boleh dijalankan browser adalah…',
      [
        'Access-Control-Allow-Origin: *',
        'Content-Security-Policy (CSP) dengan nonce/strict-dynamic dan menonaktifkan unsafe-inline',
        'Cache-Control: public, max-age=31536000',
        'X-Powered-By: Express/PHP',
        'Accept-Encoding: gzip, br'
      ], 1,
      'CSP membatasi asal eksekusi JS/CSS di browser sebagai lapis pertahanan terhadap XSS.',
      'Content-Security-Policy menginstruksikan browser hanya mengeksekusi skrip dari domain tepercaya atau yang memiliki cryptographic nonce valid, sehingga injeksi <script> berbahaya diblokir.'
    ],
    [
      'Keamanan Siber & UU PDP', 'kmp-sso-oidc',
      'Portal layanan internal kementerian akan mengintegrasikan login tunggal (SSO ASN) dengan beberapa aplikasi web dan mobile modern berbasis REST API. Protokol modern yang paling tepat menggantikan SAML XML lama untuk otorisasi API + autentikasi pengguna adalah…',
      [
        'FTP Anonymous Access',
        'OAuth 2.0 yang dipadukan dengan OpenID Connect (OIDC) menggunakan JWT bertanda tangan',
        'Telnet dengan otentikasi teks polos',
        'SNMPv1 community string default',
        'HTTP Basic Auth tanpa HTTPS melalui kuki persisten'
      ], 1,
      'OIDC di atas OAuth 2.0 menyediakan ID Token (autentikasi JWT) & Access Token (otorisasi API).',
      'OpenID Connect (OIDC) menambahkan lapisan identitas standar di atas OAuth 2.0 memakai token JSON (JWT) yang ringan untuk SPA, aplikasi mobile, maupun microservices.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-k8s-probe',
      'Sebuah microservice antrean pendaftaran di klaster Kubernetes kementerian baru saja selesai start container, namun masih butuh 20 detik memuat cache konfigurasi sebelum siap menerima trafik pengguna. Probe Kubernetes mana yang mencegah Load Balancer mengirim trafik terlalu dini?',
      [
        'Menghapus seluruh health check agar container langsung menerima trafik',
        'ReadinessProbe',
        'LivenessProbe dengan initialDelaySeconds = 0',
        'PodDisruptionBudget',
        'ConfigMap volume mount'
      ], 1,
      'ReadinessProbe mengatur apakah Pod siap masuk Endpoints/menerima trafik; LivenessProbe mengatur restart.',
      'ReadinessProbe memberi tahu kubelet/Service kapan container siap melayani permintaan. Jika gagal, Pod tetap hidup sambil menyelesaikan inisialisasi dan dikeluarkan sementara dari load balancer.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-cicd-sec',
      'Dalam pipeline DevSecOps kementerian, tim ingin memindai kerentanan kode sumber aplikasi (sebelum aplikasi dikompilasi/dijalankan) secara otomatis pada setiap Pull Request. Tahapan pengujian keamanan tersebut adalah…',
      [
        'DAST (Dynamic Application Security Testing)',
        'SAST (Static Application Security Testing)',
        'Penetration Testing fisik ruang server',
        'User Acceptance Testing (UAT) manual oleh pemohon',
        'Stress testing jaringan WAN pasca-rilis'
      ], 1,
      'SAST = white-box pada source code (pre-build); DAST = black-box pada app berjalan.',
      'SAST menganalisis source code atau bytecode secara statis untuk menemukan pola kerentanan (seperti SQLi atau secret hardcoded) sejak tahap PR/commit sebelum deploy ke staging/produksi.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-rate-limit',
      'API layanan pengecekan status permohonan publik sering mengalami lonjakan skrip scraping otomatis yang menghabiskan koneksi basis data. Komponen arsitektur terbaik pada titik masuk (edge) untuk menerapkan pembatasan kuota permintaan (rate limiting), validasi JWT terpusat, dan routing antar-layanan adalah…',
      [
        'API Gateway dengan kebijakan throttling/token bucket dan caching respons',
        'Memperbesar kapasitas hard disk database server utama tanpa membatasi trafik',
        'Membuka akses JDBC langsung dari browser pengguna ke PostgreSQL',
        'Menghapus indeks tabel database agar pencarian lebih lambat bagi bot',
        'Mematikan seluruh endpoint publik selama jam kerja'
      ], 0,
      'API Gateway menangani auth terpusat, rate limiting/throttling, routing, dan logging di edge.',
      'API Gateway bertindak sebagai gerbang tunggal yang menegakkan rate limiting (mis. token bucket), verifikasi token JWT, SSL termination, dan melindungi layanan backend dari lonjakan trafik.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-ha-sla',
      'Kontrak Pusat Data Nasional/cloud kementerian menetapkan target ketersediaan sistem sebesar 99,9% dalam 1 bulan kalender (diasumsikan 30 hari = 43.200 menit). Berapa batas maksimal total downtime yang masih memenuhi SLA tersebut?',
      [
        'Sekitar 4,32 menit per bulan',
        'Sekitar 43,2 menit per bulan',
        'Sekitar 432 menit (7,2 jam) per bulan',
        'Sekitar 21,6 menit per bulan',
        'Sekitar 72 menit per bulan'
      ], 1,
      'Downtime 99,9% = 0,1% × 43.200 menit = 43,2 menit/bulan.',
      'Dengan 30 hari × 24 jam × 60 menit = 43.200 menit, kelonggaran downtime 0,1% adalah 0,001 × 43.200 = 43,2 menit. (99,99% = 4,32 menit).'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-circuit-breaker',
      'Aplikasi portal utama kementerian memanggil API eksternal lembaga lain. Ketika API eksternal tersebut melambat parah hingga timeout, antrean thread di portal ikut menumpuk dan membuat seluruh portal mati (cascading failure). Pola ketahanan (resilience pattern) yang langsung memutus panggilan sementara saat ambang gagal tercapai adalah…',
      [
        'Circuit Breaker Pattern',
        'Singleton Pattern',
        'Observer Pattern hanya untuk logging tampilan',
        'Database Normalization 3NF',
        'Batch File Transfer lewat FTP'
      ], 0,
      'Circuit Breaker memutus cepat panggilan ke downstream bermasalah untuk mencegah cascading failure.',
      'Circuit Breaker (keadaan Closed → Open → Half-Open) menghentikan request berulang ke layanan eksternal yang sedang gagal, memberi respons fallback cepat, dan menguji pemulihan berkala.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-blue-green',
      'Untuk memperbarui aplikasi layanan publik bernilai kritis dengan nol waktu henti (zero downtime) serta kemampuan kembali ke versi lama dalam hitungan detik bila ditemukan bug fatal pasca-rilis, strategi deployment yang paling tepat adalah…',
      [
        'Big Bang Deployment dengan mematikan server selama 4 jam',
        'Blue-Green Deployment dengan pengalihan router/load balancer ke lingkungan identik baru',
        'Mengedit file kode PHP langsung di server produksi melalui SSH saat jam sibuk',
        'Menghapus basis data lama sebelum mengunggah kode versi baru',
        'Mengirim pembaruan manual lewat USB ke setiap server rak'
      ], 1,
      'Blue-Green menyiapkan 2 environment identik; trafik dialihkan instan & bisa rollback cepat.',
      'Blue-Green menjaga versi aktif (Blue) tetap berjalan sementara versi baru (Green) diuji. Trafik dialihkan di load balancer; bila bermasalah, pengembalian ke Blue terjadi hampir seketika.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-msg-queue',
      'Saat pembukaan rekrutmen nasional, puluhan ribu pelamar mengunggah berkas PDF dan meminta konversi thumbnail sekaligus. Agar API utama tetap responsif tanpa menunggu proses berat selesai, komponen yang tepat dipakai untuk memproses tugas secara asinkron adalah…',
      [
        'Message Broker / Task Queue (seperti RabbitMQ/Kafka) dengan worker asinkron',
        'Menyimpan file PDF berukuran besar sebagai kolom VARCHAR di tabel sesi login',
        'Memblokir koneksi HTTP utama dengan sleep() selama konversi berjalan',
        'Menjalankan konversi di JavaScript sisi klien lalu mematikan validasi server',
        'Menyalin file bolak-balik menggunakan cron job tiap 24 jam tanpa antrean'
      ], 0,
      'Message Queue memisahkan penerimaan request cepat dari pemrosesan worker asinkron (decoupling).',
      'Dengan Message Broker, API mengantrekan job ke queue dan langsung mengembalikan status 202 Accepted ke pengguna, sementara worker memproses konversi sesuai kapasitas tanpa membuat HTTP timeout.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-observability',
      'Dalam operasional sistem terdistribusi microservices di kementerian, tiga pilar utama Observability untuk melacak mengapa satu permintaan transaksi lambat di antara 8 layanan berbeda terdiri dari…',
      [
        'Firewall, Antivirus, dan UPS',
        'Logs, Metrics, dan Distributed Tracing',
        'HTML, CSS, dan JavaScript',
        'CPU, RAM, dan Thermal Paste',
        'ERD, DFD, dan Use Case Diagram'
      ], 1,
      'Tiga pilar Observability: Logs (kejadian), Metrics (angka/agregat), Distributed Tracing (jejak per-request).',
      'Distributed Tracing (mis. OpenTelemetry dengan trace_id) melacak latensi per hop antar-service, dilengkapi Metrics (Prometheus) untuk tren dan Logs untuk detail error.'
    ],
    [
      'Basis Data, SQL & Rekayasa Data', 'kmp-sql-window',
      'Sebuah kueri PostgreSQL pada tabel `penilaian_pelayanan(id_unit, bulan, skor)` perlu menampilkan peringkat 3 teratas unit terbaik di tiap kementerian tanpa menggabungkan/mengurangi baris asli seperti GROUP BY. Fitur SQL standar yang paling tepat dipakai adalah…',
      [
        'CROSS JOIN tanpa kondisi',
        'Window Function seperti DENSE_RANK() / ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)',
        'TRUNCATE TABLE sebelum SELECT',
        'Mengganti tipe data skor menjadi BLOB',
        'Menjalankan LIKE "%a%" pada semua kolom'
      ], 1,
      'Window Function (`OVER PARTITION BY`) menghitung ranking/agregat tiap baris tanpa menciutkan baris.',
      'Window functions (`ROW_NUMBER`, `RANK`, `DENSE_RANK`) memungkinkan pemeringkatan per kelompok (`PARTITION BY`) sambil mempertahankan detail setiap baris.'
    ],
    [
      'Basis Data, SQL & Rekayasa Data', 'kmp-sql-nplus1',
      'Pada aplikasi pelaporan SKPD/unit kerja, halaman daftar 500 pegawai sangat lambat karena aplikasi mengeksekusi 1 kueri mengambil 500 ID pegawai lalu 500 kueri terpisah dalam loop untuk mengambil nama jabatan tiap pegawai. Masalah kinerja ini dikenal sebagai…',
      [
        'Deadlock pada transaksi SERIALIZABLE',
        'Masalah kueri N+1 (dapat diatasi dengan JOIN atau Eager Loading / IN batch)',
        'BGP Route Hijacking',
        'Lossy Image Compression',
        'Cross-Origin Resource Sharing (CORS) error'
      ], 1,
      '1 kueri induk + N kueri anak dalam perulangan = N+1 Query Problem; atasi dengan JOIN / eager loading.',
      'Masalah N+1 menyebabkan ratusan round-trip jaringan ke database. Mengubahnya menjadi 1 kueri JOIN atau `WHERE id IN (...)` (eager loading) memangkas latensi secara drastis.'
    ],
    [
      'Basis Data, SQL & Rekayasa Data', 'kmp-sql-index',
      'Tabel log transaksi layanan kementerian berisi 40 juta baris dan sering menjalankan kueri `WHERE status = ? AND tanggal_buat >= ? ORDER BY tanggal_buat DESC`. Indeks komposit B-Tree paling efektif untuk mempercepat kueri ini adalah…',
      [
        'INDEX (tanggal_buat, status) selalu lebih baik karena kolom rentang harus di depan',
        'INDEX (status, tanggal_buat DESC) dengan kolom kesetaraan (=) di depan kolom rentang (>=)',
        'Menambahkan indeks terpisah pada 15 kolom yang jarang dicari',
        'Menghapus Primary Key tabel agar ukuran indeks mengecil',
        'Mengubah seluruh kolom menjadi TEXT tanpa indeks'
      ], 1,
      'Aturan indeks komposit B-Tree (Equality-Sort-Range): kolom equality (=) diletakkan sebelum kolom range (>=).',
      'Kolom kesetaraan (`status = ?`) mempersempit cabang pohon B-Tree terlebih dulu sehingga entri `tanggal_buat` sudah terurut rapat dan siap dibaca untuk kondisi `>=` maupun `ORDER BY`.'
    ],
    [
      'Basis Data, SQL & Rekayasa Data', 'kmp-acid-isolation',
      'Dua transaksi paralel melakukan transfer anggaran pada saldo unit yang sama. Transaksi A membaca saldo awal, sementara Transaksi B mengurangi dan melakukan commit di antara dua pembacaan Transaksi A sehingga Transaksi A melihat nilai berbeda dalam satu transaksi. Anomali ini disebut…',
      [
        'Dirty Read',
        'Non-Repeatable Read',
        'Phantom Read akibat indeks korup saja',
        'Lost Packet pada UDP',
        'Cache Coherence Miss pada L1 CPU'
      ], 1,
      'Membaca baris yang sama dua kali dalam 1 transaksi tapi nilainya berubah karena commit transaksi lain = Non-Repeatable Read.',
      'Dirty Read membaca data uncommitted; Non-Repeatable Read membaca ulang baris yang sama dan nilainya berubah karena UPDATE yang sudah di-commit; Phantom Read munculnya baris baru pada range query.'
    ],
    [
      'Basis Data, SQL & Rekayasa Data', 'kmp-etl-elt',
      'Kementerian membangun Data Lakehouse berbasis cloud object storage berkapasitas besar untuk mengolah jutaan log teks mentah sebelum ditransformasikan di engine analitik cloud. Dibandingkan ETL tradisional, keunggulan pendekatan ELT adalah…',
      [
        'Wajib menghapus seluruh data mentah sebelum disimpan agar hemat ruang selamanya',
        'Memuat data mentah apa adanya terlebih dahulu ke penyimpanan/gudang berdaya skala besar, lalu transformasi fleksibel memakai kekuatan komputasi engine target',
        'Tidak memerlukan tata kelola kualitas data ataupun skema apa pun di seluruh tahap',
        'Hanya dapat memproses berkas CSV di bawah 1 megabyte',
        'Memindahkan proses transformasi ke browser pengguna akhir'
      ], 1,
      'ELT (Extract-Load-Transform): muat raw data cepat dulu, lalu transformasi in-place di cloud warehouse/lakehouse.',
      'ELT menghindari bottleneck server transformasi perantara dan menyimpan raw data mentah sehingga transformasi ulang untuk analisis baru dapat dijalankan kapan saja.'
    ],
    [
      'Basis Data, SQL & Rekayasa Data', 'kmp-lineage',
      'Auditor menanyakan asal-usul angka capaian indikator kinerja utama pada dashboard pimpinan dan aturan agregasi apa saja yang mengubah data mentah menjadi angka tersebut. Fitur tata kelola data yang menjawab pertanyaan ini adalah…',
      [
        'Data Sharding fisik per rak server',
        'Data Lineage dan Katalog Metadata Bisnis/Teknis',
        'Minifikasi berkas JavaScript frontend',
        'Penghapusan log akses pengguna setiap minggu',
        'Kompresi lossy terhadap tabel relasional'
      ], 1,
      'Data Lineage melacak perjalanan data dari sumber (source), transformasi, hingga laporan akhir.',
      'Data Lineage memetakan silsilah data ujung ke ujung (asal tabel, proses ETL/SQL, dan pemilik data) sehingga memastikan auditabilitas serta memudahkan analisis dampak perubahan skema.'
    ],
    [
      'Jaringan, Infrastruktur & Linux', 'kmp-subnet-kemen',
      'Jaringan VPN cabang kantor kementerian mendapat blok IP `10.42.16.0/22`. Berapa rentang alamat IP yang termasuk dalam blok jaringan tersebut beserta alamat siarnya (broadcast)?',
      [
        '10.42.16.0 sampai 10.42.16.255 (broadcast .255)',
        '10.42.16.0 sampai 10.42.19.255 (broadcast 10.42.19.255)',
        '10.42.16.0 sampai 10.42.17.255 (broadcast 10.42.17.255)',
        '10.42.16.0 sampai 10.42.23.255 (broadcast 10.42.23.255)',
        '10.42.0.0 sampai 10.42.31.255 (broadcast 10.42.31.255)'
      ], 1,
      '/22 = 4 blok /24 (2^(24-22) = 4 pada oktet ke-3): 16, 17, 18, 19.',
      'Prefiks /22 berarti netmask 255.255.252.0 (blok ukuran 4 di oktet ke-3). Mulai 10.42.16.0 hingga 10.42.19.255 (1.022 host usable).'
    ],
    [
      'Jaringan, Infrastruktur & Linux', 'kmp-dns-sec',
      'Saat mengaudit domain `.go.id` kementerian, Prakom memastikan catatan DNS tidak dapat dipalsukan dalam perjalanan lewat tanda tangan kriptografi pada zona DNS. Ekstensi protokol yang dimaksud adalah…',
      [
        'DHCPv6 Relay',
        'DNSSEC (Domain Name System Security Extensions)',
        'VLAN Trunking Protocol (VTP)',
        'BGP Multiprotocol Label Switching saja',
        'ARP Gratuitous'
      ], 1,
      'DNSSEC menandatangani record DNS secara kriptografis untuk mencegah DNS spoofing/cache poisoning.',
      'DNSSEC memastikan respons resolusi nama domain autentik berasal dari server otoritatif zona `.go.id` yang sah dan belum dimodifikasi pihak perantara.'
    ],
    [
      'Jaringan, Infrastruktur & Linux', 'kmp-linux-diag',
      'Aplikasi web layanan kementerian di server Linux tiba-tiba gagal menulis log dan transaksi gagal, padahal perintah `df -h` menunjukkan penggunaan kapasitas disk baru 58%. Perintah cepat untuk mengecek apakah kehabisan slot file/metadata (inode) adalah…',
      [
        'df -i',
        'free -m',
        'ip route show',
        'chmod 777 /',
        'ping 127.0.0.1'
      ], 0,
      'Disk masih ada ruang tapi gagal buat file baru -> cek kehabisan inode dengan `df -i`.',
      'Jutaan file kecil (misal file sesi/cache/log yang tidak dibersihkan) dapat menghabiskan 100% inode meskipun kapasitas byte `df -h` masih longgar; `df -i` menampilkan utilisasi inode.'
    ],
    [
      'Jaringan, Infrastruktur & Linux', 'kmp-raid-kemen',
      'Peladen basis data transaksi kementerian memiliki 4 buah cakram keras (disk) identik berkapasitas masing-masing 2 TB dan membutuhkan keseimbangan antara performa baca tinggi, ketahanan hingga 1–2 disk gagal (di pasangan cermin berbeda), serta tidak ada kalkulasi paritas yang memperlambat tulis acak kecil. Konfigurasi RAID paling tepat adalah…',
      [
        'RAID 0 (striping tanpa redundansi)',
        'RAID 10 (gabungan mirror RAID 1 + stripe RAID 0, kapasitas usable 4 TB)',
        'RAID 5 dengan kapasitas usable 8 TB',
        'JBOD tanpa pengontrol RAID',
        'RAID 0 dua disk saja'
      ], 1,
      'RAID 10 memberi proteksi cermin + striping cepat untuk DB OLTP, kapasitas = 50% (4 TB).',
      'RAID 10 menghindari write penalty paritas milik RAID 5/6 dan memberikan kinerja IOPS tinggi sekaligus toleransi kegagalan 1 disk di setiap pasangan mirror.'
    ],
    [
      'Rekayasa Perangkat Lunak, UI/UX & SPBE', 'kmp-a11y-wcag',
      'Portal layanan publik kementerian diwajibkan ramah bagi penyandang disabilitas sesuai standar aksesibilitas web WCAG 2.1 Level AA. Praktik yang BENAR diterapkan oleh pengembang antarmuka adalah…',
      [
        'Menyampaikan status error formulir hanya lewat warna merah tanpa teks atau atribut ARIA',
        'Menyediakan teks alternatif (alt) bermakna pada gambar informatif, rasio kontras teks memadai (minimal 4,5:1), dan navigasi lengkap via keyboard',
        'Menonaktifkan fokus outline tombol dengan outline: none tanpa pengganti',
        'Menempatkan semua formulir di dalam gambar PNG tanpa elemen HTML input',
        'Memutar audio otomatis keras saat halaman terbuka tanpa tombol jeda'
      ], 1,
      'Prinsip POUR WCAG: teks alt, kontras ≥ 4,5:1, navigasi keyboard, dan tidak hanya bergantung warna.',
      'Aksesibilitas (POUR: Perceivable, Operable, Understandable, Robust) memastikan pengguna pembaca layar, disabilitas motorik (keyboard-only), dan low-vision tetap dapat mengakses layanan publik.'
    ],
    [
      'Rekayasa Perangkat Lunak, UI/UX & SPBE', 'kmp-api-idemp',
      'Pengguna menekan tombol "Kirim Pengajuan" dua kali berturut-turut saat koneksi seluler tidak stabil pada aplikasi pelayanan publik. Cara terbaik di backend REST API agar pengiriman ulang pada satu transaksi yang sama tidak menciptakan 2 data pengajuan kembar adalah…',
      [
        'Mengandalkan disabled tombol di JavaScript saja tanpa pengecekan di server',
        'Menerapkan Idempotency-Key unik dari klien yang divalidasi di server/DB dalam transaksi atomik',
        'Mengabaikan permintaan yang masuk jika terjadi lebih dari sekali per jam untuk seluruh warga',
        'Mengembalikan HTTP 500 setiap kali terjadi kesalahan validasi input',
        'Mengubah metode endpoint penyimpanan menjadi HTTP GET'
      ], 1,
      'Tombol UI bisa di-bypass/retry jaringan; backend menjamin idempotensi lewat Idempotency-Key + unique constraint.',
      'Idempotency-Key memungkinkan server mengenali permintaan ulang atas niat yang sama dan mengembalikan hasil transaksi pertama tanpa membuat duplikat di basis data.'
    ],
    [
      'Rekayasa Perangkat Lunak, UI/UX & SPBE', 'kmp-uat-blackbox',
      'Saat menguji form pendaftaran rentang usia syarat CPNS (18 sampai 35 tahun) dengan teknik Black-Box Boundary Value Analysis (BVA), himpunan nilai uji yang paling efektif mendeteksi bug batas operator `<` vs `<=` adalah…',
      [
        '22, 25, 28, 30',
        '17, 18, 19 dan 34, 35, 36',
        '5, 50, 100',
        '20, 20, 20',
        '0 dan 1000 saja'
      ], 1,
      'BVA menguji tepat di batas valid (18, 35), tepat di luar (17, 36), dan tepat di dalam (19, 34).',
      'Sebagian besar kesalahan logika kondisi terjadi di nilai batas (off-by-one error). Boundary Value Analysis memilih nilai tepat pada batas dan ±1 dari batas.'
    ],
    [
      'Tata Kelola TI, ITIL & Manajemen Risiko', 'kmp-itil-change',
      'Layanan autentikasi kementerian mengalami kerentanan kritis Zero-Day yang sedang dieksploitasi aktif malam ini, sehingga tim perlu segera memasang patch keamanan di luar jadwal perubahan mingguan normal. Jenis perubahan dalam ITIL 4 ini adalah…',
      [
        'Standard Change (pra-otorisasi rutin tanpa risiko)',
        'Emergency Change dengan persetujuan cepat oleh otoritas perubahan darurat (ECAB) & dokumentasi pasca-pasang',
        'Normal Change yang menunggu rapat tahun depan',
        'Penghapusan layanan tanpa memberi tahu pengguna',
        'Service Request pengadaan printer baru'
      ], 1,
      'ITIL Change Enablement: Standard (rutin), Normal (terjadwal CAB), Emergency (darurat insiden/kerentanan kritis).',
      'Emergency Change memiliki jalur otorisasi yang dipercepat namun tetap menjaga penilaian risiko cepat, rencana rollback, dan pencatatan lengkap setelah pemulihan.'
    ],
    [
      'Tata Kelola TI, ITIL & Manajemen Risiko', 'kmp-cobit-apobai',
      'Dalam tata kelola TI COBIT 2019, pimpinan kementerian (Dewan/Menteri & Eselon I) ingin memastikan bahwa arah investasi TI dievaluasi agar memberi nilai tambah bagi publik, diarahkan prioritasnya, dan dipantau kepatuhannya oleh manajemen. Domain COBIT yang khusus menjalankan peran tata kelola (Governance) ini adalah…',
      [
        'EDM (Evaluate, Direct, and Monitor)',
        'BAI (Build, Acquire, and Implement)',
        'DSS (Deliver, Service, and Support)',
        'MEA (Monitor, Evaluate, and Assess) untuk manajemen operasional saja',
        'OSI Layer 3 Network'
      ], 0,
      'COBIT memisahkan Governance (EDM: Evaluate, Direct, Monitor) dan Management (APO, BAI, DSS, MEA).',
      'Domain EDM bertanggung jawab atas tata kelola di tingkat pimpinan: mengevaluasi opsi strategis, mengarahkan manajemen, serta memantau kinerja dan kepatuhan pencapaian tujuan.'
    ],
    [
      'Kecerdasan Buatan & SIG Pemerintahan', 'kmp-ai-rag',
      'Kementerian berencana membangun asisten tanya-jawab aturan kepegawaian berbasis Large Language Model (LLM) agar pegawai mendapat jawaban akurat merujuk pasal peraturan terbaru tanpa halusinasi dan tanpa melatih ulang bobot model tiap hari. Arsitektur paling sesuai adalah…',
      [
        'Retrieval-Augmented Generation (RAG) yang mengambil kutipan pasal terindeks di basis data vektor/teks sebelum LLM menyusun jawaban',
        'Mengandalkan ingatan pelatihan umum LLM tanpa menyediakan dokumen peraturan resmi',
        'Membiarkan pengguna publik mengubah system prompt model sesuka hati',
        'Memasukkan seluruh 10.000 file PDF peraturan mentah sekaligus ke satu prompt teks',
        'Menghapus verifikasi sumber rujukan agar jawaban terlihat ringkas'
      ], 0,
      'RAG membumikan jawaban LLM pada korpus regulasi terindeks + menampilkan rujukan pasalnya.',
      'RAG mengekstrak potongan pasal relevan dari repositori terkurasi (vector/hybrid search) sebagai konteks prompt sehingga jawaban lebih mutakhir, terverifikasi, dan minim halusinasi.'
    ],
    [
      'Kecerdasan Buatan & SIG Pemerintahan', 'kmp-sig-postgis',
      'Aplikasi Sistem Informasi Geografis (SIG) kementerian menyimpan ribuan titik lokasi puskesmas dalam PostGIS dan ingin mengindeks geometri agar kueri pencarian radius 5 km berjalan dalam milidetik. Jenis indeks spasial standar pada PostGIS adalah…',
      [
        'Hash Index pada kolom nama wilayah saja',
        'GiST Index (R-Tree over GiST) pada kolom geometri/geografi',
        'Memindai tabel penuh dengan rumus jarak Pythagoras pada seluruh baris tanpa indeks',
        'Menyimpan file SHP mentah sebagai teks Base64 di JSON',
        'Memakai tipe data BOOLEAN untuk koordinat lintang dan bujur'
      ], 1,
      'Indeks spasial PostGIS menggunakan GiST (Generalized Search Tree) dengan bounding box R-Tree.',
      'Indeks GiST menyimpan kotak pembatas (bounding box) objek spasial secara hierarkis sehingga operator `ST_DWithin` dan `ST_Intersects` menyaring kandidat dengan sangat cepat.'
    ],
    [
      'Arsitektur Cloud, DevSecOps & HA', 'kmp-git-workflow',
      'Pada repositori kode aplikasi kementerian, seorang pengembang tidak sengaja melakukan commit berisi kredensial kata sandi basis data produksi ke riwayat Git dan baru menyadarinya setelah push ke repositori bersama. Langkah remediasi keamanan yang LENGKAP adalah…',
      [
        'Hanya menghapus baris kredensial di commit terbaru lalu push biasa',
        'Segera rotasi/cabut kredensial yang bocor (wajib utama), bersihkan riwayat Git bila perlu (filter-repo), serta aktifkan secret scanning pre-commit',
        'Mengganti nama branch menjadi private-dev tanpa mencabut kata sandi DB',
        'Membiarkannya karena repositori bersifat internal kementerian',
        'Menghapus folder .git di komputer lokal saja tanpa mengganti password di server'
      ], 1,
      'Secret sudah ter-push = dianggap bocor! Rotasi kredensial adalah langkah #1 wajib sebelum pembersihan riwayat.',
      'Menghapus di commit baru tidak menghilangkan rahasia dari histori Git lama. Kredensial harus segera diganti/revoked di server, baru histori dibersihkan dan dicegah dengan secret scanning.'
    ]
  ];

  // 2) +30 Soal Bahasa Inggris Kementerian & TI (SKB Tambahan / Literasi Kebijakan & Teknologi)
  const INGGRIS_ROWS = [
    [
      'Grammar & Structure (Kementerian)', 'eng-sva-1',
      'The Minister, accompanied by several directors general, _____ scheduled to inaugurate the integrated digital portal tomorrow morning.',
      ['are', 'is', 'were', 'have been', 'be'], 1,
      'Subjek utama "The Minister" (tunggal); frasa "accompanied by..." tidak mengubah jumlah subjek.',
      'Aturan Subject-Verb Agreement: ekspresi penyerta seperti "accompanied by", "along with", atau "as well as" tidak membuat subjek tunggal menjadi jamak. Maka kata kerja tunggal "is" tepat.'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-sva-2',
      'Neither the central database servers nor the backup storage node _____ experienced unexpected downtime since the upgrade last month.',
      ['have', 'are', 'has', 'were', 'do'], 2,
      'Pada "Neither A nor B", kata kerja mengikuti subjek yang terdekat ("the backup storage node" = tunggal).',
      'Dalam struktur correlative conjunction "neither ... nor ...", verba menyesuaikan nomina terdekat setelah "nor", yakni "node" (singular), sehingga memakai "has".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-sva-3',
      'The number of civil servant applicants choosing information technology positions _____ significantly every recruitment cycle.',
      ['increase', 'have increased', 'has increased', 'were increasing', 'are increasing'], 2,
      '"The number of + plural noun" memakai verba TUNGGAL; "A number of" memakai JAMAK.',
      'Frasa "The number of ..." merujuk pada jumlahnya sebagai satu entitas (tunggal), sehingga diikuti kata kerja tunggal "has increased".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-subjunctive',
      'The cybersecurity regulation mandates that every government agency _____ a Data Protection Officer and report breaches promptly.',
      ['appoints', 'appointed', 'appoint', 'has appointed', 'is appointing'], 2,
      'Subjunctive setelah "mandate/require/insist/propose that" memakai bare infinitive (V1 tanpa -s).',
      'Kata kerja mandat (mandates that, requires that, recommends that) menuntut bentuk subjunctive yaitu kata kerja dasar tanpa akhiran -s/-ed: "appoint".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-inversion',
      'Not only _____ the latency of public service APIs, but the caching layer also reduced database CPU consumption by forty percent.',
      ['the system improved', 'did the system improve', 'the system has improved', 'improved the system', 'was the system improve'], 1,
      'Ekspresi negatif di awal kalimat ("Not only", "Seldom", "Never") memicu inversi: auxiliary + subjek + verb.',
      'Ketika kalimat dibuka dengan adverbia negatif seperti "Not only", klausa pertama harus mengalami inversi tanya (did + the system + improve).'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-conditional',
      'Had the engineering team tested the disaster recovery plan earlier, the regional service outage _____ avoided.',
      ['will be', 'would be', 'would have been', 'can be', 'had been'], 2,
      'Inversi Conditional Type 3 ("Had + S + V3...") berpasangan dengan "would have + V3".',
      '"Had the engineering team tested..." adalah Conditional Tipe 3 bentuk inversi (pengandaian masa lampau), sehingga klausa utama wajib memakai modal lampau sempurna: "would have been avoided".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-participle',
      '_____ for high availability across three availability zones, the ministry cloud cluster can tolerate a single zone failure automatically.',
      ['Designing', 'Designed', 'To design', 'Design', 'Having design'], 1,
      'Subjek utama ("the ministry cloud cluster") menerima aksi -> gunakan Past Participle (V3) pasif.',
      'Pada reduced relative clause di awal kalimat, subjek setelah koma ("the cluster") bersifat pasif (dirancang untuk...), maka participle yang tepat adalah "Designed".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-parallel',
      'A competent Computer Systems Officer must be able to analyze user requirements, design scalable architectures, and _____ system security continuously.',
      ['monitoring', 'to monitor', 'monitor', 'monitored', 'monitors'], 2,
      'Paralelisme setelah "to [analyze], [design], and [monitor]" harus memakai V1 paralel.',
      'Struktur paralel di belakang penanda infinitive "to" menuntut bentuk kata kerja dasar yang setara: "analyze ... design ... and monitor".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-relative',
      'The ministerial decree, _____ was revised to align with the Personal Data Protection Law, takes effect next quarter.',
      ['who', 'whom', 'that', 'which', 'whose'], 3,
      'Non-defining relative clause (diapit koma, merujuk benda) wajib memakai "which", bukan "that".',
      'Setelah koma pada klausa penjelas tambahan (non-restrictive) untuk benda ("The ministerial decree"), bahasa Inggris formal hanya memakai "which", bukan "that".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-preposition',
      'All regional offices must submit their interoperability compliance reports _____ accordance with the national architecture guidelines.',
      ['on', 'by', 'in', 'with', 'for'], 2,
      'Kolokasi baku regulasi: "in accordance with" (sesuai dengan).',
      'Ungkapan preposisi standar dalam naskah hukum dan pemerintahan adalah "in accordance with" (= sesuai dengan), "in compliance with", "pursuant to".'
    ],
    [
      'Written Expression (Error Identification)', 'eng-err-1',
      'Identifikasi bagian yang SALAH pada kalimat resmi berikut:\n"Each of the regional data centers [A. were] instructed to [B. implement] multi-factor authentication [C. prior to] connecting to [D. the central portal]."',
      ['A. were', 'B. implement', 'C. prior to', 'D. the central portal', 'Tidak ada kesalahan'], 0,
      '"Each of + plural noun" tetap membutuhkan kata kerja TUNGGAL ("was", bukan "were").',
      'Meskipun "regional data centers" jamak, inti subjek kalimat adalah kata ganti tak tentu tunggal "Each", sehingga "were" harus diperbaiki menjadi "was".'
    ],
    [
      'Written Expression (Error Identification)', 'eng-err-2',
      'Identifikasi bagian yang SALAH pada kalimat berikut:\n"Despite [A. of the tight schedule], the IT division [B. managed to] migrate [C. legacy applications] without [D. any data loss]."',
      ['A. of the tight schedule', 'B. managed to', 'C. legacy applications', 'D. any data loss', 'Tidak ada kesalahan'], 0,
      '"Despite" TIDAK pernah diikuti "of" (gunakan "Despite the..." atau "In spite of the...").',
      'Kesalahan paling umum di Structure test adalah menulis "despite of". Yang baku adalah "Despite the tight schedule" atau "In spite of the tight schedule".'
    ],
    [
      'Written Expression (Error Identification)', 'eng-err-3',
      'Identifikasi bagian yang SALAH pada kalimat berikut:\n"The agency expects [A. their] technical staff [B. to document] every incident [C. accurately] in [D. the service desk log]."',
      ['A. their', 'B. to document', 'C. accurately', 'D. the service desk log', 'Tidak ada kesalahan'], 0,
      '"The agency" adalah kata benda kolektif tunggal, sehingga kata gantinya harus "its", bukan "their".',
      'Dalam bahasa Inggris formal pemerintahan, institusi atau "the agency" diperlakukan sebagai entitas tunggal sehingga merujuk ke "its", bukan "their".'
    ],
    [
      'Written Expression (Error Identification)', 'eng-err-4',
      'Identifikasi bagian yang SALAH pada kalimat berikut:\n"Before [A. deploying] the update to production, the team [B. suggested] [C. to conduct] an automated load test [D. overnight]."',
      ['A. deploying', 'B. suggested', 'C. to conduct', 'D. overnight', 'Tidak ada kesalahan'], 2,
      'Verba "suggest" diikuti gerund (V-ing) atau klausa "that + S + V", BUKAN "to-infinitive".',
      'Kata kerja seperti suggest, recommend, consider, dan avoid dalam bahasa Inggris baku tidak boleh langsung diikuti "to + V1"; bentuk benar adalah "suggested conducting".'
    ],
    [
      'Written Expression (Error Identification)', 'eng-err-5',
      'Identifikasi bagian yang SALAH pada kalimat berikut:\n"The new policy aims to [A. minimize] redundant [B. equipments] purchases and [C. standardize] software licensing [D. across units]."',
      ['A. minimize', 'B. equipments', 'C. standardize', 'D. across units', 'Tidak ada kesalahan'], 1,
      '"Equipment", "software", "information", dan "data" (umum) adalah uncountable noun—tidak ditambah -s.',
      'Kata "equipment" dan "software" bersifat tidak dapat dihitung (uncountable) dalam bahasa Inggris sehingga tidak memiliki bentuk jamak "equipments".'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-1a',
      'Bacalah kutipan:\n"Public sector digital transformation fails when ministries merely digitize paper bottlenecks instead of redesigning underlying workflows. Shared national platforms succeed only when agencies agree on common data standards and clear legal accountability."\n\nApa gagasan utama kutipan tersebut?',
      [
        'Membeli perangkat keras baru sudah cukup menyelesaikan seluruh hambatan birokrasi',
        'Transformasi digital menuntut perancangan ulang proses bisnis, standar data bersama, dan kejelasan akuntabilitas hukum, bukan sekadar memindai dokumen kertas',
        'Setiap kementerian wajib menggunakan standar data yang berbeda agar lebih aman',
        'Platform nasional bersama hanya dapat dijalankan oleh perusahaan swasta asing',
        'Formulir kertas selalu lebih cepat dibandingkan sistem elektronik modern'
      ], 1,
      'Cari kalimat tesis: "fails when ... merely digitize paper bottlenecks" -> butuh redesign workflow & standar bersama.',
      'Penulis menekankan bahwa digitalisasi tanpa penyederhanaan alur kerja hanya memindahkan kemacetan birokrasi ke layar; keberhasilan butuh standar data bersama dan akuntabilitas.'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-1b',
      'Pada kutipan sebelumnya ("merely digitize paper bottlenecks instead of redesigning underlying workflows"), arti terdekat kata "underlying" dalam konteks tersebut adalah…',
      ['tersembunyi secara ilegal', 'mendasar / yang melandasi di balik proses', 'sudah kedaluwarsa sepenuhnya', 'berbiaya paling mahal', 'bersifat sementara'], 1,
      'Underlying = fundamental / mendasar yang menopang suatu proses atau sistem.',
      '"Underlying workflows" bermakna alur kerja mendasar yang menjadi akar jalannya layanan di balik formulir tampak luar.'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-2a',
      'Bacalah kutipan:\n"Although cloud adoption reduces upfront capital expenditure for ministries, poorly governed multi-cloud environments often escalate operational costs through idle compute instances and unmonitored egress traffic."\n\nMenurut teks, risiko apa yang timbul bila lingkungan multi-cloud tidak dikelola dengan baik?',
      [
        'Biaya investasi awal gedung langsung nol',
        'Biaya operasional membengkak akibat sumber daya komputasi menganggur dan lalu lintas keluar (egress) yang tidak terpantau',
        'Seluruh data di cloud otomatis menjadi publik tanpa izin',
        'Instansi tidak perlu memantau konsumsi layanan sama sekali',
        'Kapasitas jaringan lokal di daerah meningkat sepuluh kali lipat'
      ], 1,
      '"escalate operational costs through idle compute instances and unmonitored egress traffic".',
      'Teks menyatakan penghematan belanja modal (CapEx) di awal bisa kalah oleh pembengkakan biaya operasional (OpEx) jika instance idle dan transfer data keluar tidak diawasi.'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-2b',
      'Berdasarkan kutipan tentang multi-cloud di atas, kata "escalate" paling tepat diartikan sebagai…',
      ['menekan turun', 'meningkat tajam / memperbesar', 'menghapus', 'membagi merata', 'membekukan'], 1,
      'Escalate = increase rapidly / naik atau membengkak tajam.',
      '"Escalate operational costs" berarti membuat biaya operasional naik atau membengkak lebih tinggi dari perkiraan.'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-3a',
      'Bacalah kutipan:\n"Under zero-downtime migration principles, legacy databases should remain synchronized with new cloud tables via change-data-capture streams during a controlled shadow-testing phase before switching authoritative write operations."\n\nMengapa change-data-capture (CDC) digunakan sebelum memindahkan operasi tulis (write) utama?',
      [
        'Untuk menghapus seluruh data historis sebelum uji coba dimulai',
        'Agar basis data lama dan baru tetap sinkron selama tahap pengujian bayangan (shadow testing) sehingga perpindahan aman',
        'Untuk memperlambat aplikasi agar pengguna tidak melakukan login',
        'Supaya administrator tidak perlu memverifikasi konsistensi data',
        'Untuk mengganti bahasa pemrograman frontend secara otomatis'
      ], 1,
      'CDC menjaga kedua database sinkron selama shadow testing sebelum switchover authoritative write.',
      'Sinkronisasi berkelanjutan lewat CDC memungkinkan tim memvalidasi sistem baru dengan beban nyata tanpa risiko kehilangan transaksi bila harus kembali ke sistem lama.'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-3b',
      'Dari teks migrasi basis data di atas, arti kata "authoritative" dalam frasa "authoritative write operations" adalah…',
      ['bersifat diktator dan tertutup', 'resmi / menjadi sumber rujukan kebenaran utama', 'tidak memiliki izin akses', 'hanya berjalan sebulan sekali', 'bersifat percobaan tidak penting'], 1,
      'Authoritative (dalam data engineering) = menjadi sumber kebenaran resmi (source of truth).',
      'Saat switchover, sistem baru menjadi "authoritative source" — artinya setiap perubahan data resmi dicatat dan disahkan dari basis data tersebut.'
    ],
    [
      'Vocabulary Pemerintahan & Teknologi', 'eng-vocab-1',
      'Dalam dokumen pengadaan sistem TI kementerian tertulis kalimat: "The vendor must ensure seamless interoperability with existing ministerial registries." Kata "seamless" bermakna…',
      ['penuh hambatan teknis', 'mulus dan terpadu tanpa gangguan antarbagian', 'terpisah secara permanen', 'memerlukan cetak ulang manual', 'mahal dan lambat'], 1,
      'Seamless = mulus, tanpa celah atau jeda gangguan saat berpindah antar-sistem.',
      'Integrasi "seamless" berarti pertukaran data antarsistem terjadi mulus di belakang layar tanpa membuat pengguna kesulitan.'
    ],
    [
      'Vocabulary Pemerintahan & Teknologi', 'eng-vocab-2',
      'Dalam laporan audit keamanan TI tertulis: "Unpatched servers pose a critical vulnerability that threat actors can easily exploit." Kata "pose" dalam konteks ini paling dekat maknanya dengan…',
      ['berpose untuk foto resmi', 'menimbulkan / menghadirkan (risiko/ancaman)', 'menunda jadwal rapat', 'memperbaiki secara permanen', 'menghapus seluruh berkas'], 1,
      'Pose a risk/threat/vulnerability = menimbulkan atau menghadirkan suatu risiko.',
      'Kolokasi "pose a risk/threat/vulnerability" dalam laporan resmi selalu bermakna menimbulkan potensi bahaya atau ancaman.'
    ],
    [
      'Vocabulary Pemerintahan & Teknologi', 'eng-vocab-3',
      'Dalam standar tata kelola layanan publik tercantum istilah "mitigation" dan "remediation". Perbedaan paling tepat di antara keduanya adalah…',
      [
        'Mitigation adalah mengurangi dampak/kemungkinan risiko; remediation adalah memperbaiki akar masalah/celah yang sudah ditemukan',
        'Keduanya bermakna membiarkan gangguan berlangsung terus-menerus',
        'Mitigation hanya untuk keuangan, sedangkan remediation hanya untuk kepegawaian',
        'Remediation adalah menaikkan anggaran, sedangkan mitigation adalah membeli gedung',
        'Keduanya berarti memadamkan seluruh pusat data secara permanen'
      ], 0,
      'Mitigation = menekan dampak/risiko; Remediation = menuntaskan perbaikan atas celah/temuan.',
      'Mitigasi berfokus menekan kemungkinan atau keparahan dampak (mis. kontrol sementara WAF), sedangkan remediasi menuntaskan perbaikan akar masalah (mis. patch kode).'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-passive',
      'Sensitive citizen records must _____ with strong encryption keys before being archived in offsite backup storage.',
      ['encrypt', 'encrypting', 'be encrypted', 'have encrypt', 'to encrypt'], 2,
      'Subjek benda ("Sensitive citizen records") dikenai tindakan setelah modal "must" -> must + be + V3.',
      'Kalimat pasif dengan modal membutuhkan pola "modal + be + Past Participle", sehingga jawabannya adalah "be encrypted".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-conjunction',
      '_____ the legacy system was written twenty years ago, it still processes over half of the agency’s daily tax filings.',
      ['Because of', 'Even though', 'Despite', 'In spite of', 'Therefore'], 1,
      'Diikuti klausa lengkap (S + V) yang menyatakan pertentangan -> gunakan "Even though" / "Although".',
      '"Despite", "In spite of", dan "Because of" harus diikuti frasa nomina, bukan klausa lengkap ("the legacy system was written..."). Untuk hubungan kontras antar-klausa gunakan "Even though".'
    ],
    [
      'Grammar & Structure (Kementerian)', 'eng-comparison',
      'The new containerized microservices architecture recovers _____ from node failures than the previous monolithic deployment.',
      ['more fast', 'much faster', 'most fastest', 'as faster', 'fastly'], 1,
      'Bentuk komparatif dari "fast" adalah "faster" dan dapat diperkuat dengan modifier "much" / "far".',
      '"Fast" bersuku kata satu sehingga bentuk komparatifnya adalah "faster" (bukan "more fast" atau "fastly").'
    ],
    [
      'Written Expression (Error Identification)', 'eng-err-6',
      'Identifikasi bagian yang SALAH pada kalimat berikut:\n"Neither automated alerts [A. or] daily manual checks [B. could prevent] the outage [C. caused by] an expired SSL certificate [D. last Tuesday]."',
      ['A. or', 'B. could prevent', 'C. caused by', 'D. last Tuesday', 'Tidak ada kesalahan'], 0,
      'Pasangan baku "Neither" adalah "nor", bukan "or".',
      'Correlative conjunction yang benar adalah "Either ... or ..." dan "Neither ... nor ...". Menggunakan "Neither ... or" adalah kesalahan tata bahasa.'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-4a',
      'Bacalah kutipan:\n"When designing citizen-facing applications, ministry teams must prioritize accessibility and plain language over technical jargon so that users with diverse literacy levels can complete transactions independently."\n\nApa rekomendasi utama dari kutipan tersebut bagi perancang aplikasi kementerian?',
      [
        'Menggunakan istilah teknis rumit agar aplikasi terlihat canggih',
        'Mengutamakan kemudahan akses (accessibility) dan bahasa yang lugas agar warga dengan beragam tingkat literasi dapat menyelesaikan layanan secara mandiri',
        'Mewajibkan warga mengikuti pelatihan coding sebelum memakai aplikasi layanan',
        'Membatasi layanan daring hanya untuk pegawai pemerintah saja',
        'Menghapus seluruh petunjuk pengisian di halaman formulir'
      ], 1,
      'Frasa kunci: "prioritize accessibility and plain language over technical jargon".',
      'Desain layanan publik yang berorientasi pengguna (citizen-centric) menuntut bahasa sederhana dan antarmuka aksesibel daripada istilah teknis internal.'
    ],
    [
      'Reading: Kebijakan Digital & Siber', 'eng-read-4b',
      'Dalam kutipan di atas, lawan kata (antonim) terdekat dari "diverse" adalah…',
      ['varied', 'uniform / homogeneous', 'widespread', 'independent', 'inclusive'], 1,
      'Diverse = beragam -> antonimnya uniform / homogeneous (seragam).',
      '"Diverse literacy levels" bermakna tingkat literasi yang beragam; lawan katanya adalah seragam (uniform/homogeneous).'
    ]
  ];

  window.registerCPNSQuestions({
    packId: 'kemen_prakom_v46',
    bucket: 'SKB_PRAKOM',
    questions: PRAKOM_ROWS.map(([sub, fam, q, options, ans, trick, explanation], i) => ({
      id: 'SKB-PRAKOM-X' + (9001 + i),
      examType: 'SKB_PRAKOM',
      category: 'SKB PRANATA KOMPUTER',
      sub, fam, q,
      options: options.map((o, idx) => String.fromCharCode(65 + idx) + '. ' + o),
      ans,
      scores: options.map((_, idx) => (idx === ans ? 5 : 0)),
      trick, explanation,
      practice: 'GOCPNS'
    }))
  });

  window.registerCPNSQuestions({
    packId: 'kemen_inggris_v46',
    bucket: 'SKB_INGGRIS',
    questions: INGGRIS_ROWS.map(([sub, fam, q, options, ans, trick, explanation], i) => ({
      id: 'SKB-ENG-X' + (9001 + i),
      examType: 'SKB_INGGRIS',
      category: 'SKB BAHASA INGGRIS',
      sub, fam, q,
      options: options.map((o, idx) => String.fromCharCode(65 + idx) + '. ' + o),
      ans,
      scores: options.map((_, idx) => (idx === ans ? 5 : 0)),
      trick, explanation,
      practice: 'GOCPNS'
    }))
  });

  // 2 Materi baru (Prakom Kementerian Terkini & Bahasa Inggris Kementerian)
  if (!Array.isArray(window.MATERI)) window.MATERI = [];
  const NEW_MATERI = [
    {
      id: 'prakom-kementerian-terkini',
      group: 'SKB',
      skbCategory: 'PRAKOM',
      title: 'Prakom Kementerian Terkini: Pemerintah Digital, UU PDP, OWASP & Cloud HA',
      summary: 'Bekal khusus Pranata Komputer di Kementerian: Perpres 82/2023, Perpres 39/2019 Satu Data, PermenPANRB 1/2023 JF Prakom, UU PDP 27/2022, OWASP/Zero Trust, Kubernetes, dan Lakehouse.',
      buckets: ['SKB_PRAKOM'],
      subs: ['SPBE & Pemerintah Digital Kementerian', 'Regulasi JF Prakom & ASN', 'Keamanan Siber & UU PDP', 'Arsitektur Cloud, DevSecOps & HA', 'Basis Data, SQL & Rekayasa Data', 'Jaringan, Infrastruktur & Linux', 'Rekayasa Perangkat Lunak, UI/UX & SPBE', 'Tata Kelola TI, ITIL & Manajemen Risiko', 'Kecerdasan Buatan & SIG Pemerintahan'],
      sections: [
        {
          title: 'SPBE (Perpres 95/2018), Pemerintah Digital (Perpres 82/2023) & Satu Data',
          fam: ['kmp-spbe-perpres82', 'kmp-spbe-perpres95', 'kmp-satudata', 'kmp-jf-prakom', 'kmp-jf-etika'],
          html: '<p>Di level <b>Kementerian</b>, soal SKB Prakom sangat sering menguji regulasi lintas instansi terbaru:</p>' +
            '<table class="table table-sm"><thead><tr><th>Regulasi</th><th>Fokus Inti</th><th>Kata Kunci Soal</th></tr></thead><tbody>' +
            '<tr><td><b>Perpres 95/2018 (SPBE)</b></td><td>6 Domain Arsitektur (Proses Bisnis, Data, Layanan, Aplikasi, Infrastruktur, Keamanan)</td><td>Proses Bisnis &amp; Data sebagai pengikat utama; hindari silo aplikasi</td></tr>' +
            '<tr><td><b>Perpres 82/2023 (GovTech/INA Digital)</b></td><td>Keterpaduan Layanan Digital Nasional &amp; Portal Terintegrasi</td><td>Aplikasi Umum Berbagi Pakai, SPLP/API Interoperabilitas, Digital ID</td></tr>' +
            '<tr><td><b>Perpres 39/2019 (Satu Data)</b></td><td>Pembina Data, Walidata, Produsen Data</td><td>Walidata memeriksa standar data &amp; metadata sebelum publikasi</td></tr>' +
            '<tr><td><b>PermenPANRB 32/2020 jo 1/2023</b></td><td>Jabatan Fungsional Pranata Komputer</td><td>Konversi predikat SKP jadi Angka Kredit; kode etik netral spesifikasi pengadaan</td></tr></tbody></table>'
        },
        {
          title: 'UU PDP No. 27/2022, BSSN Zero Trust, PKI/TTE & OWASP Security',
          fam: ['kmp-uupdp-notif', 'kmp-uupdp-dpo', 'kmp-owasp-idor', 'kmp-owasp-ssrf', 'kmp-zero-trust', 'kmp-ransomware-321', 'kmp-pki-tte', 'kmp-csp-xss', 'kmp-sso-oidc'],
          html: '<ul><li><b>UU PDP 27/2022 Pasal 46:</b> kegagalan pelindungan data pribadi wajib dinotifikasi tertulis dalam <b>3 × 24 jam</b> ke Subjek Data dan lembaga otoritas.</li>' +
            '<li><b>Pejabat PDP (DPO):</b> memantau kepatuhan, memberi advis DPIA (analisis dampak pelindungan data), dan jadi penghubung resmi.</li>' +
            '<li><b>OWASP Wajib Hafal:</b> <b>BOLA/IDOR</b> (ganti ID di URL bisa akses data orang lain), <b>SSRF</b> (memaksa server fetch IP internal/metadata cloud <code>169.254.169.254</code>), <b>XSS</b> (mitigasi dengan output encoding + header <code>Content-Security-Policy</code>).</li>' +
            '<li><b>Ketahanan Backup &amp; TTE:</b> aturan <b>3-2-1-1-0</b> (minimal 1 salinan <i>immutable / air-gapped</i> kebal ransomware); TTE/PKI menandatangani hash dengan <b>private key</b> penanda tangan.</li></ul>'
        },
        {
          title: 'Cloud Native (Kubernetes), DevSecOps, High Availability & Idempotensi',
          fam: ['kmp-k8s-probe', 'kmp-cicd-sec', 'kmp-rate-limit', 'kmp-ha-sla', 'kmp-circuit-breaker', 'kmp-blue-green', 'kmp-msg-queue', 'kmp-observability', 'kmp-git-workflow', 'kmp-api-idemp', 'kmp-a11y-wcag', 'kmp-uat-blackbox'],
          html: '<p>Aplikasi layanan publik nasional harus siap menanggung lonjakan pendaftar/warga:</p>' +
            '<ul><li><b>Kubernetes Probes:</b> <code>ReadinessProbe</code> menahan trafik sebelum container siap; <code>LivenessProbe</code> me-restart container yang hang.</li>' +
            '<li><b>Pola Ketahanan &amp; Rilis:</b> <b>API Gateway</b> (rate limit + JWT), <b>Circuit Breaker</b> (cegah <i>cascading failure</i>), <b>Message Queue</b> (proses berat asinkron), <b>Blue-Green</b> (rilis zero-downtime + rollback detik), dan <b>Idempotency-Key</b> (anti double submit).</li>' +
            '<li><b>Perhitungan SLA:</b> ketersediaan 99,9% dalam 30 hari (43.200 menit) = batas downtime maksimal <b>43,2 menit</b>; 99,99% = <b>4,32 menit</b>.</li>' +
            '<li><b>Observability &amp; DevSecOps:</b> Logs + Metrics + Distributed Tracing; <b>SAST</b> cek source code statis saat PR, <b>DAST</b> uji aplikasi aktif. Rahasia terlanjur push ke Git → <b>rotasi kredensial dulu</b> baru bersihkan histori!</li></ul>'
        },
        {
          title: 'Rekayasa Basis Data (SQL, Indeks, ELT/Lakehouse) & Linux/Jaringan',
          fam: ['kmp-sql-window', 'kmp-sql-nplus1', 'kmp-sql-index', 'kmp-acid-isolation', 'kmp-etl-elt', 'kmp-lineage', 'kmp-subnet-kemen', 'kmp-dns-sec', 'kmp-linux-diag', 'kmp-raid-kemen', 'kmp-itil-change', 'kmp-cobit-apobai', 'kmp-ai-rag', 'kmp-sig-postgis'],
          html: '<ul><li><b>SQL &amp; Kinerja:</b> atasi kueri <b>N+1</b> dengan JOIN/eager loading; indeks komposit B-Tree utamakan kolom <code>=</code> di depan kolom rentang (<code>&gt;=</code>); pakai <b>Window Function</b> (<code>DENSE_RANK() OVER</code>) untuk ranking per unit tanpa memampatkan baris.</li>' +
            '<li><b>Anomali ACID:</b> <i>Dirty Read</i> (baca uncommitted), <i>Non-Repeatable Read</i> (baca ulang baris berubah akibat commit lain), <i>Phantom Read</i> (muncul baris baru pada range query).</li>' +
            '<li><b>Data Modern &amp; AI:</b> <b>ELT / Lakehouse</b> muat raw data dulu baru olah di engine target; <b>Data Lineage</b> melacak asal data untuk audit; <b>RAG</b> membumikan jawaban LLM pada regulasi; <b>GiST</b> untuk indeks spasial PostGIS.</li>' +
            '<li><b>Linux &amp; Infrastruktur:</b> disk 58% tapi gagal buat file → cek inode pakai <code>df -i</code>; butuh performa baca+toleransi mirror DB OLTP → <b>RAID 10</b>; proteksi resolusi domain <code>.go.id</code> → <b>DNSSEC</b>; blok <code>/22</code> = 4 subnet <code>/24</code> (1.022 host).</li></ul>'
        }
      ],
      tips: [
        'Soal SKB Prakom Kementerian senang menguji <b>keputusan arsitektur & tata kelola nyata</b> (bukan hafalan definisi mentah) — selalu pilih opsi yang menjamin interoperabilitas, keamanan UU PDP, jejak audit, dan pemulihan teruji.',
        'Bedakan cepat: <b>SAST</b> (source code, pre-build) vs <b>DAST</b> (runtime, black-box); <b>ReadinessProbe</b> (siap terima trafik) vs <b>LivenessProbe</b> (perlu restart); <b>Mitigation</b> (tekan risiko/dampak) vs <b>Remediation</b> (perbaiki akar celah).',
        'Untuk soal regulasi ASN/SPBE di Kementerian, kunci utamanya adalah <b>keterpaduan portal nasional (Perpres 82/2023)</b>, peran <b>Walidata (Perpres 39/2019)</b>, notifikasi kebocoran <b>3×24 jam (UU PDP)</b>, dan netralitas pengadaan TI.'
      ]
    },
    {
      id: 'kemen-bahasa-inggris',
      group: 'SKB',
      skbCategory: 'INGGRIS',
      title: 'Bahasa Inggris Kementerian & TI: Grammar Jebakan, Reading Kebijakan & Vocabulary',
      summary: 'Bekal menghadapi SKB Tambahan / Tes Literasi Bahasa Inggris Kementerian (TOEFL-like Structure, Written Expression, Reading IT & Kebijakan Publik).',
      buckets: ['SKB_INGGRIS'],
      subs: ['Grammar & Structure (Kementerian)', 'Written Expression (Error Identification)', 'Reading: Kebijakan Digital & Siber', 'Vocabulary Pemerintahan & Teknologi'],
      sections: [
        {
          title: '5 Pola Grammar Wajib Keluar (Subject-Verb, Subjunctive, Inversi & Conditional)',
          fam: ['eng-sva-1', 'eng-sva-2', 'eng-sva-3', 'eng-subjunctive', 'eng-inversion', 'eng-conditional', 'eng-participle', 'eng-parallel', 'eng-relative', 'eng-preposition', 'eng-passive', 'eng-conjunction', 'eng-comparison'],
          html: '<table class="table table-sm"><thead><tr><th>Pola</th><th>Aturan Emas</th><th>Contoh Kunci</th></tr></thead><tbody>' +
            '<tr><td><b>Appositive / Accompanied by</b></td><td>Frasa penyerta (<i>along with, accompanied by</i>) abaikan saat tentukan tunggal/jamak</td><td><i>The Minister, accompanied by directors, <b>is</b>...</i></td></tr>' +
            '<tr><td><b>Neither A nor B / Each of</b></td><td><i>Each of</i> selalu tunggal; <i>Neither..nor</i> ikut subjek terdekat</td><td><i>Each of the servers <b>was</b>...</i></td></tr>' +
            '<tr><td><b>The number vs A number</b></td><td><i>The number of</i> → <b>tunggal</b>; <i>A number of</i> → jamak</td><td><i>The number of applicants <b>has</b>...</i></td></tr>' +
            '<tr><td><b>Subjunctive Mandat</b></td><td>Setelah <i>mandate / require / suggest that</i> → pakai <b>V1 murni</b> (tanpa -s)</td><td><i>mandates that every agency <b>appoint</b>...</i></td></tr>' +
            '<tr><td><b>Inversi Negatif &amp; Cond. 3</b></td><td><i>Not only / Seldom</i> di awal memicu bantu + S + V; <i>Had S V3</i> → <i>would have V3</i></td><td><i>Not only <b>did the system</b> improve...</i></td></tr></tbody></table>'
        },
        {
          title: 'Written Expression & Jebakan Kata Uncountable / Kolokasi Resmi',
          fam: ['eng-err-1', 'eng-err-2', 'eng-err-3', 'eng-err-4', 'eng-err-5', 'eng-err-6'],
          html: '<ul><li><b>Despite vs In spite of:</b> JANGAN pernah pilih <code>despite of</code>! Baku: <i>Despite + Noun</i> atau <i>In spite of + Noun</i>.</li>' +
            '<li><b>Kata benda tidak dapat dihitung (Uncountable):</b> <code>equipment, software, information, research, infrastructure</code> tidak pernah memakai akhiran <code>-s</code>.</li>' +
            '<li><b>Pola Verba:</b> <code>suggest / recommend / avoid</code> + <b>V-ing</b> (atau <i>that S V1</i>), bukan <i>to + V1</i>.</li>' +
            '<li><b>Kata ganti institusi:</b> <i>The agency / The ministry</i> adalah tunggal → merujuk ke <b>its</b> (bukan <i>their</i>).</li></ul>'
        },
        {
          title: 'Strategi Reading Kebijakan Digital & Vocabulary TI Pemerintahan',
          fam: ['eng-read-1a', 'eng-read-1b', 'eng-read-2a', 'eng-read-2b', 'eng-read-3a', 'eng-read-3b', 'eng-read-4a', 'eng-read-4b', 'eng-vocab-1', 'eng-vocab-2', 'eng-vocab-3'],
          html: '<p>Teks bacaan kementerian umumnya mengambil tema <i>digital government, cloud governance, cybersecurity</i>, dan <i>public service accessibility</i>.</p>' +
            '<ul><li><b>Kosakata sering muncul:</b> <i>seamless</i> (mulus terpadu), <i>underlying</i> (mendasar), <i>escalate</i> (meningkat tajam), <i>authoritative</i> (sumber kebenaran resmi), <i>pose (a risk)</i> (menimbulkan risiko), <i>mitigation vs remediation</i> (menekan risiko vs menuntaskan perbaikan).</li>' +
            '<li><b>Trik Main Idea:</b> baca kalimat pertama dan terakhir paragraf (terutama yang memuat kata kontras seperti <i>although, however, fails when, only when</i>).</li></ul>'
        }
      ],
      tips: [
        'Di soal Structure/Written Expression, coret frasa preposisi atau klausa pengganggu di antara koma untuk melihat <b>Subjek Inti + Verba Utama</b> dengan cepat.',
        'Waspadai jebakan klasik tes kementerian: <code>despite of</code>, <code>equipments</code>, <code>neither ... or</code> (seharusnya <code>nor</code>), dan <code>suggest to do</code>.',
        'Pada soal Vocabulary dalam konteks kalimat, jangan pilih arti kamus yang paling harfiah—uji substitusi opsi ke dalam kalimat aslinya.'
      ]
    }
  ];

  NEW_MATERI.forEach(t => {
    if (!window.MATERI.some(x => x.id === t.id)) window.MATERI.push(t);
  });
})();
