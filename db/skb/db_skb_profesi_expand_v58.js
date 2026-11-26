/* ==========================================================================
   EKSPANSI SKB PROFESI v58 (+135 SOAL):
   Membawa SKB_TEKNIK (60 -> 105), SKB_STATISTIK (60 -> 105), & SKB_SOSIAL (60 -> 105)
   agar seluruh rumpun SKB cukup untuk >= 5 paket latihan & 100 soal simulasi CAT SKB penuh.
   ========================================================================== */
(function () {
  if (!window.registerCPNSQuestions) return;

  function build(bucket, cat, rows) {
    return rows.map(([sub, id, q, opts, ans, trick, exp]) => {
      const scores = [0, 0, 0, 0, 0];
      scores[ans] = 5;
      return { id, examType: bucket, category: cat, sub, q, options: opts, ans, scores, trick, explanation: exp, practice: 'GOCPNS', level: 'HOTS' };
    });
  }

  /* ==================== +45 SKB TEKNIK (tek-v58-01 .. 45) ==================== */
  const TEKNIK_PLUS = [
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-01', 'Pada kolom beton bertulang persegi penahan beban gempa, fungsi utama tulangan sengkang pengikat (hoop/stirrup) yang dipasang rapat di daerah sendi plastis ujung kolom adalah...', [
      'A. Menambah berat mati kolom penopang agar struktur pondasi telapak lebih stabil menahan gaya angkat angin kencang',
      'B. Mengurangi kadar air campuran beton segar secara bertahap ketika proses pengecoran memakai pompa beton bertingkat',
      'C. Memberikan kekangan lateral inti beton, mencegah tekuk tulangan memanjang, serta memikul geser gempa',
      'D. Menggantikan fungsi selimut beton penutup sebagai pelindung utama ketahanan api pada gedung bertingkat tinggi',
      'E. Mempercepat waktu pembongkaran bekisting kayu di sisi samping kolom sesudah umur beton mencapai tujuh hari'
    ], 2, 'Sengkang rapat daerah tumpuan/sendi plastis = kekang inti beton (confinement) + cegah buckling tulangan utama + pikul geser!', 'Sesuai SNI 2847, pengekangan (confinement) oleh sengkang rapat di zona sendi plastis mencegah beton inti hancur mendadak dan menahan tulangan longitudinal agar tidak tertekuk saat gempa siklik.'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-02', 'Sebuah pelat lantai beton bertulang persegi panjang memiliki sisi bersih bentang panjang Ly = 7,5 meter dan bentang pendek Lx = 3,0 meter ditumpu pada keempat sisinya. Berdasarkan rasio Ly/Lx dalam SNI 2847, pelat tersebut berperilaku sebagai...', [
      'A. Pelat dua arah penuh dengan distribusi beban lantai merata seimbang terhadap keempat tepi tumpuan',
      'B. Pelat cendawan tanpa balok pendukung dengan momen lentur bernilai nol di arah bentang pendek',
      'C. Balok tinggi kantilever kaku yang hanya memikul beban aksial tekan murni sepanjang tepi bentang panjang',
      'D. Pelat prategang melingkar penuh dengan pola gaya tarik dominan sejajar garis diagonal utama penampang',
      'E. Pelat satu arah (one-way slab) karena rasio Ly/Lx = 2,5 melampaui batas 2,0'
    ], 4, 'Cek rasio Ly/Lx: jika >= 2,0 maka PELAT SATU ARAH (lentur dominan arah bentang pendek Lx); jika < 2,0 = Pelat Dua Arah!', 'Dengan Ly/Lx = 7,5 / 3,0 = 2,5 (>= 2,0), hampir seluruh beban lentur dipikul melintang searah bentang pendek Lx (one-way action).'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-03', 'Faktor reduksi kekuatan (phi) untuk penampang balok beton bertulang yang mengalami kegagalan terkendali tarik (tension-controlled) pada desain LRFD SNI 2847:2019 adalah sebesar...', [
      'A. 0,90 karena keruntuhan diawali lelehnya tulangan tarik secara daktail',
      'B. 0,65 seperti nilai faktor reduksi kolom bersengkang persegi dengan ragam kegagalan tekan murni',
      'C. 0,75 setara dengan faktor reduksi kuat geser dan torsi penampang balok beton struktural',
      'D. 0,55 supaya ketebalan selimut beton tulangan boleh dikurangi pada bangunan lingkungan pesisir laut',
      'E. 1,00 karena seluruh beban terfaktor telah diperbesar menggunakan kombinasi pembebanan gempa wilayah tinggi'
    ], 0, 'SNI 2847: Lentur terkendali tarik phi = 0,90; Geser/Torsi phi = 0,75; Tekan sengkang phi = 0,65 (spiral 0,75)!', 'Desain daktail terkendali tarik memberi peringatan lendutan & retak sebelum runtuh sehingga diberi faktor reduksi phi = 0,90.'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-04', 'Dalam pemeriksaan struktur eksisting dengan metode pengujian beton non-destruktif menggunakan Schmidt Rebound Hammer dan UPV (Ultrasonic Pulse Velocity), parameter langsung yang diukur oleh Rebound Hammer adalah...', [
      'A. Kekuatan tarik belah inti beton struktural di bagian terdalam pusat penampang elemen kolom utama',
      'B. Kedalaman retak vertikal mikro hingga menembus pelat pondasi tiang pancang di bawah permukaan tanah',
      'C. Kadar korosi ion klorida terlarut pada lapisan selimut baja tulangan ulir utama balok struktur',
      'D. Nilai pantulan permukaan beton untuk memperkirakan mutu kekerasan bagian luarnya',
      'E. Modulus elastisitas sambungan baut gesek struktur rangka atap baja profil IWF bangunan industri'
    ], 3, 'Hammer Test = pantulan permukaan (tidak merusak, baca kekerasan permukaan); Core Drill = uji tekan sampel silinder bor (semi-destruktif)!', 'Rebound Hammer mengukur angka pantul pada permukaan beton sehingga sensitif terhadap kekasaran dan karbonasi permukaan; konfirmasi tetap memakai benda uji bor inti (core drill).'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-05', 'Suatu balok kantilever beton sepanjang 2,5 meter menjulur bebas dari kolom penopang dan memikul beban merata ke bawah q = 10 kN/m. Agar tidak terjadi retak tarik akibat lentur di dekat tumpuan jepitnya, tulangan utama tarik balok kantilever WAJIB dipasang dominan pada sisi...', [
      'A. Serat bawah tepat dekat permukaan pelat plafon lantai di sepanjang bentang balok kantilever',
      'B. Serat atas akibat momen lentur negatif kantilever memicu gaya tarik di atas',
      'C. Garis sumbu netral tepat di tengah tinggi penampang balok sepanjang dua setengah meter bentang',
      'D. Ujung bebas kantilever secara vertikal penuh tanpa perlu panjang penyaluran angkur ke dalam kolom',
      'E. Sisi samping permukaan luar bekisting beton berupa pemasangan pelat strip baja polos tipis'
    ], 1, 'Kantilever melendut ke bawah → serat ATAS ketarik (momen negatif), serat BAWAH tertekan! Tulangan utama tarik di ATAS!', 'Berbeda dengan balok tumpuan sederhana tengah bentang (tarik di bawah), kantilever mengalami tarikan serat atas di sepanjang bentang menuju jepit tumpuan.'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-06', 'Pada sambungan struktur rangka baja profil WF yang menahan beban gempa tinggi, penggunaan baut mutu tinggi tipe A325/A490 jenis slip-critical (gesek kritis) mensyaratkan hal krusial di lapangan berupa...', [
      'A. Pengecatan tebal seluruh bidang kontak pelat buhul sambungan memakai cat minyak licin agar baut tak berkarat',
      'B. Pengelasan keliling penuh setiap kepala baut sambung pada pelat buhul sebelum mur dikencangkan memakai kunci pas',
      'C. Pemakaian lubang baut berdiameter dua kali ukuran batang baut agar proses penyetelan di ketinggian cepat selesai',
      'D. Pemasangan baut mutu biasa berharga murah sebagai pengisi setengah jumlah lubang agar biaya konstruksi lebih hemat',
      'E. Pengencangan pratarik terkontrol dengan kunci torsi serta menjaga bidang kontak kasar bebas pelumas'
    ], 4, 'Sambungan Slip-Critical = kekuatan bergantung GAYA JEPIT (pratarik baut terukur) × koefisien gesek permukaan kontak bebas cat licin!', 'Kunci torsi terkalibrasi menjamin gaya pratarik minimum tercapai dan permukaan kontak tanpa pelumas memastikan gesekan antarpelat menahan beban siklik.'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-07', 'Berdasarkan rumus daya dukung dangkal Terzaghi pada tanah lempung jenuh kondisi tak terdrainase (phi = 0) dengan nilai kohesi cu, bentuk persamaan daya dukung ultimit pondasi telapak lajur (strip footing) disederhanakan menjadi...', [
      'A. qu = 2,0·cu saja tanpa memperhitungkan pengaruh beban tanah di atas dasar pondasi telapak',
      'B. qu = cu·tan(phi) dikalikan kedalaman muka air tanah rata-rata tahunan di lokasi proyek',
      'C. qu = 5,7·cu + gamma·Df',
      'D. qu = 1,3·gamma·B tanpa menyertakan faktor nilai kohesi tanah lempung jenuh air tersebut',
      'E. qu = 0,5·Df·B dibagi angka pori awal tanah sebelum pelaksanaan pemancangan tiang beton'
    ], 2, 'Ingat faktor daya dukung Terzaghi saat phi=0: Nc = 5,7 (strip) [atau Skempton 5,14], Nq = 1, Ngamma = 0 → qu = 5,7·cu + q (gamma·Df)!', 'Pada kondisi phi=0 (lempung jenuh jangka pendek), suku lebar pondasi hilang (Ngamma=0), Nq=1, dan Nc=5,7 untuk pondasi lajur Terzaghi.'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-08', 'Penurunan konsolidasi primer jangka panjang pada lapisan tanah lempung tebal yang jenuh air akibat timbunan badan jalan baru terutama dikendalikan oleh proses...', [
      'A. Pemampatan seketika butiran pasir kering saat dilalui alat pemadat getar berulang kali dalam satu jam',
      'B. Peningkatan mendadak kadar kandungan garam terlarut di permukaan lapis aus perkerasan aspal jalan raya',
      'C. Pembekuan partikel air permukaan ketika suhu udara malam hari di pegunungan turun drastis di bawah nol',
      'D. Keluarnya air pori perlahan dari rongga tanah akibat disipasi tekanan air berlebih',
      'E. Penguapan langsung seluruh kandungan mineral kuarsa padat dari dalam lapisan batuan induk dasar'
    ], 3, 'Konsolidasi lempung = keluarnya air pori lambat (permeabilitas kecil!) + pengurangan volume rongga berbulan-bulan/bertahun-tahun (bukan pemampatan elastis seketika)!', 'Teori Konsolidasi Satu Dimensi Terzaghi menjelaskan bagaimana tegangan efektif tanah naik bertahap seiring keluarnya air pori berlebih (excess pore water pressure).'],
    ['Mekanika Struktur & Beton (SNI 2847)', 'tek-v58-09', 'Untuk mencegah risiko likuifaksi (hilangnya kekuatan geser tanah seketika saat gempa) pada bangunan fasilitas publik di wilayah pesisir dengan lapisan pasir lepas jenuh air dangkal, langkah mitigasi geoteknik paling tepat adalah...', [
      'A. Perbaikan tanah dalam (vibro-compaction / stone column) serta pondasi tiang hingga lapisan keras',
      'B. Memperbesar ukuran batu kerikil penutup taman halaman gedung luar tanpa menyentuh lapis pasir bawah',
      'C. Menggunakan genteng keramik bermassa berat pada atap bangunan guna menambah gaya tekan vertikal statis',
      'D. Menurunkan tinggi tembok pagar halaman luar menjadi kurang dari satu meter dari muka badan jalan raya',
      'E. Mengganti seluruh jendela kaca gedung bertingkat menjadi dinding pasangan bata penuh tanpa bukaan sedikit pun'
    ], 0, 'Likuifaksi menyerang PASIR LEPAS + JENUH AIR + GEMPA → solusi: padatkan pasir (vibro-compaction / stone column / drainase vertikal) atau tembus ke lapisan keras dengan tiang!', 'Perbaikan kepadatan tanah dalam dan jalur drainase mencegah kenaikan tekanan air pori berlebih yang memicu pasir kehilangan tahanan gesernya saat guncangan gempa.'],

    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-10', 'Dalam perancangan perkerasan lentur (flexible pavement) metode Manual Desain Perkerasan Jalan (MDP) Bina Marga, nilai CESAL (Cumulative Equivalent Single Axle Load) menyatakan...', [
      'A. Kecepatan maksimum kendaraan pribadi yang diizinkan melintasi tikungan tajam jalan tol antarkota',
      'B. Akumulasi lintasan sumbu standar 8,16 ton (80 kN) selama umur rencana jalan akibat beban lalu lintas',
      'C. Suhu pencampuran aspal beton panas (hotmix) di dalam unit produksi Asphalt Mixing Plant (AMP) proyek',
      'D. Lebar minimum bahu jalan diperkeras pada segmen jalan kolektor antarkota dua lajur tak terbagi',
      'E. Persentase rongga udara minimum pada lapisan pondasi agregat kelas A setelah selesai dipadatkan merata'
    ], 1, 'CESAL = kumulatif lintasan beban sumbu standar ekuivalen 8,16 ton (18.000 lb / 80 kN) di lajur rencana selama umur layanan!', 'Setiap sumbu kendaraan dikonversi lewat Vehicle Damage Factor (VDF) berbasis pangkat empat terhadap sumbu standar 8,16 ton untuk menghitung beban kelelahan & deformasi perkerasan.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-11', 'Sebelum penghamparan lapis permukaan aspal beton (AC-WC/AC-BC) di atas lapis pondasi agregat kelas A yang telah dipadatkan, dilakukan penyemprotan bahan pengikat aspal cair encer bervisikositas rendah guna menembus pori agregat dan mengikat keduanya. Lapisan penyemprotan tersebut dinamakan...', [
      'A. Tack coat (lapis perekat tipis antarpermukaan lapisan aspal eksisting lama dengan yang baru)',
      'B. Seal coat berpasir kasar untuk penutupan dini kerusakan retak rambut dan retak kulit buaya permukaan',
      'C. Prime coat (lapis resap pengikat di atas lapis pondasi agregat)',
      'D. Geofabric separator penghalang migrasi lumpur organik dari tanah dasar lunak jenuh air',
      'E. Microsurfacing emulsi cepat pecah sebagai lapis pelindung aus permukaan jalan tol bebas hambatan'
    ], 2, 'Bedakan ketat: Prime Coat = di atas AGREGAT/NON-ASPAL (resap pengikat); Tack Coat = di atas PERMUKAAN BERASPAL/BETON eksisting (perekat)!', 'Prime coat meresap ke pori pondasi agregat kelas A sehingga tahan gerusan sebelum aspal dihampar, sedangkan tack coat dipakai merekatkan dua lapisan aspal.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-12', 'Pada perencanaan geometrik tikungan jalan antar kota, penerapan kemiringan melintang tikungan penuh ke satu arah (superelevasi) disertai lengkung peralihan (spiral) bertujuan utama untuk...', [
      'A. Mempermudah penanaman jajaran pohon peneduh jalan di sisi median pemisah tengah jalan arteri',
      'B. Mengurangi jumlah pengecatan marka garis putus-putus pada segmen lurus mendekati simpang sebidang',
      'C. Memperpanjang jarak pandang henti kendaraan berat saat kondisi permukaan perkerasan kering terik',
      'D. Menggantikan seluruh fungsi rambu pembatasan kecepatan rencana maksimum di ruas jalan arteri primer',
      'E. Mengimbangi gaya sentrifugal serta memberi transisi perubahan gaya lateral yang halus bagi pengemudi'
    ], 4, 'Superelevasi (e) bersama gesekan samping (f) mengimbangi gaya sentrifugal (e + f = V² / 127R); spiral menghindari hentakan kemudi mendadak!', 'Transisi superelevasi bertahap di lengkung spiral menjaga kendaraan tetap stabil di lajurnya tanpa selip atau terguling saat menikung berkecepatan rencana.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-13', 'Jenis jembatan gelagar kotak beton prategang bersegmen (box girder balanced cantilever) paling unggul dipilih pada lokasi bentang menengah-panjang melintasi sungai dalam atau lembah curam karena...', [
      'A. Mengharuskan pemasangan perancah baja atau kayu rapat dari dasar sungai di sepanjang seluruh bentang jembatan',
      'B. Tidak memerlukan kabel tendon prategang maupun perletakan bantalan elastomer di atas kepala pilar jembatan',
      'C. Hanya dirancang mampu memikul beban pejalan kaki dan kendaraan sepeda motor ringan antardesa terpencil',
      'D. Perakitan segmen simetris dari atas pilar tanpa memasang perancah di bawah bentang sungai',
      'E. Selalu membutuhkan penyambungan las pelat baja tahan karat pada tiap jarak dua meter di atas muka air'
    ], 3, 'Balanced Cantilever = konstruksi simetris kiri-kanan pilar dengan traveler tanpa perancah di bentang sungai dalam/lalu lintas padat!', 'Metode kantilever berimbang mengeliminasi perancah bawah tanah sehingga aman di atas sungai berarus deras, jurang dalam, atau persimpangan jalan raya aktif.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-14', 'Pada inspeksi keselamatan jembatan rangka baja, ditemukannya pengurangan luas penampang akibat korosi berat pada baut sambungan buhul batang bawah serta perletakan karet elastomer (elastomeric bearing) yang retak menonjol keluar menuntut tindakan prioritas berupa...', [
      'A. Uji penilaian kapasitas (load rating), ganti/perkuat baut kritis, serta dongkrak ganti bearing',
      'B. Pengecatan ulang warna pagar pengaman pejalan kaki saja sebagai tindakan perawatan kosmetik berkala',
      'C. Pembongkaran total seluruh struktur abutmen jembatan beton sebelum melakukan pemeriksaan visual lapangan',
      'D. Penambahan lapisan perkerasan aspal baru setebal lima belas sentimeter di pelat lantai untuk meratakan getaran',
      'E. Membiarkan kondisi bearing tersebut selama sepuluh tahun hingga anggaran pembangunan jembatan kembar baru turun'
    ], 0, 'Kegagalan bearing + korosi buhul = masalah kapasitas struktural → wajib Bridge Load Rating + rehabilitasi struktural + jacking penggantian bearing (JANGAN tambah aspal malah beratkan beban mati!).', 'Penambahan tebal aspal justru memperbesar beban mati di atas rangka yang sedang melemah; penggantian bearing dan perkuatan sambungan kritislah yang memulihkan fungsi struktur.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-15', 'Sebuah pengujian kepadatan lapangan timbunan jalan menggunakan metode Sand Cone menghasilkan berat isi kering lapangan gamma_d_lap = 1,71 g/cm³. Apabila berat isi kering maksimum dari uji Proctor di laboratorium adalah 1,80 g/cm³ dan syarat spesifikasi teknis minimal kepadatan adalah 95%, maka kesimpulannya adalah...', [
      'A. Tidak memenuhi syarat karena derajat kepadatan baru mencapai 85,0% dan harus dibongkar total',
      'B. Memenuhi syarat spesifikasi dengan derajat kepadatan lapangan tepat 95,0%',
      'C. Memenuhi syarat berlebih dengan derajat kepadatan 99,5% tanpa perlu uji verifikasi tambahan',
      'D. Tidak memenuhi syarat karena berat isi kering lapangan wajib melebihi standar laboratorium',
      'E. Pengujian dianggap batal otomatis karena data kadar air optimum diabaikan sepenuhnya dalam rumus'
    ], 1, 'Derajat Kepadatan = (gamma_d lapangan ÷ gamma_d maks lab) × 100% = (1,71 ÷ 1,80) × 100% = 95,0% → LULUS batas minimal 95%!', '1,71 / 1,80 = 171 / 180 = 19 / 20 = 95,0%, tepat memenuhi batas minimum spesifikasi kepadatan 95%.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-16', 'Dalam desain drainase perkotaan berwawasan lingkungan (zero delta-Q runoff), penerapan sumur resapan, kolam retensi, dan bioretensi di kawasan pengembangan baru berfungsi utama untuk...', [
      'A. Mempercepat aliran air hujan langsung menuju badan sungai utama agar wilayah hulu kering dalam lima menit',
      'B. Mengalirkan langsung buangan limbah domestik tinja rumah tangga ke lapisan akuifer air tanah dalam perkotaan',
      'C. Menggantikan fungsi seluruh jaringan perpipaan air bersih bertekanan PDAM yang melintasi kawasan komersial',
      'D. Menghilangkan sama sekali kebutuhan pembuatan kemiringan dasar saluran tepi jalan raya antarprovinsi',
      'E. Menahan serta meresapkan tambahan limpasan agar debit puncak keluar tak melampaui kondisi awal'
    ], 4, 'Prinsip Zero Delta-Q (Eco-Drainage): selisih debit puncak setelah pembangunan - sebelum pembangunan = 0 (tahan + resapkan di tempat, jangan buang seketika ke hilir)!', 'Konsep drainase berwawasan lingkungan mencegah banjir di hilir dengan menahan serta meresapkan kelebihan limpasan permukaan di kawasan hulu/tengah.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-17', 'Pada kurva IDF (Intensity–Duration–Frequency) untuk menghitung debit banjir rencana metode Rasional Q = 0,278 · C · I · A, variabel durasi hujan (td) yang digunakan untuk membaca nilai intensitas I ditetapkan sama dengan...', [
      'A. Lamanya jam tugas pengamatan petugas pemantau banjir di pintu air utama tiap hari kerja operasional',
      'B. Total durasi musim penghujan rata-rata dalam satu tahun kalender di wilayah daerah aliran sungai setempat',
      'C. Waktu konsentrasi (tc), yaitu durasi aliran terjauh DAS mencapai outlet saluran',
      'D. Periode ulang rencana banjir dua puluh lima tahunan pada perancangan struktur jembatan bentang panjang',
      'E. Lama waktu pengerukan endapan sedimen lumpur di saluran primer menggunakan bantuan alat berat ekskavator'
    ], 2, 'Metode Rasional: durasi hujan kritis td = waktu konsentrasi tc (aliran terjauh tiba serentak di outlet menghasilkan debit puncak maksimum)!', 'Saat seluruh bagian daerah tangkapan berkontribusi serentak di outlet (td = tc), kombinasi luas efektif dan intensitas hujan menghasilkan debit puncak desain.'],
    ['Jalan, Jembatan & Drainase Perkotaan', 'tek-v58-18', 'Menurut Permen PUPR tentang persyaratan teknis jalan dan kriteria desain drainase, kemiringan melintang normal perkerasan aspal (crown/normal crossfall) pada segmen jalan lurus umumnya dibuat sekitar 2%–3% dengan tujuan...', [
      'A. Mengarahkan seluruh kendaraan angkutan barang berat berjalan menepi ke sisi bahu luar secara otomatis tanpa kendali',
      'B. Memungkinkan genangan air bertahan sementara di tengah jalur lalu lintas untuk mendinginkan permukaan lapis aus aspal',
      'C. Mengurangi kebutuhan penggunaan agregat batu pecah bersudut tajam pada lapis pondasi bawah (subbase) badan jalan',
      'D. Membuang air hujan cepat ke saluran samping untuk mencegah aquaplaning dan pelapukan aspal',
      'E. Membuat elevasi bahu jalan luar selalu lebih tinggi dibandingkan posisi garis sumbu tengah lajur utama kendaraan'
    ], 3, 'Crossfall normal 2–3% di segmen lurus = buang air cepat ke bahu/saluran samping → cegah aquaplaning ban & stripping/kerusakan lapisan aspal!', 'Genangan air di permukaan aspal memicu selip hidrostatis (aquaplaning) dan mempercepat pengelupasan aspal akibat beban roda berulang.'],

    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-19', 'Mengacu rumus kecepatan aliran seragam Manning V = (1/n) · R^(2/3) · S^(1/2) pada saluran irigasi terbuka, apabila koefisien kekasaran Manning (n) permukaan beton lebih halus (lebih kecil) daripada saluran tanah rumput berbatu dengan dimensi serta kemiringan identik, maka pengaruhnya adalah...', [
      'A. Kecepatan aliran dan kapasitas debit saluran beton menjadi lebih besar dibanding saluran tanah',
      'B. Kecepatan aliran di saluran beton turun separuhnya sementara kedalaman air bertambah dua kali lebih tinggi',
      'C. Kapasitas pengaliran debit saluran tidak dipengaruhi sama sekali oleh jenis lapisan bahan dinding saluran irigasi',
      'D. Nilai kemiringan dasar saluran S harus selalu bernilai nol datar agar rumus Manning dapat digunakan dengan tepat',
      'E. Saluran tanah berumput secara otomatis mengalir dua kali lebih cepat tanpa mengalami risiko erosi tebing saluran'
    ], 0, 'Lihat rumus Manning: V berbanding TERBALIK dengan n! n makin kecil (beton halus) → V dan Q makin BESAR!', 'Dengan V = (1/n) · R^(2/3) · S^(1/2), penurunan nilai n pada pasangan beton halus memperkecil hambatan gesek dinding sehingga kecepatan dan kapasitas pengaliran Q = A·V meningkat.'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-20', 'Pada sistem jaringan irigasi teknis sesuai KP Irigasi Ditjen SDA, bangunan yang berfungsi mempertahankan elevasi muka air di saluran induk atau sekunder tetap tinggi agar air dapat mengalir masuk ke saluran cabang sadap saat debit sungai rendah adalah...', [
      'A. Pintu alat ukur debit jenis ambang Cipoletti atau Ambang Lebar standar jaringan irigasi semata',
      'B. Bangunan pengatur muka air atau bendung pengatur (check/regulator)',
      'C. Bangunan terjunan tegak pembuang energi aliran menuju sungai alam hilir pembuang akhir',
      'D. Kantong pengendap lumpur pembilas sedimen pasir sebelum pintu pengambilan bendung utama',
      'E. Saluran pembuang (drainage canal) pembuang kelebihan air hujan di ujung hilir petak tersier'
    ], 1, 'Fungsi REGULATOR / CHECK = tahan & naikkan muka air di saluran induk/sekunder saat debit kecil supaya pintu sadap tetap bisa menyadap air dengan head cukup!', 'Tanpa bangunan pengatur muka air (check/regulator), tinggi muka air pada debit minimum akan turun di bawah ambang pintu sadap saluran cabang.'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-21', 'Sebuah daerah irigasi memiliki luas areal tanam 1.500 hektar dengan kebutuhan air di pintu pengambilan (intake) rata-rata 1,2 liter/detik/hektar. Berapakah debit rencana total yang harus dialirkan pada saluran primer di titik pengambilan tersebut?', [
      'A. 1,25 meter kubik per detik bersih di pintu saluran utama',
      'B. 1,50 meter kubik per detik bersih di pintu saluran utama',
      'C. 1,80 meter kubik per detik',
      'D. 2,40 meter kubik per detik bersih di pintu saluran utama',
      'E. 3,00 meter kubik per detik bersih di pintu saluran utama'
    ], 2, 'Debit Q = Luas × NFR = 1.500 ha × 1,2 L/detik/ha = 1.800 L/detik = 1,80 m³/detik (1 m³ = 1.000 liter)!', '1.500 × 1,2 = 1.800 liter/detik. Dibagi 1.000 untuk konversi ke meter kubik/detik menghasilkan 1,80 m³/detik.'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-22', 'Pada perencanaan tubuh bendung tetap tipe beton di sungai berdasar tanah pasir-kerikil, penambahan lantai muka (upstream apron) maupun tirai pancang (sheet pile/cut-off wall) di bawah konstruksi bertujuan utama untuk...', [
      'A. Mempercepat arus banjir besar melompati mercu bendung sehingga merendam areal persawahan hilir seketika',
      'B. Mengurangi lebar penampang sungai secara permanen demi menghemat biaya pembebasan lahan di daerah hulu',
      'C. Menggantikan seluruh fungsi kolam olak lantai belakang sebagai pemecah energi loncatan hidrolik air terjun',
      'D. Meningkatkan kadar kandungan oksigen terlarut bagi kelangsungan budidaya perikanan di sepanjang tanggul sungai',
      'E. Memperpanjang jalur rembesan bawah tanah untuk mencegah erosi buluh (piping) dan gaya angkat'
    ], 4, 'Bendung di atas tanah lulus air rawan PIPING (erosi buluh) & UPLIFT! Cut-off wall/sheet pile & apron panjang memperpanjang jalur rembesan (angka Lane/Bligh)!', 'Dengan memperpanjang lintasan rembesan (creep length), gradien hidrolik keluar di hilir bendung turun di bawah nilai kritis sehingga butiran tanah tidak terhanyut (piping).'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-23', 'Dalam instalasi pengolahan air minum (IPA) konvensional pada Sistem Penyediaan Air Minum (SPAM), urutan proses fisis-kimia yang benar dari unit air baku masuk hingga siap didesinfeksi dan ditampung di reservoir adalah...', [
      'A. Filtrasi saringan cepat → Koagulasi-Flokulasi bertahap → Bak Prasedimentasi → Aerasi bertingkat terbuka',
      'B. Desinfeksi Gas Klorin → Pengadukan Flokulasi lambat → Penjernihan kapur → Bak Saringan kasar batu kali',
      'C. Reservoir distribusi kota → Bak Sedimentasi lambat → Pengadukan cepat koagulan → Unit Saringan pasir kasar',
      'D. Koagulasi (cepat) → Flokulasi (lambat) → Sedimentasi → Filtrasi',
      'E. Reverse Osmosis membran bertekanan tinggi → Prasedimentasi terbuka → Pembuangan lumpur mentah tanpa filter'
    ], 3, 'Hafalkan urut IPA konvensional: (Intake) → Koagulasi (cepat, pecah kestabilan koloid) → Flokulasi (lambat, bentuk flok besar) → Sedimentasi (endap) → Filtrasi → Desinfeksi (Klor)!', 'Pengadukan cepat mencampur tawas/PAC (koagulasi), diikuti pengadukan lambat agar terbentuk flok berat (flokulasi), diendapkan di sedimentasi, lalu disaring media pasir (filtrasi) dan didesinfeksi.'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-24', 'Angka Kehilangan Air (Non-Revenue Water / NRW) sebuah PDAM daerah tercatat 42% jauh di atas batas wajar nasional sekitar 20%–25%. Program teknis paling efektif untuk mengendalikan komponen kehilangan fisik (kebocoran pipa) di jaringan distribusi adalah...', [
      'A. Membentuk DMA, memantau aliran minimum malam (MNF), serta melacak dan memperbaiki kebocoran pipa',
      'B. Menaikkan tarif dasar air bersih golongan pelanggan rumah tangga miskin sebesar lima puluh persen sekaligus',
      'C. Mematikan aliran pompa unit produksi air setiap akhir pekan agar tidak ada air terbuang melalui pipa yang bocor',
      'D. Menghapus pemasangan meteran air pelanggan rumah tangga dan menggantinya dengan sistem tarif iuran tetap bulanan',
      'E. Mengganti seluruh warna tutup bak meter pelanggan dengan cat fluoresen terang tanpa memperbaiki jaringan pipa'
    ], 0, 'NRW Fisik (real losses): bentuk DMA (zona terukur) + pantau Minimum Night Flow + active leakage control + pressure management!', 'Dengan District Metered Area dan pengukuran aliran minimum malam hari saat pemakaian pelanggan hampir nol, kebocoran fisik terlokalisasi cepat untuk diperbaiki beserta pengendalian tekanan berlebih.'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-25', 'Berdasarkan regulasi Pengelolaan Kualitas Air dan Pengendalian Pencemaran (PP 22/2021 lampiran mutu air sungai), parameter BOD (Biochemical Oxygen Demand) mengukur...', [
      'A. Kandungan total zat padat tersuspensi mineral pasir lumpur yang mengendap di dasar saluran irigasi',
      'B. Oksigen yang dibutuhkan mikroorganisme untuk mengurai bahan organik biodegradable',
      'C. Derajat keasaman pH air dan tingkat kesadahan ion kalsium-magnesium di dalam sumur air tanah dalam',
      'D. Intensitas tingkat kekeruhan optik akibat pertumbuhan lumut hijau pada permukaan waduk air baku kota',
      'E. Berat jenis rata-rata lumpur kering yang dibuang keluar dari bak unit prasedimentasi instalasi IPA'
    ], 1, 'BOD tinggi = bahan organik pencemar banyak → mikroorganisme menyedot oksigen terlarut (DO) hingga ikan mati! COD = oksidasi kimia total (organik hayati + non-biodegradable).', 'Nilai BOD yang tinggi menandakan tingginya beban pencemaran organik yang menguras cadangan oksigen terlarut (DO) badan air penerima.'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-26', 'Dalam desain jaringan pipa distribusi air bersih di bawah permukaan tanah, pemasangan Air Valve (katup pelepas/pemasok udara) secara strategis wajib ditempatkan pada titik...', [
      'A. Titik paling rendah di dasar lembah lintasan pipa tepat berdekatan dengan pintu penguras lumpur (washout)',
      'B. Puncak elevasi tertinggi di dalam bak reservoir terbuka bebas udara tanpa tekanan hidrolis berlebih sedikit pun',
      'C. Puncak elevasi tinggi (high points) pipa untuk membuang kantong udara serta mencegah kevakuman',
      'D. Setiap jarak sepuluh sentimeter sepanjang pelat tutup beton saluran pembuangan limpasan air hujan kota',
      'E. Bagian paling ujung cabang pipa sambungan rumah pelanggan berdiameter setengah inci di halaman warga'
    ], 2, 'Air Valve = titik TERTINGGI (puncak) untuk membuang kantong udara penyumbat aliran + cegah pipa penyok akibat vakum! Washout (penguras endapan) = titik TERENDAH (lembah)!', 'Udara terperangkap berkumpul di elevasi puncak jalur pipa dan dapat mengurangi debit atau memicu water hammer, sedangkan endapan lumpur mengumpul di titik lembah (washout).'],
    ['Irigasi, Sumber Daya Air & Air Minum (SPAM)', 'tek-v58-27', 'Menurut Undang-Undang Nomor 17 Tahun 2019 tentang Sumber Daya Air, urutan prioritas utama penyediaan hak atas air bagi masyarakat yang wajib didahulukan apabila terjadi kekurangan air di suatu wilayah sungai adalah...', [
      'A. Industri pengolahan manufaktur berat berskala ekspor dan kawasan objek wisata komersial terpadu',
      'B. Pembangkit listrik tenaga air swasta skala besar yang terhubung ke jaringan listrik antarkawasan provinsi',
      'C. Perluasan kawasan perkebunan komersial skala besar berorientasi ekspor komoditas tanaman nonpangan',
      'D. Pengisian kolam danau buatan dan fasilitas pemeliharaan lapangan golf di kawasan perumahan elite daerah',
      'E. Kebutuhan pokok sehari-hari warga serta pertanian rakyat pada sistem irigasi eksisting'
    ], 4, 'Pasal 8 UU SDA 17/2019: Prioritas #1 mutlak = Kebutuhan pokok sehari-hari (air minum/sanitasi rumah tangga), disusul pertanian rakyat sistem irigasi eksisting!', 'Undang-undang Sumber Daya Air menegaskan hak rakyat atas kebutuhan pokok hidup sehari-hari dan ketahanan pangan pertanian rakyat berada pada prioritas tertinggi di atas usaha komersial.'],

    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-28', 'Sesuai UU Cipta Kerja dan PP Nomor 21 Tahun 2021 tentang Penyelenggaraan Penataan Ruang, penyederhanaan perizinan pemanfaatan ruang menggantikan Izin Lokasi sebelumnya dengan instrumen baru terintegrasi melalui sistem OSS-RBA berupa...', [
      'A. Surat Izin Mendirikan Bangunan Darurat Sementara yang diterbitkan secara manual oleh ketua rukun tetangga',
      'B. Sertifikat Laik Fungsi (SLF) awal sebelum proses pembebasan lahan proyek kawasan industri resmi dimulai',
      'C. Surat Izin Gangguan Lingkungan (HO) daerah yang wajib diperpanjang setiap enam bulan di kantor kecamatan',
      'D. Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR) merujuk pada RDTR digital atau RTRW',
      'E. Akta Pelepasan Hak Tanah Masyarakat Adat yang disahkan melalui rapat umum pemegang saham perusahaan'
    ], 3, 'PP 21/2021: Izin Lokasi & Izin Pemanfaatan Ruang kini menjadi KKPR (Kesesuaian Kegiatan Pemanfaatan Ruang) — otomatis terbit cepat bila daerah sudah punya RDTR terintegrasi OSS!', 'Jika pemda telah mengintegrasikan RDTR ke OSS, Konfirmasi KKPR terbit otomatis secara elektronik sehingga mempercepat kepastian lokasi berusaha & pembangunan.'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-29', 'Pada pengendalian intensitas pemanfaatan ruang kawasan perkotaan dalam RDTR, sebuah persil seluas 2.000 m² ditetapkan memiliki Koefisien Dasar Bangunan (KDB) maksimum 60% dan Koefisien Lantai Bangunan (KLB) maksimum 2,4. Berapakah total luas seluruh lantai bangunan maksimal yang diizinkan di atas persil tersebut?', [
      'A. 4.800 m² dengan tapak lantai dasar maksimal 1.200 m²',
      'B. 1.200 meter persegi sebagai batas total keseluruhan jumlah luas lantai pada gedung bertingkat tinggi',
      'C. 3.000 meter persegi dan seluruh luas ruang wajib dibangun hanya dalam satu lapis lantai dasar saja',
      'D. 1.600 meter persegi dengan menyisakan luas pelataran terbuka tanpa mengikuti garis sempadan jalan',
      'E. 6.000 meter persegi asalkan seluruh permukaan atap gedung dicat memakai material penahan panas ramah alam'
    ], 0, 'Rumus pasti: Luas Dasar Maks = KDB × Luas Lahan = 60% × 2.000 = 1.200 m²; Total Luas Seluruh Lantai = KLB × Luas Lahan = 2,4 × 2.000 = 4.800 m² (rata-rata 4 lantai)!', 'KDB membatasi tapak lantai dasar (60% × 2.000 = 1.200 m²), sedangkan KLB membatasi akumulasi luas seluruh lantai (2,4 × 2.000 = 4.800 m²).'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-30', 'Berdasarkan UU Nomor 26 Tahun 2007 tentang Penataan Ruang, proporsi penyediaan Ruang Terbuka Hijau (RTH) di wilayah perkotaan ditetapkan sekurang-kurangnya sebesar...', [
      'A. 15% dari keseluruhan luas wilayah kota dengan komposisi sepuluh persen publik dan lima persen privat',
      'B. 30% luas wilayah kota (minimal 20% RTH publik serta 10% RTH privat)',
      'C. 40% dari total luas wilayah perkotaan dan seluruhnya wajib berupa kawasan hutan lindung milik negara',
      'D. 20% dari luas wilayah kota yang hanya dihitung sepanjang jalur median tengah jalan arteri nasional',
      'E. 10% dari luas wilayah kota sepanjang tersedia kolam retensi resapan di halaman gedung pemerintah'
    ], 1, 'Angka keramat RTH Perkotaan (Pasal 29 UU 26/2007): Total minimal 30% = 20% RTH Publik + 10% RTH Privat!', 'Minimal 30% RTH kota berfungsi menjaga resapan air, iklim mikro, dan keseimbangan ekologi perkotaan, dengan porsi publik minimum 20%.'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-31', 'Sesuai PP Nomor 16 Tahun 2021 (pengganti PP 36/2005 tentang Bangunan Gedung), dokumen Persetujuan Bangunan Gedung (PBG) diberikan sebelum konstruksi untuk memastikan pemenuhan standar teknis, sedangkan dokumen yang WAJIB dimiliki sebelum gedung dioperasikan atau dimanfaatkan oleh publik adalah...', [
      'A. Sertifikat Badan Usaha (SBU) Jasa Konstruksi yang diterbitkan oleh asosiasi kontraktor tingkat daerah',
      'B. Surat Perintah Mulai Kerja (SPMK) konstruksi yang ditandatangani oleh Pejabat Pembuat Komitmen proyek',
      'C. Sertifikat Laik Fungsi (SLF) sebagai pernyataan keandalan gedung sebelum beroperasi',
      'D. Bukti Lunas Pembayaran Pajak Bumi dan Bangunan untuk periode lima tahun pertama sejak awal konstruksi',
      'E. Berita Acara Penyerahan Pertama (PHO) dari subkontraktor pondasi dalam kepada pihak kontraktor utama'
    ], 2, 'Alur PP 16/2021: Pra-konstruksi = PBG (dulu IMB, cek kesesuaian desain); Pasca-konstruksi sebelum operasional = SLF (Sertifikat Laik Fungsi, cek keandalan gedung)!', 'SLF memastikan fungsi dan keandalan struktur, keselamatan kebakaran, kesehatan, kenyamanan, dan kemudahan bangunan sebelum digunakan dan diperpanjang berkala.'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-32', 'Menurut Undang-Undang Nomor 2 Tahun 2017 tentang Jasa Konstruksi beserta perubahannya, apabila sebuah bangunan yang sudah diserahterimakan kepada pengguna jasa mengalami kegagalan bangunan yang disebabkan ketidaksesuaian standar Keamanan, Keselamatan, Kesehatan, dan Keberlanjutan (K4), penilai ahli yang ditunjuk menetapkan pihak bertanggung jawab, dengan jangka waktu pertanggungjawaban penyedia jasa maksimal hingga...', [
      'A. Enam bulan kalender sejak berita acara serah terima pekerjaan pertama (PHO) ditandatangani bersama di lokasi proyek',
      'B. Dua puluh lima tahun penuh tanpa memandang batasan umur rencana teknis desain awal bangunan gedung tersebut',
      'C. Satu tahun masa pemeliharaan saja lalu beralih seratus persen otomatis menjadi tanggung jawab pegawai pemerintah daerah',
      'D. Sepanjang umur bangunan selama satu abad penuh walaupun pengelola tidak pernah melakukan pemeliharaan gedung rutin',
      'E. Paling lama 10 tahun sejak penyerahan akhir (FHO) atau sesuai umur rencana bila < 10 tahun'
    ], 4, 'Pasal 65 UU 2/2017 Jasa Konstruksi: pertanggungjawaban kegagalan bangunan sesuai umur rencana bangunan, dan jika > 10 tahun maka MAKSIMAL 10 TAHUN sejak FHO!', 'UU Jasa Konstruksi mengatur batas tanggung jawab penyedia atas kegagalan bangunan maksimal 10 tahun sejak penyerahan akhir (atau sesuai umur rencana apabila di bawah 10 tahun).'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-33', 'Dalam PP Nomor 22 Tahun 2020 jo PP Nomor 14 Tahun 2021 tentang Peraturan Pelaksanaan UU Jasa Konstruksi, yang dimaksud dengan kontrak kerja konstruksi berbasis Rancang dan Bangun (Design and Build) paling tepat diterapkan pada pekerjaan...', [
      'A. Pengecatan rutin tembok pagar halaman kantor kecamatan yang gambar kerjanya sederhana dan telah tersedia rinci',
      'B. Pengadaan barang perangkat elektronik standar komputer meja kerja melalui etalase katalog elektronik pemerintah daerah',
      'C. Pembersihan gulma tanaman air pada saluran irigasi tersier menggunakan pola padat karya harian masyarakat desa setempat',
      'D. Proyek kompleks/mendesak yang menyatukan perencanaan serta konstruksi dalam satu penyedia',
      'E. Penyusunan naskah akademik rancangan peraturan daerah tentang penataan penamaan nama jalan utama kawasan perkotaan'
    ], 3, 'Design & Build (Rancang-Bangun) = perencanaan + konstruksi dipegang 1 penyedia terintegrasi → cocok untuk pekerjaan kompleks/teknologi khusus/percepatan mendesak!', 'Kontrak terintegrasi rancang-bangun mempercepat waktu konstruksi lewat overlapping desain dan pelaksanaan dengan syarat pengawasan ketat atas keluaran kinerja (output-based).'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-34', 'Proses peninjauan kembali Rencana Tata Ruang Wilayah (RTRW) provinsi maupun kabupaten/kota secara normal berdasarkan UU Penataan Ruang dilakukan berkala satu kali dalam...', [
      'A. Lima tahun sekali dalam rentang masa rencana tata ruang 20 tahun',
      'B. Setiap satu tahun sekali bersamaan langsung dengan penyusunan rancangan dokumen APBD murni pemerintah daerah',
      'C. Lima puluh tahun sekali menunggu habisnya seluruh masa berlaku sertifikat hak guna bangunan di wilayah provinsi',
      'D. Dua tahun sekali khusus hanya pada daerah otonom yang menyelenggarakan pemilihan kepala daerah serentak',
      'E. Tiga bulan sekali mengikuti fluktuasi pergerakan harga material bahan bangunan konstruksi di tingkat nasional'
    ], 0, 'Masa berlaku RTRW = 20 tahun, ditinjau kembali 1 kali setiap 5 TAHUN (kecuali ada bencana berskala besar atau perubahan batas wilayah/kebijakan nasional mendesak)!', 'Peninjauan kembali 5 tahun sekali memberi fleksibilitas pemutakhiran tata ruang atas dinamika ekonomi dan kebencanaan tanpa mengorbankan kepastian hukum 20 tahun.'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-35', 'Pada kawasan rawan bencana gempa tinggi atau sempadan patahan aktif serta sempadan sungai di dalam peraturan zonasi RDTR, status pemanfaatan ruang yang seharusnya ditetapkan untuk pembangunan gedung fasilitas publik bertingkat baru adalah...', [
      'A. Zona izin bangunan penuh (I) tanpa pembatasan ketinggian lantai maupun persyaratan standar teknik kegempaan khusus',
      'B. Zona larangan atau bersyarat ketat (T/B/X) sebagai kawasan lindung/evakuasi',
      'C. Zona bebas gedung instansi pemerintah namun mengizinkan pembangunan menara apartemen komersial padat penghuni',
      'D. Zona komersial intensitas pemanfaatan sangat tinggi guna menutup biaya penguatan struktur tanggul beton sungai',
      'E. Zona kawasan industri kimia berbahaya karena berada dekat dengan sumber aliran air sungai permukaan kota'
    ], 1, 'Prinsip tata ruang aman bencana: sempadan sungai/patahan aktif = kawasan lindung / RTH / evakuasi (status X terlarang atau syarat sangat ketat B), lindungi nyawa publik!', 'Kawasan rawan tinggi dan sempadan merupakan kawasan lindung atau zona pembatasan ketat dalam tabel ITBX RDTR guna meminimalkan korban jiwa dan kerugian aset.'],
    ['Tata Ruang, RDTR, PBG & Hukum Jasa Konstruksi', 'tek-v58-36', 'Menurut mekanisme penyesuaian kontrak jasa konstruksi akibat perubahan kebutuhan lapangan yang sah (Contract Change Order / CCO), penambahan atau pengurangan volume item pekerjaan serta perubahan pekerjaan baru tetap dibatasi agar total penambahan nilai kontrak tidak melebihi...', [
      'A. 50% dari nilai awal kontrak dengan cukup memperoleh persetujuan lisan dari pengawas lapangan proyek saja',
      'B. 25% dari pagu anggaran total dinas tanpa perlu menyusun revisi dokumen anggaran maupun adendum tertulis',
      'C. 10% dari nilai kontrak awal pelaksanaan pekerjaan',
      'D. 5% saja dan perubahan tersebut hanya boleh diajukan setelah masa pemeliharaan enam bulan berakhir total',
      'E. Tanpa batasan persentase maksimal selama pihak kontraktor pelaksana berjanji menyelesaikannya tepat waktu'
    ], 2, 'Aturan PBJ Konstruksi (Perpres 16/2018 & perubahan): perubahan/penambahan nilai kontrak (adendum CCO) MAKSIMAL 10% dari harga kontrak awal dan tersedia anggaran!', 'Pembatasan kenaikan kontrak maksimal 10% menjaga disiplin anggaran negara serta mencegah penyimpangan spesifikasi lelang.'],

    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-37', 'Dalam pengendalian proyek memakai metode Earned Value Analysis (EVA), pada minggu ke-10 diketahui nilai anggaran rencana (PV) Rp5,0 miliar, nilai progres hasil kerja yang terpasang (EV) Rp4,5 miliar, serta biaya aktual yang sudah dikeluarkan (AC) Rp5,0 miliar. Bagaimanakah status proyek tersebut berdasarkan nilai indeks SPI dan CPI?', [
      'A. SPI = 1,11 dan CPI = 1,00 yang menandakan proyek berjalan lebih cepat dari jadwal dengan penyerapan biaya tepat',
      'B. SPI = 0,90 dan CPI = 1,11 yang berarti jadwal terlambat tetapi pengeluaran biaya aktual sangat hemat efisien',
      'C. SPI = 1,00 dan CPI = 0,90 yang menandakan jadwal tetap tepat waktu meski terjadi pembengkakan biaya produksi',
      'D. Proyek dinyatakan selesai lebih cepat dua minggu tanpa memerlukan penyesuaian jadwal jaringan kerja CPM sama sekali',
      'E. SPI = 0,90 dan CPI = 0,90 artinya jadwal terlambat serta biaya mengalami pembengkakan'
    ], 4, 'Rumus sakti EVA: SPI = EV/PV = 4,5/5,0 = 0,90 (<1 lambat!); CPI = EV/AC = 4,5/5,0 = 0,90 (<1 boros/overrun)!', 'Baik SPI (Schedule Performance Index) maupun CPI (Cost Performance Index) di bawah 1,00 menunjukkan kinerja waktu terlambat dari rencana sekaligus biaya melebihi nilai hasil fisik.'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-38', 'Dalam penyusunan jaringan kerja CPM (Critical Path Method), terdapat lima aktivitas di jalur paralel di mana Jalur 1 memakan durasi 14 minggu, Jalur 2 berdurasi 19 minggu, dan Jalur 3 berdurasi 16 minggu. Apabila salah satu kegiatan di Jalur 2 terlambat dua minggu, dampak langsungnya terhadap total waktu proyek adalah...', [
      'A. Total umur proyek tetap 19 minggu karena keterlambatan dua minggu diserap langsung oleh total float di Jalur 1',
      'B. Jalur 1 dan Jalur 3 otomatis menjadi lebih pendek dua minggu guna mengejar ketertinggalan jadwal induk proyek',
      'C. Proyek tetap selesai tepat di minggu ke-14 selama seluruh pekerja di Jalur 3 bersedia melaksanakan kerja lembur',
      'D. Waktu total mundur menjadi 21 minggu karena Jalur 2 adalah lintasan kritis (float = 0)',
      'E. Kontraktor tidak terkena risiko keterlambatan jadwal induk karena masih mempunyai kelonggaran bebas lima minggu'
    ], 3, 'Jalur Kritis (Critical Path) = jalur TERPANJANG (19 minggu) dengan Total Float = 0! Keterlambatan 1 hari pun di jalur kritis langsung memundurkan tanggal akhir proyek!', 'Setiap aktivitas pada lintasan kritis tidak memiliki tenggang waktu (slack/float = 0); gangguan pada jalur 19 minggu itu langsung mendorong proyek selesai menjadi 21 minggu.'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-39', 'Komponen utama penyusunan Rencana Anggaran Biaya (RAB) pekerjaan konstruksi pemerintah sesuai Permen PUPR tentang Analisis Harga Satuan Pekerjaan (AHSP) memisahkan harga satuan dasar menjadi komponen tenaga kerja, bahan, peralatan, serta biaya umum dan keuntungan (overhead & profit) penyedia jasa yang besarannya maksimal ditetapkan sekitar...', [
      'A. 10%–15% dari total biaya dasar upah, bahan, dan peralatan',
      'B. 1% sampai 3% yang dihitung dari total pungutan pajak pertambahan nilai proyek keseluruhan negara',
      'C. 30% sampai 40% di luar biaya langsung pembangunan untuk menutup risiko fluktuasi harga baja besi pasar',
      'D. 50% tetap sebagai margin keuntungan wajib bagi perusahaan jasa konstruksi kualifikasi kecil di daerah',
      'E. 0% karena seluruh pekerjaan pemerintah dilarang memasukkan komponen keuntungan wajar usaha penyedia jasa'
    ], 0, 'AHSP PUPR (Permen PUPR 1/2022 / 8/2023): biaya umum dan keuntungan (overhead + profit) maksimal 10%–15% dari Biaya Langsung (tenaga + bahan + alat)!', 'Pemisahan komponen biaya langsung vs overhead-profit 10–15% menjadi acuan standar kewajaran penyusunan Harga Perkiraan Sendiri (HPS) oleh PPK.'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-40', 'Sesuai Permen PUPR Nomor 10 Tahun 2021 tentang Pedoman Sistem Manajemen Keselamatan Konstruksi (SMKK), rencana keselamatan kerja teknis yang wajib disusun oleh penyedia jasa konstruksi saat penawaran hingga masa pelaksanaan proyek disebut...', [
      'A. Dokumen AMDAL Sosial Lintas Provinsi untuk seluruh pekerjaan proyek perbaikan saluran kecil desa setempat',
      'B. RKK (Rencana Keselamatan Konstruksi) yang memuat manajemen risiko K4 tiap pekerjaan',
      'C. Dokumen Rencana Tata Ruang Kota terpadu sepuluh tahunan sebelum proses pelelangan pekerjaan konstruksi dibuka',
      'D. Sertifikat Hak Milik (SHM) resmi atas unit alat berat ekskavator yang disewa oleh pihak kontraktor proyek',
      'E. Daftar Harian Pengeluaran Konsumsi Pekerja selama masa pemeliharaan enam bulan pasca serah terima proyek'
    ], 1, 'Permen PUPR 10/2021 SMKK: Penyelenggara wajib menyusun RKK (Rencana Keselamatan Konstruksi), RKPPL (Lingkungan), RMLLP (Lalu Lintas), & RMPK (Mutu)!', 'RKK merupakan dokumen wajib yang memuat identifikasi bahaya, penilaian risiko, pengendalian, serta sasaran dan program keselamatan konstruksi yang dibiayai khusus dalam biaya penerapan SMKK.'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-41', 'Pada penentuan posisi proyek di Kurva-S, deviasi progres (realisasi fisik dikurangi rencana) sebesar minus 12% di tahap awal masa pelaksanaan konstruksi sudah masuk kategori kontrak kritis menurut standar pengendalian kontrak pekerjaan konstruksi jika keterlambatan bernilai antara...', [
      'A. Lebih besar dari 1% pada masa pelaksanaan proyek dua belas bulan lebih dengan sisa waktu masih panjang',
      'B. Hanya berlaku apabila nilai deviasi mencapai minus 75% saat kontrak tinggal menyisakan dua hari kerja saja',
      'C. Melampaui ambang batas deviasi kritis (> 10% di fase 0–70%) dan wajib dilakukan SCM',
      'D. Sekadar dicatat dalam buku tamu harian proyek tanpa perlu mengagendakan rapat pembuktian bersama PPK',
      'E. Otomatis membuat pejabat pembuat komitmen harus menaikkan nilai pembayaran termin tanpa opname fisik lapangan'
    ], 2, 'Kontrak Kritis: Progres 0–70% deviasi > 10% (atau progres 70–100% deviasi > 5%) → wajib SCM (Show Cause Meeting) Tingkat 1, 2, 3 sebelum pemutusan kontrak!', 'Deviasi negatif -12% pada tahap 0–70% sudah melampaui batas toleransi 10%, sehingga PPK harus memanggil penyedia ke Rapat Pembuktian (SCM I) guna menetapkan target uji coba percepatan.'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-42', 'Pekerjaan penggalian parit pipa sedalam 3,2 meter pada tanah berpasir lunak di dekat jalan raya padat tanpa penahan tebing menimbulkan risiko runtuhnya dinding galian menimpa pekerja. Pengendalian risiko paling efektif secara hierarki K3 sebelum pekerja turun ke galian adalah...', [
      'A. Menggali secara terus-menerus lebih dalam lalu meminta seluruh pekerja memakai kacamata pelindung debu halus',
      'B. Meminta pekerja berlari keluar secepat mungkin ke tepi jalan apabila melihat retakan tanah mulai jatuh',
      'C. Membagikan stiker bertuliskan slogan keselamatan hati-hati untuk ditempel di helm proyek masing-masing pekerja',
      'D. Melakukan penggalian parit pipa hanya pada tengah malam hari gelap tanpa menyalakan lampu penerangan lapangan',
      'E. Rekayasa teknis pemasangan turap penahan galian (shoring) serta landaian aman (sloping)'
    ], 4, 'Hierarki K3 tertinggi yang praktis di galian >1,5 m: Engineering Control (shoring/sheet pile penahan tanah atau sloping bertingkat), BUKAN sekadar APD atau spanduk peringatan!', 'Berdasarkan hierarki pengendalian K3 (Eliminasi → Substitusi → Rekayasa Teknis → Administratif → APD), shoring/turap langsung memutus bahaya longsoran tanah.'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-43', 'Saat serah terima pertama pekerjaan selesai 100% (Provisional Hand Over / PHO) dan sebelum dimulainya masa pemeliharaan, hal penting mengenai jaminan proyek serta retensi pembayaran yang umum diterapkan pada kontrak konstruksi adalah...', [
      'A. Penyedia jasa wajib mengembalikan seratus persen pembayaran termin kontrak bila ingin memasuki masa pemeliharaan',
      'B. Seluruh tanggung jawab cacat mutu selama masa pemeliharaan langsung dipikul oleh pegawai tata usaha dinas',
      'C. Jaminan Pelaksanaan langsung hangus otomatis menjadi milik pribadi konsultan pengawas saat berita acara PHO terbit',
      'D. PPK menahan uang retensi 5% nilai kontrak (atau jaminan pemeliharaan) hingga FHO',
      'E. Kontraktor dilarang memperbaiki kebocoran atap ringan yang baru muncul dua bulan sesudah dokumen PHO diteken'
    ], 3, 'PHO (100% fisik selesai) → mulai Masa Pemeliharaan (min 6 bulan bangunan permanen / 3 bulan semi permanen) dengan Retensi 5% atau Jaminan Pemeliharaan 5% sampai FHO!', 'Uang retensi 5% berfungsi mengikat komitmen penyedia memperbaiki segala cacat/kerusakan fungsi yang muncul sepanjang masa pemeliharaan hingga Serah Terima Akhir (FHO).'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-44', 'Sebuah pekerjaan galian tanah pondasi bervolume 240 m³ memiliki koefisien AHSP upah pekerja sebesar 0,750 OH/m³ dan mandor 0,025 OH/m³. Jika harga upah pekerja Rp110.000/OH dan mandor Rp160.000/OH, berapakah total biaya upah tenaga kerja pada item pekerjaan galian tersebut?', [
      'A. Rp20.760.000 (pekerja Rp19.800.000 + mandor Rp960.000)',
      'B. Rp19.800.000 seluruhnya tanpa perlu memperhitungkan biaya tenaga pengawas mandor di lapangan',
      'C. Rp24.000.000 karena koefisien tenaga selalu dibulatkan naik ke bilangan bulat terdekat dalam RAB',
      'D. Rp18.400.000 sesudah dikenakan pemotongan pajak pertambahan nilai upah pekerja harian lepas',
      'E. Rp22.500.000 sesudah ditambah margin keuntungan lima belas persen ke dalam komponen upah dasar'
    ], 0, 'Hitung satuan per m³ lalu kali 240 m³: Pekerja = 0,75 × 110.000 = 82.500; Mandor = 0,025 × 160.000 = 4.000 → Total/m³ = 86.500 × 240 = Rp20.760.000!', 'Pekerja: 240 × 0,750 × Rp110.000 = Rp19.800.000. Mandor: 240 × 0,025 × Rp160.000 = Rp960.000. Total biaya upah langsung = Rp20.760.000.'],
    ['Manajemen Proyek, RAB, Kurva-S & SMKK K3', 'tek-v58-45', 'Perbedaan paling mendasar antara gambar kerja perencanaan awal dalam dokumen lelang (For Construction / DED awal) dengan dokumen gambar terbangun aktual di lapangan saat serah terima akhir proyek adalah disebutnya dokumen akhir tersebut sebagai...', [
      'A. Shop Drawing (gambar kerja detail fabrikasi teknis yang disusun kontraktor sebelum pekerjaan dimulai)',
      'B. As-Built Drawing (rekaman terpasang aktual akhir konstruksi untuk operasi dan pemeliharaan)',
      'C. Conceptual Masterplan Sketch awal yang hanya memuat perkiraan pembagian zonasi warna kawasan luas',
      'D. Risalah Lelang Aanwijzing saat proses rapat penjelasan dokumen penawaran harga pada awal proyek',
      'E. Bar Chart Schedule mingguan untuk memantau jadwal kedatangan semen dan pasir ke dalam gudang proyek'
    ], 1, 'Hafalkan 3 urutan gambar proyek: DED/Tender Drawing (rencana) → Shop Drawing (detail tukang sebelum pasang) → As-Built Drawing (rekaman terpasang sesudah jadi untuk pemeliharaan)!', 'As-Built Drawing merekam seluruh perubahan dimensi, jalur pipa tersembunyi, maupun titik instalasi aktual yang disetujui sepanjang proyek demi memudahkan pemeliharaan gedung.']
  ];

  /* ==================== +45 SKB STATISTIK (stat-v58-01 .. 45) ==================== */
  const STATISTIK_PLUS = [
    ['Distribusi, Probabilitas & Statistik Inferensia', 'stat-v58-01', 'Dalam pengujian hipotesis statistik mengenai rata-rata lama pelayanan loket, peneliti menyimpulkan menolak H0 padahal kenyataannya di populasi H0 benar (menyatakan kebijakan baru efektif padahal sebenarnya tidak berdampak). Kesalahan pengambilan keputusan ini dikenal sebagai...', [
      'A. Kesalahan Tipe II (Beta) yang besarnya berbanding terbalik mutlak terhadap tingkat signifikansi alpha',
      'B. Kekuatan uji statistik (Statistical Power = 1 − Alpha) dalam membuktikan kebenaran teori hipotesis alternatif',
      'C. Galat non-sampling akibat kelalaian pencatatan lembar kuesioner oleh pewawancara survei di lapangan',
      'D. Kesalahan Tipe I (Alpha) dengan peluang terjadinya dikendalikan taraf nyata uji',
      'E. Bias multikolinearitas sempurna antarvariabel penjelas di dalam persamaan model regresi linear berganda'
    ], 3, 'Tipe I (Alpha) = "False Positive" (menolak H0 padahal H0 benar); Tipe II (Beta) = "False Negative" (gagal menolak H0 padahal H0 salah)! Power = 1 − Beta.', 'Tingkat signifikansi alpha (misal 5%) menetapkan batas maksimum toleransi terhadap Kesalahan Tipe I (salah menolak hipotesis nol yang benar).'],
    ['Distribusi, Probabilitas & Statistik Inferensia', 'stat-v58-02', 'Jika statistik uji t atau uji F menghasilkan nilai p-value sebesar 0,018 sedangkan peneliti menetapkan tingkat signifikansi alpha = 0,05 sebelum mengumpulkan data, kesimpulan yang benar adalah...', [
      'A. Gagal menolak H0 karena nilai p-value masih lebih kecil dibandingkan angka batas satu persen pengujian',
      'B. Terima H0 secara mutlak seratus persen serta hentikan seluruh pelaksanaan penelitian serupa untuk selamanya',
      'C. Ubah taraf signifikansi alpha secara mendadak menjadi 0,01 supaya kesimpulan uji berbalik tidak signifikan',
      'D. Nilai p-value tersebut langsung menyatakan besar probabilitas hipotesis nol pasti benar bernilai 1,8% persis',
      'E. Tolak H0 karena p-value (0,018) < alpha (0,05), berarti ada bukti mendukung Ha'
    ], 4, 'Aturan sakti p-value: "If p is low, H0 must go!" (Tolak H0 bila p-value < alpha; jangan pernah ubah alpha sesudah melihat hasil data!).', 'Karena 0,018 < 0,05, hasil pengamatan terlalu kecil kemungkinannya terjadi semata akibat faktor kebetulan jika H0 benar, maka H0 ditolak.'],
    ['Distribusi, Probabilitas & Statistik Inferensia', 'stat-v58-03', 'Untuk menguji apakah terdapat perbedaan rata-rata skor Indeks Persepsi Layanan antara EMPAT wilayah kategori daerah berbeda (Kota Besar, Kota Sedang, Kabupaten Agraris, dan Daerah Kepulauan) secara serentak tanpa menaikkan risiko alpha kumulatif akibat uji berulang, metode parametrik paling tepat adalah...', [
      'A. Analisis Varians Satu Arah (One-Way ANOVA / Uji F) serta uji lanjut pasca-ANOVA',
      'B. Enam kali uji t dua sampel independen berpasangan secara terpisah memakai taraf signifikansi tetap lima persen',
      'C. Korelasi Rank Spearman non-parametrik karena membandingkan lebih dari dua variabel berperingkat kategori wilayah',
      'D. Uji Chi-Square kecocokan sebaran satu sampel (Goodness of Fit) tanpa memperhatikan variasi besaran nilai skor',
      'E. Uji McNemar untuk data berpasangan sebelum dan sesudah pelatihan pada kelompok responden individu yang sama'
    ], 0, '> 2 kelompok independen numerik normal = One-Way ANOVA (Uji F)! (Kalau non-parametrik = Kruskal-Wallis!). Melakukan uji t berulang menaikkan peluang false positive!', 'One-Way ANOVA menguji kesamaan rata-rata lebih dari dua kelompok sekaligus dengan membandingkan varians antar-kelompok terhadap varians dalam-kelompok.'],
    ['Distribusi, Probabilitas & Statistik Inferensia', 'stat-v58-04', 'Ketika peneliti ingin menguji apakah terdapat hubungan asosiasi antara dua variabel kategorik nominal pada tabel silang 3×4 (misalnya: Wilayah Tempat Tinggal [Barat/Tengah/Timur] vs Status Kepemilikan Asuransi Kesehatan [PBI/Mandiri/Swasta/Belum Punya]), teknik uji inferensia non-parametrik paling sesuai adalah...', [
      'A. Analisis Regresi Linear Sederhana dengan metode estimasi Kuadrat Terkecil Biasa (Ordinary Least Squares)',
      'B. Uji t sampel berpasangan (Paired Sample t-test) karena melibatkan dua jenis peubah utama yang berbeda',
      'C. Uji Chi-Square (Kai-Kuadrat) Independensi atas frekuensi teramati vs harapan',
      'D. Uji Kolmogorov-Smirnov satu sampel guna melihat kesamaan fungsi distribusi kumulatif dengan kurva normal baku',
      'E. Uji Autokorelasi Durbin-Watson pada susunan data deret waktu berkala tahunan tingkat nasional'
    ], 2, 'Hubungan 2 variabel KATEGORIK tabel kontingensi = Uji Chi-Square Independensi (syarat: tidak ada sel dengan frekuensi harapan E < 1 dan maksimal 20% sel < 5)!', 'Uji Chi-Square membandingkan frekuensi sel teramati dengan frekuensi ekspektasi di bawah asumsi independensi dua peubah kategorik.'],
    ['Distribusi, Probabilitas & Statistik Inferensia', 'stat-v58-05', 'Dua buah dadu bersisi enam yang setimbang dilemparkan bersamaan satu kali. Berapakah peluang munculnya jumlah mata kedua dadu bernilai TEPAT 8 atau berjumlah 11?', [
      'A. 5/36 karena hanya memperhitungkan pasangan titik dadu dengan nilai angka kembar',
      'B. 7/36 hasil penjumlahan 5 peluang jumlah 8 serta 2 peluang jumlah 11',
      'C. 6/36 atau setara dengan seperenam total ruang sampel keseluruhan pelemparan dua dadu',
      'D. 9/36 karena seluruh angka ganjil dihitung dua kali selama pelemparan serentak dadu',
      'E. 1/12 karena hanya terdapat satu pasangan kombinasi tunggal untuk tiap jumlah mata dadu'
    ], 1, 'Ruang sampel = 36. Jumlah 8 = {(2,6),(3,5),(4,4),(5,3),(6,2)} = 5; Jumlah 11 = {(5,6),(6,5)} = 2. Saling lepas → (5+2)/36 = 7/36!', 'Kedua kejadian tidak beririsan (mutually exclusive), sehingga peluang gabungannya adalah P(8) + P(11) = 5/36 + 2/36 = 7/36.'],
    ['Distribusi, Probabilitas & Statistik Inferensia', 'stat-v58-06', 'Selang kepercayaan (Confidence Interval) 95% untuk rata-rata waktu penyelesaian berkas diperoleh antara [22,4 menit ; 27,6 menit]. Cara menafsirkan interval kepercayaan tersebut secara statistik klasik (frequentist) yang benar adalah...', [
      'A. Sebanyak 95% pegawai di kantor tersebut selalu menyelesaikan pengurusan berkas antara 22,4 sampai 27,6 menit',
      'B. Nilai rata-rata sampel yang terukur dapat bergeser 95% lebih cepat pada pengumpulan ulang bulan berikutnya',
      'C. Terdapat peluang sebesar 95% bahwa seluruh warga pemohon pasti terlayani selesai tepat di menit ke-25,0',
      'D. Prosedur pencuplikan acak ini berpeluang 95% menghasilkan interval memuat rata-rata populasi',
      'E. Sebanyak 5% sampel responden sengaja dibuang dari perhitungan karena nilainya berada di luar rentang interval'
    ], 3, 'CI 95% menyasar PARAMETER POPULASI (bukan sebaran individu data!): 95% dari pengulangan sampel acak berkonstruksi CI akan memuat mu populasi sebenarnya!', 'Interval kepercayaan mengukur ketidakpastian estimasi rata-rata populasi mu, bukan rentang sebaran individu pegawai ataupun persentil data.'],
    ['Distribusi, Probabilitas & Statistik Inferensia', 'stat-v58-07', 'Dalam menentukan jumlah sampel survei rumah tangga, apabila peneliti menginginkan batas Margin of Error (kesalahan pendugaan) dipangkas menjadi SEPARUHNYA (½ kali semula) pada tingkat kepercayaan yang tetap sama, maka ukuran sampel n harus disesuaikan menjadi...', [
      'A. Setengah kali ukuran sampel awal agar efisiensi biaya pelaksanaan survei menjadi lebih hemat anggaran',
      'B. Dua kali ukuran sampel awal karena hubungan antara ukuran n dan galat estimasi bersifat linear langsung',
      'C. Tetap sama jumlahnya selama daftar pertanyaan pada lembar kuesioner lapangan tidak ikut ditambah',
      'D. Sepuluh kali lipat sampel awal dengan ikut menaikkan tingkat signifikansi uji menjadi sepuluh persen',
      'E. Empat kali sampel awal karena Margin of Error berbanding terbalik terhadap √n'
    ], 4, 'Rumus MoE ∝ 1 / √n → ingin MoE mengecil 2× lipat (jadi ½ MoE), maka √n harus naik 2× lipat, berarti n wajib naik 2² = 4 KALI LIPAT!', 'Karena galat baku sebanding dengan sigma/√n, memperkecil kesalahan baku menjadi setengahnya membutuhkan kenaikan ukuran sampel n menjadi empat kali lipat.'],

    ['Satu Data Indonesia (Perpres 39/2019) & Undang-Undang Statistik', 'stat-v58-08', 'Menurut Perpres Nomor 39 Tahun 2019 tentang Satu Data Indonesia (SDI), pembagian peran antara Badan Pusat Statistik (BPS), Badan Informasi Geospasial (BIG), dan kementerian keuangan terkait pembina data tingkat pusat adalah...', [
      'A. BPS Pembina Data Statistik, BIG Pembina Geospasial, dan Kemenkeu Pembina Keuangan Negara',
      'B. Seluruh jenis data spasial, statistik, maupun transaksi keuangan swasta hanya boleh diterbitkan oleh dinas kominfo daerah',
      'C. Badan Informasi Geospasial menjadi penentu tunggal penetapan angka kemiskinan nasional dan tingkat inflasi bulanan',
      'D. Badan Pusat Statistik bertindak sebagai penyusun anggaran belanja kementerian menggantikan tugas Direktorat Anggaran',
      'E. Forum Satu Data Indonesia bertugas mencabut seluruh undang-undang kepegawaian dan tata kelola di instansi pemerintah daerah'
    ], 0, 'SDI Perpres 39/2019: Pembina Data Pusat = BPS (Statistik), BIG (Geospasial), Kemenkeu (Keuangan Negara); Walidata = unit pengumpul & periksa (mis. Diskominfo di daerah); Produsen Data = unit penghasil data!', 'Keempat prinsip SDI (Standar Data, Metadata, Interoperabilitas, Kode Referensi) dijalankan lewat tata kelola Pembina Data, Walidata, dan Produsen Data.'],
    ['Satu Data Indonesia (Perpres 39/2019) & Undang-Undang Statistik', 'stat-v58-09', 'Berdasarkan Undang-Undang Nomor 16 Tahun 1997 tentang Statistik, penyelenggaraan statistik di Indonesia dikelompokkan menjadi tiga kategori utama menurut tujuan pemanfaatannya, yaitu...', [
      'A. Statistik Rahasia Militer negara, Statistik Pajak Perusahaan Terbuka, dan Statistik Lalu Lintas Jalan Tol Nasional',
      'B. Statistik Dasar (BPS), Statistik Sektoral (instansi pemerintah), dan Statistik Khusus (swasta)',
      'C. Statistik Keuangan Bank Sentral, Statistik Pemilu Nasional, dan Statistik Pengamatan Cuaca Harian Daerah',
      'D. Statistik Deskriptif Sekolah Menengah, Statistik Kesehatan Puskesmas, serta Statistik Aktivitas Media Sosial Warga',
      'E. Statistik Primer Tingkat Nasional, Statistik Sekunder Desa Tertinggal, dan Statistik Tersier Lembaga Internasional'
    ], 1, 'UU 16/1997 Pasal 11–13: Dasar (BPS, lintas sektor & luas), Sektoral (K/L/Pemda untuk tugas pemerintahan spesifik), Khusus (masyarakat/perorangan/swasta)!', 'UU Statistik mengatur koordinasi ketiga jenis statistik tersebut guna mencegah duplikasi survei dan menjaga kerahasiaan data individu responden.'],
    ['Satu Data Indonesia (Perpres 39/2019) & Undang-Undang Statistik', 'stat-v58-10', 'Dalam tata kelola Satu Data Indonesia, istilah "Metadata" memiliki peran penting ketika data dibagipakaikan antarkementerian karena...', [
      'A. Berisi salinan berkas pindai kartu tanda penduduk seluruh petugas pencacah lapangan sensus dan survei',
      'B. Mengubah seluruh angka pecahan desimal menjadi bilangan bulat puluhan agar tabel tampil lebih rapi terbaca',
      'C. Memuat informasi baku deskripsi data (definisi, cakupan, metodologi, satuan) agar seragam dipahami',
      'D. Menutup penuh akses unduhan data terbuka masyarakat dari seluruh portal layanan data publik tingkat nasional',
      'E. Menghapus arsip data historis berusia lebih dari tiga tahun lalu dari peladen penyimpanan pusat pemerintah'
    ], 2, 'Metadata = "data tentang data" (kapan dikumpulkan, definisi operasional variabel, satuan ukur, metodologi sampling) → mencegah salah tafsir lintas instansi!', 'Tanpa metadata baku, pengguna lain dapat keliru menginterpretasikan definisi "pengangguran" atau periode rujukan data antarinstansi.'],
    ['Satu Data Indonesia (Perpres 39/2019) & Undang-Undang Statistik', 'stat-v58-11', 'Sesuai Pasal 21 UU Nomor 16 Tahun 1997 tentang Statistik, penyelenggara statistik (BPS maupun kementerian/lembaga) WAJIB menjamin kerahasiaan keterangan yang diberikan oleh responden secara individu kecuali untuk kepentingan statistik agregat tanpa identitas. Prinsip ini bertujuan...', [
      'A. Membatasi agar pejabat pemerintah daerah dilarang membaca angka total penduduk ataupun tingkat inflasi provinsi',
      'B. Memungkinkan penjualan data mentah identitas nama serta alamat rumah tangga kepada perusahaan pemasaran komersial',
      'C. Menutup seluruh hasil rekapitulasi jumlah pengangguran terbuka provinsi dari akses publik selama sepuluh tahun penuh',
      'D. Melindungi data individu dari penyalahgunaan pajak/hukum guna menjamin kejujuran responden',
      'E. Menggantikan seluruh sistem pelaporan catatan administrasi kependudukan resmi di tingkat pemerintah kelurahan'
    ], 3, 'Statistical Confidentiality = data mikro individu DILINDUNGI MUTLAK (bukan alat pajak/polisi!), hanya angka AGREGAT/anonim yang dipublikasikan!', 'Jaminan kerahasiaan responden meningkatkan kepercayaan masyarakat dan koorporasi untuk memberikan data yang jujur dalam sensus maupun survei.'],
    ['Satu Data Indonesia (Perpres 39/2019) & Undang-Undang Statistik', 'stat-v58-12', 'Pada skema GSBPM (Generic Statistical Business Process Model) yang diadopsi BPS sebagai standar proses bisnis statistik modern, delapan fase utamanya berurutan mulai dari...', [
      'A. Diseminasi publik terlebih dahulu baru mengumpulkan lembar kuesioner di lapangan secara acak tanpa perencanaan',
      'B. Mengolah angka rata-rata sebelum menentukan definisi cakupan populasi maupun tujuan dasar pelaksanaan survei',
      'C. Melakukan evaluasi tahunan sebelum menyusun perancangan instrumen kuesioner maupun pengumpulan data primer',
      'D. Pengumpulan data lapangan terus-menerus tanpa proses pemeriksaan penyuntingan (editing) maupun diseminasi',
      'E. Specify Needs → Design → Build → Collect → Process → Analyse → Disseminate → Evaluate'
    ], 4, '8 Fase GSBPM: 1. Specify Needs, 2. Design, 3. Build, 4. Collect, 5. Process, 6. Analyse, 7. Disseminate, 8. Evaluate!', 'GSBPM (sering pula disebut GSBPM BPS) menyatukan standar dokumentasi seluruh tahap produksi statistik dari kebutuhan pengguna sampai evaluasi mutu.'],

    ['Statistik Deskriptif & Ukuran Pemusatan/Penyebaran', 'stat-v58-13', 'Apabila sebuah himpunan data pendapatan bulanan pekerja di suatu kota memiliki kemencengan ke kanan yang sangat kuat (positively skewed / ekor panjang di kanan akibat segelintir pemilik perusahaan berpenghasilan miliaran), maka pasangan ukuran pemusatan dan penyebaran paling tangguh (robust terhadap outlier) adalah...', [
      'A. Median dan Jangkauan Antarkuartil (Interquartile Range / IQR = Q3 − Q1)',
      'B. Mean (rata-rata hitung aritmetika) dan Standar Deviasi (nilai simpangan baku sampel dan populasi)',
      'C. Nilai Maksimum dikurangi Nilai Minimum (Range penuh data) serta nilai Rata-rata Geometrik berantai',
      'D. Jumlah seluruh kuadrat simpangan observasi dibagi derajat bebas masing-masing sampel penelitian',
      'E. Rata-rata Harmonik ditambah koefisien varians persentase simpangan baku terhadap nilai rata-rata'
    ], 0, 'Data menceng ekstrem / ber-outlier → Mean & SD langsung ketarik! Gunakan pasangan ROBUST: Median (pemusatan) & IQR = Q3−Q1 (penyebaran)!', 'Median dan IQR hanya bergantung pada peringkat kuartil tengah data sehingga kebal terhadap lonjakan nilai ekstrem di ekor kanan distribusi.'],
    ['Statistik Deskriptif & Ukuran Pemusatan/Penyebaran', 'stat-v58-14', 'Dua unit loket layanan sama-sama memiliki rata-rata waktu tunggu 20 menit, namun Loket A memiliki standar deviasi 2 menit sedangkan Loket B memiliki standar deviasi 11 menit. Kesimpulan yang paling akurat berdasarkan Koefisien Varians (CV = SD / Mean) adalah...', [
      'A. Layanan di Loket B jauh lebih konsisten seragam waktunya karena rentang penyebarannya tercatat lebih lebar',
      'B. Loket A lebih konsisten dalam kecepatan layanan (CV = 10% dibanding 55% di Loket B)',
      'C. Kedua unit loket mempunyai kualitas keandalan waktu persis sama karena nilai rata-ratanya terlihat identik',
      'D. Nilai standar deviasi tidak dapat dibandingkan apabila kedua unit mempunyai nilai rata-rata yang sama persis',
      'E. Loket B dipastikan tidak pernah mencatat waktu tunggu antrean melebihi batas dua puluh menit penuh'
    ], 1, 'Koefisien Varians CV = (SD / Mean) × 100%: Loket A = 2/20 = 10%, Loket B = 11/20 = 55% → CV lebih KECIL = jauh lebih konsisten/stabil!', 'Meskipun rata-rata keduanya sama 20 menit, variabilitas yang tinggi pada Loket B menandakan pengalaman antre warga sering melenceng jauh dari rata-rata.'],
    ['Statistik Deskriptif & Ukuran Pemusatan/Penyebaran', 'stat-v58-15', 'Data skor lima tim evaluasi berurut adalah: 68, 72, 74, 76, 110. Jika nilai tertinggi (pencilan 110) dikoreksi menjadi 80 sesuai hasil audit pencatatan ulang, manakah statistik yang NILAINYA BERUBAH?', [
      'A. Median saja yang bergeser drastis sementara nilai rata-rata hitung bertahan tetap bernilai sama',
      'B. Modus berubah menjadi angka 80 sedangkan nilai kuartil tengah ikut mengalami penurunan sebanyak dua poin',
      'C. Mean dan Standar Deviasi menurun, sedangkan Median dan Q1 tetap sama tidak berubah',
      'D. Seluruh kuartil Q1, Q2, dan Q3 berubah naik meskipun posisi nilai urutan tengah tetap berada pada 74',
      'E. Nilai median melonjak meningkat lebih tinggi daripada rata-rata hitung aritmetika himpunan data skor'
    ], 2, 'Cek urutan: [68, 72, 74, 76, 110] → [68, 72, 74, 76, 80]: titik tengah ke-3 tetap 74 (Median tetap!); Mean turun 80→74 dan SD mengecil!', 'Perubahan titik ekstrem paling ujung tidak menggeser urutan titik tengah (Median = 74) maupun kuartil bawah, namun langsung menurunkan Mean (dari 80 ke 74) serta varians/SD.'],
    ['Statistik Deskriptif & Ukuran Pemusatan/Penyebaran', 'stat-v58-16', 'Dalam distribusi normal dengan rata-rata mu = 70 dan simpangan baku sigma = 10, berapakah nilai skor mentah X pada batas Z-score = +1,96 yang menandai persentil ke-97,5 ke atas?', [
      'A. 80,0 poin karena posisi nilai terletak tepat satu kali simpangan baku di atas nilai rata-rata',
      'B. 85,0 poin karena tepat setengah dari batas simpangan baku dua kali lipat sebaran populasi',
      'C. 71,96 poin karena simpangan baku tidak perlu dikalikan dengan nilai skor baku standar Z',
      'D. 89,6 poin hasil X = 70 + 1,96(10)',
      'E. 90,0 poin apabila dilakukan pembulatan konstan ke atas pada kedua sisi ekor kurva distribusi'
    ], 3, 'Rumus Z-Score: Z = (X − mu)/sigma → X = mu + Z·sigma = 70 + (1,96 × 10) = 70 + 19,6 = 89,6!', 'Konversi balik dari skor Z = +1,96 dengan mu = 70 dan sigma = 10 menghasilkan X = 89,6.'],
    ['Statistik Deskriptif & Ukuran Pemusatan/Penyebaran', 'stat-v58-17', 'Diketahui rata-rata delapan kali tes peserta pelatihan adalah 75,0. Agar rata-rata sembilan kali tes naik menjadi tepat 77,0, berapakah nilai minimal yang harus diperoleh pada tes kesembilan?', [
      'A. 79,0 poin karena selisih kenaikan rata-rata hitung hanya bertambah dua angka poin saja',
      'B. 85,0 poin dari penjumlahan langsung nilai rata-rata lama dengan banyaknya tes sebelumnya',
      'C. 95,0 poin agar seluruh nilai hasil tes sebelumnya ikut mengalami kenaikan yang merata',
      'D. 89,0 poin dengan membagi rata selisih angka sembilan dikalikan dengan bilangan bulat dua',
      'E. 93,0 poin hasil (9 × 77) − (8 × 75)'
    ], 4, 'Total baru = 9 × 77 = 693; Total lama = 8 × 75 = 600 → Tes ke-9 = 693 − 600 = 93 (atau trik cepat: 77 + 8×2 = 93)!', 'Setiap dari 8 tes lama perlu naik +2 poin (+16 poin total) ditambah target dasar tes ke-9 (77), jadi 77 + 16 = 93.'],

    ['Teknik Sampling, Survei & Desain Kuesioner', 'stat-v58-18', 'Sebuah kota terdiri dari 60% kelurahan perkotaan padat dan 40% kelurahan pinggiran agraris dengan perbedaan mencolok pada tingkat pengeluaran rumah tangga antarwilayah, sementara di dalam masing-masing tipe kelurahan relatif homogen. Rancangan pencuplikan probabilitas yang menghasilkan presisi penduga paling tinggi dibanding Acak Sederhana dengan ukuran sampel yang sama adalah...', [
      'A. Stratified Random Sampling berdasarkan strata tipe kelurahan secara proporsional',
      'B. Convenience Sampling di pusat perbelanjaan agar biaya dan waktu wawancara dapat diselesaikan sangat cepat',
      'C. Cluster Random Sampling dengan cukup mengambil satu kelurahan perkotaan untuk mewakili seluruh kota',
      'D. Snowball Sampling berantai dengan meminta setiap responden pertama menunjuk lima orang kerabat terdekatnya',
      'E. Quota Non-Probabilitas tanpa menyusun kerangka sampel dari daftar resmi rukun tetangga daerah setempat'
    ], 0, 'Ingat perbedaan kunci: STRATIFIED = antar-strata HETEROGEN, dalam strata HOMOGEN (presisi naik!); CLUSTER = antar-cluster HOMOGEN, dalam cluster HETEROGEN (hemat biaya)!', 'Stratifikasi memisahkan kelompok perkotaan vs agraris yang heterogen ke dalam strata homogen sehingga varians antarkelompok tersaring keluar dan standar error menyusut tajam.'],
    ['Teknik Sampling, Survei & Desain Kuesioner', 'stat-v58-19', 'Survei tingkat kepuasan digital dilakukan dengan cara menyebarkan formulir tautan daring melalui akun media sosial selama tiga hari tanpa mengontrol akses penduduk daerah 3T maupun lansia tanpa gawai pintar. Bentuk galat survei paling kritis yang terjadi pada desain tersebut adalah...', [
      'A. Sampling error acak biasa yang otomatis menjadi nol apabila jumlah responden mencapai sepuluh ribu pengisi',
      'B. Coverage bias dan self-selection bias karena populasi non-daring tak berpeluang terpilih',
      'C. Multikolinearitas tinggi antara usia responden dan skor tingkat kepuasan layanan publik daerah',
      'D. Kesalahan tipe II karena angka p-value uji hipotesis tidak dapat dihitung dari survei tautan daring',
      'E. Heteroskedastisitas varian galat acak pada pengisian skala sikap Likert lima tingkat'
    ], 1, 'Non-Sampling Error (Coverage Bias / Non-Response / Self-Selection) TIDAK BISA dihilangkan dengan sekadar memperbanyak jumlah responden (justru makin bias bila metode salah)!', 'Kelompok non-pengguna internet dan lansia 3T sama sekali keluar dari kerangka sampel (undercoverage) dan pengisi sukarela cenderung beropini ekstrem (self-selection).'],
    ['Teknik Sampling, Survei & Desain Kuesioner', 'stat-v58-20', 'Sebuah pertanyaan kuesioner berbunyi: "Apakah Anda setuju bahwa pelayanan kantor sudah cepat dan petugas loket selalu bersikap ramah?" Dari prinsip perancangan instrumen survei yang baik, cacat fatal pada butir pertanyaan tersebut tergolong sebagai...', [
      'A. Pertanyaan terbuka tidak terstruktur yang membutuhkan pengkodean kalimat panjang di tahap pengolahan data',
      'B. Filtering skip-logic otomatis yang melompati responden tidak relevan dari pertanyaan survei lanjutan',
      'C. Double-barreled question (menggabung dua hal berbeda dalam satu item)',
      'D. Skala rasio mutlak dengan titik nol alamiah pada sistem pengukuran durasi waktu antrean layanan',
      'E. Pertanyaan demografi wajib mengenai keterangan tempat beserta tanggal lahir asli diri responden'
    ], 2, 'Double-barreled question = gabung 2 objek ("cepat DAN ramah") pada 1 pertanyaan! Jika cepat tapi jutek, responden bingung menjawab setuju/tidak!', 'Pertanyaan yang menanyakan dua konsep terpisah sekaligus membingungkan responden dan menghasilkan data rancu; keduanya wajib dipisah menjadi dua item terpisah.'],
    ['Teknik Sampling, Survei & Desain Kuesioner', 'stat-v58-21', 'Pada survei ketenagakerjaan skala provinsi (Sakernas) yang memakai desain Multi-Stage Cluster Sampling berbasis Blok Sensus, mengapa koresponden/analis statistik wajib memasukkan nilai penimbang (sampling weight / bobot) dan efek desain (deff) saat menghitung estimasi dan standar error?', [
      'A. Agar seluruh angka persentase daerah tertinggal otomatis dibulatkan menyamai rata-rata kota besar provinsi',
      'B. Supaya kuesioner lapangan tidak perlu melewati tahapan uji validitas dan reliabilitas sebelum turun survei',
      'C. Karena tanpa bobot, seluruh responden pekerja laki-laki otomatis terhapus oleh perangkat lunak statistik',
      'D. Bobot mengompensasi probabilitas terpilih tak sama dan deff mengoreksi klasterisasi SE',
      'E. Untuk mengubah jenis skala pengukuran variabel pendapatan dari numerik kontinu menjadi kategori nominal'
    ], 3, 'Survei kompleks (Cluster/Stratified tak sama peluang): wajib pakai WEIGHT untuk estimasi tak bias & DEFF (Design Effect) untuk koreksi varians/SE!', 'Mengabaikan desain kompleks seolah-olah SRS mengakibatkan estimasi bias dan standar error terlalu kecil (overconfident).'],
    ['Teknik Sampling, Survei & Desain Kuesioner', 'stat-v58-22', 'Suatu survei bersampel besar dengan non-response rate mencapai 45% pada kelompok rumah tangga berpenghasilan tinggi karena kerap menolak diwawancarai langsung. Dampak paling berbahaya dari tingginya angka non-response yang sistematis tersebut adalah...', [
      'A. Mempersempit lebar batas margin of error hingga hampir nol persen karena jumlah responden berkurang',
      'B. Menghilangkan kebutuhan menyusun kerangka sampel (sampling frame) pada survei tahun berikutnya',
      'C. Mengubah bentuk distribusi pendapatan kota menjadi simetris normal sempurna tanpa nilai pencilan',
      'D. Membuat koefisien reliabilitas instrumen Cronbach Alpha senantiasa naik mendekati angka satu',
      'E. Non-response bias yang mendistorsi estimasi pengeluaran rata-rata menjadi terlalu rendah'
    ], 4, 'Non-response acak hanya menaikkan SE; tapi Non-response SISTEMATIS (kelompok kaya/miskin tertentu hilang) memicu BIAS pendugaan!', 'Karena kelompok kaya lebih banyak menolak merespons dibanding rata-rata populasi, statistik pengeluaran yang dihasilkan terbias ke bawah secara sistematis.'],

    ['Regresi, Korelasi & Ekonometrika Dasar', 'stat-v58-23', 'Persamaan regresi linear sederhana memprediksi Nilai Penjualan (Y, dalam juta Rp) berdasarkan Biaya Promosi (X, dalam juta Rp): Y_topi = 42,5 + 3,2·X dengan R² = 0,81. Arti yang benar dari koefisien lereng 3,2 dan R² = 0,81 adalah...', [
      'A. +1 juta promosi menaikkan prediksi jual 3,2 juta; 81% variasi Y dijelaskan oleh model X',
      'B. Setiap peningkatan promosi selalu memastikan penjualan naik tepat 81% dalam bulan pertama tanpa faktor luar',
      'C. Nilai korelasi Pearson antara X dan Y pasti negatif −0,90 karena biaya promosi mengurangi pendapatan bersih',
      'D. Nilai rata-rata mutlak seluruh biaya promosi adalah Rp42,5 juta di seluruh cabang pemasaran daerah setempat',
      'E. Model regresi belum sah dipakai karena angka koefisien determinasi belum menyentuh angka penuh tepat 1,00'
    ], 0, 'Slope b1 = perubahan rata-rata Y per +1 unit X; R² = 0,81 → 81% keragaman Y dijelaskan X (sisanya 19% oleh faktor luar error; korelasi r = +√0,81 = +0,90)!', 'Koefisien 3,2 adalah perubahan marginal Y terhadap X (ceteris paribus), sementara R² = 81% adalah proporsi varians total Y yang dijelaskan variasi linier X.'],
    ['Regresi, Korelasi & Ekonometrika Dasar', 'stat-v58-24', 'Dalam regresi linear berganda dengan 5 variabel independen, uji asumsi klasik menunjukkan nilai Variance Inflation Factor (VIF) untuk variabel X1 sebesar 18,4 dan X2 sebesar 16,9. Masalah ekonometrika yang terdeteksi dan dampaknya terhadap estimasi OLS adalah...', [
      'A. Autokorelasi spasial yang menyebabkan koefisien determinasi R² turun menjadi nol mutlak di data panel',
      'B. Multikolinearitas tinggi (VIF > 10) yang membengkakkan SE sehingga uji t cenderung tak signifikan',
      'C. Heteroskedastisitas ekstrem yang menjadikan seluruh nilai prediksi rata-rata variabel Y bernilai negatif',
      'D. Pelanggaran normalitas residual yang memaksa seluruh variabel kategorik diubah ke logaritma natural',
      'E. Masalah endogenitas sempurna karena peubah terikat Y ternyata berbentuk data kategorik dua kelas biner'
    ], 1, 'VIF > 10 = MULTIKOLINEARITAS serius (antarvariabel X berkorelasi kuat → OLS tetap BLUE/tak bias, tapi SE membesar → uji t terlihat palsu tidak signifikan)!', 'Multikolinearitas tidak membiaskan estimasi OLS (tetap tak bias), namun memperlebar varians penduga beta sehingga sulit memisahkan pengaruh murni X1 dan X2.'],
    ['Regresi, Korelasi & Ekonometrika Dasar', 'stat-v58-25', 'Untuk mendeteksi keberadaan masalah heteroskedastisitas pada sisaan (residual) model regresi linear berganda, uji formal maupun grafik diagnostik standar yang tepat digunakan adalah...', [
      'A. Uji Variance Inflation Factor (VIF) atau tabel matriks korelasi antara peubah terikat dan seluruh prediktor',
      'B. Uji Kolmogorov-Smirnov satu sampel atau plot Q-Q Normal terhadap distribusi keseluruhan nilai konstanta model',
      'C. Uji Breusch-Pagan / White atau pola corong pada plot Residual vs Predicted Y',
      'D. Uji statistik Durbin-Watson d untuk mengukur keterkaitan error periode t dengan t−1 pada data deret waktu',
      'E. Uji Rasio Kemungkinan Likelihood (LR test) yang membandingkan derajat bebas regresi dengan angka nol'
    ], 2, 'Pasangan Asumsi Klasik OLS: Multikol = VIF; Heteroskedastisitas = Breusch-Pagan / White / Glejser; Autokorelasi (time-series) = Durbin-Watson / Breusch-Godfrey; Normalitas = Jarque-Bera / Shapiro-Wilk!', 'Heteroskedastisitas berarti varians error tidak konstan di seluruh pengamatan dan dideteksi lewat uji Breusch-Pagan, White, Glejser, maupun pola sebaran residual yang menyebar/menyempit.'],
    ['Regresi, Korelasi & Ekonometrika Dasar', 'stat-v58-26', 'Ketika menganalisis data time-series PDB kuartalan selama 15 tahun dengan regresi OLS, nilai statistik Durbin-Watson mendekati 0,42 (jauh di bawah batas bawah dL). Kondisi ini mengindikasikan gejala...', [
      'A. Tidak adanya masalah autokorelasi sedikit pun karena angka nilai Durbin-Watson berada di sekitar angka nol',
      'B. Korelasi negatif sempurna antarpengamatan periode berjalan dengan pengamatan pada periode masa depan',
      'C. Kegagalan asumsi homoskedastisitas khusus terjadi pada variabel dummy wilayah perkotaan padat penduduk',
      'D. Autokorelasi positif pada error antarwaktu yang membuat SE OLS bias lebih kecil',
      'E. Persamaan regresi sudah memiliki ukuran kebaikan suai paling tinggi tanpa perlu perbaikan spesifikasi model'
    ], 3, 'Durbin-Watson rentang 0..4: DW ~ 2 = bebas autokorelasi; DW mendekati 0 (< dL) = Autokorelasi POSITIF kuat; DW mendekati 4 (> 4−dL) = Autokorelasi NEGATIF!', 'Nilai DW sangat rendah (0,42) menandakan sisaan periode berturutan berkorelasi positif sehingga perlu koreksi HAC/Newey-West, model lag, atau differencing.'],
    ['Regresi, Korelasi & Ekonometrika Dasar', 'stat-v58-27', 'Untuk memodelkan peluang seorang peserta CPNS dinyatakan Lulus (Y = 1) atau Tidak Lulus (Y = 0) berdasarkan jam belajar dan skor tryout, mengapa Regresi Logistik Biner lebih tepat dibanding model OLS probabilitas linear biasa?', [
      'A. Karena Regresi OLS selalu menghasilkan koefisien determinasi R² bernilai lebih besar dari satu koma lima penuh',
      'B. Karena Regresi Logistik tidak membutuhkan komputer statistik dan dapat diselesaikan tanpa proses iterasi apa pun',
      'C. Karena pada metode Regresi Logistik seluruh nilai variabel bebas tidak boleh berupa angka skor kontinu rasio',
      'D. Karena model OLS mensyaratkan variabel dependen harus berdistribusi kategorik terurut minimal lima tingkatan kelas',
      'E. Fungsi sigmoid mengunci prediksi peluang di rentang [0, 1] dan tepat untuk galat biner'
    ], 4, 'Y Biner (0/1) → Regresi Logistik (fungsi logit / sigmoid mengunci peluang di [0, 1], interpretasi pakai Odds Ratio exp(beta))!', 'Linear Probability Model via OLS berisiko memprediksi peluang < 0 atau > 1 dan menyalahi asumsi homoskedastisitas serta normalitas galat; logit mengatasinya via fungsi log-odds.'],
    ['Regresi, Korelasi & Ekonometrika Dasar', 'stat-v58-28', 'Dalam membandingkan dua model regresi berganda dengan jumlah variabel bebas (prediktor) yang berbeda—Model A memakai 3 variabel bebas dan Model B memakai 8 variabel bebas pada sampel yang sama—ukuran kebaikan suai paling adil yang memberi penalti atas penambahan variabel tidak relevan adalah...', [
      'A. Adjusted R-Squared, AIC, atau BIC karena menghukum tambahan prediktor yang tak bermakna',
      'B. Koefisien Determinasi biasa R² karena nilainya selalu cenderung meningkat seiring pertambahan jumlah prediktor',
      'C. Jumlah total kuadrat regresi (SSR) model tanpa perlu memperhatikan derajat bebas sisaan residualnya',
      'D. Rata-rata nilai prediksi variabel Y di dalam sampel dibandingkan median masing-masing kelompok pengamatan',
      'E. Tingkat signifikansi intersep konstanta model tanpa memedulikan uji koefisien tiap peubah penjelas'
    ], 0, 'R² biasa TAK PERNAH turun jika ditambah variabel sampah! Untuk banding model beda jumlah prediktor gunakan Adjusted R² (makin besar baik) atau AIC/BIC (makin kecil baik)!', 'Adjusted R², AIC, dan BIC menyeimbangkan kecocokan model dengan kesederhanaan (parsimony) melalui penalti terhadap tambahan derajat bebas yang terbuang.'],

    ['Indikator Makro BPS (Inflasi, TPT, PDRB, IPM, Kemiskinan)', 'stat-v58-29', 'Badan Pusat Statistik menghitung garis kemiskinan dari dua komponen, yaitu Garis Kemiskinan Makanan (GKM, disetarakan 2.100 kilokalori/kapita/hari) dan Garis Kemiskinan Bukan Makanan (GKBM). Jika Garis Kemiskinan Provinsi Rp580.000/kapita/bulan dan rata-rata anggota keluarga miskin adalah 4,5 orang, maka rata-rata pengeluaran rumah tangga batas miskin per bulan adalah...', [
      'A. Rp580.000 per rumah tangga tanpa memperhitungkan banyaknya jumlah tanggungan anggota keluarga',
      'B. Rp2.610.000 per rumah tangga (Rp580.000 × 4,5)',
      'C. Rp1.160.000 per rumah tangga dengan syarat minimum dua orang dewasa produktif bekerja tetap',
      'D. Rp3.100.000 karena komponen bukan makanan selalu dikalikan dua kali lipat di kawasan perkotaan',
      'E. Rp1.740.000 sesudah dikurangi pajak pendapatan tidak kena pajak tahunan pemerintah provinsi'
    ], 1, 'Ingat definisi GK BPS bersifat PER KAPITA (per orang), BUKAN per rumah tangga! GK Rumah Tangga = GK Kapita × Rata-rata anggota RT = 580.000 × 4,5 = Rp2.610.000!', 'Karena garis kemiskinan BPS diukur per kapita, membandingkan pendapatan/pengeluaran sebuah rumah tangga harus dikalikan banyaknya anggota rumah tangga (580.000 × 4,5 = 2.610.000).'],
    ['Indikator Makro BPS (Inflasi, TPT, PDRB, IPM, Kemiskinan)', 'stat-v58-30', 'Pada penghitungan Indeks Pembangunan Manusia (IPM) metode baru BPS (mengadopsi UNDP 2010), tiga dimensi pembentuknya beserta metode agregasi ketiga indeks dimensinya menggunakan...', [
      'A. Dimensi Produk Domestik Bruto, Tingkat Inflasi tahunan, dan Luas Wilayah Hutan Kota secara rata-rata aritmetika',
      'B. Angka Melek Huruf saja untuk dimensi pendidikan ditambah Pengeluaran Pemerintah Pusat per tahun anggaran berjalan',
      'C. Dimensi Kesehatan, Pengetahuan, dan Hidup Layak yang diagregasi dengan rata-rata geometrik',
      'D. Rata-rata aritmetika sederhana dari UHH, Angka Pengangguran Terbuka, dan Koefisien Gini distribusi pendapatan',
      'E. Indeks Harga Konsumen dikalikan jumlah lulusan sekolah menengah atas pada tiap wilayah kabupaten maupun kota'
    ], 2, 'IPM = (I_kesehatan × I_pendidikan × I_pengeluaran)^(1/3) [Rata-rata Geometrik! Memakai Harapan Lama Sekolah & Rata-rata Lama Sekolah + Pengeluaran per kapita disesuaikan!].', 'Rata-rata geometrik mencegah ketimpangan antar-dimensi saling menutupi secara linear sempurna: ketertinggalan satu dimensi menurunkan IPM secara signifikan.'],
    ['Indikator Makro BPS (Inflasi, TPT, PDRB, IPM, Kemiskinan)', 'stat-v58-31', 'Tingkat Pengangguran Terbuka (TPT) suatu provinsi tercatat 5,40%. Berdasarkan konsep baku BPS dan ILO dalam Sakernas, nilai 5,40% tersebut merupakan persentase dari jumlah pengangguran terbuka terhadap...', [
      'A. Seluruh jumlah penduduk total provinsi termasuk bayi, anak sekolah dasar, hingga kalangan lansia pensiunan',
      'B. Seluruh penduduk usia kerja termasuk ibu rumah tangga pengurus rumah penuh waktu serta mahasiswa aktif',
      'C. Total jumlah lowongan kerja terdaftar pada dinas ketenagakerjaan provinsi sepanjang bulan Februari tahun berjalan',
      'D. Jumlah Angkatan Kerja (penduduk usia kerja 15+ yang bekerja ditambah pengangguran)',
      'E. Jumlah penduduk miskin ekstrem yang menerima bantuan sosial pangan reguler triwulanan di wilayah kabupaten'
    ], 3, 'Wajib hafal rumus ketenagakerjaan: TPT = (Pengangguran Terbuka ÷ Angkatan Kerja) × 100%; TPAK = (Angkatan Kerja ÷ Penduduk Usia Kerja 15+) × 100%!', 'Pembagi TPT adalah Angkatan Kerja (bekerja + mencari kerja/mempersiapkan usaha/putus asa), BUKAN seluruh penduduk usia kerja.'],
    ['Indikator Makro BPS (Inflasi, TPT, PDRB, IPM, Kemiskinan)', 'stat-v58-32', 'Apabila IHK (Indeks Harga Konsumen) Nasional bulan Maret 2026 tercatat 108,00 dan pada bulan Maret tahun sebelumnya (Maret 2025) tercatat 104,00, sementara Februari 2026 tercatat 107,46, maka tingkat Inflasi Tahunan (Year-on-Year) bulan Maret 2026 bernilai...', [
      'A. 4,00% karena selisih mutlak antar dua angka indeks harga langsung menjadi persentase inflasi tahunan',
      'B. 0,50% karena penghitungan inflasi tahunan cukup membandingkan perubahan bulanan terhadap bulan Februari saja',
      'C. 3,70% apabila dihitung menggunakan pembagi indeks harga tahun berjalan (108,00) bukannya indeks dasar tahun lalu',
      'D. 4,16% apabila pola pengeluaran konsumsi rumah tangga tidak berubah sepanjang dua belas bulan penuh kalender',
      'E. 3,85% hasil (108,00 − 104,00) ÷ 104,00 × 100%'
    ], 4, 'Inflasi YoY = (IHK_t − IHK_t-12) ÷ IHK_t-12 × 100% = (108 − 104)/104 = 4/104 ≈ 3,846% = 3,85%! (Jebakan klasiknya membagi ke 100 atau selisih langsung 4,00%!).', 'Basis perbandingan Inflasi YoY adalah IHK bulan yang sama pada tahun sebelumnya (104,00), yakni 4 / 104 × 100% = 3,85%.'],
    ['Indikator Makro BPS (Inflasi, TPT, PDRB, IPM, Kemiskinan)', 'stat-v58-33', 'Dalam membandingkan ketimpangan distribusi pengeluaran antarwilayah di Indonesia menggunakan Rasio Gini (Gini Ratio), sebuah provinsi mengalami pergerakan indeks dari 0,342 tahun lalu menjadi 0,418 tahun ini. Interpretasi sosial-ekonomi yang tepat adalah...', [
      'A. Ketimpangan pengeluaran antar-penduduk makin melebar karena indeks mendekati angka 1',
      'B. Pemerataan pendapatan warga makin merata sempurna karena kenaikan angka indeks Gini melampaui batas 0,40',
      'C. Jumlah total penduduk wilayah provinsi dipastikan berkurang drastis hingga empat puluh persen dalam satu tahun',
      'D. Angka kemiskinan mutlak wilayah provinsi otomatis menjadi nol persen karena ketimpangan pengeluaran sudah terukur',
      'E. Indeks Pembangunan Manusia dipastikan turun drastis hingga berada di bawah garis nol akibat angka Gini naik'
    ], 0, 'Gini Ratio bernilai 0 s.d. 1: 0 = pemerataan sempurna; 1 = ketimpangan sempurna! Makin mendekati 1 = ketimpangan MAKIN TINGGI (> 0,4 masuk kategori sedang-tinggi)!', 'Kenaikan Gini Ratio dari 0,342 ke 0,418 menandakan melebarnya kesenjangan pengeluaran antara kelompok penduduk berbelanja tertinggi dan terendah.'],
    ['Indikator Makro BPS (Inflasi, TPT, PDRB, IPM, Kemiskinan)', 'stat-v58-34', 'Mengukur "Laju Pertumbuhan Ekonomi" daerah secara tahunan yang adil terbebas dari pengaruh kenaikan harga umum (inflasi) harus menggunakan perhitungan...', [
      'A. Pertumbuhan nilai PDRB Atas Dasar Harga Berlaku (Nominal) semata antar dua periode tahun kalender berurutan',
      'B. Pertumbuhan nilai PDRB Atas Dasar Harga Konstan (Riil) berbasis harga tahun dasar',
      'C. Selisih nilai total anggaran belanja modal APBD kabupaten dibandingkan dengan daerah provinsi tetangga lainnya',
      'D. Jumlah keseluruhan penerimaan pajak hotel dan restoran perkotaan tanpa perlu mengoreksi perubahan indeks harga',
      'E. Rata-rata pertumbuhan jumlah aparatur sipil negara baru di lingkungan kantor pemerintahan daerah setempat'
    ], 1, 'Pertumbuhan Ekonomi Riil WAJIB memakai PDRB ADHK (Atas Dasar Harga Konstan), sedangkan besarnya ukuran ekonomi saat ini / struktur share memakai ADHB (Berlaku)!', 'PDRB ADHK menyingkirkan bias gelembung inflasi sehingga benar-benar mencerminkan peningkatan riil produksi barang dan jasa suatu wilayah.'],
    ['Indikator Makro BPS (Inflasi, TPT, PDRB, IPM, Kemiskinan)', 'stat-v58-35', 'Indeks Ketimpangan/Kedalaman Kemiskinan yang diukur BPS melalui P1 (Poverty Gap Index) dan P2 (Poverty Severity Index) memberi tambahan informasi di luar angka persentase penduduk miskin (P0) karena...', [
      'A. P1 hanya mencatat jumlah pengangguran terbuka di kota besar sedangkan P2 khusus menghitung buruh tani desa terpencil',
      'B. P1 dan P2 nilainya selalu lebih besar dari 100% apabila garis kemiskinan dinaikkan sebesar seribu rupiah saja',
      'C. P1 ukur rata-rata jarak ke garis kemiskinan; P2 ukur ketimpangan antarpenduduk miskin',
      'D. P2 dipakai untuk menggantikan pengukuran Indeks Harga Konsumen kelompok komoditas pangan pokok bulanan',
      'E. P1 menentukan jumlah maksimum hari libur resmi nasional dalam satu tahun kalender kepegawaian aparatur'
    ], 2, 'Klasifikasi Foster-Greer-Thorbecke (FGT): P0 = Headcount (% jumlah orang miskin); P1 = Kedalaman (jarak ke GK); P2 = Keparahan (sebaran ketimpangan antar si miskin)!', 'Dua daerah bisa memiliki P0 sama (misal 10%), namun jika P1 & P2 lebih tinggi berarti penduduk miskinnya jauh lebih terpuruk di bawah garis kemiskinan.'],

    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-36', 'Dalam tahap pembersihan data survei berskala besar sebelum dianalisis, ditemukan beberapa nilai pendapatan mingguan yang kosong secara sistematis lebih sering terjadi pada responden pegawai swasta atas dibanding buruh harian (bukan acak murni, tetapi terkait variabel teramati lain seperti pekerjaan). Pola missing data tersebut diklasifikasikan sebagai...', [
      'A. MCAR (Missing Completely At Random) sehingga selalu aman langsung dibuang (listwise deletion) tanpa memicu bias apa pun',
      'B. Zero variance bias yang hanya bisa diatasi dengan menghapus seluruh variabel pendapatan dari tabulasi data nasional',
      'C. Multikolinearitas sempurna antara variabel jenis kelamin responden dan tanggal wawancara survei di lapangan desa',
      'D. MAR (Missing At Random) yang aman ditangani via Multiple Imputation memakai prediktor teramati',
      'E. Outlier positif ekstrem yang angkanya melampaui batas atas tiga kali nilai jangkauan antarkuartil data sampel'
    ], 3, 'Pola Missingness: MCAR (murni acak tak bergantung apa pun); MAR (bergantung variabel TERAMATI lain → imputasi valid!); MNAR (bergantung nilai yang HILANG itu sendiri → paling rawan bias!).', 'Mengenali pola MAR memungkinkan peneliti memakai Multiple Imputation menggunakan prediktor teramati agar sampel tetap tak bias dan tidak kehilangan kekuatan uji.'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-37', 'Saat mengevaluasi kualitas pemanfaatan Big Data (seperti data lokasi sinyal ponsel untuk statistik pariwisata atau citra satelit untuk luas panen padi KSA) sebagai statistik resmi, tantangan metodologi utama yang wajib dikalibrasi dengan survei konvensional adalah...', [
      'A. Kecepatan kinerja komputer statistik dalam menampilkan visual grafik batang berwarna cerah secara langsung',
      'B. Ketidakmampuan sistem komputer melakukan perkalian persentase untuk tabel berukuran lebih dari seribu baris data',
      'C. Lonjakan biaya cetak kuesioner kertas lapangan ketika memakai citra satelit penginderaan jauh resolusi menengah',
      'D. Kewajiban melakukan wawancara kepada setiap pemilik menara telekomunikasi secara tatap muka di seluruh provinsi',
      'E. Selectivity bias (keterwakilan populasi) serta konsistensi definisi konsep unit amatan'
    ], 4, 'Big Data = "Data Ditemukan" (organic data), bukan "Data Dirancang" (designed data): risiko terbesar = Selectivity Bias (misal hanya pemegang operator tertentu) & Concept Drift!', 'Kalibrasi dengan survei probabilitas terstandar dan metadata resmi menjamin Big Data tetap memenuhi prinsip kualitas statistik resmi (UN Fundamental Principles).'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-38', 'Dalam pemeriksaan konsistensi data mikro sensus (Data Editing & Validation), ditemukan pencacahan seorang anak berumur 7 tahun terisi "Status Kawin = Cerai Hidup" dan "Pendidikan Tertinggi = Sarjana S2". Aturan verifikasi otomatis yang mendeteksi kelainan logika antarkolom semacam itu disebut...', [
      'A. Cross-validation / consistency rule (cek konsistensi logika antarvariabel)',
      'B. Normalisasi Min-Max seluruh angka menjadi rentang desimal antara nol sampai satu di sistem basis data',
      'C. Uji Homogenitas Varians Levene antarpulau guna menentukan pemilihan model regresi nonlinier yang sesuai',
      'D. Penghitungan kepadatan penduduk per kilometer persegi berdasar pantulan citra satelit cahaya malam hari',
      'E. Penarikan sampel berstrata dua tahap dengan probabilitas sebanding banyaknya rumah tangga (PPS)'
    ], 0, 'Editing & Validasi Kuesioner: Range check (batas wajar tiap variabel), Skip/Routing check (alur pertanyaan), & Cross-Variable / Consistency check (usia vs status kawin/pendidikan)!', 'Aturan validasi silang (inter-field consistency check) mencegah masuknya data mustahil sebelum tahap tabulasi dan analisis dimulai.'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-39', 'Indeks Harga Laspeyres (yang juga melandasi konstruksi IHK) menggunakan bobot kuantitas dari periode dasar (Q0), sedangkan Indeks Harga Paasche menggunakan bobot kuantitas periode berjalan (Qt). Kecenderungan teoretis Indeks Laspeyres apabila konsumen beralih membeli barang pengganti yang lebih murah ketika harga barang lama naik adalah...', [
      'A. Selalu menghasilkan angka laju inflasi bernilai negatif pada setiap periode tahun anggaran daerah berjalan',
      'B. Cenderung melebih-lebihkan (overestimate) biaya hidup akibat mengabaikan efek substitusi',
      'C. Mengubah seluruh kuantitas keranjang barang kebutuhan pokok menjadi bernilai tetap persis satu kilogram',
      'D. Menghitung perubahan biaya hidup lebih rendah drastis (underestimate) dibandingkan hasil Indeks Paasche',
      'E. Hanya sah dipakai apabila seluruh volume barang ekspor impor negara bernilai tepat nol rupiah setiap bulan'
    ], 1, 'Hafal pasangan klasik ekonomi statistik: Laspeyres (pakai Q0, tetap) cenderung OVERESTIMATE inflasi; Paasche (pakai Qt, berjalan) cenderung UNDERESTIMATE; Fisher = √(L × P) mengoreksi keduanya!', 'Karena bobot keranjang barang Q0 dipertahankan saat harga barang tertentu melonjak tinggi, Laspeyres memberi bobot terlalu besar pada barang yang sebenarnya sudah dikurangi konsumsinya.'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-40', 'Apabila sebuah kementerian melakukan survei evaluasi dengan teknik Repeated Cross-Sectional setiap tahun dibanding Panel Longitudinal yang mengikuti orang/perusahaan yang sama dari waktu ke waktu, keunggulan khusus studi Panel Longitudinal dibanding Cross-Sectional adalah...', [
      'A. Sama sekali terbebas dari risiko hilangnya responden pada gelombang pengamatan berikutnya (attrition = nol)',
      'B. Biayanya jauh lebih hemat murah serta tuntas diselesaikan cukup dalam satu hari kerja pengumpulan lapangan',
      'C. Melacak dinamika perubahan unit yang sama antarwaktu dan mengontrol heterogenitas tetap',
      'D. Tidak pernah membutuhkan kode identifikasi pelacakan unit rumah tangga antarperiode waktu sama sekali',
      'E. Cukup mengumpulkan keterangan satu variabel demografis tunggal pada gelombang tahun pertama saja'
    ], 2, 'Panel Longitudinal (observasi unit yang SAMA berkali-kali): lacak dinamika mikro individu + fixed effect kontrol bias tak teramati; kelemahannya rawan Attrition (responden hilang/pindah)!', 'Studi panel mengungkap dinamika perpindahan status individu (misal kemiskinan kronis vs transien), hal yang tak terlihat di angka agregat survei potong-lintang (cross-sectional) berulang.'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-41', 'Pada peta tematik analisis daerah rawan kemiskinan atau analisis wilayah ekonomi, indikator keterkaitan spasial (Moran\'s I) yang bernilai positif mendekati +1 menandakan bahwa...', [
      'A. Penyebaran angka kemiskinan di dalam peta wilayah benar-benar acak sempurna tanpa pola geografis sedikit pun',
      'B. Daerah berangka kemiskinan tinggi selalu dikelilingi penuh oleh wilayah kaya membentuk pola papan catur rapi',
      'C. Seluruh koordinat batas peta GIS belum selaras dengan kode wilayah administrasi resmi Kementerian Dalam Negeri',
      'D. Daerah bertetangga cenderung punya nilai mirip (mengelompok / spatial clustering)',
      'E. Jumlah total penduduk setiap kabupaten pada pulau tersebut bernilai sama persis tepat sebesar satu juta jiwa'
    ], 3, 'Moran\'s I (-1 s.d. +1): > 0 = Mengelompok (High-High / Low-Low); ~ 0 = Acak (Random); < 0 = Menyebar seragam/papan catur (High dikelilingi Low)!', 'Autokorelasi spasial positif (Moran I mendekati +1) menandakan pengelompokan fenomena secara geografis (hotspots & coldspots), penting bagi intervensi kebijakan berbasis kewilayahan.'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-42', 'Untuk menguji reliabilitas konsistensi internal suatu instrumen kuesioner persepsi layanan publik yang menggunakan 12 butir pernyataan berskala Likert 1–5, koefisien statistik paling umum dipakai analis data adalah...', [
      'A. Korelasi Rank Pearson antara usia pewawancara lapangan dan panjang rambut responden di lokasi desa penelitian',
      'B. Uji kenormalan Shapiro-Wilk guna memeriksa apakah seluruh berkas kuesioner telah dikembalikan tepat waktu',
      'C. Faktor Varians Inflasi (VIF) untuk menghitung nilai rata-rata aritmetika jawaban responden skala netral',
      'D. Persentase cakupan geografis desa pelosok yang masih belum teraliri layanan sinyal jaringan internet cepat',
      'E. Cronbach\'s Alpha dengan batas andal umum minimal sebesar >= 0,70'
    ], 4, 'Reliabilitas konsistensi internal skala Likert = Cronbach\'s Alpha (>= 0,70 andal!); Validitas konstruk butir = Factor Analysis / Corrected Item-Total Correlation!', 'Nilai Cronbach\'s Alpha mengukur seberapa erat korelasi antar-butir dalam satu konstruksi kuesioner yang mengukur dimensi sikap yang sama.'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-43', 'Sebuah tabel distribusi frekuensi nilai ujian memiliki Kelas 1: [50–59] frek 4; Kelas 2: [60–69] frek 6; Kelas 3: [70–79] frek 10; Kelas 4: [80–89] frek 12; Kelas 5: [90–99] frek 8. Berapakah kelas letak Median (data ke-20,5 dari N=40) dan perkiraan nilai Median data berkelompoknya?', [
      'A. Kelas 3 [70–79] dengan batas atas kelas sekitar 79,5',
      'B. Berada di Kelas 4 [80–89] karena nilai frekuensi 12 merupakan frekuensi tunggal paling besar (modus)',
      'C. Berada di Kelas 2 [60–69] dengan nilai tengah langsung persis sama dengan angka skor 64,5 poin',
      'D. Berada di Kelas 5 [90–99] karena delapan peserta ujian tercatat berhasil memperoleh skor tertinggi',
      'E. Nilai median tidak dapat diestimasi pada data berkelompok tanpa mengetahui seluruh angka mentah peserta'
    ], 0, 'Hitung F_kum: Kelas 1=4, Kelas 2=10, Kelas 3=20 (< 20,5? Cek N/2 = 40/2 = 20 → tepi akhir Kelas 3 = 79,5! Kalau Kelas 3 berakhir pas 20, batas atas kelas 79,5 tepat di antara 79 dan 80)!', 'Frekuensi kumulatif mencapai tepat 20 (= N/2) di akhir kelas ketiga [70–79], sehingga titik potong batas atas kelas ketiga berada pada tepi kelas 79,5 (Opsi A).'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-44', 'Sebuah model klasifikasi deteksi penipuan klaim bantuan sosial memiliki Confusion Matrix: True Positive = 80, False Positive = 20, False Negative = 40, dan True Negative = 860. Berapakah nilai Precision (Ketepatan Prediksi Positif) dan Recall (Sensitivitas) model tersebut?', [
      'A. Precision = 94,0% karena angka total akurasi prediksi benar selalu melampaui sembilan puluh persen',
      'B. Precision = 80% (80/100) serta Recall = 66,7% (80/120)',
      'C. Precision = 66,7% dan Recall = 80% karena kedua penyebut rumusnya memang dibalik berlawanan arah',
      'D. Precision = 100% dan Recall = 90% karena komponen False Negative diabaikan dalam sensitivitas deteksi',
      'E. Akurasi = 80% dan Precision = 50% dengan cukup menjumlahkan seluruh angka kesalahan matriks konfusi'
    ], 1, 'Hafal 2 pembagi emas ML/Data: Precision = TP / (TP + FP) = 80 / (80+20) = 80%; Recall = TP / (TP + FN) = 80 / (80+40) = 80/120 = 66,7%!', 'Precision mengukur ketepatan di antara yang diprediksi positif (TP/(TP+FP)), sementara Recall mengukur seberapa banyak kasus positif aktual berhasil tertangkap (TP/(TP+FN)).'],
    ['Kualitas Data, Validasi Survei & Big Data Statistik', 'stat-v58-45', 'Sesuai kaidah penjaminan mutu statistik nasional dan tata kelola arsip microdata, sebelum sebuah instansi mengunggah dataset hasil survei rumah tangga ke portal data terbuka untuk diunduh peneliti dan akademisi umum, proses statistik penutup yang WAJIB diterapkan terhadap data mikro individu tersebut adalah...', [
      'A. Mengganti seluruh angka nilai pengeluaran keluarga menjadi nol agar peneliti hanya menghitung jumlah baris tabel',
      'B. Mencantumkan lengkap Nomor Induk Kependudukan serta koordinat GPS rumah guna mempermudah verifikasi ulang peneliti',
      'C. Statistical Disclosure Control (penghapusan pengenal dan pengacakan/pengelompokan)',
      'D. Memperbesar angka simpangan baku hingga sepuluh kali lipat secara acak guna membingungkan pembaca portal terbuka',
      'E. Menghapus seluruh kode variabel demografi wilayah beserta keterangan satuan ukur di dalam dokumen file metadata'
    ], 2, 'SDC (Statistical Disclosure Control): anonimisasi + k-anonymity + agregasi variabel kuasi-pengenal langka guna melindungi privasi (UU Statistik & UU PDP) sekaligus menjaga kegunaan analisis data!', 'Penghapusan pengenal langsung saja sering belum cukup karena kombinasi variabel (mis. kecamatan + usia 98 thn + profesi langka) bisa membuka identitas (re-identification risk), sehingga wajib melalui proses SDC.']
  ];

  /* ==================== +45 SKB SOSIAL (sos-v58-01 .. 45) ==================== */
  const SOSIAL_PLUS = [
    ['Konsep Kesejahteraan Sosial & 26 Jenis PPKS (UU 11/2009)', 'sos-v58-01', 'Menurut Undang-Undang Nomor 11 Tahun 2009 tentang Kesejahteraan Sosial, penyelenggaraan kesejahteraan sosial diselenggarakan melalui empat pilar kegiatan utama yang saling terintegrasi, yaitu...', [
      'A. Bantuan tunai tanpa pendampingan, penangkapan gelandangan, pemulangan paksa, serta pengurungan panti permanen',
      'B. Subsidi bahan bakar kendaraan mewah, pemotongan pajak korporasi, asuransi gedung, dan pinjaman modal bank komersial',
      'C. Penataan jalan tol nasional, pembangunan taman hiburan kota, promosi ekspor tambang, dan pelatihan militer dasar',
      'D. Rehabilitasi sosial, jaminan sosial, pemberdayaan sosial, serta perlindungan sosial',
      'E. Pendataan aparatur pegawai negeri, pengangkatan pejabat struktural, aturan lalu lintas, serta penarikan retribusi'
    ], 3, '4 Pilar UU 11/2009 Kesejahteraan Sosial: 1) Rehabilitasi Sosial (pulihkan fungsi), 2) Jaminan Sosial (kebutuhan dasar berkelanjutan), 3) Pemberdayaan Sosial (kemandirian), 4) Perlindungan Sosial (cegah kerentanan guncangan)!', 'Keempat pilar ini bekerja secara berkesinambungan dari pemulihan kerentanan akut hingga kemandirian berkelanjutan PMKS/PPKS.'],
    ['Konsep Kesejahteraan Sosial & 26 Jenis PPKS (UU 11/2009)', 'sos-v58-02', 'Dalam nomenklatur terkini Kementerian Sosial, istilah Penyandang Masalah Kesejahteraan Sosial (PMKS) diperbarui menjadi PPKS (Pemerlu Pelayanan Kesejahteraan Sosial) yang mencakup 26 jenis sasaran. Alasan filosofis perubahan terminologi tersebut dalam praktik pekerjaan sosial adalah...', [
      'A. Menghapus stigma "sumber masalah" serta menempatkan mereka sebagai pemegang hak layanan bermartabat',
      'B. Memangkas jumlah penerima bantuan sosial nasional menjadi maksimal hanya lima jenis kategori kelompok saja',
      'C. Memindahkan seluruh tanggung jawab pembiayaan sosial daerah dari pemerintah kepada lembaga swadaya masyarakat asing',
      'D. Mewajibkan seluruh penyandang disabilitas berat untuk bekerja penuh waktu di sektor industri konstruksi tanpa batas',
      'E. Menggantikan konsep ukuran kemiskinan absolut menjadi indikator kepemilikan gawai pintar terbaru di perkotaan'
    ], 0, 'PMKS ("Penyandang Masalah" → berstigma) diperbarui jadi PPKS ("Pemerlu Pelayanan" → pendekatan berbasis hak/rights-based & humanis)!', 'Perubahan istilah ke PPKS menempatkan klien sebagai subjek bermartabat yang berhak menerima layanan dan penguatan sosial, bukan objek bermasalah.'],
    ['Konsep Kesejahteraan Sosial & 26 Jenis PPKS (UU 11/2009)', 'sos-v58-03', 'Pekerja sosial menangani seorang penyintas bencana longsor yang trauma berat kehilangan tempat tinggal serta mata pencaharian, lalu menyiapkan dukungan tempat tinggal sementara, konseling psikososial awal, serta bantuan pemenuhan sandang-pangan darurat guna mencegah kondisi semakin terpuruk. Layanan ini utamanya masuk dalam pilar...', [
      'A. Pembiayaan kredit usaha komersial berbunga pasar untuk membiayai pembangunan gedung apartemen bertingkat baru',
      'B. Perlindungan sosial serta rehabilitasi sosial fase pemulihan dini',
      'C. Penghapusan sementara hak pilih warga terdampak bencana alam dalam pelaksanaan pemilihan umum daerah serentak',
      'D. Penyerahan pengelolaan aset tanah warga terdampak bencana kepada perusahaan swasta pengembang wisata regional',
      'E. Pemberian sanksi denda administratif karena warga tinggal di kawasan lereng bukit sebelum program relokasi dimulai'
    ], 1, 'Perlindungan sosial = cegah risiko guncangan/bencana agar tak jatuh miskin ekstrem; Rehabilitasi sosial = pulihkan fungsi sosial-psikologis korban!', 'Kombinasi perlindungan darurat dan rehabilitasi psikososial awal menstabilkan kondisi krisis klien sebelum memasuki tahap pemberdayaan ekonomi lanjutan.'],
    ['Konsep Kesejahteraan Sosial & 26 Jenis PPKS (UU 11/2009)', 'sos-v58-04', 'Dalam kerangka tugas Pilar-Pilar Sosial (PSKS - Potensi dan Sumber Kesejahteraan Sosial) di tingkat masyarakat, yang termasuk kelompok PSKS mitra resmi pemerintah daerah antara lain adalah...', [
      'A. Badan Pengawas Obat dan Makanan, Otoritas Jasa Keuangan nasional, serta Badan Pemeriksa Keuangan negara',
      'B. Asosiasi kontraktor jalan tol nasional, pengembang perumahan elite, serta lembaga perbankan investasi luar negeri',
      'C. PSM, Karang Taruna, TKSK, dan Lembaga Kesejahteraan Sosial (LKS)',
      'D. Satuan pengamanan perkantoran swasta serta serikat pemilik kendaraan bermotor roda empat pribadi di kota',
      'E. Seluruh pengelola pusat perbelanjaan modern maupun jajaran manajer hotel berbintang lima bertaraf internasional'
    ], 2, 'Hafal PSKS (Potensi Sumber): PSM, TKSK, Karang Taruna, LKS, Taruna Siaga Bencana (TAGANA), Wahana Kesejahteraan Sosial Berbasis Masyarakat (WKSBM), Dunia Usaha Peduli Sosial!', 'PSKS adalah mitra aktif berbasis warga dan organisasi sosial yang memperpanjang jangkauan layanan kesejahteraan hingga tingkat desa/kelurahan.'],
    ['Konsep Kesejahteraan Sosial & 26 Jenis PPKS (UU 11/2009)', 'sos-v58-05', 'Berdasarkan UU Nomor 11 Tahun 2009 dan prinsip tata kelola layanan sosial pemerintah pusat vs daerah, tanggung jawab pembinaan langsung panti rehabilitasi sosial lanjut bagi penyandang disabilitas/korban napza tingkat provinsi dibanding pemberdayaan dasar tingkat kabupaten/kota diatur melalui prinsip...', [
      'A. Penyerahan penuh seluruh pengelolaan panti rehabilitasi berat kepada pemerintah tingkat rukun tetangga di desa',
      'B. Larangan keras bagi pemerintah kabupaten/kota mengalokasikan anggaran APBD untuk pelayanan sosial bagi warganya',
      'C. Penyatuan seluruh klaster klien anak balita terlantar, lansia, dan ODGJ berat ke dalam satu gedung tunggal tanpa pemilahan',
      'D. Pengambilalihan penuh seluruh panti sosial milik yayasan masyarakat ke dalam badan usaha swasta berorientasi profit',
      'E. Urusan berjenjang: Pusat (sentra nasional), Provinsi (panti lintas kab/kota), dan Kab/Kota (layanan dasar)'
    ], 4, 'UU 23/2014 Pemda Bidang Sosial: Kab/Kota tangani rehabilitasi & pemberdayaan DASAR PPKS di luar panti; Provinsi tangani panti sosial regional lintas kab/kota; Pusat tangani sentra terpadu nasional!', 'Pembagian kewenangan berjenjang memastikan PPKS mendapat penanganan cepat di tingkat kabupaten/kota serta layanan panti spesialis berjenjang di provinsi dan sentra Kemensos.'],
    ['Konsep Kesejahteraan Sosial & 26 Jenis PPKS (UU 11/2009)', 'sos-v58-06', 'Kelompok sasaran "Komunitas Adat Terpencil (KAT)" yang masuk dalam kategori penyelenggaraan kesejahteraan sosial Kemensos terutama mendapatkan program pemberdayaan berbasis penghormatan kearifan lokal yang bertujuan...', [
      'A. Memaksa seluruh anggota komunitas adat meninggalkan bahasa ibu dan mata pencaharian tradisional dalam sebulan',
      'B. Membuka akses layanan dasar (identitas, kesehatan, pendidikan, hunian) tanpa mencabut akar budaya',
      'C. Memindahkan seluruh wilayah hutan adat komunitas menjadi kawasan pertambangan terbuka korporasi skala besar',
      'D. Melarang keras kunjungan tenaga medis maupun guru ke dalam kawasan permukiman adat terpencil untuk selamanya',
      'E. Mengganti struktur musyawarah tetua adat setempat dengan sistem mekanisme lelang proyek tender komersial'
    ], 1, 'Pemberdayaan KAT = sediakan akses hak dasar (KTP, KIA, kesehatan, sekolah, pangan, rumah layak) secara bermartabat dengan PENGHORMATAN budaya lokal!', 'Kebijakan pemberdayaan KAT mengedepankan pendekatan kultural agar kesenjangan akses hak dasar warga adat terjembatani tanpa asimilasi paksa.'],

    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-07', 'Seorang pekerja sosial menerima klien remaja korban perundungan daring yang menarik diri dari sekolah. Langkah paling tepat setelah tahap kontak awal (intake/engagement) sebelum merumuskan intervensi rencana aksi bersama adalah tahap...', [
      'A. Terminasi kontrak bantuan seketika agar klien belajar memecahkan sendiri seluruh persoalannya sejak awal pertemuan',
      'B. Pemberian uang tunai sekali bayar tanpa melakukan penggalian riwayat keluarga maupun lingkungan pergaulan sekolah',
      'C. Pengunggahan rekaman wawancara tangisan klien ke akun media sosial kantor untuk penggalangan donasi terbuka publik',
      'D. Asesmen bio-psiko-sosial-spiritual guna memetakan akar masalah serta sumber daya klien',
      'E. Rujukan paksa ke lembaga pembinaan pemasyarakatan anak walaupun tidak ada pelanggaran hukum oleh klien'
    ], 3, 'Urutan Manajemen Kasus Peksos (Generalist Intervention Model): 1. Engagement/Intake → 2. Assessment (Bio-Psiko-Sosial + Sumber Daya) → 3. Planning → 4. Implementation/Intervention → 5. Evaluation → 6. Termination!', 'Asesmen menyeluruh (menggali faktor biologis, psikologis, relasi keluarga/teman, sekaligus kekuatan klien) mencegah kesalahan intervensi yang tidak tepat sasaran.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-08', 'Salah satu prinsip kode etik profesi pekerja sosial yang paling mendasar saat mendampingi korban kekerasan maupun klien penyandang HIV/ODHA adalah menjaga "Confidentiality" dan "Self-Determination", yang maknanya berturut-turut adalah...', [
      'A. Merahasiakan identitas klien serta menghormati haknya menentukan pilihan hidup secara sadar',
      'B. Membagikan rahasia medis klien ke grup WhatsApp RT demi kehati-hatian warga sekaligus memaksa klien ikut kehendak petugas',
      'C. Menyimpan seluruh berkas laporan kasus di rumah pribadi petugas serta menentukan sendiri seluruh keputusan hidup klien',
      'D. Menghindari tatap muka langsung dengan klien sama sekali agar petugas tidak ikut terbawa tekanan emosional di lapangan',
      'E. Menghentikan pendampingan seketika jika klien berani menanyakan mengenai alternatif pilihan program bantuan yang tersedia'
    ], 0, 'Kode Etik Peksos (Biestek / IFSW): Confidentiality (rahasia klien terjaga kecuali ancaman nyawa serius/hukum) & Self-Determination (berdayakan pilihan sadar klien, jangan diktator)!', 'Prinsip kerahasiaan membangun rasa aman klien untuk jujur bercerita, sedangkan determinasi diri menumbuhkan kemandirian tanggung jawab klien.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-09', 'Dalam metode "Social Group Work" (pekerjaan sosial kelompok) terhadap sekumpulan ibu-ibu keluarga rentan yang suaminya baru mengalami PHK massal di suatu kelurahan, peran kunci pekerja sosial sebagai fasilitator kelompok dukungan sebaya (support & mutual aid group) adalah...', [
      'A. Memberikan ceramah monolog selama tiga jam tanpa memberi kesempatan satu pun peserta kelompok saling bercerita',
      'B. Memilih satu anggota paling dominan lalu menyuruh seluruh peserta lain menaati perintahnya secara mutlak tanpa diskusi',
      'C. Membubarkan kelompok sesudah pertemuan pertama selesai jika konflik perbedaan pendapat kecil muncul antarpeserta',
      'D. Melaporkan keluhan masing-masing anggota kepada pemilik pabrik secara tertutup agar tidak terjadi pertemuan lanjutan',
      'E. Memfasilitasi dinamika kelompok agar anggota saling menguatkan dan merumuskan aksi bersama'
    ], 4, 'Inti Social Group Work = kekuatan MUTUAL AID (saling tolong, berbagi pengalaman, validasi emosi bersama, & belajar sosial kolektif)!', 'Dinamika saling dukung dalam kelompok membantu klien menyadari mereka tidak sendirian dan memicu tumbuhnya ide usaha serta solidaritas lokal.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-10', 'Perbedaan paling jelas antara pendekatan berbasis "Deficit/Problem-Based" dengan "Strengths Perspective (Perspektif Kekuatan)" dalam asesmen pekerjaan sosial modern adalah...', [
      'A. Strengths Perspective mengabaikan sepenuhnya kondisi kelaparan atau kekerasan dan cukup menyuruh klien berpikir positif',
      'B. Strengths Perspective menggali kapasitas, ketahanan, jaringan keluarga, dan aset klien selain kelemahannya',
      'C. Problem-Based dinilai lebih modern karena memandang klien sama sekali tak punya modal selain belas kasihan petugas',
      'D. Strengths Perspective mewajibkan pekerja sosial menolak semua bantuan pemerintah dan hanya mengandalkan kekuatan fisik klien',
      'E. Kedua sudut pandang tersebut dilarang digabungkan dalam penyusunan Rencana Intervensi Pekerjaan Sosial pemerintah daerah'
    ], 1, 'Strengths Perspective (Saleebey): klien punya aset, ketangguhan (resilience), nilai budaya, & dukungan komunitas — intervensi bertumpu pada KEKUATAN itu + bantuan pendukung!', 'Mengakui kapasitas klien sekaligus membantu mengatasi hambatan struktural membangun martabat serta mempercepat kemandirian klien dibanding melabeli mereka tak berdaya.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-11', 'Ketika melakukan pendampingan pemberdayaan masyarakat desa (*Community Development* / *Locality Development*) dalam mengatasi masalah sanitasi dan pengangguran pemuda, alat pemetaan partisipatif seperti *Transect Walk* dan *Diagram Venn Sosial* bertujuan utama untuk...', [
      'A. Mengukur luas tanah adat warga dari pesawat nirawak untuk segera dialihkan hak kepemilikannya kepada pemodal luar kota',
      'B. Melibatkan langsung warga setempat memetakan sumber daya, kerentanan, serta peran lembaga lokal secara setara',
      'C. Menghitung pagu proyek konstruksi aspal jalan nasional tanpa perlu menanyakan kebutuhan warga setempat sama sekali',
      'D. Menetapkan warga mana saja yang harus dikenai sanksi denda karena kedapatan membuang sampah sembarangan ke sungai',
      'E. Menggantikan fungsi pemetaan geologi nasional oleh badan geospasial dalam proses penerbitan sertifikat tanah desa'
    ], 1, 'Tools PRA (Participatory Rural Appraisal) — Transect Walk, Social Mapping, Diagram Venn, Seasonal Calendar = warga jadi PENELITI & PERENCANA utama kondisi desanya sendiri!', 'Partisipasi aktif sejak pemetaan masalah menumbuhkan rasa memiliki (*sense of ownership*) warga terhadap program pemberdayaan yang akan dijalankan.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-12', 'Pada tahap *Terminasi* (pengakhiran pelayanan kasus) setelah keluarga penerima manfaat menunjukkan kemajuan mandiri secara ekonomi dan psikososial yang stabil, tindakan profesional wajib pekerja sosial adalah...', [
      'A. Memutuskan komunikasi seketika pada hari itu juga tanpa pesan perpisahan maupun sesi evaluasi perkembangan bersama klien',
      'B. Terus memperpanjang status ketergantungan bantuan tunai darurat hingga sepuluh tahun meski keluarga sudah mampu mandiri',
      'C. Evaluasi hasil bersama klien, siapkan rencana *aftercare* rujukan komunitas, serta akhiri relasi secara terencana',
      'D. Meminta keluarga klien menyerahkan hadiah tanda terima kasih bernilai ekonomi kepada pekerja sosial sebagai bukti sukses',
      'E. Memindahkan berkas klien langsung ke kategori penerima bantuan panti jompo tanpa melakukan verifikasi ulang kondisi rumah'
    ], 2, 'Terminasi sehat = terencana bersama klien, apresiasi keberhasilan, susun jaring pengaman lanjutan (rujukan komunitas/alumni), hindari ketergantungan permanen ataupun pemutusan mendadak!', 'Terminasi bukan memutus hubungan secara mendadak yang memicu kecemasan kambuh, melainkan transisi terstruktur menuju keberfungsian sosial mandiri.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-13', 'Dalam wawancara asesmen kasus kekerasan terhadap perempuan atau anak, teknik komunikasi terapeutik berupa *empati aktif (active empathy)* dibanding sekadar *simpati* ditunjukkan pekerja sosial dengan cara...', [
      'A. Ikut menangis meraung-raung di depan klien atau melontarkan ucapan kasihan menyalahkan mengapa korban mau menuruti pelaku',
      'B. Memotong cerita klien setelah dua menit guna menasihatinya bersabar menerima keadaan rumah tangga demi nama baik tetangga',
      'C. Menyatakan masalah klien masih ringan dibanding pengalaman kasus klien lain kemarin yang menurut petugas lebih menyedihkan',
      'D. Mendengarkan tanpa menghakimi, memvalidasi emosi dari sudut pandang klien, sambil menjaga batas profesional',
      'E. Merekam pengakuan pribadi korban secara diam-diam tanpa izin guna diserahkan sebagai bahan laporan kinerja kepada atasan'
    ], 3, 'Empati vs Simpati (Brené Brown / Peksos): Empati = memahami kerangka rasa klien secara hadir aktif + non-judgmental + tetap jernih profesional; Simpati = merasa iba/kasihan berjarak atau larut emosional!', 'Empati aktif tanpa sikap menyalahkan (non-victim blaming) adalah syarat mutlak terbangunnya relasi pertolongan profesional yang aman dan efektif.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-14', 'Apabila seorang klien dengan gangguan jiwa berat (ODGJ) membutuhkan rujukan penanganan medis psikiatri di RSJ sekaligus keluarga membutuhkan edukasi pola pengasuhan dan bantuan kartu BPJS-PBI, peran pekerja sosial yang paling tepat dalam sistem layanan terintegrasi ini adalah sebagai...', [
      'A. Broker dan Case Manager (menghubungkan klien ke sistem sumber layanan medis, jaminan sosial, serta keluarga)',
      'B. Dokter spesialis kedokteran jiwa yang berwenang menulis langsung resep dosis obat psikotropika keras untuk klien ODGJ',
      'C. Hakim tunggal pengadilan negeri yang memutuskan pencabutan hak perwalian harta keluarga klien secara sepihak tanpa sidang',
      'D. Aparat keamanan bersenjata yang langsung memasung atau menahan klien di dalam sel tertutup selama enam bulan berturut-turut',
      'E. Petugas loket perbankan daerah yang menetapkan besaran pinjaman modal berbunga komersial untuk usaha keluarga klien'
    ], 0, 'Peran Inti Peksos di luar terapi langsung = BROKER (menghubungkan klien ke sistem sumber seperti BPJS/RS/Dukcapil) & CASE MANAGER (orkestrasi lintas layanan) + ENABLER + ADVOKAT!', 'Pekerja sosial tidak menggantikan peran klinis psikiater, melainkan memastikan seluruh mata rantai layanan medis, administratif kependudukan, dan dukungan sosial keluarga terhubung lancar.'],
    ['Metode Praktik Pekerjaan Sosial (Casework, Groupwork, CD)', 'sos-v58-15', 'Dalam asesmen visual jaringan dukungan keluarga, alat bantu bernama *Eco-map* berbeda fungsinya dengan *Genogram* karena...', [
      'A. Eco-map hanya digunakan untuk menghitung total luas kebun pekarangan pertanian desa di wilayah terpencil kepulauan',
      'B. Genogram khusus mencatat daftar mutasi rekening tabungan seluruh anggota keluarga dalam kurun waktu lima tahun terakhir',
      'C. Eco-map hanya boleh dibuat setelah klien dinyatakan pulih sepenuhnya dan seluruh layanan manajemen kasus resmi ditutup',
      'D. Keduanya sama-sama melarang pencantuman kekuatan dukungan positif dan hanya mencatat catatan riwayat konflik keluarga saja',
      'E. Genogram memetakan riwayat keluarga lintas generasi; Eco-map memetakan relasi klien dengan lingkungan eksternal'
    ], 4, 'Alat Diagram Asesmen Klasik Peksos: Genogram = pohon keluarga 3 generasi + pola relasi/penyakit internal; Eco-map = peta relasi eksternal klien ↔ sekolah, tempat kerja, agama, puskesmas, bansos!', 'Memadukan Genogram dan Eco-map memperlihatkan sekaligus dinamika internal lintas generasi serta kekuatan maupun beban relasi klien di lingkungan sosialnya.'],

    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-16', 'Dalam pengecekan akurasi penargetan bantuan sosial di basis data nasional (DTKS/DTSEN), istilah *Inclusion Error* dan *Exclusion Error* merujuk secara berurutan pada kondisi...', [
      'A. Inclusion Error = bantuan diterima tepat di bulan Januari; Exclusion Error = bantuan cair terlambat dua hari di bulan berikutnya',
      'B. Inclusion Error = rumah tangga mampu malah masuk penerima; Exclusion Error = keluarga miskin terlewat tidak tercatat',
      'C. Inclusion Error = seluruh warga desa tercatat dalam sensus; Exclusion Error = data keluarga kaya tidak dipublikasi media',
      'D. Kedua istilah statistik penargetan sosial itu hanya merujuk pada kegagalan cetak kartu Anjungan Tunai Mandiri (ATM) di bank',
      'E. Exclusion Error berarti penyaluran bantuan tunai sengaja dialihkan menjadi bantuan sembako pangan bernutrisi lokal daerah'
    ], 1, 'Jangan tertukar dua galat target bansos! INCLUSION error = salah MASUK (orang kaya/tidak layak malah dapat); EXCLUSION error = kelewat KELUAR (orang miskin tak dapat)!', 'Pemutakhiran rutin lewat Musyawarah Desa/Kelurahan serta fitur Usul–Sanggah aplikasi Cek Bansos dirancang untuk memangkas baik inclusion error maupun exclusion error.'],
    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-17', 'Mekanisme verifikasi dan validasi pemutakhiran data penerima bantuan sosial tingkat paling awal di pemerintahan desa/kelurahan wajib melalui forum sah yang melibatkan tokoh masyarakat, RT/RW, dan pendamping sosial berupa...', [
      'A. Penentuan sepihak secara tertutup oleh satu petugas kecamatan tanpa melihat kondisi faktual rumah maupun aset warga di desa',
      'B. Pemungutan biaya administrasi wajib di setiap rukun warga sebagai syarat mutlak masuk daftar usulan penerima bantuan pangan',
      'C. Musyawarah Desa/Kelurahan (Musdes/Muskel) berberita acara resmi sebelum ditetapkan kepala daerah',
      'D. Penghapusan otomatis nama warga yang memiliki telepon genggam biasa tanpa kunjungan verifikasi kondisi sosial ekonomi rumah',
      'E. Penyerahan kuota penuh penerima bantuan sosial kepada kelompok pendukung calon kepala daerah pada masa menjelang pilkada'
    ], 2, 'Kunci tata kelola DTKS/DTSEN Kemensos: Musdes/Muskel transparan + verivali geospasial (geotagging foto rumah) + usulan berjenjang Dinas Sosial ke Bupati/Wali Kota & Kemensos!', 'Musdes/Muskel menjadi forum kontrol sosial warga tingkat akar rumput untuk memverifikasi kelayakan, mencatat warga meninggal/pindah, dan mengusulkan keluarga miskin baru.'],
    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-18', 'Program Keluarga Harapan (PKH) tergolong *Conditional Cash Transfer (CCT)* karena penyaluran bantuan tunainya mengikat Keluarga Penerima Manfaat (KPM) untuk memenuhi kewajiban verifikasi komitmen pada komponen...', [
      'A. Membeli kendaraan bermotor baru minimal satu unit setiap dua tahun sebagai bukti peningkatan mobilitas ekonomi keluarga',
      'B. Menyerahkan sebagian dana tunai bulanan bantuan kepada ketua kelompok sebagai uang keamanan wilayah desa',
      'C. Melarang anggota keluarga penerima bantuan bekerja di sektor formal perkotaan selama masa kepesertaan masih aktif',
      'D. Kesehatan (bumil/balita ke faskes), Pendidikan (kehadiran anak sekolah), dan Kesejahteraan Sosial (lansia/disabilitas)',
      'E. Membangun rumah bertingkat beton dalam waktu enam bulan setelah pencairan dana bantuan tahap pertama masuk rekening'
    ], 3, 'PKH = Bantuan Tunai BERSYARAT (CCT) → 3 Komponen Verifikasi Komitmen: Kesehatan (bumil/balita), Pendidikan (anak SD/SMP/SMA absen min 85%), & Kessos (Lansia 60+/Disabilitas Berat)!', 'Tujuan CCT tidak sekadar menutup kebutuhan konsumsi saat ini, melainkan memutus rantai kemiskinan antargenerasi lewat investasi wajib gizi, kesehatan, dan pendidikan anak.'],
    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-19', 'Kegiatan pertemuan bulanan kelompok KPM PKH yang dipandu oleh pendamping sosial menggunakan modul pengasuhan anak, pengelolaan keuangan keluarga, kesehatan gizi pencegah stunting, serta kewirausahaan dikenal secara resmi dengan istilah...', [
      'A. P2K2 (Pertemuan Peningkatan Kemampuan Keluarga) / FDS',
      'B. Rapat Paripurna Penyusunan Anggaran Pendapatan dan Belanja Daerah Tingkat Kabupaten dan Kota',
      'C. Audit Investigatif Pemeriksaan Pengelolaan Keuangan oleh Badan Pemeriksa Keuangan tingkat provinsi',
      'D. Pelatihan Taktik Penanggulangan Huru-Hara bagi relawan satuan keamanan lingkungan perumahan desa',
      'E. Musyawarah Penetapan Tarif Pajak Bumi dan Bangunan Perkotaan khusus bagi kawasan sektor niaga'
    ], 0, 'Hafal akronim PKH: P2K2 / FDS = sesi edukasi bulanan perubahan perilaku (Ekonomi, Pengasuhan Anak, Kesehatan/Stunting, Perlindungan Anak, Kesos Lansia-Disabilitas)!', 'P2K2 berperan strategis mengubah pola pikir KPM menuju kemandirian ekonomi dan pengasuhan sehat sebagai bekal menuju graduasi PKH.'],
    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-20', 'Keluarga Penerima Manfaat (KPM) PKH yang dinyatakan telah mampu secara ekonomi mandiri atau komponen keluarganya sudah tidak memenuhi syarat (misal anak terakhir sudah lulus SMA) sehingga berhenti menerima bantuan secara sukarela berprestasi disebut mengalami...', [
      'A. Inclusion error kronis akibat data kependudukan tidak dimutakhirkan oleh operator dinas sosial kabupaten',
      'B. Diskualifikasi pidana karena melanggar aturan pelaporan pajak daerah di kantor pelayanan kecamatan',
      'C. Pengalihan paksa menjadi penghuni panti rehabilitasi sosial lanjut milik pemerintah tingkat provinsi',
      'D. Pembekuan seluruh data nomor induk kependudukan anggota keluarga pada dinas kependudukan catatan sipil',
      'E. Graduasi Mandiri atau Graduasi Alamiah sesuai kondisi berakhirnya syarat bantuan'
    ], 4, 'Graduasi PKH: 1) Graduasi Sejahtera Mandiri (ekonomi sudah mampu, berdaya, bisa lanjut ke program kewirausahaan/PENA); 2) Graduasi Alamiah (komponen persyaratan sudah habis, misal anak lulus sekolah)!', 'Program Pemberdayaan Sosial Kemensos seperti PENA (Pahlawan Ekonomi Nusantara) mendampingi KPM siap graduasi mandiri agar tak jatuh kembali ke bawah garis kemiskinan.'],
    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-21', 'Pada penyaluran Program Sembako / BPNT (Bantuan Pangan Non Tunai), prinsip pemanfaatan dana bantuan yang tepat diarahkan agar keluarga penerima membelanjakan dananya untuk...', [
      'A. Rokok, minuman beralkohol, pulsa hiburan permainan daring, serta berbagai jenis barang perhiasan konsumtif lainnya',
      'B. Pembayaran cicilan kredit sepeda motor pribadi agar transportasi harian anggota keluarga berjalan lancar setiap pagi',
      'C. Bahan pangan sumber karbohidrat, protein hewani/nabati, serta sayur-buah bergizi seimbang',
      'D. Bahan bakar minyak kendaraan eceran atau perlengkapan kosmetik bermerk di gerai pusat perbelanjaan modern kota',
      'E. Pembelian peralatan bahan konstruksi renovasi pagar depan rumah tinggal dari toko bangunan terdekat rumah warga'
    ], 2, 'Pedoman Program Sembako / BPNT = Penuhi gizi seimbang (karbohidrat, protein hewani/nabati, vitamin) guna cegah stunting — HARAM untuk rokok, miras, atau barang non-pangan!', 'Ketentuan BPNT melarang tegas penukaran dana bantuan pangan dengan rokok atau barang non-pangan guna menjaga ketahanan gizi kelompok rentan.'],
    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-22', 'Peserta Penerima Bantuan Iuran Jaminan Kesehatan Nasional (PBI-JKN) yang iurannya dibayarkan pemerintah pusat melalui Kemensos/APBN berhak mendapatkan manfaat pelayanan kesehatan di fasilitas kesehatan tingkat pertama maupun rujukan sesuai sistem rujukan berjenjang tanpa dikenai iuran bulanan. Apabila seorang peserta PBI-JKN mendapati status kepesertaannya dinonaktifkan karena perbaikan padanan data NIK (misal perubahan data kependudukan), sementara yang bersangkutan masih miskin dan butuh rawat inap mendadak, mekanisme solusi cepatnya adalah...', [
      'A. Memaksa keluarga pasien membayar denda keterlambatan iuran lima tahun sekaligus secara tunai di loket puskesmas',
      'B. Menyuruh keluarga pasien menunggu tiga tahun penuh hingga pelaksanaan sensus penduduk nasional berikutnya dibuka',
      'C. Mengharuskan pasien mengganti status domisili kewarganegaraan menjadi penduduk sementara desa tetangga dahulu',
      'D. Surat keterangan butuh layanan + rekomendasi Dinsos daerah untuk reaktivasi PBI-JKN / PBPU Pemda',
      'E. Mengajukan permohonan penghapusan langsung seluruh fasilitas ruang rawat inap di rumah sakit umum daerah'
    ], 3, 'Reaktivasi PBI-JKN (Permensos 21/2019 & pembaruan): surat keterangan butuh layanan dari RS + rekomendasi Dinas Sosial daerah → dapat direaktivasi (atau dialihkan ke PBPU Pemda/UHC)!', 'Koordinasi cepat antara Dinas Sosial, Dukcapil (padanan NIK aktif), dan BPJS Kesehatan menjamin warga miskin yang membutuhkan layanan medis mendesak tetap terlindungi hak kesehatannya.'],
    ['Data Kemiskinan (DTSEN/DTKS), PKH, BPNT & PBI-JKN', 'sos-v58-23', 'Dalam pemadanan Data Terpadu Kesejahteraan Sosial (DTKS/DTSEN), integrasi kewajiban pencocokan Nomor Induk Kependudukan (NIK) dengan database SIAK Ditjen Dukcapil bertujuan krusial untuk mencegah persoalan...', [
      'A. Data ganda, data fiktif (meninggal masih aktif), serta gagal salur akibat ketidakcocokan identitas',
      'B. Kelebihan pasokan cadangan beras di gudang logistik nasional milik badan urusan pangan pemerintah pusat',
      'C. Keterlambatan pembayaran gaji aparatur sipil negara di kementerian keuangan pusat setiap awal bulan kerja',
      'D. Terlalu membludaknya jumlah lulusan perguruan tinggi yang mendaftar pada seleksi aparatur sipil negara',
      'E. Peningkatan otomatis tarif dasar listrik pelanggan rumah tangga berdaya listrik tinggi di kawasan perkotaan'
    ], 0, 'Integrasi NIK-Dukcapil + DTKS/DTSEN = single identity membersihkan data ganda, data meninggal, & mempermudah bantuan tepat sasaran (cashless KKS tanpa gagal transfer)!', 'Validasi NIK padan Dukcapil merupakan prasyarat wajib penyaluran bansos modern agar akurat, transparan, dan terhindar dari temuan audit BPK.'],

    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-24', 'Menurut Undang-Undang Nomor 35 Tahun 2014 tentang Perubahan atas UU Perlindungan Anak, empat klaster utama hak anak berdasarkan Konvensi Hak Anak yang wajib dipenuhi negara, keluarga, dan masyarakat meliputi...', [
      'A. Hak Bekerja di Sektor Tambang Berat, Hak Memilih di Pemilu Usia 10 Tahun, Hak Membeli Properti, dan Menikah Dini',
      'B. Hak Mendapat Gaji Penuh Pemerintah, Hak Kebal Hukum di Jalan Raya, Hak Mengatur APBD Desa, dan Hak Cuti Kerja',
      'C. Hak Mendapatkan Warisan Tunai, Hak Menolak Pendidikan Dasar Wajib, Hak Berdagang Bebas Pajak, dan Memilih Kota',
      'D. Hak Memiliki Kendaraan Pribadi, Hak Mengakses Kredit Komersial Bank, Hak Mendirikan Partai, serta Hak Cuti Tahunan',
      'E. Hak Hidup, Hak Tumbuh Kembang, Hak Perlindungan, serta Hak Partisipasi'
    ], 4, '4 Prinsip & Klaster Hak Anak (KHA & UU Perlindungan Anak): 1. Hidup, 2. Tumbuh Kembang, 3. Perlindungan, 4. Partisipasi (didengar pendapatnya sesuai usia)!', 'Sistem perlindungan anak berbasis empat hak dasar tersebut memastikan anak berkembang utuh dalam lingkungan keluarga atau pengasuhan alternatif yang aman.'],
    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-25', 'Berdasarkan UU Nomor 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA), konsep *Diversi* yang wajib diupayakan pada tingkat penyidikan, penuntutan, dan pengadilan bagi anak yang berhadapan dengan hukum (memenuhi syarat ancaman pidana < 7 tahun dan bukan pengulangan) bermakna...', [
      'A. Pemindahan penahanan anak langsung ke lembaga pemasyarakatan dewasa bersama narapidana kasus kejahatan berat',
      'B. Pengalihan penyelesaian perkara anak ke luar proses pengadilan melalui keadilan restoratif',
      'C. Peningkatan durasi masa hukuman penjara dua kali lipat lebih berat dibandingkan ancaman pidana bagi orang dewasa',
      'D. Penyiaran wajah serta identitas lengkap anak pelaku secara terbuka melalui siaran langsung stasiun televisi nasional',
      'E. Penghentian hak sekolah anak pelaku tindak pidana secara permanen di seluruh sekolah negeri maupun swasta'
    ], 1, 'UU SPPA 11/2012: Diversi = alihkan dari proses pengadilan pidana ke luar peradilan lewat musyawarah Keadilan Restoratif (cegah stigma kriminal permanen pada anak)!', 'Pendekatan keadilan restoratif mengutamakan pemulihan keadaan semula dan pembinaan anak melalui peran keluarga, pekerja sosial (litmas Bapas/Peksos), dan korban secara adil.'],
    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-26', 'Berdasarkan urutan hierarki prioritas *Pengasuhan Alternatif* bagi anak yang terpisah dari orang tua kandung sesuai PP Nomor 44 Tahun 2017 dan UU Perlindungan Anak, pilihan paling akhir (*last resort*) yang semestinya dipilih pekerja sosial jika pengasuhan berbasis keluarga tidak memungkinkan adalah...', [
      'A. Mengembalikan anak sesegera mungkin kepada nenek atau kerabat dekat (*kinship care*) yang terbukti aman dan layak',
      'B. Pengangkatan anak (*adopsi*) yang sah berdasarkan penetapan pengadilan demi kepentingan terbaik bagi masa depan anak',
      'C. Pengasuhan sementara oleh keluarga pengasuh (*foster care*) terlatih yang terus dipantau berkala oleh dinas sosial',
      'D. Pengasuhan di Lembaga Kesejahteraan Sosial Anak (panti) sesudah opsi berbasis keluarga tak mungkin',
      'E. Penguatan kapasitas ekonomi keluarga kandung dan konseling orang tua agar tetap sanggup mengasuh anak sendiri di rumah'
    ], 3, 'Hierarki Pengasuhan Anak: 1. Keluarga Kandung (cegah pemisahan!) → 2. Kerabat terdekat (Kinship Care) → 3. Keluarga Asuh (Foster Care) / Perwalian / Adopsi → Paling Terakhir: Panti (LKSA)!', 'Penelitian perkembangan anak membuktikan pengasuhan berbasis keluarga jauh lebih sehat bagi perkembangan emosi dan sosial anak dibanding pengasuhan institusional panti.'],
    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-27', 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas menuntut perubahan paradigma dari pendekatan *Charity-Based* (belas kasihan semata) menuju pendekatan berbasis Hak Asasi Manusia. Salah satu wujud nyata kewajiban layanan publik pemerintah sesuai prinsip *Akomodasi yang Layak* (*Reasonable Accommodation*) adalah...', [
      'A. Menyediakan penyesuaian sarana aksesibel (ramp, juru bahasa isyarat, braille) agar partisipasi setara',
      'B. Memberikan sedekah uang receh di perempatan jalan raya sambil membiarkan gedung pelayanan publik tetap bertangga curam',
      'C. Melarang seluruh penyandang disabilitas memasuki gedung kantor pemerintah dengan alasan menghindari risiko jatuh di tangga',
      'D. Memisahkan sekolah seluruh anak tunanetra atau disabilitas ringan agar tidak pernah berinteraksi dengan warga masyarakat',
      'E. Mewajibkan penyandang disabilitas membayar tarif penggandaan biaya pendamping pribadi di setiap meja loket administrasi'
    ], 0, 'UU 8/2016 Penyandang Disabilitas: paradigmanya Rights-Based! Wajib penuhi Aksesibilitas Universal + Akomodasi yang Layak (4 ragam disabilitas: Fisik, Intelektual, Mental, Sensorik)!', 'Akomodasi yang layak memastikan hambatan lingkungan dihilangkan sehingga penyandang disabilitas dapat mengakses pendidikan, pekerjaan, serta pelayanan publik setara warga lain.'],
    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-28', 'Dalam Undang-Undang Nomor 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS), perubahan hukum terpenting terkait proses pemeriksaan serta pelindungan korban kekerasan seksual yang wajib dikawal oleh pekerja sosial dan Unit Pelaksana Teknis Daerah Perlindungan Perempuan dan Anak (UPTD PPA) adalah...', [
      'A. Mewajibkan korban berdamai dan dinikahkan paksa dengan pelaku apabila disetujui oleh kepala desa dan tokoh kampung',
      'B. Hak penanganan/pemulihan korban sejak pelaporan, larangan damai di luar pengadilan, serta restitusi',
      'C. Menolak seluruh laporan pengaduan korban apabila tidak membawa dua saksi kejadian beserta hasil visum dalam dua jam',
      'D. Mengharuskan korban menjelaskan detail kejadian di ruang terbuka di depan pelaku tanpa pendamping psikolog maupun peksos',
      'E. Menghapus kewajiban pelaku mengganti kerugian restitusi penderitaan korban walaupun telah terbukti bersalah di sidang'
    ], 1, 'Terobosan UU TPKS 12/2022: DILARANG diselesaikan di luar proses peradilan (tak ada damai/nikah paksa!), alat bukti keterangan korban + visum psikologis/saksi diakui, serta hak Restitusi & Pemulihan (UPTD PPA)!', 'UU TPKS melarang penyelesaian di luar pengadilan agar pelaku jera sekaligus menjamin pemulihan psikologis, medis, hukum, dan ekonomi korban secara bermartabat.'],
    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-29', 'Sesuai Undang-Undang Nomor 13 Tahun 1998 tentang Kesejahteraan Lanjut Usia dan Perpres Nomor 88 Tahun 2021 tentang Strategi Nasional Kelanjutusiaan, batasan usia seseorang didefinisikan sebagai lanjut usia di Indonesia serta pembagian layanan bagi lansia potensial vs lansia tidak potensial adalah...', [
      'A. Berusia 75 tahun ke atas saja; seluruh lansia wajib dipisahkan dari keluarga untuk tinggal di panti werdha pemerintah',
      'B. Berusia 45 tahun ke atas; seluruh warga langsung dihentikan hak kerjanya serta dicabut hak pilih di pemilu nasional',
      'C. Usia >= 60 tahun; lansia potensial diberdayakan produktif, sedangkan tak potensial mendapat perawatan panjang',
      'D. Hanya lansia berusia di atas 80 tahun tanpa ahli waris yang boleh mengakses layanan puskesmas ramah lansia kecamatan',
      'E. Lansia tidak potensial wajib mengikuti latihan militer cadangan bersenjata sebelum berhak menerima bantuan alat bantu'
    ], 2, 'UU 13/1998 Lansia = usia 60 tahun ke atas! Bedakan Lansia Potensial (berdayakan/aktif menua) vs Lansia Tidak Potensial (jaminan hidup + layanan perawatan jangka panjang/home care berbasis keluarga/panti)!', 'Strategi Nasional Kelanjutusiaan mengutamakan lansia tetap tinggal sehat bermartabat di tengah keluarga/komunitas (aging in place) dengan dukungan perawatan dan jaminan hidup.'],
    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-30', 'Prinsip utama layanan sosial dalam menghadapi laporan kasus penelantaran anak akibat kemiskinan akut di mana orang tua kandung sebenarnya sangat menyayangi anaknya namun terhimpit kebutuhan ekonomi disebut prinsip *Family Preservation* (Pelestarian Keluarga), yang diwujudkan melalui...', [
      'A. Langsung mengambil paksa seluruh anak dari keluarga miskin hari itu dan melarang orang tua menemui mereka lima tahun',
      'B. Menyuruh keluarga menjual rumah tinggal satu-satunya tanpa mencarikan intervensi jaminan sosial pemerintah daerah',
      'C. Membiarkan anak berhenti sekolah dasar untuk bekerja penuh di jalanan membantu orang tua mencari nafkah harian',
      'D. Menggugat orang tua ke pengadilan pidana semata karena penghasilan bulanannya di bawah garis kemiskinan kota',
      'E. Menguatkan kapasitas keluarga (bansos, sekolah, pengasuhan) agar anak tetap tumbuh di pelukan orang tua'
    ], 4, 'Kemiskinan BUKAN alasan memisahkan anak dari orang tua yang peduli! Prinsip Family Preservation = bantu ekonominya & perkuat pengasuhan keluarganya di rumah!', 'Memisahkan anak semata karena kemiskinan justru menambah trauma; tugas pekerja sosial adalah menghubungkan keluarga ke jaring pengaman sosial dan pemberdayaan ekonomi.'],
    ['Perlindungan Anak, Disabilitas, Lansia & UU TPKS', 'sos-v58-31', 'Undang-Undang Nomor 21 Tahun 2007 tentang Pemberantasan Tindak Pidana Perdagangan Orang (TPPO) mengidentifikasi kerentanan ekonomi warga desa sebagai pintu masuk perekrutan pekerja migran ilegal berjerat utang. Bentuk peran pencegahan dan pemulihan utama pekerja sosial menghadapi kasus penyintas TPPO meliputi...', [
      'A. Menahan paspor warga desa secara sewenang-wenang dan melarang siapa pun pindah mencari kerja di luar daerah selamanya',
      'B. Mengembalikan paksa penyintas TPPO kepada agen perekrut ilegal agar utang perjalanan yang ditagihkan dapat segera lunas',
      'C. Menyalahkan korban karena dianggap serakah mencari penghasilan besar di luar daerah tanpa pendampingan psikososial',
      'D. Sosialisasi migrasi aman, rehabilitasi trauma di RPTC, serta reintegrasi sosial-ekonomi penyintas',
      'E. Menutup seluruh layanan pembuatan dokumen paspor resmi di kantor imigrasi bagi seluruh warga kawasan pedesaan'
    ], 3, 'Pencegahan & Penanganan TPPO: edukasi migrasi aman/prosedural + evakuasi/rehabilitasi di RPTC + reintegrasi keluarga/ekonomi tanpa stigma!', 'Korban perdagangan orang (termasuk jerat utang dan eksploitasi) dilindungi undang-undang sebagai korban yang berhak atas perlindungan hukum, rehabilitasi trauma di RPTC, dan reintegrasi tanpa diskriminasi.'],

    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-32', 'Dalam manajemen penanganan bencana bidang sosial oleh Kementerian Sosial bersama Taruna Siaga Bencana (TAGANA), peran klaster Layanan Dukungan Psikososial (LDP) pada fase tanggap darurat pengungsian berfokus pada kegiatan...', [
      'A. Pembangunan ulang bendungan beton bertulang berkapasitas besar serta pengaspalan jalan raya utama antarkecamatan',
      'B. Pemulihan kondisi psikologis penyintas (anak/lansia/rentan) lewat konseling, ruang ramah anak, & solidaritas',
      'C. Pemadaman titik api kebakaran hutan skala luas menggunakan pesawat pembom air dari bandara provinsi setempat',
      'D. Pengukuran batas wilayah hukum laut teritorial dua belas mil menggunakan kapal survei oseanografi nasional',
      'E. Pengawasan peredaran mata uang palsu di pasar tradisional kawasan perbatasan darat antarnegara secara berkala'
    ], 1, 'TAGANA + Peksos Bencana: Dapur Umum (logistik pangan) + Kampung Siaga Bencana (mitigasi warga) + LDP (Layanan Dukungan Psikososial untuk pulihkan trauma penyintas terutama anak & lansia)!', 'Selain pemenuhan kebutuhan logistik dapur umum dan tenda, layanan dukungan psikososial mencegah berkembangnya trauma berkepanjangan (PTSD) pada anak dan kelompok rentan pengungsi.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-33', 'Konsep *Kampung Siaga Bencana (KSB)* yang dibentuk di wilayah rawan bencana mengedepankan prinsip pemberdayaan masyarakat karena...', [
      'A. Warga lokal terlatih memetakan evakuasi, mengelola lumbung sosial, serta merespons cepat di fase awal',
      'B. Seluruh warga desa dilarang mengetahui jalur titik kumpul evakuasi agar tidak panik sebelum instruksi pejabat tiba',
      'C. Semua lumbung pangan dan peralatan evakuasi dikunci rapat di kantor kementerian pusat sejauh ratusan kilometer dari desa',
      'D. Masyarakat tak perlu dilibatkan sedikit pun karena penanganan tanggap bencana sepenuhnya tanggung jawab militer bersenjata',
      'E. Penduduk diwajibkan merobohkan bangunan rumah kayu tradisional tahan gempa dan menggantinya dengan beton tanpa tulangan'
    ], 0, 'Kampung Siaga Bencana (KSB) = Kesiapsiagaan berbasis KOMUNITAS (Lumbung Sosial + Tim Reaksi Warga Lokal sebagai first responder sebelum bantuan kabupaten tiba)!', 'Pada "golden hour" pasca-bencana, kesiapan warga sekitar melalui KSB dan lumbung logistik sosial setempat paling menentukan keselamatan jiwa dan kecepatan pertolongan pertama.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-34', 'Berdasarkan Undang-Undang Nomor 7 Tahun 2012 tentang Penanganan Konflik Sosial, pasca terjadinya konflik sosial antarkelompok masyarakat di suatu daerah, peran spesifik pekerja sosial dan pemerintah daerah pada tahap *Pemulihan Pascakonflik* mencakup tiga bidang kunci berupa...', [
      'A. Pemberlakuan jam malam permanen selama sepuluh tahun penuh disertai penutupan menyeluruh seluruh pasar tradisional daerah',
      'B. Pemindahan seluruh warga satu kecamatan ke pulau tidak berpenghuni tanpa dialog ataupun ganti kerugian aset sama sekali',
      'C. Rekonsiliasi hubungan sosial, Rehabilitasi psikososial/layanan dasar, dan Rekonstruksi prasarana warga',
      'D. Penyerahan penuh seluruh konflik tanah adat warga untuk diselesaikan melalui duel terbuka antarperwakilan pemuda desa',
      'E. Penghapusan anggaran pemberdayaan pemuda lintas komunitas agar kelompok berbeda tidak pernah saling bertemu kembali'
    ], 2, 'UU 7/2012 Penanganan Konflik Sosial: 1. Pencegahan → 2. Penghentian Konflik → 3. Pemulihan Pascakonflik (3R: Rekonsiliasi, Rehabilitasi, Rekonstruksi)!', 'Pendekatan rekonsiliasi sosial dan rehabilitasi psikososial/ekonomi memulihkan kepercayaan antarkelompok (social cohesion) agar konflik tidak kembali meletus.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-35', 'Dalam penguatan kohesi sosial untuk mencegah keretakan dan konflik horizontal pada masyarakat multikultural, modal sosial (*social capital*) yang paling kuat menyatukan kelompok berbeda suku/agama menurut teori Robert Putnam dan praktik pekerja sosial adalah...', [
      'A. *Exclusive Bonding* yang menutup rapat pergaulan anggota satu suku sehingga memandang rendah warga luar kelompoknya',
      'B. Penyebaran isu kecurigaan ekonomi antarwarga pendatang dan penduduk asli melalui grup percakapan pribadi lingkungan',
      'C. Penyeragaman paksa seluruh rumah ibadah, pakaian adat, dan bahasa daerah menjadi satu bentuk seragam tunggal daerah',
      'D. *Bridging Social Capital* (relasi kerja sama lintas identitas) dilengkapi *Linking* dengan negara',
      'E. Penghapusan seluruh forum musyawarah warga lintas RT dengan menggantikannya oleh sistem komunikasi satu arah saja'
    ], 3, 'Tiga Modal Sosial Peksos: Bonding (ikatan dalam kelompok mirip), BRIDGING (jembatan antar kelompok BERBEDA — pemersatu majemuk!), Linking (hubungan warga ke institusi berwenang/pemerintah)!', 'Modal sosial menjembatani (bridging) membangun empati, kepercayaan, dan kerja sama produktif antarkelompok yang beragam sehingga meredam potensi gesekan identitas.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-36', 'Program pemberdayaan ekonomi masyarakat miskin tidak jarang gagal ketika hanya memberi hibah modal barang tanpa pendampingan usaha, penguatan manajemen kas, serta akses pasar (fenomena "bantuan habis dalam tiga bulan"). Untuk memutus siklus ini sesuai prinsip pemberdayaan berkesinambungan, pekerja sosial menerapkan pendekatan...', [
      'A. Membagikan uang tunai dalam jumlah berulang setiap bulan tanpa mengevaluasi pemanfaatan usahanya sedikit pun',
      'B. Menyuruh seluruh kelompok miskin mengambil kredit rentenir harian berbunga sangat tinggi di pasar tradisional setempat',
      'C. Menutup akses pelatihan keterampilan vokasi dengan anggapan masyarakat miskin tidak mampu belajar pembukuan sederhana',
      'D. Memungut kembali seluruh modal alat usaha sesudah dua minggu masa uji coba tanpa memberi pelatihan pengoperasian alat',
      'E. Pendampingan utuh (*mentoring*), literasi kas, wadah KUBE, serta kemitraan pasar dan modal mikro'
    ], 4, 'Pemberdayaan berkelanjutan = Aset/KUBE + Capacity Building (literasi keuangan & keterampilan) + Market/Finance Linkage (pendampingan menuju kemandirian)!', 'Skema kelompok (seperti KUBE atau inkubasi PENA) yang didampingi manajemen keuangan dan akses rantai pasok memastikan bantuan berputar produktif jangka panjang.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-37', 'Dalam menangani kasus kemiskinan struktural di kawasan kumuh perkotaan (seperti penggusuran ilegal atau ketidakadilan akses air bersih akibat ketiadaan status administratif lahan), peran pekerja sosial yang memperjuangkan perubahan kebijakan pemda melalui penyusunan naskah masukan regulasi dan koalisi warga disebut peran...', [
      'A. Advokasi Sosial (*Social Advocacy*) untuk membela hak kelompok rentan dalam kebijakan',
      'B. Psikoterapi klinik individual untuk menyalahkan diri sendiri agar warga pasrah menerima keadaan kumuh untuk selamanya',
      'C. Pengawasan konstruksi jalan tol bebas hambatan antarpelabuhan industri logistik ekspor milik perusahaan konglomerasi',
      'D. Penagih retribusi parkir liar di pusat pertokoan modern untuk membiayai kas internal yayasan sosial lingkungan lokal',
      'E. Pengambilalihan penuh fungsi panitia lelang pengadaan komputer perangkat lunak di kantor kementerian pemerintah pusat'
    ], 0, 'Kemiskinan Struktural (akibat aturan/akses sistem tak adil) dijawab dengan ADVOKASI SOSIAL & kebijakan inklusif, bukan sekadar konseling pribadi!', 'Pekerja sosial bertindak sebagai advokat kebijakan yang membawa suara dan data riil kelompok rentan ke pengambil keputusan guna memperjuangkan akses layanan dasar yang adil.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-38', 'Pendekatan *Community-Driven Development* (CDD) pada program pemberdayaan desa seperti pemanfaatan Dana Desa untuk ketahanan pangan dan penanganan kemiskinan ekstrem menekankan bahwa peran utama fasilitator pemberdayaan masyarakat adalah...', [
      'A. Menulis sendiri seluruh usulan kegiatan warga di kamar hotel kabupaten lalu memaksa kepala desa menandatangani laporan fiktif',
      'B. Memampukan warga lokal memegang kendali penyusunan prioritas, swakelola, hingga pengawasan program',
      'C. Menunjuk kontraktor luar kota untuk seluruh proyek padat karya tanpa melibatkan tenaga kerja warga miskin lokal',
      'D. Merahasiakan rincian pagu anggaran program pemberdayaan desa dari seluruh warga desa supaya tidak banyak yang mengkritik',
      'E. Memfokuskan seluruh dana pemberdayaan desa hanya untuk pembelian mobil dinas mewah aparatur pemerintahan kecamatan'
    ], 1, 'Inti CDD (Community-Driven Development): Warga = Subjek Pengendali (dari perencana, pelaksana swakelola, hingga pengawas akuntabilitas); Fasilitator = Pemungkin (*enabler*) bukan bos!', 'Ketika warga memutuskan, melaksanakan secara swakelola padat karya, dan mengawasi bersama, manfaat ekonomi berputar langsung di desa dan hasilnya dirawat bersama.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-39', 'Pada pendataan awal kerentanan bencana berbasis desa yang sering dilakukan penyuluh/pekerja sosial, rumus konseptual Risiko Bencana yang perlu dipahami agar intervensi sosial tepat sasaran adalah...', [
      'A. Risiko Bencana hanya bergantung pada kekuatan gempa bumi atau curah hujan tanpa dipengaruhi kondisi kemiskinan warga',
      'B. Risiko Bencana naik seiring Ancaman dan Kerentanan, serta ditekan dengan menaikkan Kapasitas warga',
      'C. Menambah kerentanan warga miskin dan mengurangi kapasitas pengetahuan warga justru akan menghilangkan risiko korban bencana',
      'D. Kapasitas kesiapsiagaan tidak pernah berhubungan sedikit pun dengan jumlah korban luka saat banjir melanda permukiman',
      'E. Bencana alam selalu berdampak sama rata terhadap pemilik gedung aman beton dan buruh miskin di bantaran sungai kota'
    ], 1, 'Rumus Kunci Kebencanaan: Risiko = (Ancaman × Kerentanan) ÷ Kapasitas! Tugas utama peksos = TURUNKAN Kerentanan (sosial/ekonomi) & NAIKKAN Kapasitas (KSB, edukasi, tabungan sosial)!', 'Bencana menjadi fatal bukan semata karena alam (hazard), tetapi karena tingginya kerentanan kelompok miskin/rentan dan rendahnya kapasitas kesiapsiagaan; keduanya bisa diintervensi pekerja sosial.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-40', 'Dalam program Bantuan Sosial Pahlawan Ekonomi Nusantara (PENA) Kemensos bagi keluarga miskin usia produktif yang ingin lulus dari ketergantungan bantuan reguler, syarat orientasi program terpenting yang ditekankan selain pemberian alat modal usaha adalah...', [
      'A. KPM diwajibkan menutup warung usahanya yang sudah ada dan hanya boleh menunggu pembagian beras bulanan seumur hidup',
      'B. Bantuan alat usaha modal langsung boleh dijual kembali menjadi uang tunai hari berikutnya untuk acara pesta perayaan keluarga',
      'C. KPM punya embrio usaha nyata, mengikuti mentoring intensif omzet, dan siap graduasi mandiri',
      'D. Sasaran utama program adalah aparatur sipil negara golongan senior yang hendak membuka investasi properti komersial di kota',
      'E. Peserta dilarang keras mencatat pemasukan dan pengeluaran harian usahanya agar terhindar dari pemeriksaan tenaga pendamping'
    ], 2, 'Program PENA Kemensos = akselerasi KPM usia produktif punya rintisan usaha + mentoring bisnis → omzet melebihi UMR/garis miskin → GRADUASI SEJAHTERA MANDIRI!', 'Pendekatan graduasi produktif (graduation approach) membekali modal alat usaha spesifik kebutuhan klien plus pendampingan bisnis hingga KPM keluar bermartabat dari ketergantungan bansos.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-41', 'Sebuah LSM sosial atau Yayasan yang menyelenggarakan pelayanan kesejahteraan sosial di daerah wajib memperoleh tanda daftar resmi (izin operasional LKS) dan memenuhi Standar Nasional Pengasuhan Anak (SNPA) atau Standar Pelayanan Minimal LKS dari Dinas Sosial/Kemensos karena...', [
      'A. Untuk memungut pajak pendapatan seratus persen dari setiap donasi makanan warga bagi anak yatim piatu di wilayah daerah',
      'B. Agar seluruh pengelola yayasan swasta otomatis diangkat menjadi pejabat struktural tanpa melalui seleksi aparatur sipil negara',
      'C. Supaya yayasan dilarang menerima sumbangan sukarela masyarakat maupun bermitra layanan dengan puskesmas pemerintah daerah',
      'D. Melindungi klien dari eksploitasi, menjamin mutu pengasuhan, serta membuka pembinaan akuntabilitas resmi',
      'E. Untuk memindahkan paksa seluruh anak panti asuhan lokal ke kota metropolitan agar tampak lebih modern di laporan tahunan'
    ], 3, 'Registrasi/Akreditasi LKS & SNPA menjamin kualitas layanan aman bagi PPKS (zero kekerasan/eksploitasi, transparansi donasi, standar SDM & gizi layak)!', 'Tanpa pengawasan standar pelayanan dan tanda daftar resmi dari pemerintah daerah/Kemensos, kelompok rentan di dalam panti swasta berisiko mengalami penelantaran atau penyalahgunaan donasi.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-42', 'Ketika menyusun Rencana Tindak Lanjut pada penanggulangan pekerja anak di sektor perkebunan dan jalanan, strategi pencegahan berlapis yang paling diakui secara internasional maupun nasional oleh pekerja sosial memadukan antara...', [
      'A. Penangkapan dan penahanan anak jalanan selama dua tahun di sel tahanan tanpa menyentuh kemiskinan orang tua maupun sekolah',
      'B. Pemutusan seluruh bantuan sosial pangan bagi keluarga yang ketahuan anaknya sempat membantu berjualan sepulang jam sekolah',
      'C. Pembiaran penuh dengan anggapan bahwa bekerja penuh waktu usia sembilan tahun adalah tradisi budaya lokal desa yang baik',
      'D. Penutupan seluruh sekolah dasar negeri di kawasan perkebunan supaya anak-anak langsung terbiasa melakukan pekerjaan fisik',
      'E. Akses & beasiswa sekolah (PKH/PIP/Atensi), pemberdayaan ekonomi orang tua, serta edukasi antieksploitasi'
    ], 4, 'Atasi Pekerja Anak dari AKARNYA: Beban ekonomi orang tua (bansos/pemberdayaan) + Akses sekolah (PIP/PKH/beasiswa) + Hukum larangan pekerjaan terburuk anak + Rehabilitasi Atensi!', 'Sekadar melakukan razia penertiban tanpa memulihkan ekonomi keluarga dan mengembalikan anak ke bangku sekolah hampir selalu membuat anak kembali ke jalanan dalam hitungan hari.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-43', 'Layanan terpadu Kemensos masa kini dengan konsep ATENSI (Asistensi Rehabilitasi Sosial) menggantikan pendekatan lama berbasis panti eksklusif menjadi konsep multifungsi yang berfokus pada...', [
      'A. Layanan berbasis keluarga, komunitas, dan residensial terakhir untuk pemenuhan hidup, terapi, dan vokasi',
      'B. Mengumpulkan seluruh PPKS se-Indonesia agar dipaksa menetap permanen seumur hidup di dalam asrama terisolasi dari warga',
      'C. Menghapus layanan alat bantu disabilitas seperti kursi roda maupun alat bantu dengar karena dianggap memakan anggaran negara',
      'D. Membatasi layanan hanya untuk penduduk kota besar di Pulau Jawa saja sambil menutup akses balai rehabilitasi kawasan timur',
      'E. Menyalurkan bantuan hanya dalam bentuk brosur informasi tercetak tanpa melakukan asesmen kebutuhan nyata tiap individu klien'
    ], 0, 'Konsep ATENSI (Permensos 16/2020): Keluarga & Komunitas FIRST, Residensial sentra LAST! Terintegrasi: hidup layak, terapi fisik/psikososial/mental-spiritual, vokasional, kewirausahaan & bantuan aksesibilitas!', 'ATENSI merespons kebutuhan unik tiap klaster klien (anak, disabilitas, lansia, korban bencana, kelompok rentan) secara fleksibel dan kolaboratif lewat Sentra/Sentra Terpadu serta Dinsos.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-44', 'Dalam evaluasi ketangguhan sosial menghadapi risiko krisis pangan dan perubahan iklim di desa pesisir, pekerja sosial bersama masyarakat membentuk "Lumbung Sosial Desa" serta skema tabungan darurat gotong royong berbasis kearifan lokal seperti *jimpitan* atau *perelek*. Strategi perlindungan berbasis masyarakat semacam ini penting karena...', [
      'A. Menggantikan seluruh kewajiban konstitusional negara menyediakan program jaminan kesehatan maupun perlindungan sosial nasional',
      'B. Menjadi bantalan darurat lokal (*community safety net*) responsif saat krisis dan pengikat solidaritas warga',
      'C. Mengumpulkan bahan pangan pokok hanya untuk dijual kembali dengan harga tinggi ketika tetangga mengalami gagal panen desa',
      'D. Mewajibkan hanya kelompok warga lanjut usia tidak mampu yang menyumbang ke lumbung persediaan desa setiap akhir pekan',
      'E. Melarang penyaluran bantuan beras cadangan nasional masuk ke desa tersebut ketika sedang terjadi bencana banjir bandang besar'
    ], 1, 'Jaring Pengaman Berbasis Komunitas (Lumbung Sosial / Jimpitan) MELENGKAPI program negara sebagai penopang respons awal cepat & pengikat kohesi sosial!', 'Sinergi antara jaminan sosial formal negara dan modal solidaritas masyarakat lokal (community resilience) membuat masyarakat lebih tangguh menghadapi krisis ekonomi maupun iklim.'],
    ['Pemberdayaan Masyarakat Desa, Konflik Sosial & Bencana', 'sos-v58-45', 'Sesuai amanat UU Kesejahteraan Sosial dan UU Pemerintahan Daerah, sinergi pendataan warga kurang mampu antara pekerja sosial/TKSK di kecamatan, Dinas Sosial, Dukcapil, dan Puskesmas/Sekolah dalam konsep *Sistem Layanan dan Rujukan Terpadu (SLRT)* di kabupaten/kota bertujuan untuk...', [
      'A. Mempersulit pengaduan masyarakat miskin dengan mengharuskan warga mengurus dua belas surat pengantar berbayar di provinsi',
      'B. Menolak seluruh laporan keluhan kesalahan data bansos agar angka persentase kemiskinan daerah terlihat bersih tanpa keluhan',
      'C. Layanan rujukan satu pintu daerah guna menghubungkan warga rentan ke program bansos, KIS, & KIP',
      'D. Memisahkan data kesehatan anak dari data sekolah agar setiap instansi bekerja sendiri-sendiri menjaga kerahasiaan antar-dinas',
      'E. Membatasi pelayanan pengaduan sosial hanya bisa diakses melalui pengajuan surat pengacara berbiaya tinggi di pengadilan negeri'
    ], 2, 'SLRT (Puskesos di desa + Sekretariat SLRT di Dinsos Kab/Kota) = One-Stop Referral! Integrasikan rujukan bansos, PBI-JKN, KIP, akta Dukcapil, & aduan masyarakat secara cepat!', 'Keberadaan Puskesos desa dan SLRT kabupaten memangkas birokrasi berbelit sehingga keluhan warga rentan tertangani terpadu lintas sektor secara cepat dan akuntabel.']
  ];

  const all = [
    ...build('SKB_TEKNIK', 'SKB', TEKNIK_PLUS),
    ...build('SKB_STATISTIK', 'SKB', STATISTIK_PLUS),
    ...build('SKB_SOSIAL', 'SKB', SOSIAL_PLUS)
  ];

  // Register per bucket neatly
  window.registerCPNSQuestions({ packId: 'skb_teknik_v58', bucket: 'SKB_TEKNIK', questions: all.filter(q => q.examType === 'SKB_TEKNIK') });
  window.registerCPNSQuestions({ packId: 'skb_statistik_v58', bucket: 'SKB_STATISTIK', questions: all.filter(q => q.examType === 'SKB_STATISTIK') });
  window.registerCPNSQuestions({ packId: 'skb_sosial_v58', bucket: 'SKB_SOSIAL', questions: all.filter(q => q.examType === 'SKB_SOSIAL') });
})();
