/* ==========================================================================
   CAT CPNS — aplikasi belajar & simulasi (tanpa framework, jalan di file:// )
   Bagian: util · ikon · penyimpanan · bank soal & paket · materi · tampilan ·
           mesin ujian · dialog (mulai, hasil, database)
   ========================================================================== */
'use strict';

/* ---------- util ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmtNum = n => Number(n).toLocaleString('id-ID');
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const pad2 = n => String(n).padStart(2, '0');
function fmtClock(sec) {
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return (h ? pad2(h) + ':' : '') + pad2(m) + ':' + pad2(s);
}

/* ---------- ikon (gaya outline) ---------- */
const ICON = {
  lock: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  tick: 'M4.5 12.75l6 6 9-13.5',
  menu: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  puzzle: 'M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z',
  book: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  clipboard: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75',
  briefcase: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
  back: 'M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18',
  arrowR: 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  check: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  grid: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
  bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  db: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  x: 'M6 18L18 6M6 6l12 12',
  dots: 'M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z',
  flag: 'M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5',
  play: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z',
  pause: 'M15.75 5.25v13.5m-7.5-13.5v13.5',
  trash: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0',
  bulb: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  home: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  refresh: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  upload: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5',
  trophy: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0'
};
const icon = (n, cls = 'h-5 w-5') =>
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="${cls}" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="${ICON[n] || ''}"/></svg>`;

/* ---------- penyimpanan (localStorage, aman bila diblokir) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ } if (window.Auth) window.Auth.touch(k); },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* abaikan */ } }
};
const seen = new Set(store.get('cpns_seen_qids_v2', []));
let results = store.get('cpns_results_v3', {});
function markSeen(id) {
  if (!id || seen.has(id)) return;
  seen.add(id);
  store.set('cpns_seen_qids_v2', Array.from(seen));
}

/* ---------- bank soal & pembuatan paket ---------- */
const BANK = window.MASTER_DB;
const bankTotal = () => Object.values(BANK).reduce((a, b) => a + b.length, 0);
const bankLen = k => (BANK[k] || []).length;

function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle(arr, seedStr) {
  const r = seedStr == null ? Math.random : rng(hashStr(seedStr));
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
/* Urutan tetap (acak berbiji) supaya isi "Paket 1, 2, 3…" selalu sama setiap dibuka. */
const orderCache = {};
function ordered(bucket) {
  const arr = BANK[bucket] || [];
  const key = bucket + ':' + arr.length;
  if (!orderCache[key]) {
    orderCache[key] = shuffle(arr.slice().sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)), 'pack:' + bucket);
  }
  return orderCache[key];
}
const bucketOfId = {};
function indexBuckets() { Object.entries(BANK).forEach(([b, arr]) => arr.forEach(q => { bucketOfId[q.id] = b; })); }

const CAT_SIZE = 30;   // soal per paket latihan TWK / TIU / TKP
const SKB_SIZE = 20;   // soal per paket SKB
const FULL_MIX = { TWK: 30, TIU: 35, TKP: 45 };  // komposisi tryout SKD
const PASSING = { TWK: 65, TIU: 80, TKP: 166 };

const SKD_GROUPS = {
  SKD_FULL: { label: 'Tryout Lengkap', short: 'Tryout', desc: '30 TWK + 35 TIU + 45 TKP • 100 menit — mengikuti format ujian sebenarnya.' },
  SKD_TWK: { label: 'TWK', short: 'TWK', desc: 'Tes Wawasan Kebangsaan: pilar negara, nasionalisme, integritas, bahasa Indonesia.' },
  SKD_TIU: { label: 'TIU', short: 'TIU', desc: 'Tes Intelegensia Umum: verbal, numerik, dan figural.' },
  SKD_TKP: { label: 'TKP', short: 'TKP', desc: 'Tes Karakteristik Pribadi: skor 1–5 pada tiap opsi.' }
};
const SKB_META = {
  SKB_PRAKOM: { name: 'Pranata Komputer', short: 'Prakom', desc: 'Tata kelola TI & SPBE, jaringan, basis data (SQL), RPL/UML, keamanan, dan cloud.' },
  SKB_KESEHATAN: { name: 'Kesehatan', short: 'Kesehatan', desc: 'UU Kesehatan 17/2023, transformasi kesehatan, PPI, triase, KIA/imunisasi, keselamatan pasien.' },
  SKB_HUKUM: { name: 'Hukum, Pemerintahan & Kebijakan', short: 'Hukum', desc: 'UU ASN, kebijakan publik, pengadaan barang/jasa, hierarki peraturan, hukum administrasi.' },
  SKB_KEUANGAN: { name: 'Keuangan, Akuntansi & Pajak', short: 'Keuangan', desc: 'SAP akrual, keuangan & perbendaharaan negara, opini audit BPK, perpajakan.' },
  SKB_PENDIDIKAN: { name: 'Pendidikan, Guru & Dosen', short: 'Pendidikan', desc: 'Kompetensi pendidik, asesmen, taksonomi Bloom (HOTS), teori belajar konstruktivistik.' }
};
const skbKeys = () => Object.keys(BANK).filter(k => k.startsWith('SKB_') && BANK[k].length);
const skbMeta = k => SKB_META[k] || { name: k.replace('SKB_', '').replace(/_/g, ' '), short: k.replace('SKB_', ''), desc: 'Bank soal tambahan.' };

function chunk(arr, size) { const out = []; for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size)); return out; }

function packsFor(group) {
  if (group === 'SKD_FULL') {
    const twk = ordered('SKD_TWK'), tiu = ordered('SKD_TIU'), tkp = ordered('SKD_TKP');
    const n = Math.min(Math.floor(twk.length / FULL_MIX.TWK), Math.floor(tiu.length / FULL_MIX.TIU), Math.floor(tkp.length / FULL_MIX.TKP));
    const out = [];
    for (let i = 0; i < n; i++) {
      const qs = [
        ...twk.slice(i * FULL_MIX.TWK, (i + 1) * FULL_MIX.TWK),
        ...tiu.slice(i * FULL_MIX.TIU, (i + 1) * FULL_MIX.TIU),
        ...tkp.slice(i * FULL_MIX.TKP, (i + 1) * FULL_MIX.TKP)
      ];
      out.push({
        key: `SKD_FULL-${i + 1}`, group, no: i + 1, kind: 'FULL', mode: 'SKD', title: `Tryout Paket ${i + 1}`,
        compose: `TWK ${FULL_MIX.TWK} · TIU ${FULL_MIX.TIU} · TKP ${FULL_MIX.TKP}`, questions: qs, minutes: 100
      });
    }
    return out;
  }
  if (SKD_GROUPS[group]) {
    const cat = group.replace('SKD_', '');
    return chunk(ordered(group), CAT_SIZE).map((qs, i) => ({
      key: `${group}-${i + 1}`, group, no: i + 1, kind: 'CAT', mode: 'SKD', title: `${cat} Paket ${i + 1}`,
      compose: `${qs.length} soal ${cat}`, questions: qs, minutes: Math.max(10, qs.length)
    }));
  }
  if (group.startsWith('SKB_')) {
    const m = skbMeta(group);
    return chunk(ordered(group), SKB_SIZE).map((qs, i) => ({
      key: `${group}-${i + 1}`, group, no: i + 1, kind: 'SKB', mode: 'SKB', title: `${m.short} Paket ${i + 1}`,
      compose: `${qs.length} soal ${m.name}`, questions: qs, minutes: Math.max(10, qs.length)
    }));
  }
  return [];
}
function findPack(key) {
  const i = key.lastIndexOf('-');
  const group = key.slice(0, i);
  return packsFor(group).find(p => p.key === key) || null;
}

/* ---------- materi ---------- */
const MATERI = window.MATERI || [];
const MATERI_GROUPS = window.MATERI_GROUPS || [];
const GROUP_STYLE = {
  TWK: { badge: 'bg-sky-100 text-sky-800', bar: 'bg-sky-500', ring: 'ring-sky-200' },
  TIU: { badge: 'bg-violet-100 text-violet-800', bar: 'bg-violet-500', ring: 'ring-violet-200' },
  TKP: { badge: 'bg-emerald-100 text-emerald-800', bar: 'bg-emerald-500', ring: 'ring-emerald-200' },
  SKB: { badge: 'bg-amber-100 text-amber-900', bar: 'bg-amber-500', ring: 'ring-amber-200' }
};
const catStyle = c => GROUP_STYLE[['TWK', 'TIU', 'TKP'].includes(c) ? c : 'SKB'];

function customQuestions(t) {
  return (t.questions || []).map((q, i) => {
    const c = Object.assign({}, q);
    c.id = c.id || `MATERI-${t.id}-${i + 1}`;
    c.options = c.options || [];
    c.ans = typeof c.ans === 'number' ? c.ans : 0;
    c.scores = c.scores || c.options.map((_, k) => (k === c.ans ? 5 : 0));
    c.category = c.category || t.group;
    c.sub = c.sub || t.title;
    c.trick = c.trick || ''; c.explanation = c.explanation || '';
    return c;
  });
}
function materiPool(t) {
  const buckets = t.buckets || Object.keys(BANK);
  let out = [];
  buckets.forEach(b => {
    ordered(b).forEach(q => {
      if (!t.subs || t.subs.some(s => (q.sub || '').toLowerCase().includes(s.toLowerCase()))) out.push(q);
    });
  });
  return customQuestions(t).concat(out);
}
function materiForQuestion(q) {
  const b = bucketOfId[q.id];
  const sub = (q.sub || '').toLowerCase();
  let t = MATERI.find(m => m.subs && m.subs.some(s => sub.includes(s.toLowerCase())) && (!m.buckets || !b || m.buckets.includes(b)));
  if (!t) t = MATERI.find(m => !m.subs && m.buckets && b && m.buckets.length === 1 && m.buckets[0] === b);
  return t || null;
}
function materiExamples(t, n = 3) {
  const pool = materiPool(t).filter(q => (q.trick || q.explanation) && (q.q || '').length < 700);
  const bySub = new Set(), picked = [];
  const sh = shuffle(pool, 'ex:' + t.id);
  sh.forEach(q => { if (picked.length < n && !bySub.has(q.sub)) { bySub.add(q.sub); picked.push(q); } });
  sh.forEach(q => { if (picked.length < n && !picked.includes(q)) picked.push(q); });
  return picked;
}

/* ---------- state & router ---------- */
const ui = { skdTab: 'SKD_FULL', materiTab: 'SKD', materiGroup: 'ALL', materiSkbGroup: 'ALL' };
let exam = null;         // sesi ujian aktif
let timerHandle = null;

const ROUTES = {
  '': renderHome, skd: renderSkd, skb: renderSkb, materi: renderMateri, ujian: renderExam
};
function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const view = ROUTES[parts[0]] ? parts[0] : '';
  if (view !== 'ujian') { const d = $('#dlg-nums'); if (d && d.open) d.close(); }
  document.documentElement.classList.toggle('in-exam', view === 'ujian');
  if (view === 'materi') {
    const sub = parts[1] ? decodeURIComponent(parts[1]) : null;
    if (sub === 'skd') {
      ui.materiTab = 'SKD';
      renderMateri(null);
    } else if (sub === 'skb') {
      ui.materiTab = 'SKB';
      renderMateri(null);
    } else {
      renderMateri(sub);
    }
    window.scrollTo(0, 0);
    return;
  }
  ROUTES[view](parts[1] ? decodeURIComponent(parts[1]) : null);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
const go = h => { if (location.hash === h) route(); else location.hash = h; };

/* ---------- kerangka halaman ---------- */
const NAV_LINKS = [['', 'Beranda', 'home'], ['materi', 'Materi', 'book'], ['skd', 'SKD', 'clipboard'], ['skb', 'SKB', 'briefcase']];
function navbar(active) {
  const li = NAV_LINKS.map(([h, t]) =>
    `<li><a href="#/${h}" class="${active === h ? 'bg-primary/10 font-bold text-primary' : 'font-medium text-slate-600 hover:text-slate-900'}">${t}</a></li>`).join('');
  return `
  <!-- HP: tombol garis tiga di pojok kanan (ikut tergulung), header penuh disembunyikan -->
  <div class="mrow sm:hidden">
    <button type="button" class="mburger" onclick="App.openDb()" aria-label="Kelola database soal">${icon('menu', 'h-6 w-6')}</button>
  </div>
  <header class="app-top sticky top-0 z-30 hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-md sm:block">
    <div class="navbar mx-auto min-h-14 max-w-6xl px-3 sm:px-4 md:min-h-16">
      <div class="navbar-start">
        <a href="#/" class="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-neutral active:scale-98 transition">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-black text-white shadow-xs">CAT</span>
          <span class="text-lg">CPNS <span class="font-bold text-primary">Belajar</span></span>
        </a>
      </div>
      <div class="navbar-center flex"><ul class="menu menu-horizontal gap-1 px-1">${li}</ul></div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-sm gap-2 text-slate-700 hover:bg-slate-100 rounded-xl" onclick="App.openDb()" aria-label="Kelola database soal">${icon('db', 'h-4 w-4')}<span class="font-semibold">Database</span></button>
      </div>
    </div>
  </header>`;
}
/* navigasi bawah ala aplikasi (hanya tampil di layar kecil) */
function bottomNav(active) {
  return `<nav class="bnav" aria-label="Menu utama">${NAV_LINKS.map(([h, t, ic]) => {
    const on = active === h;
    return `<a href="#/${h}" class="border-2 ${on ? 'on border-primary/30 !bg-sky-50' : 'border-transparent'}" ${on ? 'aria-current="page"' : ''}><span class="bnav-icon">${icon(ic, on ? 'h-6 w-6' : 'h-5 w-5')}</span><span class="bnav-label ${on ? 'font-extrabold' : ''}">${t}</span></a>`;
  }).join('')}</nav>`;
}
function shell(active, inner) {
  $('#app').innerHTML = `
    ${navbar(active)}
    <main class="page-main fade-in mx-auto w-full max-w-6xl overflow-x-clip px-3 sm:px-4">${inner}</main>
    <footer class="page-foot mx-auto max-w-6xl px-3 text-center text-xs text-base-content/50 sm:px-4">
      Simulasi belajar mandiri — bukan produk resmi BKN. Selalu cek aturan terbaru di sumber resmi.
    </footer>
    ${bottomNav(active)}`;
}
function breadcrumb(items) {
  return `<div class="breadcrumbs hidden sm:block pt-3 text-sm sm:pt-5"><ul>${items.map(([h, t]) =>
    h ? `<li><a href="${h}">${t}</a></li>` : `<li class="font-semibold text-slate-800">${t}</li>`).join('')}</ul></div>`;
}
function pageHead(title, sub, extra = '') {
  return `<div class="mb-4 mt-2 sm:mb-6 sm:mt-1 flex flex-wrap items-end justify-between gap-3">
    <div><h1 class="text-xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl">${title}</h1>
    <p class="mt-1 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600">${sub}</p></div>${extra}</div>`;
}

/* ---------- BERANDA ---------- */
function renderHome() {
  const h = new Date().getHours();
  const sapa = h < 4 ? 'Selamat malam' : h < 11 ? 'Selamat pagi' : h < 15 ? 'Selamat siang' : h < 18 ? 'Selamat sore' : 'Selamat malam';

  /* --- progres materi & paket --- */
  const rows = MATERI.map(t => ({ t, p: lessonProgress(t), at: (lessonStore[t.id] && lessonStore[t.id].at) || 0 }));
  const topicDone = rows.filter(x => x.p.total && x.p.pct === 100).length;
  const last = rows.filter(x => x.at).sort((a, b) => b.at - a.at)[0] || null;
  const open = x => x.p.pct < 100;
  let cur = null, label = 'Mulai belajar';
  if (last && open(last)) { cur = last; label = 'Lanjutkan belajar'; }
  else {
    const i = last ? rows.indexOf(last) : -1;
    cur = rows.slice(i + 1).find(open) || rows.find(open) || null;
    if (last) label = 'Topik berikutnya';
  }
  const groups = ['SKD_FULL', 'SKD_TWK', 'SKD_TIU', 'SKD_TKP'].concat(skbKeys());
  const allPacks = groups.reduce((a, g) => a.concat(packsFor(g)), []);
  const packDone = allPacks.filter(p => results[p.key]).length;
  const skdTot = bankLen('SKD_TWK') + bankLen('SKD_TIU') + bankLen('SKD_TKP');

  /* --- sesi ujian yang belum selesai --- */
  const resume = exam && !exam.finished
    ? `<div role="alert" class="mb-4 flex items-center gap-3 rounded-2xl border-2 border-b-4 border-amber-300 bg-amber-50 p-3.5">
         <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400 text-white">${icon('clock', 'h-6 w-6')}</span>
         <div class="min-w-0 flex-1"><div class="text-sm font-extrabold text-slate-900">Ujianmu belum selesai</div><div class="truncate text-xs text-slate-600">${esc(exam.pack.title)} · ${exam.answers.filter(a => a !== null).length} dari ${exam.qs.length} soal terjawab</div></div>
         <a href="#/ujian" class="btn btn-warning btn-sm shrink-0 rounded-xl font-bold">Lanjut</a>
       </div>` : '';

  /* --- kartu "Lanjutkan belajar" --- */
  let cont = '';
  if (cur) {
    const steps = lessonSteps(cur.t), done = lessonDone(cur.t);
    const ni = steps.findIndex((_, i) => !done[i]);
    const nextTitle = ni >= 0 && steps[ni] ? steps[ni].title : '';
    const started = cur.p.done > 0;
    cont = `
    <section class="lx-hero mb-4" aria-label="${label}">
      <div class="flex items-center justify-between gap-2">
        <span class="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-white">${label}</span>
        <span class="text-xs font-bold text-white/90">${cur.t.group === 'SKB' ? 'SKB' : esc(cur.t.group)}</span>
      </div>
      <h2 class="mt-2.5 line-clamp-2 text-lg font-extrabold leading-snug">${esc(cur.t.title)}</h2>
      ${nextTitle ? `<p class="mt-1 break-words text-xs text-white/85">Selanjutnya: ${esc(nextTitle)}</p>` : ''}
      <div class="mt-3 flex items-center gap-3">
        <div class="lx-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${cur.p.pct}"><div class="lx-fill" style="width:${Math.max(cur.p.pct, 4)}%"></div></div>
        <span class="shrink-0 text-xs font-bold text-white">${cur.p.done} dari ${cur.p.total}</span>
      </div>
      <a href="#/materi/${cur.t.id}" class="lx-btn lx-green mt-4">${icon('play', 'h-5 w-5')} ${started ? 'Lanjutkan' : 'Mulai'}</a>
    </section>`;
  } else if (MATERI.length) {
    cont = `
    <section class="mb-4 rounded-3xl border-2 border-b-4 border-green-300 bg-green-50 p-4 text-center">
      <span class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white">${icon('trophy', 'h-7 w-7')}</span>
      <h2 class="mt-2 text-base font-extrabold text-slate-900">Semua materi sudah selesai!</h2>
      <p class="mt-0.5 text-xs text-slate-600">Hebat. Sekarang uji dirimu lewat tryout SKD.</p>
      <a href="#/skd" class="lx-btn lx-green mt-3">Coba tryout SKD</a>
    </section>`;
  }

  /* --- ringkasan progres --- */
  const stat = (ic, tone, val, text) => `
    <div class="min-w-0 rounded-2xl border-2 border-b-4 border-slate-200 bg-white px-2 py-3 text-center">
      <span class="mx-auto grid h-8 w-8 place-items-center rounded-xl ${tone}">${icon(ic, 'h-4 w-4')}</span>
      <div class="mt-1.5 text-xl font-extrabold leading-none text-slate-900">${val}</div>
      <div class="mt-1 text-[0.68rem] font-semibold leading-tight text-slate-500">${text}</div>
    </div>`;
  const stats = `
    <section class="mb-5" aria-label="Progres belajar">
      <h2 class="mb-2 px-0.5 text-sm font-extrabold text-slate-800">Progres belajarmu</h2>
      <div class="grid grid-cols-3 gap-2.5">
        ${stat('book', 'bg-teal-100 text-teal-700', `${topicDone}<span class="text-sm font-bold text-slate-400">/${MATERI.length}</span>`, 'Materi selesai')}
        ${stat('check', 'bg-sky-100 text-sky-700', `${packDone}<span class="text-sm font-bold text-slate-400">/${allPacks.length}</span>`, 'Paket soal selesai')}
        ${stat('bolt', 'bg-amber-100 text-amber-700', fmtNum(seen.size), 'Soal dikerjakan')}
      </div>
    </section>`;

  /* --- jalan pintas --- */
  const go3 = (href, tone, ic, title, text, chip) => `
    <a href="${href}" class="flex items-center gap-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-white p-3.5 transition active:translate-y-[2px] active:border-b-2 sm:hover:border-slate-300">
      <span class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white ${tone}">${icon(ic, 'h-7 w-7')}</span>
      <span class="min-w-0 flex-1">
        <span class="block text-base font-extrabold leading-tight text-slate-900">${title}</span>
        <span class="mt-0.5 block text-xs leading-snug text-slate-600">${text}</span>
        <span class="mt-1.5 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[0.68rem] font-bold text-slate-600">${chip}</span>
      </span>
      ${icon('arrowR', 'h-5 w-5 shrink-0 text-slate-400')}
    </a>`;

  shell('', `
    <div class="mx-auto w-full max-w-xl pb-2 pt-1 sm:pt-8">
      <header class="mb-4 px-0.5">
        <h1 class="text-2xl font-extrabold leading-tight tracking-tight text-neutral">${sapa}!</h1>
        <p class="mt-0.5 text-sm text-slate-600">Yuk, belajar sedikit demi sedikit untuk CPNS.</p>
      </header>
      ${resume}
      ${cont}
      ${stats}
      <section aria-label="Pilih jalur belajar">
        <h2 class="mb-2 px-0.5 text-sm font-extrabold text-slate-800">Mau belajar apa?</h2>
        <div class="grid gap-3">
          ${go3('#/materi', 'bg-teal-500', 'book', 'Materi', 'Baca ringkasan dan trik cepat, langkah demi langkah.', `${MATERI.length} topik`)}
          ${go3('#/skd', 'bg-sky-500', 'clipboard', 'SKD', 'Latihan soal TWK, TIU, dan TKP, atau tryout lengkap.', `${fmtNum(skdTot)} soal · ${packsFor('SKD_FULL').length} tryout`)}
          ${go3('#/skb', 'bg-indigo-500', 'briefcase', 'SKB', 'Latihan soal sesuai bidang formasi yang kamu pilih.', `${fmtNum(skbKeys().reduce((a, k) => a + bankLen(k), 0))} soal · ${skbKeys().length} bidang`)}
        </div>
      </section>
    </div>
  `);
}

/* ---------- kartu paket ---------- */
function packCard(p) {
  const r = results[p.key];
  const max = r ? (r.best.max || p.questions.length * 5) : p.questions.length * 5;
  const pct = r ? Math.max(0, Math.min(100, Math.round((r.best.score / max) * 100))) : 0;
  const tones = { FULL: 'bg-blue-600', TWK: 'bg-sky-500', TIU: 'bg-violet-500', TKP: 'bg-emerald-500', SKB: 'bg-indigo-500' };
  const tone = tones[p.kind === 'FULL' ? 'FULL' : p.kind === 'SKB' ? 'SKB' : String(p.group).replace('SKD_', '')] || tones.SKB;
  const chipCls = 'inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700';
  return `
  <div class="min-w-0 rounded-3xl border-2 border-b-4 ${r ? 'border-green-300' : 'border-slate-200'} bg-white p-4">
    <div class="flex items-center gap-3.5">
      <span class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl font-black text-white ${tone}">${p.no}</span>
      <div class="min-w-0 flex-1">
        <h3 class="text-lg font-extrabold leading-snug text-slate-900">${esc(p.title)}</h3>
        <p class="mt-0.5 text-xs leading-snug text-slate-500">${esc(p.compose)}</p>
      </div>
    </div>
    <div class="mt-3 flex flex-wrap gap-2">
      <span class="${chipCls}">${icon('grid', 'h-3.5 w-3.5 text-primary')} ${p.questions.length} soal</span>
      <span class="${chipCls}">${icon('clock', 'h-3.5 w-3.5 text-amber-500')} ${p.minutes} menit</span>
      ${r
        ? `<span class="inline-flex items-center gap-1 rounded-full bg-green-500 px-2.5 py-1 text-xs font-extrabold text-white">${icon('tick', 'h-3.5 w-3.5')} Selesai</span>`
        : `<span class="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-400">Belum dikerjakan</span>`}
    </div>
    ${r ? `<div class="mt-3.5 rounded-2xl bg-slate-50 p-3">
        <div class="mb-1.5 flex items-baseline justify-between gap-2 text-xs"><span class="font-semibold text-slate-500">Skor terbaik</span><b class="text-sm text-slate-900">${r.best.score} dari ${max} · ${pct}%</b></div>
        <div class="lx-track !h-2.5"><div class="lx-fill" style="width:${pct}%"></div></div>
        <div class="mt-1.5 text-[0.7rem] text-slate-400">Sudah dikerjakan ${r.attempts} kali</div>
      </div>` : ''}
    <button type="button" class="lx-btn ${r ? 'lx-blue' : 'lx-green'} mt-4" onclick="App.openStart('${p.key}')">${r ? 'Ulangi paket' : 'Mulai paket'}</button>
  </div>`;
}

/* ---------- SKD ---------- */
function renderSkd() {
  const tabs = Object.entries(SKD_GROUPS).map(([id, g]) => {
    const on = ui.skdTab === id;
    return `<button type="button" role="tab" aria-selected="${on}" class="min-h-11 rounded-2xl border-2 border-b-4 px-1 text-xs font-extrabold transition active:translate-y-[2px] active:border-b-2 sm:px-4 sm:text-sm ${on ? 'border-primary bg-sky-50 text-primary' : 'border-slate-200 bg-white text-slate-600'}" onclick="App.setSkdTab('${id}')"><span class="sm:hidden">${g.short}</span><span class="hidden sm:inline">${g.label}</span></button>`;
  }).join('');
  const g = SKD_GROUPS[ui.skdTab];
  const packs = packsFor(ui.skdTab);
  const nDone = packs.filter(p => results[p.key]).length;
  const pct = packs.length ? Math.round(nDone / packs.length * 100) : 0;
  shell('skd', `
    ${breadcrumb([['#/', 'Beranda'], [null, 'SKD']])}
    ${pageHead('Seleksi Kompetensi Dasar (SKD)', 'Pilih jenis latihan, lalu pilih paket soal. Isi tiap paket selalu sama, jadi kamu bisa melihat kemajuanmu.')}
    <div role="tablist" class="mb-3.5 grid w-full grid-cols-4 gap-2 sm:inline-grid sm:w-auto">${tabs}</div>
    <div class="mb-4 rounded-2xl bg-white/80 p-3.5 ring-1 ring-slate-200">
      <p class="text-xs leading-relaxed text-slate-600 sm:text-sm">${g.desc}</p>
      ${packs.length ? `<div class="mt-2.5 flex items-center gap-3"><div class="lx-track !h-2.5"><div class="lx-fill" style="width:${pct}%"></div></div><span class="shrink-0 text-xs font-bold text-slate-600">${nDone} dari ${packs.length} paket</span></div>` : ''}
    </div>
    ${packs.length
      ? `<div class="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">${packs.map(packCard).join('')}</div>`
      : `<div class="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">Belum ada soal di bagian ini. Tambahkan lewat tombol menu di pojok kanan atas (Kelola Database).</div>`}
  `);
}

/* ---------- SKB ---------- */
function renderSkb(key) {
  if (!key || !BANK[key]) {
    const icons = { SKB_PRAKOM: 'db', SKB_KESEHATAN: 'check', SKB_HUKUM: 'clipboard', SKB_KEUANGAN: 'trophy', SKB_PENDIDIKAN: 'book' };
    const cards = skbKeys().map(k => {
      const m = skbMeta(k), n = bankLen(k), ps = packsFor(k), np = ps.length;
      const done = ps.filter(p => results[p.key]).length;
      const all = np > 0 && done === np;
      const pct = np ? Math.round(done / np * 100) : 0;
      return `
      <a href="#/skb/${k}" class="flex min-w-0 items-center gap-3.5 rounded-3xl border-2 border-b-4 ${all ? 'border-green-300 bg-green-50/60' : 'border-slate-200 bg-white'} p-4 transition active:translate-y-[2px] active:border-b-2 sm:hover:border-indigo-300">
        <span class="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-indigo-500 text-white">${icon(icons[k] || 'briefcase', 'h-8 w-8')}${all ? `<span class="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-green-500 ring-2 ring-white">${icon('tick', 'h-3.5 w-3.5')}</span>` : ''}</span>
        <span class="min-w-0 flex-1">
          <span class="block text-base font-extrabold leading-snug text-slate-900">${esc(m.name)}</span>
          <span class="mt-0.5 line-clamp-2 block text-xs leading-snug text-slate-500">${esc(m.desc)}</span>
          <span class="mt-2 flex items-center gap-2.5"><span class="lx-track !h-2.5"><span class="lx-fill block" style="width:${pct}%"></span></span><span class="shrink-0 text-[0.7rem] font-bold text-slate-600">${done}/${np} paket</span></span>
          <span class="mt-1 block text-[0.7rem] font-semibold text-indigo-600">${fmtNum(n)} soal</span>
        </span>
        ${icon('arrowR', 'h-5 w-5 shrink-0 text-slate-400')}
      </a>`;
    }).join('');
    shell('skb', `
      ${breadcrumb([['#/', 'Beranda'], [null, 'SKB']])}
      ${pageHead('Seleksi Kompetensi Bidang (SKB)', 'Pilih bidang formasimu, lalu pilih paket latihan di dalamnya.')}
      ${cards ? `<div class="grid grid-cols-[minmax(0,1fr)] gap-3.5 sm:grid-cols-2 lg:grid-cols-3">${cards}</div>`
        : `<div class="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">Belum ada soal SKB. Tambahkan lewat tombol menu di pojok kanan atas (Kelola Database).</div>`}`);
    return;
  }
  const m = skbMeta(key), packs = packsFor(key);
  const nDone = packs.filter(p => results[p.key]).length;
  const pct = packs.length ? Math.round(nDone / packs.length * 100) : 0;
  shell('skb', `
    ${breadcrumb([['#/', 'Beranda'], ['#/skb', 'SKB'], [null, esc(m.short)]])}

    <!-- Mobile App-Bar -->
    <div class="sticky top-0 z-20 -mx-3 mb-3 flex items-center justify-between border-b border-slate-200/80 bg-white/95 px-3.5 py-2.5 backdrop-blur-md sm:hidden">
      <a href="#/skb" class="inline-flex min-h-10 items-center gap-1.5 rounded-full border-2 border-slate-200 bg-white px-3.5 text-xs font-bold text-slate-700 active:scale-95">
        ${icon('back', 'h-3.5 w-3.5 text-primary')}
        <span>Semua bidang</span>
      </a>
      <span class="rounded-full bg-indigo-100 px-3 py-1 text-xs font-extrabold text-indigo-800">${esc(m.short)}</span>
    </div>

    ${pageHead('SKB ' + esc(m.name), esc(m.desc) + ` Setiap paket berisi ${SKB_SIZE} soal.`,
      `<a href="#/skb" class="hidden sm:inline-flex btn btn-ghost btn-sm gap-2 text-slate-700 hover:bg-slate-100 rounded-xl">${icon('back', 'h-4 w-4 text-primary')} Ganti bidang</a>`)}
    ${packs.length ? `<div class="mb-4 flex items-center gap-3 rounded-2xl bg-white/80 p-3.5 ring-1 ring-slate-200"><div class="lx-track !h-2.5"><div class="lx-fill" style="width:${pct}%"></div></div><span class="shrink-0 text-xs font-bold text-slate-600">${nDone} dari ${packs.length} paket</span></div>` : ''}
    <div class="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">${packs.map(packCard).join('')}</div>
    ${(() => { const t = MATERI.find(x => x.buckets && x.buckets.length === 1 && x.buckets[0] === key && !x.subs); return t
      ? `<div class="mt-6 flex items-center gap-3 rounded-3xl border-2 border-b-4 border-teal-200 bg-teal-50 p-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-500 text-white">${icon('book', 'h-6 w-6')}</span><div class="min-w-0 flex-1"><div class="text-sm font-extrabold text-slate-900">Belum hafal kisi-kisinya?</div><div class="mt-0.5 text-xs text-slate-600">Baca ringkasan materi ${esc(m.short)} dulu sebelum mulai paket.</div></div><a class="btn btn-accent btn-sm shrink-0 rounded-xl font-bold text-white" href="#/materi/${t.id}">Buka</a></div>` : ''; })()}
  `);
}

/* ---------- MATERI ---------- */
function renderMateri(id) {
  const topic = id && id !== 'skd' && id !== 'skb' && MATERI.find(t => t.id === id);
  if (topic) return renderMateriDetail(topic);

  const isSkd = ui.materiTab !== 'SKB';

  const skdChipsData = [
    { id: 'ALL', name: 'Semua SKD' },
    { id: 'TWK', name: 'TWK (Wawasan Kebangsaan)' },
    { id: 'TIU', name: 'TIU (Intelegensia Umum)' },
    { id: 'TKP', name: 'TKP (Karakteristik Pribadi)' }
  ];

  const skbChipsData = [
    { id: 'ALL', name: 'Semua Bidang SKB' },
    { id: 'PRAKOM', name: 'Pranata Komputer' },
    { id: 'KESEHATAN', name: 'Tenaga Kesehatan' },
    { id: 'HUKUM', name: 'Hukum & Kebijakan' },
    { id: 'KEUANGAN', name: 'Keuangan & Pajak' },
    { id: 'PENDIDIKAN', name: 'Pendidikan & Guru' }
  ];

  const chipCls = on => `shrink-0 snap-start whitespace-nowrap rounded-full border-2 border-b-4 px-4 py-2 text-xs font-extrabold transition active:translate-y-[2px] active:border-b-2 ${on ? 'border-primary bg-sky-50 text-primary' : 'border-slate-200 bg-white text-slate-600'}`;
  const chips = isSkd
    ? skdChipsData.map(g => `<button type="button" ${ui.materiGroup === g.id ? 'data-on="1"' : ''} class="${chipCls(ui.materiGroup === g.id)}" onclick="App.setMateriGroup('${g.id}')">${g.name}</button>`).join('')
    : skbChipsData.map(g => `<button type="button" ${ui.materiSkbGroup === g.id ? 'data-on="1"' : ''} class="${chipCls(ui.materiSkbGroup === g.id)}" onclick="App.setMateriSkbGroup('${g.id}')">${g.name}</button>`).join('');

  let list = [];
  if (isSkd) {
    list = MATERI.filter(t => t.group !== 'SKB' && (ui.materiGroup === 'ALL' || t.group === ui.materiGroup));
  } else {
    list = MATERI.filter(t => t.group === 'SKB' && (ui.materiSkbGroup === 'ALL' || t.skbCategory === ui.materiSkbGroup || (!t.skbCategory && ui.materiSkbGroup === 'ALL')));
  }

  const skbIcons = { PRAKOM: 'db', KESEHATAN: 'check', HUKUM: 'clipboard', KEUANGAN: 'trophy', PENDIDIKAN: 'book' };
  const groupIcons = { TWK: 'flag', TIU: 'puzzle', TKP: 'bulb' };
  let nDone = 0;
  const cards = list.map(t => {
    const st = GROUP_STYLE[t.group] || GROUP_STYLE.SKB;
    const n = materiPool(t).length;
    const pr = lessonProgress(t);
    const fin = pr.total > 0 && pr.pct === 100;
    if (fin) nDone++;
    const badgeLabel = t.group === 'SKB' ? (t.skbCategory ? `SKB ${t.skbCategory}` : 'SKB') : t.group;
    const ic = t.group === 'SKB' ? (skbIcons[t.skbCategory] || 'briefcase') : (groupIcons[t.group] || 'book');
    return `
    <a href="#/materi/${t.id}" class="flex min-w-0 items-center gap-3.5 rounded-3xl border-2 border-b-4 p-3.5 transition active:translate-y-[2px] active:border-b-2 sm:hover:border-primary/40 ${fin ? 'border-green-300 bg-green-50/60' : 'border-slate-200 bg-white'}">
      <span class="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white ${st.bar}">${icon(ic, 'h-7 w-7')}${fin ? `<span class="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-green-500 ring-2 ring-white">${icon('tick', 'h-3.5 w-3.5')}</span>` : ''}</span>
      <span class="min-w-0 flex-1">
        <span class="flex flex-wrap items-center gap-1.5">
          <span class="rounded-full px-2 py-0.5 text-[0.65rem] font-extrabold ${st.badge}">${badgeLabel}</span>
          ${fin ? `<span class="inline-flex items-center gap-1 rounded-full bg-green-500 px-2 py-0.5 text-[0.65rem] font-extrabold text-white">${icon('tick', 'h-3 w-3')} Selesai</span>` : ''}
        </span>
        <span class="mt-1 block text-[0.95rem] font-extrabold leading-snug text-slate-900">${esc(t.title)}</span>
        <span class="mt-2 flex items-center gap-2.5"><span class="lx-track !h-2.5" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pr.pct}"><span class="lx-fill block" style="width:${pr.pct}%"></span></span><span class="shrink-0 text-[0.7rem] font-bold text-slate-600">${pr.done}/${pr.total} langkah</span></span>
        <span class="mt-1 block text-[0.7rem] text-slate-500">${n} soal latihan</span>
      </span>
      ${icon('arrowR', 'h-5 w-5 shrink-0 text-slate-400')}
    </a>`;
  }).join('');

  const sum = list.length
    ? `<div class="mb-3.5 flex items-center gap-3 rounded-2xl bg-white/80 p-3.5 ring-1 ring-slate-200"><div class="min-w-0 flex-1"><div class="text-xs font-bold text-slate-800">${nDone} dari ${list.length} topik selesai</div><div class="lx-track mt-1.5 !h-2.5"><div class="lx-fill" style="width:${Math.round(nDone / list.length * 100)}%"></div></div></div></div>`
    : '';

  shell('materi', `
    ${breadcrumb([['#/', 'Beranda'], [null, isSkd ? 'Materi SKD' : 'Materi SKB']])}
    ${pageHead('Materi & Trik Cepat CPNS', isSkd ? 'Ringkasan inti TWK, TIU, dan TKP, lengkap dengan trik cepat.' : 'Ringkasan inti materi per bidang formasi teknis.')}

    <!-- 2 Pilihan Utama: MATERI SKD vs MATERI SKB (Segmented Switcher Modern) -->
    <div class="mb-3.5 grid grid-cols-2 gap-2">
      <button type="button" onclick="App.setMateriTab('SKD')" class="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-b-4 px-2 py-2 transition active:translate-y-[2px] active:border-b-2 ${isSkd ? 'border-primary bg-sky-50 text-primary' : 'border-slate-200 bg-white text-slate-600'}">
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isSkd ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}">${icon('book', 'h-4 w-4')}</span>
        <span class="min-w-0 text-left leading-tight"><span class="block text-sm font-extrabold">Materi SKD</span><span class="block text-[0.68rem] font-semibold opacity-75">TWK · TIU · TKP</span></span>
      </button>
      <button type="button" onclick="App.setMateriTab('SKB')" class="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-b-4 px-2 py-2 transition active:translate-y-[2px] active:border-b-2 ${!isSkd ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-200 bg-white text-slate-600'}">
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg ${!isSkd ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'}">${icon('briefcase', 'h-4 w-4')}</span>
        <span class="min-w-0 text-left leading-tight"><span class="block text-sm font-extrabold">Materi SKB</span><span class="block text-[0.68rem] font-semibold opacity-75">Per bidang formasi</span></span>
      </button>
    </div>

    <!-- Sub-filter Chip (bisa digeser ke samping) -->
    <div id="materi-chips" class="no-scrollbar relative -mx-3 mb-3.5 flex snap-x gap-2 overflow-x-auto px-3 pb-1.5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">${chips}</div>
    ${sum}
    ${cards
      ? `<div class="grid grid-cols-[minmax(0,1fr)] gap-3.5 sm:grid-cols-2 lg:grid-cols-3">${cards}</div>`
      : `<div class="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">Belum ada materi di bagian ini.</div>`}
  `);
  const cb = $('#materi-chips'), on = cb && cb.querySelector('[data-on]');
  if (on) cb.scrollLeft = Math.max(0, on.offsetLeft - (cb.clientWidth - on.offsetWidth) / 2);
}

function optionsStatic(q) {
  return q.options.map((o, i) => {
    const best = q.scores[i] === 5;
    const mid = q.category === 'TKP' && q.scores[i] > 0 && !best;
    return `<div class="opt ${best ? 'is-correct' : mid ? 'is-mid' : ''} !cursor-default"><span class="letter">${LETTERS[i]}</span><span class="pt-1 text-sm">${esc(o.replace(/^[A-E]\.\s*/, ''))}</span>${q.category === 'TKP' ? `<span class="badge badge-sm ml-auto shrink-0">${q.scores[i]} poin</span>` : ''}</div>`;
  }).join('');
}
/* Tabel materi: di HP tabel 3 kolom+ ditampilkan sebagai kartu bertumpuk (label di atas tiap nilai),
   tabel 2 kolom tetap tabel biasa tetapi bisa digeser bila perlu. Di layar lebar tampil normal. */
function wrapTables(html) {
  return String(html).replace(/<table\b[\s\S]*?<\/table>/g, tb => {
    const heads = [...tb.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    if (heads.length < 3) return `<div class="tbl-wrap">${tb}</div>`;
    const labelled = tb.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/g, row => {
      if (!/<td\b/.test(row)) return row;
      let i = 0;
      return row.replace(/<td\b([^>]*)>/g, (m, attrs) => `<td${attrs} data-label="${esc(heads[i++] || '')}">`);
    });
    return `<div class="tbl-wrap tbl-cards">${labelled}</div>`;
  });
}
/* ==========================================================================
   MATERI — jalur belajar ala Duolingo (BAGIAN 1)
   Alur: pilih langkah di jalur -> baca materi -> jawab soal -> lulus -> langkah berikutnya terbuka.
   Progres tersimpan di localStorage (cpns_lesson_v1).
   ========================================================================== */
const LESSON_KEY = 'cpns_lesson_v1';
const LESSON_QS = 3;                         // soal per langkah
let lessonStore = store.get(LESSON_KEY, {});
let lesson = null;                           // sesi langkah yang sedang dibuka

const lessonDone = t => (lessonStore[t.id] && lessonStore[t.id].done) || {};
function lessonMarkDone(t, i) {
  const e = lessonStore[t.id] || (lessonStore[t.id] = { done: {} });
  e.done[i] = 1; e.at = Date.now();
  store.set(LESSON_KEY, lessonStore);
}
function lessonSteps(t) {
  const steps = (t.sections || []).map(s => ({ kind: 'sec', title: s.title, html: s.html, quiz: s.quiz }));
  if ((t.tips || []).length) steps.push({ kind: 'tips', title: 'Cara Menjawab Cepat', tips: t.tips, quiz: t.tipsQuiz });
  return steps;
}
/* ringkasan progres topik: dipakai juga oleh halaman daftar / beranda */
function lessonProgress(t) {
  const total = lessonSteps(t).length, d = lessonDone(t);
  let done = 0; for (let i = 0; i < total; i++) if (d[i]) done++;
  return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
}

/* --- pemilihan soal per langkah: yang paling nyambung dengan isi langkah, tanpa duplikat --- */
const LX_STOP = new Set(['yang', 'dengan', 'dalam', 'untuk', 'pada', 'dari', 'adalah', 'atau', 'oleh', 'akan', 'juga', 'sebagai', 'karena', 'tidak', 'dapat', 'bahwa', 'tersebut', 'antara', 'secara', 'merupakan', 'kepada', 'sebuah', 'seorang', 'sedang', 'harus', 'lebih', 'paling', 'manakah', 'berikut', 'berdasarkan', 'seluruh', 'setiap']);
function lxTokens(s) {
  const out = new Set();
  String(s || '').toLowerCase().replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/[^a-z0-9]+/)
    .forEach(w => { if (w.length >= 5 && !LX_STOP.has(w)) out.add(w); });
  return out;
}
const lxQTok = new Map();
function lxQuestionTokens(q) {
  let s = lxQTok.get(q.id);
  if (!s) { s = lxTokens([q.q, q.options.join(' '), q.trick, q.explanation].join(' ')); lxQTok.set(q.id, s); }
  return s;
}
const lxPlans = {};
function lessonPlan(t) {
  const pool = materiPool(t).filter(q => q && q.q && q.options && q.options.length >= 2 && typeof q.ans === 'number' && q.q.length <= 650);
  const key = t.id + ':' + pool.length;
  if (lxPlans[key]) return lxPlans[key];
  const steps = lessonSteps(t), used = new Set(), usedKey = new Set(), plan = [];
  const dupKey = q => (q.trick || q.q).slice(0, 70).toLowerCase();
  steps.forEach(st => {
    const want = lxTokens(st.kind === 'tips' ? (st.tips || []).join(' ') : st.title + ' ' + st.html);
    const ranked = pool.map(q => {
      let sc = 0; lxQuestionTokens(q).forEach(w => { if (want.has(w)) sc++; });
      return { q, sc: sc + ((q.trick || q.explanation) ? 0.5 : 0), h: hashStr(q.id + '|' + t.id) };
    }).sort((a, b) => (b.sc - a.sc) || (a.h - b.h));
    const pick = [];
    (st.quiz || []).slice(0, LESSON_QS).forEach((q, n) => {      // soal khusus langkah ini (opsional, di js/materi.js)
      const c = Object.assign({}, q);
      c.id = c.id || `LQ-${t.id}-${steps.indexOf(st)}-${n + 1}`;
      c.options = c.options || []; c.ans = typeof c.ans === 'number' ? c.ans : 0;
      c.trick = c.trick || ''; c.explanation = c.explanation || '';
      pick.push(c); used.add(c.id);
    });
    for (const r of ranked) {                                   // pass 1: tanpa soal kembar
      if (pick.length >= LESSON_QS) break;
      if (used.has(r.q.id) || usedKey.has(dupKey(r.q))) continue;
      pick.push(r.q); used.add(r.q.id); usedKey.add(dupKey(r.q));
    }
    for (const r of ranked) {                                   // pass 2: isi kekurangan
      if (pick.length >= LESSON_QS) break;
      if (used.has(r.q.id)) continue;
      pick.push(r.q); used.add(r.q.id);
    }
    plan.push(pick);
  });
  lxPlans[key] = plan;
  return plan;
}

/* ---------- halaman jalur (detail materi) ---------- */
function renderMateriDetail(t) {
  const isSkb = t.group === 'SKB';
  const st = GROUP_STYLE[t.group] || GROUP_STYLE.SKB;
  const list = MATERI.filter(x => (isSkb ? x.group === 'SKB' : x.group !== 'SKB'));
  const idx = list.indexOf(t), prev = list[idx - 1], next = list[idx + 1];
  const backUrl = isSkb ? '#/materi/skb' : '#/materi/skd';
  const backLabel = isSkb ? 'Materi SKB' : 'Materi SKD';
  const badgeLabel = isSkb ? (t.skbCategory ? `SKB ${t.skbCategory}` : 'SKB') : t.group;

  const steps = lessonSteps(t), done = lessonDone(t), prog = lessonProgress(t);
  const nowIdx = steps.findIndex((_, i) => !done[i]);           // -1 = semua selesai
  const allDone = nowIdx === -1;
  const pool = materiPool(t);
  const XS = [0, 40, 66, 40, 0, -40, -66, -40];

  const nodes = steps.map((s, i) => {
    const isDone = !!done[i], isNow = i === nowIdx, locked = !isDone && !isNow;
    const cls = isDone ? 'done' : isNow ? 'now' : 'lock';
    const ic = isDone ? 'tick' : locked ? 'lock' : (s.kind === 'tips' ? 'bolt' : 'book');
    return `
      <div class="lx-step" style="--x:${XS[i % XS.length]}px">
        <button type="button" class="lx-node ${cls}" onclick="App.lessonOpen('${t.id}',${i})" aria-label="Langkah ${i + 1}: ${esc(s.title)}${isDone ? ' (selesai)' : locked ? ' (terkunci)' : ''}">
          ${isNow ? '<span class="lx-bubble">MULAI</span>' : ''}${icon(ic, 'h-8 w-8')}
        </button>
        <div class="lx-label ${locked ? 'dim' : ''}">${esc(s.title)}</div>
      </div>`;
  }).join('');

  const finalNode = `
      <div class="lx-step" style="--x:${XS[steps.length % XS.length]}px">
        <button type="button" class="lx-node final ${allDone ? 'now' : 'lock'}" onclick="App.lessonFinal('${t.id}')" aria-label="Tantangan akhir${allDone ? '' : ' (terkunci)'}">
          ${allDone ? '<span class="lx-bubble">COBA!</span>' : ''}${icon(allDone ? 'trophy' : 'lock', 'h-8 w-8')}
        </button>
        <div class="lx-label ${allDone ? '' : 'dim'}">Tantangan Akhir${pool.length ? ` · ${Math.min(10, pool.length)} soal` : ''}</div>
      </div>`;

  const cta = allDone
    ? `<button class="lx-btn lx-gold mt-4" onclick="App.lessonFinal('${t.id}')">${icon('trophy', 'h-5 w-5')} Mulai Tantangan Akhir</button>`
    : `<button class="lx-btn lx-green mt-4" onclick="App.lessonOpen('${t.id}',${nowIdx})">${icon('play', 'h-5 w-5')} ${prog.done ? 'Lanjutkan' : 'Mulai Belajar'}</button>`;

  const navBtn = (x, dir) => x
    ? `<a href="#/materi/${x.id}" class="btn btn-ghost h-auto min-h-12 w-full min-w-0 flex-nowrap justify-${dir === 'p' ? 'start' : 'end'} gap-2 rounded-xl border border-slate-200/90 bg-white py-2 normal-case text-slate-700">
         ${dir === 'p' ? icon('back', 'h-4 w-4 shrink-0') : ''}<span class="min-w-0 text-left"><span class="block text-[0.65rem] font-bold uppercase text-slate-400">${dir === 'p' ? 'Sebelumnya' : 'Berikutnya'}</span><span class="block break-words text-sm font-bold leading-snug">${esc(x.title)}</span></span>${dir === 'n' ? icon('arrowR', 'h-4 w-4 shrink-0') : ''}
       </a>` : '';

  shell('materi', `
    ${breadcrumb([['#/', 'Beranda'], [backUrl, backLabel], [null, esc(t.title)]])}
    <div class="mx-auto max-w-xl">
      <!-- Mobile App-Bar (Khusus Layar Kecil, Anti-Tumpang Tindih) -->
      <a href="${backUrl}" class="mt-3 inline-flex items-center gap-1.5 min-h-10 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-xs ring-1 ring-slate-200 active:scale-95 sm:hidden">${icon('back', 'h-3.5 w-3.5 text-primary')}<span>${backLabel}</span></a>
      <div class="lx-hero mt-3">
        <div class="flex items-center justify-between gap-2">
          <span class="badge border-0 bg-white/20 font-bold text-white">${badgeLabel}</span>
          <span class="text-xs font-bold text-white/90">${prog.done}/${prog.total} langkah</span>
        </div>
        <h1 class="mt-2 text-xl font-extrabold leading-snug">${esc(t.title)}</h1>
        <p class="mt-1 text-xs leading-relaxed text-white/85">${esc(t.summary)}</p>
        <div class="lx-track mt-3" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${prog.pct}"><div class="lx-fill" style="width:${Math.max(prog.pct, 4)}%"></div></div>
        ${cta}
      </div>
      <div class="lx-path" aria-label="Jalur belajar">${nodes}${finalNode}</div>
      <div class="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">${navBtn(prev, 'p')}${navBtn(next, 'n')}</div>
    </div>
  `);
}

/* ---------- layar satu langkah: baca -> soal -> hasil ---------- */
function lessonOpen(id, i) {
  const t = MATERI.find(x => x.id === id); if (!t) return;
  const steps = lessonSteps(t); if (!steps[i]) return;
  if (i > 0 && !lessonDone(t)[i - 1]) { toast('Selesaikan langkah sebelumnya dulu ya 🔒'); return; }
  const qs = (lessonPlan(t)[i] || []).slice();
  lesson = { t, steps, i, phase: 'read', queue: qs, total: qs.length, solved: 0, picked: null, checked: false, ok: false, wrongIds: new Set() };
  document.documentElement.classList.add('lx-open');
  let el = $('#lesson');
  if (!el) {
    el = document.createElement('div'); el.id = 'lesson'; el.className = 'lx-overlay';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); document.body.appendChild(el);
  }
  try { if (!(history.state && history.state.lx)) history.pushState({ lx: 1 }, ''); } catch (e) { /* abaikan */ }
  lessonPaint();
}
function lessonClose(fromPop) {
  if (!lesson) return;
  const t = lesson.t; lesson = null;
  const el = $('#lesson'); if (el) el.remove();
  document.documentElement.classList.remove('lx-open');
  if (!fromPop) { try { if (history.state && history.state.lx) history.back(); } catch (e) { /* abaikan */ } }
  if (location.hash.indexOf('#/materi/' + t.id) === 0) { const y = window.scrollY; renderMateriDetail(t); window.scrollTo(0, y); }
}
window.addEventListener('popstate', () => { if (lesson) lessonClose(true); });

function lessonPaint() {
  const el = $('#lesson'); if (!el || !lesson) return;
  const L = lesson, st = L.steps[L.i];
  const oldBody = el.querySelector('.lx-body'), keep = oldBody ? oldBody.scrollTop : 0, keepKey = el.dataset.k;
  const key = L.phase + ':' + (L.queue[0] ? L.queue[0].id : '') + ':' + L.i;
  const pct = L.phase === 'result' ? 100 : L.phase === 'quiz' ? Math.round(L.solved / Math.max(L.total, 1) * 100) : 0;
  const top = `
    <div class="lx-top">
      <button type="button" class="lx-x" onclick="App.lessonClose()" aria-label="Tutup">${icon('x', 'h-6 w-6')}</button>
      <div class="lx-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div class="lx-fill" style="width:${Math.max(pct, L.phase === 'result' ? 100 : 5)}%"></div></div>
    </div>`;
  let main = '', foot = '';

  if (L.phase === 'read') {
    const body = st.kind === 'tips'
      ? `<div class="lx-card tips"><ol class="space-y-3">${st.tips.map((x, n) => `<li class="flex items-start gap-3 text-[0.95rem] leading-relaxed"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-400 text-xs font-black text-amber-950">${n + 1}</span><span class="min-w-0 flex-1">${x}</span></li>`).join('')}</ol></div>`
      : `<div class="materi-body">${wrapTables(st.html)}</div>`;
    main = `<div class="lx-wrap">
        <span class="lx-chip ${st.kind === 'tips' ? 'tips' : ''}">${icon(st.kind === 'tips' ? 'bolt' : 'book', 'h-4 w-4')} Langkah ${L.i + 1} dari ${L.steps.length}</span>
        <h2 class="lx-title">${esc(st.title)}</h2>${body}</div>`;
    foot = `<div class="lx-foot"><div class="lx-foot-in"><button class="lx-btn lx-blue" onclick="App.lessonStartQuiz()">${L.total ? 'Lanjut ke soal' : 'Selesai membaca'} ${icon('arrowR', 'h-5 w-5')}</button></div></div>`;
  } else if (L.phase === 'quiz') {
    const q = L.queue[0];
    const opts = q.options.map((o, k) => {
      let c = '';
      if (L.checked) c = k === q.ans ? 'is-ok' : (k === L.picked ? 'is-bad' : '');
      else if (k === L.picked) c = 'is-pick';
      return `<button type="button" class="lx-opt ${c}" ${L.checked ? 'disabled' : ''} onclick="App.lessonPick(${k})"><span class="lx-k">${LETTERS[k]}</span><span class="lx-t">${esc(String(o).replace(/^[A-E]\.\s*/, ''))}</span></button>`;
    }).join('');
    main = `<div class="lx-wrap">
        <span class="lx-chip">${icon('puzzle', 'h-4 w-4')} Soal ${Math.min(L.solved + 1, L.total)} dari ${L.total}</span>
        <div class="mt-3 mb-4 whitespace-pre-line text-[1.02rem] font-bold leading-relaxed text-slate-900">${esc(q.q)}</div>
        ${q.svg ? `<div class="q-svg mb-4 overflow-auto rounded-xl bg-base-200/60 p-3">${q.svg}</div>` : ''}
        <div role="group" aria-label="Pilihan jawaban">${opts}</div></div>`;
    if (!L.checked) {
      foot = `<div class="lx-foot"><div class="lx-foot-in"><button class="lx-btn lx-green" ${L.picked === null ? 'disabled' : ''} onclick="App.lessonCheck()">Periksa</button></div></div>`;
    } else {
      foot = `<div class="lx-sheet ${L.ok ? 'ok' : 'bad'}" role="status" aria-live="polite"><div class="lx-sheet-in">
          <h3>${L.ok ? '🎉 Benar!' : '😅 Belum tepat'}</h3>
          <div class="lx-why">${!L.ok ? `<div><b>Jawaban benar:</b> ${LETTERS[q.ans]}. ${esc(String(q.options[q.ans]).replace(/^[A-E]\.\s*/, ''))}</div>` : ''}${q.explanation ? `<div class="mt-1.5"><b>Pembahasan:</b> ${esc(q.explanation)}</div>` : ''}${q.trick && !String(q.explanation || '').includes(q.trick) ? `<div class="mt-1.5"><b>Trik:</b> ${esc(q.trick)}</div>` : ''}</div>
          <button class="lx-btn ${L.ok ? 'lx-green' : 'lx-red'} mt-3" onclick="App.lessonNext()">${L.ok ? 'Lanjut' : 'Mengerti, lanjut'}</button>
        </div></div>`;
    }
  } else {
    const nextI = L.i + 1, hasNext = nextI < L.steps.length;
    const first = L.total - L.wrongIds.size;
    const conf = Array.from({ length: 22 }, (_, n) => `<i style="left:${(n * 4.6 + (n % 3) * 1.3).toFixed(1)}%;background:${['#fde047', '#16a34a', '#0b7fd4', '#e0364f', '#a78bfa'][n % 5]};animation-delay:${((n % 7) * 0.12).toFixed(2)}s"></i>`).join('');
    main = `<div class="lx-wrap lx-done"><div class="lx-conf" aria-hidden="true">${conf}</div>
        <div class="lx-medal">${hasNext ? '⭐' : '🏆'}</div>
        <h2 class="mt-5 text-2xl font-black text-neutral">${hasNext ? 'Langkah selesai!' : 'Semua langkah selesai!'}</h2>
        <p class="mt-1 text-sm text-slate-600">${esc(L.t.title)}</p>
        ${L.total ? `<div class="mt-5 flex justify-center gap-3"><div class="lx-stat"><b>${first}/${L.total}</b><span>Benar langsung</span></div><div class="lx-stat"><b>${L.i + 1}/${L.steps.length}</b><span>Langkah</span></div></div>` : ''}
        <p class="mt-5 text-sm text-slate-600">${hasNext ? 'Langkah berikutnya sudah terbuka. Terus semangat!' : 'Saatnya uji dirimu lewat Tantangan Akhir.'}</p></div>`;
    foot = `<div class="lx-foot"><div class="lx-foot-in">
        ${hasNext ? `<button class="lx-btn lx-green" onclick="App.lessonOpen('${L.t.id}',${nextI})">Langkah berikutnya ${icon('arrowR', 'h-5 w-5')}</button>`
                  : `<button class="lx-btn lx-gold" onclick="App.lessonFinalFromDone()">${icon('trophy', 'h-5 w-5')} Mulai Tantangan Akhir</button>`}
        <button class="lx-btn lx-ghost" onclick="App.lessonClose()">Kembali ke jalur</button></div></div>`;
  }

  el.dataset.k = key;
  el.innerHTML = `${top}<div class="lx-body">${main}</div>${foot}`;
  const nb = el.querySelector('.lx-body');
  if (nb) nb.scrollTop = (keepKey === key) ? keep : 0;
}
const lessonApi = {
  lessonOpen,
  lessonClose: () => lessonClose(false),
  lessonStartQuiz() {
    if (!lesson) return;
    if (!lesson.total) { lessonMarkDone(lesson.t, lesson.i); lesson.phase = 'result'; }
    else lesson.phase = 'quiz';
    lessonPaint();
  },
  lessonPick(k) { if (!lesson || lesson.checked) return; lesson.picked = k; lessonPaint(); },
  lessonCheck() {
    if (!lesson || lesson.checked || lesson.picked === null) return;
    const q = lesson.queue[0];
    lesson.ok = lesson.picked === q.ans; lesson.checked = true;
    markSeen(q.id);
    if (!lesson.ok) lesson.wrongIds.add(q.id);
    lessonPaint();
  },
  lessonNext() {
    if (!lesson || !lesson.checked) return;
    if (lesson.ok) { lesson.queue.shift(); lesson.solved++; }
    else lesson.queue.push(lesson.queue.shift());           // salah -> diulang di akhir sampai benar
    lesson.picked = null; lesson.checked = false; lesson.ok = false;
    if (!lesson.queue.length) { lessonMarkDone(lesson.t, lesson.i); lesson.phase = 'result'; }
    lessonPaint();
  },
  lessonFinal(id) {
    const t = MATERI.find(x => x.id === id); if (!t) return;
    const prog = lessonProgress(t);
    if (prog.done < prog.total) { toast('Selesaikan semua langkah dulu untuk membuka Tantangan Akhir 🔒'); return; }
    App.startMateriPractice(id);
  },
  lessonFinalFromDone() { if (!lesson) return; const id = lesson.t.id; lessonClose(false); setTimeout(() => App.lessonFinal(id), 60); }
};

/* ==========================================================================
   MESIN UJIAN
   ========================================================================== */
function startExam(pack, opts = {}) {
  const qs = pack.questions.map((q, i) => Object.assign({}, q, { no: i + 1 }));
  exam = {
    pack, qs,
    answers: new Array(qs.length).fill(null),
    doubts: new Array(qs.length).fill(false),
    idx: 0, filter: 'ALL',
    remaining: pack.minutes ? pack.minutes * 60 : null,
    elapsed: 0, paused: false, finished: false,
    instant: opts.instant !== false
  };
  if (!timerHandle) timerHandle = setInterval(tick, 1000);
  go('#/ujian');
}
function tick() {
  if (!exam || exam.finished || exam.paused || location.hash !== '#/ujian') return;
  exam.elapsed++;
  if (exam.remaining != null) {
    exam.remaining--;
    paintTimer();
    if (exam.remaining <= 0) { finishExam(true); return; }
  } else paintTimer();
}
function paintTimer() {
  const el = $('#x-timer');
  if (!el || !exam) return;
  const sec = exam.remaining != null ? exam.remaining : exam.elapsed;
  el.innerHTML = `${icon('clock', 'h-4 w-4')}<span class="font-mono">${fmtClock(Math.max(0, sec))}</span>`;
  const urgent = exam.remaining != null && exam.remaining <= 600 && !exam.finished;
  el.className = 'badge badge-lg shrink-0 gap-2 border-0 ' + (exam.finished ? 'badge-ghost' : urgent ? 'badge-error text-white' : 'bg-base-200 text-neutral');
}
const showKey = () => exam.finished || exam.instant;

function renderExam() {
  if (!exam) { go('#/'); return; }
  $('#app').innerHTML = `
  <div class="flex min-h-dvh flex-col">
    <header class="app-top sticky top-0 z-30 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center gap-1.5 px-2 py-2 sm:gap-2 sm:px-3 [&_#x-timer]:h-10 [&_#x-timer]:rounded-xl [&_#x-timer]:px-3 [&_#x-timer]:text-base [&_#x-timer]:font-extrabold [&_#x-timer]:tabular-nums">
        <button class="btn btn-ghost btn-sm gap-1 px-2.5 sm:px-3" onclick="App.leaveExam()" aria-label="Keluar dari ujian">${icon('back', 'h-5 w-5 sm:h-4 sm:w-4')}<span class="hidden sm:inline">Keluar</span></button>
        <div class="min-w-0 flex-1">
          <div class="break-words text-sm font-bold leading-tight text-neutral sm:text-base">${esc(exam.pack.title)}</div>
          <div class="break-words text-xs leading-tight text-base-content/60" id="x-sub"></div>
        </div>
        <div id="x-timer" class="badge badge-lg shrink-0 gap-2 border-0 bg-base-200" role="timer" aria-label="Sisa waktu"></div>
        <button class="btn btn-ghost btn-sm btn-square shrink-0" onclick="App.openMenu()" aria-label="Menu ujian">${icon('dots', 'h-5 w-5')}</button>
        <button class="btn btn-primary btn-sm hidden sm:inline-flex" id="x-finish" onclick="App.finish()"></button>
      </div>
      <div id="x-scores" class="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-2 pb-2 sm:px-3"></div>
    </header>
    <main class="mx-auto grid w-full max-w-7xl flex-1 grid-cols-[minmax(0,1fr)] gap-4 px-2 pb-0 pt-3 sm:px-3 lg:grid-cols-[minmax(0,1fr)_330px] lg:py-4">
      <section id="x-q" class="card relative min-h-[calc(100dvh-7.5rem)] overflow-clip border border-base-300 bg-base-100 shadow-sm max-lg:rounded-b-none lg:min-h-0"></section>
      <aside class="hidden lg:block"><div id="x-side" class="card sticky top-28 border border-base-300 bg-base-100 shadow-sm"></div></aside>
    </main>
  </div>`;
  paintAll();
}
function paintAll() { paintTimer(); paintScores(); paintQuestion(); paintSide(); }

/* skor di header */
function scoreSummary() {
  const out = {};
  exam.qs.forEach((q, i) => {
    const c = ['TWK', 'TIU', 'TKP'].includes(q.category) ? q.category : 'ALL';
    const o = out[c] = out[c] || { score: 0, max: 0, n: 0, ans: 0, ok: 0 };
    o.n++; o.max += 5;
    const a = exam.answers[i];
    if (a !== null) { o.ans++; o.score += q.scores[a]; if (q.scores[a] === 5) o.ok++; }
  });
  return out;
}
function chip(label, val, of, pass) {
  return `<div class="flex shrink-0 items-center gap-2 rounded-xl border px-3 py-1 ${pass ? 'border-success bg-success/10' : 'border-base-300 bg-base-100'}">
    <span class="text-xs font-semibold text-base-content/60">${label}</span><b class="text-neutral">${val}</b>${of != null ? `<span class="text-xs text-base-content/50">/${of}</span>` : ''}</div>`;
}
function paintScores() {
  const box = $('#x-scores'); if (!box) return;
  const s = scoreSummary();
  const ans = exam.answers.filter(a => a !== null).length;
  let html = '';
  if (exam.pack.kind === 'FULL') {
    html += chip('TWK', s.TWK.score, PASSING.TWK, s.TWK.score >= PASSING.TWK);
    html += chip('TIU', s.TIU.score, PASSING.TIU, s.TIU.score >= PASSING.TIU);
    html += chip('TKP', s.TKP.score, PASSING.TKP, s.TKP.score >= PASSING.TKP);
  }
  const tot = Object.values(s).reduce((a, b) => a + b.score, 0);
  html += chip('Skor', tot, exam.qs.length * 5, false);
  html += chip('Terjawab', ans, exam.qs.length, false);
  box.innerHTML = html;
  $('#x-sub').textContent = (exam.finished ? 'Mode tinjau pembahasan' : exam.remaining == null ? 'Tanpa batas waktu' : exam.pack.compose);
  const fin = $('#x-finish');
  if (fin) { fin.textContent = exam.finished ? 'Lihat hasil' : 'Selesai'; fin.onclick = exam.finished ? () => openResult() : () => App.finish(); }
}

/* panel soal */
function feedbackHtml(q, chosen) {
  const key = LETTERS[q.ans];
  let cls, head;
  if (chosen === null) { cls = 'bg-base-200 text-neutral'; head = `Tidak dijawab — kunci: opsi ${key}`; }
  else {
    const pts = q.scores[chosen];
    if (q.category === 'TKP') {
      cls = pts === 5 ? 'bg-success text-white' : 'bg-warning text-warning-content';
      head = pts === 5 ? `Pilihan tepat — opsi ${LETTERS[chosen]} bernilai +5` : `Belum maksimal — opsi ${LETTERS[chosen]} bernilai +${pts} (terbaik: opsi ${key})`;
    } else {
      cls = pts === 5 ? 'bg-success text-white' : 'bg-error text-white';
      head = pts === 5 ? `Jawaban benar — opsi ${LETTERS[chosen]} (+5)` : `Kurang tepat — kamu memilih ${LETTERS[chosen]}, kunci: opsi ${key}`;
    }
  }
  const mt = materiForQuestion(q);
  return `
  <div class="overflow-hidden rounded-2xl border border-base-300 fade-in">
    <div class="break-words px-4 py-3 text-[0.95rem] font-bold leading-snug ${cls}" role="status">${head}</div>
    <div class="grid gap-3 bg-base-200/50 p-3 text-[0.95rem] sm:p-4 md:grid-cols-2">
      <div class="min-w-0 rounded-xl bg-amber-50 p-3.5 ring-1 ring-amber-200"><div class="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-amber-900">${icon('bolt', 'h-4 w-4')} Cara cepat</div><div class="break-words leading-relaxed">${esc(q.trick) || '—'}</div></div>
      <div class="min-w-0 rounded-xl bg-base-100 p-3.5 ring-1 ring-base-300"><div class="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-primary">${icon('bulb', 'h-4 w-4')} Pembahasan</div><div class="break-words leading-relaxed">${esc(q.explanation) || '—'}</div></div>
    </div>
    ${mt ? `<div class="border-t border-base-300 bg-base-100 px-4 py-1.5"><a class="link link-primary inline-flex min-h-[2.75rem] items-center break-words text-sm font-semibold" href="#/materi/${mt.id}" onclick="App.leaveToMateri()">Pelajari materi: ${esc(mt.title)} →</a></div>` : ''}
  </div>`;
}
/* tombol bilah aksi: ikon + label pendek di mobile, label lengkap di desktop */
const xb = (cls, ic, short, long, onclick, dis) =>
  `<button class="xbtn ${cls}" onclick="${onclick}" ${dis ? 'disabled' : ''}>${icon(ic, 'h-5 w-5 lg:h-4 lg:w-4')}<span class="lg:hidden">${short}</span><span class="hidden lg:inline">${long}</span></button>`;
function paintQuestion() {
  const box = $('#x-q'); if (!box || !exam) return;
  const q = exam.qs[exam.idx], chosen = exam.answers[exam.idx];
  const key = showKey();
  const cs = catStyle(q.category);
  const catLabel = ['TWK', 'TIU', 'TKP'].includes(q.category) ? q.category : 'SKB';
  const rule = q.category === 'TKP' ? 'Skor opsi 1–5 • kosong 0' : 'Benar +5 • salah/kosong 0';
  const opts = q.options.map((o, i) => {
    let cls = '';
    if (chosen !== null && key) {
      if (i === q.ans) cls = 'is-correct';
      else if (i === chosen) cls = q.category === 'TKP' ? 'is-mid' : 'is-wrong';
    } else if (chosen === null && exam.finished && i === q.ans) cls = 'is-correct';
    else if (chosen === i) cls = 'is-selected';
    let tag = '';
    if (key && (chosen !== null || exam.finished)) {
      const v = q.scores[i];
      tag = q.category === 'TKP'
        ? `<span class="badge badge-sm ml-auto shrink-0 ${v === 5 ? 'badge-success text-white' : 'badge-ghost'}">+${v}</span>`
        : (v === 5 ? `<span class="badge badge-success badge-sm ml-auto shrink-0 text-white">Benar</span>` : '');
    }
    return `<button class="opt ${cls} max-lg:min-h-[3.75rem] max-lg:items-center max-lg:py-3" ${exam.finished ? 'disabled' : ''} onclick="App.pick(${i})" aria-pressed="${chosen === i}">
      <span class="letter max-lg:!h-9 max-lg:!w-9 max-lg:!text-base">${LETTERS[i]}</span><span class="min-w-0 flex-1 text-base leading-snug lg:pt-1 lg:text-[0.95rem]">${esc(o.replace(/^[A-E]\.\s*/, ''))}</span>${tag}</button>`;
  }).join('');
  const last = exam.idx === exam.qs.length - 1;
  const nAns = exam.answers.filter(a => a !== null).length;
  const pctAns = Math.round((nAns / exam.qs.length) * 100);
  /* label bilah aksi sedikit lebih besar di HP */
  const nb = (cls, ...a) => xb('max-lg:!min-h-[3.5rem] max-lg:!text-[.75rem] ' + cls, ...a);

  box.innerHTML = `
    <div class="h-1.5 w-full bg-base-200" role="progressbar" aria-label="Soal terjawab" aria-valuemin="0" aria-valuemax="${exam.qs.length}" aria-valuenow="${nAns}"><div class="h-full bg-primary transition-[width] duration-300" style="width:${pctAns}%"></div></div>
    <div class="flex flex-1 flex-col gap-4 p-4 sm:p-6">
      <div class="flex flex-wrap items-center gap-2">
        <span class="badge badge-primary badge-lg font-bold">Soal ${q.no} / ${exam.qs.length}</span>
        <span class="badge badge-lg border-0 font-semibold ${cs.badge}">${catLabel}</span>
        <span class="badge badge-ghost h-auto min-h-[1.25rem] max-w-full whitespace-normal break-words py-1 text-left">${esc(q.sub)}</span>
        <span class="w-full text-xs text-base-content/60 sm:ml-auto sm:w-auto sm:text-base-content/50">${rule}</span>
      </div>
      <div class="whitespace-pre-line break-words text-[1.08rem] font-medium leading-relaxed text-neutral sm:text-[1.05rem]">${esc(q.q)}</div>
      ${q.svg ? `<div class="q-svg overflow-auto rounded-xl bg-base-200/60 p-3">${q.svg}</div>` : ''}
      <div class="space-y-3" role="group" aria-label="Pilihan jawaban">${opts}</div>
      ${key && (chosen !== null || exam.finished) ? feedbackHtml(q, chosen) : ''}
    </div>
    <div class="xnav">
      ${nb('', 'back', 'Sebelum', 'Sebelumnya', 'App.prev()', exam.idx === 0)}
      ${exam.finished ? '' : nb(exam.doubts[exam.idx] ? 'warn' : '', 'flag', 'Ragu', 'Ragu', 'App.toggleDoubt()')}
      ${exam.finished ? '' : nb('', 'trash', 'Hapus', 'Hapus', 'App.clearAnswer()', chosen === null)}
      ${nb('hide-lg', 'grid', 'Nomor', 'Nomor', 'App.openNums()')}
      <span class="xhint">Pintasan: A–E • ← → • R (ragu)</span>
      ${last
        ? nb('pri', 'check', exam.finished ? 'Hasil' : 'Selesai', exam.finished ? 'Lihat hasil' : 'Selesai', exam.finished ? 'App.openResult()' : 'App.finish()')
        : nb('pri', 'arrowR', 'Lanjut', 'Selanjutnya', 'App.next()')}
    </div>
    ${exam.paused && !exam.finished ? `
    <div class="absolute inset-0 z-30 grid place-items-center bg-base-100/95 backdrop-blur-md">
      <div class="text-center"><div class="mb-3 text-lg font-bold text-neutral">Ujian dijeda</div>
      <button class="btn btn-primary gap-2" onclick="App.togglePause()">${icon('play', 'h-4 w-4')} Lanjutkan</button></div>
    </div>` : ''}`;
}

/* panel nomor soal */
function matchFilter(i) {
  const q = exam.qs[i], a = exam.answers[i], f = exam.filter;
  if (['TWK', 'TIU', 'TKP'].includes(f)) return q.category === f;
  if (f === 'UNANSWERED') return a === null;
  if (f === 'WRONG') return a !== null && q.scores[a] < 5;
  if (f === 'DOUBT') return exam.doubts[i];
  return true;
}
function sideHtml() {
  const multiCat = new Set(exam.qs.map(q => q.category)).size > 1 && exam.qs.every(q => ['TWK', 'TIU', 'TKP'].includes(q.category));
  const fbtn = (id, label) => `<button class="btn btn-xs max-lg:!h-10 max-lg:!min-h-10 max-lg:!px-3.5 max-lg:!text-sm ${exam.filter === id ? 'btn-primary' : 'btn-ghost bg-base-200'}" aria-pressed="${exam.filter === id}" onclick="App.setFilter('${id}')">${label}</button>`;
  let shown = 0;
  const cells = exam.qs.map((q, i) => {
    if (!matchFilter(i)) return '';
    shown++;
    const a = exam.answers[i];
    let c = '';
    if (exam.doubts[i] && !exam.finished) c = 'dbt';
    else if (a !== null) c = showKey() ? (q.scores[a] === 5 ? 'ok' : q.category === 'TKP' ? 'mid' : 'no') : 'ans';
    else if (exam.finished) c = '';
    return `<button class="num ${c} ${i === exam.idx ? 'curr' : ''}" onclick="App.goto(${i})" aria-label="Soal ${q.no}">${q.no}</button>`;
  }).join('');
  const ans = exam.answers.filter(a => a !== null).length;
  const right = exam.qs.filter((q, i) => exam.answers[i] !== null && q.scores[exam.answers[i]] === 5).length;
  return `
    <div class="card-body gap-3 p-4">
      <div class="flex items-center justify-between gap-2"><h3 class="font-bold text-neutral">Nomor soal</h3><span class="text-xs text-base-content/60">${shown} soal</span></div>
      <div class="flex flex-wrap gap-1.5 max-lg:gap-2">
        ${fbtn('ALL', 'Semua')}${multiCat ? fbtn('TWK', 'TWK') + fbtn('TIU', 'TIU') + fbtn('TKP', 'TKP') : ''}
        ${fbtn('UNANSWERED', 'Belum')}${fbtn('WRONG', 'Kurang tepat')}${exam.finished ? '' : fbtn('DOUBT', 'Ragu')}
      </div>
      <div class="grid max-h-[38dvh] grid-cols-5 gap-2 overflow-y-auto overscroll-contain p-1 sm:grid-cols-8 lg:max-h-[46vh] lg:grid-cols-6 lg:gap-1.5">${cells || '<div class="col-span-full py-4 text-center text-sm text-base-content/50">Tidak ada soal.</div>'}</div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-base-300 pt-3 text-xs leading-tight text-base-content/70">
        <span class="flex items-center"><i class="mr-1.5 inline-block h-3 w-3 shrink-0 rounded bg-success"></i>Benar / skor 5</span>
        <span class="flex items-center"><i class="mr-1.5 inline-block h-3 w-3 shrink-0 rounded bg-error"></i>Salah</span>
        <span class="flex items-center"><i class="mr-1.5 inline-block h-3 w-3 shrink-0 rounded" style="background:#fde7b0"></i>TKP skor 1–4</span>
        <span class="flex items-center"><i class="mr-1.5 inline-block h-3 w-3 shrink-0 rounded bg-warning"></i>Ragu-ragu</span>
      </div>
      <div class="flex justify-between gap-2 text-sm font-semibold text-neutral"><span>Terjawab ${ans}/${exam.qs.length}</span><span>Skor 5: ${right}</span></div>
    </div>`;
}
function paintSide() {
  const s = $('#x-side'); if (s) s.innerHTML = sideHtml();
  const d = $('#dlg-nums');
  if (d && d.open) d.querySelector('.modal-box').innerHTML = numsDialogInner();
}
const numsDialogInner = () => `<div class="mb-1 flex items-center justify-between gap-2 px-1"><span class="text-xs font-semibold text-base-content/60">Ketuk nomor untuk pindah soal</span><button class="btn btn-ghost btn-sm btn-circle shrink-0" onclick="$('#dlg-nums').close()" aria-label="Tutup">${icon('x', 'h-5 w-5')}</button></div><div class="card">${sideHtml()}</div>`;

/* hasil */
function computeResult() {
  const sum = scoreSummary();
  const total = Object.values(sum).reduce((a, b) => a + b.score, 0);
  const max = exam.qs.length * 5;
  const answered = exam.answers.filter(a => a !== null).length;
  const correct = exam.qs.filter((q, i) => exam.answers[i] !== null && q.scores[exam.answers[i]] === 5).length;
  const bySub = {};
  exam.qs.forEach((q, i) => {
    const o = bySub[q.sub] = bySub[q.sub] || { q, n: 0, score: 0, max: 0 };
    o.n++; o.max += 5;
    if (exam.answers[i] !== null) o.score += q.scores[exam.answers[i]];
  });
  return { sum, total, max, answered, correct, wrong: answered - correct, empty: exam.qs.length - answered, bySub };
}
function openResult() {
  if (!exam) return;
  const r = computeResult();
  const pct = Math.round((r.total / r.max) * 100);
  const full = exam.pack.kind === 'FULL';
  const bars = Object.entries(r.sum).map(([c, o]) => {
    const pg = full ? PASSING[c] : null;
    const p = Math.round((o.score / o.max) * 100);
    const ok = pg != null ? o.score >= pg : p >= 70;
    const lbl = c === 'ALL' ? 'Skor' : c;
    return `<div class="rounded-xl border ${ok ? 'border-success/50 bg-success/5' : 'border-base-300 bg-base-100'} p-3">
      <div class="flex items-baseline justify-between gap-2"><span class="font-bold text-neutral">${lbl}</span>
        <span class="text-xl font-extrabold text-neutral">${o.score}</span></div>
      <div class="text-xs text-base-content/60">${pg != null ? 'Passing grade ' + pg + ' • maks ' + o.max : 'Maks ' + o.max}</div>
      <progress class="progress ${ok ? 'progress-success' : 'progress-primary'} mt-2 h-2 w-full" value="${p}" max="100"></progress>
      ${pg != null ? `<div class="mt-1 text-xs ${ok ? 'text-success' : 'text-error'} font-semibold">${ok ? 'Memenuhi passing grade' : `Kurang ${pg - o.score} poin dari passing grade`}</div>` : ''}
    </div>`;
  }).join('');

  let verdict = '';
  if (full) {
    const fails = ['TWK', 'TIU', 'TKP'].filter(c => r.sum[c].score < PASSING[c]);
    verdict = fails.length
      ? `<div role="alert" class="alert border-warning/50 bg-warning/15 text-sm"><span><b>Belum memenuhi passing grade</b> pada ${fails.join(', ')}. Fokuskan latihan dan materi pada bagian tersebut.</span></div>`
      : `<div role="alert" class="alert border-success/40 bg-success/10 text-sm">${icon('trophy', 'h-5 w-5 text-success')}<span><b>Selamat!</b> Skor kamu memenuhi passing grade di ketiga bagian.</span></div>`;
  } else {
    const msg = pct >= 80 ? 'Sangat baik — pertahankan dan coba paket berikutnya.' : pct >= 60 ? 'Cukup baik — pelajari pembahasan soal yang kurang tepat.' : 'Masih perlu latihan — baca materi terkait lalu ulangi paket ini.';
    verdict = `<div role="alert" class="alert border-primary/30 bg-primary/10 text-sm"><span>${msg}</span></div>`;
  }

  const weak = Object.values(r.bySub).filter(o => o.score / o.max < 0.8)
    .sort((a, b) => a.score / a.max - b.score / b.max).slice(0, 5);
  const weakHtml = weak.length ? `
    <div><h4 class="mb-2 font-bold text-neutral">Topik yang perlu diperkuat</h4>
    <ul class="space-y-1.5">${weak.map(o => {
      const m = materiForQuestion(o.q);
      return `<li class="flex items-center justify-between gap-3 rounded-xl bg-base-200/70 px-3 py-2 text-sm"><span class="min-w-0 break-words leading-snug">${esc(o.q.sub)} <span class="whitespace-nowrap text-xs text-base-content/60">(${Math.round(o.score / o.max * 100)}%)</span></span>
        ${m ? `<a class="btn btn-accent btn-sm shrink-0" href="#/materi/${m.id}" onclick="App.leaveToMateri()">Pelajari</a>` : ''}</li>`;
    }).join('')}</ul></div>` : '';

  const d = $('#dlg-result');
  d.innerHTML = `
  <div class="modal-box max-w-2xl p-0">
    <div class="bg-gradient-to-br from-primary to-secondary p-5 text-primary-content sm:p-6">
      <div class="flex items-center gap-4 sm:gap-5">
        <div class="radial-progress shrink-0 bg-white/15 font-extrabold text-white" style="--value:${pct};--size:5.75rem;--thickness:.55rem" role="img" aria-label="${pct} persen">${pct}%</div>
        <div class="min-w-0"><div class="break-words text-sm leading-snug text-white/90">${esc(exam.pack.title)}</div>
          <div class="text-4xl font-extrabold leading-tight">${r.total} <span class="text-lg font-semibold text-white/85">/ ${r.max}</span></div>
          <div class="text-sm text-white/90">Waktu terpakai ${fmtClock(exam.elapsed)}</div></div>
      </div>
    </div>
    <div class="safe-pad space-y-4">
      ${verdict}
      <div class="grid gap-3 ${Object.keys(r.sum).length > 1 ? 'sm:grid-cols-3' : ''}">${bars}</div>
      <div class="grid grid-cols-3 divide-x divide-base-300 rounded-2xl border border-base-300 bg-base-100 text-center">
        <div class="px-1.5 py-3"><div class="text-xs leading-tight text-base-content/70">Benar / skor 5</div><div class="text-2xl font-extrabold text-success">${r.correct}</div></div>
        <div class="px-1.5 py-3"><div class="text-xs leading-tight text-base-content/70">Kurang tepat</div><div class="text-2xl font-extrabold text-error">${r.wrong}</div></div>
        <div class="px-1.5 py-3"><div class="text-xs leading-tight text-base-content/70">Kosong</div><div class="text-2xl font-extrabold text-neutral">${r.empty}</div></div>
      </div>
      ${weakHtml}
      <div class="modal-action act-stack mt-2">
        <button class="btn btn-ghost max-sm:h-12" onclick="App.exitToList()">Daftar paket</button>
        <button class="btn btn-outline max-sm:h-12" onclick="App.restartExam(true)">${icon('refresh', 'h-4 w-4')} Ulangi</button>
        <button class="btn btn-primary max-sm:h-12" onclick="$('#dlg-result').close()">Tinjau pembahasan</button>
      </div>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
  if (!d.open) d.showModal();
}
function finishExam() {
  if (!exam || exam.finished) return;
  exam.finished = true; exam.paused = false;
  if (!exam.pack.noSave) {
    const r = computeResult();
    const rec = results[exam.pack.key] || { attempts: 0, best: { score: -1, max: r.max } };
    rec.attempts++;
    const cur = { score: r.total, max: r.max, date: Date.now() };
    rec.last = cur;
    if (r.total > rec.best.score) rec.best = cur;
    results[exam.pack.key] = rec;
    store.set('cpns_results_v3', results);
  }
  paintAll();
  openResult();
}

