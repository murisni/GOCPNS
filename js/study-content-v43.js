/* Koreksi yang diterapkan setelah bank bawaan dan modul materi selesai dimuat. */
(function () {
  const db = window.MASTER_DB;
  const modules = window.MATERI;
  const caseTkp = db.SKD_TKP?.find(q => q.id === 'SKD-TKP-0032');
  if (caseTkp) {
    caseTkp.explanation = 'B (5): hentikan penyebaran konten, rujuk keterangan resmi, dan sampaikan empati. D (4): menentang provokasi, tetapi debat kasar memperburuk percakapan. C (3): menuduh kelompok tanpa dasar. A (2): memperluas penyebaran foto dan spekulasi. E (1): mendukung teror.';
  }

  const official = 'https://jdih.lkpp.go.id/regulation/konsolidasi/konsolidasi-nomor-46-tahun-2025';
  const citation = `<p>Sumber: <a href="${official}" target="_blank" rel="noopener">Konsolidasi Perpres 46 Tahun 2025 di JDIH LKPP</a>. Diperiksa 23 November 2026.</p>`;
  const sections = modules.flatMap(t => t.sections || []);
  const procurement = sections.find(section => section.title.startsWith('Pengadaan Barang/Jasa Pemerintah (Perpres'));
  if (procurement) {
    procurement.title = 'Pengadaan Barang/Jasa Pemerintah (Perpres 16/2018, perubahan kedua 46/2025)';
    procurement.html = '<ul><li><b>Prinsip:</b> efisien, efektif, transparan, terbuka, bersaing, adil, dan akuntabel.</li>' +
      '<li><b>Pasal 38:</b> metode untuk barang, pekerjaan konstruksi, dan jasa lainnya mencakup e-purchasing, pengadaan langsung, penunjukan langsung, tender cepat, dan tender.</li>' +
      '<li><b>Batas Pengadaan Langsung:</b> barang atau jasa lainnya sampai Rp200 juta dan pekerjaan konstruksi sampai Rp400 juta. Penunjukan Langsung memakai kriteria keadaan tertentu.</li></ul>' + citation;
  }

  const practical = sections.find(section => section.title === 'Hukum Tata Negara Dasar & Pengadaan: Pengetahuan Praktis');
  if (practical) {
    practical.html = practical.html.replace(/<li><b>Pengadaan langsung \(Perpres 16\/2018 jo 12\/2021\):<\/b>.*?<\/li>/,
      '<li><b>Pengadaan Langsung (Pasal 38 setelah Perpres 46/2025):</b> barang dan jasa lainnya sampai Rp200 juta, pekerjaan konstruksi sampai Rp400 juta.</li>') + citation;
  }

  for (const q of db.SKB_HUKUM || []) {
    if (!/batas nilai pengadaan langsung untuk barang\/pekerjaan konstruksi\/jasa lainnya|metode pemilihan penyedia barang\/pekerjaan konstruksi\/jasa lainnya yang bernilai paling banyak Rp200/i.test(q.q)) continue;
    if (q.id === 'SKB-HUK-N0138') {
      q.q = 'Menurut Pasal 38 ayat (3) setelah perubahan kedua melalui Perpres 46 Tahun 2025, berapa batas nilai Pengadaan Langsung untuk pekerjaan konstruksi?';
      q.options = ['A. Rp50 juta', 'B. Rp100 juta', 'C. Rp400 juta', 'D. Rp500 juta', 'E. Rp1 miliar'];
    } else {
      q.q = 'Dalam pilihan berikut, metode apa yang bisa digunakan untuk pengadaan barang senilai Rp200 juta menurut Pasal 38 ayat (3) setelah Perpres 46 Tahun 2025?';
    }
    q.trick = 'Pisahkan jenis pengadaan: Rp200 juta untuk barang atau jasa lainnya, Rp400 juta untuk pekerjaan konstruksi.';
    q.explanation = 'Pasal 38 ayat (3) membedakan batas Pengadaan Langsung: paling banyak Rp200 juta untuk barang atau jasa lainnya, serta Rp400 juta untuk pekerjaan konstruksi.';
    q.source = official;
  }
})();
