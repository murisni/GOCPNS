/* Inti bank soal: wadah MASTER_DB + fungsi registerCPNSQuestions(). */
(function () {
  window.MASTER_DB = window.MASTER_DB || {};
  const bank = window.MASTER_DB;
  const loaded = new Set();
  const aliases = new Map();
  const text = value => String(value ?? '').normalize('NFC').replaceAll('&amp;', '&')
    .replace(/[\u00a0\s]+/g, ' ').trim();
  const stem = q => {
    const cleaned = text(String(q.q || '')
      .replace(/^\s*\[(?:soal|variasi|latihan|evaluasi kompetensi teknis prakom)[^\]]*\d+[^\]]*\]\s*/i, '')
      .replace(/^(?:Studi Kasus Jaringan Pemerintah|Kasus Integrasi)[^\n]*#\d+:\s*/i, '')
      .replace(/\(variasi\s*#?\d+\)/gi, ''))
      .replace(/[.?!…]+$/, '').trim();
    return /[`]|\b(?:print|console\.log)\s*\(/.test(cleaned) ? cleaned : cleaned.toLowerCase();
  };
  const option = value => {
    const raw = String(value ?? '').replace(/^\s*[A-E][.)]\s+/, '');
    return raw.startsWith('IMG:') ? raw.trim() : text(raw);
  };
  const identities = new WeakMap();
  function identity(q) {
    if (identities.has(q)) return identities.get(q);
    const prompt = stem(q), choices = (q.options || []).map(option);
    const key = JSON.stringify([prompt, q.img || '', q.svg || '', choices.slice().sort()]);
    const pictured = q.img || q.svg || choices.some(o => o.startsWith('IMG:'));
    const value = { key, pattern: pictured ? key : prompt.replace(/\b\d+(?:[.,]\d+)*\b/g, '#') };
    identities.set(q, value);
    return value;
  }
  const key = q => identity(q).key;
  const pattern = q => identity(q).pattern;
  const resolve = id => aliases.get(id) || id;
  const valid = q => q && typeof q.q === 'string' && q.q.trim() && Array.isArray(q.options)
    && q.options.length >= 2 && q.options.length <= 5
    && q.options.every(o => typeof o === 'string' && option(o))
    && new Set(q.options.map(option)).size === q.options.length
    && Number.isInteger(q.ans) && q.ans >= 0 && q.ans < q.options.length
    && Array.isArray(q.scores) && q.scores.length === q.options.length
    && q.scores[q.ans] === 5 && q.scores.every(s => Number.isInteger(s) && s >= 0 && s <= 5);
  window.CPNSQuestions = { key, pattern, resolve, valid };

  function normalize(q, packId, idx) {
    q.id = q.id || (packId + '_Q' + (idx + 1));
    q.options = Array.isArray(q.options) ? q.options : [];
    if (typeof q.ans !== 'number') q.ans = 0;
    if (!Array.isArray(q.scores)) q.scores = q.options.map((_, i) => (i === q.ans ? 5 : 0));
    q.sub = q.sub || 'Umum';
    q.category = q.category || '';
    q.trick = q.trick || '';
    q.explanation = q.explanation || '';
    return q;
  }

  let ready = false;
  function dedupe(bucket) {
    const exact = new Map(), sameAnswer = new Map(), questions = bank[bucket];
    if (!questions) return 0;
    let kept = 0;
    for (const q of questions) {
      if (!valid(q)) continue;
      const fp = key(q);
      // Gambar adalah bagian dari soal; kunci teks membantu mengenali soal dengan pengecoh berbeda.
      const answer = option(q.options[q.ans]);
      const similar = !q.img && !q.svg && !q.options.some(o => option(o).startsWith('IMG:'))
        ? JSON.stringify([stem(q), answer]) : null;
      const prior = exact.get(fp) || (similar && sameAnswer.get(similar));
      if (prior) {
        aliases.set(q.id, prior.id);
        continue;
      }
      exact.set(fp, q);
      if (similar) sameAnswer.set(similar, q);
      questions[kept++] = q;
    }
    const removed = questions.length - kept;
    questions.length = kept;
    return removed;
  }
  window.finalizeCPNSBank = () => {
    let removed = 0;
    Object.keys(bank).forEach(bucket => { removed += dedupe(bucket); });
    ready = true;
    return removed;
  };

  window.registerCPNSQuestions = function (pack) {
    if (!pack || !Array.isArray(pack.questions)) return 0;
    const packId = pack.packId || ('custom_' + Date.now() + '_' + Math.random());
    if (loaded.has(packId)) return 0;
    loaded.add(packId);

    const ids = new Set([...Object.values(bank).flat().map(q => q.id), ...aliases.keys()]);
    const buckets = new Set();
    let added = 0;
    pack.questions.forEach((q, idx) => {
      if (!q || typeof q !== 'object' || ids.has(q.id)) return;
      normalize(q, packId, idx);
      if (ids.has(q.id)) return;
      let bucket = pack.bucket || q.examType || 'SKD_TWK';
      if (bucket === 'SKD') {
        bucket = q.category === 'TWK' ? 'SKD_TWK' : q.category === 'TIU' ? 'SKD_TIU' : 'SKD_TKP';
      }
      if (/^SKD_(TWK|TIU|TKP)$/.test(bucket)) q.category = bucket.slice(4);
      if (ready && !valid(q)) return;
      ids.add(q.id);
      (bank[bucket] = bank[bucket] || []).push(q);
      buckets.add(bucket);
      added++;
    });

    if (ready) buckets.forEach(bucket => { added -= dedupe(bucket); });
    if (window.__persistPacks && added) {
      try {
        const arr = JSON.parse(localStorage.getItem('cpns_custom_packs_v2') || '[]');
        arr.push(pack);
        localStorage.setItem('cpns_custom_packs_v2', JSON.stringify(arr));
      } catch (e) { /* storage penuh/diblokir: abaikan */ }
    }
    if (typeof window.__onDbChange === 'function') window.__onDbChange();
    return added;
  };
})();
