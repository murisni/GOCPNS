/* Patch v25 — dimuat SETELAH patches_v24.js dan js/materi_tiu_v25.js, SEBELUM app.js.
   1) Pecahan "1/2" pada soal & materi TIU ditampilkan bertingkat (pembilang di atas garis, penyebut di bawah).
      Soal (teks biasa) memakai penanda ⟦pembilang|penyebut⟧ yang diubah menjadi HTML oleh esc() di app.js.
      Materi (HTML) langsung diubah menjadi HTML.
   2) CSS untuk pecahan dan kotak studi kasus (.kasus, .ingat, .cara, .rumus). */
(function () {
  var DB = window.MASTER_DB || {}, M = window.MATERI || [];

  /* ---------- 0. CSS ---------- */
  var css = [
    '.frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 .12em;line-height:1.2;font-size:.95em;text-align:center;font-weight:inherit}',
    '.frac>.fn{padding:0 .25em .05em;border-bottom:.09em solid currentColor;white-space:nowrap}',
    '.frac>.fd{padding:.05em .25em 0;white-space:nowrap}',
    '.materi-body .kasus{background:#faf8ff;border:1px solid #ddd6fe;border-left:5px solid #7c5cf0;border-radius:.9rem;padding:.8rem 1rem;margin:1rem 0}',
    '.materi-body .kasus-h{font-weight:800;color:#6b21a8;font-size:.8rem;letter-spacing:.03em;margin-bottom:.35rem}',
    '.materi-body .kasus p{margin:.25rem 0}',
    '.materi-body .kasus-j{background:#fff;border:1px dashed #c4b5fd;border-radius:.6rem;padding:.55rem .75rem;margin:.55rem 0;font-size:.93rem;line-height:1.75}',
    '.materi-body .ingat{background:#fef9c3;border:1px solid #fde047;border-radius:.6rem;padding:.45rem .75rem;margin-top:.5rem;font-size:.92rem;color:#713f12}',
    '.materi-body .cara{background:#fffbeb;border-left:4px solid #f59e0b;border-radius:0 .7rem .7rem 0;padding:.55rem .85rem;margin:.85rem 0;font-size:.93rem}',
    '.lx-node.now.part{--b:#f59e0b;--s:#c27803}',
    '.lx-sub{margin-top:.15rem;font-size:.68rem;font-weight:800;color:#b45309;text-align:center}',
    '.lx-reread{display:inline-flex;align-items:center;gap:.35rem;border-radius:9999px;border:1px solid #e2e8f0;background:#fff;padding:.4rem .75rem;font-size:.72rem;font-weight:800;color:#475569}',
    '.lx-reread:active{transform:scale(.96)}',
    '.materi-body .studi{background:#fff;border:1px solid #cbd5e1;border-radius:1rem;margin:1.1rem 0;overflow:hidden}',
    '.materi-body .studi-h{background:#1e3a8a;color:#fff;font-weight:800;font-size:.8rem;letter-spacing:.02em;padding:.55rem .9rem}',
    '.materi-body .studi-soal{background:#eff6ff;border-bottom:1px solid #bfdbfe;padding:.7rem .9rem;font-size:.95rem;line-height:1.7}',
    '.materi-body .studi-kunci{background:#fefce8;border-bottom:1px solid #fde68a;padding:.55rem .9rem;font-size:.9rem;line-height:1.65}',
    '.materi-body .studi-rumus{background:#f0f9ff;border-bottom:1px solid #bae6fd;padding:.55rem .9rem;font-size:.9rem;line-height:1.9}',
    '.materi-body .studi-langkah{list-style:none;counter-reset:sl;margin:0;padding:.7rem .9rem .3rem}',
    '.materi-body .studi-langkah li{counter-increment:sl;position:relative;padding:.1rem 0 .1rem 2.1rem;margin:0 0 .6rem;font-size:.93rem;line-height:1.85}',
    '.materi-body .studi-langkah li::before{content:counter(sl);position:absolute;left:0;top:.2rem;width:1.5rem;height:1.5rem;border-radius:9999px;background:#7c5cf0;color:#fff;font-weight:800;font-size:.75rem;display:grid;place-items:center}',
    '.materi-body .studi-jawab{background:#dcfce7;border-top:1px solid #86efac;padding:.6rem .9rem;font-size:.95rem;line-height:1.7;color:#14532d}',
    '.materi-body .studi-cek{background:#f8fafc;border-top:1px dashed #cbd5e1;padding:.55rem .9rem;font-size:.88rem;line-height:1.7;color:#475569}',
    '.materi-body .studi .ingat{margin:0;border-radius:0;border-width:1px 0 0 0}',
    '.materi-body .studi-intro{font-size:.9rem;color:#475569}',
    '.materi-body .rumus{background:#eff6ff;border:1px solid #bfdbfe;border-radius:.7rem;padding:.55rem .8rem;margin:.7rem 0;font-weight:700;color:#1d4ed8;text-align:center;overflow-x:auto}'
  ].join('\n');
  var st = document.createElement('style'); st.id = 'css-v25'; st.textContent = css; document.head.appendChild(st);

  /* ---------- 1. mesin pecahan ---------- */
  var TERM = /[A-Za-z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u0300-\u036F\u2070-\u209F\u00B2\u00B3\u00B9.,·×!'_]/;
  var OKW = { jarak: 1, waktu: 1, beli: 1, total: 1, untung: 1 };
  var MULTI = ['jarak total', 'selisih jarak'];
  var MULTI_R = ['harga beli', 'sisa hari'];
  var UNIT_L = { m: 1, km: 1, cm: 1, kg: 1, g: 1, l: 1, rp: 1 };
  
  function closeOf(s, i) {            /* indeks ')' pasangan dari '(' di i, atau -1 */
    var d = 0;
    for (var k = i; k < s.length; k++) { if (s[k] === '(') d++; else if (s[k] === ')') { d--; if (d === 0) return k; } }
    return -1;
  }
  function openOf(s, i) {             /* indeks '(' pasangan dari ')' di i, atau -1 */
    var d = 0;
    for (var k = i; k >= 0; k--) { if (s[k] === ')') d++; else if (s[k] === '(') { d--; if (d === 0) return k; } }
    return -1;
  }
  function trimEdge(t, side) {        /* buang titik/koma/! di tepi */
    if (side === 'L') return t.replace(/^[.,!'_]+/, '');
    var base = t.replace(/[.,'_]+$/, '');
    if (/!$/.test(base)) { var pre = base.slice(0, -1); if (!/[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F)]$/.test(pre)) base = pre; }
    return base;
  }
  function left(s, p, gap) {
    var e = p - gap;                  /* indeks setelah operand kiri */
    if (e <= 0) return null;
    var st;
    if (s[e - 1] === ')') {
      var o = openOf(s, e - 1); if (o < 0) return null;
      st = o;
      while (st > 0 && /[A-Za-z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u2080-\u209F]/.test(s[st - 1])) st--;
    } else {
      st = e;
      while (st > 0 && TERM.test(s[st - 1])) st--;
      var low = s.slice(0, e).toLowerCase();
      for (var m = 0; m < MULTI.length; m++) {
        if (low.slice(-MULTI[m].length) === MULTI[m] && (e - MULTI[m].length === 0 || /[\s(=:]/.test(s[e - MULTI[m].length - 1]))) { st = e - MULTI[m].length; break; }
      }
      var raw = s.slice(st, e), cut = raw.length - raw.replace(/^[.,!'_]+/, '').length;
      st += cut;
    }
    var t = s.slice(st, e);
    return t ? { start: st, text: t } : null;
  }
  function right(s, p, gap) {
    var b = p + 1 + gap, en;
    if (b >= s.length) return null;
    if (s[b] === '(') {
      var c = closeOf(s, b); if (c < 0) return null;
      en = c + 1;
      while (en < s.length && /[\u00B2\u00B3]/.test(s[en])) en++;
      if (s[en] === '!' && !/^\s+[A-Za-z0-9]/.test(s.slice(en + 1, en + 3))) en++;   /* faktorial (n−r)! , bukan tanda seru */
    } else {
      en = b;
      while (en < s.length && TERM.test(s[en])) en++;
      var t0 = s.slice(b, en), t1;
      /* "6!/2! = 360": tanda seru setelah angka dianggap faktorial bila disusul tanda hitung; selain itu tanda seru kalimat */
      if (/\d!$/.test(t0) && /^\s*[=+\-\u2212\u00D7\u00F7*)\];,:]/.test(s.slice(en))) t1 = t0.replace(/[.,'_]+$/, ''); else t1 = trimEdge(t0, 'R');
      en = b + t1.length;
      if (s[en] === '(') { var c2 = closeOf(s, en); if (c2 > 0) en = c2 + 1; }
      var low = s.slice(b).toLowerCase();
      for (var m = 0; m < MULTI_R.length; m++) { if (low.indexOf(MULTI_R[m]) === 0) { en = b + MULTI_R[m].length; break; } }
    }
    var t = s.slice(b, en);
    return t ? { end: en, text: t } : null;
  }
  function wordy(x) { return /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F]{3,}$/.test(x); }
  function ok(L, R, s, p, ls, re) {
    if (!L || !R) return false;
    if (s[p - 1] === '%') return false;                              /* 6%/th */
    if (s[re] === '/' || (ls > 0 && s[ls - 1] === '/')) return false; /* tanggal 12/05/2026 */
    if (wordy(L.text) && !OKW[L.text.toLowerCase()]) return false;
    if (wordy(R.text) && !OKW[R.text.toLowerCase()]) return false;
    if (UNIT_L[L.text.toLowerCase()]) return false;                   /* satuan: km/jam, 180 km / 2,5 jam */
    if (/^[A-Za-z]{1,2}$/.test(L.text) && /^[A-Za-z]{1,2}$/.test(R.text) && !/^[a-dnptvxyz]$/i.test(L.text)) return false;
    return true;
  }
  function whole(x) {                 /* buang kurung luar bila seluruh operand berupa satu kurung */
    if (x[0] === '(' && closeOf(x, 0) === x.length - 1) return x.slice(1, -1).trim();
    return x;
  }
  function tokens(s) {                /* teks biasa -> teks dengan penanda ⟦n|d⟧ */
    if (typeof s !== 'string' || s.indexOf('/') < 0) return s;
    var out = s, from = 0, guard = 0;
    while (guard++ < 300) {
      var p = out.indexOf('/', from);
      if (p < 0) break;
      var g1 = out[p - 1] === ' ' ? 1 : 0, g2 = out[p + 1] === ' ' ? 1 : 0;
      var gap = (g1 && g2) ? 1 : 0;
      var L = left(out, p, gap), R = right(out, p, gap);
      if (L && R && ok(L, R, out, p, L.start, R.end)) {
        var tk = '\u27E6' + whole(L.text) + '|' + whole(R.text) + '\u27E7';
        out = out.slice(0, L.start) + tk + out.slice(R.end);
        from = L.start + tk.length;
      } else from = p + 1;
    }
    return out.replace(/\(\s*(\u27E6[^\u27E6\u27E7]*\u27E7)\s*\)/g, '$1');
  }
  function tokToHtml(s) {
    return s.replace(/\u27E6([^|\u27E7]*)\|([^\u27E7]*)\u27E7/g, '<span class="frac"><span class="fn">$1</span><span class="fd">$2</span></span>');
  }
  function htmlFrac(h) {              /* HTML: proses hanya teks di antara tag */
    if (typeof h !== 'string' || h.indexOf('/') < 0) return h;
    return h.split(/(<[^>]+>)/).map(function (seg, i) { return i % 2 ? seg : tokToHtml(tokens(seg)); }).join('');
  }

  /* ---------- 2. soal TIU ---------- */
  (DB.SKD_TIU || []).forEach(function (q) {
    if (q.q) q.q = tokens(q.q);
    if (q.trick) q.trick = tokens(q.trick);
    if (q.explanation) q.explanation = tokens(q.explanation);
    if (q.options) q.options = q.options.map(function (o) { return /^[A-E]\.\s*IMG:/.test(o) ? o : tokens(o); });
  });

  /* ---------- 3. materi TIU lama (materi v25 sudah memakai pecahan bertingkat sendiri) ---------- */
  M.forEach(function (m) {
    if (m.group !== 'TIU' || m.v25) return;
    (m.sections || []).forEach(function (s) { s.html = htmlFrac(s.html); });
    if (m.tips) m.tips = m.tips.map(htmlFrac);
  });
})();
