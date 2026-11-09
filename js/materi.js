/* ==========================================================================
   MATERI BELAJAR — mudah ditambah / diubah
   --------------------------------------------------------------------------
   Setiap topik:
   {
     id:      'unik-tanpa-spasi',
     group:   'TWK' | 'TIU' | 'TKP' | 'SKB',
     title:   'Judul topik',
     summary: 'Satu kalimat pengantar (tampil di kartu).',
     buckets: ['SKD_TWK'],            // (opsional) bank soal yang dipakai untuk contoh & latihan
     subs:    ['Pilar Negara - Pancasila'],  // (opsional) potongan teks "sub" soal di bank yang cocok
     sections:[ { title:'Judul bagian', html:'<p>isi HTML</p>' } ],
     tips:    ['Cara menjawab cepat 1', '...'],
     questions:[ { q:'...', options:['A. ..','B. ..'], ans:0, trick:'', explanation:'' } ] // (opsional) soal buatanmu
   }
   Contoh soal di halaman topik + tombol "Latihan soal topik ini" diambil otomatis
   dari bank soal (buckets + subs) ditambah soal di `questions`.
   ========================================================================== */

window.MATERI_GROUPS = [
  { id: 'TWK', name: 'TWK', full: 'Tes Wawasan Kebangsaan', desc: 'Pilar negara, nasionalisme, integritas, bahasa Indonesia.' },
  { id: 'TIU', name: 'TIU', full: 'Tes Intelegensia Umum', desc: 'Verbal, numerik, dan figural — plus rumus cepat.' },
  { id: 'TKP', name: 'TKP', full: 'Tes Karakteristik Pribadi', desc: 'Pola memilih jawaban bernilai 5 di enam aspek.' },
  { id: 'SKB', name: 'SKB', full: 'Seleksi Kompetensi Bidang', desc: 'Ringkasan kisi-kisi per formasi.' }
];

