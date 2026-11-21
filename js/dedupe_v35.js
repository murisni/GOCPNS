/* v35 — buang soal ganda: soal dengan isi (teks soal + gambar + jawaban benar) identik, abaikan label "[Soal ... #n]" dan tanda baca.
   Dimuat SETELAH semua file bank soal, SEBELUM app.js. Yang pertama dipertahankan. */
(function () {
  var DB = window.MASTER_DB; if (!DB || window.__dedupeV35) return; window.__dedupeV35 = 1;
  var nz = function (s) { return String(s || '').toLowerCase().replace(/&amp;/g, 'dan').replace(/[^a-z0-9]+/g, ' ').trim(); };
  var removed = 0;
  Object.keys(DB).forEach(function (b) {
    var seen = {}, out = [];
    DB[b].forEach(function (q) {
      var stem = String(q.q || '').replace(/^\s*\[[^\]]*\]\s*/, '');
      var opts = (q.options || []).map(function (o) { return nz(String(o).replace(/^[A-E][.)]\s*/, '')); }).sort().join('|');
      var key = nz(stem) + '#' + (q.img || '') + '#' + nz(((q.options || [])[q.ans] || '').replace(/^[A-E][.)]\s*/, '')) + '#' + opts;
      if (seen[key]) { removed++; return; }
      seen[key] = 1; out.push(q);
    });
    DB[b].length = 0; Array.prototype.push.apply(DB[b], out);
  });
  window.__dedupeRemoved = removed;
})();
