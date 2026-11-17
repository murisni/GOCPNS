(function () {
  var M = window.MATERI || [];
  var fig = function (f, cap, alt) {
    return '<figure class="materi-figure"><img src="img/' + f + '" alt="' + alt + '" loading="lazy" style="max-width:560px;margin:0 auto"><figcaption>' + cap + '</figcaption></figure>';
  };
  var silaGrid = [
    ['sila-1-bintang.png', 'Sila 1', 'Bintang Emas'],
    ['sila-2-rantai.png', 'Sila 2', 'Rantai Emas'],
    ['sila-3-pohon-beringin.png', 'Sila 3', 'Pohon Beringin'],
    ['sila-4-kepala-banteng.png', 'Sila 4', 'Kepala Banteng'],
    ['sila-5-padi-kapas.png', 'Sila 5', 'Padi &amp; Kapas']
  ].map(function (x) {
    return '<div class="sila-card"><img src="img/' + x[0] + '" alt="' + x[1] + ' ' + x[2] + '"><span class="sila-num">' + x[1] + '</span><span class="sila-title">' + x[2] + '</span></div>';
  }).join('');
  var EXTRA = {
    'Lima Sila: Bunyi': '<div class="sila-grid">' + silaGrid + '</div>',
    'Lembaga Negara & Hierarki Peraturan': fig('struktur-lembaga-negara.png', 'Struktur Lembaga Negara RI Pasca Amandemen UUD 1945', 'Struktur lembaga negara') + fig('hierarki-peraturan.png', 'Hierarki Peraturan Perundang-undangan', 'Hierarki peraturan')
  };
  var MAP = [
    ['Sejarah Perumusan', 'twk-perumusan-pancasila.svg', 'Garis waktu perumusan Pancasila 1945'],
    ['Kronologi Sejarah Perumusan Pancasila', 'twk-perumusan-pancasila.svg', 'Garis waktu perumusan Pancasila 1945'],
    ['Pancasila sebagai Ideologi Terbuka', 'twk-ideologi-terbuka.svg', 'Tingkatan nilai dan dimensi ideologi terbuka'],
    ['Tingkatan Nilai Pancasila', 'twk-ideologi-terbuka.svg', 'Tingkatan nilai dan dimensi ideologi terbuka'],
    ['Sejarah Naskah & Struktur UUD', 'twk-pembukaan-uud.svg', 'Empat alinea Pembukaan UUD 1945 dan tujuan negara'],
    ['Peta 4 Amandemen', 'twk-amandemen-uud.svg', 'Empat tahap amandemen UUD 1945'],
    ['Pasal 1–3', 'twk-mpr-susunan.svg', 'Susunan MPR sebelum dan sesudah amandemen'],
    ['Presiden & Wakil Presiden', 'twk-hak-presiden.svg', 'Hak Presiden yang memerlukan pertimbangan atau persetujuan'],
    ['DPR, DPD, Pemilu', 'twk-dpr-dpd.svg', 'Fungsi dan hak DPR serta kewenangan DPD'],
    ['Kekuasaan Kehakiman', 'twk-kehakiman.svg', 'Wewenang MA, KY, dan MK'],
    ['Bentuk Negara, Lambang & Semboyan', 'twk-identitas-negara.svg', 'Empat identitas negara dan pasalnya'],
    ['Wawasan Nusantara', 'twk-asta-gatra.svg', 'Asta Gatra: Tri Gatra dan Panca Gatra'],
    ['Organisasi Pergerakan Nasional', 'twk-pergerakan-nasional.svg', 'Garis waktu organisasi pergerakan nasional'],
    ['Menuju Proklamasi', 'twk-menuju-proklamasi.svg', 'Garis waktu menuju proklamasi dan perang kemerdekaan'],
    ['Perjanjian dengan Belanda', 'twk-perjanjian-belanda.svg', 'Garis waktu perjanjian Indonesia–Belanda'],
    ['Tabel Tonggak (Tanggal', 'twk-tonggak-sejarah.svg', 'Peta tonggak sejarah Indonesia'],
    ['Garis Waktu Kunci', 'twk-tonggak-sejarah.svg', 'Peta tonggak sejarah Indonesia'],
    ['Dasar Hukum & 5 Nilai Dasar', 'twk-bela-negara-nilai.svg', 'Lima nilai dasar bela negara'],
    ['5 Nilai Dasar Bela Negara', 'twk-bela-negara-nilai.svg', 'Lima nilai dasar bela negara'],
    ['Komponen Pertahanan', 'twk-komponen-pertahanan.svg', 'Komponen pertahanan negara dan jenis ancaman'],
    ['Bentuk Komponen Pertahanan', 'twk-komponen-pertahanan.svg', 'Komponen pertahanan negara dan jenis ancaman'],
    ['Pembeda Gratifikasi', 'twk-pembeda-korupsi.svg', 'Pembeda gratifikasi, suap, pemerasan, benturan kepentingan'],
    ['Perbedaan Mutlak: Gratifikasi', 'twk-pembeda-korupsi.svg', 'Pembeda gratifikasi, suap, pemerasan'],
    ['KPK: 9 Nilai', 'twk-kpk-9-nilai.svg', 'Sembilan nilai integritas KPK'],
    ['Nilai Dasar ASN, BerAKHLAK', 'twk-berakhlak.svg', 'Tujuh nilai dasar ASN BerAKHLAK'],
    ['Core Values ASN', 'twk-berakhlak.svg', 'Tujuh nilai dasar ASN BerAKHLAK'],
    ['Ide Pokok Paragraf', 'twk-jenis-paragraf.svg', 'Letak kalimat utama pada jenis paragraf'],
    ['Urusan Pemerintahan', 'twk-otda-urusan.svg', 'Urusan pemerintahan menurut UU 23/2014'],
    ['Periode Sistem Politik', 'twk-sistem-politik.svg', 'Periode sistem politik dan pemerintahan Indonesia']
  ];
  var CAP = {};
  MAP.forEach(function (m) { CAP[m[0]] = m; });
  M.forEach(function (t) {
    if (t.group !== 'TWK') return;
    (t.sections || []).forEach(function (s) {
      var h = s.html || '', add = '';
      Object.keys(EXTRA).forEach(function (k) {
        if (s.title.indexOf(k) === 0 && h.indexOf('class="sila-grid"') < 0 && !(k.indexOf('Lembaga') === 0 && /struktur-lembaga-negara\.png/.test(h))) add += EXTRA[k];
      });
      MAP.forEach(function (m) {
        if (s.title.indexOf(m[0]) === 0 && h.indexOf(m[1]) < 0 && add.indexOf(m[1]) < 0) add += fig(m[1], m[2], m[2]);
      });
      if (add) s.html = add + h;
    });
  });
})();
