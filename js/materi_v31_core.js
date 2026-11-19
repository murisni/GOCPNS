/* v31 — pembantu penambahan materi. Dimuat SETELAH js/patches_v30.js, SEBELUM file materi_*_v31.js.
   window.__v31Append(idTopik, [ {title, html, fam?}, ... ])
     - menambahkan langkah (section) baru di AKHIR topik yang sudah ada (sebelum langkah "Cara Menjawab Cepat").
     - fam (opsional): nama keluarga konsep soal. Soal berlabel fam yang sama akan diprioritaskan muncul
       setelah langkah itu, dan dipakai sebagai soal pengganti bila jawaban salah (konsep sama, soal beda).
   Bagian "tipsFrom" mencatat jumlah langkah semula agar progres lama dapat dipindahkan (lihat app.js: lessonMigrateV31). */
(function () {
  var M = window.MATERI || [];
  window.__v31Append = function (id, sections) {
    var t = null; for (var i = 0; i < M.length; i++) if (M[i].id === id) { t = M[i]; break; }
    if (!t) { try { console.warn('[v31] topik tidak ditemukan:', id); } catch (e) {} return false; }
    t.sections = t.sections || [];
    if (t.tipsFrom == null) t.tipsFrom = t.sections.length;
    t.__v31titles = t.__v31titles || {};
    (sections || []).forEach(function (s) {
      if (!s || !s.title || !s.html || t.__v31titles[s.title]) return;
      t.__v31titles[s.title] = 1;
      t.sections.push(s);
    });
    return true;
  };
  /* tambahkan sub/bucket baru ke pool topik (agar soal baru ikut terpilih) */
  window.__v31Subs = function (id, subs) {
    var t = null; for (var i = 0; i < M.length; i++) if (M[i].id === id) { t = M[i]; break; }
    if (!t) return;
    t.subs = t.subs || [];
    (subs || []).forEach(function (s) { if (t.subs.indexOf(s) < 0) t.subs.push(s); });
  };
})();
