/* Patch v24 — dimuat SETELAH semua db/*.js dan js/materi*.js, SEBELUM app.js.
   1) Materi TIU "Silogisme" (dan TWK "Bahasa Negara") tidak menemukan soal karena nama subtopik tidak cocok -> dicocokkan.
   2) Rumus LaTeX ($...$) di materi/soal tidak pernah dirender dan rusak (\r, \s, \d termakan JS) -> diubah jadi simbol biasa.
   3) Label templat "(Studi Logika #267)" dsb. dibuang dari teks soal.
   4) Soal logika yang cacat diperbaiki (SKD-TIU-0007, 0009, 0011) + opsi kembar pada 2 soal figural. */
(function () {
  var DB = window.MASTER_DB || {}, M = window.MATERI || [];

  /* ---------- 1. subtopik materi <-> soal ---------- */
  function materi(id) { for (var i = 0; i < M.length; i++) if (M[i].id === id) return M[i]; return null; }
  var sil = materi('silogisme');
  if (sil) sil.subs = ['Silogisme', 'Analitis'];                    // "Silogisme, Logika Posisi & Kuantor"
  var bhs = materi('bahasa-negara');
  if (bhs) bhs.subs = ['Bahasa Indonesia', 'Bahasa Negara'];

  /* ---------- 2. LaTeX -> teks/HTML ---------- */
  var SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', 'n': 'ⁿ' };
  var SUB = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
  function conv(s, html) {
    /* escape LaTeX yang termakan JS: \r \t \f \b \v berubah jadi karakter kontrol -> dikembalikan jadi garis miring + huruf */
    s = s.replace(/[\r\t\f\b\v]/g, function (c) { return { '\r': '\\r', '\t': '\\t', '\f': '\\f', '\b': '\\b', '\v': '\\v' }[c]; });
    s = s.replace(/\\text\{([^}]*)\}/g, '$1');
    s = s.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1) ÷ ($2)');
    s = s.replace(/\\?r?ightarrow/g, '→');
    s = s.replace(/\\?sim\s*/g, '~');
    s = s.replace(/\\?times/g, '×').replace(/\\?dots/g, '…').replace(/\\cdot/g, '·').replace(/\\%/g, '%');
    s = s.replace(/\^\{?\\?circ\}?/g, '°');
    s = s.replace(/\^\{([^}]*)\}|\^(\w)/g, function (m, a, b) {
      var x = a != null ? a : b;
      if (html) return '<sup>' + x + '</sup>';
      return x.split('').every(function (c) { return SUP[c]; }) ? x.split('').map(function (c) { return SUP[c]; }).join('') : '^' + x;
    });
    s = s.replace(/_\{([^}]*)\}|_(\w)/g, function (m, a, b) {
      var x = a != null ? a : b;
      if (html) return '<sub>' + x + '</sub>';
      return x.split('').every(function (c) { return SUB[c]; }) ? x.split('').map(function (c) { return SUB[c]; }).join('') : '_' + x;
    });
    s = s.replace(/\\[,;! ]/g, ' ').replace(/\s{2,}/g, ' ').trim();
    return s;
  }
  function fixMath(str, html) {
    if (typeof str !== 'string' || str.indexOf('$') < 0) return str;
    str = str.replace(/\$\$([\s\S]+?)\$\$/g, function (m, a) { return (html ? '<div class="math-block">' : '') + conv(a, html) + (html ? '</div>' : ''); });
    return str.replace(/\$([^$\n]+)\$/g, function (m, a) { return conv(a, html); });
  }
  M.forEach(function (m) {
    m.summary = fixMath(m.summary, false);
    (m.sections || []).forEach(function (s) { s.html = fixMath(s.html, true); s.title = fixMath(s.title, false); });
    if (m.tips) m.tips = m.tips.map(function (t) { return fixMath(t, true); });
  });
  Object.keys(DB).forEach(function (b) {
    DB[b].forEach(function (q) {
      q.q = fixMath(q.q, false); q.trick = fixMath(q.trick, false); q.explanation = fixMath(q.explanation, false);
      if (q.options) q.options = q.options.map(function (o) { return fixMath(o, false); });
    });
  });

  /* ---------- 3. label templat di teks soal ---------- */
  var TAG = /\s*\((?:Studi Logika|Kajian Analogi Verbal|Variasi Evaluasi EYD V|Kasus Integrasi)[^()]*#\d+[^()]*\)/g;
  Object.keys(DB).forEach(function (b) { DB[b].forEach(function (q) { if (q.q && TAG.test(q.q)) { TAG.lastIndex = 0; q.q = q.q.replace(TAG, ''); } TAG.lastIndex = 0; }); });

  /* ---------- 4. perbaikan soal ---------- */
  var FIX = {"SKD-TIU-0009":{"q":"Enam orang pejabat (Aldi, Budi, Citra, Doni, Eka, dan Farah) duduk mengelilingi satu meja bundar dengan jarak antarkursi sama, dengan ketentuan:\n1) Aldi duduk tepat berhadapan dengan Doni.\n2) Budi duduk bersebelahan dengan Aldi.\n3) Farah duduk tepat berhadapan dengan Budi.\n4) Citra duduk bersebelahan dengan Doni, tetapi tidak bersebelahan dengan Farah.\nSiapakah yang duduk tepat berhadapan dengan Citra?","options":["A. Aldi","B. Budi","C. Doni","D. Eka","E. Farah"],"ans":3,"trick":"Gambar lingkaran 6 kursi. Kursi berhadapan selalu berselisih 3 kursi. Pasang pasangan yang pasti dahulu (Aldi–Doni, Budi–Farah).","explanation":"Beri nomor kursi 1-6 melingkar. Aldi di kursi 1 maka Doni di kursi 4. Budi bersebelahan dengan Aldi, misalnya kursi 2, maka Farah (berhadapan dengan Budi) di kursi 5. Citra bersebelahan dengan Doni: kursi 3 atau 5; kursi 5 sudah dipakai Farah, jadi Citra di kursi 3 (tidak bersebelahan dengan Farah, memenuhi). Sisa kursi 6 diisi Eka. Yang berhadapan dengan Citra (kursi 3) adalah kursi 6, yaitu Eka. Jika Budi di kursi 6, susunannya hanya bayangan cermin dan jawabannya tetap Eka."},"SKD-TIU-0011":{"q":"Panitia diklat menyusun jadwal presentasi untuk 5 kelompok (K1, K2, K3, K4, K5) dari hari Senin sampai Jumat (satu kelompok per hari) dengan syarat:\n- K3 harus presentasi tepat satu hari sebelum K1.\n- K4 presentasi pada hari Rabu.\n- K2 tidak boleh presentasi pada hari Senin maupun Jumat.\n- K5 tidak boleh presentasi pada hari Senin.\nKelompok manakah yang presentasi pada hari Kamis dan Jumat secara berturut-turut?","options":["A. K2 dan K5","B. K3 dan K1","C. K1 dan K5","D. K5 dan K3","E. K3 dan K2"],"ans":0,"trick":"Kunci hari yang pasti (Rabu = K4), lalu cari pasangan hari berurutan untuk blok K3–K1 dan uji tiap kemungkinan dengan syarat lain.","explanation":"Rabu = K4. Blok berurutan K3-K1 hanya muat di Senin-Selasa atau Kamis-Jumat. Jika di Kamis-Jumat, sisa Senin dan Selasa untuk K2 dan K5; K2 tidak boleh Senin sehingga K5 di Senin, padahal K5 tidak boleh Senin: tidak mungkin. Maka blok K3-K1 di Senin-Selasa. Sisa Kamis dan Jumat untuk K2 dan K5; K2 tidak boleh Jumat, jadi K2 di Kamis dan K5 di Jumat. Jadwal: Senin K3, Selasa K1, Rabu K4, Kamis K2, Jumat K5."},"SKD-TIU-0007":{"options":["A. Semua pegawai di Divisi Audit mahir berbahasa Inggris","B. Tidak ada pegawai di Divisi Audit yang mahir berbahasa Inggris","C. Semua yang mahir berbahasa Inggris adalah pegawai Divisi Audit","D. Sebagian pegawai yang menguasai aplikasi pengolahan data statistik adalah pegawai Divisi Audit","E. Sebagian pegawai di Divisi Audit tidak menguasai aplikasi pengolahan data statistik"],"ans":3,"trick":"Semua A adalah B ⟹ sebagian B adalah A. Hubungan A dengan C (lewat \"sebagian B adalah C\") TIDAK dapat dipastikan.","explanation":"Semua pegawai Divisi Audit (A) menguasai statistik (B), sehingga sebagian orang yang menguasai statistik adalah pegawai Divisi Audit. Pernyataan \"sebagian yang menguasai statistik mahir berbahasa Inggris\" tidak menjamin bahwa orang-orang itu berasal dari Divisi Audit, jadi opsi A, B, dan C tidak pasti benar."}};
  function poly(n) {
    var p = [];
    for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; p.push((32 + 22 * Math.cos(a)).toFixed(1) + ',' + (32 + 22 * Math.sin(a)).toFixed(1)); }
    return '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><g transform="translate(4,4)"><rect width="64" height="64" fill="#fff" stroke="#334155" stroke-width="2"/><polygon points="' + p.join(' ') + '" fill="#38bdf8" stroke="#0f172a" stroke-width="2"/></g></svg>';
  }
  (DB.SKD_TIU || []).forEach(function (q) {
    var f = FIX[q.id];
    if (f) { Object.keys(f).forEach(function (k) { q[k] = f[k]; }); q.scores = q.options.map(function (_, i) { return i === q.ans ? 5 : 0; }); }
    /* opsi kembar pada soal figural: ganti salah satu pengecoh dengan bentuk lain */
    if (q.id === 'SKD-TIU-N1111') q.options[2] = 'C. IMG:' + poly(8);
    if (q.id === 'SKD-TIU-N1117') q.options[2] = 'C. IMG:' + poly(3);
  });
})();