/* ---------- dialog: konfirmasi ---------- */
function ask(o) {
  return new Promise(res => {
    const d = $('#dlg-confirm');
    $('#confirm-title').textContent = o.title; $('#confirm-text').textContent = o.text;
    const ok = $('#confirm-ok'), ca = $('#confirm-cancel');
    ok.textContent = o.ok || 'Ya'; ok.className = 'btn ' + (o.danger ? 'btn-error text-white' : 'btn-primary');
    let done = false;
    const fin = v => { if (done) return; done = true; d.close(); res(v); };
    ok.onclick = () => fin(true); ca.onclick = () => fin(false); d.onclose = () => fin(false);
    d.showModal();
  });
}
function toast(msg) {
  let t = $('#toast'); if (t) t.remove();
  t = document.createElement('div'); t.id = 'toast'; t.className = 'toast toast-center toast-bottom z-50 mb-16 md:mb-0';
  t.innerHTML = `<div class="alert alert-info py-2 text-sm shadow-lg"><span>${esc(msg)}</span></div>`;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2600);
}

/* ---------- dialog: mulai paket ---------- */
function openStart(key) {
  const p = findPack(key); if (!p) return;
  const d = $('#dlg-start');
  const rules = p.kind === 'CAT' && p.group === 'SKD_TKP' || p.kind === 'FULL'
    ? 'TWK &amp; TIU: benar +5, salah 0. TKP: tiap opsi bernilai 1–5. Soal kosong bernilai 0.'
    : 'Benar +5, salah atau kosong 0.';
  d.innerHTML = `
  <div class="modal-box max-w-md">
    <h3 class="text-xl font-extrabold text-neutral">${esc(p.title)}</h3>
    <p class="mt-1 text-sm text-base-content/70">${esc(p.compose)}</p>
    <div class="mt-4 grid grid-cols-3 divide-x divide-base-300 rounded-2xl border border-base-300 text-center">
      <div class="px-2 py-2.5"><div class="text-xs text-base-content/60">Jumlah soal</div><div class="text-xl font-extrabold text-primary">${p.questions.length}</div></div>
      <div class="px-2 py-2.5"><div class="text-xs text-base-content/60">Waktu</div><div class="text-xl font-extrabold text-primary">${p.minutes}<span class="text-sm font-semibold"> mnt</span></div></div>
      <div class="px-2 py-2.5"><div class="text-xs text-base-content/60">Skor maks</div><div class="text-xl font-extrabold text-primary">${p.questions.length * 5}</div></div>
    </div>
    <ul class="mt-4 space-y-1.5 text-sm text-base-content/80">
      <li class="flex gap-2">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>${rules}</span></li>
      <li class="flex gap-2">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>Waktu bisa dijeda dari menu titik tiga (⋮) di pojok kanan atas.</span></li>
      <li class="hidden gap-2 md:flex">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>Pintasan keyboard: A–E untuk memilih, ← → untuk pindah soal.</span></li>
    </ul>
    <label class="mt-4 flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-base-200 px-4 py-3">
      <span><span class="block text-sm font-semibold text-neutral">Bahas instan</span><span class="text-xs text-base-content/60">Kunci &amp; pembahasan langsung tampil setelah menjawab. Matikan untuk suasana ujian sebenarnya.</span></span>
      <input type="checkbox" id="st-instant" class="toggle toggle-primary shrink-0" ${store.get('cpns_instant', true) ? 'checked' : ''}>
    </label>
    <div class="modal-action act-stack">
      <button class="btn btn-ghost" onclick="$('#dlg-start').close()">Batal</button>
      <button class="btn btn-primary" onclick="App.confirmStart('${p.key}')">Mulai ujian ${icon('arrowR', 'h-4 w-4')}</button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
  d.showModal();
}

/* ---------- dialog: database ---------- */
function dbRows() {
  const row = (k, name, jenis) => `<tr><td class="font-semibold">${name}</td><td><span class="badge badge-ghost badge-sm">${jenis}</span></td><td class="text-right font-bold">${fmtNum(bankLen(k))}</td></tr>`;
  const rows = [row('SKD_TWK', 'TWK', 'SKD'), row('SKD_TIU', 'TIU', 'SKD'), row('SKD_TKP', 'TKP', 'SKD')]
    .concat(Object.keys(BANK).filter(k => k.startsWith('SKB_')).map(k => row(k, skbMeta(k).name, 'SKB')));
  return rows.join('') + `<tr class="bg-base-200 font-bold"><td colspan="2">Total</td><td class="text-right">${fmtNum(bankTotal())}</td></tr>`;
}
function openDb() {
  const d = $('#dlg-db');
  d.innerHTML = `
  <div class="modal-box max-w-2xl">
    <div class="flex items-start justify-between gap-3">
      <div><h3 class="text-xl font-extrabold text-neutral">Database soal</h3>
      <p class="text-sm text-base-content/70">Tambahkan file soal (<code>.js</code> / <code>.json</code>) atau taruh di folder <code>db/skd/</code> dan <code>db/skb/</code>.</p></div>
      <button class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-db').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button>
    </div>
    <div class="mt-4 grid gap-3 sm:grid-cols-2">
      <label class="flex cursor-pointer flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-base-300 bg-base-200/50 p-4 text-center transition hover:border-primary">
        ${icon('upload', 'h-6 w-6 text-primary')}<span class="text-sm font-semibold">Pilih file</span><span class="text-xs text-base-content/60">Boleh banyak file</span>
        <input type="file" multiple accept=".js,.json" class="hidden" onchange="App.uploadDb(this.files)">
      </label>
      <label class="hidden cursor-pointer flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-base-300 bg-base-200/50 p-4 text-center transition hover:border-primary sm:flex">
        ${icon('db', 'h-6 w-6 text-primary')}<span class="text-sm font-semibold">Pilih folder db/</span><span class="text-xs text-base-content/60">Muat seluruh isi folder</span>
        <input type="file" webkitdirectory directory multiple class="hidden" onchange="App.uploadDb(this.files)">
      </label>
    </div>
    ${window.Auth ? window.Auth.menuHTML() : ''}
    <div id="db-status" class="alert alert-success mt-3 hidden py-2 text-sm"></div>
    <div class="mt-4 overflow-x-auto rounded-xl border border-base-300">
      <table class="table table-sm"><thead><tr><th>Bank soal</th><th>Jenis</th><th class="text-right">Soal</th></tr></thead><tbody id="db-tbody">${dbRows()}</tbody></table>
    </div>
    <div class="modal-action flex-wrap justify-between">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-ghost btn-sm" onclick="App.downloadTemplate()">Unduh template</button>
        <button class="btn btn-ghost btn-sm text-error" onclick="App.resetProgress()">Reset progres &amp; skor</button>
      </div>
      <button class="btn btn-primary btn-sm" onclick="$('#dlg-db').close()">Selesai</button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
  d.showModal();
}

