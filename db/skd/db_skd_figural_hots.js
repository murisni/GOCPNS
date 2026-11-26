/* ==========================================================================
   BANK SOAL TIU FIGURAL SVG BARU (40 SOAL HOTS):
   - 16 Figural Ketidaksamaan / Odd One Out (fig58-ketidaksamaan)
   - 14 Figural Analogi Gambar (fig58-analogi-gambar)
   - 10 Figural Serial Gambar Dua Elemen (fig58-serial-gambar)
   ID seri: SKD-TIU-X5801 .. SKD-TIU-X5840.
   ========================================================================== */
(function () {
  if (typeof window.registerCPNSQuestions !== 'function') return;

  const optSvg = inner => 'IMG:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="90" height="90">'
    + '<rect x="1" y="1" width="68" height="68" rx="8" fill="#ffffff" stroke="#334155" stroke-width="1.6"/>'
    + inner + '</svg>';

  const wrapWide = (w, h, inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">`
    + `<rect x="0" y="0" width="${w}" height="${h}" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>`
    + inner + '</svg>';

  const analogySvg = (a, b, c) => wrapWide(340, 86,
    `<rect x="8" y="8" width="68" height="68" rx="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>${gAt(a, 7, 7)}`
    + `<text x="86" y="48" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#0284c7">:</text>`
    + `<rect x="96" y="8" width="68" height="68" rx="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>${gAt(b, 95, 7)}`
    + `<text x="176" y="48" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#64748b">=</text>`
    + `<rect x="188" y="8" width="68" height="68" rx="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>${gAt(c, 187, 7)}`
    + `<text x="266" y="48" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="#0284c7">:</text>`
    + `<rect x="274" y="8" width="58" height="68" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>`
    + `<text x="303" y="49" text-anchor="middle" font-family="Arial" font-size="22" font-weight="700" fill="#b45309">?</text>`
  );

  const serialSvg = (f1, f2, f3) => wrapWide(340, 86,
    `<rect x="8" y="8" width="68" height="68" rx="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>${gAt(f1, 7, 7)}`
    + `<text x="84" y="48" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#0284c7">→</text>`
    + `<rect x="92" y="8" width="68" height="68" rx="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>${gAt(f2, 91, 7)}`
    + `<text x="168" y="48" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#0284c7">→</text>`
    + `<rect x="176" y="8" width="68" height="68" rx="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>${gAt(f3, 175, 7)}`
    + `<text x="252" y="48" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#0284c7">→</text>`
    + `<rect x="260" y="8" width="70" height="68" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>`
    + `<text x="295" y="49" text-anchor="middle" font-family="Arial" font-size="22" font-weight="700" fill="#b45309">?</text>`
  );

  function gAt(s, dx, dy) { return `<g transform="translate(${dx},${dy})">${s}</g>`; }

  const poly = (n, cx, cy, r, col = '#0f172a', fill = 'none', sw = 2, rot = -Math.PI / 2) => {
    const pts = Array.from({ length: n }, (_, i) => {
      const a = rot + (2 * Math.PI * i) / n;
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="${fill}" stroke="${col}" stroke-width="${sw}"/>`;
  };
  const star = (cx, cy, r = 7, fill = '#0f172a') => {
    const pts = Array.from({ length: 10 }, (_, i) => {
      const rr = i % 2 === 0 ? r : r * 0.44;
      const a = -Math.PI / 2 + (Math.PI * i) / 5;
      return `${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`;
    }).join(' ');
    return `<polygon points="${pts}" fill="${fill}"/>`;
  };
  const arrow = (deg, len = 18, col = '#0f172a', w = 2.6) =>
    `<g transform="translate(35,35) rotate(${deg})"><line x1="0" y1="${len / 2}" x2="0" y2="${-len / 2}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/><polygon points="0,${-len / 2 - 5} -5,${-len / 2 + 4} 5,${-len / 2 + 4}" fill="${col}"/></g>`;
  const rotG = (deg, inner) => `<g transform="rotate(${deg},35,35)">${inner}</g>`;
  const mirrorX = inner => `<g transform="translate(70,0) scale(-1,1)">${inner}</g>`;
  const dot = (x, y, r = 3.6, col = '#dc2626') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}"/>`;
  const dotsRow = (coords, r = 3.5, col = '#0284c7') => coords.map(([x, y]) => dot(x, y, r, col)).join('');

  // Motif huruf F asimetris & bendera untuk uji kiralitas (pencerminan vs rotasi)
  const L_SHAPE = '<path d="M24,16 V52 H46" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="46" cy="52" r="4" fill="#dc2626"/>';
  const FLAG_SHAPE = '<line x1="25" y1="15" x2="25" y2="55" stroke="#0f172a" stroke-width="3.2" stroke-linecap="round"/><polygon points="25,15 50,23 25,31" fill="#0284c7"/>';
  const BENT_CCW = '<path d="M35,35 V17 H50" fill="none" stroke="#0f172a" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><polygon points="55,17 46,12 46,22" fill="#0f172a"/>';
  const BENT_CW = mirrorX(BENT_CCW);

  const ITEMS = [];
  const pushItem = (sub, fam, id, q, optBodies, ans, trick, exp, img = '') => {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const options = optBodies.map((b, i) => `${letters[i]}. ${optSvg(b)}`);
    ITEMS.push([sub, fam, id, q, options, ans, trick, exp, img]);
  };

  /* ==================== 16 FIGURAL KETIDAKSAMAAN (ODD ONE OUT) ==================== */
  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5801',
    'Empat dari lima gambar berikut merupakan hasil rotasi bangun yang sama, sedangkan SATU gambar berbeda (hasil pencerminan). Tentukan gambar yang berbeda tersebut!',
    [rotG(0, L_SHAPE), rotG(90, L_SHAPE), mirrorX(rotG(0, L_SHAPE)), rotG(180, L_SHAPE), rotG(270, L_SHAPE)],
    2,
    'Uji kiralitas! Putar kepala Anda mengikuti garis panjang ke kaki L: 4 gambar membelok berlawanan arah jarum jam menuju titik merah, 1 gambar berbelok sebaliknya (cermin)!',
    'Gambar A, B, D, dan E semuanya adalah huruf L bertitik merah yang diputar 0°, 90°, 180°, dan 270°. Gambar C merupakan hasil pencerminan mendatar (terbalik kiri-kanan), bukan rotasi (Opsi C).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5802',
    'Perhatikan hubungan jumlah sisi bangun datar luar dan jumlah titik di dalamnya. Manakah SATU gambar yang tidak mengikuti aturan empat gambar lainnya?',
    [
      poly(3, 35, 37, 22) + dotsRow([[30, 42], [40, 42]]),
      poly(4, 35, 35, 21, '#0f172a', 'none', 2, Math.PI / 4) + dotsRow([[28, 30], [42, 30], [35, 42]]),
      poly(5, 35, 36, 22) + dotsRow([[28, 29], [42, 29], [28, 42], [42, 42]]),
      poly(6, 35, 35, 22) + dotsRow([[27, 28], [43, 28], [35, 35], [27, 42], [43, 42]]),
      poly(4, 35, 35, 21, '#0f172a', 'none', 2, Math.PI / 4) + dotsRow([[27, 27], [43, 27], [27, 43], [43, 43]])
    ],
    4,
    'Hitung rumus titik = jumlah sisi − 1! Segi-3 (2 titik), Segi-4 (3), Segi-5 (4), Segi-6 (5) — cari yang jumlahnya melenceng!',
    'Empat gambar memenuhi aturan titik = sisi − 1 (A: 3→2; B: 4→3; C: 5→4; D: 6→5). Hanya gambar E memiliki segi-4 dengan 4 titik (sisi = titik), sehingga melanggar pola (Opsi E).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5803',
    'Amati arah belok anak panah yang keluar dari titik pusat. Gambar manakah yang arah putarannya berbeda dari keempat gambar lainnya?',
    [rotG(0, BENT_CCW), rotG(90, BENT_CW), rotG(90, BENT_CCW), rotG(180, BENT_CCW), rotG(270, BENT_CCW)],
    1,
    'Bayangkan berjalan dari titik pusat menuju ujung panah: apakah belokan ujungnya selalu ke KANAN (searah jarum jam) atau ke KIRI?',
    'Pada gambar A, C, D, dan E, garis berujung panah selalu membelok ke arah KANAN (searah jarum jam) terhadap garis pusat. Hanya gambar B yang membelok berlawanan arah (Opsi B).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5804',
    'Tentukan SATU gambar yang hubungan sudut antarkedua anak panahnya tidak sama dengan empat gambar lainnya!',
    [
      rotG(0, '<line x1="18" y1="35" x2="52" y2="35" stroke="#0f172a" stroke-width="2.5"/><line x1="35" y1="18" x2="35" y2="52" stroke="#0284c7" stroke-width="2.5"/><circle cx="35" cy="16" r="3" fill="#0284c7"/><circle cx="54" cy="35" r="3" fill="#0f172a"/>'),
      rotG(45, '<line x1="18" y1="35" x2="52" y2="35" stroke="#0f172a" stroke-width="2.5"/><line x1="35" y1="18" x2="35" y2="52" stroke="#0284c7" stroke-width="2.5"/><circle cx="35" cy="16" r="3" fill="#0284c7"/><circle cx="54" cy="35" r="3" fill="#0f172a"/>'),
      rotG(135, '<line x1="18" y1="35" x2="52" y2="35" stroke="#0f172a" stroke-width="2.5"/><line x1="35" y1="18" x2="35" y2="52" stroke="#0284c7" stroke-width="2.5"/><circle cx="35" cy="16" r="3" fill="#0284c7"/><circle cx="54" cy="35" r="3" fill="#0f172a"/>'),
      '<line x1="14" y1="28" x2="56" y2="28" stroke="#0f172a" stroke-width="2.5"/><line x1="14" y1="42" x2="56" y2="42" stroke="#0284c7" stroke-width="2.5"/><circle cx="56" cy="28" r="3" fill="#0f172a"/><circle cx="14" cy="42" r="3" fill="#0284c7"/>',
      rotG(225, '<line x1="18" y1="35" x2="52" y2="35" stroke="#0f172a" stroke-width="2.5"/><line x1="35" y1="18" x2="35" y2="52" stroke="#0284c7" stroke-width="2.5"/><circle cx="35" cy="16" r="3" fill="#0284c7"/><circle cx="54" cy="35" r="3" fill="#0f172a"/>')
    ],
    3,
    'Cek sudut perpotongan dua garis berujung titik: empat gambar berpotongan TEGAK LURUS (90°), satu gambar justru SEJAJAR!',
    'Gambar A, B, C, dan E masing-masing memiliki dua garis yang berpotongan tegak lurus 90°. Gambar D menampilkan dua garis sejajar yang tidak berpotongan (Opsi D).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5805',
    'Amati posisi dua lingkaran (hitam dan putih bertepi biru) di pojok bujur sangkar. Gambar manakah yang polanya berbeda?',
    [
      '<rect x="15" y="15" width="40" height="40" fill="none" stroke="#334155" stroke-width="2"/><circle cx="22" cy="22" r="4.5" fill="#0f172a"/><circle cx="48" cy="22" r="4.5" fill="#fff" stroke="#0284c7" stroke-width="2"/>',
      '<rect x="15" y="15" width="40" height="40" fill="none" stroke="#334155" stroke-width="2"/><circle cx="22" cy="22" r="4.5" fill="#0f172a"/><circle cx="48" cy="48" r="4.5" fill="#fff" stroke="#0284c7" stroke-width="2"/>',
      '<rect x="15" y="15" width="40" height="40" fill="none" stroke="#334155" stroke-width="2"/><circle cx="48" cy="22" r="4.5" fill="#0f172a"/><circle cx="22" cy="48" r="4.5" fill="#fff" stroke="#0284c7" stroke-width="2"/>',
      '<rect x="15" y="15" width="40" height="40" fill="none" stroke="#334155" stroke-width="2"/><circle cx="48" cy="48" r="4.5" fill="#0f172a"/><circle cx="22" cy="22" r="4.5" fill="#fff" stroke="#0284c7" stroke-width="2"/>',
      '<rect x="15" y="15" width="40" height="40" fill="none" stroke="#334155" stroke-width="2"/><circle cx="22" cy="48" r="4.5" fill="#0f172a"/><circle cx="48" cy="22" r="4.5" fill="#fff" stroke="#0284c7" stroke-width="2"/>'
    ],
    0,
    'Perhatikan diagonal vs bersebelahan! Empat gambar meletakkan titik hitam dan putih di pojok BERSEBERANGAN DIAGONAL!',
    'Pada gambar B, C, D, dan E, lingkaran hitam dan lingkaran putih selalu menempati dua sudut diagonal yang berseberangan. Hanya gambar A menempatkan keduanya sejajar pada satu sisi atas (Opsi A).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5806',
    'Hitung banyak bagian ruang di dalam kotak yang terbentuk oleh garis pembagi. Manakah SATU gambar yang jumlah ruangnya berbeda?',
    [
      '<rect x="13" y="13" width="44" height="44" fill="none" stroke="#0f172a" stroke-width="2"/><line x1="35" y1="13" x2="35" y2="57" stroke="#0284c7" stroke-width="1.8"/><line x1="13" y1="35" x2="57" y2="35" stroke="#0284c7" stroke-width="1.8"/>',
      '<rect x="13" y="13" width="44" height="44" fill="none" stroke="#0f172a" stroke-width="2"/><line x1="13" y1="13" x2="57" y2="57" stroke="#0284c7" stroke-width="1.8"/><line x1="57" y1="13" x2="13" y2="57" stroke="#0284c7" stroke-width="1.8"/>',
      '<rect x="13" y="13" width="44" height="44" fill="none" stroke="#0f172a" stroke-width="2"/><line x1="24" y1="13" x2="24" y2="57" stroke="#0284c7" stroke-width="1.8"/><line x1="35" y1="13" x2="35" y2="57" stroke="#0284c7" stroke-width="1.8"/><line x1="46" y1="13" x2="46" y2="57" stroke="#0284c7" stroke-width="1.8"/>',
      '<rect x="13" y="13" width="44" height="44" fill="none" stroke="#0f172a" stroke-width="2"/><line x1="13" y1="28" x2="57" y2="28" stroke="#0284c7" stroke-width="1.8"/><line x1="13" y1="42" x2="57" y2="42" stroke="#0284c7" stroke-width="1.8"/>',
      '<rect x="13" y="13" width="44" height="44" fill="none" stroke="#0f172a" stroke-width="2"/><line x1="13" y1="24" x2="57" y2="24" stroke="#0284c7" stroke-width="1.8"/><line x1="13" y1="35" x2="57" y2="35" stroke="#0284c7" stroke-width="1.8"/><line x1="13" y1="46" x2="57" y2="46" stroke="#0284c7" stroke-width="1.8"/>'
    ],
    3,
    'Hitung ruang terbagi di dalam persegi (A: 4 kotak, B: 4 segitiga, C: 4 kolom, E: 4 baris) -> cari yang hanya 3 ruang!',
    'Gambar A, B, C, dan E membagi persegi besar tepat menjadi 4 daerah. Gambar D hanya membagi persegi menjadi 3 jalur horizontal (Opsi D).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5807',
    'Empat gambar bendera biru berikut identik jika hanya diputar. Tentukan SATU gambar bendera yang merupakan hasil pencerminan!',
    [rotG(0, FLAG_SHAPE), mirrorX(rotG(0, FLAG_SHAPE)), rotG(90, FLAG_SHAPE), rotG(180, FLAG_SHAPE), rotG(270, FLAG_SHAPE)],
    1,
    'Posisikan diri berdiri di pangkal bawah tiang melihat ke puncak tiang: bendera berkibar ke kanan pada 4 gambar, hanya 1 berkibar ke kiri!',
    'Jika diputar pada bidang datar, A, C, D, dan E sama-sama memiliki bendera mengarah ke sisi kanan terhadap arah tiang ke atas. Hanya B yang berbalik arah karena dicerminkan (Opsi B).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5808',
    'Kelompokkan kelima bangun datar berikut berdasarkan jumlah sisinya. Bangun manakah yang tidak satu kelompok?',
    [
      poly(4, 35, 35, 22, '#0f172a', '#e0f2fe', 2, Math.PI / 4),
      poly(4, 35, 35, 22, '#0f172a', '#e0f2fe', 2, 0),
      poly(6, 35, 35, 22, '#0f172a', '#e0f2fe', 2, 0),
      poly(8, 35, 35, 22, '#0f172a', '#e0f2fe', 2, Math.PI / 8),
      poly(5, 35, 36, 22, '#0f172a', '#e0f2fe', 2, -Math.PI / 2)
    ],
    4,
    'Hitung paritas (genap vs ganjil) jumlah sisi poligon: 4, 4, 6, 8 adalah GENAP, sedangkan satu gambar bersisi GANJIL!',
    'Gambar A (persegi), B (belah ketupat), C (segienam), dan D (segidelapan) seluruhnya bersisi genap (4, 6, 8). Gambar E adalah segilima bersisi ganjil 5 (Opsi E).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5809',
    'Amati posisi titik merah terhadap dua bangun yang saling beririsan. Gambar manakah yang letak titiknya melanggar aturan?',
    [
      '<circle cx="28" cy="35" r="15" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="42" cy="35" r="15" fill="none" stroke="#0284c7" stroke-width="2"/>' + dot(35, 35, 3.8),
      '<rect x="14" y="20" width="28" height="30" fill="none" stroke="#0f172a" stroke-width="2"/><rect x="28" y="20" width="28" height="30" fill="none" stroke="#0284c7" stroke-width="2"/>' + dot(35, 35, 3.8),
      '<circle cx="27" cy="35" r="14" fill="none" stroke="#0f172a" stroke-width="2"/><rect x="30" y="22" width="26" height="26" fill="none" stroke="#0284c7" stroke-width="2"/>' + dot(19, 35, 3.8),
      '<rect x="14" y="22" width="26" height="26" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="43" cy="35" r="14" fill="none" stroke="#0284c7" stroke-width="2"/>' + dot(35, 35, 3.8),
      '<ellipse cx="35" cy="27" rx="18" ry="11" fill="none" stroke="#0f172a" stroke-width="2"/><ellipse cx="35" cy="43" rx="18" ry="11" fill="none" stroke="#0284c7" stroke-width="2"/>' + dot(35, 35, 3.8)
    ],
    2,
    'Cek daerah irisan (tengah dua bangun)! Di empat gambar titik merah berada DI DALAM irisan keduanya, satu gambar melenceng keluar irisan!',
    'Gambar A, B, D, dan E menempatkan titik merah di daerah irisan kedua bangun sekaligus. Pada gambar C, titik merah hanya berada di lingkaran kiri dan di luar persegi biru (Opsi C).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5810',
    'Lingkaran terbagi menjadi 8 sektor sama besar dengan 2 sektor diarsir. Manakah SATU gambar yang posisi dua arsirannya berbeda?',
    [
      '<circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="1.8"/><path d="M35,35 L35,13 A22,22 0 0,1 50.5,19.4 Z" fill="#0284c7"/><path d="M35,35 L50.5,19.4 A22,22 0 0,1 57,35 Z" fill="#0284c7"/><circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="1.8"/>',
      rotG(0, '<circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="1.8"/><path d="M35,35 L35,13 A22,22 0 0,1 50.5,19.4 Z" fill="#0284c7"/><path d="M35,35 L35,57 A22,22 0 0,1 19.4,50.5 Z" fill="#0284c7"/>'),
      rotG(45, '<circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="1.8"/><path d="M35,35 L35,13 A22,22 0 0,1 50.5,19.4 Z" fill="#0284c7"/><path d="M35,35 L35,57 A22,22 0 0,1 19.4,50.5 Z" fill="#0284c7"/>'),
      rotG(90, '<circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="1.8"/><path d="M35,35 L35,13 A22,22 0 0,1 50.5,19.4 Z" fill="#0284c7"/><path d="M35,35 L35,57 A22,22 0 0,1 19.4,50.5 Z" fill="#0284c7"/>'),
      rotG(135, '<circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="1.8"/><path d="M35,35 L35,13 A22,22 0 0,1 50.5,19.4 Z" fill="#0284c7"/><path d="M35,35 L35,57 A22,22 0 0,1 19.4,50.5 Z" fill="#0284c7"/>')
    ],
    0,
    'Lihat letak dua irisan kue (juring): pada 4 gambar keduanya SALING BERTOLAK BELAKANG (180°), sedangkan pada 1 gambar keduanya BERDAMPINGAN!',
    'Pada gambar B, C, D, dan E, kedua sektor biru saling bertolak belakang simetris melewati titik pusat (180°). Pada gambar A, kedua sektor bersebelahan membentuk satu kuadran penuh 90° (Opsi A).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5811',
    'Perhatikan besar sudut yang dibentuk dua jarum pada masing-masing gambar. Gambar manakah yang berbeda jenis sudutnya?',
    [
      '<circle cx="35" cy="35" r="3" fill="#0f172a"/><line x1="35" y1="35" x2="35" y2="14" stroke="#0f172a" stroke-width="2.8" stroke-linecap="round"/><line x1="35" y1="35" x2="50" y2="21" stroke="#dc2626" stroke-width="2.8" stroke-linecap="round"/>',
      '<circle cx="35" cy="35" r="3" fill="#0f172a"/><line x1="35" y1="35" x2="55" y2="35" stroke="#0f172a" stroke-width="2.8" stroke-linecap="round"/><line x1="35" y1="35" x2="49" y2="51" stroke="#dc2626" stroke-width="2.8" stroke-linecap="round"/>',
      '<circle cx="35" cy="35" r="3" fill="#0f172a"/><line x1="35" y1="35" x2="35" y2="55" stroke="#0f172a" stroke-width="2.8" stroke-linecap="round"/><line x1="35" y1="35" x2="19" y2="48" stroke="#dc2626" stroke-width="2.8" stroke-linecap="round"/>',
      '<circle cx="35" cy="35" r="3" fill="#0f172a"/><line x1="35" y1="35" x2="35" y2="14" stroke="#0f172a" stroke-width="2.8" stroke-linecap="round"/><line x1="35" y1="35" x2="52" y2="50" stroke="#dc2626" stroke-width="2.8" stroke-linecap="round"/>',
      '<circle cx="35" cy="35" r="3" fill="#0f172a"/><line x1="35" y1="35" x2="15" y2="35" stroke="#0f172a" stroke-width="2.8" stroke-linecap="round"/><line x1="35" y1="35" x2="21" y2="19" stroke="#dc2626" stroke-width="2.8" stroke-linecap="round"/>'
    ],
    3,
    'Bandingkan sudut kedua jarum terhadap sudut siku-siku 90°: empat gambar bersudut LANCIP (~45°), satu gambar bersudut TUMPUL (> 90°)!',
    'Gambar A, B, C, dan E membentuk sudut lancip sekitar 45°. Hanya gambar D membentuk sudut tumpul 135° antara jarum hitam (jam 12) dan jarum merah (jam 4.30) (Opsi D).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5812',
    'Berdasarkan keberadaan sumbu simetri lipat pada gambar, manakah SATU gambar yang tidak memiliki simetri lipat sama sekali?',
    [
      '<polygon points="35,14 16,52 54,52" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>',
      '<polygon points="18,16 18,52 54,52" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>',
      '<path d="M35,14 L52,32 H42 V54 H28 V32 H18 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>',
      '<polygon points="24,18 46,18 54,50 16,50" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>',
      '<path d="M29,15 H41 V29 H55 V41 H41 V55 H29 V41 H15 V29 H29 Z" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>'
    ],
    1,
    'Uji garis lipat tengah: 4 bangun bisa dilipat setangkup persis (segitiga sama kaki, panah, trapesium sama kaki, tanda tambah), hanya 1 segitiga tak sama kaki?',
    'Wait cek gambar B: segitiga siku-siku (18,16)-(18,52)-(54,52) bersisi siku sama kaki (panjang 36 dan 36) sehingga punya simetri lipat miring! Pastikan sisi tegak & mendatar B BERBEDA PANJANG (mis. tinggi 38, alas 22) agar murni asimetris! Let us check option B below ->'
  );
  // Make X5812 Option B clearly scalene asymmetric triangle (no axis of symmetry!)
  ITEMS[ITEMS.length - 1][4][1] = 'B. ' + optSvg('<polygon points="14,18 22,52 56,42" fill="#e0f2fe" stroke="#0f172a" stroke-width="2"/>');
  ITEMS[ITEMS.length - 1][7] = 'Gambar A (segitiga sama kaki), C (panah atas), D (trapesium sama kaki), dan E (tanda plus) semuanya memiliki sumbu simetri lipat. Hanya gambar B (segitiga sembarang) tidak memiliki satu pun sumbu simetri lipat (Opsi B).';

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5813',
    'Amati jumlah titik pertemuan antar-lingkaran pada kelima gambar. Gambar manakah yang hubungannya berbeda?',
    [
      '<circle cx="24" cy="35" r="13" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="50" cy="35" r="13" fill="none" stroke="#0284c7" stroke-width="2"/>',
      '<circle cx="35" cy="24" r="13" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="35" cy="50" r="13" fill="none" stroke="#0284c7" stroke-width="2"/>',
      '<circle cx="26" cy="26" r="13" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="44.4" cy="44.4" r="13" fill="none" stroke="#0284c7" stroke-width="2"/>',
      '<circle cx="44.4" cy="26" r="13" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="26" cy="44.4" r="13" fill="none" stroke="#0284c7" stroke-width="2"/>',
      '<circle cx="28" cy="35" r="15" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="42" cy="35" r="15" fill="none" stroke="#0284c7" stroke-width="2"/>'
    ],
    4,
    'Hitung jarak pusat! Pada 4 gambar kedua lingkaran SALING BERSINGGUNGAN (1 titik sentuh), 1 gambar berpotongan (2 titik potong)!',
    'Gambar A, B, C, dan D memperlihatkan dua lingkaran r=13 yang saling bersinggungan di tepat satu titik (jarak pusat = 2r = 26). Hanya gambar E kedua lingkarannya saling memotong di dua titik (Opsi E).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5814',
    'Bandingkan banyaknya wajik biru dengan banyaknya garis mendatar hitam di bawahnya. Gambar manakah yang tidak sesuai aturan?',
    [
      '<polygon points="26,20 31,26 26,32 21,26" fill="#0284c7"/><polygon points="44,20 49,26 44,32 39,26" fill="#0284c7"/><line x1="18" y1="42" x2="52" y2="42" stroke="#0f172a" stroke-width="2.2"/><line x1="18" y1="50" x2="52" y2="50" stroke="#0f172a" stroke-width="2.2"/>',
      '<polygon points="20,20 25,26 20,32 15,26" fill="#0284c7"/><polygon points="35,20 40,26 35,32 30,26" fill="#0284c7"/><polygon points="50,20 55,26 50,32 45,26" fill="#0284c7"/><line x1="18" y1="40" x2="52" y2="40" stroke="#0f172a" stroke-width="2"/><line x1="18" y1="47" x2="52" y2="47" stroke="#0f172a" stroke-width="2"/><line x1="18" y1="54" x2="52" y2="54" stroke="#0f172a" stroke-width="2"/>',
      '<polygon points="17,20 21,26 17,32 13,26" fill="#0284c7"/><polygon points="29,20 33,26 29,32 25,26" fill="#0284c7"/><polygon points="41,20 45,26 41,32 37,26" fill="#0284c7"/><polygon points="53,20 57,26 53,32 49,26" fill="#0284c7"/><line x1="18" y1="40" x2="52" y2="40" stroke="#0f172a" stroke-width="2"/><line x1="18" y1="47" x2="52" y2="47" stroke="#0f172a" stroke-width="2"/><line x1="18" y1="54" x2="52" y2="54" stroke="#0f172a" stroke-width="2"/>',
      '<polygon points="35,20 40,26 35,32 30,26" fill="#0284c7"/><line x1="18" y1="45" x2="52" y2="45" stroke="#0f172a" stroke-width="2.2"/>',
      '<polygon points="17,20 21,26 17,32 13,26" fill="#0284c7"/><polygon points="29,20 33,26 29,32 25,26" fill="#0284c7"/><polygon points="41,20 45,26 41,32 37,26" fill="#0284c7"/><polygon points="53,20 57,26 53,32 49,26" fill="#0284c7"/><line x1="18" y1="38" x2="52" y2="38" stroke="#0f172a" stroke-width="1.8"/><line x1="18" y1="44" x2="52" y2="44" stroke="#0f172a" stroke-width="1.8"/><line x1="18" y1="50" x2="52" y2="50" stroke="#0f172a" stroke-width="1.8"/><line x1="18" y1="56" x2="52" y2="56" stroke="#0f172a" stroke-width="1.8"/>'
    ],
    2,
    'Cocokkan pasangan jumlah (wajik, garis): (2,2), (3,3), (1,1), (4,4) -> temukan yang tidak berimbang!',
    'Empat gambar mempertahankan kesamaan jumlah wajik dan garis (A: 2=2, B: 3=3, D: 1=1, E: 4=4). Gambar C mempunyai 4 wajik biru tetapi hanya 3 garis mendatar (Opsi C).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5815',
    'Perhatikan letak titik merah di samping anak panah bila dilihat searah arah panah bergerak maju. Manakah gambar yang posisinya menyimpang?',
    [
      arrow(0) + dot(22, 35, 4),
      arrow(0) + dot(48, 35, 4),
      arrow(90) + dot(35, 48, 4),
      arrow(180) + dot(22, 35, 4),
      arrow(270) + dot(35, 22, 4)
    ],
    0,
    'Putar kertas khayal Anda menghadap ujung panah! Pada 4 gambar titik selalu berada di sisi KANAN arah panah, satu gambar justru di sisi KIRI!',
    'Menghadap ke arah anak panah: B (ke atas → titik di kanan), C (ke kanan → titik di kanan), D (ke bawah → titik di kanan), dan E (ke kiri → titik di kanan). Gambar A menaruh titik di sisi KIRI panah (Opsi A).'
  );

  pushItem('Figural - Ketidaksamaan (Odd One Out)', 'fig58-ketidaksamaan', 'SKD-TIU-X5816',
    'Amati kesesuaian jenis bangun luar dan bangun di dalamnya. Gambar manakah yang melanggar pola?',
    [
      '<rect x="14" y="14" width="42" height="42" fill="none" stroke="#0f172a" stroke-width="2"/><rect x="25" y="25" width="20" height="20" fill="#0284c7"/>',
      '<circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="2"/><circle cx="35" cy="35" r="10" fill="#0284c7"/>',
      poly(3, 35, 38, 24, '#0f172a', 'none', 2) + poly(3, 35, 41, 11, '#0284c7', '#0284c7', 1.5),
      poly(3, 35, 38, 24, '#0f172a', 'none', 2) + '<circle cx="35" cy="40" r="8" fill="#0284c7"/>',
      poly(4, 35, 35, 22, '#0f172a', 'none', 2, 0) + poly(4, 35, 35, 10, '#0284c7', '#0284c7', 1.5, 0)
    ],
    3,
    'Empat gambar menempatkan bangun kecil di dalam yang BENTUKNYA IDENTIK dengan bangun luar!',
    'Pada gambar A (persegi dalam persegi), B (lingkaran dalam lingkaran), C (segitiga dalam segitiga), dan E (wajik dalam wajik), bangun dalam dan luar sebangun identik. Hanya gambar D berisi lingkaran di dalam segitiga (Opsi D).'
  );

  /* ==================== 14 FIGURAL ANALOGI GAMBAR ==================== */
  const triUpWhite = poly(3, 35, 37, 19, '#0f172a', '#ffffff', 2);
  const triDnBlack = poly(3, 35, 33, 19, '#0f172a', '#0f172a', 2, Math.PI / 2);
  const pentUpWhite = poly(5, 35, 36, 19, '#0f172a', '#ffffff', 2);
  const pentDnBlack = poly(5, 35, 34, 19, '#0f172a', '#0f172a', 2, Math.PI / 2);
  const pentDnWhite = poly(5, 35, 34, 19, '#0f172a', '#ffffff', 2, Math.PI / 2);

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5817',
    'Amati transformasi pasangan pertama di bawah ini (kiri → kanan), lalu terapkan aturan yang sama untuk menentukan gambar pengganti tanda "?"!',
    [
      pentDnWhite + dot(35, 13, 3.2, '#dc2626'),
      pentDnBlack + dot(35, 57, 3.2, '#dc2626'),
      pentUpWhite + dot(35, 57, 3.2, '#dc2626'),
      poly(5, 35, 34, 19, '#0f172a', '#0f172a', 2, -Math.PI / 2) + dot(35, 13, 3.2, '#dc2626'),
      pentDnBlack + dot(35, 13, 3.2, '#dc2626')
    ],
    1,
    'Dua perubahan serentak: (1) bangun diputar 180° (terbalik atas-bawah + titik ikut pindah ke bawah), (2) warna bangun dibalik dari PUTIH menjadi HITAM!',
    'Pada pasangan pertama, segitiga putih menghadap atas bertitik atas diputar 180° (menghadap bawah bertitik bawah) dan dihitamkan. Menerapkan aturan sama pada segilima putih menghasilkan segilima hitam menghadap bawah dengan titik di bawah (Opsi B).',
    analogySvg(triUpWhite + dot(35, 13, 3.2, '#dc2626'), triDnBlack + dot(35, 57, 3.2, '#dc2626'), pentUpWhite + dot(35, 13, 3.2, '#dc2626'))
  );

  const sqOut = '<rect x="14" y="14" width="42" height="42" fill="none" stroke="#0f172a" stroke-width="2"/>';
  const sqIn = '<rect x="26" y="26" width="18" height="18" fill="#0284c7"/>';
  const cirOut = '<circle cx="35" cy="35" r="22" fill="none" stroke="#0f172a" stroke-width="2"/>';
  const cirIn = '<circle cx="35" cy="35" r="9" fill="#0284c7"/>';
  const diaOut = poly(4, 35, 35, 23, '#0f172a', 'none', 2, 0);
  const diaIn = poly(4, 35, 35, 10, '#0284c7', '#0284c7', 1.5, 0);
  const triOut = poly(3, 35, 38, 24, '#0f172a', 'none', 2);
  const triIn = poly(3, 35, 40, 10, '#0284c7', '#0284c7', 1.5);

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5818',
    'Tentukan pasangan gambar yang mengikuti aturan pertukaran bangun luar dan dalam pada contoh pertama!',
    [
      diaOut + cirIn,
      triOut + sqIn,
      diaOut + triIn,
      diaOut + sqIn,
      sqOut + triIn
    ],
    3,
    'Aturan tukar peran [Luar A + Dalam B] → [Luar B + Dalam A] dengan isi warna biru berpindah ke bangun yang masuk ke dalam!',
    'Lingkaran luar + segitiga dalam berubah menjadi segitiga luar + lingkaran dalam. Maka persegi luar + wajik dalam berubah menjadi WAJIK luar + PERSEGI dalam biru (Opsi D).',
    analogySvg(cirOut + triIn, triOut + cirIn, sqOut + diaIn)
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5819',
    'Perhatikan perubahan jumlah sisi poligon dan banyak garis vertikal di tengah pada contoh pertama, lalu tentukan pengganti tanda "?"!',
    [
      poly(6, 35, 35, 22) + '<line x1="25" y1="24" x2="25" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="31" y1="24" x2="31" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="39" y1="24" x2="39" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="45" y1="24" x2="45" y2="46" stroke="#0284c7" stroke-width="1.8"/>',
      poly(6, 35, 35, 22) + '<line x1="27" y1="24" x2="27" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="35" y1="24" x2="35" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="43" y1="24" x2="43" y2="46" stroke="#0284c7" stroke-width="1.8"/>',
      poly(5, 35, 35, 22) + '<line x1="25" y1="24" x2="25" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="31" y1="24" x2="31" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="39" y1="24" x2="39" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="45" y1="24" x2="45" y2="46" stroke="#0284c7" stroke-width="1.8"/>',
      poly(6, 35, 35, 22) + '<line x1="30" y1="24" x2="30" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="40" y1="24" x2="40" y2="46" stroke="#0284c7" stroke-width="1.8"/>',
      poly(8, 35, 35, 22) + '<line x1="25" y1="24" x2="25" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="31" y1="24" x2="31" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="39" y1="24" x2="39" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="45" y1="24" x2="45" y2="46" stroke="#0284c7" stroke-width="1.8"/>'
    ],
    0,
    'Sisi bangun bertambah +1 dan garis biru di dalam bertambah +1! Segi-5 dengan 3 garis → Segi-6 dengan 4 garis!',
    'Segitiga (1 garis) berubah menjadi persegi (2 garis): sisi bertambah +1 dan garis dalam +1. Diterapkan pada segilima (3 garis), hasilnya adalah segienam dengan 4 garis vertikal (Opsi A).',
    analogySvg(
      poly(3, 35, 38, 22) + '<line x1="35" y1="28" x2="35" y2="48" stroke="#0284c7" stroke-width="2"/>',
      poly(4, 35, 35, 22, '#0f172a', 'none', 2, Math.PI / 4) + '<line x1="30" y1="25" x2="30" y2="45" stroke="#0284c7" stroke-width="2"/><line x1="40" y1="25" x2="40" y2="45" stroke="#0284c7" stroke-width="2"/>',
      poly(5, 35, 36, 22) + '<line x1="27" y1="25" x2="27" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="35" y1="25" x2="35" y2="46" stroke="#0284c7" stroke-width="1.8"/><line x1="43" y1="25" x2="43" y2="46" stroke="#0284c7" stroke-width="1.8"/>'
    )
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5820',
    'Cermati pencerminan bentuk dan perubahan warna titik pada pasangan pertama. Gambar mana yang melengkapi tanda "?"?',
    [
      mirrorX(FLAG_SHAPE) + dot(18, 52, 4, '#dc2626'),
      FLAG_SHAPE + dot(52, 52, 4, '#0284c7'),
      mirrorX(FLAG_SHAPE) + dot(52, 52, 4, '#0284c7'),
      mirrorX(FLAG_SHAPE) + dot(18, 52, 4, '#0284c7'),
      FLAG_SHAPE + dot(18, 52, 4, '#0284c7')
    ],
    2,
    'Lakukan pencerminan mendatar (kiri ↔ kanan ikut memindahkan posisi titik!) dan ubah warna titik dari MERAH menjadi BIRU!',
    'Huruf L ke kanan + titik merah kiri-bawah dicerminkan horizontal menjadi L ke kiri + titik biru kanan-bawah. Pencerminan bendera menghadap kanan + titik merah kiri-bawah menghasilkan bendera menghadap kiri dengan titik BIRU di kanan-bawah (Opsi C).',
    analogySvg(L_SHAPE + '<circle cx="18" cy="52" r="4" fill="#dc2626"/>', mirrorX('<path d="M24,16 V52 H46" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/><circle cx="46" cy="52" r="4" fill="#0f172a"/>') + '<circle cx="52" cy="52" r="4" fill="#0284c7"/>', FLAG_SHAPE + '<circle cx="18" cy="52" r="4" fill="#dc2626"/>')
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5821',
    'Perhatikan bagaimana satu bangun utuh dibelah dan dipisah menjadi dua bagian sejajar. Gambar mana yang tepat menggantikan "?"?',
    [
      '<path d="M35,15 A20,20 0 0,0 35,55 Z" fill="#0284c7"/><path d="M40,15 A20,20 0 0,1 40,55 Z" fill="#0284c7"/>',
      '<path d="M15,31 A20,20 0 0,1 55,31 Z" fill="#0284c7"/><path d="M15,40 A20,20 0 0,0 55,40 Z" fill="#0284c7"/>',
      '<circle cx="24" cy="35" r="10" fill="#0284c7"/><circle cx="46" cy="35" r="10" fill="#0284c7"/>',
      '<path d="M30,15 A20,20 0 0,0 30,55 Z" fill="#0284c7"/><path d="M40,15 A20,20 0 0,1 40,55 Z" fill="#0284c7"/>',
      '<rect x="16" y="18" width="14" height="34" fill="#0284c7"/><rect x="40" y="18" width="14" height="34" fill="#0284c7"/>'
    ],
    3,
    'Bangun dibelah tepat oleh GARIS VERTIKAL menjadi belahan KIRI dan belahan KANAN yang agak renggang!',
    'Satu persegi penuh dibelah vertikal menjadi dua potongan persegi panjang berdampingan kiri-kanan. Maka satu lingkaran penuh dibelah vertikal menjadi dua setengah lingkaran saling memunggungi kiri-kanan dengan celah renggang di tengah (Opsi D).',
    analogySvg('<rect x="18" y="18" width="34" height="34" fill="#0284c7"/>', '<rect x="16" y="18" width="14" height="34" fill="#0284c7"/><rect x="40" y="18" width="14" height="34" fill="#0284c7"/>', '<circle cx="35" cy="35" r="19" fill="#0284c7"/>')
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5822',
    'Amati transformasi dari kotak satu ke kotak dua pada contoh atas, lalu pilih gambar yang tepat untuk "?"!',
    [
      '<circle cx="35" cy="35" r="20" fill="none" stroke="#0f172a" stroke-width="2"/>' + dotsRow([[28, 28], [42, 28], [28, 42], [42, 42]]),
      '<circle cx="35" cy="35" r="20" fill="none" stroke="#0f172a" stroke-width="2"/>' + dotsRow([[35, 22], [23, 32], [47, 32], [28, 46], [42, 46]]),
      poly(5, 35, 36, 20) + dotsRow([[35, 28], [29, 41], [41, 41]]),
      '<circle cx="35" cy="35" r="20" fill="none" stroke="#0f172a" stroke-width="2"/>' + dotsRow([[35, 25], [27, 41], [43, 41]]),
      '<circle cx="35" cy="35" r="20" fill="none" stroke="#0f172a" stroke-width="2"/>' + dotsRow([[25, 25], [45, 25], [35, 35], [25, 45], [45, 45], [35, 19]])
    ],
    1,
    'Aturan konversi: poligon berjumlah sisi n berubah menjadi LINGKARAN berisi n titik biru!',
    'Segitiga (3 sisi) berubah menjadi lingkaran berisi 3 titik biru. Dengan aturan identik, segilima (5 sisi) berubah menjadi lingkaran berisi 5 titik biru (Opsi B).',
    analogySvg(poly(3, 35, 38, 22), '<circle cx="35" cy="35" r="20" fill="none" stroke="#0f172a" stroke-width="2"/>' + dotsRow([[35, 26], [26, 42], [44, 42]]), poly(5, 35, 36, 22))
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5823',
    'Tentukan analogi gambar dari penguraian bangun tertutup menjadi garis terpisah sesuai pola pertama!',
    [
      '<line x1="16" y1="22" x2="54" y2="22" stroke="#0f172a" stroke-width="3"/><line x1="16" y1="35" x2="54" y2="35" stroke="#0f172a" stroke-width="3"/><line x1="16" y1="48" x2="54" y2="48" stroke="#0f172a" stroke-width="3"/>',
      '<line x1="22" y1="16" x2="22" y2="54" stroke="#0f172a" stroke-width="3"/><line x1="35" y1="16" x2="35" y2="54" stroke="#0f172a" stroke-width="3"/><line x1="48" y1="16" x2="48" y2="54" stroke="#0f172a" stroke-width="3"/>',
      '<line x1="16" y1="20" x2="54" y2="20" stroke="#0f172a" stroke-width="3"/><line x1="16" y1="30" x2="54" y2="30" stroke="#0f172a" stroke-width="3"/><line x1="16" y1="40" x2="54" y2="40" stroke="#0f172a" stroke-width="3"/><line x1="16" y1="50" x2="54" y2="50" stroke="#0f172a" stroke-width="3"/>',
      '<line x1="28" y1="16" x2="28" y2="54" stroke="#0f172a" stroke-width="3"/><line x1="42" y1="16" x2="42" y2="54" stroke="#0f172a" stroke-width="3"/>',
      '<line x1="16" y1="28" x2="54" y2="28" stroke="#0f172a" stroke-width="3"/><line x1="16" y1="42" x2="54" y2="42" stroke="#0f172a" stroke-width="3"/>'
    ],
    0,
    'Jumlah sisi bangun (4 atau 3) diurai menjadi ruas garis HORIZONTAL sejumlah sisinya!',
    'Persegi (4 sisi) diurai menjadi 4 ruas garis mendatar sejajar. Maka segitiga (3 sisi) diurai menjadi tepat 3 ruas garis mendatar sejajar (Opsi A).',
    analogySvg(poly(4, 35, 35, 20, '#0f172a', 'none', 2.2, Math.PI / 4), '<line x1="16" y1="19" x2="54" y2="19" stroke="#0f172a" stroke-width="2.5"/><line x1="16" y1="30" x2="54" y2="30" stroke="#0f172a" stroke-width="2.5"/><line x1="16" y1="41" x2="54" y2="41" stroke="#0f172a" stroke-width="2.5"/><line x1="16" y1="52" x2="54" y2="52" stroke="#0f172a" stroke-width="2.5"/>', poly(3, 35, 38, 22, '#0f172a', 'none', 2.2))
  );

  const arrowDot = (deg, fill, shp = 'c') => {
    const tail = shp === 'c'
      ? `<circle cx="0" cy="14" r="5" fill="${fill}" stroke="#0f172a" stroke-width="1.8"/>`
      : `<rect x="-5" y="9" width="10" height="10" fill="${fill}" stroke="#0f172a" stroke-width="1.8"/>`;
    return `<g transform="translate(35,35) rotate(${deg})"><line x1="0" y1="9" x2="0" y2="-13" stroke="#0f172a" stroke-width="2.5"/><polygon points="0,-20 -5,-10 5,-10" fill="#0f172a"/>${tail}</g>`;
  };

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5824',
    'Tentukan hasil rotasi dan pengisian pangkal anak panah berdasarkan contoh hubungan pertama!',
    [
      arrowDot(225, '#ffffff', 's'),
      arrowDot(135, '#0f172a', 's'),
      arrowDot(225, '#0f172a', 's'),
      arrowDot(315, '#0f172a', 's'),
      arrowDot(225, '#0f172a', 'c')
    ],
    2,
    'Arah panah berputar +135° searah jarum jam (↑ ke ↘, maka → ke ↙!), dan pangkal putih berubah penuh HITAM!',
    'Panah ke atas (0°) berputar +135° searah jarum jam menjadi serong kanan-bawah (135°) dan lingkaran pangkal terisi hitam. Diterapkan pada panah kanan (90° + 135° = 225° ke kiri-bawah) dengan pangkal kotak yang ikut terisi hitam (Opsi C).',
    analogySvg(arrowDot(0, '#ffffff', 'c'), arrowDot(135, '#0f172a', 'c'), arrowDot(90, '#ffffff', 's'))
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5825',
    'Amati apa yang terjadi pada bingkai luar dan objek di dalam pada pasangan gambar pertama!',
    [
      '<g transform="translate(-11,0)">' + arrow(0, 14) + '</g><g transform="translate(11,0)">' + arrow(0, 14) + '</g>',
      '<g transform="translate(-11,0)">' + arrow(180, 14) + '</g><g transform="translate(11,0)">' + arrow(180, 14) + '</g>',
      cirOut + '<g transform="translate(-9,0)">' + arrow(0, 11) + '</g><g transform="translate(9,0)">' + arrow(0, 11) + '</g>',
      arrow(0, 18),
      '<g transform="translate(0,-10)">' + arrow(90, 14) + '</g><g transform="translate(0,10)">' + arrow(90, 14) + '</g>'
    ],
    0,
    'Hilangkan bingkai luar, lalu GANDAKAN objek dalamnya menjadi 2 buah berjajar horizontal dengan arah yang sama!',
    'Persegi pembungkus dihilangkan dan 1 bintang di tengah digandakan menjadi 2 bintang bersebelahan. Lingkaran luar pembungkus 1 panah ↑ dihilangkan dan panah digandakan menjadi 2 panah ↑ berdampingan (Opsi A).',
    analogySvg(sqOut + star(35, 35, 9, '#0284c7'), star(23, 35, 9, '#0284c7') + star(47, 35, 9, '#0284c7'), cirOut + arrow(0, 14))
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5826',
    'Tentukan gambar pengisi tanda "?" dengan mengikuti transformasi ukuran, rotasi, dan banyak elemen pada pasangan pertama!',
    [
      '<polygon points="15,24 27,20 27,28" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/><polygon points="15,46 27,42 27,50" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>',
      '<polygon points="50,24 38,19 38,29" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/><polygon points="50,46 38,41 38,51" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>',
      '<polygon points="44,24 32,19 32,29" fill="#0f172a"/><polygon points="44,46 32,41 32,51" fill="#0f172a"/>',
      '<polygon points="35,16 29,28 41,28" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/><polygon points="35,40 29,52 41,52" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>',
      '<polygon points="50,24 38,19 38,29" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>'
    ],
    1,
    'Tiga aturan: (1) jumlah jadi 2 bertumpuk, (2) diputar +90° searah jarum jam, (3) warna HITAM berubah menjadi PUTIH berbingkai!',
    '1 batang vertikal hitam berubah menjadi 2 batang horizontal putih (diputar 90° CW + jadi dua + putih). Maka 1 segitiga lancip hitam mengarah ke atas (↑) berubah menjadi 2 segitiga putih bertumpuk mengarah ke KANAN (→) (Opsi B).',
    analogySvg('<rect x="31" y="16" width="8" height="38" fill="#0f172a"/>', '<rect x="16" y="21" width="38" height="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/><rect x="16" y="41" width="38" height="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.8"/>', '<polygon points="35,17 27,51 43,51" fill="#0f172a"/>')
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5827',
    'Amati bagaimana objek tunggal di pusat pecah berpindah ke sudut bingkai pada pasangan pertama!',
    [
      poly(4, 22, 22, 6, '#0284c7', '#0284c7', 1, 0) + poly(4, 48, 22, 6, '#0284c7', '#0284c7', 1, 0) + poly(4, 22, 48, 6, '#0284c7', '#0284c7', 1, 0) + poly(4, 48, 48, 6, '#0284c7', '#0284c7', 1, 0),
      sqOut + poly(4, 35, 35, 11, '#0284c7', '#0284c7', 1, 0),
      sqOut + poly(4, 22, 22, 5.5, '#0284c7', '#0284c7', 1, 0) + poly(4, 48, 22, 5.5, '#0284c7', '#0284c7', 1, 0) + poly(4, 22, 48, 5.5, '#0284c7', '#0284c7', 1, 0) + poly(4, 48, 48, 5.5, '#0284c7', '#0284c7', 1, 0),
      sqOut + poly(4, 35, 22, 5.5, '#0284c7', '#0284c7', 1, 0) + poly(4, 35, 48, 5.5, '#0284c7', '#0284c7', 1, 0),
      cirOut + poly(4, 24, 24, 5, '#0284c7', '#0284c7', 1, 0) + poly(4, 46, 24, 5, '#0284c7', '#0284c7', 1, 0) + poly(4, 24, 46, 5, '#0284c7', '#0284c7', 1, 0) + poly(4, 46, 46, 5, '#0284c7', '#0284c7', 1, 0)
    ],
    2,
    'Bingkai persegi tetap! Satu objek pusat berpecah mengecil menjadi 4 objek identik di empat pojok bagian dalam!',
    'Satu lingkaran biru di tengah bingkai persegi pecah menjadi 4 lingkaran kecil di 4 sudut bingkai persegi yang sama. Maka 1 wajik biru di tengah bingkai persegi menjadi 4 wajik kecil di 4 sudut bingkai persegi (Opsi C).',
    analogySvg(sqOut + '<circle cx="35" cy="35" r="10" fill="#0284c7"/>', sqOut + dotsRow([[22, 22], [48, 22], [22, 48], [48, 48]], 4.8, '#0284c7'), sqOut + poly(4, 35, 35, 11, '#0284c7', '#0284c7', 1, 0))
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5828',
    'Amati bagaimana pola garis pemotong memecah bangun utuh menjadi 4 bagian terpisah pada pasangan pertama!',
    [
      '<path d="M32,32 L17,17 A21,21 0 0,1 47,17 Z" fill="#0284c7"/><path d="M38,32 L53,17 A21,21 0 0,1 53,47 Z" fill="#0284c7"/><path d="M38,38 L53,53 A21,21 0 0,1 23,53 Z" fill="#0284c7"/><path d="M32,38 L17,53 A21,21 0 0,1 17,23 Z" fill="#0284c7"/>',
      '<rect x="17" y="17" width="15" height="15" fill="#0284c7"/><rect x="38" y="17" width="15" height="15" fill="#0284c7"/><rect x="17" y="38" width="15" height="15" fill="#0284c7"/><rect x="38" y="38" width="15" height="15" fill="#0284c7"/>',
      '<path d="M33,33 L33,14 A19,19 0 0,0 14,33 Z" fill="#0284c7"/><path d="M37,33 L56,33 A19,19 0 0,0 37,14 Z" fill="#0284c7"/><path d="M33,37 L14,37 A19,19 0 0,0 33,56 Z" fill="#0284c7"/><path d="M37,37 L37,56 A19,19 0 0,0 56,37 Z" fill="#0284c7"/>',
      '<circle cx="24" cy="24" r="8" fill="#0284c7"/><circle cx="46" cy="24" r="8" fill="#0284c7"/><circle cx="24" cy="46" r="8" fill="#0284c7"/><circle cx="46" cy="46" r="8" fill="#0284c7"/>',
      '<circle cx="35" cy="35" r="20" fill="#0284c7"/><line x1="17" y1="17" x2="53" y2="53" stroke="#fff" stroke-width="3"/><line x1="53" y1="17" x2="17" y2="53" stroke="#fff" stroke-width="3"/>'
    ],
    0,
    'Pemotong × memotong lingkaran menjadi 4 juring kuadran di posisi ATAS, KANAN, BAWAH, KIRI yang renggang (bukan + seperti contoh pertama)!',
    'Persegi dipotong garis + menjadi 4 kotak kecil renggang sesuai garis potongnya. Lingkaran dipotong garis diagonal × memisahkan diri menjadi 4 juring di sisi atas, kanan, bawah, dan kiri (Opsi A).',
    analogySvg(
      '<rect x="17" y="17" width="36" height="36" fill="#0284c7"/><line x1="35" y1="15" x2="35" y2="55" stroke="#fff" stroke-width="2.5"/><line x1="15" y1="35" x2="55" y2="35" stroke="#fff" stroke-width="2.5"/>',
      '<rect x="16" y="16" width="16" height="16" fill="#0284c7"/><rect x="38" y="16" width="16" height="16" fill="#0284c7"/><rect x="16" y="38" width="16" height="16" fill="#0284c7"/><rect x="38" y="38" width="16" height="16" fill="#0284c7"/>',
      '<circle cx="35" cy="35" r="20" fill="#0284c7"/><line x1="17" y1="17" x2="53" y2="53" stroke="#fff" stroke-width="2.2"/><line x1="53" y1="17" x2="17" y2="53" stroke="#fff" stroke-width="2.2"/>'
    )
  );

  const T_TOP = '<path d="M22,26 H48 M35,26 V54" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>';
  const T_BOT = '<path d="M22,44 H48 M35,16 V44" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>';
  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5829',
    'Perhatikan perubahan posisi vertikal, jumlah titik kecil, dan arah huruf/panah pada pasangan pertama!',
    [
      arrow(180, 14) + dot(27, 57, 3.2, '#dc2626') + dot(43, 57, 3.2, '#dc2626'),
      arrow(0, 14) + dot(27, 13, 3.2, '#dc2626') + dot(43, 13, 3.2, '#dc2626'),
      arrow(180, 14) + dot(35, 57, 3.2, '#dc2626'),
      arrow(180, 14) + dot(27, 13, 3.2, '#dc2626') + dot(43, 13, 3.2, '#dc2626'),
      arrow(90, 14) + dot(57, 27, 3.2, '#dc2626') + dot(57, 43, 3.2, '#dc2626')
    ],
    0,
    'Dibalik vertikal (T atas → T bawah; ↑ → ↓), dan 1 titik merah di sisi kepala berpindah mengikuti sisi terbalik sambil GANDA menjadi 2 titik!',
    'Huruf T (1 titik di atas) berbalik vertikal menjadi ⊥ dengan 2 titik di bawah. Diterapkan pada panah ↑ (1 titik di atas), hasilnya panah ↓ dengan 2 titik merah di bawah (Opsi A).',
    analogySvg(T_TOP + dot(35, 14, 3.2, '#dc2626'), T_BOT + dot(26, 56, 3.2, '#dc2626') + dot(44, 56, 3.2, '#dc2626'), arrow(0, 14) + dot(35, 13, 3.2, '#dc2626'))
  );

  pushItem('Figural - Analogi Gambar', 'fig58-analogi-gambar', 'SKD-TIU-X5830',
    'Amati penambahan cincin luar serta pembalikan warna pada contoh pertama untuk menentukan "?"!',
    [
      poly(3, 35, 38, 24, '#0f172a', '#ffffff', 2) + poly(3, 35, 40, 11, '#0f172a', '#0f172a', 1.5),
      poly(3, 35, 38, 24, '#0f172a', '#0f172a', 2) + poly(3, 35, 40, 11, '#ffffff', '#ffffff', 1.5),
      poly(3, 35, 38, 24, '#0f172a', 'none', 2) + poly(3, 35, 40, 11, '#0f172a', 'none', 1.5),
      poly(4, 35, 35, 22, '#0f172a', '#ffffff', 2, Math.PI / 4) + poly(3, 35, 39, 10, '#0f172a', '#0f172a', 1.5),
      poly(3, 35, 38, 24, '#0f172a', '#ffffff', 2) + '<circle cx="35" cy="40" r="8" fill="#0f172a"/>'
    ],
    0,
    'Bangun solid kecil berubah menjadi DUA lapis konsentris sejenis: lapisan luar bergaris tepi PUTIH, inti dalam tetap HITAM!',
    'Satu lingkaran hitam kecil dibungkus oleh lingkaran putih sejenis di luarnya. Dengan aturan identik, segitiga hitam dibungkus segitiga putih di luar sehingga tampak segitiga putih berinti segitiga hitam (Opsi A).',
    analogySvg('<circle cx="35" cy="35" r="11" fill="#0f172a"/>', '<circle cx="35" cy="35" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="2"/><circle cx="35" cy="35" r="10" fill="#0f172a"/>', poly(3, 35, 39, 12, '#0f172a', '#0f172a', 1.5))
  );

  /* ==================== 10 FIGURAL SERIAL GAMBAR ==================== */
  const cornerPts = { tl: [16, 16], bl: [16, 54], br: [54, 54], tr: [54, 16] };
  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5831',
    'Amati dua pergerakan independen: rotasi anak panah tengah dan perpindahan titik biru di sudut. Gambar manakah yang melanjutkan pola ke langkah ke-4?',
    [
      arrow(135, 16) + dot(54, 16, 4.5, '#0284c7'),
      arrow(180, 16) + dot(54, 16, 4.5, '#0284c7'),
      arrow(135, 16) + dot(16, 16, 4.5, '#0284c7'),
      arrow(315, 16) + dot(54, 16, 4.5, '#0284c7'),
      arrow(135, 16) + dot(16, 54, 4.5, '#0284c7')
    ],
    0,
    'Lacak terpisah: (1) Panah tengah: 0° → 45° → 90° → 135° (↘); (2) Titik biru gerak CCW: kiri-atas → kiri-bawah → kanan-bawah → KANAN-ATAS!',
    'Panah di pusat selalu berputar +45° searah jarum jam: ↑ → ↗ → → → ↘ (135°). Sementara titik biru bergerak +1 sudut berlawanan arah jarum jam: kiri-atas → kiri-bawah → kanan-bawah → kanan-atas (Opsi A).',
    serialSvg(arrow(0, 16) + dot(...cornerPts.tl, 4.5, '#0284c7'), arrow(45, 16) + dot(...cornerPts.bl, 4.5, '#0284c7'), arrow(90, 16) + dot(...cornerPts.br, 4.5, '#0284c7'))
  );

  const qMark = idx => ['<rect x="35" y="13" width="22" height="22" fill="#e0f2fe"/>', '<rect x="35" y="35" width="22" height="22" fill="#e0f2fe"/>', '<rect x="13" y="35" width="22" height="22" fill="#e0f2fe"/>', '<rect x="13" y="13" width="22" height="22" fill="#e0f2fe"/>'][idx]
    + '<rect x="13" y="13" width="44" height="44" fill="none" stroke="#0f172a" stroke-width="1.8"/><line x1="35" y1="13" x2="35" y2="57" stroke="#0f172a" stroke-width="1.2"/><line x1="13" y1="35" x2="57" y2="35" stroke="#0f172a" stroke-width="1.2"/>';

  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5832',
    'Amati perpindahan sel biru pada grid 2×2 dan pertambahan bertahap jumlah titik merah. Gambar manakah yang tepat mengisi "?"?',
    [
      qMark(3) + dotsRow([[20, 20], [28, 20], [42, 20], [50, 20], [20, 50], [28, 50]], 2.6, '#dc2626'),
      qMark(3) + dotsRow([[20, 20], [28, 20], [42, 20], [50, 20], [20, 50], [28, 50], [42, 50]], 2.6, '#dc2626'),
      qMark(1) + dotsRow([[20, 20], [28, 20], [42, 20], [50, 20], [20, 50], [28, 50], [42, 50]], 2.6, '#dc2626'),
      qMark(3) + dotsRow([[20, 20], [28, 20], [42, 20], [50, 20], [20, 50]], 2.6, '#dc2626'),
      qMark(0) + dotsRow([[20, 20], [28, 20], [42, 20], [50, 20], [20, 50], [28, 50], [42, 50]], 2.6, '#dc2626')
    ],
    1,
    'Sel biru melangkah +1 kotak searah jarum jam (KaA → KaB → KB → KIRI-ATAS); titik merah bertambah berurutan +1, +2, +3: 1 → 2 → 4 → 7!',
    'Kuadran biru berputar searah jarum jam: kanan-atas → kanan-bawah → kiri-bawah → kiri-atas. Jumlah titik merah mengikuti selisih bertambah +1, +2, +3 (1, 2, 4, → 7 titik) (Opsi B).',
    serialSvg(
      qMark(0) + dotsRow([[24, 24]], 2.8, '#dc2626'),
      qMark(1) + dotsRow([[24, 24], [46, 24]], 2.8, '#dc2626'),
      qMark(2) + dotsRow([[24, 24], [46, 24], [24, 46], [46, 46]], 2.8, '#dc2626')
    )
  );

  const hLines = n => Array.from({ length: n }, (_, i) => {
    const y = 35 - ((n - 1) * 4) + i * 8;
    return `<line x1="26" y1="${y}" x2="44" y2="${y}" stroke="#0284c7" stroke-width="2"/>`;
  }).join('');
  const vLines = n => Array.from({ length: n }, (_, i) => {
    const x = 35 - ((n - 1) * 4) + i * 8;
    return `<line x1="${x}" y1="26" x2="${x}" y2="44" stroke="#0284c7" stroke-width="2"/>`;
  }).join('');

  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5833',
    'Amati jumlah sisi bangun datar dan garis biru di dalamnya dari kiri ke kanan. Gambar mana yang melanjutkan deret ini?',
    [
      poly(6, 35, 35, 23) + vLines(4),
      poly(5, 35, 35, 23) + hLines(4),
      poly(6, 35, 35, 23) + hLines(4),
      poly(6, 35, 35, 23) + hLines(3),
      poly(7, 35, 35, 23) + hLines(4)
    ],
    2,
    'Sisi naik 3 → 4 → 5 → 6; jumlah garis dalam naik 1 → 2 → 3 → 4 sambil arah garis bergantian Vertikal–Horizontal–Vertikal–HORIZONTAL!',
    'Bangun bertambah satu sisi tiap langkah (segitiga → persegi → segilima → segienam), garis biru di tengah bertambah 1 (1 → 2 → 3 → 4) dengan orientasi selang-seling Vertikal → Horizontal → Vertikal → Horizontal (Opsi C).',
    serialSvg(poly(3, 35, 38, 22) + vLines(1), poly(4, 35, 35, 22, '#0f172a', 'none', 2, Math.PI / 4) + hLines(2), poly(5, 35, 36, 22) + vLines(3))
  );

  const flipTri = (cx, up, fill) => {
    const pts = up ? `${cx},23 ${cx - 8},47 ${cx + 8},47` : `${cx},47 ${cx - 8},23 ${cx + 8},23`;
    return `<polygon points="${pts}" fill="${fill}" stroke="#0f172a" stroke-width="1.8"/>`;
  };
  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5834',
    'Amati pergeseran kolom segitiga dari kiri ke kanan, arah puncaknya, dan perubahan warnanya. Gambar ke-4 yang tepat adalah...',
    [
      flipTri(54, false, '#ffffff'),
      flipTri(54, true, '#ffffff'),
      flipTri(54, false, '#0f172a'),
      flipTri(16, false, '#ffffff'),
      flipTri(42, false, '#ffffff')
    ],
    0,
    'Cek 3 hal sekaligus: posisi geser ke kanan (1→2→3→4 paling kanan), arah puncak selang-seling (▲ ▼ ▲ ▼), warna selang-seling (Hitam Putih Hitam PUTIH)!',
    'Segitiga melangkah satu kolom ke kanan (ujung kanan), berbalik puncak bergantian (atas → bawah → atas → BAWAH), serta warnanya selang-seling (hitam → putih → hitam → PUTIH) (Opsi A).',
    serialSvg(flipTri(16, true, '#0f172a'), flipTri(28, false, '#ffffff'), flipTri(41, true, '#0f172a'))
  );

  const boxEdge = '<rect x="16" y="16" width="38" height="38" fill="none" stroke="#334155" stroke-width="1.8"/>';
  const sidePos = { top: [35, 16], right: [54, 35], bottom: [35, 54], left: [16, 35] };
  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5835',
    'Dua bola bergerak pada empat titik tengah sisi persegi: bola merah bergerak +1 sisi searah jarum jam, sementara bola biru melompat +2 sisi (menyeberang). Gambar ke-4 adalah...',
    [
      boxEdge + dot(...sidePos.left, 4.5, '#dc2626') + dot(...sidePos.left, 2.5, '#0284c7'),
      boxEdge + dot(...sidePos.top, 4.5, '#dc2626') + dot(...sidePos.right, 4.5, '#0284c7'),
      boxEdge + dot(...sidePos.left, 4.5, '#dc2626') + dot(...sidePos.right, 4.5, '#0284c7'),
      boxEdge + dot(...sidePos.right, 4.5, '#dc2626') + dot(...sidePos.left, 4.5, '#0284c7'),
      boxEdge + dot(...sidePos.bottom, 4.5, '#dc2626') + dot(...sidePos.right, 4.5, '#0284c7')
    ],
    2,
    'Bola merah +1 sisi CW: atas → kanan → bawah → KIRI! Bola biru lompat bolak-balik (+2 sisi): kiri → kanan → kiri → KANAN!',
    'Mengikuti langkah +1 sisi searah jarum jam, bola merah berada di ATAS → KANAN → BAWAH → KIRI. Bola biru berpindah +2 sisi (selang-seling KIRI ↔ KANAN), maka di langkah ke-4 berada di KANAN (Opsi C).',
    serialSvg(
      boxEdge + dot(...sidePos.top, 4.5, '#dc2626') + dot(...sidePos.left, 4.5, '#0284c7'),
      boxEdge + dot(...sidePos.right, 4.5, '#dc2626') + dot(...sidePos.right, 4.5, '#0284c7'),
      boxEdge + dot(...sidePos.bottom, 4.5, '#dc2626') + dot(...sidePos.left, 4.5, '#0284c7')
    )
  );

  const openBox = edges => {
    const segs = [
      '<line x1="17" y1="17" x2="53" y2="17" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>',
      '<line x1="53" y1="17" x2="53" y2="53" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>',
      '<line x1="17" y1="53" x2="53" y2="53" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>',
      '<line x1="17" y1="17" x2="17" y2="53" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>'
    ];
    return edges.map(i => segs[i]).join('');
  };
  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5836',
    'Amati berkurangnya jumlah sisi kotak dan bertambahnya titik merah di tengah secara berturut-turut. Langkah ke-4 yang tepat adalah...',
    [
      openBox([0, 1]) + dotsRow([[35, 35], [27, 43], [43, 43]], 3.2, '#dc2626'),
      openBox([0]) + dotsRow([[35, 29], [27, 41], [43, 41]], 3.2, '#dc2626'),
      openBox([0]) + dotsRow([[28, 35], [42, 35]], 3.2, '#dc2626'),
      openBox([0, 3]) + dotsRow([[35, 29], [27, 41], [43, 41]], 3.2, '#dc2626'),
      dotsRow([[35, 29], [27, 41], [43, 41]], 3.2, '#dc2626')
    ],
    1,
    'Sisi berkurang 4 → 3 → 2 → 1 (tersisa hanya 1 garis sisi atas!) dan jumlah titik di dalam naik 0 → 1 → 2 → 3!',
    'Setiap langkah mengurangi satu ruas sisi persegi (4 → 3 → 2 → 1 sisi atas) sambil menambahkan 1 titik merah di dalam kotak (0 → 1 → 2 → 3 titik) (Opsi B).',
    serialSvg(openBox([0, 1, 2, 3]), openBox([0, 1, 2]) + dot(35, 35, 3.2, '#dc2626'), openBox([0, 1]) + dotsRow([[28, 35], [42, 35]], 3.2, '#dc2626'))
  );

  const cellDiag = (idx, diagRight) => {
    const cells = ['<rect x="35" y="13" width="22" height="22" fill="#0f172a"/>', '<rect x="13" y="13" width="22" height="22" fill="#0f172a"/>', '<rect x="13" y="35" width="22" height="22" fill="#0f172a"/>', '<rect x="35" y="35" width="22" height="22" fill="#0f172a"/>'];
    const dLine = diagRight ? '<line x1="13" y1="57" x2="57" y2="13" stroke="#dc2626" stroke-width="2.5"/>' : '<line x1="13" y1="13" x2="57" y2="57" stroke="#dc2626" stroke-width="2.5"/>';
    return '<rect x="13" y="13" width="44" height="44" fill="#fff" stroke="#334155" stroke-width="1.6"/>'
      + cells[idx] + '<line x1="35" y1="13" x2="35" y2="57" stroke="#64748b" stroke-width="1"/><line x1="13" y1="35" x2="57" y2="35" stroke="#64748b" stroke-width="1"/>' + dLine;
  };
  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5837',
    'Amati perpindahan kotak hitam dan perubahan arah garis diagonal merah pada deret 2×2 berikut!',
    [
      cellDiag(3, true),
      cellDiag(0, false),
      cellDiag(3, false),
      cellDiag(2, false),
      cellDiag(1, true)
    ],
    2,
    'Kotak hitam berjalan CCW: KaA → KA → KB → KANAN-BAWAH! Diagonal merah bergantian (/ → \\ → / → \\)!',
    'Kotak hitam bergerak berlawanan arah jarum jam (kanan-atas → kiri-atas → kiri-bawah → kanan-bawah). Bersamaan, garis diagonal merah berganti miring kanan (/) dan miring kiri (\\) → kanan-bawah + diagonal \\ (Opsi C).',
    serialSvg(cellDiag(0, true), cellDiag(1, false), cellDiag(2, true))
  );

  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5838',
    'Setiap langkah menambahkan satu bangun baru yang membungkus gambar sebelumnya dari dalam ke luar. Gambar ke-4 yang benar adalah...',
    [
      poly(4, 35, 35, 25, '#16a34a', 'none', 2, 0) + poly(3, 35, 37, 20, '#0284c7', 'none', 1.8) + '<rect x="24" y="24" width="22" height="22" fill="none" stroke="#dc2626" stroke-width="1.6"/><circle cx="35" cy="35" r="5" fill="#0f172a"/>',
      poly(3, 35, 37, 24, '#0284c7', 'none', 2) + poly(4, 35, 35, 16, '#16a34a', 'none', 1.8, 0) + '<rect x="27" y="27" width="16" height="16" fill="none" stroke="#dc2626" stroke-width="1.5"/><circle cx="35" cy="35" r="4" fill="#0f172a"/>',
      poly(5, 35, 35, 25, '#16a34a', 'none', 2) + poly(3, 35, 37, 19, '#0284c7', 'none', 1.8) + '<rect x="25" y="25" width="20" height="20" fill="none" stroke="#dc2626" stroke-width="1.6"/><circle cx="35" cy="35" r="5" fill="#0f172a"/>',
      poly(4, 35, 35, 25, '#16a34a', 'none', 2, 0) + poly(3, 35, 37, 20, '#0284c7', 'none', 1.8) + '<circle cx="35" cy="35" r="6" fill="#0f172a"/>',
      poly(4, 35, 35, 25, '#16a34a', 'none', 2, 0) + '<rect x="22" y="22" width="26" height="26" fill="none" stroke="#dc2626" stroke-width="1.6"/>' + poly(3, 35, 37, 11, '#0284c7', 'none', 1.6) + '<circle cx="35" cy="35" r="4" fill="#0f172a"/>'
    ],
    0,
    'Susun lapisan dari paling dalam ke luar: [Lingkaran hitam] → [Persegi merah] → [Segitiga biru] → [Wajik segi-4 hijau paling luar]!',
    'Lapisan bertambah dari dalam: titik lingkaran hitam (1) → dibungkus persegi merah (2) → dibungkus segitiga biru (3) → dibungkus bangun baru segi-4 belah ketupat hijau terluar (Opsi A).',
    serialSvg(
      '<circle cx="35" cy="35" r="6" fill="#0f172a"/>',
      '<rect x="24" y="24" width="22" height="22" fill="none" stroke="#dc2626" stroke-width="1.8"/><circle cx="35" cy="35" r="5" fill="#0f172a"/>',
      poly(3, 35, 37, 21, '#0284c7', 'none', 1.8) + '<rect x="25" y="25" width="20" height="20" fill="none" stroke="#dc2626" stroke-width="1.6"/><circle cx="35" cy="35" r="5" fill="#0f172a"/>'
    )
  );

  const hands = (degShort, degLong) =>
    '<circle cx="35" cy="35" r="22" fill="none" stroke="#cbd5e1" stroke-width="1.6"/>'
    + `<g transform="translate(35,35) rotate(${degLong})"><line x1="0" y1="0" x2="0" y2="-20" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round"/></g>`
    + `<g transform="translate(35,35) rotate(${degShort})"><line x1="0" y1="0" x2="0" y2="-13" stroke="#0f172a" stroke-width="3.6" stroke-linecap="round"/></g>`
    + '<circle cx="35" cy="35" r="2.8" fill="#0f172a"/>';
  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5839',
    'Jarum jam pendek hitam berputar +45° searah jarum jam tiap langkah, sedangkan jarum panjang biru berputar +90° searah jarum jam. Posisi langkah ke-4 adalah...',
    [
      hands(135, 180),
      hands(180, 270),
      hands(135, 0),
      hands(90, 270),
      hands(135, 270)
    ],
    4,
    'Hitung derajat tiap jarum: Pendek 0° → 45° → 90° → 135° (↘); Panjang biru 0° → 90° → 180° → 270° (← jam 9)!',
    'Setelah 3 langkah dari jam 12 (0°): jarum pendek maju 3 × 45° = 135° (serong kanan-bawah / ↘) dan jarum panjang biru maju 3 × 90° = 270° (mengarah ke kiri / ←) (Opsi E).',
    serialSvg(hands(0, 0), hands(45, 90), hands(90, 180))
  );

  const barsAndStars = (n, xPos, yPos) => {
    const bars = Array.from({ length: n }, (_, i) => `<line x1="16" y1="${22 + i * 7}" x2="32" y2="${22 + i * 7}" stroke="#0f172a" stroke-width="2.2"/>`).join('');
    const pts = Array.from({ length: n }, (_, i) => dot(xPos + (i % 2) * 10, yPos + Math.floor(i / 2) * 10, 3.2, '#0284c7')).join('');
    return bars + pts;
  };
  pushItem('Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5840',
    'Perhatikan penambahan jumlah garis hitam di sisi kiri dan perpindahan kuadran kumpulan titik biru di tiap langkah. Gambar ke-4 adalah...',
    [
      '<line x1="16" y1="22" x2="32" y2="22" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="29" x2="32" y2="29" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="36" x2="32" y2="36" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="43" x2="32" y2="43" stroke="#0f172a" stroke-width="2.2"/>' + dotsRow([[18, 46], [28, 46], [18, 56], [28, 56]], 3.2, '#0284c7'),
      '<line x1="16" y1="22" x2="32" y2="22" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="29" x2="32" y2="29" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="36" x2="32" y2="36" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="43" x2="32" y2="43" stroke="#0f172a" stroke-width="2.2"/>' + dotsRow([[44, 18], [54, 18], [44, 28], [54, 28]], 3.2, '#0284c7'),
      '<line x1="16" y1="22" x2="32" y2="22" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="29" x2="32" y2="29" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="36" x2="32" y2="36" stroke="#0f172a" stroke-width="2.2"/>' + dotsRow([[44, 46], [54, 46], [44, 56], [54, 56]], 3.2, '#0284c7'),
      '<line x1="16" y1="22" x2="32" y2="22" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="29" x2="32" y2="29" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="36" x2="32" y2="36" stroke="#0f172a" stroke-width="2.2"/><line x1="16" y1="43" x2="32" y2="43" stroke="#0f172a" stroke-width="2.2"/>' + dotsRow([[44, 46], [54, 46], [44, 56], [54, 56]], 3.2, '#0284c7'),
      '<line x1="42" y1="22" x2="58" y2="22" stroke="#0f172a" stroke-width="2.2"/><line x1="42" y1="29" x2="58" y2="29" stroke="#0f172a" stroke-width="2.2"/><line x1="42" y1="36" x2="58" y2="36" stroke="#0f172a" stroke-width="2.2"/><line x1="42" y1="43" x2="58" y2="43" stroke="#0f172a" stroke-width="2.2"/>' + dotsRow([[18, 46], [28, 46], [18, 56], [28, 56]], 3.2, '#0284c7')
    ],
    3,
    'Jumlah garis naik 1 → 2 → 3 → 4 (tetap di kiri); kelompok titik bertambah 1 → 2 → 3 → 4 sambil bergerak kanan-atas → kanan-bawah (wait: cek urutan kuadran 1,2,3 → 4)!',
    null,
    null
  );
  // Make X5840 super crisp quadrant clockwise progression:
  // Step 1: 1 bar left + 1 dot TL([18,16]) -> wait bars occupy left! Put dots strictly moving on right-top -> right-bottom -> left-bottom -> left-top OR in corner boxes!
  // Better: put bars centered at bottom/top vs dots moving CW at corners: let's set X5840 cleanly!
  const centerBars = n => Array.from({ length: n }, (_, i) => {
    const y = 35 - ((n - 1) * 3.5) + i * 7;
    return `<line x1="27" y1="${y}" x2="43" y2="${y}" stroke="#0f172a" stroke-width="2.1" stroke-linecap="round"/>`;
  }).join('');
  ITEMS[ITEMS.length - 1] = [
    'Figural - Serial Gambar', 'fig58-serial-gambar', 'SKD-TIU-X5840',
    'Amati pertambahan garis di tengah kotak dan perpindahan posisi gugus titik biru di 4 pojok searah jarum jam. Gambar ke-4 yang tepat adalah...',
    [
      'A. ' + optSvg(centerBars(3) + dotsRow([[12, 12], [20, 12], [12, 20], [20, 20]], 2.8, '#0284c7')),
      'B. ' + optSvg(centerBars(4) + dotsRow([[50, 12], [58, 12], [50, 20], [58, 20]], 2.8, '#0284c7')),
      'C. ' + optSvg(centerBars(4) + dotsRow([[12, 12], [20, 12], [12, 20], [20, 20]], 2.8, '#0284c7')),
      'D. ' + optSvg(centerBars(4) + dotsRow([[12, 12], [20, 12], [12, 20]], 2.8, '#0284c7')),
      'E. ' + optSvg(centerBars(4) + dotsRow([[50, 50], [58, 50], [50, 58], [58, 58]], 2.8, '#0284c7'))
    ],
    2,
    'Garis tengah bertambah 1→2→3→4, jumlah titik biru ikut 1→2→3→4 sambil bergerak di pojok SEARAH JARUM JAM: kanan-atas → kanan-bawah → kiri-bawah → KIRI-ATAS!',
    'Garis mendatar di pusat bertambah 1 tiap langkah (1→2→3→4), dan kumpulan titik biru bertambah 1 sambil berputar +1 sudut searah jarum jam: kanan-atas (1) → kanan-bawah (2) → kiri-bawah (3) → kiri-atas (4 titik) (Opsi C).',
    serialSvg(
      centerBars(1) + dotsRow([[54, 16]], 3, '#0284c7'),
      centerBars(2) + dotsRow([[50, 52], [58, 52]], 2.8, '#0284c7'),
      centerBars(3) + dotsRow([[12, 50], [20, 50], [12, 58]], 2.8, '#0284c7')
    )
  ];

  const questions = ITEMS.map(([sub, fam, id, q, options, ans, trick, explanation, img]) => ({
    id,
    examType: 'SKD_TIU',
    category: 'TIU',
    sub,
    fam,
    q,
    options,
    ans,
    scores: options.map((_, i) => (i === ans ? 5 : 0)),
    trick,
    explanation,
    level: 'HOTS',
    practice: 'GOCPNS',
    ...(img ? { img } : {})
  }));

  window.registerCPNSQuestions({ packId: 'skd_tiu_figural_v58', bucket: 'SKD_TIU', questions });
})();
