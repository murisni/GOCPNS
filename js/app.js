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
  search: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  bookmark: 'M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z',
  moon: 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
  sun: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
  printer: 'M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z'
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
const BOOKMARK_KEY = 'cpns_bookmarks_v1';
let bookmarks = store.get(BOOKMARK_KEY, {});
const WRONG_KEY = 'cpns_wrong_qids_v1';
let wrongMap = store.get(WRONG_KEY, {});
const WEAK_MATERI_KEY = 'cpns_weak_materi_v1';
let weakMateri = store.get(WEAK_MATERI_KEY, {});
const PLAN_ENDED_KEY = 'cpns_plan_ended_v1';
let planEnded = store.get(PLAN_ENDED_KEY, null);
const RK_READ_KEY = 'cpns_rk_read_v1';
let rkRead = store.get(RK_READ_KEY, {});
const THEME_KEY = 'cpns_theme_v1';
let themeMode = localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
function applyTheme(mode) {
  themeMode = mode === 'dark' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', themeMode === 'dark');
  document.documentElement.setAttribute('data-theme', themeMode === 'dark' ? 'dark' : 'cpns');
  try { localStorage.setItem(THEME_KEY, themeMode); } catch (e) { /* abaikan */ }
}
applyTheme(themeMode);
const isBookmarked = q => !!(q && bookmarks[questions.resolve(q.id)]);
function toggleBookmarkById(id, note = null) {
  const q = planQIndex().get(questions.resolve(id));
  const rid = questions.resolve(id);
  if (bookmarks[rid] && note === null) { delete bookmarks[rid]; }
  else {
    bookmarks[rid] = {
      id: rid,
      sub: q?.sub || bookmarks[rid]?.sub || '',
      bucket: bucketOfId[rid] || bookmarks[rid]?.bucket || '',
      note: note !== null ? String(note).slice(0, 200) : (bookmarks[rid]?.note || ''),
      at: Date.now()
    };
  }
  store.set(BOOKMARK_KEY, bookmarks);
  return !!bookmarks[rid];
}
const rkReadKey = (tId, title) => `${tId}::${String(title || '').slice(0, 80)}`;
const isRkRead = (tId, title) => !!rkRead[rkReadKey(tId, title)];
function toggleRkReadState(tId, title) {
  const k = rkReadKey(tId, title);
  if (rkRead[k]) delete rkRead[k]; else rkRead[k] = Date.now();
  store.set(RK_READ_KEY, rkRead);
  return !!rkRead[k];
}
function setRkReadState(tId, title, val) {
  const k = rkReadKey(tId, title);
  if (val) rkRead[k] = rkRead[k] || Date.now();
  else delete rkRead[k];
  store.set(RK_READ_KEY, rkRead);
  return !!rkRead[k];
}
function rkFormatAgo(ts) {
  if (!ts) return 'belum ditandai';
  const now = new Date(), d = new Date(ts);
  const startNow = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const startD = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const diffDays = Math.round((startNow - startD) / 86400000);
  if (diffDays <= 0) {
    const hm = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    return `hari ini (${hm})`;
  }
  if (diffDays === 1) return 'kemarin';
  if (diffDays < 7) return `${diffDays} hari lalu`;
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}
function rkSavedSummary() {
  const items = [];
  const byGroup = { TWK: { read: 0, total: 0 }, TIU: { read: 0, total: 0 }, TKP: { read: 0, total: 0 }, SKB: { read: 0, total: 0 } };
  MATERI.forEach(t => {
    const grp = byGroup[t.group] ? t.group : 'SKB';
    lessonSteps(t).forEach((st, idx) => {
      const at = rkRead[rkReadKey(t.id, st.title)] || 0;
      const read = !!at;
      byGroup[grp].total++;
      if (read) byGroup[grp].read++;
      items.push({ tId: t.id, topic: t.title, group: grp, skbCategory: t.skbCategory || '', stepIdx: idx, stepTitle: st.title, at, read });
    });
  });
  const saved = items.filter(x => x.read).sort((a, b) => b.at - a.at);
  return { items, saved, totalAll: items.length, byGroup, last: saved[0] || null };
}
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
const JALUR_KEY = 'cpns_jalur_v1';
const JALUR_META = {
  UMUM: { id: 'UMUM', label: 'Umum / Target Tertinggi 500++', pg: { TWK: 65, TIU: 80, TKP: 166 }, minTotal: 311, targetSkd: 505, note: 'Ambang batas BKN Umum 311 (TWK 65 · TIU 80 · TKP 166). Kejar Target 500++ agar menjuarai perangkingan Kementerian & Pemda.' },
  CUMLAUDE: { id: 'CUMLAUDE', label: 'Cumlaude (Lulusan Terbaik)', pg: { TWK: 0, TIU: 85, TKP: 0 }, minTotal: 311, targetSkd: 505, note: 'Jalur Cumlaude BKN: TIU min 85 & total SKD min 311. Target 500++ membuat peluang lolos Kementerian sangat aman.' },
  KHUSUS: { id: 'KHUSUS', label: 'Khusus (Disabilitas / Papua / 3T)', pg: { TWK: 0, TIU: 60, TKP: 0 }, minTotal: 286, targetSkd: 450, note: 'Jalur Khusus BKN: TIU min 60 & total SKD min 286. Target kompetitif 450–500++ mengamankan posisi teratas.' }
};
let studyJalur = store.get(JALUR_KEY, 'UMUM');
if (!JALUR_META[studyJalur]) studyJalur = 'UMUM';
const activeJalur = () => JALUR_META[studyJalur] || JALUR_META.UMUM;

const SKD_GROUPS = {
  SKD_FULL: { label: 'Tryout Lengkap', short: 'Tryout', desc: '30 TWK + 35 TIU + 45 TKP • 100 menit — acuan format CPNS BKN dengan benchmark skor 500++.' },
  SKD_TWK: { label: 'TWK', short: 'TWK', desc: 'Tes Wawasan Kebangsaan: pilar negara, nasionalisme, integritas, bahasa Indonesia.' },
  SKD_TIU: { label: 'TIU', short: 'TIU', desc: 'Tes Intelegensia Umum: verbal, numerik, dan figural.' },
  SKD_TKP: { label: 'TKP', short: 'TKP', desc: 'Tes Karakteristik Pribadi: skor 1–5 pada tiap opsi.' }
};
const SKB_META = {
  SKB_PRAKOM: { name: 'Pranata Komputer', short: 'Prakom', desc: 'Tata kelola TI & SPBE/GovTech, UU PDP, OWASP, jaringan, SQL/Data Lakehouse, DevSecOps & cloud.' },
  SKB_HUKUM: { name: 'Hukum, Pemerintahan & Peraturan', short: 'Hukum', desc: 'UU Pemda 23/2014, UU ASN 20/2023, Legal Drafting UU 13/2022, PTUN, PBJ, Tipikor & administrasi.' },
  SKB_KEUANGAN: { name: 'Keuangan, APBN/APBD & Pajak', short: 'Keuangan', desc: 'SAP akrual PP 71/2010, APBN & perbendaharaan, UU HKPD 1/2022 Pemda, audit BPK & perpajakan.' },
  SKB_KESEHATAN: { name: 'Kesehatan & Layanan Primer', short: 'Kesehatan', desc: 'UU Kesehatan 17/2023, 6 Pilar Kemenkes, 12 SPM Pemda, ILP Puskesmas, PPI, triase & KIA.' },
  SKB_PENDIDIKAN: { name: 'Pendidikan, Guru, Dosen & Dinas', short: 'Pendidikan', desc: 'Kurikulum Merdeka, Deep Learning, asesmen HOTS/SOLO, SPM Pendidikan Pemda, PPKSP & pedagogik.' },
  SKB_KEBIJAKAN: { name: 'Analis Kebijakan, Perencana & Tata Kelola', short: 'Kebijakan', desc: 'SPPN UU 25/2004, RPJMN/RPJMD Pemda, RIA, Policy Brief, SAKIP, RB, Zona Integritas & OSS-RBA.' },
  SKB_SDMA: { name: 'Analis SDMA, Kepegawaian, Arsiparis & Humas', short: 'SDMA & Arsip', desc: 'UU ASN 20/2023, Sistem Merit, Anjab-ABK, e-Kinerja SKP, SRIKANDI Arsiparis, PPID & Protokol.' },
  SKB_AUDITOR: { name: 'Auditor APIP, PPUPD & Pengadaan (PBJ)', short: 'Auditor & PBJ', desc: 'SAIPI-AAIPI, SPIP PP 60/2008, Probity Audit, Vouching/Tracing, Perpres PBJ 16/2018 & Siswaskeudes.' },
  SKB_INGGRIS: { name: 'Bahasa Inggris Kementerian & TI', short: 'Inggris Kemen', desc: 'Grammar/Structure, Written Expression, Reading kebijakan digital & kosakata pemerintahan.' }
};
const skbKeys = () => Object.keys(BANK).filter(k => k.startsWith('SKB_') && BANK[k].length);
const TARGET_KEY = 'cpns_target_v1';
const skbMeta = k => SKB_META[k] || { name: k.replace('SKB_', '').replace(/_/g, ' '), short: k.replace('SKB_', ''), desc: 'Bank soal bidang formasi CPNS.' };

const targetSkbKeys = () => skbKeys().filter(key => key !== 'SKB_SKD' && /^SKB_[A-Z0-9_]+$/.test(key));
let studyTarget = store.get(TARGET_KEY, null);
if (studyTarget && studyTarget.jalur && JALUR_META[studyTarget.jalur] && !store.get(JALUR_KEY, null)) {
  studyJalur = studyTarget.jalur;
}
function targetPreference() {
  if (studyTarget) return { name: String(studyTarget.name || ''), role: String(studyTarget.role || ''), bucket: String(studyTarget.bucket || '') };
  return { name: '', role: '', bucket: planCfg?.cat ? 'SKB_' + planCfg.cat : '' };
}
function saveStudyTarget(role, bucket, name = targetPreference().name, jalur = studyJalur) {
  const previous = targetPreference();
  const prevJalur = studyJalur;
  if (jalur && JALUR_META[jalur]) { studyJalur = jalur; store.set(JALUR_KEY, jalur); }
  const next = { name: String(name || '').trim().slice(0, 80), role: String(role || '').trim().slice(0, 100),
    bucket: targetSkbKeys().includes(bucket) ? bucket : '' };
  if (previous.name !== next.name || previous.role !== next.role || previous.bucket !== next.bucket || prevJalur !== studyJalur || !studyTarget) {
    studyTarget = { ...next, jalur: studyJalur, at: Date.now() };
    store.set(TARGET_KEY, studyTarget);
  }
  return next;
}

function skbTargetChoicesHTML(selectedBucket = targetPreference().bucket) {
  return targetSkbKeys().map(key => `<option value="${esc(key)}"${key === selectedBucket ? ' selected' : ''}>${esc(skbMeta(key).name)} · ${bankLen(key)} soal</option>`).join('');
}

function targetEditorHTML() {
  const current = targetPreference();
  const choices = skbTargetChoicesHTML(current.bucket);
  const jalurChoices = Object.values(JALUR_META).map(j => `<option value="${j.id}"${j.id === studyJalur ? ' selected' : ''}>${esc(j.label)}</option>`).join('');
  const activePlan = planCfg?.cat ? ' Planning yang sudah dibuat bisa disesuaikan lewat Atur planning.' : '';
  return `<form class="pf-editor" onsubmit="return App.saveTarget(event)">
    <label class="mt-2 block text-xs font-bold" for="target-name">Nama tampilan</label>
    <input id="target-name" name="targetName" class="input input-bordered input-sm mt-1 w-full"
      maxlength="80" value="${esc(current.name)}" placeholder="Nama yang ingin ditampilkan">
    <label class="mt-2 block text-xs font-bold" for="target-role">Nama jabatan / instansi tujuan (opsional)</label>
    <input id="target-role" name="targetRole" class="input input-bordered input-sm mt-1 w-full"
      maxlength="100" value="${esc(current.role)}" placeholder="Misal: Analis Kebijakan Pemda / Auditor Kementerian">
    <label class="mt-2 block text-xs font-bold" for="target-bucket">Bidang latihan SKB</label>
    <select id="target-bucket" name="targetBucket" class="select select-bordered select-sm mt-1 w-full">
      <option value="">Belum dipilih</option>${choices}</select>
    <label class="mt-2 block text-xs font-bold" for="target-jalur">Jalur formasi &amp; acuan passing grade</label>
    <select id="target-jalur" name="targetJalur" class="select select-bordered select-sm mt-1 w-full">${jalurChoices}</select>
    <p class="mt-2 text-xs text-base-content/70">Mendukung persiapan formasi <b>Kementerian</b> &amp; <b>Pemda</b> dengan standar target skor elit 500++.${activePlan}</p>
    <div class="pf-editor-actions">
      <button class="btn btn-ghost" type="button" onclick="Auth.openProfile($('#dlg-profile').dataset.scope)">Batal</button>
      <button class="btn btn-primary" type="submit">Simpan profil</button>
    </div>
    <p class="mt-1 text-xs" role="status" data-target-status></p>
  </form>`;
}

function chunk(arr, size) { const out = []; for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size)); return out; }

