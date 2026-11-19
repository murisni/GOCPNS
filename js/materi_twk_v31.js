/* v31 — Pelengkap materi TWK (langkah-langkah baru di akhir topik; tiap langkah punya `fam` untuk soal pengganti sekonsep). */
(function () {
  if (!window.__v31Append || window.__twkV31) return; window.__twkV31 = 1;
  var A = window.__v31Append;
  var T = function (h, rows) {
    return '<table class="table table-sm"><thead><tr>' + h.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
  var UL = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  var OL = function (a) { return '<ol>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>'; };
  var ING = function (x) { return '<div class="ingat">🧠 <b>Ingat:</b> ' + x + '</div>'; };
  var JEB = function (x) { return '<div class="studi-kunci">⚠️ <b>Jebakan soal:</b> ' + x + '</div>'; };
  var K = function (no, judul, o) {
    return '<div class="studi"><div class="studi-h">📘 STUDI KASUS ' + no + ' — ' + judul + '</div>' +
      '<div class="studi-soal"><b>SOAL:</b> ' + o.soal + '</div>' +
      '<ol class="studi-langkah">' + o.langkah.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' +
      '<div class="studi-jawab">✅ <b>JAWABAN:</b> ' + o.jawab + '</div>' +
      (o.ingat ? '<div class="ingat">🧠 <b>Ingat:</b> ' + o.ingat + '</div>' : '') + '</div>';
  };

  /* ================= PANCASILA ================= */
  A('twk-pancasila-lengkap', [
    { title: '45 Butir Pengamalan Pancasila: Kata Kunci per Sila', fam: 'twk-sila-butir-pengamalan', html:
      '<p>Butir pengamalan (Ekaprasetya Pancakarsa, 45 butir) sering dipakai sebagai <b>dasar soal kasus</b>: kamu diberi perilaku, lalu diminta menentukan sila yang diamalkan. Hafalkan <b>kata kunci perilaku</b>, bukan kalimat panjangnya.</p>' +
      T(['Sila', 'Jumlah butir', 'Kata kunci perilaku yang diamalkan'], [
        ['1 Ketuhanan YME', '7', 'Taat beribadah, toleransi antarumat beragama, saling menghormati kebebasan menjalankan ibadah, <b>tidak memaksakan agama/kepercayaan</b>'],
        ['2 Kemanusiaan yang adil dan beradab', '10', 'Mengakui persamaan derajat, <b>tenggang rasa</b>, tidak semena-mena, menjunjung nilai kemanusiaan, membela kebenaran dan keadilan, hormat-menghormati'],
        ['3 Persatuan Indonesia', '7', 'Cinta tanah air, rela berkorban, <b>menempatkan kepentingan bangsa di atas kepentingan pribadi/golongan</b>, bangga berbangsa Indonesia, Bhinneka Tunggal Ika'],
        ['4 Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan', '10', '<b>Musyawarah mufakat</b>, tidak memaksakan kehendak, menghormati hasil musyawarah, melaksanakan keputusan dengan itikad baik dan tanggung jawab kepada Tuhan'],
        ['5 Keadilan sosial bagi seluruh rakyat Indonesia', '11', '<b>Gotong royong</b>, adil, hidup sederhana, tidak boros, tidak bergaya hidup mewah, tidak memeras, suka bekerja keras, menghargai karya orang lain']
      ]) +
      '<p>Jumlah butir: <b>7 – 10 – 7 – 10 – 11 = 45</b>. Pola jumlah: sila 1 dan 3 sama-sama 7; sila 2 dan 4 sama-sama 10; sila 5 paling banyak (11).</p>' +
      JEB('Musyawarah yang dipaksakan oleh pihak mayoritas bukan sila ke-4. Memberi bantuan karena kasihan tidak otomatis sila ke-5; lihat kata kuncinya (kemanusiaan = sila 2, keadilan/gotong royong = sila 5).') +
      K(1, 'Perilaku → sila', { soal: 'Warga RW 05 menyepakati iuran kebersihan lewat rembuk warga. Ada yang awalnya menolak, tetapi tetap melaksanakan keputusan setelah disepakati. Perilaku ini mengamalkan sila...',
        langkah: ['Kata kunci: <b>rembuk warga, disepakati, melaksanakan keputusan</b>.', 'Itu ciri musyawarah mufakat dan penghormatan pada hasil musyawarah.', 'Musyawarah = sila ke-4.'], jawab: 'Sila ke-4 (Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan).', ingat: 'musyawarah → sila 4; gotong royong/keadilan → sila 5; toleransi beragama → sila 1; tenggang rasa → sila 2; cinta tanah air → sila 3.' })
    },
    { title: 'BPUPKI dan PPKI: Sidang, Panitia, Tokoh, Hasil', fam: 'twk-bpupki-ppki', html:
      '<p>Soal sejarah Pancasila hampir selalu menanyakan <b>lembaga – tanggal – tokoh – hasil</b>. Susun sebagai dua tabel.</p>' +
      T(['BPUPKI (Dokuritsu Junbi Cosakai)', 'Keterangan'], [
        ['Dibentuk / dilantik', 'Diumumkan 29 April 1945 (HUT Kaisar), dilantik 28 Mei 1945 di Gedung Cuo Sangi In (kini Gedung Pancasila, Jakarta)'],
        ['Ketua & wakil', 'Ketua: dr. K.R.T. Radjiman Wedyodiningrat; Wakil: R.P. Soeroso dan Ichibangase Yosio (Jepang)'],
        ['Sidang I', '29 Mei – 1 Juni 1945: <b>dasar negara</b> (pidato Yamin 29 Mei, Soepomo 31 Mei, Soekarno 1 Juni)'],
        ['Panitia Sembilan', '22 Juni 1945: menghasilkan <b>Piagam Jakarta</b> (Jakarta Charter)'],
        ['Sidang II', '10 – 17 Juli 1945: rancangan UUD, wilayah negara, bentuk negara, ekonomi, keuangan, pembelaan negara']
      ]) +
      T(['PPKI (Dokuritsu Junbi Iinkai)', 'Keterangan'], [
        ['Dibentuk', '7 Agustus 1945 (dilantik 9 Agustus); ketua Soekarno, wakil Mohammad Hatta'],
        ['Sidang I 18 Agustus 1945', 'Mengesahkan UUD 1945, memilih Soekarno-Hatta sebagai Presiden dan Wakil Presiden, KNIP sebagai pembantu Presiden sebelum MPR/DPR terbentuk'],
        ['Sidang II 19 Agustus 1945', 'Membagi wilayah menjadi <b>8 provinsi</b> dan membentuk 12 departemen/kementerian'],
        ['Sidang III 22 Agustus 1945', 'Membentuk KNIP, PNI (Partai Nasional Indonesia), dan BKR']
      ]) +
      '<p><b>Sembilan anggota Panitia Sembilan:</b> Soekarno, Mohammad Hatta, A.A. Maramis, Abikoesno Tjokrosoejoso, Abdul Kahar Muzakir, H. Agus Salim, Achmad Soebardjo, Wachid Hasjim, Muhammad Yamin.</p>' +
      JEB('BPUPKI membahas dasar negara; PPKI mengesahkan UUD dan memilih Presiden. Piagam Jakarta lahir dari Panitia Sembilan (22 Juni), bukan dari sidang PPKI.') + ING('Sembilan → Piagam Jakarta; Delapan provinsi → sidang PPKI 19 Agustus; 18 Agustus = UUD + Presiden.')
    },
    { title: 'Tiga Rumusan Dasar Negara & Perubahan 18 Agustus 1945', fam: 'twk-rumusan-dasar-negara', html:
      '<p>Soal sering meminta mencocokkan <b>tokoh – tanggal – rumusan</b> atau menanyakan <b>apa yang diubah pada 18 Agustus 1945</b>.</p>' +
      T(['Tokoh', 'Tanggal', 'Usulan / rumusan'], [
        ['Muhammad Yamin', '29 Mei 1945', 'Lima asas: Peri Kebangsaan, Peri Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, Kesejahteraan Rakyat'],
        ['Soepomo', '31 Mei 1945', 'Persatuan, Kekeluargaan, Keseimbangan lahir dan batin, Musyawarah, Keadilan rakyat (negara integralistik)'],
        ['Soekarno', '1 Juni 1945', 'Kebangsaan Indonesia, Internasionalisme/Perikemanusiaan, Mufakat/Demokrasi, Kesejahteraan sosial, Ketuhanan yang berkebudayaan. Dapat diperas menjadi <b>Trisila</b> (sosio-nasionalisme, sosio-demokrasi, ketuhanan) dan <b>Ekasila</b> (gotong royong)']
      ]) +
      '<p>Pada 1 Juni 1945 Soekarno menyebut lima asas itu dengan nama <b>Pancasila</b>. Tanggal ini ditetapkan sebagai Hari Lahir Pancasila (Keppres No. 24 Tahun 2016) dan menjadi hari libur nasional.</p>' +
      '<h4>Perubahan Piagam Jakarta → Pembukaan UUD 1945 (18 Agustus 1945)</h4>' +
      T(['Piagam Jakarta (22 Juni)', 'Setelah 18 Agustus'], [
        ['"Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"', '"Ketuhanan Yang Maha Esa"'],
        ['Presiden harus orang Indonesia asli <i>dan beragama Islam</i> (rancangan batang tubuh)', 'Frasa "dan beragama Islam" dihapus'],
        ['Istilah "Mukadimah"', 'Diganti "Pembukaan"']
      ]) +
      '<p>Alasan: menjaga persatuan setelah ada keberatan dari wakil wilayah Indonesia timur. Hatta melakukan pendekatan dengan beberapa tokoh Islam (antara lain Ki Bagus Hadikusumo, Kasman Singodimedjo, Teuku Mohammad Hassan, Wachid Hasjim) sehingga perubahan disepakati.</p>' +
      JEB('Yang disahkan 18 Agustus adalah rumusan <b>final</b> sila-sila yang kita pakai sekarang. Rumusan Yamin, Soepomo, dan Soekarno hanyalah usulan.') + ING('Yamin = Peri (29 Mei); Soepomo = integralistik (31 Mei); Soekarno = Pancasila, Tri/Ekasila (1 Juni).')
    },
    { title: 'Pancasila: Dasar Negara, Pandangan Hidup, Ideologi, Perjanjian Luhur', fam: 'twk-pancasila-kedudukan', html:
      '<p>Soal kedudukan Pancasila menguji <b>fungsi</b> mana yang dimaksud dalam kalimat soal. Pahami kata kunci masing-masing.</p>' +
      T(['Kedudukan', 'Kata kunci', 'Contoh kalimat'], [
        ['Dasar negara', 'Sumber dari segala sumber hukum, landasan penyelenggaraan negara, alinea IV Pembukaan', 'Semua peraturan tidak boleh bertentangan dengan Pancasila'],
        ['Pandangan hidup bangsa', 'Pedoman bersikap dan bertindak sehari-hari, nilai yang diyakini', 'Warga bergotong royong membangun jembatan'],
        ['Ideologi nasional', 'Cita-cita bersama, pemersatu, arah tujuan nasional', 'Cita-cita masyarakat adil dan makmur'],
        ['Kepribadian bangsa', 'Ciri khas yang membedakan dengan bangsa lain', 'Keramahan, kekeluargaan, gotong royong khas Indonesia'],
        ['Perjanjian luhur', 'Kesepakatan seluruh bangsa pada pendirian negara', 'Disepakati para pendiri bangsa 18 Agustus 1945'],
        ['Sumber hukum tertinggi / sumber dari segala sumber hukum', 'Jiwa seluruh peraturan; hierarki', 'Peraturan daerah harus sejalan nilai Pancasila']
      ]) +
      '<h4>Pembeda dengan ideologi lain</h4>' +
      T(['Ideologi', 'Ciri utama', 'Beda dengan Pancasila'], [
        ['Liberalisme', 'Kebebasan individu, pasar bebas', 'Pancasila menyeimbangkan hak individu dan kepentingan sosial'],
        ['Komunisme/sosialisme', 'Kepemilikan kolektif, kelas, ateistik (materialisme)', 'Pancasila mengakui Tuhan dan hak milik pribadi yang berfungsi sosial'],
        ['Fasisme/nasionalisme sempit', 'Pemimpin tunggal, superioritas bangsa', 'Pancasila menolak chauvinisme (sila 2 dan 3)'],
        ['Teokrasi', 'Negara berdasar satu agama', 'Indonesia bukan negara agama dan bukan negara sekuler']
      ]) +
      JEB('"Pandangan hidup" menyangkut cara bertindak sehari-hari; "dasar negara" menyangkut tata penyelenggaraan negara dan hukum. Jangan tertukar saat soal memakai contoh perilaku warga.')
    },
    { title: 'Nilai Dasar, Nilai Instrumental, Nilai Praksis (Ideologi Terbuka)', fam: 'twk-ideologi-terbuka-nilai', html:
      '<p>Ideologi terbuka berarti nilai dasarnya <b>tetap</b>, sedangkan penjabarannya <b>dinamis</b> mengikuti perkembangan zaman, tanpa meninggalkan nilai dasar.</p>' +
      T(['Tingkat', 'Sifat', 'Contoh'], [
        ['Nilai dasar', 'Tetap, universal, abstrak, tidak berubah', 'Lima sila; Pembukaan UUD 1945'],
        ['Nilai instrumental', 'Dapat berubah/disesuaikan, penjabaran nilai dasar', 'Batang tubuh UUD 1945, UU, Perpres, Perda, kebijakan'],
        ['Nilai praksis', 'Pelaksanaan nyata sehari-hari', 'Warga membayar pajak, gotong royong, ASN melayani tanpa pungli']
      ]) +
      '<p><b>Dimensi ideologi terbuka:</b> dimensi idealistis (cita-cita), dimensi normatif (norma/hukum), dimensi realistis (kenyataan dan perkembangan).</p>' +
      '<p><b>Syarat/ciri ideologi terbuka:</b> nilai dasar tidak boleh diubah; terbuka terhadap pemikiran baru yang tidak bertentangan; tidak diciptakan oleh negara tetapi digali dari nilai bangsa; dapat dipakai sebagai dasar dialog.</p>' +
      JEB('Pancasila terbuka bukan berarti boleh mengganti sila. Yang terbuka adalah penafsiran dan penjabaran. Soal "nilai instrumental" biasanya berisi undang-undang/peraturan; "nilai praksis" berisi perilaku nyata.') +
      K(2, 'Menentukan tingkat nilai', { soal: 'Pemerintah menerbitkan undang-undang perlindungan data pribadi sebagai penjabaran sila kedua. Undang-undang itu merupakan contoh nilai...',
        langkah: ['Undang-undang = aturan tertulis yang menjabarkan nilai dasar.', 'Penjabaran nilai dasar yang dapat disesuaikan zaman = nilai instrumental.', 'Nilai praksis hanya bila yang disebut adalah pelaksanaan nyata oleh warga.'], jawab: 'Nilai instrumental.' })
    }
  ]);

  /* ================= UUD 1945 ================= */
  A('twk-uud-lengkap', [
    { title: 'Kewenangan Lembaga Negara: MPR, DPR, DPD, Presiden', fam: 'twk-uud-lembaga-kewenangan', html:
      '<p>Pasca-amandemen semua lembaga negara <b>sejajar</b> (tidak ada lembaga tertinggi) dan saling mengawasi (checks and balances). Soal menanyakan <b>siapa berwenang melakukan apa</b>.</p>' +
      T(['Lembaga', 'Kewenangan pokok (pasal)', 'Kata kunci'], [
        ['MPR', 'Mengubah dan menetapkan UUD; melantik Presiden dan Wakil Presiden; memberhentikan Presiden/Wapres dalam masa jabatan menurut UUD (Pasal 3, 7A, 7B)', 'Ubah UUD, lantik, berhentikan'],
        ['DPR', 'Membentuk UU bersama Presiden; fungsi legislasi, anggaran, pengawasan (Pasal 20, 20A); hak interpelasi, angket, menyatakan pendapat', 'Legislasi, anggaran, awasi'],
        ['DPD', 'Mengajukan RUU tertentu kepada DPR, ikut membahas, memberi pertimbangan, mengawasi (Pasal 22D); terkait otonomi daerah, hubungan pusat–daerah, pemekaran, SDA, perimbangan keuangan', 'Daerah'],
        ['Presiden', 'Memegang kekuasaan pemerintahan (Pasal 4); mengajukan RUU, menetapkan PP (Pasal 5); panglima tertinggi AD/AL/AU (Pasal 10); Perpu bila kegentingan memaksa (Pasal 22)', 'Eksekutif'],
        ['BPK', 'Memeriksa pengelolaan dan tanggung jawab keuangan negara (Pasal 23E); hasilnya diserahkan ke DPR, DPD, DPRD', 'Audit keuangan'],
        ['MA, MK, KY', 'Kekuasaan kehakiman (Pasal 24–24C)', 'Yudikatif']
      ]) +
      '<p><b>Jumlah anggota:</b> MPR = anggota DPR + anggota DPD. Anggota DPD dipilih dari setiap provinsi dengan jumlah yang sama, dan <b>tidak lebih dari sepertiga</b> jumlah anggota DPR (Pasal 22C). Pemilu diselenggarakan lima tahun sekali, langsung, umum, bebas, rahasia, jujur, adil (Pasal 22E).</p>' +
      '<p><b>Rancangan UU:</b> dibahas DPR dan Presiden untuk persetujuan bersama; jika RUU yang telah disetujui bersama tidak disahkan Presiden dalam waktu 30 hari, RUU itu sah menjadi UU dan wajib diundangkan (Pasal 20 ayat 5).</p>' +
      JEB('DPD tidak memiliki fungsi membuat UU secara penuh dan tidak ikut memutus persetujuan RUU. MPR bukan lagi pembuat GBHN dan tidak memilih Presiden (sejak amandemen).') + ING('DPR = bikin UU, DPD = urusan daerah, MPR = ubah UUD + lantik, BPK = audit.')
    },
    { title: 'Pemilihan, Syarat, dan Pemberhentian Presiden (Pasal 6–8)', fam: 'twk-uud-presiden-pemilu', html:
      T(['Hal', 'Aturan (UUD 1945 pasca-amandemen)'], [
        ['Syarat (Pasal 6)', 'Warga negara Indonesia sejak kelahirannya, tidak pernah menerima kewarganegaraan lain karena kehendak sendiri, tidak pernah mengkhianati negara, mampu jasmani dan rohani'],
        ['Pemilihan (Pasal 6A)', 'Dipilih langsung sebagai pasangan oleh rakyat; diusulkan partai politik atau gabungan parpol peserta pemilu <b>sebelum pemilu</b>'],
        ['Syarat menang putaran I', 'Lebih dari <b>50%</b> suara dan sedikitnya <b>20%</b> di setiap provinsi, tersebar di <b>lebih dari separuh jumlah provinsi</b>'],
        ['Jika tidak ada pemenang', 'Dua pasangan peraih suara terbanyak pertama dan kedua maju ke putaran kedua; suara terbanyak menang'],
        ['Masa jabatan (Pasal 7)', '5 tahun, dapat dipilih kembali hanya untuk <b>satu kali</b> masa jabatan'],
        ['Pemberhentian (Pasal 7A)', 'Oleh MPR atas usul DPR bila terbukti melakukan pengkhianatan terhadap negara, korupsi, penyuapan, tindak pidana berat lain, perbuatan tercela, atau tidak lagi memenuhi syarat'],
        ['Mekanisme (Pasal 7B)', 'DPR mengajukan pendapat ke <b>MK</b> → MK memutus paling lama 90 hari → jika terbukti, DPR mengusulkan ke MPR → MPR memutus (sidang dihadiri 3/4 anggota dan disetujui 2/3 yang hadir)'],
        ['Berhalangan (Pasal 8)', 'Digantikan Wakil Presiden. Jika Presiden dan Wapres sekaligus berhalangan, <b>Menteri Luar Negeri, Menteri Dalam Negeri, dan Menteri Pertahanan</b> bersama-sama melaksanakan tugas paling lama 30 hari']
      ]) +
      JEB('Presiden tidak dapat membekukan/membubarkan DPR (Pasal 7C). Presiden tidak diberhentikan karena alasan politik semata, harus ada pelanggaran hukum yang diputus MK.') + ING('Prosedur pemakzulan: DPR → MK → DPR → MPR. Triumvirat: Menlu + Mendagri + Menhan.')
    },
    { title: 'Hak Asasi Manusia dalam UUD 1945 (Pasal 28A–28J) dan Hak/Kewajiban Warga', fam: 'twk-uud-ham', html:
      '<p>Bab XA hasil amandemen II memuat HAM. Hafal <b>satu kata kunci per pasal</b>:</p>' +
      T(['Pasal', 'Kata kunci'], [
        ['28A', 'Hak hidup dan mempertahankan kehidupan'], ['28B', 'Membentuk keluarga; hak anak (tumbuh kembang, bebas kekerasan dan diskriminasi)'],
        ['28C', 'Pengembangan diri, pendidikan, iptek, seni budaya'], ['28D', 'Pengakuan, jaminan, kepastian hukum yang adil; hak bekerja dan imbalan layak; kesempatan yang sama dalam pemerintahan; status kewarganegaraan'],
        ['28E', 'Memeluk agama, memilih pekerjaan, tempat tinggal, bebas meyakini kepercayaan, berserikat, berkumpul, mengeluarkan pendapat'], ['28F', 'Berkomunikasi dan memperoleh informasi'],
        ['28G', 'Perlindungan diri pribadi, keluarga, kehormatan; bebas dari penyiksaan; suaka politik'], ['28H', 'Hidup sejahtera, lingkungan sehat, pelayanan kesehatan, jaminan sosial, hak milik pribadi'],
        ['28I', '<b>Hak yang tidak dapat dikurangi dalam keadaan apa pun</b> (non-derogable)'], ['28J', '<b>Kewajiban asasi</b>: menghormati HAM orang lain, tunduk pada pembatasan oleh UU']
      ]) +
      '<p><b>Hak yang tidak dapat dikurangi (Pasal 28I ayat 1):</b> hak untuk hidup, hak untuk tidak disiksa, hak kemerdekaan pikiran dan hati nurani, hak beragama, hak untuk tidak diperbudak, hak diakui sebagai pribadi di hadapan hukum, dan hak untuk tidak dituntut atas dasar hukum yang berlaku surut.</p>' +
      '<p><b>Hak & kewajiban warga di luar Bab XA:</b> Pasal 27 ayat 1 (kedudukan sama di hadapan hukum dan pemerintahan, wajib menjunjung hukum), ayat 2 (pekerjaan dan penghidupan layak), ayat 3 (bela negara); Pasal 28 (kemerdekaan berserikat, berkumpul, mengeluarkan pikiran yang diatur UU); Pasal 29 (agama); Pasal 30 (pertahanan dan keamanan); Pasal 31 (pendidikan); Pasal 34 (fakir miskin dan anak terlantar dipelihara negara).</p>' +
      JEB('Pembatasan HAM oleh UU (Pasal 28J ayat 2) hanya boleh untuk menjamin pengakuan hak orang lain, moral, nilai agama, keamanan, ketertiban umum, dan tidak berlaku untuk hak non-derogable.') +
      K(3, 'Hak yang tidak dapat dikurangi', { soal: 'Dalam keadaan darurat sekalipun, negara tetap tidak boleh mengurangi hak-hak tertentu. Di antara hak berikut, yang MASIH DAPAT dibatasi dengan undang-undang adalah...',
        langkah: ['Pasal 28I ayat 1 memuat hak yang tidak dapat dikurangi dalam keadaan apa pun.', 'Hak berserikat, berkumpul, dan mengeluarkan pendapat (28E, Pasal 28) dapat dibatasi dengan UU (28J).', 'Maka hak yang boleh dibatasi: kebebasan berkumpul/berpendapat.'], jawab: 'Kebebasan berkumpul dan mengeluarkan pendapat. Hak hidup, tidak disiksa, beragama, tidak diperbudak, dan tidak dituntut berdasarkan hukum berlaku surut tidak dapat dikurangi.' })
    },
    { title: 'Detail Empat Amandemen: Pasal Kunci per Tahap', fam: 'twk-uud-amandemen-detail', html:
      T(['Tahap', 'Sidang', 'Isi pokok (pasal contoh)'], [
        ['I', '14–21 Oktober 1999 (Sidang Umum MPR)', '<b>Membatasi kekuasaan Presiden</b>: masa jabatan maksimal dua periode (Pasal 7), pengangkatan duta, pemberian grasi/amnesti (Pasal 13–15), kekuasaan membentuk UU berpindah ke DPR (Pasal 5 dan 20)'],
        ['II', '7–18 Agustus 2000 (Sidang Tahunan)', 'Pemerintahan daerah (Pasal 18–18B), DPR (Pasal 19–20A), wilayah negara (25A), warga negara dan penduduk (26), <b>HAM (28A–28J)</b>, pertahanan dan keamanan (30), bendera, bahasa, lambang, lagu (35–36C)'],
        ['III', '1–9 November 2001', 'Kedaulatan rakyat dan negara hukum (Pasal 1 ayat 2 dan 3), MPR, <b>pemilihan Presiden langsung (6A)</b>, pemberhentian Presiden (7A, 7B), pemilu (22E), DPD (22C, 22D), BPK (23E–23G), kekuasaan kehakiman, <b>MK dan KY (24B, 24C)</b>'],
        ['IV', '1–11 Agustus 2002', 'Penghapusan DPA (Dewan Pertimbangan Agung), pendidikan dan kebudayaan (31–32), perekonomian dan kesejahteraan sosial (33–34), aturan peralihan, aturan tambahan, <b>penghapusan Penjelasan UUD</b>, tata cara perubahan UUD (Pasal 37)']
      ]) +
      '<p><b>Hasil keseluruhan:</b> naskah asli 16 bab, 37 pasal, 49 ayat, 4 pasal aturan peralihan, 2 ayat aturan tambahan. Setelah amandemen: 21 bab, 73 pasal, 170 ayat, 3 pasal aturan peralihan, 2 pasal aturan tambahan. Penjelasan UUD 1945 dihapus; hal normatifnya dipindah ke batang tubuh.</p>' +
      JEB('Pemilihan Presiden langsung = amandemen III (2001), bukan II. DPA dihapus = amandemen IV (2002). HAM = amandemen II (2000). Pembatasan dua periode = amandemen I (1999).') +
      ING('I = batas Presiden; II = HAM + daerah; III = Pilpres langsung + MK; IV = DPA hilang + ekonomi/pendidikan.')
    },
    { title: 'MA, MK, dan KY: Wewenang, Komposisi, dan Perbedaan', fam: 'twk-uud-kehakiman-mk', html:
      T(['Lembaga', 'Wewenang', 'Komposisi / pengangkatan'], [
        ['Mahkamah Agung (Pasal 24A)', 'Mengadili pada tingkat <b>kasasi</b>; <b>menguji peraturan di bawah UU terhadap UU</b>; wewenang lain yang diberikan UU', 'Hakim agung diusulkan KY ke DPR untuk disetujui, ditetapkan Presiden'],
        ['Mahkamah Konstitusi (Pasal 24C)', '(1) <b>Menguji UU terhadap UUD</b>; (2) memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan UUD; (3) memutus pembubaran partai politik; (4) memutus perselisihan hasil pemilu; (5) memberi putusan atas pendapat DPR tentang dugaan pelanggaran Presiden/Wapres (kewajiban)', '<b>9 hakim konstitusi</b>: 3 diajukan MA, 3 DPR, 3 Presiden; ditetapkan Presiden. Putusan bersifat <b>final dan mengikat</b>'],
        ['Komisi Yudisial (Pasal 24B)', 'Mengusulkan pengangkatan hakim agung; menjaga dan menegakkan kehormatan, keluhuran martabat, dan perilaku hakim', 'Anggota diangkat dan diberhentikan Presiden dengan persetujuan DPR']
      ]) +
      '<p><b>Lingkungan peradilan di bawah MA:</b> peradilan umum, agama, militer, dan tata usaha negara.</p>' +
      '<p><b>Cara cepat membedakan "menguji":</b> yang diuji adalah UU → MK; yang diuji adalah peraturan di bawah UU (PP, Perpres, Perda) → MA. Sengketa hasil Pilkada: ditangani MK (atau badan peradilan khusus sesuai UU).</p>' +
      JEB('MK tidak mengadili perkara kasasi dan tidak mengawasi perilaku hakim biasa. KY tidak memutus perkara. Hakim MK tidak dipilih oleh rakyat.') +
      K(4, 'Menguji peraturan', { soal: 'Sebuah Peraturan Daerah dinilai bertentangan dengan Undang-Undang. Lembaga yang berwenang mengujinya adalah...',
        langkah: ['Objek = Perda (peraturan di bawah UU).', 'Peraturan di bawah UU diuji terhadap UU oleh Mahkamah Agung.'], jawab: 'Mahkamah Agung.', ingat: 'UU vs UUD → MK; peraturan di bawah UU vs UU → MA.' })
    },
    { title: 'Perekonomian, Pendidikan, Kebudayaan, Kesejahteraan Sosial (Pasal 31–34)', fam: 'twk-uud-ekonomi-pendidikan', html:
      T(['Pasal', 'Isi inti yang sering diuji'], [
        ['29', 'Negara berdasar Ketuhanan Yang Maha Esa; negara menjamin kemerdekaan tiap penduduk memeluk agamanya dan beribadat'],
        ['31', 'Setiap warga negara berhak mendapat pendidikan; wajib mengikuti <b>pendidikan dasar</b> dan pemerintah wajib membiayainya; <b>anggaran pendidikan sekurang-kurangnya 20%</b> dari APBN dan APBD'],
        ['32', 'Pemerintah memajukan kebudayaan nasional; negara menghormati dan memelihara <b>bahasa daerah</b> sebagai kekayaan budaya nasional'],
        ['33 ayat 1', 'Perekonomian disusun sebagai <b>usaha bersama berdasar atas asas kekeluargaan</b> (koperasi sebagai soko guru dalam penjelasan lama)'],
        ['33 ayat 2', '<b>Cabang-cabang produksi yang penting bagi negara dan menguasai hajat hidup orang banyak</b> dikuasai oleh negara'],
        ['33 ayat 3', '<b>Bumi, air, dan kekayaan alam</b> dikuasai negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat'],
        ['33 ayat 4', 'Perekonomian nasional diselenggarakan berdasar demokrasi ekonomi dengan prinsip kebersamaan, efisiensi berkeadilan, berkelanjutan, berwawasan lingkungan, kemandirian, serta menjaga keseimbangan kemajuan dan kesatuan ekonomi nasional'],
        ['34', 'Fakir miskin dan anak-anak terlantar dipelihara oleh negara; negara mengembangkan sistem jaminan sosial bagi seluruh rakyat'],
        ['36–36C', 'Bahasa Negara (36); Lambang Negara Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika (36A); Lagu Kebangsaan Indonesia Raya (36B); aturan lambang diatur UU (36C)']
      ]) +
      JEB('Pasal 33 ayat 3 menyebut "dikuasai negara" bukan "dimiliki negara". Frasa "sebesar-besar kemakmuran rakyat" (bukan kemakmuran pemerintah atau pemodal). Pasal 34 ayat 1 menyebut "dipelihara", bukan "dihapuskan".') +
      ING('Pasal 33: ayat 2 = cabang produksi, ayat 3 = bumi-air-kekayaan alam. Pasal 31: wajib belajar pendidikan dasar + 20% anggaran.')
    }
  ]);

  /* ================= NKRI ================= */
  A('twk-nkri-lengkap', [
    { title: 'Zona Maritim Indonesia: Laut Teritorial, ZEE, Landas Kontinen, ALKI', fam: 'twk-nkri-zona-maritim', html:
      '<p>Dasar: <b>UNCLOS 1982</b> (diratifikasi dengan UU No. 17 Tahun 1985; berlaku internasional 1994) yang mengakui konsep <b>negara kepulauan</b> hasil perjuangan Deklarasi Djuanda 13 Desember 1957. Pengaturan nasional: UU No. 6 Tahun 1996 tentang Perairan Indonesia, UU No. 5 Tahun 1983 tentang ZEE Indonesia, UU No. 43 Tahun 2008 tentang Wilayah Negara.</p>' +
      T(['Zona', 'Lebar (dari garis pangkal)', 'Status hak Indonesia'], [
        ['Laut teritorial', '12 mil laut', '<b>Kedaulatan penuh</b> (termasuk ruang udara, dasar laut); kapal asing berhak <b>lintas damai</b>'],
        ['Zona tambahan', 'Hingga 24 mil laut', 'Pengawasan <b>bea cukai, imigrasi, fiskal, dan saniter (kesehatan)</b>'],
        ['ZEE (Zona Ekonomi Eksklusif)', 'Hingga 200 mil laut', '<b>Hak berdaulat</b> (bukan kedaulatan) memanfaatkan sumber daya hayati/nonhayati; kebebasan pelayaran dan penerbangan bagi negara lain'],
        ['Landas kontinen', 'Dasar laut dan tanah di bawahnya; hingga 200 mil laut atau lebih (maks. 350 mil laut bila tepi kontinen alamiah)', 'Hak berdaulat atas sumber daya dasar laut (mineral, migas)'],
        ['Laut lepas', 'Di luar ZEE', 'Bebas bagi semua negara']
      ]) +
      '<p><b>Perairan pedalaman/kepulauan:</b> perairan di sisi dalam garis pangkal kepulauan; kedaulatan penuh. <b>Garis pangkal kepulauan</b> menghubungkan titik-titik terluar pulau terluar.</p>' +
      '<p><b>ALKI (Alur Laut Kepulauan Indonesia)</b>: jalur laut yang boleh dilintasi kapal/pesawat asing untuk lintas alur kepulauan; ditetapkan tiga alur — ALKI I (Selat Sunda–Laut Cina Selatan), ALKI II (Selat Lombok–Selat Makassar–Laut Sulawesi), ALKI III (Laut Sawu/Timor – Laut Banda – Samudra Pasifik) — dengan PP No. 37 Tahun 2002.</p>' +
      JEB('"Kedaulatan" hanya untuk wilayah laut teritorial dan perairan kepulauan. Di ZEE Indonesia hanya memiliki "hak berdaulat". Angka 12, 24, 200 selalu dihitung dari garis pangkal, bukan dari batas zona sebelumnya.') +
      ING('12 – 24 – 200. Teritorial = kedaulatan, tambahan = BIFS (bea, imigrasi, fiskal, saniter), ZEE = hak berdaulat sumber daya.')
    },
    { title: 'Bentuk Negara dan Sejarah Perubahannya: NKRI, RIS, UUDS, Dekrit', fam: 'twk-nkri-bentuk-negara', html:
      T(['Periode', 'Konstitusi', 'Bentuk negara & sistem'], [
        ['18 Agustus 1945 – 27 Des 1949', 'UUD 1945', 'Negara kesatuan, republik; presidensial (secara praktik sempat parlementer sejak Maklumat 14 November 1945)'],
        ['27 Des 1949 – 17 Agustus 1950', 'Konstitusi RIS', '<b>Negara serikat/federal</b> (Republik Indonesia Serikat) hasil Konferensi Meja Bundar; sistem parlementer'],
        ['17 Agustus 1950 – 5 Juli 1959', 'UUD Sementara 1950', 'Kembali ke <b>negara kesatuan</b> (setelah Mosi Integral Natsir 3 April 1950); sistem parlementer (demokrasi liberal)'],
        ['5 Juli 1959 – 1966/1998', 'UUD 1945 (Dekrit Presiden)', 'Kembali ke UUD 1945; demokrasi terpimpin lalu Orde Baru'],
        ['1999 – 2002', 'UUD 1945 diamandemen', 'Tetap negara kesatuan berbentuk republik (Pasal 1 ayat 1); presidensial']
      ]) +
      '<p><b>Pasal 1 ayat 1:</b> "Negara Indonesia ialah Negara Kesatuan yang berbentuk Republik." <b>Pasal 37 ayat 5:</b> khusus mengenai bentuk Negara Kesatuan Republik Indonesia tidak dapat dilakukan perubahan.</p>' +
      '<p><b>Dekrit 5 Juli 1959</b>: (1) pembubaran Konstituante, (2) berlakunya kembali UUD 1945 dan tidak berlakunya UUDS 1950, (3) pembentukan MPRS dan DPAS dalam waktu singkat.</p>' +
      JEB('RIS dibentuk oleh KMB (Den Haag, 1949), bukan oleh proklamasi. Soal sering memancing dengan "negara federal" untuk periode 1949–1950 saja.') + ING('Kesatuan–Federal–Kesatuan: 1945 → 1949 (RIS) → 1950 (UUDS) → 1959 (Dekrit).')
    },
    { title: 'Sumpah Pemuda, Bhinneka Tunggal Ika, dan Simbol Negara: Detail Soal', fam: 'twk-nkri-bhinneka-simbol', html:
      T(['Hal', 'Fakta'], [
        ['Kongres Pemuda I', '30 April – 2 Mei 1926'],
        ['Kongres Pemuda II', '27–28 Oktober 1928 di Batavia; menghasilkan <b>Sumpah Pemuda</b>; ketua Soegondo Djojopoespito; rumusan ikrar oleh Muhammad Yamin; lagu <i>Indonesia Raya</i> pertama kali diperdengarkan (biola) oleh W.R. Supratman'],
        ['Isi ikrar', 'Satu <b>tumpah darah</b> (tanah air), satu <b>bangsa</b>, menjunjung <b>bahasa persatuan</b> (bahasa Indonesia)'],
        ['Semboyan', '<i>Bhinneka Tunggal Ika</i> — dari Kakawin Sutasoma karya Mpu Tantular (Majapahit); Pasal 36A UUD 1945'],
        ['Bendera', 'Sang Merah Putih (Pasal 35 UUD 1945); dikibarkan pertama kali 17 Agustus 1945, dijahit Ibu Fatmawati; perbandingan lebar : panjang = 2 : 3'],
        ['Lambang negara', 'Garuda Pancasila; dirancang Sultan Hamid II; diresmikan pemakaiannya 11 Februari 1950'],
        ['Lagu kebangsaan', 'Indonesia Raya, ciptaan W.R. Supratman; Pasal 36B UUD 1945'],
        ['Bahasa negara', 'Bahasa Indonesia (Pasal 36 UUD 1945)'],
        ['UU yang mengatur', 'UU No. 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan']
      ]) +
      '<p><b>Makna keberagaman:</b> Indonesia memiliki ratusan suku bangsa dan bahasa daerah. Kebhinnekaan harus dikelola dengan toleransi, saling menghormati, dan keadilan; bukan dengan penyeragaman paksa.</p>' +
      JEB('Sumpah Pemuda tidak berbunyi "satu agama" atau "satu suku". Kata kuncinya: tanah air, bangsa, bahasa. Pasal 36A tentang lambang negara, bukan Pasal 36.') +
      K(5, 'Kongres Pemuda', { soal: 'Hasil Kongres Pemuda II 28 Oktober 1928 yang berisi tiga ikrar disebut...',
        langkah: ['Kongres Pemuda II → keputusan paling terkenal.', 'Isi: satu nusa, satu bangsa, satu bahasa.'], jawab: 'Sumpah Pemuda.' })
    },
    { title: 'Wawasan Nusantara, Ketahanan Nasional, Geopolitik & Geostrategi', fam: 'twk-nkri-wawasan-tannas', html:
      T(['Konsep', 'Pengertian singkat'], [
        ['Wawasan Nusantara', 'Cara pandang bangsa Indonesia tentang diri dan lingkungannya yang serba beragam dan bernilai strategis, dengan mengutamakan <b>persatuan dan kesatuan bangsa serta kesatuan wilayah</b>, berdasarkan Pancasila dan UUD 1945'],
        ['Geopolitik', 'Cara pandang/ilmu tentang pengaruh letak geografis terhadap politik negara (<i>politik dilihat dari ruang</i>)'],
        ['Geostrategi', 'Strategi memanfaatkan kondisi geografis untuk menentukan kebijakan, tujuan, dan sarana mencapai tujuan nasional (misalnya Ketahanan Nasional)'],
        ['Ketahanan Nasional', 'Kondisi dinamis bangsa yang berisi keuletan dan ketangguhan dalam menghadapi dan mengatasi <b>ATHG</b> (Ancaman, Tantangan, Hambatan, Gangguan)'],
        ['Lemhannas', 'Lembaga Ketahanan Nasional, lembaga pengkajian strategis dan pendidikan kepemimpinan nasional']
      ]) +
      '<p><b>Asta Gatra</b> (delapan aspek ketahanan nasional) dibagi dua kelompok:</p>' +
      T(['Kelompok', 'Gatra'], [['Tri Gatra (alamiah, tiga aspek)', 'Geografi, Kekayaan Alam (SDA), Kependudukan (demografi)'], ['Panca Gatra (sosial, lima aspek)', 'Ideologi, Politik, Ekonomi, Sosial Budaya, Pertahanan dan Keamanan (IPOLEKSOSBUDHANKAM)']]) +
      '<p><b>Aspek wawasan nusantara:</b> dalam politik (kesatuan politik), ekonomi (kesatuan ekonomi), sosial budaya (satu bangsa, budaya beragam), dan pertahanan keamanan (ancaman terhadap satu daerah adalah ancaman bagi seluruh bangsa).</p>' +
      JEB('Kependudukan termasuk gatra alamiah (Tri Gatra), bukan gatra sosial. Ideologi termasuk Panca Gatra.') + ING('Tri = alam (GKK: Geografi, Kekayaan alam, Kependudukan). Panca = IPOLEKSOSBUD-HANKAM.')
    }
  ]);

  /* ================= SEJARAH (TANGGAL) ================= */
  A('twk-sejarah-tanggal', [
    { title: 'Masa Kolonial: VOC, Daendels, Raffles, Tanam Paksa, Politik Etis', fam: 'twk-sejarah-kolonial', html:
      T(['Tahun / periode', 'Peristiwa', 'Kata kunci'], [
        ['1602 – 1799', '<b>VOC</b> (Vereenigde Oostindische Compagnie) berdiri 20 Maret 1602; dibubarkan 31 Desember 1799', 'Monopoli rempah; hak octrooi'],
        ['1808 – 1811', 'Gubernur Jenderal <b>Daendels</b>', 'Jalan Raya Pos Anyer–Panarukan; kerja paksa'],
        ['1811 – 1816', '<b>Raffles</b> (Inggris)', 'Sistem sewa tanah (landrent)'],
        ['1825 – 1830', 'Perang Diponegoro (Perang Jawa)', 'Pangeran Diponegoro; Jenderal De Kock'],
        ['1830', '<b>Cultuurstelsel</b> (Tanam Paksa), Van den Bosch', 'Sebagian lahan wajib ditanami tanaman ekspor'],
        ['1870', 'Undang-Undang Agraria (Agrarische Wet) dan Undang-Undang Gula', 'Awal era liberal, swasta masuk'],
        ['1901', '<b>Politik Etis</b> (politik balas budi), digagas C.Th. van Deventer', '<b>Trias van Deventer:</b> Irigasi, Edukasi, Emigrasi']
      ]) +
      T(['Perlawanan daerah', 'Tokoh', 'Periode'], [
        ['Perang Padri', 'Tuanku Imam Bonjol', '1821–1837'], ['Perang Aceh', 'Teuku Umar, Cut Nyak Dien, Teuku Cik Di Tiro', '1873–1904'],
        ['Perang Banjar', 'Pangeran Antasari', '1859–1905'], ['Perlawanan Pattimura', 'Kapitan Pattimura', '1817'],
        ['Perlawanan Batak', 'Sisingamangaraja XII', '1878–1907']
      ]) +
      '<p><b>Pendudukan Jepang:</b> 8 Maret 1942 Belanda menyerah di Kalijati. Organisasi bentukan Jepang: Gerakan 3A (1942), Putera (1943), PETA (3 Oktober 1943), Jawa Hokokai (1944), Heiho. Janji kemerdekaan Perdana Menteri Koiso: 7 September 1944.</p>' +
      JEB('Politik Etis berasal dari Belanda (1901) dan <b>tidak</b> sama dengan Tanam Paksa (1830). Soal sering meminta membedakan yang merugikan rakyat (tanam paksa) dengan yang tampak menguntungkan (etis, tetapi efek lahirnya kaum terdidik).') + ING('VOC 1602 – Tanam Paksa 1830 – Etis 1901 (3E: Irigasi, Edukasi, Emigrasi).')
    },
    { title: 'Organisasi Pergerakan Nasional: Tanggal, Pendiri, Ciri', fam: 'twk-sejarah-pergerakan', html:
      T(['Organisasi', 'Tanggal / tahun', 'Pendiri / tokoh', 'Ciri'], [
        ['Budi Utomo', '20 Mei 1908', 'dr. Wahidin Soedirohoesodo; dr. Soetomo (pelajar STOVIA)', 'Organisasi modern pertama; awalnya sosial-budaya Jawa; tanggal itu = Hari Kebangkitan Nasional'],
        ['Sarekat Dagang Islam (SDI)', '1905', 'H. Samanhudi (Solo)', 'Dagang batik, melawan dominasi pedagang Tionghoa/Eropa'],
        ['Sarekat Islam (SI)', '1912', 'H.O.S. Tjokroaminoto', 'Perluasan SDI; berbasis massa'],
        ['Indische Partij', '25 Desember 1912', 'Tiga Serangkai: E.F.E. Douwes Dekker, Tjipto Mangoenkoesoemo, Soewardi Soerjaningrat (Ki Hajar Dewantara)', 'Partai politik pertama; menuntut Hindia untuk orang Hindia; mencita-citakan <b>kemerdekaan</b>'],
        ['Muhammadiyah', '18 November 1912', 'K.H. Ahmad Dahlan (Yogyakarta)', 'Pembaruan Islam; pendidikan dan sosial'],
        ['Perhimpunan Indonesia', '1908 (Indische Vereeniging), berganti nama 1922/1925', 'Mohammad Hatta dkk. (di Belanda)', 'Memakai nama "Indonesia"; berhaluan nonkooperasi'],
        ['Taman Siswa', '3 Juli 1922', 'Ki Hajar Dewantara', 'Pendidikan nasional; semboyan <i>ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani</i>'],
        ['Nahdlatul Ulama', '31 Januari 1926', 'K.H. Hasyim Asy\'ari (Surabaya)', 'Organisasi ulama tradisional/pesantren'],
        ['PNI', '4 Juli 1927', 'Soekarno dkk. (Bandung)', 'Berhaluan nasionalis, nonkooperasi, tujuan Indonesia merdeka'],
        ['Gerindo', '1937', 'Amir Sjarifuddin dkk.', 'Menentang fasisme'],
        ['GAPI (Gabungan Politik Indonesia)', '1939', 'Mohammad Husni Thamrin dkk.', 'Menuntut Indonesia berparlemen']
      ]) +
      '<p><b>Pembagian periode</b> (salah satu versi umum): <b>Awal (pembentukan) 1908–1920</b> (Budi Utomo, SI, Indische Partij); <b>radikal 1920–1930</b> (PKI, PNI, Perhimpunan Indonesia — nonkooperasi); <b>moderat 1930–1942</b> (Partindo, PNI Baru, Parindra, GAPI — kooperasi; Petisi Soetardjo 1936).</p>' +
      JEB('Budi Utomo bukan partai politik; Indische Partij partai politik pertama. SI bermula dari SDI. 20 Mei = Budi Utomo; 28 Oktober = Sumpah Pemuda; 4 Juli = PNI.') + ING('Tiga Serangkai = Douwes Dekker, Tjipto, Soewardi (Indische Partij).')
    },
    { title: 'Menuju Proklamasi: Kronologi Hari demi Hari (Agustus 1945)', fam: 'twk-sejarah-proklamasi', html:
      T(['Tanggal', 'Peristiwa'], [
        ['6 & 9 Agustus 1945', 'Bom atom dijatuhkan di Hiroshima dan Nagasaki'],
        ['9–12 Agustus 1945', 'Soekarno, Hatta, Radjiman ke Dalat (Vietnam) bertemu Marsekal Terauchi; dijanjikan kemerdekaan'],
        ['14 Agustus 1945', 'Jepang menyerah kepada Sekutu (diumumkan 15 Agustus)'],
        ['15 Agustus 1945', 'Golongan muda (Sutan Sjahrir, Soekarni, Wikana, Chaerul Saleh, dll.) mendesak proklamasi segera, tidak lewat PPKI'],
        ['16 Agustus 1945 (dini hari)', '<b>Peristiwa Rengasdengklok</b>: Soekarno-Hatta "diamankan" golongan muda; Achmad Soebardjo menjemput dengan jaminan proklamasi 17 Agustus'],
        ['16 Agustus 1945 (malam)', 'Penyusunan teks proklamasi di rumah <b>Laksamana Tadashi Maeda</b>, Jl. Meiji Dori (kini Jl. Imam Bonjol): Soekarno, Hatta, Achmad Soebardjo; dihadiri Soekarni, B.M. Diah, Sayuti Melik, Sudiro'],
        ['17 Agustus 1945 pukul 10.00', 'Pembacaan Proklamasi di Jl. Pegangsaan Timur 56; Bendera dikibarkan Latief Hendraningrat dan Soehoed; teks diketik Sayuti Melik, ditandatangani Soekarno-Hatta atas nama bangsa Indonesia'],
        ['18 Agustus 1945', 'Sidang PPKI: UUD 1945, Presiden dan Wapres']
      ]) +
      '<p><b>Perbedaan golongan tua dan muda:</b> golongan tua (Soekarno, Hatta) ingin mengikuti prosedur PPKI dan menghindari pertumpahan darah; golongan muda ingin proklamasi segera karena Jepang telah menyerah (kekosongan kekuasaan).</p>' +
      '<p><b>Teks proklamasi:</b> "Kami bangsa Indonesia dengan ini menjatakan Kemerdekaan Indonesia. Hal-hal jang mengenai pemindahan kekuasaan d.l.l., diselenggarakan dengan tjara saksama dan dalam tempo jang sesingkat-singkatnja. Djakarta, hari 17 boelan 8 tahoen 05. Atas nama bangsa Indonesia. Soekarno/Hatta." (tahun 05 = 2605 tahun Jepang).</p>' +
      JEB('Rengasdengklok terjadi 16 Agustus, bukan 17. Teks proklamasi dirumuskan di rumah Maeda, tetapi dibacakan di rumah Soekarno (Pegangsaan Timur 56). Pelaku di Rengasdengklok: golongan muda, bukan PPKI.')
    },
    { title: 'Perang Kemerdekaan, Perjanjian, dan Pengakuan Kedaulatan', fam: 'twk-sejarah-perjanjian', html:
      T(['Perjanjian', 'Waktu', 'Pokok isi'], [
        ['Linggarjati', 'Dirundingkan Nov 1946; ditandatangani 25 Maret 1947', 'Belanda mengakui secara de facto Jawa, Madura, Sumatera; pembentukan Negara Indonesia Serikat; Uni Indonesia–Belanda'],
        ['Renville', '17 Januari 1948 (kapal USS Renville)', 'Wilayah RI menyempit (Garis Van Mook); pasukan RI hijrah dari kantong gerilya ke Jawa Tengah/Yogyakarta'],
        ['Roem–Royen', '7 Mei 1949', 'Penghentian perang gerilya; kembalinya pemerintahan RI ke Yogyakarta; persiapan KMB'],
        ['Konferensi Meja Bundar (KMB)', '23 Agustus – 2 November 1949 di Den Haag', 'Pengakuan kedaulatan, pembentukan RIS, Irian Barat ditunda'],
        ['Penyerahan kedaulatan', '27 Desember 1949', 'Belanda mengakui kedaulatan RIS (kemudian kembali menjadi NKRI)']
      ]) +
      T(['Peristiwa', 'Tanggal', 'Keterangan'], [
        ['Pertempuran Surabaya', '10 November 1945', 'Bung Tomo; menjadi Hari Pahlawan'],
        ['Pertempuran Ambarawa', '12–15 Desember 1945', 'Kolonel Soedirman; Hari Juang Kartika 15 Desember'],
        ['Bandung Lautan Api', '24 Maret 1946', 'Pembumihangusan Bandung'],
        ['Puputan Margarana', '20 November 1946', 'I Gusti Ngurah Rai (Bali)'],
        ['Agresi Militer Belanda I', '21 Juli 1947', 'Operasi Product'],
        ['Agresi Militer Belanda II', '19 Desember 1948', 'Yogyakarta diduduki; Soekarno-Hatta ditawan; <b>PDRI</b> dibentuk 22 Desember 1948 di Sumatera Barat (Syafruddin Prawiranegara) → Hari Bela Negara 19 Desember'],
        ['Serangan Umum 1 Maret 1949', '1 Maret 1949', 'Yogyakarta direbut selama 6 jam; menunjukkan TNI masih ada; digagas Sultan Hamengkubuwono IX, dipimpin Letkol Soeharto']
      ]) +
      JEB('Linggarjati = "de facto" Jawa-Madura-Sumatera; Renville = wilayah menyempit; Roem–Royen = kembali ke Yogyakarta; KMB = pengakuan kedaulatan. Jangan tertukar urutannya: Linggarjati → Renville → Roem–Royen → KMB.') + ING('LRRK: Linggarjati, Renville, Roem-Royen, KMB (urutan kronologis).')
    },
    { title: 'Orde Lama, Orde Baru, Reformasi: Garis Waktu & Peristiwa Penting', fam: 'twk-sejarah-orde', html:
      T(['Periode', 'Tahun', 'Peristiwa/ciri'], [
        ['Demokrasi Parlementer (Liberal)', '1950–1959', 'UUDS 1950; Pemilu pertama 1955 (DPR 29 September, Konstituante 15 Desember); Konferensi Asia-Afrika 18–24 April 1955 di Bandung'],
        ['Demokrasi Terpimpin', '1959–1966', 'Dekrit 5 Juli 1959; Trikora 19 Desember 1961 (pembebasan Irian Barat); Dwikora 1964 (Konfrontasi Malaysia); Indonesia keluar PBB 1965'],
        ['Transisi', '1965–1967', 'G30S/PKI 30 September 1965; <b>Supersemar 11 Maret 1966</b>; TAP MPRS XXV/1966 (pembubaran PKI); Soeharto Pejabat Presiden 1967, Presiden 1968'],
        ['Orde Baru', '1966/68–1998', 'Pembangunan ekonomi (Repelita, Trilogi pembangunan: stabilitas, pertumbuhan, pemerataan); pemilu 1971 dst.; Pancasila sebagai asas tunggal (1985); fusi partai 1973 (PPP, Golkar, PDI)'],
        ['Reformasi', '21 Mei 1998 – kini', 'Soeharto mundur; B.J. Habibie Presiden; Pemilu 1999; amandemen UUD 1945 (1999–2002); pembentukan KPK (2002); otonomi daerah; Pilpres langsung 2004']
      ]) +
      '<p><b>Konferensi Asia-Afrika 1955:</b> Dasasila Bandung; tokoh penggagas: Indonesia (Ali Sastroamidjojo sebagai PM), Birma, Sri Lanka, India, Pakistan (Kelima negara sponsor). Dari semangat KAA lahir <b>Gerakan Non-Blok</b> (Beograd, 1961; Soekarno, Tito, Nehru, Nasser, Nkrumah).</p>' +
      '<p><b>Presiden RI:</b> 1 Soekarno, 2 Soeharto, 3 B.J. Habibie, 4 K.H. Abdurrahman Wahid, 5 Megawati Soekarnoputri, 6 Susilo Bambang Yudhoyono, 7 Joko Widodo, 8 Prabowo Subianto.</p>' +
      JEB('Pemilu pertama = 1955 (bukan 1945 atau 1971). Supersemar = 11 Maret 1966. Dekrit = 5 Juli 1959. Reformasi 1998, bukan 1999 (1999 adalah pemilu pasca-reformasi).')
    }
  ]);
})();
