/* Inti bank soal: wadah MASTER_DB + fungsi registerCPNSQuestions().
   File db/*.js memanggil window.registerCPNSQuestions({packId, bucket, questions:[...]}). */
(function () {
  window.MASTER_DB = window.MASTER_DB || {};
  const loaded = new Set();

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

  window.registerCPNSQuestions = function (pack) {
    if (!pack || !Array.isArray(pack.questions)) return 0;
    const packId = pack.packId || ('custom_' + Date.now() + '_' + Math.random());
    if (loaded.has(packId)) return 0;
    loaded.add(packId);

    const ids = new Set();
    Object.values(window.MASTER_DB).forEach(arr => arr.forEach(q => ids.add(q.id)));

    let added = 0;
    pack.questions.forEach((q, idx) => {
      if (q.id && ids.has(q.id)) return;
      normalize(q, packId, idx);
      ids.add(q.id);
      let bucket = pack.bucket || q.examType || 'SKD_TWK';
      if (bucket === 'SKD') {
        bucket = q.category === 'TWK' ? 'SKD_TWK' : q.category === 'TIU' ? 'SKD_TIU' : 'SKD_TKP';
      }
      (window.MASTER_DB[bucket] = window.MASTER_DB[bucket] || []).push(q);
      added++;
    });

    if (window.__persistPacks) {
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
