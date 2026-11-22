/* Latihan orisinal GOCPNS. Cakupan SKD mengacu pada KepmenPANRB 321/2024. */
(function () {
  const twk = [
    ['Integritas','Audit internal menemukan selisih kecil antara berita acara dan hasil pengukuran. Penyedia meminta tim menandatangani dokumen sekarang agar pembayaran tidak terlambat. Tindakan yang mencerminkan integritas adalah…',
      ['Menandatangani dan meminta penyedia mengirim konfirmasi','Merekonsiliasi hasil ukur, mendokumentasikan selisih, dan meminta koreksi sebelum menyetujui','Menahan seluruh kontrak lain yang dimiliki penyedia','Mengoreksi angka pada salinan pribadi lalu menandatangani berita acara','Meneruskan dokumen tanpa catatan karena selisihnya kecil'],1,
      'Uji apakah jejak keputusan sesuai fakta.','Koreksi dokumen resmi sebelum persetujuan menjaga akurasi dan memungkinkan audit sekaligus memberi penyedia kesempatan merespons.'],
    ['Nasionalisme','Tim lintas daerah menyepakati satu format pengaduan nasional. Daerah pesisir meminta versi yang bisa diisi saat koneksi terputus. Kebijakan mana paling mendukung persatuan? ',
      ['Mewajibkan aplikasi identik di seluruh wilayah','Mengizinkan setiap daerah mengubah definisi dan kategori aduan','Membatasi proyek pada daerah dengan akses internet baik','Menjaga standar data bersama sembari menyediakan pengisian luring yang bisa disinkronkan','Membuat dua jenis hak pengaduan berdasarkan wilayah'],3,
      'Bedakan standar bersama dari cara mengaksesnya.','Format dan definisi yang sama memungkinkan integrasi nasional. Kanal luring memberi akses setara kepada warga dalam kondisi infrastruktur berbeda.'],
    ['Bela Negara','Sesudah gempa, beredar pesan yang menyebut sebuah jalur evakuasi sudah aman. Data posko berbeda dan relawan hendak meneruskan pesan itu. Sikap bela negara yang tepat adalah…',
      ['Memeriksa status jalur ke posko lalu membagikan informasi terverifikasi','Meneruskan pesan dengan catatan bahwa sumbernya belum pasti','Membuat jalur sendiri berdasarkan jarak terpendek','Menunggu pesan lama berhenti beredar dengan sendirinya','Membagikan nama dan nomor pribadi pengirim pesan'],0,
      'Saat darurat, validasi sumber sebelum menyebarkan instruksi.','Informasi resmi yang terbaru membantu warga mengambil keputusan aman. Koreksi disampaikan tanpa menyebarluaskan data pribadi pengirim.'],
    ['Pilar Negara','Musyawarah desa membahas alokasi air saat kemarau. Sebagian besar peserta adalah pemilik lahan, sedangkan penyewa lahan belum diberi kesempatan bicara. Tindakan paling konsisten dengan sila keempat adalah…',
      ['Mengikuti pilihan pemilik lahan karena jumlahnya lebih besar','Menunda sampai semua orang memiliki pendapat yang identik','Memberi ruang bicara kepada penyewa, lalu menimbang data sebelum menyepakati cara pembagian','Menyerahkan keputusan kepada pihak dengan lahan terluas','Mengubah agenda agar air dibagi tanpa diskusi'],2,
      'Jika yang diuji proses keputusan, cari musyawarah yang inklusif.','Mengundang kelompok yang terdampak untuk menyampaikan alasan memperbaiki keterwakilan dan kualitas keputusan.'],
    ['Pilar Negara','Kuota beasiswa daerah dibagi menurut jumlah pendaftar sebelumnya. Wilayah terpencil hampir tidak mendapat kuota karena akses informasinya rendah. Perbaikan mana paling langsung mencerminkan keadilan sosial? ',
      ['Menaikkan kuota untuk wilayah dengan pelamar terbanyak','Mempertahankan rumus lama dan memublikasikan hasilnya','Menghapus syarat kelayakan untuk seluruh pemohon','Membagi sama rata ke setiap sekolah tanpa menilai kebutuhan','Menggunakan indikator kebutuhan, memperluas sosialisasi, dan mengumumkan kriteria secara terbuka'],4,
      'Keadilan menilai hambatan riil dan kriteria yang dapat diperiksa.','Jumlah pendaftar lama mengukur akses yang sudah terjadi. Indikator kebutuhan dan sosialisasi memperbaiki kesempatan kelompok yang selama ini kurang terjangkau.'],
    ['Integritas','Anda ikut menilai proposal hibah. Salah satu pengusul merupakan organisasi yang Anda kelola sebelum pindah ke instansi dan Anda masih menjadi pengurus tanpa gaji. Langkah pertama yang tepat adalah…',
      ['Memberi penilaian serendah mungkin untuk menghindari kesan memihak','Mengungkapkan konflik kepentingan dan meminta penanggung jawab mengalihkan penilaian proposal','Menilai setelah membaca skor anggota tim lain','Mengundurkan diri dari semua kegiatan kantor tanpa memberi alasan','Tetap menilai karena Anda tidak menerima gaji dari organisasi'],1,
      'Konflik kepentingan bisa timbul dari hubungan peran.','Hubungan kepengurusan menimbulkan konflik nyata atau yang dipersepsikan. Pengungkapan dan pengalihan penilaian menjaga independensi.'],
    ['Bahasa Indonesia','Gagasan pokok paragraf ini adalah…\nPemerintah kota menguji kanal pelaporan banjir berbasis pesan singkat di tiga kecamatan. Warga masih dapat mengirim lokasi saat aplikasi utama sulit diakses. Nomor pengaduan dicantumkan di halte dan kantor kelurahan.',
      ['Aplikasi utama sudah ditutup permanen','Warga harus mencatat nomor pengaduan di halte','Pemkot menguji kanal pesan singkat untuk pelaporan banjir','Seluruh kecamatan telah menggunakan kanal pelaporan baru','Penanda lokasi banjir hanya dapat dikirim dari kantor lurah'],2,
      'Pilih pernyataan yang menaungi dua kalimat penjelas.','Manfaat kanal serta lokasi sosialisasi menjelaskan uji coba pelaporan lewat pesan singkat.'],
    ['Bahasa Indonesia','Pilih kalimat dengan hubungan sebab-akibat yang jelas dan tanpa pasangan konjungsi yang berlebihan.',
      ['Karena server pemohon sedang diperbarui, jadwal pengiriman diperpanjang.','Karena server pemohon sedang diperbarui sehingga jadwal pengiriman diperpanjang.','Jadwal pengiriman karena diperpanjang, server sedang diperbarui.','Sehingga jadwal pengiriman diperpanjang karena.','Server pemohon diperbarui sehingga karena jadwal pengiriman diperpanjang.'],0,
      'Pastikan ada induk kalimat yang dapat berdiri sendiri.','Jadwal pengiriman diperpanjang adalah induk kalimat. Anak kalimat berawalan karena menjelaskan sebab.'],
    ['Nasionalisme','Pameran produk daerah memakai satu identitas visual nasional. Perajin mendapati nama motif lokal diganti supaya seragam. Revisi yang paling sesuai dengan semangat Bhinneka Tunggal Ika adalah…',
      ['Mengembalikan nama lokal, menambah terjemahan, dan mempertahankan identitas pameran bersama','Menghapus identitas pameran bersama agar tiap daerah berdiri sendiri','Membiarkan nama baru supaya semua pengunjung membaca istilah yang sama','Membatasi pameran pada motif yang sudah dikenal luas','Memberi tempat terpisah bagi motif dari daerah kecil tanpa penjelasan'],0,
      'Pertahankan ruang bersama sekaligus identitas tiap daerah.','Nama lokal dan terjemahannya mempertahankan asal budaya serta tetap dapat dipahami pengunjung dari seluruh daerah.'],
    ['Bela Negara','Pusat layanan publik mencatat kenaikan laporan penipuan yang mengatasnamakan pemerintah. Bentuk partisipasi warga yang paling mendukung ketahanan masyarakat adalah…',
      ['Membalas penipu sambil mengirim data palsu','Menyebarkan identitas orang yang diduga sebagai pelaku','Membuat simulasi publik yang memuat nomor korban asli','Melaporkan pesan melalui jalur resmi dan mengedukasi warga memakai contoh yang sudah dianonimkan','Memblokir semua nomor yang belum tersimpan di ponsel tetangga'],3,
      'Cari tindakan yang mengurangi risiko warga tanpa membuka data korban.','Pelaporan mendukung penanganan kasus. Contoh anonim membantu warga mengenali pola penipuan tanpa memperluas kerugian korban.'],
    ['Pilar Negara','Pihak berwenang menyediakan materi layanan yang dapat dibaca dengan pembaca layar. Sila yang paling langsung tercermin dari penghormatan terhadap martabat pengguna penyandang disabilitas adalah…',
      ['Ketuhanan Yang Maha Esa','Kemanusiaan yang Adil dan Beradab','Persatuan Indonesia','Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan','Keadilan Sosial bagi Seluruh Rakyat Indonesia'],1,
      'Bedakan fokus martabat manusia dari pemerataan hasil.','Pertanyaan menekankan penghormatan terhadap martabat pengguna. Fokus tersebut paling langsung mencerminkan sila kedua.'],
    ['Bahasa Indonesia','Kalimat pengumuman awal berbunyi “Berkas diserahkan kepada petugas loket A atau B setelah diperiksa.” Redaksi mana paling jelas jika petugas loketlah yang wajib memeriksa? ',
      ['Berkas diperiksa setelah diserahkan kepada petugas loket A atau loket B oleh pemohon.','Berkas diserahkan kepada petugas setelah diperiksa melalui loket.','Petugas loket A atau B memeriksa berkas yang diserahkan oleh pemohon.','Setelah diperiksa, pemohon diserahkan berkas kepada petugas loket.','Berkas diperiksa oleh petugas melalui penyerahan ke loket A dan B.'],2,
      'Sebut pelaku tindakan sebagai subjek.','Petugas loket A atau B adalah subjek eksplisit dari kata memeriksa. Redaksi tersebut juga mempertahankan pilihan salah satu loket.'],
    ['Integritas','Setelah sebuah laporan kinerja dipublikasikan, analis menemukan rumus spreadsheet salah dan angka layanan menjadi terlalu tinggi. Apa langkah yang menjaga akuntabilitas publik? ',
      ['Menghubungi beberapa pembaca saja agar koreksi tidak ramai','Mengganti dokumen diam-diam supaya salinan lama hilang','Menghapus seluruh lampiran tanpa memberi keterangan','Membiarkan angka lama dan menunggu laporan periode selanjutnya','Melakukan verifikasi, menerbitkan revisi berlabel, dan menjelaskan dampak kesalahan pada angka terkait'],4,
      'Untuk dokumen publik, koreksi perlu terlihat dan dapat ditelusuri.','Versi revisi dan penjelasan dampak memungkinkan pengguna data memperbarui analisis yang memakai angka sebelumnya.'],
    ['Bahasa Indonesia','Laporan menyebut, “Sebagian loket telah memperbarui jadwalnya.” Kesimpulan yang paling aman berdasarkan kalimat itu saja adalah…',
      ['Setidaknya ada loket yang memperbarui jadwal','Setiap loket mengubah jam buka','Tepat separuh loket mengubah jadwal','Perubahan jadwal berlaku permanen','Laporan mengumumkan jadwal awal seluruh loket'],0,
      'Kuantor “sebagian” menjamin minimal ada.','Kalimat tidak memberi angka pasti, durasi perubahan, atau informasi tentang setiap loket.'],
    ['Nasionalisme','Sebuah layanan digital nasional mengharuskan semua unit melaporkan jenis data yang sama. Satu kabupaten memakai istilah lokal untuk jenis administrasi yang setara. Solusi terbaik adalah…',
      ['Menghapus semua istilah lokal dari layanan kepada warga','Menggantikan standar nasional dengan daftar bebas tiap daerah','Membatalkan pelaporan kabupaten tersebut','Memetakan istilah setara ke kode nasional sambil tetap menampilkan istilah yang dikenal warga','Menggandakan setiap entri menjadi dua laporan terpisah'],3,
      'Standar data dan bahasa antarmuka bisa ditangani terpisah.','Pemetaan kode menjaga keterbandingan lintas daerah dan menyediakan istilah lokal agar warga memahami layanan.'],
    ['Bela Negara','Dalam simulasi evakuasi, peta gedung terbaru belum mencakup akses kursi roda. Pegawai yang menemukan masalah sebaiknya…',
      ['Mengabaikannya karena peta baru digunakan untuk simulasi','Melaporkan hambatan, mengusulkan rute aksesibel, dan ikut menguji prosedur bersama petugas','Mengubah seluruh penanda gedung sendiri sebelum disetujui','Meminta pengguna kursi roda menunggu di ruang kerja selama semua simulasi','Membagikan peta lama agar setiap orang memilih rute sendiri'],1,
      'Utamakan kesiapan yang teruji untuk semua warga gedung.','Pelaporan dan uji bersama memastikan rute dapat dipakai dalam kondisi nyata dan disepakati oleh petugas yang bertanggung jawab.']
  ];

  const tiu = [
    ['Numerik - Berhitung Cepat','Harga awal sebuah perangkat Rp640.000. Diskon berturut-turut 15% dan 25% diberikan pada harga tersisa. Berapa harga akhirnya?',
      ['Rp384.000','Rp400.000','Rp408.000','Rp416.000','Rp424.000'],2,'Kalikan faktor tersisa: 0,85 × 0,75.','75% dari 640.000 = 480.000. Kurangi 15% dari 480.000, yaitu 72.000. Hasilnya Rp408.000.'],
    ['Numerik - Soal Cerita','Rata-rata nilai 18 peserta adalah 72. Setelah dua peserta tambahan ikut dihitung, rata-rata menjadi 73,5. Jika nilai salah satu peserta tambahan 84, berapa nilai peserta tambahan lainnya?',
      ['87','88','89','90','92'],3,'Tambahan total = 2 × 72 + 20 × (73,5 − 72).','Total peserta tambahan adalah 144 + 30 = 174. Nilai peserta lain 174 − 84 = 90.'],
    ['Numerik - Soal Cerita','Tim A dapat memeriksa seluruh berkas dalam 12 jam. Tim B butuh 18 jam untuk beban yang sama. Mereka mulai bersama, tetapi B berhenti setelah 3 jam. Berapa lama total pekerjaan sejak mulai?',
      ['8 jam','9 jam','10 jam','10 jam 30 menit','11 jam'],2,'Ambil 36 unit. Laju A = 3, B = 2 unit/jam.','Dalam 3 jam bersama, 15 unit selesai. Sisa 21 unit dikerjakan A selama 7 jam. Total 10 jam.'],
    ['Numerik - Perbandingan','Mula-mula rasio kursi terisi terhadap kursi kosong 5:3. Sesudah 12 orang masuk dan 4 orang keluar, rasionya menjadi 3:1. Berapa jumlah kursi seluruhnya?',
      ['48','56','64','72','80'],2,'Fraksi kursi terisi naik dari 5/8 ke 6/8.','Kenaikan jumlah yang terisi adalah 12 − 4 = 8. Itu sama dengan 1/8 kapasitas, sehingga total 64.'],
    ['Numerik - Perbandingan Kuantitatif','P = 29% dari 620 + 11% dari 620. Q = 41% dari 600. Hubungan P dan Q adalah…',
      ['P < Q','P = Q','P = Q − 2','Q = P + 4','P > Q'],4,'Gabungkan persen bila acuannya sama.','P = 40% × 620 = 248. Q = 41% × 600 = 246. P lebih besar 2.'],
    ['Numerik - Soal Cerita','Seorang petugas menempuh 24 km pergi dengan kecepatan 40 km/jam dan kembali lewat jalur sama dengan kecepatan 60 km/jam. Berapa kecepatan rata-rata perjalanan tanpa berhenti?',
      ['44 km/jam','46 km/jam','48 km/jam','50 km/jam','52 km/jam'],2,'Untuk dua jarak sama pakai 2ab/(a+b).','Waktu total = 24/40 + 24/60 = 1 jam. Jarak total 48 km, sehingga rata-rata 48 km/jam.'],
    ['Himpunan, Peluang','Dari 90 peserta, 48 memakai materi A, 41 memakai materi B, dan 12 memakai keduanya. Berapa peserta yang tidak memakai A maupun B?',
      ['9','11','12','13','15'],3,'Jumlah yang memakai minimal satu = A + B − irisan.','48 + 41 − 12 = 77. Jumlah yang tidak memakai keduanya 90 − 77 = 13.'],
    ['Himpunan, Peluang','Kotak berisi 5 kartu biru dan 3 kartu merah. Dua kartu diambil acak tanpa pengembalian. Peluang mendapatkan setidaknya satu kartu merah adalah…',
      ['3/14','5/14','3/7','9/14','5/7'],3,'Hitung komplemen: 1 − peluang dua kartu biru.','Peluang dua biru = 5/8 × 4/7 = 5/14. Peluang minimal satu merah = 1 − 5/14 = 9/14.'],
    ['Numerik - Deret Angka','Jika pola yang sama berlanjut, angka berikutnya dari 4, 9, 19, 34, 54 adalah…',
      ['74','76','78','79','84'],3,'Lihat selisih: 5, 10, 15, 20.','Selisih naik 5 setiap kali. Selisih selanjutnya 25, jadi 54 + 25 = 79.'],
    ['Numerik - Deret Angka','Angka berikutnya dalam deret berselang 6, 64, 9, 32, 13, 16, 18, 8, … adalah…',
      ['4','20','22','24','32'],3,'Pisahkan posisi ganjil dari genap.','Posisi ganjil 6, 9, 13, 18 naik +3, +4, +5, sehingga berikutnya 18 + 6 = 24.'],
    ['Numerik - Berhitung Cepat','Tanpa kalkulator, nilai 96² − 84² adalah…',
      ['1.080','1.800','2.016','2.160','2.304'],3,'Gunakan (a−b)(a+b).','Selisih 12 dan jumlah 180. Maka hasilnya 12 × 180 = 2.160.'],
    ['Numerik - Soal Cerita','Debit pipa masuk adalah 18 liter/menit dan debit pipa keluar 6 liter/menit. Tangki mula-mula berisi 120 liter. Pipa masuk dinyalakan, 10 menit kemudian pipa keluar juga dibuka. Kapan isi mencapai 480 liter sejak awal?',
      ['20 menit','22 menit','24 menit','25 menit','30 menit'],3,'Pisahkan fase sebelum dan sesudah pipa keluar dibuka.','Setelah 10 menit isi 300 liter. Sisa 180 liter, laju bersih 12 liter/menit, perlu 15 menit lagi. Total 25 menit.'],
    ['Numerik - Perbandingan','Larutan 30 liter mengandung 40% konsentrat. Berapa liter air ditambahkan agar kadar konsentrat menjadi 30%?',
      ['6','8','9','10','12'],3,'Jumlah konsentrat tetap 12 liter.','Jika 12 liter adalah 30% volume baru, totalnya 40 liter. Tambahan air 40 − 30 = 10 liter.'],
    ['Numerik - Berhitung Cepat','Sebuah persediaan naik 20% pada pekan pertama dan turun 20% pada pekan kedua. Persediaan akhir 576 unit. Berapa persediaan awalnya?',
      ['580','590','600','620','640'],2,'Dua perubahan berlawanan dengan persentase x menghasilkan faktor 1 − x².','1,2 × 0,8 = 0,96. Persediaan awal 576 ÷ 0,96 = 600 unit.'],
    ['Numerik - Pangkat Memangkat','Tanpa menghitung nilainya penuh, pilih hubungan antara P = 4²¹ dan Q = 9¹⁴.',
      ['P > Q','P < Q','P = Q','P = 2Q','Q = 2P'],1,'Gunakan pangkat sama: FPB(21,14) = 7.','P = 64⁷ dan Q = 81⁷. Untuk pangkat positif yang sama, basis lebih besar menghasilkan nilai lebih besar.'],
    ['Numerik - Pola n+1 & Bilangan Berurutan','Jumlah suku pertama hingga suku ke-n suatu deret adalah Sₙ = 3n² + n. Berapa nilai suku ke-12?',
      ['62','65','67','70','73'],3,'Uₙ = Sₙ − Sₙ₋₁. Selisih 12² − 11² = 23.','U₁₂ = 3 × 23 + (12 − 11) = 70.'],
    ['Verbal - Silogisme','Semua arsip permanen dipindahkan ke repositori pusat. Tidak ada berkas uji coba yang dipindahkan ke repositori pusat. Kesimpulan yang pasti benar adalah…',
      ['Semua berkas dalam repositori adalah arsip permanen','Semua yang tidak permanen adalah berkas uji coba','Tidak ada berkas uji coba yang merupakan arsip permanen','Sebagian arsip permanen merupakan berkas uji coba','Semua arsip yang bukan uji coba berada di repositori pusat'],2,'Arsip permanen berada di dalam himpunan repositori; berkas uji coba berada di luarnya.','Karena kedua kelompok berada pada posisi yang tidak beririsan terhadap repositori, tidak satu pun berkas uji coba adalah arsip permanen.'],
    ['Verbal - Penalaran Logis','Jika pengiriman berhasil, sistem membuat tanda terima. Jika tanda terima dibuat, dasbor menampilkan nomor registrasi. Dasbor tidak menampilkan nomor registrasi. Kesimpulan dari aturan tersebut adalah…',
      ['Pengiriman tidak berhasil','Pengiriman berhasil, tetapi tanda terima tertunda','Nomor registrasi tetap dibuat','Pengiriman belum pernah dicoba','Semua pengiriman sistem gagal'],0,'Rantai P → Q → R. Jika R tidak terjadi, P tidak terjadi.','Kontraposisi rantai tersebut menyimpulkan tanda terima tidak dibuat serta pengiriman tidak berhasil. Alasan dan keadaan pengiriman lain tidak diketahui.'],
    ['Verbal - Analitis','Empat layanan A, B, C, D diaudit satu per hari dari Senin hingga Kamis. A diaudit tepat sehari sebelum C. D lebih awal dari B. C bukan Kamis dan D bukan Senin. Layanan apa yang diaudit pada Rabu?',
      ['A','B','C','D','Tidak pasti'],3,'Coba hanya blok A–C pada Senin–Selasa atau Selasa–Rabu.','Jika A–C Selasa–Rabu, D harus Senin agar sebelum B. Itu dilarang. Maka A–C Senin–Selasa, D Rabu, B Kamis.'],
    ['Verbal - Analogi','Hubungan “daftar isi : bab” setara dengan…',
      ['indeks : entri istilah','sampul : lembar','lampiran : judul','kertas : jilid','editor : naskah'],0,'Cari sarana penelusuran dan unsur yang didaftarkannya.','Daftar isi mencantumkan bab untuk memudahkan pencarian. Indeks mencantumkan entri istilah untuk fungsi sejenis.'],
    ['Verbal - Analitis','Tiga berkas P, Q, R ditinjau oleh Ani, Bayu, dan Citra, satu orang per berkas. Ani tidak meninjau P, dan orang yang meninjau Q adalah Bayu atau Citra. Jika Citra meninjau P, siapa meninjau R?',
      ['Ani','Bayu','Citra','Ani atau Bayu','Tidak bisa ditentukan'],0,'Tempatkan kondisi terakhir, lalu eliminasi pilihan untuk Q.','P milik Citra, sehingga Q milik Bayu karena bukan Ani. Sisa R untuk Ani.'],
    ['Figural - Serial','Sebuah panah mula-mula mengarah ke atas dan bernilai hitam. Di setiap langkah panah diputar 90° searah jarum jam dan warnanya berganti hitam–putih. Bagaimana panah pada posisi ke-6?',
      ['Kanan, hitam','Kiri, putih','Bawah, putih','Kanan, putih','Atas, hitam'],3,'Posisi ke-6 berarti 5 putaran. Ambil sisa bagi 4.','5 ≡ 1 (mod 4), jadi arah ke kanan. Lima pergantian dari hitam menghasilkan putih.'],
    ['Figural - Serial','Titik sudut bergerak searah jarum jam dari kiri atas. Titik tepi bergerak berlawanan arah jarum jam dari tengah atas. Keduanya berpindah satu posisi pada tiap langkah. Jika posisi awal disebut langkah 1, di mana keduanya pada langkah 4?',
      ['Kiri bawah dan tengah kanan','Kanan atas dan tengah kiri','Kiri atas dan tengah bawah','Kanan bawah dan tengah atas','Kiri bawah dan tengah bawah'],0,'Lacak dua urutan posisi secara terpisah.','Sudut: kiri atas, kanan atas, kanan bawah, kiri bawah. Tepi: tengah atas, kiri, bawah, kanan.'],
    ['Numerik - Kotak Angka','Pada tiap pasangan bilangan, hasil dibentuk dengan aturan sama: (4, 7) → 45, (3, 8) → 55, (5, 9) → 56. Jika aturannya adalah kuadrat salah satu bilangan dikurangi kuadrat yang lain, hasil (6, 11) adalah…',
      ['75','84','85','91','95'],2,'Pakailah selisih kuadrat, (11−6)(11+6).','Hasil pasangan adalah kuadrat bilangan kedua dikurangi kuadrat pertama. Hasilnya 5 × 17 = 85.']
  ];

  // Gambar melengkapi deskripsi posisi dan warna pada teks soal.
  const figures = {
    21: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 84" width="320" height="84" role="img" aria-label="Tiga posisi awal: panah atas hitam, kanan putih, dan bawah hitam">
      <g fill="#fff" stroke="#cbd5e1"><rect x="2" y="5" width="72" height="72" rx="8"/><rect x="84" y="5" width="72" height="72" rx="8"/><rect x="166" y="5" width="72" height="72" rx="8"/><rect x="248" y="5" width="70" height="72" rx="8"/></g>
      <g stroke="#102758" stroke-width="2" stroke-linejoin="round">
        <path d="M38 21 52 40H43V59H33V40H24Z" fill="#102758"/>
        <path d="M120 21 134 40H125V59H115V40H106Z" fill="#fff" transform="rotate(90 120 40)"/>
        <path d="M202 21 216 40H207V59H197V40H188Z" fill="#102758" transform="rotate(180 202 40)"/>
      </g><text x="283" y="48" text-anchor="middle" font-size="19" font-family="sans-serif" fill="#102758">…</text></svg>`,
    22: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 98" width="124" height="98" role="img" aria-label="Posisi awal persegi: titik sudut di kiri atas dan titik tepi di tengah atas">
      <rect x="28" y="16" width="68" height="68" fill="#fff" stroke="#102758" stroke-width="2"/>
      <circle cx="28" cy="16" r="6" fill="#102758"/><circle cx="62" cy="16" r="5" fill="#f8bd35" stroke="#102758" stroke-width="1.5"/>
    </svg>`
  };

  // Pada TKP, opsi baris disusun dari tindakan terbaik ke terlemah sebelum dipetakan ke urutan tampilan.
  const tkp = [
    ['Pelayanan Publik','Pemohon sudah mengikuti petunjuk di situs, tetapi loket meminta lampiran yang tidak tercantum. Permohonannya tenggat hari ini. Apa yang Anda lakukan?',
      ['Memeriksa dasar persyaratan, memberi cara pemenuhan yang sah hari ini, dan mengusulkan koreksi situs','Menjelaskan lampiran yang dibutuhkan, membantu mencarinya, lalu mengarahkan ke loket','Menghubungi loket untuk memastikan syarat, lalu meminta pemohon memenuhinya','Menyuruh pemohon mengambil nomor baru setelah berkas lengkap','Meminta pemohon mencari jalur pribadi ke pejabat penandatangan'],
      'Nilai tertinggi biasanya melindungi hak pemohon sambil menuntaskan akar masalah.','Verifikasi syarat, bantu penyelesaian sesuai prosedur dan perbaiki informasi agar kasus serupa berkurang.'],
    ['Jejaring Kerja','Dua unit meminta salinan data yang sama dengan tenggat berbeda. Definisi “permohonan selesai” ternyata berbeda. Apa yang Anda lakukan?',
      ['Memfasilitasi kesepakatan definisi, pemilik data, dan jadwal keluaran bersama','Mengirim data berlabel definisi masing-masing sambil meminta waktu menyepakati standar','Memenuhi permintaan pertama dan mendokumentasikan perbedaan untuk rapat berikutnya','Membuat ulang dua laporan setiap bulan tanpa menyepakati definisi','Mengirim angka yang sama ke kedua unit tanpa menyebut perbedaan definisi'],
      'Utamakan koordinasi yang menuntaskan ketidaksepakatan.','Kesepakatan definisi dan tanggung jawab menjaga konsistensi dan menghindari kerja berulang.'],
    ['Sosial Budaya','Rapat konsultasi publik direncanakan saat sebagian warga tidak dapat hadir karena kegiatan keagamaan. Jadwal ruangan sulit diubah. Sikap terbaik?',
      ['Menyediakan sesi alternatif yang setara, menerima masukan tertulis, dan merangkum keduanya dalam keputusan','Mempertahankan jadwal dan membuka kanal tertulis dengan batas waktu yang memadai','Menawarkan rekaman rapat agar kelompok yang absen bisa menonton','Meminta kelompok tersebut menunjuk satu orang tanpa menyediakan cara lain','Mengecualikan masukan kelompok yang tidak hadir dari proses pengambilan keputusan'],
      'Kesetaraan berarti masukan kedua jalur punya pengaruh yang nyata.','Sesi alternatif dan saluran tertulis memberi kesempatan partisipasi serta menjamin hasil keduanya dipertimbangkan.'],
    ['Teknologi Informasi dan Komunikasi','Seorang vendor meminta contoh ekspor data penerima layanan agar dapat menguji tampilan. Lingkungan uji sudah tersedia. Apa respons Anda?',
      ['Gunakan data sintetis yang mencerminkan struktur dan kasus tepi, lalu uji di lingkungan terpisah','Gunakan sampel anonim yang disetujui pemilik data melalui kanal resmi','Kirim skema tanpa catatan contoh dan minta vendor merancang datanya sendiri','Kirim berkas asli melalui kanal resmi dengan kata sandi yang disepakati','Kirim ekspor asli ke akun pribadi vendor agar pengujian lebih cepat'],
      'Untuk uji tampilan, struktur dan variasi datanya yang dibutuhkan.','Data sintetis dan pemisahan lingkungan memenuhi kebutuhan pengujian serta menghindari paparan data warga.'],
    ['Profesionalisme','Atasan meminta hasil pengecekan malam ini. Anda menemukan indikasi dua entri ganda dan validasi penuh baru selesai besok. Tindakan terbaik?',
      ['Kirim hasil sementara berlabel, jelaskan bagian yang belum valid, dan sepakati waktu hasil final','Sampaikan keterlambatan beserta indikasi duplikasi dan usulkan jadwal baru','Kirim hanya bagian yang tervalidasi dengan catatan umum','Kirim laporan penuh tanpa menyebut dugaan duplikasi','Menghapus entri yang tampak ganda dan menyatakan pemeriksaan sudah final'],
      'Berikan nilai guna hari ini dengan status data yang jelas.','Hasil sementara yang transparan membantu atasan mengambil tindakan proporsional sambil tetap menjaga mutu hasil final.'],
    ['Antiradikalisme','Di kanal kerja ada ajakan mendiskriminasi kelompok tertentu dan ancaman nyata terhadap staf. Ada prosedur pelaporan ancaman. Apa yang Anda lakukan?',
      ['Menjaga keselamatan staf, menyimpan bukti seperlunya, dan segera melapor lewat prosedur resmi','Menghubungi penanggung jawab keamanan untuk arahan dan tidak meneruskan pesan','Mengingatkan aturan kanal lalu menunggu respons moderator sebelum menindaklanjuti','Menghapus pesan dan tidak mencatat bukti atau menilai ancamannya','Menyebarkan pesan ke grup luar untuk mencari dukungan spontan'],
      'Ancaman nyata menuntut respons keselamatan dan eskalasi resmi.','Lindungi orang yang berisiko, batasi penyebaran bukti, serta gunakan jalur penanganan berwenang.'],
    ['Pelayanan Publik','Pengguna tunarungu datang saat layar antrean mati. Pengumuman nomor sedang diberikan lewat pengeras suara. Apa tindakan Anda?',
      ['Menawarkan pemberitahuan tertulis yang setara, menjaga urutan antrean, dan menyiapkan tampilan pengganti','Menawarkan petugas untuk menghampiri orang tersebut ketika nomor dipanggil','Menuliskan perkiraan waktu tunggu dan meminta pengguna tetap dekat loket','Memanggilnya lebih dulu tanpa menilai aturan prioritas atau urutan antrean','Meminta pengguna datang kembali saat layar menyala'],
      'Pertahankan akses setara dan urutan yang adil.','Solusi tertulis langsung membantu pengguna serta memperbaiki cara antrean untuk pengunjung lain.'],
    ['Jejaring Kerja','Tim pemda dan kementerian berbeda pendapat soal lokasi uji coba satu layanan. Kedua pihak punya data yang belum dibandingkan. Apa langkah pertama?',
      ['Sepakati indikator keberhasilan, bandingkan dua data, dan tetapkan keputusan bersama berbasis kriteria','Meminta data ringkas dari masing-masing pihak lalu mengirim perbandingan awal','Mendengarkan kedua pihak dan menyerahkan pilihan kepada pimpinan bersama','Memilih lokasi milik instansi yang lebih dahulu mengajukan usulan','Menetapkan lokasi sendiri dan meminta pihak lain menerima'],
      'Samakan kriteria sebelum membandingkan lokasi.','Indikator bersama membuat data dapat dibandingkan dan membantu kedua pihak menerima keputusan.'],
    ['Profesionalisme','Sehari sebelum siaran peluncuran, pengujian menunjukkan satu fitur minor bermasalah. Fitur inti aman. Tindakan paling tepat?',
      ['Jelaskan dampak dan pilihan kepada penanggung jawab, usulkan peluncuran dengan fitur minor dinonaktifkan dan pemulihan terjadwal','Tunda peluncuran sambil menjelaskan temuan dan mengusulkan tanggal cadangan','Teruskan peluncuran dengan catatan bahwa fitur minor belum stabil','Perbaiki fitur langsung di produksi sebelum persetujuan perubahan','Sembunyikan temuan agar peluncuran berjalan sesuai jadwal'],
      'Gunakan mitigasi yang mengendalikan dampak tanpa melanggar tata kelola.','Peluncuran terbatas memberi nilai dari fungsi inti, sementara fitur yang belum stabil diperbaiki dengan rencana jelas.'],
    ['Sosial Budaya','Panduan program diterjemahkan ke bahasa daerah. Komunitas mengatakan satu istilah terdengar merendahkan bagi sebagian pembaca. Langkah terbaik?',
      ['Libatkan penutur dan kelompok terdampak untuk menguji terjemahan baru serta memperbarui panduan','Ganti istilah dengan padanan netral dan umumkan revisi','Tambahkan glosarium penjelas sambil menunggu putaran revisi berikutnya','Pertahankan istilah dengan alasan sudah tercetak','Menuduh komunitas tidak memahami maksud program'],
      'Uji bahasa layanan bersama pengguna yang terdampak.','Uji terjemahan dengan komunitas memperbaiki ketepatan makna dan menjaga penghormatan terhadap pengguna.'],
    ['Teknologi Informasi dan Komunikasi','Portal menerima banyak permintaan status dari warga. Tim ingin menerbitkan daftar status harian. Mana pendekatan terbaik?',
      ['Gunakan pengecekan berdasarkan nomor yang sulit ditebak dengan kontrol akses sesuai jenis data','Sediakan layanan cek status lewat petugas melalui verifikasi identitas','Publikasikan statistik agregat tanpa status individual','Bagikan daftar lengkap hanya lewat grup komunitas','Unggah spreadsheet yang memuat nama dan nomor identitas pemohon'],
      'Cari keseimbangan antara cek mandiri dan kerahasiaan.','Status individual dapat diperoleh melalui mekanisme akses yang sesuai tanpa membuka data pemohon kepada orang lain.'],
    ['Antiradikalisme','Seorang rekan menyamakan sikap politik seseorang dengan bukti dukungan terhadap kekerasan. Ia mengusulkan agar rekan tersebut dikeluarkan dari tim. Sikap Anda?',
      ['Pisahkan opini yang sah dari indikasi kekerasan, minta dasar faktual, dan gunakan prosedur resmi jika ada pelanggaran','Ingatkan agar keputusan didasarkan pada perilaku kerja yang terdokumentasi','Alihkan pembicaraan agar rapat tetap berjalan lalu cek aturan sendiri','Mengikuti usul sementara agar suasana tim tenang','Menyebarkan dugaan tersebut ke unit lain agar mereka waspada'],
      'Nilai perilaku yang terbukti, hindari stigma dari identitas atau pendapat.','Keputusan adil memakai bukti relevan. Dugaan pelanggaran serius ditangani melalui prosedur resmi.'],
    ['Pelayanan Publik','Kuota konsultasi hari ini penuh. Seorang warga dari pulau lain telah membeli tiket pulang dan membawa berkas lengkap untuk tenggat besok. Apa tindakan Anda?',
      ['Periksa jalur konsultasi jarak jauh atau kanal darurat yang sah, lalu bantu berkas diterima sebelum tenggat','Tawarkan jadwal jarak jauh besok dan catat kendala perjalanan','Berikan daftar langkah mandiri beserta kontak layanan resmi','Menyisipkan antrean diam-diam tanpa dasar prioritas','Menyuruh warga mengulang perjalanan minggu berikutnya'],
      'Cari akses alternatif tanpa merugikan orang dalam antrean.','Kanal resmi yang sesuai dapat memenuhi tenggat tanpa memberi perlakuan sewenang-wenang.'],
    ['Profesionalisme','Rekan baru membuat kesalahan yang sama dalam mengisi laporan. Dampaknya kecil jika diperbaiki hari ini. Apa yang Anda lakukan?',
      ['Koreksi bersama, jelaskan penyebab, dan usulkan validasi di formulir','Tunjukkan contoh benar dan periksa laporan berikutnya bersama','Perbaiki laporan lalu kirim pedoman tertulis untuk dibaca','Selalu mengoreksi laporan diam-diam','Menegur rekan di kanal publik tanpa memberikan contoh'],
      'Umpan balik yang baik memperbaiki hasil sekarang dan mencegah pengulangan.','Pembelajaran bersama dan validasi formulir memberi dukungan kepada rekan serta mengurangi kesalahan berikutnya.'],
    ['Jejaring Kerja','Kecamatan mengirim laporan berbeda format setelah pergantian petugas. Pelaporan kabupaten tidak bisa menunggu hingga semua orang dilatih ulang. Apa langkah Anda?',
      ['Sediakan format contoh dan pemetaan sementara yang disepakati, lalu jadwalkan orientasi singkat','Membantu petugas mengonversi laporan kali ini dan mengirim contoh untuk periode berikutnya','Mengonversi laporan sendiri dan mencatat masalah untuk rapat bulanan','Menolak seluruh data tanpa menawarkan bantuan','Menghapus kolom yang sulit dipetakan tanpa memberi tahu pengirim'],
      'Tangani kebutuhan segera dan perjelas standar untuk siklus berikutnya.','Pemetaan yang disepakati menjaga mutu data saat ini. Orientasi dan format contoh memperkuat kerja antartim.'],
    ['Teknologi Informasi dan Komunikasi','Aplikasi perpesanan kantor mati. Tim diminta mengirim berkas internal yang berisi data terbatas sebelum rapat. Langkah paling tepat?',
      ['Gunakan kanal cadangan resmi dengan akses terbatas, pastikan penerima, dan catat pengiriman','Minta penanggung jawab menentukan jalur cadangan dan menyampaikan penundaan','Bagikan ringkasan tanpa data terbatas untuk rapat sementara','Unggah berkas ke penyimpanan pribadi dengan tautan privat','Kirim berkas ke grup umum agar rapat tidak terlambat'],
      'Pilih jalur alternatif yang menjaga akses dan keterlacakan.','Kanal resmi yang terkontrol menyelesaikan kebutuhan rapat sambil melindungi isi berkas.']
  ];

  function register(category, rows, first, isTkp = false) {
    const order = [2, 0, 4, 1, 3, 4, 2, 1, 3, 0, 2, 4, 0, 3, 1, 2, 3, 1, 4, 0, 2, 4, 1, 3];
    window.registerCPNSQuestions({
      packId: 'gocpns-skd-' + category.toLowerCase(), bucket: 'SKD_' + category,
      questions: rows.map((row, i) => {
        const [sub, q, input] = row;
        const ans = order[(i + (category === 'TIU' ? 7 : category === 'TWK' ? 3 : 0)) % order.length];
        const ranks = isTkp ? [0, 1, 2, 3, 4].map((_, pos) => {
          const offsets = i % 2 ? [0, 3, 2, 4, 1] : [0, 4, 2, 1, 3];
          return offsets[(pos - ans + 5) % 5];
        }) : null;
        const options = ranks ? ranks.map(rank => input[rank]) : input.slice();
        if (!ranks) [options[ans], options[row[3]]] = [options[row[3]], options[ans]];
        return {
          id: 'SKD-' + category + '-X' + (first + i), category, sub, q: q.trim(),
          options, ...(category === 'TIU' && figures[i] ? { svg: figures[i] } : {}),
          ans, scores: ranks ? ranks.map(rank => 5 - rank) : input.map((_, pos) => pos === ans ? 5 : 0),
          trick: row[isTkp ? 3 : 4], explanation: row[isTkp ? 4 : 5], practice: 'GOCPNS',
        };
      })
    });
  }
  register('TWK', twk, 7400);
  register('TIU', tiu, 7400);
  register('TKP', tkp, 7400, true);
})();
