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
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ } },
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
const ui = { skdTab: 'SKD_FULL', materiGroup: 'ALL' };
let exam = null;         // sesi ujian aktif
let timerHandle = null;

const ROUTES = {
  '': renderHome, skd: renderSkd, skb: renderSkb, materi: renderMateri, ujian: renderExam
};
function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const view = ROUTES[parts[0]] ? parts[0] : '';
  if (view !== 'ujian') { const d = $('#dlg-nums'); if (d && d.open) d.close(); }
  ROUTES[view](parts[1] ? decodeURIComponent(parts[1]) : null);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
const go = h => { if (location.hash === h) route(); else location.hash = h; };

/* ---------- kerangka halaman ---------- */
function navbar(active) {
  const links = [['', 'Beranda'], ['materi', 'Materi'], ['skd', 'SKD'], ['skb', 'SKB']];
  const li = links.map(([h, t]) =>
    `<li><a href="#/${h}" class="${active === h ? 'bg-primary/10 font-semibold text-primary' : ''}">${t}</a></li>`).join('');
  const tabs = links.map(([h, t]) =>
    `<a href="#/${h}" class="tab ${active === h ? 'tab-active font-semibold' : ''}">${t}</a>`).join('');
  return `
  <header class="sticky top-0 z-30 border-b border-base-300/70 bg-base-100/85 backdrop-blur">
    <div class="navbar mx-auto max-w-6xl px-4">
      <div class="navbar-start">
        <a href="#/" class="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-neutral">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-black text-primary-content shadow-sm">CAT</span>
          <span>CPNS <span class="font-semibold text-primary">Belajar</span></span>
        </a>
      </div>
      <div class="navbar-center hidden md:flex"><ul class="menu menu-horizontal gap-1 px-1">${li}</ul></div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-sm gap-2" onclick="App.openDb()" aria-label="Kelola database soal">${icon('db', 'h-4 w-4')}<span class="hidden sm:inline">Database</span></button>
      </div>
    </div>
    <div role="tablist" class="tabs tabs-bordered mx-auto max-w-6xl justify-center md:hidden">${tabs}</div>
  </header>`;
}
function shell(active, inner) {
  $('#app').innerHTML = `
    ${navbar(active)}
    <main class="fade-in mx-auto w-full max-w-6xl px-4 pb-16">${inner}</main>
    <footer class="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-base-content/50">
      Simulasi belajar mandiri — bukan produk resmi BKN. Selalu cek regulasi terbaru pada sumber resmi.
    </footer>`;
}
function breadcrumb(items) {
  return `<div class="breadcrumbs pt-5 text-sm"><ul>${items.map(([h, t]) =>
    h ? `<li><a href="${h}">${t}</a></li>` : `<li class="font-semibold">${t}</li>`).join('')}</ul></div>`;
}
function pageHead(title, sub, extra = '') {
  return `<div class="mb-6 mt-1 flex flex-wrap items-end justify-between gap-3">
    <div><h1 class="text-2xl font-extrabold tracking-tight text-neutral sm:text-3xl">${title}</h1>
    <p class="mt-1 max-w-2xl text-sm text-base-content/70">${sub}</p></div>${extra}</div>`;
}

