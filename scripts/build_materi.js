const fs = require('fs');
const path = require('path');

const materiGroups = [
  { id: 'TWK', name: 'TWK', full: 'Tes Wawasan Kebangsaan', desc: 'Pilar negara, nasionalisme, integritas, dan bahasa Indonesia.' },
  { id: 'TIU', name: 'TIU', full: 'Tes Intelegensia Umum', desc: 'Penalaran verbal, numerik rumus kilat, dan logika figural.' },
  { id: 'TKP', name: 'TKP', full: 'Tes Karakteristik Pribadi', desc: 'Pola mindset memilih jawaban skor 5 di enam pilar BerAKHLAK.' },
  { id: 'SKB', name: 'SKB', full: 'Seleksi Kompetensi Bidang', desc: 'Kisi-kisi teknis formasi: Prakom, Tenaga Kesehatan, Hukum, Keuangan, Pendidikan.' }
];

const materi = [
  /* ============================ SKD - TWK ============================ */
  {
    id: 'pancasila',
    group: 'TWK',
    title: 'Pancasila: Sila, Lambang, Butir & Sejarah',
    summary: 'Infografis Garuda Pancasila, makna lambang 5 sila, tabel pembeda butir sila tersering keluar, dan sejarah perumusan BPUPKI-PPKI.',
    buckets: ['SKD_TWK'],
    subs: ['Pilar Negara - Pancasila'],
    sections: [
      {
        title: 'Lambang Negara Garuda Pancasila & Filosofi Helai Bulu',
        html: `
        <figure class="materi-figure">
          <img src="img/garuda-pancasila.png" alt="Garuda Pancasila Lambang Negara Indonesia" class="img-garuda">
          <figcaption>Lambang Negara Garuda Pancasila: Dirancang Sultan Hamid II, Diatur dalam Pasal 36A UUD 1945 &amp; UU No. 24 Tahun 2009</figcaption>
        </figure>
        <ul>
          <li><b>Sayap</b>: 17 helai bulu pada masing-masing sayap (tanggal kemerdekaan).</li>
          <li><b>Ekor</b>: 8 helai bulu pada ekor (bulan Agustus).</li>
          <li><b>Pangkal Ekor</b>: 19 helai bulu di bawah perisai/pangkal ekor (tahun 19..).</li>
          <li><b>Leher</b>: 45 helai bulu pada leher (tahun ..45) &rarr; Melambangkan <b>17 Agustus 1945</b>.</li>
          <li><b>Kepala</b>: Menoleh lurus ke sebelah kanan (dari sudut pandang Garuda) yang bermakna kebaikan, kebenaran, dan pandangan ke depan.</li>
          <li><b>Semboyan</b>: Mencengkeram pita putih bertuliskan <i>BHINNEKA TUNGGAL IKA</i> (berbeda-beda tetapi tetap satu jua), dikutip dari <b>Kakawin Sutasoma</b> karya <b>Mpu Tantular</b> pada masa Kerajaan Majapahit.</li>
        </ul>`
      },
      {
        title: 'Makna Simbol Kelima Sila dalam Perisai',
        html: `
        <div class="sila-grid">
          <div class="sila-card">
            <img src="img/sila-1-bintang.png" alt="Sila 1 Bintang Emas">
            <span class="sila-num">Sila 1</span>
            <span class="sila-title">Bintang Emas</span>
          </div>
          <div class="sila-card">
            <img src="img/sila-2-rantai.png" alt="Sila 2 Rantai Emas">
            <span class="sila-num">Sila 2</span>
            <span class="sila-title">Rantai Emas</span>
          </div>
          <div class="sila-card">
            <img src="img/sila-3-pohon-beringin.png" alt="Sila 3 Pohon Beringin">
            <span class="sila-num">Sila 3</span>
            <span class="sila-title">Pohon Beringin</span>
          </div>
          <div class="sila-card">
            <img src="img/sila-4-kepala-banteng.png" alt="Sila 4 Kepala Banteng">
            <span class="sila-num">Sila 4</span>
            <span class="sila-title">Kepala Banteng</span>
          </div>
          <div class="sila-card">
            <img src="img/sila-5-padi-kapas.png" alt="Sila 5 Padi dan Kapas">
            <span class="sila-num">Sila 5</span>
            <span class="sila-title">Padi &amp; Kapas</span>
          </div>
        </div>
        <table class="table table-sm">
          <thead><tr><th>Sila</th><th>Lambang &amp; Latar</th><th>Makna Filosofis Simbol</th><th>Kata Kunci Karakter</th></tr></thead>
          <tbody>
            <tr>
              <td><b>1</b></td>
              <td><b>Bintang Emas</b> (Perisai Hitam)</td>
              <td>Bintang bersudut lima melambangkan cahaya kerohanian dari Tuhan Yang Maha Esa kepada setiap insan manusia. Latar hitam melambangkan warna alam/rahmat Tuhan sumber segala ciptaan.</td>
              <td>Ibadah, toleransi antar-agama, kebebasan meyakini agama, tidak memaksakan agama.</td>
            </tr>
            <tr>
              <td><b>2</b></td>
              <td><b>Rantai Emas</b> (Latar Merah)</td>
              <td>Gelang persegi (pria) dan lingkaran (wanita) berjumlah 17 mata rantai saling berkait tanpa putus, melambangkan kesetaraan gender dan solidaritas kemanusiaan.</td>
              <td>HAM, empati, tolong-menolong sesama, anti-diskriminasi, tenggang rasa.</td>
            </tr>
            <tr>
              <td><b>3</b></td>
              <td><b>Pohon Beringin</b> (Latar Putih)</td>
              <td>Akar tunggang menancap kuat (kokohnya persatuan), sulur menggantung dari cabang (keberagaman suku/budaya bernaung di bawah naungan NKRI).</td>
              <td>Cinta tanah air, nasionalisme, persatuan, rela berkorban demi bangsa, bangga produk lokal.</td>
            </tr>
            <tr>
              <td><b>4</b></td>
              <td><b>Kepala Banteng</b> (Latar Merah)</td>
              <td>Banteng adalah hewan sosial yang suka berkumpul, melambangkan musyawarah rakyat untuk menghasilkan keputusan bersama.</td>
              <td>Musyawarah, mufakat, menghargai pendapat orang lain, tidak memaksakan kehendak, voting adil.</td>
            </tr>
            <tr>
              <td><b>5</b></td>
              <td><b>Padi dan Kapas</b> (Latar Putih)</td>
              <td>Padi (pangan) dan Kapas (sandang) mencerminkan kebutuhan dasar hidup rakyat Indonesia demi terwujudnya kemakmuran yang merata tanpa kesenjangan.</td>
              <td>Keadilan sosial, hak-kewajiban seimbang, kerja keras, hidup hemat (tidak foya-foya), gotong royong fasilitas umum.</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        title: 'Tabel Pembeda Butir Sila (Waspada Jebakan Soal BKN!)',
        html: `
        <div class="callout"><b>⚠️ Kunci Membedakan Soal Pengecoh di CAT BKN:</b> Banyak peserta tertukar antara Sila 2 vs Sila 5, serta Sila 3 vs Sila 4. Gunakan tabel pembeda pasti berikut:</div>
        <table class="table table-sm">
          <thead><tr><th>Peristiwa / Studi Kasus</th><th>Jawaban Sila</th><th>Alasan &amp; Kata Kunci Penentu</th></tr></thead>
          <tbody>
            <tr>
              <td>Membantu korban bencana alam / donor darah / santunan anak sakit</td>
              <td><span class="badge badge-primary font-bold">Sila ke-2</span></td>
              <td>Tindakan <b>kemanusiaan (empati individu ke sesama manusia)</b>, pengakuan harkat dan martabat manusia.</td>
            </tr>
            <tr>
              <td>Kerja bakti memperbaiki jembatan desa / poskamling / fasilitas umum</td>
              <td><span class="badge badge-accent font-bold">Sila ke-5</span></td>
              <td>Mewujudkan <b>kepentingan umum dan keadilan sosial</b> bagi seluruh warga masyarakat sekitar.</td>
            </tr>
            <tr>
              <td>Gaya hidup hedonis, pamer kekayaan di medsos, boros</td>
              <td><span class="badge badge-accent font-bold">Melanggar Sila 5</span></td>
              <td>Butir Sila 5: "Tidak menggunakan hak milik untuk hal-hal yang bersifat pemborosan dan gaya hidup mewah".</td>
            </tr>
            <tr>
              <td>Membeli dan memakai produk buatan UMKM lokal dibanding produk impor</td>
              <td><span class="badge badge-secondary font-bold">Sila ke-3</span></td>
              <td>Wujud <b>cinta tanah air dan kebanggaan nasional</b> demi keutuhan perekonomian bangsa.</td>
            </tr>
            <tr>
              <td>Rapat RT menentukan jadwal ronda malam secara musyawarah</td>
              <td><span class="badge badge-warning font-bold">Sila ke-4</span></td>
              <td>Pengambilan keputusan melalui <b>musyawarah mufakat</b> tanpa paksaan kehendak.</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        title: 'Kronologi Sejarah Perumusan Pancasila (Wajib Hafal Tanggal)',
        html: `
        <ul>
          <li><b>29 Mei – 1 Juni 1945</b>: Sidang I BPUPKI (Dokuritsu Junbi Cosakai dipimpin Dr. Radjiman Wedyodiningrat). Tiga tokoh mengusulkan rumusan dasar negara:
            <ul>
              <li><i>29 Mei 1945</i>: <b>Mr. Mohammad Yamin</b> (Peri Kebangsaan, Peri Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, Kesejahteraan Rakyat).</li>
              <li><i>31 Mei 1945</i>: <b>Prof. Dr. Soepomo</b> (Persatuan, Kekeluargaan, Keseimbangan lahir batin, Musyawarah, Keadilan rakyat).</li>
              <li><i>1 Juni 1945</i>: <b>Ir. Soekarno</b> (Kebangsaan Indonesia, Internasionalisme/Perikemanusiaan, Mufakat/Demokrasi, Kesejahteraan Sosial, Ketuhanan yang Berkebudayaan). Bung Karno mengusulkan nama <b>Pancasila</b> &rarr; Ditetapkan sebagai <b>Hari Lahir Pancasila</b> (Keppres 24/2016).</li>
            </ul>
          </li>
          <li><b>22 Juni 1945</b>: <b>Panitia Sembilan</b> menghasilkan naskah <b>Piagam Jakarta (Jakarta Charter)</b>. Sila pertama awalnya berbunyi: <i>"Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya"</i>.</li>
          <li><b>18 Agustus 1945</b>: Sidang I PPKI menetapkan 3 keputusan bersejarah:
            <ol>
              <li>Mengesahkan UUD 1945 (termasuk rumusan final Pancasila pada Pembukaan alinea 4 setelah 7 kata Piagam Jakarta diganti menjadi <b>"Ketuhanan Yang Maha Esa"</b> atas usulan perwakilan Indonesia Timur via Moh. Hatta).</li>
              <li>Memilih Ir. Soekarno sebagai Presiden dan Drs. Mohammad Hatta sebagai Wakil Presiden.</li>
              <li>Membentuk Komite Nasional Indonesia Pusat (KNIP) untuk membantu tugas Presiden sebelum terbentuk MPR/DPR.</li>
            </ol>
          </li>
        </ul>`
      },
      {
        title: 'Tingkatan Nilai Pancasila sebagai Ideologi Terbuka',
        html: `
        <ul>
          <li><b>Ideologi Terbuka</b>: Mampu menyesuaikan diri dengan perkembangan zaman tanpa mengubah nilai dasarnya. Memiliki 3 dimensi: <i>Dimensi Realitas</i> (mencerminkan kenyataan hidup masyarakat), <i>Dimensi Idealisme</i> (memberikan harapan masa depan yang lebih baik), dan <i>Dimensi Fleksibilitas</i> (terbuka terhadap inovasi baru).</li>
          <li><b>3 Tingkatan Nilai Pancasila</b>:
            <ol>
              <li><b>Nilai Dasar</b>: Bersifat tetap, fundamental, tidak boleh berubah (tercantum dalam kelima sila Pancasila).</li>
              <li><b>Nilai Instrumental</b>: Penjabaran nilai dasar ke dalam peraturan tertulis dan lembaga (UUD 1945, UU, Peraturan Pemerintah, Kebijakan Negara).</li>
              <li><b>Nilai Praksis</b>: Realisasi nilai-nilai dalam kehidupan sehari-hari masyarakat (tindakan nyata, etika, toleransi).</li>
            </ol>
          </li>
        </ul>`
      }
    ],
    tips: [
      '<b>Rumus 5 Sila:</b> Sila 1 = Agama/Tuhan · Sila 2 = Manusia/HAM · Sila 3 = Bangsa/Negara/Persatuan · Sila 4 = Musyawarah/Demokrasi · Sila 5 = Keadilan/Masyarakat Umum.',
      '<b>Bencana alam & donor darah:</b> Selalu <b>Sila ke-2</b> (bukan Sila 5), karena fokusnya adalah menyelamatkan nyawa sesama manusia (kemanusiaan).',
      '<b>Kerja bakti fasilitas publik / hemat energi / anti-hedon:</b> Selalu <b>Sila ke-5</b> (keadilan sosial bagi rakyat).',
      '<b>Bangga bahasa Indonesia / bendera / bela negara:</b> Selalu <b>Sila ke-3</b> (persatuan dan cinta tanah air).'
    ]
  },

  /* ============================ SKD - TWK ============================ */
  {
    id: 'uud-1945',
    group: 'TWK',
    title: 'UUD 1945, Lembaga Negara & Hierarki Hukum',
    summary: 'Diagram struktur ketatanegaraan RI pasca-amandemen, piramida hierarki perundang-undangan UU 12/2011, serta tabel pasal keramat BKN.',
    buckets: ['SKD_TWK'],
    subs: ['Pilar Negara - UUD 1945'],
    sections: [
      {
        title: 'Struktur Ketatanegaraan RI Pasca-Amandemen UUD 1945',
        html: `
        <figure class="materi-figure">
          <img src="img/struktur-lembaga-negara.png" alt="Struktur Lembaga Negara RI Pasca Amandemen UUD 1945">
          <figcaption>Bagan Struktur Lembaga Negara RI: Tidak Ada Lembaga Tertinggi, Semua Sejajar di Bawah UUD 1945 (Checks &amp; Balances)</figcaption>
        </figure>
        <ul>
          <li><b>Sebelum Amandemen</b>: MPR berkedudukan sebagai <i>Lembaga Tertinggi Negara</i> pemegang kedaulatan rakyat sepenuhnya, yang membawahi Lembaga Tinggi Negara (Presiden, DPA, DPR, BPK, MA).</li>
          <li><b>Pasca Amandemen (1999–2002)</b>: MPR sejajar dengan lembaga negara lainnya. Kedaulatan berada di tangan rakyat dan dilaksanakan menurut UUD (Pasal 1 ayat 2). Dewan Pertimbangan Agung (DPA) dihapuskan. Dibentuk lembaga baru: <b>Mahkamah Konstitusi (MK)</b>, <b>Komisi Yudisial (KY)</b>, dan <b>Dewan Perwakilan Daerah (DPD)</b>.</li>
          <li><b>4 Tahap Amandemen</b>:
            <ol>
              <li><i>Amandemen I (19–21 Okt 1999)</i>: Pembatasan kekuasaan Presiden (Pasal 7 masa jabatan maks 2 periode) &amp; pergeseran kekuasaan legislasi ke DPR (Pasal 20).</li>
              <li><i>Amandemen II (7–18 Ags 2000)</i>: Pemerintah daerah (otonomi Pasal 18), DPR, wilayah negara, dan penambahan Bab HAM lengkap (Pasal 28A–28J).</li>
              <li><i>Amandemen III (1–9 Nov 2001)</i>: Kedaulatan rakyat, pembentukan DPD, MK, BPK, dan syarat pemilihan Presiden langsung (Pasal 6A).</li>
              <li><i>Amandemen IV (1–11 Ags 2002)</i>: Pendidikan minimal 20% (Pasal 31 ayat 4), perekonomian (Pasal 33), Bank Sentral, penghapusan DPA, aturan peralihan &amp; tambahan.</li>
            </ol>
          </li>
        </ul>`
      },
      {
        title: 'Tabel Keramat Pasal UUD 1945 (Paling Sering Keluar di CAT)',
        html: `
        <table class="table table-sm">
          <thead><tr><th>Pasal</th><th>Ayat Penting</th><th>Isi Ringkas yang Wajib Dihafal</th></tr></thead>
          <tbody>
            <tr><td><b>1</b></td><td>Ayat 1, 2, 3</td><td>Indonesia negara kesatuan republik; kedaulatan di tangan rakyat berdasar UUD; Indonesia adalah <b>negara hukum</b>.</td></tr>
            <tr><td><b>7</b></td><td>-</td><td>Presiden &amp; Wapres memegang jabatan 5 tahun, dapat dipilih kembali <b>hanya untuk satu kali masa jabatan lagi</b> (maks 2 periode).</td></tr>
            <tr><td><b>14</b></td><td>Ayat 1 &amp; 2</td><td>Presiden memberi <b>Grasi &amp; Rehabilitasi</b> (pertimbangan MA); memberi <b>Amnesti &amp; Abolisi</b> (pertimbangan DPR).</td></tr>
            <tr><td><b>18</b></td><td>Ayat 1 &amp; 2</td><td>Pemerintahan daerah provinsi, kabupaten, dan kota mengatur urusan pemerintahan sendiri menurut <b>asas otonomi dan tugas pembantuan</b>.</td></tr>
            <tr><td><b>20</b></td><td>Ayat 1</td><td><b>DPR</b> memegang kekuasaan membentuk undang-undang (fungsi legislasi).</td></tr>
            <tr><td><b>22E</b></td><td>Ayat 1 &amp; 5</td><td>Pemilu dilaksanakan secara <b>LUBER dan JURDIL</b> setiap 5 tahun sekali; diselenggarakan oleh KPU yang mandiri.</td></tr>
            <tr><td><b>23E</b></td><td>Ayat 1 &amp; 2</td><td><b>BPK</b> memeriksa pengelolaan dan tanggung jawab keuangan negara; hasil diserahkan kepada DPR, DPD, dan DPRD.</td></tr>
            <tr><td><b>24C</b></td><td>Ayat 1 &amp; 3</td><td><b>MK</b> berwenang menguji UU terhadap UUD, sengketa lembaga negara, bubarkan parpol, sengketa pemilu. Terdiri dari <b>9 hakim konstitusi</b> (3 diajukan MA, 3 DPR, 3 Presiden).</td></tr>
            <tr><td><b>27</b></td><td>Ayat 3</td><td>Setiap warga negara berhak dan wajib ikut serta dalam <b>upaya pembelaan negara</b>.</td></tr>
            <tr><td><b>28A–J</b></td><td>-</td><td>Piagam Hak Asasi Manusia (HAM). Pasal 28I ayat 1: Hak hidup, bebas dari penyiksaan, kemerdekaan pikiran adalah <i>non-derogable rights</i> (tidak dapat dikurangi dalam keadaan apa pun).</td></tr>
            <tr><td><b>30</b></td><td>Ayat 1 &amp; 2</td><td>Hak dan kewajiban pertahanan dan keamanan negara (<b>Sishankamrata</b>: TNI &amp; Polri sebagai kekuatan utama, rakyat sebagai kekuatan pendukung).</td></tr>
            <tr><td><b>31</b></td><td>Ayat 4</td><td>Negara memprioritaskan anggaran pendidikan sekurang-kurangnya <b>20% dari APBN dan APBD</b>.</td></tr>
            <tr><td><b>33</b></td><td>Ayat 3</td><td>Bumi, air, dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk <b>sebesar-besar kemakmuran rakyat</b>.</td></tr>
            <tr><td><b>36A–C</b></td><td>-</td><td>36A: Lambang Negara Garuda Pancasila · 36B: Lagu Kebangsaan Indonesia Raya · 36C: Ketentuan lebih lanjut diatur dengan undang-undang.</td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Hierarki Peraturan Perundang-Undangan (UU 12/2011 jo UU 13/2022)',
        html: `
        <figure class="materi-figure">
          <img src="img/hierarki-peraturan.png" alt="Piramida Hierarki Peraturan Perundang-undangan">
          <figcaption>Urutan Hierarki Peraturan Perundang-undangan (Pasal 7 ayat 1 UU 12/2011 jo UU 13/2022)</figcaption>
        </figure>
        <ol class="space-y-1">
          <li><b>1. UUD Negara Republik Indonesia Tahun 1945</b> (Hukum dasar tertinggi negara).</li>
          <li><b>2. Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR)</b>.</li>
          <li><b>3. Undang-Undang (UU) / Peraturan Pemerintah Pengganti Undang-Undang (Perppu)</b>.</li>
          <li><b>4. Peraturan Pemerintah (PP)</b> (Ditetapkan Presiden untuk menjalankan UU).</li>
          <li><b>5. Peraturan Presiden (Perpres)</b>.</li>
          <li><b>6. Peraturan Daerah Provinsi (Perda Provinsi)</b> (Dibuat DPRD Provinsi bersama Gubernur).</li>
          <li><b>7. Peraturan Daerah Kabupaten/Kota (Perda Kab/Kota)</b> (Dibuat DPRD Kab/Kota bersama Bupati/Walikota).</li>
        </ol>
        <div class="callout">
          <b>3 Asas Hukum Sakti Wajib Hafal:</b><br>
          • <b>Lex superior derogat legi inferiori</b>: Hukum yang lebih tinggi mengesampingkan hukum yang lebih rendah.<br>
          • <b>Lex specialis derogat legi generali</b>: Hukum yang bersifat khusus mengesampingkan hukum yang bersifat umum.<br>
          • <b>Lex posterior derogat legi priori</b>: Hukum yang baru mengesampingkan hukum yang lama (jika mengatur materi yang sama).
        </div>`
      }
    ],
    tips: [
      '<b>Pertimbangan Grasi & Rehabilitasi:</b> Ingat kata "MA-GR" &rarr; Grasi &amp; Rehabilitasi minta pertimbangan <b>Mahkamah Agung (MA)</b>.',
      '<b>Pertimbangan Amnesti & Abolisi:</b> Ingat "DPR-AB" &rarr; Amnesti &amp; Abolisi minta pertimbangan <b>DPR</b>.',
      '<b>Uji Materiil (Judicial Review):</b> Menguji UU terhadap UUD &rarr; <b>MK</b>. Menguji peraturan di bawah UU (PP/Perpres/Perda) terhadap UU &rarr; <b>MA</b>.',
      '<b>Hakim MK:</b> Berjumlah 9 orang (3 dari Presiden, 3 dari DPR, 3 dari MA).'
    ]
  },

  /* ============================ SKD - TWK ============================ */
  {
    id: 'nkri-bhinneka',
    group: 'TWK',
    title: 'NKRI, Batas Laut & Wawasan Nusantara',
    summary: 'Infografis batas laut UNCLOS 1982, Deklarasi Djuanda 1957, konsep Asta Gatra (Trigatra & Pancagatra), dan Bhinneka Tunggal Ika.',
    buckets: ['SKD_TWK'],
    subs: ['Pilar Negara - NKRI', 'Bhinneka Tunggal Ika'],
    sections: [
      {
        title: 'Batas Wilayah Laut Indonesia & Deklarasi Djuanda 1957',
        html: `
        <figure class="materi-figure">
          <img src="img/wilayah-laut-indonesia.png" alt="Batas Wilayah Laut Indonesia UNCLOS 1982">
          <figcaption>Penampang Batas Wilayah Laut Indonesia Menurut Deklarasi Djuanda &amp; UNCLOS 1982</figcaption>
        </figure>
        <ul>
          <li><b>Deklarasi Djuanda (13 Desember 1957)</b>: Perdana Menteri Djuanda Kartawidjaja menyatakan bahwa laut di antara dan di dalam kepulauan Indonesia adalah satu kesatuan wilayah NKRI (bukan pemisah/laut bebas seperti aturan kolonial Belanda TZMKO 1939 yang hanya 3 mil). Setiap tanggal 13 Desember diperingati sebagai <b>Hari Nusantara</b>.</li>
          <li><b>Zona Laut Menurut Konvensi PBB UNCLOS 1982</b>:
            <ul>
              <li><b>Laut Teritorial (12 Mil Laut)</b>: Ditarik dari garis pangkal pulau terluar. Indonesia memiliki <b>KEDAULATAN MUTLAK/PENUH</b> atas wilayah laut, dasar laut, tanah di bawahnya, dan ruang udara di atasnya. Kapal asing hanya memiliki hak lintas damai (innocent passage).</li>
              <li><b>Zona Tambahan (24 Mil Laut)</b>: Jarak hingga 24 mil laut dari garis pangkal. Negara berhak melakukan pengawasan bea cukai, fiskal, imigrasi, dan sanitasi.</li>
              <li><b>Zona Ekonomi Eksklusif (ZEE - 200 Mil Laut)</b>: Wilayah laut hingga 200 mil. Indonesia memiliki <b>HAK BERDAULAT (Sovereign Rights)</b> untuk eksplorasi dan eksploitasi sumber daya alam (ikan, minyak bumi lepas pantai), namun pelayaran dan penerbangan internasional tetap bebas melintas.</li>
              <li><b>Landas Kontinen</b>: Dasar laut dan tanah di bawahnya dari kelanjutan alamiah daratan hingga batas 200 mil laut (dapat mencapai 350 mil jika memenuhi kriteria geologis).</li>
            </ul>
          </li>
        </ul>`
      },
      {
        title: 'Wawasan Nusantara & Konsep Asta Gatra',
        html: `
        <p>Wawasan Nusantara adalah cara pandang bangsa Indonesia mengenai diri dan lingkungannya yang serba beragam dan bernilai strategis dengan mengutamakan persatuan bangsa dan kesatuan wilayah. Terdiri dari <b>Asta Gatra (8 Gatra)</b>:</p>
        <table class="table table-sm">
          <thead><tr><th>Kelompok Gatra</th><th>Ciri Pokok</th><th>Komponen Gatra (Wajib Hafal)</th></tr></thead>
          <tbody>
            <tr>
              <td><b>TRIGATRA</b><br>(Aspek Alamiah Statis)</td>
              <td>Kondisi alamiah yang sudah melekat sejak awal dan relatif tetap.</td>
              <td>
                1. <b>Letak dan Bentuk Geografis</b> (posisi silang strategis antara 2 benua dan 2 samudra).<br>
                2. <b>Keadaan dan Kekayaan Alam (SKA)</b> (mineral, hutan, laut).<br>
                3. <b>Keadaan dan Kemampuan Penduduk</b> (demografi, jumlah, persebaran, kualitas).
              </td>
            </tr>
            <tr>
              <td><b>PANCAGATRA</b><br>(Aspek Sosial Dinamis)</td>
              <td>Kehidupan sosial kemasyarakatan manusia yang dinamis dan terus berkembang.</td>
              <td>
                1. <b>Ideologi</b> (Pancasila sebagai pemersatu).<br>
                2. <b>Politik</b> (Sistem ketatanegaraan &amp; demokrasi).<br>
                3. <b>Ekonomi</b> (Perekonomian kerakyatan berdasar Pasal 33).<br>
                4. <b>Sosial Budaya</b> (Kearifan lokal &amp; toleransi Bhinneka Tunggal Ika).<br>
                5. <b>Pertahanan dan Keamanan (Hankam)</b> (Sishankamrata).
              </td>
            </tr>
          </tbody>
        </table>`
      }
    ],
    tips: [
      '<b>Jebakan ZEE:</b> Di ZEE (200 mil), negara memiliki <b>HAK BERDAULAT atas SDA</b>, BUKAN kedaulatan teritorial! Kedaulatan teritorial penuh hanya sampai <b>Laut Teritorial (12 mil)</b>.',
      '<b>Trigatra vs Pancagatra:</b> Trigatra = aspek ALAM (Geografi, Kekayaan Alam, Penduduk). Pancagatra = aspek SOSIAL (Ideologi, Politik, Ekonomi, Sosial-Budaya, Hankam &rarr; disingkat <b>IPOLEKSOSBUDHANKAM</b>).'
    ]
  },

  /* ============================ SKD - TWK ============================ */
  {
    id: 'nasionalisme-bela-negara',
    group: 'TWK',
    title: 'Nasionalisme & 5 Nilai Bela Negara',
    summary: '5 Nilai dasar bela negara (UU 23/2019), bentuk cinta tanah air, sejarah Budi Utomo, dan pencegahan disintegrasi.',
    buckets: ['SKD_TWK'],
    subs: ['Nasionalisme', 'Bela Negara'],
    sections: [
      {
        title: '5 Nilai Dasar Bela Negara (UU No. 23 Tahun 2019)',
        html: `
        <ol class="space-y-2">
          <li><b>1. Cinta Tanah Air</b>: Mengenal dan mencintai wilayah air dan tanah Indonesia, bangga memakai produk dalam negeri, melestarikan lingkungan, dan menjaga nama baik bangsa.</li>
          <li><b>2. Sadar Berbangsa dan Bernegara</b>: Menjalankan hak dan kewajiban sesuai perundang-undangan, menghargai keberagaman suku dan agama, serta taat aturan hukum.</li>
          <li><b>3. Setia pada Pancasila sebagai Ideologi Negara</b>: Memahami nilai-nilai Pancasila, mengamalkannya dalam kehidupan sehari-hari, dan menjadikannya pemersatu bangsa.</li>
          <li><b>4. Rela Berkorban untuk Bangsa dan Negara</b>: Bersedia mengorbankan waktu, tenaga, dan pikiran demi kemajuan bangsa; siap membela negara saat ada ancaman.</li>
          <li><b>5. Mempunyai Kemampuan Awal Bela Negara</b>:
            <ul>
              <li><i>Secara Psikis</i>: Memiliki kecerdasan emosional, spiritual, ketabahan, dan integritas moral.</li>
              <li><i>Secara Fisik</i>: Memiliki kesehatan jasmani, kebugaran, dan ketangkasan fisik.</li>
            </ul>
          </li>
        </ol>`
      },
      {
        title: 'Bentuk Komponen Pertahanan Negara (UU 23/2019)',
        html: `
        <ul>
          <li><b>Komponen Utama</b>: <b>Tentara Nasional Indonesia (TNI)</b>, yang siap digunakan untuk melaksanakan tugas-tugas pertahanan militer.</li>
          <li><b>Komponen Cadangan</b>: Warga negara, sumber daya alam, dan sarana prasarana yang telah disiapkan dan dilatih untuk dikerahkan melalui mobilisasi guna memperbesar kekuatan Komponen Utama.</li>
          <li><b>Komponen Pendukung</b>: Warga negara, sumber daya nasional yang secara langsung/tidak langsung dapat meningkatkan kekuatan komponen utama dan cadangan (misal Polri, Satpol PP, tenaga medis, logistik).</li>
        </ul>`
      }
    ],
    tips: [
      '<b>Bela negara bagi ASN:</b> Bekerja profesional, melayani masyarakat dengan tulus, dan menolak gratifikasi adalah bentuk nyata bela negara non-fisik bagi ASN.',
      '<b>Chauvinisme:</b> Nasionalisme yang sempit, berlebihan, dan memandang rendah bangsa lain (contoh: Fasisme era Hitler/Mussolini) &rarr; BERTENTANGAN dengan Pancasila.'
    ]
  },

  /* ============================ SKD - TWK ============================ */
  {
    id: 'integritas-asn',
    group: 'TWK',
    title: 'Integritas, Etika ASN & Core Values BerAKHLAK',
    summary: 'Pembeda gratifikasi vs suap vs pemerasan, 9 nilai integritas KPK, dan panduan perilaku ASN BerAKHLAK.',
    buckets: ['SKD_TWK'],
    subs: ['Integritas', 'Pilar Negara'],
    sections: [
      {
        title: 'Perbedaan Mutlak: Gratifikasi vs Suap vs Pemerasan',
        html: `
        <div class="callout"><b>⚠️ Soal Jebakan Terfavorit TWK Integritas:</b> Pahami perbedaan aktor inisiator dan motif transaksi di bawah ini:</div>
        <table class="table table-sm">
          <thead><tr><th>Tindak Pidana</th><th>Inisiator / Pelaku</th><th>Karakteristik &amp; Unsur Kunci</th><th>Contoh Kasus Nyata</th></tr></thead>
          <tbody>
            <tr>
              <td><b>Pemerasan</b></td>
              <td><b>Pejabat / ASN Aktif</b> meminta dengan ancaman</td>
              <td>Pegawai negeri <b>meminta sesuatu atau memaksa orang lain</b> memberikan uang/barang dengan menyalahgunakan kekuasaan atau ancaman menghambat layanan.</td>
              <td>Petugas perizinan menolak memproses berkas bila pemohon tidak mentransfer "uang pelicin" Rp 10 juta.</td>
            </tr>
            <tr>
              <td><b>Suap (Penyuapan)</b></td>
              <td><b>Kesepakatan bersama</b> (transaksional di muka)</td>
              <td>Adanya <b>perjanjian (meeting of minds) / timbal balik (quid pro quo)</b> untuk melakukan atau tidak melakukan sesuatu yang bertentangan dengan kewajiban jabatan.</td>
              <td>Pengusaha memberi uang Rp 50 juta kepada panitia lelang agar perusahaannya dimenangkan dalam proyek pengadaan.</td>
            </tr>
            <tr>
              <td><b>Gratifikasi</b></td>
              <td>Pihak luar memberi hadiah secara pasif tanpa janji di muka</td>
              <td>Pemberian dalam arti luas (uang, barang, diskon, tiket) yang <b>berhubungan dengan jabatan dan berlawanan dengan kewajiban</b>. Wajib lapor KPK maksimal <b>30 hari kerja</b>.</td>
              <td>Warga memberi parcel mewah kepada pejabat setelah urusan sertifikat tanahnya selesai sebagai "tanda terima kasih".</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        title: 'Core Values ASN: BerAKHLAK (SE MenPANRB No. 20/2021)',
        html: `
        <table class="table table-sm">
          <thead><tr><th>Nilai</th><th>Akronim</th><th>Kata Kunci Perilaku Utama</th></tr></thead>
          <tbody>
            <tr><td><b>Berorientasi Pelayanan</b></td><td>Ber</td><td>Komitmen memberikan pelayanan prima demi kepuasan masyarakat (Ramah, Cekatan, Solutif, Dapat diandalkan).</td></tr>
            <tr><td><b>Akuntabel</b></td><td>A</td><td>Bertanggung jawab atas kepercayaan yang diberikan; menggunakan kekayaan &amp; BMN secara bertanggung jawab, efektif, dan efisien; tidak menyalahgunakan wewenang.</td></tr>
            <tr><td><b>Kompeten</b></td><td>K</td><td>Terus belajar dan mengembangkan kapabilitas; meningkatkan kompetensi diri; membantu orang lain belajar; melaksanakan tugas dengan kualitas terbaik.</td></tr>
            <tr><td><b>Harmonis</b></td><td>H</td><td>Saling peduli dan menghargai perbedaan; suka menolong orang lain; membangun lingkungan kerja yang kondusif.</td></tr>
            <tr><td><b>Loyal</b></td><td>L</td><td>Berdedikasi dan mengutamakan kepentingan Bangsa dan Negara; memegang teguh ideologi Pancasila &amp; UUD 1945; menjaga rahasia jabatan dan rahasia negara.</td></tr>
            <tr><td><b>Adaptif</b></td><td>A</td><td>Terus berinovasi dan antusias dalam menggerakkan atau menghadapi perubahan; cepat menyesuaikan diri; bertindak proaktif.</td></tr>
            <tr><td><b>Kolaboratif</b></td><td>K</td><td>Membangun kerja sama yang sinergis; memberi kesempatan berbagai pihak untuk berkontribusi; terbuka dalam bekerja sama untuk menghasilkan nilai tambah.</td></tr>
          </tbody>
        </table>`
      }
    ],
    tips: [
      '<b>Batas Lapor Gratifikasi:</b> Wajib dilaporkan ke KPK dalam waktu maksimal <b>30 hari kerja</b> terhitung sejak tanggal gratifikasi diterima.',
      '<b>Jembatan Keledai Nilai KPK (9 Nilai Integritas):</b> "<b>JUMAT BERSEPEDA KK</b>" &rarr; JUjur, MAndiri, Tanggung jawab, BERani, Sederhana, PEduli, Disiplin, Adil, Kerja Keras.'
    ]
  },

  /* ============================ SKD - TWK ============================ */
  {
    id: 'bahasa-negara',
    group: 'TWK',
    title: 'Bahasa Indonesia: Ejaan, Kata Baku & Kalimat Efektif',
    summary: 'Kamus kata baku keramat CAT BKN, rumus kalimat efektif minimal S-P, serta kaidah tanda baca sesuai EYD Edisi V.',
    buckets: ['SKD_TWK'],
    subs: ['Bahasa Indonesia'],
    sections: [
      {
        title: 'Kamus Kata Baku vs Tidak Baku Keramat CAT BKN',
        html: `
        <table class="table table-sm">
          <thead><tr><th>Baku (BENAR)</th><th>Tidak Baku (SALAH)</th><th>Baku (BENAR)</th><th>Tidak Baku (SALAH)</th></tr></thead>
          <tbody>
            <tr><td><b>Apotek</b></td><td>Apotik</td><td><b>Analisis</b></td><td>Analisa</td></tr>
            <tr><td><b>Atlet</b></td><td>Atlit</td><td><b>Aktivitas</b></td><td>Aktifitas</td></tr>
            <tr><td><b>Cenderamata</b></td><td>Cinderamata</td><td><b>Cedera</b></td><td>Cidera</td></tr>
            <tr><td><b>Hierarki</b></td><td>Hirarki</td><td><b>Hakikat</b></td><td>Hakekat</td></tr>
            <tr><td><b>Izin</b></td><td>Ijin</td><td><b>Ijazah</b></td><td>Ijasah</td></tr>
            <tr><td><b>Jadwal</b></td><td>Jadual</td><td><b>Kaidah</b></td><td>Kaedah</td></tr>
            <tr><td><b>Karier</b></td><td>Karir</td><td><b>Kuitansi</b></td><td>Kwitansi</td></tr>
            <tr><td><b>Kualitas</b></td><td>Kwalitas</td><td><b>Kuantitas</b></td><td>Kwantitas</td></tr>
            <tr><td><b>Napas</b></td><td>Nafas</td><td><b>Nasihat</b></td><td>Nasehat</td></tr>
            <tr><td><b>Objek</b></td><td>Obyek</td><td><b>Praktik</b></td><td>Praktek</td></tr>
            <tr><td><b>Risiko</b></td><td>Resiko</td><td><b>Silakan</b></td><td>Silahkan</td></tr>
            <tr><td><b>Sistem</b></td><td>Sistim</td><td><b>Standardisasi</b></td><td>Standarisasi</td></tr>
            <tr><td><b>Zaman</b></td><td>Jaman</td><td><b>Mengubah</b></td><td>Merubah</td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Ciri-Ciri Kalimat Efektif',
        html: `
        <ol class="space-y-1">
          <li><b>1. Kesepadanan Struktur</b>: Wajib memiliki unsur <b>Subjek (S) dan Predikat (P)</b> yang jelas. Tidak boleh meletakkan kata depan (di, bagi, untuk, dalam) di awal subjek tanpa induk kalimat (contoh salah: <i>"Bagi seluruh peserta ujian harus membawa KTP"</i> &rarr; benar: <i>"Seluruh peserta ujian harus membawa KTP"</i>).</li>
          <li><b>2. Keparalelan Bentuk</b>: Penggunaan imbuhan yang setara dalam rincian (contoh salah: <i>"Kegiatan meliputi pembersihan saluran, mencat pagar, dan perbaikan jalan"</i> &rarr; benar: <i>"pembersihan saluran, pengecatan pagar, dan perbaikan jalan"</i>).</li>
          <li><b>3. Kehematan Kata</b>: Tidak mengulang subjek dan menghindari sinonim berlebihan (hindari: <i>"adalah merupakan"</i>, <i>"agar supaya"</i>, <i>"demi untuk"</i>, <i>"sangat indah sekali"</i>, <i>"para hadirin sekalian"</i>).</li>
          <li><b>4. Kelogisan Penalaran</b>: Makna kalimat dapat diterima oleh akal sehat (contoh salah: <i>"Waktu dan tempat kami persilakan"</i> &rarr; waktu dan tempat tidak bisa berjalan, yang dipersilakan adalah pembicaranya).</li>
        </ol>`
      }
    ],
    tips: [
      'Kata berawalan <b>K, T, S, P</b> luluh jika bertemu awalan <i>me-</i>: me + tiup = <b>meniup</b>, me + pesona = <b>memesona</b>, me + sontek = <b>menyontek</b> (bukan menyontek/mensontek), me + ubah = <b>mengubah</b> (bukan merubah).',
      'Koma sebelum kata penghubung pertentangan: ... <b>, tetapi</b> ... / ... <b>, melainkan</b> ... / ... <b>, sedangkan</b> ...'
    ]
  },

  /* ============================ SKD - TIU ============================ */
  {
    id: 'soal-cerita',
    group: 'TIU',
    title: 'Soal Cerita: Kecepatan, Kerja, Himpunan & Rata-rata',
    summary: 'Infografis rumus diagram Venn 2 & 3 himpunan, trik berpapasan & menyusul, rumus kerja bersama, dan rata-rata gabungan.',
    buckets: ['SKD_TIU'],
    subs: ['Numerik - Soal Cerita'],
    sections: [
      {
        title: 'Rumus Cepat Kecepatan: Berpapasan & Menyusul',
        html: `
        <figure class="materi-figure">
          <img src="img/kecepatan-papasan-tiu.png" alt="Rumus Cepat Berpapasan dan Menyusul TIU">
          <figcaption>Rumus Kilat Kecepatan Berpapasan (Arah Berlawanan) dan Menyusul (Arah Searah)</figcaption>
        </figure>
        <ul>
          <li><b>1. Berpapasan (Waktu Berangkat Sama)</b>:
            <div class="callout"><b>t = Jarak Total / (V₁ + V₂)</b> &nbsp;|&nbsp; <i>Kecepatan DIJUMLAHKAN karena saling mendekat.</i></div>
          </li>
          <li><b>2. Berpapasan (Waktu Berangkat Berbeda)</b>:
            <div class="callout"><b>t = (Jarak Total − Selisih Jarak) / (V₁ + V₂)</b><br><small>Selisih Jarak = Kecepatan Orang 1 &times; Selisih Waktu Berangkat</small></div>
          </li>
          <li><b>3. Menyusul (Arah Sama, Berangkat Beda Waktu)</b>:
            <div class="callout"><b>t = Selisih Jarak / (V₂ − V₁)</b> &nbsp;|&nbsp; <i>Kecepatan DIKURANGKAN (V₂ mobil pengejar yang lebih cepat).</i></div>
          </li>
        </ul>`
      },
      {
        title: 'Rumus Sakti Diagram Venn (Himpunan)',
        html: `
        <figure class="materi-figure">
          <img src="img/diagram-venn-tiu.png" alt="Rumus Sakti Diagram Venn TIU">
          <figcaption>Rumus Cepat Soal Cerita Himpunan: Isi Irisan Pusat Terlebih Dahulu</figcaption>
        </figure>
        <ul>
          <li><b>Rumus 2 Himpunan (Paling Sering Keluar)</b>:
            <div class="callout"><b>Total = Suka A + Suka B − Suka Keduanya + Tidak Suka Keduanya</b></div>
            <i>Contoh Cepat:</i> Dari 40 siswa, 25 suka MTK, 20 suka IPA, 5 tidak suka keduanya. Berapa suka keduanya?<br>
            40 = 25 + 20 − x + 5 &rarr; 40 = 50 − x &rarr; <b>x = 10 siswa</b>.
          </li>
          <li><b>Rumus 3 Himpunan</b>:
            <div class="callout"><b>Total = (A + B + C) − (Irisan 2) + Irisan Ketiganya + Luar</b></div>
          </li>
        </ul>`
      },
      {
        title: 'Rumus Kilat Kerja Bersama & Rata-rata Gabungan',
        html: `
        <ul>
          <li><b>Kerja Bersama 2 Orang</b>:
            Jika A selesai dalam waktu $a$ jam dan B selesai dalam $b$ jam, maka jika bekerja bersama selesai dalam:
            <div class="callout"><b>Waktu Bersama = (a &times; b) / (a + b)</b> &nbsp;|&nbsp; <i>Contoh: A = 6 jam, B = 3 jam &rarr; (6 &times; 3)/(6 + 3) = 18/9 = 2 jam!</i></div>
          </li>
          <li><b>Rata-rata Gabungan (Rumus Timbangan Cepat)</b>:
            <div class="callout"><b>X̄_gab = (n₁ &times; X̄₁ + n₂ &times; X̄₂) / (n₁ + n₂)</b></div>
          </li>
        </ul>`
      }
    ],
    tips: [
      '<b>Trik Berpapasan:</b> Berangkat beda jam? Hitung dulu jarak yang sudah ditempuh orang pertama, lalu kurangkan dari total jarak!',
      '<b>Trik Kerja Bersama:</b> Kalikan kedua angka, lalu bagi dengan jumlah kedua angka: <b>(A &times; B) / (A + B)</b>.'
    ]
  },

  /* ============================ SKD - TIU ============================ */
  {
    id: 'deret-angka',
    group: 'TIU',
    title: 'Deret Angka & Huruf (Pola Cepat)',
    summary: 'Metode mendeteksi pola 1 tingkat, 2 tingkat, selang-seling (loncat 1 / loncat 2), dan konversi deret huruf.',
    buckets: ['SKD_TIU'],
    subs: ['Numerik - Deret Angka'],
    sections: [
      {
        title: 'Strategi Mengenali Pola Deret Angka dalam 10 Detik',
        html: `
        <ol class="space-y-2">
          <li><b>Langkah 1: Periksa Naik-Turunnya Angka</b>.
            <ul>
              <li>Jika angka <b>selalu naik perlahan</b>: Pola penjumlahan biasa (+2, +4, +6) atau pola 2 tingkat.</li>
              <li>Jika angka <b>melonjak tajam</b>: Pola perkalian (&times;2, &times;3) atau kuadrat ($n^2$).</li>
              <li>Jika angka <b>naik-turun berulang</b>: Pola <b>loncat selang-seling</b> (deret ganda: pisahkan indeks ganjil dan indeks genap).</li>
            </ul>
          </li>
          <li><b>Langkah 2: Deret Fibonacci</b>.
            Tiap suku adalah hasil penjumlahan 2 suku sebelumnya: $1, 2, 3, 5, 8, 13, 21, \dots$</li>
          <li><b>Langkah 3: Deret Huruf</b>.
            Konversikan huruf ke angka urut alfabet: $A=1, B=2, C=3, \dots, Z=26$.
            Hafalkan patokan 5 angka: <b>E = 5, J = 10, O = 15, T = 20, Y = 25</b> (Jembatan keledai: <i>EJOTY</i>).
          </li>
        </ol>`
      }
    ],
    tips: [
      'Jika deret memiliki lebih dari 7 suku, <b>90% kemungkinannya adalah deret larik 2 atau larik 3</b> (loncat 1 atau loncat 2 angka).',
      'Gunakan jembatan keledai <b>EJOTY (5, 10, 15, 20, 25)</b> untuk menghitung posisi huruf tanpa perlu mengeja dari A.'
    ]
  },

  /* ============================ SKD - TIU ============================ */
  {
    id: 'analogi',
    group: 'TIU',
    title: 'Analogi (Verbal)',
    summary: 'Hubungan kata, fungsi, asosiasi, sebab-akibat, dan trik membuat kalimat jembatan.',
    buckets: ['SKD_TIU'],
    subs: ['Verbal - Analogi'],
    sections: [
      {
        title: 'Trik Membuat Kalimat Jembatan yang Spesifik',
        html: `
        <ul>
          <li><b>Metode Kalimat Jembatan</b>: Hubungkan kata pertama dan kedua menjadi kalimat utuh yang logis. Kalimat yang sama harus berlaku persis pada pasangan opsi jawaban.</li>
          <li><b>6 Tipe Hubungan Utama</b>:
            <ol>
              <li><i>Fungsi / Kegunaan</i>: Pisau : Memotong = Pensil : Menulis.</li>
              <li><i>Sebab - Akibat</i>: Hujan : Banjir = Api : Panas.</li>
              <li><i>Derajat / Intensitas</i>: Dingin : Beku = Hangat : Panas.</li>
              <li><i>Bagian dari Keseluruhan</i>: Bab : Buku = Kamar : Rumah.</li>
              <li><i>Tempat / Habitat</i>: Harimau : Hutan = Paus : Laut.</li>
              <li><i>Asosiasi Karakteristik</i>: Bunglon : Kamuflase = Singa : Predator.</li>
            </ol>
          </li>
        </ul>`
      }
    ],
    tips: [
      'Jangan membuat kalimat yang terlalu umum. Semakin spesifik kalimat jembatanmu, semakin cepat terhindar dari opsi pengecoh.',
      'Perhatikan <b>urutan posisi</b> kata: jika subjek di kiri, opsi jawaban juga wajib subjek di sebelah kiri.'
    ]
  },

  /* ============================ SKD - TIU ============================ */
  {
    id: 'silogisme',
    group: 'TIU',
    title: 'Silogisme, Logika Posisi & Kuantor',
    summary: 'Hukum silogisme formal (Modus Ponens, Tollens, Silogisme), negasi kuantor Semua vs Ada/Sebagian, dan trik analitis urutan.',
    buckets: ['SKD_TIU'],
    subs: ['Logika Silogisme'],
    sections: [
      {
        title: '3 Kaidah Penarikan Kesimpulan Sah',
        html: `
        <table class="table table-sm">
          <thead><tr><th>Metode</th><th>Premis 1</th><th>Premis 2</th><th>Kesimpulan Sah</th></tr></thead>
          <tbody>
            <tr><td><b>Modus Ponens</b></td><td>Jika $P$ maka $Q$ ($P \rightarrow Q$)</td><td>Terjadi $P$</td><td><b>Maka terjadi $Q$</b></td></tr>
            <tr><td><b>Modus Tollens</b></td><td>Jika $P$ maka $Q$ ($P \rightarrow Q$)</td><td>Tidak $Q$ ($\sim Q$)</td><td><b>Maka tidak $P$ ($\sim P$)</b></td></tr>
            <tr><td><b>Silogisme</b></td><td>$P \rightarrow Q$</td><td>$Q \rightarrow R$</td><td><b>Maka $P \rightarrow R$</b></td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Aturan Hukum Kuantor (Semua vs Sebagian)',
        html: `
        <ul>
          <li><b>Kaidah 1: Premis Universal + Premis Partikular</b>:
            Jika salah satu premis menggunakan kata <b>sebagian / beberapa / ada / sementara</b>, maka kesimpulan WAJIB diawali kata <b>SEBAGIAN / BEBERAPA / ADA</b> (tidak boleh "Semua").
          </li>
          <li><b>Kaidah 2: Negasi / Ingkaran</b>:
            Ingkaran dari "Semua peserta lulus" adalah <b>"Ada / beberapa peserta yang TIDAK lulus"</b>.
          </li>
          <li><b>Kaidah 3: Dua Premis Negatif</b>:
            Jika kedua premis berbentuk negatif (tidak/bukan), maka <b>TIDAK DAPAT DITARIK KESIMPULAN</b> yang sah.
          </li>
        </ul>`
      }
    ],
    tips: [
      'Ada kata <i>"sementara / sebagian / ada"</i> pada salah satu soal? <b>Coret semua opsi jawaban yang diawali kata "Semua"!</b>',
      'Jangan gunakan opini pribadi atau logika umum di luar teks soal; patuhi hanya fakta yang tercantum pada premis.'
    ]
  },

  /* ============================ SKD - TIU ============================ */
  {
    id: 'perbandingan-kuantitatif',
    group: 'TIU',
    title: 'Perbandingan Kuantitatif & Aritmetika Sosial',
    summary: 'Perbandingan senilai vs berbalik nilai, trik tabel silang, dan rumus cepat untung, rugi, serta diskon bertingkat.',
    buckets: ['SKD_TIU'],
    subs: ['Numerik - Perbandingan'],
    sections: [
      {
        title: 'Perbandingan Senilai vs Berbalik Nilai',
        html: `
        <table class="table table-sm">
          <thead><tr><th>Jenis Perbandingan</th><th>Konsep Cepat</th><th>Pola Perkalian</th><th>Contoh Soal Nyata</th></tr></thead>
          <tbody>
            <tr>
              <td><b>Perbandingan Senilai</b></td>
              <td>Jika variabel A naik &rarr; variabel B <b>ikut naik</b></td>
              <td><b>Perkalian Silang</b>:<br>$A_1 \times B_2 = A_2 \times B_1$</td>
              <td>Jarak tempuh dengan bensin, jumlah barang dengan total harga pembelian, porsi makanan dengan orang.</td>
            </tr>
            <tr>
              <td><b>Perbandingan Berbalik Nilai</b></td>
              <td>Jika variabel A naik &rarr; variabel B <b>malah turun</b></td>
              <td><b>Perkalian Lurus</b>:<br>$A_1 \times B_1 = A_2 \times B_2$</td>
              <td>Jumlah pekerja dengan waktu penyelesaian proyek, kecepatan kendaraan dengan waktu tempuh, persediaan pakan ternak.</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        title: 'Aritmetika Sosial: Diskon Bertingkat & Untung Rugi',
        html: `
        <ul>
          <li><b>Trik Diskon Ganda (Diskon $A\% + B\%$)</b>:
            Diskon total BUKAN dijumlahkan langsung!
            <div class="callout"><b>Diskon Total = (A + B) − (A &times; B / 100)%</b><br><i>Contoh Diskon 50% + 20%:</i> (50 + 20) − (50 &times; 20 / 100) = 70 − 10 = <b>60%</b> (bukan 70%)!</div>
          </li>
          <li><b>Untung dan Rugi</b>:
            Persentase untung selalu dihitung terhadap <b>Harga Beli (Modal)</b>, bukan harga jual!
            $$\% \text{Untung} = \frac{\text{Harga Jual} - \text{Harga Beli}}{\text{Harga Beli}} \times 100\%$$
          </li>
        </ul>`
      }
    ],
    tips: [
      'Proyek berhenti beberapa hari? Hitung sisa beban kerja yang belum selesai, lalu bagi dengan sisa hari yang tersedia untuk menemukan jumlah tambahan pekerja!',
      'Diskon bertingkat $A\% + B\%$ selalu menghasilkan diskon yang lebih kecil daripada $A + B$.'
    ]
  },

  /* ============================ SKD - TIU ============================ */
  {
    id: 'figural-analitis',
    group: 'TIU',
    title: 'Figural & Penalaran Analitis',
    summary: 'Trik serial gambar, rotasi sudut, refleksi cermin, analogi bangun 2D/3D, dan urutan analitis tempat duduk.',
    buckets: ['SKD_TIU'],
    subs: ['Figural - Serial', 'Analitis'],
    sections: [
      {
        title: '5 Kunci Membaca Pola Soal Figural',
        html: `
        <ol class="space-y-1">
          <li><b>1. Rotasi Sudut</b>: Amati apakah elemen berputar searah jarum jam (CW) atau berlawanan (CCW) sejauh $45^\circ$, $90^\circ$, atau $180^\circ$.</li>
          <li><b>2. Penambahan / Pengurangan Elemen</b>: Hitung jumlah garis, titik, sisi poligon (3, 4, 5, 6 sisi).</li>
          <li><b>3. Perubahan Arsiran / Warna</b>: Perhatikan pola selang-seling (hitam &rarr; putih &rarr; bergaris).</li>
          <li><b>4. Refleksi (Pencerminan)</b>: Bayangan cermin vertikal atau horizontal.</li>
          <li><b>5. Analitis Posisi</b>: Buat sketsa diagram garis atau lingkaran segera saat membaca teks urutan antrean atau meja bundar.</li>
        </ol>`
      }
    ],
    tips: [
      'Fokus pada <b>satu elemen kecil yang unik</b> (misal titik hitam di ujung) dan lacak pergerakannya dari gambar 1 ke gambar berikutnya.',
      'Soal analitis tempat duduk: tentukan posisi yang PASTI terlebih dahulu sebagai jangkar sebelum menempatkan variabel yang belum pasti.'
    ]
  },

  /* ============================ SKD - TKP ============================ */
  {
    id: 'strategi-tkp',
    group: 'TKP',
    title: 'Strategi Umum TKP: Cara Mendapat Skor 5',
    summary: 'Pola memilih jawaban bernilai 5 di enam pilar TKP berlandaskan Core Values ASN BerAKHLAK.',
    buckets: ['SKD_TKP'],
    sections: [
      {
        title: 'Prinsip Umum Menjawab Soal TKP',
        html: `
        <ul>
          <li><b>Tidak Ada Jawaban Salah</b>: Opsi bernilai 1 sampai 5. Targetmu adalah konsisten memilih opsi bernilai <b>5</b>.</li>
          <li><b>Mindset ASN Unggul</b>: Tempatkan dirimu sebagai aparatur yang berintegritas tinggi, berorientasi pelayanan masyarakat, proaktif, dan bertanggung jawab penuh.</li>
          <li><b>Karakteristik Opsi 5</b>:
            <ol>
              <li>Menunjukkan <b>aksi nyata dan inisiatif solutif</b> (bukan sekadar niat atau menunggu perintah).</li>
              <li>Mengutamakan <b>kepentingan publik/organisasi</b> di atas kepentingan pribadi.</li>
              <li>Menjunjung tinggi <b>etika, integritas, dan regulasi resmi</b>.</li>
              <li>Menghargai keragaman serta mampu beradaptasi cepat dengan teknologi dan perubahan.</li>
            </ol>
          </li>
        </ul>`
      }
    ],
    tips: [
      'Pilih jawaban yang <b>paling solutif, tuntas, dan beretika</b>.',
      'Hindari opsi yang defensif, emosional, pasif menunggu, atau melimpahkan tanggung jawab kepada orang lain.'
    ]
  },
  {
    id: 'tkp-pelayanan-publik',
    group: 'TKP',
    title: 'TKP — Pelayanan Publik',
    summary: 'Melayani masyarakat secara ramah, cepat, adil, tanpa pamrih, dan mengutamakan kepuasan pengguna layanan.',
    buckets: ['SKD_TKP'],
    subs: ['Pelayanan Publik'],
    sections: [
      {
        title: 'Formula Memilih Skor 5 Pelayanan Publik',
        html: `
        <ul>
          <li>Ketika ada warga komplain atau antrean panjang: <b>Tetap tenang, dengarkan dengan empati, berikan penjelasan transparan, dan segera cari solusi alternatif</b> sesuai SOP.</li>
          <li>Jangan pernah meminta imbalan atau membeda-bedakan perlakuan berdasarkan status sosial.</li>
        </ul>`
      }
    ],
    tips: [
      'Skor 5: <b>Mendengarkan + Meminta maaf atas ketidaknyamanan + Memberi solusi nyata sesuai aturan</b>.',
      'Skor 1: Marah-marah, berdebat dengan warga, atau meninggalkan loket pelayanan.'
    ]
  },
  {
    id: 'tkp-jejaring-kerja',
    group: 'TKP',
    title: 'TKP — Jejaring Kerja & Kolaborasi',
    summary: 'Membangun relasi kerja yang solid, berbagi informasi secara positif, dan menyelesaikan konflik tim.',
    buckets: ['SKD_TKP'],
    subs: ['Jejaring Kerja'],
    sections: [
      {
        title: 'Formula Kolaborasi Antar-Rekan Kerja',
        html: `
        <ul>
          <li>Konflik pendapat dengan rekan: <b>Bicarakan secara langsung dari hati ke hati</b>, fokus pada tujuan bersama tim, cari titik temu win-win solution.</li>
          <li>Bekerja sama lintas instansi: Terbuka berbagi informasi yang relevan demi kelancaran program bersama.</li>
        </ul>`
      }
    ],
    tips: [
      'Skor 5: Berinisiatif menjalin komunikasi terbuka dan mengutamakan kekompakan tim.',
      'Eskalasi ke pimpinan adalah jalan terakhir setelah komunikasi persuasif dilakukan.'
    ]
  },
  {
    id: 'tkp-sosial-budaya',
    group: 'TKP',
    title: 'TKP — Sosial Budaya',
    summary: 'Toleransi, menghargai adat istiadat, dan kemampuan beradaptasi di daerah penempatan baru.',
    buckets: ['SKD_TKP'],
    subs: ['Sosial Budaya'],
    sections: [
      {
        title: 'Adaptasi Keberagaman Budaya',
        html: `
        <ul>
          <li>Ditempatkan di daerah baru: <b>Pelajari adat istiadat lokal, bersikap santun, dan aktif berbaur</b> dalam kegiatan kemasyarakatan.</li>
          <li>Hormati perbedaan keyakinan dan hindari memaksakan norma pribadi.</li>
        </ul>`
      }
    ],
    tips: [
      'Skor 5: Terbuka, menghargai budaya setempat, dan berpartisipasi aktif dalam masyarakat.',
      'Skor rendah: Menarik diri, menganggap budayanya paling benar, atau bersikap eksklusif.'
    ]
  },
  {
    id: 'tkp-tik',
    group: 'TKP',
    title: 'TKP — Teknologi Informasi & Komunikasi',
    summary: 'Pemanfaatan sistem digital, literasi keamanan siber, dan keterbukaan belajar teknologi baru.',
    buckets: ['SKD_TKP'],
    subs: ['Teknologi Informasi'],
    sections: [
      {
        title: 'Pemanfaatan TIK dan Keamanan Data',
        html: `
        <ul>
          <li>Instansi menerapkan sistem aplikasi baru: <b>Antusias mempelajari fitur-fiturnya</b> dan membantu rekan senior yang kesulitan.</li>
          <li>Keamanan data: Jangan membagikan password, lindungi data rahasia instansi, dan verifikasi fakta sebelum menyebarkan info (anti-hoaks).</li>
        </ul>`
      }
    ],
    tips: [
      'Skor 5: <b>Mau belajar + Memanfaatkan teknologi demi efisiensi + Sadar keamanan data</b>.',
      'Skor 1: Menolak perubahan sistem digital dan tetap ingin cara manual yang lambat.'
    ]
  },
  {
    id: 'tkp-profesionalisme',
    group: 'TKP',
    title: 'TKP — Profesionalisme',
    summary: 'Disiplin, integritas waktu, manajemen prioritas penting-mendesak, dan tanggung jawab hasil kerja.',
    buckets: ['SKD_TKP'],
    subs: ['Profesionalisme'],
    sections: [
      {
        title: 'Manajemen Tugas dan Tekanan Kerja',
        html: `
        <ul>
          <li>Tugas menumpuk dengan batas waktu mepet: <b>Susun skala prioritas (matriks penting-mendesak)</b>, selesaikan satu per satu dengan fokus, dan komunikasikan kendala sejak dini kepada atasan.</li>
          <li>Kritik dari atasan: Terima dengan lapang dada sebagai bahan evaluasi pengembangan diri.</li>
        </ul>`
      }
    ],
    tips: [
      'Skor 5: Bertanggung jawab penuh menuntaskan tugas dengan kualitas prima tepat waktu.',
      'Skor rendah: Menyerah pada tekanan, menyalahkan rekan lain, atau meninggalkan tugas.'
    ]
  },
  {
    id: 'tkp-anti-radikalisme',
    group: 'TKP',
    title: 'TKP — Anti Radikalisme',
    summary: 'Sikap teguh pada Pancasila & NKRI, menangkal intoleransi, dan langkah penanganan persuasif serta jalur resmi.',
    buckets: ['SKD_TKP'],
    subs: ['Anti Radikalisme'],
    sections: [
      {
        title: 'Menghadapi Paham Radikal & Intoleransi',
        html: `
        <ul>
          <li>Mendengar rekan mulai terpengaruh ujaran kebencian/intoleran: <b>Lakukan pendekatan persuasif dan dialog santun</b> terlebih dahulu.</li>
          <li>Jika sudah mengarah pada ancaman nyata atau pelanggaran hukum: <b>Laporkan kepada atasan atau pihak berwenang</b> melalui kanal resmi.</li>
        </ul>`
      }
    ],
    tips: [
      'Skor 5: Menggabungkan <b>sikap persuasif awal + tindakan tegas melalui jalur resmi</b>.',
      'Skor rendah: Ikut terprovokasi, memusuhi secara anarkis, atau justru membiarkannya menyebar luas.'
    ]
  },

  /* ============================ SKB - PRAKOM ============================ */
  {
    id: 'skb-prakom',
    group: 'SKB',
    skbCategory: 'PRAKOM',
    title: 'SKB Pranata Komputer (Prakom) — Master Cheat Sheet',
    summary: 'Infografis OSI 7 layer, 4 topologi jaringan, 6 domain SPBE, trik subnetting kilat, SQL, normalisasi, Scrum, dan keamanan siber.',
    buckets: ['SKB_PRAKOM'],
    sections: [
      {
        title: 'Model Referensi 7 Lapisan OSI (Paling Sering Keluar)',
        html: `
        <figure class="materi-figure">
          <img src="img/osi-7-layer.png" alt="Model 7 Lapisan OSI">
          <figcaption>Model Referensi 7 Lapisan OSI: PDU, Perangkat Kerja, dan Protokol Standar</figcaption>
        </figure>
        <table class="table table-sm">
          <thead><tr><th>Layer</th><th>Nama Lapisan</th><th>PDU</th><th>Perangkat Kerja</th><th>Protokol Kunci</th></tr></thead>
          <tbody>
            <tr><td><b>7</b></td><td>Application</td><td>Data</td><td>Gateway, PC Client</td><td>HTTP, HTTPS, DNS, FTP, SMTP, SSH, DHCP</td></tr>
            <tr><td><b>6</b></td><td>Presentation</td><td>Data</td><td>OS / Middleware</td><td>SSL/TLS, JPEG, ASCII, Kompresi, Enkripsi</td></tr>
            <tr><td><b>5</b></td><td>Session</td><td>Data</td><td>OS / Socket</td><td>RPC, NetBIOS, PPTP, Sesi Dialog</td></tr>
            <tr><td><b>4</b></td><td>Transport</td><td>Segment</td><td>Firewall L4, LB</td><td>TCP (Andal/3-way handshake), UDP (Cepat/Streaming)</td></tr>
            <tr><td><b>3</b></td><td>Network</td><td>Packet</td><td><b>ROUTER</b>, Switch L3</td><td>IPv4, IPv6, ICMP (Ping), OSPF, BGP, ARP</td></tr>
            <tr><td><b>2</b></td><td>Data Link</td><td>Frame</td><td><b>SWITCH L2</b>, Bridge, NIC</td><td>MAC Address, Ethernet, VLAN, Wi-Fi 802.11</td></tr>
            <tr><td><b>1</b></td><td>Physical</td><td>Bits</td><td><b>HUB</b>, Repeater, Kabel</td><td>Kabel UTP (RJ-45), Fiber Optik, Sinyal Listrik</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Mnemonik Menghafal dari Atas ke Bawah (Layer 7 &rarr; 1):</b><br>
        <i>"<b>A</b>nak <b>P</b>ak <b>S</b>oleh <b>T</b>idak <b>N</b>akal <b>D</b>an <b>P</b>intar"</i> &rarr; <b>A</b>pplication, <b>P</b>resentation, <b>S</b>ession, <b>T</b>ransport, <b>N</b>etwork, <b>D</b>ata Link, <b>P</b>hysical.</div>`
      },
      {
        title: '4 Topologi Jaringan Komputer & Rumus Kabel Mesh',
        html: `
        <figure class="materi-figure">
          <img src="img/topologi-jaringan.png" alt="4 Topologi Jaringan Komputer">
          <figcaption>Karakteristik &amp; Rumus 4 Topologi Jaringan Utama (Star, Mesh, Bus, Ring)</figcaption>
        </figure>
        <ul>
          <li><b>Topologi Star</b>: Semua node terhubung ke <b>Switch/Hub sentral</b>. Paling banyak dipakai di kantor pemerintah. Kelemahan: <i>Single Point of Failure</i> jika Switch sentral rusak.</li>
          <li><b>Topologi Mesh (Full Mesh)</b>: Setiap komputer terhubung langsung ke semua komputer lain. Toleransi kesalahan dan redundansi tertinggi.
            <div class="callout"><b>Rumus Jumlah Kabel Full Mesh: N &times; (N − 1) / 2</b><br>Contoh: 6 komputer butuh (6 &times; 5)/2 = <b>15 kabel link</b>.</div>
          </li>
          <li><b>Topologi Bus</b>: Memakai satu kabel utama (backbone). Di kedua ujung kabel wajib dipasang <b>Terminator</b> (50 ohm). Jika kabel utama putus, seluruh jaringan mati.</li>
          <li><b>Topologi Ring</b>: Berbentuk cincin tertutup. Pengiriman data berputar satu arah menggunakan <b>Token Passing</b> (bebas tabrakan data / collision-free).</li>
        </ul>`
      },
      {
        title: 'Trik Kilat Subnetting IPv4 (/24 s/d /30) & Port Keramat',
        html: `
        <p>Rumus Host Valid (Usable Hosts) = <b>2ⁿ − 2</b> (di mana $n = 32 - \text{prefix}$, dikurangi 2 untuk Network Address dan Broadcast Address).</p>
        <table class="table table-sm">
          <thead><tr><th>CIDR</th><th>Subnet Mask Desimal</th><th>Sisa Bit Host ($n$)</th><th>Jumlah Usable Host</th><th>Jumlah Subnet dari /24</th></tr></thead>
          <tbody>
            <tr><td><b>/24</b></td><td>255.255.255.0</td><td>8 bit</td><td>$2^8 - 2 =$ <b>254 host</b></td><td>1 subnet</td></tr>
            <tr><td><b>/25</b></td><td>255.255.255.128</td><td>7 bit</td><td>$2^7 - 2 =$ <b>126 host</b></td><td>2 subnet</td></tr>
            <tr><td><b>/26</b></td><td>255.255.255.192</td><td>6 bit</td><td>$2^6 - 2 =$ <b>62 host</b></td><td>4 subnet</td></tr>
            <tr><td><b>/27</b></td><td>255.255.255.224</td><td>5 bit</td><td>$2^5 - 2 =$ <b>30 host</b></td><td>8 subnet</td></tr>
            <tr><td><b>/28</b></td><td>255.255.255.240</td><td>4 bit</td><td>$2^4 - 2 =$ <b>14 host</b></td><td>16 subnet</td></tr>
            <tr><td><b>/29</b></td><td>255.255.255.248</td><td>3 bit</td><td>$2^3 - 2 =$ <b>6 host</b></td><td>32 subnet</td></tr>
            <tr><td><b>/30</b></td><td>255.255.255.252</td><td>2 bit</td><td>$2^2 - 2 =$ <b>2 host</b></td><td>64 subnet (Point-to-Point)</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Port Standar Wajib Hafal:</b><br>
        FTP = 20/21 · SSH = 22 · Telnet = 23 · SMTP = 25 · DNS = 53 · DHCP = 67/68 · HTTP = 80 · POP3 = 110 · IMAP = 143 · HTTPS = 443 · MySQL = 3306 · RDP = 3389 · PostgreSQL = 5432.</div>`
      },
      {
        title: 'Tata Kelola TI, SPBE (Perpres 95/2018), COBIT & ITIL',
        html: `
        <figure class="materi-figure">
          <img src="img/arsitektur-spbe.png" alt="6 Domain Arsitektur SPBE Nasional">
          <figcaption>6 Domain Arsitektur SPBE Nasional (Perpres 95/2018) &amp; Landasan Regulasi JF Prakom</figcaption>
        </figure>
        <ul>
          <li><b>Regulasi JF Prakom (PermenPANRB 32/2020)</b>:
            <ul>
              <li>Kategori Keterampilan: Terampil, Mahir, Penyelia.</li>
              <li>Kategori Keahlian: Ahli Pertama, Ahli Muda, Ahli Madya, Ahli Utama.</li>
              <li>3 Unsur Utama: <b>1) Tata kelola TI</b>, <b>2) Infrastruktur TI</b>, <b>3) Sistem informasi dan multimedia</b>.</li>
            </ul>
          </li>
          <li><b>6 Domain Arsitektur SPBE (Perpres 95/2018)</b>: 1. Proses Bisnis, 2. Data &amp; Informasi, 3. Layanan SPBE, 4. Aplikasi SPBE, 5. Infrastruktur SPBE, 6. Keamanan SPBE.</li>
          <li><b>COBIT 2019</b>: Membedakan Governance vs Management. Domain Governance hanya 1 yaitu <b>EDM (Evaluate, Direct, and Monitor)</b>. 4 Domain Management: APO, BAI, DSS, MEA.</li>
          <li><b>ITIL v4</b>:
            <ul>
              <li><i>Incident Management</i>: Memulihkan layanan normal secepat mungkin saat ada gangguan (workaround).</li>
              <li><i>Problem Management</i>: Menganalisis dan menuntaskan akar penyebab masalah (Root Cause Analysis).</li>
              <li><i>SLA</i> (Service Level Agreement): Kontrak komitmen layanan antara penyedia TI dan pengguna/klien.</li>
            </ul>
          </li>
        </ul>`
      },
      {
        title: 'Basis Data & SQL (DDL, DML, DCL, Normalisasi & ACID)',
        html: `
        <ul>
          <li><b>Klasifikasi Perintah SQL</b>:
            <ul>
              <li><b>DDL (Data Definition)</b>: <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code> (mengatur struktur tabel).</li>
              <li><b>DML (Data Manipulation)</b>: <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code> (mengolah isi baris data).</li>
              <li><b>DQL (Data Query)</b>: <code>SELECT</code> (menampilkan data).</li>
              <li><b>DCL (Data Control)</b>: <code>GRANT</code> (memberi hak akses), <code>REVOKE</code> (mencabut hak akses).</li>
              <li><b>TCL (Transaction Control)</b>: <code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code>.</li>
            </ul>
          </li>
          <li><b>Tahapan Normalisasi Basis Data</b>:
            <ol>
              <li><b>1NF (First Normal Form)</b>: Nilai data harus bersifat <b>atomik</b> (tidak ada multi-value atau repeating group).</li>
              <li><b>2NF (Second Normal Form)</b>: Telah memenuhi 1NF dan menghilangkan <b>ketergantungan fungsional parsial</b> terhadap primary key komposit.</li>
              <li><b>3NF (Third Normal Form)</b>: Telah memenuhi 2NF dan menghilangkan <b>ketergantungan transitif</b> (kolom non-key tidak boleh bergantung pada kolom non-key lainnya).</li>
            </ol>
          </li>
          <li><b>Sifat Transaksi ACID</b>:
            <b>Atomicity</b> (All or Nothing: semua berhasil atau batal seluruhnya), <b>Consistency</b> (menjaga integritas data), <b>Isolation</b> (transaksi berjalan terpisah tanpa saling ganggu), <b>Durability</b> (data tersimpan permanen setelah commit).
          </li>
        </ul>`
      },
      {
        title: 'Rekayasa Perangkat Lunak, Agile Scrum, Testing & API',
        html: `
        <ul>
          <li><b>Agile Scrum</b>: 4 Seremoni Resmi &rarr; <i>Sprint Planning</i> (merencanakan backlog), <i>Daily Scrum</i> (rapat harian 15 menit), <i>Sprint Review</i> (demo hasil produk ke stakeholder), <i>Sprint Retrospective</i> (evaluasi internal tim).</li>
          <li><b>Diagram UML</b>:
            <ul>
              <li><b>Use Case Diagram</b>: Menggambarkan fungsi sistem dari sudut pandang <i>aktor</i> luar.</li>
              <li><b>Class Diagram</b>: Struktur statis kelas, atribut, metode, dan relasi inheritance/asosiasi.</li>
              <li><b>Sequence Diagram</b>: Interaksi antar-objek berdasarkan <b>urutan kronologis waktu</b>.</li>
              <li><b>Activity Diagram</b>: Menggambarkan alur kerja (workflow) langkah demi langkah.</li>
            </ul>
          </li>
          <li><b>Pengujian Perangkat Lunak</b>:
            <ul>
              <li><b>Black-Box Testing</b>: Menguji fungsionalitas input dan output tanpa melihat kode program internal (Equivalence Partitioning, Boundary Value Analysis).</li>
              <li><b>White-Box Testing</b>: Menguji alur logika kode internal, branch coverage, dan struktur algoritma.</li>
            </ul>
          </li>
          <li><b>Kode Status HTTP REST API</b>:
            200 OK (sukses baca) · 201 Created (sukses buat resource POST) · 400 Bad Request (format client salah) · 401 Unauthorized (belum ada token) · 403 Forbidden (tidak berhak/role kurang) · 404 Not Found · 500 Internal Error · 502 Bad Gateway · 503 Service Unavailable (overload/maintenance).
          </li>
        </ul>`
      },
      {
        title: 'Keamanan Siber, Tanda Tangan Elektronik & Cloud Computing',
        html: `
        <ul>
          <li><b>Tanda Tangan Elektronik (TTE BSrE BSSN)</b>: Menggunakan Kriptografi Asimetris.
            <div class="callout">Penandatanganan dokumen dilakukan dengan <b>KUNCI PRIVAT (Private Key)</b> milik pengirim.<br>Verifikasi keabsahan tanda tangan dilakukan publik dengan <b>KUNCI PUBLIK (Public Key)</b> milik pengirim.</div>
          </li>
          <li><b>Model Layanan Cloud Computing</b>:
            <ul>
              <li><b>IaaS (Infrastructure as a Service)</b>: Sewa Virtual Machine, jaringan, storage. Pengguna mengelola OS dan aplikasi (contoh: AWS EC2, GCP Compute Engine).</li>
              <li><b>PaaS (Platform as a Service)</b>: Penyedia mengurus hardware dan OS; pengguna hanya mengurus kode aplikasi dan data (contoh: Heroku, Google App Engine).</li>
              <li><b>SaaS (Software as a Service)</b>: Aplikasi siap pakai diakses lewat browser (contoh: Google Workspace, Microsoft 365).</li>
            </ul>
          </li>
          <li><b>RAID Server Storage</b>:
            RAID 0 (Striping cepat, 0 redundansi) · RAID 1 (Mirroring duplikasi) · RAID 5 (Striping + 1 paritas, minimal 3 disk) · RAID 10 (Gabungan RAID 1+0, minimal 4 disk).
          </li>
          <li><b>Disaster Recovery (DRP)</b>:
            <b>RTO (Recovery Time Objective)</b> = batas durasi waktu maksimal sistem boleh mati.
            <b>RPO (Recovery Point Objective)</b> = batas usia data maksimal yang boleh hilang mundur ke backup terakhir.
          </li>
        </ul>`
      }
    ],
    tips: [
      '<b>Trik Subnetting:</b> Cari dulu ukuran blok dengan rumus <b>256 − nilai oktet terakhir netmask</b>. Kurangi 2 untuk usable host.',
      '<b>Trik Normalisasi:</b> 1NF = hilangkan repeating group (atomik); 2NF = hilangkan ketergantungan parsial; 3NF = hilangkan ketergantungan transitif.',
      '<b>Trik TTE:</b> Enkripsi rahasia: kunci publik penerima. Digital Signature: kunci privat pengirim!',
      '<b>Trik Status HTTP:</b> 2xx = Sukses · 4xx = Salah Client (401 belum login, 403 dilarang/no role) · 5xx = Salah Server (502 gateway, 503 maintenance).'
    ]
  },

  /* ============================ SKB - KESEHATAN ============================ */
  {
    id: 'skb-kesehatan',
    group: 'SKB',
    skbCategory: 'KESEHATAN',
    title: 'SKB Tenaga Kesehatan (Medis & Nakes) — Master Cheat Sheet',
    summary: 'Infografis triase IGD 4 warna, 6 pilar transformasi UU 17/2023, segitiga epidemiologi, PPI, keselamatan pasien, dan imunisasi rutin.',
    buckets: ['SKB_KESEHATAN'],
    sections: [
      {
        title: 'Sistem Triase Gawat Darurat (START & IGD)',
        html: `
        <figure class="materi-figure">
          <img src="img/triase-igd.png" alt="Sistem Triase Gawat Darurat IGD dan Bencana">
          <figcaption>Skala Prioritas 4 Warna Sistem Triase IGD &amp; Bencana Massal (Metode START)</figcaption>
        </figure>
        <table class="table table-sm">
          <thead><tr><th>Warna Kategori</th><th>Tingkat Prioritas</th><th>Batas Respon Waktu</th><th>Contoh Kasus Klinis Nyata</th></tr></thead>
          <tbody>
            <tr>
              <td><span class="badge badge-error text-white font-bold">🔴 MERAH</span></td>
              <td><b>Prioritas 1 (P1)</b><br>Immediate / Gawat Darurat</td>
              <td><b>0 menit</b> (Penanganan langsung detik ini)</td>
              <td>Sumbatan jalan nafas (airway), henti nafas, tension pneumothorax, syok hemoragik berat, perdarahan arteri masif. <i>Mengancam nyawa tapi punya harapan hidup jika ditolong segera.</i></td>
            </tr>
            <tr>
              <td><span class="badge badge-warning font-bold">🟡 KUNING</span></td>
              <td><b>Prioritas 2 (P2)</b><br>Delayed / Darurat Non-Gawat</td>
              <td>Maksimal <b>30 menit</b></td>
              <td>Fraktur tulang panjang terbuka, luka bakar derajat II sedang, apendisitis akut tanpa syok, cedera kepala tertutup dengan GCS stabil.</td>
            </tr>
            <tr>
              <td><span class="badge badge-success text-white font-bold">🟢 HIJAU</span></td>
              <td><b>Prioritas 3 (P3)</b><br>Minimal / Walking Wounded</td>
              <td><b>60 – 120 menit</b> (Bisa menunggu)</td>
              <td>Pasien dapat berjalan sendiri, luka lecet/memar ringan, demam biasa, flu batuk, fraktur tertutup jari. Bisa rawat jalan.</td>
            </tr>
            <tr>
              <td><span class="badge badge-neutral text-white font-bold">⚫ HITAM</span></td>
              <td><b>Prioritas 0 (P0)</b><br>Expectant / Dead on Arrival</td>
              <td>Kamar Jenazah</td>
              <td>Tidak ada pernapasan spontan setelah reposisi jalan napas, nadi karotis tidak teraba, cedera kepala fatal terbuka masif (mati klinis/biologis). <b>Pada bencana massal, korban hitam TIDAK dilakukan RJP!</b></td>
            </tr>
          </tbody>
        </table>`
      },
      {
        title: 'UU Kesehatan No. 17 Tahun 2023 & 6 Pilar Transformasi',
        html: `
        <figure class="materi-figure">
          <img src="img/transformasi-kesehatan.png" alt="6 Pilar Transformasi Kesehatan Kemenkes RI">
          <figcaption>6 Pilar Transformasi Kesehatan Kemenkes RI Berdasarkan UU No. 17 Tahun 2023</figcaption>
        </figure>
        <ul>
          <li><b>Poin Kunci UU 17/2023 (Omnibus Law Kesehatan)</b>:
            <ul>
              <li><b>Surat Tanda Registrasi (STR)</b>: Sekarang berlaku <b>SEUMUR HIDUP</b> (tidak perlu perpanjangan per 5 tahun lagi).</li>
              <li><b>Surat Izin Praktik (SIP)</b>: Tetap berlaku selama <b>5 tahun</b> dan dapat diperpanjang berdasarkan pemenuhan kecukupan SKP (Satuan Kredit Profesi).</li>
            </ul>
          </li>
          <li><b>6 Pilar Transformasi Kesehatan (Wajib Hafal Urutannya)</b>:
            <ol>
              <li><b>Pilar 1: Layanan Primer</b> &rarr; Promotif dan preventif, skrining 14 penyakit penyebab kematian tertinggi, peningkatan 14 imunisasi rutin di Puskesmas &amp; Posyandu.</li>
              <li><b>Pilar 2: Layanan Rujukan</b> &rarr; Peningkatan akses dan kualitas RS di 514 kab/kota, jejaring pengampuan 4 penyakit katastropik utama <b>KJSU (Kanker, Jantung, Stroke, Uronefro)</b>.</li>
              <li><b>Pilar 3: Sistem Ketahanan Kesehatan</b> &rarr; Kemandirian produksi obat dan alat kesehatan dalam negeri, kesiapsiagaan menghadapi pandemi/KLB.</li>
              <li><b>Pilar 4: Sistem Pembiayaan Kesehatan</b> &rarr; Keberlanjutan BPJS JKN, efisiensi belanja, dan alokasi berbasis kinerja.</li>
              <li><b>Pilar 5: SDM Kesehatan</b> &rarr; Pemerataan dokter spesialis ke daerah 3T, penyederhanaan birokrasi izin nakes.</li>
              <li><b>Pilar 6: Teknologi Kesehatan</b> &rarr; Transformasi digital melalui platform <b>SATUSEHAT</b> Kemenkes, Rekam Medis Elektronik (RME) terintegrasi, dan riset bioteknologi/genomik.</li>
            </ol>
          </li>
        </ul>`
      },
      {
        title: 'Keselamatan Pasien (Patient Safety) & 5 Jenis Insiden',
        html: `
        <ul>
          <li><b>6 Sasaran Keselamatan Pasien (SKP)</b>:
            <ol>
              <li><b>Mengidentifikasi pasien dengan benar</b>: Minimal menggunakan 2 identitas (Nama lengkap &amp; Tanggal lahir / No Rekam Medis), DILARANG menggunakan nomor kamar tidur pasien!</li>
              <li><b>Meningkatkan komunikasi yang efektif</b>: Menggunakan teknik <b>SBAR</b> (Situation, Background, Assessment, Recommendation) dan teknik verifikasi <b>TBaK / Readback</b> (Tulis, Baca kembali, Konfirmasi).</li>
              <li><b>Meningkatkan keamanan obat yang perlu diwaspadai (High-Alert)</b>: Waspada obat <b>LASA / NORUM</b> (Look Alike Sound Alike / Nama Obat Rupa Ucapan Mirip) dan elektrolit pekat.</li>
              <li><b>Memastikan lokasi pembedahan yang benar, prosedur yang benar, dan pembedahan pada pasien yang benar</b>: Surgical Safety Checklist (Sign In, Time Out sebelum insisi, Sign Out).</li>
              <li><b>Mengurangi risiko infeksi terkait pelayanan kesehatan</b>: Kebersihan tangan (Hand hygiene).</li>
              <li><b>Mengurangi risiko cedera pasien akibat jatuh</b>: Penilaian risiko jatuh (Skala Morse untuk dewasa, Humpty Dumpty untuk anak-anak).</li>
            </ol>
          </li>
          <li><b>Tabel 5 Jenis Insiden Keselamatan Pasien (IKP)</b>:
            <table class="table table-sm">
              <thead><tr><th>Jenis Insiden</th><th>Kepanjangan</th><th>Kondisi Nyata &amp; Dampak ke Pasien</th></tr></thead>
              <tbody>
                <tr><td><b>KPC</b></td><td>Kondisi Potensial Cedera</td><td>Kondisi berpotensi bahaya, tapi <b>belum terjadi insiden</b> (misal: lantai licin belum dipel, jarum patah di meja instrumen).</td></tr>
                <tr><td><b>KNC</b></td><td>Kejadian Nyaris Cedera (Near Miss)</td><td>Terjadi insiden/kesalahan, tapi <b>belum terpapar ke pasien</b> karena dicegah tepat waktu (misal: perawat sadar obat salah sebelum disuntikkan).</td></tr>
                <tr><td><b>KTC</b></td><td>Kejadian Tidak Cedera</td><td>Sudah terpapar/masuk ke pasien, tetapi <b>tidak menimbulkan cedera</b> (misal: pasien salah minum obat asam folat padahal obat lambung, tapi tidak ada efek samping).</td></tr>
                <tr><td><b>KTD</b></td><td>Kejadian Tidak Diharapkan (Adverse Event)</td><td>Insiden mengakibatkan <b>cedera pada pasien</b> akibat penanganan medis, bukan karena penyakit dasarnya (misal: iritasi atau syok alergi obat).</td></tr>
                <tr><td><b>Sentinel</b></td><td>Kejadian Sentinel</td><td>Insiden fatal yang mengakibatkan <b>kematian atau kecacatan fisik/psikologis permanen</b> (misal: salah amputasi kaki, bayi tertukar).</td></tr>
              </tbody>
            </table>
          </li>
        </ul>`
      },
      {
        title: 'Pencegahan Infeksi (PPI) & 5 Momen Cuci Tangan WHO',
        html: `
        <ul>
          <li><b>5 Momen Kebersihan Tangan (WHO)</b>:
            <ol>
              <li>Sebelum menyentuh pasien.</li>
              <li>Sebelum melakukan tindakan aseptik/bersih.</li>
              <li>Setelah terkena cairan tubuh pasien (darah, urine, luka).</li>
              <li>Setelah menyentuh pasien.</li>
              <li>Setelah menyentuh lingkungan sekitar pasien.</li>
            </ol>
          </li>
          <li><b>Pilah Warna Kantong Sampah Medis</b>:
            <ul>
              <li><span class="badge badge-warning font-bold">KUNING</span>: Sampah Infeksius &amp; Patologis (kasa berdarah, perban, jaringan tubuh).</li>
              <li><span class="badge badge-error text-white font-bold">MERAH</span>: Sampah Radioaktif.</li>
              <li><span class="badge badge-primary text-white font-bold">UNGU</span>: Sampah Sitotoksik (obat kemoterapi kanker).</li>
              <li><span class="badge badge-neutral text-white font-bold">HITAM</span>: Sampah Non-Medis / Domestik (kertas, bungkus makanan).</li>
              <li><b>Safety Box Kuning Tahan Tusuk</b>: Khusus benda tajam (jarum suntik, bisturi pisau bedah). Jarum DILARANG ditutup kembali (no recapping).</li>
            </ul>
          </li>
        </ul>`
      },
      {
        title: 'Segitiga Epidemiologi & Penyakit Menular',
        html: `
        <figure class="materi-figure">
          <img src="img/segitiga-epidemiologi.png" alt="Segitiga Epidemiologi">
          <figcaption>Model Segitiga Epidemiologi: HOST (Inang) &bull; AGENT (Penyebab) &bull; ENVIRONMENT (Lingkungan)</figcaption>
        </figure>
        <ul>
          <li><b>Konsep Kunci</b>: Penyakit muncul ketika terjadi <b>ketidakseimbangan</b> antara faktor Host (kekebalan tubuh, usia, gizi), Agent (virus, bakteri, parasit), dan Environment (sanitasi, kepadatan, genangan air).</li>
          <li><b>Jadwal Imunisasi Rutin Lengkap Bayi</b>:
            HB0 (0–24 jam) &rarr; BCG + Polio 1 (1 bulan) &rarr; DPT-HB-Hib 1 + Polio 2 + PCV 1 + Rotavirus 1 (2 bulan) &rarr; DPT-HB-Hib 2 + Polio 3 + PCV 2 + Rotavirus 2 (3 bulan) &rarr; DPT-HB-Hib 3 + Polio 4 + IPV 1 suntik + Rotavirus 3 (4 bulan) &rarr; Campak-Rubella (MR) 1 + IPV 2 (9 bulan).
          </li>
          <li><b>1000 Hari Pertama Kehidupan (HPK)</b>: Periode emas pencegahan stunting &rarr; <b>270 hari selama kehamilan</b> + <b>730 hari</b> hingga anak berusia 2 tahun.</li>
        </ul>`
      }
    ],
    tips: [
      '<b>Triase START:</b> Korban bencana nafas > 30x/menit ATAU nadi radialis hilang ATAU tidak bisa ikuti perintah sederhana &rarr; Otomatis beri pita <b>MERAH</b>!',
      '<b>STR vs SIP:</b> Sesuai UU 17/2023, <b>STR berlaku SEUMUR HIDUP</b>. Jangan terkecoh dengan opsi lama yang bilang 5 tahun!',
      '<b>Insiden Pasien:</b> Kalau belum mengenai pasien &rarr; KNC (Nyaris). Sudah mengenai pasien tapi tidak cedera &rarr; KTC. Mengenai dan cedera &rarr; KTD. Meninggal/cacat &rarr; Sentinel.'
    ]
  },

  /* ============================ SKB - HUKUM ============================ */
  {
    id: 'skb-hukum',
    group: 'SKB',
    skbCategory: 'HUKUM',
    title: 'SKB Hukum, Tata Kelola & Kebijakan Publik',
    summary: 'UU ASN 20/2023, sistem merit, 8 Asas AUPB (UU 30/2014), Pengadaan Barang/Jasa (Perpres 16/2018), dan hukum administrasi.',
    buckets: ['SKB_HUKUM'],
    sections: [
      {
        title: 'UU ASN No. 20 Tahun 2023 & Sistem Merit',
        html: `
        <ul>
          <li><b>Status ASN</b>: Terdiri dari <b>PNS (Pegawai Negeri Sipil)</b> dan <b>PPPK (Pegawai Pemerintah dengan Perjanjian Kerja)</b>. Tenaga honorer/non-ASN dihapus secara bertahap.</li>
          <li><b>Sistem Merit</b>: Kebijakan dan manajemen ASN berdasarkan kualifikasi, kompetensi, dan kinerja secara adil dan wajar tanpa membedakan latar belakang politik, ras, warna kulit, agama, asal usul, jenis kelamin, status pernikahan, umur, atau kondisi kecacatan.</li>
          <li><b>Tingkat Hukuman Disiplin (PP 94/2021)</b>:
            <ul>
              <li><i>Ringan</i>: Teguran lisan, teguran tertulis, pernyataan tidak puas secara tertulis.</li>
              <li><i>Sedang</i>: Pemotongan tunjangan kinerja (tukin) sebesar 25% selama 6, 9, atau 12 bulan.</li>
              <li><i>Berat</i>: Penurunan jabatan setingkat lebih rendah 12 bulan, pembebasan dari jabatan (menjadi pelaksana) 12 bulan, pemberhentian dengan hormat tidak atas permintaan sendiri sebagai PNS.</li>
            </ul>
          </li>
          <li><b>Batas Usia Pensiun (BUP)</b>:
            58 tahun bagi Pejabat Administrasi, Pengawas, dan Pelaksana; 60 tahun bagi Pejabat Pimpinan Tinggi dan Fungsional Ahli Madya; 65 tahun bagi Fungsional Ahli Utama.
          </li>
        </ul>`
      },
      {
        title: 'Hukum Administrasi Negara & 8 Asas AUPB (UU 30/2014)',
        html: `
        <ul>
          <li><b>8 Asas Umum Pemerintahan yang Baik (AUPB)</b>: Kepastian hukum, Kemanfaatan, Ketidakberpihakan, Kecermatan, Tidak menyalahgunakan kewenangan, Keterbukaan, Kepentingan umum, Pelayanan yang baik.</li>
          <li><b>Diskresi Pejabat</b>: Keputusan/tindakan yang diambil pejabat pemerintahan untuk mengatasi persoalan konkret ketika perundang-undangan belum mengatur, tidak jelas, atau stagnan. Syarat diskresi: Sesuai tujuan wewenang, tidak bertentangan dengan AUPB, dan berdasar alasan objektif.</li>
          <li><b>Gugatan PTUN</b>: Objek sengketa adalah KTUN (Keputusan Tata Usaha Negara) yang bersifat <b>Konkret, Individual, Final</b>. Batas waktu mengajukan gugatan ke PTUN adalah <b>90 hari</b> sejak keputusan diterima/diumumkan.</li>
        </ul>`
      },
      {
        title: 'Pengadaan Barang/Jasa Pemerintah (Perpres 16/2018 jo 12/2021)',
        html: `
        <ul>
          <li><b>7 Prinsip Pengadaan</b>: Efisien, Efektif, Transparan, Terbuka, Bersaing, Adil, Akuntabel.</li>
          <li><b>Pelaku Pengadaan</b>: PA (Pengguna Anggaran), KPA, PPK (Pejabat Pembuat Komitmen penerbit SPK/kontrak), Pejabat Pengadaan (paket s/d 200 juta), Pokja Pemilihan (tender di atas 200 juta).</li>
          <li><b>Metode Pemilihan Penyedia</b>:
            E-Purchasing (E-Katalog prioritas utama) &rarr; Pengadaan Langsung (&le; 200 juta) &rarr; Penunjukan Langsung (darurat/paten) &rarr; Tender Cepat &rarr; Tender umum.
          </li>
        </ul>`
      }
    ],
    tips: [
      '<b>Hierarki Hukum:</b> Ingat urutan Pasal 7 UU 12/2011: UUD 1945 &rarr; TAP MPR &rarr; UU/Perppu &rarr; PP &rarr; Perpres &rarr; Perda Prov &rarr; Perda Kab/Kota.',
      '<b>Gugatan PTUN:</b> Batas waktu gugatan KTUN adalah <b>90 hari</b> sejak diterima atau diumumkan.'
    ]
  },

  /* ============================ SKB - KEUANGAN ============================ */
  {
    id: 'skb-keuangan',
    group: 'SKB',
    skbCategory: 'KEUANGAN',
    title: 'SKB Keuangan, Akuntansi & Perpajakan',
    summary: '3 Paket UU keuangan negara, SAP berbasis akrual (PP 71/2010), 4 opini BPK, dan sistem perpajakan UU HPP.',
    buckets: ['SKB_KEUANGAN'],
    sections: [
      {
        title: '3 Paket UU Keuangan Negara & SAP Akrual (PP 71/2010)',
        html: `
        <ul>
          <li><b>Tiga Paket UU Keuangan Negara</b>:
            <ol>
              <li><b>UU No. 17 Tahun 2003</b> tentang Keuangan Negara.</li>
              <li><b>UU No. 1 Tahun 2004</b> tentang Perbendaharaan Negara.</li>
              <li><b>UU No. 15 Tahun 2004</b> tentang Pemeriksaan Pengelolaan dan Tanggung Jawab Keuangan Negara.</li>
            </ol>
          </li>
          <li><b>7 Laporan Keuangan Pokok Pemerintah (PP 71/2010)</b>:
            <ul>
              <li><i>LRA (Laporan Realisasi Anggaran)</i>: Berbasis Kas, menyajikan pendapatan-LRA dan belanja.</li>
              <li><i>Laporan Perubahan SAL</i>: Merinci saldo anggaran lebih.</li>
              <li><i>Neraca</i>: Posisi aset, kewajiban, dan ekuitas dana per 31 Desember.</li>
              <li><i>LO (Laporan Operasional)</i>: Berbasis Akrual, menyajikan pendapatan-LO dan beban operasional.</li>
              <li><i>LAK (Laporan Arus Kas)</i>: Khusus entitas pelaporan perbendaharaan umum.</li>
              <li><i>LPE (Laporan Perubahan Ekuitas)</i>: Kenaikan/penurunan ekuitas tahun berjalan.</li>
              <li><i>CaLK (Catatan atas Laporan Keuangan)</i>: Penjelasan naratif rinci atas seluruh pos.</li>
            </ul>
          </li>
        </ul>`
      },
      {
        title: '4 Opini Pemeriksaan BPK & Dasar Perpajakan',
        html: `
        <table class="table table-sm">
          <thead><tr><th>Opini BPK</th><th>Arti &amp; Syarat Pemberian</th></tr></thead>
          <tbody>
            <tr><td><b>WTP</b> (Wajar Tanpa Pengecualian)</td><td>Laporan keuangan disajikan secara wajar dalam semua hal yang material sesuai Standar Akuntansi Pemerintahan (SAP).</td></tr>
            <tr><td><b>WDP</b> (Wajar Dengan Pengecualian)</td><td>Terdapat salah saji material pada pos tertentu, tetapi tidak bersifat pervasif/menyeluruh.</td></tr>
            <tr><td><b>TW</b> (Tidak Wajar / Adverse)</td><td>Salah saji material dan berdampak pervasif terhadap kewajaran laporan keuangan secara keseluruhan.</td></tr>
            <tr><td><b>TMP</b> (Tidak Memberikan Pendapat / Disclaimer)</td><td>BPK tidak dapat memperoleh bukti audit yang cukup karena adanya pembatasan lingkup pemeriksaan secara pervasif.</td></tr>
          </tbody>
        </table>
        <ul>
          <li><b>4 Kriteria Opini BPK</b>: 1. Kesesuaian dengan SAP, 2. Kecukupan pengungkapan, 3. Kepatuhan perundang-undangan, 4. Efektivitas Sistem Pengendalian Intern (SPI).</li>
          <li><b>Sistem Pemungutan Pajak</b>: <i>Self Assessment</i> (wajib pajak hitung sendiri), <i>Official Assessment</i> (fiskus hitung ketetapan), <i>Withholding</i> (dipotong pihak ketiga/kantor).</li>
        </ul>`
      }
    ],
    tips: [
      '<b>Urutan Kualitas Opini BPK:</b> WTP (terbaik) &gt; WDP &gt; TW &gt; TMP (terburuk/disclaimer).',
      '<b>LRA vs LO:</b> LRA menggunakan basis KAS (kas masuk/keluar), sedangkan LO menggunakan basis AKRUAL (hak &amp; kewajiban timbul).'
    ]
  },

  /* ============================ SKB - PENDIDIKAN ============================ */
  {
    id: 'skb-pendidikan',
    group: 'SKB',
    skbCategory: 'PENDIDIKAN',
    title: 'SKB Pendidikan, Guru & Dosen',
    summary: '4 Kompetensi pendidik (UU 14/2005), Taksonomi Bloom revisi HOTS C1–C6, teori belajar Piaget/Vygotsky, dan asesmen.',
    buckets: ['SKB_PENDIDIKAN'],
    sections: [
      {
        title: '4 Kompetensi Wajib Pendidik (UU No. 14 Tahun 2005)',
        html: `
        <ul>
          <li><b>1. Kompetensi Pedagogik</b>: Kemampuan mengelola pembelajaran peserta didik, merancang silabus/RPP, memahami karakteristik siswa, melaksanakan evaluasi belajar, dan mengembangkan potensi peserta didik.</li>
          <li><b>2. Kompetensi Kepribadian</b>: Kepribadian yang mantap, stabil, dewasa, arif, berwibawa, menjadi teladan bagi siswa, dan berakhlak mulia.</li>
          <li><b>3. Kompetensi Sosial</b>: Kemampuan berkomunikasi dan bergaul secara efektif dengan siswa, sesama guru, tenaga kependidikan, orang tua, dan masyarakat sekitar.</li>
          <li><b>4. Kompetensi Profesional</b>: Penguasaan materi pembelajaran bidang studi secara luas dan mendalam sesuai kurikulum keilmuan.</li>
        </ul>`
      },
      {
        title: 'Taksonomi Bloom Revisi (Anderson &amp; Krathwohl) &amp; HOTS',
        html: `
        <table class="table table-sm">
          <thead><tr><th>Level</th><th>Kategori</th><th>Tingkatan</th><th>Kata Kerja Operasional (KKO)</th></tr></thead>
          <tbody>
            <tr><td><b>C1</b></td><td>Mengingat (Remembering)</td><td rowspan="3">LOTS<br>(Lower Order Thinking Skills)</td><td>Menyebutkan, menghafal, mencatat, mendaftar.</td></tr>
            <tr><td><b>C2</b></td><td>Memahami (Understanding)</td><td>Menjelaskan, mengklasifikasikan, merangkum, membedakan.</td></tr>
            <tr><td><b>C3</b></td><td>Menerapkan (Applying)</td><td>Menghitung, menggunakan rumus, mendemonstrasikan.</td></tr>
            <tr><td><b>C4</b></td><td>Menganalisis (Analyzing)</td><td rowspan="3"><b>HOTS</b><br>(Higher Order Thinking Skills)</td><td>Mendiagnosis, membedakan elemen, membandingkan data, memecahkan masalah.</td></tr>
            <tr><td><b>C5</b></td><td>Mengevaluasi (Evaluating)</td><td>Menilai, mengkritik, membuktikan, memvalidasi keputusan.</td></tr>
            <tr><td><b>C6</b></td><td>Mencipta (Creating)</td><td>Merancang, mendesain, mengonstruksi solusi baru, menyusun teori.</td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Teori-Teori Belajar & Tokoh Utama',
        html: `
        <ul>
          <li><b>Konstruktivisme</b>:
            <ul>
              <li><b>Jean Piaget</b>: 4 tahap perkembangan kognitif anak (Sensori-motorik 0-2 th, Pra-operasional 2-7 th, Operasional Konkret 7-11 th, Operasional Formal &gt;11 th).</li>
              <li><b>Lev Vygotsky</b>: Menekankan interaksi sosial dan budaya; konsep <b>ZPD (Zone of Proximal Development)</b> dan bantuan bertahap <b>Scaffolding</b>.</li>
              <li><b>Jerome Bruner</b>: Belajar penemuan mandiri (<i>Discovery Learning</i>) melalui tahap enaktif, ikonik, dan simbolik.</li>
              <li><b>David Ausubel</b>: Belajar Bermakna (<i>Meaningful Learning</i>) menggunakan advance organizers.</li>
            </ul>
          </li>
          <li><b>Behaviorisme</b>: Menekankan perubahan perilaku melalui stimulus-respons. Tokoh: <b>Ivan Pavlov</b> (Classical Conditioning / anjing-bel), <b>B.F. Skinner</b> (Operant Conditioning / reward &amp; punishment), <b>Thorndike</b> (Trial and Error / Law of Effect).</li>
        </ul>`
      }
    ],
    tips: [
      '<b>HOTS selalu C4–C6:</b> Jika soal menanyakan soal HOTS, pilih KKO yang menuntut analisis, evaluasi, atau perancangan solusi kreatif (bukan sekadar hafalan C1-C2).',
      '<b>Vygotsky:</b> Kata kunci soal adalah <b>"ZPD"</b>, <b>"Scaffolding"</b>, dan <b>"interaksi teman sebaya"</b>.',
      '<b>Asesmen:</b> <i>Diagnostik</i> = awal pembelajaran · <i>Formatif</i> = selama proses pembelajaran untuk refleksi · <i>Sumatif</i> = di akhir untuk nilai rapor.'
    ]
  }
];

// Buat string kode file js/materi.js
const fileContent = `/* ==========================================================================
   MATERI BELAJAR CPNS (SKD & SKB) — TERBAIK, RINGKAS, PADAT, JELAS & SAKTI
   --------------------------------------------------------------------------
   Dilengkapi infografis lambang negara, diagram lembaga, peta zona laut,
   7 layer OSI, topologi jaringan, triase medis, dan rumus kilat CAT BKN.
   ========================================================================== */

window.MATERI_GROUPS = ${JSON.stringify(materiGroups, null, 2)};

window.MATERI = ${JSON.stringify(materi, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'js', 'materi.js'), fileContent, 'utf8');
console.log('Successfully written js/materi.js with ' + materi.length + ' comprehensive topics!');
