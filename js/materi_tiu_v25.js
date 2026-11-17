/* Materi TIU v25 — dimuat SETELAH js/materi*.js dan patches_v24.js, SEBELUM app.js.
   Isi: 9 topik TIU baru (strategi nilai tercepat + materi lengkap dengan STUDI KASUS pengingat).
   Topik baru ditaruh di urutan paling depan grup TIU; materi lama tidak dihapus.
   Semua angka pada contoh sudah dihitung ulang dengan kode. Pecahan memakai tampilan bertingkat (bukan 1/2). */
(function () {
  if (!window.MATERI) window.MATERI = [];
  var M = window.MATERI;
  if (M.some(function (m) { return m.id === 'tiu-strategi-nilai-v25'; })) return;

  /* ---------- pembantu tampilan ---------- */
  var fr = function (n, d) { return '<span class="frac"><span class="fn">' + n + '</span><span class="fd">' + d + '</span></span>'; };
  var tbl = function (head, rows) {
    return '<table class="table table-sm"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
  var ul = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  var note = function (t) { return '<div class="callout">' + t + '</div>'; };
  var rumus = function (t) { return '<div class="rumus">' + t + '</div>'; };
  var cara = function (t) { return '<div class="cara">⚡ <b>Cara cepat:</b> ' + t + '</div>'; };
  var kasus = function (judul, cerita, jawab, ingat) {
    return '<div class="kasus"><div class="kasus-h">📌 KASUS: ' + judul + '</div><p>' + cerita + '</p><div class="kasus-j">' + jawab + '</div>' +
      (ingat ? '<div class="ingat">🧠 <b>Ingat:</b> ' + ingat + '</div>' : '') + '</div>';
  };
  var T = function (id, title, summary, subs, sections, tips) {
    var o = { id: id, group: 'TIU', title: title, summary: summary, buckets: ['SKD_TIU'], sections: sections, tips: tips, v25: true };
    if (subs) o.subs = subs;
    return o;
  };
  var list = [];

  /* =================================================================== 0. STRATEGI */
  list.push(T('tiu-strategi-nilai-v25', 'Strategi Nilai TIU Tercepat: Target, Urutan & Waktu',
    'Berapa soal harus benar, urutan pengerjaan 3 putaran, jatah waktu tiap jenis soal, dan rencana latihan 7 hari.',
    null, [
      {
        title: 'Hitung Target: Berapa Soal Harus Benar?',
        html: tbl(['Hal', 'Angka penting'], [
          ['Jumlah soal TIU', '35 soal (SKD seluruhnya 110 soal, waktu 100 menit)'],
          ['Skor TIU', 'Benar = <b>5</b>, salah atau kosong = <b>0</b> (tidak ada pengurangan) → maksimal 175'],
          ['Ambang batas TIU (formasi umum)', '80 poin = <b>16 soal benar</b>'],
          ['Target aman', '20–24 soal benar (100–120 poin) agar ada cadangan bila TWK/TKP kurang']
        ]) + rumus('Skor TIU = 5 × jumlah soal benar') +
          note('Ambang batas formasi khusus bisa berbeda (misalnya disabilitas, dokter, cumlaude). Selalu cek pengumuman resmi formasi yang kamu lamar.') +
          kasus('Selisih satu soal = 5 poin',
            'Dina menjawab benar 15 soal → 75 poin, tidak lolos ambang TIU. Rani menjawab benar 16 soal → 80 poin, lolos. Satu soal deret angka yang 30 detik saja dilewati Dina menentukan nasibnya.',
            'Jadi <b>jangan pernah menyerahkan soal mudah</b>. Soal mudah adalah poin yang paling murah.',
            'TIU itu 16 soal benar = aman. Bukan harus sempurna, hanya harus <b>tidak kehilangan soal mudah</b>.')
      },
      {
        title: 'Peta Soal: Mana yang Cepat, Mana yang Mahal',
        html: tbl(['Jenis soal', 'Target waktu', 'Putaran'], [
          ['Deret angka & huruf', '30–45 detik', '1'],
          ['Padanan kata & analogi', '30–45 detik', '1'],
          ['Perbandingan kuantitatif (X vs Y)', '45–60 detik', '1'],
          ['Berhitung cepat (pecahan, persen)', '45 detik', '1'],
          ['Silogisme & kesimpulan', '45–60 detik', '1–2'],
          ['Figural (serial, matriks, jaring-jaring)', '45–60 detik', '2'],
          ['Soal cerita (kerja, kecepatan, usia, untung-rugi)', '90 detik', '2'],
          ['Himpunan, peluang, kombinatorik', '90 detik', '2'],
          ['Logika analitis (posisi duduk, jadwal)', '2–3 menit', '3']
        ]) + note('Komposisi soal tiap tahun bisa bergeser, tetapi pola jenisnya sama. Rata-rata jatah TIU sekitar 75 detik per soal (±45 menit untuk 35 soal). Soal yang cepat dipakai untuk "membeli" waktu bagi soal yang mahal.')
      },
      {
        title: '3 Putaran: Urutan Pengerjaan Tercepat',
        html: rumus('Putaran 1 MUDAH → Putaran 2 SEDANG → Putaran 3 TEBAK') + ul([
          '<b>Putaran 1:</b> kerjakan hanya soal yang langsung kamu tahu caranya (deret, padanan kata, X vs Y, silogisme jelas). Soal yang butuh lebih dari <b>60 detik</b> → tandai ragu, lanjut.',
          '<b>Putaran 2:</b> kembali ke soal tertandai (soal cerita, himpunan, figural). Batas <b>90 detik</b> per soal.',
          '<b>Putaran 3:</b> sisa soal analitis atau yang belum ketemu cara. Tebak terarah: coret opsi yang jelas salah, pilih dari sisanya.',
          '<b>Jangan ada nomor kosong.</b> Kosong = pasti 0. Tebak = peluang benar ' + fr(1, 5) + ' (20%), dan salah tidak mengurangi nilai.',
          '<b>Anggaran waktu saran:</b> TWK ±20 menit, TKP ±30 menit, TIU ±45 menit, sisa ±5 menit untuk mengecek soal tertandai.'
        ]) + cara('Pakai kata-kata ini di kepala: <b>"Bisa? Jawab. Ragu? Tandai."</b> Jangan berdebat dengan satu soal lebih dari 90 detik.')
      },
      {
        title: 'Studi Kasus: Budi vs Sari, Waktu Sama Skor Beda',
        html: kasus('Dua peserta, satu ruang ujian',
          'Budi mengerjakan TIU berurutan dari nomor 1. Di soal kombinatorik nomor 9 ia macet 6 menit sampai merasa harus ketemu jawabannya. Akibatnya 8 soal terakhir (ada deret angka dan padanan kata mudah) dijawab asal-asalan. Sari memakai 3 putaran: soal 9 ia tandai, lanjut, dan baru kembali di putaran 2.',
          '<b>Budi:</b> 14 soal benar = 70 poin (di bawah 80).<br><b>Sari:</b> 22 soal benar = 110 poin (lolos).<br>Keduanya sama pintar, bedanya hanya <b>urutan dan disiplin waktu</b>.',
          'Soal yang menghabiskan waktu bukan soal yang harus dimenangkan. <b>Yang dimenangkan adalah total poin.</b>') +
          '<p class="text-xs">Kasus di atas hanya ilustrasi untuk mengingat strategi, bukan data hasil ujian sebenarnya.</p>'
      },
      {
        title: 'Rencana Latihan 7 Hari (Waktu Mepet)',
        html: tbl(['Hari', 'Fokus', 'Target'], [
          ['1', 'Pecahan, persen, desimal', 'Hafal tabel pecahan-persen'],
          ['2', 'Deret angka & huruf', '15 soal, ≤ 40 detik per soal'],
          ['3', 'Perbandingan kuantitatif (X vs Y)', '15 soal, hafal 4 jawaban dan 3 jebakan'],
          ['4', 'Silogisme & logika', '15 soal, selalu gambar diagram'],
          ['5', 'Soal cerita', 'Kerja bersama, papasan, usia, untung-rugi'],
          ['6', 'Analogi, himpunan-peluang, figural', '10 soal tiap jenis'],
          ['7', 'Simulasi 35 soal TIU', '45 menit, lalu bahas SEMUA soal yang salah']
        ]) + cara('Setelah tiap sesi, tulis <b>1 kalimat kasus</b> yang paling kamu ingat (contoh: "Budi macet 6 menit → tandai, lanjut"). Otak lebih mudah mengingat cerita daripada rumus.')
      }
    ],
    [
      'Skor TIU = 5 × benar. Ambang umum 80 = <b>16 soal benar</b>. Targetkan 20–24.',
      'Kerjakan <b>3 putaran</b>: mudah → sedang → tebak. Batas 60 detik di putaran 1, 90 detik di putaran 2.',
      'Tidak ada pengurangan untuk jawaban salah: <b>jangan kosongkan nomor mana pun</b>.',
      'Satu soal mudah yang terlewat = 5 poin hilang. Satu soal sulit yang dipaksakan = 5 soal mudah hilang.'
    ]));

  /* =================================================================== 1. PECAHAN & PERSEN */
  list.push(T('tiu-pecahan-persen-kasus-v25', 'Pecahan, Persen & Desimal Kilat + Studi Kasus',
    'Tabel pecahan-persen yang wajib hafal, cara membandingkan pecahan tanpa menghitung penuh, trik persen, dan deret pecahan teleskopik.',
    ['Numerik - Berhitung Cepat'], [
      {
        title: 'Tabel Pecahan = Persen = Desimal (Hafal Sekali)',
        html: tbl(['Pecahan', 'Persen & desimal'], [
          [fr(1, 2), '50% = 0,5'], [fr(1, 3), '33,33% = 0,333…'], [fr(2, 3), '66,67% = 0,666…'],
          [fr(1, 4), '25% = 0,25'], [fr(3, 4), '75% = 0,75'], [fr(1, 5), '20% = 0,2'],
          [fr(2, 5), '40% = 0,4'], [fr(3, 5), '60% = 0,6'], [fr(4, 5), '80% = 0,8'],
          [fr(1, 6), '16,67%'], [fr(1, 8), '12,5% = 0,125'], [fr(3, 8), '37,5% = 0,375'],
          [fr(5, 8), '62,5% = 0,625'], [fr(7, 8), '87,5% = 0,875'], [fr(1, 9), '11,11%'],
          [fr(1, 12), '8,33%'], [fr(1, 16), '6,25%'], [fr(1, 20), '5%']
        ]) + cara('Pecahan ke persen = <b>100 ÷ penyebut</b> lalu kali pembilang. ' + fr(1, 8) + ' → 100 ÷ 8 = 12,5%. Maka ' + fr(3, 8) + ' = 3 × 12,5 = 37,5%.') +
          kasus('Si Pecahan Istimewa',
            'Hitung (37,5% × 640) + (2,25 × 80) − (' + fr(1, 4) + ' ÷ 0,125).',
            'Ubah dulu ke pecahan: 37,5% = ' + fr(3, 8) + ', 2,25 = ' + fr(9, 4) + ', 0,125 = ' + fr(1, 8) + '.<br>' + fr(3, 8) + ' × 640 = 240; ' + fr(9, 4) + ' × 80 = 180; ' + fr(1, 4) + ' ÷ ' + fr(1, 8) + ' = 2.<br>240 + 180 − 2 = <b>418</b>.',
            'Angka "aneh" (37,5; 2,25; 0,125) pasti pecahan istimewa. <b>Ubah ke pecahan, jangan dikali desimal.</b>')
      },
      {
        title: 'Membandingkan Pecahan Tanpa Menghitung Penuh',
        html: tbl(['Situasi', 'Cara cepat', 'Contoh'], [
          ['Pembilang sama', 'Penyebut lebih kecil = nilai lebih besar', fr(3, 7) + ' &gt; ' + fr(3, 9)],
          ['Dua pecahan biasa', '<b>Kali silang</b>: a×d lawan c×b', fr(5, 7) + ' vs ' + fr(7, 10) + ': 5×10 = 50 &gt; 7×7 = 49 → ' + fr(5, 7) + ' lebih besar'],
          ['Pecahan hampir 1', 'Lihat <b>sisanya</b> terhadap 1; sisa kecil = nilai besar', fr(17, 18) + ' vs ' + fr(18, 19) + ': sisa ' + fr(1, 18) + ' &gt; ' + fr(1, 19) + ' → ' + fr(18, 19) + ' lebih besar']
        ]) + kasus('Kembar Tipis',
          'X = ' + fr(23, 25) + ' × 125 dan Y = ' + fr(24, 26) + ' × 125. Manakah yang benar: X &gt; Y, X &lt; Y, atau X = Y?',
          'Faktor 125 sama di kedua sisi, jadi cukup bandingkan ' + fr(23, 25) + ' dan ' + fr(24, 26) + '.<br>Sisa terhadap 1: ' + fr(2, 25) + ' lawan ' + fr(2, 26) + '. Pembilang sama, penyebut 26 lebih besar → sisanya lebih kecil → ' + fr(24, 26) + ' lebih besar.<br>Jadi <b>Y &gt; X</b> (X = 115, Y ≈ 115,4).',
          '<b>Pecahan "n dari n+2" makin mendekati 1 bila angkanya makin besar.</b> Sisa kecil = nilai besar.')
      },
      {
        title: 'Trik Persen: Kasus Gaji, Diskon & Naik-Turun',
        html: ul([
          '<b>10% = geser koma satu angka.</b> 15% dari 240: 10% = 24, 5% = 12 → <b>36</b>.',
          '<b>Persen bisa ditukar:</b> x% dari y = y% dari x. 8% dari 75 sama dengan 75% dari 8 = <b>6</b>.',
          '<b>Persen perubahan</b> = ' + fr('baru − lama', 'lama') + ' × 100%. Dari 80 jadi 100 → ' + fr(20, 80) + ' = <b>25%</b>.'
        ]) + kasus('Gaji Naik Lalu Turun',
          'Gaji Pak Anto naik 25%, lalu bulan berikutnya dipotong 20% dari gaji yang baru. Apakah ia rugi, untung, atau tetap?',
          'Kali faktor: 1,25 × 0,8 = <b>1</b> → gaji kembali sama persis.',
          'Naik 25% lalu turun 20% = <b>tetap</b>. Tetapi naik 20% lalu turun 20% = 1,2 × 0,8 = 0,96 → <b>turun 4%</b>. Persen naik dan turun tidak saling menghapus.') +
          kasus('Harga Naik Lalu Diskon',
            'Barang Rp100.000 naik 10% lalu didiskon 10%. Berapa harga akhir?',
            '1,1 × 0,9 = 0,99 → Rp99.000, jadi <b>turun 1%</b> (bukan kembali Rp100.000).',
            'Naik a% lalu turun a% selalu berakhir <b>turun</b>.')
      },
      {
        title: 'Deret Pecahan Teleskopik (Soal Favorit)',
        html: rumus(fr(1, 'n(n+1)') + ' = ' + fr(1, 'n') + ' − ' + fr(1, 'n+1')) +
          '<p>Hasilnya saling mencoret ("teleskop"), tersisa suku pertama dan suku terakhir. Jumlah n suku pertama = <b>' + fr('n', 'n+1') + '</b>.</p>' +
          kasus('Jumlah yang Saling Menghapus',
            'Jika P = ' + fr(1, 2) + ' + ' + fr(1, 6) + ' + ' + fr(1, 12) + ' + ' + fr(1, 20) + ' + ' + fr(1, 30) + ', berapa 60 × P?',
            'Penyebutnya 1×2, 2×3, 3×4, 4×5, 5×6 → pola ' + fr(1, 'n(n+1)') + ' dengan n = 5.<br>P = 1 − ' + fr(1, 6) + ' = ' + fr(5, 6) + '.<br>60 × ' + fr(5, 6) + ' = <b>50</b>.',
            'Penyebut "hasil kali dua bilangan berurutan" → <b>langsung ' + fr('n', 'n+1') + '</b>. Tidak perlu menyamakan penyebut.') +
          kasus('Pecahan Kebalikan',
            'Hitung ' + fr(4, 6) + ' + ' + fr(6, 4) + ' dalam pecahan paling sederhana.',
            'Sederhanakan dulu: ' + fr(2, 3) + ' + ' + fr(3, 2) + ' = ' + fr(4, 6) + ' + ' + fr(9, 6) + ' = <b>' + fr(13, 6) + '</b>.',
            '<b>Sederhanakan sebelum menjumlahkan</b>; angkanya jadi kecil.')
      }
    ],
    [
      'Angka desimal "aneh" (0,125; 37,5%; 2,25) → ubah ke pecahan istimewa.',
      'Pecahan hampir 1 → bandingkan <b>sisanya</b>. Dua pecahan biasa → <b>kali silang</b>.',
      'Persen naik lalu turun tidak saling menghapus. Naik 25% lalu turun 20% baru kembali tetap.',
      'Penyebut berurutan (1×2, 2×3, …) → jumlahnya ' + fr('n', 'n+1') + '.'
    ]));

  /* =================================================================== 2. PERBANDINGAN KUANTITATIF */
  list.push(T('tiu-perbandingan-kuantitatif-kasus-v25', 'Perbandingan Kuantitatif (X vs Y) + Studi Kasus',
    'Cara menjawab soal X vs Y tanpa menghitung sampai akhir, 4 kemungkinan jawaban, dan jebakan variabel.',
    ['Numerik - Perbandingan Kuantitatif'], [
      {
        title: '4 Jawaban & 3 Langkah Cepat',
        html: tbl(['Pilihan', 'Artinya'], [
          ['X &gt; Y', 'X pasti lebih besar'], ['X &lt; Y', 'X pasti lebih kecil'],
          ['X = Y', 'Selalu sama'], ['Tidak dapat ditentukan', 'Hasilnya berubah-ubah tergantung nilai variabel']
        ]) + ul([
          '<b>Langkah 1:</b> sederhanakan kedua sisi, coret faktor yang sama (contoh: sama-sama dikali 125).',
          '<b>Langkah 2:</b> jangan hitung sampai angka akhir bila perbedaan sudah terlihat.',
          '<b>Langkah 3:</b> bila ada variabel, <b>uji dua nilai</b> (positif dan negatif, atau 0 dan pecahan). Bila hasil perbandingan berbeda → <b>tidak dapat ditentukan</b>.'
        ]) + kasus('Variabel Licik',
          'Diketahui a² = 16. X = a dan Y = 4.',
          'a² = 16 → a = 4 <i>atau</i> a = −4.<br>Jika a = 4 maka X = Y; jika a = −4 maka X &lt; Y. Hasilnya beda → <b>tidak dapat ditentukan</b>.',
          'Kuadrat selalu punya <b>dua akar</b> (positif dan negatif). Ada variabel tanpa batasan → curigai "tidak dapat ditentukan".')
      },
      {
        title: 'Kasus-Kasus Pengingat (Tukar, Bagi, Desimal)',
        html: kasus('Persen Tukar Tempat',
          'X = 36% dari 250 dan Y = 250% dari 36.',
          '36% × 250 = 90 dan 250% × 36 = 90 → <b>X = Y</b>.',
          '"a% dari b" selalu sama dengan "b% dari a". Tidak perlu dihitung.') +
          kasus('Dibagi Pecahan',
            'X = 80 ÷ ' + fr(1, 2) + ' dan Y = 80 × ' + fr(1, 2) + '.',
            'Dibagi pecahan = dikali kebalikannya: X = 80 × 2 = 160, sedangkan Y = 40 → <b>X &gt; Y</b>.',
            '<b>Bagi pecahan = kali terbalik</b>, hasilnya malah membesar.') +
          kasus('Kali Desimal Mengecil',
            'X = 0,2 × 0,2 dan Y = 0,2 + 0,2.',
            'X = 0,04; Y = 0,4 → <b>X &lt; Y</b>.',
            'Mengalikan dengan bilangan antara 0 dan 1 membuat hasil <b>mengecil</b>.') +
          kasus('Kecepatan Rata-rata',
            'Mobil menempuh 180 km dalam 2 jam 30 menit. X = kecepatan rata-ratanya, Y = 75 km/jam.',
            '2 jam 30 menit = 2,5 jam → X = 180 ÷ 2,5 = 72 km/jam. 72 &lt; 75 → <b>X &lt; Y</b>.',
            'Ubah dulu "jam menit" ke desimal sebelum membagi.')
      },
      {
        title: 'Jebakan x² vs x dan Cek Nilai Uji',
        html: tbl(['Nilai x', 'x²', 'Bandingkan dengan x'], [
          ['x = 2', '4', 'x² &gt; x'],
          ['x = ' + fr(1, 2), fr(1, 4), 'x² &lt; x'],
          ['x = 1', '1', 'x² = x'],
          ['x = −2', '4', 'x² &gt; x']
        ]) + '<p>Bila x tidak dibatasi, hasil x² lawan x berubah-ubah → <b>tidak dapat ditentukan</b>. Hanya bila x &gt; 1 maka x² &gt; x; hanya bila 0 &lt; x &lt; 1 maka x² &lt; x.</p>' +
          cara('Selalu uji <b>5 nilai wajib</b>: 0, 1, pecahan (' + fr(1, 2) + '), bilangan besar, dan negatif. Jika dua di antaranya memberi jawaban berbeda, berhenti: <b>tidak dapat ditentukan</b>.')
      }
    ],
    [
      'Coret faktor sama di kedua sisi dulu, baru bandingkan.',
      'Ada variabel tanpa batasan → uji 0, 1, pecahan, negatif. Hasil beda = <b>tidak dapat ditentukan</b>.',
      'a% dari b = b% dari a. Bagi pecahan = kali terbalik. Kali desimal (&lt;1) = mengecil.'
    ]));

  /* =================================================================== 3. SOAL CERITA */
  list.push(T('tiu-soal-cerita-kasus-v25', 'Soal Cerita: Rumus + Kasus Pengingat',
    'Kerja bersama, papasan dan menyusul, usia, untung-rugi, diskon, rata-rata gabungan, campuran, senilai dan berbalik nilai — masing-masing dengan 1–2 kasus.',
    ['Numerik - Soal Cerita'], [
      {
        title: 'Kerja Bersama (Kasus Tukang Cat)',
        html: rumus('Waktu bersama = ' + fr('a × b', 'a + b')) +
          kasus('Dua Tukang Cat',
            'Pak A mengecat rumah sendirian dalam 6 jam, Pak B dalam 3 jam. Berapa jam bila bekerja bersama?',
            fr('6 × 3', '6 + 3') + ' = ' + fr(18, 9) + ' = <b>2 jam</b>.',
            'Hasil bersama <b>selalu lebih cepat</b> dari yang tercepat (B 3 jam → bersama 2 jam).') +
          kasus('Mencari Waktu Pekerja Kedua',
            'A sendirian 12 jam. Bersama B, selesai 4 jam. Berapa jam bila B sendirian?',
            fr(1, 'B') + ' = ' + fr(1, 4) + ' − ' + fr(1, 12) + ' = ' + fr(2, 12) + ' = ' + fr(1, 6) + ' → B = <b>6 jam</b>.',
            'Kerja = <b>laju</b> ' + fr(1, 'waktu') + '. Laju dijumlahkan; kebocoran/pengurang = laju dikurang.') +
          kasus('Tiga Tukang & Keran Bocor',
            '(a) A 6 jam, B 3 jam, C 2 jam. Bersama? (b) Keran mengisi bak 3 jam, lubang bocor mengosongkan 6 jam. Bak penuh dalam?',
            '(a) ' + fr(1, 6) + ' + ' + fr(1, 3) + ' + ' + fr(1, 2) + ' = ' + fr(6, 6) + ' = 1 → <b>1 jam</b>.<br>(b) ' + fr(1, 3) + ' − ' + fr(1, 6) + ' = ' + fr(1, 6) + ' → <b>6 jam</b>.')
      },
      {
        title: 'Kecepatan: Papasan, Menyusul & Rata-rata',
        html: tbl(['Situasi', 'Rumus waktu'], [
          ['Berpapasan (berlawanan arah)', fr('Jarak', 'v₁ + v₂')],
          ['Menyusul (searah)', fr('Selisih jarak awal', 'v₂ − v₁')],
          ['Kecepatan rata-rata pergi-pulang', fr('2 × v₁ × v₂', 'v₁ + v₂')]
        ]) + kasus('Dua Kota',
          'Budi dari kota A (60 km/jam) dan Sari dari kota B (80 km/jam) berangkat jam 08.00 saling berhadapan. Jarak 210 km. Kapan bertemu?',
          fr(210, '60 + 80') + ' = ' + fr(210, 140) + ' = 1,5 jam → <b>09.30</b>.',
          'Berhadapan → kecepatan <b>dijumlah</b>.') +
          kasus('Motor Disusul Mobil',
            'Motor 40 km/jam berangkat 07.00. Mobil 60 km/jam menyusul dari titik yang sama, berangkat 08.00. Kapan mobil menyusul?',
            'Jarak awal motor pada 08.00 = 40 km. Selisih kecepatan = 20 km/jam.<br>Waktu = ' + fr(40, 20) + ' = 2 jam → <b>10.00</b>.<br>Cek: motor 3 jam × 40 = 120 km, mobil 2 jam × 60 = 120 km. ✔',
            'Searah → kecepatan <b>dikurang</b>.') +
          kasus('Pergi-Pulang (Jebakan 50)',
            'Pergi 60 km/jam, pulang 40 km/jam, jarak sama. Kecepatan rata-ratanya?',
            fr('2 × 60 × 40', '60 + 40') + ' = ' + fr(4800, 100) + ' = <b>48 km/jam</b>, bukan 50.',
            'Jarak sama = <b>rata-rata harmonik</b>. Waktu di jalan lambat lebih lama, jadi rata-rata condong ke yang lambat.')
      },
      {
        title: 'Usia (Kasus Ayah dan Anak)',
        html: kasus('Selisih Umur Tidak Pernah Berubah',
          'Umur ayah 4 kali umur anak. Lima tahun lagi umur ayah 3 kali umur anak. Berapa umur ayah sekarang?',
          'Anak = B, ayah = 4B. Lima tahun lagi: 4B + 5 = 3(B + 5) → 4B + 5 = 3B + 15 → B = 10.<br>Ayah = <b>40 tahun</b>. Cek: 5 tahun lagi 45 = 3 × 15. ✔',
          'Selisih umur (30 tahun) selalu <b>tetap</b>. Gunakan selisih untuk mengecek jawaban.') +
          ul(['<b>Dua orang, "tahun lalu" jumlahnya X</b> → jumlah sekarang = X + 2 × (jumlah tahun mundur). Contoh: 5 tahun lalu jumlah umur 40 → sekarang 50.',
            'Ubah kalimat jadi persamaan dulu, jangan menebak.'])
      },
      {
        title: 'Untung-Rugi & Diskon',
        html: kasus('Persen dari Modal',
          'Barang dibeli Rp80.000 dijual Rp100.000. Persen untungnya?',
          'Untung = 20.000. ' + fr('20.000', '80.000') + ' × 100% = <b>25%</b> (bukan 20%).',
          'Untung dan rugi <b>selalu persen dari modal (harga beli)</b>.') +
          kasus('Mencari Modal',
            'Dijual Rp660.000 dengan untung 10%. Modalnya?',
            'Modal = ' + fr('100', '110') + ' × 660.000 = <b>Rp600.000</b>.',
            'Jual = Beli × (100 + %untung) ÷ 100. Mencari modal → <b>dibalik</b>.') +
          kasus('Diskon Bertingkat',
            'Diskon 20% lalu diskon 10% lagi. Total diskonnya?',
            '20 + 10 − ' + fr('20 × 10', 100) + ' = <b>28%</b>, bukan 30%.',
            'Diskon bertingkat <b>selalu lebih kecil</b> dari penjumlahan biasa.')
      },
      {
        title: 'Rata-rata Gabungan, Campuran & Senilai/Berbalik',
        html: kasus('Dua Kelas Digabung',
          '20 siswa rata-rata nilai 70. Ditambah 5 siswa rata-rata 80. Rata-rata gabungan?',
          fr('20 × 70 + 5 × 80', 25) + ' = ' + fr(1800, 25) + ' = <b>72</b>.<br>Trik geser: selisih 80 − 70 = 10, porsi kelompok baru ' + fr(5, 25) + ' = ' + fr(1, 5) + ' → bergeser 2 dari 70 = 72.',
          'Rata-rata gabungan <b>condong ke kelompok yang jumlahnya lebih banyak</b>.') +
          kasus('Larutan Campuran',
            '2 liter larutan kadar 20% dicampur 3 liter kadar 40%. Kadar akhir?',
            fr('2 × 20 + 3 × 40', 5) + ' = ' + fr(160, 5) + ' = <b>32%</b>.') +
          kasus('Senilai vs Berbalik',
            '(a) 5 buku harganya Rp40.000; 8 buku? (b) 8 orang menyelesaikan pekerjaan 12 hari; bila 12 orang?',
            '(a) senilai: 8 × 8.000 = <b>Rp64.000</b>.<br>(b) berbalik: 8 × 12 = 96 orang-hari; 96 ÷ 12 = <b>8 hari</b>.',
            'Makin banyak ↔ makin banyak = senilai. Makin banyak orang ↔ makin sedikit hari = <b>berbalik</b> (kali silang).')
      }
    ],
    [
      'Kerja bersama: ' + fr('a × b', 'a + b') + '. Mencari pekerja kedua atau ada kebocoran → jumlahkan/kurangkan <b>laju</b> (' + fr(1, 'waktu') + ').',
      'Berhadapan → kecepatan dijumlah. Searah → kecepatan dikurang. Pergi-pulang jarak sama → ' + fr('2v₁v₂', 'v₁ + v₂') + '.',
      'Untung-rugi selalu terhadap modal. Diskon bertingkat tidak boleh dijumlah begitu saja.',
      'Usia: selisih umur tetap. Rata-rata gabungan condong ke kelompok yang lebih banyak.'
    ]));

  /* =================================================================== 4. HIMPUNAN & PELUANG */
  list.push(T('tiu-himpunan-peluang-kasus-v25', 'Himpunan, Peluang & Kombinatorik + Studi Kasus',
    'Diagram Venn dua himpunan, kapan memakai permutasi atau kombinasi, dan peluang dengan kasus yang mudah diingat.',
    ['Himpunan, Peluang'], [
      {
        title: 'Diagram Venn (Kasus Suka Matematika & Fisika)',
        html: rumus('n(A ∪ B) = n(A) + n(B) − n(A ∩ B)') +
          kasus('Kelas 40 Siswa',
            'Dari 40 siswa, 25 suka matematika, 18 suka fisika, dan 5 tidak suka keduanya. Berapa yang suka keduanya?',
            'Yang suka minimal satu = 40 − 5 = 35.<br>25 + 18 − irisan = 35 → irisan = 43 − 35 = <b>8</b>.<br>Hanya matematika = 25 − 8 = 17; hanya fisika = 18 − 8 = 10. Cek: 17 + 8 + 10 + 5 = 40. ✔',
            'Selalu <b>isi bagian irisan dulu</b>, lalu bagian "hanya".') +
          cara('Total = A saja + B saja + irisan + di luar. Gambar dua lingkaran, tulis angka di tiap daerah, jumlahkan untuk mengecek.')
      },
      {
        title: 'Permutasi vs Kombinasi (Jabatan vs Panitia)',
        html: tbl(['Pertanyaan', 'Pakai', 'Rumus'], [
          ['Urutan/jabatan <b>berbeda</b> berarti beda hasil', 'Permutasi', 'nPr = ' + fr('n!', '(n−r)!')],
          ['Urutan <b>tidak penting</b> (tim, panitia)', 'Kombinasi', 'nCr = ' + fr('n!', 'r!(n−r)!')]
        ]) + kasus('Ketua-Sekretaris-Bendahara vs Panitia',
          '(a) Dari 5 orang dipilih ketua, sekretaris, dan bendahara. (b) Dari 5 orang dipilih 3 anggota panitia sama rata.',
          '(a) Jabatan beda → permutasi: 5 × 4 × 3 = <b>60</b>.<br>(b) Sama rata → kombinasi: ' + fr('5 × 4 × 3', '3 × 2 × 1') + ' = <b>10</b>.',
          '<b>Jabatan beda = Permutasi</b>. <b>Panitia sama = Kombinasi</b>. Kombinasi = permutasi dibagi r! (karena urutan dibuang).')
      },
      {
        title: 'Peluang (Dadu, Koin, Bola)',
        html: rumus('Peluang = ' + fr('kejadian yang diinginkan', 'semua kejadian')) +
          kasus('Dua Dadu Berjumlah 7',
            'Dua dadu dilempar. Peluang jumlah mata 7?',
            'Pasangan: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 dari 36 → ' + fr(6, 36) + ' = <b>' + fr(1, 6) + '</b>.',
            'Jumlah 7 adalah jumlah <b>paling mungkin</b> pada dua dadu.') +
          kasus('Paling Sedikit Satu Gambar',
            'Tiga koin dilempar. Peluang paling sedikit satu gambar?',
            'Lawannya: semua angka = ' + fr(1, 8) + '. Maka 1 − ' + fr(1, 8) + ' = <b>' + fr(7, 8) + '</b>.',
            '"Paling sedikit satu" → <b>1 dikurangi peluang tidak ada sama sekali</b>.') +
          kasus('Bola Merah dan Biru',
            'Kotak berisi 4 bola merah dan 3 bola biru. Diambil 2 bola sekaligus. Peluang 1 merah dan 1 biru?',
            'Cara memilih 1 merah dan 1 biru = 4 × 3 = 12. Semua cara ambil 2 dari 7 = ' + fr('7 × 6', '2 × 1') + ' = 21.<br>Peluang = ' + fr(12, 21) + ' = <b>' + fr(4, 7) + '</b>.') +
          kasus('Tanpa Pengembalian',
            'Kotak berisi 4 bola merah dari 10 bola. Diambil 2 bola berturut-turut tanpa dikembalikan. Peluang keduanya merah?',
            fr(4, 10) + ' × ' + fr(3, 9) + ' = ' + fr(12, 90) + ' = <b>' + fr(2, 15) + '</b>.',
            'Tanpa pengembalian → pembilang dan penyebut <b>sama-sama berkurang 1</b> pada pengambilan berikutnya.')
      }
    ],
    [
      'Venn: isi irisan dulu. Total = A saja + B saja + irisan + luar.',
      'Jabatan beda → <b>permutasi</b>. Tim/panitia → <b>kombinasi</b>.',
      '"Paling sedikit satu" → 1 − peluang tidak ada. Tanpa pengembalian → penyebut dan pembilang turun 1.'
    ]));

  /* =================================================================== 5. SILOGISME */
  list.push(T('tiu-silogisme-kasus-v25', 'Silogisme & Logika + Studi Kasus',
    'Lima kasus pengingat: rantai, jebakan "sebagian", kontraposisi, ingkaran, dan premis negatif.',
    ['Verbal - Silogisme', 'Verbal - Penalaran Logis'], [
      {
        title: 'Rantai dan Jebakan "Sebagian"',
        html: kasus('Rantai Lurus',
          'Semua PNS wajib disiplin. Semua yang disiplin dihargai atasan. Kesimpulan?',
          'Semua PNS → disiplin → dihargai atasan. <b>Semua PNS dihargai atasan.</b>',
          'Premis sama-sama "semua" dan menyambung → kesimpulan "semua" aman.') +
          kasus('Jebakan Sebagian',
            'Semua analis teliti. Sebagian orang teliti adalah lulusan statistik. Benarkah "sebagian analis lulusan statistik"?',
            '<b>Tidak pasti.</b> Orang teliti yang lulusan statistik bisa saja bukan analis (gambarkan analis sebagai lingkaran kecil di dalam lingkaran teliti; lingkaran statistik bisa memotong bagian teliti di luar analis).',
            'Premis kedua "sebagian" menyambung ke <b>kelompok besar</b> (teliti), bukan ke kelompok kecil (analis) → <b>tidak ada kesimpulan pasti</b>.')
      },
      {
        title: 'Kontraposisi, Ingkaran & Premis Negatif',
        html: kasus('Berkas Tidak Lengkap',
          'Jika berkas lengkap maka peserta lolos administrasi. Rina tidak lolos administrasi. Kesimpulan?',
          'Modus tollens (kontraposisi): tidak lolos → <b>berkas Rina tidak lengkap</b>.<br>Jebakan: "Rani lolos administrasi, berarti berkas lengkap" → <b>tidak pasti</b>.',
          '<b>Dari akibat yang tidak terjadi, boleh menarik sebab yang tidak terjadi.</b> Tetapi dari akibat yang terjadi, tidak boleh menarik sebab.') +
          kasus('Ingkaran (Negasi)',
            'Tentukan ingkaran dari (a) "Semua peserta hadir tepat waktu" dan (b) "Jika hujan maka banjir".',
            '(a) <b>Ada peserta yang tidak hadir tepat waktu.</b><br>(b) <b>Hujan tetapi tidak banjir.</b>',
            '"Semua" ↔ "ada yang tidak". "Jika p maka q" ↔ "p dan tidak q".') +
          kasus('Premis Negatif',
            'Tidak ada pegawai honorer yang berstatus PNS. Semua penerima gaji golongan III adalah PNS. Kesimpulan?',
            'Golongan III ⊂ PNS, sedangkan honorer tidak beririsan dengan PNS → <b>Tidak ada penerima gaji golongan III yang honorer.</b>',
            'Gambarkan diagram: bila satu lingkaran masuk ke dalam lingkaran "PNS", ia ikut terpisah dari honorer.')
      },
      {
        title: 'Langkah 3 Detik untuk Soal Silogisme',
        html: ul([
          '<b>1.</b> Lihat kata kuantor di premis: "semua", "sebagian", "tidak ada".',
          '<b>2.</b> Premis ada "sebagian" → kesimpulan <b>tidak boleh</b> berawalan "semua".',
          '<b>3.</b> Dua premis sama-sama "sebagian" atau sama-sama "tidak" → biasanya <b>tidak ada kesimpulan pasti</b>.',
          '<b>4.</b> Coret opsi yang memakai kata "pasti", "selalu", "semua" bila premisnya hanya "sebagian".',
          '<b>5.</b> Ragu? <b>Gambar diagram Venn</b>. Kesimpulan benar hanya bila berlaku di semua kemungkinan gambar.'
        ]) + cara('Kalimat "jika-maka": hanya <b>kontraposisi</b> (balik dan negatifkan keduanya) yang pasti benar. Invers dan konvers adalah jebakan.')
      }
    ],
    [
      'Premis ada "sebagian" → kesimpulan tidak boleh "semua".',
      'Dua premis sama-sama "sebagian" atau sama-sama "tidak" → tidak ada kesimpulan pasti.',
      '"Jika p maka q": hanya kontraposisi (tidak q → tidak p) yang pasti benar. Ingkarannya: p dan tidak q.',
      'Ragu = gambar diagram Venn.'
    ]));

  /* =================================================================== 6. DERET */
  list.push(T('tiu-deret-kasus-v25', 'Deret Angka & Huruf + Kasus dengan Nama Julukan',
    'Setiap pola deret diberi julukan supaya mudah diingat: Tangga, Berlipat, Kotak, Loncat-loncat, Kelinci.',
    ['Numerik - Deret Angka', 'Numerik - Deret Huruf'], [
      {
        title: 'Urutan Cek 10 Detik',
        html: ul([
          '<b>1. Selisih tetap?</b> (+4, +4, +4) → julukan <b>Tangga</b>.',
          '<b>2. Rasio tetap?</b> (×3, ×3) → <b>Berlipat</b>.',
          '<b>3. Selisihnya ikut naik?</b> (+1, +2, +3, …) → <b>Tangga Bertingkat</b>.',
          '<b>4. Angka ganjil/genap berjalan sendiri-sendiri?</b> → <b>Loncat-loncat</b>.',
          '<b>5. Angka bulat sempurna (1, 4, 9) atau jumlah dua suku sebelumnya?</b> → <b>Kotak</b> dan <b>Kelinci</b>.'
        ]) + cara('Bila lima pengecekan gagal, tulis selisih tingkat dua (selisih dari selisih). Hampir semua soal CPNS selesai pada langkah ini.')
      },
      {
        title: 'Kasus Pola Satu per Satu',
        html: tbl(['Julukan', 'Deret', 'Cara & jawaban'], [
          ['Tangga', '3, 7, 11, 15, ?', 'selisih +4 → <b>19</b>'],
          ['Berlipat', '2, 6, 18, 54, ?', 'kali 3 → <b>162</b>'],
          ['Tangga Bertingkat', '2, 3, 5, 8, 12, ?', 'selisih 1, 2, 3, 4 → selisih berikutnya 5 → <b>17</b>'],
          ['Kotak', '1, 4, 9, 16, 25, ?', 'kuadrat 1², 2², … → <b>36</b>'],
          ['Kotak + 1', '2, 5, 10, 17, 26, ?', 'n² + 1 → 6² + 1 = <b>37</b>'],
          ['Kotak + 2', '3, 6, 11, 18, 27, ?', 'n² + 2 → 6² + 2 = <b>38</b>'],
          ['Kotak berurutan', '2, 6, 12, 20, 30, ?', 'n(n+1) → 6 × 7 = <b>42</b>'],
          ['Kelinci (Fibonacci)', '1, 1, 2, 3, 5, 8, ?', 'jumlah dua suku sebelumnya → <b>13</b>'],
          ['Loncat-loncat', '5, 10, 8, 16, 14, 28, ?', '×2 lalu −2 bergantian → <b>26</b>'],
          ['Ganjil-genap terpisah', '2, 5, 4, 8, 6, 11, ?', 'posisi ganjil: 2, 4, 6, (8) ; posisi genap: 5, 8, 11 → <b>8</b>'],
          ['Pecahan berurutan', fr(1, 2) + ', ' + fr(2, 3) + ', ' + fr(3, 4) + ', ' + fr(4, 5) + ', ?', 'pembilang naik 1, penyebut naik 1 → <b>' + fr(5, 6) + '</b>']
        ]) + kasus('Kasus Antrean Loket',
          'Nomor antrean yang dipanggil: 2, 5, 4, 8, 6, 11, … Nomor berikutnya?',
          'Dua loket memanggil bergantian. Loket 1: 2, 4, 6, (8). Loket 2: 5, 8, 11. Nomor ke-7 giliran loket 1 → <b>8</b>.',
          'Deret naik-turun tidak teratur → <b>pisahkan posisi ganjil dan genap</b>.')
      },
      {
        title: 'Deret Huruf (A=1 … Z=26)',
        html: tbl(['Deret', 'Cara', 'Jawaban'], [
          ['A, C, E, G, ?', 'loncat 1 huruf (+2)', '<b>I</b>'],
          ['B, D, G, K, ?', 'angka: 2, 4, 7, 11 → selisih +2, +3, +4 → berikutnya +5 → 16', '<b>P</b>'],
          ['Z, X, V, T, ?', 'mundur 2 huruf', '<b>R</b>']
        ]) + cara('Tulis dulu urutan alfabet <b>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</b> di kertas coretan, beri nomor 1–26. Setelah Z kembali ke A.')
      }
    ],
    [
      'Cek berurutan: selisih tetap → rasio → selisih bertingkat → ganjil/genap terpisah → kuadrat/Fibonacci.',
      'Naik-turun tidak teratur → pisahkan posisi ganjil dan genap.',
      'Deret huruf: ubah ke angka (A=1 … Z=26), cari polanya, ubah kembali.'
    ]));

  /* =================================================================== 7. ANALOGI & PADANAN */
  list.push(T('tiu-analogi-padanan-kasus-v25', 'Analogi & Padanan Kata + Kasus Kalimat Jembatan',
    'Cara membuat kalimat jembatan yang spesifik, 3 kasus jebakan, dan daftar sinonim-antonim yang sering keluar.',
    ['Verbal - Analogi', 'Verbal - Padanan Kata'], [
      {
        title: 'Kalimat Jembatan (Tiga Kasus)',
        html: rumus('A + kalimat jembatan = B &nbsp;→&nbsp; C + kalimat yang sama = D') +
          kasus('Alat dan Fungsi',
            'palu : memukul = pisau : ?',
            'Jembatan: "<b>alat</b> yang dipakai untuk <b>pekerjaan</b>". Pisau dipakai untuk <b>memotong</b>.',
            'Kalimat jembatan harus <b>sama persis</b> untuk pasangan kedua.') +
          kasus('Profesi dan Tempat',
            'dokter : rumah sakit = guru : ?',
            'Jembatan: "<b>orang</b> yang bekerja di <b>tempat</b>". Guru bekerja di <b>sekolah</b>.') +
          kasus('Jebakan Pilihan yang Ikut Berhubungan',
            'kayu : meja = besi : ? Pilihan: (a) tukang, (b) jembatan, (c) tambang.',
            'Jembatan: "<b>bahan</b> yang diolah menjadi <b>hasil</b>". Kayu menjadi meja, besi menjadi <b>jembatan</b>.<br>Tukang dan tambang memang berhubungan dengan besi, tetapi hubungannya <b>bukan bahan → hasil</b>.',
            'Semua pilihan terasa "nyambung" dengan kata ketiga. Yang benar hanya yang <b>memakai kalimat jembatan yang sama</b>.')
      },
      {
        title: 'Jenis Hubungan yang Paling Sering Keluar',
        html: tbl(['Hubungan', 'Contoh'], [
          ['Alat – fungsi', 'palu : memukul'],
          ['Profesi – tempat', 'dokter : rumah sakit'],
          ['Sebab – akibat', 'hujan : banjir'],
          ['Bahan – hasil', 'kayu : meja'],
          ['Tingkatan (intensitas)', 'gerimis : hujan; hangat : panas'],
          ['Sinonim / antonim', 'cepat : lambat (lawan)']
        ]) + cara('Catat hubungan dulu, <b>jangan langsung melihat pilihan</b>. Pilihan sengaja dibuat mirip supaya kamu tergoda.')
      },
      {
        title: 'Padanan Kata (Sinonim) & Lawan Kata (Antonim)',
        html: tbl(['Kata', 'Sinonim', 'Antonim'], [
          ['efektif', 'berdaya guna, tepat sasaran', 'tidak berdaya guna'],
          ['gigih', 'tekun, ulet', 'mudah menyerah'],
          ['mutakhir', 'terbaru, modern', 'usang, kuno'],
          ['esensial', 'pokok, mendasar', 'tidak penting'],
          ['implementasi', 'penerapan, pelaksanaan', '—'],
          ['eksplisit', 'tersurat, jelas', 'implisit (tersirat)'],
          ['optimis', 'penuh harap', 'pesimis'],
          ['hemat', 'irit, cermat', 'boros']
        ]) + note('Padanan kata: perhatikan <b>konotasi</b> (positif/negatif/netral). Bila ragu, coba pasang kata itu ke dalam kalimat dan pilih yang maknanya paling tidak berubah.')
      }
    ],
    [
      'Buat kalimat jembatan <b>sebelum</b> melihat pilihan, lalu uji ke pasangan kedua.',
      'Dua opsi cocok → perketat kalimat jembatan (lebih spesifik).',
      'Padanan kata: cocokkan <b>konotasi</b> (positif/negatif), bukan hanya arti umum.'
    ]));

  /* =================================================================== 8. FIGURAL */
  list.push(T('tiu-figural-kasus-v25', 'Figural: Checklist Cepat + Kasus Dadu & Putar',
    'Daftar periksa 5 hal untuk soal gambar, kasus dadu, jaring-jaring kubus, dan rotasi.',
    ['Figural'], [
      {
        title: 'Checklist 5 Hal untuk Soal Gambar',
        html: tbl(['Periksa', 'Pertanyaan ke diri sendiri'], [
          ['1. Posisi / arah', 'Apakah bergeser atau berputar? Berapa derajat, searah atau berlawanan jarum jam?'],
          ['2. Jumlah', 'Apakah jumlah garis, titik, atau bidang bertambah teratur?'],
          ['3. Warna isi', 'Hitam-putih bergantian? Berpindah posisi?'],
          ['4. Bentuk', 'Berubah sisi (segitiga → segiempat → segilima)?'],
          ['5. Kelompok', 'Apakah pola berulang tiap 2 atau 3 gambar?']
        ]) + cara('Periksa <b>satu sifat saja</b> pada tiap putaran (mis. hanya arah), lalu coret opsi yang tidak cocok. Mengeliminasi 3 dari 5 opsi sudah cukup untuk menebak dengan aman.')
      },
      {
        title: 'Kasus Dadu & Jaring-Jaring Kubus',
        html: kasus('Dadu Berhadapan',
          'Pada dadu normal, sisi atas 6. Berapa angka sisi bawah?',
          'Jumlah dua sisi berhadapan selalu <b>7</b>: 1↔6, 2↔5, 3↔4. Sisi bawah = 7 − 6 = <b>1</b>.',
          '<b>Berhadapan = jumlah 7</b>.') +
          kasus('Jaring-Jaring Kubus',
            'Pada jaring-jaring kubus berbentuk salib, dua persegi yang dipisahkan <b>tepat satu persegi</b> dalam satu baris atau kolom lurus bagaimana letaknya saat dilipat?',
            'Keduanya menjadi <b>sisi berhadapan</b> pada kubus.',
            'Dipisah satu kotak lurus → <b>berhadapan</b>. Bersebelahan langsung → bersebelahan di kubus.') +
          kasus('Rotasi Berulang',
            'Sebuah gambar diputar 90° searah jarum jam tiap langkah. Setelah 4 langkah?',
            '4 × 90° = 360° → <b>kembali ke posisi awal</b>. Setelah 6 langkah = 6 × 90° = 540° = 360° + 180° → <b>terbalik 180°</b>.',
            'Putaran berulang: bagi sisanya dengan 360°. Hanya sisa yang dihitung.')
      }
    ],
    [
      'Periksa satu sifat (arah, jumlah, warna, bentuk, kelompok) per putaran, coret opsi yang tidak cocok.',
      'Dadu: sisi berhadapan berjumlah 7. Jaring-jaring: dipisah satu kotak lurus → berhadapan.',
      'Rotasi berulang: hitung sisa dari 360°.'
    ]));

  /* ---------- pasang di urutan paling depan grup TIU ---------- */
  var at = -1;
  for (var i = 0; i < M.length; i++) { if (M[i].group === 'TIU') { at = i; break; } }
  if (at < 0) at = M.length;
  M.splice.apply(M, [at, 0].concat(list));
})();
