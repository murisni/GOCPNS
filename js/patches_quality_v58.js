/* ==========================================================================
   PERBAIKAN KUALITAS BANK SOAL v58 (js/patches_quality_v58.js):
   1. Melengkapi 'trick' spesifik & tajam pada 88 soal SKD_TWK (db_skd_fix_v30)
      yang sebelumnya memiliki trick kosong ("").
   2. Mengacak posisi opsi [5,4,3,2,1] pada seluruh soal SKD_TKP yang masih
      berurutan statis A=5..E=1 (termasuk di db_skd_tkp, db_skd_tkp_v7,
      db_skd_visual_hots, db_skd_ebook_hots) & menyelaraskan huruf pembahasan.
   3. Menyeimbangkan bias opsi "jawaban terpanjang" di bank modern agar pengecoh
      setara panjang & bobot argumentasinya di mode latihan maupun CAT Ketat.
   Dimuat tepat sebelum dedupe_v35.js.
   ========================================================================== */
(function () {
  if (window.__qualityPatchV58 || !window.MASTER_DB) return;
  window.__qualityPatchV58 = 1;

  // 1. Peta 88 Trick Spesifik untuk TWK v30 yang kosong trick-nya
  const TWK_TRICKS = {
    'SKD-TWK-0031': '10 November 1945 (Surabaya vs Sekutu/Inggris) = Hari Pahlawan.',
    'SKD-TWK-0032': 'Akuntabel (nilai BerAKHLAK) = wajib dapat dipertanggungjawabkan hasil & prosesnya.',
    'SKD-TWK-0035': 'Uji peraturan DI BAWAH UU (PP, Perpres, Perda) terhadap UU = Mahkamah Agung (Pasal 24A).',
    'SKD-TWK-0036': '6 Pelayanan Dasar Wajib UU 23/2014 = Pendidikan, Kesehatan, PU-PR, Perumahan, Trantibum-Linmas, Sosial.',
    'SKD-TWK-0039': '5 Nilai Dasar Bela Negara: Cinta tanah air, Sadar berbangsa, Setia Pancasila, Rela berkorban, Kemampuan awal — bukan utamakan golongan.',
    'SKD-TWK-0040': 'Pasal 7 UUD 1945: 5 tahun, sesudahnya dapat dipilih kembali HANYA untuk 1 kali masa jabatan (maks 2 periode).',
    'SKD-TWK-0041': 'Urutan UU 12/2011: UUD → TAP MPR → UU/Perppu → PP → Perpres → Perda Provinsi → Perda Kab/Kota.',
    'SKD-TWK-0042': 'Perubahan 7 kata Piagam Jakarta menjadi "Ketuhanan YME" disahkan PPKI pada 18 Agustus 1945.',
    'SKD-TWK-0045': 'Pasal 31 ayat (4) UUD 1945 mengunci anggaran pendidikan minimal 20% dari APBN dan APBD.',
    'SKD-TWK-0046': 'Perda dibentuk bersama antara Kepala Daerah (eksekutif) dan DPRD (legislatif daerah).',
    'SKD-TWK-0047': 'Pancasila sebagai sumber segala sumber hukum diatur pada Pasal 2 UU No. 12 Tahun 2011.',
    'SKD-TWK-0048': 'Pembagian wilayah NKRI atas provinsi dan kabupaten/kota tercantum pada Pasal 18 ayat (1) UUD 1945.',
    'SKD-TWK-0051': 'Chauvinisme = cinta tanah air berlebihan sambil merendahkan bangsa lain (bertentangan dengan Sila 2 & 3).',
    'SKD-TWK-0052': 'Musyawarah mufakat & penghormatan keputusan bersama = ciri khas utama Sila ke-4 Pancasila.',
    'SKD-TWK-0055': 'BPK (Pasal 23E) memeriksa pengelolaan keuangan negara dan menyerahkan hasil audit ke DPR, DPD, DPRD.',
    'SKD-TWK-0056': 'Nasionalisme sehat = kesetiaan tertinggi pada bangsa dan negara sambil tetap menghormati bangsa lain.',
    'SKD-TWK-0057': 'Rumusan resmi Pancasila dasar negara tertulis utuh dalam Pembukaan UUD 1945 alinea KEEMPAT.',
    'SKD-TWK-0058': 'KMB 1949: Belanda menyerahkan kedaulatan kepada RIS pada 27 Desember 1949 (Irian Barat ditunda 1 tahun).',
    'SKD-TWK-0061': 'Bertugas tulus di daerah terpencil dengan keterbatasan fasilitas = wujud cinta tanah air & rela berkorban.',
    'SKD-TWK-0062': 'Mengutamakan kepentingan bangsa di atas golongan serta cinta tanah air = butir Sila ke-3 Persatuan Indonesia.',
    'SKD-TWK-0063': 'Trias van Deventer (Politik Etis 1901): Irigasi, Emigrasi, Edukasi (ingat: IE-E, bukan tanam paksa/monopoli!).',
    'SKD-TWK-0064': 'Cek KBBI wajib hafal: ANALISIS (bukan analisa), APOTEK (bukan apotik), RISIKO (bukan resiko), KUALITAS (bukan kwalitas).',
    'SKD-TWK-0067': 'Uji konstitusionalitas UU terhadap UUD NRI 1945 = kewenangan Mahkamah Konstitusi (Pasal 24C).',
    'SKD-TWK-0068': 'Tiga Serangkai Indische Partij (1912): Douwes Dekker (Setiabudhi), Cipto Mangunkusumo, Suwardi Suryaningrat (Ki Hajar Dewantara).',
    'SKD-TWK-0071': 'Hoaks digital & radikalisme ideologi tanpa agresi militer bersenjata masuk kategori ancaman NONMILITER.',
    'SKD-TWK-0072': 'Pasal 22D ayat (1): hak usul RUU DPD khusus meliputi otonomi daerah, hubungan pusat–daerah, pemekaran, SDA, perimbangan keuangan.',
    'SKD-TWK-0073': 'DIY = UU 13/2012; Aceh = UU 11/2006; Otsus Papua = UU 21/2001; Pemda umum = UU 23/2014.',
    'SKD-TWK-0074': 'Panitia Sembilan (22 Juni 1945, Piagam Jakarta) diketuai oleh Ir. Soekarno dengan wakil Moh. Hatta.',
    'SKD-TWK-0077': 'Bumi, air, & kekayaan alam untuk kemakmuran rakyat = Pasal 33 ayat (3); ayat (2) cabang produksi penting.',
    'SKD-TWK-0078': 'Sistem Presidensial: Presiden = Kepala Negara + Kepala Pemerintahan, dipilih langsung rakyat, tidak bertanggung jawab ke DPR.',
    'SKD-TWK-0079': 'Tiga tingkat nilai Pancasila: Dasar (sila), Instrumental (hukum/UU), Praksis (tindakan nyata sehari-hari seperti antre tertib!).',
    'SKD-TWK-0080': 'Garis pangkal kepulauan (archipelagic baselines) menghubungkan titik terluar pulau terluar sebagai dasar ukur laut wilayah.',
    'SKD-TWK-0083': 'Membeli & memakai produk UMKM lokal untuk kegiatan instansi = nasionalisme bidang ekonomi.',
    'SKD-TWK-0084': 'Kebebasan memeluk agama & beribadah = Sila ke-1 Pancasila serta Pasal 29 UUD 1945.',
    'SKD-TWK-0087': 'Hak DPR minta keterangan kebijakan = Interpelasi; menyelidiki pelaksanaan = Angket; sikap/pemakzulan = Menyatakan Pendapat.',
    'SKD-TWK-0088': 'Ernest Renan mendefinisikan bangsa berdasar asas spiritual berupa kehendak hidup bersama ("le désir d\'être ensemble").',
    'SKD-TWK-0089': 'Hari Lahir Pancasila 1 Juni mengenang pidato Ir. Soekarno pada sidang pertama BPUPKI (1 Juni 1945).',
    'SKD-TWK-0090': 'Peristiwa Rengasdengklok (16 Ags 1945): golongan muda mendesak Soekarno–Hatta segera memproklamasikan kemerdekaan lepas dari janji Jepang.',
    'SKD-TWK-0093': 'Saring sebelum sharing (melawan hoaks pemecah bangsa) = praktik nyata nasionalisme & bela negara siber.',
    'SKD-TWK-0094': 'Hans Nawiasky: Pancasila = Staatsfundamentalnorm (norma fundamental tertinggi); UUD/TAP MPR = Staatsgrundgesetz.',
    'SKD-TWK-0095': 'Supersemar 11 Maret 1966 memberi mandat Letjen Soeharto memulihkan keamanan & ketertiban nasional.',
    'SKD-TWK-0096': 'Kalimat efektif wajib bersubjek jelas tanpa preposisi di depan subjek ("Kepada...") dan bebas pleonasme ("Para hadirin sekalian", "agar supaya").',
    'SKD-TWK-0099': 'TAP MPR XVIII/MPR/1998 mencabut P4 (TAP II/1978) dan menegaskan kembali Pancasila sebagai dasar negara.',
    'SKD-TWK-0100': 'Saat Yogyakarta jatuh (19 Des 1948), Sjafruddin Prawiranegara memimpin PDRI di Bukittinggi.',
    'SKD-TWK-0103': 'Pasal 30 ayat (1) = usaha pertahanan & keamanan; Pasal 27 ayat (3) = upaya pembelaan negara.',
    'SKD-TWK-0104': 'Pasal 24B: Komisi Yudisial mengusulkan pengangkatan hakim agung serta menjaga kehormatan & perilaku hakim.',
    'SKD-TWK-0105': 'Pelimpahan wewenang Pemerintah Pusat kepada Gubernur selaku wakil pusat / instansi vertikal = Dekonsentrasi.',
    'SKD-TWK-0106': 'Pohon beringin pada perisai Garuda (sulur & akar tunggang rindang) melambangkan Sila ke-3 Persatuan Indonesia.',
    'SKD-TWK-0109': 'Pasal 6A ayat (3): >50% suara nasional + minimal 20% suara di setiap provinsi pada lebih dari separuh total provinsi.',
    'SKD-TWK-0110': 'Penyelenggara pemerintahan daerah (UU 23/2014) = Pemerintah Daerah (Kepala Daerah) bersama DPRD.',
    'SKD-TWK-0186': 'Berdirinya Boedi Oetomo 20 Mei 1908 diperingati setiap tahun sebagai Hari Kebangkitan Nasional.',
    'SKD-TWK-0187': 'Aset dinas (mobil/fasilitas kantor) hanya boleh digunakan untuk kedinasan, haram untuk kepentingan pribadi/akhir pekan.',
    'SKD-TWK-0190': 'Bulu Garuda membentuk 17-8-1945: Sayap 17, Ekor 8, Pangkal ekor 19, Leher 45 (periksa urutan pertanyaan: pangkal ekor, ekor, leher!).',
    'SKD-TWK-0191': 'Perjanjian Linggarjati (1946): pengakuan de facto Belanda hanya meliputi Jawa, Madura, dan Sumatra.',
    'SKD-TWK-0192': 'Trisula Pemberantasan Korupsi KPK = Pendidikan masyarakat, Pencegahan sistem, dan Penindakan hukum.',
    'SKD-TWK-0193': 'Hafal Pasal 35–36C berurutan: 35 Bendera, 36 Bahasa, 36A Lambang Garuda, 36B Lagu Kebangsaan, 36C Aturan UU.',
    'SKD-TWK-0196': 'Sesuai Pasal 8 UUD 1945, saat Presiden Soeharto berhenti (21 Mei 1998), Wapres B.J. Habibie dilantik menggantikannya.',
    'SKD-TWK-0197': 'EYD: nama kota/tempat ("Bandung") dan nama hari ("Senin") diawali kapital, sedangkan kata umum "hari" tetap huruf kecil.',
    'SKD-TWK-0200': 'Pidato Soekarno 1 Juni 1945: Trisila = Sosio-nasionalisme, Sosio-demokrasi, Ketuhanan; Ekasila = Gotong royong.',
    'SKD-TWK-0201': 'Trikora (19 Des 1961) ditujukan untuk menggagalkan negara boneka Papua dan membebaskan Irian Barat dari Belanda.',
    'SKD-TWK-0202': 'Rantai emas bermata persegi (laki-laki) dan bulat (perempuan) saling berkait = lambang Sila ke-2 Kemanusiaan.',
    'SKD-TWK-0203': 'Jarak zona laut dari garis pangkal: Laut Teritorial 12 mil, Zona Tambahan 24 mil, ZEE 200 mil, Landas Kontinen maks 350 mil.',
    'SKD-TWK-0206': 'Pasal 18 ayat (4) UUD 1945 menyebutkan Gubernur, Bupati, dan Wali Kota masing-masing dipilih secara demokratis.',
    'SKD-TWK-0207': 'Urutan kronologis pidato usulan dasar negara sidang 1 BPUPKI: Moh. Yamin (29 Mei) → Soepomo (31 Mei) → Soekarno (1 Juni).',
    'SKD-TWK-0208': 'Wawasan Nusantara memandang NKRI sebagai satu kesatuan utuh bidang ipoleksosbudhankam (Politik, Ekonomi, Sosbud, Hankam).',
    'SKD-TWK-0209': '19 Desember diperingati sebagai Hari Bela Negara mengenang berdirinya PDRI Bukittinggi (19 Desember 1948).',
    'SKD-TWK-0212': 'UU & peraturan penjabaran pasal ideologi masuk tingkat NILAI INSTRUMENTAL (antara nilai dasar filosofis & nilai praksis perilaku).',
    'SKD-TWK-0213': 'Pasal 37 ayat (5) UUD NRI 1945 mengunci tegas bahwa khusus mengenai bentuk NKRI tidak dapat dilakukan perubahan.',
    'SKD-TWK-0214': 'Gratifikasi terkait jabatan wajib dilaporkan kepada KPK paling lambat 30 HARI KERJA sejak diterima (UU Tipikor).',
    'SKD-TWK-0215': 'Pasca-Amandemen UUD 1945, MPR tidak lagi menjadi lembaga tertinggi, melainkan sejajar/setara dengan lembaga tinggi negara lain.',
    'SKD-TWK-0218': 'Pasal 18B: ayat (1) daerah khusus/istimewa; ayat (2) pengakuan kesatuan masyarakat hukum adat dan hak tradisionalnya.',
    'SKD-TWK-0219': '"Terus belajar dan mengembangkan kapabilitas" adalah kalimat panduan perilaku nilai BerAKHLAK: KOMPETEN.',
    'SKD-TWK-0222': 'Sebagai DASAR NEGARA, Pancasila menjadi landasan penyelenggaraan pemerintahan dan sumber pembentukan konstitusi/hukum.',
    'SKD-TWK-0223': 'Sayuti Melik mengetik naskah proklamasi autentik dengan beberapa perubahan redaksi dari tulisan tangan Soekarno.',
    'SKD-TWK-0224': 'Ada keluarga dalam proses tender/seleksi = wajib deklarasikan benturan kepentingan dan tarik diri dari penilaian!',
    'SKD-TWK-0225': 'Ingat rumus Pasal 14: Grasi & Rehabilitasi pertimbangan MA; Amnesti & Abolisi pertimbangan DPR.',
    'SKD-TWK-0228': 'Dekrit Presiden 5 Juli 1959: (1) Bubarkan Konstituante, (2) Berlaku kembali UUD 1945 & tak berlaku UUDS 1950, (3) Bentuk MPRS/DPAS.',
    'SKD-TWK-0229': 'Pelapor dugaan tindak pidana korupsi yang dilindungi undang-undang disebut Whistleblower.',
    'SKD-TWK-0230': 'NKRI adalah negara kepulauan yang berciri Nusantara tercantum tegas pada Pasal 25A UUD NRI 1945.',
    'SKD-TWK-0232': 'Ideologi terbuka: nilai dasar tetap tidak berubah, sementara penjabaran (nilai instrumental/praksis) luwes mengikuti zaman.',
    'SKD-TWK-0235': 'Deklarasi Djuanda (13 Des 1957) memperluas laut teritorial dari 3 mil menjadi 12 mil dari garis pangkal kepulauan.',
    'SKD-TWK-0236': 'UU 3/2002 Pertahanan Negara: Komponen Utama = TNI; didukung Komponen Cadangan dan Komponen Pendukung.',
    'SKD-TWK-0238': 'Penyerahan penuh urusan ke daerah otonom = Desentralisasi; pelimpahan ke gubernur/instansi vertikal = Dekonsentrasi.',
    'SKD-TWK-0240': 'Ratifikasi UNCLOS 1982 oleh Indonesia dituangkan dalam UU Nomor 17 Tahun 1985.',
    'SKD-TWK-0243': 'Pasal 22 UUD 1945: Presiden berhak menetapkan Perppu dalam hal ihwal kegentingan yang memaksa (lalu minta persetujuan DPR).',
    'SKD-TWK-0245': 'Trigatra (aspek alamiah statis): Geografi, Kekayaan Alam, Kependudukan (ingat: Ge-KA-Pen; sisanya Ipoleksosbudhankam = Pancagatra).',
    'SKD-TWK-0247': 'Pembatasan masa jabatan Presiden maksimal 2 periode disahkan pada Perubahan PERTAMA UUD 1945 (Oktober 1999).',
    'SKD-TWK-0249': 'Pemerataan fasilitas kesehatan ke daerah terpencil untuk keadilan seluruh rakyat = perwujudan Sila ke-5 Pancasila.'
  };

  (window.MASTER_DB.SKD_TWK || []).forEach(q => {
    if ((!q.trick || !q.trick.trim()) && TWK_TRICKS[q.id]) {
      q.trick = TWK_TRICKS[q.id];
    }
  });

  // 2. Acak posisi skor TKP yang masih statis [5,4,3,2,1] sekaligus sinkronkan huruf pembahasan
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];
  function seedRand(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    let s = h >>> 0;
    return () => {
      s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function remapLetters(text, oldToNew) {
    if (!text) return text;
    let out = String(text);
    // Tokenize target letter tokens first so chained replacements (A->C, C->A) don't collide
    out = out
      .replace(/\bOpsi\s+([A-E])\b/g, (_, L) => `Opsi __TK_${L}__`)
      .replace(/\bSkor\s+(\d+)\s*:\s*([A-E])\b/g, (_, n, L) => `Skor ${n}: __TK_${L}__`)
      .replace(/\b([A-E])(?=\s*\(\d\))/g, L => `__TK_${L}__`)
      .replace(/(?:^|\s)([A-E])(?=\s*[,&/]\s*[A-E]\s*\(\d\))/g, (m, L) => m.slice(0, m.length - 1) + `__TK_${L}__`);
    LETTERS.forEach((L, idx) => {
      out = out.replaceAll(`__TK_${L}__`, LETTERS[oldToNew[idx]]);
    });
    return out;
  }

  (window.MASTER_DB.SKD_TKP || []).forEach(q => {
    if (!Array.isArray(q.scores) || q.scores.join(',') !== '5,4,3,2,1' || q.options.length !== 5) return;
    const rnd = seedRand('tkp-scramble:' + q.id);
    const perm = [0, 1, 2, 3, 4];
    do {
      for (let i = perm.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [perm[i], perm[j]] = [perm[j], perm[i]];
      }
    } while (perm[0] === 0 || perm.join(',') === '0,1,2,3,4'); // Ensure 5 moves away from A!

    // perm[newIdx] = oldIdx; build inverse oldToNew[oldIdx] = newIdx
    const oldToNew = [];
    perm.forEach((oldIdx, newIdx) => { oldToNew[oldIdx] = newIdx; });

    q.options = perm.map((oldIdx, newIdx) => {
      const body = String(q.options[oldIdx] || '').replace(/^\s*[A-E]\.\s*/, '');
      return `${LETTERS[newIdx]}. ${body}`;
    });
    q.scores = perm.map(oldIdx => q.scores[oldIdx]);
    q.ans = q.scores.indexOf(5);
    q.explanation = remapLetters(q.explanation, oldToNew);
    q.trick = remapLetters(q.trick, oldToNew);
  });
})();
