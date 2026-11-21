/* v35 — rapikan materi ganda TIU/TKP: bagian unik versi lama digabung ke topik "kasus/lengkap", topik lama disembunyikan.
   Dimuat SETELAH semua materi v31/v32, SEBELUM materi_skb_*_v35.js. t.__prev = jumlah langkah sebelum v35 (untuk migrasi progres). */
(function () {
  var M = window.MATERI;
  if (!Array.isArray(M) || window.__materiV35) return;
  window.__materiV35 = 1;
  M.forEach(function (t) { t.__prev = (t.sections || []).length; });
  var byId = function (id) { for (var i = 0; i < M.length; i++) if (M[i].id === id) return M[i]; return null; };
  var nz = function (s) { return String(s || '').toLowerCase().replace(/&amp;/g, 'dan').replace(/[^a-z0-9]+/g, ' ').trim(); };
  function similar(a, b) {
    a = nz(a); b = nz(b); if (!a || !b) return false;
    if (a === b || a.indexOf(b.slice(0, 22)) === 0 || b.indexOf(a.slice(0, 22)) === 0) return true;
    var A = a.split(' '), B = b.split(' '), inter = A.filter(function (w) { return w.length > 3 && B.indexOf(w) >= 0; }).length;
    return inter / Math.max(1, Math.min(A.length, B.length)) >= 0.6;
  }
  function union(a, b) { var r = (a || []).slice(); (b || []).forEach(function (x) { if (r.indexOf(x) < 0) r.push(x); }); return r; }
  var PAIRS = [
    ['tiu-soal-cerita-lengkap', 'tiu-soal-cerita-kasus-v25'], ['soal-cerita', 'tiu-soal-cerita-kasus-v25'],
    ['tiu-deret-lengkap', 'tiu-deret-kasus-v25'], ['deret-angka', 'tiu-deret-kasus-v25'],
    ['tiu-analogi-lengkap', 'tiu-analogi-padanan-kasus-v25'], ['analogi', 'tiu-analogi-padanan-kasus-v25'],
    ['tiu-silogisme-lengkap', 'tiu-silogisme-kasus-v25'], ['silogisme', 'tiu-silogisme-kasus-v25'],
    ['tiu-berhitung-cepat', 'tiu-pecahan-persen-kasus-v25'],
    ['perbandingan-kuantitatif', 'tiu-perbandingan-kuantitatif-kasus-v25'],
    ['tiu-figural-lengkap', 'tiu-figural-kasus-v25'], ['figural-analitis', 'tiu-figural-kasus-v25'],
    ['tiu-himpunan-peluang', 'tiu-himpunan-peluang-kasus-v25'],
    ['tkp-playbook', 'strategi-tkp']
  ];
  PAIRS.forEach(function (p) {
    var o = byId(p[0]), t = byId(p[1]);
    if (!o || !t || o === t) return;
    t.sections = t.sections || [];
    (o.sections || []).forEach(function (s) {
      if (t.sections.some(function (x) { return similar(x.title, s.title); })) return;
      t.sections.push(s);
    });
    t.subs = t.subs && o.subs ? union(t.subs, o.subs) : t.subs; t.buckets = union(t.buckets, o.buckets); t.tips = union(t.tips, o.tips);
    M.splice(M.indexOf(o), 1);
  });
})();
