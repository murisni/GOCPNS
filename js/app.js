/* ==========================================================================
   GOCPNS — aplikasi belajar & simulasi (tanpa framework, jalan di file:// )
   Bagian: util · ikon · penyimpanan · bank soal & paket · materi · tampilan ·
           mesin ujian · dialog (mulai, hasil, database)
   ========================================================================== */
'use strict';

/* ---------- util ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
  /* v25: penanda pecahan ⟦pembilang|penyebut⟧ (dibuat js/patches_v25.js) ditampilkan bertingkat */
  .replace(/\u27E6([^|\u27E7]*)\|([^\u27E7]*)\u27E7/g, '<span class="frac"><span class="fn">$1</span><span class="fd">$2</span></span>');

// v21: dukungan gambar (SVG) pada soal figural. Opsi berformat "A. IMG:<svg ...>"; soal memakai properti q.img (string svg).
const svgUri = v => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(v);
const escO = o => { const t = String(o == null ? '' : o).replace(/^[A-E]\.\s*/, ''); return t.startsWith('IMG:') ? `<img src="${svgUri(t.slice(4))}" alt="gambar pilihan" style="height:72px;width:auto;max-width:100%;background:#fff;border-radius:6px">` : esc(t); };
const escQ = q => esc(q.q) + (q.img ? `<div class="mt-3"><img src="${svgUri(q.img)}" alt="gambar soal" style="max-width:100%;height:auto;max-height:220px;background:#fff;border-radius:8px"></div>` : '');
const fmtNum = n => Number(n).toLocaleString('id-ID');
const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const pad2 = n => String(n).padStart(2, '0');
function fmtClock(sec) {
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return (h ? pad2(h) + ':' : '') + pad2(m) + ':' + pad2(s);
}

/* ---------- ikon (gaya outline) ---------- */
const ICON = {
  user: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  lock: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  tick: 'M4.5 12.75l6 6 9-13.5',
  menu: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  bell: 'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0',
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
  trophy: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0',
  calendar: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  sliders: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
  search: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
};
const icon = (n, cls = 'h-5 w-5') =>
  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="${cls}" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="${ICON[n] || ''}"/></svg>`;

/* ---------- penyimpanan (localStorage, aman bila diblokir) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ } if (window.Auth) window.Auth.touch(k); },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* abaikan */ } }
};
const questions = window.CPNSQuestions;
const seen = new Set(store.get('cpns_seen_qids_v2', []).map(questions.resolve));
const seenKeys = new Set(), seenPatterns = new Set();
let results = store.get('cpns_results_v3', {});
const REVIEW_KEY = 'cpns_review_v1';
let reviews = store.get(REVIEW_KEY, {});
const HISTORY_KEY = 'cpns_exam_history_v1';
let examHistory = store.get(HISTORY_KEY, []);
const SLOW_TIU_SECONDS = 90;
const seenBefore = q => seen.has(questions.resolve(q.id)) || seenKeys.has(questions.key(q));
function markSeen(q) {
  const id = questions.resolve(q.id);
  seenKeys.add(questions.key(q));
  seenPatterns.add(questions.pattern(q));
  if (seen.has(id)) return;
  seen.add(id);
  store.set('cpns_seen_qids_v2', Array.from(seen));
}

// Pilih soal baru dulu. Sebarkan variasi satu templat agar tiap sesi beragam.
function selectQuestions(pool, count, blocked = new Set(), allowReserved = false) {
  if (count <= 0) return [];
  const unique = new Set(allowReserved ? blocked : [...blocked, ...reservedFinalKeys()]), patterns = new Set(), picked = [], deferred = [];
  for (const q of pool) {
    const key = questions.key(q);
    if (unique.has(key)) continue;
    unique.add(key);
    const pattern = questions.pattern(q), old = seenBefore(q);
    if (!old && !seenPatterns.has(pattern) && !patterns.has(pattern)) {
      picked.push(q);
      patterns.add(pattern);
      if (picked.length === count) return picked;
    } else deferred.push({ q, pattern, old });
  }
  for (const old of [false, true]) {
    const repeats = [];
    for (const entry of deferred) {
      if (old !== entry.old) continue;
      if (patterns.has(entry.pattern)) { repeats.push(entry.q); continue; }
      picked.push(entry.q);
      patterns.add(entry.pattern);
      if (picked.length === count) return picked;
    }
    picked.push(...repeats.slice(0, count - picked.length));
    if (picked.length === count) return picked;
  }
  return picked;
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
    /* Soal lama (id tanpa akhiran -Nxxxx) tetap di urutan semula, soal baru v18 ditambahkan di belakang,
       sehingga isi Paket lama tidak berubah dan progres "selesai" tetap valid. */
    const byId = (a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    const isNew = q => /-N\d{4}$/.test(q.id);
    const isLate = q => /-X\d{4}$/.test(q.id);   /* soal v24: ditaruh paling belakang agar isi paket lama tidak bergeser */
    const base = arr.filter(q => !isNew(q) && !isLate(q)).sort(byId);
    const added = arr.filter(q => isNew(q)).sort(byId);
    const late = arr.filter(isLate).sort(byId);
    orderCache[key] = shuffle(base, 'pack:' + bucket).concat(shuffle(added, 'pack2:' + bucket), late);
  }
  return orderCache[key];
}
const bucketOfId = {};
function indexBuckets() { Object.entries(BANK).forEach(([b, arr]) => arr.forEach(q => { bucketOfId[q.id] = b; })); }

const CAT_SIZE = 30;   // soal per paket latihan TWK / TIU / TKP
const SKB_SIZE = 20;   // soal per paket SKB
const FULL_MIX = { TWK: 30, TIU: 35, TKP: 45 };
const TIU_MIX = { Verbal: 10, Numerik: 17, Figural: 8 }; // Komposisi latihan GOCPNS.
const tiuType = q => q.category === 'TIU' && /^(Verbal|Numerik|Figural)\b/.exec(q.sub || '')?.[1];
const PASSING = { TWK: 65, TIU: 80, TKP: 166 };
const SKD_TARGET = 505;
const SKB_TARGET = 0.9;

const SKD_GROUPS = {
  SKD_FULL: { label: 'Tryout Lengkap', short: 'Tryout', desc: '30 TWK + 35 TIU + 45 TKP • 100 menit — acuan format CPNS 2024.' },
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
const TARGET_KEY = 'cpns_target_v1';
const skbMeta = k => SKB_META[k] || { name: k.replace('SKB_', '').replace(/_/g, ' '), short: k.replace('SKB_', ''), desc: 'Bank soal tambahan.' };

const targetSkbKeys = () => skbKeys().filter(key => key !== 'SKB_SKD' && /^SKB_[A-Z0-9_]+$/.test(key));
let studyTarget = store.get(TARGET_KEY, null);
function targetPreference() {
  if (studyTarget) return { name: String(studyTarget.name || ''), role: String(studyTarget.role || ''), bucket: String(studyTarget.bucket || '') };
  return { name: '', role: '', bucket: planCfg?.cat ? 'SKB_' + planCfg.cat : '' };
}
function saveStudyTarget(role, bucket, name = targetPreference().name) {
  const previous = targetPreference();
  const next = { name: String(name || '').trim().slice(0, 80), role: String(role || '').trim().slice(0, 100),
    bucket: targetSkbKeys().includes(bucket) ? bucket : '' };
  if (previous.name !== next.name || previous.role !== next.role || previous.bucket !== next.bucket || !studyTarget) {
    studyTarget = { ...next, at: Date.now() };
    store.set(TARGET_KEY, studyTarget);
  }
  return next;
}

function targetEditorHTML() {
  const current = targetPreference();
  const selected = key => key === current.bucket ? ' selected' : '';
  const choices = targetSkbKeys().map(key => `<option value="${esc(key)}"${selected(key)}>${esc(skbMeta(key).name)} · ${bankLen(key)} soal</option>`).join('');
  const activePlan = planCfg?.cat ? ' Planning yang sudah dibuat bisa disesuaikan lewat Atur planning.' : '';
  return `<form class="pf-editor" onsubmit="return App.saveTarget(event)">
    <label class="mt-2 block text-xs font-bold" for="target-name">Nama tampilan</label>
    <input id="target-name" name="targetName" class="input input-bordered input-sm mt-1 w-full"
      maxlength="80" value="${esc(current.name)}" placeholder="Nama yang ingin ditampilkan">
    <label class="mt-2 block text-xs font-bold" for="target-role">Nama jabatan (opsional)</label>
    <input id="target-role" name="targetRole" class="input input-bordered input-sm mt-1 w-full"
      maxlength="100" value="${esc(current.role)}" placeholder="Misalnya Auditor Ahli Pertama">
    <label class="mt-2 block text-xs font-bold" for="target-bucket">Bidang latihan SKB</label>
    <select id="target-bucket" name="targetBucket" class="select select-bordered select-sm mt-1 w-full">
      <option value="">Belum dipilih</option>${choices}</select>
    <p class="mt-2 text-xs text-base-content/70">Pilih bidang yang paling sesuai. Cakupan latihan mengikuti bank bidang yang dipilih.${activePlan}</p>
    <div class="pf-editor-actions">
      <button class="btn btn-ghost" type="button" onclick="Auth.openProfile($('#dlg-profile').dataset.scope)">Batal</button>
      <button class="btn btn-primary" type="submit">Simpan profil</button>
    </div>
    <p class="mt-1 text-xs" role="status" data-target-status></p>
  </form>`;
}

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
function preparePack(pack) {
  if (pack.plan) return pack; // Planning sudah memilih soal dari topik terkait.
  const groups = pack.kind === 'FULL' ? Object.keys(FULL_MIX).map(c => 'SKD_' + c) : [pack.group];
  const selected = groups.flatMap(bucket => {
    const base = pack.kind === 'FULL' ? pack.questions.filter(q => q.category === bucket.slice(4)) : pack.questions;
    const pool = base.concat(ordered(bucket));
    if (pack.kind !== 'FULL' || bucket !== 'SKD_TIU') return selectQuestions(pool, base.length);
    const balanced = Object.entries(TIU_MIX).flatMap(([type, n]) => selectQuestions(pool.filter(q => tiuType(q) === type), n));
    const used = new Set(balanced.map(questions.key));
    return shuffle(balanced.concat(selectQuestions(pool, base.length - balanced.length, used)), pack.key + ':tiu');
  });
  const mix = Object.keys(TIU_MIX).map(type => `${selected.filter(q => tiuType(q) === type).length} ${type.toLowerCase()}`).join(', ');
  return { ...pack, questions: selected, compose: pack.kind === 'FULL' ? pack.compose + ' · TIU: ' + mix : pack.compose };
}

function findPack(key) {
  if (key.indexOf('PLAN-') === 0) return planPackByKey(key);   // v34: Try Out / latihan harian dari Planning
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

const RK_GLOBAL_META = {
  TWK: {
    id: 'TWK', title: 'Rangkuman Global TWK', subtitle: 'Tes Wawasan Kebangsaan', icon: 'flag', tone: 'twk',
    desc: 'Gabungan seluruh pecahan materi TWK: Pancasila, UUD 1945, NKRI, Sejarah, Bela Negara, Integritas, Otda, Bahasa Indonesia & EYD V.'
  },
  TIU: {
    id: 'TIU', title: 'Rangkuman Global TIU', subtitle: 'Tes Intelegensia Umum', icon: 'puzzle', tone: 'tiu',
    desc: 'Gabungan seluruh pecahan materi TIU: Strategi TIU, Pecahan, Perbandingan, Soal Cerita, Peluang, Silogisme, Deret, Analogi, Figural & Kecukupan Data.'
  },
  TKP: {
    id: 'TKP', title: 'Rangkuman Global TKP', subtitle: 'Tes Karakteristik Pribadi', icon: 'bulb', tone: 'tkp',
    desc: 'Gabungan seluruh pecahan materi TKP: Strategi Skor 5, Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK/AI/UU PDP, Profesionalisme & Anti Radikalisme.'
  }
};
const rkGlobalTopics = grp => MATERI.filter(t => t.group === grp);
function rkGlobalStats(grp) {
  const topics = rkGlobalTopics(grp);
  const parts = topics.reduce((sum, t) => sum + lessonSteps(t).length, 0);
  return { topics, count: topics.length, parts };
}
function rkGlobalPanel(activeGroup) {
  const keys = ['TWK', 'TIU', 'TKP'];
  const focused = RK_GLOBAL_META[activeGroup] ? rkGlobalStats(activeGroup) : null;
  const cta = focused
    ? `<button type="button" class="lx-sum" onclick="App.rangkumanGlobal('${activeGroup}')" aria-label="Buka rangkuman global ${activeGroup}">${icon('book', 'h-4 w-4')} RANGKUMAN GLOBAL ${activeGroup}</button>`
    : '';
  const btns = keys.map(k => {
    const m = RK_GLOBAL_META[k], st = rkGlobalStats(k);
    return `
      <button type="button" class="rkg-btn ${m.tone}${activeGroup === k ? ' on' : ''}" onclick="App.rangkumanGlobal('${k}')" aria-label="Buka rangkuman global ${k}">
        <span class="rkg-ic">${icon(m.icon, 'h-5 w-5')}</span>
        <span class="rkg-meta">
          <span class="rkg-btn-t">Rangkuman Global ${k}</span>
          <span class="rkg-btn-s">${st.count} materi · ${st.parts} bagian</span>
        </span>
        ${icon('arrowR', 'h-4 w-4 shrink-0 text-slate-400')}
      </button>`;
  }).join('');
  return `
    <section class="rkg-panel" aria-label="Rangkuman Global SKD">
      <div class="rkg-panel-head">
        <div>
          <div class="rkg-panel-title">${icon('book', 'h-4 w-4 text-primary')} <span>Rangkuman Global (Semua Pecahan Jadi 1)</span></div>
          <p class="rkg-panel-sub">Baca gabungan seluruh materi TWK, TIU, atau TKP lengkap dalam satu halaman.</p>
        </div>
        ${cta}
      </div>
      <div class="rkg-grid">${btns}</div>
    </section>`;
}

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
  const reserved = new Set(reservedFinalKeys());
  return customQuestions(t).concat(out).filter(q => !reserved.has(questions.key(q)));
}
function materiForQuestion(q) {
  const b = bucketOfId[q.id];
  const sub = (q.sub || '').toLowerCase();
  let t = MATERI.find(m => m.subs && m.subs.some(s => sub.includes(s.toLowerCase())) && (!m.buckets || !b || m.buckets.includes(b)));
  if (!t) t = MATERI.find(m => !m.subs && m.buckets && b && m.buckets.length === 1 && m.buckets[0] === b);
  return t || null;
}
function materiLink(t, q) {
  const fallback = '#/materi/' + encodeURIComponent(t.id);
  if (!t.subs && t.group === 'SKB') {
    const tokens = lxTokens(q.sub);
    const best = (t.sections || []).reduce((match, section, i) => {
      const rank = [...lxTokens(section.title)].filter(word => tokens.has(word)).length;
      return rank > match.rank ? { i, rank } : match;
    }, { i: -1, rank: 0 });
    if (best.i >= 0) return fallback + '/subbab-' + best.i;
  }
  return fallback;
}
function materiExamples(t, n = 3) {
  const pool = materiPool(t).filter(q => (q.trick || q.explanation) && (q.q || '').length < 700);
  const bySub = new Set(), picked = [];
  const sh = shuffle(pool, 'ex:' + t.id);
  sh.forEach(q => { if (picked.length < n && !bySub.has(q.sub)) { bySub.add(q.sub); picked.push(q); } });
  sh.forEach(q => { if (picked.length < n && !picked.some(x => questions.key(x) === questions.key(q))) picked.push(q); });
  return picked;
}

/* ---------- state & router ---------- */
const ui = { skdTab: 'SKD_FULL', materiTab: 'SKD', materiGroup: 'ALL', materiSkbGroup: 'ALL' };
let exam = null;         // sesi ujian aktif
let timerHandle = null;

const ROUTES = {
  '': renderHome, skd: renderSkd, skb: renderSkb, materi: renderMateri, planning: renderPlanning, ujian: renderExam
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
      const chapter = /^subbab-(\d+)$/.exec(parts[2] || '');
      if (chapter && sub) rkOpen(sub, Number(chapter[1]));
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
const PLAN_LINK = ['planning', 'Planning', 'calendar'];   // v33: tab kanan-bawah (HP) menggantikan Profil
function navbar(active) {
  const li = NAV_LINKS.concat([PLAN_LINK]).map(([h, t]) =>
    `<li><a href="#/${h}" class="${active === h ? 'bg-primary/10 font-bold text-primary' : 'font-medium text-slate-600 hover:text-slate-900'}">${t}</a></li>`).join('');
  const au = window.Auth, srv = !!(au && au.hasServer), usr = au ? au.user() : null;
  return `
  <!-- HP: tombol garis tiga di pojok kanan (ikut tergulung), header penuh disembunyikan.
       Menu Pengingat dan Profil -->
  <div class="mrow sm:hidden">
    <a href="#/" class="flex items-center gap-2 text-lg font-extrabold tracking-tight text-neutral" style="margin-inline-end:auto">
      <img src="icons/icon-192.png?v=40" width="36" height="36" class="rounded-xl" alt="">
      <span><span class="text-primary">GO</span>CPNS</span>
    </a>
    <button type="button" class="mburger" onclick="App.toggleHMenu(event)" aria-label="Menu" aria-haspopup="true" aria-expanded="false" aria-controls="hmenu">${icon('menu', 'h-6 w-6')}</button>
    <div id="hmenu" class="hmenu" role="menu" hidden>
      <button type="button" role="menuitem" onclick="App.hmenu('notif')">${icon('bell', 'h-5 w-5')}<span>Pengingat belajar</span></button>
      ${au ? `<button type="button" role="menuitem" onclick="App.hmenu('profile')">${icon('user', 'h-5 w-5')}<span>${srv && !usr ? 'Profil / Masuk' : 'Profil'}</span>${srv ? `<i class="hmenu-dot ${usr ? 'on' : ''}" aria-hidden="true"></i>` : ''}</button>` : ''}
    </div>
  </div>
  <header class="app-top sticky top-0 z-30 hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-md sm:block">
    <div class="navbar mx-auto min-h-14 max-w-6xl px-3 sm:px-4 md:min-h-16">
      <div class="navbar-start">
        <a href="#/" class="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-neutral active:scale-98 transition">
          <img src="icons/icon-192.png?v=40" width="36" height="36" class="rounded-xl" alt="">
          <span class="text-lg"><span class="text-primary">GO</span>CPNS</span>
        </a>
      </div>
      <div class="navbar-center flex"><ul class="menu menu-horizontal gap-1 px-1">${li}</ul></div>
      <div class="navbar-end gap-1">
        ${window.Auth ? `<button class="btn btn-ghost btn-sm gap-2 rounded-xl text-slate-700 hover:bg-slate-100" onclick="Auth.openProfile()" aria-label="Profil dan akun">${icon('user', 'h-4 w-4')}<span class="font-semibold">${window.Auth.user() ? esc(window.Auth.user()) : (window.Auth.hasServer ? 'Masuk' : 'Profil')}</span></button>` : ''}
        <button class="btn btn-ghost btn-sm gap-2 text-slate-700 hover:bg-slate-100 rounded-xl" onclick="CPNSNotif.open()" aria-label="Pengingat belajar">${icon('bell', 'h-5 w-5')}<span class="hidden lg:inline">Pengingat</span></button>
      </div>
    </div>
  </header>`;
}
/* navigasi bawah ala aplikasi (hanya tampil di layar kecil) */
function bottomNav(active) {
  /* v33: tab paling kanan = Planning (Profil pindah ke menu garis tiga di kanan atas) */
  return `<nav class="bnav" aria-label="Menu utama">${NAV_LINKS.concat([PLAN_LINK]).map(([h, t, ic]) => {
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
  const preferred = targetPreference();
  /* v29: pilih topik "lanjutkan" untuk tiap jalur (TWK / TIU / TKP / SKB) secara terpisah */
  const pickFor = g => {
    const gr = rows.filter(x => x.t.group === g && (g !== 'SKB' || (preferred.bucket ? 'SKB_' + x.t.skbCategory === preferred.bucket : x.at > 0)));
    const lastG = gr.filter(x => x.at).sort((a, b) => b.at - a.at)[0] || null;
    let c = null, lb = 'Mulai belajar';
    if (lastG && open(lastG)) { c = lastG; lb = 'Lanjutkan belajar'; }
    else {
      const i = lastG ? gr.indexOf(lastG) : -1;
      c = gr.slice(i + 1).find(open) || gr.find(open) || null;
      if (lastG) lb = 'Topik berikutnya';
    }
    return { g, cur: c, label: lb, total: gr.length, done: gr.filter(x => x.p.total && x.p.pct === 100).length };
  };
  const heroes = ['TWK', 'TIU', 'TKP', 'SKB'].map(pickFor).filter(x => x.total);
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

  /* --- kartu "Lanjutkan belajar": 4 kartu (TWK, TIU, TKP, SKB) yang bergeser otomatis / bisa digeser --- */
  const heroCard = h => {
    const cur = h.cur, label = h.label, g = h.g;
    const gLabel = g === 'SKB' && cur && cur.t.skbCategory ? `SKB ${esc(skbMeta('SKB_' + cur.t.skbCategory).short)}` : g;
    if (!cur) {
      return `<div class="lx-slide"><div class="lx-hero lx-hero-${g.toLowerCase()} lx-hero-fill">
        <div class="flex items-center justify-between gap-2"><span class="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-white">Selesai</span><span class="text-xs font-bold text-white/90">${g}</span></div>
        <h2 class="mt-2.5 text-lg font-extrabold leading-snug">Semua materi ${g} sudah selesai!</h2>
        <p class="mt-1 text-xs text-white/85">${h.done} dari ${h.total} topik tuntas. Uji dirimu lewat latihan soal.</p>
        <a href="#/${g === 'SKB' ? 'skb' : 'skd'}" class="lx-btn lx-green mt-4">${icon('play', 'h-5 w-5')} Latihan soal ${g}</a>
      </div></div>`;
    }
    const steps = lessonSteps(cur.t), done = lessonDone(cur.t);
    const ni = steps.findIndex((_, i) => !done[i]);
    const nextTitle = ni >= 0 && steps[ni] ? steps[ni].title : '';
    const started = cur.p.done > 0 || !!cur.p.cur;
    return `<div class="lx-slide"><div class="lx-hero lx-hero-${g.toLowerCase()} lx-hero-fill" aria-label="${label} ${g}">
      <div class="flex items-center justify-between gap-2">
        <span class="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-white">${label}</span>
        <span class="text-xs font-bold text-white/90">${gLabel}</span>
      </div>
      <h2 class="mt-2.5 line-clamp-2 text-lg font-extrabold leading-snug">${esc(cur.t.title)}</h2>
      ${nextTitle ? `<p class="mt-1 line-clamp-2 break-words text-xs text-white/85">Selanjutnya: ${esc(nextTitle)}</p>` : ''}
      <div class="mt-3 flex items-center gap-3">
        <div class="lx-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${cur.p.live}"><div class="lx-fill" style="width:${Math.max(cur.p.live, 4)}%"></div></div>
        <span class="shrink-0 text-xs font-bold text-white">${cur.p.done} dari ${cur.p.total}${cur.p.cur ? ` · soal ${cur.p.cur.solved}/${cur.p.cur.total}` : ''}</span>
      </div>
      <a href="#/materi/${cur.t.id}" class="lx-btn lx-green mt-4">${icon('play', 'h-5 w-5')} ${started ? 'Lanjutkan' : 'Mulai'}</a>
    </div></div>`;
  };
  let cont = '';
  if (heroes.length) {
    cont = `
    <section class="mb-4" aria-label="Lanjutkan belajar" aria-roledescription="carousel">
      <div id="homeCar" class="lx-car" tabindex="0">${heroes.map(heroCard).join('')}</div>
      <div class="lx-dots" id="homeDots">${heroes.map((h, i) => `<button type="button" class="lx-dot${i === 0 ? ' on' : ''}" aria-label="Kartu ${h.g}" data-i="${i}"></button>`).join('')}</div>
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
        ${stat('bolt', 'bg-amber-100 text-amber-700', fmtNum(seen.size), 'Soal pernah dibuka')}
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
    <div class="home-wrap mx-auto w-full max-w-xl pb-2 pt-1 sm:pt-8">
      <header class="mb-4 px-0.5">
        <h1 class="text-2xl font-extrabold leading-tight tracking-tight text-neutral">${sapa}!</h1>
        <p class="mt-0.5 text-sm text-slate-600"><a href="#/planning" class="link link-primary font-bold">Planning 7 hari</a> · Target SKD 500+${preferred.bucket ? ` dan SKB ${esc(skbMeta(preferred.bucket).short)} 90%` : ''}</p>
        <p class="mt-1 text-xs"><a href="#/materi/rencana-7-hari" class="link link-primary">Panduan 7 hari dan rumus cepat TIU</a></p>
      </header>
      <div class="home-grid">
      <div class="home-col home-col-left">
      ${resume}
      ${cont}
      ${reviewIssues('ALL').length ? `<button type="button" class="lx-btn lx-blue mb-4" onclick="App.openReview()">${icon('bolt')} Latihan dari hasil tryout</button>` : ''}
      ${stats}
      </div>
      <section class="home-col home-col-right" aria-label="Pilih jalur belajar">
        <h2 class="mb-2 px-0.5 text-sm font-extrabold text-slate-800">Mau belajar apa?</h2>
        <div class="grid gap-3">
          ${go3('#/materi', 'bg-teal-500', 'book', 'Materi', 'Baca ringkasan dan trik cepat, langkah demi langkah.', `${MATERI.length} topik`)}
          ${go3('#/skd', 'bg-sky-500', 'clipboard', 'SKD', 'Latihan soal TWK, TIU, dan TKP, atau tryout lengkap.', `${fmtNum(skdTot)} soal · ${packsFor('SKD_FULL').length} tryout`)}
          ${go3('#/skb', 'bg-indigo-500', 'briefcase', 'SKB', 'Latihan soal sesuai bidang formasi yang kamu pilih.', `${fmtNum(skbKeys().reduce((a, k) => a + bankLen(k), 0))} soal · ${skbKeys().length} bidang`)}
        </div>
      </section>
      </div>
    </div>
  `);
  initHomeCarousel();
}

/* v29: kartu beranda bergeser otomatis tiap 2 detik; berhenti saat disentuh/di-hover, lanjut lagi setelah dilepas */
let homeCarTimer = null;
function initHomeCarousel() {
  if (homeCarTimer) { clearInterval(homeCarTimer); homeCarTimer = null; }
  const car = document.getElementById('homeCar'), dots = document.getElementById('homeDots');
  if (!car) return;
  const slides = Array.from(car.children);
  if (slides.length < 2) { if (dots) dots.style.display = 'none'; return; }
  let idx = 0, hold = false, holdTimer = null;
  const mark = i => { idx = i; if (dots) Array.from(dots.children).forEach((d, k) => d.classList.toggle('on', k === i)); };
  const go = (i, smooth) => { car.scrollTo({ left: slides[i].offsetLeft - slides[0].offsetLeft, behavior: smooth ? 'smooth' : 'auto' }); mark(i); };
  const pause = ms => { hold = true; clearTimeout(holdTimer); holdTimer = setTimeout(() => { hold = false; }, ms); };
  car.addEventListener('scroll', () => {
    const w = slides[1].offsetLeft - slides[0].offsetLeft || car.clientWidth;
    const i = Math.max(0, Math.min(slides.length - 1, Math.round(car.scrollLeft / w)));
    if (i !== idx) mark(i);
  }, { passive: true });
  ['touchstart', 'pointerdown', 'wheel'].forEach(ev => car.addEventListener(ev, () => pause(5000), { passive: true }));
  car.addEventListener('mouseenter', () => { hold = true; clearTimeout(holdTimer); });
  car.addEventListener('mouseleave', () => pause(800));
  if (dots) dots.addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) { pause(5000); go(+b.dataset.i, true); } });
  homeCarTimer = setInterval(() => {
    if (!document.getElementById('homeCar')) { clearInterval(homeCarTimer); homeCarTimer = null; return; }
    if (hold || document.hidden) return;
    go((idx + 1) % slides.length, true);
  }, 2000);
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
      ${p.questions.some(q => q.practice === 'GOCPNS') ? `<span class="${chipCls}">Soal baru GOCPNS</span>` : ''}
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
  const skdCat = ui.skdTab === 'SKD_FULL' ? 'FULL' : ui.skdTab.replace('SKD_', '');
  const skdRkRow = RK_GLOBAL_META[skdCat]
    ? (() => {
        const st = rkGlobalStats(skdCat);
        return `<div class="rkg-skd-row"><div class="min-w-0 text-xs text-slate-600"><b class="text-slate-800">Rangkuman Global ${skdCat}:</b> Gabungan seluruh ${st.count} materi (${st.parts} bagian).</div><button type="button" class="lx-sum" onclick="App.rangkumanGlobal('${skdCat}')" aria-label="Buka rangkuman global ${skdCat}">${icon('book', 'h-4 w-4')} RANGKUMAN GLOBAL ${skdCat}</button></div>`;
      })()
    : `<div class="rkg-skd-row"><span class="text-xs font-bold text-slate-700">Rangkuman Global SKD:</span><div class="rkg-skd-acts">${['TWK', 'TIU', 'TKP'].map(cat => {
        const st = rkGlobalStats(cat), m = RK_GLOBAL_META[cat];
        return `<button type="button" class="rkg-pill ${m.tone}" onclick="App.rangkumanGlobal('${cat}')">${icon(m.icon, 'h-3.5 w-3.5')} Global ${cat} <span class="opacity-75">(${st.count})</span></button>`;
      }).join('')}</div></div>`;
  shell('skd', `
    ${breadcrumb([['#/', 'Beranda'], [null, 'SKD']])}
    ${pageHead('Seleksi Kompetensi Dasar (SKD)', 'Pilih jenis latihan, lalu pilih paket soal. Paket mengutamakan soal yang belum pernah kamu buka.')}
    <div role="tablist" class="mb-3.5 grid w-full grid-cols-4 gap-2 sm:inline-grid sm:w-auto">${tabs}</div>
    <div class="mb-4 rounded-2xl bg-white/80 p-3.5 ring-1 ring-slate-200">
      <p class="text-xs leading-relaxed text-slate-600 sm:text-sm">${g.desc}</p>
      ${packs.length ? `<div class="mt-2.5 flex items-center gap-3"><div class="lx-track !h-2.5"><div class="lx-fill" style="width:${pct}%"></div></div><span class="shrink-0 text-xs font-bold text-slate-600">${nDone} dari ${packs.length} paket</span></div>` : ''}
      ${skdRkRow}
    </div>
    ${packs.length
      ? `<div class="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">${packs.map(packCard).join('')}</div>`
      : `<div class="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">Bank soal untuk bagian ini belum tersedia.</div>`}
  `);
}