/* ---------- BERANDA ---------- */
function renderHome() {
  const skdTot = bankLen('SKD_TWK') + bankLen('SKD_TIU') + bankLen('SKD_TKP');
  const skbTot = skbKeys().reduce((a, k) => a + bankLen(k), 0);
  const done = Object.keys(results).length;
  const resume = exam && !exam.finished
    ? `<div role="alert" class="alert mx-auto mb-8 max-w-2xl border-primary/30 bg-primary/10">
         ${icon('clock', 'h-5 w-5 text-primary')}
         <div><div class="font-semibold">Sesi ujian belum selesai</div><div class="text-xs">${esc(exam.pack.title)} — ${exam.answers.filter(a => a !== null).length}/${exam.qs.length} terjawab</div></div>
         <a href="#/ujian" class="btn btn-primary btn-sm">Lanjutkan</a>
       </div>` : '';

  const card = (href, color, ic, label, title, text, chips, cta) => `
    <a href="${href}" class="group card border border-base-300 bg-base-100 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div class="card-body gap-4 p-7">
        <div class="flex items-center justify-between">
          <span class="grid h-14 w-14 place-items-center rounded-2xl ${color.icon}">${icon(ic, 'h-7 w-7')}</span>
          <span class="badge badge-outline ${color.badge}">${label}</span>
        </div>
        <div>
          <h2 class="card-title text-xl text-neutral">${title}</h2>
          <p class="mt-1 text-sm leading-relaxed text-base-content/70">${text}</p>
        </div>
        <div class="flex flex-wrap gap-2">${chips.map(c => `<span class="badge badge-ghost">${c}</span>`).join('')}</div>
        <div class="card-actions mt-auto pt-1"><span class="btn ${color.btn} w-full gap-2">${cta}${icon('arrowR', 'h-4 w-4 transition group-hover:translate-x-1')}</span></div>
      </div>
    </a>`;

  shell('', `
    <section class="pb-10 pt-12 text-center sm:pt-16">
      <span class="badge badge-primary badge-outline mb-5 px-4 py-3 font-semibold">Belajar • Latihan • Simulasi CAT</span>
      <h1 class="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-neutral sm:text-5xl">
        Siap lolos seleksi <span class="text-primary">CPNS</span>?
      </h1>
      <p class="mx-auto mt-4 max-w-xl text-base text-base-content/70">
        Mulai dari materi dan trik cepat, lanjut latihan per paket, lalu uji kemampuanmu lewat simulasi ujian.
      </p>
      <div class="stats mx-auto mt-8 border border-base-300 bg-base-100 shadow-sm">
        <div class="stat px-6 py-3"><div class="stat-title text-xs">Bank soal</div><div class="stat-value text-2xl text-primary">${fmtNum(bankTotal())}</div></div>
        <div class="stat px-6 py-3"><div class="stat-title text-xs">Soal dikerjakan</div><div class="stat-value text-2xl text-secondary">${fmtNum(seen.size)}</div></div>
        <div class="stat px-6 py-3"><div class="stat-title text-xs">Paket selesai</div><div class="stat-value text-2xl text-accent">${fmtNum(done)}</div></div>
      </div>
    </section>
    ${resume}
    <section class="grid gap-6 md:grid-cols-3" aria-label="Pilih jalur belajar">
      ${card('#/materi', { icon: 'bg-teal-100 text-teal-700', badge: 'border-teal-300 text-teal-700', btn: 'btn-accent' }, 'book', 'Belajar',
        'Materi', 'Ringkasan materi, cara menjawab cepat, contoh soal, dan latihan per topik.',
        [`${MATERI.length} topik`, 'TWK · TIU · TKP · SKB'], 'Mulai belajar')}
      ${card('#/skd', { icon: 'bg-sky-100 text-sky-700', badge: 'border-sky-300 text-sky-700', btn: 'btn-primary' }, 'clipboard', 'Simulasi',
        'SKD', 'Seleksi Kompetensi Dasar: TWK, TIU, dan TKP. Pilih paket tryout lengkap atau latihan per bagian.',
        [`${fmtNum(skdTot)} soal`, `${packsFor('SKD_FULL').length} paket tryout`], 'Pilih paket SKD')}
      ${card('#/skb', { icon: 'bg-indigo-100 text-indigo-700', badge: 'border-indigo-300 text-indigo-700', btn: 'btn-secondary' }, 'briefcase', 'Simulasi',
        'SKB', 'Seleksi Kompetensi Bidang untuk lima rumpun formasi, dibagi per paket latihan.',
        [`${fmtNum(skbTot)} soal`, `${skbKeys().length} formasi`], 'Pilih formasi SKB')}
    </section>
    <p class="mt-10 text-center text-sm text-base-content/60">Tips: mulai dari <b>Materi</b> → kerjakan <b>latihan topik</b> → ukur dengan <b>tryout SKD</b>.</p>
  `);
}

/* ---------- kartu paket ---------- */
function packCard(p) {
  const r = results[p.key];
  const max = p.questions.length * 5;
  const pct = r ? Math.round((r.best.score / (r.best.max || max)) * 100) : 0;
  const status = r
    ? `<span class="badge badge-success badge-sm gap-1 text-white">${icon('check', 'h-3 w-3')} Selesai</span>`
    : `<span class="badge badge-ghost badge-sm">Belum dikerjakan</span>`;
  return `
  <div class="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div class="card-body gap-3 p-5">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-lg font-bold text-neutral">${esc(p.title)}</h3>${status}
      </div>
      <p class="text-sm text-base-content/70">${esc(p.compose)}</p>
      <div class="flex flex-wrap gap-2 text-xs">
        <span class="badge badge-ghost gap-1">${icon('grid', 'h-3.5 w-3.5')} ${p.questions.length} soal</span>
        <span class="badge badge-ghost gap-1">${icon('clock', 'h-3.5 w-3.5')} ${p.minutes} menit</span>
      </div>
      ${r ? `<div>
          <div class="mb-1 flex justify-between text-xs"><span class="text-base-content/60">Skor terbaik</span><b>${r.best.score} / ${r.best.max || max} (${pct}%)</b></div>
          <progress class="progress progress-primary h-2 w-full" value="${pct}" max="100"></progress>
          <div class="mt-1 text-[11px] text-base-content/50">${r.attempts}x dikerjakan</div>
        </div>` : ''}
      <button class="btn btn-primary btn-sm mt-1 w-full" onclick="App.openStart('${p.key}')">${r ? 'Ulangi paket' : 'Mulai paket'}</button>
    </div>
  </div>`;
}

