/* ==========================================================================
   MODUL MATERI BEDAH HOTS (STANDAR E-BOOK CPNS 2027 & KEPMENPANRB 321/2024)
   Disajikan agar materi sulit TWK, TIU, & TKP mudah dipahami baik di Jalur Belajar
   maupun Rangkuman Topik & Rangkuman Global.
   ========================================================================== */
(function () {
  const M = window.MATERI;
  if (!Array.isArray(M) || window.__materiHotsEbook56) return;
  window.__materiHotsEbook56 = 1;

  // Mini SVG helper untuk ilustrasi tabel & pola matriks 3x3 di Materi/Rangkuman TIU HOTS
  const svgBox = (w, h, maxW, label, body) =>
    `<div style="margin:.45rem 0"><svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:${maxW}px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${body}</svg></div>`;

  const SVG_MAT_DOT_DEMO = svgBox(330, 108, 360, 'Ilustrasi pola titik masuk pembungkus pada Matriks 3x3',
    '<rect x="8" y="8" width="90" height="86" rx="6" fill="#fff" stroke="#334155" stroke-width="1.5"/>'
    + '<polygon points="53,34 34,68 72,68" fill="none" stroke="#0f172a" stroke-width="1.8"/>'
    + '<circle cx="53" cy="24" r="2.8" fill="#dc2626"/><circle cx="25" cy="73" r="2.8" fill="#dc2626"/><circle cx="81" cy="73" r="2.8" fill="#dc2626"/>'
    + '<text x="53" y="90" text-anchor="middle" font-family="Arial" font-size="9" fill="#475569">K1: Segi-3 (3 merah luar)</text>'
    + '<text x="108" y="54" text-anchor="middle" font-family="Arial" font-size="16" font-weight="700" fill="#0284c7">→</text>'
    + '<rect x="120" y="8" width="90" height="86" rx="6" fill="#fff" stroke="#334155" stroke-width="1.5"/>'
    + '<rect x="142" y="28" width="46" height="46" fill="none" stroke="#0f172a" stroke-width="1.6"/>'
    + '<polygon points="165,40 153,61 177,61" fill="none" stroke="#0f172a" stroke-width="1.5"/>'
    + '<circle cx="165" cy="34" r="2.4" fill="#0284c7"/><circle cx="151" cy="65" r="2.4" fill="#0284c7"/><circle cx="179" cy="65" r="2.4" fill="#0284c7"/>'
    + '<circle cx="136" cy="22" r="2.6" fill="#dc2626"/><circle cx="194" cy="22" r="2.6" fill="#dc2626"/><circle cx="194" cy="80" r="2.6" fill="#dc2626"/><circle cx="136" cy="80" r="2.6" fill="#dc2626"/>'
    + '<text x="165" y="90" text-anchor="middle" font-family="Arial" font-size="9" fill="#475569">K2: +Segi-4 (3 biru + 4 merah)</text>'
    + '<text x="220" y="54" text-anchor="middle" font-family="Arial" font-size="16" font-weight="700" fill="#0284c7">→</text>'
    + '<rect x="232" y="8" width="90" height="86" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="1.6"/>'
    + '<text x="277" y="45" text-anchor="middle" font-family="Arial" font-size="11" font-weight="700" fill="#92400e">K3: +Segi-5</text>'
    + '<text x="277" y="61" text-anchor="middle" font-family="Arial" font-size="10" fill="#92400e">4 biru dalam</text>'
    + '<text x="277" y="75" text-anchor="middle" font-family="Arial" font-size="10" fill="#dc2626">5 merah luar</text>'
  );

  const SVG_MAT_ROT_DEMO = svgBox(330, 96, 360, 'Alur cek 4 lapis pada Matriks 3x3',
    '<rect x="6" y="10" width="74" height="72" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.4"/>'
    + '<text x="43" y="34" text-anchor="middle" font-family="Arial" font-size="11" font-weight="700" fill="#0c4a6e">1. Bangun</text>'
    + '<text x="43" y="51" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">Gabung /</text>'
    + '<text x="43" y="65" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">+1 sisi</text>'
    + '<rect x="87" y="10" width="74" height="72" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>'
    + '<text x="124" y="34" text-anchor="middle" font-family="Arial" font-size="11" font-weight="700" fill="#4c1d95">2. Rotasi</text>'
    + '<text x="124" y="51" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">Panah +90° /</text>'
    + '<text x="124" y="65" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">Flip Cermin</text>'
    + '<rect x="168" y="10" width="74" height="72" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.4"/>'
    + '<text x="205" y="34" text-anchor="middle" font-family="Arial" font-size="11" font-weight="700" fill="#14532d">3. Elemen</text>'
    + '<text x="205" y="51" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">Jumlah titik /</text>'
    + '<text x="205" y="65" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">Garis bantu</text>'
    + '<rect x="249" y="10" width="75" height="72" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.4"/>'
    + '<text x="286" y="34" text-anchor="middle" font-family="Arial" font-size="11" font-weight="700" fill="#92400e">4. Rasio</text>'
    + '<text x="286" y="51" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">Posisi pojok /</text>'
    + '<text x="286" y="65" text-anchor="middle" font-family="Arial" font-size="10" fill="#334155">{a, 2a, 4a}</text>'
  );

  M.push(
    {
      id: 'twk-bedah-hots-ebook',
      group: 'TWK',
      title: 'Bedah TWK HOTS: Empat Konsensus (Pilar Negara), Bela Negara & EYD V',
      summary: 'Materi pendalaman berstandar soal sulit TWK (KepmenPANRB 321/2024): Empat Konsensus Kebangsaan (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika), RIS & perubahan UUD, integritas Hatta & M. Jusuf, bela negara modern, serta KBBI & EYD Edisi V.',
      buckets: ['SKD_TWK'],
      subs: ['TWK HOTS', 'Bahasa Indonesia (EYD V', 'Moderasi Beragama'],
      sections: [
        {
          title: 'Peta Konstitusi HOTS: RIS Federal, Penghapusan Penjelasan UUD, Checks & Balances & Uji Materi',
          fam: ['twk56-konstitusi'],
          html: '<p>Soal TWK sulit tidak lagi menanyakan hafalan angka pasal semata, melainkan <b>hubungan logis antarlembaga</b> dan <b>sejarah perubahan norma konstitusi</b>. Pahami 4 pilar pembeda utamanya:</p>'
            + '<table class="table table-sm"><thead><tr><th>Konstitusi</th><th>Bentuk Negara</th><th>Sistem Pemerintahan</th><th>Poin Kritis Soal HOTS</th></tr></thead><tbody>'
            + '<tr><td><b>UUD 1945 (Asli)</b></td><td>Kesatuan</td><td>Presidensial (sempat Maklumat X/1945)</td><td>Dahulu masih memuat bagian <i>Penjelasan UUD</i> buatan Soepomo.</td></tr>'
            + '<tr><td><b>Konstitusi RIS (1949)</b></td><td><b>Federal (Serikat)</b></td><td>Parlementer (PM Moh. Hatta)</td><td>Terdiri dari negara-negara bagian; lahir dari hasil Konferensi Meja Bundar (KMB).</td></tr>'
            + '<tr><td><b>UUDS 1950</b></td><td><b>Kesatuan</b></td><td><b>Parlementer (Liberal)</b></td><td>Kabinet sering jatuh karena mosi tidak percaya DPR → memicu Dekret 5 Juli 1959.</td></tr>'
            + '<tr><td><b>UUD NRI 1945 (Amandemen)</b></td><td>Kesatuan</td><td>Presidensial Kuat + Pemilu Langsung (Pasal 6A)</td><td><b>Pasal II Aturan Tambahan</b> menghapus status hukum bagian <i>Penjelasan</i> sebagai naskah terpisah; muatan normatifnya dilebur ke pasal-pasal batang tubuh.</td></tr>'
            + '</tbody></table>'
            + '<p><b>Pembagian Kewenangan Yudikatif & Pembatasan HAM (Pasal 28I vs 28J):</b></p>'
            + '<table class="table table-sm"><thead><tr><th>Lembaga / Pasal</th><th>Kewenangan Khusus (Jangan Tertukar!)</th><th>Contoh Kasus di Soal BKN</th></tr></thead><tbody>'
            + '<tr><td><b>Mahkamah Konstitusi (MK)</b></td><td>Menguji <b>UU terhadap UUD</b>, sengketa kewenangan lembaga negara, pembubaran parpol, hasil pemilu, pendapat DPR soal pemakzulan.</td><td>Pemeriksaan sengketa konstitusional atau pengujian sahnya <i>Undang-Undang</i>.</td></tr>'
            + '<tr><td><b>Mahkamah Agung (MA)</b></td><td>Kasasi + menguji <b>peraturan perundang-undangan di bawah UU</b> (PP, Perpres, Permen, <b>Perda</b>) terhadap UU.</td><td>Permohonan pembatalan <i>Perda Pajak Daerah</i> yang bertentangan dengan UU Pajak diuji oleh <b>MA</b>, bukan MK!</td></tr>'
            + '<tr><td><b>Komisi Yudisial (KY)</b></td><td>Mengusulkan pengangkatan Hakim Agung + menjaga kehormatan, keluhuran martabat, serta perilaku hakim.</td><td>KY bersifat lembaga pengawas etik independen (tidak memutus pokok perkara).</td></tr>'
            + '<tr><td><b>Pasal 28I (1) vs 28J (2)</b></td><td><b>28I(1):</b> hak yang <i>tidak dapat dikurangi dalam keadaan apa pun</i> (hak hidup, tidak disiksa, beragama, hati nurani, tidak diperbudak, pengakuan hukum, anti-retroaktif).<br><b>28J(2):</b> HAM tetap tunduk pada pembatasan UU demi moral, agama, keamanan, & ketertiban umum.</td><td>Kebijakan PSBB/karantina kesehatan membatasi hak berkumpul/bergerak secara sah berdasar <b>Pasal 28J ayat (2)</b>, asalkan tidak melanggar <i>non-derogable rights</i> 28I(1).</td></tr>'
            + '</tbody></table>'
            + '<div class="studi"><div class="studi-h">📘 STUDI KASUS — Mengapa Penjelasan UUD Dihapus Saat Amandemen?</div>'
            + '<div class="studi-soal"><b>SOAL:</b> Setelah Perubahan Keempat UUD NRI Tahun 1945 (2002), bagaimana kedudukan hukum bagian Penjelasan UUD 1945 versi 1945?</div>'
            + '<div class="studi-kunci">🔎 <b>Kata Kunci:</b> Pasal II Aturan Tambahan UUD NRI 1945 & peleburan norma ke batang tubuh.</div>'
            + '<ol class="studi-langkah"><li>Sebelum amandemen, Penjelasan sering dipakai membenarkan tafsir kekuasaan eksekutif berlebih (misal tafsir atas Pasal 33 atau kekuasaan Presiden).</li><li>MPR menetapkan dalam <b>Pasal II Aturan Tambahan</b> bahwa UUD NRI 1945 hanya terdiri atas Pembukaan dan Pasal-Pasal.</li><li>Substansi Penjelasan yang masih relevan sudah dimasukkan langsung ke dalam pasal (misal Indonesia sebagai negara hukum → Pasal 1 ayat (3)).</li></ol>'
            + '<div class="studi-jawab">✅ <b>KESIMPULAN:</b> Penjelasan resmi dihapus agar konstitusi hanya memiliki <b>Pembukaan dan Pasal-Pasal</b>, menutup celah tafsir ganda.</div></div>'
            + '<div class="ingat">⚠️ <b>Jebakan Klasik:</b> Mengira uji materi <b>Perda</b> masuk ke MK (padahal MA), mengira Presiden dapat mencabut/membatalkan UU (hanya mengajukan/menyetujui bersama DPR; pencabutan yudisial oleh MK), dan mengira bebas aktif berarti anti-kerja sama pertahanan. Politik <b>Bebas Aktif</b> (Pembukaan alinea IV) artinya tidak memihak pakta blok mana pun sembari aktif menjaga ketertiban dunia.</div>'
        },
        {
          title: 'Pancasila Terapan: Dimensi Vertikal–Horizontal, 3 Dimensi Ideologi & Keadilan Proporsional',
          fam: ['twk56-pancasila'],
          html: '<p>Agar soal kasus Pancasila terasa mudah, bedah tiga kerangka analisis berikut:</p>'
            + '<ul>'
            + '<li><b>Sila 1 Punya Dua Sumbu (Vertikal & Horizontal):</b> Sumbu <i>vertikal</i> adalah ketaatan pribadi kepada Tuhan YME; sumbu <i>horizontal</i> adalah membangun kerukunan, toleransi, dan menghormati pemeluk agama/kepercayaan lain. Seseorang yang rajin beribadah tetapi membenci atau menghalangi ibadah sesama warga negara <b>gagal mempraktikkan Sila 1</b> karena memutus sumbu horizontal.</li>'
            + '<li><b>Keadilan Sila 5 = Keadilan Proporsional (Bukan Sama Rata Sama Rasa):</b> Negara memberi sesuai kebutuhan, hak, kontribusi, serta perlindungan bagi kelompok rentan. Program beasiswa afirmasi daerah 3T atau perlindungan pekerja lebih adil daripada membagi nominal seragam ke konglomerat dan warga miskin.</li>'
            + '<li><b>Sila 4 = Hikmat Kebijaksanaan, Bukan Tirani Mayoritas:</b> Suara terbanyak (<i>voting</i>) hanya sah secara Pancasila bila tetap dilandasi <b>nalar sehat, hati nurani, tanggung jawab moral, dan kepentingan bersama</b>—bukan sekadar 51% menindas hak dasar 49%.</li>'
            + '<li><b>Kompromi Historis 18 Agustus 1945:</b> PPKI atas usulan Moh. Hatta bersama tokoh Islam sepakat mengubah 7 kata dalam Piagam Jakarta menjadi <i>"Ketuhanan Yang Maha Esa"</i> demi menjaga keutuhan Indonesia yang majemuk.</li>'
            + '</ul>'
            + '<table class="table table-sm"><thead><tr><th>3 Dimensi Ideologi Terbuka (Alfian)</th><th>Makna Inti</th><th>Ciri Soal HOTS (Contoh Kasus)</th></tr></thead><tbody>'
            + '<tr><td><b>Realitas</b></td><td>Nilai dasar bersumber langsung dari nilai nyata budaya & realitas kehidupan masyarakat Indonesia.</td><td>Bukan ideologi utopis tiruan luar negeri; nilai gotong royong memang hidup di Nusantara.</td></tr>'
            + '<tr><td><b>Idealitas</b></td><td>Memuat cita-cita luhur dan harapan masa depan yang menggugah optimisme bangsa.</td><td>Mendorong kemajuan masyarakat adil-makmur sesuai Pembukaan UUD 1945.</td></tr>'
            + '<tr><td><b>Fleksibilitas (Normatif)</b></td><td>Keterbukaan menerima perkembangan ilmu, zaman, AI, dan regulasi baru <b>tanpa mengubah 5 nilai dasar sila</b>.</td><td>Menyesuaikan regulasi tata kelola AI atau ekonomi digital lewat <i>nilai instrumental</i> (UU/PP).</td></tr>'
            + '</tbody></table>'
            + '<div class="ingat">⚠️ <b>Jebakan:</b> Membedakan tingkatan nilai Pancasila: <b>Nilai Dasar</b> (5 sila, tetap dan tidak diubah) → <b>Nilai Instrumental</b> (UUD, Tap MPR, UU, PP — boleh direvisi sesuai zaman) → <b>Nilai Praksis</b> (tindakan sehari-hari ASN dan warga).</div>'
        },
        {
          title: 'Integritas & Etika Birokrasi: Public Trust, Netralitas 24 Jam & Gratifikasi vs Suap',
          fam: ['twk56-integritas'],
          html: '<p>Dalam soal TWK Integritas tingkat sulit, pilihannya sering sama-sama terdengar sopan. Gunakan <b>4 kompas hukum & keteladanan</b> ini untuk menebas keraguan:</p>'
            + '<table class="table table-sm"><thead><tr><th>Konsep Hukum / Etika</th><th>Batas Kritis (Sering Diuji di Soal Sulit)</th><th>Tindakan ASN Berintegritas</th></tr></thead><tbody>'
            + '<tr><td><b>Suap vs Gratifikasi (UU Tipikor)</b></td><td><b>Suap:</b> ada kesepakatan transaksional sebelum/saat keputusan menyalahi aturan.<br><b>Gratifikasi (Pasal 12B):</b> pemberian berhubungan dengan jabatan; dianggap suap <i>kecuali</i> dilaporkan ke KPK paling lambat <b>30 hari kerja</b>.</td><td>Tolak sejak awal; bila terpaksa diterima (misal dikirim ke rumah/anonim), segera lapor UPG instansi / KPK &lt; <b>30 hari kerja</b>.</td></tr>'
            + '<tr><td><b>Netralitas ASN 24 Jam (UU 20/2023)</b></td><td>Status ASN <b>tidak berhenti saat jam pulang kerja</b> atau hari libur. Mengunggah dukungan/simbol jari/<i>repost</i> kampanye paslon di akun pribadi tetap pelanggaran netralitas.</td><td>Jaga perilaku daring & luring bebas partisan politik, gunakan hak pilih rahasia di bilik suara saja.</td></tr>'
            + '<tr><td><b>Melawan Apatisme Sistemik</b></td><td>Sikap pasif "karena semua melanggar lebih baik diam biar karier aman" merusak integritas dan <b>kepercayaan publik (<i>public trust</i>)</b>.</td><td>Berani menolak kecurangan secara prosedural, mendokumentasikan bukti, dan melapor melalui <i>whistleblowing system</i> resmi.</td></tr>'
            + '<tr><td><b>Amanah Rahasia Jabatan</b></td><td>Membocorkan dokumen tender, skor tes, atau rancangan kebijakan yang belum sah kepada keluarga/calon vendor = pelanggaran kode etik & hukum berat.</td><td>Pisahkan kepentingan pribadi/keluarga dari wewenang jabatan secara mutlak.</td></tr>'
            + '</tbody></table>'
            + '<div class="callout"><b>🏅 Keteladanan Integritas Tokoh Nasional (Sering Dipakai Analogi Kasus):</b><ul>'
            + '<li><b>Mohammad Hatta (Bung Hatta):</b> Tegas memisahkan uang negara vs dompet pribadi (mengembalikan sisa dana perjalanan dinas, menolak memakai fasilitas jabatan untuk keluarga, bahkan menyimpan guntingan iklan sepatu Bally yang tak pernah terbeli).</li>'
            + '<li><b>Jenderal M. Jusuf & Hoegeng Iman Santoso:</b> Menolak suap, parcel, atau "hadiah terima kasih" terkait jabatan serta konsisten membela kesejahteraan prajurit/bawahan tanpa memperkaya diri.</li>'
            + '<li><b>Baharuddin Lopa:</b> Berani menegakkan hukum secara adil tanpa pandang bulu bahkan terhadap orang dekat atau pejabat berkuasa.</li>'
            + '</ul></div>'
        },
        {
          title: 'Bela Negara Modern: Ketahanan Siber, Kedaulatan Ekonomi (Hilirisasi) & Soft Power Budaya',
          fam: ['twk56-nasionalisme-bela'],
          html: '<p><b>Pasal 27 ayat (3)</b> dan <b>Pasal 30 ayat (1)</b> menegaskan bela negara adalah hak sekaligus kewajiban tiap warga—<b>bukan berarti wajib militer bersenjata</b>, melainkan pertahanan <b>semesta & nirmiliter</b> sesuai profesi:</p>'
            + '<table class="table table-sm"><thead><tr><th>Medan Pertahanan Modern</th><th>Wujud Bela Negara Nirmiliter</th><th>Contoh Soal TWK HOTS</th></tr></thead><tbody>'
            + '<tr><td><b>Kedaulatan Ekonomi (Pasal 33)</b></td><td><b>Hilirisasi & penguatan TKDN:</b> mengolah bahan mentah (nikel, bauksit, sawit) di dalam negeri agar nilai tambah, teknologi, dan lapangan kerja tercipta di Indonesia.</td><td>Mengapa ekspor bahan mentah diganti industri hilir? Memutus ketergantungan impor produk jadi & memperkuat kemandirian ekonomi.</td></tr>'
            + '<tr><td><b>Ketahanan Ruang Siber & Ideologi</b></td><td>Verifikasi sumber informasi, menahan penyebaran disinformasi/adu domba SARA, dan menjaga literasi digital publik.</td><td>Membongkar berita hoaks pemecah belah sebelum diteruskan di grup warga atau media kerja.</td></tr>'
            + '<tr><td><b>Ketahanan Ekologi (Ruang Hidup)</b></td><td>Melawan pembalakan liar, alih fungsi lahan berisiko bencana, serta menjaga lingkungan sebagai <i>lebensraum</i> (ruang hidup berkelanjutan generasi penerus).</td><td>Komitmen restorasi ekosistem bukan sekadar hobi hijau, tetapi pertahanan masa depan bangsa.</td></tr>'
            + '<tr><td><b>Soft Power Budaya Adaptif</b></td><td>Terbuka menyerap teknologi & ilmu global sambil memperkuat jati diri serta mempromosikan budaya Nusantara (diplomasi budaya).</td><td>Nasionalisme modern ≠ antiasing (<i>xenofobia</i>); selektif menyaring pengaruh positif demi daya saing Indonesia.</td></tr>'
            + '</tbody></table>'
            + '<div class="ingat">⚠️ <b>Jebakan:</b> Memilih opsi nasionalisme sempit ("menolak semua budaya/teknologi luar negeri"). Nasionalisme Pancasila bersifat <b>terbuka, humanis, dan adaptif</b>—bukan chauvinisme yang merasa bangsa sendiri paling unggul dengan merendahkan bangsa lain.</div>'
        },
        {
          title: 'Bahasa Negara EYD Edisi V (KBBI Resmi) & Penalaran Wacana Kritis',
          fam: ['twk56-bahasa'],
          html: '<p>Banyak peserta terkecoh soal Bahasa Indonesia karena menghafal ejaan lama atau tidak mengecek aturan <b>EYD Edisi V (Kepka Badan Bahasa No. 0424/I/BS.00.01/2022)</b> & <b>KBBI resmi</b>:</p>'
            + '<table class="table table-sm"><thead><tr><th>Kaidah EYD V / KBBI</th><th>Aturan Pasti</th><th>Contoh BENAR vs SALAH</th></tr></thead><tbody>'
            + '<tr><td><b>1. Gabungan Kata vs Konfiks</b></td><td>Gabungan kata dasar ditulis <b>TERPISAH</b>. Serangkai hanya jika sudah baku (<i>beasiswa, kacamata, olahraga, matahari</i>) atau mendapat <b>awalan + akhiran sekaligus (konfiks)</b>.</td><td>✅ <b>warga negara</b>, tanggung jawab, duta besar, kerja sama<br>✅ <b>kewarganegaraan</b>, mempertanggungjawabkan<br>❌ <i>warganegara</i>, <i>kerjasama</i>, <i>tanggungjawab</i></td></tr>'
            + '<tr><td><b>2. Bentuk Terikat & Kata "Maha"</b></td><td>Bentuk terikat umum ditulis <b>SERANGKAI</b> (<i>nonaktif, pascapanen</i>), tetapi bila bertemu <b>huruf kapital</b> wajib tanda hubung (<b>-</b>). Unsur <i>Maha</i> + kata dasar sifat Tuhan umumnya terpisah (khusus <i>Mahakuasa</i> serangkai).</td><td>✅ <b>nonaktif</b>, <b>anti-Pancasila</b>, <b>pro-Indonesia</b>, <b>Yang Maha Esa</b><br>❌ <i>non aktif</i>, <i>antiPancasila</i>, <i>Yang Mahaesa</i></td></tr>'
            + '<tr><td><b>3. Tiga Aturan Huruf Miring (+ Pengecualian!)</b></td><td>Miring dipakai untuk: (a) <b>judul buku/film/media</b> dalam kalimat; (b) menegaskan huruf/kata khusus; (c) istilah asing/daerah <b>yang belum diserap</b> KBBI.<br><b>WAJIB TEGAK:</b> kata serapan baku & <b>nama lembaga/diri asing</b>!</td><td>✅ Membaca koran <i>Kompas</i>; konsep <i>check and balance</i>; lembaga World Health Organization; proses emansipasi dan voting<br>❌ memiringkan <i>World Health Organization</i> atau <i>filosofi</i></td></tr>'
            + '<tr><td><b>4. Peluluhan K-T-S-P</b></td><td>Huruf pertama <b>k, t, s, p</b> luluh setelah awalan <b>meN-</b> bila tidak diawali gugus konsonan (kr-, pr-, tr-, sp-).</td><td>✅ pengaruh → <b>memengaruhi</b>; kritik → <b>mengkritik</b>; pesan → <b>memesan</b><br>❌ <i>mempengaruhi</i>, <i>mengritik</i></td></tr>'
            + '<tr><td><b>5. Kalimat Efektif & Anti-Pleonasme</b></td><td>Satu kalimat tunggal wajib punya <b>Subjek + Predikat jelas</b>. Jangan letakkan kata depan (<i>Di, Dalam, Bagi, Untuk</i>) di depan subjek! Hapus sinonim ganda.</td><td>✅ Rapat itu membahas anggaran.<br>❌ <i>Dalam rapat itu membahas anggaran.</i><br>❌ <i>agar supaya</i>, <i>demi untuk</i>, <i>para hadirin sekalian</i></td></tr>'
            + '</tbody></table>'
            + '<div class="studi"><div class="studi-h">📘 STUDI KASUS — Membedakan Ide Pokok vs Simpulan Paragraf</div>'
            + '<div class="studi-soal"><b>SOAL:</b> Bagaimana cara cepat memilih "Simpulan yang Tepat" dari paragraf kebijakan publik?</div>'
            + '<ol class="studi-langkah"><li>Tentukan <b>kalimat utama</b> dahulu (awal paragraf = deduktif, akhir = induktif).</li><li>Tolak opsi yang hanya mengambil <b>satu detail angka/contoh sempit</b> dari kalimat penjelas.</li><li>Pilih pernyataan yang memayungi <b>ide pokok + implikasi/gagasan penjelas utama</b> secara akurat tanpa menambah asumsi di luar teks.</li></ol>'
            + '<div class="studi-jawab">✅ <b>PRINSIP:</b> Ide pokok = inti topik; <b>Simpulan HOTS</b> = benang merah menyeluruh isi teks.</div></div>'
        }
      ],
      tips: [
        'Pada soal UUD, pisahkan cepat tugas yudikatif: <b>UU vs UUD = MK</b>, sedangkan <b>Perda/PP/Perpres vs UU = MA</b>.',
        'Sila 1 bukan hanya soal rajin ibadah (vertikal), melainkan <b>kerukunan sosial antarumat (horizontal)</b>; Sila 5 ialah keadilan <b>proporsional</b>, bukan sama rata.',
        'Batas pelaporan gratifikasi ke KPK adalah <b>30 hari kerja</b> (bukan kalender), dan <b>netralitas ASN berlaku 24 jam</b> termasuk di media sosial pribadi.',
        'Bedakan gabungan kata dasar (<b>warga negara, tanggung jawab</b> tetap terpisah) vs konfiks serangkai (<b>kewarganegaraan, mempertanggungjawabkan</b>).',
        'Jangan memiringkan <b>nama organisasi asing</b> (World Health Organization) atau kata yang sudah resmi menjadi <b>serapan baku</b> (emansipasi, voting, filosofi).'
      ]
    },

    {
      id: 'tiu-bedah-hots-ebook',
      group: 'TIU',
      title: 'Bedah TIU HOTS Terpadu: Analogi Presisi, Tabel Data, Hitung Taktis & Matriks Figural 3×3',
      summary: 'Teknik membongkar soal TIU sulit ala e-book: kalimat jembatan 3 kata, trik aljabar & diskon berantai, membaca jebakan tabel/grafik/debit, metode 4-lapis matriks figural 3×3, serta penentuan tim bersyarat.',
      buckets: ['SKD_TIU'],
      subs: [
        'TIU HOTS',
        'Penalaran Analogi HOTS',
        'Tim Bersyarat',
        'Interpretasi Grafik Data',
        'Tabel Debit & Waktu',
        'Ketimpangan Ganda',
        'Proyek & Tambah Pekerja',
        'Peluang & Kombinatorika'
      ],
      sections: [
        {
          title: 'Analogi Verbal Presisi: Kalimat Jembatan 3 Kata & Pembeda Jebakan',
          fam: ['tiu56-analogi'],
          html: '<p>Di soal analogi HOTS, dua atau tiga opsi sering sama-sama "nyambung". Agar tidak terjebak, paksakan dua saringan sekaligus:</p>'
            + '<ol>'
            + '<li><b>Buat Kalimat Jembatan Sempit:</b> Jangan hanya berkata "berhubungan dengan". Buat kalimat kerja spesifik, misalnya <i>"TERMOMETER digunakan khusus untuk MENGUKUR SUHU"</i>.</li>'
            + '<li><b>Cek Kesetaraan Kelas Kata & Arah Urutan:</b> Jika kanan berbentuk frasa kerja (<i>mengukur suhu</i>), jawabannya wajib frasa kerja (<i>mengukur tekanan udara</i>), bukan kata benda (<i>tekanan udara</i>)!</li>'
            + '</ol>'
            + '<table class="table table-sm"><thead><tr><th>Jenis Relasi E-Book</th><th>Contoh Pasangan Tepat</th><th>Jebakan yang Harus Dibuang</th></tr></thead><tbody>'
            + '<tr><td><b>Alat : Fungsi Khas</b></td><td>TERMOMETER : MENGUKUR SUHU = BAROMETER : <b>Mengukur tekanan udara</b></td><td>"Ketinggian awan" (beda fungsi) atau bentuk nomina tak paralel.</td></tr>'
            + '<tr><td><b>Ahli : Objek Khas</b></td><td>ASTRONOM : TELESKOP = FILATELIS : <b>Perangko</b></td><td>"Koki : Sendok" terlalu umum atau "Petani : Pasar" = tempat jual.</td></tr>'
            + '<tr><td><b>Siklus Biologis</b></td><td>BENIH : TUNAS : TANAMAN DEWASA = <b>Telur : Berudu : Katak</b></td><td><i>Benang : Kain : Pakaian</i> = produksi pabrik, bukan pertumbuhan makhluk hidup!</td></tr>'
            + '<tr><td><b>Analogi Dua Sisi</b></td><td><b>Terang</b> : SIANG = SUNYI : <b>Malam</b></td><td>Pasangan "Matahari : Malam" mencampur benda langit vs waktu.</td></tr>'
            + '</tbody></table>'
        },
        {
          title: 'Hitung Cepat Taktis: Kuadrat Bilangan Negatif, Faktor Sisa Diskon & Ketimpangan Ganda',
          fam: ['tiu56-taktis'],
          html: '<p>Banyak peserta kehilangan poin mudah di TIU Numerik hanya karena keliru tanda negatif atau menjumlahkan persentase diskon beruntun:</p>'
            + '<table class="table table-sm"><thead><tr><th>Bentuk Jebakan</th><th>Kesalahan Umum</th><th>Rumus Benar & Cepat</th></tr></thead><tbody>'
            + '<tr><td><b>Diskon bertahap d₁% lalu d₂%</b></td><td>Menjumlah langsung d₁ + d₂ (20% + 15% = 35%).</td><td>Kalikan faktor sisa: <b>(1 − d₁)(1 − d₂)</b><br>Diskon 20% + 15% → <b>0,80 × 0,85 = 0,68</b> (diskon total 32%).</td></tr>'
            + '<tr><td><b>Kuadrat bilangan negatif</b></td><td>Mengira (−3)² = −9 atau (a+b)² = a²+b².</td><td>Tanda kurung ikut dikuadratkan: <b>(−3)² = +9</b>!<br><b>(a + b)² = a² + 2ab + b²</b>.</td></tr>'
            + '<tr><td><b>Ketimpangan / Selisih Harga Naik-Turun</b></td><td>Menganggap harga naik 20% lalu turun 20% kembali semula.</td><td><b>Turun selalu p²/100 %</b> → 1,2 × 0,8 = <b>0,96</b> (turun 4%).</td></tr>'
            + '</tbody></table>'
            + '<div class="studi"><div class="studi-h">📘 STUDI KASUS — Diskon Bertahap Rp450.000</div>'
            + '<div class="studi-soal"><b>SOAL:</b> Barang Rp450.000 didiskon 20%, lalu diskon tambahan 15% dari harga setelah diskon pertama. Berapa harga bersih?</div>'
            + '<ol class="studi-langkah"><li>Harga setelah diskon 20% = 0,80 × 450.000 = <b>Rp360.000</b>.</li><li>Harga setelah diskon kedua 15% = 0,85 × 360.000 = 360.000 − 54.000 = <b>Rp306.000</b>.</li><li>Bandingkan jebakan 35% (Rp292.500): salah karena menghitung 15% dari harga awal!</li></ol>'
            + '<div class="studi-jawab">✅ <b>JAWABAN:</b> Rp306.000</div></div>'
        },
        {
          title: 'Bedah Tabel & Grafik Data: Margin per Unit, Rata-Rata Tertimbang & Persen Pertumbuhan',
          fam: ['tiu56-tabel-data'],
          html: '<p>Pada soal tabel/grafik BKN, aritmetikanya sederhana namun <b>metrik yang ditanya sengaja menjebak</b>. Kenali 4 jebakan utamanya:</p>'
            + '<table class="table table-sm"><thead><tr><th>Pertanyaan Tabel / Grafik</th><th>Jebakan Klasik</th><th>Langkah Cepat Anti-Salah</th></tr></thead><tbody>'
            + '<tr><td><b>Efisiensi / Margin per Unit</b></td><td>Mengalikan margin × jumlah unit terjual (total laba).</td><td>Jika ditanya <b>per unit</b>, abaikan kolom volume terjual! Cukup hitung <b>Harga Jual − Biaya/Unit</b>.</td></tr>'
            + '<tr><td><b>Rata-Rata Margin Tertimbang</b></td><td>Menghitung rata-rata langsung kolom persen (misal (12%+24%+42%)/3 = 26%).</td><td>Hitung laba absolut tiap divisi dulu: <b>Total Laba ÷ Total Pendapatan</b>.</td></tr>'
            + '<tr><td><b>Persentase Pertumbuhan Tertinggi</b></td><td>Memilih kota dengan kenaikan absolut paling besar.</td><td>Wajib bagi ke basis awal: <b>(Baru − Lama) ÷ Lama × 100%</b>. Basis kecil (+18 dari 45 = <b>40%</b>) sering mengalahkan basis besar (+32 dari 160 = 20%)!</td></tr>'
            + '<tr><td><b>Tabel Debit Pipa Masuk & Keluar</b></td><td>Menjumlahkan waktu alih-alih menjumlahkan laju debitnya.</td><td>Ubah ke satuan <b>liter/menit</b>: Laju bersih = debit masuk − debit bocor, baru bagi sisa volume bak.</td></tr>'
            + '</tbody></table>'
            + '<div class="studi"><div class="studi-h">📘 STUDI KASUS — Rata-Rata Tertimbang Tiga Divisi</div>'
            + '<div class="studi-soal"><b>SOAL:</b> Divisi A omzet 300 M (margin 12%), Divisi B 500 M (24%), Divisi C 200 M (42%). Berapa margin gabungan sebenarnya?</div>'
            + '<ol class="studi-langkah"><li>Laba A = 36 M; Laba B = 120 M; Laba C = 84 M → Total Laba = <b>240 M</b>.</li><li>Total Omzet = 300 + 500 + 200 = <b>1.000 M</b>.</li><li>Margin gabungan = 240 ÷ 1.000 = <b>24,0%</b> (bukan rata-rata polos 26,0%).</li></ol>'
            + '<div class="studi-jawab">✅ <b>JAWABAN:</b> 24,0%</div></div>'
        },
        {
          title: 'Membongkar Figural Matriks 3×3: Metode Elemen-per-Elemen untuk 6 Pola Sulit',
          fam: ['tiu56-figural-matriks'],
          html: '<p>Jangan menatap matriks 3×3 sebagai gambar utuh yang bikin pusing! Gunakan <b>Sistem Cek 4 Lapis</b> secara terpisah dan cepat:</p>'
            + SVG_MAT_ROT_DEMO
            + '<p><b>Contoh Pola Pembungkus + Titik Masuk (Pola #64 E-Book):</b> Setiap bergerak ke kanan, bangun baru berjumlah sisi lebih besar membungkus gambar lama; titik merah luar sebelumnya <b>masuk ke dalam</b> menjadi titik biru, sedangkan bangun pembungkus baru memunculkan titik merah luar sebanyak jumlah sisinya.</p>'
            + SVG_MAT_DOT_DEMO
            + '<div class="ingat">⚠️ <b>Tips Kilat Eliminasi 10 Detik:</b> Cek dulu <b>1 fitur paling jelas</b> (misal arah panah berputar +90° atau jumlah elemen {a, 2a, 4a}). Sekali arah panah ditemukan (misal wajib menghadap bawah ↓), 3–4 opsi pengecoh biasanya langsung gugur seketika!</div>'
        },
        {
          title: 'Pemilihan Tim Bersyarat: Peta Panah (P → Q), Kontraposisi (~Q → ~P) & Kasus Mustahil',
          fam: ['v38-pemilihan-tim'],
          html: '<p>Soal pemilihan 3–4 anggota tim dari 5–7 kandidat jauh lebih cepat selesai jika semua syarat ditulis memakai <b>simbol logika ringkas</b>:</p>'
            + '<table class="table table-sm"><thead><tr><th>Bunyi Syarat di Soal</th><th>Notasi Kertas Coret</th><th>Implikasi Wajib (Kontraposisi)</th></tr></thead><tbody>'
            + '<tr><td>"Jika T dipilih, maka V juga dipilih"</td><td><b>T → V</b></td><td>Jika V TIDAK dipilih, T wajib keluar (<b>~V → ~T</b>).<br><b>Hati-hati:</b> V masuk <i>tidak otomatis</i> memaksa T masuk!</td></tr>'
            + '<tr><td>"C harus selalu bersama D"</td><td><b>C ↔ D</b></td><td>Masuk berdua atau keluar berdua! Jika D keluar, C wajib ikut keluar.</td></tr>'
            + '<tr><td>"A dan B tidak boleh bersama"</td><td><b>~(A ∧ B)</b></td><td>Maksimal hanya 1 dari keduanya berada di dalam tim; jika A masuk, B langsung dicoret.</td></tr>'
            + '</tbody></table>'
            + '<div class="studi"><div class="studi-h">📘 STUDI KASUS — Jebakan "Tidak Ada Komposisi Valid"</div>'
            + '<div class="studi-soal"><b>SOAL:</b> Pilih 3 orang dari {A, B, C, D, E}. Syarat: A & B tak boleh bersama; C ↔ D; jika ~E maka A. D dipastikan tidak terpilih. Apa susunan tim?</div>'
            + '<ol class="studi-langkah"><li>D keluar + hukum <b>C ↔ D</b> memaksa <b>C juga keluar</b>.</li><li>Kandidat tersisa hanya <b>{A, B, E}</b> (pas 3 orang untuk 3 kursi!).</li><li>Padahal syarat (1) melarang A dan B berada bersama di tim → <b>kontradiksi</b>!</li></ol>'
            + '<div class="studi-jawab">✅ <b>JAWABAN:</b> Tidak ada komposisi tim yang memenuhi seluruh syarat.</div></div>'
        },
        {
          title: 'Soal Cerita Lanjut: Proyek Berhenti + Tambah Jam Kerja & Peluang Kombinasi Minimal 1',
          fam: [],
          html: '<p>Dua tipe soal cerita HOTS berikutnya sering menguras waktu jika tidak langsung memakai pendekatan <b>total beban kerja</b> atau <b>komplemen peluang</b>:</p>'
            + '<ul>'
            + '<li><b>Proyek Berhenti + Perubahan Jam Kerja:</b> Gunakan satuan baku <b>Orang × Hari × Jam Kerja</b> (<i>man-hours</i>). Hitung dulu <i>Total Beban</i>, kurangi yang sudah dikerjakan sebelum berhenti, lalu bagi dengan sisa hari × pekerja baru × jam kerja baru.</li>'
            + '<li><b>Peluang & Kombinatorika ("Minimal 1 Terpilih"):</b> Jangan menghitung 1-per-1 semua kasus (1 dari A, 2 dari A, 3 dari A...). Hitung <b>komplemennya</b>: <b>P(Minimal 1) = 1 − P(Tidak ada sama sekali)</b> = <b>1 − C(bukan target, k) / C(total, k)</b>!</li>'
            + '<li><b>Rasio & Interpretasi Grafik Anggaran:</b> Saat membandingkan grafik realisasi vs pagu beberapa OPD, periksa satuan sumbu-Y (miliar vs persen serapan) agar tidak tertukar antara angka tertinggi dan rasio serapan terbesar.</li>'
            + '</ul>'
            + '<div class="studi"><div class="studi-h">📘 STUDI KASUS — Memilih Tim dengan Syarat Minimal 1 Pengawas</div>'
            + '<div class="studi-soal"><b>SOAL:</b> Dari 5 auditor dan 3 pengawas dipilih acak tim 3 orang. Berapa peluang terpilihnya minimal 1 pengawas?</div>'
            + '<ol class="studi-langkah"><li>Total cara memilih 3 dari 8 orang = C(8,3) = <b>56</b>.</li><li>Cara tim tanpa pengawas sama sekali (ketiganya auditor) = C(5,3) = <b>10</b>.</li><li>Peluang minimal 1 pengawas = 1 − 10/56 = 46/56 = <b>23/28</b>.</li></ol>'
            + '<div class="studi-jawab">✅ <b>JAWABAN:</b> 23/28 (selesai 20 detik!).</div></div>'
        }
      ],
      tips: [
        'Pada analogi, kunci jawaban benar lewat <b>kesetaraan kelas kata</b> (verba harus berpasangan verba) dan <b>tingkat spesifikasi</b> relasi.',
        'Diskon bertahap BUKAN dijumlahkan: gunakan pengali sisa <b>(1 − d₁)(1 − d₂)</b>.',
        'Pada tabel data, bedakan tajam tiga metrik: <b>margin per unit</b>, <b>rata-rata tertimbang</b> (Total ÷ Total), dan <b>persen pertumbuhan terhadap basis awal</b>.',
        'Matriks figural 3×3 paling cepat diselesaikan per elemen (rotasi/flip dulu → lalu jumlah sisi/titik), jangan menebak gambar menyeluruh sekaligus.',
        'Pada pemilihan tim bersyarat, langsung coret kandidat yang terkena kontraposisi (~Q → ~P) dan cek apakah sisa kandidat masih cukup mengisi kuota.'
      ]
    },

    {
      id: 'tkp-bedah-hots-ebook',
      group: 'TKP',
      title: 'Bedah TKP HOTS BerAKHLAK: Memenangkan Skor 5 atas Opsi Skor 4 di Dilema Birokrasi',
      summary: 'Membongkar jebakan opsi skor 4 vs skor 5 pada kasus pelayanan krisis, chatbot layanan, K3, selisih kecil anggaran 0,5%, managing lone wolf, algoritma filter bubble, gentrifikasi kota, serta pencegahan radikalisme dini.',
      buckets: ['SKD_TKP'],
      subs: ['TKP HOTS'],
      sections: [
        {
          title: 'Pelayanan Publik Krisis, Inovasi Digital & Standar K3 (Skor 5 vs 4)',
          fam: ['tkp56-pelayanan'],
          html: '<p>Dalam TKP tingkat lanjut, hampir semua opsi terdengar sopan. Pemenang <b>Skor 5</b> memadukan <b>dampak sistemik</b>, <b>kepatuhan hukum</b>, dan <b>kecepatan mitigasi risiko</b> saat itu juga:</p>'
            + '<table class="table table-sm"><thead><tr><th>Dilema Layanan</th><th>Opsi Jebakan (Skor 4 / 3)</th><th>Pilihan SKOR 5 & Alasannya</th></tr></thead><tbody>'
            + '<tr><td><b>Lonjakan ratusan WA konsultasi di luar jam kerja</b></td><td>Membuat jadwal giliran staf (3) atau membatasi jam balas saja (4).</td><td><b>Terapkan chatbot triase / FAQ otomatis</b> agar beban berulang selesai secara sistemik lewat TIK.</td></tr>'
            + '<tr><td><b>Lansia jauh berkas belum dilegalisir camat</b></td><td>Beri antrean prioritas besok (4) atau menolak kaku (3) atau nekat proses tanpa legalisir (1).</td><td>Jelaskan ramah aturan hukum + <b>proaktif menelepon kecamatan saat itu juga</b> untuk fasilitasi verifikasi sah (SOP aman + warga terbantu).</td></tr>'
            + '<tr><td><b>Laporan lantai toilet licin di jam ramai</b></td><td>Langsung tinggal loket mencari kain pel (4) atau sekadar menelepon CS tanpa pengaman awal (3).</td><td><b>Urutan K3: pasang papan peringatan bahaya detik itu juga</b> guna memutus risiko jatuh, baru hubungi petugas kebersihan!</td></tr>'
            + '<tr><td><b>Video pujian warga menyebut nama Anda viral</b></td><td>Sekadar berterima kasih pribadi di komentar (4).</td><td>Berterima kasih tulus + <b>menegaskan keberhasilan adalah kerja sama tim & sistem instansi</b> (rendah hati & kolaboratif).</td></tr>'
            + '</tbody></table>'
        },
        {
          title: 'Profesionalisme & Akuntabilitas Mikro: Konflik Unit, Selisih 0,5% & Target Tertekan',
          fam: ['tkp56-profesional'],
          html: '<p>Skor 5 pada pilar <b>Akuntabel & Kompeten</b> menguji apakah ASN tergoda memotong jalan pintas di hal kecil:</p>'
            + '<ul>'
            + '<li><b>Selisih Data Antarunit:</b> Saat laporan unit Anda dan Unit X berbenturan menjelang rapat pimpinan, jangan saling melempar surat atau menyerahkannya mentah-mentah ke atasan. <b>Ajak duduk bersama telusuri perbedaan data</b> sebelum rapat agar solusi berbasis fakta tunggal.</li>'
            + '<li><b>Selisih Anggaran 0,5%:</b> Meski nominal terasa kecil, laporan keuangan publik menganut prinsip akuntabilitas nol toleransi. <b>Lacak sumber selisih hingga tuntas</b> (skor 5), bukan langsung menutupnya diam-diam atau membuang-buang dana pribadi tanpa audit pencatatan!</li>'
            + '<li><b>Tim Tertekan Deadline Ketat:</b> Mengambil alih semua tugas (skor 4/3 membuat tim lumpuh & tak belajar) kalah jauh dibanding <b>memecah target besar menjadi langkah bertahap + mendampingi kendala teknis tim</b> (skor 5).</li>'
            + '<li><b>Kuitansi Hilang / Kelalaian Kecil:</b> Laporkan jujur apa adanya beserta bukti pendukung lain yang sah (<b>anti-rekayasa</b> mutlak bernilai 5).</li>'
            + '</ul>'
        },
        {
          title: 'Jejaring Kerja & TIK Modern: Merangkul Lone Wolf, Kredit Ide & Kendali Filter Bubble',
          fam: ['tkp56-jejaring', 'tkp56-tik'],
          html: '<p>Kolaborasi modern menuntut kecerdasan emosional sekaligus pilihan platform TIK yang tepat guna:</p>'
            + '<table class="table table-sm"><thead><tr><th>Situasi Tim / TIK</th><th>Opsi Biasa (Skor 3–4)</th><th>Opsi Terbaik (SKOR 5)</th></tr></thead><tbody>'
            + '<tr><td><b>Usulan rekan (Budi) dipilih pimpinan daripada usulan Anda</b></td><td>Fokus bikin ide baru untuk diri sendiri (4) atau menanyakan kekurangan pribadi saja (2).</td><td><b>Ucapkan selamat tulus + tawarkan tenaga/ide bantu implementasi</b> inovasi Budi demi sukses organisasi.</td></tr>'
            + '<tr><td><b>Anggota andal teknis namun "lone wolf" (kerja sendiri)</b></td><td>Memberinya tugas terpisah selamanya (1) atau tegur keras di rapat terbuka (3).</td><td><b>Berdiskusi empat mata, apresiasi keahliannya, dan bangun kesadaran</b> dampak vital sinkronisasi bagi proyek tim.</td></tr>'
            + '<tr><td><b>Rekan pendiam punya gagasan brilian namun takut bicara</b></td><td>Membiarkannya diam (2) atau mengklaim idenya (1).</td><td>Diskusi personal + tawarkan presentasi bersama atau sampaikan dengan <b>kredit penuh atas namanya</b>.</td></tr>'
            + '<tr><td><b>Rapat mingguan bertele membaca progres rutin</b></td><td>Memotong paksa durasi rapat (1–2) atau wajib laporan panjang via chat/email (3–4).</td><td><b>Gunakan platform manajemen kerja real-time (Kanban/Trello/Asana)</b> sehingga rapat hanya bahas kendala & keputusan.</td></tr>'
            + '<tr><td><b>Algoritma medsos memicu "filter bubble" ekstrem</b></td><td>Hanya bikin medsos tandingan pemerintah (2) atau blokir global (1).</td><td><b>Dorong regulasi transparansi & opsi kendali pengguna</b> agar algoritma personalisasi bisa dimatikan warga.</td></tr>'
            + '</tbody></table>'
        },
        {
          title: 'Sosial Budaya Inklusif & Anti-Radikalisme Dini: Melawan Gentrifikasi & Soft Approach',
          fam: ['tkp56-sosbud', 'tkp56-radikal'],
          html: '<p>Pada aspek <b>Sosial Budaya & Harmonis</b> serta <b>Anti-Radikalisme</b>, skor 5 selalu melindungi kelompok rentan atas dasar keadilan objektif dan merangkul secara persuasif sebelum terjadi keterasingan lebih dalam:</p>'
            + '<ul>'
            + '<li><b>Gentrifikasi Kampung Budaya:</b> Jika harga sewa naik akibat kafe wisata hingga perajin asli tersingkir, membiarkan ke pasar bebas (skor 1) atau mengusir mereka ke sentra pinggiran kota (skor 3) menghilangkan jiwa kampung. Skor 5 adalah <b>mengusulkan insentif keringanan sewa dan zonasi ruang usaha terproteksi di lokasi asal</b>.</li>'
            + '<li><b>Tekanan Tokoh Politik vs Kebutuhan Warga Miskin:</b> Saat diminta memindahkan proyek ke wilayah elit asal tokoh berpengaruh meski data objektif membuktikan kecamatan minoritas jauh lebih miskin, berdirilah tegak merekomendasikan lokasi berbasis <b>data objektif demi keadilan sosial</b> (skor 5). Jangan kompromi memanipulasi angka survei (skor 1!).</li>'
            + '<li><b>Pencegahan Dini Paparan Ekstremisme (Soft Approach):</b> Melihat pemuda cerdas yang mulai tertutup dan mengakses kajian intoleran, mengucilkannya (skor 1) atau langsung melaporkannya ke aparat sebelum ada tindak pidana justru membuatnya defensif. Skor 5 adalah <b>merangkulnya masuk ke komunitas positif inklusif</b> (karang taruna, bakti sosial, hobi bersama) agar wawasannya kembali terbuka.</li>'
            + '</ul>'
        }
      ],
      tips: [
        'Urutan refleks TKP Skor 5: <b>Selamatkan Risiko/Warga → Patuhi SOP/Data → Selesaikan Akar Sistem (TIK/Koordinasi) → Rangkul Semua Pihak</b>.',
        'Jangan tergoda opsi <b>"menyumbang uang pribadi / diam biar damai"</b> untuk masalah akuntabilitas anggaran (skor 5 wajib telusur sumber kesalahan secara resmi).',
        'Saat ada tekanan politik atau konflik kepentingan di soal Sosial Budaya, pilih opsi yang teguh memegang <b>data objektif dan keberpihakan pada kelompok rentan</b>.',
        'Pada TIK kolaboratif, bedakan alat <i>obrolan cepat</i> (chat grup: info tenggelam) vs alat <i>tata kelola progres</i> (<b>Kanban/Trello</b> real-time).',
        'Pencegahan dini radikalisme selalu memilih <b>pendekatan merangkul yang membangun koneksi sosial (soft approach)</b> di awal, bukan stigma atau pengucilan.'
      ]
    }
  );
})();