function skbFullPack(group) {
  if (!group || !group.startsWith('SKB_') || !BANK[group] || !BANK[group].length) return null;
  const m = skbMeta(group), pool = ordered(group);
  const count = Math.min(100, pool.length);
  const qs = typeof planPickStratified === 'function' ? planPickStratified(pool, count, 'skbfull:' + group, []) : selectQuestions(pool, count);
  const mins = Math.min(90, Math.max(25, Math.round(qs.length * 0.9)));
  return {
    key: `SKBFULL-${group}`, group, no: 'CAT', kind: 'SKB', mode: 'SKB', skbBucket: group,
    title: `Simulasi SKB CAT BKN · ${m.short} (${qs.length} Soal)`,
    compose: `${qs.length} soal proporsional seluruh materi ${m.name}`,
    questions: qs, minutes: mins
  };
}

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
  if (key.indexOf('SKBFULL-') === 0) return skbFullPack(key.slice(8));
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
function rkGlobalMetaFor(grp) {
  if (RK_GLOBAL_META[grp]) return RK_GLOBAL_META[grp];
  if (grp === 'SKB') {
    return { id: 'SKB', title: 'Rangkuman Global Semua SKB', subtitle: 'Seluruh Formasi Kementerian & Pemda', icon: 'briefcase', tone: 'tkp', desc: 'Gabungan seluruh ringkasan materi SKB di semua bidang formasi Kementerian maupun Pemerintah Daerah.' };
  }
  if (String(grp || '').startsWith('SKB_')) {
    const m = skbMeta(grp);
    return { id: grp, title: `Rangkuman Global SKB ${m.short}`, subtitle: m.name, icon: 'briefcase', tone: 'tkp', desc: `Gabungan lengkap seluruh topik dan rumus inti SKB ${m.name} (${m.desc}).` };
  }
  return null;
}
function rkGlobalTopics(grp) {
  if (grp === 'SKB') return MATERI.filter(t => t.group === 'SKB');
  if (String(grp || '').startsWith('SKB_')) {
    const cat = grp.slice(4);
    return MATERI.filter(t => t.group === 'SKB' && (t.skbCategory === cat || (t.buckets && t.buckets.includes(grp))));
  }
  return MATERI.filter(t => t.group === grp);
}
function rkGlobalStats(grp) {
  const topics = rkGlobalTopics(grp);
  const parts = topics.reduce((sum, t) => sum + lessonSteps(t).length, 0);
  return { topics, count: topics.length, parts };
}
function rkGlobalPanel(activeGroup) {
  const m = rkGlobalMetaFor(activeGroup);
  if (m) {
    const st = rkGlobalStats(m.id);
    if (!st.count) return '';
    return `
      <button type="button" class="rkg-bar-btn ${m.tone}" onclick="App.rangkumanGlobal('${m.id}')" aria-label="Buka ${esc(m.title)}">
        <span class="rkg-bar-ic">${icon(m.icon, 'h-4 w-4')}</span>
        <span class="rkg-bar-txt"><b>${esc(m.title)}</b> · ${st.count} materi (${st.parts} bagian)</span>
        <span class="rkg-bar-cta">Buka →</span>
      </button>`;
  }
  const btns = ['TWK', 'TIU', 'TKP'].map(k => {
    const gm = RK_GLOBAL_META[k], st = rkGlobalStats(k);
    return `
      <button type="button" class="rkg-mini-btn ${gm.tone}" onclick="App.rangkumanGlobal('${k}')" aria-label="Buka rangkuman global ${k}">
        ${icon(gm.icon, 'h-3.5 w-3.5 shrink-0')}
        <span><b>Global ${k}</b> (${st.count})</span>
      </button>`;
  }).join('');
  return `<div class="rkg-compact-row" aria-label="Rangkuman Global SKD">${btns}</div>`;
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
function materiForQuestionBest(q, bucketHint = '') {
  if (!q) return null;
  const exact = materiForQuestion(q);
  if (exact) return exact;
  const b = bucketOfId[q.id] || bucketHint || '';
  const cat = ['TWK', 'TIU', 'TKP'].includes(q.category) ? q.category : '';
  const cands = MATERI.filter(m => {
    if (cat) return m.group === cat;
    if (b && b.startsWith('SKB_')) return m.group === 'SKB' && m.skbCategory === b.slice(4);
    if (m.buckets && b) return m.buckets.includes(b);
    return false;
  });
  if (!cands.length) return null;
  const qToks = lxTokens((q.sub || '') + ' ' + (q.q || '').slice(0, 140));
  let best = cands[0], bestScore = -1;
  cands.forEach(m => {
    const mToks = lxTokens(m.title + ' ' + (m.summary || '') + ' ' + (m.sections || []).map(s => s.title).join(' '));
    let sc = 0;
    qToks.forEach(w => { if (mToks.has(w)) sc++; });
    if (m.buckets && b && m.buckets.includes(b)) sc += 0.5;
    if (sc > bestScore) { bestScore = sc; best = m; }
  });
  return best;
}
function syncWeakMateriFromExam(r, curExam = exam) {
  if (!curExam || !curExam.qs || !curExam.qs.length) return [];
  const byMat = new Map();
  curExam.qs.forEach((q, i) => {
    const t = materiForQuestionBest(q, curExam.pack?.skbBucket || curExam.pack?.group || '');
    if (!t) return;
    const entry = byMat.get(t.id) || { t, n: 0, scoreSum: 0, maxSum: 0, wrongCount: 0, slowCount: 0, missSubs: new Set() };
    const a = curExam.answers[i];
    const sc = a === null ? 0 : (q.scores[a] || 0);
    const slow = q.category === 'TIU' && (curExam.spent[i] || 0) > SLOW_TIU_SECONDS;
    const miss = q.category === 'TKP' ? sc < 4 : sc < 5;
    entry.n++;
    entry.scoreSum += sc;
    entry.maxSum += 5;
    if (miss) { entry.wrongCount++; if (q.sub) entry.missSubs.add(q.sub); }
    if (slow) { entry.slowCount++; if (q.sub) entry.missSubs.add(q.sub); }
    byMat.set(t.id, entry);
  });
  const now = Date.now(), foundWeak = [];
  let changed = false;
  byMat.forEach(e => {
    const pct = e.maxSum ? Math.round((e.scoreSum / e.maxSum) * 100) : 0;
    if (pct < 80 || (e.slowCount > 0 && pct < 90)) {
      const prev = weakMateri[e.t.id];
      const subs = [...new Set([...e.missSubs, ...((prev && prev.subs) || [])])].slice(0, 6);
      weakMateri[e.t.id] = {
        id: e.t.id, title: e.t.title, group: e.t.group, skbCategory: e.t.skbCategory || '',
        pct, wrongCount: e.wrongCount + e.slowCount, subs, at: now, source: curExam.pack?.title || 'Latihan / Try Out'
      };
      foundWeak.push({ t: e.t, pct, wrongCount: e.wrongCount, slowCount: e.slowCount, subs });
      changed = true;
    } else if (e.n >= 2 && pct >= 85 && e.wrongCount === 0 && e.slowCount === 0 && weakMateri[e.t.id]) {
      delete weakMateri[e.t.id];
      changed = true;
    }
  });
  if (changed) store.set(WEAK_MATERI_KEY, weakMateri);
  return foundWeak.sort((a, b) => a.pct - b.pct || b.wrongCount - a.wrongCount);
}
function weakMateriList(scope = 'ALL') {
  const byId = new Map();
  Object.values(weakMateri || {}).forEach(w => {
    const t = MATERI.find(m => m.id === w.id);
    if (!t) return;
    byId.set(t.id, { t, id: t.id, title: t.title, group: t.group, skbCategory: t.skbCategory || '', pct: w.pct, wrongCount: w.wrongCount || 1, subs: w.subs || [], at: w.at || 0, source: w.source || 'Evaluasi sebelumnya' });
  });
  const idx = planQIndex();
  reviewIssues('ALL').forEach(iss => {
    const q = idx.get(questions.resolve(iss.id)) || { id: iss.id, sub: iss.sub, category: iss.bucket?.startsWith('SKD_') ? iss.bucket.slice(4) : '' };
    const t = materiForQuestionBest(q, iss.bucket || '');
    if (!t) return;
    const prev = byId.get(t.id);
    if (!prev) {
      byId.set(t.id, {
        t, id: t.id, title: t.title, group: t.group, skbCategory: t.skbCategory || '',
        pct: iss.score ? Math.round((iss.score / 5) * 100) : 0, wrongCount: 1,
        subs: iss.sub ? [iss.sub] : [], at: iss.at || 0, source: 'Riwayat tryout'
      });
    } else {
      prev.wrongCount = Math.max(prev.wrongCount || 1, 1);
      if (iss.sub && !prev.subs.includes(iss.sub) && prev.subs.length < 6) prev.subs.push(iss.sub);
    }
  });
  let list = [...byId.values()];
  if (scope === 'SKD') list = list.filter(x => x.group !== 'SKB');
  else if (['TWK', 'TIU', 'TKP'].includes(scope)) list = list.filter(x => x.group === scope);
  else if (scope && scope.startsWith('SKB_')) list = list.filter(x => x.group === 'SKB' && x.skbCategory === scope.slice(4));
  return list.sort((a, b) => ((a.pct ?? 60) - (b.pct ?? 60)) || (b.wrongCount - a.wrongCount) || (b.at - a.at));
}
function weakMateriMap() {
  const m = new Map();
  weakMateriList('ALL').forEach(x => m.set(x.id, x));
  return m;
}
function resolveWeakMateri(tId) {
  if (weakMateri[tId]) {
    delete weakMateri[tId];
    store.set(WEAK_MATERI_KEY, weakMateri);
  }
  const idx = planQIndex();
  let revChanged = false;
  Object.entries(reviews).forEach(([bucket, rec]) => {
    if (!rec || !Array.isArray(rec.issues)) return;
    const keep = [];
    const now = Date.now();
    rec.issues.forEach(iss => {
      const q = idx.get(questions.resolve(iss.id)) || { id: iss.id, sub: iss.sub, category: bucket.startsWith('SKD_') ? bucket.slice(4) : '' };
      const t = materiForQuestionBest(q, bucket);
      if (t && t.id === tId) {
        rec.cleared = rec.cleared || {};
        rec.cleared[reviewConcept(iss)] = now;
        revChanged = true;
      } else keep.push(iss);
    });
    if (keep.length !== rec.issues.length) rec.issues = keep;
  });
  if (revChanged) store.set(REVIEW_KEY, reviews);
}
function openKelemahanMateri(scope = 'ALL') {
  const list = weakMateriList(scope);
  const d = planDlg('dlg-weak-materi');
  const rows = list.length ? list.map(w => {
    const t = w.t;
    const badge = t.group === 'SKB' ? `SKB ${t.skbCategory || ''}` : t.group;
    const subTxt = w.subs && w.subs.length ? w.subs.slice(0, 3).map(esc).join(', ') : esc(t.summary || '');
    return `
      <div class="km-weak-item">
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="materi-weak-badge">⚠ ${esc(badge)}${w.pct != null ? ` · ${w.pct}%` : ''}</span>
              <span class="text-[0.68rem] font-semibold text-slate-500">${esc(w.source)}</span>
            </div>
            <div class="mt-1 text-sm font-extrabold text-slate-900">${esc(t.title)}</div>
            ${subTxt ? `<p class="mt-0.5 text-xs text-slate-600 line-clamp-2">Fokus lemah: ${subTxt}</p>` : ''}
          </div>
          <button type="button" class="btn btn-ghost btn-xs text-slate-500" title="Tandai sudah dikuasai" onclick="App.clearWeakMateri('${esc(t.id)}')">✓ Kuasai</button>
        </div>
        <div class="mt-2.5 flex flex-wrap gap-1.5">
          <button type="button" class="btn btn-warning btn-xs font-extrabold text-amber-950" onclick="$('#dlg-weak-materi').close(); App.rangkuman('${esc(t.id)}')">📖 Rangkuman Cepat</button>
          <button type="button" class="btn btn-outline btn-xs" onclick="$('#dlg-weak-materi').close(); App.planStudy('${esc(t.id)}')">🎓 Belajar Materi</button>
          <button type="button" class="btn btn-primary btn-xs" onclick="$('#dlg-weak-materi').close(); App.startMateriPractice('${esc(t.id)}')">⚡ Latih Soal</button>
        </div>
      </div>`;
  }).join('') : '<div class="rkg-empty">Belum ada materi kelemahan tercatat. Selesaikan Tes Diagnostik atau Try Out agar kelemahanmu terpetakan otomatis!</div>';
  d.innerHTML = `
  <div class="modal-box max-w-2xl">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="text-lg font-extrabold text-neutral">⚠ Materi Kelemahan Anda Sebelumnya</h3>
        <p class="mt-0.5 text-xs text-base-content/70">Pelajari cepat rangkuman atau kerjakan ulang soal pada materi yang masih lemah sebelum tenggat tes.</p>
      </div>
      <button type="button" class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-weak-materi').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button>
    </div>
    <div class="mt-3 max-h-[55vh] space-y-2.5 overflow-y-auto pr-1">${rows}</div>
    <div class="modal-action flex-wrap justify-between gap-2">
      <div class="flex flex-wrap gap-2">
        ${reviewIssues('ALL').length ? `<button type="button" class="btn btn-primary btn-sm" onclick="$('#dlg-weak-materi').close(); App.startWeakness('ALL')">⚡ Latih Campuran Kelemahan</button>` : ''}
        <button type="button" class="btn btn-outline btn-sm" onclick="$('#dlg-weak-materi').close(); App.goWeakMateri()">Buka Kartu Materi Kuning</button>
      </div>
      <button type="button" class="btn btn-ghost btn-sm" onclick="$('#dlg-weak-materi').close()">Tutup</button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
  if (!d.open) d.showModal();
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
      <button type="button" role="menuitem" onclick="App.hmenu('theme')">${icon(themeMode === 'dark' ? 'sun' : 'moon', 'h-5 w-5')}<span>${themeMode === 'dark' ? 'Mode Terang' : 'Mode Gelap'}</span></button>
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
        <button id="btn-theme" type="button" class="btn btn-ghost btn-sm btn-square rounded-xl text-slate-700 hover:bg-slate-100" onclick="App.toggleTheme()" aria-label="Ganti mode tampilan" title="${themeMode === 'dark' ? 'Mode Terang' : 'Mode Gelap'}">${icon(themeMode === 'dark' ? 'sun' : 'moon', 'h-5 w-5')}</button>
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
function homeHafalanCard() {
  const sum = rkSavedSummary();
  const n = sum.saved.length;
  const g = sum.byGroup;
  const lastHtml = sum.last
    ? `<b>Terakhir ditandai ${esc(rkFormatAgo(sum.last.at))}:</b> <span class="font-bold">[${esc(sum.last.group)}]</span> ${esc(sum.last.topic)} → "${esc(sum.last.stepTitle)}"`
    : 'Belum ada materi yang ditandai hafal. Tandai sub-bab yang sudah dikuasai agar besok langsung ingat hafalan kemarin.';
  return `
    <section id="home-hafalan" class="rk-home-box" aria-label="Catatan Tandai Hafal">
      <div class="rk-home-top">
        <div class="rk-home-title"><span>✓</span> <span>Tandai Hafal &amp; Ingat Hafalan Kemarin</span></div>
        <span class="rk-home-badge">${n}/${sum.totalAll} hafal</span>
      </div>
      <div class="rk-home-last">${lastHtml}</div>
      <div class="rk-home-meta">TWK ${g.TWK.read}/${g.TWK.total} · TIU ${g.TIU.read}/${g.TIU.total} · TKP ${g.TKP.read}/${g.TKP.total}${g.SKB.total ? ` · SKB ${g.SKB.read}/${g.SKB.total}` : ''}</div>
      <button type="button" class="rk-home-btn" onclick="App.openHafalan()">📌 Lihat &amp; Tandai Hafalan (${n})</button>
      <div class="rk-home-ggrid" aria-label="Buka Rangkuman Global TWK TIU TKP">
        <button type="button" class="rk-home-gbtn" onclick="App.rangkumanGlobal('TWK')">Global TWK (${g.TWK.read}/${g.TWK.total})</button>
        <button type="button" class="rk-home-gbtn" onclick="App.rangkumanGlobal('TIU')">Global TIU (${g.TIU.read}/${g.TIU.total})</button>
        <button type="button" class="rk-home-gbtn" onclick="App.rangkumanGlobal('TKP')">Global TKP (${g.TKP.read}/${g.TKP.total})</button>
      </div>
    </section>`;
}

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

  const syncHomePill = (() => {
    const st = window.Auth?.syncStatus?.();
    if (!st) return '';
    if (!st.online) {
      return `<div id="home-sync-status" class="mt-2 flex flex-wrap items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900"><b>Offline Mode Aktif</b> · Seluruh materi &amp; CAT berjalan tanpa internet. Progres otomatis disimpan lokal${st.pending ? ` (${st.pending} perubahan)` : ''} &amp; siap disinkron saat online.</div>`;
    }
    if (st.dirty) {
      return `<div id="home-sync-status" class="mt-2 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs text-sky-900"><span><b>Online kembali</b> · Mengamankan progres yang dikerjakan saat offline...</span><button type="button" class="btn btn-xs btn-primary" onclick="window.Auth?.syncNow?.()">Sinkronkan</button></div>`;
    }
    return `<div id="home-sync-status" class="mt-1.5 text-[0.72rem] font-semibold text-emerald-700">✓ Offline PWA siap · progres otomatis tersimpan lokal${st.hasServer && st.loggedIn ? ' &amp; tersinkron ke akun' : ''}</div>`;
  })();
  const jMeta = activeJalur();

  shell('', `
    <div class="home-wrap mx-auto w-full max-w-xl pb-2 pt-1 sm:pt-8">
      <header class="mb-4 px-0.5">
        <h1 class="text-2xl font-extrabold leading-tight tracking-tight text-neutral">${sapa}${preferred.name ? `, ${esc(preferred.name)}` : ''}!</h1>
        <p class="mt-0.5 text-sm text-slate-600"><a href="#/planning" class="link link-primary font-bold">Planning ${planCfg ? planCfg.days : 7} hari</a> · Target SKD <b>500++ (${jMeta.targetSkd})</b>${preferred.bucket ? ` &amp; SKB ${esc(skbMeta(preferred.bucket).short)} 90%` : ' &amp; SKB 90%'} · Kementerian &amp; Pemda</p>
        <p class="mt-1 text-xs"><a href="#/materi/rencana-7-hari" class="link link-primary">Panduan 7 hari dan rumus cepat TIU</a> · <button type="button" class="link link-secondary font-bold" onclick="Auth.openProfile()">Jalur: ${esc(jMeta.label)}</button></p>
        ${syncHomePill}
      </header>
      <div class="home-grid">
      <div class="home-col home-col-left">
      ${resume}
      ${cont}
      ${(() => {
        const weakHome = weakMateriList('ALL'), revN = reviewIssues('ALL').length;
        if (!weakHome.length && !revN) return '';
        const endedNote = !planCfg && planEnded ? `Dari akhir planning ${planEnded.days || ''} hari sebelumnya — kebut sebelum tes:` : 'Materi yang masih lemah dari hasil tesmu — klik untuk belajar kilat sebelum ujian:';
        const topPills = weakHome.slice(0, 3).map(w => `<span class="materi-weak-badge">${esc(w.group)}: ${esc(w.title)}${w.pct != null ? ` (${w.pct}%)` : ''}</span>`).join('');
        return `<div class="km-weak-home mb-4">
          <div class="flex items-start justify-between gap-2">
            <div><div class="text-xs font-extrabold uppercase tracking-wide text-amber-900">⚠ Kelemahan Anda Sebelumnya (${weakHome.length || revN} materi)</div>
            <p class="mt-0.5 text-xs text-slate-700">${endedNote}</p></div>
            <span class="materi-weak-badge">${weakHome.length || revN}</span>
          </div>
          ${topPills ? `<div class="mt-2 flex flex-wrap gap-1.5">${topPills}</div>` : ''}
          <div class="mt-2.5 flex flex-wrap gap-2">
            <button type="button" class="btn btn-warning btn-sm font-extrabold" onclick="App.openKelemahanMateri()">📖 Lihat Kelemahan (${weakHome.length || revN})</button>
            ${revN ? `<button type="button" class="btn btn-outline btn-sm" onclick="App.openReview()">⚡ Latih Soal Kelemahan</button>` : ''}
          </div>
        </div>`;
      })()}
      ${stats}
      </div>
      <section class="home-col home-col-right" aria-label="Pilih jalur belajar">
        <h2 class="mb-2 px-0.5 text-sm font-extrabold text-slate-800">Mau belajar apa?</h2>
        <div class="grid gap-3">
          ${go3('#/materi', 'bg-teal-500', 'book', 'Materi', 'Baca ringkasan dan trik cepat, langkah demi langkah.', `${MATERI.length} topik`)}
          ${go3('#/skd', 'bg-sky-500', 'clipboard', 'SKD', 'Latihan soal TWK, TIU, TKP & tryout target 500++.', `${fmtNum(skdTot)} soal · ${packsFor('SKD_FULL').length} tryout`)}
          ${go3('#/skb', 'bg-indigo-500', 'briefcase', 'SKB', 'Simulasi SKB CAT & materi seluruh formasi Kemen & Pemda.', `${fmtNum(skbKeys().reduce((a, k) => a + bankLen(k), 0))} soal · ${skbKeys().length} bidang`)}
        </div>
        <div class="km-home-tools mt-3">
          ${(() => {
            const prepLabel = preferred.bucket ? ` (${esc(skbMeta(preferred.bucket).short)})` : (preferred.role ? ` (${esc(preferred.role)})` : '');
            const setLink = !preferred.bucket ? ' <button type="button" class="link link-primary text-[0.7rem] font-bold ml-1" onclick="App.openOnboarding()">Pilih bidang SKB →</button>' : '';
            return `<div class="km-home-tools-h">Persiapan CPNS Kementerian &amp; Pemda${prepLabel}${setLink}</div>`;
          })()}
          <div class="km-home-grid">
            <button type="button" class="km-tool-btn" onclick="App.openNonCat('wawancara')"><span>🎙️</span><b>Lab Non-CAT</b><small>Wawancara, Pauli, Kasus</small></button>
            <button type="button" class="km-tool-btn" onclick="App.openCalc()"><span>📊</span><b>Kalkulator 40:60</b><small>Kemen &amp; 100% CAT Pemda</small></button>
            <button type="button" class="km-tool-btn" onclick="App.openVault()"><span>🔖</span><b>Soal Salah &amp; Simpan</b><small>${Object.keys(wrongMap).length} salah · ${Object.keys(bookmarks).length} bookmark</small></button>
          </div>
        </div>
      </section>
      </div>
      ${homeHafalanCard()}
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
    const icons = { SKB_PRAKOM: 'db', SKB_HUKUM: 'clipboard', SKB_KEUANGAN: 'trophy', SKB_KESEHATAN: 'check', SKB_PENDIDIKAN: 'book', SKB_KEBIJAKAN: 'sliders', SKB_SDMA: 'user', SKB_AUDITOR: 'check', SKB_INGGRIS: 'book' };
    const preferred = targetPreference().bucket;
    const cards = skbKeys().sort((a, b) => Number(b === preferred) - Number(a === preferred)).map(k => {
      const m = skbMeta(k), n = bankLen(k), ps = packsFor(k), np = ps.length;
      const done = ps.filter(p => results[p.key]).length + (results['SKBFULL-' + k] ? 1 : 0);
      const totPack = np + 1;
      const all = np > 0 && done >= totPack;
      const pct = totPack ? Math.min(100, Math.round(done / totPack * 100)) : 0;
      const matN = rkGlobalTopics(k).length;
      return `
      <a href="#/skb/${k}" class="flex min-w-0 items-center gap-3.5 rounded-3xl border-2 border-b-4 ${all ? 'border-green-300 bg-green-50/60' : 'border-slate-200 bg-white'} p-4 transition active:translate-y-[2px] active:border-b-2 sm:hover:border-indigo-300">
        <span class="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-indigo-500 text-white">${icon(icons[k] || 'briefcase', 'h-8 w-8')}${all ? `<span class="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-green-500 ring-2 ring-white">${icon('tick', 'h-3.5 w-3.5')}</span>` : ''}</span>
        <span class="min-w-0 flex-1">
          <span class="block text-base font-extrabold leading-snug text-slate-900">${esc(m.name)}${k === preferred ? ' · Targetmu' : ''}</span>
          <span class="mt-0.5 line-clamp-2 block text-xs leading-snug text-slate-500">${esc(m.desc)}</span>
          <span class="mt-2 flex items-center gap-2.5"><span class="lx-track !h-2.5"><span class="lx-fill block" style="width:${pct}%"></span></span><span class="shrink-0 text-[0.7rem] font-bold text-slate-600">${Math.min(done, totPack)}/${totPack} tes</span></span>
          <span class="mt-1 block text-[0.7rem] font-semibold text-indigo-600">${fmtNum(n)} soal · ${matN} modul materi</span>
        </span>
        ${icon('arrowR', 'h-5 w-5 shrink-0 text-slate-400')}
      </a>`;
    }).join('');
    shell('skb', `
      ${breadcrumb([['#/', 'Beranda'], [null, 'SKB']])}
      ${pageHead('Seleksi Kompetensi Bidang (SKB)', 'Formasi lengkap Kementerian & Pemerintah Daerah (Pemda). Target kompetitif >= 90% menyempurnakan nilai SKD 500++.')}
      <div class="rkg-panel mb-4">
        <div class="rkg-panel-head">
          <div><div class="rkg-panel-title">🏛️ Pusat Persiapan SKB Kementerian &amp; Pemda (CAT &amp; Non-CAT)</div>
          <p class="rkg-panel-sub">Kuasi SKB CAT BKN 100% (Pemda/Standar BKN) maupun Wawancara STAR, Kraepelin/Pauli &amp; Studi Kasus semua formasi Kementerian.</p></div>
        </div>
        <div class="rkg-grid">
          <button type="button" class="rkg-btn twk on" onclick="App.openNonCat('wawancara')"><span class="rkg-ic">🎙️</span><span class="rkg-meta"><span class="rkg-btn-t">Wawancara &amp; Studi Kasus STAR</span><span class="rkg-btn-s">15 skenario + 11 studi kasus semua formasi</span></span></button>
          <button type="button" class="rkg-btn tiu" onclick="App.openNonCat('pauli')"><span class="rkg-ic">⚡</span><span class="rkg-meta"><span class="rkg-btn-t">Tes Konsentrasi Kraepelin</span><span class="rkg-btn-s">Simulasi kecepatan &amp; akurasi berhitung</span></span></button>
          <button type="button" class="rkg-btn tkp" onclick="App.openCalc()"><span class="rkg-ic">📊</span><span class="rkg-meta"><span class="rkg-btn-t">Kalkulator 40% SKD + 60% SKB</span><span class="rkg-btn-s">Preset 100% CAT Pemda &amp; Kemen 500++</span></span></button>
        </div>
      </div>
      ${cards ? `<div class="grid grid-cols-[minmax(0,1fr)] gap-3.5 sm:grid-cols-2 lg:grid-cols-3">${cards}</div>`
        : `<div class="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-600">Bank soal SKB belum tersedia.</div>`}`);
    return;
  }
  const m = skbMeta(key), packs = packsFor(key);
  const fullPack = skbFullPack(key), fullRes = fullPack ? results[fullPack.key] : null;
  const nDone = packs.filter(p => results[p.key]).length;
  const pct = packs.length ? Math.round(nDone / packs.length * 100) : 0;
  const fullCard = fullPack ? (() => {
    const fMax = fullRes ? (fullRes.best.max || fullPack.questions.length * 5) : fullPack.questions.length * 5;
    const fPct = fullRes ? Math.round((fullRes.best.score / fMax) * 100) : 0;
    return `
      <div class="mb-4 rounded-3xl border-2 border-b-4 border-indigo-300 bg-gradient-to-br from-primary to-secondary p-4 text-white">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="min-w-0 flex-1">
            <span class="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[0.7rem] font-extrabold uppercase">Simulasi Standar CAT BKN · ${fullPack.questions.length} Soal</span>
            <h2 class="mt-1.5 text-lg font-extrabold leading-snug">${esc(fullPack.title)}</h2>
            <p class="mt-0.5 text-xs text-white/85">Durasi ${fullPack.minutes} menit · soal proporsional seluruh subtopik ${esc(m.name)} (target >= 90% untuk mengamankan ranking Kementerian &amp; Pemda).</p>
            ${fullRes ? `<div class="mt-2 inline-flex items-center gap-2 rounded-xl bg-white/15 px-3 py-1 text-xs font-bold">Skor terbaik: ${fullRes.best.score}/${fMax} (${fPct}%)</div>` : ''}
          </div>
          <button type="button" class="lx-btn lx-gold sm:w-auto shrink-0 px-4" onclick="App.openStart('${esc(fullPack.key)}')">${icon('play', 'h-5 w-5')} ${fullRes ? 'Ulangi Simulasi Penuh' : 'Mulai Simulasi CAT'}</button>
        </div>
      </div>`;
  })() : '';
  const skbRkRow = rkGlobalPanel(key);
  const firstTopic = rkGlobalTopics(key)[0] || MATERI.find(x => x.buckets && x.buckets.length === 1 && x.buckets[0] === key);
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

    ${pageHead('SKB ' + esc(m.name), esc(m.desc) + ` Tersedia ${fmtNum(bankLen(key))} soal (Simulasi Penuh + paket ${SKB_SIZE} soal).`,
      `<a href="#/skb" class="hidden sm:inline-flex btn btn-ghost btn-sm gap-2 text-slate-700 hover:bg-slate-100 rounded-xl">${icon('back', 'h-4 w-4 text-primary')} Ganti bidang</a>`)}
    ${key === 'SKB_PRAKOM' ? '<p class="mb-3 text-xs text-slate-600">Target latihan 90% · Kisi-kisi Ahli Pertama. <a class="link link-primary" href="#/materi/rencana-7-hari">Panduan 7 hari</a></p>' : '<p class="mb-3 text-xs text-slate-600">Target latihan 90% · Berlaku untuk formasi Kementerian maupun Pemerintah Daerah (Pemda).</p>'}
    ${fullCard}
    ${skbRkRow ? `<div class="mb-3">${skbRkRow}</div>` : ''}
    ${packs.length ? `<div class="mb-4 flex items-center gap-3 rounded-2xl bg-white/80 p-3.5 ring-1 ring-slate-200"><div class="lx-track !h-2.5"><div class="lx-fill" style="width:${pct}%"></div></div><span class="shrink-0 text-xs font-bold text-slate-600">${nDone} dari ${packs.length} paket reguler</span></div>` : ''}
    <div class="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">${packs.map(packCard).join('')}</div>
    ${firstTopic
      ? `<div class="mt-6 flex flex-wrap items-center gap-3 rounded-3xl border-2 border-b-4 border-teal-200 bg-teal-50 p-4"><span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-500 text-white">${icon('book', 'h-6 w-6')}</span><div class="min-w-0 flex-1"><div class="text-sm font-extrabold text-slate-900">Belum hafal kisi-kisi ${esc(m.short)}?</div><div class="mt-0.5 text-xs text-slate-600">Baca Rangkuman Global SKB ${esc(m.short)} atau mulai langkah belajar materinya.</div></div><div class="flex flex-wrap gap-2"><button type="button" class="btn btn-outline btn-sm rounded-xl font-bold" onclick="App.rangkumanGlobal('${esc(key)}')">Rangkuman Global</button><a class="btn btn-accent btn-sm shrink-0 rounded-xl font-bold text-white" href="#/materi/${firstTopic.id}">Belajar Materi</a></div></div>` : ''}
  `);
}

/* ---------- MATERI ---------- */
function renderMateri(id) {
  const topic = id && id !== 'skd' && id !== 'skb' && MATERI.find(t => t.id === id);
  if (topic) return renderMateriDetail(topic);

  const isSkd = ui.materiTab !== 'SKB';

  const weakMap = weakMateriMap();
  const skdAll = MATERI.filter(t => t.group !== 'SKB');
  const skbAll = MATERI.filter(t => t.group === 'SKB');
  const weakSkdN = skdAll.filter(t => weakMap.has(t.id)).length;
  const weakSkbN = skbAll.filter(t => weakMap.has(t.id)).length;

  const skdChipsData = [
    { id: 'ALL', name: 'Semua SKD' },
    { id: 'TWK', name: 'TWK (Wawasan Kebangsaan)' },
    { id: 'TIU', name: 'TIU (Intelegensia Umum)' },
    { id: 'TKP', name: 'TKP (Karakteristik Pribadi)' }
  ].concat(weakSkdN ? [{ id: 'WEAK', name: `⚠ Kelemahan (${weakSkdN})` }] : []);

  const skbChipsData = [
    { id: 'ALL', name: 'Semua Bidang SKB' },
    { id: 'PRAKOM', name: 'Pranata Komputer' },
    { id: 'HUKUM', name: 'Hukum & Pemda' },
    { id: 'KEUANGAN', name: 'Keuangan & Pajak' },
    { id: 'KESEHATAN', name: 'Kesehatan & SPM' },
    { id: 'PENDIDIKAN', name: 'Pendidikan & Guru' },
    { id: 'KEBIJAKAN', name: 'Analis Kebijakan' },
    { id: 'SDMA', name: 'SDMA & Arsip' },
    { id: 'AUDITOR', name: 'Auditor & PBJ' },
    { id: 'INGGRIS', name: 'Bahasa Inggris Kemen' }
  ].concat(weakSkbN ? [{ id: 'WEAK', name: `⚠ Kelemahan (${weakSkbN})` }] : []);

  if (isSkd && ui.materiGroup === 'WEAK' && !weakSkdN) ui.materiGroup = 'ALL';
  if (!isSkd && ui.materiSkbGroup === 'WEAK' && !weakSkbN) ui.materiSkbGroup = 'ALL';

  const chipCls = on => `shrink-0 snap-start whitespace-nowrap rounded-full border-2 border-b-4 px-4 py-2 text-xs font-extrabold transition active:translate-y-[2px] active:border-b-2 ${on ? 'border-primary bg-sky-50 text-primary' : 'border-slate-200 bg-white text-slate-600'}`;
  const chips = isSkd
    ? skdChipsData.map(g => `<button type="button" ${ui.materiGroup === g.id ? 'data-on="1"' : ''} class="${chipCls(ui.materiGroup === g.id)}" onclick="App.setMateriGroup('${g.id}')">${g.name}</button>`).join('')
    : skbChipsData.map(g => `<button type="button" ${ui.materiSkbGroup === g.id ? 'data-on="1"' : ''} class="${chipCls(ui.materiSkbGroup === g.id)}" onclick="App.setMateriSkbGroup('${g.id}')">${g.name}</button>`).join('');

  let list = [];
  if (isSkd) {
    list = ui.materiGroup === 'WEAK'
      ? skdAll.filter(t => weakMap.has(t.id))
      : skdAll.filter(t => ui.materiGroup === 'ALL' || t.group === ui.materiGroup);
  } else {
    list = ui.materiSkbGroup === 'WEAK'
      ? skbAll.filter(t => weakMap.has(t.id))
      : skbAll.filter(t => ui.materiSkbGroup === 'ALL' || t.skbCategory === ui.materiSkbGroup || (!t.skbCategory && ui.materiSkbGroup === 'ALL'));
  }

  const skbIcons = { PRAKOM: 'db', INGGRIS: 'book', KESEHATAN: 'check', HUKUM: 'clipboard', KEUANGAN: 'trophy', PENDIDIKAN: 'book', KEBIJAKAN: 'sliders', SDMA: 'user', AUDITOR: 'check' };
  const groupIcons = { TWK: 'flag', TIU: 'puzzle', TKP: 'bulb' };
  let nDone = 0;
  const cards = list.map(t => {
    const st = GROUP_STYLE[t.group] || GROUP_STYLE.SKB;
    const n = materiPool(t).length;
    const pr = lessonProgress(t);
    const fin = pr.total > 0 && pr.pct === 100;
    const wInfo = weakMap.get(t.id);
    if (fin) nDone++;
    const badgeLabel = t.group === 'SKB' ? (t.skbCategory ? `SKB ${t.skbCategory}` : 'SKB') : t.group;
    const ic = t.group === 'SKB' ? (skbIcons[t.skbCategory] || 'briefcase') : (groupIcons[t.group] || 'book');
    return `
    <a href="#/materi/${t.id}" class="flex min-w-0 items-center gap-3.5 rounded-3xl border-2 border-b-4 p-3.5 transition active:translate-y-[2px] active:border-b-2 sm:hover:border-primary/40 ${wInfo ? 'materi-card-weak' : fin ? 'border-green-300 bg-green-50/60' : 'border-slate-200 bg-white'}">
      <span class="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white ${wInfo ? 'bg-amber-500' : st.bar}">${icon(ic, 'h-7 w-7')}${fin && !wInfo ? `<span class="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-green-500 ring-2 ring-white">${icon('tick', 'h-3.5 w-3.5')}</span>` : ''}</span>
      <span class="min-w-0 flex-1">
        <span class="flex flex-wrap items-center gap-1.5">
          <span class="rounded-full px-2 py-0.5 text-[0.65rem] font-extrabold ${st.badge}">${badgeLabel}</span>
          ${wInfo ? `<span class="materi-weak-badge">⚠ Kelemahan${wInfo.pct != null ? ` · ${wInfo.pct}%` : ''}</span>` : ''}
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

  const skbGlobalScope = ui.materiSkbGroup === 'ALL' || ui.materiSkbGroup === 'WEAK' ? 'SKB' : ('SKB_' + ui.materiSkbGroup);

  shell('materi', `
    ${breadcrumb([['#/', 'Beranda'], [null, isSkd ? 'Materi SKD' : 'Materi SKB']])}
    ${pageHead('Materi & Trik Cepat CPNS', isSkd ? 'Ringkasan inti TWK, TIU, dan TKP, lengkap dengan trik cepat.' : 'Ringkasan inti seluruh bidang formasi Kementerian & Pemda.')}

    <!-- 2 Pilihan Utama: MATERI SKD vs MATERI SKB (Segmented Switcher Modern) -->
    <div class="mb-3.5 grid grid-cols-2 gap-2">
      <button type="button" onclick="App.setMateriTab('SKD')" class="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-b-4 px-2 py-2 transition active:translate-y-[2px] active:border-b-2 ${isSkd ? 'border-primary bg-sky-50 text-primary' : 'border-slate-200 bg-white text-slate-600'}">
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isSkd ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}">${icon('book', 'h-4 w-4')}</span>
        <span class="min-w-0 text-left leading-tight"><span class="block text-sm font-extrabold">Materi SKD</span><span class="block text-[0.68rem] font-semibold opacity-75">TWK · TIU · TKP</span></span>
      </button>
      <button type="button" onclick="App.setMateriTab('SKB')" class="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-b-4 px-2 py-2 transition active:translate-y-[2px] active:border-b-2 ${!isSkd ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-200 bg-white text-slate-600'}">
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg ${!isSkd ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'}">${icon('briefcase', 'h-4 w-4')}</span>
        <span class="min-w-0 text-left leading-tight"><span class="block text-sm font-extrabold">Materi SKB</span><span class="block text-[0.68rem] font-semibold opacity-75">9 bidang Kemen &amp; Pemda</span></span>
      </button>
    </div>

    <!-- Sub-filter Chip (bisa digeser ke samping) -->
    <div id="materi-chips" class="no-scrollbar relative -mx-3 mb-3.5 flex snap-x gap-2 overflow-x-auto px-3 pb-1.5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">${chips}</div>
    ${rkGlobalPanel(isSkd ? ui.materiGroup : skbGlobalScope)}
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
      ${(() => {
        const rkGrp = t.group === 'SKB' ? (t.skbCategory ? 'SKB_' + t.skbCategory : (t.buckets && t.buckets[0]) || 'SKB') : t.group;
        const m = rkGlobalMetaFor(rkGrp);
        if (!m) return '';
        const st = rkGlobalStats(m.id);
        return `<div class="rkg-detail-bar"><div class="min-w-0 flex-1 text-xs text-slate-600"><b class="block text-sm text-slate-900">Ingin baca semua materi ${esc(m.subtitle || rkGrp)} sekaligus?</b>Gabungan ${st.count} pecahan materi (${st.parts} bagian).</div><button type="button" class="lx-sum" onclick="App.rangkumanGlobal('${esc(m.id)}')" aria-label="Buka ${esc(m.title)}">${icon('book', 'h-4 w-4')} GLOBAL ${esc(rkGrp.replace('SKB_', ''))}</button></div>`;
      })()}
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
  const saved = isBookmarked(q);
  const bmBtn = q.id ? `<button type="button" class="rk-bm-btn${saved ? ' on' : ''}" data-bm="${esc(q.id)}" onclick="App.toggleBookmark('${esc(q.id)}', this)">${saved ? '★ Tersimpan' : '☆ Tandai sulit'}</button>` : '';
  return `<div class="rk-q"><div class="flex items-center justify-between gap-2"><div class="rk-qn">Contoh soal ${n}</div>${bmBtn}</div><div class="rk-qt">${escQ(q)}</div>${q.svg ? `<div class="q-svg my-2 overflow-auto rounded-xl bg-base-200/60 p-2">${q.svg}</div>` : ''}<ul class="rk-opts">${opts}</ul>${why}${trick}</div>`;
}
function rkBody(t, reserved = new Set(reservedFinalKeys())) {
  const steps = lessonSteps(t), plan = lessonPlan(t), d = lessonDone(t);
  const items = steps.map((st, i) => {
    const content = st.kind === 'tips'
      ? `<ol class="rk-tips">${st.tips.map((x, n) => `<li><span class="rk-n">${n + 1}</span><span class="min-w-0 flex-1">${x}</span></li>`).join('')}</ol>`
      : `<div class="materi-body">${wrapTables(st.html)}</div>`;
    const qs = (plan[i] || []).filter(q => q && q.options && q.options.length && !reserved.has(questions.key(q)));
    const ex = qs.length ? `<div class="rk-ex"><div class="rk-ex-h">Contoh soal & cara mengerjakannya</div>${qs.map((q, n) => rkQuestion(q, n + 1)).join('')}</div>` : '';
    const readOn = isRkRead(t.id, st.title);
    const sumReadBtn = `<button type="button" class="rk-sum-read${readOn ? ' on' : ''}" aria-pressed="${readOn ? 'true' : 'false'}" title="Tandai sub-bab ini sudah hafal / dikuasai" onclick="event.preventDefault();event.stopPropagation();App.rangkumanToggleRead(this)">${readOn ? '✓ Hafal' : 'Tandai hafal'}</button>`;
    const readBtn = `<div class="rk-read-row"><button type="button" class="rk-read-btn${readOn ? ' on' : ''}" aria-pressed="${readOn ? 'true' : 'false'}" onclick="App.rangkumanToggleRead(this)">${readOn ? '✓ Sudah hafal / dibaca' : 'Tandai sudah hafal'}</button></div>`;
    return `<details class="rk-item"${steps.length === 1 ? ' open' : ''} data-rk-id="${esc(t.id)}" data-rk-title="${esc(st.title)}" data-read="${readOn ? '1' : '0'}"><summary><span class="rk-num${d[i] ? ' done' : ''}">${d[i] ? '✓' : i + 1}</span><span class="rk-sum-t">${esc(st.title)}</span>${sumReadBtn}<span class="rk-chev" aria-hidden="true">▾</span></summary><div class="rk-in">${content}${ex}${readBtn}</div></details>`;
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
  const readN = lessonSteps(t).filter(st => isRkRead(t.id, st.title)).length;
  const rkGrp = t.group === 'SKB' ? (t.skbCategory ? 'SKB_' + t.skbCategory : (t.buckets && t.buckets[0]) || 'SKB') : t.group;
  const rkMeta = rkGlobalMetaFor(rkGrp);
  const globalCta = rkMeta
    ? (() => {
        const st = rkGlobalStats(rkMeta.id);
        return st.count ? `<div class="rkg-hero-cta ${rkMeta.tone} mb-3"><span class="text-xs font-bold text-slate-700">Lihat semua ${st.count} materi ${esc(rkMeta.subtitle || rkGrp)} dalam 1 rangkuman</span><button type="button" class="lx-sum lx-sum-sm" onclick="App.rangkumanGlobal('${esc(rkMeta.id)}')">${icon(rkMeta.icon, 'h-3.5 w-3.5')} GLOBAL ${esc(rkGrp.replace('SKB_', ''))}</button></div>` : '';
      })()
    : '';
  el.innerHTML = `
    <div class="lx-top"><button type="button" class="lx-x" onclick="App.rangkumanClose()" aria-label="Tutup rangkuman">${icon('x', 'h-6 w-6')}</button>
      <div class="rk-head"><div class="rk-kicker">RANGKUMAN</div><div class="rk-title">${esc(t.title)}</div></div></div>
    <div class="lx-body" id="rk-scroll"><div class="lx-wrap">
      <p class="rk-intro">Semua materi, rumus, studi kasus, dan contoh soal beserta cara mengerjakannya ada di sini. Ketuk judul untuk membuka atau klik <b>Tandai hafal</b> di kanan judul (<b id="rk-read-counter">${readN}/${n}</b> bagian ditandai hafal).</p>
      ${globalCta}
      <div class="rk-tools"><button type="button" class="rk-tool" onclick="App.rangkumanToggle(true)">Buka semua</button><button type="button" class="rk-tool" onclick="App.rangkumanToggle(false)">Tutup semua</button><button type="button" class="rk-tool" id="rk-read-btn" aria-pressed="false" onclick="App.rangkumanToggleReadOnly(this)">✓ Sudah hafal (<span id="rk-read-pill-n">${readN}</span>)</button><button type="button" class="rk-tool" id="rk-unread-btn" aria-pressed="false" onclick="App.rangkumanToggleUnread(this)">Belum hafal saja</button><button type="button" class="rk-tool" onclick="App.rangkumanPrint()">🖨️ Cetak / PDF</button></div>
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
  const meta = rkGlobalMetaFor(group) || RK_GLOBAL_META.TWK;
  const grp = meta.id;
  const topics = rkGlobalTopics(grp);
  if (!topics.length) { toast(`Materi ${meta.title || grp} belum tersedia.`); return; }
  rk = { mode: 'global', group: grp };
  const el = rkEnsureOverlay();
  const reserved = new Set(reservedFinalKeys());
  let totalParts = 0, doneParts = 0, readParts = 0;
  const chapters = topics.map((t, ti) => {
    const steps = lessonSteps(t);
    const pr = lessonProgress(t);
    const chapRead = steps.filter(st => isRkRead(t.id, st.title)).length;
    const chapAll = chapRead === steps.length && steps.length > 0;
    totalParts += steps.length;
    doneParts += pr.done;
    readParts += chapRead;
    return `
      <section id="rk-chap-${t.id}" class="rkg-chap">
        <div class="rkg-chap-head ${meta.tone}">
          <div class="rkg-chap-meta">
            <span>Topik ${ti + 1} dari ${topics.length}</span>
            <span>${pr.done}/${steps.length} langkah · <span class="rkg-chap-readstat" data-chap-read="${t.id}">✓ ${chapRead}/${steps.length} hafal</span></span>
          </div>
          <h2 class="rkg-chap-title">${ti + 1}. ${esc(t.title)}</h2>
          <p class="rkg-chap-sum">${esc(t.summary)}</p>
          <div class="rkg-chap-acts">
            <button type="button" class="rkg-chap-btn" onclick="App.rangkumanToggleChap('rk-chap-${t.id}')">Buka / tutup bab ini</button>
            <button type="button" class="rkg-chap-btn rkg-chap-read${chapAll ? ' on' : ''}" data-chap-btn="${t.id}" onclick="App.rangkumanToggleChapRead('${t.id}')">${chapAll ? '✓ Bab sudah hafal' : '✓ Tandai bab ini hafal'}</button>
            <button type="button" class="rkg-chap-btn rkg-chap-link" onclick="App.rangkumanGoTopic('${t.id}')">Buka jalur belajar →</button>
          </div>
        </div>
        ${rkBody(t, reserved)}
      </section>`;
  }).join('');

  const allSavedN = rkSavedSummary().saved.length;
  const isSkbMode = grp === 'SKB' || grp.startsWith('SKB_');
  const tabKeys = isSkbMode
    ? ['SKB', ...targetSkbKeys().filter(k => rkGlobalStats(k).count > 0)]
    : ['TWK', 'TIU', 'TKP'];
  const tabs = tabKeys.map(k => {
    const m = rkGlobalMetaFor(k), st = rkGlobalStats(k);
    const shortLbl = k === 'SKB' ? 'Semua SKB' : k.replace('SKB_', '');
    return `<button type="button" class="rkg-pill ${m.tone}${k === grp ? ' on' : ''}" onclick="App.rangkumanGlobal('${k}')">${icon(m.icon, 'h-3.5 w-3.5')} ${esc(shortLbl)} (${st.count})</button>`;
  }).join('') + `<button type="button" class="rkg-pill hafal" onclick="App.openHafalan('saved', '${isSkbMode ? 'SKB' : grp}')">✓ Hafalan Saya (<span id="rk-hafalan-tab-n">${allSavedN}</span>)</button>`;

  const toc = topics.map((t, ti) =>
    `<button type="button" class="rkg-toc-chip" onclick="App.rangkumanJump('rk-chap-${t.id}')">${ti + 1}. ${esc(t.title)}</button>`
  ).join('');

  el.innerHTML = `
    <div class="lx-top"><button type="button" class="lx-x" onclick="App.rangkumanClose()" aria-label="Tutup rangkuman">${icon('x', 'h-6 w-6')}</button>
      <div class="rk-head"><div class="rk-kicker">${isSkbMode ? 'RANGKUMAN GLOBAL SKB' : 'RANGKUMAN GLOBAL SKD'}</div><div class="rk-title">${esc(meta.title)} · ${topics.length} Topik (${totalParts} Bagian)</div></div></div>
    <div class="lx-body" id="rk-scroll"><div class="lx-wrap">
      <div class="rkg-tabs" role="tablist" aria-label="Pilih Rangkuman Global">${tabs}</div>
      <p class="rk-intro">${esc(meta.desc)} Klik <b>Tandai hafal</b> di kanan tiap judul sub-bab atau <b>✓ Tandai bab ini hafal</b>. Progres: <b id="rk-read-counter">${readParts}/${totalParts}</b> bagian ditandai hafal · <b>${doneParts}/${totalParts}</b> langkah kuis selesai.</p>
      <div class="rkg-search-wrap">
        <span class="rkg-search-ic">${icon('search', 'h-4 w-4')}</span>
        <input id="rk-search" type="search" class="rkg-search" placeholder="Cari sub-bab, rumus, UU, atau kata kunci..." oninput="App.rangkumanFilter(this.value)" aria-label="Cari di ${esc(meta.title)}">
        <div id="rk-search-stat" class="rkg-search-stat">Menampilkan semua ${totalParts} bagian dari ${topics.length} topik.</div>
      </div>
      <div class="rkg-toc" aria-label="Daftar isi topik">${toc}</div>
      <div class="rk-tools"><button type="button" class="rk-tool" onclick="App.rangkumanToggle(true)">Buka semua</button><button type="button" class="rk-tool" onclick="App.rangkumanToggle(false)">Tutup semua</button><button type="button" class="rk-tool" id="rk-read-btn" aria-pressed="false" onclick="App.rangkumanToggleReadOnly(this)">✓ Sudah hafal (<span id="rk-read-pill-n">${readParts}</span>)</button><button type="button" class="rk-tool" id="rk-unread-btn" aria-pressed="false" onclick="App.rangkumanToggleUnread(this)">Belum hafal saja</button><button type="button" class="rk-tool" onclick="App.rangkumanPrint()">🖨️ Cetak / PDF</button></div>
      <div id="rk-chapters">${chapters}</div>
      <div id="rk-empty" class="rkg-empty" hidden>Tidak ada materi atau sub-bab yang cocok dengan kata kunci tersebut.</div>
      <button type="button" class="lx-btn lx-ghost mt-4" onclick="App.rangkumanClose()">Tutup rangkuman</button>
    </div></div>`;
  const b = $('#rk-scroll'); if (b) b.scrollTop = 0;
}
function rkRenderHafalanBody() {
  if (!rk || rk.mode !== 'hafalan') return;
  const sum = rkSavedSummary();
  const g = sum.byGroup;
  const statusTabs = [
    ['saved', `✓ Sudah Hafal (${sum.saved.length})`],
    ['unread', `Belum Hafal (${sum.totalAll - sum.saved.length})`],
    ['all', `Semua (${sum.totalAll})`]
  ].map(([id, lbl]) => `<button type="button" class="rkg-pill${rk.status === id ? ' on twk' : ''}" onclick="App.rangkumanHafalanSet('status', '${id}')">${lbl}</button>`).join('');

  const grpTabs = [
    ['ALL', `Semua (${sum.totalAll})`],
    ['TWK', `TWK (${g.TWK.read}/${g.TWK.total})`],
    ['TIU', `TIU (${g.TIU.read}/${g.TIU.total})`],
    ['TKP', `TKP (${g.TKP.read}/${g.TKP.total})`]
  ].concat(g.SKB.total ? [['SKB', `SKB (${g.SKB.read}/${g.SKB.total})`]] : [])
    .map(([id, lbl]) => {
      const tone = id === 'TWK' || id === 'TIU' || id === 'TKP' ? id.toLowerCase() : 'twk';
      return `<button type="button" class="rkg-pill ${tone}${rk.group === id ? ' on' : ''}" onclick="App.rangkumanHafalanSet('group', '${id}')">${lbl}</button>`;
    }).join('');

  const terms = String(rk.query || '').trim().toLowerCase().split(/\s+/).filter(Boolean);
  let rows = sum.items.filter(x => {
    if (rk.status === 'saved' && !x.read) return false;
    if (rk.status === 'unread' && x.read) return false;
    if (rk.group !== 'ALL' && x.group !== rk.group) return false;
    if (terms.length) {
      const txt = `${x.group} ${x.topic} ${x.stepTitle}`.toLowerCase();
      if (!terms.every(w => txt.includes(w))) return false;
    }
    return true;
  });
  if (rk.status === 'saved') rows = rows.slice().sort((a, b) => b.at - a.at);

  const listHtml = rows.length
    ? rows.map(x => `
        <div class="rk-hf-card${x.read ? ' is-read' : ''}">
          <div class="rk-hf-left">
            <div class="rk-hf-tags">
              <span class="rk-hf-tag ${esc(x.group.toLowerCase())}">${esc(x.group)}</span>
              <span class="rk-hf-time${x.read ? '' : ' muted'}">${x.read ? `✓ Ditandai ${esc(rkFormatAgo(x.at))}` : 'Belum ditandai hafal'}</span>
            </div>
            <div class="rk-hf-title">${esc(x.stepTitle)}</div>
            <div class="rk-hf-topic">${esc(x.topic)}</div>
          </div>
          <div class="rk-hf-acts">
            <button type="button" class="rk-sum-read${x.read ? ' on' : ''}" data-hf-id="${esc(x.tId)}" data-hf-title="${esc(x.stepTitle)}" aria-pressed="${x.read ? 'true' : 'false'}" onclick="App.rangkumanHafalanToggle(this)">${x.read ? '✓ Hafal' : 'Tandai hafal'}</button>
            <button type="button" class="rk-hf-go" onclick="App.rangkuman('${esc(x.tId)}', ${x.stepIdx})">Buka →</button>
          </div>
        </div>`).join('')
    : `<div class="rkg-empty">${rk.status === 'saved' ? 'Belum ada materi yang ditandai hafal di kategori ini. Pilih tab "Belum Hafal" atau "Semua" untuk mulai menandai.' : 'Tidak ada sub-bab yang cocok dengan filter ini.'}</div>`;

  const lastNote = sum.last
    ? `<b>Terakhir ditandai ${esc(rkFormatAgo(sum.last.at))}:</b> [${esc(sum.last.group)}] ${esc(sum.last.topic)} → "${esc(sum.last.stepTitle)}"`
    : 'Pilih sub-bab yang sudah dikuasai lalu klik <b>Tandai hafal</b> untuk menyimpannya.';

  const tabsEl = $('#rk-hf-tabs'), grpEl = $('#rk-hf-grps'), bodyEl = $('#rk-hf-body'), sumEl = $('#rk-hf-summary');
  if (tabsEl) tabsEl.innerHTML = statusTabs;
  if (grpEl) grpEl.innerHTML = grpTabs;
  if (sumEl) sumEl.innerHTML = lastNote;
  if (bodyEl) bodyEl.innerHTML = `<div class="rkg-search-stat mb-2">Menampilkan ${rows.length} sub-bab.</div><div class="rk-hf-list">${listHtml}</div>`;
}
function rkOpenHafalan(status = null, group = 'ALL') {
  const prevGroup = rk && rk.mode === 'global' && rk.group ? rk.group : (rk && rk.mode === 'hafalan' ? rk.backGroup : null);
  const sum = rkSavedSummary();
  const st = status || (sum.saved.length ? 'saved' : 'all');
  const grp = group && (group === 'ALL' || ['TWK', 'TIU', 'TKP', 'SKB'].includes(group)) ? group : 'ALL';
  rk = { mode: 'hafalan', status: st, group: grp, query: '', backGroup: prevGroup };
  const el = rkEnsureOverlay();
  const backHtml = prevGroup
    ? `<button type="button" class="rkg-chap-btn rkg-chap-link" onclick="App.rangkumanGlobal('${prevGroup}')">← Kembali ke Global ${prevGroup}</button>`
    : '';
  el.innerHTML = `
    <div class="lx-top"><button type="button" class="lx-x" onclick="App.rangkumanClose()" aria-label="Tutup daftar hafalan">${icon('x', 'h-6 w-6')}</button>
      <div class="rk-head"><div class="rk-kicker">CATATAN HAFALAN</div><div class="rk-title">Daftar Hafalan &amp; Tandai Materi (TWK · TIU · TKP · SKB)</div></div></div>
    <div class="lx-body" id="rk-scroll"><div class="lx-wrap">
      <div class="rkg-chap-acts mb-3">
        ${backHtml}
        <button type="button" class="rkg-chap-btn" onclick="App.rangkumanGlobal('TWK')">Global TWK</button>
        <button type="button" class="rkg-chap-btn" onclick="App.rangkumanGlobal('TIU')">Global TIU</button>
        <button type="button" class="rkg-chap-btn" onclick="App.rangkumanGlobal('TKP')">Global TKP</button>
      </div>
      <div id="rk-hf-summary" class="rk-home-last mb-3"></div>
      <div id="rk-hf-tabs" class="rkg-tabs"></div>
      <div id="rk-hf-grps" class="rkg-tabs"></div>
      <div class="rkg-search-wrap">
        <span class="rkg-search-ic">${icon('search', 'h-4 w-4')}</span>
        <input id="rk-hf-q" type="search" class="rkg-search" placeholder="Cari sub-bab atau topik hafalan..." oninput="App.rangkumanHafalanSet('query', this.value)" aria-label="Cari di daftar hafalan">
      </div>
      <div id="rk-hf-body"></div>
      <button type="button" class="lx-btn lx-ghost mt-4" onclick="App.rangkumanClose()">Tutup daftar hafalan</button>
    </div></div>`;
  rkRenderHafalanBody();
  const b = $('#rk-scroll'); if (b) b.scrollTop = 0;
}
function rkClose(fromPop) {
  if (!rk) return;
  rk = null;
  const el = $('#rangkuman'); if (el) el.remove();
  if (!lesson) document.documentElement.classList.remove('lx-open');
  if (!fromPop) { try { if (history.state && history.state.rk) history.back(); } catch (e) { /* abaikan */ } }
  const h = (location.hash || '').replace(/^#/, '');
  if (!exam && (!h || h === '/')) renderHome();
}
window.addEventListener('popstate', () => { if (rk) rkClose(true); });
const rangkumanApi = {
  rangkuman: rkOpen,
  rangkumanGlobal: rkOpenGlobal,
  openHafalan: rkOpenHafalan,
  rangkumanHafalanSet(field, val) {
    if (!rk || rk.mode !== 'hafalan') return;
    rk[field] = val;
    rkRenderHafalanBody();
  },
  rangkumanHafalanToggle(btn) {
    const tId = btn && btn.dataset && btn.dataset.hfId;
    const title = btn && btn.dataset && btn.dataset.hfTitle;
    if (!tId || !title) return;
    toggleRkReadState(tId, title);
    rkRenderHafalanBody();
  },
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
    const q = val !== undefined ? val : (($('#rk-search') && $('#rk-search').value) || '');
    const terms = String(q || '').trim().toLowerCase().split(/\s+/).filter(Boolean);
    const unreadBtn = $('#rk-unread-btn');
    const readBtn = $('#rk-read-btn');
    const unreadOnly = !!(unreadBtn && unreadBtn.classList && unreadBtn.classList.contains('on'));
    const readOnly = !!(readBtn && readBtn.classList && (readBtn.classList.contains('read-on') || readBtn.classList.contains('on')));
    let shown = 0, chShown = 0;
    const chaps = root.querySelectorAll('.rkg-chap');
    const isReadItem = d => (d.dataset && d.dataset.read === '1') || (d.getAttribute && d.getAttribute('data-read') === '1');
    const matchReadState = d => unreadOnly ? !isReadItem(d) : (readOnly ? isReadItem(d) : true);
    if (chaps && chaps.length) {
      chaps.forEach(ch => {
        const titleEl = ch.querySelector('.rkg-chap-title');
        const chapTitle = (titleEl ? (titleEl.textContent || titleEl.innerHTML || '') : '').toLowerCase();
        const chapMatch = terms.length > 0 && terms.every(w => chapTitle.includes(w));
        let any = false;
        ch.querySelectorAll('.rk-item').forEach(d => {
          const txt = ((d.textContent || d.innerHTML || '') + ' ' + chapTitle).toLowerCase();
          const matchText = !terms.length || chapMatch || terms.every(w => txt.includes(w));
          const ok = matchText && matchReadState(d);
          d.hidden = !ok;
          if (ok) { any = true; shown++; }
        });
        ch.hidden = !any;
        if (any) chShown++;
      });
    } else {
      root.querySelectorAll('.rk-item').forEach(d => {
        const txt = (d.textContent || d.innerHTML || '').toLowerCase();
        const matchText = !terms.length || terms.every(w => txt.includes(w));
        const ok = matchText && matchReadState(d);
        d.hidden = !ok;
        if (ok) shown++;
      });
    }
    const modeTag = unreadOnly ? ' (belum hafal)' : (readOnly ? ' (sudah hafal)' : '');
    const st = $('#rk-search-stat');
    if (st) st.textContent = (terms.length || unreadOnly || readOnly)
      ? `Ditemukan ${shown} bagian${chaps && chaps.length ? ` di ${chShown} topik materi` : ''}${modeTag}.`
      : `Menampilkan semua ${shown} bagian dari ${chShown} topik.`;
    let empty = $('#rk-empty');
    if (!empty && (unreadOnly || readOnly) && root.querySelector) {
      const tools = root.querySelector('.rk-tools');
      if (tools && tools.insertAdjacentElement) {
        empty = document.createElement('div');
        empty.id = 'rk-empty';
        empty.className = 'rkg-empty';
        tools.insertAdjacentElement('afterend', empty);
      }
    }
    if (empty) {
      empty.textContent = readOnly
        ? 'Belum ada bagian yang ditandai hafal di tampilan ini.'
        : (unreadOnly && !terms.length ? 'Semua bagian di materi ini sudah ditandai hafal!' : 'Tidak ada materi atau sub-bab yang cocok dengan kata kunci tersebut.');
      empty.hidden = shown > 0;
    }
  },
  rangkumanToggleUnread(btn) {
    if (!btn) btn = $('#rk-unread-btn');
    if (!btn) return;
    const on = !btn.classList.contains('on');
    btn.classList.toggle('on', on);
    if (btn.setAttribute) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.textContent = on ? 'Tampilkan semua' : 'Belum hafal saja';
    const readBtn = $('#rk-read-btn');
    if (on && readBtn && readBtn.classList) {
      readBtn.classList.remove('read-on', 'on');
      if (readBtn.setAttribute) readBtn.setAttribute('aria-pressed', 'false');
    }
    this.rangkumanFilter();
  },
  rangkumanToggleReadOnly(btn) {
    if (!btn) btn = $('#rk-read-btn');
    if (!btn) return;
    const on = !(btn.classList.contains('read-on') || btn.classList.contains('on'));
    btn.classList.toggle('read-on', on);
    if (btn.setAttribute) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    const unreadBtn = $('#rk-unread-btn');
    if (on && unreadBtn && unreadBtn.classList) {
      unreadBtn.classList.remove('on');
      if (unreadBtn.setAttribute) unreadBtn.setAttribute('aria-pressed', 'false');
      unreadBtn.textContent = 'Belum hafal saja';
    }
    this.rangkumanFilter();
  },
  rangkumanSyncCounters(root) {
    if (!root || !root.querySelectorAll) return;
    const items = Array.from(root.querySelectorAll('.rk-item'));
    const done = items.filter(d => (d.dataset && d.dataset.read === '1') || (d.getAttribute && d.getAttribute('data-read') === '1')).length;
    const counter = $('#rk-read-counter');
    if (counter) counter.textContent = `${done}/${items.length}`;
    const pillN = $('#rk-read-pill-n');
    if (pillN) pillN.textContent = String(done);
    const tabN = $('#rk-hafalan-tab-n');
    if (tabN) tabN.textContent = String(rkSavedSummary().saved.length);
  },
  rangkumanSyncChapHead(tId) {
    const ch = document.getElementById('rk-chap-' + tId);
    if (!ch) return;
    const items = Array.from(ch.querySelectorAll('.rk-item'));
    const total = items.length;
    const done = items.filter(d => (d.dataset && d.dataset.read === '1') || (d.getAttribute && d.getAttribute('data-read') === '1')).length;
    const statEl = ch.querySelector ? ch.querySelector('.rkg-chap-readstat') : null;
    if (statEl) statEl.textContent = `✓ ${done}/${total} hafal`;
    const btnEl = ch.querySelector ? ch.querySelector('.rkg-chap-read') : null;
    if (btnEl) {
      const all = total > 0 && done === total;
      btnEl.classList.toggle('on', all);
      btnEl.textContent = all ? '✓ Bab sudah hafal' : '✓ Tandai bab ini hafal';
    }
  },
  rangkumanToggleChapRead(tId) {
    const t = MATERI.find(x => x.id === tId); if (!t) return;
    const steps = lessonSteps(t);
    const allRead = steps.length > 0 && steps.every(st => isRkRead(t.id, st.title));
    const target = !allRead;
    steps.forEach(st => setRkReadState(t.id, st.title, target));
    const root = $('#rangkuman');
    const ch = document.getElementById('rk-chap-' + tId);
    if (ch && ch.querySelectorAll) {
      ch.querySelectorAll('.rk-item').forEach(item => {
        if (item.dataset) item.dataset.read = target ? '1' : '0';
        else if (item.setAttribute) item.setAttribute('data-read', target ? '1' : '0');
        item.querySelectorAll('.rk-sum-read').forEach(b => {
          b.classList.toggle('on', target);
          if (b.setAttribute) b.setAttribute('aria-pressed', target ? 'true' : 'false');
          b.textContent = target ? '✓ Hafal' : 'Tandai hafal';
        });
        item.querySelectorAll('.rk-read-btn').forEach(b => {
          b.classList.toggle('on', target);
          if (b.setAttribute) b.setAttribute('aria-pressed', target ? 'true' : 'false');
          b.textContent = target ? '✓ Sudah hafal / dibaca' : 'Tandai sudah hafal';
        });
      });
    }
    this.rangkumanSyncChapHead(tId);
    this.rangkumanSyncCounters(root);
    const unreadBtn = $('#rk-unread-btn'), readBtn = $('#rk-read-btn');
    if ((unreadBtn && unreadBtn.classList && unreadBtn.classList.contains('on')) || (readBtn && readBtn.classList && readBtn.classList.contains('read-on'))) {
      this.rangkumanFilter();
    }
  },
  rangkumanToggleRead(tIdOrEl, title, btn) {
    let tId = tIdOrEl, stTitle = title, item = null;
    if (tIdOrEl && typeof tIdOrEl === 'object') {
      item = tIdOrEl.closest ? tIdOrEl.closest('.rk-item') : null;
      tId = item && item.dataset ? item.dataset.rkId : (tIdOrEl.dataset && tIdOrEl.dataset.rkId);
      stTitle = item && item.dataset ? item.dataset.rkTitle : (tIdOrEl.dataset && tIdOrEl.dataset.rkTitle);
      btn = tIdOrEl;
    }
    if (!tId || !stTitle) return false;
    const on = toggleRkReadState(tId, stTitle);
    const root = $('#rangkuman');
    if (!item && root && root.querySelectorAll) {
      item = Array.from(root.querySelectorAll('.rk-item')).find(d => d.dataset && d.dataset.rkId === tId && d.dataset.rkTitle === stTitle) || null;
    }
    if (item) {
      if (item.dataset) item.dataset.read = on ? '1' : '0';
      else if (item.setAttribute) item.setAttribute('data-read', on ? '1' : '0');
      item.querySelectorAll('.rk-sum-read').forEach(b => {
        b.classList.toggle('on', on);
        if (b.setAttribute) b.setAttribute('aria-pressed', on ? 'true' : 'false');
        b.textContent = on ? '✓ Hafal' : 'Tandai hafal';
      });
      item.querySelectorAll('.rk-read-btn').forEach(b => {
        b.classList.toggle('on', on);
        if (b.setAttribute) b.setAttribute('aria-pressed', on ? 'true' : 'false');
        b.textContent = on ? '✓ Sudah hafal / dibaca' : 'Tandai sudah hafal';
      });
    } else if (btn && btn.classList) {
      btn.classList.toggle('on', on);
      btn.textContent = on ? '✓ Sudah hafal / dibaca' : 'Tandai sudah hafal';
    }
    this.rangkumanSyncChapHead(tId);
    this.rangkumanSyncCounters(root);
    const unreadBtn = $('#rk-unread-btn'), readBtn = $('#rk-read-btn');
    if ((unreadBtn && unreadBtn.classList && unreadBtn.classList.contains('on')) || (readBtn && readBtn.classList && readBtn.classList.contains('read-on'))) {
      this.rangkumanFilter();
    }
    return on;
  },
  rangkumanPrint() {
    document.querySelectorAll('#rangkuman details.rk-item').forEach(d => { if (!d.hidden) d.open = true; });
    try { window.print(); } catch (e) { toast('Gunakan Ctrl+P / menu Cetak browser untuk simpan ke PDF.'); }
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
const PLAN_MIN = 5;
const PLAN_INIT_MAX = 30;
const PLAN_MAX = 60;
const PLAN_DIAG_N = 45;      // Diagnostik SKD awal (15 TWK + 15 TIU + 15 TKP)
const PLAN_RETEST_N = 60;    // Evaluasi ulang tengah SKD (20 TWK + 20 TIU + 20 TKP)
const PLAN_TO_N = 110;       // Final Try Out SKD lengkap
const PLAN_DRILL_N = 15;     // Soal latihan terarah kelemahan harian
const PLAN_XS = [0, 40, 66, 40, 0, -40, -66, -40];
let planCfg = planSanitize(store.get(PLAN_KEY, null));
let planQ = store.get(PLANQ_KEY, null);
let planDraft = null;

function planSanitize(c) {
  if (!c || !['SKD', 'SKB', 'GABUNG'].includes(c.test)) return null;
  const rawD = Math.round(Number(c.days));
  if (!(rawD >= 1) && c.test !== 'GABUNG') return null;
  const days = rawD >= PLAN_MIN ? Math.min(rawD, PLAN_MAX) : (c.test === 'GABUNG' ? 7 : Math.max(PLAN_MIN, rawD));
  const baseDays = Math.max(PLAN_MIN, Math.min(Math.round(Number(c.baseDays)) || days, days));
  return {
    test: c.test,
    cat: c.test === 'SKD' ? '' : (typeof c.cat === 'string' ? c.cat : 'PRAKOM'),
    days,
    baseDays,
    at: c.at || Date.now(),
    updated: c.updated || c.at || Date.now(),
    phases: c.phases && typeof c.phases === 'object' ? c.phases : {},
    extensions: Array.isArray(c.extensions) ? c.extensions : [],
    reviewed: c.reviewed && typeof c.reviewed === 'object' ? c.reviewed : {}
  };
}
const planDlg = id => {
  let d = document.getElementById(id);
  if (!d) { d = document.createElement('dialog'); d.id = id; d.className = 'modal modal-bottom sm:modal-middle'; document.body.appendChild(d); }
  return d;
};
const stepCount = t => (t.sections || []).length + ((t.tips || []).length ? 1 : 0);
const planSkbCats = () => MATERI.reduce((a, t) => { if (t.group === 'SKB' && t.skbCategory && !a.includes(t.skbCategory)) a.push(t.skbCategory); return a; }, []);
const planCatName = c => skbMeta('SKB_' + c).name;
const planFieldOptions = test => test === 'GABUNG' ? targetSkbKeys().map(key => key.slice(4)) : planSkbCats();
function planPoolTopics(cfg) {
  if (!cfg) return [];
  if (cfg.test === 'SKB') return MATERI.filter(t => t.group === 'SKB' && t.skbCategory === cfg.cat && stepCount(t) > 0);
  const skd = MATERI.filter(t => ['TWK', 'TIU', 'TKP'].includes(t.group) && stepCount(t) > 0);
  if (cfg.test === 'GABUNG' && cfg.cat) {
    return skd.concat(MATERI.filter(t => t.group === 'SKB' && t.skbCategory === cfg.cat && stepCount(t) > 0));
  }
  return skd;
}
function planLists(cfg) {
  const topics = planPoolTopics(cfg);
  return topics.length ? [{ g: cfg.test, topics }] : [];
}
const planMinDays = () => PLAN_MIN;
const planMaxDays = cfg => cfg?.extensions?.length ? PLAN_MAX : PLAN_INIT_MAX;

/* Jadwal checkpoint adaptif: Hari 1 = Diagnostik, tengah = Test Ulang berkala, Hari akhir = Final */
function planComputeCheckpoints(cfg) {
  const B = Math.max(PLAN_MIN, Math.min(cfg.baseDays || cfg.days || 7, PLAN_MAX));
  const mids = [];
  if (B <= 5) mids.push(3);
  else if (B <= 8) mids.push(Math.ceil(B / 2));     // 7 hari -> Hari 4
  else if (B <= 10) mids.push(4, 7);                // 10 hari -> Hari 4 & 7
  else if (B <= 12) mids.push(5, 9);
  else {
    for (let d = 5; d <= B - 3; d += 4) mids.push(d);
  }
  const cps = [1, ...mids.filter(d => d > 1 && d < B), B];
  let cur = B;
  (cfg.extensions || []).forEach(ext => {
    const add = Math.max(1, Math.round(Number(ext.added) || 0));
    if (add >= 6 && cur + Math.ceil(add / 2) < cur + add) cps.push(cur + Math.ceil(add / 2));
    cur += add;
    if (cur <= PLAN_MAX) cps.push(cur);
  });
  return [...new Set(cps)].filter(d => d >= 1 && d <= cfg.days).sort((a, b) => a - b);
}

const combinedKey = (cfg, day, scope) => `PLAN-${cfg.at}-GABUNG-${day}-${scope === 'SKD' ? 'SKD' : cfg.cat}`;
const planChkKey = (cfg, dayNo) => `PLAN-${cfg.at}-CHK-${dayNo}`;
const planDrillKey = (cfg, dayNo) => cfg.test === 'GABUNG' ? `PLAN-${cfg.at}-GABUNG-${dayNo}-DRILL` : `PLAN-${cfg.at}-DR-${dayNo}`;
function planHasSkbBank(cfg) { return cfg.cat && targetSkbKeys().includes('SKB_' + cfg.cat); }

function planCheckpointDone(cfg, dayNo) {
  if (!cfg) return false;
  if (cfg.test === 'GABUNG') {
    const hasSkd = !!results[combinedKey(cfg, dayNo, 'SKD')];
    const hasSkb = !planHasSkbBank(cfg) || !!results[combinedKey(cfg, dayNo, 'SKB')];
    return hasSkd && hasSkb;
  }
  return !!results[planChkKey(cfg, dayNo)];
}
function planPhaseReady(cfg, cpDay) {
  if (!cfg) return false;
  if (cfg.phases && cfg.phases[cpDay]) return true;
  if (cfg.test === 'GABUNG') return !!results[combinedKey(cfg, cpDay, 'SKD')] || (planHasSkbBank(cfg) && !!results[combinedKey(cfg, cpDay, 'SKB')]);
  return !!results[planChkKey(cfg, cpDay)];
}

function planSelectDayTopics(cfg, day) {
  const pool = planPoolTopics(cfg);
  const cp = day.phaseCheckpoint;
  if (!planPhaseReady(cfg, cp)) {
    return { ready: false, topics: [], weakSubs: [], weakGroups: [], summary: '', hasWeak: false };
  }
  const snap = (cfg.phases && cfg.phases[cp]) || {};
  const weakIds = Array.isArray(snap.weakIds) ? snap.weakIds : [];
  const weakGroups = Array.isArray(snap.weakGroups) ? snap.weakGroups : [];
  const ordered = [];
  const push = t => { if (t && !ordered.includes(t)) ordered.push(t); };
  weakIds.forEach(id => push(pool.find(t => t.id === id)));
  const globalWeak = weakMateriMap();
  pool.filter(t => globalWeak.has(t.id)).forEach(push);
  pool.filter(t => weakGroups.includes(t.group)).forEach(push);
  pool.filter(t => lessonProgress(t).pct < 100).forEach(push);
  pool.forEach(push);
  if (!ordered.length) return { ready: true, topics: [], weakSubs: [], weakGroups, summary: snap.summary || '', hasWeak: false };
  const perDay = Math.min(ordered.length, cfg.test === 'GABUNG' ? 3 : 2);
  const offset = day.dayOffset * perDay;
  const picked = [];
  for (let k = 0; k < perDay; k++) {
    const t = ordered[(offset + k) % ordered.length];
    if (t && !picked.includes(t)) picked.push(t);
  }
  return {
    ready: true,
    topics: picked,
    weakSubs: Array.isArray(snap.weakSubs) ? snap.weakSubs : [],
    weakGroups,
    summary: snap.summary || '',
    hasWeak: weakIds.length > 0 || picked.some(t => globalWeak.has(t.id))
  };
}

function planBuild(cfg) {
  if (!cfg) return [];
  const total = Math.max(PLAN_MIN, Math.min(cfg.days || 7, PLAN_MAX));
  const cps = planComputeCheckpoints(cfg);
  const cpSet = new Set(cps);
  const days = [];
  for (let d = 1; d <= total; d++) {
    if (cpSet.has(d)) {
      const idx = cps.indexOf(d);
      const kind = d === 1 ? 'diagnostic' : d === total ? 'final' : 'retest';
      const prevCp = idx > 0 ? cps[idx - 1] : null;
      const nextCp = idx + 1 < cps.length ? cps[idx + 1] : null;
      days.push({
        no: d,
        kind,
        g: cfg.test,
        packKey: planChkKey(cfg, d),
        phaseFrom: prevCp ? prevCp + 1 : 1,
        phaseTo: prevCp ? d - 1 : 1,
        nextPhaseEnd: nextCp ? nextCp - 1 : total,
        label: kind === 'diagnostic' ? 'Tes Kelemahan Awal' : kind === 'final' ? 'Try Out Final' : 'Try Out Evaluasi Ulang',
        topics: planPoolTopics(cfg),
        segs: []
      });
    } else {
      let prevCp = 1, nextCp = total;
      for (let i = 0; i < cps.length; i++) {
        if (cps[i] < d) prevCp = cps[i];
        if (cps[i] > d) { nextCp = cps[i]; break; }
      }
      const dayOffset = d - prevCp - 1;
      const phaseLen = Math.max(1, nextCp - prevCp - 1);
      const dayObj = {
        no: d,
        kind: 'learn',
        g: cfg.test,
        phaseCheckpoint: prevCp,
        phaseStart: prevCp + 1,
        phaseEnd: nextCp - 1,
        dayOffset,
        phaseLen,
        drillKey: planDrillKey(cfg, d),
        label: prevCp === 1 ? 'Materi & Soal Kelemahan' : 'Perbaikan Sisa Kelemahan'
      };
      const info = planSelectDayTopics(cfg, dayObj);
      dayObj.ready = info.ready;
      dayObj.topics = info.topics;
      dayObj.weakSubs = info.weakSubs;
      dayObj.weakGroups = info.weakGroups;
      dayObj.phaseSummary = info.summary;
      dayObj.hasWeak = info.hasWeak;
      days.push(dayObj);
    }
  }
  return days;
}

const planTopicReviewed = (cfg, dayNo, tId) => !!(cfg && cfg.reviewed && cfg.reviewed[`${dayNo}:${tId}`]);
function planDayProg(d) {
  const cfg = planCfg;
  if (!cfg) return { n: 1, done: 0, full: false, pct: 0, rec: null };
  if (d.kind !== 'learn') {
    if (cfg.test === 'GABUNG') {
      const skdRec = results[combinedKey(cfg, d.no, 'SKD')] || null;
      const hasSkb = planHasSkbBank(cfg);
      const skbRec = hasSkb ? (results[combinedKey(cfg, d.no, 'SKB')] || null) : null;
      const done = Number(!!skdRec) + (hasSkb ? Number(!!skbRec) : 0);
      const total = 1 + (hasSkb ? 1 : 0);
      return { n: total, done, full: done === total, pct: Math.round((done / total) * 100), rec: skdRec, skbRec };
    }
    const r = results[d.packKey] || null;
    return { n: 1, done: r ? 1 : 0, full: !!r, pct: r ? 100 : 0, rec: r };
  }
  if (!d.ready) return { n: 1, done: 0, full: false, pct: 0, locked: true, rec: null };
  const drillRec = results[d.drillKey] || null;
  const revDone = (d.topics || []).filter(t => planTopicReviewed(cfg, d.no, t.id)).length;
  const tot = Math.max(1, (d.topics || []).length) + 1;
  const done = revDone + (drillRec ? 1 : 0);
  const full = revDone >= (d.topics || []).length && !!drillRec;
  return { n: tot, done, full, pct: full ? 100 : Math.min(99, Math.round((done / tot) * 100)), rec: drillRec, revDone };
}
const planNextStep = t => { const d = lessonDone(t), n = stepCount(t); let i = 0; while (i < n && d[i]) i++; return i < n ? i : 0; };

/* ---------- Pengelola Soal Adaptif Planning ---------- */
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

function planPickStratified(pool, count, seed, preferSubs = [], blockedKeys = new Set()) {
  const valid = pool.filter(q => questions.valid(q) && (q.q || '').length <= 650 && !blockedKeys.has(questions.key(q)));
  const prefSet = new Set(preferSubs.map(s => String(s).toLowerCase()));
  const bySub = new Map();
  valid.forEach(q => {
    const k = q.sub || 'Umum';
    if (!bySub.has(k)) bySub.set(k, []);
    bySub.get(k).push(q);
  });
  const subKeys = shuffle([...bySub.keys()], seed + 'sub').sort((a, b) => {
    const pa = prefSet.has(a.toLowerCase()) ? 0 : 1;
    const pb = prefSet.has(b.toLowerCase()) ? 0 : 1;
    return pa - pb;
  });
  subKeys.forEach(k => {
    bySub.set(k, bySub.get(k).sort((a, b) => (seenBefore(a) ? 1 : 0) - (seenBefore(b) ? 1 : 0) || hashStr(a.id + seed) - hashStr(b.id + seed)));
  });
  const picked = [], used = new Set();
  let guard = 0;
  while (picked.length < count && guard++ < count * 5) {
    let progressed = false;
    for (const k of subKeys) {
      if (picked.length >= count) break;
      const arr = bySub.get(k);
      const q = arr.find(x => !used.has(questions.key(x)));
      if (q) { picked.push(q); used.add(questions.key(q)); progressed = true; }
    }
    if (!progressed) break;
  }
  return shuffle(picked, seed + 'fin');
}

function planBuildSkdMix(nTwk, nTiu, nTkp, seed, preferSubs = [], blockedKeys = new Set()) {
  const p1 = planPickStratified(BANK.SKD_TWK || [], nTwk, seed + 'twk', preferSubs, blockedKeys);
  const p2 = planPickStratified(BANK.SKD_TIU || [], nTiu, seed + 'tiu', preferSubs, blockedKeys);
  const p3 = planPickStratified(BANK.SKD_TKP || [], nTkp, seed + 'tkp', preferSubs, blockedKeys);
  return [...p1, ...p2, ...p3];
}

function finalSetName(field) { return 'FINAL-' + field; }
function reservedFinalKeys() {
  if (planCfg?.test !== 'GABUNG' || planQ?.at !== planCfg.at) return [];
  const field = 'SKB_' + planCfg.cat;
  if (results[combinedKey(planCfg, planCfg.days || 7, 'SKB')]) return [];
  const saved = planQ.sets?.[finalSetName(field)] || [];
  const idx = planQIndex();
  return saved.map(id => idx.get(questions.resolve(id))).filter(Boolean).map(questions.key);
}
function finalSkbCount(len) { return len >= 100 ? 50 : Math.min(30, Math.max(15, Math.floor(len / 2))); }
function reserveFinalSkb(cfg) {
  const field = 'SKB_' + cfg.cat;
  const pool = BANK[field] || [];
  const slot = finalSetName(field);
  if (planQ?.at !== cfg.at || !planQ.sets) planQ = { at: cfg.at, sets: {} };
  if (!planQ.sets[slot]) {
    const count = finalSkbCount(pool.length);
    const fresh = selectQuestions(shuffle(pool, slot + cfg.at).filter(q => !seenBefore(q)), count, new Set(), true);
    planQ.sets[slot] = fresh.map(q => q.id);
    store.set(PLANQ_KEY, planQ);
  }
  const idx = planQIndex();
  return planQ.sets[slot].map(id => idx.get(questions.resolve(id))).filter(q => q && bucketOfId[q.id] === field);
}

function planEnsureSlotQs(cfg, slot, builder) {
  if (!planQ || planQ.at !== cfg.at || !planQ.sets) planQ = { at: cfg.at, sets: {} };
  const idx = planQIndex();
  let ids = planQ.sets[slot];
  if (!Array.isArray(ids) || !ids.length) {
    const qs = builder();
    if (qs.length) {
      ids = qs.map(q => q.id);
      planQ.sets[slot] = ids;
      store.set(PLANQ_KEY, planQ);
    }
  }
  const out = (ids || []).map(id => idx.get(questions.resolve(id))).filter(Boolean);
  return out.length ? out : builder();
}

function planPackByKey(key) {
  const cfg = planCfg;
  if (!cfg || !key || key.indexOf('PLAN-' + cfg.at + '-') !== 0) return null;
  const days = planBuild(cfg);

  // 1. Cek paket gabungan GABUNG (checkpoint SKD/SKB atau drill harian)
  if (cfg.test === 'GABUNG') {
    const mDrill = new RegExp(`^PLAN-${cfg.at}-GABUNG-(\\d+)-DRILL$`).exec(key);
    if (mDrill) {
      const day = days[Number(mDrill[1]) - 1];
      if (!day || day.kind !== 'learn') return null;
      const qs = planEnsureSlotQs(cfg, 'DR-' + day.no, () => {
        const pool = day.topics.flatMap(materiPool);
        return planPickStratified(pool, PLAN_DRILL_N, cfg.at + 'dr' + day.no, day.weakSubs || []);
      });
      if (!qs.length) return null;
      return {
        key, group: 'PLAN', kind: 'CAT', mode: 'PLAN', plan: true, planDay: day.no, planPhase: 'learn', adaptive: true,
        skbBucket: planHasSkbBank(cfg) ? 'SKB_' + cfg.cat : null,
        title: `Latihan Kelemahan · Hari ${day.no}`,
        compose: `${qs.length} soal terarah dari topik kelemahan Hari ${day.no}`,
        questions: qs, minutes: Math.max(15, qs.length)
      };
    }
    const mChk = /-GABUNG-(\d+)-(SKD|[A-Z0-9_]+)$/.exec(key);
    if (!mChk) return null;
    const dayNo = Number(mChk[1]), isSkb = mChk[2] !== 'SKD', field = 'SKB_' + cfg.cat;
    if (isSkb && (mChk[2] !== cfg.cat || !planHasSkbBank(cfg))) return null;
    const day = days[dayNo - 1] || { no: dayNo, kind: dayNo === 1 ? 'diagnostic' : (dayNo === cfg.days ? 'final' : 'retest') };
    const phase = day.kind === 'learn' ? 'retest' : day.kind;
    const prevSnap = cfg.phases?.[day.phaseFrom ? day.phaseFrom - 1 : 1];
    const preferSubs = prevSnap?.weakSubs || [];
    if (!isSkb) {
      if (phase === 'final') {
        const qs = planEnsureSlotQs(cfg, `G-SKD-${dayNo}`, () => planBuildSkdMix(FULL_MIX.TWK, FULL_MIX.TIU, FULL_MIX.TKP, cfg.at + 'fskd' + dayNo, preferSubs));
        return { key, group: 'SKD_FULL', kind: 'FULL', mode: 'SKD', plan: true, planDay: dayNo, planPhase: 'final', planRole: 'SKD', forceTimed: true, title: `Final Try Out SKD · Hari ${dayNo}`, compose: `${qs.length} soal (30 TWK · 35 TIU · 45 TKP)`, questions: qs, minutes: 100 };
      }
      const mix = phase === 'diagnostic' ? [15, 15, 15] : [20, 20, 20];
      const qs = planEnsureSlotQs(cfg, `G-SKD-${dayNo}`, () => planBuildSkdMix(mix[0], mix[1], mix[2], cfg.at + 'gskd' + dayNo, preferSubs));
      return {
        key, group: 'SKD_FULL', kind: 'FULL', mode: 'SKD', plan: true, planDay: dayNo, planPhase: phase, planRole: 'SKD',
        title: phase === 'diagnostic' ? 'Tes Kelemahan Awal SKD · Hari 1' : `Evaluasi Ulang SKD · Hari ${dayNo}`,
        compose: `${qs.length} soal (${mix[0]} TWK · ${mix[1]} TIU · ${mix[2]} TKP) untuk memetakan kelemahan`,
        questions: qs, minutes: qs.length
      };
    }
    const pool = BANK[field] || [], short = skbMeta(field).short;
    if (phase === 'final') {
      const reserved = reserveFinalSkb(cfg);
      const count = finalSkbCount(pool.length);
      const qs = reserved.length >= count ? reserved.slice(0, count) : reserved.concat(planPickStratified(pool, count - reserved.length, cfg.at + 'fskb' + dayNo, preferSubs, new Set(reserved.map(questions.key))));
      return { key, group: field, kind: 'CAT', mode: 'SKB', skbBucket: field, plan: true, planDay: dayNo, planPhase: 'final', planRole: 'SKB', forceTimed: true, title: `Final Try Out SKB ${short} · Hari ${dayNo}`, compose: `${qs.length} soal SKB ${short}`, questions: qs, minutes: Math.max(20, qs.length) };
    }
    const targetN = phase === 'diagnostic' ? Math.min(30, pool.length) : Math.min(45, pool.length);
    const qs = planEnsureSlotQs(cfg, `G-SKB-${dayNo}`, () => planPickStratified(pool, targetN, cfg.at + 'gskb' + dayNo, preferSubs));
    return {
      key, group: field, kind: 'CAT', mode: 'SKB', skbBucket: field, plan: true, planDay: dayNo, planPhase: phase, planRole: 'SKB',
      title: phase === 'diagnostic' ? `Tes Kelemahan Awal SKB ${short} · Hari 1` : `Evaluasi Ulang SKB ${short} · Hari ${dayNo}`,
      compose: `${qs.length} soal merata seluruh materi ${short}`, questions: qs, minutes: Math.max(20, qs.length)
    };
  }

  // 2. Paket Planning SKD atau SKB murni
  const mChk = new RegExp(`^PLAN-${cfg.at}-CHK-(\\d+)$`).exec(key);
  if (mChk) {
    const dayNo = Number(mChk[1]);
    const day = days[dayNo - 1];
    if (!day) return null;
    const phase = day.kind;
    const prevSnap = day.phaseFrom ? cfg.phases?.[day.phaseFrom - 1] : null;
    const preferSubs = prevSnap?.weakSubs || [];
    if (cfg.test === 'SKD') {
      if (phase === 'final') {
        const qs = planEnsureSlotQs(cfg, `CHK-${dayNo}`, () => planBuildSkdMix(FULL_MIX.TWK, FULL_MIX.TIU, FULL_MIX.TKP, cfg.at + 'chk' + dayNo, preferSubs));
        return { key, group: 'SKD_FULL', kind: 'FULL', mode: 'SKD', plan: true, planDay: dayNo, planPhase: 'final', forceTimed: true, title: `Try Out Final SKD Lengkap · Hari ${dayNo}`, compose: `${qs.length} soal (30 TWK · 35 TIU · 45 TKP) standar CAT BKN`, questions: qs, minutes: 100 };
      }
      const mix = phase === 'diagnostic' ? [15, 15, 15] : [20, 20, 20];
      const qs = planEnsureSlotQs(cfg, `CHK-${dayNo}`, () => planBuildSkdMix(mix[0], mix[1], mix[2], cfg.at + 'chk' + dayNo, preferSubs));
      return {
        key, group: 'SKD_FULL', kind: 'FULL', mode: 'SKD', plan: true, planDay: dayNo, planPhase: phase,
        title: phase === 'diagnostic' ? 'Tes Kelemahan Awal SKD · Hari 1' : `Try Out Evaluasi Ulang SKD · Hari ${dayNo}`,
        compose: `${qs.length} soal (${mix[0]} TWK · ${mix[1]} TIU · ${mix[2]} TKP) untuk memetakan materi lemah`,
        questions: qs, minutes: qs.length
      };
    }
    const field = 'SKB_' + cfg.cat, pool = BANK[field] || [], short = skbMeta(field).short;
    const count = phase === 'diagnostic' ? Math.min(30, pool.length) : phase === 'retest' ? Math.min(45, pool.length) : Math.min(50, pool.length);
    const qs = planEnsureSlotQs(cfg, `CHK-${dayNo}`, () => planPickStratified(pool, count, cfg.at + 'chkb' + dayNo, preferSubs));
    if (!qs.length) return null;
    return {
      key, group: field, kind: 'CAT', mode: 'SKB', skbBucket: field, plan: true, planDay: dayNo, planPhase: phase,
      forceTimed: phase === 'final',
      title: phase === 'diagnostic' ? `Tes Kelemahan Awal SKB ${short} · Hari 1` : phase === 'final' ? `Try Out Final SKB ${short} · Hari ${dayNo}` : `Evaluasi Ulang SKB ${short} · Hari ${dayNo}`,
      compose: `${qs.length} soal SKB ${short}`, questions: qs, minutes: Math.max(20, qs.length)
    };
  }

  // 3. Latihan Kelemahan Harian (DR-dayNo)
  const mDr = new RegExp(`^PLAN-${cfg.at}-DR-(\\d+)$`).exec(key);
  if (mDr) {
    const day = days[Number(mDr[1]) - 1];
    if (!day || day.kind !== 'learn') return null;
    const qs = planEnsureSlotQs(cfg, 'DR-' + day.no, () => {
      const pool = (day.topics || []).flatMap(materiPool);
      const fallback = pool.length ? pool : planPoolTopics(cfg).flatMap(materiPool);
      return planPickStratified(fallback, PLAN_DRILL_N, cfg.at + 'dr' + day.no, day.weakSubs || []);
    });
    if (!qs.length) return null;
    return {
      key, group: 'PLAN', kind: 'CAT', mode: 'PLAN', plan: true, planDay: day.no, planPhase: 'learn', adaptive: true,
      skbBucket: cfg.test === 'SKB' ? 'SKB_' + cfg.cat : null,
      title: `Latihan Soal Kelemahan · Hari ${day.no}`,
      compose: `${qs.length} soal dari materi prioritas Hari ${day.no}`,
      questions: qs, minutes: Math.max(15, qs.length)
    };
  }
  return null;
}

function planOnCheckpointFinish(curExam, r, curWeakFromExam) {
  if (!planCfg || !curExam?.pack?.plan || curExam.pack.planPhase === 'learn') return;
  const dayNo = Number(curExam.pack.planDay) || 1;
  const weakGroups = new Set();
  if (curExam.pack.kind === 'FULL') {
    ['TWK', 'TIU', 'TKP'].forEach(c => {
      const item = r.sum[c];
      if (!item) return;
      const scaledPg = PASSING[c] * (item.max / (FULL_MIX[c] * 5));
      if (item.score < scaledPg || (item.score / item.max) < 0.78) weakGroups.add(c);
    });
  } else if (curExam.pack.mode === 'SKB' && r.max && (r.total / r.max) < 0.8) {
    weakGroups.add('SKB');
  }
  const weakSubs = new Set();
  curWeakFromExam.forEach(w => {
    weakGroups.add(w.t.group);
    (w.subs || []).forEach(s => weakSubs.add(s));
  });
  const weakIds = curWeakFromExam.map(w => w.t.id);
  const pct = r.max ? Math.round((r.total / r.max) * 100) : 0;
  const prev = planCfg.phases?.[dayNo];
  const mergedIds = [...new Set([...(prev?.weakIds || []), ...weakIds])];
  const mergedSubs = [...new Set([...(prev?.weakSubs || []), ...weakSubs])].slice(0, 8);
  const mergedGroups = [...new Set([...(prev?.weakGroups || []), ...weakGroups])];
  const summary = curWeakFromExam.length
    ? `Kelemahan terdeteksi: ${curWeakFromExam.slice(0, 3).map(w => `${w.t.group} (${w.t.title})`).join(', ')}`
    : `Skor ${pct}% — fokus pertajam materi prioritas.`;
  planCfg.phases = planCfg.phases || {};
  planCfg.phases[dayNo] = { at: Date.now(), pct, weakGroups: mergedGroups, weakIds: mergedIds, weakSubs: mergedSubs, summary };
  store.set(PLAN_KEY, planCfg);

  // Hapus cache soal drill fase setelah checkpoint agar digenerate ulang mengikuti kelemahan terbaru
  if (planQ && planQ.at === planCfg.at && planQ.sets) {
    const days = planBuild(planCfg);
    days.filter(d => d.kind === 'learn' && d.phaseCheckpoint === dayNo).forEach(d => {
      delete planQ.sets['DR-' + d.no];
    });
    store.set(PLANQ_KEY, planQ);
  }
}

/* ---------- Halaman Planning Adaptif ---------- */
function renderPlanning() {
  const cfg = planCfg;
  const days = cfg ? planBuild(cfg) : [];
  const progs = days.map(planDayProg);
  const nowIdx = progs.findIndex(p => !p.full), allDone = days.length > 0 && nowIdx === -1;
  const pctAll = allDone ? 100 : (progs.length ? Math.min(99, Math.floor(progs.reduce((a, p) => a + p.pct, 0) / progs.length)) : 0);
  const nDaysDone = progs.filter(p => p.full).length;

  const actions = `
    <div class="pl-actions">
      <button type="button" class="lx-btn lx-blue" onclick="App.planSetup()">${icon('sliders', 'h-4 w-4')} Atur planning</button>
      <button type="button" class="lx-btn lx-red" ${cfg ? '' : 'disabled'} onclick="App.planReset()">${icon('refresh', 'h-4 w-4')} Reset planning</button>
    </div>`;

  let body = '';
  if (!cfg || !days.length) {
    const endedBanner = planEnded
      ? `<div class="km-weak-home mb-4">
           <div class="text-xs font-extrabold uppercase tracking-wide text-amber-900">✓ Planning ${planEnded.days || ''} Hari Telah Diselesaikan</div>
           <p class="mt-1 text-xs text-slate-700">Materi yang masih lemah sudah ditandai kuning lembut di halaman Materi dan Beranda untuk dipelajari sebelum tes.</p>
           ${weakMateriList('ALL').length ? `<div class="mt-2.5 flex flex-wrap gap-2"><button type="button" class="btn btn-warning btn-sm font-extrabold" onclick="App.openKelemahanMateri()">📖 Lihat Kelemahan (${weakMateriList('ALL').length})</button><button type="button" class="btn btn-outline btn-sm" onclick="App.goWeakMateri()">Buka Kartu Kuning</button></div>` : ''}
         </div>`
      : '';
    body = `
    ${endedBanner}
    <div class="pl-empty">
      <span class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sky-100 text-sky-700">${icon('calendar', 'h-7 w-7')}</span>
      <h2 class="mt-3 text-base font-extrabold text-slate-900">Belum ada planning adaptif</h2>
      <p class="mx-auto mt-1 text-xs leading-relaxed text-slate-600" style="max-width:22rem">Pilih durasi (5–${PLAN_INIT_MAX} hari). <b>Hari 1 selalu dimulai Tes Pemetaan Kelemahan</b>, lalu materi &amp; soal disusun otomatis mengikuti kelemahanmu disisipi Try Out Ulang berkala hingga Try Out Final.</p>
    </div>${actions}`;
  } else {
    const label = cfg.test === 'SKB' ? `SKB ${esc(planCatName(cfg.cat))}` : cfg.test === 'GABUNG' ? `SKD + SKB ${esc(skbMeta('SKB_' + cfg.cat).short)}` : 'SKD Lengkap';
    const cur = allDone ? days.length : nowIdx + 1;
    const cpDoneList = days.filter(d => d.kind !== 'learn' && cfg.phases?.[d.no]).sort((a, b) => b.no - a.no);
    const latestCp = cpDoneList[0] ? cfg.phases[cpDoneList[0].no] : null;
    const scopeWeak = weakMateriList(cfg.test === 'SKB' ? 'SKB_' + cfg.cat : cfg.test === 'SKD' ? 'SKD' : 'ALL');

    const weakCard = latestCp
      ? `<div class="pl-phase-card ${scopeWeak.length ? 'warn' : ''}">
           <div class="flex flex-wrap items-center justify-between gap-2">
             <div class="text-xs font-extrabold uppercase tracking-wide">${scopeWeak.length ? `⚠ Peta Kelemahan Terdeteksi (Tes Hari ${cpDoneList[0].no})` : `✓ Hasil Tes Hari ${cpDoneList[0].no}`}</div>
             ${scopeWeak.length ? `<button type="button" class="btn btn-warning btn-xs font-extrabold" onclick="App.openKelemahanMateri()">📖 Lihat Kelemahan (${scopeWeak.length})</button>` : ''}
           </div>
           <p class="mt-1 text-xs leading-relaxed">${esc(latestCp.summary || '')}</p>
           ${latestCp.weakSubs?.length ? `<div class="mt-1.5 flex flex-wrap gap-1">${latestCp.weakSubs.slice(0, 4).map(s => `<span class="materi-weak-badge">${esc(s)}</span>`).join('')}</div>` : ''}
         </div>`
      : `<div class="pl-phase-card">
           <div class="text-xs font-extrabold uppercase tracking-wide text-sky-900">📌 Langkah 1: Tes Pemetaan Kelemahan</div>
           <p class="mt-1 text-xs leading-relaxed text-slate-600">Mulai dari <b>Hari 1</b> terlebih dahulu agar sistem mengetahui persis materi SKD/SKB mana yang masih lemah dan otomatis menyusun jadwal Hari 2–${days.length - 1}.</p>
         </div>`;

    const finalDay = days[days.length - 1];
    const finalProg = progs[days.length - 1];
    const finalDone = finalDay && finalDay.kind === 'final' && finalProg?.full;
    const finalWeak = scopeWeak.slice(0, 6);
    const finalBox = finalDone
      ? `<div id="plan-final-box" class="pl-final-box ${finalWeak.length ? '' : 'ok'}">
           <div class="text-sm font-extrabold">${finalWeak.length ? `⚠ Try Out Final Selesai — Masih Ada ${scopeWeak.length} Materi Perlu Penguatan` : '🎉 Try Out Final Selesai — Kesiapan Sudah Kuat!'}</div>
           <p class="mt-1 text-xs leading-relaxed opacity-85">${finalWeak.length
             ? 'Jika masih ada waktu menjelang tes, tambah durasi planning agar sistem menyusun siklus perbaikan baru. Jika sudah mendekati tenggat waktu, akhiri planning — semua kelemahanmu sudah ditandai kuning di Materi & Beranda.'
             : 'Anda bisa menambah hari penguatan akhir atau menyelesaikan planning sekarang.'}</p>
           ${finalWeak.length ? `<div class="mt-2 flex flex-wrap gap-1.5">${finalWeak.map(w => `<button type="button" class="materi-weak-badge cursor-pointer" onclick="App.rangkuman('${esc(w.id)}')">⚠ ${esc(w.title)}${w.pct != null ? ` (${w.pct}%)` : ''}</button>`).join('')}</div>` : ''}
           <div class="mt-3 flex flex-wrap gap-2">
             ${cfg.days + 3 <= PLAN_MAX ? '<button type="button" class="btn btn-primary btn-sm" onclick="App.planExtend(3)">➕ Tambah +3 Hari</button>' : ''}
             ${cfg.days + 5 <= PLAN_MAX ? '<button type="button" class="btn btn-primary btn-sm" onclick="App.planExtend(5)">➕ Tambah +5 Hari</button>' : ''}
             ${cfg.days + 7 <= PLAN_MAX ? '<button type="button" class="btn btn-outline btn-sm" onclick="App.planExtend(7)">+7 Hari</button>' : ''}
             <button type="button" class="btn btn-warning btn-sm font-extrabold" onclick="App.planFinishWeakness()">✓ Sudahi Planning &amp; Simpan Kelemahan</button>
           </div>
         </div>`
      : '';

    const nodes = days.map((d, i) => {
      const p = progs[i], isNow = i === nowIdx;
      const roleCls = d.kind === 'diagnostic' ? 'diag' : d.kind === 'retest' ? 'retest' : d.kind === 'final' ? 'to' : '';
      const st = (p.full ? 'done' : isNow ? 'now' : 'todo' + (p.pct ? ' part' : '')) + (roleCls ? ' ' + roleCls : '');
      const sub = d.kind === 'diagnostic' ? 'Tes kelemahan awal'
        : d.kind === 'final' ? 'Try Out Final + evaluasi akhir'
        : d.kind === 'retest' ? 'Test Ulang · evaluasi progres'
        : d.ready ? `${d.topics.length} materi lemah + soal` : `Menunggu Tes Hari ${d.phaseCheckpoint}`;
      const inner = p.full ? icon('tick', 'h-8 w-8') : d.kind !== 'learn' ? icon('clipboard', 'h-7 w-7') : `<span class="pl-pct">${p.pct}<small>%</small></span>`;
      return `
      <div class="lx-step" style="--x:${PLAN_XS[i % PLAN_XS.length]}px">
        <button type="button" class="lx-node pl-node ${st}" style="--pct:${p.pct}" onclick="App.planDay(${d.no})" aria-label="Hari ${d.no}: ${esc(d.label)}">
          ${isNow ? `<span class="lx-bubble">${d.kind === 'diagnostic' ? 'TES AWAL' : p.pct ? 'LANJUT' : 'MULAI'}</span>` : ''}${inner}
        </button>
        <div class="lx-label ${p.full || isNow || p.pct ? '' : 'dim'}">Hari ${d.no} · ${d.kind === 'diagnostic' ? 'Diagnostik' : d.kind === 'retest' ? 'Test Ulang' : d.kind === 'final' ? 'Final' : 'Belajar'}</div>
        <div class="pl-sub ${d.kind === 'final' ? 'to' : ''}">${esc(sub)}</div>
      </div>`;
    }).join('');
    const finalNode = `
      <div class="lx-step" style="--x:${PLAN_XS[days.length % PLAN_XS.length]}px">
        <div class="lx-node final ${allDone ? '' : 'lock'}" role="img" aria-label="${allDone ? 'Planning selesai' : 'Target planning'}">${icon('trophy', 'h-8 w-8')}</div>
        <div class="lx-label ${allDone ? '' : 'dim'}">${allDone ? 'Siklus selesai! 🎉' : 'Target akhir'}</div>
      </div>`;

    const cps = planComputeCheckpoints(cfg);
    body = `
    <div class="lx-hero">
      <div class="flex items-center justify-between gap-2">
        <span class="badge border-0 bg-white/20 font-bold text-white">${label}</span>
        <span class="text-xs font-bold text-white/90">Hari ${cur} dari ${days.length}</span>
      </div>
      <h2 class="mt-2 text-xl font-extrabold leading-snug">Planning ${days.length} Hari</h2>
      <p class="mt-1 text-xs leading-relaxed text-white/85">Tes Awal (Hari 1) → Materi &amp; Soal Kelemahan → Test Ulang (Hari ${cps.slice(1, -1).join(', ') || '-'}) → Final (Hari ${days.length})</p>
      <div class="mt-3 flex items-center gap-3">
        <div class="lx-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pctAll}"><div class="lx-fill" style="width:${Math.max(pctAll, 4)}%"></div></div>
        <span class="shrink-0 text-xs font-bold text-white">${pctAll}%</span>
      </div>
      <p class="mt-1.5 text-[0.7rem] font-semibold text-white/85">${nDaysDone} dari ${days.length} hari tuntas</p>
      ${allDone ? '' : `<button type="button" class="lx-btn lx-green mt-3" onclick="App.planDay(${cur})">${icon('play', 'h-5 w-5')} ${progs[nowIdx].pct ? 'Lanjutkan' : 'Mulai'} Hari ${cur}</button>`}
    </div>
    ${finalBox}
    ${weakCard}
    ${actions}
    <div class="lx-path" aria-label="Jalur planning belajar">${nodes}${finalNode}</div>`;
  }

  shell('planning', `
    ${breadcrumb([['#/', 'Beranda'], [null, 'Planning']])}
    <div class="mx-auto max-w-xl">
      ${pageHead('Planning Belajar Adaptif', 'Hari 1 tes kelemahan, materi & soal menyesuaikan hasilmu secara berkala sampai siap ujian.')}
      ${body}
    </div>
  `);
}

/* ---------- Lembar "Atur planning" ---------- */
function planPaintSetup() {
  const d = planDlg('dlg-plan'), dr = planDraft, cats = planFieldOptions(dr.test);
  const box = d.querySelector('.modal-box'), keep = box ? box.scrollTop : 0;
  const okSave = dr.test === 'SKD' || cats.includes(dr.cat);
  const minD = PLAN_MIN, maxD = PLAN_INIT_MAX;
  dr.days = Math.max(minD, Math.min(dr.days, maxD));
  const cps = planComputeCheckpoints({ days: dr.days, baseDays: dr.days, extensions: [] });
  const prevItems = [];
  for (let i = 0; i < cps.length; i++) {
    const c = cps[i];
    if (c === 1) prevItems.push(`<li><b>Hari 1:</b> Tes Pemetaan Kelemahan Awal (${esc(dr.test)})</li>`);
    else {
      const prevCp = cps[i - 1];
      if (c - prevCp > 1) prevItems.push(`<li><b>Hari ${prevCp + 1}${c - 1 > prevCp + 1 ? '–' + (c - 1) : ''}:</b> Materi &amp; soal terarah sesuai kelemahan Hari ${prevCp}</li>`);
      prevItems.push(`<li><b>Hari ${c}:</b> ${c === dr.days ? 'Try Out Final + Tambah waktu / Sudahi' : 'Test Ulang (Evaluasi progres &amp; sisa kelemahan)'}</li>`);
    }
  }
  const opt = (on, act, txt, sub) => `<button type="button" class="pl-opt ${on ? 'on' : ''}" aria-pressed="${on}" onclick="${act}">${txt}${sub ? `<span class="block text-[0.68rem] font-semibold opacity-75">${sub}</span>` : ''}</button>`;
  d.innerHTML = `
  <div class="modal-box max-w-md">
    <div class="flex items-start justify-between gap-3">
      <div><h3 class="text-xl font-extrabold text-neutral">Atur planning</h3>
      <p class="mt-0.5 text-sm text-base-content/70">Susun jadwal belajar adaptif sesuai target waktu Anda (5–30 hari).</p></div>
      <button class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-plan').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button>
    </div>

    <div class="pl-label mt-4">Tes yang dipelajari</div>
    <div class="pl-seg">${opt(dr.test === 'SKD', "App.planSetTest('SKD')", 'SKD', 'TWK · TIU · TKP')}${opt(dr.test === 'SKB', "App.planSetTest('SKB')", 'SKB', 'Satu bidang formasi')}</div>
    <div class="mt-2">${opt(dr.test === 'GABUNG', "App.planSetTest('GABUNG')", 'SKD + SKB Terpadu', '5–30 hari · tes awal, materi & evaluasi berkala')}</div>

    ${dr.test !== 'SKD' ? `
    <div class="pl-label mt-4">Bidang SKB</div>
    <div class="pl-chips">${cats.length
      ? cats.map(c => `<button type="button" class="pl-chip ${dr.cat === c ? 'on' : ''}" aria-pressed="${dr.cat === c}" onclick="App.planSetCat('${esc(c)}')">${esc(planCatName(c))}</button>`).join('')
      : '<span class="text-sm text-slate-500">Belum ada materi SKB.</span>'}</div>` : ''}

    <div class="pl-label mt-4">Total hari (${minD}–${maxD} hari)</div>
    <div class="pl-step">
      <button type="button" onclick="App.planStep(-1)" aria-label="Kurangi hari" ${dr.days <= minD ? 'disabled' : ''}>−</button>
      <input type="number" inputmode="numeric" min="${minD}" max="${maxD}" value="${dr.days}" aria-label="Jumlah hari belajar" onchange="App.planSetDays(this.value)">
      <button type="button" onclick="App.planStep(1)" aria-label="Tambah hari" ${dr.days >= maxD ? 'disabled' : ''}>+</button>
    </div>
    <div class="pl-chips mt-3 justify-center">${[5, 7, 10, 14, 21, 30].map(n => `<button type="button" class="pl-chip ${dr.days === n ? 'on' : ''}" onclick="App.planSetDays(${n})">${n} hari</button>`).join('')}</div>

    <div class="pl-prev"><div class="pl-label" style="margin-bottom:.4rem">Pola siklus ${dr.days} hari</div>
      <ul class="space-y-1.5 text-xs text-slate-700">${prevItems.join('')}</ul>
    </div>

    <div class="modal-action act-stack">
      <button class="btn btn-ghost" onclick="$('#dlg-plan').close()">Batal</button>
      <button class="btn btn-primary" ${okSave ? '' : 'disabled'} onclick="App.planSave()">${planCfg ? 'Simpan planning' : 'Buat planning'}</button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
  const nb = d.querySelector('.modal-box'); if (nb) nb.scrollTop = keep;
  if (!d.open) d.showModal();
}

/* ---------- Lembar detail satu hari ---------- */
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
  const days = planBuild(planCfg), day = days[no - 1];
  if (!day) return;
  const p = planDayProg(day);
  let rows = '', cta = '', note = '';
  if (day.kind !== 'learn') {
    const desc = day.kind === 'diagnostic'
      ? 'Tes pemetaan awal untuk menemukan kelemahan sub-topik Anda. Setelah selesai, jadwal belajar berikutnya langsung disesuaikan.'
      : day.kind === 'final'
      ? 'Try Out Final untuk menguji seluruh hasil perbaikan Anda serta menentukan opsi tambah waktu atau selesai.'
      : `Evaluasi ulang setelah belajar Hari ${day.phaseFrom}–${day.phaseTo}. Jika masih ada materi lemah, fase berikutnya fokus ke sisa kelemahan itu.`;
    note = `<p class="mt-2 text-xs leading-relaxed text-slate-600">${desc}</p>`;
    if (planCfg.test === 'GABUNG') {
      const skdK = combinedKey(planCfg, day.no, 'SKD'), skbK = combinedKey(planCfg, day.no, 'SKB');
      const hasSkb = planHasSkbBank(planCfg), short = hasSkb ? skbMeta('SKB_' + planCfg.cat).short : '';
      rows = planPackRow(skdK, day.kind === 'diagnostic' ? 'Tes Diagnostik SKD' : day.kind === 'final' ? 'Final Try Out SKD Lengkap' : 'Test Ulang SKD',
        day.kind === 'final' ? '110 soal · 100 menit' : `${day.kind === 'diagnostic' ? 45 : 60} soal proporsional TWK · TIU · TKP`, p.rec, 'SKD')
        + (hasSkb ? `<div class="mt-2"></div>` + planPackRow(skbK, day.kind === 'diagnostic' ? `Tes Diagnostik SKB ${short}` : day.kind === 'final' ? `Final SKB ${short}` : `Test Ulang SKB ${short}`,
          'Mengukur penguasaan tiap sub-bab bidang formasi', p.skbRec, 'SKB') : '');
      cta = `<button class="btn btn-primary" onclick="App.planPack('${esc(!p.rec ? skdK : (hasSkb && !p.skbRec ? skbK : skdK))}')">${p.full ? 'Ulangi Tes' : 'Mulai Tes'} ${icon('arrowR', 'h-4 w-4')}</button>`;
    } else {
      const gName = planCfg.test === 'SKB' ? `SKB ${planCatName(planCfg.cat)}` : 'SKD';
      const skbMax = planCfg.test === 'SKB' ? (BANK['SKB_' + planCfg.cat] || []).length : 0;
      const cnt = planCfg.test === 'SKD'
        ? (day.kind === 'diagnostic' ? 45 : day.kind === 'retest' ? 60 : 110)
        : Math.min(day.kind === 'diagnostic' ? 30 : day.kind === 'retest' ? 45 : 50, skbMax || 50);
      rows = planPackRow(day.packKey, `${day.label} · ${gName}`, `${cnt} soal campuran terstruktur`, p.rec, day.kind === 'diagnostic' ? 'DIAGNOSTIK' : day.kind === 'final' ? 'FINAL TRY OUT' : 'TEST ULANG');
      cta = `<button class="btn btn-primary" onclick="App.planPack('${esc(day.packKey)}')">${p.full ? 'Ulangi Tes' : 'Mulai Tes'} ${icon('arrowR', 'h-4 w-4')}</button>`;
    }
    const snap = planCfg.phases?.[day.no];
    if (snap) {
      note += `<div class="mt-2 rounded-xl border border-amber-300 bg-amber-50 p-2.5 text-xs text-amber-900"><b>Hasil Pemetaan Hari ${day.no}:</b> ${esc(snap.summary)}</div>`;
    }
  } else if (!day.ready) {
    note = `<div class="mt-2 rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900"><b>Menunggu Tes Hari ${day.phaseCheckpoint}:</b> Selesaikan dulu tes pemetaan/evaluasi di Hari ${day.phaseCheckpoint} agar materi dan soal Hari ${day.no} otomatis disusun sesuai kelemahanmu.</div>`;
    cta = `<button class="btn btn-primary" onclick="$('#dlg-plan-day').close(); App.planDay(${day.phaseCheckpoint})">Buka Tes Hari ${day.phaseCheckpoint} ${icon('arrowR', 'h-4 w-4')}</button>`;
  } else {
    note = day.phaseSummary ? `<div class="mt-2 rounded-xl border border-amber-300 bg-amber-50 p-2.5 text-xs text-amber-900"><b>Fokus dari Evaluasi Hari ${day.phaseCheckpoint}:</b> ${esc(day.phaseSummary)}</div>` : '';
    const wMap = weakMateriMap();
    rows = day.topics.map(t => {
      const rev = planTopicReviewed(planCfg, day.no, t.id);
      const isW = wMap.has(t.id);
      return `
      <div class="pl-row ${rev ? 'ok' : isW ? 'materi-card-weak' : ''}">
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="inline-block rounded-full px-2 py-0.5 text-[0.65rem] font-extrabold ${catStyle(t.group).badge}">${t.group === 'SKB' ? esc('SKB ' + (t.skbCategory || '')) : t.group}</span>
            ${isW ? '<span class="materi-weak-badge">⚠ Kelemahan</span>' : ''}
          </div>
          <div class="pl-row-t mt-1">${esc(t.title)}</div>
          <div class="mt-2 flex flex-wrap gap-1.5">
            <button type="button" class="btn btn-warning btn-xs font-extrabold" onclick="$('#dlg-plan-day').close(); App.rangkuman('${esc(t.id)}')">📖 Rangkuman</button>
            <button type="button" class="btn btn-outline btn-xs" onclick="App.planStudyDay(${day.no}, '${esc(t.id)}')">🎓 Step Materi</button>
            <button type="button" class="btn ${rev ? 'btn-success text-white' : 'btn-ghost'} btn-xs" onclick="App.planToggleDayTopic(${day.no}, '${esc(t.id)}')">${rev ? '✓ Sudah diulang' : 'Tandai selesai'}</button>
          </div>
        </div>
      </div>`;
    }).join('') + `<div class="mt-2"></div>` + planPackRow(day.drillKey, `Latihan Soal Kelemahan · Hari ${day.no}`, `${PLAN_DRILL_N} soal pilihan dari topik prioritas hari ini`, p.rec, 'LATIHAN SOAL');
    const firstTopic = day.topics.find(t => !planTopicReviewed(planCfg, day.no, t.id));
    cta = firstTopic
      ? `<button class="btn btn-primary" onclick="App.planStudyDay(${day.no}, '${esc(firstTopic.id)}')">Belajar Materi ${icon('arrowR', 'h-4 w-4')}</button>`
      : `<button class="btn btn-primary" onclick="App.planPack('${esc(day.drillKey)}')">${p.rec ? 'Ulangi Soal Kelemahan' : 'Kerjakan Soal Kelemahan'} ${icon('arrowR', 'h-4 w-4')}</button>`;
  }
  const d = planDlg('dlg-plan-day');
  d.innerHTML = `
  <div class="modal-box max-w-md">
    <div class="flex items-start justify-between gap-3">
      <div><h3 class="text-xl font-extrabold text-neutral">Hari ${day.no} · ${esc(day.label)}</h3>
      <p class="mt-0.5 text-sm text-base-content/70">${day.kind !== 'learn' ? 'Checkpoint Evaluasi' : day.ready ? `${day.topics.length} materi prioritas + ${PLAN_DRILL_N} soal kelemahan` : 'Menunggu hasil tes sebelumnya'}</p></div>
      <button class="btn btn-ghost btn-sm btn-circle" onclick="$('#dlg-plan-day').close()" aria-label="Tutup">${icon('x', 'h-4 w-4')}</button>
    </div>
    ${note}
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
  if (!d.open) d.showModal();
}

const planApi = {
  planSetup() {
    const c = planCfg, preferred = targetPreference().bucket.slice(4);
    planDraft = c ? { test: c.test, cat: c.cat, days: Math.min(PLAN_INIT_MAX, c.baseDays || c.days) } : { test: 'SKD', cat: '', days: 7 };
    if (preferred && planFieldOptions(planDraft.test).includes(preferred)) planDraft.cat = preferred;
    planPaintSetup();
  },
  planSetTest(t) {
    if (!planDraft) return;
    planDraft.test = t;
    const cats = planFieldOptions(t);
    if (t !== 'SKD' && !cats.includes(planDraft.cat)) {
      const preferred = targetPreference().bucket.slice(4);
      planDraft.cat = cats.includes(preferred) ? preferred : (cats[0] || '');
    }
    planPaintSetup();
  },
  planSetCat(c) { if (!planDraft || !planFieldOptions(planDraft.test).includes(c)) return; planDraft.cat = c; planPaintSetup(); },
  planSetDays(v) { if (!planDraft) return; const n = Math.round(Number(v)); planDraft.days = n >= 1 ? n : planDraft.days; planPaintSetup(); },
  planStep(k) { if (!planDraft) return; planDraft.days += k; planPaintSetup(); },
  planSave() {
    if (!planDraft) return;
    const c = planSanitize(Object.assign({}, planDraft, { baseDays: planDraft.days, at: Date.now(), phases: {}, extensions: [], reviewed: {} }));
    if (!c || (c.test !== 'SKD' && !planFieldOptions(c.test).includes(c.cat))) return;
    c.days = Math.max(PLAN_MIN, Math.min(c.days, PLAN_INIT_MAX));
    c.baseDays = c.days;
    planCfg = c;
    store.set(PLAN_KEY, c);
    planQ = { at: c.at, sets: {} };
    store.set(PLANQ_KEY, planQ);
    if (c.cat) saveStudyTarget(targetPreference().role, 'SKB_' + c.cat);
    if (c.test === 'GABUNG' && planHasSkbBank(c)) reserveFinalSkb(c);
    const d = $('#dlg-plan'); if (d && d.open) d.close();
    toast(`Planning ${c.days} Hari dibuat. Mulai dari Tes Kelemahan Hari 1!`);
    if (location.hash === '#/planning') renderPlanning(); else go('#/planning');
  },
  async planReset() {
    if (!planCfg) { toast('Belum ada planning.'); return; }
    if (!await ask({ title: 'Reset planning?', text: 'Jadwal planning akan dihapus. Progres materi dan catatan kelemahan Anda tetap tersimpan.', ok: 'Reset planning', danger: true })) return;
    planCfg = null; planQ = null; store.set(PLAN_KEY, { at: Date.now(), reset: true }); store.del(PLANQ_KEY);
    toast('Planning direset.');
    if (location.hash === '#/planning') renderPlanning();
  },
  planDay: planDayOpen,
  planStudy(id) {
    const t = MATERI.find(x => x.id === id); if (!t) return;
    const d = $('#dlg-plan-day'); if (d && d.open) d.close();
    const i = planNextStep(t);
    lessonOpen(id, i);
  },
  planStudyDay(dayNo, id) {
    if (planCfg) {
      planCfg.reviewed = planCfg.reviewed || {};
      planCfg.reviewed[`${dayNo}:${id}`] = Date.now();
      store.set(PLAN_KEY, planCfg);
    }
    this.planStudy(id);
  },
  planToggleDayTopic(dayNo, id) {
    if (!planCfg) return;
    planCfg.reviewed = planCfg.reviewed || {};
    const k = `${dayNo}:${id}`;
    if (planCfg.reviewed[k]) delete planCfg.reviewed[k]; else planCfg.reviewed[k] = Date.now();
    store.set(PLAN_KEY, planCfg);
    planDayOpen(dayNo);
    if (location.hash === '#/planning') renderPlanning();
  },
  planExtend(addDays = 5) {
    if (!planCfg) return;
    const add = Math.max(1, Math.min(Math.round(Number(addDays) || 5), PLAN_MAX - planCfg.days));
    if (add <= 0) { toast(`Durasi planning sudah maksimal (${PLAN_MAX} hari).`); return; }
    planCfg.extensions = Array.isArray(planCfg.extensions) ? planCfg.extensions : [];
    planCfg.extensions.push({ afterDay: planCfg.days, added: add, at: Date.now() });
    planCfg.days += add;
    planCfg.updated = Date.now();
    store.set(PLAN_KEY, planCfg);
    const dr = $('#dlg-result'); if (dr && dr.open) dr.close();
    toast(`Waktu planning ditambah +${add} hari fokus sisa kelemahan!`);
    if (location.hash === '#/planning') renderPlanning(); else go('#/planning');
  },
  planFinishWeakness() {
    if (!planCfg) return;
    const wList = weakMateriList('ALL');
    planEnded = { at: Date.now(), test: planCfg.test, days: planCfg.days, weakIds: wList.map(w => w.id) };
    store.set(PLAN_ENDED_KEY, planEnded);
    planCfg = null; planQ = null;
    store.set(PLAN_KEY, { at: Date.now(), reset: true });
    store.del(PLANQ_KEY);
    const dr = $('#dlg-result'); if (dr && dr.open) dr.close();
    toast('Planning selesai! Materi kelemahan ditandai kuning lembut di Materi & Beranda.');
    if (location.hash === '#/planning') renderPlanning(); else go('#/planning');
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
function shuffleQuestionOptions(q) {
  if (!q || !Array.isArray(q.options) || q.options.length < 2) return q;
  if (/kecukupan/i.test(q.sub || '') || /Pernyataan \(1\)|A dan B benar|opsi di atas|semua (pilihan |jawaban )?benar/i.test(q.q || '')) return q;
  if (q.options.some(o => /\b[A-E] dan [A-E]\b|semua (di atas|benar)/i.test(String(o || '')))) return q;
  const idx = shuffle(q.options.map((_, k) => k));
  const inv = new Array(idx.length);
  idx.forEach((orig, nw) => { inv[orig] = nw; });
  const options = idx.map((orig, nw) => {
    const raw = String(q.options[orig] || '').replace(/^[A-E]\.\s*/, '');
    return raw.startsWith('IMG:') ? raw : `${LETTERS[nw]}. ${raw}`;
  });
  const scores = idx.map(orig => q.scores[orig]);
  return Object.assign({}, q, { options, scores, ans: inv[q.ans], _letterMap: inv });
}
function startExam(pack, opts = {}) {
  if (pack.planSet && planQ && pack.key.startsWith('PLAN-' + planQ.at + '-')) {
    planQ.sets[pack.planSet] = pack.questions.map(q => q.id);
    store.set(PLANQ_KEY, planQ);
  }
  const strict = !!opts.strict;
  const qs = pack.questions.map((q, i) => {
    const item = strict ? shuffleQuestionOptions(q) : Object.assign({}, q);
    return Object.assign(item, { no: i + 1 });
  });
  exam = {
    pack, qs, fresh: qs.map(q => !seenBefore(q)),
    answers: new Array(qs.length).fill(null),
    doubts: new Array(qs.length).fill(false),
    struck: qs.map(() => []),
    idx: 0, filter: 'ALL', strict,
    remaining: pack.minutes ? pack.minutes * 60 : null, tickAt: performance.now(),
    elapsed: 0, spent: new Array(qs.length).fill(0), visible: new Set(), paused: false, finished: false,
    instant: strict ? false : opts.instant !== false,
    assisted: strict ? false : opts.instant !== false
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
  const hideLive = exam.strict && !exam.finished;
  if (!hideLive && exam.pack.kind === 'FULL') {
    html += chip('TWK', s.TWK.score, PASSING.TWK, s.TWK.score >= PASSING.TWK);
    html += chip('TIU', s.TIU.score, PASSING.TIU, s.TIU.score >= PASSING.TIU);
    html += chip('TKP', s.TKP.score, PASSING.TKP, s.TKP.score >= PASSING.TKP);
  }
  const tot = Object.values(s).reduce((a, b) => a + b.score, 0);
  if (!hideLive) html += chip('Skor', tot, exam.qs.length * 5, false);
  else html += chip('Mode', 'CAT Ketat', null, false);
  html += chip('Terjawab', ans, exam.qs.length, false);
  box.innerHTML = html;
  $('#x-sub').textContent = (exam.finished ? 'Mode tinjau pembahasan' : exam.strict ? 'Mode CAT Ketat • Opsi diacak' : exam.remaining == null ? 'Tanpa batas waktu' : exam.pack.compose);
  const fin = $('#x-finish');
  if (fin) { fin.textContent = exam.finished ? 'Lihat hasil' : 'Selesai'; fin.onclick = exam.finished ? () => openResult() : () => App.finish(); }
}

/* panel soal */
function formatExplanationText(q) {
  let exp = String(q.explanation || '');
  if (q._letterMap && exp) {
    exp = exp.replace(/\b([A-E])(?=\s*\(\s*[1-5]\s*\))/g, (_, L) => {
      const nIdx = q._letterMap[LETTERS.indexOf(L)];
      return nIdx != null ? LETTERS[nIdx] : L;
    });
  }
  return exp;
}
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
  const expText = formatExplanationText(q);
  return `
  <div class="overflow-hidden rounded-2xl border border-base-300 fade-in">
    <div class="break-words px-4 py-3 text-[0.95rem] font-bold leading-snug ${cls}" role="status">${head}</div>
    <div class="grid gap-3 bg-base-200/50 p-3 text-[0.95rem] sm:p-4 md:grid-cols-2">
      <div class="min-w-0 rounded-xl bg-amber-50 p-3.5 ring-1 ring-amber-200"><div class="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-amber-900">${icon('bolt', 'h-4 w-4')} Cara cepat</div><div class="break-words leading-relaxed">${esc(q.trick) || '—'}</div></div>
      <div class="min-w-0 rounded-xl bg-base-100 p-3.5 ring-1 ring-base-300"><div class="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-primary">${icon('bulb', 'h-4 w-4')} Pembahasan</div><div class="break-words leading-relaxed">${esc(expText) || '—'}</div></div>
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
  const struckList = (exam.struck && exam.struck[exam.idx]) || [];
  const opts = q.options.map((o, i) => {
    let cls = '';
    if (chosen !== null && key) {
      if (i === q.ans) cls = 'is-correct';
      else if (i === chosen) cls = q.category === 'TKP' ? 'is-mid' : 'is-wrong';
    } else if (chosen === null && exam.finished && i === q.ans) cls = 'is-correct';
    else if (chosen === i) cls = 'is-selected';
    const isStruck = !!struckList[i] && chosen !== i;
    if (isStruck) cls += ' is-struck';
    let tag = '';
    if (key && (chosen !== null || exam.finished)) {
      const v = q.scores[i];
      tag = q.category === 'TKP'
        ? `<span class="badge badge-sm ml-auto shrink-0 ${v === 5 ? 'badge-success text-white' : 'badge-ghost'}">+${v}</span>`
        : (v === 5 ? `<span class="badge badge-success badge-sm ml-auto shrink-0 text-white">Benar</span>` : '');
    }
    const strikeBtn = !exam.finished
      ? `<button type="button" class="opt-strike${isStruck ? ' on' : ''}" onclick="App.toggleStrike(${i})" title="${isStruck ? 'Batalkan coretan' : 'Coret opsi pengecoh'}" aria-label="${isStruck ? 'Batalkan coretan opsi ' + LETTERS[i] : 'Coret opsi ' + LETTERS[i]}">${isStruck ? '↺' : '⊘'}</button>`
      : '';
    return `<div class="opt-row"><button class="opt ${cls} max-lg:min-h-[3.75rem] max-lg:items-center max-lg:py-3" ${exam.finished ? 'disabled' : ''} onclick="App.pick(${i})" aria-pressed="${chosen === i}">
      <span class="letter max-lg:!h-9 max-lg:!w-9 max-lg:!text-base">${LETTERS[i]}</span><span class="min-w-0 flex-1 text-base leading-snug lg:pt-1 lg:text-[0.95rem]">${escO(o)}</span>${tag}</button>${strikeBtn}</div>`;
  }).join('');
  const last = exam.idx === exam.qs.length - 1;
  const nAns = exam.answers.filter(a => a !== null).length;
  const pctAns = Math.round((nAns / exam.qs.length) * 100);
  /* label bilah aksi sedikit lebih besar di HP */
  const nb = (cls, ...a) => xb('max-lg:!min-h-[3.5rem] max-lg:!text-[.75rem] ' + cls, ...a);
  const bmOn = isBookmarked(q);

  box.innerHTML = `
    <div class="h-1.5 w-full bg-base-200" role="progressbar" aria-label="Soal terjawab" aria-valuemin="0" aria-valuemax="${exam.qs.length}" aria-valuenow="${nAns}"><div class="h-full bg-primary transition-[width] duration-300" style="width:${pctAns}%"></div></div>
    <div class="flex flex-1 flex-col gap-4 p-4 sm:p-6">
      <div class="flex flex-wrap items-center gap-2">
        <span class="badge badge-primary badge-lg font-bold">Soal ${q.no} / ${exam.qs.length}</span>
        <span class="badge badge-lg border-0 font-semibold ${cs.badge}">${catLabel}</span>
        <span class="badge badge-ghost h-auto min-h-[1.25rem] max-w-full whitespace-normal break-words py-1 text-left">${esc(q.sub)}</span>
        <button type="button" class="rk-bm-btn${bmOn ? ' on' : ''}" onclick="App.toggleBookmarkCurrent()">${bmOn ? '★ Tersimpan' : '☆ Simpan sulit'}</button>
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
  const byTime = {};
  exam.qs.forEach((q, i) => {
    const o = bySub[q.sub] = bySub[q.sub] || { q, n: 0, score: 0, max: 0 };
    o.n++; o.max += 5;
    if (exam.answers[i] !== null) o.score += q.scores[exam.answers[i]];
    const cat = ['TWK', 'TIU', 'TKP'].includes(q.category) ? q.category : 'SKB';
    const bt = byTime[cat] = byTime[cat] || { sec: 0, n: 0 };
    bt.n++; bt.sec += exam.spent[i] || 0;
  });
  return { sum, total, max, answered, correct, wrong: answered - correct, empty: exam.qs.length - answered, bySub, byTime };
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
  const jl = activeJalur();
  const bars = Object.entries(r.sum).map(([c, o]) => {
    const rawPg = full ? jl.pg[c] : null;
    const pg = rawPg != null && rawPg > 0 ? rawPg : null;
    const p = Math.round((o.score / o.max) * 100);
    const ok = pg != null ? o.score >= pg : p >= 70;
    const lbl = c === 'ALL' ? 'Skor' : c;
    return `<div class="rounded-xl border ${ok ? 'border-success/50 bg-success/5' : 'border-base-300 bg-base-100'} p-3">
      <div class="flex items-baseline justify-between gap-2"><span class="font-bold text-neutral">${lbl}</span>
        <span class="text-xl font-extrabold text-neutral">${o.score}</span></div>
      <div class="text-xs text-base-content/60">${pg != null ? `Ambang ${jl.id} ${pg}` : (full ? `Khusus ${jl.id} (tanpa PG subtes)` : 'Maks ' + o.max)} • maks ${o.max}</div>
      <progress class="progress ${ok ? 'progress-success' : 'progress-primary'} mt-2 h-2 w-full" value="${p}" max="100"></progress>
      ${pg != null ? `<div class="mt-1 text-xs ${ok ? 'text-success' : 'text-error'} font-semibold">${ok ? 'Memenuhi passing grade' : `Kurang ${pg - o.score} poin dari passing grade`}</div>` : ''}
    </div>`;
  }).join('');

  const jalurPills = full ? `<div class="flex flex-wrap items-center gap-1.5 text-xs"><span class="font-bold text-slate-600">Jalur acuan:</span>${Object.values(JALUR_META).map(j => `<button type="button" class="pl-chip ${j.id === jl.id ? 'on' : ''}" onclick="App.setJalur('${j.id}')">${j.id === 'UMUM' ? 'Umum (500++)' : esc(j.id)}</button>`).join('')}</div>` : '';

  let verdict = '';
  if (full) {
    const fails = ['TWK', 'TIU', 'TKP'].filter(c => jl.pg[c] > 0 && r.sum[c].score < jl.pg[c]);
    const lowTot = r.total < jl.minTotal;
    if (fails.length || lowTot) {
      const reasons = [];
      if (fails.length) reasons.push(`subtes ${fails.join(', ')}`);
      if (lowTot) reasons.push(`total minimal ${jl.minTotal} (kurang ${jl.minTotal - r.total} poin)`);
      verdict = `<div role="alert" class="alert border-warning/50 bg-warning/15 text-sm"><span><b>Belum memenuhi passing grade jalur ${esc(jl.id)}</b> pada ${reasons.join(' dan ')}. Fokuskan latihan dan materi pada bagian tersebut.</span></div>`;
    } else if (r.total >= 500) {
      verdict = `<div role="alert" class="alert border-success/40 bg-success/10 text-sm">${icon('trophy', 'h-5 w-5 text-success')}<span><b>Luar Biasa (Skor Elit 500++ · Jalur ${esc(jl.id)})!</b> Skor <b>${r.total}/550</b> melampaui passing grade dan menempatkanmu di jajaran teratas Kemen &amp; Pemda.</span></div>`;
    } else {
      verdict = `<div role="alert" class="alert border-success/40 bg-success/10 text-sm">${icon('trophy', 'h-5 w-5 text-success')}<span><b>Memenuhi passing grade ${esc(jl.id)}!</b> Kejar <b>+${Math.max(0, 500 - r.total)} poin</b> lagi menuju target elit <b>500++</b> agar aman peringkat Kementerian &amp; Pemda.</span></div>`;
    }
  } else {
    const msg = pct >= 90 ? 'Sangat unggul (>=90%) — siap amankan bobot 60% SKB!' : pct >= 80 ? 'Baik — dorong ke >=90% untuk mendominasi perangkingan.' : pct >= 60 ? 'Cukup baik — pelajari pembahasan soal yang kurang tepat.' : 'Masih perlu latihan — baca materi terkait lalu ulangi paket ini.';
    verdict = `<div role="alert" class="alert border-primary/30 bg-primary/10 text-sm"><span>${msg}</span></div>`;
  }

  const field = exam.pack.skbBucket || exam.pack.group;
  const target = full ? jl.targetSkd : (field.startsWith('SKB_') ? Math.ceil(r.max * SKB_TARGET) : null);
  if (target) {
    const msg = r.total >= target ? 'Target latihan tertinggi tercapai!' : `Perlu tambahan ${target - r.total} poin untuk mencapai target kompetitif.`;
    verdict += `<p class="text-sm text-base-content/80"><b>Target ${full ? `SKD ${target}/550 (Jalur ${esc(jl.id)} · acuan 500++)` : 'SKB ' + esc(skbMeta(field).short) + ' 90%'}.</b> ${msg}</p>`;
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
      ${jalurPills}
      ${verdict}
      <div class="grid gap-3 ${Object.keys(r.sum).length > 1 ? 'sm:grid-cols-3' : ''}">${bars}</div>
      <div class="grid grid-cols-3 divide-x divide-base-300 rounded-2xl border border-base-300 bg-base-100 text-center">
        <div class="px-1.5 py-3"><div class="text-xs leading-tight text-base-content/70">Benar / skor 5</div><div class="text-2xl font-extrabold text-success">${r.correct}</div></div>
        <div class="px-1.5 py-3"><div class="text-xs leading-tight text-base-content/70">Kurang tepat</div><div class="text-2xl font-extrabold text-error">${r.wrong}</div></div>
        <div class="px-1.5 py-3"><div class="text-xs leading-tight text-base-content/70">Kosong</div><div class="text-2xl font-extrabold text-neutral">${r.empty}</div></div>
      </div>
      <p class="text-sm text-base-content/70">${split.filter(item => item.max).map(item => `${item.label} ${item.score}/${item.max} (${item.max / 5} soal)`).join(' · ')}</p>
      ${tiu.length ? `<p class="text-sm text-base-content/70">TIU · ${tiu.map(([name, item]) => `${name} ${item.score}/${item.max}`).join(' · ')}</p>` : ''}
      ${Object.keys(r.byTime).length ? (() => {
        const rec = { TWK: '≤18m', TIU: '≥45m', TKP: '≤25m' };
        const rows = Object.entries(r.byTime).map(([c, t]) => {
          const avg = Math.round(t.sec / Math.max(t.n, 1));
          return `<div class="rounded-xl border border-base-300 bg-base-200/40 px-3 py-2 text-xs"><b class="text-neutral">${c}</b> · ${fmtClock(t.sec)} <span class="text-base-content/60">(${avg} dtk/soal${full && rec[c] ? ` · ideal ${rec[c]}` : ''})</span></div>`;
        }).join('');
        return `<div><h4 class="mb-1.5 text-sm font-bold text-neutral">Manajemen Waktu Pengerjaan</h4><div class="grid gap-2 sm:grid-cols-3">${rows}</div></div>`;
      })() : ''}
      ${(() => {
        if (!exam.pack.plan) return '';
        const snap = planCfg?.phases?.[exam.pack.planDay];
        const isFinal = exam.pack.planPhase === 'final';
        if (exam.pack.planPhase === 'learn') {
          return `<div class="rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs text-slate-800"><b>Latihan Planning Hari ${exam.pack.planDay} selesai!</b> <button type="button" class="link link-primary font-bold ml-1" onclick="App.exitToList()">Kembali ke Planning →</button></div>`;
        }
        return `<div class="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900">
          <b>${isFinal ? 'Try Out Final Planning Selesai!' : `Peta Kelemahan Hari ${exam.pack.planDay} Diperbarui!`}</b>
          ${snap?.summary ? `<p class="mt-1">${esc(snap.summary)}</p>` : ''}
          <div class="mt-2 flex flex-wrap gap-2">
            <button type="button" class="btn btn-primary btn-xs" onclick="App.exitToList()">Lanjut ke Planning →</button>
            ${isFinal && planCfg && planCfg.days + 5 <= PLAN_MAX ? '<button type="button" class="btn btn-outline btn-xs" onclick="App.planExtend(5)">➕ Tambah +5 Hari</button>' : ''}
            ${isFinal && planCfg ? '<button type="button" class="btn btn-warning btn-xs font-extrabold" onclick="App.planFinishWeakness()">✓ Sudahi Planning</button>' : ''}
          </div>
        </div>`;
      })()}
      ${weakHtml}
      ${reviewSummary('sesi')}
      <div class="flex flex-wrap gap-2">
        ${(full || exam.pack.mode === 'SKB') ? `<button type="button" class="btn btn-outline btn-sm" onclick="$('#dlg-result').close(); App.openCalc(${full ? r.total : ''})">📊 Hitung Nilai Akhir 40:60</button>` : ''}
        <button type="button" class="btn btn-outline btn-sm" onclick="$('#dlg-result').close(); App.openVault()">🔖 Soal Salah &amp; Bookmark</button>
      </div>
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
function recordWrongQuestions() {
  const now = Date.now(), dayMs = 86400000;
  let changed = false;
  exam.qs.forEach((q, i) => {
    const a = exam.answers[i];
    if (a === null) return;
    const rid = questions.resolve(q.id);
    const sc = q.scores[a];
    const miss = q.category === 'TKP' ? sc < 4 : sc < 5;
    if (miss) {
      const prev = wrongMap[rid] || { count: 0, interval: 1 };
      wrongMap[rid] = {
        id: rid, bucket: reviewBucket(q, exam.pack) || '', sub: q.sub || '',
        count: prev.count + 1, wrongAt: now, interval: 1, nextDueAt: now + dayMs, lastScore: sc
      };
      changed = true;
    } else if (sc === 5 && wrongMap[rid]) {
      if ((wrongMap[rid].interval || 1) >= 3) delete wrongMap[rid];
      else {
        const nextInt = (wrongMap[rid].interval || 1) * 3;
        wrongMap[rid].interval = nextInt;
        wrongMap[rid].nextDueAt = now + nextInt * dayMs;
        wrongMap[rid].lastScore = 5;
      }
      changed = true;
    }
  });
  if (changed) store.set(WRONG_KEY, wrongMap);
}
function finishExam() {
  if (!exam || exam.finished) return;
  exam.finished = true; exam.paused = false;
  const r = computeResult();
  saveReview();
  recordWrongQuestions();
  const curWeakFromExam = syncWeakMateriFromExam(r, exam);
  if (exam.pack.plan) planOnCheckpointFinish(exam, r, curWeakFromExam);
  if (!exam.pack.noSave) {
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
    ${p.forceTimed ? '<p class="mt-4 text-xs text-base-content/70">Pembahasan tersedia setelah simulasi selesai.</p>' : `<div class="mt-4 space-y-2.5">
      <label class="flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-base-200 px-4 py-3">
        <span><span class="block text-sm font-semibold text-neutral">Bahas instan</span><span class="text-xs text-base-content/60">Kunci &amp; pembahasan langsung tampil setelah menjawab. Matikan untuk suasana ujian sebenarnya.</span></span>
        <input type="checkbox" id="st-instant" class="toggle toggle-primary shrink-0" ${store.get('cpns_instant', p.kind !== 'FULL') ? 'checked' : ''} onchange="if(this.checked && $('#st-strict')) $('#st-strict').checked=false">
      </label>
      <label class="flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-base-200 px-4 py-3">
        <span><span class="block text-sm font-semibold text-neutral">Mode CAT BKN Ketat</span><span class="text-xs text-base-content/60">Acak urutan opsi A–E, sembunyikan skor langsung saat ujian, tanpa tombol jeda waktu.</span></span>
        <input type="checkbox" id="st-strict" class="toggle toggle-secondary shrink-0" ${store.get('cpns_strict', false) ? 'checked' : ''} onchange="if(this.checked && $('#st-instant')) $('#st-instant').checked=false">
      </label>
    </div>`}
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
        ${timed && !exam.strict ? row(exam.paused ? 'play' : 'pause', exam.paused ? 'Lanjutkan waktu' : 'Jeda waktu', "$('#dlg-menu').close();App.togglePause()") : ''}
        ${exam.finished || exam.pack.forceTimed || exam.strict ? '' : `<label class="flex cursor-pointer items-center justify-between gap-3 px-3 py-3.5"><span class="flex items-center gap-3 text-[0.95rem] font-semibold">${icon('bulb', 'h-5 w-5 shrink-0 text-neutral')}Bahas instan</span><input type="checkbox" class="toggle toggle-primary shrink-0" ${exam.instant ? 'checked' : ''} onchange="App.toggleInstant(this.checked)"></label>`}
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
    if (which === 'theme') App.toggleTheme();
    else if (which === 'notif' && window.CPNSNotif) window.CPNSNotif.open();
    else if (which === 'profile' && window.Auth) window.Auth.openProfile();
  },
  toggleTheme() {
    applyTheme(themeMode === 'dark' ? 'light' : 'dark');
    if (!exam) route();
    else {
      const btn = $('#btn-theme');
      if (btn) btn.innerHTML = icon(themeMode === 'dark' ? 'sun' : 'moon', 'h-5 w-5');
    }
  },
  toggleBookmark(id, btn) {
    const on = toggleBookmarkById(id);
    if (btn) { btn.classList.toggle('on', on); btn.textContent = on ? '★ Tersimpan' : '☆ Tandai sulit'; }
    toast(on ? 'Soal disimpan ke Bookmark.' : 'Bookmark dihapus.');
  },
  toggleBookmarkCurrent() {
    if (!exam) return;
    const q = exam.qs[exam.idx];
    const on = toggleBookmarkById(q.id);
    paintQuestion();
    toast(on ? 'Soal ditandai ke Bookmark.' : 'Tanda Bookmark dihapus.');
  },
  toggleStrike(i) {
    if (!exam || exam.finished) return;
    const arr = exam.struck[exam.idx] || (exam.struck[exam.idx] = []);
    arr[i] = !arr[i];
    if (arr[i] && exam.answers[exam.idx] === i) exam.answers[exam.idx] = null;
    paintScores(); paintQuestion(); paintSide();
  },
  openNonCat(tab) { window.KemenSuite?.openNonCat(tab); },
  openCalc(skdScore) { window.KemenSuite?.openCalc(skdScore); },
  openVault() { window.KemenSuite?.openVault(); },
  openKelemahanMateri,
  clearWeakMateri(tId) {
    resolveWeakMateri(tId);
    toast('Materi ditandai sudah dikuasai.');
    const d = $('#dlg-weak-materi');
    if (d && d.open) openKelemahanMateri();
    if (!exam) route();
  },
  goWeakMateri() {
    ui.materiTab = 'SKD';
    const w = weakMateriList('ALL');
    const hasSkdW = w.some(x => x.group !== 'SKB');
    const hasSkbW = w.some(x => x.group === 'SKB');
    if (!hasSkdW && hasSkbW) { ui.materiTab = 'SKB'; ui.materiSkbGroup = 'WEAK'; }
    else ui.materiGroup = hasSkdW ? 'WEAK' : 'ALL';
    go('#/materi');
  },

  confirmStart(key) {
    const p = pendingPack;
    if (!p || p.key !== key) return;
    pendingPack = null;
    const strict = !p.forceTimed && !!$('#st-strict')?.checked;
    const inst = !p.forceTimed && !strict && !!$('#st-instant')?.checked;
    if (!p.forceTimed) { store.set('cpns_instant', inst); store.set('cpns_strict', strict); }
    $('#dlg-start').close();
    startExam(p, { instant: inst, strict });
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
  skbTargetChoicesHTML,
  targetPreference,
  openOnboarding: () => window.Auth?.openOnboarding?.(),
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
    saveStudyTarget(form.elements.targetRole.value, form.elements.targetBucket.value, form.elements.targetName?.value, form.elements.targetJalur?.value);
    store.del('cpns_onboard_skip_v1');
    const dialog = form.closest?.('#dlg-profile') || $('#dlg-profile');
    if (!exam || exam.finished) route();
    if (form.dataset && form.dataset.onboard === '1') {
      if (dialog?.open) dialog.close();
      toast('Profil belajar disimpan!');
    } else if (dialog?.open) {
      window.Auth?.openProfile(dialog.dataset.scope, 'Profil tersimpan.');
    }
    return false;
  },
  setJalur(id) {
    if (!JALUR_META[id]) return;
    studyJalur = id;
    store.set(JALUR_KEY, id);
    if (exam && $('#dlg-result')?.open) openResult();
    else if (!exam && location.hash !== '#/ujian') route();
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
window.GocpnsBridge = {
  store, BANK, questions, planDlg, planQIndex, toast, ask, esc, icon, fmtNum,
  getTargetBucket: () => targetPreference().bucket,
  skbMeta,
  getResults: () => results,
  getHistory: () => examHistory,
  getBookmarks: () => bookmarks,
  setBookmarkNote: (id, note) => toggleBookmarkById(id, note),
  removeBookmark: id => { delete bookmarks[questions.resolve(id)]; store.set(BOOKMARK_KEY, bookmarks); },
  getWrongMap: () => wrongMap,
  removeWrong: id => { delete wrongMap[questions.resolve(id)]; store.set(WRONG_KEY, wrongMap); },
  clearWrong: () => { wrongMap = {}; store.set(WRONG_KEY, wrongMap); },
  startCustomExam: (pack, opts) => startExam(pack, opts),
  rerender: () => { if (!exam && location.hash !== '#/ujian') route(); },
  onSyncChange(st) {
    const el = $('#home-sync-status');
    if (!el || !st) return;
    if (!st.online) {
      el.className = 'mt-2 flex flex-wrap items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900';
      el.innerHTML = `<b>Offline Mode Aktif</b> · Seluruh materi &amp; CAT berjalan tanpa internet. Progres otomatis disimpan lokal${st.pending ? ` (${st.pending} perubahan)` : ''} &amp; siap disinkron saat online.`;
    } else if (st.dirty) {
      el.className = 'mt-2 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs text-sky-900';
      el.innerHTML = '<span><b>Online kembali</b> · Mengamankan progres yang dikerjakan saat offline...</span><button type="button" class="btn btn-xs btn-primary" onclick="window.Auth?.syncNow?.()">Sinkronkan</button>';
    } else {
      el.className = 'mt-1.5 text-[0.72rem] font-semibold text-emerald-700';
      el.innerHTML = `✓ Offline PWA siap · progres otomatis tersimpan lokal${st.hasServer && st.loggedIn ? ' &amp; tersinkron ke akun' : ''}`;
    }
  }
};

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
  // db_skd_extra.js kini dimuat sinkron dari index.html agar langsung siap offline;
  // db_skb_extra.js tetap opsional bila pengguna menambahkan bank soal tambahan lokal.
  ['./db/skb/db_skb_extra.js'].forEach(src => {
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
  const skipOb = store.get('cpns_onboard_skip_v1', false);
  const hasPref = !!(studyTarget && (studyTarget.name || studyTarget.bucket || studyTarget.role));
  const hasProg = Object.keys(results).length > 0 || Object.keys(lessonStore).length > 0 || Object.keys(weakMateri).length > 0 || Object.keys(rkRead).length > 0 || !!planCfg || examHistory.length > 0 || seen.size > 0;
  const hasUser = !!(window.Auth && window.Auth.user && window.Auth.user());
  if (!skipOb && !hasPref && !hasProg && !hasUser && location.hash !== '#/ujian') {
    window.Auth?.openOnboarding?.();
  }
}
init();