/* ---------- SKB ---------- */
function renderSkb(key) {
  if (!key || !BANK[key]) {
    const icons = { SKB_PRAKOM: 'db', SKB_KESEHATAN: 'check', SKB_HUKUM: 'clipboard', SKB_KEUANGAN: 'trophy', SKB_PENDIDIKAN: 'book' };
    const preferred = targetPreference().bucket;
    const cards = skbKeys().sort((a, b) => Number(b === preferred) - Number(a === preferred)).map(k => {
      const m = skbMeta(k), n = bankLen(k), ps = packsFor(k), np = ps.length;
      const done = ps.filter(p => results[p.key]).length;
      const all = np > 0 && done === np;
      const pct = np ? Math.round(done / np * 100) : 0;
      return `
      <a href="#/skb/${k}" class="flex min-w-0 items-center gap-3.5 rounded-3xl border-2 border-b-4 ${all ? 'border-green-300 bg-green-50/60' : 'border-slate-200 bg-white'} p-4 transition active:translate-y-[2px] active:border-b-2 sm:hover:border-indigo-300">
        <span class="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-indigo-500 text-white">${icon(icons[k] || 'briefcase', 'h-8 w-8')}${all ? `<span class="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-green-500 ring-2 ring-white">${icon('tick', 'h-3.5 w-3.5')}</span>` : ''}</span>
        <span class="min-w-0 flex-1">
          <span class="block text-base font-extrabold leading-snug text-slate-900">${esc(m.name)}${k === preferred ? ' · Targetmu' : ''}</span>
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
        : `<div class="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">Bank soal SKB belum tersedia.</div>`}`);
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
    ${key === 'SKB_PRAKOM' ? '<p class="mb-3 text-xs text-slate-600">Target latihan 90% · Kisi-kisi Ahli Pertama. <a class="link link-primary" href="#/materi/rencana-7-hari">Panduan 7 hari</a></p>' : ''}
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
        <span class="mt-2 flex items-center gap-2.5"><span class="lx-track !h-2.5" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pr.live}"><span class="lx-fill block" style="width:${pr.live}%"></span></span><span class="shrink-0 text-[0.7rem] font-bold text-slate-600">${pr.done}/${pr.total} langkah${pr.cur ? ` · soal ${pr.cur.solved}/${pr.cur.total}` : ''}</span></span>
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
    ${isSkd ? rkGlobalPanel(ui.materiGroup) : ''}
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
    return `<div class="opt ${best ? 'is-correct' : mid ? 'is-mid' : ''} !cursor-default"><span class="letter">${LETTERS[i]}</span><span class="pt-1 text-sm">${escO(o)}</span>${q.category === 'TKP' ? `<span class="badge badge-sm ml-auto shrink-0">${q.scores[i]} poin</span>` : ''}</div>`;
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
  if (e.part) delete e.part[i];
  store.set(LESSON_KEY, lessonStore);
}
/* v26: kemajuan SEBAGIAN satu langkah = materi sudah dibaca, soal baru terjawab benar `solved` dari `total` (mis. 2/3).
   Langkah baru dianggap selesai (centang) hanya setelah semua soalnya benar. */
const lessonPart = (t, i) => ((lessonStore[t.id] && lessonStore[t.id].part) || {})[i] || null;
function lessonSetPart(L) {
  if (lessonDone(L.t)[L.i]) return;
  const e = lessonStore[L.t.id] || (lessonStore[L.t.id] = { done: {} });
  (e.part || (e.part = {}))[L.i] = {
    solved: L.solved, total: L.total, queue: L.queue.map(q => q.id),
    used: [...L.used], answered: L.answered, correct: L.correct, at: Date.now()
  };
  e.at = Date.now();
  store.set(LESSON_KEY, lessonStore);
}
function lessonSteps(t) {
  const steps = (t.sections || []).map(s => ({ kind: 'sec', title: s.title, html: s.html, quiz: s.quiz, fam: s.fam }));
  if ((t.tips || []).length) steps.push({ kind: 'tips', title: 'Cara Menjawab Cepat', tips: t.tips, quiz: t.tipsQuiz });
  return steps;
}
/* ringkasan progres topik: dipakai juga oleh halaman daftar / beranda */
function lessonProgress(t) {
  const total = lessonSteps(t).length, d = lessonDone(t);
  let done = 0, cur = null; for (let i = 0; i < total; i++) { if (d[i]) done++; else if (!cur) { const pt = lessonPart(t, i); if (pt && pt.total) cur = { i, solved: pt.solved, total: pt.total }; } }
  const live = total ? Math.round((done + (cur ? cur.solved / cur.total : 0)) / total * 100) : 0;   // untuk bar; pct tetap = langkah selesai penuh
  return { done, total, pct: total ? Math.round(done / total * 100) : 0, cur, live };
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
const lxPlans = new Map();
const lxChoices = new Map();
function inlineLessonQuestions(t, st, i) {
  return (st.quiz || []).map((q, n) => {
    const ans = q.ans ?? 0;
    return { ...q, id: q.id || `LQ-${t.id}-${i}-${n + 1}`, ans,
      scores: q.scores || (q.options || []).map((_, k) => k === ans ? 5 : 0),
      category: q.category || t.group, sub: q.sub || t.title };
  }).filter(questions.valid);
}
function lessonChoices(t) {
  if (lxChoices.has(t.id)) return lxChoices.get(t.id);
  const pool = materiPool(t).filter(q => questions.valid(q) && q.q.length <= 650);
  const choices = lessonSteps(t).map((st, i) => {
    const want = lxTokens(st.kind === 'tips' ? (st.tips || []).join(' ') : st.title + ' ' + st.html);
    const ranked = pool.map(q => {
      let sc = 0;
      lxQuestionTokens(q).forEach(w => { if (want.has(w)) sc++; });
      if (st.fam && q.fam && [].concat(st.fam).includes(q.fam)) sc += 100;
      return { q, sc, h: hashStr(q.id + '|' + t.id) };
    }).filter(r => r.sc > 0).sort((a, b) => (b.sc - a.sc) || (a.h - b.h));
    return inlineLessonQuestions(t, st, i).concat(ranked.map(r => r.q));
  });
  lxChoices.set(t.id, choices);
  return choices;
}
function lessonPlan(t) {
  if (lxPlans.has(t.id)) return lxPlans.get(t.id);
  const used = new Set();
  const plan = lessonChoices(t).map(pool => {
    const pick = selectQuestions(pool, LESSON_QS, used);
    pick.forEach(q => used.add(questions.key(q)));
    return pick;
  });
  lxPlans.set(t.id, plan);
  return plan;
}

/* v31: soal PENGGANTI. Jika jawaban salah, soal itu tidak diulang persis, melainkan diganti soal lain
   dengan KONSEP yang sama (label fam sama; bila tidak ada -> sub-topik sama + kemiripan kata kunci). */
function lessonReplacement(L, q) {
  const choices = lessonChoices(L.t)[L.i];
  const otherPlan = new Set(lessonPlan(L.t).flat().map(x => x.id));
  const planRsv = planReservedSet();
  const qt = lxQuestionTokens(q);
  const idx = planQIndex();
  const alreadyUsed = new Set([...L.used].map(id => idx.get(id)).filter(Boolean).map(questions.key));
  const reserved = new Set(reservedFinalKeys());
  const candidates = choices.filter(x => !reserved.has(questions.key(x)) && !seenBefore(x) && !L.used.has(x.id) && !alreadyUsed.has(questions.key(x)))
    .map(x => {
      let common = 0;
      lxQuestionTokens(x).forEach(w => { if (qt.has(w)) common++; });
      const concept = q.fam && x.fam === q.fam;
      const relevant = concept || x.sub === q.sub || common >= 5;
      const score = (concept ? 100 : 0) + (x.sub === q.sub ? 12 : 0) + Math.min(common, 24)
        - (otherPlan.has(x.id) || planRsv.has(x.id) ? 3 : 0);
      return { x, relevant, score };
    }).filter(c => c.relevant).sort((a, b) => b.score - a.score);
  return candidates[0]?.x || null;
}
/* v31: materi bertambah di bagian akhir (sebelum "Cara Menjawab Cepat") -> pindahkan penanda selesai langkah tips lama */
function lessonMigrateV31() {
  let changed = false;
  MATERI.forEach(t => {
    if (t.tipsFrom == null || !(t.tips || []).length) return;
    const e = lessonStore[t.id]; if (!e || e.mig31) return;
    const to = (t.sections || []).length;
    if (to > t.tipsFrom) {
      const wasDone = e.done && e.done[t.tipsFrom];
      if (e.done) delete e.done[t.tipsFrom];
      if (e.part) delete e.part[t.tipsFrom];
      if (wasDone) e.done[to] = 1;
    }
    e.mig31 = 1; e.mig35 = 1; changed = true;
  });
  if (changed) store.set(LESSON_KEY, lessonStore);
}
lessonMigrateV31();
/* v35: materi digabung/diperluas lagi -> pindahkan penanda langkah tips dari posisi lama (t.__prev) ke posisi baru */
function lessonMigrateV35() {
  let changed = false;
  MATERI.forEach(t => {
    if (t.__prev == null || !(t.tips || []).length) return;
    const e = lessonStore[t.id]; if (!e || e.mig35) return;
    const to = (t.sections || []).length;
    if (to > t.__prev) {
      const wasDone = e.done && e.done[t.__prev];
      if (e.done) delete e.done[t.__prev];
      if (e.part) delete e.part[t.__prev];
      if (wasDone) e.done[to] = 1;
    }
    e.mig35 = 1; changed = true;
  });
  if (changed) store.set(LESSON_KEY, lessonStore);
}
lessonMigrateV35();

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
    const pt = isNow ? lessonPart(t, i) : null;                  // materi sudah dibaca, soal belum tuntas
    const cls = isDone ? 'done' : isNow ? (pt ? 'now part' : 'now') : 'lock';
    const ic = isDone ? 'tick' : locked ? 'lock' : (s.kind === 'tips' ? 'bolt' : 'book');
    return `
      <div class="lx-step" style="--x:${XS[i % XS.length]}px">
        <button type="button" class="lx-node ${cls}" onclick="App.lessonOpen('${t.id}',${i})" aria-label="Langkah ${i + 1}: ${esc(s.title)}${isDone ? ' (selesai)' : locked ? ' (terkunci)' : pt ? ` (soal ${pt.solved} dari ${pt.total})` : ''}">
          ${isNow ? `<span class="lx-bubble">${pt ? pt.solved + '/' + pt.total : 'MULAI'}</span>` : ''}${icon(ic, 'h-8 w-8')}
        </button>
        <div class="lx-label ${locked ? 'dim' : ''}">${esc(s.title)}</div>${pt ? `<div class="lx-sub">Materi dibaca · soal ${pt.solved}/${pt.total}</div>` : ''}
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
    : `<button class="lx-btn lx-green mt-4" onclick="App.lessonOpen('${t.id}',${nowIdx})">${icon('play', 'h-5 w-5')} ${prog.done || prog.cur ? 'Lanjutkan' : 'Mulai Belajar'}</button>`;

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
          <span class="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1"><span class="badge border-0 bg-white/20 font-bold text-white">${badgeLabel}</span>
          <span class="text-xs font-bold text-white/90">${prog.done}/${prog.total} langkah${prog.cur ? ` · soal ${prog.cur.solved}/${prog.cur.total}` : ''}</span></span>
          <button type="button" class="lx-sum" onclick="App.rangkuman('${t.id}')" aria-label="Buka rangkuman materi ${esc(t.title)}">${icon('book', 'h-4 w-4')} RANGKUMAN</button>
        </div>
        <h1 class="mt-2 text-xl font-extrabold leading-snug">${esc(t.title)}</h1>
        <p class="mt-1 text-xs leading-relaxed text-white/85">${esc(t.summary)}</p>
        <div class="lx-track mt-3" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${prog.live}"><div class="lx-fill" style="width:${Math.max(prog.live, 4)}%"></div></div>
        ${cta}
      </div>
      ${RK_GLOBAL_META[t.group] ? (() => {
        const st = rkGlobalStats(t.group);
        return `<div class="rkg-detail-bar"><div class="min-w-0 flex-1 text-xs text-slate-600"><b class="block text-sm text-slate-900">Ingin baca semua materi ${t.group} sekaligus?</b>Gabungan ${st.count} pecahan materi (${st.parts} bagian).</div><button type="button" class="lx-sum" onclick="App.rangkumanGlobal('${t.group}')" aria-label="Buka rangkuman global ${t.group}">${icon('book', 'h-4 w-4')} GLOBAL ${t.group}</button></div>`;
      })() : ''}
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
  const pt = lessonDone(t)[i] ? null : lessonPart(t, i);
  const plan = lessonPlan(t);
  const reserved = new Set(plan.flatMap((qs, n) => n === i ? [] : qs.map(questions.key)));
  const choices = lessonChoices(t)[i];
  const ordered = (plan[i] || []).concat(choices.filter(q => !reserved.has(questions.key(q))), choices);
  const idx = planQIndex();
  const used = new Set((pt?.used || []).map(questions.resolve));
  const saved = Array.isArray(pt?.queue) ? pt.queue.map(id => idx.get(questions.resolve(id))).filter(Boolean) : [];
  const savedKeys = new Set();
  const queue = saved.filter(q => {
    const key = questions.key(q);
    if (savedKeys.has(key)) return false;
    savedKeys.add(key);
    return true;
  });
  const needed = pt && pt.total > pt.solved ? pt.total - pt.solved : LESSON_QS;
  const available = ordered.filter(q => !used.has(q.id));
  queue.push(...selectQuestions(available, needed - queue.length, savedKeys));
  const resume = !!(pt && queue.length);
  const solved = resume ? pt.solved : 0;
  queue.forEach(q => used.add(q.id));
  lesson = { t, steps, i, phase: resume ? 'quiz' : 'read', queue, total: solved + queue.length, solved,
    picked: null, checked: false, ok: false, used, answered: resume ? (pt.answered ?? solved) : 0,
    correct: resume ? (pt.correct ?? solved) : 0, pending: null };
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
  else if (location.hash === '#/planning') { const y = window.scrollY; renderPlanning(); window.scrollTo(0, y); }   // v33: persen hari ikut diperbarui
}
window.addEventListener('popstate', () => { if (lesson && !rk) lessonClose(true); });

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
      <button type="button" class="lx-sum lx-sum-sm" onclick="App.rangkuman('${L.t.id}')" aria-label="Buka rangkuman">${icon('book', 'h-4 w-4')} RANGKUMAN</button>
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
    markSeen(q);
    const opts = q.options.map((o, k) => {
      let c = '';
      if (L.checked) c = k === q.ans ? 'is-ok' : (k === L.picked ? 'is-bad' : '');
      else if (k === L.picked) c = 'is-pick';
      return `<button type="button" class="lx-opt ${c}" ${L.checked ? 'disabled' : ''} onclick="App.lessonPick(${k})"><span class="lx-k">${LETTERS[k]}</span><span class="lx-t">${escO(o)}</span></button>`;
    }).join('');
    main = `<div class="lx-wrap">
        <div class="flex items-center justify-between gap-2"><span class="lx-chip">${icon('puzzle', 'h-4 w-4')} Soal ${Math.min(L.solved + 1, L.total)} dari ${L.total}${L.answered ? ` · Skor ${L.correct}/${L.answered}` : ''}</span><button type="button" class="lx-reread" onclick="App.lessonReread()">${icon('book', 'h-4 w-4')} Baca ulang materi</button></div>
        <div class="mt-3 mb-4 whitespace-pre-line text-[1.02rem] font-bold leading-relaxed text-slate-900">${escQ(q)}</div>
        ${q.svg ? `<div class="q-svg mb-4 overflow-auto rounded-xl bg-base-200/60 p-3">${q.svg}</div>` : ''}
        <div role="group" aria-label="Pilihan jawaban">${opts}</div></div>`;
    if (!L.checked) {
      foot = `<div class="lx-foot"><div class="lx-foot-in"><button class="lx-btn lx-green" ${L.picked === null ? 'disabled' : ''} onclick="App.lessonCheck()">Periksa</button></div></div>`;
    } else {
      foot = `<div class="lx-sheet ${L.ok ? 'ok' : 'bad'}" role="status" aria-live="polite"><div class="lx-sheet-in">
          <h3>${L.ok ? '🎉 Benar!' : '😅 Belum tepat'}</h3>
          <div class="lx-why">${!L.ok ? `<div><b>Jawaban benar:</b> ${LETTERS[q.ans]}. ${escO(q.options[q.ans])}</div>` : ''}${q.explanation ? `<div class="mt-1.5"><b>Pembahasan:</b> ${esc(q.explanation)}</div>` : ''}${!L.ok ? `<div class="mt-1.5"><b>🔁 Berikutnya:</b> ${L.pending ? 'soal ini diganti soal baru dengan konsep yang sama, supaya kamu belajar dari kesalahan.' : 'baca pembahasannya, lalu lanjut.'}</div>` : ''}${q.trick && !String(q.explanation || '').includes(q.trick) ? `<div class="mt-1.5"><b>Trik:</b> ${esc(q.trick)}</div>` : ''}</div>
          <button class="lx-btn ${L.ok ? 'lx-green' : 'lx-red'} mt-3" onclick="App.lessonNext()">${L.ok ? 'Lanjut' : 'Mengerti, lanjut'}</button>
        </div></div>`;
    }
  } else {
    const nextI = L.i + 1, hasNext = nextI < L.steps.length;
    const conf = Array.from({ length: 22 }, (_, n) => `<i style="left:${(n * 4.6 + (n % 3) * 1.3).toFixed(1)}%;background:${['#fde047', '#16a34a', '#0b7fd4', '#e0364f', '#a78bfa'][n % 5]};animation-delay:${((n % 7) * 0.12).toFixed(2)}s"></i>`).join('');
    main = `<div class="lx-wrap lx-done"><div class="lx-conf" aria-hidden="true">${conf}</div>
        <div class="lx-medal">${hasNext ? '⭐' : '🏆'}</div>
        <h2 class="mt-5 text-2xl font-black text-neutral">${hasNext ? 'Langkah selesai!' : 'Semua langkah selesai!'}</h2>
        <p class="mt-1 text-sm text-slate-600">${esc(L.t.title)}</p>
        ${L.total ? `<div class="mt-5 flex justify-center gap-3"><div class="lx-stat"><b>${L.correct}/${L.answered}</b><span>Skor (benar/dijawab)</span></div><div class="lx-stat"><b>${L.i + 1}/${L.steps.length}</b><span>Langkah</span></div></div>` : ''}
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
    else { lesson.phase = 'quiz'; lessonSetPart(lesson); }   // materi selesai dibaca = tersimpan
    lessonPaint();
  },
  lessonReread() { if (!lesson || lesson.phase !== 'quiz') return; lesson.phase = 'read'; lesson.picked = null; lesson.checked = false; lessonPaint(); },
  lessonPick(k) { if (!lesson || lesson.checked) return; lesson.picked = k; lessonPaint(); },
  lessonCheck() {
    if (!lesson || lesson.checked || lesson.picked === null) return;
    const q = lesson.queue[0];
    lesson.ok = lesson.picked === q.ans; lesson.checked = true;
    lesson.answered++;
    if (lesson.ok) lesson.correct++;
    lesson.pending = lesson.ok ? null : lessonReplacement(lesson, q);
    lessonPaint();
  },
  lessonNext() {
    if (!lesson || !lesson.checked) return;
    lesson.queue.shift();
    if (lesson.pending) {
      lesson.queue.push(lesson.pending);
      lesson.used.add(lesson.pending.id);
    } else {
      lesson.solved++;
    }
    if (lesson.queue.length) lessonSetPart(lesson);
    lesson.pending = null;
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
   RANGKUMAN MATERI (v36) & RANGKUMAN GLOBAL SKD
   Tombol RANGKUMAN di tiap materi, plus Rangkuman Global TWK / TIU / TKP yang
   menggabungkan seluruh pecahan materi menjadi satu halaman utuh lengkap dengan
   daftar isi, pencarian, rumus, studi kasus, tips cepat, dan contoh soal.
   ========================================================================== */
let rk = null;   // { mode: 'topic', t } | { mode: 'global', group }
function rkQuestion(q, n) {
  const opts = (q.options || []).map((o, k) => `<li class="rk-opt${k === q.ans ? ' ok' : ''}"><span class="rk-k">${LETTERS[k]}</span><span class="rk-t">${escO(o)}</span>${k === q.ans ? '<b class="rk-tick">✓</b>' : ''}</li>`).join('');
  const why = q.explanation ? `<div class="rk-why"><b>Cara mengerjakan:</b> ${esc(q.explanation)}</div>` : '';
  const trick = q.trick && !String(q.explanation || '').includes(q.trick) ? `<div class="rk-why"><b>Trik:</b> ${esc(q.trick)}</div>` : '';
  return `<div class="rk-q"><div class="rk-qn">Contoh soal ${n}</div><div class="rk-qt">${escQ(q)}</div>${q.svg ? `<div class="q-svg my-2 overflow-auto rounded-xl bg-base-200/60 p-2">${q.svg}</div>` : ''}<ul class="rk-opts">${opts}</ul>${why}${trick}</div>`;
}
function rkBody(t, reserved = new Set(reservedFinalKeys())) {
  const steps = lessonSteps(t), plan = lessonPlan(t), d = lessonDone(t);
  const items = steps.map((st, i) => {
    const content = st.kind === 'tips'
      ? `<ol class="rk-tips">${st.tips.map((x, n) => `<li><span class="rk-n">${n + 1}</span><span class="min-w-0 flex-1">${x}</span></li>`).join('')}</ol>`
      : `<div class="materi-body">${wrapTables(st.html)}</div>`;
    const qs = (plan[i] || []).filter(q => q && q.options && q.options.length && !reserved.has(questions.key(q)));
    const ex = qs.length ? `<div class="rk-ex"><div class="rk-ex-h">Contoh soal & cara mengerjakannya</div>${qs.map((q, n) => rkQuestion(q, n + 1)).join('')}</div>` : '';
    return `<details class="rk-item"${steps.length === 1 ? ' open' : ''}><summary><span class="rk-num${d[i] ? ' done' : ''}">${d[i] ? '✓' : i + 1}</span><span class="rk-sum-t">${esc(st.title)}</span><span class="rk-chev" aria-hidden="true">▾</span></summary><div class="rk-in">${content}${ex}</div></details>`;
  }).join('');
  return items;
}
function rkEnsureOverlay() {
  document.documentElement.classList.add('lx-open');
  let el = $('#rangkuman');
  if (!el) {
    el = document.createElement('div');
    el.id = 'rangkuman';
    el.className = 'lx-overlay rk-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    document.body.appendChild(el);
    try { history.pushState({ rk: 1 }, ''); } catch (e) { /* abaikan */ }
  }
  return el;
}
function rkOpen(id, chapter) {
  const t = MATERI.find(x => x.id === id); if (!t) return;
  rk = { mode: 'topic', t };
  const el = rkEnsureOverlay();
  const n = lessonSteps(t).length;
  const globalCta = RK_GLOBAL_META[t.group]
    ? (() => {
        const st = rkGlobalStats(t.group);
        return `<div class="rkg-hero-cta ${RK_GLOBAL_META[t.group].tone} mb-3"><span class="text-xs font-bold text-slate-700">Lihat semua ${st.count} materi ${t.group} dalam 1 rangkuman</span><button type="button" class="lx-sum lx-sum-sm" onclick="App.rangkumanGlobal('${t.group}')">${icon('book', 'h-3.5 w-3.5')} GLOBAL ${t.group}</button></div>`;
      })()
    : '';
  el.innerHTML = `
    <div class="lx-top"><button type="button" class="lx-x" onclick="App.rangkumanClose()" aria-label="Tutup rangkuman">${icon('x', 'h-6 w-6')}</button>
      <div class="rk-head"><div class="rk-kicker">RANGKUMAN</div><div class="rk-title">${esc(t.title)}</div></div></div>
    <div class="lx-body" id="rk-scroll"><div class="lx-wrap">
      <p class="rk-intro">Semua materi, rumus, studi kasus, dan contoh soal beserta cara mengerjakannya ada di sini. Ketuk judul untuk membuka. ${n} bagian.</p>
      ${globalCta}
      <div class="rk-tools"><button type="button" class="rk-tool" onclick="App.rangkumanToggle(true)">Buka semua</button><button type="button" class="rk-tool" onclick="App.rangkumanToggle(false)">Tutup semua</button></div>
      ${rkBody(t)}
      <button type="button" class="lx-btn lx-ghost mt-4" onclick="App.rangkumanClose()">Tutup rangkuman</button>
    </div></div>`;
  const b = $('#rk-scroll'); if (b) b.scrollTop = 0;
  if (Number.isInteger(chapter)) {
    const section = document.querySelectorAll('#rangkuman .rk-item')[chapter];
    if (section) { section.open = true; section.scrollIntoView({ block: 'start' }); }
  }
}
function rkOpenGlobal(group = 'TWK') {
  const grp = RK_GLOBAL_META[group] ? group : 'TWK';
  const meta = RK_GLOBAL_META[grp];
  const topics = rkGlobalTopics(grp);
  if (!topics.length) { toast(`Materi ${grp} belum tersedia.`); return; }
  rk = { mode: 'global', group: grp };
  const el = rkEnsureOverlay();
  const reserved = new Set(reservedFinalKeys());
  let totalParts = 0, doneParts = 0;
  const chapters = topics.map((t, ti) => {
    const steps = lessonSteps(t);
    const pr = lessonProgress(t);
    totalParts += steps.length;
    doneParts += pr.done;
    return `
      <section id="rk-chap-${t.id}" class="rkg-chap">
        <div class="rkg-chap-head ${meta.tone}">
          <div class="rkg-chap-meta">
            <span>Topik ${ti + 1} dari ${topics.length}</span>
            <span>${pr.done}/${steps.length} langkah selesai · ${steps.length} bagian</span>
          </div>
          <h2 class="rkg-chap-title">${ti + 1}. ${esc(t.title)}</h2>
          <p class="rkg-chap-sum">${esc(t.summary)}</p>
          <div class="rkg-chap-acts">
            <button type="button" class="rkg-chap-btn" onclick="App.rangkumanToggleChap('rk-chap-${t.id}')">Buka / tutup bab ini</button>
            <button type="button" class="rkg-chap-btn rkg-chap-link" onclick="App.rangkumanGoTopic('${t.id}')">Buka jalur belajar →</button>
          </div>
        </div>
        ${rkBody(t, reserved)}
      </section>`;
  }).join('');

  const tabs = ['TWK', 'TIU', 'TKP'].map(k => {
    const m = RK_GLOBAL_META[k], st = rkGlobalStats(k);
    return `<button type="button" class="rkg-pill ${m.tone}${k === grp ? ' on' : ''}" onclick="App.rangkumanGlobal('${k}')">${icon(m.icon, 'h-3.5 w-3.5')} ${k} (${st.count})</button>`;
  }).join('');

  const toc = topics.map((t, ti) =>
    `<button type="button" class="rkg-toc-chip" onclick="App.rangkumanJump('rk-chap-${t.id}')">${ti + 1}. ${esc(t.title)}</button>`
  ).join('');

  el.innerHTML = `
    <div class="lx-top"><button type="button" class="lx-x" onclick="App.rangkumanClose()" aria-label="Tutup rangkuman">${icon('x', 'h-6 w-6')}</button>
      <div class="rk-head"><div class="rk-kicker">RANGKUMAN GLOBAL SKD</div><div class="rk-title">${esc(meta.title)} · ${topics.length} Topik (${totalParts} Bagian)</div></div></div>
    <div class="lx-body" id="rk-scroll"><div class="lx-wrap">
      <div class="rkg-tabs" role="tablist" aria-label="Pilih Rangkuman Global">${tabs}</div>
      <p class="rk-intro">${esc(meta.desc)} Progres saat ini: <b>${doneParts}/${totalParts}</b> langkah selesai.</p>
      <div class="rkg-search-wrap">
        <span class="rkg-search-ic">${icon('search', 'h-4 w-4')}</span>
        <input id="rk-search" type="search" class="rkg-search" placeholder="Cari sub-bab, rumus, UU, atau kata kunci di semua ${grp}..." oninput="App.rangkumanFilter(this.value)" aria-label="Cari di rangkuman global ${grp}">
        <div id="rk-search-stat" class="rkg-search-stat">Menampilkan semua ${totalParts} bagian dari ${topics.length} topik.</div>
      </div>
      <div class="rkg-toc" aria-label="Daftar isi topik ${grp}">${toc}</div>
      <div class="rk-tools"><button type="button" class="rk-tool" onclick="App.rangkumanToggle(true)">Buka semua</button><button type="button" class="rk-tool" onclick="App.rangkumanToggle(false)">Tutup semua</button></div>
      <div id="rk-chapters">${chapters}</div>
      <div id="rk-empty" class="rkg-empty" hidden>Tidak ada materi atau sub-bab yang cocok dengan kata kunci tersebut.</div>
      <button type="button" class="lx-btn lx-ghost mt-4" onclick="App.rangkumanClose()">Tutup rangkuman</button>
    </div></div>`;
  const b = $('#rk-scroll'); if (b) b.scrollTop = 0;
}
function rkClose(fromPop) {
  if (!rk) return;
  rk = null;
  const el = $('#rangkuman'); if (el) el.remove();
  if (!lesson) document.documentElement.classList.remove('lx-open');
  if (!fromPop) { try { if (history.state && history.state.rk) history.back(); } catch (e) { /* abaikan */ } }
}
window.addEventListener('popstate', () => { if (rk) rkClose(true); });
const rangkumanApi = {
  rangkuman: rkOpen,
  rangkumanGlobal: rkOpenGlobal,
  rangkumanClose: () => rkClose(false),
  rangkumanToggle(on) { document.querySelectorAll('#rangkuman details.rk-item').forEach(d => { if (!d.hidden) d.open = !!on; }); },
  rangkumanToggleChap(chapId) {
    const ch = document.getElementById(chapId); if (!ch) return;
    const items = Array.from(ch.querySelectorAll('details.rk-item')).filter(d => !d.hidden);
    const open = items.some(d => !d.open);
    items.forEach(d => { d.open = open; });
  },
  rangkumanJump(chapId) {
    const el = document.getElementById(chapId); if (!el) return;
    el.hidden = false;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },
  rangkumanGoTopic(id) {
    rkClose(true);
    if (lesson) lessonClose(true);
    try { if (history.state && (history.state.rk || history.state.lx)) history.replaceState(null, ''); } catch (e) { /* abaikan */ }
    go('#/materi/' + encodeURIComponent(id));
  },
  rangkumanFilter(val) {
    const root = $('#rangkuman'); if (!root) return;
    const terms = String(val || '').trim().toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0, chShown = 0;
    root.querySelectorAll('.rkg-chap').forEach(ch => {
      const titleEl = ch.querySelector('.rkg-chap-title');
      const chapTitle = (titleEl ? (titleEl.textContent || titleEl.innerHTML || '') : '').toLowerCase();
      const chapMatch = terms.length > 0 && terms.every(w => chapTitle.includes(w));
      let any = false;
      ch.querySelectorAll('.rk-item').forEach(d => {
        const txt = ((d.textContent || d.innerHTML || '') + ' ' + chapTitle).toLowerCase();
        const ok = !terms.length || chapMatch || terms.every(w => txt.includes(w));
        d.hidden = !ok;
        if (ok) { any = true; shown++; }
      });
      ch.hidden = !any;
      if (any) chShown++;
    });
    const st = $('#rk-search-stat');
    if (st) st.textContent = terms.length
      ? `Ditemukan ${shown} bagian di ${chShown} topik materi.`
      : `Menampilkan semua ${shown} bagian dari ${chShown} topik.`;
    const empty = $('#rk-empty');
    if (empty) empty.hidden = shown > 0;
  }
};

/* ==========================================================================
   PLANNING BELAJAR (v33, disempurnakan v34)
   Pilih SATU tes (SKD atau SKB satu bidang) + jumlah hari (maks. 30, SUDAH termasuk hari Try Out).
   - Tiap kelompok (SKD: TWK, TIU, TKP; SKB: satu bidang) mendapat blok hari belajar, lalu SATU hari TRY OUT
     berisi 30 soal campuran dari seluruh materi kelompok itu. Soal dipilih yang belum pernah muncul di langkah
     materi (dan belum pernah kamu kerjakan); soalnya disimpan supaya tetap sama saat dibuka lagi.
   - TIU: tiap hari belajar ditambah "Latihan Harian" (soal baru dari materi hari itu), karena rumus TIU sulit dihafal.
   - Persen tuntas hari belajar = langkah materi + soal (dan latihan harian TIU); hari Try Out tuntas saat sudah dikerjakan.
   Yang disimpan hanya pengaturan (cpns_plan_v1) + daftar id soal Try Out/latihan (cpns_plan_q_v1).
   ========================================================================== */
const PLAN_KEY = 'cpns_plan_v1';
const PLANQ_KEY = 'cpns_plan_q_v1';
const PLAN_MAX = 30;
const PLAN_TO_N = 30;        // soal per Try Out
const PLAN_DRILL_N = 20;     // soal latihan harian TIU
const PLAN_DRILL_GROUPS = ['TIU'];
const PLAN_XS = [0, 40, 66, 40, 0, -40, -66, -40];
let planCfg = planSanitize(store.get(PLAN_KEY, null));
let planQ = store.get(PLANQ_KEY, null);
let planDraft = null;

function planSanitize(c) {
  if (c?.test === 'GABUNG') return { test: 'GABUNG', cat: typeof c.cat === 'string' ? c.cat : 'PRAKOM', days: 7, at: c.at || Date.now(), updated: c.updated || c.at };
  if (!c || (c.test !== 'SKD' && c.test !== 'SKB')) return null;
  const days = Math.round(Number(c.days));
  if (!(days >= 1)) return null;
  return { test: c.test, cat: c.test === 'SKB' ? String(c.cat || '') : '', days: Math.min(days, PLAN_MAX), at: c.at || Date.now() };
}
const planDlg = id => {
  let d = document.getElementById(id);
  if (!d) { d = document.createElement('dialog'); d.id = id; d.className = 'modal modal-bottom sm:modal-middle'; document.body.appendChild(d); }
  return d;
};
const stepCount = t => (t.sections || []).length + ((t.tips || []).length ? 1 : 0);   // sama dengan lessonSteps(t).length
const planSkbCats = () => MATERI.reduce((a, t) => { if (t.group === 'SKB' && t.skbCategory && !a.includes(t.skbCategory)) a.push(t.skbCategory); return a; }, []);
const planCatName = c => skbMeta('SKB_' + c).name;
const planFieldOptions = test => test === 'GABUNG' ? targetSkbKeys().map(key => key.slice(4)) : planSkbCats();
function planLists(cfg) {
  const L = cfg.test === 'SKB'
    ? [{ g: 'SKB', topics: MATERI.filter(t => t.group === 'SKB' && t.skbCategory === cfg.cat) }]
    : ['TWK', 'TIU', 'TKP'].map(g => ({ g, topics: MATERI.filter(t => t.group === g) }));
  return L.map(l => ({ g: l.g, topics: l.topics.filter(t => stepCount(t) > 0) })).filter(l => l.topics.length);
}
const planTotal = cfg => planLists(cfg).reduce((a, l) => a + l.topics.reduce((b, t) => b + stepCount(t), 0), 0);
const planMinDays = cfg => cfg.test === 'GABUNG' ? 7 : 2 * Math.max(1, planLists(cfg).length);                 // minimal: 1 hari belajar + 1 Try Out per kelompok
const planMaxDays = cfg => cfg.test === 'GABUNG' ? 7 : Math.max(planMinDays(cfg), Math.min(PLAN_MAX, planTotal(cfg) + planLists(cfg).length));

/* pecah n langkah berurutan menjadi d bagian hampir sama besar (sisa dibagi ke hari-hari awal) */
function evenChunks(arr, d) {
  const out = [], base = Math.floor(arr.length / d), extra = arr.length % d;
  let p = 0;
  for (let i = 0; i < d; i++) { const n = base + (i < extra ? 1 : 0); out.push(arr.slice(p, p + n)); p += n; }
  return out;
}
/* berapa hari belajar untuk tiap kelompok agar beban per hari paling merata:
   utamakan beban harian terberat sekecil mungkin, lalu selisih antarhari sekecil mungkin */
function planAlloc(ns, D) {
  const k = ns.length;
  let best = null;
  const score = alloc => {
    let max = 0, sq = 0;
    alloc.forEach((d, i) => {
      const b = Math.floor(ns[i] / d), x = ns[i] % d;
      if (x) { max = Math.max(max, b + 1); sq += x * (b + 1) * (b + 1); }
      if (d - x) { max = Math.max(max, b); sq += (d - x) * b * b; }
    });
    return [max, sq];
  };
  const rec = (i, left, cur) => {
    if (i === k - 1) {
      if (left < 1 || left > ns[i]) return;
      const a = cur.concat(left), s = score(a);
      if (!best || s[0] < best.s[0] || (s[0] === best.s[0] && s[1] < best.s[1])) best = { a, s };
      return;
    }
    for (let d = 1; d <= Math.min(ns[i], left - (k - 1 - i)); d++) rec(i + 1, left - d, cur.concat(d));
  };
  rec(0, D, []);
  return best ? best.a : ns.map(() => 1);
}
function planDayInfo(units, no) {
  const segs = [];
  units.forEach(u => {
    const s = segs[segs.length - 1];
    if (s && s.t === u.t) { s.to = u.i; s.units.push(u); } else segs.push({ t: u.t, from: u.i, to: u.i, units: [u] });
  });
  const gs = [];
  segs.forEach(s => { if (!gs.includes(s.t.group)) gs.push(s.t.group); });
  return { no, units, segs, label: gs.join(' + ') };
}
/* susun hari: untuk tiap kelompok -> hari belajar (blok berurutan) lalu 1 hari Try Out */
function planBuild(cfg) {
  const lists = planLists(cfg).map(l => {
    const units = [];
    l.topics.forEach(t => { const n = stepCount(t); for (let i = 0; i < n; i++) units.push({ t, i }); });
    return { g: l.g, topics: l.topics, units };
  });
  if (!lists.length) return [];
  const G = lists.length;
  const D = Math.max(2 * G, Math.min(cfg.days, planMaxDays(cfg)));
  const alloc = G > 1 ? planAlloc(lists.map(l => l.units.length), D - G) : [D - G];
  const days = [];
  lists.forEach((l, gi) => {
    const startNo = days.length + 1;
    evenChunks(l.units, alloc[gi]).forEach(u => {
      const d = planDayInfo(u, days.length + 1);
      d.kind = 'learn'; d.g = l.g; d.topics = l.topics; d.set = 'DR-' + d.no;
      if (PLAN_DRILL_GROUPS.includes(l.g)) d.drill = { key: `PLAN-${cfg.at}-DR-${d.no}`, n: PLAN_DRILL_N };
      days.push(d);
    });
    days.push({ no: days.length + 1, kind: 'tryout', g: l.g, topics: l.topics, units: [], segs: [], label: 'Try Out ' + l.g,
      set: 'TO-' + l.g, packKey: `PLAN-${cfg.at}-TO-${l.g}`, n: PLAN_TO_N, fromNo: startNo, toNo: days.length });
  });
  return days;
}
function planProg(units) {
  let done = 0, part = 0;
  units.forEach(u => {
    if (lessonDone(u.t)[u.i]) done++;
    else { const p = lessonPart(u.t, u.i); if (p && p.total) part += p.solved / p.total; }
  });
  const n = units.length, full = n > 0 && done === n;
  return { done, n, full, sum: done + part, pct: full ? 100 : Math.min(99, Math.round((done + part) / Math.max(n, 1) * 100)) };
}
/* progres satu hari: hari belajar = langkah materi (+ latihan harian TIU, bobot 25% dari jumlah langkah, min. 2); Try Out = 0/100 */
const planDrillW = d => Math.max(2, Math.round(d.units.length / 4));
function planDayProg(d) {
  if (d.kind === 'tryout') { const r = results[d.packKey]; return { n: 1, done: r ? 1 : 0, sum: r ? 1 : 0, full: !!r, pct: r ? 100 : 0, rec: r || null }; }
  const p = planProg(d.units);
  if (!d.drill) return p;
  const w = planDrillW(d), r = results[d.drill.key], dd = r ? w : 0, n = p.n + w, sum = p.sum + dd, full = p.full && !!r;
  return { n, done: p.done + dd, sum, full, pct: full ? 100 : Math.min(99, Math.round(sum / n * 100)), steps: p, rec: r || null };
}
const planNextStep = t => { const d = lessonDone(t), n = stepCount(t); let i = 0; while (i < n && d[i]) i++; return i < n ? i : -1; };
const planRange = (a, b) => a === b ? `${a}` : `${a}–${b}`;
function planSummary(days) {
  const out = [];
  days.forEach(d => {
    let r = out.find(x => x.g === d.g);
    if (!r) out.push(r = { g: d.g, learn: 0, min: 1e9, max: 0, drill: false });
    if (d.kind === 'learn') { r.learn++; r.min = Math.min(r.min, d.units.length); r.max = Math.max(r.max, d.units.length); if (d.drill) r.drill = true; }
  });
  return out;
}

/* ---------- soal Try Out & latihan harian ---------- */
/* Pilih n soal dari materi `primary` (lalu `secondary`), bergiliran antar-topik agar semua materi terwakili.
   Urutan prioritas: belum pernah dipakai di langkah materi & belum pernah dikerjakan -> baru satu dari keduanya -> sisanya.
   Soal yang sudah dipakai Try Out/latihan lain di planning yang sama dihindari. */
function planPickQs(primary, secondary, n, ctx, seed) {
  const out = [], mine = new Set();
  const valid = q => questions.valid(q) && q.q.length <= 650;
  const run = (topics, limit) => {
    const lists = topics.map(t => materiPool(t).filter(valid).map(q => ({
      q, key: questions.key(q), h: hashStr(q.id + '|' + seed),
      tier: (ctx.lesson.has(questions.key(q)) ? 1 : 0) + (seenBefore(q) ? 4 : 0) + (ctx.taken.has(questions.key(q)) ? 2 : 0)
    })).sort((a, b) => (a.tier - b.tier) || (a.h - b.h)));
    const order = shuffle(lists.map((_, i) => i), seed + 'o');
    for (let mt = 0; mt <= limit && out.length < n; mt++) {
      let moved = true;
      while (out.length < n && moved) {
        moved = false;
        for (const i of order) {
          if (out.length >= n) break;
          const c = lists[i].find(x => x.tier <= mt && !mine.has(x.key));
          if (c) { out.push(c.q); mine.add(c.key); moved = true; }
        }
      }
    }
  };
  if (secondary.length) {
    run(primary, 1);
    if (out.length < n) run(secondary, 1);
    if (out.length < n) run(primary, 3);
    if (out.length < n) run(secondary, 3);
    if (out.length < n) run(primary, 7);
    if (out.length < n) run(secondary, 7);
  } else run(primary, 7);
  out.forEach(q => ctx.taken.add(questions.key(q)));
  return shuffle(out, seed + 'f').map(q => q.id);
}
function planGen(cfg) {
  const days = planBuild(cfg), sets = {}, ctx = { lesson: new Set(), taken: new Set() };
  planLists(cfg).forEach(l => l.topics.forEach(t => lessonPlan(t).forEach(a => a.forEach(q => ctx.lesson.add(questions.key(q))))));
  days.filter(d => d.kind === 'tryout').forEach(d => { sets[d.set] = planPickQs(d.topics, [], d.n, ctx, cfg.at + d.set); });
  days.filter(d => d.drill).forEach(d => {
    const prim = []; d.segs.forEach(s => { if (!prim.includes(s.t)) prim.push(s.t); });
    sets[d.set] = planPickQs(prim, d.topics.filter(t => !prim.includes(t)), d.drill.n, ctx, cfg.at + d.set);
  });
  planQ = { at: cfg.at, sets };
  store.set(PLANQ_KEY, planQ);
  return sets;
}
const planEnsureSets = () => (planCfg && planQ && planQ.at === planCfg.at) ? planQ.sets : (planCfg ? planGen(planCfg) : null);
const planReservedSet = () => { const s = new Set(); if (planCfg && planQ && planQ.at === planCfg.at) Object.values(planQ.sets).forEach(a => a.forEach(id => s.add(questions.resolve(id)))); return s; };
let planIdx = null, planIdxN = -1;
function planQIndex() {
  const n = Object.values(BANK).reduce((a, x) => a + x.length, 0) + MATERI.length;
  if (planIdx && planIdxN === n) return planIdx;
  planIdx = new Map();
  Object.values(BANK).forEach(arr => arr.forEach(q => planIdx.set(q.id, q)));
  MATERI.forEach(t => {
    customQuestions(t).forEach(q => planIdx.set(q.id, q));
    lessonSteps(t).forEach((st, i) => inlineLessonQuestions(t, st, i).forEach(q => planIdx.set(q.id, q)));
  });
  planIdxN = n;
  return planIdx;
}
/* paket ujian untuk Try Out / latihan harian (dipakai findPack -> dialog mulai -> mesin ujian yang sama) */
function planPackByKey(key) {
  const cfg = planCfg;
  if (!cfg || key.indexOf('PLAN-' + cfg.at + '-') !== 0) return null;
  if (cfg.test === 'GABUNG') return combinedPack(cfg, key);
  const d = planBuild(cfg).find(x => (x.kind === 'tryout' ? x.packKey : (x.drill && x.drill.key)) === key);
  if (!d) return null;
  const sets = planEnsureSets(), idx = planQIndex();
  const base = ((sets && sets[d.set]) || []).map(id => idx.get(questions.resolve(id))).filter(Boolean);
  const blocked = new Set(Object.entries(sets || {}).filter(([set]) => set !== d.set)
    .flatMap(([, ids]) => ids.map(id => idx.get(questions.resolve(id))).filter(Boolean).map(questions.key)));
  const daily = [...new Set(d.segs.map(seg => seg.t))];
  const pool = (daily.length ? daily.concat(d.topics.filter(t => !daily.includes(t))) : d.topics)
    .flatMap(materiPool).filter(q => questions.valid(q) && q.q.length <= 650);
  const count = d.n || d.drill.n;
  const free = q => !seenBefore(q) && !blocked.has(questions.key(q));
  const qs = selectQuestions(base.filter(free), count);
  const used = new Set(qs.map(questions.key));
  const replacements = selectQuestions(pool.filter(free), count - qs.length, used);
  qs.push(...replacements);
  replacements.forEach(q => used.add(questions.key(q)));
  qs.push(...selectQuestions(base.concat(pool), count - qs.length, used));
  if (!qs.length) return null;
  const isTo = d.kind === 'tryout', gname = d.g === 'SKB' ? 'SKB ' + planCatName(cfg.cat) : d.g;
  return {
    key, group: 'PLAN', kind: 'CAT', mode: 'PLAN', plan: true, planSet: d.set, skbBucket: cfg.test === 'SKB' ? 'SKB_' + cfg.cat : null,
    title: isTo ? `Try Out ${gname}` : `Latihan Harian ${d.g} · Hari ${d.no}`,
    compose: isTo ? `${qs.length} soal campuran dari seluruh materi ${gname} (Hari ${d.fromNo}–${d.toNo})` : `${qs.length} soal latihan materi Hari ${d.no}`,
    questions: qs, minutes: isTo ? (d.g === 'TIU' ? 45 : 30) : Math.max(10, qs.length)
  };
}

/* ---------- Planning gabungan tujuh hari ---------- */
const COMBINED_DAYS = ['Ukur kemampuan awal', 'Perbaiki konsep terlemah', 'Latih akurasi dan kecepatan',
  'Uji kembali konsep sulit', 'Simulasi kedua', 'Perbaiki kesalahan yang masih muncul', 'Ukur kesiapan akhir'];
const isSimulationDay = day => [1, 5, 7].includes(day);
const combinedKey = (cfg, day, scope) => `PLAN-${cfg.at}-GABUNG-${day}-${scope === 'SKD' ? 'SKD' : cfg.cat}`;

function finalSetName(field) { return 'FINAL-' + field; }

function reservedFinalKeys() {
  if (planCfg?.test !== 'GABUNG' || planQ?.at !== planCfg.at) return [];
  const field = 'SKB_' + planCfg.cat;
  if (results[combinedKey(planCfg, 7, 'SKB')]) return [];
  const saved = planQ.sets?.[finalSetName(field)] || [];
  const idx = planQIndex();
  return saved.map(id => idx.get(questions.resolve(id))).filter(Boolean).map(questions.key);
}

function reserveFinalSkb(cfg) {
  const field = 'SKB_' + cfg.cat;
  const pool = BANK[field] || [];
  const slot = finalSetName(field);
  if (planQ?.at !== cfg.at || !planQ.sets) planQ = { at: cfg.at, sets: {} };
  if (!planQ.sets[slot]) {
    const count = Math.min(SKB_SIZE, pool.length);
    const fresh = selectQuestions(shuffle(pool, slot + cfg.at).filter(q => !seenBefore(q)), count, new Set(), true);
    planQ.sets[slot] = fresh.map(q => q.id);
    store.set(PLANQ_KEY, planQ);
  }
  const idx = planQIndex();
  return planQ.sets[slot].map(id => idx.get(questions.resolve(id))).filter(q => q && bucketOfId[q.id] === field);
}

function combinedPack(cfg, key) {
  const match = /-GABUNG-([1-7])-(SKD|[A-Z0-9_]+)$/.exec(key);
  if (!match) return null;
  const day = Number(match[1]), isSkb = match[2] !== 'SKD';
  const field = 'SKB_' + cfg.cat;
  if (isSkb && (match[2] !== cfg.cat || !targetSkbKeys().includes(field))) return null;
  const scope = isSkb ? field : 'SKD';
  const reserved = isSkb ? reserveFinalSkb(cfg) : [];
  const label = isSkb ? 'SKB ' + skbMeta(field).short : 'SKD';
  const common = { key, plan: true, skbBucket: isSkb ? field : null };
  if (isSimulationDay(day)) {
    const group = isSkb ? field : 'SKD_FULL', packs = packsFor(group);
    if (!packs.length) return null;
    const fullSets = isSkb ? packs.filter(p => p.questions.length === Math.min(SKB_SIZE, bankLen(field))) : packs;
    const base = fullSets[([1, 5, 7].indexOf(day)) % fullSets.length];
    const pack = preparePack(base);
    if (isSkb && day === 7) {
      const fresh = reserved.filter(q => !seenBefore(q));
      const used = new Set(fresh.map(questions.key));
      pack.questions = fresh.concat(selectQuestions(BANK[field], base.questions.length - fresh.length, used, true));
    }
    if (!pack.questions.length) return null;
    return { ...pack, ...common, compose: isSkb ? `${pack.questions.length} soal ${skbMeta(field).short}` : pack.compose,
      title: `Simulasi ${label} · Hari ${day}`, forceTimed: true };
  }
  const fallback = isSkb ? BANK[field] : Object.keys(FULL_MIX).flatMap(c => BANK['SKD_' + c] || []);
  const targeted = weaknessQuestions(scope);
  const qs = targeted.length ? targeted : selectQuestions(shuffle(fallback || []), 12);
  if (!qs.length) return null;
  return { ...common, group: 'PLAN', kind: 'CAT', mode: 'PLAN', adaptive: true,
    title: `Latihan ${label} · Hari ${day}`, compose: targeted.length ? `${qs.length} soal baru dari topik prioritas` : `${qs.length} soal campuran untuk pemetaan awal`,
    questions: qs, minutes: Math.max(10, qs.length) };
}

function renderCombinedPlan(cfg) {
  const field = 'SKB_' + cfg.cat;
  const fieldName = skbMeta(field).short;
  const count = Math.min(SKB_SIZE, bankLen(field));
  const preferred = targetPreference();
  const canPractice = targetSkbKeys().includes(field);
  const rows = COMBINED_DAYS.map((title, i) => {
    const day = i + 1, sim = isSimulationDay(day);
    const skd = combinedKey(cfg, day, 'SKD'), skb = combinedKey(cfg, day, 'SKB');
    return `<details class="mb-3 rounded-2xl border border-base-300 bg-base-100 p-3" ${!results[skd] || !results[skb] ? 'data-pending' : ''}>
      <summary class="cursor-pointer text-sm font-extrabold">Hari ${day} · ${title} · ${Number(!!results[skd]) + Number(!!results[skb])}/2 tugas</summary>
      <div class="mt-3 space-y-2">
        ${planPackRow(skd, sim ? 'Tryout SKD lengkap' : 'Latihan terarah SKD', sim ? '110 soal · 100 menit' : 'Berdasarkan hasil terbaru jika tersedia', results[skd], 'SKD')}
        ${canPractice ? planPackRow(skb, sim ? 'Simulasi SKB ' + fieldName : 'Latihan terarah ' + fieldName,
          sim ? `${count} soal · target ${Math.ceil(count * SKB_TARGET)} benar` : 'Berdasarkan hasil terbaru jika tersedia', results[skb], 'SKB')
          : '<p class="text-sm text-base-content/70">Bank soal bidang ini belum tersedia di perangkat ini. Pilih bidang lain lewat Atur planning.</p>'}
      </div></details>`;
  }).join('');
  shell('planning', `<div class="mx-auto max-w-xl">
    ${pageHead('Planning 7 Hari', `SKD 505/550 · SKB ${esc(fieldName)} 90%`)}
    ${preferred.bucket === field && preferred.role ? `<p class="mb-3 text-sm text-slate-600">Target jabatan <b>${esc(preferred.role)}</b></p>` : ''}
    ${rows}
    <div class="pl-actions">
      <button type="button" class="lx-btn lx-blue" onclick="App.planSetup()">Atur planning</button>
      <button type="button" class="lx-btn lx-red" onclick="App.planReset()">Reset planning</button>
    </div></div>`);
  const current = $('#app details[data-pending]');
  if (current) current.open = true;
}

/* ---------- halaman Planning ---------- */
function renderPlanning() {
  const cfg = planCfg;
  if (cfg?.test === 'GABUNG') { renderCombinedPlan(cfg); return; }
  const days = cfg ? planBuild(cfg) : [];
  const progs = days.map(planDayProg);
  const nowIdx = progs.findIndex(p => !p.full), allDone = days.length > 0 && nowIdx === -1;
  const mean = progs.length ? progs.reduce((a, p) => a + p.pct, 0) / progs.length : 0;
  const pctAll = allDone ? 100 : Math.min(99, Math.floor(mean));
  const nDaysDone = progs.filter(p => p.full).length;

  const actions = `
    <div class="pl-actions">
      <button type="button" class="lx-btn lx-blue" onclick="App.planSetup()">${icon('sliders', 'h-4 w-4')} Atur planning</button>
      <button type="button" class="lx-btn lx-red" ${cfg ? '' : 'disabled'} onclick="App.planReset()">${icon('refresh', 'h-4 w-4')} Reset planning</button>
    </div>`;

  let body = '';
  if (!cfg || !days.length) {
    body = `
    <div class="pl-empty">
      <span class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sky-100 text-sky-700">${icon('calendar', 'h-7 w-7')}</span>
      <h2 class="mt-3 text-base font-extrabold text-slate-900">Belum ada planning</h2>
      <p class="mx-auto mt-1 text-xs leading-relaxed text-slate-600" style="max-width:20rem">Tekan <b>Atur planning</b>, pilih tes (SKD atau SKB) dan berapa hari kamu mau belajar (maks. ${PLAN_MAX} hari). Materi dibagi otomatis, dan tiap bagian ditutup dengan <b>Try Out ${PLAN_TO_N} soal</b>.</p>
    </div>${actions}`;
  } else {
    const label = cfg.test === 'SKB' ? `SKB ${esc(planCatName(cfg.cat))}` : 'SKD';
    const split = planSummary(days).map(r => `${esc(r.g)} ${r.learn} hari + Try Out`).join(' · ');
    const cur = allDone ? days.length : nowIdx + 1;
    const nodes = days.map((d, i) => {
      const p = progs[i], isNow = i === nowIdx, isTo = d.kind === 'tryout';
      const st = (p.full ? 'done' : isNow ? 'now' : 'todo' + (p.pct ? ' part' : '')) + (isTo ? ' to' : '');
      const sub = isTo ? `Try Out ${esc(d.g)} · ${d.n} soal campuran` : `${esc(d.label)} · ${d.units.length} langkah${d.drill ? ' + latihan' : ''}`;
      const inner = p.full ? icon('tick', 'h-8 w-8') : isTo ? icon('clipboard', 'h-7 w-7') : `<span class="pl-pct">${p.pct}<small>%</small></span>`;
      return `
      <div class="lx-step" style="--x:${PLAN_XS[i % PLAN_XS.length]}px">
        <button type="button" class="lx-node pl-node ${st}" style="--pct:${p.pct}" onclick="App.planDay(${d.no})" aria-label="Hari ${d.no}: ${isTo ? 'Try Out ' + esc(d.g) : esc(d.label)}, ${p.full ? 'tuntas' : p.pct + ' persen tuntas'}">
          ${isNow ? `<span class="lx-bubble">${p.pct ? 'LANJUT' : 'MULAI'}</span>` : ''}${inner}
        </button>
        <div class="lx-label ${p.full || isNow || p.pct ? '' : 'dim'}">Hari ${d.no}</div>
        <div class="pl-sub ${isTo ? 'to' : ''}">${sub}</div>
      </div>`;
    }).join('');
    const finalNode = `
      <div class="lx-step" style="--x:${PLAN_XS[days.length % PLAN_XS.length]}px">
        <div class="lx-node final ${allDone ? '' : 'lock'}" role="img" aria-label="${allDone ? 'Planning selesai' : 'Target planning'}">${icon('trophy', 'h-8 w-8')}</div>
        <div class="lx-label ${allDone ? '' : 'dim'}">${allDone ? 'Planning selesai! 🎉' : 'Target selesai'}</div>
      </div>`;
    body = `
    <div class="lx-hero">
      <div class="flex items-center justify-between gap-2">
        <span class="badge border-0 bg-white/20 font-bold text-white">${label}</span>
        <span class="text-xs font-bold text-white/90">Hari ${cur} dari ${days.length}</span>
      </div>
      <h2 class="mt-2 text-xl font-extrabold leading-snug">Planning ${days.length} hari</h2>
      <p class="mt-1 text-xs leading-relaxed text-white/85">${split}</p>
      <div class="mt-3 flex items-center gap-3">
        <div class="lx-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pctAll}"><div class="lx-fill" style="width:${Math.max(pctAll, 4)}%"></div></div>
        <span class="shrink-0 text-xs font-bold text-white">${pctAll}%</span>
      </div>
      <p class="mt-1.5 text-[0.7rem] font-semibold text-white/85">${nDaysDone} dari ${days.length} hari tuntas</p>
      ${allDone ? '' : `<button type="button" class="lx-btn lx-green mt-3" onclick="App.planDay(${cur})">${icon('play', 'h-5 w-5')} ${progs[nowIdx].pct ? 'Lanjutkan' : 'Mulai'} Hari ${cur}</button>`}
    </div>
    ${actions}
    <div class="lx-path" aria-label="Jalur planning belajar">${nodes}${finalNode}</div>`;
  }

  shell('planning', `
    ${breadcrumb([['#/', 'Beranda'], [null, 'Planning']])}
    <div class="mx-auto max-w-xl">
      ${pageHead('Planning Belajar', `Atur berapa hari kamu belajar. Materi dibagi otomatis per hari, tiap bagian ditutup Try Out ${PLAN_TO_N} soal campuran.`)}
      ${body}
    </div>
  `);
}

/* ---------- lembar "Atur planning" ---------- */
function planPaintSetup() {
  const d = planDlg('dlg-plan'), dr = planDraft, cats = planFieldOptions(dr.test);
  const box = d.querySelector('.modal-box'), keep = box ? box.scrollTop : 0;
  const combined = dr.test === 'GABUNG';
  const okSave = dr.test === 'SKD' || cats.includes(dr.cat);
  const minD = planMinDays(dr), maxD = okSave || combined ? planMaxDays(dr) : PLAN_MAX;
  dr.days = Math.max(minD, Math.min(dr.days, maxD));
  const days = okSave && !combined ? planBuild(dr) : [];
  const prev = planSummary(days).map(r => `<li class="flex items-baseline justify-between gap-3"><span class="font-extrabold text-slate-800">${esc(r.g)}</span><span class="text-right text-slate-600">${r.learn} hari belajar + Try Out<span class="block text-[0.7rem] text-slate-500">±${planRange(r.min, r.max)} langkah/hari${r.drill ? ` + latihan harian ${PLAN_DRILL_N} soal` : ''}</span></span></li>`).join('');
  const opt = (on, act, txt, sub) => `<button type="button" class="pl-opt ${on ? 'on' : ''}" aria-pressed="${on}" onclick="${act}">${txt}${sub ? `<span class="block text-[0.68rem] font-semibold opacity-75">${sub}</span>` : ''}</button>`;
  const nG = planLists(dr).length;
  d.innerHTML = `
  <div class="modal-box max-w-md">
    <div class="flex items-start justify-between gap-3">
      <div><h3 class="text-xl font-extrabold text-neutral">Atur planning</h3>
      <p class="mt-0.5 text-sm text-base-content/70">Pilih jadwal gabungan 7 hari atau fokus ke satu tes.</p></div>
      <button class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-plan').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button>
    </div>

    <div class="pl-label mt-4">Tes yang dipelajari</div>
    <div class="pl-seg">${opt(dr.test === 'SKD', "App.planSetTest('SKD')", 'SKD', 'TWK · TIU · TKP')}${opt(dr.test === 'SKB', "App.planSetTest('SKB')", 'SKB', 'Satu bidang formasi')}</div>
    <div class="mt-2">${opt(combined, "App.planSetTest('GABUNG')", 'SKD + SKB', '7 hari · simulasi dan latihan kelemahan')}</div>

    ${dr.test !== 'SKD' ? `
    <div class="pl-label mt-4">Bidang SKB</div>
    <div class="pl-chips">${cats.length
      ? cats.map(c => `<button type="button" class="pl-chip ${dr.cat === c ? 'on' : ''}" aria-pressed="${dr.cat === c}" onclick="App.planSetCat('${esc(c)}')">${esc(planCatName(c))}</button>`).join('')
      : '<span class="text-sm text-slate-500">Belum ada materi SKB.</span>'}</div>` : ''}

    ${combined ? '<p class="mt-3 text-sm text-slate-600">Hari 1, 5, dan 7 untuk simulasi. Hari lainnya untuk memperbaiki hasil sebelumnya.</p>' : `
    <div class="pl-label mt-4">Total hari (termasuk hari Try Out)</div>
    <div class="pl-step">
      <button type="button" onclick="App.planStep(-1)" aria-label="Kurangi hari" ${dr.days <= minD ? 'disabled' : ''}>−</button>
      <input type="number" inputmode="numeric" min="${minD}" max="${maxD}" value="${dr.days}" aria-label="Jumlah hari belajar" onchange="App.planSetDays(this.value)">
      <button type="button" onclick="App.planStep(1)" aria-label="Tambah hari" ${dr.days >= maxD ? 'disabled' : ''}>+</button>
    </div>
    <div class="pl-chips mt-3 justify-center">${[7, 14, 21, 30].filter(n => n >= minD && n <= maxD).map(n => `<button type="button" class="pl-chip ${dr.days === n ? 'on' : ''}" onclick="App.planSetDays(${n})">${n} hari</button>`).join('')}</div>
    <p class="mt-2 text-center text-xs text-slate-500">Minimal ${minD} hari (${nG} hari Try Out + hari belajar)${maxD < PLAN_MAX ? `; materi ini baru ${planTotal(dr)} langkah, jadi maksimal ${maxD} hari.` : `, maksimal ${PLAN_MAX} hari.`}</p>`}

    ${prev ? `<div class="pl-prev"><div class="pl-label" style="margin-bottom:.4rem">Pembagian otomatis</div><ul class="space-y-2">${prev}</ul>
      <p class="mt-2 text-[0.7rem] leading-snug text-slate-500">Try Out: ${PLAN_TO_N} soal campuran dari seluruh materi kelompok itu, diambil dari soal yang belum pernah muncul di langkah materi.</p></div>` : ''}

    <div class="modal-action act-stack">
      <button class="btn btn-ghost" onclick="$('#dlg-plan').close()">Batal</button>
      <button class="btn btn-primary" ${okSave ? '' : 'disabled'} onclick="App.planSave()">${planCfg ? 'Simpan planning' : 'Buat planning'}</button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
  const nb = d.querySelector('.modal-box'); if (nb) nb.scrollTop = keep;
  if (!d.open) d.showModal();
}

/* ---------- lembar detail satu hari ---------- */
function planPackRow(key, title, sub, rec, tag) {
  const st = rec ? `Skor terakhir ${rec.last.score}/${rec.last.max} · terbaik ${rec.best.score}` : 'Belum dikerjakan';
  return `
    <div class="pl-row ${rec ? 'ok' : ''}">
      <div class="min-w-0 flex-1">
        <span class="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[0.65rem] font-extrabold text-amber-900">${tag}</span>
        <div class="pl-row-t mt-1">${esc(title)}</div>
        <div class="pl-row-s">${esc(sub)}</div>
        <div class="pl-row-s" style="color:${rec ? '#15803d' : '#64748b'}">${esc(st)}</div>
      </div>
      <button type="button" class="pl-go" onclick="App.planPack('${esc(key)}')">${rec ? 'Ulangi' : 'Mulai'}</button>
    </div>`;
}
function planDayOpen(no) {
  if (!planCfg) return;
  const day = planBuild(planCfg)[no - 1]; if (!day) return;
  const p = planDayProg(day), isTo = day.kind === 'tryout';
  let rows = '', cta = '';
  if (isTo) {
    rows = planPackRow(day.packKey, `Try Out ${day.g === 'SKB' ? 'SKB ' + planCatName(planCfg.cat) : day.g}`,
      `${day.n} soal campuran dari seluruh materi (Hari ${day.fromNo}–${day.toNo}). Soal baru yang belum muncul di langkah materi.`, p.rec, 'TRY OUT');
    cta = `<button class="btn btn-primary" onclick="App.planPack('${esc(day.packKey)}')">${p.full ? 'Ulangi Try Out' : 'Mulai Try Out'} ${icon('arrowR', 'h-4 w-4')}</button>`;
  } else {
    const first = day.segs.find(s => !planProg(s.units).full);
    rows = day.segs.map(s => {
      const sp = planProg(s.units), total = stepCount(s.t);
      const rng = s.from === s.to ? `Langkah ${s.from + 1}` : `Langkah ${s.from + 1}–${s.to + 1}`;
      return `
    <div class="pl-row ${sp.full ? 'ok' : ''}">
      <div class="min-w-0 flex-1">
        <span class="inline-block rounded-full px-2 py-0.5 text-[0.65rem] font-extrabold ${catStyle(s.t.group).badge}">${s.t.group === 'SKB' ? esc('SKB ' + (s.t.skbCategory || '')) : s.t.group}</span>
        <div class="pl-row-t mt-1">${esc(s.t.title)}</div>
        <div class="pl-row-s">${rng} dari ${total} · ${sp.done}/${sp.n} tuntas${sp.full ? '' : ` · ${sp.pct}%`}</div>
        <div class="lx-track"><div class="lx-fill" style="width:${sp.full ? 100 : Math.max(sp.pct, 3)}%"></div></div>
      </div>
      ${sp.full ? `<span class="pl-ok" aria-label="Tuntas">${icon('tick', 'h-5 w-5')}</span>` : `<button type="button" class="pl-go" onclick="App.planStudy('${esc(s.t.id)}')">${sp.done || sp.pct ? 'Lanjut' : 'Belajar'}</button>`}
    </div>`;
    }).join('');
    if (day.drill) rows += planPackRow(day.drill.key, `Latihan Harian ${day.g}`, `${day.drill.n} soal baru dari materi hari ini — perbanyak latihan, rumus ${day.g} sulit kalau hanya dihafal.`, p.rec, 'LATIHAN HARIAN');
    if (first) cta = `<button class="btn btn-primary" onclick="App.planStudy('${esc(first.t.id)}')">${p.pct ? 'Lanjutkan belajar' : 'Mulai belajar'} ${icon('arrowR', 'h-4 w-4')}</button>`;
    else if (day.drill && !p.rec) cta = `<button class="btn btn-primary" onclick="App.planPack('${esc(day.drill.key)}')">Kerjakan latihan harian ${icon('arrowR', 'h-4 w-4')}</button>`;
  }
  const d = planDlg('dlg-plan-day');
  d.innerHTML = `
  <div class="modal-box max-w-md">
    <div class="flex items-start justify-between gap-3">
      <div><h3 class="text-xl font-extrabold text-neutral">Hari ${day.no}${isTo ? ' · Try Out' : ''}</h3>
      <p class="mt-0.5 text-sm text-base-content/70">${isTo ? `${esc(day.g)} · ${day.n} soal campuran` : `${esc(day.label)} · ${day.units.length} langkah materi + soal${day.drill ? ' + latihan harian' : ''}`}</p></div>
      <button class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-plan-day').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button>
    </div>
    <div class="mt-3 rounded-2xl ${p.full ? 'bg-green-50' : 'bg-slate-100'} p-3">
      <div class="mb-1.5 flex items-baseline justify-between gap-2 text-xs"><span class="font-semibold text-slate-600">${p.full ? 'Hari ini tuntas 🎉' : 'Tuntas hari ini'}</span><b class="text-sm text-slate-900">${p.pct}%</b></div>
      <div class="lx-track"><div class="lx-fill" style="width:${p.full ? 100 : Math.max(p.pct, 3)}%"></div></div>
    </div>
    <div class="mt-3">${rows}</div>
    <div class="modal-action act-stack">
      <button class="btn btn-ghost" onclick="$('#dlg-plan-day').close()">Tutup</button>
      ${cta}
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
  d.showModal();
}

const planApi = {
  planSetup() {
    const c = planCfg, preferred = targetPreference().bucket.slice(4);
    planDraft = c ? { test: c.test, cat: c.cat, days: c.days } : { test: 'GABUNG', cat: '', days: 7 };
    if (preferred && planFieldOptions(planDraft.test).includes(preferred)) planDraft.cat = preferred;
    planPaintSetup();
  },
  planSetTest(t) {
    if (!planDraft) return;
    planDraft.test = t;
    const cats = planFieldOptions(t);
    if (t !== 'SKD' && !cats.includes(planDraft.cat)) {
      const preferred = targetPreference().bucket.slice(4);
      planDraft.cat = cats.includes(preferred) ? preferred : '';
    }
    planPaintSetup();
  },
  planSetCat(c) { if (!planDraft || !planFieldOptions(planDraft.test).includes(c)) return; planDraft.cat = c; planPaintSetup(); },
  planSetDays(v) { if (!planDraft) return; const n = Math.round(Number(v)); planDraft.days = n >= 1 ? n : planDraft.days; planPaintSetup(); },
  planStep(k) { if (!planDraft) return; planDraft.days += k; planPaintSetup(); },
  planSave() {
    if (!planDraft) return;
    const c = planSanitize(Object.assign({}, planDraft, { at: Date.now() }));
    if (!c || (c.test !== 'SKD' && !planFieldOptions(c.test).includes(c.cat))) return;
    c.days = Math.max(planMinDays(c), Math.min(c.days, planMaxDays(c)));
    const unchanged = planCfg?.test === c.test && planCfg.cat === c.cat && planCfg.days === c.days;
    if (unchanged || (c.test === 'GABUNG' && planCfg?.test === 'GABUNG')) c.at = planCfg.at;
    c.updated = Date.now();
    planCfg = c;
    store.set(PLAN_KEY, c);
    if (c.cat) saveStudyTarget(targetPreference().role, 'SKB_' + c.cat);
    if (c.test === 'GABUNG') reserveFinalSkb(c);
    else if (!unchanged) {
      planQ = null; store.del(PLANQ_KEY);
      planGen(c);
    }
    const d = $('#dlg-plan'); if (d && d.open) d.close();
    toast(`Planning ${c.days} hari dibuat.`);
    if (location.hash === '#/planning') renderPlanning(); else go('#/planning');
  },
  async planReset() {
    if (!planCfg) { toast('Belum ada planning.'); return; }
    if (!await ask({ title: 'Reset planning?', text: 'Pengaturan planning (tes, jumlah hari, dan soal Try Out) dihapus. Progres materi dan soal yang sudah kamu kerjakan tidak ikut terhapus.', ok: 'Reset planning', danger: true })) return;
    planCfg = null; planQ = null; store.set(PLAN_KEY, { at: Date.now(), reset: true }); store.del(PLANQ_KEY);
    toast('Planning direset.');
    if (location.hash === '#/planning') renderPlanning();
  },
  planDay: planDayOpen,
  planStudy(id) {
    const t = MATERI.find(x => x.id === id); if (!t) return;
    const d = $('#dlg-plan-day'); if (d && d.open) d.close();
    const i = planNextStep(t);
    if (i < 0) { toast('Semua langkah topik ini sudah selesai.'); return; }
    lessonOpen(id, i);
  },
  planPack(key) {
    const d = $('#dlg-plan-day'); if (d && d.open) d.close();
    if (!planPackByKey(key)) { toast('Soal belum tersedia untuk bagian ini.'); return; }
    openStart(key);
  }
};

/* ==========================================================================
   MESIN UJIAN
   ========================================================================== */
function startExam(pack, opts = {}) {
  if (pack.planSet && planQ && pack.key.startsWith('PLAN-' + planQ.at + '-')) {
    planQ.sets[pack.planSet] = pack.questions.map(q => q.id);
    store.set(PLANQ_KEY, planQ);
  }
  const qs = pack.questions.map((q, i) => Object.assign({}, q, { no: i + 1 }));
  exam = {
    pack, qs, fresh: qs.map(q => !seenBefore(q)),
    answers: new Array(qs.length).fill(null),
    doubts: new Array(qs.length).fill(false),
    idx: 0, filter: 'ALL',
    remaining: pack.minutes ? pack.minutes * 60 : null, tickAt: performance.now(),
    elapsed: 0, spent: new Array(qs.length).fill(0), visible: new Set(), paused: false, finished: false,
    instant: opts.instant !== false, assisted: opts.instant !== false
  };
  if (!timerHandle) timerHandle = setInterval(tick, 1000);
  go('#/ujian');
}
function tick() {
  if (!exam || exam.finished) return;
  const now = performance.now();
  if (exam.paused || location.hash !== '#/ujian') { exam.tickAt = now; return; }
  const seconds = Math.floor((now - exam.tickAt) / 1000);
  if (seconds < 1) return;
  exam.tickAt += seconds * 1000;
  exam.elapsed += seconds;
  if (!document.hidden && seconds <= 2) exam.spent[exam.idx] += seconds;
  if (exam.remaining != null) {
    exam.remaining = Math.max(0, exam.remaining - seconds);
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
  const source = typeof q.source === 'string' && q.source.startsWith('https://jdih.lkpp.go.id/') ? q.source : '';
  return `
  <div class="overflow-hidden rounded-2xl border border-base-300 fade-in">
    <div class="break-words px-4 py-3 text-[0.95rem] font-bold leading-snug ${cls}" role="status">${head}</div>
    <div class="grid gap-3 bg-base-200/50 p-3 text-[0.95rem] sm:p-4 md:grid-cols-2">
      <div class="min-w-0 rounded-xl bg-amber-50 p-3.5 ring-1 ring-amber-200"><div class="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-amber-900">${icon('bolt', 'h-4 w-4')} Cara cepat</div><div class="break-words leading-relaxed">${esc(q.trick) || '—'}</div></div>
      <div class="min-w-0 rounded-xl bg-base-100 p-3.5 ring-1 ring-base-300"><div class="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-primary">${icon('bulb', 'h-4 w-4')} Pembahasan</div><div class="break-words leading-relaxed">${esc(q.explanation) || '—'}</div></div>
    </div>
    ${source ? `<p class="px-3 text-xs"><a class="link link-primary" href="${esc(source)}" target="_blank" rel="noopener">Rujukan JDIH LKPP</a></p>` : ''}
    ${mt ? `<div class="border-t border-base-300 bg-base-100 px-4 py-1.5"><a class="link link-primary inline-flex min-h-[2.75rem] items-center break-words text-sm font-semibold" href="${materiLink(mt, q)}" onclick="App.leaveToMateri()">Pelajari materi: ${esc(mt.title)} →</a></div>` : ''}
  </div>`;
}
/* tombol bilah aksi: ikon + label pendek di mobile, label lengkap di desktop */
const xb = (cls, ic, short, long, onclick, dis) =>
  `<button class="xbtn ${cls}" onclick="${onclick}" ${dis ? 'disabled' : ''}>${icon(ic, 'h-5 w-5 lg:h-4 lg:w-4')}<span class="lg:hidden">${short}</span><span class="hidden lg:inline">${long}</span></button>`;
function paintQuestion() {
  const box = $('#x-q'); if (!box || !exam) return;
  const q = exam.qs[exam.idx], chosen = exam.answers[exam.idx];
  if (!exam.finished) { exam.visible.add(exam.idx); markSeen(q); }
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
      <span class="letter max-lg:!h-9 max-lg:!w-9 max-lg:!text-base">${LETTERS[i]}</span><span class="min-w-0 flex-1 text-base leading-snug lg:pt-1 lg:text-[0.95rem]">${escO(o)}</span>${tag}</button>`;
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
        <span class="w-full text-xs text-base-content/60 sm:ml-auto sm:w-auto sm:text-base-content/50">${rule}${exam.finished && q.category === 'TIU' && exam.spent[exam.idx] ? ` · Waktu ${fmtClock(exam.spent[exam.idx])}` : ''}</span>
      </div>
      <div class="whitespace-pre-line break-words text-[1.08rem] font-medium leading-relaxed text-neutral sm:text-[1.05rem]">${escQ(q)}</div>
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

/* ---------- Riwayat kesalahan & latihan bertopik ---------- */
function reviewBucket(q, pack) {
  if (['TWK', 'TIU', 'TKP'].includes(q.category)) return 'SKD_' + q.category;
  const bucket = bucketOfId[q.id] || pack.skbBucket || pack.group;
  return bucket?.startsWith('SKB_') ? bucket : null;
}

function examIssues() {
  return exam.qs.flatMap((q, i) => {
    const bucket = reviewBucket(q, exam.pack);
    if (!bucket) return [];
    const answer = exam.answers[i], time = exam.spent[i];
    const score = answer === null ? 0 : q.scores[answer];
    const slow = q.category === 'TIU' && time > SLOW_TIU_SECONDS;
    if (score === 5 && !exam.doubts[i] && !slow) return [];
    return [{ id: q.id, bucket, no: i + 1, sub: q.sub, fam: q.fam || '', score, empty: answer === null, doubt: exam.doubts[i], slow, time }];
  });
}

function reviewConcept(i) { return JSON.stringify([i.sub, i.fam || '']); }

function issueWeight(i) { return 5 - i.score + Number(i.doubt) + 2 * Number(i.slow); }

function saveReview() {
  const buckets = new Set(exam.qs.filter((_, i) => exam.visible.has(i) || exam.answers[i] !== null)
    .map(q => reviewBucket(q, exam.pack)).filter(Boolean));
  if (!buckets.size || exam.answers.every(a => a === null)) return;
  const issues = examIssues();
  buckets.forEach(bucket => {
    const previous = reviews[bucket] || {};
    const at = Math.max(Date.now(), (previous.at || 0) + 1);
    const cleared = { ...previous.cleared };
    const weak = issues.filter(i => i.bucket === bucket && (!exam.pack.adaptive || !i.empty));
    const weakConcepts = new Set(weak.map(reviewConcept));
    exam.qs.forEach((q, i) => {
      if (reviewBucket(q, exam.pack) !== bucket || exam.answers[i] === null) return;
      const key = reviewConcept(q);
      const hasHistory = previous.issues?.some(item => reviewConcept(item) === key);
      if (hasHistory && q.scores[exam.answers[i]] === 5 && !weakConcepts.has(key)) cleared[key] = at;
    });
    const saved = ((previous.issues || []).filter(i => !weakConcepts.has(reviewConcept(i)) && (cleared[reviewConcept(i)] || 0) < (i.at || previous.at || 1)))
      .concat(weak.map(i => ({ ...i, at })))
      .sort((a, b) => b.at - a.at || issueWeight(b) - issueWeight(a)).slice(0, 120);
    reviews[bucket] = { at, issues: saved, cleared };
  });
  store.set(REVIEW_KEY, reviews);
}

function reviewIssues(scope) {
  if (scope === 'sesi') return examIssues();
  const selected = targetPreference().bucket;
  return Object.entries(reviews).flatMap(([bucket, rec]) => {
    const include = scope === 'ALL'
      ? bucket.startsWith('SKD_') || !selected || bucket === selected
      : scope === bucket || (scope === 'SKD' && bucket.startsWith('SKD_'));
    return include ? rec.issues : [];
  });
}

function weaknessQuestions(scope, number) {
  const topics = new Map(), bankIndex = planQIndex();
  for (const issue of reviewIssues(scope)) {
    if (number && issue.no !== number) continue;
    const key = JSON.stringify([issue.bucket, issue.sub, issue.fam]);
    const topic = topics.get(key) || { ...issue, weight: 0, sources: new Set() };
    topic.weight += issueWeight(issue);
    const source = bankIndex.get(questions.resolve(issue.id));
    if (source) topic.sources.add(questions.key(source));
    topics.set(key, topic);
  }
  const orderedTopics = [...topics.values()].sort((a, b) => b.weight - a.weight);
  const used = new Set(), selected = [];
  let active = 0;
  for (const topic of orderedTopics) {
    const fresh = shuffle(BANK[topic.bucket] || []).filter(q => !seenBefore(q) && !topic.sources.has(questions.key(q)));
    const preferred = fresh.filter(q => topic.fam && q.fam === topic.fam);
    const sameSub = fresh.filter(q => q.sub === topic.sub);
    const set = selectQuestions(preferred.concat(sameSub), number ? 1 : 4, used);
    if (!set.length) continue;
    selected.push(...set);
    set.forEach(q => used.add(questions.key(q)));
    if (++active === 3) break;
  }
  return selected;
}

function issueLabel(i) {
  return [i.empty ? 'Kosong' : i.score < 5 ? (i.bucket === 'SKD_TKP' ? `TKP ${i.score}/5` : 'Salah') : '',
    i.doubt ? 'Ragu' : '', i.slow ? `Lambat (${fmtClock(i.time)})` : ''].filter(Boolean).join(' · ');
}

function reviewSummary(scope) {
  const list = reviewIssues(scope);
  if (!list.length) return '';
  const slow = list.filter(i => i.slow).sort((a, b) => b.time - a.time);
  const slowRows = slow.map(i => {
    const q = planQIndex().get(questions.resolve(i.id));
    return `<li class="mt-2 text-sm"><b>Soal ${i.no} · ${esc(i.sub)} · ${fmtClock(i.time)}</b>
      ${scope === 'sesi' ? `<button type="button" class="link link-primary" onclick="$('#dlg-result').close(); App.goto(${i.no - 1})">Buka soal</button>
        <button type="button" class="link link-primary" onclick="App.startWeakness('sesi', ${i.no})">Coba soal sejenis</button>` : ''}
      ${q?.trick ? `<p>${esc(q.trick)}</p>` : ''}</li>`;
  }).join('');
  return `<div class="rounded-xl border border-base-300 p-3">
    <h4 class="font-extrabold">Latihan berikutnya</h4>
    <p class="text-sm text-base-content/70">${list.length} soal perlu ditinjau · ${slow.length} soal TIU di atas ${SLOW_TIU_SECONDS} detik</p>
    ${slowRows ? `<details class="mb-2"><summary class="cursor-pointer text-sm font-bold">Lihat soal lambat dan cara cepat</summary><ul>${slowRows}</ul></details>` : ''}
    ${scope !== 'sesi' ? `<details class="mb-2"><summary class="cursor-pointer text-sm font-bold">Lihat kelemahan yang belum dikuasai</summary><ul>${list.slice().sort((a, b) => issueWeight(b) - issueWeight(a)).map(i =>
      `<li class="mt-1 text-sm"><b>${esc(i.sub)}</b> · ${issueLabel(i)}</li>`).join('')}</ul></details>` : ''}
    <button type="button" class="btn btn-primary btn-sm mt-2" onclick="App.startWeakness('${scope}')">Latih 3 kelemahan saya</button>
  </div>`;
}

/* ---------- Dasbor profil ---------- */
const PROFILE_SECTIONS = {
  TWK: { label: 'Wawasan Kebangsaan', target: 140, accent: 'twk' },
  TIU: { label: 'Intelegensia Umum', target: 160, accent: 'tiu' },
  TKP: { label: 'Karakteristik Pribadi', target: 205, accent: 'tkp' }
};
const profileStamp = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

function profileChart(points, max, target, label, compact = false) {
  const width = compact ? 232 : 584, height = compact ? 82 : 175;
  const left = compact ? 12 : 42, right = width - 18, top = 9, bottom = height - (compact ? 8 : 24);
  const x = i => points.length === 1 ? (left + right) / 2 : left + (right - left) * i / (points.length - 1);
  const y = value => bottom - (bottom - top) * Math.max(0, Math.min(max, value)) / max;
  const xy = points.map((p, i) => `${x(i)},${y(p.score)}`).join(' ');
  const grid = [0, 0.5, 1].map(r => {
    const value = Math.round(r * max), at = y(value);
    return `<path class="pf-gridline" d="M${left} ${at}H${right}"/>${compact ? '' : `<text x="2" y="${at + 4}">${value}</text>`}`;
  }).join('');
  const marks = points.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.score)}" r="${compact ? 3.2 : 4.5}" class="${p.repeated ? 'pf-mark pf-mark-repeat' : 'pf-mark'}">
    <title>Percobaan ${p.no} · ${p.score}/${max}</title></circle>
    ${compact ? '' : `<text x="${x(i)}" y="${height - 6}" text-anchor="middle">${p.no}</text>`}`).join('');
  return `<svg class="pf-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(label)}: ${points.map(p => p.score).join(', ')} dari ${max}">
    ${grid}<path class="pf-goal" d="M${left} ${y(target)}H${right}"/>
    <polyline class="pf-line" points="${xy}"/>${marks}</svg>`;
}

function profileTopics(scope) {
  const counts = new Map();
  for (const issue of reviewIssues(scope)) {
    const row = counts.get(issue.sub) || { label: issue.sub, weight: 0, count: 0 };
    row.count++;
    row.weight += issueWeight(issue);
    counts.set(issue.sub, row);
  }
  return [...counts.values()].sort((a, b) => b.weight - a.weight || b.count - a.count);
}

function profileSectionCard(key, attempts, priority) {
  const section = PROFILE_SECTIONS[key], max = FULL_MIX[key] * 5, scope = 'SKD_' + key;
  const series = attempts.flatMap(({ record, no }) => {
    const item = record.parts?.[key];
    return item?.max === max ? [{ score: item.score, no }] : [];
  });
  const latest = series.at(-1);
  const topics = profileTopics(scope).slice(0, 2);
  return `<article class="pf-skill pf-tone-${section.accent}">
    <div class="pf-card-top">
      <div><h4>${key}</h4><p>${section.label}</p></div>
      ${priority ? '<span class="pf-priority">Prioritas latihan</span>' : ''}
    </div>
    <div class="pf-skill-score">${latest ? fmtNum(latest.score) : '—'} <span>/ ${max}</span></div>
    <p class="pf-caption">Target latihan ${section.target}/${max}${latest && series.length > 1
      ? ' · ' + signedScore(latest.score - series.at(-2).score) + ' poin' : ''}</p>
    ${series.length ? profileChart(series, max, section.target, 'Tren ' + key, true)
      : '<div class="pf-skill-empty">Tercatat setelah tryout SKD lengkap</div>'}
    ${topics.length ? `<div class="pf-topic">
      <p>Topik yang perlu diperkuat</p>
      <ul>${topics.map(topic => `<li>${esc(topic.label)}</li>`).join('')}</ul>
      <button type="button" class="pf-text-btn" onclick="$('#dlg-profile').close(); App.openReview('${scope}')">Latih ${key} ${icon('arrowR', 'h-4 w-4')}</button>
    </div>` : ''}
  </article>`;
}

function signedScore(n) { return (n > 0 ? '+' : n < 0 ? '−' : '') + fmtNum(Math.abs(n)); }

function profileProgressHTML(scope = 'SKD_FULL') {
  const options = ['SKD_FULL', ...targetSkbKeys()];
  if (!options.includes(scope)) scope = 'SKD_FULL';
  const isSkd = scope === 'SKD_FULL';
  const max = isSkd ? 550 : Math.min(SKB_SIZE, bankLen(scope)) * 5;
  const target = isSkd ? SKD_TARGET : Math.ceil(max * SKB_TARGET);
  const comparable = examHistory.filter(r => r.group === scope && r.max === max).sort((a, b) => a.date - b.date);
  const scored = comparable.filter(r => !r.assisted);
  const shown = scored.slice(-7).map((record, i) => ({ record, no: scored.length - Math.min(7, scored.length) + i + 1 }));
  const latest = scored.at(-1);
  const delta = scored.length > 1 ? latest.score - scored.at(-2).score : null;
  const older = Object.entries(results).filter(([key, rec]) => key.startsWith(scope + '-') && rec.last?.date && rec.last.max === max)
    .map(([, rec]) => rec.last).sort((a, b) => b.date - a.date)[0];
  const fallback = !latest && !comparable.length && older;
  const assisted = comparable.filter(r => r.assisted).slice(-3);
  const focus = Object.keys(PROFILE_SECTIONS).reduce((weakest, key) => {
    const part = latest?.parts?.[key], maxPart = FULL_MIX[key] * 5;
    if (!part || part.max !== maxPart) return weakest;
    const gap = (PROFILE_SECTIONS[key].target - part.score) / part.max;
    return gap > weakest.gap ? { key, gap } : weakest;
  }, { key: null, gap: 0 }).key;
  const scopeName = isSkd ? 'SKD lengkap' : 'SKB ' + skbMeta(scope).short;

  const summary = `<div class="pf-section-head">
    <div><h3 id="profile-tryout-title">Perkembangan tryout</h3><p>${isSkd ? 'SKD · TWK, TIU, dan TKP' : esc(scopeName)}</p></div>
    <div class="pf-picker"><label for="profile-score-test">Jenis tes</label>
      <select id="profile-score-test" class="select select-bordered" onchange="App.showProfileProgress(this.value)">
        ${options.map(key => `<option value="${esc(key)}"${key === scope ? ' selected' : ''}>${key === 'SKD_FULL' ? 'SKD lengkap' : 'SKB · ' + esc(skbMeta(key).short)}</option>`).join('')}
      </select>
    </div>
  </div>`;

  const primary = latest ? `<div class="pf-overview">
    <div class="pf-kpis">
      <div><span>Nilai terbaru</span><strong>${fmtNum(latest.score)}<small>/${max}</small></strong></div>
      <div><span>Dari percobaan sebelumnya</span><strong class="${delta > 0 ? 'pf-trend-up' : delta < 0 ? 'pf-trend-down' : ''}">${delta === null ? '—' : signedScore(delta) + ' poin'}</strong></div>
      <div><span>Target latihan</span><strong>${target}<small>/${max}</small></strong></div>
    </div>
    ${profileChart(shown.map(({ record, no }) => ({ score: record.score, repeated: record.fresh * 5 < max, no })), max, target, 'Tren ' + scopeName)}
    <div class="pf-legend"><span class="pf-legend-goal">Target latihan</span><span class="pf-legend-repeat">Memuat soal pengulangan</span></div>
  </div>` : `<div class="pf-empty">
    <span class="pf-empty-icon">${icon('trophy', 'h-6 w-6')}</span>
    <div><strong>${fallback ? `Skor tersimpan ${older.score}/${max}` : 'Grafik menunggu tryout pertama'}</strong>
      <p>${fallback ? 'Riwayat lama belum memuat rincian per bagian. Mulai tryout baru untuk membentuk tren.' : 'Grafik membandingkan tryout tanpa jeda dan tanpa Bahas instan.'}</p></div>
    <a class="btn btn-primary btn-sm" href="${isSkd ? '#/skd' : '#/skb/' + esc(scope)}" onclick="$('#dlg-profile').close()">Buka tryout</a>
  </div>`;

  const skills = isSkd ? `<section class="pf-breakdown" aria-labelledby="profile-sections-title">
    <div class="pf-section-head"><div><h3 id="profile-sections-title">Rincian SKD</h3><p>Tren tiap bagian memakai percobaan SKD lengkap yang sama.</p></div></div>
    <div class="pf-skills">${Object.keys(PROFILE_SECTIONS).map(key => profileSectionCard(key, shown, focus === key)).join('')}</div>
  </section>` : '';
  const topics = isSkd ? [] : profileTopics(scope).slice(0, 4);
  const weaknesses = !isSkd && topics.length ? `<section class="pf-skill">
    <h4>Topik yang perlu diperkuat</h4>
    <ul class="pf-skb-topics">${topics.map(t => `<li>${esc(t.label)} <span>${t.count} catatan</span></li>`).join('')}</ul>
    <button class="pf-text-btn" type="button" onclick="$('#dlg-profile').close(); App.openReview('${esc(scope)}')">Latih kelemahan SKB ${icon('arrowR', 'h-4 w-4')}</button>
  </section>` : '';

  const history = shown.length ? `<details class="pf-history">
    <summary>Riwayat percobaan <span>${shown.length} terbaru</span></summary>
    <ol>${shown.slice().reverse().map(({ record, no }) => `<li>
      <div><b>Percobaan ${no}</b><span>${esc(profileStamp.format(record.date))} · ${record.lessons} langkah materi selesai</span></div>
      <div><b>${record.score}/${record.max}</b><span>${record.fresh}/${max / 5} soal baru</span></div>
    </li>`).join('')}</ol>
  </details>` : '';
  const assistedList = assisted.length ? `<details class="pf-history">
    <summary>Latihan dengan jeda atau pembahasan instan</summary>
    <ol>${assisted.slice().reverse().map(record => `<li><div>${esc(profileStamp.format(record.date))}</div><b>${record.score}/${record.max}</b></li>`).join('')}</ol>
  </details>` : '';
  return `<section class="pf-tryout" aria-labelledby="profile-tryout-title">${summary}${primary}</section>
    ${skills}${weaknesses}${history}${assistedList}`;
}

function openReview(scope = 'ALL') {
  const d = planDlg('dlg-review');
  d.innerHTML = `<div class="modal-box max-w-xl"><h3 class="mb-3 text-lg font-extrabold">Latihan dari hasil tryout</h3>
    ${reviewSummary(scope) || '<p>Belum ada kelemahan yang tercatat. Mulai dari satu tryout.</p>'}
    <form method="dialog" class="modal-action"><button class="btn">Tutup</button></form></div>`;
  if (!d.open) d.showModal();
}

function startWeakness(scope, number) {
  const qs = weaknessQuestions(scope, number);
  if (!qs.length) { toast('Soal baru untuk topik ini sudah habis. Gunakan pembahasan atau coba topik lain.'); return; }
  ['#dlg-review', '#dlg-result'].forEach(id => { const d = $(id); if (d?.open) d.close(); });
  const bucket = reviewBucket(qs[0], {});
  const reviewScope = scope === 'sesi' ? (bucket?.startsWith('SKB_') ? bucket : 'SKD') : scope;
  startExam({ key: 'KELEMAHAN', group: 'REVIEW', kind: 'LATIHAN', mode: 'REVIEW',
    adaptive: true, reviewScope, noSave: true, minutes: 0, title: 'Latihan kelemahan',
    compose: `${qs.length} soal baru dari topik prioritas`, questions: qs }, { instant: true });
}

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
function scoreByExposure() {
  const splits = [{ label: 'Soal baru', score: 0, max: 0 }, { label: 'Soal pengulangan', score: 0, max: 0 }];
  exam.qs.forEach((q, i) => {
    const out = splits[exam.fresh[i] ? 0 : 1];
    out.max += 5;
    if (exam.answers[i] !== null) out.score += q.scores[exam.answers[i]];
  });
  return splits;
}

function tiuScores() {
  const out = {};
  exam.qs.forEach((q, i) => {
    const type = tiuType(q);
    if (!type) return;
    const part = out[type] ||= { score: 0, max: 0 };
    part.max += 5;
    if (exam.answers[i] !== null) part.score += q.scores[exam.answers[i]];
  });
  return out;
}

function saveExamHistory(r) {
  const group = exam.pack.kind === 'FULL' ? 'SKD_FULL'
    : exam.pack.skbBucket || (exam.pack.group.startsWith('SKB_') ? exam.pack.group : '');
  if (!group || r.answered < 1 || exam.pack.adaptive) return;
  const date = Date.now(), parts = { ...r.sum, ...tiuScores() };
  examHistory = [...examHistory, {
    id: date + ':' + Math.random().toString(36).slice(2), date, group,
    score: r.total, max: r.max, parts,
    fresh: scoreByExposure()[0].max / 5, assisted: exam.assisted || exam.pauseUsed || false,
    lessons: MATERI.filter(t => group === 'SKD_FULL' ? t.group !== 'SKB' : 'SKB_' + t.skbCategory === group)
      .reduce((n, t) => n + Object.values(lessonStore[t.id]?.done || {}).filter(Boolean).length, 0)
  }].slice(-160);
  store.set(HISTORY_KEY, examHistory);
}

function openResult() {
  if (!exam) return;
  const r = computeResult();
  const split = scoreByExposure();
  const tiu = Object.entries(tiuScores());
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

  const field = exam.pack.skbBucket || exam.pack.group;
  const target = full ? SKD_TARGET : (field.startsWith('SKB_') ? Math.ceil(r.max * SKB_TARGET) : null);
  if (target) {
    const msg = r.total >= target ? 'Target latihan tercapai.' : `Perlu tambahan ${target - r.total} poin untuk mencapai target latihan.`;
    verdict += `<p class="text-sm text-base-content/80"><b>Target ${full ? 'SKD ' + SKD_TARGET + '/550' : 'SKB ' + esc(skbMeta(field).short) + ' 90%'}.</b> ${msg}</p>`;
  }

  const weak = Object.values(r.bySub).filter(o => o.score / o.max < 0.8)
    .sort((a, b) => a.score / a.max - b.score / b.max).slice(0, 5);
  const weakHtml = weak.length ? `
    <div><h4 class="mb-2 font-bold text-neutral">Topik yang perlu diperkuat</h4>
    <ul class="space-y-1.5">${weak.map(o => {
      const m = materiForQuestion(o.q);
      return `<li class="flex items-center justify-between gap-3 rounded-xl bg-base-200/70 px-3 py-2 text-sm"><span class="min-w-0 break-words leading-snug">${esc(o.q.sub)} <span class="whitespace-nowrap text-xs text-base-content/60">(${Math.round(o.score / o.max * 100)}%)</span></span>
        ${m ? `<a class="btn btn-accent btn-sm shrink-0" href="${materiLink(m, o.q)}" onclick="App.leaveToMateri()">Pelajari</a>` : ''}</li>`;
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
      <p class="text-sm text-base-content/70">${split.filter(item => item.max).map(item => `${item.label} ${item.score}/${item.max} (${item.max / 5} soal)`).join(' · ')}</p>
      ${tiu.length ? `<p class="text-sm text-base-content/70">TIU · ${tiu.map(([name, item]) => `${name} ${item.score}/${item.max}`).join(' · ')}</p>` : ''}
      ${weakHtml}
      ${reviewSummary('sesi')}
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
  saveReview();
  if (!exam.pack.noSave) {
    const r = computeResult();
    saveExamHistory(r);
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
let pendingPack = null;
function openStart(key) {
  const pack = findPack(key); if (!pack) return;
  const p = pendingPack = preparePack(pack);
  const d = $('#dlg-start');
  const hasTkp = p.questions.some(q => q.category === 'TKP');
  const rules = p.kind === 'FULL'
    ? 'TWK &amp; TIU: benar +5, salah 0. TKP: tiap opsi bernilai 1–5. Soal kosong bernilai 0.'
    : hasTkp ? 'TKP: tiap opsi bernilai 1–5, kosong 0.' : 'Benar +5, salah atau kosong 0.';
  const fresh = p.questions.filter(q => !seenBefore(q)).length;
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
      <li class="flex gap-2">${icon('bolt', 'h-4 w-4 shrink-0 text-primary')}<span>${fresh} soal belum pernah dibuka${fresh < p.questions.length ? ` · ${p.questions.length - fresh} soal untuk pengulangan` : ''}</span></li>
      <li class="flex gap-2">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>Waktu bisa dijeda dari menu titik tiga (⋮) di pojok kanan atas.</span></li>
      <li class="hidden gap-2 md:flex">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>Pintasan keyboard: A–E untuk memilih, ← → untuk pindah soal.</span></li>
    </ul>
    ${p.forceTimed ? '<p class="mt-4 text-xs text-base-content/70">Pembahasan tersedia setelah simulasi selesai.</p>' : `<label class="mt-4 flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-base-200 px-4 py-3">
      <span><span class="block text-sm font-semibold text-neutral">Bahas instan</span><span class="text-xs text-base-content/60">Kunci &amp; pembahasan langsung tampil setelah menjawab. Matikan untuk suasana ujian sebenarnya.</span></span>
      <input type="checkbox" id="st-instant" class="toggle toggle-primary shrink-0" ${store.get('cpns_instant', p.kind !== 'FULL') ? 'checked' : ''}>
    </label>`}
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
        ${exam.finished || exam.pack.forceTimed ? '' : `<label class="flex cursor-pointer items-center justify-between gap-3 px-3 py-3.5"><span class="flex items-center gap-3 text-[0.95rem] font-semibold">${icon('bulb', 'h-5 w-5 shrink-0 text-neutral')}Bahas instan</span><input type="checkbox" class="toggle toggle-primary shrink-0" ${exam.instant ? 'checked' : ''} onchange="App.toggleInstant(this.checked)"></label>`}
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
  ...rangkumanApi,
  ...planApi,
  openStart, openDb,
  /* v33: menu garis tiga (HP): Input DB / Profil */
  toggleHMenu(ev) {
    if (ev) ev.stopPropagation();
    const m = $('#hmenu'); if (!m) return;
    m.hidden = !m.hidden;
    const b = $('.mburger'); if (b) b.setAttribute('aria-expanded', String(!m.hidden));
  },
  hmenu(which) {
    const m = $('#hmenu'); if (m) m.hidden = true;
    const b = $('.mburger'); if (b) b.setAttribute('aria-expanded', 'false');
    if (which === 'notif' && window.CPNSNotif) window.CPNSNotif.open();
    else if (which === 'profile' && window.Auth) window.Auth.openProfile();
  },

  confirmStart(key) {
    const p = pendingPack;
    if (!p || p.key !== key) return;
    pendingPack = null;
    const inst = !p.forceTimed && $('#st-instant').checked;
    if (!p.forceTimed) store.set('cpns_instant', inst);
    $('#dlg-start').close();
    startExam(p, { instant: inst });
  },
  startMateriPractice(id) {
    const t = MATERI.find(x => x.id === id); if (!t) return;
    const pool = materiPool(t).filter(questions.valid);
    if (!pool.length) { toast('Belum ada soal untuk topik ini.'); return; }
    const qs = selectQuestions(shuffle(pool), 10);
    startExam({
      key: 'MATERI-' + id, group: 'MATERI', kind: 'LATIHAN', mode: 'LATIHAN', noSave: true, minutes: 0,
      title: 'Latihan: ' + t.title, compose: `${qs.length} soal latihan topik`, questions: qs
    }, { instant: true });
  },

  /* navigasi soal */
  pick(i) {
    if (!exam || exam.finished || exam.paused) return;
    exam.answers[exam.idx] = i;
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
  togglePause() { if (!exam || exam.finished) return; exam.paused = !exam.paused; if (exam.paused) exam.pauseUsed = true; exam.tickAt = performance.now(); if (document.activeElement) document.activeElement.blur(); paintQuestion(); const l = $('#x-pause-lbl'); if (l) l.textContent = exam.paused ? 'Lanjutkan waktu' : 'Jeda waktu'; },
  toggleInstant(v) { if (exam.pack.forceTimed) return; exam.instant = v; if (v) exam.assisted = true; store.set('cpns_instant', v); paintQuestion(); paintSide(); },
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
  targetEditorHTML,
  targetPreference,
  profileFieldName: bucket => bucket ? skbMeta(bucket).name : '',
  profileProgressHTML,
  showProfileProgress(scope) {
    const view = $('#profile-progress');
    if (!view) return;
    view.innerHTML = profileProgressHTML(scope);
    const selected = $('#profile-score-test');
    const dialog = $('#dlg-profile');
    if (dialog && selected) dialog.dataset.scope = selected.value;
    selected?.focus({ preventScroll: true });
  },
  saveTarget(event) {
    event.preventDefault();
    const form = event.currentTarget;
    saveStudyTarget(form.elements.targetRole.value, form.elements.targetBucket.value, form.elements.targetName?.value);
    const dialog = form.closest?.('#dlg-profile');
    if (!exam || exam.finished) route();
    if (dialog?.open) window.Auth?.openProfile(dialog.dataset.scope, 'Profil tersimpan.');
    return false;
  },
  openReview,
  startWeakness,
  async restartExam(skipAsk) {
    if (!exam) return;
    if (!skipAsk && !exam.finished) {
      if (!await ask({ title: 'Mulai ulang paket?', text: 'Semua jawaban pada sesi ini akan dihapus.', ok: 'Mulai ulang', danger: true })) return;
    }
    const d = $('#dlg-result'); if (d.open) d.close();
    const p = exam.pack, inst = exam.instant;
    if (p.group === 'MATERI') App.startMateriPractice(p.key.replace('MATERI-', ''));
    else if (exam.finished && p.adaptive && !p.plan) startWeakness(p.reviewScope);
    else startExam(exam.finished ? preparePack(findPack(p.key) || p) : p, { instant: inst });
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
    const back = exam && exam.pack.plan ? '#/planning'
      : exam && exam.pack.group === 'MATERI' ? '#/materi'
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
    seen.clear(); seenKeys.clear(); seenPatterns.clear(); results = {};
    reviews = {}; store.set(REVIEW_KEY, reviews); examHistory = []; store.set(HISTORY_KEY, examHistory);
    store.del('cpns_seen_qids_v2'); store.del('cpns_results_v3');
    toast('Progres direset.'); route();
  }
};
window.App = App;

/* ---------- pengaman: jangan sampai sesi ujian hilang karena refresh/tutup tab tak sengaja ---------- */
window.addEventListener('beforeunload', e => {
  if (exam && !exam.finished && location.hash === '#/ujian') { e.preventDefault(); e.returnValue = ''; }
});

/* ---------- v33: tutup menu garis tiga bila klik di luar / tekan Esc ---------- */
document.addEventListener('click', e => {
  const m = $('#hmenu');
  if (m && !m.hidden && !e.target.closest('#hmenu') && !e.target.closest('.mburger')) { m.hidden = true; const b = $('.mburger'); if (b) b.setAttribute('aria-expanded', 'false'); }
});
document.addEventListener('keydown', e => {
  const m = $('#hmenu');
  if (e.key === 'Escape' && m && !m.hidden) { m.hidden = true; const b = $('.mburger'); if (b) b.setAttribute('aria-expanded', 'false'); }
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
  function updateBankIndex() {
    indexBuckets();
    const ids = Array.from(seen, questions.resolve);
    seen.clear();
    ids.forEach(id => seen.add(id));
    const idx = planQIndex();
    seen.forEach(id => {
      const q = idx.get(id);
      if (q) { seenKeys.add(questions.key(q)); seenPatterns.add(questions.pattern(q)); }
    });
  }
  updateBankIndex();
  if (planCfg?.test === 'GABUNG' && targetSkbKeys().includes('SKB_' + planCfg.cat)) reserveFinalSkb(planCfg);
  window.__onDbChange = () => {
    lxChoices.clear(); lxPlans.clear();
    updateBankIndex();
    if (!exam && location.hash !== '#/ujian') route();
  };
  route();
}
init();
