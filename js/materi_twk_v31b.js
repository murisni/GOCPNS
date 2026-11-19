/* v31 — pelengkap materi TWK (bagian 2): Bela Negara, Integritas, Bahasa, Otda, Tokoh & Peristiwa. */
(function () {
  if (!window.__v31Append || window.__twkV31b) return; window.__twkV31b = 1;
  var A = window.__v31Append;
  var T = function (h, rows) { return '<table class="table table-sm"><thead><tr>' + h.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>'; };
  var UL = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  var ING = function (x) { return '<div class="ingat">🧠 <b>Ingat:</b> ' + x + '</div>'; };
  var JEB = function (x) { return '<div class="studi-kunci">⚠️ <b>Jebakan soal:</b> ' + x + '</div>'; };

  A('twk-bela-negara-lengkap', [
    { title: 'Unsur Dasar & Komponen Pertahanan Negara (Utama, Cadangan, Pendukung)', fam: 'twk-belanegara-unsur-komponen', html:
      '<p><b>Dasar hukum:</b> Pasal 27 ayat (3) (hak dan kewajiban ikut serta dalam pembelaan negara), Pasal 30 (pertahanan dan keamanan), UU No. 3 Tahun 2002 tentang Pertahanan Negara, dan UU No. 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (PSDN).</p>' +
      '<p><b>Lima unsur dasar bela negara:</b></p>' + UL(['Cinta tanah air', 'Sadar berbangsa dan bernegara', 'Yakin akan Pancasila sebagai ideologi negara', 'Rela berkorban untuk bangsa dan negara', 'Memiliki kemampuan awal bela negara']) +
      T(['Komponen', 'Isi', 'Contoh'], [['Utama', 'Tentara Nasional Indonesia (TNI)', 'Angkatan darat, laut, udara'], ['Cadangan', 'Sumber daya manusia, sumber daya alam, sarana-prasarana nasional yang disiapkan', 'Warga terlatih (Komcad), lahan, pelabuhan'], ['Pendukung', 'Sumber daya nasional lain yang dapat dimanfaatkan', 'Warga, industri, fasilitas umum']]) +
      '<p><b>Pasal 30 UUD 1945:</b> ayat (1) hak dan kewajiban warga; ayat (2) sistem pertahanan dan keamanan rakyat semesta (sishankamrata); ayat (3) TNI; ayat (4) Polri.</p>' +
      '<p><b>Hari Bela Negara 19 Desember</b> (Keppres 28/2006), mengenang pembentukan PDRI oleh Syafruddin Prawiranegara pada 1948 setelah Agresi Militer Belanda II.</p>' +
      JEB('Polri bukan komponen utama pertahanan (pertahanan = TNI); Polri menjaga keamanan dalam negeri. Sishankamrata: TNI-Polri kekuatan utama, rakyat kekuatan pendukung.') +
      ING('5 unsur bela negara = cinta tanah air, sadar berbangsa, yakin Pancasila, rela berkorban, kemampuan awal.') },
    { title: 'Jenis Ancaman Nasional & Wujud Bela Negara Sehari-hari', fam: 'twk-belanegara-ancaman', html:
      T(['Jenis ancaman', 'Ciri', 'Contoh'], [['Militer', 'Menggunakan kekuatan bersenjata', 'Invasi, agresi, pelanggaran wilayah'], ['Nonmiliter', 'Tidak bersenjata: ideologi, politik, ekonomi, sosial budaya, teknologi, informasi', 'Hoaks, radikalisme, korupsi, kejahatan siber'], ['Hibrida', 'Gabungan militer dan nonmiliter secara bersamaan', 'Serangan siber + propaganda + tekanan ekonomi']]) +
      '<p><b>Wujud bela negara</b> bagi warga biasa bersifat nonfisik: belajar sungguh-sungguh, taat hukum, membayar pajak, menjaga lingkungan, menggunakan produk dalam negeri, melawan hoaks, dan bekerja jujur sesuai profesi.</p>' +
      '<p><b>Pembinaan kesadaran bela negara</b> dilakukan melalui pendidikan kewarganegaraan, pelatihan dasar kemiliteran secara wajib, pengabdian sesuai profesi, dan pengabdian sebagai prajurit TNI secara sukarela atau wajib.</p>' +
      JEB('Soal kasus ASN: jawaban benar biasanya "bekerja jujur dan profesional, menolak gratifikasi, melawan hoaks" bukan "ikut berperang" atau tindakan main hakim sendiri.') +
      ING('Ancaman nonmiliter sekarang paling sering diuji: hoaks, radikalisme, korupsi, siber.') }
  ]);

  A('twk-integritas-lengkap', [
    { title: 'Korupsi, Suap, Pemerasan & Gratifikasi: Pembeda dan Kewajiban Lapor', fam: 'twk-integritas-korupsi-gratifikasi', html:
      '<p><b>Dasar hukum:</b> UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 (Tipikor); UU KPK (UU 30/2002, diubah UU 19/2019).</p>' +
      T(['Istilah', 'Ciri khas', 'Contoh'], [['Suap', 'Pemberi dan penerima sepakat; ada imbalan agar pejabat melakukan/tidak melakukan sesuatu', 'Memberi uang agar tender dimenangkan'], ['Pemerasan', 'Pejabat memaksa pihak lain memberi sesuatu', 'Petugas menahan berkas sampai dibayar'], ['Gratifikasi', 'Pemberian dalam arti luas terkait jabatan; dianggap suap bila berhubungan dengan jabatan dan bertentangan dengan tugas', 'Parsel dari rekanan, tiket, diskon khusus'], ['Benturan kepentingan', 'Kepentingan pribadi/keluarga memengaruhi keputusan jabatan', 'Menunjuk perusahaan kerabat']]) +
      '<p><b>Kewajiban lapor:</b> gratifikasi wajib dilaporkan ke KPK paling lambat <b>30 hari kerja</b> sejak diterima (Pasal 12C). KPK menetapkan dalam 30 hari kerja apakah menjadi milik penerima atau negara.</p>' +
      '<p><b>Sembilan nilai integritas KPK:</b> Jujur, Mandiri, Tanggung jawab, Berani, Sederhana, Peduli, Disiplin, Adil, Kerja keras.</p>' +
      JEB('Pemberian yang tidak berhubungan dengan jabatan (hadiah keluarga) bukan gratifikasi; yang dilarang adalah yang berhubungan dengan jabatan.') +
      ING('30 hari kerja, bukan 30 hari kalender. Pemerasan = ada paksaan; suap = ada kesepakatan.') },
    { title: 'Benturan Kepentingan, Nilai BerAKHLAK & Strategi Memilih Jawaban', fam: 'twk-integritas-benturan-berakhlak', html:
      '<p><b>BerAKHLAK:</b> Berorientasi pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.</p>' +
      T(['Nilai', 'Perilaku kunci'], [['Berorientasi pelayanan', 'Ramah, cekatan, solutif, dan dapat diandalkan'], ['Akuntabel', 'Bertanggung jawab, jujur, cermat, gunakan aset negara dengan baik'], ['Kompeten', 'Terus belajar, berbagi pengetahuan, bekerja tuntas'], ['Harmonis', 'Menghargai perbedaan, suka menolong, membangun lingkungan kerja kondusif'], ['Loyal', 'Memegang teguh Pancasila, UUD 1945, NKRI, menjaga rahasia jabatan'], ['Adaptif', 'Cepat menyesuaikan perubahan, inovatif, bertindak proaktif'], ['Kolaboratif', 'Memberi kesempatan kolaborasi, terbuka bekerja sama, mengoptimalkan sumber daya']]) +
      '<p><b>Strategi memilih jawaban TWK integritas:</b> pilih tindakan yang <i>menolak, melaporkan lewat jalur resmi, dan tidak membalas dengan melanggar aturan</i>. Hindari jawaban yang "menyenangkan semua pihak" tetapi melanggar aturan.</p>' +
      JEB('Loyal dalam ASN bukan loyal kepada atasan pribadi, melainkan kepada negara, Pancasila, dan konstitusi.') +
      ING('Benturan kepentingan: keputusan jabatan dipengaruhi kepentingan pribadi/keluarga. Solusinya mundur dari proses dan melapor.') }
  ]);

  A('twk-bahasa-lengkap', [
    { title: 'Kata Baku Sering Keluar & Ketentuan Bahasa dalam UU 24/2009', fam: 'twk-bahasa-kata-baku-uu24', html:
      T(['Baku', 'Tidak baku'], [['analisis', 'analisa'], ['risiko', 'resiko'], ['praktik', 'praktek'], ['sistem', 'sistim'], ['ijazah', 'ijasah'], ['kuitansi', 'kwitansi'], ['apotek', 'apotik'], ['objek', 'obyek'], ['nasihat', 'nasehat'], ['izin', 'ijin'], ['jadwal', 'jadual'], ['hakikat', 'hakekat'], ['silakan', 'silahkan'], ['andal', 'handal'], ['lembap', 'lembab'], ['azan', 'adzan']]) +
      '<p><b>UU No. 24 Tahun 2009</b> (Bendera, Bahasa, Lambang Negara, dan Lagu Kebangsaan) menetapkan bahasa Indonesia <b>wajib</b> digunakan dalam: peraturan perundang-undangan, dokumen resmi negara, pidato resmi Presiden/Wakil Presiden dan pejabat negara, pengantar pendidikan nasional, pelayanan administrasi publik, nama bangunan, jalan, permukiman, merek dagang, dan informasi produk barang/jasa di Indonesia.</p>' +
      '<p><b>Kalimat efektif:</b> hemat kata, tidak ambigu, ada subjek dan predikat, paralel (sejajar), dan tidak mubazir (mis. "para hadirin sekalian" → "hadirin"; "naik ke atas" → "naik").</p>' +
      JEB('Pada soal kata baku, hafalkan pola: s→ s (sistem), k→ k (praktik), j→ z (ijazah), tanpa huruf "h" tambahan (andal bukan handal).') +
      ING('Pasangan baku paling sering: analisis, risiko, praktik, sistem, ijazah, kuitansi, apotek, izin, nasihat, objek.') }
  ]);

  A('twk-otda-hierarki', [
    { title: 'Urusan Pemerintahan UU 23/2014 & Hierarki Peraturan Perundang-undangan', fam: 'twk-otda-urusan-hierarki', html:
      T(['Jenis urusan', 'Isi', 'Catatan'], [['Absolut', 'Politik luar negeri, pertahanan, keamanan, yustisi, moneter dan fiskal nasional, agama', 'Sepenuhnya pusat'], ['Konkuren wajib pelayanan dasar', 'Pendidikan, kesehatan, pekerjaan umum & penataan ruang, perumahan, ketenteraman-ketertiban umum & linmas, sosial', 'Dibagi pusat, provinsi, kab/kota'], ['Konkuren wajib non-pelayanan dasar', 'Tenaga kerja, pangan, lingkungan hidup, administrasi kependudukan, dll.', ''], ['Konkuren pilihan', 'Kelautan, pariwisata, pertanian, kehutanan, energi, perdagangan, perindustrian, transmigrasi', ''], ['Umum', 'Dilaksanakan Presiden; di daerah oleh gubernur/bupati/wali kota', 'Membina kerukunan, wawasan kebangsaan']]) +
      '<p><b>Asas:</b> desentralisasi (penyerahan ke daerah otonom), dekonsentrasi (pelimpahan ke gubernur/instansi vertikal), tugas pembantuan (penugasan dari pusat/provinsi ke daerah).</p>' +
      '<p><b>Pembagian pendidikan:</b> PAUD, SD, SMP = kabupaten/kota; SMA, SMK, pendidikan khusus = provinsi; perguruan tinggi = pusat.</p>' +
      '<p><b>Hierarki (Pasal 7 UU 12/2011):</b> UUD 1945 → TAP MPR → UU/Perppu → Peraturan Pemerintah → Peraturan Presiden → Perda Provinsi → Perda Kabupaten/Kota.</p>' +
      JEB('Jangan menempatkan Perpres di atas PP, dan ingat TAP MPR berada di atas UU.') +
      ING('Urutan hierarki: UUD – TAP – UU/Perppu – PP – Perpres – Perda Prov – Perda Kab/Kota.') }
  ]);

  A('twk-sejarah-tokoh', [
    { title: 'Tokoh Perjuangan, Perang Melawan Kolonial & Pertempuran Mempertahankan Kemerdekaan', fam: 'twk-nasionalisme-tokoh-peristiwa', html:
      T(['Tokoh', 'Peran / Peristiwa', 'Catatan'], [['Sultan Hasanuddin', 'Perang Makassar, Perjanjian Bongaya 1667', '"Ayam Jantan dari Timur"'], ['Pattimura', 'Perlawanan rakyat Maluku 1817', ''], ['Pangeran Diponegoro', 'Perang Jawa 1825–1830', ''], ['Tuanku Imam Bonjol', 'Perang Padri 1821–1837', 'Sumatera Barat'], ['Cut Nyak Dhien', 'Perang Aceh', 'Bersama Teuku Umar'], ['Sisingamangaraja XII', 'Perlawanan di Tanah Batak', ''], ['Ki Hajar Dewantara', 'Taman Siswa 1922; Hardiknas 2 Mei', 'Bapak Pendidikan Nasional'], ['R.A. Kartini', 'Emansipasi perempuan; Habis Gelap Terbitlah Terang', '21 April'], ['Dewi Sartika', 'Sekolah Istri 1904 Bandung', '']]) +
      T(['Peristiwa', 'Tanggal', 'Tokoh/Catatan'], [['Pertempuran Surabaya', '10 November 1945', 'Bung Tomo; Hari Pahlawan'], ['Palagan Ambarawa', '12–15 Desember 1945', 'Jenderal Sudirman; Hari Juang Kartika 15 Desember'], ['Bandung Lautan Api', '24 Maret 1946', ''], ['Puputan Margarana', '20 November 1946', 'I Gusti Ngurah Rai'], ['Serangan Umum 1 Maret', '1 Maret 1949', 'Letkol Soeharto, Sri Sultan HB IX']]) +
      JEB('Pasangan tokoh-perlawanan sering dibuat mirip: Padri = Imam Bonjol (bukan Diponegoro); Perang Jawa = Diponegoro.') +
      ING('Hari Pahlawan = 10 November (Surabaya). Hari Juang Kartika = 15 Desember (Ambarawa).') }
  ]);
})();
