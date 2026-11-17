/* Studi kasus lengkap TIU (v27) — dimuat SETELAH js/materi_tiu_v25.js, SEBELUM app.js.
   Menambah langkah-langkah baru di akhir topik TIU v25. Format tiap kasus:
   SOAL -> kata kunci pengenal -> rumus -> Langkah 1..n -> JAWABAN -> cek cepat -> ingat.
   Semua angka sudah dihitung ulang dengan kode. Pecahan memakai tampilan bertingkat. */
(function () {
  var M = window.MATERI || [];
  if (!M.length || M.some(function (m) { return m.id === 'tiu-pecahan-persen-kasus-v25' && m.studi27; })) return;

  var fr = function (n, d) { return '<span class="frac"><span class="fn">' + n + '</span><span class="fd">' + d + '</span></span>'; };
  var tbl = function (head, rows) {
    return '<table class="table table-sm"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' + rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
  var studi = function (no, judul, o) {
    return '<div class="studi">' +
      '<div class="studi-h">📘 STUDI KASUS ' + no + ' — ' + judul + '</div>' +
      '<div class="studi-soal"><b>SOAL:</b> ' + o.soal + '</div>' +
      (o.kenali ? '<div class="studi-kunci">🔎 <b>Kenali dari kata kunci:</b> ' + o.kenali + '</div>' : '') +
      (o.rumus ? '<div class="studi-rumus">📐 <b>Rumus / ide yang dipakai:</b> ' + o.rumus + '</div>' : '') +
      '<ol class="studi-langkah">' + o.langkah.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' +
      '<div class="studi-jawab">✅ <b>JAWABAN:</b> ' + o.jawab + '</div>' +
      (o.cek ? '<div class="studi-cek">🔁 <b>Cek cepat:</b> ' + o.cek + '</div>' : '') +
      (o.ingat ? '<div class="ingat">🧠 <b>Ingat:</b> ' + o.ingat + '</div>' : '') + '</div>';
  };
  var intro = '<p class="studi-intro">Ikuti langkahnya satu per satu. Setelah paham, <b>tutup dan kerjakan ulang tanpa melihat</b>. Itu cara tercepat supaya rumusnya melekat.</p>';
  var addSec = function (id, secs) {
    for (var i = 0; i < M.length; i++) { if (M[i].id === id) { M[i].sections = M[i].sections.concat(secs); M[i].studi27 = true; return; } }
  };

  /* ============================================================ 1. PECAHAN, PERSEN */
  addSec('tiu-pecahan-persen-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Pecahan, Perbandingan & Persen',
      html: intro +
        studi(1, 'Pecahan dari suatu bilangan', {
          soal: 'Berapa ' + fr(5, 8) + ' dari 480?',
          kenali: 'Kata <b>"dari"</b> di antara pecahan dan bilangan berarti <b>dikali</b>.',
          rumus: 'Pecahan dari bilangan = (bilangan ÷ penyebut) × pembilang.',
          langkah: [
            'Bagi bilangan dengan <b>penyebut</b> untuk mendapat satu bagian: 480 ÷ 8 = <b>60</b>.',
            'Kalikan dengan <b>pembilang</b>: 60 × 5 = <b>300</b>.',
            'Cara lain (lewat persen): ' + fr(5, 8) + ' = 62,5%, maka 0,625 × 480 = 300. Hasilnya sama.'
          ],
          jawab: '<b>300</b>',
          cek: fr(5, 8) + ' sedikit lebih dari ' + fr(1, 2) + ', dan setengah dari 480 adalah 240. Jawaban 300 lebih dari 240 tetapi kurang dari 480. Masuk akal.',
          ingat: '<b>Bagi penyebut dulu, baru kali pembilang.</b> Angkanya jadi kecil dan tidak perlu kalkulator.'
        }) +
        studi(2, 'Mana yang lebih besar? (kali silang)', {
          soal: 'Manakah yang lebih besar: ' + fr(7, 9) + ' atau ' + fr(11, 14) + '?',
          kenali: 'Dua pecahan biasa dengan penyebut berbeda dan nilainya hampir sama.',
          rumus: 'Untuk ' + fr('a', 'b') + ' lawan ' + fr('c', 'd') + ': hitung <b>a × d</b> dan <b>c × b</b>. Pecahan yang pembilangnya ikut membentuk hasil kali yang lebih besar adalah pecahan yang lebih besar.',
          langkah: [
            'Pecahan kiri: a = 7, b = 9. Pecahan kanan: c = 11, d = 14.',
            'Kali silang dari pembilang kiri ke penyebut kanan: <b>7 × 14 = 98</b>.',
            'Kali silang dari pembilang kanan ke penyebut kiri: <b>11 × 9 = 99</b>.',
            '99 lebih besar dari 98, dan 99 dibentuk oleh pembilang <b>kanan</b> (11). Maka pecahan kanan yang lebih besar.'
          ],
          jawab: fr(11, 14) + ' lebih besar dari ' + fr(7, 9),
          cek: 'Desimal: ' + fr(7, 9) + ' ≈ 0,7778 dan ' + fr(11, 14) + ' ≈ 0,7857. Benar.',
          ingat: '<b>Kali silang, hasil kali yang lebih besar menang.</b> Selisih 98 dan 99 sangat kecil, jadi kedua pecahan memang hampir sama.'
        }) +
        studi(3, 'Persen kenaikan dan penurunan (dasar persen)', {
          soal: 'Harga beras naik dari Rp12.000 menjadi Rp15.000 per kg. (a) Berapa persen kenaikannya? (b) Bila harga kembali turun dari Rp15.000 ke Rp12.000, berapa persen penurunannya?',
          kenali: 'Kata "naik/turun ... persen" berarti <b>persen perubahan</b>.',
          rumus: 'Persen perubahan = ' + fr('selisih', 'nilai AWAL') + ' × 100%.',
          langkah: [
            '(a) Selisih = 15.000 − 12.000 = 3.000. Nilai <b>awal</b> = 12.000.',
            '(a) ' + fr('3.000', '12.000') + ' = ' + fr(1, 4) + ' = <b>25%</b>.',
            '(b) Selisih tetap 3.000, tetapi nilai <b>awal</b> sekarang 15.000.',
            '(b) ' + fr('3.000', '15.000') + ' = ' + fr(1, 5) + ' = <b>20%</b>.'
          ],
          jawab: '(a) naik <b>25%</b>; (b) turun <b>20%</b> (bukan 25%)',
          cek: fr(1, 4) + ' = 25% dan ' + fr(1, 5) + ' = 20% ada di tabel hafalan.',
          ingat: '<b>Persen selalu dihitung terhadap nilai AWAL.</b> Naik 25% tidak sama dengan turun 25% untuk kembali.'
        }) +
        studi(4, 'Naik lalu turun (kali faktor)', {
          soal: 'Harga barang Rp200.000 naik 20%, kemudian didiskon 20% dari harga yang baru. Berapa harga akhirnya, dan berapa persen perubahannya dari harga awal?',
          kenali: 'Dua perubahan berturut-turut; yang kedua dihitung dari harga <b>baru</b>.',
          rumus: 'Naik a% = kali (1 + a/100). Turun a% = kali (1 − a/100). Kalikan berurutan.',
          langkah: [
            'Naik 20% → 200.000 × 1,2 = <b>240.000</b>.',
            'Diskon 20% dari 240.000 → 240.000 × 0,8 = <b>192.000</b>.',
            'Bandingkan dengan awal: 200.000 − 192.000 = 8.000 → ' + fr('8.000', '200.000') + ' = 4%.'
          ],
          jawab: 'Harga akhir <b>Rp192.000</b>, yaitu <b>turun 4%</b> dari harga awal',
          cek: 'Pakai faktor saja: 1,2 × 0,8 = 0,96 → 96% dari harga awal → turun 4%. Cocok.',
          ingat: '<b>Naik 20% lalu turun 20% tidak kembali ke awal.</b> Hasilnya selalu lebih rendah.'
        })
    },
    {
      title: 'Studi Kasus Lengkap: Jumlah Pecahan & Deret Teleskopik',
      html: intro +
        studi(5, 'Pecahan beda penyebut (KPK)', {
          soal: 'Hitung ' + fr(2, 3) + ' + ' + fr(3, 4) + ' − ' + fr(1, 6) + '.',
          kenali: 'Penjumlahan dan pengurangan pecahan dengan penyebut berbeda.',
          rumus: 'Samakan penyebut dengan <b>KPK</b>, lalu jumlahkan atau kurangkan pembilangnya saja.',
          langkah: [
            'KPK dari 3, 4, dan 6 adalah <b>12</b>.',
            'Ubah: ' + fr(2, 3) + ' = ' + fr(8, 12) + ' (kali 4); ' + fr(3, 4) + ' = ' + fr(9, 12) + ' (kali 3); ' + fr(1, 6) + ' = ' + fr(2, 12) + ' (kali 2).',
            'Hitung pembilangnya: 8 + 9 − 2 = <b>15</b>, jadi hasilnya ' + fr(15, 12) + '.',
            'Sederhanakan dengan membagi 3: ' + fr(15, 12) + ' = <b>' + fr(5, 4) + '</b>.'
          ],
          jawab: fr(5, 4) + ' (atau 1,25)',
          cek: 'Desimal: 0,667 + 0,75 − 0,167 = 1,25. Cocok.',
          ingat: 'Samakan penyebut dulu, baru atur pembilang. <b>Penyebut tidak pernah dijumlahkan.</b>'
        }) +
        studi(6, 'Bagi pecahan = kali kebalikan', {
          soal: 'Hitung ' + fr(3, 4) + ' ÷ ' + fr(9, 16) + '.',
          kenali: 'Tanda ÷ di antara dua pecahan.',
          rumus: fr('a', 'b') + ' ÷ ' + fr('c', 'd') + ' = ' + fr('a', 'b') + ' × ' + fr('d', 'c') + ' (pecahan kedua dibalik).',
          langkah: [
            'Balik pecahan kedua: ' + fr(9, 16) + ' menjadi ' + fr(16, 9) + '.',
            'Ubah tanda ÷ menjadi ×: ' + fr(3, 4) + ' × ' + fr(16, 9) + '.',
            'Coret silang: 16 dan 4 sama-sama dibagi 4 (jadi 4 dan 1); 3 dan 9 sama-sama dibagi 3 (jadi 1 dan 3).',
            'Sisa: ' + fr(1, 1) + ' × ' + fr(4, 3) + ' = ' + fr(4, 3) + '.'
          ],
          jawab: fr(4, 3) + ' (atau 1⅓)',
          cek: 'Desimal: 0,75 ÷ 0,5625 = 1,333… Cocok.',
          ingat: 'Bagi pecahan = <b>balik yang kedua, lalu kali</b>. Hasilnya membesar bila pembaginya kurang dari 1.'
        }) +
        studi(7, 'Deret teleskopik penuh', {
          soal: 'Hitung ' + fr(1, '1×2') + ' + ' + fr(1, '2×3') + ' + ' + fr(1, '3×4') + ' + … + ' + fr(1, '9×10') + '.',
          kenali: 'Setiap penyebut adalah <b>hasil kali dua bilangan berurutan</b> (1×2, 2×3, 3×4, …).',
          rumus: fr(1, 'n(n+1)') + ' = ' + fr(1, 'n') + ' − ' + fr(1, 'n+1') + '. Karena sebagian suku saling menghapus, jumlah n suku pertama = ' + fr('n', 'n+1') + '.',
          langkah: [
            'Pecah tiga suku pertama: ' + fr(1, '1×2') + ' = ' + fr(1, 1) + ' − ' + fr(1, 2) + '; ' + fr(1, '2×3') + ' = ' + fr(1, 2) + ' − ' + fr(1, 3) + '; ' + fr(1, '3×4') + ' = ' + fr(1, 3) + ' − ' + fr(1, 4) + '.',
            'Jumlahkan: 1 − ' + fr(1, 2) + ' + ' + fr(1, 2) + ' − ' + fr(1, 3) + ' + ' + fr(1, 3) + ' − ' + fr(1, 4) + ' … Setiap pecahan di tengah <b>saling menghapus</b>.',
            'Yang tersisa hanya angka paling depan dan paling belakang. Suku terakhir ' + fr(1, '9×10') + ' = ' + fr(1, 9) + ' − ' + fr(1, 10) + ', sehingga tersisa 1 − ' + fr(1, 10) + '.',
            '1 − ' + fr(1, 10) + ' = ' + fr(9, 10) + '.'
          ],
          jawab: '<b>' + fr(9, 10) + '</b> (rumus pintas ' + fr('n', 'n+1') + ' dengan n = 9)',
          cek: 'Dua suku pertama saja: ' + fr(1, 2) + ' + ' + fr(1, 6) + ' = ' + fr(2, 3) + ', sama dengan rumus ' + fr('n', 'n+1') + ' untuk n = 2.',
          ingat: 'Penyebut dua bilangan berurutan → <b>langsung tulis "n per n+1"</b>.'
        }) +
        studi(8, 'Deret teleskopik yang tidak mulai dari 1', {
          soal: 'Hitung ' + fr(1, '2×3') + ' + ' + fr(1, '3×4') + ' + … + ' + fr(1, '9×10') + '.',
          kenali: 'Mirip kasus 7, tetapi <b>suku pertamanya 2×3</b>, bukan 1×2.',
          rumus: 'Hasil = ' + fr(1, 'angka pertama') + ' − ' + fr(1, 'angka terakhir + 1') + '.',
          langkah: [
            'Pecah: ' + fr(1, '2×3') + ' = ' + fr(1, 2) + ' − ' + fr(1, 3) + ', dan seterusnya sampai ' + fr(1, '9×10') + ' = ' + fr(1, 9) + ' − ' + fr(1, 10) + '.',
            'Yang bertahan hanya ' + fr(1, 2) + ' (paling depan) dan ' + fr(1, 10) + ' (paling belakang).',
            fr(1, 2) + ' − ' + fr(1, 10) + ' = ' + fr(5, 10) + ' − ' + fr(1, 10) + ' = ' + fr(4, 10) + ' = <b>' + fr(2, 5) + '</b>.'
          ],
          jawab: '<b>' + fr(2, 5) + '</b>',
          cek: 'Jumlah penuh dari kasus 7 adalah ' + fr(9, 10) + '. Kurangi suku pertama yang dibuang (' + fr(1, '1×2') + ' = ' + fr(1, 2) + '): ' + fr(9, 10) + ' − ' + fr(5, 10) + ' = ' + fr(4, 10) + '. Cocok.',
          ingat: 'Mulai dari angka berapa pun caranya sama: <b>ambil yang paling depan dan paling belakang saja</b>.'
        })
    }
  ]);

  /* ============================================================ 2. PERBANDINGAN KUANTITATIF */
  addSec('tiu-perbandingan-kuantitatif-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Menentukan X vs Y',
      html: intro +
        studi(1, 'Persen tukar tempat', {
          soal: 'X = 45% dari 80 dan Y = 80% dari 45. Manakah hubungan yang benar?',
          kenali: 'Angka yang sama muncul di kedua sisi, hanya <b>posisi persen dan bilangannya bertukar</b>.',
          rumus: 'a% dari b = b% dari a (keduanya sama dengan ' + fr('a × b', 100) + ').',
          langkah: [
            'Hitung X: 0,45 × 80 = <b>36</b>.',
            'Hitung Y: 0,80 × 45 = <b>36</b>.',
            'Keduanya sama.'
          ],
          jawab: '<b>X = Y</b>',
          cek: 'Rumus pintas: ' + fr('45 × 80', 100) + ' = ' + fr(3600, 100) + ' = 36 di kedua sisi.',
          ingat: 'Persen tertukar → <b>langsung X = Y</b> tanpa menghitung.'
        }) +
        studi(2, 'Pecahan hampir 1 (lihat sisanya)', {
          soal: 'X = ' + fr(7, 8) + ' dan Y = ' + fr(8, 9) + '. Manakah yang benar?',
          kenali: 'Dua pecahan yang <b>pembilang dan penyebutnya selisih 1</b> (hampir 1).',
          rumus: 'Pecahan = 1 − sisa. <b>Sisa kecil berarti nilai besar.</b>',
          langkah: [
            'Sisa X terhadap 1: 1 − ' + fr(7, 8) + ' = ' + fr(1, 8) + '.',
            'Sisa Y terhadap 1: 1 − ' + fr(8, 9) + ' = ' + fr(1, 9) + '.',
            'Pembilang sama (1), penyebut 9 lebih besar dari 8, jadi ' + fr(1, 9) + ' lebih kecil dari ' + fr(1, 8) + '.',
            'Sisa Y lebih kecil, maka Y lebih dekat ke 1, artinya Y lebih besar.'
          ],
          jawab: '<b>X &lt; Y</b>',
          cek: 'Desimal: ' + fr(7, 8) + ' = 0,875 dan ' + fr(8, 9) + ' ≈ 0,889. Benar.',
          ingat: 'Pola "n per n+1": <b>makin besar angkanya, makin dekat ke 1, makin besar nilainya</b>.'
        }) +
        studi(3, 'Variabel yang bisa bermacam nilai', {
          soal: 'Diketahui p + q = 10. X = p dan Y = q. Manakah yang benar?',
          kenali: 'Ada <b>variabel</b> dan syaratnya tidak menyebut nilai pasti.',
          rumus: 'Uji beberapa nilai yang memenuhi syarat. Bila hasil perbandingan berbeda-beda → <b>tidak dapat ditentukan</b>.',
          langkah: [
            'Coba p = 3, q = 7 → X = 3, Y = 7 → <b>X &lt; Y</b>.',
            'Coba p = 7, q = 3 → X = 7, Y = 3 → <b>X &gt; Y</b>.',
            'Dua uji memberi hasil berbeda, jadi tidak perlu mencoba lagi.'
          ],
          jawab: '<b>Hubungan tidak dapat ditentukan</b>',
          cek: 'Hanya satu syarat (jumlahnya 10) tidak cukup untuk mengunci siapa yang lebih besar.',
          ingat: 'Dua uji beda hasil = <b>berhenti, jawab "tidak dapat ditentukan"</b>.'
        }) +
        studi(4, 'Syarat x positif atau tidak', {
          soal: 'X = ' + fr('x', 2) + ' dan Y = ' + fr('x', 3) + '. (a) Jika x &gt; 0. (b) Jika x bilangan sembarang.',
          kenali: 'Dua pecahan dengan pembilang sama. Hasil bergantung pada <b>tanda x</b>.',
          rumus: 'Pembilang sama dan positif → penyebut lebih kecil = nilai lebih besar. Bila x negatif, urutannya terbalik.',
          langkah: [
            '(a) x &gt; 0, uji x = 6: X = 3, Y = 2 → X &gt; Y. Uji x = 12: X = 6, Y = 4 → X &gt; Y. Selalu X &gt; Y.',
            '(b) x sembarang, uji x = 6: X = 3, Y = 2 → X &gt; Y.',
            '(b) Uji x = −6: X = −3, Y = −2 → X &lt; Y (−3 lebih kecil dari −2).',
            '(b) Dua uji berbeda hasil.'
          ],
          jawab: '(a) <b>X &gt; Y</b>; (b) <b>tidak dapat ditentukan</b>',
          cek: 'Kata "x &gt; 0" pada (a) mengunci tanda x sehingga jawabannya pasti.',
          ingat: 'Selalu <b>cari syarat tanda</b> (positif/negatif/bulat). Syarat itulah yang mengubah "tidak dapat ditentukan" menjadi pasti.'
        }) +
        studi(5, 'Pangkat dengan angka tertukar', {
          soal: 'X = 2⁵ dan Y = 5². Manakah yang benar? Coba juga X = 3⁴ dan Y = 4³.',
          kenali: 'Dua bilangan sama, tetapi <b>pangkat dan dasarnya bertukar</b>.',
          rumus: 'Hitung nilainya. Jangan mengira "yang pangkatnya lebih besar pasti lebih besar" tanpa menghitung.',
          langkah: [
            '2⁵ = 2 × 2 × 2 × 2 × 2 = <b>32</b>; 5² = 5 × 5 = <b>25</b>. Jadi 32 &gt; 25.',
            '3⁴ = 3 × 3 × 3 × 3 = <b>81</b>; 4³ = 4 × 4 × 4 = <b>64</b>. Jadi 81 &gt; 64.'
          ],
          jawab: 'Pertama <b>X &gt; Y</b>; kedua juga <b>X &gt; Y</b>',
          cek: 'Tidak ada aturan umum. Buktinya 2⁴ = 16 dan 4² = 16 ternyata <b>sama</b>. Karena itu pangkat tertukar harus selalu dihitung.',
          ingat: 'Pangkat tertukar: <b>hitung dua-duanya</b>, jangan menebak dari bentuknya.'
        })
    }
  ]);

  /* ============================================================ 3. SOAL CERITA */
  addSec('tiu-soal-cerita-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Kerja Bersama (Kenapa Rumusnya Begitu)',
      html: intro +
        studi(1, 'Dua orang bekerja bersama + asal rumusnya', {
          soal: 'Pak A dapat mengecat rumah sendirian dalam 6 jam. Pak B dalam 3 jam. Berapa jam bila keduanya bekerja bersama?',
          kenali: '"Sendirian dalam ... jam" dan "bersama" → soal <b>kerja bersama</b>.',
          rumus: 'Laju kerja = ' + fr(1, 'waktu') + ' pekerjaan per jam. Laju bersama = jumlah laju masing-masing. Waktu bersama = ' + fr(1, 'laju bersama') + '.',
          langkah: [
            'Laju Pak A = ' + fr(1, 6) + ' rumah per jam (6 jam selesai 1 rumah).',
            'Laju Pak B = ' + fr(1, 3) + ' rumah per jam.',
            'Laju bersama = ' + fr(1, 6) + ' + ' + fr(1, 3) + ' = ' + fr(1, 6) + ' + ' + fr(2, 6) + ' = ' + fr(3, 6) + ' = ' + fr(1, 2) + ' rumah per jam.',
            'Waktu = 1 rumah ÷ ' + fr(1, 2) + ' = <b>2 jam</b>.',
            'Rumus pintas yang sama hasilnya: ' + fr('a × b', 'a + b') + ' = ' + fr('6 × 3', '6 + 3') + ' = ' + fr(18, 9) + ' = 2.'
          ],
          jawab: '<b>2 jam</b>',
          cek: 'Bersama harus lebih cepat dari yang tercepat. Pak B saja 3 jam; bersama 2 jam. Masuk akal.',
          ingat: 'Rumus ' + fr('a × b', 'a + b') + ' hanya <b>jalan pintas dari menjumlahkan laju</b>. Bila lupa rumus, jumlahkan laju.'
        }) +
        studi(2, 'Satu pekerja pergi di tengah jalan', {
          soal: 'A sendirian menyelesaikan pekerjaan dalam 10 jam, B dalam 15 jam. Mereka bekerja bersama 4 jam, lalu A pergi dan sisanya dikerjakan B sendiri. Berapa jam B melanjutkan?',
          kenali: 'Pekerjaan berlangsung dalam <b>dua tahap</b> (bersama, lalu sendiri).',
          rumus: 'Pekerjaan selesai = laju × waktu. Seluruh pekerjaan dianggap 1.',
          langkah: [
            'Laju bersama = ' + fr(1, 10) + ' + ' + fr(1, 15) + ' = ' + fr(3, 30) + ' + ' + fr(2, 30) + ' = ' + fr(5, 30) + ' = ' + fr(1, 6) + ' per jam.',
            'Dalam 4 jam bersama: 4 × ' + fr(1, 6) + ' = ' + fr(4, 6) + ' = ' + fr(2, 3) + ' pekerjaan.',
            'Sisa pekerjaan = 1 − ' + fr(2, 3) + ' = ' + fr(1, 3) + '.',
            'Laju B sendiri = ' + fr(1, 15) + ' per jam. Waktu = ' + fr(1, 3) + ' ÷ ' + fr(1, 15) + ' = ' + fr(1, 3) + ' × 15 = <b>5 jam</b>.'
          ],
          jawab: '<b>5 jam</b>',
          cek: 'Total waktu B bekerja = 4 + 5 = 9 jam. Pekerjaan B = 9 × ' + fr(1, 15) + ' = ' + fr(9, 15) + ' = ' + fr(3, 5) + '. Pekerjaan A = 4 × ' + fr(1, 10) + ' = ' + fr(2, 5) + '. Jumlah ' + fr(3, 5) + ' + ' + fr(2, 5) + ' = 1. Benar.',
          ingat: 'Soal bertahap: <b>hitung selesai berapa dulu, lalu cari sisanya</b>.'
        }) +
        studi(3, 'Pipa isi dan pipa kuras', {
          soal: 'Kolam diisi pipa A dalam 4 jam dan pipa B dalam 12 jam. Pipa C menguras kolam penuh dalam 6 jam. Bila ketiganya dibuka bersamaan, berapa jam kolam penuh?',
          kenali: 'Ada pipa yang <b>mengisi</b> dan ada yang <b>membuang</b>.',
          rumus: 'Pengisi = laju positif. Pengurang (kuras/bocor) = laju negatif.',
          langkah: [
            'Laju total = ' + fr(1, 4) + ' + ' + fr(1, 12) + ' − ' + fr(1, 6) + '.',
            'Samakan penyebut 12: ' + fr(3, 12) + ' + ' + fr(1, 12) + ' − ' + fr(2, 12) + ' = ' + fr(2, 12) + ' = ' + fr(1, 6) + ' kolam per jam.',
            'Waktu = 1 ÷ ' + fr(1, 6) + ' = <b>6 jam</b>.'
          ],
          jawab: '<b>6 jam</b>',
          cek: 'Bila tanpa pipa C, laju ' + fr(4, 12) + ' = ' + fr(1, 3) + ' (3 jam). Dengan kuras jadi lebih lambat (6 jam). Masuk akal.',
          ingat: 'Pengisi <b>ditambah</b>, pembuang <b>dikurang</b>.'
        })
    },
    {
      title: 'Studi Kasus Lengkap: Kecepatan, Jarak & Usia',
      html: intro +
        studi(4, 'Berpapasan dengan jam berangkat berbeda', {
          soal: 'Kereta P berangkat dari kota A pukul 07.00 dengan 60 km/jam menuju kota B. Kereta Q berangkat dari kota B pukul 08.00 dengan 90 km/jam menuju kota A. Jarak A–B = 330 km. Kapan keduanya berpapasan?',
          kenali: 'Dua benda <b>berhadapan</b> dan <b>jam berangkat berbeda</b>.',
          rumus: 'Berpapasan: waktu = ' + fr('jarak sisa', 'kecepatan P + kecepatan Q') + '. Hitung dulu jarak yang sudah ditempuh sebelum Q berangkat.',
          langkah: [
            'Pukul 08.00 kereta P sudah berjalan 1 jam: 60 × 1 = <b>60 km</b>.',
            'Jarak sisa saat Q berangkat = 330 − 60 = <b>270 km</b>.',
            'Mulai 08.00 keduanya mendekat: 60 + 90 = <b>150 km/jam</b>.',
            'Waktu bertemu = ' + fr(270, 150) + ' = 1,8 jam = 1 jam + 0,8 × 60 menit = <b>1 jam 48 menit</b>.',
            'Pukul 08.00 + 1 jam 48 menit = <b>09.48</b>.'
          ],
          jawab: 'Berpapasan pukul <b>09.48</b>',
          cek: 'Jarak P sampai 09.48 = 2,8 jam × 60 = 168 km. Jarak Q = 1,8 jam × 90 = 162 km. 168 + 162 = 330 km. Benar.',
          ingat: 'Beda jam berangkat: <b>kerjakan "kepala start" dulu</b>, baru hitung bersama.'
        }) +
        studi(5, 'Kecepatan rata-rata: waktu beda vs jarak sama', {
          soal: '(a) Sebuah mobil melaju 2 jam dengan 60 km/jam, lalu 3 jam dengan 80 km/jam. Berapa kecepatan rata-ratanya? (b) Mobil lain menempuh jarak pulang-pergi yang sama, pergi 60 km/jam dan pulang 40 km/jam. Berapa rata-ratanya?',
          kenali: 'Kata "rata-rata kecepatan". Periksa dulu: yang <b>sama</b> itu waktu atau jarak?',
          rumus: 'Rata-rata = ' + fr('jarak total', 'waktu total') + '. Jarak sama → rata-rata = ' + fr('2 × v₁ × v₂', 'v₁ + v₂') + '.',
          langkah: [
            '(a) Jarak = 2 × 60 + 3 × 80 = 120 + 240 = <b>360 km</b>. Waktu = 2 + 3 = <b>5 jam</b>.',
            '(a) Rata-rata = ' + fr(360, 5) + ' = <b>72 km/jam</b>.',
            '(b) Jarak sama pergi dan pulang → rumus pintas: ' + fr('2 × 60 × 40', '60 + 40') + ' = ' + fr(4800, 100) + ' = <b>48 km/jam</b>.',
            '(b) Cek lewat jarak: misal 120 km sekali jalan. Waktu = ' + fr(120, 60) + ' + ' + fr(120, 40) + ' = 2 + 3 = 5 jam. Jarak total 240 km. ' + fr(240, 5) + ' = 48.'
          ],
          jawab: '(a) <b>72 km/jam</b>; (b) <b>48 km/jam</b> (bukan 50)',
          cek: 'Pada (a) rata-rata (72) condong ke 80 karena waktu di 80 lebih lama. Pada (b) rata-rata condong ke 40 karena waktu di 40 lebih lama.',
          ingat: 'Rata-rata <b>selalu total jarak ÷ total waktu</b>. Jangan pernah (60 + 40) ÷ 2 begitu saja.'
        }) +
        studi(6, 'Usia: sekarang dan "tahun lalu"', {
          soal: 'Umur ibu 3 kali umur anak. Enam tahun lalu umur ibu 7 kali umur anak. Berapa umur ibu dan anak sekarang?',
          kenali: 'Kata "kali" dan ada <b>dua waktu</b> (sekarang dan enam tahun lalu).',
          rumus: 'Misalkan umur anak sekarang = A. Maka umur ibu = 3A. Enam tahun lalu: anak A − 6, ibu 3A − 6.',
          langkah: [
            'Tulis persamaan enam tahun lalu: 3A − 6 = 7 × (A − 6).',
            'Buka kurung: 3A − 6 = 7A − 42.',
            'Pindahkan: 42 − 6 = 7A − 3A → 36 = 4A → A = <b>9</b>.',
            'Umur ibu = 3 × 9 = <b>27</b>.'
          ],
          jawab: 'Anak <b>9 tahun</b>, ibu <b>27 tahun</b>',
          cek: 'Enam tahun lalu: anak 3, ibu 21. Benar 21 = 7 × 3. Selisih umur 27 − 9 = 18 (selalu tetap).',
          ingat: '<b>"Tahun lalu" dikurangi dari kedua orang.</b> Pada tahun lalu pun selisih umurnya tetap sama.'
        })
    },
    {
      title: 'Studi Kasus Lengkap: Untung-Rugi, Rata-rata, Campuran',
      html: intro +
        studi(7, 'Untung-rugi dengan barang rusak', {
          soal: 'Pedagang membeli 25 buah apel seharga total Rp300.000. Lima apel busuk dan dibuang. Sisanya dijual Rp18.000 per buah. Berapa persen untungnya?',
          kenali: '"Membeli", "dijual", dan "persen untung" → <b>untung-rugi</b>.',
          rumus: 'Untung = pendapatan − modal. Persen untung = ' + fr('untung', 'modal') + ' × 100%.',
          langkah: [
            'Modal = Rp300.000 (seluruh pembelian, termasuk apel busuk).',
            'Apel terjual = 25 − 5 = 20 buah. Pendapatan = 20 × 18.000 = <b>Rp360.000</b>.',
            'Untung = 360.000 − 300.000 = <b>Rp60.000</b>.',
            'Persen untung = ' + fr('60.000', '300.000') + ' = ' + fr(1, 5) + ' = <b>20%</b>.'
          ],
          jawab: 'Untung <b>20%</b>',
          cek: 'Modal 300.000 naik 20% = 300.000 × 1,2 = 360.000 = pendapatan. Cocok.',
          ingat: 'Modal <b>termasuk barang yang rusak</b>. Persen untung selalu dari modal, bukan dari harga jual.'
        }) +
        studi(8, 'Rata-rata gabungan dan nilai yang ditambahkan', {
          soal: '(a) Kelas A (30 siswa) rata-rata 76 dan kelas B (20 siswa) rata-rata 86. Berapa rata-rata gabungan? (b) Rata-rata 5 nilai ujian adalah 80. Setelah ditambah satu nilai, rata-ratanya menjadi 82. Berapa nilai yang ditambahkan?',
          kenali: '"Rata-rata" dan "gabungan/ditambah".',
          rumus: 'Jumlah = rata-rata × banyak data. Rata-rata gabungan = ' + fr('jumlah semua', 'banyak semua') + '.',
          langkah: [
            '(a) Jumlah A = 30 × 76 = 2.280. Jumlah B = 20 × 86 = 1.720.',
            '(a) Rata-rata gabungan = ' + fr('2.280 + 1.720', '30 + 20') + ' = ' + fr('4.000', 50) + ' = <b>80</b>.',
            '(b) Jumlah awal = 5 × 80 = 400. Jumlah baru (6 nilai) = 6 × 82 = 492.',
            '(b) Nilai tambahan = 492 − 400 = <b>92</b>.'
          ],
          jawab: '(a) <b>80</b>; (b) <b>92</b>',
          cek: '(a) Titik 80 berjarak 4 dari 76 dan 6 dari 86. Keseimbangannya: 30 × 4 = 20 × 6 = 120. Kelas yang lebih banyak menarik rata-rata lebih dekat ke nilainya (76). (b) 92 memang di atas 82, sehingga menarik rata-rata naik.',
          ingat: 'Selalu ubah rata-rata menjadi <b>jumlah</b> dulu (rata-rata × banyak), baru dijumlah atau dikurang.'
        }) +
        studi(9, 'Menambah air ke larutan', {
          soal: 'Ada 10 liter larutan garam berkadar 30%. Berapa liter air murni harus ditambahkan agar kadarnya menjadi 20%?',
          kenali: '"Kadar", "ditambah air". Yang <b>tetap</b> adalah banyak garamnya.',
          rumus: 'Kadar = ' + fr('zat terlarut', 'volume total') + '. Menambah air tidak mengubah zat terlarut.',
          langkah: [
            'Garam awal = 30% × 10 = <b>3 liter</b>. Garam ini tetap.',
            'Kadar baru 20% berarti ' + fr(3, 'volume baru') + ' = 0,2.',
            'Volume baru = 3 ÷ 0,2 = <b>15 liter</b>.',
            'Air yang ditambah = 15 − 10 = <b>5 liter</b>.'
          ],
          jawab: '<b>5 liter</b>',
          cek: 'Garam 3 liter dalam 15 liter = ' + fr(3, 15) + ' = ' + fr(1, 5) + ' = 20%. Benar.',
          ingat: 'Cari dulu <b>benda yang tidak berubah</b> (garam), lalu bangun persamaan dari situ.'
        }) +
        studi(10, 'Berbalik nilai (tambah pekerja di tengah jalan)', {
          soal: 'Pekerjaan dapat diselesaikan 12 orang dalam 15 hari. Setelah 3 hari bekerja, ditambah 6 orang. Berapa hari lagi pekerjaan selesai?',
          kenali: 'Makin banyak orang, makin sedikit hari → <b>berbalik nilai</b>.',
          rumus: 'Banyak pekerjaan = orang × hari ("orang-hari").',
          langkah: [
            'Total pekerjaan = 12 × 15 = <b>180 orang-hari</b>.',
            'Sudah dikerjakan 3 hari: 12 × 3 = 36 orang-hari. Sisa = 180 − 36 = <b>144 orang-hari</b>.',
            'Pekerja sekarang = 12 + 6 = <b>18 orang</b>.',
            'Hari yang dibutuhkan = 144 ÷ 18 = <b>8 hari</b>.'
          ],
          jawab: '<b>8 hari</b> lagi',
          cek: 'Tanpa tambahan orang, sisa 12 hari (15 − 3). Dengan 18 orang jadi lebih cepat (8 hari). Masuk akal.',
          ingat: 'Berbalik nilai → ubah menjadi <b>orang × hari</b> yang konstan.'
        })
    }
  ]);

  /* ============================================================ 4. HIMPUNAN & PELUANG */
  addSec('tiu-himpunan-peluang-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Himpunan & Cara Menghitung',
      html: intro +
        studi(1, 'Diagram Venn: mencari yang "hanya" dan "tidak keduanya"', {
          soal: 'Dari 50 pegawai, 30 bisa Excel, 25 bisa Word, dan 10 tidak bisa keduanya. Berapa orang yang hanya bisa Excel?',
          kenali: 'Dua kelompok yang bisa beririsan, ada "tidak keduanya" → soal <b>Venn dua himpunan</b>.',
          rumus: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Total = n(A ∪ B) + di luar.',
          langkah: [
            'Yang bisa minimal satu = 50 − 10 = <b>40</b>.',
            'Isi rumus: 40 = 30 + 25 − irisan → irisan = 55 − 40 = <b>15</b> (bisa keduanya).',
            'Hanya Excel = 30 − 15 = <b>15</b>.',
            'Hanya Word = 25 − 15 = 10 (untuk pengecekan).'
          ],
          jawab: '<b>15 orang</b>',
          cek: 'Jumlahkan semua daerah: hanya Excel 15 + keduanya 15 + hanya Word 10 + tidak keduanya 10 = 50. Cocok.',
          ingat: 'Urutan kerja: <b>total → yang di luar → gabungan → irisan → "hanya"</b>.'
        }) +
        studi(2, 'Menentukan yang tidak suka keduanya', {
          soal: 'Dari 60 siswa, 35 suka bola, 28 suka basket, dan 12 suka keduanya. Berapa siswa yang tidak suka keduanya?',
          kenali: 'Irisan sudah diketahui, tanya yang di luar.',
          rumus: 'Gabungan = A + B − irisan. Tidak keduanya = total − gabungan.',
          langkah: [
            'Gabungan = 35 + 28 − 12 = <b>51</b>.',
            'Tidak suka keduanya = 60 − 51 = <b>9</b>.'
          ],
          jawab: '<b>9 siswa</b>',
          cek: 'Hanya bola 35 − 12 = 23; hanya basket 28 − 12 = 16; 23 + 16 + 12 + 9 = 60. Cocok.',
          ingat: 'Jumlah A dan B <b>selalu dikurangi irisan</b> agar orang yang dihitung dua kali tidak menggelembung.'
        }) +
        studi(3, 'Aturan perkalian (menyusun angka)', {
          soal: 'Berapa banyak bilangan 3 angka yang dapat dibentuk dari angka 1, 2, 3, 4, 5 (a) bila angka tidak boleh berulang, (b) bila boleh berulang, (c) bilangan genap tanpa berulang?',
          kenali: '"Berapa banyak cara/bilangan" → <b>aturan perkalian</b>.',
          rumus: 'Banyak cara = kali banyak pilihan di setiap posisi. Kerjakan <b>syarat paling ketat dulu</b>.',
          langkah: [
            '(a) Ratusan 5 pilihan, puluhan 4 (satu sudah dipakai), satuan 3. Total 5 × 4 × 3 = <b>60</b>.',
            '(b) Tiap posisi bebas 5 pilihan: 5 × 5 × 5 = <b>125</b>.',
            '(c) Genap berarti satuan harus 2 atau 4 → <b>2 pilihan</b> (kerjakan dulu). Ratusan: 4 pilihan, puluhan: 3 pilihan. Total 2 × 4 × 3 = <b>24</b>.'
          ],
          jawab: '(a) <b>60</b>; (b) <b>125</b>; (c) <b>24</b>',
          cek: 'Bila angka berulang tidak boleh, hasil harus lebih kecil dari yang boleh berulang. 60 &lt; 125. Benar.',
          ingat: 'Ada syarat khusus (genap, ganjil, tidak 0 di depan) → <b>isi posisi yang bersyarat lebih dulu</b>.'
        }) +
        studi(4, 'Permutasi atau kombinasi?', {
          soal: '(a) Berapa cara 4 orang duduk berjajar? (b) Dari 6 calon dipilih 2 orang sebagai pasangan peserta lomba (sama kedudukan). (c) Dari 6 calon dipilih ketua dan wakil.',
          kenali: 'Tanyakan: <b>apakah urutan atau jabatan berpengaruh?</b>',
          rumus: 'Urutan penting → permutasi (kali berturut-turut). Urutan tidak penting → kombinasi = permutasi ÷ r!.',
          langkah: [
            '(a) Urutan penting: 4 × 3 × 2 × 1 = 4! = <b>24</b>.',
            '(b) Pasangan sama kedudukan → kombinasi: ' + fr('6 × 5', '2 × 1') + ' = ' + fr(30, 2) + ' = <b>15</b>.',
            '(c) Ketua dan wakil beda jabatan → permutasi: 6 × 5 = <b>30</b>.'
          ],
          jawab: '(a) <b>24</b>; (b) <b>15</b>; (c) <b>30</b>',
          cek: 'Hubungan (b) dan (c): 30 ÷ 2 = 15, karena pada (b) pasangan "A-B" dan "B-A" dihitung satu.',
          ingat: '<b>Jabatan beda → permutasi. Sama rata → kombinasi.</b> Kombinasi = permutasi dibagi jumlah susunan di dalam kelompok.'
        })
    },
    {
      title: 'Studi Kasus Lengkap: Peluang',
      html: intro +
        studi(5, 'Peluang dasar: kartu dan dadu', {
          soal: '(a) Dari satu set kartu bridge 52 lembar diambil satu kartu. Berapa peluang terambil kartu As? (b) Dua dadu dilempar. Berapa peluang jumlah mata dadu paling sedikit 10?',
          kenali: '"Peluang" → ' + fr('yang diinginkan', 'semua kemungkinan') + '.',
          rumus: 'Peluang = ' + fr('banyak kejadian yang diinginkan', 'banyak semua kejadian') + '.',
          langkah: [
            '(a) Ada 4 As dari 52 kartu: ' + fr(4, 52) + ' = <b>' + fr(1, 13) + '</b>.',
            '(b) "Paling sedikit 10" artinya jumlah 10, 11, atau 12. Daftar: (4,6), (5,5), (6,4) untuk 10; (5,6), (6,5) untuk 11; (6,6) untuk 12.',
            '(b) Ada 6 pasangan dari 36 kemungkinan: ' + fr(6, 36) + ' = <b>' + fr(1, 6) + '</b>.'
          ],
          jawab: '(a) <b>' + fr(1, 13) + '</b>; (b) <b>' + fr(1, 6) + '</b>',
          cek: 'Semua jumlah dadu mulai dari 2 sampai 12 ada 36 pasangan. Daftar yang diinginkan sudah dituliskan satu per satu, tidak ada yang terlewat.',
          ingat: 'Dua dadu: <b>selalu 36 kemungkinan</b>. Tulis pasangan yang diinginkan satu per satu.'
        }) +
        studi(6, 'Dua kejadian yang saling bebas', {
          soal: 'Peluang Andi lulus tes pertama 0,8 dan peluang Budi lulus tes kedua 0,5 (keduanya tidak saling memengaruhi). Berapa peluang (a) keduanya lulus, (b) paling sedikit satu lulus?',
          kenali: '"Keduanya" → dikali. "Paling sedikit satu" → <b>1 − peluang tidak ada yang lulus</b>.',
          rumus: 'Saling bebas: P(A dan B) = P(A) × P(B). Paling sedikit satu = 1 − P(tidak A) × P(tidak B).',
          langkah: [
            '(a) 0,8 × 0,5 = <b>0,4</b>.',
            '(b) Peluang Andi tidak lulus = 1 − 0,8 = 0,2. Peluang Budi tidak lulus = 1 − 0,5 = 0,5.',
            '(b) Keduanya tidak lulus = 0,2 × 0,5 = 0,1.',
            '(b) Paling sedikit satu lulus = 1 − 0,1 = <b>0,9</b>.'
          ],
          jawab: '(a) <b>0,4</b>; (b) <b>0,9</b>',
          cek: '0,9 harus lebih besar dari peluang salah satunya (0,8). Benar. 0,4 harus lebih kecil dari keduanya. Benar.',
          ingat: '"Dan" = <b>kali</b>. "Paling sedikit satu" = <b>1 dikurang peluang nol</b>.'
        })
    }
  ]);

  /* ============================================================ 5. SILOGISME */
  addSec('tiu-silogisme-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Menguji Tiap Pilihan Jawaban',
      html: intro +
        studi(1, 'Premis "semua" lalu "sebagian" (tidak ada kesimpulan pasti)', {
          soal: 'Premis 1: Semua pegawai teladan rajin. Premis 2: Sebagian orang rajin adalah perantau. Kesimpulan yang benar: (a) Semua pegawai teladan adalah perantau. (b) Sebagian pegawai teladan adalah perantau. (c) Sebagian perantau adalah pegawai teladan. (d) Tidak ada kesimpulan yang pasti.',
          kenali: 'Premis kedua memakai <b>"sebagian"</b> dan menyambung ke kelompok <b>besar</b> (rajin).',
          rumus: 'Gambar lingkaran. Kesimpulan benar hanya bila berlaku di <b>semua kemungkinan gambar</b>.',
          langkah: [
            'Premis 1: gambar lingkaran "pegawai teladan" <b>di dalam</b> lingkaran "rajin".',
            'Premis 2: lingkaran "perantau" <b>memotong</b> lingkaran "rajin" (hanya sebagian).',
            'Pertanyaan: apakah potongan perantau pasti mengenai bagian "pegawai teladan"? Tidak. Potongan itu bisa berada di bagian rajin yang <b>di luar</b> pegawai teladan.',
            'Uji (a), (b), dan (c): masing-masing gagal pada gambar di mana perantau hanya menyentuh bagian luar lingkaran teladan.'
          ],
          jawab: '<b>(d) Tidak ada kesimpulan yang pasti</b>',
          cek: 'Beri nama nyata: rajin = {Ani, Budi, Cici}, teladan = {Ani}, perantau = {Budi}. Semua premis benar, tetapi perantau bukan teladan. Jadi (b) dan (c) tidak pasti.',
          ingat: '"Sebagian" yang menempel di kelompok <b>besar</b> tidak boleh dilempar ke kelompok kecil di dalamnya.'
        }) +
        studi(2, '"Sebagian" yang menempel di kelompok kecil (kesimpulan pasti)', {
          soal: 'Premis 1: Semua dokter berpendidikan. Premis 2: Sebagian dokter adalah dermawan. Kesimpulan yang benar?',
          kenali: 'Kali ini "sebagian" menempel di kelompok <b>kecil</b> (dokter), yang berada di dalam kelompok besar (berpendidikan).',
          rumus: 'Bagian dari kelompok kecil otomatis juga bagian dari kelompok besar di mana kelompok kecil itu berada.',
          langkah: [
            'Gambar: lingkaran "dokter" di dalam lingkaran "berpendidikan".',
            'Sebagian dokter adalah dermawan, jadi ada orang yang <b>dokter dan dermawan</b>.',
            'Orang itu dokter, dan dokter pasti berpendidikan. Jadi ia <b>berpendidikan dan dermawan</b>.'
          ],
          jawab: '<b>Sebagian orang berpendidikan adalah dermawan</b>',
          cek: 'Bandingkan dengan kasus 1: di sana "sebagian" menempel di kelompok besar, di sini menempel di kelompok kecil. Itulah pembedanya.',
          ingat: 'Tanyakan: <b>"sebagian" itu menempel di kelompok kecil atau besar?</b> Kecil → bisa naik ke besar. Besar → tidak bisa turun ke kecil.'
        }) +
        studi(3, 'Rantai "jika - maka" dan kontraposisi', {
          soal: 'Jika seseorang rajin maka ia lulus. Jika ia lulus maka ia diterima. Andi tidak diterima. Kesimpulan tentang Andi?',
          kenali: 'Kalimat "jika ... maka ..." berantai, dan satu fakta berbentuk <b>negatif</b> di ujung.',
          rumus: 'Rantai: rajin → lulus → diterima. Kontraposisi: "tidak q → tidak p" selalu benar.',
          langkah: [
            'Sambungkan: rajin → lulus → diterima, jadi <b>rajin → diterima</b>.',
            'Fakta: Andi <b>tidak diterima</b>. Berjalan mundur dari ujung rantai: tidak diterima → <b>tidak lulus</b>.',
            'Lanjut mundur: tidak lulus → <b>tidak rajin</b>.'
          ],
          jawab: '<b>Andi tidak lulus dan tidak rajin</b>',
          cek: 'Seandainya Andi rajin, maka ia pasti lulus dan pasti diterima. Bertentangan dengan fakta. Jadi Andi tidak rajin.',
          ingat: 'Fakta negatif di ujung → <b>jalan mundur dengan kontraposisi</b>. Fakta positif di ujung (mis. "Andi diterima") <b>tidak</b> bisa dipakai mundur.'
        })
    }
  ]);

  /* ============================================================ 6. DERET */
  addSec('tiu-deret-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Menemukan Pola dengan Tabel Selisih',
      html: intro +
        studi(1, 'Selisih bertingkat (tangga bertingkat)', {
          soal: '4, 5, 7, 10, 14, ... Suku berikutnya?',
          kenali: 'Angka naik tetapi <b>tidak tetap</b> kenaikannya.',
          rumus: 'Tulis baris selisih. Bila selisih berubah teratur, tulis selisih dari selisih.',
          langkah: [
            'Selisih antar suku: 5 − 4 = 1; 7 − 5 = 2; 10 − 7 = 3; 14 − 10 = 4.',
            'Selisihnya 1, 2, 3, 4 → naik 1 setiap kali. Selisih berikutnya = <b>5</b>.',
            'Suku berikutnya = 14 + 5 = <b>19</b>.'
          ],
          jawab: '<b>19</b>',
          cek: 'Pola lengkap: 4 (+1) 5 (+2) 7 (+3) 10 (+4) 14 (+5) 19. Konsisten.',
          ingat: 'Selisih tidak tetap → <b>cek apakah selisihnya sendiri berpola</b>.'
        }) +
        studi(2, 'Selisih tingkat dua tetap (pola kuadrat)', {
          soal: '2, 5, 10, 17, 26, ... Suku berikutnya?',
          kenali: 'Selisih naik, dan kenaikannya <b>juga naik dengan tetap</b>.',
          rumus: 'Bila selisih tingkat dua tetap, polanya bentuk kuadrat (n² ± bilangan).',
          langkah: [
            'Selisih tingkat satu: 3, 5, 7, 9.',
            'Selisih tingkat dua: 2, 2, 2 (tetap). Ini ciri pola kuadrat.',
            'Selisih berikutnya = 9 + 2 = 11. Suku berikutnya = 26 + 11 = <b>37</b>.',
            'Cara lain: bandingkan dengan 1², 2², 3², 4², 5² = 1, 4, 9, 16, 25. Setiap suku adalah kuadrat <b>ditambah 1</b>. Suku ke-6 = 6² + 1 = 37.'
          ],
          jawab: '<b>37</b>',
          cek: 'Dua cara memberi hasil sama (37).',
          ingat: 'Selisih tingkat dua tetap → <b>tebak n² ± angka</b>. Bandingkan dengan 1, 4, 9, 16, 25.'
        }) +
        studi(3, 'Dua pola bergantian (+2 lalu −1)', {
          soal: '3, 5, 4, 6, 5, 7, ... Suku berikutnya?',
          kenali: 'Angka naik-turun bergantian.',
          rumus: 'Tulis perubahan tiap langkah. Bila bergantian, ada <b>dua operasi yang diulang</b>.',
          langkah: [
            '3 → 5: +2. 5 → 4: −1. 4 → 6: +2. 6 → 5: −1. 5 → 7: +2.',
            'Polanya +2, −1, +2, −1, +2, ... Berikutnya <b>−1</b>.',
            'Suku berikutnya = 7 − 1 = <b>6</b>.'
          ],
          jawab: '<b>6</b>',
          cek: 'Cara kedua: pisahkan posisi ganjil dan genap. Ganjil: 3, 4, 5, (6) naik 1. Genap: 5, 6, 7 naik 1. Suku ke-7 adalah posisi ganjil → 6. Cocok.',
          ingat: 'Naik-turun → <b>dua cara</b>: tulis operasi bergantian, atau pisahkan posisi ganjil dan genap.'
        })
    },
    {
      title: 'Studi Kasus Lengkap: Suku ke-n, Jumlah Deret & Huruf',
      html: intro +
        studi(4, 'Suku ke-n dan jumlah deret aritmetika', {
          soal: 'Deret 7, 11, 15, 19, ... (a) Berapa suku ke-20? (b) Berapa jumlah 10 suku pertama?',
          kenali: 'Selisih antar suku <b>tetap</b> (+4) → deret aritmetika.',
          rumus: 'Uₙ = a + (n − 1) × b. Sₙ = ' + fr('n', 2) + ' × (a + Uₙ). Dengan a = suku pertama, b = beda.',
          langkah: [
            'a = 7, beda b = 4.',
            '(a) U₂₀ = 7 + (20 − 1) × 4 = 7 + 76 = <b>83</b>.',
            '(b) Cari U₁₀ dulu: 7 + 9 × 4 = <b>43</b>.',
            '(b) S₁₀ = ' + fr(10, 2) + ' × (7 + 43) = 5 × 50 = <b>250</b>.'
          ],
          jawab: '(a) <b>83</b>; (b) <b>250</b>',
          cek: 'Jumlah 4 suku pertama: 7 + 11 + 15 + 19 = 52. Rumus: ' + fr(4, 2) + ' × (7 + 19) = 2 × 26 = 52. Cocok.',
          ingat: 'Suku ke-n: <b>(n − 1)</b> dikali beda, bukan n dikali beda.'
        }) +
        studi(5, 'Deret geometri (kali tetap)', {
          soal: 'Deret 3, 6, 12, 24, ... Berapa suku ke-6?',
          kenali: 'Setiap suku <b>dikali bilangan yang sama</b> (×2).',
          rumus: 'Uₙ = a × rⁿ⁻¹, dengan r = pengali.',
          langkah: [
            'a = 3, r = 2.',
            'U₆ = 3 × 2⁵ = 3 × 32 = <b>96</b>.',
            'Cek dengan menulis: 3, 6, 12, 24, 48, 96.'
          ],
          jawab: '<b>96</b>',
          cek: 'Penulisan berurutan: suku ke-5 = 48, suku ke-6 = 96. Cocok.',
          ingat: 'Pangkatnya <b>(n − 1)</b>. Suku ke-6 berarti pangkat 5.'
        }) +
        studi(6, 'Deret huruf dengan nomor', {
          soal: 'C, F, I, L, ... Huruf berikutnya?',
          kenali: 'Deret huruf. Ubah ke <b>nomor</b> (A = 1 … Z = 26).',
          rumus: 'Huruf → nomor → cari pola → ubah kembali ke huruf.',
          langkah: [
            'C = 3, F = 6, I = 9, L = 12.',
            'Naik 3 tiap langkah. Berikutnya 12 + 3 = <b>15</b>.',
            'Nomor 15 adalah huruf <b>O</b>.'
          ],
          jawab: '<b>O</b>',
          cek: 'Urutan huruf: A B C D E F G H I J K L M N O → O huruf ke-15. Cocok.',
          ingat: 'Setelah Z kembali ke A. Bila nomor melebihi 26, <b>kurangi 26</b>.'
        })
    }
  ]);

  /* ============================================================ 7. ANALOGI & PADANAN */
  addSec('tiu-analogi-padanan-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Menyusun Kalimat Jembatan',
      html: intro +
        studi(1, 'Hubungan lawan kata (antonim)', {
          soal: 'panas : dingin = tinggi : ? Pilihan: (a) rendah, (b) besar, (c) hangat, (d) tinggi sekali.',
          kenali: 'Pasangan pertama berhubungan <b>berlawanan</b>.',
          rumus: 'Kalimat jembatan: "X adalah lawan kata Y".',
          langkah: [
            'Tulis jembatan: "panas adalah lawan kata dingin".',
            'Terapkan ke pasangan kedua: "tinggi adalah lawan kata ...".',
            'Uji pilihan: rendah (lawan tinggi, benar); besar (bukan lawan); hangat (bukan lawan, hanya tengah); tinggi sekali (sama arah).'
          ],
          jawab: '<b>(a) rendah</b>',
          cek: 'Balikkan jembatannya: "dingin adalah lawan kata panas" → "rendah adalah lawan kata tinggi". Berlaku dua arah.',
          ingat: 'Jembatan harus <b>sama persis</b> di pasangan kedua.'
        }) +
        studi(2, 'Hubungan bagian dan keseluruhan', {
          soal: 'roda : mobil = halaman : ? Pilihan: (a) rumah, (b) buku, (c) tulisan, (d) kertas.',
          kenali: 'Pasangan pertama: yang kecil adalah <b>bagian</b> dari yang besar.',
          rumus: 'Kalimat jembatan: "X adalah bagian dari Y".',
          langkah: [
            'Jembatan: "roda adalah bagian dari mobil".',
            'Pasangan kedua: "halaman adalah bagian dari ...".',
            'Uji pilihan: <b>buku</b> (halaman adalah bagian dari buku, benar). Rumah memang punya halaman (lahan di depannya), tetapi itu arti lain dari kata "halaman" dan bukan hubungan roda-mobil. Pilihan itu menjebak.'
          ],
          jawab: '<b>(b) buku</b>',
          cek: 'Satu kata bisa punya dua arti (halaman = bagian buku atau lahan). Pilih arti yang cocok dengan jembatan.',
          ingat: 'Kata bermakna ganda → <b>jembatan menentukan artinya</b>.'
        }) +
        studi(3, 'Dua pilihan terasa cocok', {
          soal: 'kemarau : kekeringan = hujan lebat : ? Pilihan: (a) basah, (b) banjir, (c) payung, (d) petir.',
          kenali: 'Dua pilihan terasa dekat (basah dan banjir). Perketat jembatan.',
          rumus: 'Jembatan lebih spesifik: "X menyebabkan Y" (sebab → akibat).',
          langkah: [
            'Jembatan awal: "kemarau menyebabkan kekeringan" (sebab → akibat).',
            'Terapkan: "hujan lebat menyebabkan ...".',
            'Basah memang akibat, tetapi terlalu ringan. Banjir adalah akibat yang setara bobotnya dengan kekeringan (sama-sama bencana).',
            'Payung adalah alat, petir adalah gejala lain. Keduanya bukan akibat.'
          ],
          jawab: '<b>(b) banjir</b>',
          cek: 'Periksa tingkat keparahan: kemarau → kekeringan (bencana), hujan lebat → banjir (bencana).',
          ingat: 'Dua pilihan cocok → tambahkan <b>tingkat atau bobot</b> ke dalam jembatan.'
        })
    }
  ]);

  /* ============================================================ 8. FIGURAL */
  addSec('tiu-figural-kasus-v25', [
    {
      title: 'Studi Kasus Lengkap: Dadu, Putaran & Pola',
      html: intro +
        studi(1, 'Dadu: tiga sisi terlihat', {
          soal: 'Sebuah dadu normal diletakkan di meja. Tiga sisi yang terlihat: atas = 1, depan = 2, kanan = 3. Berapa angka di sisi bawah, belakang, dan kiri?',
          kenali: 'Soal dadu dengan beberapa sisi diketahui.',
          rumus: 'Sisi berhadapan selalu berjumlah <b>7</b>: 1↔6, 2↔5, 3↔4.',
          langkah: [
            'Bawah berhadapan dengan atas (1) → 7 − 1 = <b>6</b>.',
            'Belakang berhadapan dengan depan (2) → 7 − 2 = <b>5</b>.',
            'Kiri berhadapan dengan kanan (3) → 7 − 3 = <b>4</b>.'
          ],
          jawab: 'Bawah <b>6</b>, belakang <b>5</b>, kiri <b>4</b>',
          cek: 'Jumlah seluruh sisi dadu = 1 + 2 + 3 + 4 + 5 + 6 = 21. Ketiga sisi terlihat 6, ketiga sisi tersembunyi 15 (6 + 5 + 4). 6 + 15 = 21. Cocok.',
          ingat: 'Sisi tersembunyi = <b>7 dikurangi sisi yang berhadapan</b>.'
        }) +
        studi(2, 'Rotasi panah', {
          soal: 'Sebuah panah menunjuk ke atas. Diputar 90° searah jarum jam, lalu 90° berlawanan arah jarum jam, lalu 270° searah jarum jam. Ke mana panah menunjuk sekarang?',
          kenali: 'Beberapa putaran berurutan dengan arah berbeda.',
          rumus: 'Searah jarum jam = positif (+), berlawanan = negatif (−). Jumlahkan, lalu ambil <b>sisa terhadap 360°</b>.',
          langkah: [
            'Total putaran = +90 − 90 + 270 = <b>+270°</b> (searah jarum jam).',
            'Panduan: atas +90° = kanan; +180° = bawah; +270° = <b>kiri</b>.',
            'Panah berakhir menunjuk ke kiri.'
          ],
          jawab: '<b>Ke kiri</b>',
          cek: '+270° searah jarum jam sama dengan 90° berlawanan arah jarum jam. Dari atas berputar 90° ke kiri. Cocok.',
          ingat: 'Jumlahkan semua putaran dulu (searah +, berlawanan −), baru tentukan arahnya.'
        }) +
        studi(3, 'Pola bergantian (siklus)', {
          soal: 'Urutan gambar: lingkaran putih, kotak hitam, segitiga putih, lingkaran hitam, kotak putih, segitiga hitam, ... Gambar ke-7 dan ke-8?',
          kenali: 'Bentuk <b>berulang tiap 3</b>, warna <b>berganti</b> tiap gambar.',
          rumus: 'Periksa satu sifat per putaran: (1) bentuk, (2) warna.',
          langkah: [
            'Putaran bentuk: lingkaran → kotak → segitiga → lingkaran → ... (ulang tiap 3). Gambar ke-7 kembali ke lingkaran, ke-8 kotak.',
            'Putaran warna: putih, hitam, putih, hitam, putih, hitam → bergantian tiap gambar. Gambar ke-7 putih, gambar ke-8 hitam.',
            'Gabungkan: gambar ke-7 = lingkaran putih; gambar ke-8 = kotak hitam.'
          ],
          jawab: 'Ke-7: <b>lingkaran putih</b>; ke-8: <b>kotak hitam</b>',
          cek: 'Gambar ke-1 sampai ke-3 (lingkaran putih, kotak hitam, segitiga putih) berbeda warna dari ke-4 sampai ke-6 (lingkaran hitam, kotak putih, segitiga hitam). Karena periode bentuk 3 dan warna 2, pola penuh baru sama setelah 6 gambar. Maka ke-7 = ke-1, ke-8 = ke-2. Cocok.',
          ingat: 'Pecah menjadi <b>satu sifat per putaran</b> dan cari periodenya masing-masing.'
        })
    }
  ]);

  /* ============================================================ 9. STRATEGI: hitung skor & waktu */
  addSec('tiu-strategi-nilai-v25', [
    {
      title: 'Studi Kasus Lengkap: Menghitung Skor dan Menyusun Waktu',
      html: intro +
        studi(1, 'Mengubah jumlah benar menjadi skor dan sebaliknya', {
          soal: '(a) Pada simulasi TIU 35 soal kamu benar 19. Berapa skornya dan apakah lolos ambang 80? (b) Berapa soal minimal yang harus benar untuk mencapai skor 110?',
          kenali: 'Skor TIU = <b>5 poin setiap soal benar</b>. Jawaban salah dan kosong bernilai 0.',
          rumus: 'Skor = 5 × jumlah benar. Jumlah benar minimal = ' + fr('target skor', 5) + '.',
          langkah: [
            '(a) Skor = 5 × 19 = <b>95</b>. 95 lebih besar dari 80, jadi lolos ambang.',
            '(a) Ambang 80 butuh ' + fr(80, 5) + ' = <b>16 soal benar</b>. Kamu punya 3 soal cadangan (19 − 16).',
            '(b) ' + fr(110, 5) + ' = <b>22 soal benar</b>.'
          ],
          jawab: '(a) skor <b>95</b>, lolos; (b) minimal <b>22 soal benar</b>',
          cek: '22 × 5 = 110. Benar.',
          ingat: 'Skor ÷ 5 = jumlah benar. Hafalkan: <b>16 benar = 80, 20 benar = 100, 24 benar = 120</b>.'
        }) +
        studi(2, 'Menyusun jatah waktu dengan 3 putaran', {
          soal: 'Waktu total SKD 100 menit. Kamu merencanakan TWK 20 menit, TKP 30 menit, TIU 45 menit, dan 5 menit cadangan. Berapa detik rata-rata per soal TIU, dan bagaimana membagi 45 menit itu dalam 3 putaran?',
          kenali: 'Soal manajemen waktu: bagi menit dengan jumlah soal.',
          rumus: 'Detik per soal = ' + fr('menit × 60', 'jumlah soal') + '.',
          langkah: [
            'Rata-rata TIU = ' + fr('45 × 60', 35) + ' = ' + fr('2.700', 35) + ' ≈ <b>77 detik</b> per soal.',
            'Putaran 1 (soal mudah, ±20 soal × 40 detik) ≈ 800 detik ≈ <b>13 menit</b>.',
            'Putaran 2 (soal sedang, ±10 soal × 100 detik) ≈ 1.000 detik ≈ <b>17 menit</b>.',
            'Putaran 3 (sisa ±5 soal × 120 detik) ≈ 600 detik = <b>10 menit</b>. Jumlah ≈ 40 menit, sisa ±5 menit untuk mengecek.'
          ],
          jawab: 'Rata-rata <b>±77 detik per soal</b>; rencana putaran ≈ 13 + 17 + 10 menit',
          cek: 'Soal mudah dijawab jauh di bawah 77 detik, sehingga hematnya dipakai untuk soal sedang.',
          ingat: 'Soal mudah <b>membeli waktu</b> untuk soal sulit. Bila di putaran 1 kamu hemat 5 menit, itu 5 menit tambahan di putaran 2.'
        })
    }
  ]);
})();