/* ---------- SKD ---------- */
function renderSkd() {
  const tabs = Object.entries(SKD_GROUPS).map(([id, g]) =>
    `<button role="tab" class="tab h-10 ${ui.skdTab === id ? 'tab-active !bg-primary !text-primary-content' : ''}" onclick="App.setSkdTab('${id}')">${g.label}</button>`).join('');
  const g = SKD_GROUPS[ui.skdTab];
  const packs = packsFor(ui.skdTab);
  shell('skd', `
    ${breadcrumb([['#/', 'Beranda'], [null, 'SKD']])}
    ${pageHead('Seleksi Kompetensi Dasar (SKD)', 'Pilih jenis latihan, lalu pilih paket soal. Tiap paket berisi soal yang tetap, sehingga progresmu bisa dibandingkan.')}
    <div role="tablist" class="tabs tabs-boxed mb-4 inline-flex bg-base-100 p-1.5 shadow-sm">${tabs}</div>
    <p class="mb-5 text-sm text-base-content/70">${g.desc}</p>
    ${packs.length
      ? `<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${packs.map(packCard).join('')}</div>`
      : `<div class="alert">Belum ada soal pada kategori ini. Tambahkan lewat menu Database.</div>`}
  `);
}

/* ---------- SKB ---------- */
function renderSkb(key) {
  if (!key || !BANK[key]) {
    const cards = skbKeys().map(k => {
      const m = skbMeta(k), n = bankLen(k), np = packsFor(k).length;
      const done = packsFor(k).filter(p => results[p.key]).length;
      return `
      <a href="#/skb/${k}" class="group card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div class="card-body gap-3 p-6">
          <div class="flex items-center justify-between">
            <span class="grid h-11 w-11 place-items-center rounded-xl bg-indigo-100 text-indigo-700">${icon('briefcase', 'h-6 w-6')}</span>
            <span class="badge badge-ghost">${done}/${np} paket</span>
          </div>
          <h3 class="card-title text-lg text-neutral">${esc(m.name)}</h3>
          <p class="text-sm text-base-content/70">${esc(m.desc)}</p>
          <div class="mt-1 flex items-center justify-between text-sm">
            <span class="font-semibold text-secondary">${fmtNum(n)} soal • ${np} paket</span>
            <span class="flex items-center gap-1 font-semibold text-secondary">Lihat paket ${icon('arrowR', 'h-4 w-4 transition group-hover:translate-x-1')}</span>
          </div>
        </div>
      </a>`;
    }).join('');
    shell('skb', `
      ${breadcrumb([['#/', 'Beranda'], [null, 'SKB']])}
      ${pageHead('Seleksi Kompetensi Bidang (SKB)', 'Pilih rumpun formasi, lalu pilih paket latihan di dalamnya.')}
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${cards}</div>`);
    return;
  }
  const m = skbMeta(key), packs = packsFor(key);
  shell('skb', `
    ${breadcrumb([['#/', 'Beranda'], ['#/skb', 'SKB'], [null, esc(m.short)]])}
    ${pageHead('SKB ' + esc(m.name), esc(m.desc) + ` Setiap paket berisi ${SKB_SIZE} soal.`,
      `<a href="#/skb" class="btn btn-ghost btn-sm gap-2">${icon('back', 'h-4 w-4')} Ganti formasi</a>`)}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${packs.map(packCard).join('')}</div>
    ${(() => { const t = MATERI.find(x => x.buckets && x.buckets.length === 1 && x.buckets[0] === key && !x.subs); return t
      ? `<div class="mt-8 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"><div class="flex flex-wrap items-center justify-between gap-3"><div><div class="font-bold text-neutral">Belum hafal kisi-kisinya?</div><div class="text-sm text-base-content/70">Baca ringkasan materi ${esc(m.short)} sebelum mulai paket.</div></div><a class="btn btn-accent btn-sm" href="#/materi/${t.id}">Buka materi</a></div></div>` : ''; })()}
  `);
}