/* ==========================================================================
   AKSI PUBLIK (dipanggil dari atribut onclick)
   ========================================================================== */
const App = {
  openMenu() {
    if (!exam) return;
    const d = $('#dlg-menu');
    const row = (ic, label, act) => `<button class="flex w-full items-center gap-3 rounded-xl px-3 py-3.5 text-left text-[0.95rem] font-semibold active:bg-base-200" onclick="${act}">${icon(ic, 'h-5 w-5 shrink-0 text-neutral')}<span>${label}</span></button>`;
    const timed = !exam.finished && exam.remaining != null;
    d.innerHTML = `
    <div class="modal-box max-w-sm">
      <div class="mb-2 flex items-center justify-between">
        <h3 class="text-lg font-extrabold text-neutral">Menu ujian</h3>
        <button class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-menu').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button>
      </div>
      <div class="divide-y divide-base-200">
        ${timed ? row(exam.paused ? 'play' : 'pause', exam.paused ? 'Lanjutkan waktu' : 'Jeda waktu', "$('#dlg-menu').close();App.togglePause()") : ''}
        ${exam.finished ? '' : `<label class="flex cursor-pointer items-center justify-between gap-3 px-3 py-3.5"><span class="flex items-center gap-3 text-[0.95rem] font-semibold">${icon('bulb', 'h-5 w-5 shrink-0 text-neutral')}Bahas instan</span><input type="checkbox" class="toggle toggle-primary shrink-0" ${exam.instant ? 'checked' : ''} onchange="App.toggleInstant(this.checked)"></label>`}
        ${row('refresh', 'Mulai ulang paket', "$('#dlg-menu').close();App.restartExam()")}
      </div>
      <button class="btn btn-primary mt-4 w-full" onclick="$('#dlg-menu').close();${exam.finished ? 'App.openResult()' : 'App.finish()'}">${exam.finished ? 'Lihat hasil' : 'Akhiri ujian'}</button>
    </div>
    <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    d.showModal();
  },
  setSkdTab(id) { ui.skdTab = id; renderSkd(); },
  setMateriTab(tab) { ui.materiTab = tab; renderMateri(null); },
  setMateriGroup(id) { ui.materiGroup = id; renderMateri(null); },
  setMateriSkbGroup(id) { ui.materiSkbGroup = id; renderMateri(null); },
  scrollTo(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
  ...lessonApi,
  openStart, openDb,

  confirmStart(key) {
    const p = findPack(key); if (!p) return;
    const inst = $('#st-instant').checked;
    store.set('cpns_instant', inst);
    $('#dlg-start').close();
    startExam(p, { instant: inst });
  },
  startMateriPractice(id) {
    const t = MATERI.find(x => x.id === id); if (!t) return;
    const pool = materiPool(t);
    if (!pool.length) { toast('Belum ada soal untuk topik ini.'); return; }
    const fresh = shuffle(pool.filter(q => !seen.has(q.id)));
    const rest = shuffle(pool.filter(q => seen.has(q.id)));
    const qs = fresh.concat(rest).slice(0, 10);
    startExam({
      key: 'MATERI-' + id, group: 'MATERI', kind: 'LATIHAN', mode: 'LATIHAN', noSave: true, minutes: 0,
      title: 'Latihan: ' + t.title, compose: `${qs.length} soal latihan topik`, questions: qs
    }, { instant: true });
  },

  /* navigasi soal */
  pick(i) {
    if (!exam || exam.finished || exam.paused) return;
    exam.answers[exam.idx] = i;
    markSeen(exam.qs[exam.idx].id);
    paintScores(); paintQuestion(); paintSide();
    if (exam.instant) setTimeout(() => { const f = $('#x-q .fade-in'); if (f) f.scrollIntoView({ behavior: 'smooth', block: window.innerWidth < 1024 ? 'start' : 'nearest' }); }, 40);
  },
  clearAnswer() { if (!exam || exam.finished) return; exam.answers[exam.idx] = null; paintScores(); paintQuestion(); paintSide(); },
  toggleDoubt() { if (!exam || exam.finished) return; exam.doubts[exam.idx] = !exam.doubts[exam.idx]; paintQuestion(); paintSide(); },
  goto(i) { exam.idx = i; paintQuestion(); paintSide(); const d = $('#dlg-nums'); if (d.open) d.close(); const q = $('#x-q'); if (q && window.innerWidth < 1024) q.scrollIntoView({ block: 'start' }); },
  prev() { if (exam.idx > 0) App.goto(exam.idx - 1); },
  next() { if (exam.idx < exam.qs.length - 1) App.goto(exam.idx + 1); },
  setFilter(f) { exam.filter = f; paintSide(); },
  openNums() { const d = $('#dlg-nums'); d.innerHTML = `<div class="modal-box mx-auto w-full p-3 sm:max-w-2xl sm:p-6">${numsDialogInner()}</div><form method="dialog" class="modal-backdrop"><button>tutup</button></form>`; d.showModal(); },

  /* kontrol ujian */
  togglePause() { if (!exam || exam.finished) return; exam.paused = !exam.paused; if (document.activeElement) document.activeElement.blur(); paintQuestion(); const l = $('#x-pause-lbl'); if (l) l.textContent = exam.paused ? 'Lanjutkan waktu' : 'Jeda waktu'; },
  toggleInstant(v) { exam.instant = v; store.set('cpns_instant', v); paintQuestion(); paintSide(); },
  async finish() {
    if (!exam || exam.finished) return;
    const empty = exam.answers.filter(a => a === null).length;
    const ok = await ask({
      title: 'Akhiri ujian?',
      text: empty ? `Masih ada ${empty} soal yang belum dijawab. Soal kosong bernilai 0.` : 'Semua soal sudah dijawab. Lihat hasil sekarang?',
      ok: 'Akhiri & lihat hasil'
    });
    if (ok) finishExam();
  },
  openResult,
  async restartExam(skipAsk) {
    if (!exam) return;
    if (!skipAsk && !exam.finished) {
      if (!await ask({ title: 'Mulai ulang paket?', text: 'Semua jawaban pada sesi ini akan dihapus.', ok: 'Mulai ulang', danger: true })) return;
    }
    const d = $('#dlg-result'); if (d.open) d.close();
    const p = exam.pack, inst = exam.instant;
    if (p.group === 'MATERI') App.startMateriPractice(p.key.replace('MATERI-', ''));
    else startExam(findPack(p.key) || p, { instant: inst });
    if (document.activeElement) document.activeElement.blur();
  },
  async leaveExam() {
    if (exam && !exam.finished) {
      if (!await ask({ title: 'Keluar dari ujian?', text: 'Sesi ini akan dibuang dan jawabanmu tidak tersimpan.', ok: 'Keluar', danger: true })) return;
    }
    App.exitToList();
  },
  exitToList() {
    const d = $('#dlg-result'); if (d.open) d.close();
    const back = exam && exam.pack.group === 'MATERI' ? '#/materi'
      : exam && exam.pack.mode === 'SKB' ? '#/skb/' + exam.pack.group
      : exam && exam.pack.mode === 'SKD' ? '#/skd' : '#/';
    if (exam && exam.pack.mode === 'SKD') ui.skdTab = exam.pack.group;
    exam = null;
    go(back);
  },
  leaveToMateri() { const d = $('#dlg-result'); if (d && d.open) d.close(); },

  /* database */
  uploadDb(files) {
    if (!files || !files.length) return;
    let processed = 0, added = 0;
    const list = Array.from(files).filter(f => /\.(js|json)$/i.test(f.name));
    if (!list.length) return;
    list.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        const before = bankTotal();
        window.__persistPacks = true;
        try {
          if (/\.json$/i.test(file.name)) {
            const parsed = JSON.parse(e.target.result);
            window.registerCPNSQuestions(Array.isArray(parsed) ? { packId: file.name, questions: parsed } : parsed);
          } else {
            new Function(e.target.result)();   // file .js bank soal milikmu sendiri
          }
        } catch (err) { console.warn('Gagal membaca file DB:', file.name, err); }
        window.__persistPacks = false;
        added += bankTotal() - before; processed++;
        if (processed === list.length) {
          indexBuckets();
          const st = $('#db-status');
          if (st) { st.classList.remove('hidden'); st.textContent = `${processed} file diproses • +${added} soal baru • total ${fmtNum(bankTotal())} soal.`; }
          const tb = $('#db-tbody'); if (tb) tb.innerHTML = dbRows();
        }
      };
      reader.readAsText(file);
    });
  },
  downloadTemplate() {
    const tpl = `// Template file soal — simpan sebagai db/skb/db_skb_extra.js atau db/skd/db_skd_extra.js
window.registerCPNSQuestions({
  packId: "pack_contoh_1",
  bucket: "SKB_PRAKOM",          // SKD_TWK | SKD_TIU | SKD_TKP | SKB_PRAKOM | SKB_HUKUM | ...
  questions: [
    {
      id: "CUSTOM-0001",
      examType: "SKB_PRAKOM",
      category: "SKB PRANATA KOMPUTER",   // untuk SKD isi: TWK / TIU / TKP
      sub: "Jaringan Komputer & Subnetting",
      q: "Berapa jumlah host valid pada subnet /26?",
      options: ["A. 30", "B. 62", "C. 64", "D. 126", "E. 254"],
      ans: 1,                              // index jawaban benar (0 = A)
      scores: [0, 5, 0, 0, 0],             // TKP: isi skor 1-5 untuk tiap opsi
      trick: "Host = 2^n - 2, /26 punya 6 bit host => 64 - 2 = 62.",
      explanation: "Netmask /26 = 255.255.255.192 → 2^6 - 2 = 62 host."
    }
  ]
});
`;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([tpl], { type: 'text/javascript' }));
    a.download = 'db_tambahan_contoh.js'; a.click(); URL.revokeObjectURL(a.href);
  },
  async resetProgress() {
    if (!await ask({ title: 'Reset progres?', text: 'Riwayat soal yang pernah dikerjakan dan skor terbaik semua paket akan dihapus.', ok: 'Reset', danger: true })) return;
    seen.clear(); results = {};
    store.del('cpns_seen_qids_v2'); store.del('cpns_results_v3');
    toast('Progres direset.'); route();
  }
};
window.App = App;

/* ---------- pengaman: jangan sampai sesi ujian hilang karena refresh/tutup tab tak sengaja ---------- */
window.addEventListener('beforeunload', e => {
  if (exam && !exam.finished && location.hash === '#/ujian') { e.preventDefault(); e.returnValue = ''; }
});

/* ---------- keyboard ---------- */
document.addEventListener('keydown', e => {
  if (location.hash !== '#/ujian' || !exam || document.querySelector('dialog[open]')) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea') return;
  const k = e.key.toUpperCase();
  if (e.key === 'ArrowRight') App.next();
  else if (e.key === 'ArrowLeft') App.prev();
  else if (k === 'R') App.toggleDoubt();
  else if (LETTERS.includes(k) && exam.qs[exam.idx] && (k.charCodeAt(0) - 65) < exam.qs[exam.idx].options.length) App.pick(k.charCodeAt(0) - 65);
});

/* ---------- mulai ---------- */
function init() {
  try { (store.get('cpns_custom_packs_v2', [])).forEach(p => window.registerCPNSQuestions(p)); } catch (e) { /* abaikan */ }
  // file tambahan opsional (tidak error bila tidak ada)
  ['./db/skd/db_skd_extra.js', './db/skb/db_skb_extra.js'].forEach(src => {
    const s = document.createElement('script'); s.src = src; s.async = true; s.onerror = () => {};
    document.head.appendChild(s);
  });
  indexBuckets();
  window.__onDbChange = () => { indexBuckets(); if (!exam && location.hash !== '#/ujian') route(); };
  route();
}
init();