window.MATERI = [
  /* ============================ TWK ============================ */
  {
    id: 'pancasila', group: 'TWK', title: 'Pancasila: Sila, Lambang & Sejarah',
    summary: 'Bunyi dan lambang kelima sila, proses perumusan, serta kata kunci cepat untuk soal "sikap yang mencerminkan sila ke-…".',
    buckets: ['SKD_TWK'], subs: ['Pilar Negara - Pancasila'],
    sections: [
      { title: 'Bunyi, lambang, dan kata kunci tiap sila', html: `
        <table class="table table-sm">
          <thead><tr><th>Sila</th><th>Bunyi</th><th>Lambang</th><th>Kata kunci</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Ketuhanan Yang Maha Esa</td><td>Bintang</td><td>ibadah, toleransi beragama, kebebasan menjalankan agama</td></tr>
            <tr><td>2</td><td>Kemanusiaan yang Adil dan Beradab</td><td>Rantai</td><td>HAM, tolong-menolong, tidak diskriminatif, empati</td></tr>
            <tr><td>3</td><td>Persatuan Indonesia</td><td>Pohon beringin</td><td>cinta tanah air, gotong royong demi persatuan, bangga produk dalam negeri</td></tr>
            <tr><td>4</td><td>Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan</td><td>Kepala banteng</td><td>musyawarah, mufakat, menghargai pendapat, tidak memaksakan kehendak</td></tr>
            <tr><td>5</td><td>Keadilan Sosial bagi Seluruh Rakyat Indonesia</td><td>Padi dan kapas</td><td>adil, hak-kewajiban seimbang, kerja keras, hidup sederhana</td></tr>
          </tbody>
        </table>` },
      { title: 'Sejarah perumusan', html: `
        <ul>
          <li><b>29 Mei – 1 Juni 1945</b>: sidang pertama BPUPKI. Usulan dasar negara oleh Muh. Yamin (29 Mei), Soepomo (31 Mei), dan Soekarno (1 Juni, yang menyebut istilah <i>Pancasila</i>).</li>
          <li><b>22 Juni 1945</b>: Panitia Sembilan menghasilkan <b>Piagam Jakarta</b>.</li>
          <li><b>18 Agustus 1945</b>: PPKI mengesahkan UUD 1945; rumusan sila pertama menjadi "Ketuhanan Yang Maha Esa".</li>
          <li><b>1 Juni</b> = Hari Lahir Pancasila (Keppres 24/2016). <b>1 Oktober</b> = Hari Kesaktian Pancasila.</li>
        </ul>` },
      { title: 'Kedudukan dan nilai Pancasila', html: `
        <ul>
          <li>Dasar negara, pandangan hidup, ideologi nasional, sumber dari segala sumber hukum, dan pemersatu bangsa.</li>
          <li><b>Ideologi terbuka</b>: nilai dasar bersifat tetap; nilai instrumental dan nilai praksis dapat berkembang mengikuti zaman.</li>
          <li>Tiga tingkatan nilai: <b>nilai dasar</b> (sila-sila), <b>nilai instrumental</b> (UUD, UU, peraturan), <b>nilai praksis</b> (pelaksanaan sehari-hari).</li>
        </ul>` }
    ],
    tips: [
      'Cari <b>kata kerja inti</b> pada pernyataan lalu cocokkan dengan kata kunci sila (tabel di atas).',
      'Musyawarah/mufakat/menghargai pendapat = <b>sila 4</b>. Gotong royong demi bangsa/persatuan = <b>sila 3</b>. Toleransi antarumat beragama = <b>sila 1</b>.',
      'Waspadai pengecoh: "membantu korban bencana" itu sila 2 (kemanusiaan), bukan sila 5.',
      'Soal sejarah: ingat urutan <b>BPUPKI → Piagam Jakarta → PPKI</b> dan tanggalnya.'
    ]
  },
  {
    id: 'uud-1945', group: 'TWK', title: 'UUD 1945 & Lembaga Negara',
    summary: 'Struktur UUD 1945, pasal-pasal kunci, dan pembagian tugas lembaga negara.',
    buckets: ['SKD_TWK'], subs: ['Pilar Negara - UUD 1945'],
    sections: [
      { title: 'Struktur dan amandemen', html: `
        <ul>
          <li>Diamandemen <b>4 kali</b>: 1999, 2000, 2001, 2002.</li>
          <li>Setelah amandemen: Pembukaan (4 alinea) dan Batang Tubuh <b>21 bab, 73 pasal, 170 ayat</b>, ditambah 3 pasal Aturan Peralihan dan 2 pasal Aturan Tambahan.</li>
          <li>Pembukaan: alinea 1 = kemerdekaan hak segala bangsa; alinea 2 = perjuangan menuju negara merdeka, bersatu, berdaulat, adil, makmur; alinea 3 = pernyataan kemerdekaan atas berkat rahmat Allah; alinea 4 = <b>tujuan negara</b> + dasar negara Pancasila.</li>
        </ul>` },
      { title: 'Pasal yang sering keluar', html: `
        <table class="table table-sm">
          <thead><tr><th>Pasal</th><th>Isi singkat</th></tr></thead>
          <tbody>
            <tr><td>1 ayat 1–3</td><td>NKRI berbentuk republik; kedaulatan di tangan rakyat; Indonesia adalah negara hukum</td></tr>
            <tr><td>7</td><td>Presiden dan wakil presiden 5 tahun, hanya dapat dipilih kembali untuk satu kali masa jabatan</td></tr>
            <tr><td>18</td><td>Pemerintahan daerah</td></tr>
            <tr><td>20</td><td>DPR memegang kekuasaan membentuk undang-undang</td></tr>
            <tr><td>24C</td><td>Mahkamah Konstitusi: 9 hakim konstitusi</td></tr>
            <tr><td>25A</td><td>Wilayah negara kepulauan</td></tr>
            <tr><td>27 ayat 3</td><td>Hak dan kewajiban ikut serta dalam upaya pembelaan negara</td></tr>
            <tr><td>28A–28J</td><td>Hak asasi manusia</td></tr>
            <tr><td>29</td><td>Negara berdasar Ketuhanan Yang Maha Esa; kebebasan beragama</td></tr>
            <tr><td>30</td><td>Pertahanan dan keamanan (sishankamrata)</td></tr>
            <tr><td>31</td><td>Pendidikan; ayat 4: anggaran pendidikan minimal 20% APBN/APBD</td></tr>
            <tr><td>33</td><td>Perekonomian; ayat 3: bumi, air, dan kekayaan alam dikuasai negara untuk sebesar-besar kemakmuran rakyat</td></tr>
            <tr><td>34</td><td>Fakir miskin dan anak terlantar dipelihara negara</td></tr>
            <tr><td>36, 36A, 36B</td><td>Bahasa negara, lambang negara, lagu kebangsaan</td></tr>
          </tbody>
        </table>` },
      { title: 'Lembaga negara dan tugas pokoknya', html: `
        <ul>
          <li><b>MPR</b> (anggota DPR + DPD): mengubah dan menetapkan UUD, melantik presiden-wakil presiden.</li>
          <li><b>DPR</b>: legislasi, anggaran, pengawasan. <b>DPD</b>: mewakili daerah, mengajukan/membahas RUU terkait otonomi daerah.</li>
          <li><b>Presiden</b>: kepala negara sekaligus kepala pemerintahan.</li>
          <li><b>MA</b>: menguji peraturan di bawah UU terhadap UU. <b>MK</b>: menguji UU terhadap UUD, sengketa hasil pemilu, membubarkan partai politik. <b>KY</b>: menjaga kehormatan hakim. <b>BPK</b>: memeriksa pengelolaan dan tanggung jawab keuangan negara.</li>
        </ul>` }
    ],
    tips: [
      'Soal lembaga: cari <b>kata kunci tugas</b> — "menguji UU terhadap UUD" = MK, "memeriksa keuangan negara" = BPK, "membentuk UU" = DPR bersama presiden.',
      'Hafalkan angka pasal kunci (1, 7, 20, 24C, 27(3), 28, 29, 30, 31, 33, 34, 36) — cukup satu baris ringkasan tiap pasal.',
      'Setelah amandemen MPR <b>bukan lembaga tertinggi</b> lagi; semua lembaga sejajar dan saling mengawasi (checks and balances).',
      'Tujuan negara selalu ada di <b>alinea ke-4</b> Pembukaan.'
    ]
  },
  {
    id: 'nkri-bhinneka', group: 'TWK', title: 'NKRI, Bhinneka Tunggal Ika & Wawasan Nusantara',
    summary: 'Empat pilar kebangsaan, lambang negara, Sumpah Pemuda, serta Deklarasi Djuanda dan wawasan nusantara.',
    buckets: ['SKD_TWK'], subs: ['NKRI', 'Bhinneka'],
    sections: [
      { title: 'Empat pilar kebangsaan & lambang negara', html: `
        <ul>
          <li>Empat pilar: <b>Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika</b>.</li>
          <li>"Bhinneka Tunggal Ika" berasal dari kitab <b>Kakawin Sutasoma</b> karya Mpu Tantular (zaman Majapahit).</li>
          <li>Lambang negara Garuda Pancasila: bulu sayap <b>17</b>, bulu ekor <b>8</b>, bulu pangkal ekor 19, bulu leher <b>45</b> (17-8-45 = tanggal Proklamasi).</li>
        </ul>` },
      { title: 'Tonggak persatuan', html: `
        <ul>
          <li><b>20 Mei 1908</b> — Kebangkitan Nasional (Budi Utomo).</li>
          <li><b>28 Oktober 1928</b> — Sumpah Pemuda: satu tanah air, satu bangsa, satu bahasa persatuan.</li>
          <li><b>17 Agustus 1945</b> — Proklamasi Kemerdekaan.</li>
        </ul>` },
      { title: 'Wawasan Nusantara', html: `
        <ul>
          <li>Cara pandang bangsa Indonesia terhadap diri dan lingkungannya yang menempatkan kepulauan sebagai <b>satu kesatuan</b> politik, ekonomi, sosial budaya, dan pertahanan keamanan.</li>
          <li><b>Deklarasi Djuanda, 13 Desember 1957</b>: laut di antara pulau-pulau adalah bagian dari wilayah Indonesia (Hari Nusantara).</li>
          <li>Hukum laut internasional <b>UNCLOS 1982</b> mengakui negara kepulauan; Indonesia meratifikasinya lewat UU 17/1985. ZEE selebar 200 mil laut.</li>
        </ul>` }
    ],
    tips: [
      'Soal angka lambang negara: ingat <b>17-8-45</b> → sayap 17, ekor 8, leher 45.',
      'Soal "sikap menjaga NKRI/Bhinneka": jawaban terbaik biasanya yang <b>menghargai perbedaan dan mengutamakan persatuan</b>, bukan yang menonjolkan golongan.',
      'Bedakan <b>Kebangkitan Nasional (1908)</b>, <b>Sumpah Pemuda (1928)</b>, dan <b>Proklamasi (1945)</b> — pengecoh klasik.'
    ]
  },
  {
    id: 'nasionalisme-bela-negara', group: 'TWK', title: 'Nasionalisme & Bela Negara',
    summary: 'Dasar hukum bela negara, lima nilai dasar, komponen pertahanan, dan wujud nasionalisme di era digital.',
    buckets: ['SKD_TWK'], subs: ['Nasionalisme', 'Bela Negara'],
    sections: [
      { title: 'Dasar hukum', html: `
        <ul>
          <li><b>UUD 1945 Pasal 27 ayat 3</b>: setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.</li>
          <li><b>Pasal 30</b>: pertahanan dan keamanan; dilaksanakan dengan <b>Sishankamrata</b> (TNI-Polri sebagai kekuatan utama, rakyat sebagai pendukung).</li>
          <li>UU 3/2002 tentang Pertahanan Negara; UU 23/2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (komponen utama, cadangan, pendukung).</li>
        </ul>` },
      { title: 'Lima nilai dasar bela negara', html: `
        <ol>
          <li>Cinta tanah air</li>
          <li>Sadar berbangsa dan bernegara</li>
          <li>Yakin Pancasila sebagai ideologi negara</li>
          <li>Rela berkorban untuk bangsa dan negara</li>
          <li>Memiliki kemampuan awal bela negara</li>
        </ol>
        <p>Bentuk penyelenggaraan (UU 3/2002 Pasal 9): pendidikan kewarganegaraan, pelatihan dasar kemiliteran, pengabdian sebagai prajurit TNI, dan <b>pengabdian sesuai profesi</b>.</p>` },
      { title: 'Nasionalisme masa kini', html: `
        <p>Bela negara tidak selalu berarti angkat senjata. Contoh nyata: bekerja jujur dan profesional (termasuk sebagai ASN), memakai produk dalam negeri, melestarikan budaya, menangkal hoaks dan ujaran kebencian, serta menjaga lingkungan.</p>` }
    ],
    tips: [
      'Pilih jawaban yang <b>nyata, positif, dan sesuai profesi</b> — bela negara bukan hanya militer.',
      'Opsi yang berisi "membiarkan", "tidak peduli", atau "mengutamakan kepentingan pribadi" hampir pasti salah.',
      'Hafal lima nilai dasar dengan akronim kata pertama: <b>Cinta – Sadar – Yakin – Rela – Mampu</b>.'
    ]
  },
  {
    id: 'integritas-asn', group: 'TWK', title: 'Integritas, Etika ASN & BerAKHLAK',
    summary: 'Nilai dasar ASN, perilaku antikorupsi, gratifikasi, dan pegangan memilih jawaban pada soal integritas.',
    buckets: ['SKD_TWK'], subs: ['Integritas'],
    sections: [
      { title: 'Core values ASN: BerAKHLAK', html: `
        <table class="table table-sm">
          <tbody>
            <tr><td><b>Ber</b>orientasi Pelayanan</td><td>Ramah, cekatan, solutif, dan dapat diandalkan</td></tr>
            <tr><td><b>A</b>kuntabel</td><td>Bertanggung jawab atas kewenangan dan sumber daya</td></tr>
            <tr><td><b>K</b>ompeten</td><td>Terus belajar dan mengembangkan kapabilitas</td></tr>
            <tr><td><b>H</b>armonis</td><td>Saling peduli dan menghargai perbedaan</td></tr>
            <tr><td><b>L</b>oyal</td><td>Berdedikasi pada bangsa dan negara, menjaga nama baik instansi</td></tr>
            <tr><td><b>A</b>daptif</td><td>Inovatif dan antusias menghadapi perubahan</td></tr>
            <tr><td><b>K</b>olaboratif</td><td>Membangun kerja sama yang sinergis</td></tr>
          </tbody>
        </table>
        <p>Employer branding ASN: <b>"Bangga Melayani Bangsa"</b>.</p>` },
      { title: 'Integritas dan antikorupsi', html: `
        <ul>
          <li>Integritas = <b>konsistensi antara ucapan dan perbuatan</b> sesuai nilai dan aturan.</li>
          <li>Sembilan nilai antikorupsi (KPK): jujur, mandiri, tanggung jawab, berani, sederhana, peduli, disiplin, adil, kerja keras.</li>
          <li><b>Gratifikasi</b> yang berhubungan dengan jabatan dan bertentangan dengan kewajiban wajib dilaporkan ke KPK paling lambat <b>30 hari kerja</b> sejak diterima.</li>
          <li>Fungsi ASN: pelaksana kebijakan publik, pelayan publik, serta perekat dan pemersatu bangsa. ASN wajib menjaga <b>netralitas</b> dan menghindari konflik kepentingan.</li>
        </ul>` }
    ],
    tips: [
      'Jawaban terbaik: <b>menolak dengan sopan, melaporkan, dan tetap mengikuti prosedur</b> — bukan menerima "asal tidak ketahuan" dan bukan menghakimi sendiri.',
      'Soal dilema atasan meminta melanggar aturan: tolak secara santun, sampaikan aturan yang berlaku, tawarkan solusi sesuai prosedur.',
      'Hafal singkatan BerAKHLAK beserta arti satu kata kuncinya.'
    ]
  },
  {
    id: 'bahasa-negara', group: 'TWK', title: 'Bahasa Indonesia: Ejaan, Kata Baku & Kalimat Efektif',
    summary: 'Kedudukan bahasa negara, daftar kata baku yang paling sering muncul, ciri kalimat efektif, dan penulisan gelar/tanda baca.',
    buckets: ['SKD_TWK'], subs: ['Bahasa Negara'],
    sections: [
      { title: 'Kedudukan bahasa Indonesia', html: `
        <ul>
          <li><b>Bahasa persatuan</b> — Sumpah Pemuda 1928. <b>Bahasa negara</b> — UUD 1945 Pasal 36. Diatur lebih lanjut dalam UU 24/2009.</li>
          <li>Pedoman ejaan saat ini: <b>EYD Edisi V</b> (2022), pengganti PUEBI.</li>
        </ul>` },
      { title: '30 kata baku yang paling sering muncul', html: `
        <table class="table table-sm">
          <thead><tr><th>Tidak baku</th><th>Baku</th><th>Tidak baku</th><th>Baku</th></tr></thead>
          <tbody>
            <tr><td>apotik</td><td>apotek</td><td>analisa</td><td>analisis</td></tr>
            <tr><td>kwalitas</td><td>kualitas</td><td>kwitansi</td><td>kuitansi</td></tr>
            <tr><td>jadual</td><td>jadwal</td><td>ekstrim</td><td>ekstrem</td></tr>
            <tr><td>menghimbau</td><td>mengimbau</td><td>merubah</td><td>mengubah</td></tr>
            <tr><td>resiko</td><td>risiko</td><td>nasehat</td><td>nasihat</td></tr>
            <tr><td>praktek</td><td>praktik</td><td>aktifitas</td><td>aktivitas</td></tr>
            <tr><td>sistim</td><td>sistem</td><td>hakekat</td><td>hakikat</td></tr>
            <tr><td>jaman</td><td>zaman</td><td>ijin</td><td>izin</td></tr>
            <tr><td>silahkan</td><td>silakan</td><td>telpon</td><td>telepon</td></tr>
            <tr><td>atlit</td><td>atlet</td><td>obyek</td><td>objek</td></tr>
            <tr><td>kreatifitas</td><td>kreativitas</td><td>frekwensi</td><td>frekuensi</td></tr>
            <tr><td>tehnik</td><td>teknik</td><td>antri</td><td>antre</td></tr>
            <tr><td>cabe</td><td>cabai</td><td>standarisasi</td><td>standardisasi</td></tr>
            <tr><td>konsekwen</td><td>konsekuen</td><td>sekedar</td><td>sekadar</td></tr>
            <tr><td>faham</td><td>paham</td><td>nafas</td><td>napas</td></tr>
          </tbody>
        </table>` },
      { title: 'Kalimat efektif', html: `
        <p>Ciri: <b>kesepadanan</b> (subjek–predikat jelas), <b>kesejajaran</b> (bentuk paralel), <b>kehematan</b>, <b>kecermatan</b>, <b>kepaduan</b>, <b>kelogisan</b>.</p>
        <ul>
          <li><b>Subjek hilang</b> karena didahului kata depan: <i>"Dalam rapat itu membahas anggaran."</i> ✗ → <i>"Rapat itu membahas anggaran."</i> ✓</li>
          <li><b>Pleonasme</b> (boros): naik ke atas, turun ke bawah, agar supaya, adalah merupakan, demi untuk, para hadirin-hadirin, sangat … sekali.</li>
          <li><b>Paralelisme</b>: <i>"Kegiatannya membaca, menulis, dan berhitung."</i> (bukan "membaca, menulis, dan berhitungnya").</li>
        </ul>` },
      { title: 'Penulisan gelar, awalan, dan kata depan', html: `
        <ul>
          <li>Gelar: <code>Dr. Andi Pratama, S.H., M.H.</code> — nama dan gelar belakang dipisah koma; tiap singkatan gelar diberi titik.</li>
          <li><b>di-</b> sebagai awalan ditulis serangkai (<i>dibaca, ditulis</i>); <b>di</b> sebagai kata depan ditulis terpisah (<i>di kantor, di mana</i>). Berlaku juga untuk <i>ke</i> dan <i>dari</i>.</li>
          <li>Huruf kapital: nama orang, nama geografi, nama bulan/hari, awal kalimat; jabatan hanya kapital jika diikuti nama orang/tempat.</li>
        </ul>` }
    ],
    tips: [
      '<b>Urutan cek kalimat efektif</b>: (1) subjek hilang? (2) ada kata mubazir/pleonasme? (3) paralel? Opsi yang lolos tiga cek ini hampir selalu benar.',
      'Soal "semua kata baku": coret opsi yang memuat kata tidak baku dari daftar di atas — biasanya cukup satu kata salah untuk gugur.',
      'Soal ejaan: periksa <b>di/ke/dari</b>, <b>kapital</b>, dan <b>tanda baca</b> pada gelar terlebih dahulu.'
    ]
  },

  /* ============================ TIU ============================ */
  {
    id: 'deret-angka', group: 'TIU', title: 'Deret Angka & Deret Huruf',
    summary: 'Sembilan pola deret yang paling sering muncul beserta langkah mengeceknya dalam kurang dari 30 detik.',
    buckets: ['SKD_TIU'], subs: ['Deret Angka', 'Deret Huruf'],
    sections: [
      { title: 'Daftar pola', html: `
        <table class="table table-sm">
          <thead><tr><th>Pola</th><th>Contoh</th><th>Ciri</th></tr></thead>
          <tbody>
            <tr><td>Beda tetap</td><td>3, 7, 11, 15, …</td><td>+4 terus</td></tr>
            <tr><td>Beda bertingkat</td><td>2, 3, 5, 8, 12, …</td><td>selisih 1, 2, 3, 4</td></tr>
            <tr><td>Kali / bagi tetap</td><td>3, 6, 12, 24, …</td><td>×2</td></tr>
            <tr><td>Kali lalu ± konstan</td><td>4, 7, 13, 25, 49, …</td><td>×2 − 1 (atau selisih 3, 6, 12, 24)</td></tr>
            <tr><td>Kuadrat / kubik</td><td>1, 4, 9, 16, 25, …</td><td>n² atau n³</td></tr>
            <tr><td>Fibonacci</td><td>1, 1, 2, 3, 5, 8, …</td><td>jumlah dua suku sebelumnya</td></tr>
            <tr><td>Dua deret selang-seling</td><td>2, 5, 4, 8, 6, 11, …</td><td>pisahkan suku ganjil dan genap</td></tr>
            <tr><td>Bilangan prima</td><td>2, 3, 5, 7, 11, 13, …</td><td>hanya habis dibagi 1 dan dirinya</td></tr>
            <tr><td>Operasi bergantian</td><td>2, 4, 12, 14, 42, …</td><td>+2, ×3, +2, ×3 …</td></tr>
          </tbody>
        </table>` },
      { title: 'Angka wajib hafal', html: `
        <p><b>Kuadrat</b>: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400.</p>
        <p><b>Kubik</b>: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.</p>
        <p><b>Prima &lt; 50</b>: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.</p>` },
      { title: 'Deret huruf', html: `<p>Ubah huruf menjadi nomor urut (A=1 … Z=26), selesaikan sebagai deret angka, lalu ubah kembali. Hafal: <b>E=5, J=10, O=15, T=20, Y=25</b>.</p>` }
    ],
    tips: [
      '<b>Alur cepat</b>: hitung selisih → bila tidak tetap, hitung selisih dari selisih → cek rasio (×/÷) → cek kuadrat/kubik → pisahkan suku ganjil-genap.',
      'Bila suku naik sangat cepat, curigai <b>kali</b>; bila naik pelan, curigai <b>tambah</b>.',
      'Jangan berlama-lama: bila 30 detik belum ketemu, tandai ragu-ragu dan lanjut.',
      'Pada deret campuran, coba <b>dua langkah sekaligus</b> (mis. ×2 lalu +1).'
    ]
  },
  {
    id: 'analogi', group: 'TIU', title: 'Analogi (Verbal)',
    summary: 'Cara menemukan hubungan kata atau kalimat dengan teknik "kalimat jembatan".',
    buckets: ['SKD_TIU'], subs: ['Analogi'],
    sections: [
      { title: 'Jenis hubungan yang sering muncul', html: `
        <ul>
          <li><b>Sinonim / antonim</b>: besar – raksasa; tinggi – rendah.</li>
          <li><b>Sebab – akibat</b>: hujan – banjir.</li>
          <li><b>Bagian – keseluruhan</b>: roda – mobil.</li>
          <li><b>Fungsi / alat</b>: pisau – memotong; stetoskop – memeriksa.</li>
          <li><b>Profesi – alat / tempat</b>: petani – cangkul; dokter – rumah sakit.</li>
          <li><b>Jenis – golongan</b>: apel – buah.</li>
          <li><b>Tahap / urutan</b>: tunas – pohon. <b>Intensitas</b>: hangat – panas.</li>
        </ul>` },
      { title: 'Teknik kalimat jembatan', html: `
        <p>Buat satu kalimat yang menghubungkan pasangan kata pertama, misalnya: "<i>Dokter menggunakan stetoskop untuk memeriksa pasien</i>". Ganti pasangan kata dengan opsi, dan pilih opsi yang <b>kalimat jembatannya tetap masuk akal dengan urutan yang sama</b>.</p>
        <div class="callout">Pada <b>analogi kalimat</b>: samakan pola <i>Subjek (profesi) – alat – tujuan – kondisi objek</i> kalimat soal dengan tiap opsi. Perhatikan kategori setiap bagian (alat ≠ media).</div>` }
    ],
    tips: [
      'Tentukan <b>arah hubungan</b> (A→B atau B→A); opsi dengan arah terbalik adalah pengecoh favorit.',
      'Bila dua opsi tampak mirip, cari perbedaan halus: alat vs media, memeriksa vs menyembuhkan, mengolah vs membuat.',
      'Eliminasi opsi yang kategori katanya berbeda dengan soal (mis. soal profesi–alat, opsi benda–benda).'
    ]
  },
  {
    id: 'silogisme', group: 'TIU', title: 'Silogisme & Logika Pernyataan',
    summary: 'Aturan menarik kesimpulan yang valid, modus ponens/tollens, dan cara menegasikan pernyataan.',
    buckets: ['SKD_TIU'], subs: ['Silogisme'],
    sections: [
      { title: 'Silogisme kategorik', html: `
        <ul>
          <li>Semua A adalah B; Semua B adalah C → <b>Semua A adalah C</b>.</li>
          <li>Semua A adalah B; Sebagian C adalah A → <b>Sebagian C adalah B</b>.</li>
          <li>Tidak ada A yang B; Semua C adalah A → <b>Tidak ada C yang B</b>.</li>
          <li>Premis "sebagian" atau negatif → kesimpulan juga "sebagian" atau negatif (kesimpulan mengikuti premis yang <b>paling lemah</b>).</li>
        </ul>` },
      { title: 'Pernyataan bersyarat (jika … maka …)', html: `
        <table class="table table-sm">
          <thead><tr><th>Bentuk</th><th>Premis</th><th>Kesimpulan</th></tr></thead>
          <tbody>
            <tr><td>Modus ponens</td><td>P → Q; P benar</td><td>Q ✓</td></tr>
            <tr><td>Modus tollens</td><td>P → Q; Q salah (¬Q)</td><td>¬P ✓</td></tr>
            <tr><td>Silogisme hipotetik</td><td>P → Q; Q → R</td><td>P → R ✓</td></tr>
            <tr><td>Kontraposisi</td><td>P → Q</td><td>¬Q → ¬P (setara) ✓</td></tr>
            <tr><td>Menegaskan konsekuen</td><td>P → Q; Q benar</td><td>P ✗ (tidak valid)</td></tr>
            <tr><td>Menyangkal anteseden</td><td>P → Q; ¬P</td><td>¬Q ✗ (tidak valid)</td></tr>
          </tbody>
        </table>` },
      { title: 'Negasi (ingkaran)', html: `
        <ul>
          <li>Negasi "Semua A adalah B" = "<b>Ada A yang bukan B</b>".</li>
          <li>Negasi "Sebagian A adalah B" = "<b>Tidak ada A yang B</b>" (semua A bukan B).</li>
          <li>Negasi "P dan Q" = "tidak P <b>atau</b> tidak Q"; negasi "P atau Q" = "tidak P <b>dan</b> tidak Q".</li>
          <li>"Jika P maka Q" setara dengan "Tidak P atau Q".</li>
        </ul>` }
    ],
    tips: [
      'Gambar <b>diagram Venn</b> (lingkaran) untuk setiap premis; kesimpulan valid hanya bila <b>selalu benar</b> pada gambar apa pun.',
      'Soal "kesimpulan yang pasti benar": hindari opsi yang mengubah "sebagian" menjadi "semua".',
      'Pada soal "jika–maka", langsung pakai <b>kontraposisi</b>: balik dan negasikan kedua sisi.'
    ]
  },
  {
    id: 'perbandingan-kuantitatif', group: 'TIU', title: 'Perbandingan Kuantitatif',
    summary: 'Membandingkan dua besaran tanpa menghitung penuh: sederhanakan, substitusi, dan tahu kapan jawabannya "tidak dapat ditentukan".',
    buckets: ['SKD_TIU'], subs: ['Perbandingan Kuantitatif'],
    sections: [
      { title: 'Langkah umum', html: `
        <ol>
          <li>Sederhanakan kedua sisi (coret bagian yang sama).</li>
          <li>Bila ada variabel, <b>substitusikan</b> beberapa nilai: 0, 1, −1, pecahan, bilangan besar.</li>
          <li>Jika hasil perbandingan <b>berubah</b> bergantung nilai variabel → "tidak dapat ditentukan".</li>
          <li>Bila hasilnya selalu sama arah → pilih >, <, atau =.</li>
        </ol>` },
      { title: 'Rumus kilat', html: `
        <ul>
          <li><b>Diskon bertingkat</b> a% lalu b%: diskon efektif = a + b − (a×b/100). Contoh 20% + 10% = 28%.</li>
          <li><b>Naik lalu turun</b> persen sama: naik 20% lalu turun 20% → 1,2 × 0,8 = 0,96 (turun 4%), bukan kembali ke semula.</li>
          <li><b>Pecahan</b>: bandingkan dengan perkalian silang; atau samakan penyebut.</li>
          <li><b>Akar / pangkat</b>: kuadratkan kedua sisi bila keduanya positif.</li>
          <li>Pecahan antara 0 dan 1: dikuadratkan menjadi <b>lebih kecil</b>.</li>
        </ul>` }
    ],
    tips: [
      'Jangan menghitung sampai tuntas; cukup tentukan <b>mana yang lebih besar</b>.',
      'Perhatikan pilihan "tidak dapat ditentukan" — jawabannya benar bila ada <b>variabel tanpa batasan</b> yang mengubah hasil.',
      'Waspadai angka negatif dan nol saat substitusi.'
    ]
  },
  {
    id: 'soal-cerita', group: 'TIU', title: 'Soal Cerita: Kerja, Kecepatan, Untung-Rugi & Statistika',
    summary: 'Kumpulan rumus yang cukup untuk hampir semua soal cerita numerik di SKD.',
    buckets: ['SKD_TIU'], subs: ['Soal Cerita', 'Berhitung Cepat'],
    sections: [
      { title: 'Kerja bersama & perbandingan', html: `
        <ul>
          <li>Dua pekerja selesai sendiri-sendiri dalam <i>a</i> dan <i>b</i> hari → bersama: <b>t = (a × b) / (a + b)</b>.</li>
          <li><b>Senilai</b>: kedua besaran naik bersama (barang ↔ harga). <b>Berbalik nilai</b>: yang satu naik, yang lain turun (pekerja ↔ hari): pekerja₁ × hari₁ = pekerja₂ × hari₂.</li>
        </ul>` },
      { title: 'Kecepatan, jarak, waktu', html: `
        <ul>
          <li><b>s = v × t</b>.</li>
          <li>Berpapasan (arah berlawanan): <b>t = jarak / (v₁ + v₂)</b>. Menyusul (searah): <b>t = jarak / (v₁ − v₂)</b>.</li>
          <li>Pergi-pulang pada jarak sama: kecepatan rata-rata = <b>2v₁v₂ / (v₁ + v₂)</b>.</li>
        </ul>` },
      { title: 'Aritmetika sosial', html: `
        <ul>
          <li>Untung = jual − beli; <b>% untung = untung / beli × 100%</b>.</li>
          <li>Diskon: harga bayar = harga × (100% − diskon).</li>
          <li>Bruto = neto + tara. Bunga tunggal: <b>I = P × r × t</b>.</li>
        </ul>` },
      { title: 'Statistika dasar', html: `
        <ul>
          <li>Rata-rata = jumlah data / banyak data. Jumlah = rata-rata × banyak data.</li>
          <li>Rata-rata gabungan = <b>(n₁x̄₁ + n₂x̄₂) / (n₁ + n₂)</b>.</li>
          <li>Median = nilai tengah data terurut; modus = nilai yang paling sering muncul.</li>
        </ul>` }
    ],
    tips: [
      'Tulis yang <b>diketahui</b> dan <b>ditanya</b> dahulu; hampir semua soal cerita selesai dalam 2–3 baris.',
      'Gunakan <b>pemisalan angka mudah</b> (mis. 100 atau KPK) bila soal berbentuk persen tanpa nominal.',
      'Setelah mendapat angka, cek <b>satuan</b> (jam vs menit, km vs m) sebelum memilih opsi.'
    ]
  },
  {
    id: 'figural-analitis', group: 'TIU', title: 'Figural & Analitis',
    summary: 'Pola gambar, jaring-jaring kubus, dan penalaran analitis (urutan/posisi).',
    buckets: ['SKD_TIU'], subs: ['Figural', 'Analitis'],
    sections: [
      { title: 'Pola gambar (figural)', html: `
        <ul>
          <li>Periksa satu per satu: <b>rotasi</b> (45°/90° per langkah), <b>pencerminan</b>, <b>penambahan/pengurangan</b> elemen, <b>perpindahan posisi</b>, <b>perubahan warna/isi</b>.</li>
          <li><b>Jaring-jaring kubus</b>: dua sisi yang berhadapan tidak pernah bersebelahan pada satu deret lurus; bayangkan melipat dari sisi tengah.</li>
          <li><b>Ketidaksamaan (odd one out)</b>: bandingkan jumlah sisi, jumlah titik, simetri, arah.</li>
        </ul>` },
      { title: 'Penalaran analitis', html: `
        <p>Bila soal berisi beberapa syarat (urutan, posisi duduk, jadwal): buat <b>tabel atau garis</b>, isi dahulu syarat yang <b>pasti</b>, lalu eliminasi kemungkinan lain.</p>` }
    ],
    tips: [
      'Soal figural paling memakan waktu — kerjakan <b>terakhir</b> bila waktu mepet.',
      'Ubah setiap pola menjadi <b>perubahan tiap langkah</b> (mis. +1 titik, putar 90° searah jarum jam).',
      'Pada analitis, coret opsi yang bertentangan dengan satu syarat saja.'
    ]
  },

  /* ============================ TKP ============================ */
  {
    id: 'strategi-tkp', group: 'TKP', title: 'Strategi Umum TKP: Cara Mendapat Skor 5',
    summary: 'Peta skor 1–5 dan lima prinsip yang membuat pilihan terbaik mudah dikenali di semua aspek TKP.',
    buckets: ['SKD_TKP'],
    sections: [
      { title: 'Apa yang dinilai?', html: `
        <p>TKP tidak punya jawaban "salah mutlak": tiap opsi bernilai <b>1–5</b>. Skor tertinggi diberikan pada tindakan paling sesuai dengan sikap ASN ideal. Passing grade SKD (KepmenPANRB 321/2024): <b>TWK 65, TIU 80, TKP 166</b>.</p>
        <table class="table table-sm">
          <thead><tr><th>Skor</th><th>Pola tindakan</th></tr></thead>
          <tbody>
            <tr><td><b>5</b></td><td>Langsung, <b>tuntas</b>, sesuai aturan, berdampak baik jangka panjang bagi organisasi/publik</td></tr>
            <tr><td><b>4</b></td><td>Baik, sesuai aturan, tetapi kurang tuntas atau perlu perantara</td></tr>
            <tr><td><b>3</b></td><td>Netral/pasif, tidak merugikan, tetapi tidak menyelesaikan masalah</td></tr>
            <tr><td><b>2</b></td><td>Menghindar, menunda, atau melempar tanggung jawab</td></tr>
            <tr><td><b>1</b></td><td>Melanggar aturan, apatis, menyalahgunakan jabatan, atau emosional</td></tr>
          </tbody>
        </table>` },
      { title: 'Lima prinsip memilih', html: `
        <ol>
          <li><b>Proaktif dan solutif</b> — bertindak, bukan menunggu.</li>
          <li><b>Sesuai aturan/SOP dan etika</b> — tidak mengambil jalan pintas yang melanggar.</li>
          <li><b>Kepentingan publik dan organisasi</b> di atas kepentingan pribadi.</li>
          <li><b>Komunikatif dan kolaboratif</b> — berdiskusi dahulu, eskalasi ke atasan secara bertahap.</li>
          <li><b>Tenang dan profesional</b> — tidak emosional, tidak menyalahkan, tidak main hakim sendiri.</li>
        </ol>` }
    ],
    tips: [
      'Jawaban 5 biasanya <b>opsi terpanjang dan paling lengkap</b> (tindakan + alasan + tindak lanjut), tetapi tetap cek sesuai aturan.',
      'Coret dahulu dua opsi paling ekstrem (pasif/apatis dan melanggar aturan), lalu pilih di antara sisanya.',
      'Hindari opsi yang memakai kata "langsung melapor ke atasan" <b>sebelum</b> mencoba menyelesaikan sendiri secara wajar.',
      'Alokasi waktu TKP: sekitar <b>1 menit per soal</b>; jangan terlalu lama menimbang opsi 4 vs 5.'
    ]
  },
  {
    id: 'tkp-pelayanan-publik', group: 'TKP', title: 'TKP – Pelayanan Publik',
    summary: 'Prinsip melayani masyarakat: ramah, cepat, tanpa pungli, dan membantu sampai tuntas sesuai prosedur.',
    buckets: ['SKD_TKP'], subs: ['Pelayanan Publik'],
    sections: [
      { title: 'Pegangan', html: `
        <ul>
          <li>Dasar: <b>UU 25/2009 tentang Pelayanan Publik</b>; asas antara lain kepentingan umum, kepastian hukum, kesamaan hak, keterbukaan, akuntabilitas, dan perlakuan khusus bagi kelompok rentan.</li>
          <li>Kelompok rentan (lansia, penyandang disabilitas, ibu hamil, anak) mendapat <b>perlakuan khusus</b>.</li>
          <li>Pengaduan masyarakat: tanggapi dengan sopan, catat, dan teruskan ke kanal resmi (mis. SP4N-LAPOR!).</li>
        </ul>` },
      { title: 'Pola jawaban', html: `
        <ul>
          <li><b>5</b>: melayani ramah, mencarikan solusi dalam batas aturan (mis. menjelaskan syarat, membantu melengkapi berkas), tuntas hari itu.</li>
          <li><b>3</b>: melayani apa adanya tanpa membantu, atau menunggu atasan.</li>
          <li><b>1–2</b>: menolak, menyuruh kembali tanpa penjelasan, meminta imbalan, atau melanggar SOP demi kemudahan.</li>
        </ul>` }
    ],
    tips: [
      'Kata penanda skor 5: <b>"ramah", "membantu", "menjelaskan", "sesuai prosedur", "memastikan selesai"</b>.',
      'Jangan memilih opsi yang melanggar SOP walau tampak membantu (mis. menerima titipan uang).'
    ]
  },
  {
    id: 'tkp-jejaring-kerja', group: 'TKP', title: 'TKP – Jejaring Kerja',
    summary: 'Kolaborasi lintas unit, membangun relasi, dan menyelesaikan konflik antarrekan secara bertahap.',
    buckets: ['SKD_TKP'], subs: ['Jejaring Kerja'],
    sections: [
      { title: 'Pegangan', html: `
        <ul>
          <li>Bangun komunikasi <b>dua arah</b>, berbagi informasi, dan fokus pada tujuan bersama.</li>
          <li>Konflik dengan rekan: <b>bicarakan langsung</b> secara kekeluargaan → bila belum selesai, libatkan atasan/mediator.</li>
          <li>Hindari membicarakan rekan di belakang dan menolak bekerja sama.</li>
        </ul>` },
      { title: 'Pola jawaban', html: `
        <ul>
          <li><b>5</b>: berinisiatif menjalin komunikasi/koordinasi dan mencari titik temu.</li>
          <li><b>3</b>: menunggu pihak lain, tidak memperburuk keadaan.</li>
          <li><b>1</b>: menyalahkan, membalas dendam, atau mengisolasi diri.</li>
        </ul>` }
    ],
    tips: [
      'Opsi dengan <b>inisiatif komunikasi + tujuan bersama</b> hampir selalu paling tinggi.',
      'Eskalasi ke atasan adalah <b>langkah lanjutan</b>, bukan langkah pertama (kecuali menyangkut pelanggaran berat).'
    ]
  },
  {
    id: 'tkp-sosial-budaya', group: 'TKP', title: 'TKP – Sosial Budaya',
    summary: 'Toleransi, menghargai keragaman, dan beradaptasi dengan budaya daerah penempatan.',
    buckets: ['SKD_TKP'], subs: ['Sosial Budaya'],
    sections: [
      { title: 'Pegangan', html: `
        <ul>
          <li>Hargai perbedaan suku, agama, dan adat; beradaptasi dengan budaya setempat <b>selama tidak melanggar hukum</b>.</li>
          <li>Jadilah <b>penjembatan</b> bila ada kesalahpahaman antarkelompok.</li>
          <li>Ikut serta dalam kegiatan sosial lingkungan, tidak eksklusif.</li>
        </ul>` }
    ],
    tips: [
      'Skor 5: <b>mengenal, menghormati, dan ikut berpartisipasi</b> dalam budaya setempat.',
      'Skor rendah: memaksakan kebiasaan sendiri, mengejek, atau menghindar dari lingkungan.'
    ]
  },
  {
    id: 'tkp-tik', group: 'TKP', title: 'TKP – Teknologi Informasi & Komunikasi',
    summary: 'Memanfaatkan teknologi secara aman dan etis: literasi digital, keamanan data, dan pemeriksaan hoaks.',
    buckets: ['SKD_TKP'], subs: ['Teknologi Informasi'],
    sections: [
      { title: 'Pegangan', html: `
        <ul>
          <li>Mau <b>belajar dan memanfaatkan</b> teknologi baru untuk mempercepat pekerjaan (selaras SPBE/transformasi digital).</li>
          <li>Amankan data: jangan membagikan kata sandi, data pribadi, maupun dokumen rahasia; gunakan kanal resmi instansi.</li>
          <li>Verifikasi informasi (cek sumber resmi) sebelum membagikan; laporkan hoaks.</li>
        </ul>` }
    ],
    tips: [
      'Skor 5: <b>belajar + memanfaatkan + aman/etis</b>.',
      'Skor 1: menolak teknologi, menyebarkan informasi yang belum diverifikasi, atau membagikan data rahasia.'
    ]
  },
  {
    id: 'tkp-profesionalisme', group: 'TKP', title: 'TKP – Profesionalisme',
    summary: 'Disiplin, tanggung jawab, kompetensi, dan integritas saat menghadapi tekanan atau godaan.',
    buckets: ['SKD_TKP'], subs: ['Profesionalisme'],
    sections: [
      { title: 'Pegangan', html: `
        <ul>
          <li>Selesaikan tugas <b>tepat waktu dan bermutu</b>; komunikasikan kendala sejak dini.</li>
          <li>Atur prioritas dengan matriks <b>penting–mendesak</b>.</li>
          <li>Terima kritik secara terbuka; terus meningkatkan kompetensi.</li>
          <li>Tolak gratifikasi, KKN, dan penyalahgunaan jabatan.</li>
        </ul>` }
    ],
    tips: [
      'Skor 5: <b>bertanggung jawab menyelesaikan + berkomunikasi dengan atasan</b> bila ada kendala.',
      'Skor rendah: melempar tugas, mengerjakan asal selesai, atau memanfaatkan jabatan.'
    ]
  },
  {
    id: 'tkp-anti-radikalisme', group: 'TKP', title: 'TKP – Anti Radikalisme',
    summary: 'Sikap terhadap paham intoleran: merangkul secara persuasif sambil melapor lewat jalur resmi.',
    buckets: ['SKD_TKP'], subs: ['Anti Radikalisme'],
    sections: [
      { title: 'Pegangan', html: `
        <ul>
          <li>Setia pada <b>Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika</b>.</li>
          <li>Tidak menyebarkan ujaran kebencian; ikut menangkal konten intoleran.</li>
          <li>Terhadap rekan/keluarga yang terpapar: dialog <b>persuasif</b>, ajak berdiskusi, dan bila mengarah pada ancaman → laporkan ke pihak berwenang.</li>
          <li>Kembangkan moderasi beragama dan literasi digital.</li>
        </ul>` }
    ],
    tips: [
      'Skor 5 biasanya menggabungkan <b>pendekatan persuasif + jalur resmi</b>.',
      'Skor rendah: ikut-ikutan, diam saja, atau main hakim sendiri dengan kekerasan.'
    ]
  },

  /* ============================ SKB ============================ */
  {
    id: 'skb-hukum', group: 'SKB', title: 'SKB Hukum, Pemerintahan & Kebijakan',
    summary: 'UU ASN, hierarki peraturan, kebijakan publik, pengadaan barang/jasa, dan hukum administrasi negara.',
    buckets: ['SKB_HUKUM'],
    sections: [
      { title: 'Hierarki peraturan perundang-undangan (UU 12/2011, Pasal 7)', html: `
        <ol>
          <li>UUD 1945</li><li>Ketetapan MPR</li><li>Undang-Undang / Perppu</li><li>Peraturan Pemerintah</li><li>Peraturan Presiden</li><li>Perda Provinsi</li><li>Perda Kabupaten/Kota</li>
        </ol>
        <p>Asas: <i>lex superior derogat legi inferiori</i> (yang lebih tinggi mengesampingkan yang lebih rendah), <i>lex specialis</i>, <i>lex posterior</i>.</p>` },
      { title: 'ASN & Administrasi Pemerintahan', html: `
        <ul>
          <li><b>UU 20/2023 tentang ASN</b> (pengganti UU 5/2014): ASN terdiri dari PNS dan PPPK; manajemen berbasis <b>sistem merit</b>.</li>
          <li><b>UU 30/2014 tentang Administrasi Pemerintahan</b>: memuat <b>Asas Umum Pemerintahan yang Baik</b> (kepastian hukum, kemanfaatan, ketidakberpihakan, kecermatan, tidak menyalahgunakan kewenangan, keterbukaan, kepentingan umum, pelayanan yang baik) dan aturan tentang diskresi.</li>
          <li>Gugatan terhadap keputusan tata usaha negara diajukan ke <b>PTUN</b>.</li>
        </ul>` },
      { title: 'Kebijakan publik & pengadaan', html: `
        <ul>
          <li>Siklus kebijakan: <b>agenda setting → formulasi → adopsi/legitimasi → implementasi → evaluasi</b>.</li>
          <li>Prinsip pengadaan barang/jasa pemerintah: efisien, efektif, transparan, terbuka, bersaing, adil, dan akuntabel. Rujuk Perpres 16/2018 beserta perubahannya (periksa versi terbaru).</li>
        </ul>` }
    ],
    tips: [
      'Soal hierarki: hafalkan urutan <b>UUD – TAP MPR – UU/Perppu – PP – Perpres – Perda Prov – Perda Kab/Kota</b>.',
      'Pilih jawaban yang menonjolkan <b>sistem merit, kepastian hukum, dan akuntabilitas</b>.',
      'Perhatikan tahun dan nomor UU — ini pengecoh yang sering dipakai.'
    ]
  },
  {
    id: 'skb-keuangan', group: 'SKB', title: 'SKB Keuangan, Akuntansi & Pajak',
    summary: 'Paket UU keuangan negara, SAP akrual, opini audit BPK, dan dasar perpajakan.',
    buckets: ['SKB_KEUANGAN'],
    sections: [
      { title: 'Tiga paket UU keuangan negara', html: `
        <ul>
          <li><b>UU 17/2003</b> tentang Keuangan Negara.</li>
          <li><b>UU 1/2004</b> tentang Perbendaharaan Negara.</li>
          <li><b>UU 15/2004</b> tentang Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara.</li>
        </ul>` },
      { title: 'SAP dan laporan keuangan (PP 71/2010)', html: `
        <ul>
          <li>Standar Akuntansi Pemerintahan berbasis <b>akrual</b>.</li>
          <li>Laporan keuangan pokok: <b>LRA, Laporan Perubahan SAL, Neraca, Laporan Operasional, Laporan Arus Kas, Laporan Perubahan Ekuitas, CaLK</b>.</li>
        </ul>` },
      { title: 'Opini audit BPK', html: `
        <table class="table table-sm">
          <tbody>
            <tr><td><b>WTP</b></td><td>Wajar Tanpa Pengecualian</td></tr>
            <tr><td><b>WDP</b></td><td>Wajar Dengan Pengecualian</td></tr>
            <tr><td><b>TW</b></td><td>Tidak Wajar</td></tr>
            <tr><td><b>TMP</b></td><td>Tidak Memberikan Pendapat (disclaimer)</td></tr>
          </tbody>
        </table>
        <p>Empat kriteria opini: kesesuaian dengan SAP, kecukupan pengungkapan, kepatuhan terhadap peraturan perundang-undangan, dan efektivitas sistem pengendalian intern.</p>` },
      { title: 'Perpajakan (dasar)', html: `
        <ul>
          <li>Fungsi pajak: <b>budgetair</b> (penerimaan) dan <b>regulerend</b> (mengatur).</li>
          <li>Sistem pemungutan: <i>self assessment</i> (wajib pajak menghitung sendiri), <i>official assessment</i>, dan <i>withholding</i>.</li>
          <li>Tarif dan ketentuan sering berubah (mis. UU HPP) — selalu cocokkan dengan aturan terbaru.</li>
        </ul>` }
    ],
    tips: [
      'Hafal urutan opini: <b>WTP &gt; WDP &gt; TW &gt; TMP</b>.',
      'Bedakan tiga UU keuangan negara lewat <b>kata kunci</b>: keuangan negara (17), perbendaharaan (1), pemeriksaan (15).',
      'Soal akuntansi: periksa dahulu basis (<b>kas</b> vs <b>akrual</b>).'
    ]
  },
  {
    id: 'skb-prakom', group: 'SKB', title: 'SKB Pranata Komputer (Prakom)',
    summary: 'Subnetting, port, SQL, RPL/UML, OOP, keamanan, cloud, dan tata kelola TI/SPBE.',
    buckets: ['SKB_PRAKOM'],
    sections: [
      { title: 'Jaringan: OSI, subnetting, dan port', html: `
        <ul>
          <li>OSI 7 lapis (atas→bawah): Application, Presentation, Session, Transport, Network, Data Link, Physical.</li>
          <li>Jumlah host per subnet = <b>2ⁿ − 2</b> (n = bit host). Ukuran blok = 256 − nilai oktet netmask.</li>
        </ul>
        <table class="table table-sm">
          <thead><tr><th>CIDR</th><th>Netmask</th><th>Host</th></tr></thead>
          <tbody>
            <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
            <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
            <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
            <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
            <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
            <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
          </tbody>
        </table>
        <p><b>Port</b>: HTTP 80, HTTPS 443, FTP 21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, POP3 110, IMAP 143, RDP 3389, MySQL 3306, PostgreSQL 5432.</p>` },
      { title: 'RPL, OOP, dan basis data', html: `
        <ul>
          <li>SDLC: <i>waterfall</i> (berurutan) vs <i>agile/scrum</i> (iteratif). UML: <b>use case, class, activity, sequence</b>.</li>
          <li>OOP: <b>enkapsulasi, pewarisan, polimorfisme, abstraksi</b>.</li>
          <li>REST: GET (baca), POST (buat), PUT/PATCH (ubah), DELETE (hapus). Status: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error.</li>
          <li>SQL: <code>SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY</code>; JOIN: inner, left, right, full. Normalisasi 1NF → 2NF → 3NF.</li>
          <li>Struktur data: stack = LIFO, queue = FIFO. Binary search O(log n); bubble sort O(n²).</li>
        </ul>` },
      { title: 'Keamanan, cloud, dan tata kelola', html: `
        <ul>
          <li>Keamanan: <b>CIA triad</b> (Confidentiality, Integrity, Availability); enkripsi simetris (satu kunci) vs asimetris (kunci publik–privat).</li>
          <li>Cloud: <b>IaaS</b> (infrastruktur), <b>PaaS</b> (platform), <b>SaaS</b> (aplikasi jadi).</li>
          <li>Tata kelola: COBIT (tata kelola TI), ITIL (manajemen layanan), <b>SPBE</b> (Perpres 95/2018).</li>
        </ul>` }
    ],
    tips: [
      'Subnetting: cari <b>ukuran blok</b> dahulu (256 − oktet mask), lalu tentukan network, broadcast, dan rentang host.',
      'Hafal port umum — soal port hampir selalu mengambil dari daftar ini.',
      'Soal UML: <i>use case</i> = fungsi dilihat aktor, <i>class</i> = struktur, <i>sequence</i> = urutan pesan, <i>activity</i> = alur proses.'
    ]
  },
  {
    id: 'skb-kesehatan', group: 'SKB', title: 'SKB Kesehatan (Medis & Tenaga Kesehatan)',
    summary: 'UU Kesehatan 17/2023, enam pilar transformasi, PPI, triase, imunisasi dasar, dan keselamatan pasien.',
    buckets: ['SKB_KESEHATAN'],
    sections: [
      { title: 'Regulasi dan transformasi kesehatan', html: `
        <ul>
          <li><b>UU 17/2023 tentang Kesehatan</b> (omnibus kesehatan).</li>
          <li>Enam pilar transformasi: <b>layanan primer, layanan rujukan, sistem ketahanan kesehatan, pembiayaan kesehatan, SDM kesehatan, teknologi kesehatan</b>.</li>
        </ul>` },
      { title: 'PPI dan keselamatan pasien', html: `
        <ul>
          <li>Lima momen kebersihan tangan (WHO): sebelum kontak pasien, sebelum tindakan aseptik, setelah terpapar cairan tubuh, setelah kontak pasien, setelah kontak lingkungan pasien.</li>
          <li>Enam sasaran keselamatan pasien: ketepatan identifikasi pasien, komunikasi efektif, keamanan obat yang perlu diwaspadai, kepastian tepat lokasi–prosedur–pasien operasi, pengurangan risiko infeksi, dan pengurangan risiko jatuh.</li>
          <li>Jenis insiden: KPC (potensi cedera), KNC (nyaris cedera), KTC (tidak cedera), KTD (tidak diharapkan), kejadian sentinel.</li>
        </ul>` },
      { title: 'Triase & program KIA', html: `
        <ul>
          <li>Triase: <b>merah</b> (gawat darurat, prioritas pertama), <b>kuning</b> (dapat menunggu), <b>hijau</b> (ringan), <b>hitam</b> (meninggal/tidak tertolong).</li>
          <li>Imunisasi dasar lengkap: Hepatitis B (&lt; 24 jam), BCG, polio, DPT-HB-Hib, campak-rubella.</li>
        </ul>` }
    ],
    tips: [
      'Triase: yang <b>mengancam nyawa tetapi masih dapat diselamatkan</b> didahulukan (merah).',
      'Soal keselamatan pasien: pilih jawaban yang <b>melaporkan insiden tanpa menyalahkan</b> individu.',
      'Hafal enam pilar transformasi dengan urutan <b>primer – rujukan – ketahanan – pembiayaan – SDM – teknologi</b>.'
    ]
  },
  {
    id: 'skb-pendidikan', group: 'SKB', title: 'SKB Pendidikan, Guru & Dosen',
    summary: 'Kompetensi pendidik, taksonomi Bloom revisi (HOTS), jenis asesmen, dan teori belajar konstruktivistik.',
    buckets: ['SKB_PENDIDIKAN'],
    sections: [
      { title: 'Kompetensi dan regulasi', html: `
        <ul>
          <li><b>UU 14/2005 tentang Guru dan Dosen</b>: empat kompetensi guru — <b>pedagogik, kepribadian, sosial, profesional</b>.</li>
          <li><b>UU 20/2003 Sisdiknas</b> Pasal 3: fungsi dan tujuan pendidikan nasional. Jalur: formal, nonformal, informal.</li>
        </ul>` },
      { title: 'Taksonomi Bloom revisi (Anderson & Krathwohl)', html: `
        <table class="table table-sm">
          <tbody>
            <tr><td>C1</td><td>Mengingat</td><td rowspan="3">LOTS</td></tr>
            <tr><td>C2</td><td>Memahami</td></tr>
            <tr><td>C3</td><td>Menerapkan</td></tr>
            <tr><td>C4</td><td>Menganalisis</td><td rowspan="3"><b>HOTS</b></td></tr>
            <tr><td>C5</td><td>Mengevaluasi</td></tr>
            <tr><td>C6</td><td>Mencipta</td></tr>
          </tbody>
        </table>` },
      { title: 'Asesmen dan teori belajar', html: `
        <ul>
          <li><b>Formatif</b>: selama proses, untuk memperbaiki pembelajaran. <b>Sumatif</b>: akhir periode, untuk menentukan capaian. <b>Diagnostik</b>: mengenali kondisi awal peserta didik.</li>
          <li>Konstruktivisme: <b>Piaget</b> (tahap perkembangan kognitif), <b>Vygotsky</b> (ZPD dan <i>scaffolding</i>, interaksi sosial), <b>Bruner</b> (discovery learning), <b>Ausubel</b> (belajar bermakna).</li>
          <li>Behaviorisme: Pavlov, Skinner, Thorndike. Humanisme: Maslow, Rogers.</li>
        </ul>` }
    ],
    tips: [
      'HOTS = <b>C4–C6</b> (menganalisis, mengevaluasi, mencipta). Cari kata kerja operasionalnya pada soal.',
      '"ZPD" dan "scaffolding" → <b>Vygotsky</b>. "Discovery learning" → <b>Bruner</b>. "Stimulus–respons" → <b>behaviorisme</b>.',
      'Formatif = <i>perbaikan proses</i>; sumatif = <i>penentuan hasil</i>.'
    ]
  }
];