/* ---------- MATERI ---------- */
function renderMateri(id) {
  const topic = id && MATERI.find(t => t.id === id);
  if (topic) return renderMateriDetail(topic);

  const chips = [{ id: 'ALL', name: 'Semua' }].concat(MATERI_GROUPS).map(g =>
    `<button class="btn btn-sm ${ui.materiGroup === g.id ? 'btn-primary' : 'btn-ghost bg-base-100'}" onclick="App.setMateriGroup('${g.id}')">${g.name}</button>`).join('');
  const list = MATERI.filter(t => ui.materiGroup === 'ALL' || t.group === ui.materiGroup);
  const cur = MATERI_GROUPS.find(g => g.id === ui.materiGroup);
  const cards = list.map(t => {
    const st = GROUP_STYLE[t.group] || GROUP_STYLE.SKB;
    const n = materiPool(t).length;
    return `
    <a href="#/materi/${t.id}" class="group card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div class="card-body gap-3 p-5">
        <div class="flex items-center justify-between">
          <span class="badge border-0 font-bold ${st.badge}">${t.group}</span>
          <span class="text-xs text-base-content/50">${n} soal latihan</span>
        </div>
        <h3 class="card-title text-base leading-snug text-neutral">${esc(t.title)}</h3>
        <p class="text-sm leading-relaxed text-base-content/70">${esc(t.summary)}</p>
        <div class="mt-auto flex items-center gap-1 pt-1 text-sm font-semibold text-accent">Pelajari ${icon('arrowR', 'h-4 w-4 transition group-hover:translate-x-1')}</div>
      </div>
    </a>`;
  }).join('');
  shell('materi', `
    ${breadcrumb([['#/', 'Beranda'], [null, 'Materi']])}
    ${pageHead('Materi & Cara Menjawab Cepat', 'Ringkasan inti, trik cepat, contoh soal dari bank soal, dan latihan khusus untuk tiap topik.')}
    <div class="mb-3 flex flex-wrap gap-2">${chips}</div>
    ${cur ? `<p class="mb-5 text-sm text-base-content/70"><b>${cur.full}</b> — ${cur.desc}</p>` : '<div class="mb-5"></div>'}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${cards}</div>
  `);
}

