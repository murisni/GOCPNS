/* v30: perbaikan materi.
   1) Materi ganda (versi ringkas lama + versi "lengkap") digabung: bagian unik versi lama dipindah ke versi lengkap, lalu versi lama disembunyikan.
   2) Materi TKP diperdalam: peta kata kunci, studi kasus berskala 5-1 per pilar, dan strategi umum yang lebih lengkap. */
(function () {
  var M = window.MATERI;
  if (!Array.isArray(M) || window.__materiV30) return;
  window.__materiV30 = 1;
  var byId = function (id) { for (var i = 0; i < M.length; i++) if (M[i].id === id) return M[i]; return null; };
  var nz = function (s) { return String(s || '').toLowerCase().replace(/&amp;/g, 'dan').replace(/[^a-z0-9]+/g, ' ').trim(); };
  function similar(a, b) {
    a = nz(a); b = nz(b); if (!a || !b) return false;
    if (a === b || a.indexOf(b.slice(0, 22)) === 0 || b.indexOf(a.slice(0, 22)) === 0) return true;
    var A = a.split(' '), B = b.split(' '), inter = A.filter(function (w) { return w.length > 3 && B.indexOf(w) >= 0; }).length;
    return inter / Math.max(1, Math.min(A.length, B.length)) >= 0.7;
  }
  function union(a, b) { var r = (a || []).slice(); (b || []).forEach(function (x) { if (r.indexOf(x) < 0) r.push(x); }); return r; }

  /* ---------- 1. gabungkan materi ganda ---------- */
  var PAIRS = {
    'pancasila': 'twk-pancasila-lengkap',
    'uud-1945': 'twk-uud-lengkap',
    'nkri-bhinneka': 'twk-nkri-lengkap',
    'nasionalisme-bela-negara': 'twk-bela-negara-lengkap',
    'integritas-asn': 'twk-integritas-lengkap',
    'bahasa-negara': 'twk-bahasa-lengkap',
    'twk-bahasa-lanjut': 'twk-bahasa-lengkap',
    'twk-sejarah-otda': 'twk-sejarah-tanggal',
    'tkp-pelayanan-publik': 'tkp-pelayanan-lengkap',
    'tkp-jejaring-kerja': 'tkp-jejaring-lengkap',
    'tkp-sosial-budaya': 'tkp-sosbud-lengkap',
    'tkp-tik': 'tkp-tik-lengkap',
    'tkp-profesionalisme': 'tkp-profesional-lengkap',
    'tkp-anti-radikalisme': 'tkp-radikal-lengkap'
  };
  Object.keys(PAIRS).forEach(function (oldId) {
    var o = byId(oldId), t = byId(PAIRS[oldId]);
    if (!o || !t) return;
    t.sections = t.sections || [];
    (o.sections || []).forEach(function (s) {
      if (t.sections.some(function (x) { return similar(x.title, s.title); })) return;
      t.sections.push(s);
    });
    t.subs = union(t.subs, o.subs); t.buckets = union(t.buckets, o.buckets); t.tips = union(t.tips, o.tips);
    M.splice(M.indexOf(o), 1);
  });

  /* ---------- 2. perdalam materi TKP ---------- */
  function kasus(judul, situasi, rows, catatan) {
    var tr = rows.map(function (r) {
      return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>';
    }).join('');
    return '<div class="kasus"><div class="kasus-h">📌 KASUS: ' + judul + '</div><p>' + situasi + '</p></div>' +
      '<table class="table table-sm"><thead><tr><th>Skor</th><th>Pilihan sikap</th><th>Mengapa</th></tr></thead><tbody>' + tr + '</tbody></table>' +
      (catatan ? '<div class="callout">' + catatan + '</div>' : '');
  }
  function kunci(tinggi, jebakan) {
    return '<table class="table table-sm"><thead><tr><th>Kata kunci skor tinggi</th><th>Jebakan skor rendah</th></tr></thead><tbody><tr><td><ul>' +
      tinggi.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></td><td><ul>' +
      jebakan.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></td></tr></tbody></table>';
  }
  var ADD = {
    'tkp-pelayanan-lengkap': [
      { title: 'Peta Kata Kunci: Skor Tinggi vs Jebakan', html: kunci(
        ['Solusi nyata dan tuntas', 'Empati dan keramahan', 'Menjelaskan alasan serta prosedur dengan sopan', 'Kelompok rentan (lansia, ibu hamil, disabilitas) didahulukan', 'Menindaklanjuti dan mencatat pengaduan', 'Memberi alternatif layanan (daring, loket lain) bila terkendala'],
        ['Menolak mentah-mentah atau menyuruh "datang lagi besok" tanpa alasan kuat', 'Melempar ke rekan tanpa memastikan', 'Memberi jalur khusus karena kenal atau karena diberi sesuatu', 'Melanggar SOP demi terlihat cepat', 'Membalas warga yang marah dengan emosi']) },
      { title: 'Studi Kasus: Loket Hampir Tutup', html: kasus('Ibu hamil datang lima menit sebelum loket tutup',
        'Berkas lengkap, antrean sudah habis kecuali ibu tersebut, dan jam layanan tinggal lima menit.',
        [['5', 'Melayani sampai tuntas hari itu dengan ramah dan memastikan ibu duduk nyaman', 'Kelompok rentan, solusi nyata, tidak melanggar aturan'],
         ['4', 'Melayani sampai tuntas sesuai prosedur tanpa keramahan khusus', 'Benar, tetapi kurang empati dan proaktif'],
         ['3', 'Meminta rekan loket lain melayani tanpa memastikan ibu terlayani', 'Mendelegasikan tanpa tindak lanjut'],
         ['2', 'Meminta ibu kembali besok pagi dengan nomor antrean prioritas', 'Menunda padahal masih bisa dilayani'],
         ['1', 'Menutup loket karena jam layanan sudah habis', 'Menolak melayani']],
        'Pola umum: <b>layani + empati + sesuai aturan</b> = 5. Menolak atau menunda tanpa solusi = skor terendah.') }
    ],
    'tkp-jejaring-lengkap': [
      { title: 'Peta Kata Kunci: Skor Tinggi vs Jebakan', html: kunci(
        ['Komunikasi terbuka dan langsung dengan pihak terkait', 'Kolaborasi lintas unit demi tujuan bersama', 'Berbagi informasi dan pengetahuan', 'Mediasi dan mencari titik temu', 'Menghargai pendapat yang berbeda', 'Membangun relasi dengan instansi lain'],
        ['Mengerjakan sendiri tanpa koordinasi', 'Menyalahkan atau memihak salah satu', 'Diam dan menghindar dari konflik', 'Membicarakan rekan di belakang', 'Langsung mengadu tanpa mencoba berdialog']) },
      { title: 'Studi Kasus: Dua Rekan Berselisih', html: kasus('Pembagian tugas memicu perselisihan',
        'Dua rekan satu tim berselisih tentang pembagian tugas dan tenggat laporan semakin dekat.',
        [['5', 'Mengajak keduanya berdiskusi, mencari titik temu berdasarkan tujuan kerja, lalu menyepakati pembagian tugas yang jelas', 'Aktif memediasi dan berfokus pada target bersama'],
         ['4', 'Menyampaikan masalah ke atasan agar dimediasi', 'Sesuai jalur resmi, tetapi kurang berinisiatif lebih dulu'],
         ['3', 'Mengerjakan bagian sendiri dengan baik dan tidak ikut campur', 'Tanggung jawab pribadi aman, tetapi tidak membantu tim'],
         ['2', 'Menyarankan salah satu mengalah tanpa berdiskusi', 'Tidak menyelesaikan akar masalah'],
         ['1', 'Membicarakan konflik dengan rekan lain dan memihak salah satu', 'Memperbesar konflik']],
        'Urutan penyelesaian konflik: <b>bicara langsung → mediasi → atasan</b>. Langsung ke atasan umumnya skor 4, bukan 5.') }
    ],
    'tkp-sosbud-lengkap': [
      { title: 'Peta Kata Kunci: Skor Tinggi vs Jebakan', html: kunci(
        ['Menghargai keberagaman suku, agama, dan budaya', 'Adaptif terhadap adat dan norma setempat', 'Inklusif dan tidak diskriminatif', 'Dialog yang santun untuk menyelesaikan perbedaan', 'Berpartisipasi dalam kegiatan masyarakat'],
        ['Memaksakan kebiasaan sendiri', 'Membanding-bandingkan atau merendahkan suku dan agama', 'Menertawakan logat atau adat orang lain', 'Menghindari rekan yang berbeda latar belakang']) },
      { title: 'Studi Kasus: Mutasi ke Daerah Baru', html: kasus('Adat setempat berbeda dari kebiasaanmu',
        'Kamu dimutasi ke daerah dengan adat berbeda, lalu rekan kerja mengajakmu mengikuti kerja bakti adat pada akhir pekan.',
        [['5', 'Ikut serta, belajar adat setempat dengan menghormati aturannya, dan menjalin relasi dengan warga', 'Adaptif, menghargai budaya, membangun hubungan'],
         ['4', 'Hadir sebentar dan bersikap sopan', 'Menghargai, tetapi partisipasi terbatas'],
         ['3', 'Tidak hadir, namun menyampaikan alasan dengan sopan', 'Netral, tidak merusak hubungan'],
         ['2', 'Menolak karena tidak sesuai kebiasaan sendiri', 'Kurang adaptif'],
         ['1', 'Menyindir atau merendahkan adat tersebut', 'Tidak menghargai keberagaman']],
        'Kunci TKP sosial budaya: <b>hormati, adaptasi, dan berbaur</b> tanpa melanggar hukum atau keyakinan inti.') }
    ],
    'tkp-tik-lengkap': [
      { title: 'Peta Kata Kunci: Skor Tinggi vs Jebakan', html: kunci(
        ['Verifikasi informasi sebelum menyebarkan (tabayyun, cek sumber resmi)', 'Menjaga keamanan data: kata sandi kuat, otentikasi dua langkah', 'Memanfaatkan teknologi untuk efisiensi layanan', 'Belajar cepat tentang aplikasi baru', 'Melaporkan insiden siber kepada admin/TI'],
        ['Meneruskan pesan tanpa memeriksa kebenarannya', 'Membagikan kata sandi atau data instansi ke pihak lain', 'Memakai akun pribadi untuk data dinas yang rahasia', 'Menolak teknologi baru tanpa mencoba']) },
      { title: 'Studi Kasus: Tautan Mencurigakan', html: kasus('Pesan berantai tentang pembaruan data pegawai',
        'Kamu menerima pesan di grup yang meminta pegawai mengeklik tautan dan mengisi data kepegawaian untuk "pembaruan sistem".',
        [['5', 'Tidak mengeklik, memverifikasi ke admin/sumber resmi, melaporkan, dan mengingatkan rekan', 'Mencegah kerugian dan edukatif'],
         ['4', 'Tidak mengeklik dan menghapus pesan', 'Aman untuk diri sendiri, tetapi tidak melindungi rekan'],
         ['3', 'Mengabaikan pesan', 'Pasif'],
         ['2', 'Mengeklik tetapi tidak mengisi data', 'Berisiko, tanpa verifikasi'],
         ['1', 'Meneruskan pesan ke grup lain', 'Menyebarkan potensi penipuan']],
        'Kata kunci: <b>verifikasi → lindungi data → laporkan → edukasi</b>.') }
    ],
    'tkp-profesional-lengkap': [
      { title: 'Peta Kata Kunci: Skor Tinggi vs Jebakan', html: kunci(
        ['Bertanggung jawab dan akuntabel atas hasil kerja', 'Disiplin waktu dan menepati tenggat', 'Terus meningkatkan kompetensi', 'Jujur mengakui kesalahan dan segera memperbaikinya', 'Terbuka terhadap kritik', 'Mengutamakan tugas dinas tanpa mengabaikan etika'],
        ['Melempar tanggung jawab ke orang lain', 'Menyembunyikan kesalahan', 'Menunda pekerjaan tanpa alasan', 'Mengutamakan kepentingan pribadi dibanding tugas']) },
      { title: 'Studi Kasus: Salah Angka pada Laporan', html: kasus('Kesalahan baru ditemukan setelah laporan terkirim',
        'Kamu menemukan salah angka pada laporan yang sudah dikirim kepada atasan.',
        [['5', 'Segera melapor, memperbaiki, mengirim revisi disertai penjelasan, lalu membuat pengecekan agar tidak terulang', 'Jujur, akuntabel, ada pencegahan'],
         ['4', 'Memperbaiki dan mengirim revisi tanpa menjelaskan', 'Benar, tetapi kurang transparan'],
         ['3', 'Menunggu apakah ada yang menyadari', 'Pasif'],
         ['2', 'Menyalahkan sumber data', 'Lepas tanggung jawab'],
         ['1', 'Membiarkan dan menyembunyikan kesalahan', 'Tidak jujur']],
        'Perbedaan 5 dan 4: skor 5 mencakup <b>kejujuran + perbaikan + pencegahan</b>.') }
    ],
    'tkp-radikal-lengkap': [
      { title: 'Peta Kata Kunci: Skor Tinggi vs Jebakan', html: kunci(
        ['Berpegang pada Pancasila dan moderasi', 'Tabayyun: memeriksa kebenaran informasi', 'Dialog yang santun dan merangkul', 'Melapor ke pihak berwenang bila ada ancaman nyata', 'Tidak mudah terprovokasi isu SARA'],
        ['Ikut menyebarkan ajakan atau provokasi', 'Main hakim sendiri atau membalas dengan kekerasan', 'Membiarkan padahal ada ancaman', 'Menghujat atau memusuhi pelaku tanpa dialog']) },
      { title: 'Studi Kasus: Rekan Menyebar Ajakan Menolak Pancasila', html: kasus('Pesan provokatif di grup kantor',
        'Seorang rekan mulai sering mengirim ajakan menolak Pancasila dan kebijakan negara di grup kantor.',
        [['5', 'Menegur dan berdialog santun dengan data, mengajaknya kembali ke nilai Pancasila, dan melapor ke atasan bila berlanjut', 'Merangkul, edukatif, tetap melalui jalur yang tepat'],
         ['4', 'Melapor ke atasan tanpa menegur lebih dulu', 'Sesuai jalur, tetapi tanpa pendekatan langsung'],
         ['3', 'Keluar dari grup tanpa tindakan lain', 'Menghindar'],
         ['2', 'Membiarkan karena bukan urusannya', 'Abai terhadap potensi bahaya'],
         ['1', 'Ikut menyebarkan atau membalas dengan kata kasar', 'Memperkeruh keadaan']],
        'Pola anti radikalisme: <b>rangkul → luruskan dengan fakta → laporkan bila ancaman nyata</b>.') }
    ],
    'strategi-tkp': [
      { title: 'Angka Penting & Target Skor TKP', html: '<table class="table table-sm"><thead><tr><th>Hal</th><th>Keterangan</th></tr></thead><tbody>' +
        '<tr><td>Jumlah soal TKP</td><td>45 soal dari 110 soal SKD</td></tr>' +
        '<tr><td>Skor tiap soal</td><td>1 sampai 5, tidak ada jawaban yang "nol"; maksimal 225</td></tr>' +
        '<tr><td>Ambang batas (formasi umum)</td><td>166 poin, atau rata-rata sekitar <b>3,7 per soal</b></td></tr>' +
        '<tr><td>Target aman</td><td>175 sampai 190 poin (rata-rata 3,9 sampai 4,2) sebagai cadangan bila TWK atau TIU kurang</td></tr></tbody></table>' +
        '<div class="callout">Ambang batas formasi tertentu (misalnya khusus atau disabilitas) bisa berbeda. Cek pengumuman resmi formasi yang kamu lamar.</div>' },
      { title: '3 Filter Memilih Opsi', html: '<ol>' +
        '<li><b>Filter 1: Etika dan aturan.</b> Coret opsi yang melanggar hukum, SOP, atau etika (menerima imbalan, memalsukan data, diskriminasi). Opsi ini hampir pasti skor 1–2.</li>' +
        '<li><b>Filter 2: Aksi nyata.</b> Pilih tindakan langsung yang menyelesaikan masalah, bukan menunggu atau menyerahkan ke orang lain.</li>' +
        '<li><b>Filter 3: Komunikasi dan jalur yang tepat.</b> Di antara opsi yang bagus, skor 5 biasanya memuat <b>solusi + komunikasi/koordinasi + pencegahan</b>; skor 4 benar tetapi kurang lengkap atau lebih pasif.</li></ol>' },
      { title: 'Jebakan yang Sering Menipu', html: '<ul>' +
        '<li><b>Opsi panjang belum tentu benar.</b> Nilai isinya, bukan panjangnya.</li>' +
        '<li><b>"Langsung lapor atasan" tidak selalu 5.</b> Jika masalah bisa dibicarakan langsung dengan pihak terkait, dialog dulu lebih tinggi; langsung melapor biasanya 4.</li>' +
        '<li><b>"Sesuai SOP" bukan berarti kaku.</b> Skor tertinggi = sesuai SOP <i>dan</i> membantu warga.</li>' +
        '<li><b>Melanggar aturan demi cepat atau demi kenalan</b> adalah jebakan klasik skor rendah.</li>' +
        '<li><b>Ragu antara dua opsi?</b> Pilih yang paling bermanfaat bagi kepentingan publik dan tetap sesuai aturan.</li></ul>' }
    ]
  };
  Object.keys(ADD).forEach(function (id) {
    var m = byId(id); if (!m) return;
    m.sections = m.sections || [];
    ADD[id].forEach(function (s) {
      if (!m.sections.some(function (x) { return x.title === s.title; })) m.sections.push(s);
    });
    if (/-lengkap$|tkp-profesional/.test(id)) {
      m.summary = m.summary && m.summary.indexOf('studi kasus berskala') < 0 ? m.summary + ' Dilengkapi peta kata kunci dan studi kasus berskala 5 sampai 1.' : m.summary;
    }
  });
})();
