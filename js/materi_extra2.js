/* ==========================================================================
   MATERI PENDALAMAN (v20) — dipetakan ke sub-topik soal agar materi = soal.
   Muat SETELAH js/materi.js dan js/materi_extra.js. Tidak mengubah file lain.
   ========================================================================== */
(function () {
  if (!window.MATERI) window.MATERI = [];
  var tbl = function (head, rows) {
    return '<table class="table table-sm"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
  var ul = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  var note = function (t) { return '<div class="callout">' + t + '</div>'; };
  var M = function (g, id, title, summary, subs, sections, tips, skb) {
    var o = { id: id, group: g, title: title, summary: summary, buckets: [g === 'SKB' ? 'SKB_PRAKOM' : 'SKD_' + g], subs: subs, sections: sections, tips: tips };
    if (g === 'SKB') o.skbCategory = 'PRAKOM';
    return o;
  };
  var list = [];   /* [oldId|null, item] */
  var add = function (oldId, item) { list.push([oldId, item]); };

  /* =================================================================== TWK */

  add('pancasila', M('TWK', 'twk-pancasila-lengkap', 'Pancasila Lengkap: Butir Sila, Sejarah Perumusan & Ideologi Terbuka',
    'Bunyi & lambang tiap sila, kata kunci pengamalan (pola soal "tindakan ↔ sila"), sidang BPUPKI–PPKI, tokoh, tiga dimensi ideologi terbuka.',
    ['Pilar Negara - Pancasila'], [
    {
      title: 'Lima Sila: Bunyi, Lambang & Kata Kunci Pengamalan',
      html: tbl(['Sila', 'Lambang', 'Kata kunci tindakan (untuk soal "tindakan ↔ sila")'], [
        ['<b>1.</b> Ketuhanan Yang Maha Esa', 'Bintang (cahaya)', 'toleransi &amp; kerukunan umat beragama · tidak memaksakan agama · menghormati ibadah/hari raya agama lain · bekerja jujur sebagai ibadah · menolak penodaan agama'],
        ['<b>2.</b> Kemanusiaan yang Adil dan Beradab', 'Rantai', 'tenggang rasa/tepa selira · tidak semena-mena · membela kebenaran &amp; keadilan · relawan, bantuan kemanusiaan (termasuk <b>internasional</b>) · melayani warga tanpa diskriminasi'],
        ['<b>3.</b> Persatuan Indonesia', 'Pohon beringin', 'cinta tanah air · bangga produk &amp; budaya dalam negeri (UMKM lokal) · kebinekaan · menolak separatisme/politik identitas · kepentingan bangsa di atas pribadi · kolaborasi lintas suku'],
        ['<b>4.</b> Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan', 'Kepala banteng', 'musyawarah untuk mufakat · menghargai pendapat berbeda · menerima keputusan bersama dengan iktikad baik · <b>hak pilih</b> dalam pemilu · aspirasi lewat saluran konstitusional'],
        ['<b>5.</b> Keadilan Sosial bagi Seluruh Rakyat Indonesia', 'Padi dan kapas', 'gotong royong · hak &amp; kewajiban seimbang · hidup sederhana, tidak boros · menghargai karya orang lain · koperasi · <b>pembangunan merata</b> (infrastruktur, JKN)']
      ]) + note('<b>Jebakan:</b> bantuan <b>kemanusiaan lintas negara</b> = sila 2 (bukan 3). <b>Pemilu/hak pilih</b> = sila 4. <b>Pembangunan merata, JKN, subsidi silang</b> = sila 5. <b>Bangga produk lokal</b> = sila 3. <b>Kerja jujur = ibadah</b> = sila 1.') +
        ul(['Urutan lambang mudah diingat: <b>B-R-B-K-P</b> (Bintang, Rantai, Beringin, Kepala banteng, Padi-kapas).',
          'Pancasila ditempatkan di <b>perisai</b> pada dada Garuda; pita bertuliskan <b>Bhinneka Tunggal Ika</b>; 17 bulu sayap, 8 ekor, 19 leher, 45 pangkal ekor (17-8-19-45 = 17 Agustus 1945).',
          'Perancang lambang negara: <b>Sultan Hamid II</b>, disempurnakan Presiden Soekarno; resmi dengan PP 66/1951.'])
    },
    {
      title: 'Sejarah Perumusan (Hafal Tanggal & Tokoh)',
      html: tbl(['Tanggal', 'Peristiwa', 'Isi / tokoh'], [
        ['29 Mei 1945', 'Pidato <b>Mr. Moh. Yamin</b> (BPUPKI)', '5 asas: peri kebangsaan, peri kemanusiaan, peri ketuhanan, peri kerakyatan, kesejahteraan rakyat'],
        ['31 Mei 1945', 'Pidato <b>Prof. Soepomo</b>', 'Asas negara integralistik: persatuan, kekeluargaan, keseimbangan lahir-batin, musyawarah, keadilan rakyat'],
        ['<b>1 Juni 1945</b>', 'Pidato <b>Ir. Soekarno</b>', 'Menyebut dasar negara <b>"Pancasila"</b>: kebangsaan, internasionalisme/perikemanusiaan, mufakat/demokrasi, kesejahteraan sosial, Ketuhanan. Diperas jadi Trisila (sosio-nasionalisme, sosio-demokrasi, ketuhanan) &amp; Ekasila (gotong royong). <b>= Hari Lahir Pancasila</b> (Keppres 24/2016)'],
        ['22 Juni 1945', '<b>Panitia Sembilan</b> → Piagam Jakarta', 'Anggota: Soekarno, Hatta, A.A. Maramis, Abikoesno Tjokrosoejoso, Abdul Kahar Muzakkir, Agus Salim, Achmad Soebardjo, Wahid Hasjim, Moh. Yamin. Sila 1 berbunyi "…dengan kewajiban menjalankan syariat Islam bagi pemeluknya" (7 kata)'],
        ['18 Agt 1945', '<b>PPKI</b> (ketua Soekarno, wakil Hatta)', 'Mengesahkan UUD 1945 &amp; Pancasila; <b>7 kata dihapus</b> → "Ketuhanan Yang Maha Esa" (atas usul Hatta setelah berdialog dengan tokoh Islam); memilih Presiden &amp; Wapres']
      ]) + ul(['<b>BPUPKI</b> (Dokuritsu Junbi Cosakai) — ketua <b>dr. K.R.T. Radjiman Wedyodiningrat</b>; Sidang I: <b>29 Mei–1 Juni 1945</b> (dasar negara); Sidang II: <b>10–17 Juli 1945</b> (rancangan UUD).',
        '<b>PPKI</b> (Dokuritsu Junbi Iinkai) dibentuk 7 Agustus 1945; mengesahkan UUD dan membagi 8 provinsi.',
        '<b>Hari Kesaktian Pancasila</b> = 1 Oktober (peringatan gagalnya G30S/PKI 1965).',
        'Pancasila: <b>dasar negara</b> (Pembukaan alinea IV), <b>pandangan hidup</b>, <b>ideologi nasional</b>, <b>pemersatu bangsa</b>, <b>kepribadian bangsa</b>, <b>sumber dari segala sumber hukum negara</b> (UU 12/2011).',
        'Pembina ideologi: <b>BPIP</b> (Badan Pembinaan Ideologi Pancasila). P4/Eka Prasetya Pancakarsa (TAP MPR II/1978) telah <b>dicabut</b> (TAP MPR XVIII/1998).'])
    },
    {
      title: 'Pancasila sebagai Ideologi Terbuka & Sistem Filsafat',
      html: tbl(['Dimensi (Alfian/Moerdiono)', 'Makna', 'Kata kunci'], [
        ['<b>Idealitas</b>', 'Nilai dasar mengandung cita-cita/harapan luhur yang memberi arah masa depan', 'cita-cita, harapan, tujuan'],
        ['<b>Normatif</b>', 'Nilai dasar dituangkan dalam norma hukum (Pembukaan UUD, UUD, UU)', 'norma, aturan, konstitusi'],
        ['<b>Realitas</b> (fleksibilitas)', 'Nilai berakar pada budaya &amp; kehidupan nyata masyarakat; dapat dijabarkan sesuai perkembangan zaman', 'berakar pada masyarakat, pengalaman hidup, kenyataan']
      ]) + ul(['<b>Nilai dasar</b> (tetap, inti sila) → <b>nilai instrumental</b> (peraturan, dapat berubah) → <b>nilai praksis</b> (pelaksanaan sehari-hari).',
        'Ideologi terbuka: nilai dasar <b>tidak berubah</b>, tetapi penjabarannya <b>dinamis</b>; tidak boleh diganti ideologi lain (liberal-kapitalis, komunis).',
        'Pancasila sebagai <b>sistem filsafat</b>: sila-sila bersifat <b>hierarkis piramidal</b> dan saling mengisi (kesatuan majemuk-tunggal). Sila 1 menjiwai sila 2–5.',
        'Tiga ideologi dunia pembanding: liberalisme (individu), komunisme/sosialisme (kolektif-materialis), <b>Pancasila (keseimbangan individu–masyarakat, berketuhanan)</b>.'])
    }
  ], ['Soal "tindakan ↔ sila": cari <b>kata kunci inti</b> pada tabel lalu cocokkan, abaikan latar cerita (rapat desa, pelayanan publik, dsb.).', 'Hafal: 29 Mei Yamin · 31 Mei Soepomo · <b>1 Juni Soekarno</b> · 22 Juni Piagam Jakarta · <b>18 Agustus PPKI</b>.', 'Idealitas = cita-cita · Normatif = hukum · Realitas = berakar di masyarakat.']));

  add('integritas-asn', M('TWK', 'twk-integritas-lengkap', 'Integritas & Antikorupsi ASN: Gratifikasi, Suap, KPK, BerAKHLAK',
    'Definisi pembeda, 9 nilai KPK, kewajiban lapor 30 hari kerja, benturan kepentingan, LHKPN, SPIP, kode etik & BerAKHLAK.',
    ['Integritas'], [
    {
      title: 'Pembeda Gratifikasi, Suap, Pemerasan, Benturan Kepentingan',
      html: tbl(['Istilah', 'Ciri', 'Dasar'], [
        ['<b>Gratifikasi</b>', 'Pemberian <b>dalam arti luas</b> (uang, barang, rabat/diskon, komisi, pinjaman tanpa bunga, tiket, penginapan, wisata, pengobatan gratis). Searah, tanpa kesepakatan. <b>Dianggap suap</b> bila berhubungan dengan jabatan &amp; berlawanan dengan kewajiban/tugas', 'Pasal 12B UU 31/1999 jo UU 20/2001'],
        ['<b>Suap</b>', 'Ada <b>kesepakatan dua pihak</b> (pemberi–penerima): memberi sesuatu agar pejabat berbuat/tidak berbuat yang bertentangan dengan kewajiban', 'Pasal 5, 12 huruf a/b'],
        ['<b>Pemerasan</b>', '<b>Pejabat yang memaksa</b> pihak lain memberi sesuatu', 'Pasal 12 huruf e'],
        ['<b>Benturan kepentingan</b>', 'Kondisi pejabat <b>memiliki kepentingan pribadi/golongan</b> dalam penggunaan wewenang sehingga memengaruhi keputusan; wajib <b>mundur dari pengambilan keputusan</b> &amp; mendeklarasikan', 'Pasal 42 UU 30/2014 (AP)'],
        ['<b>Kerugian keuangan negara</b>', 'Melawan hukum memperkaya diri/orang lain yang merugikan keuangan negara; penyalahgunaan wewenang', 'Pasal 2 &amp; 3 UU Tipikor']
      ]) + ul(['<b>Kewajiban lapor gratifikasi:</b> ke <b>KPK paling lambat 30 hari kerja</b> sejak diterima (Pasal 12C) — boleh melalui <b>UPG</b> (Unit Pengendali Gratifikasi) instansi.',
        'KPK menetapkan dalam <b>30 hari kerja</b> apakah gratifikasi menjadi milik negara atau penerima.',
        'Tidak wajib lapor: pemberian yang <b>lazim</b> dalam keluarga/adat/acara pernikahan, dalam batas kewajaran, tanpa kaitan jabatan.',
        '7 kelompok korupsi (KPK): kerugian keuangan negara · suap-menyuap · penggelapan dalam jabatan · pemerasan · perbuatan curang · benturan kepentingan dalam pengadaan · <b>gratifikasi</b>.'])
    },
    {
      title: 'KPK: 9 Nilai Integritas, Tugas & Instrumen',
      html: tbl(['Aspek', 'Nilai', 'Mnemonik'], [
        ['<b>Inti</b>', 'Jujur · Disiplin · Tanggung jawab', 'J-D-T'],
        ['<b>Sikap</b>', 'Adil · Berani · Peduli', 'A-B-P'],
        ['<b>Etos Kerja</b>', 'Kerja keras · Sederhana · Mandiri', 'K-S-M']
      ]) + note('Urutan aspek: <b>Inti → Sikap → Etos Kerja</b>. Jawaban "aspek INTI" = <b>Jujur, Disiplin, Tanggung jawab</b>.') +
        ul(['<b>KPK</b> (UU 30/2002 jo UU 19/2019): lembaga negara <b>rumpun eksekutif yang independen</b>; tugas: <b>pencegahan, koordinasi, supervisi, monitoring, penyelidikan, penyidikan, penuntutan</b>; ada <b>Dewan Pengawas</b>.',
          '<b>LHKPN</b> (UU 28/1999 tentang Penyelenggara Negara yang Bersih dan Bebas KKN): Laporan Harta Kekayaan Penyelenggara Negara — dilaporkan <b>sebelum menjabat, berkala tiap tahun, dan saat berakhir jabatan</b>.',
          '<b>SPIP</b> (PP 60/2008) — proses menyeluruh yang <b>memberikan keyakinan memadai</b> atas tercapainya tujuan: <b>efektivitas &amp; efisiensi</b> kegiatan, <b>keandalan laporan keuangan</b>, <b>pengamanan aset negara</b>, <b>ketaatan pada peraturan</b>. 5 unsur: <b>lingkungan pengendalian, penilaian risiko, kegiatan pengendalian, informasi &amp; komunikasi, pemantauan</b>.',
          '<b>Whistleblower</b> dilindungi <b>LPSK</b> (UU 13/2006 jo UU 31/2014); <b>justice collaborator</b> = pelaku yang bekerja sama membongkar kasus.',
          'Stranas PK (Perpres 54/2018) — fokus: perizinan &amp; tata niaga, keuangan negara, penegakan hukum &amp; reformasi birokrasi.'])
    },
    {
      title: 'Nilai Dasar ASN, BerAKHLAK & Kode Etik',
      html: tbl(['Huruf', 'Core value ASN', 'Perilaku utama'], [
        ['<b>Ber</b>', 'Berorientasi Pelayanan', 'ramah, cekatan, solutif, melayani dengan integritas'],
        ['<b>A</b>', 'Akuntabel', 'bertanggung jawab atas kepercayaan, jaga kerahasiaan, tidak menyalahgunakan wewenang'],
        ['<b>K</b>', 'Kompeten', 'meningkatkan kompetensi diri, membantu orang lain belajar, melaksanakan tugas berkualitas'],
        ['<b>H</b>', 'Harmonis', 'peduli, menghargai perbedaan, suasana kerja kondusif'],
        ['<b>L</b>', 'Loyal', 'setia kepada Pancasila/UUD/NKRI &amp; pimpinan yang sah, menjaga nama baik, menjaga rahasia jabatan'],
        ['<b>A</b>', 'Adaptif', 'cepat menyesuaikan perubahan, inovatif, bertindak proaktif'],
        ['<b>K</b>', 'Kolaboratif', 'kerja sama lintas pihak, terbuka, hasil bersama']
      ]) + ul(['Dasar: <b>SE MenPANRB No. 20/2021</b>; employer branding: <b>"Bangga Melayani Bangsa"</b>.',
        '<b>Tiga fungsi ASN:</b> pelaksana kebijakan publik · pelayan publik · perekat &amp; pemersatu bangsa.',
        '<b>Asas &amp; prinsip:</b> sistem <b>merit</b> (kualifikasi, kompetensi, kinerja tanpa diskriminasi) · <b>netralitas</b> (bebas dari pengaruh partai politik) · profesionalitas.',
        'Disiplin ASN: <b>PP 94/2021</b> (hukuman ringan, sedang, berat; berat: penurunan jabatan, pembebasan, <b>pemberhentian</b>). ASN juga wajib menjaga <b>kerahasiaan</b> dan <b>tidak menyalahgunakan</b> jabatan.'])
    },
    {
      title: 'Pola Soal Kasus Integritas (Cara Memilih Jawaban)',
      html: tbl(['Situasi', 'Sikap benar'], [
        ['Ditawari komisi/hadiah oleh vendor', '<b>Tolak</b> dengan sopan; bila telanjur menerima → <b>laporkan ke KPK/UPG ≤30 hari kerja</b>'],
        ['Atasan menyuruh memanipulasi laporan', 'Tolak sopan, jelaskan risiko, <b>sesuaikan dengan data riil</b>; laporkan bila memaksa (WBS)'],
        ['Kerabat ikut seleksi/pengadaan di unit sendiri', '<b>Deklarasikan</b> benturan kepentingan &amp; <b>mundur</b> dari proses keputusan'],
        ['Menemukan rekan korupsi', 'Kumpulkan bukti &amp; <b>laporkan lewat kanal resmi</b> (WBS/inspektorat/KPK); tidak menghakimi/menyebar di medsos'],
        ['Teladan integritas', 'Mohammad Hatta (bersahaja, tidak membeli sepatu Bally demi tidak memakai uang yang tidak halal), Agus Salim, K.H. Agus Salim, Kahar Muzakkir']
      ]) + note('<b>Pola jawaban benar:</b> menolak → melaporkan lewat jalur resmi → tidak ikut menikmati. <b>Pola jawaban salah:</b> menerima "asal tidak memengaruhi keputusan", menyimpan diam-diam, membalas dengan konfrontasi, mengancam melapor demi imbalan.')
    }
  ], ['Gratifikasi = searah &amp; wajib lapor <b>30 hari kerja</b>; suap = dua arah; pemerasan = dipaksa pejabat.', 'Hafal 9 nilai KPK per aspek: <b>JDT – ABP – KSM</b>.', 'BerAKHLAK urut: Berorientasi pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.']));

  add('nkri-bhinneka', M('TWK', 'twk-nkri-lengkap', 'NKRI, Wilayah, Bhinneka Tunggal Ika & Wawasan Nusantara',
    'Deklarasi Djuanda, UNCLOS (zona laut), Wawasan Nusantara & Asta Gatra, Bhinneka Tunggal Ika, Mosi Integral Natsir, bentuk negara.',
    ['Pilar Negara - NKRI', 'Bhinneka Tunggal Ika'], [
    {
      title: 'Bentuk Negara, Lambang & Semboyan',
      html: tbl(['Hal', 'Isi'], [
        ['Bentuk negara', 'Kesatuan, berbentuk republik (Pasal 1 ayat 1); NKRI <b>tidak dapat diubah</b> (Pasal 37 ayat 5)'],
        ['Sistem pemerintahan', '<b>Presidensial</b>; Presiden = kepala negara &amp; kepala pemerintahan; menteri bertanggung jawab kepada Presiden'],
        ['Bhinneka Tunggal Ika', 'Dari kitab <b>Kakawin Sutasoma</b> karya <b>Mpu Tantular</b> (era Majapahit, Raja Hayam Wuruk). Kalimat lengkap: <i>"Bhinneka Tunggal Ika, tan hana dharma mangrwa"</i> = berbeda-beda tetapi tetap satu, tidak ada kebenaran yang mendua. Latar: toleransi Hindu (Siwa) dan Buddha'],
        ['Dasar hukum simbol', 'Pasal 35 (bendera Merah Putih), 36 (bahasa Indonesia), 36A (Garuda Pancasila, Bhinneka Tunggal Ika), 36B (Indonesia Raya); UU 24/2009'],
        ['Hari penting', '17 Agt (Proklamasi) · 18 Agt (UUD) · 1 Jun (Lahir Pancasila) · 13 Des (Hari Nusantara) · <b>3 April 1950 Mosi Integral Natsir</b> → kembali ke NKRI <b>17 Agt 1950</b>']
      ]) + note('<b>Mosi Integral Natsir</b> (Moh. Natsir, 3 April 1950, di parlemen RIS): mengusulkan penyatuan negara-negara bagian RIS menjadi <b>NKRI</b> secara damai dan konstitusional.')
    },
    {
      title: 'Wilayah Laut: Deklarasi Djuanda & UNCLOS 1982',
      html: tbl(['Waktu', 'Peristiwa'], [
        ['1939', '<b>TZMKO</b> (warisan Belanda): laut teritorial hanya <b>3 mil</b> dari garis pantai → laut antar-pulau dianggap laut bebas'],
        ['<b>13 Des 1957</b>', '<b>Deklarasi Djuanda</b> (PM Djuanda Kartawidjaja): laut di antara pulau-pulau Indonesia adalah <b>satu kesatuan wilayah</b> (konsep negara kepulauan/archipelagic state)'],
        ['1960', 'UU Prp 4/1960 tentang Perairan Indonesia'],
        ['1982', '<b>UNCLOS</b> (Konvensi PBB tentang Hukum Laut) mengakui negara kepulauan; Indonesia meratifikasi lewat UU 17/1985; berlaku internasional 1994']
      ]) + tbl(['Zona', 'Lebar (dari garis pangkal)', 'Hak negara'], [
        ['Laut teritorial', '<b>12 mil laut</b>', 'Kedaulatan penuh (kapal asing: hak lintas damai)'],
        ['Zona tambahan', 'Maks <b>24 mil laut</b>', 'Penegakan hukum bea cukai, imigrasi, fiskal, saniter'],
        ['<b>ZEE</b> (Zona Ekonomi Eksklusif)', 'Maks <b>200 mil laut</b>', '<b>Hak berdaulat</b> mengeksplorasi &amp; mengelola SDA; kebebasan berlayar tetap'],
        ['Landas kontinen', '200 mil laut (dapat sampai 350 mil)', 'Hak berdaulat atas SDA dasar laut &amp; tanah di bawahnya'],
        ['Laut lepas', 'Di luar ZEE', 'Bebas bagi semua negara']
      ]) + ul(['<b>ALKI</b> (Alur Laut Kepulauan Indonesia): 3 jalur utara–selatan (ALKI I, II, III) untuk lintas kapal asing.',
        'UU 43/2008 tentang Wilayah Negara; batas darat dengan <b>Malaysia</b> (Kalimantan), <b>Papua Nugini</b> (Papua), <b>Timor Leste</b> (NTT).'])
    },
    {
      title: 'Wawasan Nusantara & Ketahanan Nasional',
      html: ul(['<b>Wawasan Nusantara</b> = cara pandang bangsa Indonesia terhadap diri dan lingkungannya berdasarkan Pancasila &amp; UUD 1945 yang menekankan <b>persatuan dan kesatuan</b> wilayah, bangsa, dan kepentingan.',
        'Kesatuan dalam 4 bidang: <b>politik</b> (satu kesatuan politik), <b>ekonomi</b> (satu kesatuan ekonomi), <b>sosial budaya</b> (satu masyarakat), <b>pertahanan keamanan</b> (satu kesatuan pertahanan).',
        '<b>Ketahanan nasional</b> diukur dengan <b>Asta Gatra</b> (8 aspek) = <b>Tri Gatra</b> alamiah (geografi, demografi/kependudukan, sumber kekayaan alam) + <b>Panca Gatra</b> sosial (ideologi, politik, ekonomi, sosial budaya, pertahanan &amp; keamanan).',
        'Ancaman: militer, nonmiliter (ideologi, politik, ekonomi, sosbud, teknologi), hibrida; ancaman <b>disintegrasi</b>: separatisme, politik identitas, intoleransi, radikalisme.',
        'Sikap ASN terhadap perbedaan: <b>memfasilitasi dialog</b>, menegakkan <b>kesetaraan hak</b>, menolak diskriminasi SARA, melayani tanpa membeda-bedakan.'])
    }
  ], ['Garis waktu laut: <b>1939 (3 mil) → 1957 Djuanda → 1982 UNCLOS</b>.', 'Zona laut: <b>12 – 24 – 200 – (350)</b> mil laut.', 'Wawasan Nusantara = <b>satu kesatuan</b> politik, ekonomi, sosbud, hankam.']));

  add('twk-sejarah-otda', M('TWK', 'twk-otda-hierarki', 'Otonomi Daerah, Urusan Pemerintahan & Hierarki Peraturan',
    'UU 23/2014 (urusan absolut, konkuren), asas desentralisasi, lembaga negara, hierarki UU 12/2011, periode demokrasi Indonesia.',
    ['Sistem Pemerintahan', 'Otonomi Daerah'], [
    {
      title: 'Urusan Pemerintahan (UU 23/2014)',
      html: tbl(['Jenis urusan', 'Isi'], [
        ['<b>Absolut</b> (6, tidak boleh diserahkan ke daerah)', '<b>P-P-K-Y-M-A</b>: Politik luar negeri · Pertahanan · Keamanan · Yustisi (peradilan) · Moneter &amp; fiskal nasional · Agama'],
        ['<b>Konkuren</b> (dibagi pusat–provinsi–kab/kota)', 'Urusan wajib <b>pelayanan dasar</b>: pendidikan, kesehatan, pekerjaan umum &amp; penataan ruang, perumahan rakyat, ketenteraman-ketertiban umum &amp; linmas, sosial. Wajib <b>non-pelayanan dasar</b>: tenaga kerja, pangan, lingkungan hidup, kependudukan, dll. <b>Pilihan</b>: kelautan &amp; perikanan, pariwisata, pertanian, kehutanan, ESDM, perdagangan, perindustrian, transmigrasi'],
        ['<b>Umum</b>', 'Dipegang Presiden sebagai kepala pemerintahan (kebangsaan, ideologi, kerukunan, dll.), dilaksanakan Gubernur/Bupati/Walikota dibantu instansi vertikal']
      ]) + tbl(['Asas', 'Arti'], [
        ['Desentralisasi', 'Penyerahan urusan dari pusat ke daerah otonom'],
        ['Dekonsentrasi', 'Pelimpahan wewenang pusat kepada <b>gubernur sebagai wakil pemerintah pusat</b>/instansi vertikal'],
        ['Tugas pembantuan', 'Penugasan dari pusat ke daerah (atau provinsi ke kab/kota) untuk melaksanakan urusan tertentu']
      ]) + ul(['Dasar konstitusi: Pasal 18, 18A, 18B (otonomi <b>seluas-luasnya</b>, kecuali urusan absolut). Daerah khusus/istimewa: DKI Jakarta, Aceh, Papua, DI Yogyakarta.',
        'Pemda = <b>kepala daerah + DPRD</b>; kepala daerah dipilih secara demokratis (pilkada).'])
    },
    {
      title: 'Lembaga Negara & Hierarki Peraturan (UU 12/2011 jo UU 13/2022)',
      html: tbl(['Rumpun', 'Lembaga'], [
        ['Legislatif', 'MPR, DPR, DPD, (DPRD)'],
        ['Eksekutif', 'Presiden &amp; Wapres, kementerian, TNI/Polri, lembaga pemerintah nonkementerian'],
        ['Yudikatif', 'MA, MK, KY'],
        ['Pemeriksa', 'BPK'],
        ['Lembaga independen/penunjang', 'KPK, KPU, Bawaslu, DKPP, Komnas HAM, Ombudsman, KPI, LPSK, OJK, KIP']
      ]) + tbl(['Urutan hierarki (tertinggi → terendah)'], [
        ['1. Undang-Undang Dasar Negara RI Tahun 1945'], ['2. Ketetapan MPR'], ['3. Undang-Undang / Peraturan Pemerintah Pengganti UU (Perppu)'], ['4. Peraturan Pemerintah (PP)'], ['5. Peraturan Presiden (Perpres)'], ['6. Peraturan Daerah Provinsi'], ['7. Peraturan Daerah Kabupaten/Kota']
      ]) + ul(['Asas: <i>lex superior derogat legi inferiori</i> (yang lebih tinggi mengalahkan), <i>lex specialis derogat legi generali</i> (yang khusus mengalahkan yang umum), <i>lex posterior derogat legi priori</i> (yang baru mengalahkan yang lama).',
        '<b>Perppu</b>: ditetapkan Presiden dalam <b>kegentingan yang memaksa</b> (Pasal 22); harus mendapat persetujuan DPR pada persidangan berikutnya — disetujui → menjadi UU; ditolak → dicabut.',
        '<b>Pancasila</b> = sumber segala sumber hukum negara. <b>Omnibus law</b> = satu UU yang mengubah banyak UU (contoh UU Cipta Kerja).'])
    },
    {
      title: 'Periode Sistem Politik & Pemerintahan',
      html: tbl(['Periode', 'Ciri'], [
        ['1945–1949', 'Presidensial → parlementer (Maklumat Wakil Presiden No. X, 3 Nov 1945: multipartai; sistem kabinet parlementer 14 Nov 1945)'],
        ['1949–1950', 'RIS (federal), Konstitusi RIS'],
        ['1950–1959', '<b>Demokrasi Liberal/Parlementer</b> (UUDS 1950); Pemilu 1955 (DPR &amp; Konstituante)'],
        ['1959–1966', '<b>Demokrasi Terpimpin</b> (Dekrit 5 Juli 1959; Nasakom)'],
        ['1966–1998', '<b>Orde Baru</b>, Demokrasi Pancasila (Soeharto)'],
        ['1998–kini', '<b>Reformasi</b>: amandemen UUD, pemilu langsung, otonomi daerah (UU 22/1999 → UU 32/2004 → UU 23/2014)']
      ]) + ul(['Urutan presiden: Soekarno → Soeharto → B.J. Habibie → Abdurrahman Wahid → Megawati Soekarnoputri → S.B. Yudhoyono → Joko Widodo → Prabowo Subianto (dilantik 20 Okt 2024).',
        'Pemilu langsung presiden pertama: <b>2004</b>; Pilkada langsung: 2005.'])
    }
  ], ['Urusan absolut: <b>PPKYMA</b>.', 'Hierarki: <b>UUD → TAP MPR → UU/Perppu → PP → Perpres → Perda Prov → Perda Kab/Kota</b>.', 'Dekonsentrasi = wakil pusat (gubernur); tugas pembantuan = penugasan.']));

  add('twk-sejarah-tokoh', M('TWK', 'twk-sejarah-tanggal', 'Tonggak Sejarah: Tanggal, Peristiwa & Makna (Pola Soal "Tonggak")',
    'Daftar tonggak yang sering muncul pada soal: BPUPKI, Panitia Sembilan, PPKI, KMB, Roem-Roijen, Renville, Linggarjati, KAA, Taman Siswa, Indische Partij, dll.',
    ['Sejarah Nasional'], [
    {
      title: 'Tabel Tonggak (Tanggal – Makna Strategis)',
      html: tbl(['Peristiwa', 'Tanggal', 'Makna / isi pokok'], [
        ['<b>Budi Utomo</b>', '20 Mei 1908', 'Organisasi modern pertama; <b>memelopori perjuangan modern lewat organisasi terstruktur</b> (bukan angkat senjata/kedaerahan); Hari Kebangkitan Nasional; tokoh dr. Soetomo (mahasiswa STOVIA), dr. Wahidin'],
        ['<b>Sarekat Islam</b>', '1912 (dari SDI 1905, H. Samanhudi)', 'Pimpinan H.O.S. Tjokroaminoto; organisasi massa pertama'],
        ['<b>Indische Partij</b>', '<b>25 Des 1912</b>', 'Tiga Serangkai (Douwes Dekker, Cipto Mangunkusumo, Soewardi Soerjaningrat); partai politik pertama, menuntut kemerdekaan'],
        ['<b>Perhimpunan Indonesia</b>', 'Indische Vereeniging 1908 → PI 1925', 'Mahasiswa di Belanda (Moh. Hatta); "Manifesto Politik 1925": persatuan, kemerdekaan, tanpa kerja sama'],
        ['<b>Taman Siswa</b>', '<b>3 Juli 1922</b>', 'Ki Hajar Dewantara; pendidikan nasional di Yogyakarta'],
        ['<b>Kongres Pemuda II</b>', '<b>27–28 Okt 1928</b>', 'Melahirkan Sumpah Pemuda; <b>mengubah corak perjuangan dari kedaerahan menjadi persatuan nasional</b> (menyatukan keberagaman suku &amp; daerah); Indonesia Raya (W.R. Supratman) pertama dikumandangkan'],
        ['<b>Sidang I BPUPKI</b>', '<b>29 Mei–1 Juni 1945</b>', 'Membahas rumusan dasar negara (Yamin, Soepomo, Soekarno)'],
        ['<b>Panitia Sembilan</b>', '<b>22 Juni 1945</b>', 'Piagam Jakarta (cikal bakal Pembukaan UUD)'],
        ['<b>Rengasdengklok</b>', '16 Agt 1945', 'Golongan muda menculik Soekarno-Hatta mendesak proklamasi'],
        ['<b>Proklamasi</b>', '17 Agt 1945', 'Dibacakan Soekarno di Jl. Pegangsaan Timur 56'],
        ['<b>Sidang PPKI I</b>', '18 Agt 1945', 'Mengesahkan UUD 1945, memilih Presiden &amp; Wapres'],
        ['<b>Pertempuran Surabaya</b>', '10 Nov 1945', 'Hari Pahlawan'],
        ['<b>Linggarjati</b>', 'Nov 1946', 'Belanda mengakui secara <b>de facto</b> wilayah RI: <b>Jawa, Madura, Sumatra</b>; pembentukan negara serikat (RIS) bersama Uni Indonesia-Belanda'],
        ['<b>Renville</b>', 'Jan 1948', 'Wilayah RI makin sempit: <b>garis demarkasi Van Mook</b>; pasukan TNI harus ditarik dari kantong-kantong wilayah Belanda (Hijrah Divisi Siliwangi ke Jawa Tengah)'],
        ['<b>PDRI</b>', '<b>19 Des 1948</b>', 'Sjafruddin Prawiranegara di Sumatra Barat → Hari Bela Negara'],
        ['<b>Serangan Umum 1 Maret</b>', '1 Mar 1949', 'Membuktikan TNI &amp; RI masih ada (gagasan Sri Sultan HB IX)'],
        ['<b>Roem-Roijen</b>', '<b>7 Mei 1949</b>', 'Pemerintah RI kembali ke Yogyakarta; Belanda hentikan operasi militer'],
        ['<b>KMB</b>', '<b>23 Agt–2 Nov 1949</b>', 'Penyerahan kedaulatan 27 Des 1949 (RIS)'],
        ['<b>Mosi Integral Natsir</b>', '3 April 1950', 'Menuju NKRI; NKRI kembali <b>17 Agt 1950</b>'],
        ['<b>KAA Bandung</b>', '<b>18–24 April 1955</b>', 'Menghasilkan <b>Dasasila Bandung</b>; embrio Gerakan Non-Blok'],
        ['<b>Dekrit Presiden</b>', '5 Juli 1959', 'Kembali ke UUD 1945, bubarkan Konstituante'],
        ['<b>Deklarasi Djuanda</b>', '13 Des 1957', 'Laut antar-pulau satu kesatuan wilayah'],
        ['<b>Supersemar</b>', '11 Mar 1966', 'Surat perintah kepada Soeharto'],
        ['<b>Reformasi</b>', '21 Mei 1998', 'Soeharto mundur; Habibie presiden']
      ]) + note('Setiap soal "tonggak" menggabungkan <b>tokoh + peristiwa + makna</b>. Hafalkan <b>kata kunci makna</b>-nya: Panitia Sembilan = Piagam Jakarta; PPKI = UUD; KMB = kedaulatan; Roem-Roijen = RI kembali ke Yogya; Natsir = NKRI.')
    },
    {
      title: 'Lembaga Antikorupsi & Penunjang yang Sering Dipasangkan pada Soal Sejarah',
      html: ul(['<b>KPK</b> — UU 30/2002 jo UU 19/2019 — tugas pencegahan, koordinasi, supervisi, monitoring, penyelidikan, penyidikan, penuntutan.',
        '<b>LHKPN</b> — UU 28/1999 (penyelenggara negara bersih).',
        '<b>SPIP</b> — PP 60/2008 (sistem pengendalian intern pemerintah).',
        '<b>Ombudsman</b> — UU 37/2008 (pengawas pelayanan publik); <b>UU Pelayanan Publik</b> 25/2009; <b>UU Keterbukaan Informasi Publik</b> 14/2008.'])
    }
  ], ['Hafal <b>tiga tanggal 1945</b>: 22 Juni (Piagam), 17 Agt (Proklamasi), 18 Agt (UUD).', 'KMB 23 Agt–2 Nov 1949; Roem-Roijen 7 Mei 1949; KAA 18–24 April 1955.']));

  /* =================================================================== TIU */

  add('silogisme', M('TIU', 'tiu-silogisme-lengkap', 'Silogisme & Logika: Kuantor, Implikasi, Kontraposisi, Negasi',
    'Aturan penarikan kesimpulan yang PASTI benar, ekuivalensi implikasi, negasi, modus ponens/tollens, dan langkah 3 detik.',
    ['Verbal - Silogisme', 'Logika Silogisme', 'Penalaran Logis'], [
    {
      title: 'Silogisme Kategoris (Semua / Sebagian / Tidak Ada)',
      html: tbl(['Premis 1', 'Premis 2', 'Kesimpulan pasti benar'], [
        ['Semua A adalah B', 'Semua B adalah C', '<b>Semua A adalah C</b>'],
        ['Semua A adalah B', 'Sebagian A adalah C', '<b>Sebagian C adalah B</b> (= sebagian B adalah C)'],
        ['Semua A adalah B', 'Tidak ada B yang C', '<b>Tidak ada A yang C</b>'],
        ['Semua A adalah B', 'Sebagian C bukan B', '<b>Sebagian C bukan A</b>'],
        ['Semua A adalah B', 'C bukan B (tidak ada C yang B)', '<b>C bukan A</b> (kontraposisi)'],
        ['Sebagian A adalah B', 'Semua B adalah C', '<b>Sebagian A adalah C</b>'],
        ['Tidak ada A yang B', 'Sebagian C adalah A', '<b>Sebagian C bukan B</b>'],
        ['Sebagian A adalah B', 'Sebagian B adalah C', '<b>Tidak ada kesimpulan pasti</b> (dua premis khusus)'],
        ['Tidak ada A yang B', 'Tidak ada B yang C', '<b>Tidak ada kesimpulan pasti</b> (dua premis negatif)']
      ]) + ul(['<b>Kesimpulan pasti benar</b> = berlaku di <b>semua</b> kemungkinan diagram Venn; gambar Venn paling aman.',
        '<b>Kuantor:</b> "Semua" kuat; "Sebagian" = <b>minimal satu</b> (tidak berarti "sebagian lainnya tidak").',
        'Dua premis sama-sama <b>"sebagian"</b> atau sama-sama <b>"tidak"</b> → biasanya tidak ada kesimpulan.',
        '<b>Konversi:</b> "Sebagian A adalah B" ≡ "Sebagian B adalah A"; "Tidak ada A yang B" ≡ "Tidak ada B yang A"; tetapi "Semua A adalah B" <b>≠</b> "Semua B adalah A".',
        '<b>Negasi kuantor:</b> ingkaran "Semua A adalah B" = "<b>Ada/sebagian A bukan B</b>"; ingkaran "Sebagian A adalah B" = "<b>Tidak ada A yang B</b>".'])
    },
    {
      title: 'Logika Kondisional (Jika … maka …)',
      html: tbl(['Bentuk', 'Rumus', 'Ekuivalen dengan p→q?'], [
        ['Implikasi', 'p → q', '—'],
        ['<b>Kontraposisi</b>', '¬q → ¬p (jika tidak q, maka tidak p)', '<b>YA, ekuivalen</b>'],
        ['Disjungsi', '¬p ∨ q (tidak p atau q)', '<b>YA, ekuivalen</b>'],
        ['Invers', '¬p → ¬q', 'TIDAK'],
        ['Konvers', 'q → p', 'TIDAK'],
        ['<b>Negasi/ingkaran</b>', '<b>p ∧ ¬q</b> (p tetapi tidak q)', 'bukan ekuivalen; itu lawannya']
      ]) + tbl(['Penarikan kesimpulan', 'Bentuk', 'Contoh'], [
        ['<b>Modus Ponens</b>', 'p → q; p ⊢ <b>q</b>', 'Jika hujan, rapat ditunda. Hujan. ⊢ Rapat ditunda'],
        ['<b>Modus Tollens</b>', 'p → q; ¬q ⊢ <b>¬p</b>', 'Jika hujan deras, rapat ditunda. Rapat tidak ditunda. ⊢ Tidak hujan deras'],
        ['<b>Silogisme hipotetis</b>', 'p → q; q → r ⊢ <b>p → r</b>', 'Inflasi terkendali → daya beli naik → ekonomi tumbuh ⊢ inflasi terkendali → ekonomi tumbuh'],
        ['<b>Silogisme disjungtif</b>', 'p ∨ q; ¬p ⊢ <b>q</b>', 'Rapat di A atau B; bukan di A ⊢ di B'],
        ['<b>Kekeliruan</b> (tidak sah)', 'p → q; q ⊢ p (afirmasi konsekuen) &amp; p → q; ¬p ⊢ ¬q (penyangkalan anteseden)', 'Rapat ditunda ≠ pasti hujan']
      ]) + note('<b>Kata kunci:</b> "p <b>hanya jika</b> q" = p → q. "p <b>jika</b> q" = q → p. "p <b>jika dan hanya jika</b> q" = p ↔ q (dua arah). "<b>Tidak mungkin</b> p kecuali q" = p → q.') +
        ul(['De Morgan: <b>¬(p ∧ q) ≡ ¬p ∨ ¬q</b>; <b>¬(p ∨ q) ≡ ¬p ∧ ¬q</b>.',
          'Ingkaran "Jika p maka q" = "<b>p dan tidak q</b>". Contoh: ingkaran "Jika lengkap maka lulus" = "Berkas lengkap <b>tetapi</b> tidak lulus".'])
    },
    {
      title: 'Langkah 3 Detik & Jebakan Umum',
      html: ul(['<b>(1)</b> Ubah premis ke simbol/diagram. <b>(2)</b> Cari rantai yang menyambung. <b>(3)</b> Pilih kesimpulan yang <b>tidak melebihi</b> premis.',
        'Kesimpulan ditolak jika: <b>menambah kuantor lebih kuat</b> (sebagian → semua), <b>membalik arah</b> (Semua A B ⇒ Semua B A), atau <b>mengambil dari "tidak"</b> (tidak A → tidak B tanpa dasar).',
        'Jika ada opsi "Tidak ada kesimpulan" dan semua opsi lain menambah informasi → itu jawabannya.',
        'Premis dengan nama orang: "Semua pegawai disiplin mendapat bonus. Andi tidak mendapat bonus." ⊢ <b>Andi tidak disiplin</b> (modus tollens).',
        'Nilai kebenaran gabungan: p ∧ q benar jika keduanya benar; p ∨ q salah hanya jika keduanya salah; p → q salah hanya jika p benar &amp; q salah.'])
    }
  ], ['Latih menggambar <b>Venn</b> dua lingkaran untuk 9 pola tabel pertama.', 'Ekuivalen dengan "Jika p maka q" hanya <b>kontraposisi</b> dan <b>¬p ∨ q</b>.', 'Ingkaran implikasi = <b>p dan ¬q</b>.']));

  add('deret-angka', M('TIU', 'tiu-deret-lengkap', 'Deret Angka & Deret Huruf: 15 Pola Baku',
    'Beda tetap, rasio tetap, bertingkat, Fibonacci, kuadrat/kubus, ×a+b, dua larik, deret huruf (A=1…Z=26) dan pasangan huruf-angka.',
    ['Numerik - Deret Angka', 'Numerik - Deret Huruf'], [
    {
      title: 'Cara Cek 10 Detik & Pola Angka',
      html: ul(['<b>Langkah:</b> (1) hitung <b>selisih</b> antarsuku; (2) bila selisih tak tetap, cek <b>rasio</b>; (3) cek selisih tingkat 2; (4) cek <b>dua larik</b> (suku ganjil &amp; genap terpisah); (5) cek pola kuadrat/kubus/prima/Fibonacci.']) +
        tbl(['No', 'Pola', 'Contoh → lanjutan'], [
          ['1', 'Aritmetika (+b)', '8, 16, 24, 32, 40 → <b>48</b>'],
          ['2', 'Geometri (×r)', '4, 8, 16, 32 → <b>64</b>'],
          ['3', 'Selisih bertambah tetap (bertingkat 2)', '17, 21, 27, 35, 45, 57 → <b>71</b> (selisih 4,6,8,10,12,<b>14</b>)'],
          ['4', 'Selisih berlipat ×2', '4, 7, 13, 25, 49, 97 → <b>193</b> (selisih 3,6,12,24,48,<b>96</b>)'],
          ['5', 'Fibonacci (jumlah dua suku)', '2, 3, 5, 8, 13, 21, 34 → <b>55</b>'],
          ['6', '×a + b', '3, 7, 15, 31, 63 → <b>127</b> (×2+1)'],
          ['7', '×a − b', '4, 7, 13, 25 → ×2−1: <b>49</b>'],
          ['8', 'Bilangan kuadrat', '1, 4, 9, 16, 25 → <b>36</b>; n² + 1: 2, 5, 10, 17 → <b>26</b>'],
          ['9', 'Bilangan kubus', '1, 8, 27, 64 → <b>125</b>'],
          ['10', 'Bilangan prima', '2, 3, 5, 7, 11, 13 → <b>17</b>'],
          ['11', 'Dua larik selang-seling', '3, 50, 6, 45, 12, 39, 24, 32, <b>48</b>, <b>24</b> (larik 1 ×2; larik 2 −5,−6,−7,−8)'],
          ['12', 'Operasi bergantian (+, ×)', '3, 6, 8, 16, 18, 36 → ×2, +2, ×2, +2, ×2 → <b>38</b> (+2)'],
          ['13', 'Selisih bilangan prima / kuadrat', '1, 2, 4, 7, 12 → selisih 1,2,3,5 (Fibonacci): <b>20</b>'],
          ['14', 'Pangkat naik', '2, 6, 18, 54 (×3); 1, 3, 9, 27 → <b>81</b>'],
          ['15', 'Gabungan jumlah digit / pecahan', '1/2, 2/3, 3/4, 4/5 → <b>5/6</b>']
        ]) + note('Jika selisih pertama tidak jelas, turunkan <b>dua tingkat</b>. Kalau rasio mendekati 2 tetapi ada konstanta, curigai <b>×2 ± c</b>.')
    },
    {
      title: 'Deret Huruf & Pasangan Huruf-Angka',
      html: tbl(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'], [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']]) +
        tbl(['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], [['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']]) +
        ul(['<b>Langkah:</b> ubah huruf ke angka → cari pola beda → ubah balik. Setelah Z lanjut ke A (modulus 26).',
          'Contoh: B, D, G, K, P → 2, 4, 7, 11, 16 (selisih 2,3,4,5,<b>6</b>) → 22 = <b>V</b>.',
          'Contoh: A, C, F, J, O → 1, 3, 6, 10, 15 (selisih 2,3,4,5) → 21 = <b>U</b>, lalu +7 = 28 − 26 = 2 = <b>B</b>.',
          'Contoh mundur: Z, X, U, Q, L → 26, 24, 21, 17, 12 (selisih −2,−3,−4,−5) → 12 − 6 = 6 = <b>F</b>.',
          'Pasangan: AZ, BY, CX, DW → huruf pertama maju, kedua mundur → <b>EV</b>. Huruf-angka: B2, D4, F6, H8 → <b>J10</b>.',
          'Dua larik huruf: A, Z, C, X, E, V → larik 1 (A, C, E: +2), larik 2 (Z, X, V: −2) → G, T.'])
    }
  ], ['Selalu cek <b>selisih → selisih tingkat 2 → rasio → dua larik</b>.', 'Hafal <b>A=1 … Z=26</b> dengan titik jangkar: E=5, J=10, O=15, T=20, Y=25.', 'Kuadrat 1–15: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225.']));

  add('perbandingan-kuantitatif', M('TIU', 'tiu-berhitung-cepat', 'Berhitung Cepat: Persen, Pecahan, Kuadrat, Perbandingan Kuantitatif',
    'Tabel pecahan–persen, trik perkalian, selisih kuadrat, pangkat, diskon bertingkat, dan cara membandingkan X dan Y tanpa menghitung penuh.',
    ['Numerik - Berhitung Cepat', 'Numerik - Perbandingan Kuantitatif', 'Numerik - Perbandingan'], [
    {
      title: 'Tabel Wajib Hafal',
      html: tbl(['Pecahan', 'Persen', 'Pecahan', 'Persen'], [
        ['1/2', '50%', '1/8', '12,5%'], ['1/3', '33,33%', '3/8', '37,5%'], ['2/3', '66,67%', '5/8', '62,5%'], ['1/4', '25%', '7/8', '87,5%'],
        ['3/4', '75%', '1/9', '11,11%'], ['1/5', '20%', '1/12', '8,33%'], ['1/6', '16,67%', '1/16', '6,25%'], ['1/10', '10%', '1/20', '5%']
      ]) +
        tbl(['n', '11–15 kuadrat', 'n', '16–20 kuadrat', 'n', '21–25 kuadrat'], [
          ['11', '121', '16', '256', '21', '441'], ['12', '144', '17', '289', '22', '484'], ['13', '169', '18', '324', '23', '529'], ['14', '196', '19', '361', '24', '576'], ['15', '225', '20', '400', '25', '625']
        ]) + ul(['Kubus: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. Pangkat 2: 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2¹⁰=1024. Pangkat 3: 3⁴=81, 3⁵=243. Pangkat 5: 5³=125, 5⁴=625.',
          'Akar: √2≈1,41; √3≈1,73; √5≈2,24; √6≈2,45; √7≈2,65; √10≈3,16.'])
    },
    {
      title: 'Trik Hitung Cepat',
      html: tbl(['Trik', 'Contoh'], [
        ['Bilangan berakhiran 5: n5² = n×(n+1) lalu "25"', '75² → 7×8=56 → <b>5625</b>; 35² → 3×4=12 → 1225'],
        ['Perkalian dengan 99/101/25/50', '25×99 = 25×100 − 25 = <b>2475</b>; 48×25 = 4800/4 = 1200'],
        ['Selisih kuadrat a²−b² = (a−b)(a+b)', '2026²−2024² = (2)(4050) = 8100; ÷(2025×4)=<b>1</b>'],
        ['Kuadrat (a±b)²', '51² = 2500+100+1 = 2601; 49² = 2500−100+1 = 2401'],
        ['Persen "dibalik"', '8% dari 50 = 50% dari 8 = 4 (a% dari b = b% dari a)'],
        ['Persen ke pecahan', '37,5% × 640 = 3/8 × 640 = 240; 75% × 360 = 270'],
        ['Deret pecahan teleskopik 1/(n(n+1)) = 1/n − 1/(n+1)', '1/2+1/6+1/12+1/20+1/30 = 1−1/6 = 5/6 → 60×P = <b>50</b>'],
        ['Pangkat: a^(m+n)=aᵐ·aⁿ', '3^(x+2) − 3ˣ = 3ˣ(9−1) = 8·3ˣ = 216 → 3ˣ=27 → x=3 → x²+2x = <b>15</b>'],
        ['Urutan operasi', 'Kurung → pangkat/akar → × ÷ → + −']
      ]) + ul(['<b>Mencari dari persen:</b> bila 40% suatu bilangan = 56 → 10% = 14 → 15% = <b>21</b>.',
        '<b>Pecahan:</b> bila 3/8 bilangan = 45 → 1/8 = 15 → 5/6 × 120 = <b>100</b>. a/b + b/a = (a²+b²)/ab → 4/6 + 6/4 = 13/6.',
        '<b>Habis dibagi:</b> 3 (jumlah digit habis 3), 4 (dua digit akhir), 6 (genap &amp; habis 3), 8 (tiga digit akhir), 9 (jumlah digit habis 9), 11 (selisih jumlah digit ganjil–genap).',
        'KPK/FPB: faktorisasi prima, ambil pangkat <b>terbesar</b> (KPK) atau <b>terkecil</b> (FPB).'])
    },
    {
      title: 'Perbandingan Kuantitatif (X vs Y)',
      html: ul(['Pilihan standar: <b>X &gt; Y</b>, <b>X &lt; Y</b>, <b>X = Y</b>, <b>hubungan tidak dapat ditentukan</b>. <b>Jangan</b> hitung penuh jika bisa disederhanakan.',
        '<b>Diskon bertingkat:</b> a% + b% → harga akhir = (1−a)(1−b). 20% + 10% → 0,8×0,9 = 0,72 = diskon tunggal <b>28%</b> ⇒ sama.',
        '<b>Pecahan n/(n+1):</b> semakin besar n → semakin <b>besar</b> nilainya (17/18 &lt; 18/19), sehingga hasil "dari bilangan yang sama" juga lebih besar.',
        '<b>Persen terbalik:</b> 52% dari 600 = 312; 600% dari 49 = 294 → X &gt; Y. Gunakan (a/100)×b.',
        '<b>Selisih kuadrat:</b> (a²−b²)/(a−b) = a+b → sama.',
        '<b>Kecepatan</b> = jarak/waktu; 180 km dalam 2,5 jam = 72 km/jam &lt; 75.',
        '<b>Jika ada variabel</b> (x bisa positif/negatif/nol) → curigai <b>tidak dapat ditentukan</b>; uji nilai x = 0, 1, −1, pecahan.',
        'Bila dua ekspresi sama pada semua nilai → X = Y (aljabar identik).'])
    }
  ], ['Hafal pecahan–persen &amp; kuadrat sampai 25; itu menyelesaikan 60% soal berhitung.', 'Selisih kuadrat dan teleskopik adalah trik paling sering untuk "angka besar".', 'X vs Y: uji dengan nilai kecil dan cek apakah hasil <b>selalu</b> sama.']));

  add('soal-cerita', M('TIU', 'tiu-soal-cerita-lengkap', 'Soal Cerita Lengkap: Kerja, Kecepatan, Usia, Campuran, Rata-Rata, Himpunan',
    'Rumus kerja bersama, papasan/menyusul, rata-rata gabungan, usia, campuran, aritmetika sosial, Venn, peluang & kombinatorik dasar.',
    ['Numerik - Soal Cerita', 'Himpunan, Peluang'], [
    {
      title: 'Rumus Inti',
      html: tbl(['Tipe', 'Rumus', 'Contoh'], [
        ['Kerja bersama', 'Waktu = (a·b)/(a+b); atau 1/t = 1/a + 1/b', 'A 6 jam, B 3 jam → 18/9 = <b>2 jam</b>'],
        ['Kerja berbalik (lebih banyak pekerja)', 'Pekerja × hari = tetap', '8 orang 12 hari → 12 orang: 96/12 = <b>8 hari</b>'],
        ['Papasan (berlawanan)', 't = jarak / (v₁+v₂)', '300 km, 60 &amp; 90 km/jam → <b>2 jam</b>'],
        ['Menyusul (searah)', 't = jarak / (v₁−v₂)', 'Jarak awal 60 km, 80 vs 60 → <b>3 jam</b>'],
        ['Kecepatan rata-rata (jarak sama pergi-pulang)', '2v₁v₂/(v₁+v₂)', '60 &amp; 40 → <b>48 km/jam</b>'],
        ['Rata-rata gabungan', '(n₁x̄₁ + n₂x̄₂)/(n₁+n₂)', '25 orang rata 78 → +1 orang rata jadi 79 → nilai = 79×26 − 78×25 = 2054−1950 = <b>104</b>'],
        ['Perubahan rata-rata', 'Nilai baru = rata baru × (n+1) − jumlah lama', '—'],
        ['Usia', 'Buat dua persamaan; selisih umur tetap', 'Ayah 4× anak; 5 tahun lagi 3× → anak 10 tahun'],
        ['Campuran', 'Kadar akhir = (m₁k₁+m₂k₂)/(m₁+m₂)', '2 L 20% + 3 L 40% → <b>32%</b>'],
        ['Untung/rugi', 'Untung% = (jual−beli)/beli ×100%', 'Beli 80, jual 100 → <b>25%</b>'],
        ['Bunga tunggal', 'I = P·r·t', '2 juta, 6%/th, 2 th → 240 rb'],
        ['Perbandingan senilai/berbalik', 'Senilai: a/b = c/d; berbalik: a×b = c×d', 'Tiap soal tentukan <b>naik–naik</b> atau <b>naik–turun</b>']
      ])
    },
    {
      title: 'Himpunan, Peluang & Kombinatorik',
      html: ul(['<b>Dua himpunan:</b> |A∪B| = |A| + |B| − |A∩B|; yang tidak ikut keduanya = total − |A∪B|.',
        '<b>Tiga himpunan:</b> |A∪B∪C| = ΣA − Σ(irisan dua) + |A∩B∩C|.',
        '<b>Peluang</b> P(E) = n(E)/n(S); P(A atau B) = P(A)+P(B)−P(A∩B); P(A dan B bebas) = P(A)×P(B); P(tidak A) = 1−P(A).',
        '<b>Dadu</b> 6 sisi (jumlah 7 = 6/36 = 1/6); <b>koin</b> 2 → 4 hasil.',
        '<b>Permutasi</b> (urutan penting): nPr = n!/(n−r)!; <b>kombinasi</b> (urutan tidak): nCr = n!/(r!(n−r)!). Contoh: 5C2 = <b>10</b>; susunan 3 huruf dari 5 tanpa ulang = 5P3 = <b>60</b>. Permutasi siklis = (n−1)!.',
        '<b>Aturan perkalian:</b> 3 baju × 2 celana = <b>6</b>; <b>aturan penjumlahan</b> jika "atau".',
        'Kata kunci: "<b>paling sedikit</b>" → hitung komplemen; "<b>tepat</b>" → kombinasi langsung.'])
    }
  ], ['Rata-rata: selalu gunakan <b>jumlah = rata × banyak</b>.', 'Kerja bersama: jumlahkan <b>laju</b> (1/waktu).', 'Papasan: jumlah kecepatan; menyusul: selisih kecepatan.']));

  add('analogi', M('TIU', 'tiu-analogi-lengkap', 'Analogi, Padanan Kata & Penalaran Verbal',
    '14 jenis hubungan analogi, cara membuat kalimat jembatan, sinonim–antonim umum, dan analisis pernyataan.',
    ['Verbal - Analogi', 'Verbal - Padanan Kata', 'Verbal - Analitis'], [
    {
      title: '14 Jenis Hubungan & Kalimat Jembatan',
      html: tbl(['Jenis', 'Contoh', 'Kalimat jembatan'], [
        ['Sinonim', 'cerdas : pintar', 'A sama maknanya dengan B'],
        ['Antonim', 'tinggi : rendah', 'A lawan kata B'],
        ['Alat – fungsi', 'palu : memukul / router : meneruskan paket', 'A digunakan untuk B'],
        ['Pelaku – pekerjaan', 'petani : membajak', 'A pekerjaannya B'],
        ['Pelaku – alat', 'penjahit : mesin jahit', 'A menggunakan B'],
        ['Bagian – keseluruhan', 'roda : mobil; preambul : konstitusi', 'A bagian dari B'],
        ['Sebab – akibat', 'insomnia : kurang tidur; dehidrasi : kurang cairan', 'A menyebabkan/akibat B'],
        ['Jenis – contoh (kategori)', 'mawar : bunga', 'A termasuk B'],
        ['Bahan – produk', 'kayu jati : lemari; terigu : roti', 'A diolah menjadi B'],
        ['Tempat – kegiatan', 'sawah : bertani', 'A tempat B'],
        ['Tingkatan/intensitas', 'hangat : panas; gerimis : hujan', 'A lebih lemah dari B'],
        ['Ciri – benda', 'asin : garam', 'A sifat B'],
        ['Urutan/proses', 'tunas : pohon', 'A tahap awal B'],
        ['Rancangan – hasil', 'cetak biru : gedung; partitur : musik', 'A menjadi acuan membuat B']
      ]) + ul(['<b>Langkah:</b> bentuk kalimat spesifik (jangan "berhubungan dengan"); uji ke opsi; <b>jaga urutan</b> (A:B bukan B:A).',
        'Jika dua opsi cocok, pilih yang <b>jenis hubungan dan kelas kata</b> sama persis dengan soal.',
        'Padanan kata: pahami <b>konotasi</b> (positif/negatif) — "bersahaja" = sederhana, "gigih" = tekun, "arif" = bijaksana, "lugas" = langsung, "mutakhir" = terbaru.'])
    },
    {
      title: 'Sinonim–Antonim yang Sering Muncul',
      html: tbl(['Kata', 'Sinonim', 'Antonim'], [
        ['Efektif', 'berhasil guna, mangkus', 'sia-sia'],
        ['Efisien', 'hemat, sangkil', 'boros'],
        ['Kontradiksi', 'pertentangan', 'kesesuaian'],
        ['Fleksibel', 'lentur, luwes', 'kaku'],
        ['Transparan', 'terbuka, jernih', 'tertutup'],
        ['Optimis', 'yakin positif', 'pesimis'],
        ['Valid', 'sah, sahih', 'tidak sah'],
        ['Kolaborasi', 'kerja sama', 'persaingan'],
        ['Eksplisit', 'tersurat, jelas', 'implisit'],
        ['Hipotesis', 'dugaan sementara', 'fakta']
      ]) + ul(['<b>Analitis (penalaran):</b> susun fakta dalam tabel/urutan; coba satu kemungkinan, cek kontradiksi; kata "<b>tidak boleh</b>", "<b>harus</b>", "<b>paling</b>" menentukan syarat.',
        'Soal pengurutan: tulis kendala satu per satu sebagai tanda panah (A &lt; B, C &gt; D).'])
    }
  ], ['Buat <b>kalimat jembatan spesifik</b> sebelum melihat opsi.', 'Cek <b>kelas kata</b> dan <b>arah</b> hubungan.', 'Antonim ≠ negasi; sinonim ≠ asosiasi.']));

  add('figural-analitis', M('TIU', 'tiu-figural-lengkap', 'Figural: Serial, Matriks, Analogi Gambar, Jaring-Jaring Kubus',
    'Transformasi (putar, cermin, geser, tambah/kurang), kaidah matriks 3×3, dan jaring-jaring kubus — dituliskan dalam kata.',
    ['Figural'], [
    {
      title: 'Pola Transformasi',
      html: tbl(['Pola', 'Cara cek'], [
        ['Rotasi', 'Sudut tetap per langkah (45°, 90°, 180°); cek arah <b>searah/berlawanan jarum jam</b>'],
        ['Pencerminan', 'Bayangan horizontal/vertikal; garis cermin tegak atau mendatar'],
        ['Penambahan/pengurangan elemen', 'Hitung jumlah elemen tiap kotak (+1, −1, ×2)'],
        ['Pergeseran posisi', 'Elemen berpindah satu sel tiap langkah (searah/berputar)'],
        ['Perubahan warna', 'Isi hitam ↔ putih bergantian'],
        ['Kombinasi', 'Dua aturan jalan bersamaan: putar + tambah, dll.']
      ]) + ul(['<b>Matriks 3×3:</b> cari aturan <b>baris</b> (kolom 1 + kolom 2 = kolom 3 dengan XOR: elemen sama hilang, beda tampil) atau aturan <b>kolom/diagonal</b>.',
        '<b>Odd one out:</b> cari ciri yang dimiliki semua kecuali satu (jumlah sisi, simetri, arsir).',
        '<b>Analogi gambar:</b> A→B dengan transformasi t; terapkan t ke C untuk mendapat D.'])
    },
    {
      title: 'Jaring-Jaring Kubus & Dadu',
      html: ul(['Kubus punya <b>6 sisi, 12 rusuk, 8 titik sudut</b>; ada <b>11 jaring-jaring</b> berbeda.',
        'Sisi <b>berhadapan</b> tidak pernah bersebelahan dalam jaring-jaring; pada pola "satu baris empat persegi", sisi 1 &amp; 3 berhadapan, 2 &amp; 4 berhadapan.',
        'Dadu standar: jumlah sisi berhadapan = <b>7</b> (1–6, 2–5, 3–4).',
        'Pola "T" atau "salib" (4 kotak berurutan + 1 atas + 1 bawah) = jaring-jaring sah; pola 2×2 persegi <b>tidak</b> sah.'])
    }
  ], ['Soal figural ini disajikan dengan deskripsi kata; baca deskripsi sebagai pola (jumlah, arah, warna).', 'Catat satu atribut per langkah, jangan menebak sekaligus.']));

  /* =================================================================== TKP */
  var ladder = function (rows) {
    return tbl(['Skor', 'Ciri tindakan', 'Contoh'], rows);
  };
  var tkp = function (id, oldId, title, summary, sub, secs, tips) {
    add(oldId, M('TKP', id, title, summary, [sub], secs, tips));
  };

  tkp('tkp-pelayanan-lengkap', 'tkp-pelayanan-publik', 'TKP Pelayanan Publik: Orientasi Pelayanan, Empati, Solusi',
    'Tangga skor 5→1, prinsip UU 25/2009 & 6 pola kasus (lansia, marah, jam istirahat, sistem baru, berkas kurang, antrean).', 'Pelayanan Publik', [
    {
      title: 'Tangga Skor & Prinsip',
      html: ladder([
        ['<b>5</b>', 'Melayani <b>ramah-empati + memberi solusi nyata</b> dalam aturan (membantu, memandu, menjelaskan transparan), tuntas', 'Membantu lansia memfotokopi berkas yang kurang lalu melanjutkan layanan walau mendekati istirahat'],
        ['<b>4</b>', 'Melayani sesuai prosedur dengan sopan, tetapi <b>kurang proaktif</b>', 'Menjelaskan syarat dan meminta melengkapi, memberi info lokasi fotokopi'],
        ['<b>3</b>', 'Mengarahkan/mendelegasikan ke pihak lain, tidak menolak', 'Mengantar ke loket lain tanpa memastikan tuntas'],
        ['<b>2</b>', 'Melayani seadanya, <b>pasif atau menunda</b> tanpa alasan kuat', 'Meminta datang kembali besok walau bisa dibantu'],
        ['<b>1</b>', 'Menolak, <b>mengusir, emosional, diskriminatif</b>, atau meminta imbalan', 'Menyuruh satpam mengeluarkan warga marah']
      ]) + ul(['<b>UU 25/2009 Pelayanan Publik:</b> asas kepentingan umum, kepastian hukum, kesamaan hak, keseimbangan hak–kewajiban, keprofesionalan, partisipatif, persamaan perlakuan/tidak diskriminatif, keterbukaan, akuntabilitas, fasilitas khusus bagi <b>kelompok rentan</b> (lansia, disabilitas, ibu hamil), ketepatan waktu, kecepatan-kemudahan-keterjangkauan.',
        '<b>Standar pelayanan:</b> dasar hukum, persyaratan, sistem/mekanisme/prosedur, jangka waktu, biaya/tarif, produk layanan, sarana, kompetensi pelaksana, pengawasan internal, pengaduan, jumlah pelaksana, jaminan, keamanan, evaluasi kinerja.',
        'Prinsip 3S: <b>Senyum, Sapa, Salam</b>; 3 sikap: <b>cepat, tepat, ramah</b>.'])
    },
    {
      title: '6 Pola Kasus & Cara Menjawab',
      html: tbl(['Pola kasus', 'Jawaban skor 5'], [
        ['Warga <b>marah</b>/komplain', 'Dengarkan tenang, empati, minta maaf atas ketidaknyamanan, <b>jelaskan kendala transparan</b>, tawarkan solusi/tindak lanjut'],
        ['<b>Menjelang istirahat</b> / pulang', 'Tetap layani sampai tuntas atau pastikan ada petugas pengganti; kebutuhan warga di atas kenyamanan sendiri'],
        ['<b>Berkas kurang</b> / lansia', 'Bantu semampunya sesuai aturan (memfotokopi, memandu); jangan menolak mentah-mentah'],
        ['<b>Sistem baru / aplikasi</b> bermasalah', 'Pandu langsung, sosialisasi, sediakan jalur alternatif sementara'],
        ['<b>Antrean menumpuk</b> / pegawai kurang', 'Atur antrean, prioritaskan kelompok rentan, minta bantuan rekan, informasikan estimasi waktu'],
        ['Diminta <b>"uang terima kasih"</b> / dipercepat', 'Tolak sopan, jelaskan <b>tarif resmi</b>, layani sesuai urutan']
      ]) + note('<b>Selalu pilih:</b> empati + aturan + solusi. <b>Hindari:</b> marah balik, menyalahkan sistem/rekan, menolak tanpa alternatif, melanggar SOP demi "cepat".')
    }
  ], ['Skor 5 = <b>empati + solusi + sesuai aturan</b> (tanpa melanggar SOP).', 'Kelompok rentan didahulukan.', 'Menolak/menunda tanpa solusi paling rendah.']);

  tkp('tkp-jejaring-lengkap', 'tkp-jejaring-kerja', 'TKP Jejaring Kerja: Kolaborasi, Komunikasi, Konflik',
    'Prinsip kerja tim lintas unit/instansi, menyelesaikan konflik, berbagi informasi, dan menghargai peran.', 'Jejaring Kerja', [
    {
      title: 'Tangga Skor & Prinsip',
      html: ladder([
        ['<b>5</b>', '<b>Berinisiatif</b> membangun komunikasi/kolaborasi, mencari solusi bersama, berbagi informasi, menjaga hubungan baik lintas unit', 'Mengajak rapat koordinasi, menyusun pembagian tugas dan jadwal bersama'],
        ['<b>4</b>', 'Bekerja sama sesuai arahan, membantu bila diminta', 'Mengikuti koordinasi yang diatur pimpinan'],
        ['<b>3</b>', 'Menunggu, melaporkan ke atasan tanpa upaya sendiri', 'Meneruskan masalah ke pimpinan tanpa berdiskusi dahulu'],
        ['<b>2</b>', 'Menghindar/bekerja sendiri, tidak berbagi informasi', 'Menyelesaikan bagian sendiri tanpa koordinasi'],
        ['<b>1</b>', 'Menjelekkan, menyalahkan, mengadu domba, menutup informasi', 'Menyebar keburukan rekan ke pihak lain']
      ]) + ul(['Prinsip: <b>komunikasi terbuka, saling menghormati, tujuan bersama, kolaborasi lintas sektor</b> (pentahelix: pemerintah, akademisi, bisnis, komunitas, media).',
        'Konflik: <b>dialog langsung</b> dengan pihak terkait → cari titik temu → baru libatkan atasan sebagai mediator bila buntu.',
        'Rekan tidak kooperatif: dekati secara personal, pahami kendalanya, tawarkan bantuan; <b>jangan</b> menyalahkan di depan umum.'])
    },
    {
      title: 'Pola Kasus',
      html: tbl(['Kasus', 'Skor 5'], [
        ['Dua unit berbeda pendapat soal data', 'Menginisiasi pertemuan untuk menyamakan sumber data, dokumentasi kesepakatan'],
        ['Rekan menolak berbagi data', 'Menjelaskan manfaat bersama, tawarkan kerja sama/mekanisme berbagi data aman'],
        ['Proyek lintas instansi tersendat', 'Membuat forum koordinasi rutin, risalah, pembagian peran jelas'],
        ['Rekan tim kewalahan', 'Menawarkan bantuan, atur ulang tugas bersama, laporkan kebutuhan sumber daya bila perlu'],
        ['Rapat tidak sependapat', 'Dengarkan, cari kesamaan, putuskan berdasar data &amp; kepentingan organisasi']
      ])
    }
  ], ['Kata kunci jawaban 5: <b>inisiatif, koordinasi, berbagi, bersama</b>.', 'Skor 1: menyalahkan, menjelekkan, menghindar total.']);

  tkp('tkp-sosbud-lengkap', 'tkp-sosial-budaya', 'TKP Sosial Budaya: Keberagaman, Toleransi, Adaptasi',
    'Menghormati SARA, adaptasi budaya lokal, tindakan saat ada diskriminasi/konflik sosial, kearifan lokal.', 'Sosial Budaya', [
    {
      title: 'Tangga Skor & Prinsip',
      html: ladder([
        ['<b>5</b>', '<b>Menghargai &amp; beradaptasi aktif</b>, memfasilitasi dialog, menjaga kesetaraan, belajar budaya setempat', 'Mengikuti adat setempat, mengajak warga berdialog, menolak diskriminasi'],
        ['<b>4</b>', 'Menghormati, mengikuti aturan, kurang aktif memfasilitasi', 'Ikut kegiatan setempat bila diundang'],
        ['<b>3</b>', 'Netral/pasif, tidak peduli namun tidak merugikan', 'Membiarkan konflik reda sendiri'],
        ['<b>2</b>', 'Kurang menghargai, memprioritaskan budaya sendiri', 'Tetap pakai cara sendiri tanpa mempedulikan adat'],
        ['<b>1</b>', 'Merendahkan, <b>diskriminasi</b>, memicu konflik SARA', 'Menolak melayani karena suku/agama']
      ]) + ul(['Landasan: <b>Bhinneka Tunggal Ika</b>, Pasal 28I (identitas budaya), Pasal 32 (kebudayaan); ASN = perekat &amp; pemersatu bangsa.',
        '<b>Moderasi/toleransi:</b> hak ibadah dihormati; tidak memaksakan kehendak; mediasi dengan tokoh adat/agama/masyarakat.',
        '<b>Adaptasi:</b> pelajari bahasa/adat, hormati hari besar, ikuti kearifan lokal sepanjang <b>tidak melanggar hukum</b>.'])
    },
    {
      title: 'Pola Kasus',
      html: tbl(['Kasus', 'Skor 5'], [
        ['Ditugaskan ke daerah dengan adat berbeda', 'Mempelajari adat, berkomunikasi dengan tokoh masyarakat, beradaptasi'],
        ['Rekan mengejek logat/suku rekan lain', 'Mengingatkan dengan sopan, ajak saling menghormati; laporkan bila berulang'],
        ['Warga menolak pembangunan rumah ibadah/penguburan karena beda keyakinan', 'Memfasilitasi dialog dengan FKUB/tokoh masyarakat, menegaskan kesetaraan hak sesuai hukum'],
        ['Kegiatan kantor bentrok hari raya', 'Menyesuaikan jadwal agar semua dapat beribadah/merayakan'],
        ['Tradisi lokal bertentangan dengan aturan', 'Dialog &amp; edukasi dengan menghargai budaya, mencari alternatif sesuai hukum']
      ]) + note('Jika opsi berisi <b>SARA, pemaksaan, atau pembiaran diskriminasi</b> → skor terendah.')
    }
  ], ['Pola 5: <b>dialog + hormati + hukum</b>.', 'Hindari: memaksakan budaya sendiri, ikut menghina, membiarkan diskriminasi.']);

  tkp('tkp-tik-lengkap', 'tkp-tik', 'TKP Teknologi Informasi & Komunikasi: Literasi Digital, Keamanan, Inovasi',
    'Phishing, hoaks, keamanan data, adopsi SPBE/TTE, otomatisasi kerja, etika bermedia sosial ASN.', 'Teknologi Informasi', [
    {
      title: 'Tangga Skor & Prinsip',
      html: ladder([
        ['<b>5</b>', '<b>Memanfaatkan teknologi aman &amp; produktif</b>, melapor ancaman, berbagi pengetahuan, mengedukasi rekan', 'Tidak klik tautan phishing, lapor ke tim TI, ingatkan rekan; membuat otomatisasi Pivot/makro dan membagikannya'],
        ['<b>4</b>', 'Menggunakan teknologi sesuai SOP', 'Menggunakan aplikasi resmi'],
        ['<b>3</b>', 'Mengikuti tetapi menunggu arahan; pasif', 'Menunggu pelatihan formal'],
        ['<b>2</b>', 'Menolak/menunda adopsi, kurang waspada', 'Tetap manual karena "sudah terbiasa"'],
        ['<b>1</b>', 'Ceroboh/melanggar: <b>membagikan data, klik tautan, menyebar hoaks</b>, memalsukan data', 'Memasukkan NIP &amp; kata sandi pada link tak dikenal']
      ]) + ul(['<b>Literasi digital (4 pilar):</b> kecakapan digital, budaya digital, etika digital, keamanan digital.',
        '<b>Keamanan:</b> kata sandi kuat &amp; unik, <b>MFA</b>, tidak berbagi OTP, cek domain, perangkat lunak resmi, backup, lapor insiden ke tim keamanan.',
        '<b>Hoaks:</b> cek sumber (saring sebelum sharing), baca utuh, verifikasi ke situs resmi (komdigi/cekfakta), <b>jangan menyebar</b>; UU ITE; ASN menjaga rahasia jabatan di medsos.',
        '<b>Perubahan teknologi:</b> adaptasi, belajar, dampingi yang kesulitan; <b>bukan</b> memaksa atau melaporkan rekan hanya karena gagap teknologi.',
        '<b>TTE:</b> tanda tangan elektronik tersertifikasi (UU ITE, PP 71/2019) sah setara tanda tangan basah; <b>SPBE</b> (Perpres 95/2018).'])
    },
    {
      title: 'Pola Kasus',
      html: tbl(['Kasus', 'Skor 5'], [
        ['Tautan mencurigakan di WhatsApp grup kantor', 'Tidak klik, lapor tim TI, peringatkan grup dengan bukti'],
        ['Aplikasi baru ditolak senior', 'Gunakan konsisten, dampingi, tunjukkan manfaat'],
        ['Rekap manual berhari-hari', 'Pelajari otomatisasi (Pivot/makro), buat template, bagikan ke rekan'],
        ['Menemukan data warga bocor', 'Segera lapor, amankan akses, ikuti prosedur insiden, jangan sebar'],
        ['Rekan memakai software bajakan', 'Ingatkan, usulkan lisensi/alternatif open source resmi'],
        ['Menerima info hoaks dari grup keluarga', 'Verifikasi, klarifikasi dengan sumber resmi, jangan teruskan']
      ])
    }
  ], ['Skor 5: <b>waspada + lapor + edukasi + manfaatkan</b>.', 'Skor 1: klik/bagikan/menyebar tanpa verifikasi.']);

  tkp('tkp-profesional-lengkap', 'tkp-profesionalisme', 'TKP Profesionalisme: Tanggung Jawab, Integritas, Kompetensi, Beban Kerja',
    'Manajemen prioritas, akuntabilitas, menerima kritik, lembur/tenggat, perintah atasan bermasalah, pengembangan diri.', 'Profesionalisme', [
    {
      title: 'Tangga Skor & Prinsip',
      html: ladder([
        ['<b>5</b>', '<b>Bertanggung jawab tuntas</b>, menyusun prioritas &amp; rencana, jujur, belajar dari kritik, komunikasi proaktif dengan atasan', 'Menyusun skala prioritas, menyelesaikan tepat waktu, melaporkan kendala sejak dini'],
        ['<b>4</b>', 'Menyelesaikan sesuai tugas, perlu diarahkan sedikit', 'Mengerjakan sesuai instruksi'],
        ['<b>3</b>', 'Mengerjakan sebagian, meminta orang lain menyelesaikan', 'Meminta rekan menggantikan tanpa alasan'],
        ['<b>2</b>', 'Menunda, mengeluh, menyalahkan pihak lain', 'Mengeluh beban berat tanpa solusi'],
        ['<b>1</b>', 'Melanggar etika: <b>memanipulasi data, bolos, menerima imbalan, mengabaikan tugas</b>', 'Memalsukan laporan agar cepat selesai']
      ]) + ul(['<b>Integritas:</b> jujur, menolak perintah melanggar hukum dengan sopan (tawarkan alternatif sesuai aturan), tidak menyalahgunakan wewenang.',
        '<b>Manajemen waktu:</b> matriks <b>Eisenhower</b> — penting &amp; mendesak dulu; penting tidak mendesak jadwalkan; mendesak tidak penting delegasikan; tidak penting tinggalkan.',
        '<b>Kritik:</b> terima terbuka, evaluasi, perbaiki; <b>tidak</b> defensif/balas dendam.',
        '<b>Kompetensi:</b> belajar mandiri, diklat, berbagi ilmu; ikut pengembangan kompetensi (ASN berhak 20 JP/tahun).',
        '<b>Tekanan kerja:</b> prioritaskan, minta dukungan, jaga kesehatan; <b>jangan</b> mengorbankan mutu atau melanggar SOP.'])
    },
    {
      title: 'Pola Kasus',
      html: tbl(['Kasus', 'Skor 5'], [
        ['Dua tugas mendesak bersamaan dari dua atasan', 'Komunikasikan prioritas kepada kedua atasan, minta penentuan prioritas, atur jadwal'],
        ['Atasan meminta menyamarkan data/anggaran', 'Tolak sopan, jelaskan risiko hukum, sodorkan data riil; lapor lewat jalur resmi bila dipaksa'],
        ['Melakukan kesalahan kerja', 'Mengakui, segera perbaiki, laporkan, cegah terulang'],
        ['Tenggat mepet, pekerjaan menumpuk', 'Susun prioritas, lembur terukur bila perlu, laporkan kendala, minta bantuan'],
        ['Menerima kritik keras dari rekan', 'Dengar, ambil pelajaran, perbaiki; berterima kasih'],
        ['Rekan senior lebih ahli', 'Belajar, minta bimbingan, bagikan ilmu baru yang didapat']
      ])
    }
  ], ['5 = <b>jujur + tuntas + komunikasi proaktif</b>.', 'Jika ada pilihan "lapor atasan sejak dini" vs "diam" → pilih lapor.', 'Perintah melanggar hukum: <b>tolak sopan + solusi legal</b>.']);

  tkp('tkp-radikal-lengkap', 'tkp-anti-radikalisme', 'TKP Anti Radikalisme: Moderasi, Pancasila, Tabayyun, Hoaks SARA',
    'Ciri radikalisme, sikap ASN (menolak, mengingatkan, melapor), literasi digital, dan pola kasus ujaran kebencian.', 'Anti Radikalisme', [
    {
      title: 'Konsep & Tangga Skor',
      html: ul(['<b>Radikalisme:</b> paham yang ingin perubahan mendasar (sosial-politik) dengan cara <b>kekerasan/ekstrem</b>; <b>intoleransi:</b> tidak menghargai perbedaan; <b>ekstremisme</b>; <b>terorisme</b> = tindakan kekerasan penebar teror.',
        'Ciri: anti-Pancasila/NKRI, mengafirkan yang berbeda, ujaran kebencian SARA, ajakan kekerasan, eksklusif, memengaruhi lewat medsos.',
        'ASN <b>wajib setia pada Pancasila, UUD 1945, NKRI, dan pemerintah yang sah</b> (sumpah/janji ASN); <b>moderasi beragama</b> (Kemenag): sikap tengah, toleran, anti kekerasan, akomodatif terhadap budaya lokal, komitmen kebangsaan.',
        '<b>Tabayyun</b> (verifikasi) sebelum percaya/menyebar; <b>pencegahan: dialog, edukasi, kerja sama BNPT/aparat, tokoh agama</b>.']) +
        ladder([
          ['<b>5</b>', 'Menolak tegas, <b>mengingatkan persuasif</b> dengan landasan Pancasila, <b>melaporkan</b> ke pihak berwenang/pimpinan, mengedukasi', 'Menolak ajakan, mengingatkan rekan, lapor atasan/aparat'],
          ['<b>4</b>', 'Menolak dan mengingatkan tetapi tidak melapor', 'Menegur lalu selesai'],
          ['<b>3</b>', 'Menghindar/diam, tidak ikut', 'Keluar dari grup'],
          ['<b>2</b>', 'Menanggapi emosional/membalas dengan kebencian', 'Membalas dengan ujaran serupa'],
          ['<b>1</b>', 'Ikut menyebarkan, mengikuti, atau membiarkan tanpa tabayyun', 'Meneruskan konten provokatif']
        ])
    },
    {
      title: 'Pola Kasus',
      html: tbl(['Kasus', 'Skor 5'], [
        ['Rekan menyebar konten ujaran kebencian/ajakan ganti ideologi', 'Tolak, ingatkan sumpah ASN, lapor atasan/pihak berwenang'],
        ['Penceramah menghasut kekerasan terhadap fasilitas negara', 'Pegang moderasi, ajak pengurus DKM/lingkungan menghentikan hasutan, lapor aparat'],
        ['Teror bom; medsos penuh foto korban &amp; narasi menyudutkan kelompok', 'Tidak menyebarkan, tunggu informasi resmi (Polri/BNPT), tebar narasi damai'],
        ['Anggota keluarga/teman mulai terpengaruh paham ekstrem', 'Dialog persuasif, libatkan tokoh agama/profesional, laporkan bila membahayakan'],
        ['Menerima undangan kegiatan tertutup yang anti-NKRI', 'Menolak hadir, jelaskan sikap kebangsaan, laporkan']
      ]) + note('Kata kunci jawaban benar: <b>menolak, mengingatkan, melaporkan, verifikasi, tidak menyebarkan, Pancasila</b>. Jawaban yang <b>kekerasan balasan</b> atau <b>main hakim sendiri</b> juga salah.')
    }
  ], ['Skor 5 = <b>tolak + ingatkan + laporkan</b> (3 langkah).', 'Jangan balas dengan kebencian; jangan menyebar konten provokatif.']);

  /* =================================================================== SKB PRAKOM */
  var P = function (id, title, summary, subs, sections, tips) { return M('SKB', id, title, summary, subs, sections, tips); };
  var FIRST_PRAKOM = 'prakom-regulasi';

  add(FIRST_PRAKOM, P('prakom-subnetting', 'Subnetting IPv4/IPv6: Tabel CIDR, Host, Blok & VLSM',
    'Tabel /8–/32, rumus host & subnet, cara hitung network/broadcast, kelas IP, IP privat, VLSM, wildcard, IPv6.',
    ['Jaringan Komputer & Subnetting'], [
    {
      title: 'Tabel CIDR Wajib Hafal',
      html: tbl(['CIDR', 'Subnet mask', 'Jumlah IP', 'Host usable', 'Blok (increment)'], [
        ['/8', '255.0.0.0', '16.777.216', '16.777.214', 'kelas A'],
        ['/16', '255.255.0.0', '65.536', '65.534', 'kelas B'],
        ['/20', '255.255.240.0', '4.096', '4.094', '16 (oktet 3)'],
        ['/22', '255.255.252.0', '1.024', '1.022', '4 (oktet 3)'],
        ['/23', '255.255.254.0', '512', '510', '2 (oktet 3)'],
        ['<b>/24</b>', '<b>255.255.255.0</b>', '256', '<b>254</b>', '256 (kelas C)'],
        ['<b>/25</b>', '<b>255.255.255.128</b>', '128', '<b>126</b>', '128'],
        ['<b>/26</b>', '<b>255.255.255.192</b>', '64', '<b>62</b>', '64'],
        ['<b>/27</b>', '<b>255.255.255.224</b>', '32', '<b>30</b>', '32'],
        ['<b>/28</b>', '<b>255.255.255.240</b>', '16', '<b>14</b>', '16'],
        ['<b>/29</b>', '<b>255.255.255.248</b>', '8', '<b>6</b>', '8'],
        ['<b>/30</b>', '<b>255.255.255.252</b>', '4', '<b>2</b>', '4 (link point-to-point)'],
        ['/31', '255.255.255.254', '2', '2 (RFC 3021, P2P)', '2'],
        ['/32', '255.255.255.255', '1', '1 (host route)', '1']
      ]) + ul(['<b>Oktet mask:</b> 128, 192, 224, 240, 248, 252, 254, 255 (tambah 64, 32, 16, 8, 4, 2, 1 secara berurutan).',
        '<b>Host usable = 2<sup>(32−n)</sup> − 2</b> (dikurangi alamat network &amp; broadcast). Jumlah subnet = 2<sup>bit pinjaman</sup>.',
        '<b>Cara cepat:</b> prefix → bit host = 32−n → hasil 2<sup>bit host</sup>. Contoh /27: 5 bit host → 32 IP → 30 host usable.',
        'Soal tipikal "blok 192.168.x.0/24 … /30": jawab mask &amp; jumlah host usable <b>dari prefix saja</b> (bagian oktet ketiga tidak memengaruhi).'])
    },
    {
      title: 'Menghitung Network, Broadcast & Range',
      html: ul(['<b>Langkah:</b> (1) cari oktet "menarik" (yang bukan 255/0); (2) <b>blok = 256 − nilai mask oktet itu</b>; (3) network = kelipatan blok terbesar ≤ nilai IP; (4) broadcast = network berikutnya − 1; (5) host = network+1 … broadcast−1.',
        '<b>Contoh:</b> 192.168.10.77/27 → mask .224 → blok 32 → network <b>192.168.10.64</b>; broadcast <b>192.168.10.95</b>; host <b>.65–.94</b>.',
        '<b>Contoh:</b> 10.20.30.130/26 → blok 64 → network 10.20.30.128; broadcast 10.20.30.191; host .129–.190.',
        '<b>Satu subnet?</b> Dua IP berada di jaringan sama bila network-nya sama (AND dengan mask).',
        '<b>Wildcard mask</b> = 255 − mask (contoh /26 → 0.0.0.63) — dipakai pada ACL &amp; OSPF.']) +
        tbl(['Kelas', 'Rentang oktet pertama', 'Mask default', 'Catatan'], [
          ['A', '1–126', '/8', '127.0.0.0/8 = loopback'],
          ['B', '128–191', '/16', ''],
          ['C', '192–223', '/24', ''],
          ['D', '224–239', '—', 'Multicast'],
          ['E', '240–255', '—', 'Eksperimen/cadangan']
        ]) + tbl(['IP khusus', 'Rentang'], [
          ['Privat (RFC 1918)', '10.0.0.0/8 · 172.16.0.0–172.31.255.255 (/12) · 192.168.0.0/16'],
          ['APIPA/link-local', '169.254.0.0/16 (DHCP gagal)'],
          ['Loopback', '127.0.0.1 (localhost)'],
          ['Broadcast terbatas', '255.255.255.255']
        ])
    },
    {
      title: 'VLSM, Supernetting & IPv6',
      html: ul(['<b>VLSM:</b> bagi blok menjadi subnet berukuran <b>berbeda</b> sesuai kebutuhan. Urutan: <b>urutkan kebutuhan host dari terbesar → terkecil</b>, alokasikan blok terkecil yang cukup (host+2 ≤ 2ⁿ).',
        'Contoh kebutuhan 50, 25, 10, 2 host → /26 (62), /27 (30), /28 (14), /30 (2).',
        '<b>Supernetting/route summarization:</b> menggabungkan blok berurutan (mis. 192.168.0.0/24 + 192.168.1.0/24 = 192.168.0.0/23).',
        '<b>NAT/PAT:</b> menerjemahkan IP privat ke publik; PAT = banyak host satu IP (beda port).']) +
        tbl(['IPv6', 'Isi'], [
          ['Panjang', '<b>128 bit</b> = 8 kelompok × 16 bit heksadesimal (dipisah ":")'],
          ['Penyingkatan', 'Nol di depan boleh dihilangkan; urutan nol berturut-turut boleh diganti <b>"::" hanya sekali</b>'],
          ['Subnet standar', '<b>/64</b> (64 bit prefix + 64 bit interface ID)'],
          ['Jenis', 'Unicast, multicast (ff00::/8), anycast; <b>tidak ada broadcast</b>'],
          ['Alamat khusus', '::1 loopback · fe80::/10 link-local · fc00::/7 unique-local (privat) · 2000::/3 global unicast · 2001:db8::/32 dokumentasi'],
          ['Keunggulan', 'Ruang alamat sangat besar, auto-config (SLAAC), IPsec built-in, header sederhana']
        ])
    }
  ], ['Hafal 7 baris /24–/30: <b>254, 126, 62, 30, 14, 6, 2</b> host.', 'Blok = <b>256 − oktet mask</b>.', 'Broadcast = network berikutnya − 1.']));

  add(FIRST_PRAKOM, P('prakom-http-api', 'HTTP, REST API, Status Code, Autentikasi & Integrasi Layanan',
    'Kode status 2xx–5xx, metode HTTP & idempotensi, prinsip REST, OAuth2/JWT, API Gateway, SPLP, SOAP/GraphQL/gRPC.',
    ['Integrasi API', 'Rekayasa Perangkat Lunak & Pengujian'], [
    {
      title: 'Kode Status HTTP (Paling Sering Keluar)',
      html: tbl(['Kode', 'Nama', 'Arti & kapan muncul'], [
        ['<b>200</b>', 'OK', 'Permintaan berhasil diproses normal'],
        ['<b>201</b>', 'Created', 'POST berhasil, <b>sumber daya baru dibuat</b>'],
        ['202', 'Accepted', 'Diterima, diproses belakangan (async)'],
        ['204', 'No Content', 'Berhasil tanpa isi respons (mis. DELETE)'],
        ['301/302', 'Moved Permanently / Found', 'Redirect permanen / sementara'],
        ['304', 'Not Modified', 'Cache masih valid'],
        ['<b>400</b>', 'Bad Request', 'Sintaks JSON/parameter dari client <b>tidak valid</b>'],
        ['<b>401</b>', 'Unauthorized', '<b>Belum terautentikasi</b> / token tidak ada atau salah'],
        ['<b>403</b>', 'Forbidden', 'Sudah login tetapi <b>tidak punya hak akses</b> (otorisasi)'],
        ['<b>404</b>', 'Not Found', 'Endpoint/resource tidak ditemukan'],
        ['405', 'Method Not Allowed', 'Metode HTTP tidak diizinkan pada endpoint'],
        ['409', 'Conflict', 'Konflik state (duplikat data)'],
        ['422', 'Unprocessable Entity', 'Format benar tetapi validasi bisnis gagal'],
        ['429', 'Too Many Requests', 'Terkena rate limit'],
        ['<b>500</b>', 'Internal Server Error', 'Kesalahan tak terduga di <b>sisi server/kode backend</b>'],
        ['<b>502</b>', 'Bad Gateway', '<b>Reverse proxy / API gateway</b> menerima respons tidak valid dari server upstream'],
        ['<b>503</b>', 'Service Unavailable', 'Server <b>overload atau maintenance</b> sementara'],
        ['504', 'Gateway Timeout', 'Gateway menunggu upstream terlalu lama']
      ]) + note('<b>Digit pertama:</b> 1xx informasi · <b>2xx sukses</b> · 3xx redirect · <b>4xx salah client</b> · <b>5xx salah server</b>. <b>401 = siapa kamu? (autentikasi)</b>; <b>403 = kamu tidak boleh (otorisasi)</b>.')
    },
    {
      title: 'Metode HTTP, REST & Pola Integrasi',
      html: tbl(['Metode', 'Fungsi (CRUD)', 'Safe', 'Idempotent'], [
        ['GET', 'Read — ambil data', 'ya', 'ya'],
        ['POST', 'Create — buat baru / aksi', 'tidak', '<b>tidak</b>'],
        ['PUT', 'Update — <b>ganti seluruh</b> resource', 'tidak', 'ya'],
        ['PATCH', 'Update <b>sebagian</b>', 'tidak', 'tidak selalu'],
        ['DELETE', 'Hapus', 'tidak', 'ya'],
        ['HEAD / OPTIONS', 'Header saja / metode yang didukung (CORS preflight)', 'ya', 'ya']
      ]) + ul(['<b>REST</b> (Roy Fielding): 6 batasan — <b>client-server, stateless, cacheable, uniform interface, layered system, code-on-demand (opsional)</b>. URI = <b>kata benda jamak</b> (/api/v1/users/12).',
        '<b>Format:</b> JSON (ringan, paling umum), XML (verbose). <b>SOAP</b> = protokol berbasis XML + WSDL; <b>GraphQL</b> = klien menentukan field; <b>gRPC</b> = Protobuf + HTTP/2, cepat antar-microservice; <b>Webhook</b> = server mendorong event ke URL klien.',
        '<b>Autentikasi:</b> API Key (sederhana), <b>Basic</b>, <b>Bearer Token/JWT</b> (header.payload.signature, Base64URL, <b>ditandatangani</b>, bukan dienkripsi), <b>OAuth 2.0</b> (otorisasi delegasi: authorization code, client credentials), <b>OpenID Connect</b> (identitas di atas OAuth2), <b>mTLS</b>.',
        '<b>Keamanan API:</b> HTTPS, validasi input, rate limiting/throttling, CORS yang ketat, scope minimal, tidak membocorkan stack trace, logging &amp; monitoring (OWASP API Top 10: BOLA, broken auth, excessive data exposure).',
        '<b>API Gateway:</b> satu pintu masuk — routing, autentikasi, rate limit, caching, monitoring, transformasi. <b>Versioning</b> (/v1), <b>pagination</b>, <b>idempotency key</b> untuk POST pembayaran, dokumentasi <b>OpenAPI/Swagger</b>.',
        '<b>Integrasi SPBE:</b> pertukaran data antar-instansi melalui API &amp; <b>SPLP (Sistem Penghubung Layanan Pemerintah)</b>; interoperabilitas harus memakai standar data (Satu Data Indonesia, Perpres 39/2019) dan keamanan SPBE.'])
    },
    {
      title: 'Pengujian Perangkat Lunak (Ringkas)',
      html: tbl(['Level', 'Fokus'], [
        ['Unit test', 'Fungsi/kelas terkecil (developer)'],
        ['Integration test', 'Interaksi modul/API'],
        ['System test', 'Seluruh sistem sesuai kebutuhan'],
        ['<b>UAT</b> (User Acceptance)', 'Diterima pengguna/bisnis']
      ]) + ul(['<b>Black box</b> (tanpa lihat kode: equivalence partitioning, boundary value) vs <b>White box</b> (struktur kode: statement/branch/path coverage).',
        'Jenis: fungsional, regresi, performa (load/stress), keamanan (pentest), usability, smoke/sanity.',
        '<b>TDD</b>: tulis tes dulu → kode → refactor; <b>CI/CD</b>: otomatisasi build-test-deploy.'])
    }
  ], ['<b>4xx = client</b>, <b>5xx = server</b>; 401 ≠ 403.', 'GET/PUT/DELETE idempotent; <b>POST tidak</b>.', '502 = gateway/proxy menerima respons buruk dari upstream; 503 = overload/maintenance.']));

  add(FIRST_PRAKOM, P('prakom-struktur-oop', 'Struktur Data, Algoritma & Pemrograman Berorientasi Objek',
    'LIFO/FIFO, tree traversal, kompleksitas Big-O, sorting/searching, hashing, empat pilar OOP, overloading/overriding, SOLID, UML relasi.',
    ['Struktur Data & Algoritma', 'Pemrograman Berorientasi Objek'], [
    {
      title: 'Struktur Data & Kompleksitas',
      html: tbl(['Struktur', 'Prinsip / ciri', 'Operasi umum'], [
        ['<b>Stack</b>', '<b>LIFO</b> (Last In First Out), mis. Undo, call stack', 'push, pop, peek'],
        ['<b>Queue</b>', '<b>FIFO</b> (First In First Out), mis. antrean cetak', 'enqueue, dequeue'],
        ['Deque', 'Masuk/keluar di dua ujung', ''],
        ['Array', 'Akses indeks O(1), sisip/hapus O(n)', ''],
        ['Linked list', 'Node berisi data + pointer; sisip/hapus O(1) bila tahu posisi, akses O(n)', 'singly/doubly/circular'],
        ['<b>Hash table</b>', 'Fungsi hash → indeks; rata-rata O(1); <b>collision</b>: chaining / open addressing', ''],
        ['Tree', 'Hierarki: root, parent, child, leaf; <b>BST</b>: kiri &lt; akar &lt; kanan; AVL seimbang', ''],
        ['Heap', 'Complete tree; <b>max-heap</b> akar terbesar (priority queue)', ''],
        ['Graph', 'Vertex + edge; BFS (queue), DFS (stack/rekursi)', 'Dijkstra: jalur terpendek berbobot positif']
      ]) + tbl(['Traversal pohon', 'Urutan'], [
        ['Preorder', 'Akar → Kiri → Kanan'],
        ['<b>Inorder</b>', 'Kiri → Akar → Kanan (pada BST menghasilkan data <b>terurut</b>)'],
        ['Postorder', 'Kiri → Kanan → Akar'],
        ['Level-order', 'Per tingkat (BFS, pakai queue)']
      ]) + tbl(['Algoritma', 'Rata-rata', 'Terburuk'], [
        ['Linear search', 'O(n)', 'O(n)'], ['<b>Binary search</b> (data terurut)', '<b>O(log n)</b>', 'O(log n)'],
        ['Bubble / Selection / Insertion sort', 'O(n²)', 'O(n²)'], ['Merge sort', 'O(n log n)', 'O(n log n)'],
        ['Quick sort', 'O(n log n)', 'O(n²)'], ['Heap sort', 'O(n log n)', 'O(n log n)']
      ]) + ul(['Urutan pertumbuhan: O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ) &lt; O(n!).',
        'Rekursi butuh <b>kasus dasar</b>; faktorial n! = n × (n−1)!; Fibonacci naif O(2ⁿ).',
        'Pohon biner dengan tinggi h (akar h=0) memuat paling banyak 2^(h+1) − 1 node.'])
    },
    {
      title: 'OOP: Empat Pilar & Konsep',
      html: tbl(['Pilar', 'Arti', 'Kata kunci'], [
        ['<b>Enkapsulasi</b>', 'Membungkus atribut &amp; method dalam kelas, menyembunyikan detail dengan <b>access modifier</b> (private/protected/public) + getter/setter', 'private, data hiding'],
        ['<b>Pewarisan (Inheritance)</b>', 'Kelas turunan memakai ulang atribut/method kelas induk', 'extends, is-a'],
        ['<b>Polimorfisme</b>', 'Satu antarmuka, banyak bentuk: <b>overloading</b> (nama sama, parameter beda, compile-time) &amp; <b>overriding</b> (subclass menulis ulang method induk, runtime)', 'banyak bentuk'],
        ['<b>Abstraksi</b>', 'Menampilkan yang penting, menyembunyikan kompleksitas: <b>abstract class</b> / <b>interface</b>', 'kontrak']
      ]) + ul(['<b>Class</b> = cetak biru; <b>object</b> = instance; <b>constructor</b> = method inisialisasi objek; <b>static</b> = milik kelas.',
        '<b>Abstract class</b> bisa punya implementasi sebagian; <b>interface</b> hanya kontrak (sebagian bahasa mengizinkan default). Satu kelas dapat mengimplementasikan banyak interface.',
        '<b>SOLID:</b> S – single responsibility · O – open/closed · L – Liskov substitution · I – interface segregation · D – dependency inversion.',
        '<b>Prinsip desain:</b> <b>low coupling, high cohesion</b>, DRY, KISS. Pola: Singleton, Factory, Observer, MVC.',
        '<b>UML relasi:</b> asosiasi (garis), <b>agregasi</b> (belah ketupat kosong, "has-a" lemah), <b>komposisi</b> (belah ketupat isi, hidup bergantung), <b>generalisasi/pewarisan</b> (panah segitiga kosong), dependensi (garis putus-putus).'])
    }
  ], ['<b>Stack LIFO, Queue FIFO</b>; inorder BST = terurut; binary search O(log n).', 'Overloading = parameter beda; overriding = ulang method induk.', 'Enkapsulasi = <b>private + getter/setter</b>.']));

  add(FIRST_PRAKOM, P('prakom-protokol-port', 'Protokol, Port Standar, OSI/TCP-IP & Serangan Jaringan',
    'Tabel port TCP/UDP, DHCP DORA, DNS record, ARP/ICMP, routing, VPN, Wi-Fi, firewall, jenis serangan.',
    ['Port Standar', 'Jaringan Komputer & Protokol', 'Jaringan Komputer & Keamanan Siber'], [
    {
      title: 'Tabel Port Standar',
      html: tbl(['Port', 'Protokol', 'Fungsi'], [
        ['20/21', 'FTP', 'Transfer file (21 kontrol, 20 data)'],
        ['<b>22</b>', '<b>SSH</b>', 'Remote login aman (juga SFTP/SCP)'],
        ['23', 'Telnet', 'Remote login <b>tidak aman</b>'],
        ['25', 'SMTP', 'Kirim email antarserver'],
        ['<b>53</b>', '<b>DNS</b>', 'Nama domain ↔ IP (UDP; TCP untuk zone transfer)'],
        ['67/68', 'DHCP', 'Server 67, client 68 (UDP)'],
        ['<b>80</b>', '<b>HTTP</b>', 'Web tidak terenkripsi'],
        ['110', 'POP3', 'Ambil email (unduh)'],
        ['123', 'NTP', 'Sinkronisasi waktu'],
        ['143', 'IMAP', 'Email tersinkron di server'],
        ['161/162', 'SNMP', 'Monitoring perangkat jaringan'],
        ['<b>443</b>', '<b>HTTPS</b>', 'Web terenkripsi TLS'],
        ['445', 'SMB', 'Berbagi file Windows'],
        ['587 / 465', 'SMTP submission / SMTPS', 'Kirim email dengan autentikasi/TLS'],
        ['993 / 995', 'IMAPS / POP3S', 'Email terenkripsi'],
        ['1433', 'MS SQL Server', ''], ['1521', 'Oracle', ''],
        ['3306', 'MySQL/MariaDB', ''], ['5432', 'PostgreSQL', ''], ['27017', 'MongoDB', ''], ['6379', 'Redis', ''],
        ['3389', 'RDP', 'Remote Desktop Windows']
      ]) + ul(['Rentang: <b>well-known 0–1023</b>, registered 1024–49151, dinamis 49152–65535.',
        '<b>TCP</b> = connection-oriented, handshake <b>SYN → SYN-ACK → ACK</b>, andal (web, email, SSH). <b>UDP</b> = connectionless, cepat, tanpa jaminan (DNS, streaming, VoIP, DHCP).'])
    },
    {
      title: 'Protokol Inti',
      html: tbl(['Protokol', 'Fungsi / ciri'], [
        ['<b>DHCP</b>', 'Otomatis memberi <b>IP, subnet mask, gateway, DNS</b> ke client. Proses <b>DORA</b>: Discover → Offer → Request → Acknowledge'],
        ['<b>DNS</b>', 'Rekaman: <b>A</b> (IPv4), <b>AAAA</b> (IPv6), <b>CNAME</b> (alias), <b>MX</b> (mail), <b>NS</b> (name server), <b>PTR</b> (reverse), <b>TXT</b> (SPF/verifikasi), <b>SOA</b>'],
        ['<b>ARP</b>', 'Memetakan <b>IP → MAC</b> pada LAN (broadcast); serangan: ARP spoofing'],
        ['<b>ICMP</b>', 'Diagnostik: ping, traceroute'],
        ['<b>NAT/PAT</b>', 'Menerjemahkan IP privat ↔ publik'],
        ['VLAN (802.1Q)', 'Segmentasi logis pada switch; antar-VLAN butuh router/L3 switch'],
        ['STP', 'Mencegah <b>loop</b> pada switch'],
        ['<b>RIP</b> / <b>OSPF</b> / <b>BGP</b>', 'RIP = distance vector (hop, maks 15); OSPF = link-state (cost, area, Dijkstra, interior); BGP = path vector antar-AS (internet)'],
        ['VPN', 'Terowongan terenkripsi (IPsec, SSL/TLS, WireGuard)'],
        ['SNMP/Syslog', 'Monitoring &amp; log'],
        ['Wi-Fi 802.11', 'a/b/g/n/ac (Wi-Fi 5)/<b>ax (Wi-Fi 6)</b>; keamanan WPA2 (AES-CCMP) &amp; <b>WPA3</b> (SAE)']
      ]) + tbl(['Layer OSI', 'Nama', 'PDU', 'Contoh'], [
        ['7', 'Application', 'Data', 'HTTP, DNS, SMTP'], ['6', 'Presentation', 'Data', 'TLS, JPEG, ASCII'], ['5', 'Session', 'Data', 'NetBIOS, RPC'],
        ['4', 'Transport', 'Segment/datagram', 'TCP, UDP'], ['3', 'Network', 'Packet', 'IP, router'], ['2', 'Data Link', 'Frame', 'Ethernet, switch, MAC'], ['1', 'Physical', 'Bit', 'Kabel, hub']
      ]) + note('Urutan OSI atas → bawah: <b>"All People Seem To Need Data Processing"</b> (Application, Presentation, Session, Transport, Network, Data link, Physical). TCP/IP 4 layer: Application, Transport, Internet, Network Access.')
    },
    {
      title: 'Ancaman & Perangkat Keamanan Jaringan',
      html: tbl(['Serangan', 'Ciri', 'Pencegahan'], [
        ['<b>DDoS</b>', 'Banjir trafik dari banyak sumber → layanan lumpuh', 'WAF/anti-DDoS, rate limit, CDN'],
        ['<b>SQL Injection</b>', 'Menyisipkan SQL lewat input', '<b>Prepared statement</b>, validasi input'],
        ['<b>XSS</b>', 'Skrip berbahaya dijalankan di browser korban', 'Output encoding, CSP'],
        ['CSRF', 'Memaksa user terautentikasi melakukan aksi', 'Token CSRF, SameSite cookie'],
        ['<b>Phishing</b>', 'Rekayasa sosial lewat tautan/email palsu', 'Edukasi, MFA, filter email'],
        ['MITM', 'Menyadap/mengubah komunikasi', 'TLS, VPN, sertifikat'],
        ['<b>Ransomware</b>', 'Mengenkripsi data minta tebusan', 'Backup offline (3-2-1), patching'],
        ['Brute force', 'Menebak kata sandi', 'Lockout, MFA, kata sandi panjang'],
        ['DNS poisoning / ARP spoofing', 'Pemalsuan pemetaan', 'DNSSEC, Dynamic ARP Inspection']
      ]) + ul(['<b>Firewall</b> (filter paket/stateful/NGFW); <b>IDS</b> mendeteksi, <b>IPS</b> mencegah; <b>DMZ</b> untuk server publik; <b>proxy/reverse proxy</b>; <b>honeypot</b>; <b>segmentasi</b> &amp; <b>zero trust</b> (never trust, always verify).'])
    }
  ], ['Hafal port: <b>22 SSH, 53 DNS, 80 HTTP, 443 HTTPS, 3306 MySQL, 3389 RDP</b>.', 'DHCP = <b>DORA</b>; ARP = IP→MAC; DNS A=IPv4, MX=mail.', 'TCP andal/handshake; UDP cepat.']));

  add(FIRST_PRAKOM, P('prakom-cloud-audit-dr', 'Cloud, Audit TI & COBIT, ITIL, RAID, DRP & Data Center',
    'IaaS/PaaS/SaaS, shared responsibility, kontrol aplikasi vs umum, COBIT 2019 domain, ITIL 4, RTO/RPO, jenis backup, RAID, Tier data center.',
    ['Cloud Computing', 'Audit TI', 'Pemulihan Bencana', 'RAID', 'Manajemen Layanan TI (ITIL', 'Tata Kelola TI &'], [
    {
      title: 'Cloud Computing (NIST)',
      html: tbl(['Model', 'Penyedia mengelola', 'Pengguna mengelola', 'Contoh'], [
        ['<b>IaaS</b>', 'Hardware, jaringan, virtualisasi', '<b>OS</b>, middleware, runtime, aplikasi, data', 'VM di cloud, storage'],
        ['<b>PaaS</b>', 'Infrastruktur + OS + runtime', 'Aplikasi &amp; data', 'App Engine, database terkelola'],
        ['<b>SaaS</b>', 'Semua sampai aplikasi', 'Konfigurasi/pakai &amp; data', 'Gmail, Office 365']
      ]) + ul(['<b>5 karakteristik NIST:</b> on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service.',
        '<b>Deployment:</b> public, private, <b>hybrid</b>, community. <b>Shared responsibility:</b> penyedia mengamankan "<i>of</i> the cloud", pengguna mengamankan "<i>in</i> the cloud" (data, IAM, konfigurasi).',
        '<b>Virtual machine</b> (hypervisor, OS penuh) vs <b>container</b> (berbagi kernel, ringan: Docker/Kubernetes); <b>serverless/FaaS</b> = bayar per eksekusi.',
        'Konsolidasi pemerintah: <b>Pusat Data Nasional (PDN)</b> dan layanan cloud pemerintah (Perpres 95/2018 &amp; Perpres 82/2023).'])
    },
    {
      title: 'Audit TI, Kontrol & COBIT 2019',
      html: tbl(['Jenis kontrol', 'Contoh'], [
        ['<b>Application control</b> (pengendalian aplikasi/pemrosesan)', 'Validasi input, kontrol proses hitung, rekonsiliasi output, hak akses per fungsi'],
        ['<b>General control</b> (ITGC)', 'Akses logis &amp; fisik, manajemen perubahan program, operasi (backup, jadwal), pengembangan sistem']
      ]) + tbl(['Menurut fungsi', 'Arti'], [
        ['<b>Preventif</b>', 'Mencegah kejadian (kata sandi, segregation of duties)'], ['<b>Detektif</b>', 'Mendeteksi (log, IDS, rekonsiliasi)'], ['<b>Korektif</b>', 'Memperbaiki (restore backup, patch)']
      ]) + ul(['Pendekatan audit TI: <b>around</b> computer, <b>through</b> computer, <b>with</b> (menggunakan) computer — CAAT (<i>computer-assisted audit techniques</i>).',
        '<b>COBIT 2019</b> (ISACA): kerangka tata kelola &amp; manajemen TI; 40 objektif; <b>5 domain:</b> <b>EDM</b> (Evaluate, Direct, Monitor — tata kelola) lalu manajemen: <b>APO</b> (Align, Plan, Organize), <b>BAI</b> (Build, Acquire, Implement), <b>DSS</b> (Deliver, Service, Support), <b>MEA</b> (Monitor, Evaluate, Assess).',
        '<b>ISO 27001</b> = SMKI (keamanan informasi); <b>ISO 20000</b> = manajemen layanan TI; <b>ISO 38500</b> = tata kelola TI; <b>TOGAF</b> = arsitektur enterprise; <b>CMMI</b> = tingkat kematangan proses (1 Initial … 5 Optimizing).',
        'Prinsip audit: independen, bukti memadai (<b>sufficient &amp; appropriate evidence</b>), jejak audit (<b>audit trail</b>), segregasi tugas.'])
    },
    {
      title: 'ITIL 4 & Manajemen Layanan',
      html: ul(['<b>ITIL 4:</b> <b>Service Value System (SVS)</b> — guiding principles (7), governance, <b>service value chain</b> (Plan, Improve, Engage, Design &amp; Transition, Obtain/Build, Deliver &amp; Support), practices (34), continual improvement.',
        '<b>4 dimensi:</b> organizations &amp; people · information &amp; technology · partners &amp; suppliers · value streams &amp; processes.',
        '<b>Incident</b> = gangguan layanan (pulihkan secepatnya); <b>Problem</b> = akar penyebab incident berulang; <b>Change</b> = perubahan terkendali; <b>Service request</b> = permintaan standar; <b>Service desk</b> = SPOC (<i>single point of contact</i>).',
        '<b>SLA</b> (kesepakatan dengan pelanggan), <b>OLA</b> (internal), <b>UC</b> (kontrak pihak ketiga). ITIL 3: Strategy, Design, Transition, Operation, Continual Service Improvement.'])
    },
    {
      title: 'DRP, Backup, RAID & Tier Data Center',
      html: tbl(['Istilah', 'Arti'], [
        ['<b>RTO</b> (Recovery Time Objective)', 'Batas <b>waktu</b> maksimum layanan boleh mati'],
        ['<b>RPO</b> (Recovery Point Objective)', 'Batas <b>kehilangan data</b> maksimum (seberapa jauh titik pemulihan ke belakang)'],
        ['BIA', 'Business Impact Analysis — menentukan dampak &amp; prioritas'],
        ['BCP vs DRP', 'BCP = kelangsungan bisnis menyeluruh; DRP = pemulihan TI'],
        ['<b>Hot/Warm/Cold site</b>', 'Hot: siap pakai, replikasi real time (RTO terkecil, termahal); Warm: sebagian siap; Cold: ruang kosong']
      ]) + tbl(['Backup', 'Isi', 'Restore'], [
        ['<b>Full</b>', 'Semua data', 'Satu set (paling cepat)'],
        ['<b>Differential</b>', 'Perubahan sejak <b>full terakhir</b>', 'Full + diff terakhir'],
        ['<b>Incremental</b>', 'Perubahan sejak backup <b>terakhir (apa pun)</b>', 'Full + semua inkremental (paling lambat)']
      ]) + tbl(['RAID', 'Min. disk', 'Ciri', 'Toleransi gagal'], [
        ['<b>0</b>', '2', 'Striping — cepat, <b>tanpa redundansi</b>', '0'],
        ['<b>1</b>', '2', 'Mirroring — kapasitas 50%', '1 disk'],
        ['<b>5</b>', '3', 'Striping + parity terdistribusi', '1 disk'],
        ['<b>6</b>', '4', 'Dua parity', '2 disk'],
        ['<b>10</b>', '4', 'Mirror + stripe — cepat &amp; aman', '1 per pasangan']
      ]) + ul(['<b>Aturan 3-2-1:</b> 3 salinan, 2 media berbeda, 1 di luar lokasi (offsite/immutable).',
        '<b>Availability</b> = uptime/(uptime+downtime). <b>Tier Uptime Institute:</b> I 99,671% (~28,8 jam downtime/tahun) · II 99,741% (~22 jam) · <b>III 99,982% (~1,6 jam; concurrently maintainable)</b> · <b>IV 99,995% (~26 menit; fault tolerant)</b>.',
        '<b>High availability:</b> redundansi (N+1, 2N), failover, load balancer, clustering, <b>SPOF</b> (single point of failure) harus dihilangkan.'])
    }
  ], ['IaaS: kelola OS ke atas; PaaS: aplikasi &amp; data; SaaS: pakai.', 'Application control = validasi input/proses/output; General = akses/perubahan/operasi.', 'COBIT domain: <b>EDM, APO, BAI, DSS, MEA</b>.', 'RTO = waktu; RPO = data.']));

  add(FIRST_PRAKOM, P('prakom-multimedia-sig', 'Multimedia, Pengolahan Citra, Audio-Video & SIG',
    'Raster vs vektor, format file, codec & container, warna RGB/CMYK, ukuran file, kompresi, pengolahan citra, SIG (vektor/raster, WMS).',
    ['Multimedia & Pengolahan Citra', 'Sistem Informasi Geografis'], [
    {
      title: 'Citra, Warna & Format',
      html: tbl(['Format', 'Jenis', 'Ciri'], [
        ['<b>JPEG/JPG</b>', 'Raster, <b>lossy</b>', 'Foto, tidak mendukung transparansi'],
        ['<b>PNG</b>', 'Raster, <b>lossless</b>', 'Transparansi (alpha), tajam untuk grafis'],
        ['GIF', 'Raster, 256 warna', 'Animasi sederhana'],
        ['BMP / TIFF', 'Raster, tidak/ lossless', 'Besar, cetak profesional (TIFF)'],
        ['<b>SVG</b>', '<b>Vektor</b> berbasis XML', 'Tidak pecah saat diperbesar, ikon/logo web'],
        ['WebP / AVIF / HEIC', 'Modern', 'Kompresi efisien'],
        ['PDF / EPS / AI', 'Vektor/dokumen', 'Cetak']
      ]) + ul(['<b>Raster</b> = piksel (resolusi tergantung); <b>vektor</b> = rumus matematis (path/kurva) → skala tak terbatas.',
        '<b>RGB</b> (aditif; layar; Red-Green-Blue) vs <b>CMYK</b> (subtraktif; cetak); <b>HSV/HSL</b> (hue-saturation-value).',
        '<b>Bit depth:</b> 8 bit/kanal × 3 = <b>24-bit true color</b> = 16,7 juta warna; 1-bit = hitam-putih; 8-bit gray = 256 level.',
        '<b>Ukuran mentah</b> = lebar × tinggi × bit-per-piksel ÷ 8. Contoh 1920×1080 24-bit = 1920·1080·3 = <b>6.220.800 byte ≈ 6 MB</b>.',
        '<b>Resolusi:</b> HD 1280×720, <b>Full HD 1920×1080</b>, QHD 2560×1440, <b>4K UHD 3840×2160</b>; rasio <b>16:9</b>; <b>PPI/DPI</b> = kerapatan piksel/titik.'])
    },
    {
      title: 'Audio-Video & Kompresi',
      html: tbl(['Format', 'Ciri'], [
        ['MP3', 'Audio lossy, populer'], ['AAC', 'Lossy, lebih efisien dari MP3'], ['<b>WAV</b>', 'Audio tak terkompresi (PCM)'], ['<b>FLAC</b>', 'Audio <b>lossless</b>'],
        ['<b>MP4</b>', 'Container umum (video H.264/H.265 + audio AAC)'], ['MKV / AVI / WebM', 'Container lain'], ['H.264/AVC, H.265/HEVC, AV1', '<b>Codec</b> video']
      ]) + ul(['<b>Codec</b> = algoritma kompres/dekompres; <b>container</b> = pembungkus (video + audio + subtitle).',
        '<b>Audio:</b> sample rate CD 44,1 kHz; bit rate = sample rate × bit depth × kanal; <b>Nyquist:</b> sampling ≥ 2× frekuensi tertinggi.',
        '<b>Frame rate:</b> 24 (film), 25 (PAL), 30 (NTSC), 60 fps. Streaming adaptif: <b>HLS/DASH</b>.',
        '<b>Lossless:</b> RLE, Huffman, LZW (ZIP/PNG/FLAC). <b>Lossy:</b> DCT (JPEG/MPEG), membuang detail yang kurang terlihat.'])
    },
    {
      title: 'Pengolahan Citra Digital & SIG',
      html: ul(['<b>Operasi dasar:</b> grayscale, <b>thresholding</b> (biner), <b>histogram equalization</b> (kontras), <b>filter</b>: Gaussian/mean (blur), <b>median</b> (hapus noise salt &amp; pepper), sharpen, <b>deteksi tepi</b> (Sobel, Canny), segmentasi, morfologi, OCR.',
        '<b>SIG/GIS:</b> data <b>vektor</b> (titik, garis, poligon) &amp; <b>raster</b> (grid/citra satelit, DEM); atribut tabular; sistem koordinat (WGS84, UTM, EPSG:4326); <b>overlay</b>, buffer, georeferencing, digitasi.',
        'Standar OGC: <b>WMS</b> (peta gambar), <b>WFS</b> (fitur vektor), <b>WMTS</b> (ubin). Format: <b>Shapefile (.shp)</b>, GeoJSON, KML, GeoTIFF. Peta dasar nasional: <b>BIG</b>; kebijakan satu peta (One Map Policy).',
        'Tahapan multimedia: konsep → desain → pengumpulan bahan → pembuatan → pengujian → distribusi.'])
    }
  ], ['SVG = vektor XML; PNG lossless transparan; JPEG lossy foto.', 'RGB layar, CMYK cetak.', 'Ukuran = lebar × tinggi × bit ÷ 8.']));

  /* =================================================================== PASANG KE window.MATERI */
  list.forEach(function (p) {
    var oldId = p[0], item = p[1], i = -1;
    for (var k = 0; k < window.MATERI.length; k++) { if (window.MATERI[k].id === oldId) { i = k; break; } }
    if (i < 0) window.MATERI.push(item); else window.MATERI.splice(i, 0, item);
  });


  /* tabel tonggak sejarah ikut dipasang pada materi TWK lain (soal "tonggak" tersebar di banyak sub-topik) */
  var byId = function (id) { for (var k = 0; k < window.MATERI.length; k++) if (window.MATERI[k].id === id) return window.MATERI[k]; return null; };
  var src = byId('twk-sejarah-tanggal');
  if (src) {
    ['twk-nkri-lengkap', 'twk-bela-negara-lengkap', 'twk-integritas-lengkap', 'twk-pancasila-lengkap', 'twk-uud-lengkap', 'twk-otda-hierarki', 'twk-sejarah-tokoh'].forEach(function (id) {
      var m = byId(id);
      if (m) m.sections.push({ title: 'Lampiran: Tabel Tonggak Sejarah (sering muncul di semua sub-topik TWK)', html: src.sections[0].html });
    });
  }

  /* perluas pemetaan materi yang sudah ada agar sub-topik soal tak berlubang */
  var extendSubs = function (id, more) {
    for (var k = 0; k < window.MATERI.length; k++) {
      if (window.MATERI[k].id === id) { window.MATERI[k].subs = (window.MATERI[k].subs || []).concat(more); return; }
    }
  };
  extendSubs('prakom-rpl', ['SDLC', 'UML']);
  extendSubs('prakom-regulasi', ['Regulasi & Jabatan Fungsional Prakom']);
  extendSubs('prakom-basis-data', ['Sistem Basis Data']);

  /* =================================================================== TAMBAHAN SEKSI UNTUK MATERI SKB YANG SUDAH ADA */
  var addSec = function (id, sec) { var m = byId(id); if (m) m.sections.push(sec); };

  addSec('prakom-protokol-port', {
    title: 'Kriptografi, TTE, PKI & Dasar Keamanan (CIA, IDS/IPS, MFA)',
    html: tbl(['Konsep', 'Isi'], [
      ['<b>Triad CIA</b>', '<b>Confidentiality</b> (kerahasiaan), <b>Integrity</b> (integritas), <b>Availability</b> (ketersediaan). Tambahan: autentikasi, nirsangkal (<i>non-repudiation</i>)'],
      ['<b>Kriptografi simetris</b>', 'Satu kunci sama untuk enkripsi &amp; dekripsi — cepat (AES, 3DES)'],
      ['<b>Kriptografi asimetris</b>', 'Pasangan kunci publik–privat (RSA, ECC) — pertukaran kunci &amp; tanda tangan'],
      ['<b>Hash</b>', 'Fungsi satu arah, sidik jari data (SHA-256; MD5 usang) — menjamin <b>integritas</b>'],
      ['<b>Enkripsi</b> pesan', 'Pengirim memakai <b>kunci publik penerima</b>; penerima mendekripsi dengan <b>kunci privatnya</b>'],
      ['<b>Tanda tangan digital/TTE</b>', 'Penanda tangan menandatangani hash dokumen dengan <b>kunci privat</b>-nya; pihak lain memverifikasi dengan <b>kunci publik</b> (dalam sertifikat elektronik). Menjamin keaslian, integritas, nirsangkal'],
      ['<b>PKI / CA</b>', 'Certificate Authority menerbitkan sertifikat; di Indonesia sertifikat elektronik pemerintah diterbitkan <b>BSrE (Balai Sertifikasi Elektronik) BSSN</b>'],
      ['<b>IDS</b> vs <b>IPS</b>', 'IDS = <b>mendeteksi &amp; memberi peringatan</b>; IPS = <b>mendeteksi dan memblokir</b> lalu lintas berbahaya (inline)'],
      ['<b>Faktor autentikasi (MFA)</b>', 'Something you <b>know</b> (kata sandi/PIN) · something you <b>have</b> (token OTP, kartu pintar, HP) · something you <b>are</b> (biometrik)']
    ]) + ul(['<b>DHCP (Dynamic Host Configuration Protocol)</b> = otomatis memberi IP, subnet mask, gateway, DNS. <b>DNS (Domain Name System)</b> = nama ↔ IP. <b>SSH (Secure Shell)</b> port 22.',
      '<b>XSS (Cross-Site Scripting)</b> = menyisipkan skrip berbahaya (mis. di kolom komentar) yang dijalankan di peramba korban; cegah dengan output encoding &amp; CSP.'])
  });

  addSec('prakom-multimedia-sig', {
    title: 'Singkatan & Definisi Pasti',
    html: ul(['<b>SVG</b> = Scalable Vector Graphics (vektor berbasis XML, tidak pecah saat diperbesar). <b>PNG</b> = Portable Network Graphics (lossless, transparan). <b>JPEG</b> = Joint Photographic Experts Group (lossy). <b>GIF</b> = Graphics Interchange Format.',
      '<b>MP3</b> = MPEG-1 Audio Layer 3. <b>MP4</b> = MPEG-4 Part 14 (container). <b>DPI</b> = dots per inch; <b>PPI</b> = pixels per inch. <b>CMYK</b> = Cyan, Magenta, Yellow, Key (black). <b>RGB</b> = Red, Green, Blue.'])
  });

  addSec('prakom-cloud-audit-dr', {
    title: 'SLA, RTO/RPO Contoh Soal & Prinsip Pemandu ITIL 4',
    html: ul(['<b>SLA (Service Level Agreement)</b> = dokumen kesepakatan resmi antara <b>penyedia layanan TI</b> dan <b>pelanggan</b> yang memuat target layanan (ketersediaan, waktu respons, penalti).',
      '<b>Contoh:</b> RTO 4 jam &amp; RPO 15 menit → layanan harus pulih paling lama <b>4 jam</b>; data yang hilang paling banyak <b>15 menit</b> (backup/replikasi ≤ tiap 15 menit).',
      '<b>DR drill gagal</b> (pulih 9 jam &gt; RTO 4 jam): lakukan <b>analisis akar penyebab → perbaiki prosedur/arsitektur → uji ulang</b>; bukan mengubah RTO agar lulus.',
      '<b>7 prinsip pemandu ITIL 4:</b> (1) <b>Focus on value</b> (2) <b>Start where you are</b> — nilai kondisi saat ini &amp; pakai ulang aset yang ada (3) Progress iteratively with feedback (4) Collaborate and promote visibility (5) Think and work holistically (6) Keep it simple and practical (7) Optimize and automate.'])
  });

  addSec('prakom-spbe', {
    title: 'Arsitektur SPBE (Perpres 132/2022) & Peran Lembaga',
    html: tbl(['Domain Arsitektur SPBE Nasional (6)', 'Isi'], [
      ['Proses Bisnis', 'Alur kerja terpadu antar-instansi'], ['Data dan Informasi', 'Satu data, standar &amp; interoperabilitas'],
      ['Infrastruktur SPBE', 'Pusat data nasional, jaringan intra pemerintah, SPLP'], ['Aplikasi SPBE', 'Aplikasi umum &amp; khusus'],
      ['Keamanan SPBE', 'Kebijakan, SMKI, TTE'], ['Layanan SPBE', 'Layanan administrasi pemerintahan &amp; layanan publik']
    ]) + note('Soal "KECUALI": <b>Arsitektur Anggaran dan Pengadaan bukan domain</b> Arsitektur SPBE. Enam domain: <b>Proses Bisnis, Data &amp; Informasi, Infrastruktur, Aplikasi, Keamanan, Layanan</b>.') +
      ul(['<b>BSSN</b> (Badan Siber dan Sandi Negara) — keamanan siber &amp; sandi; menaungi <b>BSrE</b> yang menerbitkan <b>sertifikat elektronik</b> untuk TTE.',
        '<b>Komdigi</b> (Kementerian Komunikasi dan Digital) — kebijakan TIK; <b>KemenPANRB</b> — kebijakan SPBE &amp; evaluasi; <b>BAPPENAS</b> — perencanaan; <b>Kemenkeu</b> — penganggaran; <b>BPS</b> — Satu Data statistik; <b>BIG</b> — informasi geospasial.'])
  });

  addSec('prakom-basis-data', {
    title: 'Daftar Cepat: DDL/DML/DCL/TCL, ACID, UNION & NULL',
    html: tbl(['Kategori', 'Perintah', 'Fungsi'], [
      ['<b>DDL</b> (Data Definition)', 'CREATE, ALTER, DROP, TRUNCATE', 'Struktur objek'],
      ['<b>DML</b> (Data Manipulation)', 'SELECT, INSERT, UPDATE, DELETE', 'Isi data'],
      ['<b>DCL</b> (Data Control)', '<b>GRANT</b> (beri hak), <b>REVOKE</b> (cabut hak)', 'Hak akses — contoh: GRANT SELECT, INSERT ON pegawai TO staf_admin'],
      ['<b>TCL</b> (Transaction Control)', 'COMMIT, ROLLBACK, SAVEPOINT', 'Transaksi']
    ]) + ul(['<b>ACID:</b> <b>Atomicity</b> (semua operasi berhasil atau semua dibatalkan — "all or nothing"), <b>Consistency</b> (data tetap valid terhadap aturan), <b>Isolation</b> (transaksi paralel tidak saling mengganggu), <b>Durability</b> (hasil commit tetap meski sistem gagal).',
      '<b>UNION</b> menggabungkan hasil dua query dan <b>menghapus baris duplikat</b>; <b>UNION ALL</b> mempertahankan semua baris termasuk duplikat (lebih cepat).',
      '<b>NULL</b>: fungsi agregat (AVG, SUM, COUNT(kolom), MIN, MAX) <b>mengabaikan NULL</b>; COUNT(*) menghitung semua baris. AVG(8, 6, NULL) = (8+6)/2 = 7, bukan /3. Perbandingan NULL harus memakai <b>IS NULL</b>.',
      '<b>JOIN:</b> INNER (irisan), LEFT (semua kiri), RIGHT, FULL; <b>WHERE</b> menyaring baris sebelum agregasi, <b>HAVING</b> menyaring hasil GROUP BY.'])
  });

  addSec('prakom-rpl', {
    title: 'DevSecOps/CI-CD & Serangan Aplikasi (OWASP)',
    html: ul(['<b>CI/CD:</b> sebelum rilis layanan publik jalankan <b>uji otomatis + pemindaian keamanan (SAST/DAST, dependency scan) di pipeline</b>, persetujuan, lalu deploy bertahap (canary/blue-green) dengan rollback.',
      '<b>XSS (Cross-Site Scripting):</b> skrip berbahaya disisipkan (mis. kolom komentar) &amp; dijalankan di peramba korban. <b>SQL Injection</b>: input diubah menjadi perintah SQL → gunakan prepared statement. <b>CSRF</b>: memanfaatkan sesi korban.',
      '<b>OWASP Top 10:</b> broken access control, cryptographic failures, injection, insecure design, security misconfiguration, vulnerable components, auth failures, integrity failures, logging failures, SSRF.',
      '<b>SDLC:</b> Waterfall (berurutan), Agile/Scrum (iteratif; peran Product Owner, Scrum Master, Dev Team; event Sprint, Daily, Review, Retrospective), Spiral, Prototyping. <b>UML:</b> use case, class, sequence, activity, state, component, deployment.'])
  });

  addSec('prakom-infrastruktur', {
    title: 'Linux Dasar (chmod) & Tier Data Center',
    html: tbl(['Izin', 'Nilai'], [['r (read)', '4'], ['w (write)', '2'], ['x (execute)', '1']]) +
      ul(['<b>chmod 640 berkas.txt</b> → pemilik 6 (rw-) <b>baca-tulis</b>; grup 4 (r--) <b>baca</b>; lainnya 0 (---) <b>tanpa akses</b>. chmod 755 → rwxr-xr-x; chmod 777 → semua penuh (berbahaya).',
        'Perintah umum: ls, cd, pwd, cp, mv, rm, cat, grep, chmod, chown, ps, top, systemctl, df, du, tar, ssh, scp, journalctl; direktori /etc (konfigurasi), /var/log (log), /home, /root.',
        '<b>Uptime Institute Tier III</b> = <b>concurrently maintainable</b> (pemeliharaan tanpa mematikan layanan, ketersediaan 99,982%); Tier IV = fault tolerant 99,995%.'])
  });

  addSec('prakom-sig-data', {
    title: 'Jenis Sistem Informasi',
    html: tbl(['Sistem', 'Pengguna & fungsi'], [
      ['<b>TPS</b> (Transaction Processing System)', 'Level operasional; mencatat transaksi harian'],
      ['<b>MIS</b> (Management Information System)', 'Manajemen <b>menengah</b>; laporan ringkasan rutin dari data TPS'],
      ['<b>DSS</b> (Decision Support System)', 'Mendukung keputusan semi-terstruktur dengan model/analisis'],
      ['<b>EIS/ESS</b> (Executive Information System)', 'Manajemen puncak; dasbor strategis'],
      ['<b>ERP / CRM / SCM</b>', 'Integrasi proses perusahaan / pelanggan / rantai pasok'],
      ['<b>Data Warehouse &amp; BI</b>', 'Gudang data historis terintegrasi, ETL, OLAP, dasbor']
    ])
  });

  addSec('prakom-jaringan', {
    title: 'Diagnostik: ping, traceroute, nslookup, netstat',
    html: ul(['<b>ping</b> = uji konektivitas (ICMP echo). <b>traceroute/tracert</b> = menelusuri hop dengan menaikkan <b>TTL</b>; router membalas <i>ICMP Time Exceeded</i>. Tanda <b>"* * *"</b> mulai hop tertentu = hop itu atau setelahnya <b>memblokir/tidak membalas ICMP</b> (belum tentu putus).',
      '<b>nslookup/dig</b> = uji DNS; <b>ipconfig/ifconfig/ip a</b> = konfigurasi IP; <b>netstat/ss</b> = koneksi &amp; port terbuka; <b>arp -a</b> = tabel ARP; <b>nmap</b> = pemindaian port.'])
  });

  addSec('prakom-tata-kelola', {
    title: 'RTO/RPO, SLA, Prinsip ITIL 4 (Ringkas)',
    html: ul(['<b>RTO</b> = batas waktu pemulihan layanan; <b>RPO</b> = batas kehilangan data. RTO 4 jam &amp; RPO 15 menit → pulih ≤ 4 jam, kehilangan data ≤ 15 menit.',
      '<b>SLA (Service Level Agreement)</b> = kesepakatan penyedia layanan TI–pelanggan. ITIL 4: <b>Start Where You Are</b> = nilai kondisi saat ini &amp; manfaatkan ulang aset yang ada.',
      'Selengkapnya lihat materi <b>Cloud, Audit TI &amp; COBIT, ITIL, RAID, DRP</b>.'])
  });

  addSec('prakom-keamanan', {
    title: 'Ringkas: CIA, IDS/IPS & Faktor Autentikasi',
    html: ul(['<b>CIA</b> = Kerahasiaan, Integritas, Ketersediaan. <b>IDS</b> mendeteksi &amp; memberi peringatan; <b>IPS</b> dapat memblokir lalu lintas. <b>Something you have</b> = token OTP/kartu pintar; <b>know</b> = kata sandi; <b>are</b> = biometrik.'])
  });
})();