function optionsStatic(q) {
  return q.options.map((o, i) => {
    const best = q.scores[i] === 5;
    const mid = q.category === 'TKP' && q.scores[i] > 0 && !best;
    return `<div class="opt ${best ? 'is-correct' : mid ? 'is-mid' : ''} !cursor-default"><span class="letter">${LETTERS[i]}</span><span class="pt-1 text-sm">${esc(o.replace(/^[A-E]\.\s*/, ''))}</span>${q.category === 'TKP' ? `<span class="badge badge-sm ml-auto shrink-0">${q.scores[i]} poin</span>` : ''}</div>`;
  }).join('');
}
function renderMateriDetail(t) {
  const st = GROUP_STYLE[t.group] || GROUP_STYLE.SKB;
  const idx = MATERI.indexOf(t);
  const prev = MATERI[idx - 1], next = MATERI[idx + 1];
  const pool = materiPool(t);
  const ex = materiExamples(t, 3);
  const toc = [...t.sections.map((s, i) => [`s${i}`, s.title]), ['tips', 'Cara menjawab cepat'], ['contoh', 'Contoh soal'], ['latihan', 'Latihan']];

  const sections = t.sections.map((s, i) => `
    <section id="s${i}" class="card border border-base-300 bg-base-100 shadow-sm scroll-mt-24">
      <div class="card-body gap-2 p-5 sm:p-6">
        <h2 class="text-lg font-bold text-neutral">${esc(s.title)}</h2>
        <div class="materi-body">${s.html}</div>
      </div>
    </section>`).join('');

  const tips = (t.tips || []).length ? `
    <section id="tips" class="scroll-mt-24 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white shadow-sm">
      <div class="p-5 sm:p-6">
        <h2 class="mb-3 flex items-center gap-2 text-lg font-bold text-amber-900">${icon('bolt', 'h-5 w-5')} Cara menjawab cepat</h2>
        <ol class="space-y-2.5">${t.tips.map((x, i) => `<li class="flex gap-3 text-[0.95rem] leading-relaxed"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-400 text-xs font-bold text-amber-950">${i + 1}</span><span>${x}</span></li>`).join('')}</ol>
      </div>
    </section>` : '';

  const examples = ex.length ? ex.map((q, i) => {
    const key = LETTERS[q.ans];
    return `
    <div class="card border border-base-300 bg-base-100 shadow-sm">
      <div class="card-body gap-3 p-5">
        <div class="flex items-center justify-between gap-2"><span class="badge badge-primary badge-outline">Contoh ${i + 1}</span><span class="truncate text-xs text-base-content/50">${esc(q.sub)}</span></div>
        <div class="whitespace-pre-line text-[0.97rem] font-medium leading-relaxed">${esc(q.q)}</div>
        ${q.svg ? `<div class="overflow-auto rounded-xl bg-base-200/60 p-3">${q.svg}</div>` : ''}
        <div class="space-y-2">${optionsStatic(q)}</div>
        <div class="collapse collapse-arrow rounded-xl border border-base-300 bg-base-200/50">
          <input type="checkbox" aria-label="Tampilkan kunci dan pembahasan">
          <div class="collapse-title text-sm font-semibold">Lihat kunci &amp; cara cepat <span class="badge badge-success badge-sm ml-1 text-white">Kunci ${key}</span></div>
          <div class="collapse-content space-y-3 text-sm">
            ${q.trick ? `<div class="callout"><b>Trik cepat:</b> ${esc(q.trick)}</div>` : ''}
            ${q.explanation ? `<div><b>Pembahasan:</b> ${esc(q.explanation)}</div>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  }).join('') : `<div class="alert text-sm">Belum ada contoh soal untuk topik ini. Tambahkan lewat <code>questions</code> di <code>js/materi.js</code>.</div>`;

  const nav = `<div class="mt-2 grid gap-3 sm:grid-cols-2">
      ${prev ? `<a href="#/materi/${prev.id}" class="btn btn-ghost justify-start gap-2 bg-base-100 normal-case">${icon('back', 'h-4 w-4 shrink-0')}<span class="truncate">${esc(prev.title)}</span></a>` : '<span></span>'}
      ${next ? `<a href="#/materi/${next.id}" class="btn btn-ghost justify-end gap-2 bg-base-100 normal-case"><span class="truncate">${esc(next.title)}</span>${icon('arrowR', 'h-4 w-4 shrink-0')}</a>` : ''}
    </div>`;

  shell('materi', `
    ${breadcrumb([['#/', 'Beranda'], ['#/materi', 'Materi'], [null, esc(t.title)]])}
    <div class="mb-6 mt-1">
      <span class="badge mb-2 border-0 font-bold ${st.badge}">${t.group}</span>
      <h1 class="text-2xl font-extrabold tracking-tight text-neutral sm:text-3xl">${esc(t.title)}</h1>
      <p class="mt-1 max-w-2xl text-sm text-base-content/70">${esc(t.summary)}</p>
    </div>
    <div class="grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
      <aside class="hidden lg:block">
        <nav class="sticky top-24 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm" aria-label="Daftar isi">
          <div class="px-2 pb-1 text-xs font-bold uppercase tracking-wide text-base-content/50">Di halaman ini</div>
          <ul class="menu menu-sm">${toc.map(([h, x]) => `<li><a href="javascript:void(0)" onclick="App.scrollTo('${h}')">${esc(x)}</a></li>`).join('')}</ul>
        </nav>
      </aside>
      <div class="space-y-5">
        ${sections}
        ${tips}
        <section id="contoh" class="scroll-mt-24 space-y-4">
          <h2 class="text-lg font-bold text-neutral">Contoh soal</h2>${examples}
        </section>
        <section id="latihan" class="scroll-mt-24 rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-primary-content shadow-md">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div><h2 class="text-xl font-extrabold">Latihan soal topik ini</h2>
            <p class="mt-1 text-sm text-white/85">${pool.length ? `Kerjakan ${Math.min(10, pool.length)} soal acak dari ${fmtNum(pool.length)} soal terkait, lengkap dengan pembahasan instan.` : 'Belum ada soal untuk topik ini.'}</p></div>
            ${pool.length ? `<button class="btn border-0 bg-white text-primary hover:bg-white/90" onclick="App.startMateriPractice('${t.id}')">Mulai latihan ${icon('arrowR', 'h-4 w-4')}</button>` : ''}
          </div>
        </section>
        ${nav}
      </div>
    </div>
  `);
}

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
  el.className = 'badge badge-lg gap-2 border-0 ' + (exam.finished ? 'badge-ghost' : urgent ? 'badge-error text-white' : 'bg-base-200 text-neutral');
}
const showKey = () => exam.finished || exam.instant;

function renderExam() {
  if (!exam) { go('#/'); return; }
  $('#app').innerHTML = `
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-30 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center gap-2 px-3 py-2">
        <button class="btn btn-ghost btn-sm gap-1" onclick="App.leaveExam()" aria-label="Keluar dari ujian">${icon('back', 'h-4 w-4')}<span class="hidden sm:inline">Keluar</span></button>
        <div class="min-w-0 flex-1">
          <div class="truncate text-sm font-bold text-neutral sm:text-base">${esc(exam.pack.title)}</div>
          <div class="truncate text-xs text-base-content/60" id="x-sub"></div>
        </div>
        <div id="x-timer" class="badge badge-lg gap-2 border-0 bg-base-200"></div>
        <div class="dropdown dropdown-end">
          <button tabindex="0" class="btn btn-ghost btn-sm btn-square" aria-label="Menu ujian">${icon('dots', 'h-5 w-5')}</button>
          <ul tabindex="0" class="menu dropdown-content z-50 mt-2 w-64 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg">
            <li ${exam.finished || exam.remaining == null ? 'class="hidden"' : ''}><a onclick="App.togglePause()"><span id="x-pause-lbl">${exam.paused ? 'Lanjutkan waktu' : 'Jeda waktu'}</span></a></li>
            <li ${exam.finished ? 'class="hidden"' : ''}><label class="flex cursor-pointer justify-between"><span>Bahas instan</span><input type="checkbox" class="toggle toggle-primary toggle-sm" ${exam.instant ? 'checked' : ''} onchange="App.toggleInstant(this.checked)"></label></li>
            <li><a onclick="App.restartExam()">Mulai ulang paket</a></li>
          </ul>
        </div>
        <button class="btn btn-primary btn-sm" id="x-finish" onclick="App.finish()"></button>
      </div>
      <div id="x-scores" class="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-3 pb-2"></div>
    </header>
    <main class="mx-auto grid w-full max-w-7xl flex-1 gap-4 px-3 py-4 lg:grid-cols-[minmax(0,1fr)_330px]">
      <section id="x-q" class="card relative overflow-hidden border border-base-300 bg-base-100 shadow-sm"></section>
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
    <div class="px-4 py-2.5 text-sm font-bold ${cls}">${head}</div>
    <div class="grid gap-3 bg-base-200/50 p-4 text-sm md:grid-cols-2">
      <div class="rounded-xl bg-amber-50 p-3 ring-1 ring-amber-200"><div class="mb-1 flex items-center gap-1.5 font-bold text-amber-900">${icon('bolt', 'h-4 w-4')} Cara cepat</div><div class="leading-relaxed">${esc(q.trick) || '—'}</div></div>
      <div class="rounded-xl bg-base-100 p-3 ring-1 ring-base-300"><div class="mb-1 flex items-center gap-1.5 font-bold text-primary">${icon('bulb', 'h-4 w-4')} Pembahasan</div><div class="leading-relaxed">${esc(q.explanation) || '—'}</div></div>
    </div>
    ${mt ? `<div class="border-t border-base-300 bg-base-100 px-4 py-2 text-xs"><a class="link link-primary" href="#/materi/${mt.id}" onclick="App.leaveToMateri()">Pelajari materi: ${esc(mt.title)} →</a></div>` : ''}
  </div>`;
}
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
    return `<button class="opt ${cls}" ${exam.finished ? 'disabled' : ''} onclick="App.pick(${i})" aria-pressed="${chosen === i}">
      <span class="letter">${LETTERS[i]}</span><span class="pt-1 text-[0.95rem] leading-snug">${esc(o.replace(/^[A-E]\.\s*/, ''))}</span>${tag}</button>`;
  }).join('');
  const last = exam.idx === exam.qs.length - 1;

  box.innerHTML = `
    <div class="flex flex-col gap-4 p-4 sm:p-6">
      <div class="flex flex-wrap items-center gap-2">
        <span class="badge badge-primary font-semibold">Soal ${q.no} / ${exam.qs.length}</span>
        <span class="badge border-0 font-semibold ${cs.badge}">${catLabel}</span>
        <span class="badge badge-ghost max-w-[16rem] truncate">${esc(q.sub)}</span>
        <span class="ml-auto hidden text-xs text-base-content/50 sm:inline">${rule}</span>
      </div>
      <div class="whitespace-pre-line text-[1.02rem] font-medium leading-relaxed text-neutral">${esc(q.q)}</div>
      ${q.svg ? `<div class="overflow-auto rounded-xl bg-base-200/60 p-3">${q.svg}</div>` : ''}
      <div class="space-y-2.5" role="group" aria-label="Pilihan jawaban">${opts}</div>
      ${key && (chosen !== null || exam.finished) ? feedbackHtml(q, chosen) : ''}
    </div>
    <div class="sticky bottom-0 flex flex-wrap items-center gap-2 border-t border-base-300 bg-base-100/95 p-3 backdrop-blur">
      <button class="btn btn-sm gap-1" onclick="App.prev()" ${exam.idx === 0 ? 'disabled' : ''}>${icon('back', 'h-4 w-4')}<span class="hidden sm:inline">Sebelumnya</span></button>
      ${exam.finished ? '' : `
      <button class="btn btn-sm gap-1 ${exam.doubts[exam.idx] ? 'btn-warning' : 'btn-outline'}" onclick="App.toggleDoubt()">${icon('flag', 'h-4 w-4')}Ragu</button>
      <button class="btn btn-ghost btn-sm" onclick="App.clearAnswer()" ${chosen === null ? 'disabled' : ''} aria-label="Hapus jawaban">${icon('trash', 'h-4 w-4')}<span class="hidden md:inline">Hapus</span></button>`}
      <button class="btn btn-ghost btn-sm gap-1 lg:hidden" onclick="App.openNums()">${icon('grid', 'h-4 w-4')}Nomor</button>
      <span class="hidden flex-1 text-center text-xs text-base-content/50 xl:block">Pintasan: A–E • ← → • R (ragu)</span>
      <span class="flex-1 xl:hidden"></span>
      ${last
        ? `<button class="btn btn-primary btn-sm" onclick="${exam.finished ? 'App.openResult()' : 'App.finish()'}">${exam.finished ? 'Lihat hasil' : 'Selesai'}</button>`
        : `<button class="btn btn-primary btn-sm gap-1" onclick="App.next()"><span class="hidden sm:inline">Selanjutnya</span>${icon('arrowR', 'h-4 w-4')}</button>`}
    </div>
    ${exam.paused && !exam.finished ? `
    <div class="absolute inset-0 z-10 grid place-items-center bg-base-100/95 backdrop-blur-md">
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
  const fbtn = (id, label) => `<button class="btn btn-xs ${exam.filter === id ? 'btn-primary' : 'btn-ghost bg-base-200'}" onclick="App.setFilter('${id}')">${label}</button>`;
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
      <div class="flex items-center justify-between"><h3 class="font-bold text-neutral">Nomor soal</h3><span class="text-xs text-base-content/60">${shown} soal</span></div>
      <div class="flex flex-wrap gap-1.5">
        ${fbtn('ALL', 'Semua')}${multiCat ? fbtn('TWK', 'TWK') + fbtn('TIU', 'TIU') + fbtn('TKP', 'TKP') : ''}
        ${fbtn('UNANSWERED', 'Belum')}${fbtn('WRONG', 'Kurang tepat')}${exam.finished ? '' : fbtn('DOUBT', 'Ragu')}
      </div>
      <div class="grid max-h-[46vh] grid-cols-6 gap-1.5 overflow-y-auto p-1">${cells || '<div class="col-span-6 py-4 text-center text-sm text-base-content/50">Tidak ada soal.</div>'}</div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-1 border-t border-base-300 pt-3 text-[11px] text-base-content/70">
        <span><i class="mr-1 inline-block h-2.5 w-2.5 rounded bg-success"></i>Benar / skor 5</span>
        <span><i class="mr-1 inline-block h-2.5 w-2.5 rounded bg-error"></i>Salah</span>
        <span><i class="mr-1 inline-block h-2.5 w-2.5 rounded" style="background:#fde7b0"></i>TKP skor 1–4</span>
        <span><i class="mr-1 inline-block h-2.5 w-2.5 rounded bg-warning"></i>Ragu-ragu</span>
      </div>
      <div class="flex justify-between text-xs font-semibold text-neutral"><span>Terjawab ${ans}/${exam.qs.length}</span><span>Skor 5: ${right}</span></div>
    </div>`;
}
function paintSide() {
  const s = $('#x-side'); if (s) s.innerHTML = sideHtml();
  const d = $('#dlg-nums');
  if (d && d.open) d.querySelector('.modal-box').innerHTML = numsDialogInner();
}
const numsDialogInner = () => `<div class="mb-2 flex justify-end"><button class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-nums').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button></div><div class="card">${sideHtml()}</div>`;

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
      return `<li class="flex items-center justify-between gap-3 rounded-xl bg-base-200/70 px-3 py-2 text-sm"><span class="min-w-0 truncate">${esc(o.q.sub)} <span class="text-xs text-base-content/50">(${Math.round(o.score / o.max * 100)}%)</span></span>
        ${m ? `<a class="btn btn-accent btn-xs shrink-0" href="#/materi/${m.id}" onclick="App.leaveToMateri()">Pelajari</a>` : ''}</li>`;
    }).join('')}</ul></div>` : '';

  const d = $('#dlg-result');
  d.innerHTML = `
  <div class="modal-box max-w-2xl p-0">
    <div class="bg-gradient-to-br from-primary to-secondary p-6 text-primary-content">
      <div class="flex items-center gap-5">
        <div class="radial-progress bg-white/15 text-white" style="--value:${pct};--size:6.5rem;--thickness:.6rem" role="img" aria-label="${pct} persen">${pct}%</div>
        <div><div class="text-sm text-white/80">${esc(exam.pack.title)}</div>
          <div class="text-3xl font-extrabold">${r.total} <span class="text-lg font-semibold text-white/80">/ ${r.max}</span></div>
          <div class="text-xs text-white/80">Waktu terpakai ${fmtClock(exam.elapsed)}</div></div>
      </div>
    </div>
    <div class="space-y-4 p-5 sm:p-6">
      ${verdict}
      <div class="grid gap-3 ${Object.keys(r.sum).length > 1 ? 'sm:grid-cols-3' : ''}">${bars}</div>
      <div class="stats w-full border border-base-300 bg-base-100">
        <div class="stat px-4 py-2"><div class="stat-title text-xs">Benar / skor 5</div><div class="stat-value text-xl text-success">${r.correct}</div></div>
        <div class="stat px-4 py-2"><div class="stat-title text-xs">Kurang tepat</div><div class="stat-value text-xl text-error">${r.wrong}</div></div>
        <div class="stat px-4 py-2"><div class="stat-title text-xs">Kosong</div><div class="stat-value text-xl">${r.empty}</div></div>
      </div>
      ${weakHtml}
      <div class="modal-action mt-2 flex-wrap">
        <button class="btn btn-ghost" onclick="App.exitToList()">Daftar paket</button>
        <button class="btn btn-outline" onclick="App.restartExam(true)">${icon('refresh', 'h-4 w-4')} Ulangi</button>
        <button class="btn btn-primary" onclick="$('#dlg-result').close()">Tinjau pembahasan</button>
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
  t = document.createElement('div'); t.id = 'toast'; t.className = 'toast toast-center toast-bottom z-50';
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
    <div class="stats stats-vertical mt-4 w-full border border-base-300 sm:stats-horizontal">
      <div class="stat px-4 py-2"><div class="stat-title text-xs">Jumlah soal</div><div class="stat-value text-xl text-primary">${p.questions.length}</div></div>
      <div class="stat px-4 py-2"><div class="stat-title text-xs">Waktu</div><div class="stat-value text-xl text-primary">${p.minutes}<span class="text-sm font-semibold"> mnt</span></div></div>
      <div class="stat px-4 py-2"><div class="stat-title text-xs">Skor maks</div><div class="stat-value text-xl text-primary">${p.questions.length * 5}</div></div>
    </div>
    <ul class="mt-4 space-y-1.5 text-sm text-base-content/80">
      <li class="flex gap-2">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>${rules}</span></li>
      <li class="flex gap-2">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>Waktu bisa dijeda dari menu titik tiga.</span></li>
      <li class="flex gap-2">${icon('check', 'h-4 w-4 shrink-0 text-success')}<span>Pintasan keyboard: A–E untuk memilih, ← → untuk pindah soal.</span></li>
    </ul>
    <label class="mt-4 flex cursor-pointer items-center justify-between rounded-xl bg-base-200 px-4 py-3">
      <span><span class="block text-sm font-semibold text-neutral">Bahas instan</span><span class="text-xs text-base-content/60">Kunci &amp; pembahasan langsung tampil setelah menjawab. Matikan untuk suasana ujian sebenarnya.</span></span>
      <input type="checkbox" id="st-instant" class="toggle toggle-primary" ${store.get('cpns_instant', true) ? 'checked' : ''}>
    </label>
    <div class="modal-action">
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
      <label class="flex cursor-pointer flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-base-300 bg-base-200/50 p-4 text-center transition hover:border-primary">
        ${icon('db', 'h-6 w-6 text-primary')}<span class="text-sm font-semibold">Pilih folder db/</span><span class="text-xs text-base-content/60">Muat seluruh isi folder</span>
        <input type="file" webkitdirectory directory multiple class="hidden" onchange="App.uploadDb(this.files)">
      </label>
    </div>
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
  setSkdTab(id) { ui.skdTab = id; renderSkd(); },
  setMateriGroup(id) { ui.materiGroup = id; renderMateri(null); },
  scrollTo(id) { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
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
    if (exam.instant) setTimeout(() => { const f = $('#x-q .fade-in'); if (f) f.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 40);
  },
  clearAnswer() { if (!exam || exam.finished) return; exam.answers[exam.idx] = null; paintScores(); paintQuestion(); paintSide(); },
  toggleDoubt() { if (!exam || exam.finished) return; exam.doubts[exam.idx] = !exam.doubts[exam.idx]; paintQuestion(); paintSide(); },
  goto(i) { exam.idx = i; paintQuestion(); paintSide(); const d = $('#dlg-nums'); if (d.open) d.close(); const q = $('#x-q'); if (q && window.innerWidth < 1024) q.scrollIntoView({ block: 'start' }); },
  prev() { if (exam.idx > 0) App.goto(exam.idx - 1); },
  next() { if (exam.idx < exam.qs.length - 1) App.goto(exam.idx + 1); },
  setFilter(f) { exam.filter = f; paintSide(); },
  openNums() { const d = $('#dlg-nums'); d.innerHTML = `<div class="modal-box">${numsDialogInner()}</div><form method="dialog" class="modal-backdrop"><button>tutup</button></form>`; d.showModal(); },

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
