const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'app.css');
const content = fs.readFileSync(cssPath, 'utf8');

// The compiled tailwind is on line 1 (the huge line starting with *,:after)
const lines = content.split(/\r?\n/);
const tailwindBase = lines[0]; // first minified line

const newCustomCss = `
/* ==========================================================================
   DESKTOP & MOBILE INDEPENDENCE (CLEAN RESPONSIVE ARCHITECTURE)
   ========================================================================== */

/* Header Atas: Glassmorphic Modern */
.app-top {
  display: block !important;
  background-color: rgba(255, 255, 255, 0.96) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8) !important;
}

/* Hapus total tombol bulat hamburger lama */
.mrow, .mburger {
  display: none !important;
}

/* DESKTOP (Layar >= 640px) */
@media (min-width: 640px) {
  .bnav {
    display: none !important;
  }
  .page-main {
    padding-bottom: 3.5rem !important;
  }
  .page-foot {
    padding-bottom: 2rem !important;
  }
}

/* MOBILE (Layar < 640px): Tampilan Modern Mobile App */
@media (max-width: 639px) {
  .bnav {
    display: grid !important;
    position: fixed !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 40 !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    background: rgba(255, 255, 255, 0.96) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    backdrop-filter: blur(16px) !important;
    border-top: 1px solid rgba(226, 232, 240, 0.9) !important;
    box-shadow: 0 -4px 20px -2px rgba(15, 23, 42, 0.06) !important;
    padding: 0.25rem 0.5rem calc(0.25rem + env(safe-area-inset-bottom)) !important;
  }
  .bnav a {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.15rem !important;
    min-height: 3.25rem !important;
    border-radius: 0.75rem !important;
    font-size: 0.72rem !important;
    font-weight: 600 !important;
    color: #64748b !important;
    transition: all 0.15s ease !important;
    text-decoration: none !important;
  }
  .bnav a:active {
    transform: scale(0.95) !important;
  }
  .bnav a.on {
    color: #0b7fd4 !important;
    font-weight: 700 !important;
    background: rgba(11, 127, 212, 0.1) !important;
  }
  .bnav .bnav-icon {
    display: grid !important;
    place-items: center !important;
  }
  .bnav .bnav-label {
    letter-spacing: -0.01em !important;
  }
  .page-main {
    padding-bottom: calc(5.25rem + env(safe-area-inset-bottom)) !important;
  }
  .page-foot {
    padding-bottom: calc(5.25rem + env(safe-area-inset-bottom)) !important;
  }
}

/* ==========================================================================
   MATERI CARDS: HAPUS GARIS KIRI, CARD BERWARNA NYATA, PADDING RAPI
   ========================================================================== */

/* HAPUS garis berwarna di sisi kiri card */
.blk::before,
.blk:before {
  display: none !important;
  content: none !important;
  width: 0 !important;
}

.blk > :not(.blk-head) {
  margin-left: 0 !important;
}

/* Card Dasar */
.blk {
  position: relative !important;
  overflow: hidden !important;
  border-radius: 1.25rem !important;
  box-shadow: 0 2px 12px -2px rgba(15, 23, 42, 0.05), 0 0 1px 1px rgba(15, 23, 42, 0.04) !important;
  margin-bottom: 1.25rem !important;
}

/* 1. MATERI CARD: Berwarna biru lembut */
.blk-materi {
  background-color: #f0f7fe !important;
  border: 1px solid #bfdbfe !important;
}
.blk-materi .blk-head {
  background-color: #dbeafe !important;
  border-bottom: 1px solid #bfdbfe !important;
  color: #1d4ed8 !important;
  padding: 0.75rem 1.15rem !important;
}
.blk-materi .blk-tag {
  color: #1d4ed8 !important;
  font-weight: 800 !important;
}

/* 2. TIPS CARD: Berwarna kuning/amber hangat */
.blk-tips {
  background-color: #fffdf5 !important;
  border: 1px solid #fde047 !important;
}
.blk-tips .blk-head {
  background-color: #fef08a !important;
  border-bottom: 1px solid #fde047 !important;
  color: #854d0e !important;
  padding: 0.75rem 1.15rem !important;
}
.blk-tips .blk-tag {
  color: #854d0e !important;
  font-weight: 800 !important;
}

/* 3. CONTOH SOAL CARD: Berwarna ungu lembut */
.blk-contoh {
  background-color: #faf8ff !important;
  border: 1px solid #ddd6fe !important;
}
.blk-contoh .blk-head {
  background-color: #ede9fe !important;
  border-bottom: 1px solid #ddd6fe !important;
  color: #6b21a8 !important;
  padding: 0.75rem 1.15rem !important;
}
.blk-contoh .blk-tag {
  color: #6b21a8 !important;
  font-weight: 800 !important;
}

/* 4. LATIHAN CARD: Emerald gradient */
.blk-latihan {
  border-radius: 1.25rem !important;
  padding: 1.35rem !important;
  color: #ffffff !important;
  background: linear-gradient(135deg, #059669 0%, #0d9488 50%, #0284c7 100%) !important;
  box-shadow: 0 10px 25px -5px rgba(13, 148, 136, 0.35) !important;
}
@media (min-width: 640px) {
  .blk-latihan {
    padding: 1.75rem !important;
  }
}

/* ==========================================================================
   TIPOGRAFI & INDENTASI TEKS (RAPI, TIDAK MENTOK, ENAK DIBACA)
   ========================================================================== */

/* Area konten card: beri ruang yang lega dan tertata */
.blk-content {
  padding: 1.15rem 1.15rem !important;
}
@media (min-width: 640px) {
  .blk-content {
    padding: 1.5rem 1.75rem !important;
  }
}

.materi-body {
  font-size: 0.95rem !important;
  line-height: 1.75 !important;
  color: #1e293b !important;
}

.materi-body h2 {
  font-size: 1.15rem !important;
  font-weight: 800 !important;
  color: #0f172a !important;
  margin-bottom: 0.85rem !important;
  line-height: 1.35 !important;
}

.materi-body h3 {
  font-size: 1.02rem !important;
  font-weight: 700 !important;
  color: #1e293b !important;
  margin-top: 1.25rem !important;
  margin-bottom: 0.5rem !important;
}

.materi-body p {
  margin: 0.75rem 0 !important;
  line-height: 1.75 !important;
}

/* Bullet points yang rapi dan aman dari tepi border */
.materi-body ul {
  list-style-type: disc !important;
  padding-left: 1.45rem !important;
  margin: 0.75rem 0 !important;
}

.materi-body ol {
  list-style-type: decimal !important;
  padding-left: 1.45rem !important;
  margin: 0.75rem 0 !important;
}

.materi-body li {
  margin-bottom: 0.5rem !important;
  line-height: 1.72 !important;
  padding-left: 0.25rem !important;
}

/* Sub-list berjenjang */
.materi-body ul ul,
.materi-body ol ul,
.materi-body ul ol,
.materi-body ol ol {
  padding-left: 1.25rem !important;
  margin: 0.4rem 0 !important;
}

/* Gambar materi */
.materi-figure {
  margin: 1.25rem 0 !important;
  border-radius: 1rem !important;
  overflow: hidden !important;
  border: 1px solid #cbd5e1 !important;
  background: #ffffff !important;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05) !important;
  text-align: center !important;
}
.materi-figure img {
  width: auto !important;
  max-width: 100% !important;
  max-height: 380px !important;
  object-fit: contain !important;
  display: block !important;
  margin: 0.5rem auto !important;
  border-radius: 0 !important;
  background: #ffffff !important;
}
.materi-figure img.img-garuda {
  width: auto !important;
  max-width: 85% !important;
  max-height: 320px !important;
  margin: 0.75rem auto !important;
  padding: 0 !important;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.12)) !important;
}
.materi-figure figcaption {
  padding: 0.65rem 1rem !important;
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  color: #1e293b !important;
  background: #f8fafc !important;
  border-top: 1px solid #e2e8f0 !important;
  text-align: center !important;
}

/* Grid 5 Sila */
.sila-grid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 0.75rem !important;
  margin: 1rem 0 !important;
}
@media (min-width: 640px) {
  .sila-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
  }
}
.sila-card {
  border-radius: 1rem !important;
  border: 1px solid #cbd5e1 !important;
  background: #ffffff !important;
  padding: 0.75rem 0.5rem !important;
  text-align: center !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 0.4rem !important;
  transition: transform 0.18s, box-shadow 0.18s !important;
}
.sila-card:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.1) !important;
}
.sila-card img {
  width: 4.75rem !important;
  height: 4.75rem !important;
  border-radius: 0.85rem !important;
  object-fit: contain !important;
  padding: 0.2rem !important;
  background: #fafafa !important;
}
.sila-card .sila-num {
  font-size: 0.72rem !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  color: #0b7fd4 !important;
}
.sila-card .sila-title {
  font-size: 0.82rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  color: #0f172a !important;
}

/* Tabel di materi */
.materi-body .table {
  background: #ffffff !important;
  border-radius: 0.85rem !important;
  overflow: hidden !important;
  border: 1px solid #cbd5e1 !important;
}
.materi-body .table th {
  background: #f1f5f9 !important;
  color: #0f172a !important;
  font-weight: 700 !important;
}

/* Callout */
.callout {
  border-left: 4px solid #0b7fd4 !important;
  background: #ffffff !important;
  padding: 0.75rem 1rem !important;
  border-radius: 0 0.75rem 0.75rem 0 !important;
  margin: 0.85rem 0 !important;
  border-top: 1px solid #cbd5e1 !important;
  border-right: 1px solid #cbd5e1 !important;
  border-bottom: 1px solid #cbd5e1 !important;
}

/* ==========================================================================
   MOBILE SECTION PILLS (STICKY CAROUSEL)
   ========================================================================== */
.sub-sticky {
  position: sticky !important;
  top: 3.5rem !important;
  z-index: 20 !important;
  background: rgba(255, 255, 255, 0.94) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8) !important;
  box-shadow: 0 4px 12px -2px rgba(15, 23, 42, 0.05) !important;
  padding: 0.4rem 0.75rem !important;
}

.chip-nav {
  flex: none !important;
  display: inline-flex !important;
  align-items: center !important;
  height: 2.15rem !important;
  padding: 0 0.85rem !important;
  border-radius: 9999px !important;
  font-size: 0.78rem !important;
  font-weight: 700 !important;
  border: 1px solid !important;
  white-space: nowrap !important;
  background: #ffffff !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.12s ease !important;
}
.chip-nav:active {
  transform: scale(0.95) !important;
}
.chip-nav.chip-materi {
  color: #0369a1 !important;
  border-color: #bae6fd !important;
  background: #f0f9ff !important;
}
.chip-nav.chip-tips {
  color: #92400e !important;
  border-color: #fde68a !important;
  background: #fffbeb !important;
}
.chip-nav.chip-contoh {
  color: #6b21a8 !important;
  border-color: #e9d5ff !important;
  background: #faf5ff !important;
}
.chip-nav.chip-latihan {
  color: #ffffff !important;
  border-color: transparent !important;
  background: linear-gradient(135deg, #059669, #0d9488) !important;
}
`;

fs.writeFileSync(cssPath, tailwindBase + '\n' + newCustomCss.trim() + '\n', 'utf8');
console.log('Successfully updated css/app.css!');
