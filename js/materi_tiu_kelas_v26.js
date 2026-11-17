(function(){
var tbl=function(h,rows){return '<table class="table table-sm"><thead><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>'};
var ul=function(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'};
var note=function(t){return '<div class="callout">'+t+'</div>'};
var ex=function(j,s,st,a){return '<div class="callout"><b>'+j+'</b><br>'+s+'<ol>'+st.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ol><b>Jawaban: '+a+'</b></div>'};
void tbl;void ul;void note;void ex;
window.__TIUK=(window.__TIUK||[]).concat([{"id":"tiu-k-hitung","group":"TIU","title":"Berhitung Cepat: Urutan Operasi, Persen–Pecahan, Kuadrat, Trik Kali (dengan contoh bertahap)","summary":"Setiap rumus disertai 2–5 contoh dengan langkah hitung: urutan operasi, persen↔pecahan, kuadrat/akar, trik ×11/×25/×99, (a+b)(a−b), pecahan campuran, desimal, estimasi, persen berturut-turut.","buckets":["SKD_TIU"],"subs":["Numerik - Berhitung Cepat"],"sections":[{"title":"1. Urutan Operasi Hitung","html":"<p><b>Rumus:</b> <b>Kurung → Pangkat/Akar → Kali &amp; Bagi (kiri ke kanan) → Tambah &amp; Kurang (kiri ke kanan)</b>. Kali dan bagi sederajat; kerjakan dari kiri.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Hitunglah 8 + 6 × 3 − 4 ÷ 2.<ol><li>Kali/bagi dulu: 6 × 3 = 18 dan 4 ÷ 2 = 2.</li><li>Sisa: 8 + 18 − 2.</li><li>8 + 18 = 26, lalu 26 − 2 = 24.</li></ol><b>Jawaban: 24</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>Hitunglah 48 ÷ 6 × 2 + (9 − 4)².<ol><li>Kurung: 9 − 4 = 5.</li><li>Pangkat: 5² = 25.</li><li>Kali/bagi dari kiri: 48 ÷ 6 = 8, lalu 8 × 2 = 16.</li><li>Tambah: 16 + 25 = 41.</li></ol><b>Jawaban: 41</b></div><div class=\"callout\"><b>Contoh 3 (gaya soal CPNS)</b><br>Hitunglah 120 − 3 × (15 + 5²) ÷ 4.<ol><li>Pangkat di dalam kurung: 5² = 25.</li><li>Kurung: 15 + 25 = 40.</li><li>Kali/bagi dari kiri: 3 × 40 = 120, lalu 120 ÷ 4 = 30.</li><li>Kurang: 120 − 30 = 90.</li></ol><b>Jawaban: 90</b></div><div class=\"callout\"><b>Kesalahan umum:</b> mengerjakan 48 ÷ 6 × 2 sebagai 48 ÷ 12 = 4. Salah! Karena sederajat, kerjakan dari kiri: (48 ÷ 6) × 2 = 16.</div><div class=\"callout\"><b>Cara cepat:</b> Beri tanda garis di bawah bagian yang dikerjakan dulu; tulis ulang sisa soal di baris baru setiap langkah.</div>"},{"title":"2. Persen ↔ Pecahan (Wajib Hafal)","html":"<table class=\"table table-sm\"><thead><tr><th>Pecahan</th><th>Persen</th><th>Pecahan</th><th>Persen</th></tr></thead><tbody><tr><td>1/2</td><td>50%</td><td>1/10</td><td>10%</td></tr><tr><td>1/3</td><td>33,33%</td><td>1/12</td><td>8,33%</td></tr><tr><td>1/4</td><td>25%</td><td>1/15</td><td>6,67%</td></tr><tr><td>1/5</td><td>20%</td><td>1/16</td><td>6,25%</td></tr><tr><td>1/6</td><td>16,67%</td><td>1/20</td><td>5%</td></tr><tr><td>1/8</td><td>12,5%</td><td>3/8</td><td>37,5%</td></tr><tr><td>1/9</td><td>11,11%</td><td>5/8</td><td>62,5%</td></tr><tr><td>2/3</td><td>66,67%</td><td>7/8</td><td>87,5%</td></tr></tbody></table><p><b>Rumus:</b> persen dari N = (persen sebagai pecahan) × N. Ubah ke pecahan, bagi dulu, baru kali.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Berapa 12,5% dari 640?<ol><li>12,5% = 1/8.</li><li>640 ÷ 8 = 80.</li></ol><b>Jawaban: 80</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>Berapa 37,5% dari 480?<ol><li>37,5% = 3/8.</li><li>480 ÷ 8 = 60 (nilai 1/8).</li><li>60 × 3 = 180.</li></ol><b>Jawaban: 180</b></div><div class=\"callout\"><b>Contoh 3</b><br>Berapa 16⅔% dari 1.800?<ol><li>16⅔% = 1/6.</li><li>1.800 ÷ 6 = 300.</li></ol><b>Jawaban: 300</b></div><div class=\"callout\"><b>Contoh 4 (gaya CPNS)</b><br>Berapa 62,5% dari (3/5 × 400)?<ol><li>3/5 × 400: 400 ÷ 5 = 80, lalu 80 × 3 = 240.</li><li>62,5% = 5/8: 240 ÷ 8 = 30, lalu 30 × 5 = 150.</li></ol><b>Jawaban: 150</b></div><div class=\"callout\"><b>Kesalahan umum:</b> mengira 1/6 = 17% lalu menghitung dengan angka pembulatan sehingga hasilnya meleset. Gunakan pecahan 1/6, jangan desimal pembulatan.</div><div class=\"callout\"><b>Cara cepat:</b> Jika angkanya habis dibagi penyebut (8, 6, 3, 12), pakai pecahan; jika angka dasarnya 100/200/1.000, pakai persen langsung.</div>"},{"title":"3. Kuadrat, Kubik &amp; Akar (Hafalan)","html":"<table class=\"table table-sm\"><thead><tr><th>Kuadrat 11–18</th><th>Kuadrat 18–25</th><th>Kubik 1–8</th></tr></thead><tbody><tr><td>11² = 121</td><td>18² = 324</td><td>1³ = 1</td></tr><tr><td>12² = 144</td><td>19² = 361</td><td>2³ = 8</td></tr><tr><td>13² = 169</td><td>20² = 400</td><td>3³ = 27</td></tr><tr><td>14² = 196</td><td>21² = 441</td><td>4³ = 64</td></tr><tr><td>15² = 225</td><td>22² = 484</td><td>5³ = 125</td></tr><tr><td>16² = 256</td><td>23² = 529</td><td>6³ = 216</td></tr><tr><td>17² = 289</td><td>24² = 576</td><td>7³ = 343</td></tr><tr><td>18² = 324</td><td>25² = 625</td><td>8³ = 512</td></tr></tbody></table><ul><li>Kubik 9³ = 729, 10³ = 1.000. Akar: √144 = 12, √169 = 13, √196 = 14, √225 = 15, √256 = 16, √289 = 17, √324 = 18, √361 = 19, √400 = 20.</li><li><b>Angka satuan kuadrat sempurna</b> hanya 0, 1, 4, 5, 6, 9. Kuadrat tidak pernah berakhiran 2, 3, 7, 8.</li></ul><p><b>Rumus:</b> <b>Menebak akar kuadrat</b>: (1) cari dua puluhan/puluhan terdekat, (2) lihat angka satuan untuk memilih kandidat, (3) uji dengan bilangan berakhiran 5 di tengah.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Berapa √1.296?<ol><li>30² = 900 dan 40² = 1.600, jadi akarnya di antara 30 dan 40.</li><li>Satuan 6 hanya berasal dari bilangan berakhiran 4 atau 6: kandidat 34 atau 36.</li><li>Uji batas: 35² = 1.225 &lt; 1.296, jadi akarnya di atas 35 → 36.</li><li>Cek: 36 × 36 = 1.296.</li></ol><b>Jawaban: 36</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>Berapa ∛5.832?<ol><li>10³ = 1.000 dan 20³ = 8.000, jadi akarnya di antara 10 dan 20 (17³ = 4.913 masih terlalu kecil).</li><li>Satuan 2 pada kubik berasal dari satuan 8 (8³ = 512).</li><li>Maka kandidatnya 18. Cek: 18 × 18 = 324; 324 × 18 = 5.832.</li></ol><b>Jawaban: 18</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Hitunglah √2.025 − 3³ + 12².<ol><li>√2.025: 45² = 2.025 (karena 4 × 5 = 20, ditambah 25 → 2025), jadi 45.</li><li>3³ = 27 dan 12² = 144.</li><li>45 − 27 + 144 = 162.</li></ol><b>Jawaban: 162</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menyangka ∛ sama dengan kuadrat atau memakai satuan kubik seperti kuadrat. Satuan kubik: 2↔8, 3↔7, lainnya sama.</div><div class=\"callout\"><b>Cara cepat:</b> Hafal 11²–25² dan 1³–10³ minimal; itu mencakup mayoritas soal akar/pangkat TIU.</div>"},{"title":"4. Trik Kali ×11, ×5, ×25, ×99, ×101","html":"<table class=\"table table-sm\"><thead><tr><th>Pengali</th><th>Trik</th><th>Contoh</th></tr></thead><tbody><tr><td>× 11</td><td>Tulis digit pertama, jumlah dua digit, digit terakhir (kalau jumlah &gt; 9, bawa 1 ke kiri)</td><td>43 × 11 = 4 (4+3) 3 = 473</td></tr><tr><td>× 5</td><td>× 10 lalu ÷ 2</td><td>68 × 5 = 680 ÷ 2 = 340</td></tr><tr><td>× 25</td><td>× 100 lalu ÷ 4</td><td>36 × 25 = 3.600 ÷ 4 = 900</td></tr><tr><td>× 99</td><td>× 100 lalu − bilangan itu</td><td>47 × 99 = 4.700 − 47 = 4.653</td></tr><tr><td>× 101</td><td>bilangan dua digit diulang</td><td>63 × 101 = 6.363</td></tr></tbody></table><div class=\"callout\"><b>Contoh 1</b><br>78 × 11 = ?<ol><li>Digit: 7 dan 8; jumlahnya 7 + 8 = 15 (lebih dari 9).</li><li>Tulis 7 _ 8 dengan tengah 15 → bawa 1 ke kiri: (7+1) 5 8 = 858.</li><li>Cek: 78 × 10 = 780; 780 + 78 = 858.</li></ol><b>Jawaban: 858</b></div><div class=\"callout\"><b>Contoh 2</b><br>84 × 25 = ?<ol><li>84 × 100 = 8.400.</li><li>8.400 ÷ 4 = 2.100.</li></ol><b>Jawaban: 2100</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Hitunglah 47 × 99 + 68 × 5.<ol><li>47 × 99 = 4.700 − 47 = 4.653.</li><li>68 × 5 = 680 ÷ 2 = 340.</li><li>4.653 + 340 = 4.993.</li></ol><b>Jawaban: 4993</b></div><div class=\"callout\"><b>Kesalahan umum:</b> lupa membawa angka pada ×11 (78 × 11 ditulis 7 15 8). Selalu cek dengan ×10 + bilangan itu.</div><div class=\"callout\"><b>Cara cepat:</b> Kalau ada angka 25, 125, 5: ubah ke pembagian 100, 1.000, 10. Kalau 99, 999: kurangi dari 100, 1.000.</div>"},{"title":"5. Kuadrat Berakhiran 5, Dekat 50/100 &amp; (a+b)(a−b)","html":"<p><b>Rumus:</b> <b>(n5)² = [n × (n+1)] diikuti 25</b>. &nbsp; <b>(a+b)(a−b) = a² − b²</b>. &nbsp; <b>(a±b)² = a² ± 2ab + b²</b>.</p><div class=\"callout\"><b>Contoh 1</b><br>Hitung 85².<ol><li>n = 8, n + 1 = 9.</li><li>8 × 9 = 72.</li><li>Tempel 25: 7.225.</li></ol><b>Jawaban: 7225</b></div><div class=\"callout\"><b>Contoh 2</b><br>Hitung 115².<ol><li>n = 11, n + 1 = 12.</li><li>11 × 12 = 132.</li><li>Tempel 25: 13.225.</li></ol><b>Jawaban: 13225</b></div><div class=\"callout\"><b>Contoh 3 (sedang)</b><br>Hitung 52 × 48.<ol><li>52 = 50 + 2 dan 48 = 50 − 2.</li><li>Pakai (a+b)(a−b) = a² − b² dengan a = 50, b = 2.</li><li>50² − 2² = 2.500 − 4 = 2.496.</li></ol><b>Jawaban: 2496</b></div><div class=\"callout\"><b>Contoh 4 (gaya CPNS)</b><br>Hitung 2.025² − 2.024².<ol><li>Bentuk a² − b² = (a + b)(a − b).</li><li>(2.025 + 2.024) × (2.025 − 2.024) = 4.049 × 1.</li><li>Hasil 4.049.</li></ol><b>Jawaban: 4049</b></div><div class=\"callout\"><b>Contoh 5</b><br>Hitung 99² dan 103 × 97.<ol><li>99² = (100 − 1)² = 10.000 − 200 + 1 = 9.801.</li><li>103 × 97 = (100 + 3)(100 − 3) = 10.000 − 9 = 9.991.</li></ol><b>Jawaban: 9.801 dan 9.991</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menulis (a+b)² = a² + b² (lupa suku 2ab). 52² bukan 2.500 + 4, tetapi 2.500 + 200 + 4 = 2.704.</div><div class=\"callout\"><b>Cara cepat:</b> Dua bilangan simetris di sekitar bilangan bulat (48 &amp; 52, 97 &amp; 103, 19 &amp; 21) = kuadrat tengahnya dikurangi kuadrat jaraknya.</div>"},{"title":"6. Pecahan Campuran &amp; Desimal","html":"<p><b>Rumus:</b> Campuran → <b>biasa</b> dulu: a b/c = (a × c + b)/c. Tambah/kurang: samakan penyebut (KPK). Kali: pembilang × pembilang, penyebut × penyebut (coret dulu). Bagi: kalikan kebalikan.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>2 ¾ + 1 ⅚ = ?<ol><li>Ubah: 2 ¾ = 11/4 dan 1 ⅚ = 11/6.</li><li>KPK 4 dan 6 = 12: 11/4 = 33/12 dan 11/6 = 22/12.</li><li>33/12 + 22/12 = 55/12 = 4 7/12.</li></ol><b>Jawaban: 4 7/12</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>3 ½ × 2 2/7 = ?<ol><li>Ubah: 3 ½ = 7/2 dan 2 2/7 = 16/7.</li><li>Kali: 7/2 × 16/7; coret 7 dengan 7 → 1/2 × 16.</li><li>16/2 = 8.</li></ol><b>Jawaban: 8</b></div><p><b>Rumus:</b> Desimal: kali = hitung seperti bilangan bulat lalu tempatkan koma sebanyak total angka di belakang koma kedua bilangan. Bagi: geser koma pembagi ke kanan sampai bulat, geser koma yang dibagi sebanyak itu juga.</p><div class=\"callout\"><b>Contoh 3</b><br>1,2 × 0,35 = ?<ol><li>12 × 35 = 420.</li><li>Angka di belakang koma: 1 + 2 = 3.</li><li>0,420 = 0,42.</li></ol><b>Jawaban: 0.42</b></div><div class=\"callout\"><b>Contoh 4</b><br>4,5 ÷ 0,15 = ?<ol><li>Geser koma 2 tempat: 0,15 → 15 dan 4,5 → 450.</li><li>450 ÷ 15 = 30.</li></ol><b>Jawaban: 30</b></div><div class=\"callout\"><b>Contoh 5 (gaya CPNS)</b><br>Hitunglah 2,5 × 0,4 + 3,6 ÷ 0,12.<ol><li>2,5 × 0,4 = 1.</li><li>3,6 ÷ 0,12 → 360 ÷ 12 = 30.</li><li>1 + 30 = 31.</li></ol><b>Jawaban: 31</b></div><div class=\"callout\"><b>Kesalahan umum:</b> pada pecahan campuran, mengalikan bagian bulat dan pecahan terpisah (3 ½ × 2 2/7 ≠ 6 + 1/7). Ubah dulu ke pecahan biasa.</div><div class=\"callout\"><b>Cara cepat:</b> Untuk pembagian pecahan, \"kali kebalikan\" dan coret silang sebelum menghitung.</div>"},{"title":"7. Estimasi &amp; Pembulatan","html":"<p><b>Rumus:</b> Bulatkan angka ke bilangan \"bagus\", hitung, lalu pilih opsi terdekat. Pakai bila opsi jawaban berjauhan.</p><div class=\"callout\"><b>Contoh 1</b><br>Perkiraan hasil 19,9 × 5,02 paling dekat dengan…<ol><li>19,9 ≈ 20 dan 5,02 ≈ 5.</li><li>20 × 5 = 100.</li><li>Hitung eksak: 19,9 × 5,02 = 99,898 → mendekati 100.</li></ol><b>Jawaban: 100</b></div><div class=\"callout\"><b>Contoh 2 (gaya CPNS)</b><br>Perkiraan hasil 4.987 × 2,02 paling dekat dengan…<ol><li>4.987 ≈ 5.000 dan 2,02 ≈ 2.</li><li>5.000 × 2 = 10.000.</li><li>Hitung eksak: 10.073,74 → mendekati 10.000.</li></ol><b>Jawaban: 10.000</b></div><div class=\"callout\"><b>Kesalahan umum:</b> membulatkan terlalu kasar (mis. 19,9 menjadi 10 atau 30). Bulatkan ke bilangan terdekat yang memudahkan, bukan sembarang.</div><div class=\"callout\"><b>Cara cepat:</b> Kalau opsi ada yang berbeda satuan (1.000 vs 10.000), estimasi cukup untuk membuang opsi salah.</div>"},{"title":"8. Persentase Naik/Turun Berturut-turut","html":"<p><b>Rumus:</b> Naik p% → faktor <b>(1 + p/100)</b>. Turun p% → faktor <b>(1 − p/100)</b>. Berturut-turut = <b>kalikan faktornya</b>. Perubahan total = faktor total − 1. Jangan jumlahkan persennya.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Harga naik 20% lalu turun 20%. Berubah berapa persen dari harga awal?<ol><li>Faktor: 1,2 × 0,8 = 0,96.</li><li>0,96 − 1 = −0,04.</li><li>Turun 4% (bukan tetap).</li></ol><b>Jawaban: turun 4%</b></div><div class=\"callout\"><b>Contoh 2</b><br>Harga barang Rp 200.000 naik 10% setahun pertama dan naik 10% lagi tahun kedua. Berapa harga akhirnya?<ol><li>Faktor: 1,1 × 1,1 = 1,21.</li><li>200.000 × 1,21 = 242.000.</li><li>Naik total 21%, bukan 20%.</li></ol><b>Jawaban: Rp 242.000</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Nilai turun 20% kemudian naik 25%. Hasilnya dibanding nilai awal…<ol><li>Faktor: 0,8 × 1,25 = 1,00.</li><li>Jadi nilainya kembali sama seperti semula.</li></ol><b>Jawaban: tidak berubah</b></div><div class=\"callout\"><b>Contoh 4</b><br>Gaji Rp 5.000.000 naik 20% lalu dipotong 20%. Gaji akhir?<ol><li>Faktor 1,2 × 0,8 = 0,96.</li><li>5.000.000 × 0,96 = 4.800.000.</li></ol><b>Jawaban: Rp 4.800.000</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menjumlahkan: \"naik 20% lalu turun 20% = tetap\". Persen kedua dihitung dari nilai baru, bukan nilai awal.</div><div class=\"callout\"><b>Cara cepat:</b> Naik a% lalu turun a% selalu turun (a²/100)%. Naik 25% butuh turun 20% untuk kembali; naik 20% butuh turun 16⅔%.</div>"}],"tips":["Hafal tabel persen↔pecahan dan kuadrat 11–25.","Persen berturut-turut: kalikan faktor, jangan jumlahkan.","Cek hasil dengan operasi kebalikan."]},{"id":"tiu-k-ratio","group":"TIU","title":"Perbandingan, Berbalik Nilai, Skala &amp; Aritmetika Sosial (dengan contoh bertahap)","summary":"Perbandingan senilai/berbalik, skala peta, pembagian sebanding, untung-rugi, diskon bertingkat, bunga, PPN, bruto-neto-tara dan persen kenaikan, masing-masing dengan contoh langkah demi langkah.","buckets":["SKD_TIU"],"subs":["Perbandingan Berbalik Nilai","Aritmetika Sosial"],"sections":[{"title":"1. Perbandingan Senilai","html":"<p><b>Rumus:</b> Dua besaran naik/turun bersamaan: <b>a₁/b₁ = a₂/b₂</b>. Cari <b>nilai satu satuan</b> dulu, lalu kalikan.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>5 kg apel harganya Rp 90.000. Berapa harga 8 kg?<ol><li>Harga per kg = 90.000 ÷ 5 = 18.000.</li><li>8 kg × 18.000 = 144.000.</li></ol><b>Jawaban: Rp 144.000</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>Mobil menempuh 60 km dengan 4 liter bensin. Berapa liter untuk 150 km?<ol><li>Konsumsi: 60 km ÷ 4 L = 15 km per liter.</li><li>150 km ÷ 15 km/L = 10 liter.</li></ol><b>Jawaban: 10 liter</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Dengan 9 kg beras, 6 orang dapat makan selama 12 hari. Jika ada 9 orang dan beras 13,5 kg, bertahan berapa hari?<ol><li>Konsumsi per orang per hari = 9 ÷ (6 × 12) = 0,125 kg.</li><li>Kebutuhan 9 orang per hari = 9 × 0,125 = 1,125 kg.</li><li>13,5 ÷ 1,125 = 12 hari.</li></ol><b>Jawaban: 12 hari</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menggunakan perbandingan terbalik padahal kedua besaran naik bersamaan (kg dan harga). Tes: \"Kalau yang satu bertambah, yang lain ikut bertambah?\" → senilai.</div><div class=\"callout\"><b>Cara cepat:</b> Tulis dalam bentuk tabel dua baris, silang-kali: a × d = b × c.</div>"},{"title":"2. Perbandingan Berbalik Nilai (Pekerja–Hari)","html":"<p><b>Rumus:</b> Lebih banyak pekerja → lebih sedikit hari: <b>pekerja × hari = tetap</b> (total \"hari-orang\"). Dengan itu: P₁ × H₁ = P₂ × H₂.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>12 pekerja menyelesaikan pekerjaan dalam 30 hari. Jika dikerjakan 18 pekerja, berapa hari?<ol><li>Total pekerjaan = 12 × 30 = 360 hari-orang.</li><li>Hari = 360 ÷ 18 = 20.</li></ol><b>Jawaban: 20 hari</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>20 pekerja merencanakan selesai dalam 15 hari. Setelah 5 hari, ditambah 5 pekerja (jadi 25). Sisa pekerjaan selesai dalam berapa hari?<ol><li>Total = 20 × 15 = 300 hari-orang.</li><li>Selesai 5 hari: 20 × 5 = 100; sisa = 300 − 100 = 200.</li><li>Pekerja sekarang 25: 200 ÷ 25 = 8 hari.</li></ol><b>Jawaban: 8 hari</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS: tambahan pekerja agar lebih cepat)</b><br>Proyek direncanakan 12 pekerja selama 40 hari. Setelah 16 hari, diputuskan sisa pekerjaan selesai 8 hari lebih cepat dari sisa waktu rencana. Berapa pekerja tambahan?<ol><li>Sisa waktu rencana = 40 − 16 = 24 hari.</li><li>Sisa pekerjaan = 12 × 24 = 288 hari-orang.</li><li>Waktu baru = 24 − 8 = 16 hari; pekerja = 288 ÷ 16 = 18.</li><li>Tambahan = 18 − 12 = 6 pekerja.</li></ol><b>Jawaban: 6 pekerja</b></div><div class=\"callout\"><b>Kesalahan umum:</b> mengalikan terbalik (12 × 18 = 216 lalu ÷ 30). Selalu hitung total \"hari-orang\" dulu, baru bagi dengan pekerja baru.</div><div class=\"callout\"><b>Cara cepat:</b> Pekerja naik 1,5× → hari turun jadi 2/3. (12 → 18 = ×1,5; 30 hari → 20 hari.)</div>"},{"title":"3. Skala Peta","html":"<p><b>Rumus:</b> <b>Skala = jarak di peta : jarak sebenarnya</b> (satuan sama). 1 km = 100.000 cm.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Skala peta 1 : 2.000.000. Jarak di peta 6 cm. Jarak sebenarnya?<ol><li>6 × 2.000.000 = 12.000.000 cm.</li><li>÷ 100.000 = 120 km.</li></ol><b>Jawaban: 120 km</b></div><div class=\"callout\"><b>Contoh 2</b><br>Jarak dua kota 45 km. Skala peta 1 : 1.500.000. Jarak di peta?<ol><li>45 km = 4.500.000 cm.</li><li>4.500.000 ÷ 1.500.000 = 3 cm.</li></ol><b>Jawaban: 3 cm</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Jarak sebenarnya 180 km digambarkan 12 cm di peta. Skala peta?<ol><li>180 km = 18.000.000 cm.</li><li>18.000.000 ÷ 12 = 1.500.000.</li><li>Skala 1 : 1.500.000.</li></ol><b>Jawaban: 1 : 1.500.000</b></div><div class=\"callout\"><b>Kesalahan umum:</b> lupa mengubah km ke cm (1 km = 100.000 cm). Samakan satuan dulu.</div><div class=\"callout\"><b>Cara cepat:</b> Skala 1 : 1.000.000 berarti 1 cm = 10 km; tinggal geser satu nol berkurang lima.</div>"},{"title":"4. Pembagian Sebanding (a : b : c)","html":"<p><b>Rumus:</b> Bagian = (rasio ÷ jumlah rasio) × total. Bila dua rasio berbagi satu suku (A:B dan B:C), <b>samakan suku yang sama</b>.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Uang Rp 2.400.000 dibagi untuk A, B, C dengan perbandingan 3 : 4 : 5. Bagian B?<ol><li>Jumlah rasio = 3 + 4 + 5 = 12.</li><li>Nilai satu bagian = 2.400.000 ÷ 12 = 200.000.</li><li>B = 4 × 200.000 = 800.000.</li></ol><b>Jawaban: Rp 800.000</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>Perbandingan umur Ali dan Budi 2 : 3. Selisihnya 8 tahun. Jumlah umur mereka?<ol><li>Selisih rasio = 3 − 2 = 1 bagian = 8 tahun.</li><li>Jumlah rasio = 2 + 3 = 5 bagian = 5 × 8 = 40.</li></ol><b>Jawaban: 40 tahun</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Kelereng A : B = 3 : 5 dan B : C = 2 : 3. Jika total 62, berapa kelereng C?<ol><li>Samakan B: KPK 5 dan 2 = 10. A : B = 6 : 10 dan B : C = 10 : 15.</li><li>A : B : C = 6 : 10 : 15; jumlah = 31.</li><li>Satu bagian = 62 ÷ 31 = 2.</li><li>C = 15 × 2 = 30.</li></ol><b>Jawaban: 30</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menjumlahkan rasio yang berbeda B (5 dan 2) tanpa menyamakan dulu.</div><div class=\"callout\"><b>Cara cepat:</b> Cek akhir: total bagian × satu bagian harus sama dengan total yang diketahui.</div>"},{"title":"5. Untung, Rugi &amp; Harga Jual–Beli","html":"<p><b>Rumus:</b> <b>Untung% = (Jual − Beli) ÷ Beli × 100%</b>; Rugi% = (Beli − Jual) ÷ Beli × 100%. &nbsp; Jual = Beli × (1 + untung%) &nbsp;atau&nbsp; Beli × (1 − rugi%). Persen selalu terhadap <b>harga beli</b>.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Dibeli Rp 80.000, dijual Rp 100.000. Untung berapa persen?<ol><li>Untung = 100.000 − 80.000 = 20.000.</li><li>20.000 ÷ 80.000 × 100% = 25%.</li></ol><b>Jawaban: 25%</b></div><div class=\"callout\"><b>Contoh 2</b><br>Barang seharga Rp 400.000 dijual rugi 15%. Harga jual?<ol><li>Rugi = 15% × 400.000 = 60.000.</li><li>Jual = 400.000 − 60.000 = 340.000.</li></ol><b>Jawaban: Rp 340.000</b></div><div class=\"callout\"><b>Contoh 3 (sedang)</b><br>Dijual Rp 450.000 dengan untung 25%. Harga beli?<ol><li>Jual = Beli × 1,25.</li><li>Beli = 450.000 ÷ 1,25 = 360.000.</li></ol><b>Jawaban: Rp 360.000</b></div><div class=\"callout\"><b>Contoh 4 (gaya CPNS)</b><br>Pedagang menjual dua barang masing-masing Rp 600.000. Satu untung 20%, satu rugi 20%. Untung/rugi total?<ol><li>Barang 1: Beli = 600.000 ÷ 1,2 = 500.000 (untung 100.000).</li><li>Barang 2: Beli = 600.000 ÷ 0,8 = 750.000 (rugi 150.000).</li><li>Total beli = 1.250.000; total jual = 1.200.000; rugi 50.000.</li></ol><b>Jawaban: rugi Rp 50.000 (4% dari modal)</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menghitung untung dari harga jual. Dasarnya selalu harga beli. Juga: untung 20% + rugi 20% tidak impas karena dasar hitungnya berbeda.</div><div class=\"callout\"><b>Cara cepat:</b> Dari harga jual dan untung p%: Beli = Jual ÷ (1 + p). Dari rugi p%: Beli = Jual ÷ (1 − p).</div>"},{"title":"6. Diskon, Diskon Bertingkat &amp; Cashback","html":"<p><b>Rumus:</b> Diskon d% → bayar <b>(1 − d)</b> × harga. Diskon bertingkat → <b>kalikan faktor</b>: bayar = H × (1 − d₁)(1 − d₂). Diskon total ≠ d₁ + d₂.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Harga Rp 500.000 diskon 20% lalu diskon tambahan 10%. Berapa harga bayar?<ol><li>Setelah diskon 20%: 500.000 × 0,8 = 400.000.</li><li>Diskon 10% lagi: 400.000 × 0,9 = 360.000.</li><li>Total diskon = 140.000 ÷ 500.000 = 28% (bukan 30%).</li></ol><b>Jawaban: Rp 360.000</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>Diskon 30% + 20%. Setara diskon tunggal berapa persen?<ol><li>Faktor: 0,7 × 0,8 = 0,56.</li><li>Diskon = 1 − 0,56 = 0,44.</li></ol><b>Jawaban: 44%</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Setelah diskon 25%, harga sepatu menjadi Rp 270.000. Harga sebelum diskon?<ol><li>Bayar = 75% × Harga awal.</li><li>Harga awal = 270.000 ÷ 0,75 = 360.000.</li></ol><b>Jawaban: Rp 360.000</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menjumlahkan diskon 30% + 20% menjadi 50%. Diskon kedua dihitung dari harga yang sudah turun.</div><div class=\"callout\"><b>Cara cepat:</b> Diskon 20% + 10% → 0,8 × 0,9 = 0,72. Hafal faktor: 10% = 0,9; 20% = 0,8; 25% = 0,75; 30% = 0,7; 50% = 0,5.</div>"},{"title":"7. Bunga Tunggal &amp; Majemuk","html":"<p><b>Rumus:</b> <b>Tunggal:</b> Bunga = M × i × t; Total = M(1 + i·t). &nbsp; <b>Majemuk:</b> Total = M(1 + i)<sup>n</sup>. Satuan i dan t harus sama (per tahun ↔ tahun; per bulan ↔ bulan).</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Pinjaman Rp 5.000.000 berbunga tunggal 12% per tahun. Bunga setelah 9 bulan?<ol><li>t = 9/12 = 0,75 tahun.</li><li>Bunga = 5.000.000 × 0,12 × 0,75 = 450.000.</li></ol><b>Jawaban: Rp 450.000</b></div><div class=\"callout\"><b>Contoh 2</b><br>Tabungan Rp 2.000.000, bunga tunggal 6% per tahun. Saldo setelah 18 bulan?<ol><li>t = 1,5 tahun; bunga = 2.000.000 × 0,06 × 1,5 = 180.000.</li><li>Saldo = 2.000.000 + 180.000 = 2.180.000.</li></ol><b>Jawaban: Rp 2.180.000</b></div><div class=\"callout\"><b>Contoh 3 (sedang)</b><br>Bunga tunggal 2,5% per bulan. Setelah 8 bulan bunga Rp 400.000. Modal awal?<ol><li>Bunga total = 2,5% × 8 = 20% dari modal.</li><li>Modal = 400.000 ÷ 0,2 = 2.000.000.</li></ol><b>Jawaban: Rp 2.000.000</b></div><div class=\"callout\"><b>Contoh 4 (gaya CPNS: majemuk)</b><br>Uang Rp 10.000.000 dibungakan majemuk 10% per tahun selama 3 tahun. Total dan bunga?<ol><li>Tahun 1: 10.000.000 × 1,1 = 11.000.000.</li><li>Tahun 2: 11.000.000 × 1,1 = 12.100.000.</li><li>Tahun 3: 12.100.000 × 1,1 = 13.310.000.</li><li>Bunga = 13.310.000 − 10.000.000 = 3.310.000.</li></ol><b>Jawaban: Total Rp 13.310.000; bunga Rp 3.310.000</b></div><div class=\"callout\"><b>Kesalahan umum:</b> memakai bunga per tahun untuk waktu dalam bulan tanpa mengubah satuan (9 bulan harus 9/12 tahun).</div><div class=\"callout\"><b>Cara cepat:</b> Majemuk 2–3 periode: kalikan faktor berurutan seperti persen berturut-turut. Tunggal selalu lebih kecil dari majemuk untuk n &gt; 1.</div>"},{"title":"8. Pajak, PPN, Bruto–Neto–Tara","html":"<p><b>Rumus:</b> Harga + PPN p% = Harga × (1 + p). Harga termasuk PPN → Harga dasar = Total ÷ (1 + p). &nbsp; <b>Bruto = Neto + Tara</b>; Tara% dihitung dari bruto.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Harga laptop Rp 2.500.000 belum termasuk PPN 11%. Harga yang dibayar?<ol><li>PPN = 11% × 2.500.000 = 275.000.</li><li>Bayar = 2.500.000 + 275.000 = 2.775.000.</li></ol><b>Jawaban: Rp 2.775.000</b></div><div class=\"callout\"><b>Contoh 2 (sedang)</b><br>Harga termasuk PPN 11% adalah Rp 1.110.000. Harga sebelum PPN?<ol><li>Total = Harga dasar × 1,11.</li><li>Harga dasar = 1.110.000 ÷ 1,11 = 1.000.000.</li></ol><b>Jawaban: Rp 1.000.000</b></div><div class=\"callout\"><b>Contoh 3</b><br>Bruto 80 kg, tara 2,5%. Neto?<ol><li>Tara = 2,5% × 80 = 2 kg.</li><li>Neto = 80 − 2 = 78 kg.</li></ol><b>Jawaban: 78 kg</b></div><div class=\"callout\"><b>Contoh 4</b><br>Neto 144 kg dan tara 4%. Bruto?<ol><li>Neto = 96% × Bruto.</li><li>Bruto = 144 ÷ 0,96 = 150 kg.</li></ol><b>Jawaban: 150 kg</b></div><div class=\"callout\"><b>Contoh 5 (gaya CPNS)</b><br>40 karung masing-masing bruto 50 kg, tara 1,5%. Harga beras Rp 12.000 per kg neto. Total yang dibayar?<ol><li>Neto per karung = 50 × (1 − 0,015) = 49,25 kg.</li><li>Neto total = 40 × 49,25 = 1.970 kg.</li><li>Bayar = 1.970 × 12.000 = 23.640.000.</li></ol><b>Jawaban: Rp 23.640.000</b></div><div class=\"callout\"><b>Kesalahan umum:</b> menghitung PPN dari total (mengurangi 11% dari Rp 1.110.000 = 988.000). Harga dasar = total ÷ 1,11.</div><div class=\"callout\"><b>Cara cepat:</b> PPN 11%: tambahkan 10% lalu 1%. Rp 2.500.000 → +250.000 +25.000 = 2.775.000.</div>"},{"title":"9. Persentase Kenaikan/Penurunan &amp; Pertumbuhan","html":"<p><b>Rumus:</b> <b>Perubahan% = (Nilai akhir − Nilai awal) ÷ Nilai awal × 100%</b>. Selalu dibagi nilai <b>awal</b>.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Nilai naik dari 80 menjadi 100. Berapa persen kenaikannya? Dan jika turun dari 100 ke 80?<ol><li>Naik: (100 − 80) ÷ 80 = 20 ÷ 80 = 25%.</li><li>Turun: (100 − 80) ÷ 100 = 20%.</li></ol><b>Jawaban: naik 25%; turun 20%</b></div><div class=\"callout\"><b>Contoh 2</b><br>Gaji pokok Rp 4.000.000 naik 15%. Gaji baru?<ol><li>Kenaikan = 15% × 4.000.000 = 600.000.</li><li>Gaji baru = 4.600.000.</li></ol><b>Jawaban: Rp 4.600.000</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Penduduk suatu kota 250.000 jiwa tumbuh 4% per tahun. Jumlah penduduk setelah 2 tahun?<ol><li>Tahun 1: 250.000 × 1,04 = 260.000.</li><li>Tahun 2: 260.000 × 1,04 = 270.400.</li></ol><b>Jawaban: 270.400 jiwa</b></div><div class=\"callout\"><b>Contoh 4</b><br>Hasil panen 640 ton turun 12,5%. Hasil sekarang?<ol><li>12,5% = 1/8; 640 ÷ 8 = 80.</li><li>640 − 80 = 560.</li></ol><b>Jawaban: 560 ton</b></div><div class=\"callout\"><b>Kesalahan umum:</b> membagi selisih dengan nilai akhir (20 ÷ 100 untuk kenaikan 80 → 100). Pembagi harus nilai awal.</div><div class=\"callout\"><b>Cara cepat:</b> Naik 25% ↔ turun 20% (kebalikan); naik 50% ↔ turun 33⅓%.</div>"}],"tips":["Pekerja × hari = tetap (berbalik nilai).","Untung/rugi selalu dari harga beli.","Diskon bertingkat dikalikan, bukan dijumlah.","Samakan satuan sebelum menghitung bunga dan skala."]}]);
})();
/* Materi TIU "kelas intensif": rumus + contoh soal bertahap. Semua angka diverifikasi dengan kode. */
(function(){
  var tbl=function(h,r){return '<table class="table table-sm"><thead><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead><tbody>'+r.map(function(a){return '<tr>'+a.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>'};
  var ul=function(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'};
  var note=function(t){return '<div class="callout">'+t+'</div>'};
  var ex=function(judul,soal,langkah,jawaban){return '<div class="callout"><b>'+judul+'</b><br>'+soal+'<ol>'+langkah.map(function(l){return '<li>'+l+'</li>'}).join('')+'</ol><b>Jawaban: '+jawaban+'</b></div>'};

  var cerita={id:'tiu-k-cerita',group:'TIU',title:'Soal Cerita: Kerja, Kecepatan, Usia, Campuran & Rata-rata',
    summary:'Setiap rumus disertai contoh bertahap: kerja bersama, keran, kecepatan, papasan, kejar, perahu, usia, campuran, rata-rata, median, modus.',
    buckets:['SKD_TIU'],subs:['Kerja Bersama','Kecepatan & Waktu','Statistika Rata-Rata','Numerik - Soal Cerita'],sections:[
    {title:'1. Kerja Bersama: Ubah Waktu Menjadi "Kecepatan Kerja"',html:
      note('<b>Ide utama:</b> jika sebuah pekerjaan selesai dalam <b>t</b> hari, maka dalam 1 hari ia mengerjakan <b>1/t</b> bagian. Kecepatan kerja boleh dijumlahkan, waktu tidak.')+
      tbl(['Situasi','Rumus'],[['Dua pihak bekerja bersama','1/t = 1/a + 1/b, atau t = (a × b) / (a + b)'],['Tiga pihak','1/t = 1/a + 1/b + 1/c'],['Salah satu pekerja sudah diketahui, mencari yang lain','1/b = 1/t − 1/a'],['Ada yang menghambat (keran bocor / pembuangan)','Kurangkan kecepatannya: 1/t = 1/a + 1/b − 1/c']])+
      ex('Contoh 1 (dasar)','A mengecat rumah sendirian dalam 6 jam, B dalam 12 jam. Berapa jam jika bekerja bersama?',['Kecepatan A = 1/6, kecepatan B = 1/12 per jam.','Bersama: 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 per jam.','Waktu = 1 ÷ (1/4) = 4 jam.'],'4 jam')+
      ex('Contoh 2 (rumus cepat)','Ani menyelesaikan laporan dalam 10 hari, Budi dalam 15 hari. Jika dikerjakan bersama, selesai dalam...',['Pakai t = (a × b)/(a + b) = (10 × 15)/(10 + 15).','= 150/25 = 6.'],'6 hari')+
      ex('Contoh 3 (tiga pekerja)','A 12 hari, B 18 hari, C 36 hari. Bersama-sama berapa hari?',['Samakan penyebut 36: 1/12 = 3/36, 1/18 = 2/36, 1/36.','Jumlah = 3/36 + 2/36 + 1/36 = 6/36 = 1/6.','Waktu = 6 hari.'],'6 hari')+
      ex('Contoh 4 (mencari salah satu)','A sendiri menyelesaikan pekerjaan 20 hari. Bersama B selesai 12 hari. Berapa hari jika B sendirian?',['Kecepatan bersama = 1/12, kecepatan A = 1/20.','Kecepatan B = 1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30.','B sendirian = 30 hari.'],'30 hari')+
      ex('Contoh 5 (kerja sebagian)','A dapat menyelesaikan pekerjaan sendirian dalam 15 hari, B dalam 10 hari. A bekerja sendiri 5 hari, lalu dibantu B. Berapa hari lagi sampai selesai?',['Dalam 5 hari A mengerjakan 5 × 1/15 = 1/3. Sisa = 2/3.','Kecepatan bersama = 1/15 + 1/10 = 2/30 + 3/30 = 5/30 = 1/6 per hari.','Waktu sisa = (2/3) ÷ (1/6) = 4 hari.'],'4 hari')+
      note('<b>Kesalahan umum:</b> menjumlahkan waktu (6 + 12 = 18) atau merata-rata waktu. Cek cepat: waktu bersama <b>selalu lebih kecil</b> dari waktu pekerja tercepat.')},
    {title:'2. Keran & Pipa (Masuk – Keluar)',html:
      note('Keran pengisi = kecepatan <b>positif</b>; keran pembuang/bocor = <b>negatif</b>. Jumlahkan semuanya, lalu waktu = 1 ÷ hasil.')+
      ex('Contoh 1','Keran A mengisi bak penuh dalam 4 jam, keran B dalam 6 jam, sedangkan lubang C mengosongkan bak penuh dalam 12 jam. Jika semua terbuka, bak penuh dalam...',['Kecepatan: 1/4 + 1/6 − 1/12 = 3/12 + 2/12 − 1/12 = 4/12.','4/12 = 1/3 bak per jam.','Waktu = 3 jam.'],'3 jam')+
      ex('Contoh 2','Keran pengisi memenuhi bak dalam 3 jam. Keran pembuang mengosongkan bak penuh dalam 6 jam. Jika keduanya dibuka bersama dari bak kosong, bak penuh dalam...',['1/3 − 1/6 = 2/6 − 1/6 = 1/6.','Waktu = 6 jam.'],'6 jam')+
      ex('Contoh 3 (tambah pekerja)','Proyek direncanakan selesai 30 hari oleh 12 pekerja. Setelah 10 hari, pekerjaan harus selesai 5 hari lebih cepat dari rencana. Berapa pekerja yang harus ditambah (kecepatan tiap pekerja sama)?',['Total pekerjaan = 12 × 30 = 360 hari-pekerja.','Sudah dikerjakan 12 × 10 = 120. Sisa = 240.','Sisa waktu rencana = 20 hari, dipercepat 5 hari → 15 hari.','Pekerja yang dibutuhkan = 240 ÷ 15 = 16. Tambahan = 16 − 12 = 4.'],'4 pekerja')+
      note('<b>Cara cepat "hari-pekerja":</b> pekerjaan = pekerja × hari. Jika pekerja bertambah 2×, waktu jadi ½ (perbandingan berbalik nilai).')},
    {title:'3. Jarak, Kecepatan, Waktu',html:
      tbl(['Rumus','Keterangan'],[['s = v × t','jarak = kecepatan × waktu (satuan harus sama)'],['km/jam → m/detik','× 5/18  (sebaliknya × 18/5)'],['Melewati tiang/orang','jarak = panjang kereta'],['Melewati terowongan/jembatan','jarak = panjang kereta + panjang terowongan']])+
      ex('Contoh 1 (konversi)','Kereta 150 m melaju 72 km/jam. Berapa detik untuk melewati tiang, dan melewati terowongan 250 m?',['72 km/jam = 72 × 5/18 = 20 m/detik.','Melewati tiang: 150 ÷ 20 = 7,5 detik.','Melewati terowongan: (150 + 250) ÷ 20 = 400 ÷ 20 = 20 detik.'],'7,5 detik dan 20 detik')+
      note('<b>Kesalahan umum:</b> lupa mengubah km/jam ke m/detik, dan lupa menambah panjang kereta pada soal terowongan.')},
    {title:'4. Papasan (Berlawanan Arah) & Kejar (Searah)',html:
      tbl(['Jenis','Rumus waktu bertemu'],[['Berlawanan arah (papasan)','t = jarak ÷ (v1 + v2)'],['Searah (menyusul)','t = selisih jarak ÷ (v1 − v2)']])+
      ex('Contoh 1 (papasan)','Jarak kota A–B 270 km. Mobil dari A berkecepatan 50 km/jam, mobil dari B 40 km/jam, berangkat bersamaan pukul 07.00 saling menuju. Kapan dan di mana bertemu?',['Kecepatan gabungan = 50 + 40 = 90 km/jam.','t = 270 ÷ 90 = 3 jam → bertemu pukul 10.00.','Jarak dari A = 50 × 3 = 150 km.'],'pukul 10.00, 150 km dari A')+
      ex('Contoh 2 (berangkat beda jam)','Mobil P berangkat dari kota A pukul 06.00 dengan 60 km/jam menuju B. Mobil Q berangkat dari B pukul 07.00 dengan 40 km/jam menuju A. Jarak A–B = 300 km. Kapan bertemu?',['Pukul 07.00 mobil P sudah menempuh 60 × 1 = 60 km. Sisa jarak = 240 km.','Mulai 07.00 keduanya jalan: kecepatan gabungan = 60 + 40 = 100 km/jam.','t = 240 ÷ 100 = 2,4 jam = 2 jam 24 menit → 07.00 + 2.24 = 09.24.'],'pukul 09.24')+
      ex('Contoh 3 (menyusul)','Andi bersepeda 12 km/jam berangkat pukul 07.00. Budi bermotor 36 km/jam menyusul dari tempat yang sama pukul 08.00. Kapan Budi menyusul Andi?',['Pukul 08.00 Andi sudah 12 × 1 = 12 km di depan.','Selisih kecepatan = 36 − 12 = 24 km/jam.','t = 12 ÷ 24 = 0,5 jam = 30 menit → pukul 08.30.'],'pukul 08.30')+
      note('<b>Kesalahan umum:</b> menjumlahkan kecepatan pada soal searah (harusnya dikurangkan) atau mengabaikan jarak yang sudah ditempuh sebelum pihak kedua berangkat.')},
    {title:'5. Kecepatan Rata-Rata Pulang-Pergi & Perahu Berarus',html:
      note('<b>Kecepatan rata-rata ≠ rata-rata kecepatan.</b> Jika jarak pergi = jarak pulang dengan kecepatan v1 dan v2: <b>v rata-rata = 2 × v1 × v2 / (v1 + v2)</b>.')+
      ex('Contoh 1','Seseorang pergi dengan kecepatan 60 km/jam dan pulang 40 km/jam di jalur yang sama. Kecepatan rata-rata seluruh perjalanan?',['Pakai 2 × 60 × 40 ÷ (60 + 40).','= 4.800 ÷ 100 = 48 km/jam (bukan 50).'],'48 km/jam')+
      ex('Contoh 2','Pergi 30 km/jam, pulang 60 km/jam. Kecepatan rata-rata?',['2 × 30 × 60 ÷ (30 + 60) = 3.600 ÷ 90 = 40.'],'40 km/jam')+
      tbl(['Arah','Kecepatan efektif'],[['Searah arus (hilir)','v perahu + v arus'],['Melawan arus (hulu)','v perahu − v arus']])+
      ex('Contoh 3 (perahu)','Perahu berkecepatan 12 km/jam di air tenang, kecepatan arus 3 km/jam. Menempuh 45 km ke hilir lalu kembali ke hulu. Total waktu?',['Hilir = 12 + 3 = 15 km/jam → 45 ÷ 15 = 3 jam.','Hulu = 12 − 3 = 9 km/jam → 45 ÷ 9 = 5 jam.','Total = 3 + 5 = 8 jam.'],'8 jam')},
    {title:'6. Soal Usia',html:
      note('<b>Kunci:</b> selisih umur dua orang <b>tidak pernah berubah</b>; tiap orang bertambah umur yang sama setiap tahun. Misalkan umur sekarang dengan variabel, lalu tulis kondisi "x tahun lagi / x tahun lalu".')+
      ex('Contoh 1','Umur ayah 40 tahun, anaknya 10 tahun. Berapa tahun lagi umur ayah tiga kali umur anak?',['Misal x tahun lagi: 40 + x = 3 × (10 + x).','40 + x = 30 + 3x → 10 = 2x → x = 5.','Cek: ayah 45, anak 15, 45 = 3 × 15.'],'5 tahun lagi')+
      ex('Contoh 2','Lima tahun lalu umur ayah 6 kali umur anak. Jumlah umur mereka sekarang 52 tahun. Berapa umur anak sekarang?',['Misal umur anak 5 tahun lalu = a, ayah = 6a.','Sekarang anak = a + 5, ayah = 6a + 5 → jumlah = 7a + 10 = 52.','7a = 42 → a = 6. Anak sekarang = 6 + 5 = 11 (ayah 41).'],'11 tahun')+
      ex('Contoh 3 (perbandingan)','Perbandingan umur A dan B sekarang 3 : 5. Delapan tahun lagi perbandingannya 5 : 7. Berapa umur B sekarang?',['Misal A = 3k, B = 5k. (3k + 8)/(5k + 8) = 5/7.','Kali silang: 7(3k + 8) = 5(5k + 8) → 21k + 56 = 25k + 40.','16 = 4k → k = 4. B = 5 × 4 = 20 (A = 12).','Cek: 20/28 = 5/7 ✓.'],'20 tahun')},
    {title:'7. Campuran, Kadar & Harga (Rata-Rata Tertimbang)',html:
      tbl(['Rumus','Keterangan'],[['Kadar campuran = (jumlah zat) ÷ (jumlah total)','zat = kadar × volume'],['Air murni','kadar 0%'],['Alligation (rasio campuran)','bagian 1 : bagian 2 = (kadar tinggi − target) : (target − kadar rendah)']])+
      ex('Contoh 1','30 liter larutan garam 20% dicampur 20 liter larutan garam 50%. Kadar campurannya?',['Garam 1 = 0,2 × 30 = 6 liter. Garam 2 = 0,5 × 20 = 10 liter.','Total garam = 16 liter; total larutan = 50 liter.','Kadar = 16 ÷ 50 = 32%.'],'32%')+
      ex('Contoh 2 (menambah air)','Larutan 40 liter berkadar 30%. Berapa liter air harus ditambahkan agar kadarnya 20%?',['Garam = 0,3 × 40 = 12 liter (tidak berubah saat ditambah air).','Total baru = 12 ÷ 0,2 = 60 liter.','Air tambahan = 60 − 40 = 20 liter.'],'20 liter')+
      ex('Contoh 3 (alligation harga)','Beras Rp12.000/kg dicampur beras Rp15.000/kg. Agar campuran Rp13.000/kg, perbandingan banyaknya?',['Rasio murah : mahal = (15.000 − 13.000) : (13.000 − 12.000) = 2 : 1.','Cek: (2 × 12.000 + 1 × 15.000) ÷ 3 = 39.000 ÷ 3 = 13.000 ✓.'],'2 : 1 (beras murah : beras mahal)')+
      ex('Contoh 4 (jumlah-selisih)','Jumlah dua bilangan 50, selisihnya 14. Bilangan terbesar dan terkecil?',['Besar = (jumlah + selisih) ÷ 2 = (50 + 14) ÷ 2 = 32.','Kecil = (jumlah − selisih) ÷ 2 = (50 − 14) ÷ 2 = 18.'],'32 dan 18')+
      note('<b>Kesalahan umum:</b> merata-rata kadar langsung (20% dan 50% → 35%) padahal volume berbeda. Selalu bobot dengan volume.')},
    {title:'8. Rata-Rata, Median, Modus, Jangkauan',html:
      tbl(['Istilah','Rumus / cara'],[['Rata-rata (mean)','jumlah data ÷ banyak data  →  jumlah = rata-rata × banyak'],['Median','nilai tengah data terurut; genap → rata-rata dua data tengah'],['Modus','data yang paling sering muncul'],['Jangkauan','data terbesar − data terkecil'],['Rata-rata gabungan','(n1·r1 + n2·r2) ÷ (n1 + n2)']])+
      ex('Contoh 1 (mean)','Nilai 5 siswa: 80, 75, 90, 85, 70. Rata-ratanya?',['Jumlah = 80 + 75 + 90 + 85 + 70 = 400.','400 ÷ 5 = 80.'],'80')+
      ex('Contoh 2 (gabungan)','Kelas A 30 siswa rata-rata 70, kelas B 20 siswa rata-rata 80. Rata-rata gabungan?',['Jumlah A = 30 × 70 = 2.100. Jumlah B = 20 × 80 = 1.600.','Total = 3.700, banyak = 50.','3.700 ÷ 50 = 74 (bukan 75).'],'74')+
      ex('Contoh 3 (menambah data)','Rata-rata 5 bilangan adalah 12. Setelah ditambah satu bilangan, rata-ratanya menjadi 14. Bilangan yang ditambahkan?',['Jumlah lama = 5 × 12 = 60.','Jumlah baru = 6 × 14 = 84.','Bilangan baru = 84 − 60 = 24.'],'24')+
      ex('Contoh 4 (mengeluarkan data)','Rata-rata usia 8 orang adalah 30 tahun. Satu orang keluar sehingga rata-rata menjadi 28 tahun. Usia yang keluar?',['Jumlah semula = 8 × 30 = 240.','Jumlah sisa = 7 × 28 = 196.','Usia yang keluar = 240 − 196 = 44 tahun.'],'44 tahun')+
      ex('Contoh 5 (target nilai)','Rata-rata 4 ujian = 72. Berapa nilai ujian kelima agar rata-rata 5 ujian menjadi 75?',['Total yang dibutuhkan = 5 × 75 = 375.','Total sekarang = 4 × 72 = 288.','Nilai kelima = 375 − 288 = 87.'],'87')+
      ex('Contoh 6 (median, modus, jangkauan)','Data: 7, 3, 9, 3, 5, 8, 3, 10. Tentukan median, modus, jangkauan, dan rata-rata.',['Urutkan: 3, 3, 3, 5, 7, 8, 9, 10 (8 data).','Median = rata-rata data ke-4 dan ke-5 = (5 + 7) ÷ 2 = 6.','Modus = 3 (muncul 3 kali). Jangkauan = 10 − 3 = 7.','Rata-rata = 48 ÷ 8 = 6.'],'median 6, modus 3, jangkauan 7, rata-rata 6')+
      note('<b>Sifat transformasi:</b> jika setiap data ditambah k, rata-rata ikut + k; jika setiap data dikali k, rata-rata ikut × k. Jangkauan: tambah k tidak berubah, kali k ikut × k.')}
    ],tips:['Soal kerja: ubah semua waktu menjadi "bagian per hari" (1/t).','Soal gerak: tulis dulu searah atau berlawanan, baru pilih jumlah atau selisih kecepatan.','Rata-rata: kerjakan lewat JUMLAH (rata-rata × banyak).']};

  var himp={id:'tiu-k-himpunan',group:'TIU',title:'Himpunan (Venn), Peluang, Permutasi & Kombinasi',
    summary:'Rumus Venn 2 dan 3 himpunan, peluang dasar, saling lepas, bebas, komplemen, faktorial, permutasi, kombinasi — semua dengan contoh bertahap.',
    buckets:['SKD_TIU'],subs:['Himpunan, Peluang'],sections:[
    {title:'1. Himpunan & Diagram Venn (2 Himpunan)',html:
      tbl(['Rumus','Keterangan'],[['n(A ∪ B) = n(A) + n(B) − n(A ∩ B)','gabungan = jumlah − irisan (irisan terhitung dua kali)'],['Tidak masuk keduanya','n(semesta) − n(A ∪ B)'],['Hanya A','n(A) − n(A ∩ B)'],['Hanya satu dari dua','n(A ∪ B) − n(A ∩ B)']])+
      ex('Contoh 1','Dari 40 siswa, 25 gemar sepak bola, 18 gemar basket, dan 8 gemar keduanya. Berapa siswa yang tidak gemar keduanya, hanya bola, dan hanya basket?',['Gabungan = 25 + 18 − 8 = 35.','Tidak gemar keduanya = 40 − 35 = 5.','Hanya bola = 25 − 8 = 17. Hanya basket = 18 − 8 = 10.','Cek total: 17 + 10 + 8 + 5 = 40 ✓.'],'5, 17, dan 10')+
      ex('Contoh 2 (irisan dicari)','Dari 50 pegawai, 30 mahir Excel, 28 mahir Word, dan 6 tidak mahir keduanya. Berapa pegawai mahir keduanya?',['Mahir minimal satu = 50 − 6 = 44.','n(A ∩ B) = 30 + 28 − 44 = 14.','Hanya Excel = 30 − 14 = 16; hanya Word = 28 − 14 = 14.'],'14 pegawai')+
      note('<b>Kesalahan umum:</b> menjawab "30 + 28 = 58" tanpa mengurangi irisan, sehingga hasil melebihi jumlah semesta (tidak mungkin). Irisan selalu dihitung dari selisih dengan gabungan.')},
    {title:'2. Tiga Himpunan',html:
      note('<b>n(A ∪ B ∪ C) = A + B + C − (A∩B) − (A∩C) − (B∩C) + (A∩B∩C)</b>. Hanya A = A − (A∩B) − (A∩C) + (A∩B∩C).')+
      ex('Contoh','Survei 100 orang: 50 memakai produk A, 40 produk B, 30 produk C; 15 memakai A dan B, 10 memakai A dan C, 12 memakai B dan C; 5 memakai ketiganya. Berapa orang yang tidak memakai satu pun, dan berapa yang hanya memakai satu produk?',['Gabungan = 50 + 40 + 30 − 15 − 10 − 12 + 5 = 120 − 37 + 5 = 88.','Tidak memakai satu pun = 100 − 88 = 12.','Hanya A = 50 − 15 − 10 + 5 = 30; hanya B = 40 − 15 − 12 + 5 = 18; hanya C = 30 − 10 − 12 + 5 = 13.','Hanya satu produk = 30 + 18 + 13 = 61.','Cek: tepat dua produk = (15−5) + (10−5) + (12−5) = 22; 61 + 22 + 5 = 88 ✓.'],'12 orang tidak memakai; 61 orang hanya satu produk')},
    {title:'3. Peluang Dasar',html:
      note('<b>P(E) = n(E) / n(S)</b>, nilai selalu 0 sampai 1. Frekuensi harapan = P × banyak percobaan.')+
      tbl(['Objek','Ruang sampel'],[['1 dadu','6'],['2 dadu','36'],['1 koin','2'],['3 koin','8 (=2³)'],['Kartu bridge','52 (13 per jenis, 4 jenis, 4 As)']])+
      ex('Contoh 1 (dadu)','Satu dadu dilempar. Peluang muncul bilangan genap? Bilangan prima?',['Genap: {2, 4, 6} = 3 → 3/6 = 1/2.','Prima: {2, 3, 5} = 3 → 3/6 = 1/2.'],'1/2 dan 1/2')+
      ex('Contoh 2 (dua dadu)','Dua dadu dilempar. Peluang jumlah mata 8?',['Ruang sampel = 6 × 6 = 36.','Pasangan berjumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5.','P = 5/36.'],'5/36')+
      ex('Contoh 3 (koin)','Tiga koin dilempar sekali. Peluang tepat 2 sisi gambar?',['Ruang sampel = 8.','Kejadian: GGA, GAG, AGG = 3.','P = 3/8.'],'3/8')+
      ex('Contoh 4 (bola tanpa pengembalian)','Kotak berisi 5 bola merah, 3 putih, 2 biru. Diambil 2 bola tanpa pengembalian. Peluang keduanya merah? Satu merah dan satu putih?',['Keduanya merah: 5/10 × 4/9 = 20/90 = 2/9.','Satu merah satu putih: (5 × 3) ÷ C(10,2) = 15/45 = 1/3.'],'2/9 dan 1/3')+
      ex('Contoh 5 (frekuensi harapan)','Peluang hujan setiap hari 0,3. Dalam 30 hari, harapan hari hujan?',['30 × 0,3 = 9.'],'9 hari')},
    {title:'4. Saling Lepas, Bebas & Komplemen',html:
      tbl(['Kasus','Rumus'],[['Saling lepas (tidak mungkin terjadi bersama)','P(A ∪ B) = P(A) + P(B)'],['Tidak saling lepas','P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'],['Kejadian bebas (tidak saling memengaruhi)','P(A ∩ B) = P(A) × P(B)'],['Komplemen ("minimal satu")','P(A) = 1 − P(bukan A)']])+
      ex('Contoh 1 (saling lepas)','Dadu dilempar. Peluang muncul genap atau 5?',['Genap = 3/6, mata 5 = 1/6; keduanya tidak mungkin bersamaan.','3/6 + 1/6 = 4/6 = 2/3.'],'2/3')+
      ex('Contoh 2 (tidak saling lepas)','Dadu dilempar. Peluang muncul genap atau lebih dari 3?',['Genap {2,4,6} = 3/6; lebih dari 3 {4,5,6} = 3/6; irisan {4,6} = 2/6.','3/6 + 3/6 − 2/6 = 4/6 = 2/3.'],'2/3')+
      ex('Contoh 3 (bebas)','Peluang Andi lulus 0,8 dan Budi lulus 0,7 (bebas). Peluang keduanya lulus? Peluang minimal satu lulus?',['Keduanya lulus = 0,8 × 0,7 = 0,56.','Tidak ada yang lulus = 0,2 × 0,3 = 0,06.','Minimal satu lulus = 1 − 0,06 = 0,94.'],'0,56 dan 0,94')+
      ex('Contoh 4 (komplemen)','Tiga koin dilempar. Peluang muncul minimal satu gambar?',['Tidak ada gambar (AAA) = 1/8.','Minimal satu gambar = 1 − 1/8 = 7/8.'],'7/8')+
      note('<b>Kata kunci:</b> "atau" → tambahkan; "dan" → kalikan (jika bebas); "minimal satu" → pakai 1 − komplemen.')},
    {title:'5. Faktorial & Permutasi (Urutan Penting)',html:
      tbl(['Rumus','Keterangan'],[['n! = n × (n−1) × … × 1','5! = 120; 0! = 1'],['nPr = n! / (n − r)!','memilih r dari n dengan urutan penting'],['Unsur sama','n! / (k1! × k2! × …)'],['Permutasi siklis','(n − 1)!  (duduk melingkar)']])+
      ex('Contoh 1 (faktorial)','Hitung 7!/5!.',['7!/5! = (7 × 6 × 5!)/5! = 7 × 6 = 42.'],'42')+
      ex('Contoh 2 (juara)','Dari 8 peserta, dipilih juara 1, 2, dan 3. Berapa susunan juara?',['Urutan penting → 8P3 = 8 × 7 × 6.','= 336.'],'336')+
      ex('Contoh 3 (bilangan)','Dari angka 1, 2, 3, 4, 5 dibuat bilangan 3 angka berbeda. Berapa bilangan semuanya, dan berapa yang genap?',['Semua: 5 × 4 × 3 = 60.','Genap: satuan harus 2 atau 4 (2 pilihan). Ratusan 4 pilihan sisa, puluhan 3 pilihan sisa → 2 × 4 × 3 = 24.','Aturan: isi posisi yang berpembatas dulu (satuan), baru posisi lain.'],'60 bilangan; 24 genap')+
      ex('Contoh 4 (unsur sama)','Berapa susunan huruf berbeda dari kata BANANA?',['Huruf: B(1), A(3), N(2); total 6 huruf.','6! ÷ (3! × 2!) = 720 ÷ 12 = 60.'],'60')+
      ex('Contoh 5 (melingkar)','Enam orang duduk mengelilingi meja bundar. (a) Berapa susunan? (b) Jika dua orang tertentu harus berdampingan?',['(a) (6 − 1)! = 5! = 120.','(b) Gabungkan dua orang jadi satu blok → 5 unit melingkar: (5 − 1)! = 24. Kedua orang dapat bertukar tempat dalam blok: × 2 = 48.'],'(a) 120 (b) 48')},
    {title:'6. Kombinasi (Urutan Tidak Penting)',html:
      note('<b>nCr = n! / (r! × (n − r)!)</b>. Tanya diri: <i>apakah urutan mengubah hasil?</i> Ketua-sekretaris-bendahara = urutan penting (permutasi). Tiga anggota panitia = urutan tidak penting (kombinasi).')+
      ex('Contoh 1','Berapa cara memilih 3 orang dari 8 orang?',['8C3 = (8 × 7 × 6) ÷ (3 × 2 × 1) = 336 ÷ 6 = 56.'],'56 cara')+
      ex('Contoh 2 (panitia)','Dari 6 pria dan 5 wanita dipilih 4 orang panitia. Berapa cara: (a) bebas, (b) 2 pria dan 2 wanita, (c) minimal 1 wanita?',['(a) 11C4 = 330.','(b) 6C2 × 5C2 = 15 × 10 = 150.','(c) Komplemen: semua pria = 6C4 = 15 → 330 − 15 = 315.'],'(a) 330 (b) 150 (c) 315')+
      ex('Contoh 3 (jabat tangan)','Sepuluh orang saling berjabat tangan sekali dengan tiap orang lain. Berapa jabat tangan?',['Setiap jabat tangan = 2 orang tanpa urutan → 10C2 = (10 × 9) ÷ 2 = 45.'],'45')+
      ex('Contoh 4 (diagonal)','Banyak diagonal segi-8?',['Garis antar dua titik = 8C2 = 28.','Dikurangi 8 sisi → 28 − 8 = 20.'],'20 diagonal')+
      ex('Contoh 5 (peluang & kombinasi)','Dari 6 pria dan 4 wanita dipilih 3 orang acak. Peluang terpilih 2 pria dan 1 wanita?',['Semua kemungkinan = 10C3 = 120.','Kejadian = 6C2 × 4C1 = 15 × 4 = 60.','P = 60/120 = 1/2.'],'1/2')+
      note('<b>Kesalahan umum:</b> memakai permutasi pada soal panitia/jabat tangan (hasil terlalu besar 2× atau 6×). Cek: jika menukar dua orang tidak mengubah hasil, pakai kombinasi.')}
    ],tips:['Venn: gambar dulu dari irisan ke luar, isi angka yang "hanya".','Peluang: tentukan n(S) dulu. "Minimal satu" hampir selalu 1 − komplemen.','Urutan penting → permutasi; urutan tidak penting → kombinasi.']};

  window.__TIUK=(window.__TIUK||[]).concat([cerita,himp]);
})();
(function(){
/* helper (struktur sama dengan materi_extra2) — konten di bawah dihasilkan dan diverifikasi dengan kode */
var tbl=function(h,r){return '<table class="table table-sm"><thead><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead><tbody>'+r.map(function(a){return '<tr>'+a.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>'};
var ul=function(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'};
var note=function(t){return '<div class="callout">'+t+'</div>'};
var ex=function(j,s,l,a){return '<div class="callout"><b>'+j+'</b><br>'+s+'<ol>'+l.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ol><b>Jawaban: '+a+'</b></div>'};
/* tbl/ul/note/ex dipakai saat pembuatan; HTML di bawah sudah jadi. */
window.__TIUK=(window.__TIUK||[]).concat([{"id":"tiu-k-deret","group":"TIU","title":"Deret Angka: Semua Pola Baku (Kelas Intensif + Contoh Langkah)","summary":"12 pola deret angka dengan 2–5 contoh bertahap per pola: aritmetika, geometri, selisih bertingkat, Fibonacci, kuadrat/kubik, prima, ×a±b, selang-seling, operasi bergantian, jumlah digit, pecahan/desimal.","buckets":["SKD_TIU"],"subs":["Numerik - Deret Angka"],"sections":[{"title":"Urutan Cek Pola (Hafalkan!)","html":"<div class=\"callout\"><b>Urutan 4 langkah, ±10 detik:</b> ① hitung <b>selisih</b> antar suku → ② kalau tidak tetap, hitung <b>rasio</b> (bagi) → ③ kalau selisih tidak tetap, hitung <b>selisih dari selisih</b> → ④ kalau masih kacau, curigai <b>dua deret selang-seling</b> atau <b>operasi bergantian</b>.</div><table class=\"table table-sm\"><thead><tr><th>Gejala</th><th>Dugaan pola</th></tr></thead><tbody><tr><td>Selisih sama</td><td>Aritmetika (+/− tetap)</td></tr><tr><td>Rasio sama</td><td>Geometri (× / ÷ tetap)</td></tr><tr><td>Selisih membesar/mengecil teratur</td><td>Selisih bertingkat (selisih ke-2 tetap)</td></tr><tr><td>Suku ≈ jumlah dua suku sebelumnya</td><td>Fibonacci / Lucas</td></tr><tr><td>Suku mirip 1,4,9,16 / 1,8,27 / 2,4,8</td><td>Kuadrat / kubik / pangkat 2</td></tr><tr><td>Suku-suku ganjil &amp; genap berperilaku beda</td><td>Dua deret selang-seling</td></tr><tr><td>Naik turun bergantian</td><td>Operasi bergantian (mis. ×2 lalu +2)</td></tr></tbody></table><p><b>Kesalahan umum:</b> langsung mencoba \"×2\" tanpa menghitung selisih dahulu; lupa bahwa jawaban harus diuji ke <i>semua</i> suku yang diberikan, bukan hanya dua suku pertama.</p>"},{"title":"1. Deret Aritmetika (selisih tetap)","html":"<p><b>Rumus:</b> Un = a + (n − 1)·b, dengan a suku pertama dan b beda. Suku berikutnya = suku terakhir + b.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Lanjutkan: 7, 12, 17, 22, 27, ...?<ol><li>Selisih: 5, 5, 5, 5 → semuanya +5</li><li>Suku berikutnya = 27 + 5 = 32</li></ol><b>Jawaban: 32</b></div><div class=\"callout\"><b>Contoh 2 (turun)</b><br>Lanjutkan: 100, 93, 86, 79, 72, ...?<ol><li>Selisih: -7, -7, -7, -7 → tetap -7</li><li>Suku berikutnya = 72 -7 = 65</li></ol><b>Jawaban: 65</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS: suku ke-n)</b><br>Pada deret 3, 8, 13, 18, 23, ..., berapa suku ke-8?<ol><li>Selisih tetap +5, a = 3</li><li>U8 = a + (8 − 1)·5 = 3 + 35 = 38</li><li>Cek: 3, 8, 13, 18, 23, 28, 33, 38</li></ol><b>Jawaban: 38</b></div><p><b>Cara cepat:</b> kalau diminta suku jauh (mis. ke-20), langsung pakai rumus, jangan ditulis satu per satu.</p>"},{"title":"2. Deret Geometri (rasio tetap)","html":"<p><b>Rumus:</b> Un = a · r^(n−1). Rasio r = suku ke-2 ÷ suku ke-1. Ciri: angka melonjak (atau mengecil) cepat.</p><div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Lanjutkan: 2, 6, 18, 54, ...?<ol><li>Rasio: 3, 3, 3 → ×3</li><li>Suku berikutnya = 54 × 3 = 162</li></ol><b>Jawaban: 162</b></div><div class=\"callout\"><b>Contoh 2 (mengecil)</b><br>Lanjutkan: 800, 400, 200, 100, ...?<ol><li>Rasio: 0.5, 0.5, 0.5 → ×1/2 (dibagi 2)</li><li>Suku berikutnya = 100 ÷ 2 = 50</li></ol><b>Jawaban: 50</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Lanjutkan: 3, 12, 48, 192, ...?<ol><li>Rasio: 4, 4, 4 → ×4</li><li>Suku berikutnya = 192 × 4 = 768</li></ol><b>Jawaban: 768</b></div><p><b>Kesalahan umum:</b> memakai selisih untuk deret geometri. Tanda: selisih ikut membesar (4, 12, 36, 108) padahal rasio tetap.</p>"},{"title":"3. Selisih Bertingkat (2 tingkat dan 3 tingkat)","html":"<p>Bila selisih tidak tetap, hitung selisih dari selisih. Kalau tingkat ke-2 tetap → <b>2 tingkat</b>; kalau baru tetap di tingkat ke-3 → <b>3 tingkat</b>. Lanjutkan dari bawah ke atas.</p><div class=\"callout\"><b>Contoh 1 (2 tingkat)</b><br>Lanjutkan: 2, 5, 10, 17, 26, ...?<ol><li>Selisih tingkat 1: 3, 5, 7, 9 → tidak tetap</li><li>Selisih tingkat 2: 2, 2, 2 → tetap +2</li><li>Selisih berikutnya = 9 + 2 = 11</li><li>Suku berikutnya = 26 + 11 = 37</li></ol><b>Jawaban: 37</b></div><div class=\"callout\"><b>Contoh 2 (2 tingkat, mulai kecil)</b><br>Lanjutkan: 4, 5, 8, 13, 20, ...?<ol><li>Tingkat 1: 1, 3, 5, 7</li><li>Tingkat 2: 2, 2, 2 → tetap +2</li><li>Selisih berikutnya = 7 + 2 = 9; suku = 20 + 9 = 29</li></ol><b>Jawaban: 29</b></div><div class=\"callout\"><b>Contoh 3 (3 tingkat, gaya CPNS)</b><br>Lanjutkan: 1, 3, 8, 18, 35, ...?<ol><li>Tingkat 1: 2, 5, 10, 17</li><li>Tingkat 2: 3, 5, 7</li><li>Tingkat 3: 2, 2 → tetap +2</li><li>Mundur: tingkat 2 berikutnya = 7 + 2 = 9; tingkat 1 berikutnya = 17 + 9 = 26</li><li>Suku berikutnya = 35 + 26 = 61</li></ol><b>Jawaban: 61</b></div><p><b>Kesalahan umum:</b> berhenti di tingkat 1 lalu menebak. Bila di tingkat 2 masih berubah, turun satu tingkat lagi.</p>"},{"title":"4. Selisih Berpola (berurutan, genap, ganjil, kuadrat)","html":"<table class=\"table table-sm\"><thead><tr><th>Pola selisih</th><th>Contoh selisih</th><th>Arti</th></tr></thead><tbody><tr><td>Bilangan asli</td><td>1, 2, 3, 4, ...</td><td>tambah 1 tiap langkah</td></tr><tr><td>Genap</td><td>2, 4, 6, 8, ...</td><td>tambah 2</td></tr><tr><td>Ganjil</td><td>1, 3, 5, 7, ...</td><td>tambah 2 (mulai 1)</td></tr><tr><td>Kuadrat</td><td>1, 4, 9, 16, 25, ...</td><td>kuadrat bilangan asli</td></tr></tbody></table><div class=\"callout\"><b>Contoh 1 (selisih 1,2,3,...)</b><br>Lanjutkan: 1, 2, 4, 7, 11, 16, ...?<ol><li>Selisih: 1, 2, 3, 4, 5 → 1, 2, 3, 4, 5</li><li>Selisih berikutnya = 6</li><li>Suku = 16 + 6 = 22</li></ol><b>Jawaban: 22</b></div><div class=\"callout\"><b>Contoh 2 (selisih genap)</b><br>Lanjutkan: 3, 5, 9, 15, 23, ...?<ol><li>Selisih: 2, 4, 6, 8 → 2, 4, 6, 8</li><li>Selisih berikutnya = 10</li><li>Suku = 23 + 10 = 33</li></ol><b>Jawaban: 33</b></div><div class=\"callout\"><b>Contoh 3 (selisih kuadrat, gaya CPNS)</b><br>Lanjutkan: 1, 2, 6, 15, 31, ...?<ol><li>Selisih: 1, 4, 9, 16 → 1², 2², 3², 4²</li><li>Selisih berikutnya = 5² = 25</li><li>Suku = 31 + 25 = 56</li></ol><b>Jawaban: 56</b></div><div class=\"callout\"><b>Contoh 4 (selisih ganjil)</b><br>Lanjutkan: 5, 6, 9, 14, 21, ...?<ol><li>Selisih: 1, 3, 5, 7 → 1, 3, 5, 7</li><li>Selisih berikutnya = 9</li><li>Suku = 21 + 9 = 30</li></ol><b>Jawaban: 30</b></div>"},{"title":"5. Fibonacci dan Variannya","html":"<p><b>Ciri:</b> mulai suku ke-3, setiap suku = jumlah dua suku sebelumnya. Varian: Lucas (mulai 1,3), mulai angka lain, atau <b>tribonacci</b> (jumlah tiga suku sebelumnya).</p><div class=\"callout\"><b>Contoh 1 (Fibonacci murni)</b><br>Lanjutkan: 1, 1, 2, 3, 5, 8, ...?<ol><li>Cek: 1+1 = 2; 1+2 = 3; 2+3 = 5; 3+5 = 8</li><li>Suku berikutnya = 5 + 8 = 13</li></ol><b>Jawaban: 13</b></div><div class=\"callout\"><b>Contoh 2 (Lucas)</b><br>Lanjutkan: 1, 3, 4, 7, 11, ...?<ol><li>Cek: 1+3 = 4; 3+4 = 7; 4+7 = 11</li><li>Suku berikutnya = 7 + 11 = 18</li></ol><b>Jawaban: 18</b></div><div class=\"callout\"><b>Contoh 3 (varian awal berbeda)</b><br>Lanjutkan: 2, 2, 4, 6, 10, ...?<ol><li>Cek: 2+2 = 4; 2+4 = 6; 4+6 = 10</li><li>Suku berikutnya = 6 + 10 = 16</li></ol><b>Jawaban: 16</b></div><div class=\"callout\"><b>Contoh 4 (tribonacci, gaya CPNS)</b><br>Lanjutkan: 1, 2, 4, 7, 13, 24, ...?<ol><li>Cek jumlah tiga suku: 1+2+4 = 7; 2+4+7 = 13; 4+7+13 = 24</li><li>Suku berikutnya = 7 + 13 + 24 = 44</li></ol><b>Jawaban: 44</b></div><p><b>Cara cepat:</b> kalau selisihnya mirip deret itu sendiri (1,1,2,3,5), langsung curigai Fibonacci.</p>"},{"title":"6. Kuadrat, Kubik, Pangkat 2, dan n² ± k","html":"<table class=\"table table-sm\"><thead><tr><th>Bentuk</th><th>Suku-suku</th></tr></thead><tbody><tr><td>n²</td><td>1, 4, 9, 16, 25, 36, 49, 64, 81, 100</td></tr><tr><td>n³</td><td>1, 8, 27, 64, 125, 216</td></tr><tr><td>2ⁿ</td><td>2, 4, 8, 16, 32, 64, 128</td></tr><tr><td>n² − 1</td><td>0, 3, 8, 15, 24, 35, 48</td></tr><tr><td>n(n+1)</td><td>2, 6, 12, 20, 30, 42</td></tr></tbody></table><div class=\"callout\"><b>Contoh 1 (kuadrat)</b><br>Lanjutkan: 1, 4, 9, 16, 25, ...?<ol><li>Suku = 1², 2², 3², 4², 5²</li><li>Berikutnya = 6² = 36</li></ol><b>Jawaban: 36</b></div><div class=\"callout\"><b>Contoh 2 (kubik)</b><br>Lanjutkan: 1, 8, 27, 64, ...?<ol><li>Suku = 1³, 2³, 3³, 4³</li><li>Berikutnya = 5³ = 125</li></ol><b>Jawaban: 125</b></div><div class=\"callout\"><b>Contoh 3 (n² − 1)</b><br>Lanjutkan: 3, 8, 15, 24, 35, ...?<ol><li>Bandingkan dengan kuadrat: 4, 9, 16, 25, 36 → selalu kurang 1</li><li>Suku = n² − 1; n = 7 → 49 − 1 = 48</li></ol><b>Jawaban: 48</b></div><div class=\"callout\"><b>Contoh 4 (n(n+1), gaya CPNS)</b><br>Lanjutkan: 2, 6, 12, 20, 30, ...?<ol><li>Tulis: 1×2, 2×3, 3×4, 4×5, 5×6</li><li>Berikutnya = 6 × 7 = 42</li></ol><b>Jawaban: 42</b></div>"},{"title":"7. Bilangan Prima","html":"<p><b>Hafal prima sampai 50:</b> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. Ciri deret prima: selisih tidak teratur (1, 2, 2, 4, 2, 4, 2, 4, 6, ...).</p><div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: 3, 5, 7, 11, 13, ...?<ol><li>Semua angka prima berurutan (3, 5, 7, 11, 13)</li><li>Prima setelah 13 = 17</li></ol><b>Jawaban: 17</b></div><div class=\"callout\"><b>Contoh 2 (prima + 1, gaya CPNS)</b><br>Lanjutkan: 3, 4, 6, 8, 12, 14, ...?<ol><li>Kurangi 1 tiap suku: 2, 3, 5, 7, 11, 13 → bilangan prima</li><li>Prima berikutnya = 17, maka suku = 17 + 1 = 18</li></ol><b>Jawaban: 18</b></div><div class=\"callout\"><b>Contoh 3 (prima ×2)</b><br>Lanjutkan: 4, 6, 10, 14, 22, ...?<ol><li>Bagi 2: 2, 3, 5, 7, 11 → prima</li><li>Prima berikutnya = 13, maka suku = 13 × 2 = 26</li></ol><b>Jawaban: 26</b></div>"},{"title":"8. Pola ×a ± b (ganda: kali lalu tambah/kurang)","html":"<p><b>Ciri:</b> rasio hampir tetap tetapi tidak persis, selisih ikut membesar. Uji: suku berikutnya = suku × a + b. Cari a dari rasio mendekati, lalu b dari sisa.</p><div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: 2, 5, 11, 23, 47, ...?<ol><li>Rasio kira-kira ×2; cek 2×2 = 4 (kurang 1 dari 5) → ×2 + 1</li><li>Uji: 5×2+1 = 11; 11×2+1 = 23; 23×2+1 = 47</li><li>Berikutnya = 47×2+1 = 95</li></ol><b>Jawaban: 95</b></div><div class=\"callout\"><b>Contoh 2 (×3 + 1)</b><br>Lanjutkan: 3, 10, 31, 94, ...?<ol><li>3×3 = 9, suku berikut 10 → ×3 + 1</li><li>Uji: 10×3+1 = 31; 31×3+1 = 94</li><li>Berikutnya = 94×3+1 = 283</li></ol><b>Jawaban: 283</b></div><div class=\"callout\"><b>Contoh 3 (×2 − 1)</b><br>Lanjutkan: 3, 5, 9, 17, 33, ...?<ol><li>3×2 = 6, suku berikut 5 → ×2 − 1</li><li>Uji: 5×2−1 = 9; 9×2−1 = 17; 17×2−1 = 33</li><li>Berikutnya = 33×2−1 = 65</li></ol><b>Jawaban: 65</b></div><div class=\"callout\"><b>Contoh 4 (×3 − 1, gaya CPNS)</b><br>Lanjutkan: 5, 14, 41, 122, ...?<ol><li>5×3 = 15, suku berikut 14 → ×3 − 1</li><li>Uji: 14×3−1 = 41; 41×3−1 = 122</li><li>Berikutnya = 122×3−1 = 365</li></ol><b>Jawaban: 365</b></div>"},{"title":"9. Dua Deret Selang-seling","html":"<p><b>Ciri:</b> angka naik-turun atau loncat besar-kecil. Pisahkan suku ke-1,3,5,... (deret ganjil) dan suku ke-2,4,6,... (deret genap), lalu analisis masing-masing. Tentukan dulu suku yang ditanya jatuh di posisi ganjil atau genap.</p><div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: 2, 10, 4, 20, 8, 40, ...?<ol><li>Posisi ganjil: 2, 4, 8, ... → ×2</li><li>Posisi genap: 10, 20, 40, ... → ×2</li><li>Suku ke-7 (ganjil) = 8 × 2 = 16</li></ol><b>Jawaban: 16</b></div><div class=\"callout\"><b>Contoh 2 (dua pola berbeda)</b><br>Lanjutkan: 5, 3, 7, 6, 9, 9, 11, ...?<ol><li>Posisi ganjil: 5, 7, 9, 11 → +2</li><li>Posisi genap: 3, 6, 9 → +3</li><li>Suku ke-8 (genap) = 9 + 3 = 12</li></ol><b>Jawaban: 12</b></div><div class=\"callout\"><b>Contoh 3 (naik dan turun, gaya CPNS)</b><br>Lanjutkan: 1, 100, 3, 90, 5, 80, 7, ...?<ol><li>Posisi ganjil: 1, 3, 5, 7 → +2</li><li>Posisi genap: 100, 90, 80 → −10</li><li>Suku ke-8 (genap) = 80 − 10 = 70</li></ol><b>Jawaban: 70</b></div><p><b>Kesalahan umum:</b> menjawab dengan melanjutkan deret ganjil padahal yang ditanya posisi genap. Hitung nomor posisi dulu.</p>"},{"title":"10. Operasi Bergantian (×, + berselang)","html":"<p><b>Ciri:</b> kenaikan besar lalu kecil secara bergantian. Cari operasi untuk langkah 1, 2, 3, ... dan lihat apakah berulang tiap dua langkah.</p><div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: 3, 6, 8, 16, 18, 36, 38, ...?<ol><li>3→6: ×2; 6→8: +2; 8→16: ×2; 16→18: +2</li><li>Pola ×2, +2 berulang; setelah 38 giliran ×2</li><li>Suku = 38 × 2 = 76</li></ol><b>Jawaban: 76</b></div><div class=\"callout\"><b>Contoh 2 (×2 lalu −2)</b><br>Lanjutkan: 5, 10, 8, 16, 14, 28, ...?<ol><li>5→10: ×2; 10→8: −2; 8→16: ×2; 16→14: −2; 14→28: ×2</li><li>Giliran berikutnya −2</li><li>Suku = 28 − 2 = 26</li></ol><b>Jawaban: 26</b></div><div class=\"callout\"><b>Contoh 3 (+1 lalu ×2, gaya CPNS)</b><br>Lanjutkan: 2, 3, 6, 7, 14, 15, 30, ...?<ol><li>2→3: +1; 3→6: ×2; 6→7: +1; 7→14: ×2; 14→15: +1; 15→30: ×2</li><li>Giliran berikutnya +1</li><li>Suku = 30 + 1 = 31</li></ol><b>Jawaban: 31</b></div>"},{"title":"11. Pola Angka dan Jumlah Digit","html":"<div class=\"callout\"><b>Contoh 1 (jumlah digit tetap)</b><br>Lanjutkan: 19, 28, 37, 46, ...?<ol><li>Selisih tetap +9 (angka puluhan naik 1, satuan turun 1)</li><li>Suku = 46 + 9 = 55 (jumlah digit tetap 10)</li></ol><b>Jawaban: 55</b></div><div class=\"callout\"><b>Contoh 2 (berpola urutan angka)</b><br>Lanjutkan: 123, 234, 345, 456, ...?<ol><li>Tiap suku adalah tiga angka berurutan; geser satu angka tiap langkah</li><li>Suku berikutnya = 567</li></ol><b>Jawaban: 567</b></div><div class=\"callout\"><b>Contoh 3 (suku + jumlah digitnya, gaya CPNS)</b><br>Lanjutkan: 1, 2, 4, 8, 16, 23, 28, 38, 49, ...?<ol><li>Uji: 16 + (1+6) = 23; 23 + (2+3) = 28; 28 + (2+8) = 38; 38 + (3+8) = 49</li><li>Aturan: suku berikutnya = suku + jumlah digit suku itu</li><li>Suku = 49 + (4+9) = 62</li></ol><b>Jawaban: 62</b></div><div class=\"callout\"><b>Contoh 4 (menempel angka)</b><br>Lanjutkan: 1, 12, 123, 1234, ...?<ol><li>Setiap suku menambah angka berikutnya di belakang</li><li>Suku berikutnya = 12345</li></ol><b>Jawaban: 12345</b></div>"},{"title":"12. Deret Pecahan dan Desimal","html":"<p><b>Cara:</b> analisis pembilang dan penyebut <b>terpisah</b>, atau ubah semua ke desimal dulu. Desimal diperlakukan seperti deret aritmetika/geometri biasa.</p><div class=\"callout\"><b>Contoh 1 (pembilang dan penyebut naik)</b><br>Lanjutkan: 1/2, 2/3, 3/4, 4/5, ...?<ol><li>Pembilang: 1, 2, 3, 4 → +1; penyebut: 2, 3, 4, 5 → +1</li><li>Berikutnya = 5/6</li></ol><b>Jawaban: 5/6</b></div><div class=\"callout\"><b>Contoh 2 (pembilang ganjil)</b><br>Lanjutkan: 1/2, 3/4, 5/6, 7/8, ...?<ol><li>Pembilang: 1, 3, 5, 7 → +2; penyebut: 2, 4, 6, 8 → +2</li><li>Berikutnya = 9/10</li></ol><b>Jawaban: 9/10</b></div><div class=\"callout\"><b>Contoh 3 (geometri pecahan)</b><br>Lanjutkan: 1/2, 1/4, 1/8, 1/16, ...?<ol><li>Penyebut ×2 tiap langkah (2, 4, 8, 16)</li><li>Berikutnya = 1/32</li></ol><b>Jawaban: 1/32</b></div><div class=\"callout\"><b>Contoh 4 (desimal geometri)</b><br>Lanjutkan: 0,2; 0,4; 0,8; 1,6; ...?<ol><li>Rasio tetap ×2</li><li>Berikutnya = 1,6 × 2 = 3,2</li></ol><b>Jawaban: 3,2</b></div><div class=\"callout\"><b>Contoh 5 (desimal aritmetika)</b><br>Lanjutkan: 0,5; 1,0; 1,5; 2,0; ...?<ol><li>Selisih tetap +0,5</li><li>Berikutnya = 2,0 + 0,5 = 2,5</li></ol><b>Jawaban: 2,5</b></div>"},{"title":"Latihan Mandiri (kunci di bawah)","html":"<div class=\"callout\">Kerjakan tanpa melihat jawaban, tulis polanya dulu:</div><ul><li>2, 6, 18, 54, ...?</li><li>4, 9, 16, 25, ...?</li><li>1, 2, 4, 7, 11, ...?</li><li>5, 7, 10, 14, 19, ...?</li><li>3, 4, 7, 11, 18, ...?</li><li>2, 5, 11, 23, ...?</li><li>10, 3, 20, 6, 40, 12, ...?</li></ul><p><b>Kunci:</b> (1) 162 (×3); (2) 36 (n², berikutnya 6²); (3) 16 (selisih 1,2,3,4,5 → 11+5); (4) 25 (selisih 2,3,4,5,6 → 19+6); (5) 29 (Lucas: 11+18); (6) 47 (×2+1); (7) 80 (posisi ganjil 10, 20, 40 → ×2; posisi genap 3, 6, 12 → ×2; suku ke-7 = 40 × 2 = 80).</p>"}],"tips":["Urutan cek: selisih → rasio → selisih ke-2 → selang-seling.","Selalu uji pola pada SEMUA suku yang diberikan.","Hafal: kuadrat sampai 20², kubik sampai 10³, prima sampai 50."]},{"id":"tiu-k-huruf","group":"TIU","title":"Deret Huruf & Pasangan Huruf (Kelas Intensif + Contoh Langkah)","summary":"Tabel posisi huruf, loncat tetap/bertingkat, selang-seling, mundur, siklus melewati Z, pasangan huruf, huruf+angka, lengkap dengan contoh bertahap.","buckets":["SKD_TIU"],"subs":["Numerik - Deret Huruf"],"sections":[{"title":"Tabel Posisi Huruf (Hafalkan!)","html":"<table class=\"table table-sm\"><thead><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th><th>J</th><th>K</th><th>L</th><th>M</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr></tbody></table><table class=\"table table-sm\"><thead><tr><th>N</th><th>O</th><th>P</th><th>Q</th><th>R</th><th>S</th><th>T</th><th>U</th><th>V</th><th>W</th><th>X</th><th>Y</th><th>Z</th></tr></thead><tbody><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr></tbody></table><ul><li><b>26 huruf</b>: A=1 … Z=26 (bukan 27). Sesudah Z kembali ke A (siklus: nomor 27 = A, 28 = B, ...).</li><li>Jangkar hafalan: <b>E=5, J=10, O=15, T=20, Y=25</b> (EJOTY).</li><li>Pasangan cermin: A↔Z, B↔Y, C↔X, ... jumlah posisi selalu 27 (mis. D=4 ↔ W=23).</li><li>Aturan siklus: nomor = ((n − 1) mod 26) + 1. Contoh W(23) + 5 = 28 → 28 − 26 = 2 = B.</li></ul><div class=\"callout\"><b>Urutan cek:</b> ubah ke angka → cari selisih (seperti deret angka) → ubah balik ke huruf. Kalau tidak ketemu, pisahkan deret selang-seling.</div>"},{"title":"1. Loncat Tetap (maju atau mundur)","html":"<div class=\"callout\"><b>Contoh 1 (mudah)</b><br>Lanjutkan: A, C, E, G, ...?<ol><li>Angka: 1, 3, 5, 7 → loncat +2</li><li>Berikutnya = 9 = I</li></ol><b>Jawaban: I</b></div><div class=\"callout\"><b>Contoh 2 (+3)</b><br>Lanjutkan: B, E, H, K, ...?<ol><li>Angka: 2, 5, 8, 11 → +3</li><li>Berikutnya = 14 = N</li></ol><b>Jawaban: N</b></div><div class=\"callout\"><b>Contoh 3 (mundur)</b><br>Lanjutkan: Z, W, T, Q, ...?<ol><li>Angka: 26, 23, 20, 17 → −3</li><li>Berikutnya = 14 = N</li></ol><b>Jawaban: N</b></div>"},{"title":"2. Loncat Bertingkat (jarak membesar)","html":"<p>Jarak antar huruf naik 1, 2, 3, ... Hitung jarak dulu, bukan menebak huruf berikutnya.</p><div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: A, B, D, G, K, ...?<ol><li>Angka: 1, 2, 4, 7, 11 → jarak 1, 2, 3, 4</li><li>Jarak berikutnya = 5; 11 + 5 = 16 = P</li></ol><b>Jawaban: P</b></div><div class=\"callout\"><b>Contoh 2</b><br>Lanjutkan: C, D, F, I, M, ...?<ol><li>Angka: 3, 4, 6, 9, 13 → jarak 1, 2, 3, 4</li><li>13 + 5 = 18 = R</li></ol><b>Jawaban: R</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>Lanjutkan: B, C, E, H, L, Q, ...?<ol><li>Angka: 2, 3, 5, 8, 12, 17 → jarak 1, 2, 3, 4, 5</li><li>Jarak berikutnya = 6; 17 + 6 = 23 = W</li></ol><b>Jawaban: W</b></div>"},{"title":"3. Dua Deret Selang-seling (huruf ganjil &amp; genap)","html":"<div class=\"callout\"><b>Contoh 1 (A–Z cermin)</b><br>Lanjutkan: A, Z, C, X, E, V, ...?<ol><li>Posisi ganjil: A, C, E → loncat +2 (berikutnya G)</li><li>Posisi genap: Z, X, V → loncat −2 (berikutnya T)</li><li>Suku ke-7 (ganjil) = G</li></ol><b>Jawaban: G</b></div><div class=\"callout\"><b>Contoh 2</b><br>Lanjutkan: B, Y, D, W, F, U, ...?<ol><li>Ganjil: B, D, F → +2; genap: Y, W, U → −2</li><li>Suku ke-7 = ganjil → H</li></ol><b>Jawaban: H</b></div><div class=\"callout\"><b>Contoh 3 (huruf bertemu angka)</b><br>Lanjutkan: A, 2, C, 4, E, 6, ...?<ol><li>Huruf (posisi ganjil): A, C, E → +2 → G</li><li>Angka (posisi genap): 2, 4, 6 → +2</li><li>Suku ke-7 ganjil → G</li></ol><b>Jawaban: G</b></div><div class=\"callout\"><b>Contoh 4 (huruf + angka ×2)</b><br>Lanjutkan: B, 4, D, 8, F, 16, ...?<ol><li>Huruf: B, D, F → +2 → H</li><li>Angka: 4, 8, 16 → ×2 (berikutnya 32)</li><li>Suku ke-7 ganjil → H</li></ol><b>Jawaban: H</b></div>"},{"title":"4. Deret Mundur","html":"<div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: Z, X, V, T, ...?<ol><li>Angka: 26, 24, 22, 20 → −2</li><li>20 − 2 = 18 = R</li></ol><b>Jawaban: R</b></div><div class=\"callout\"><b>Contoh 2 (−3)</b><br>Lanjutkan: Y, V, S, P, ...?<ol><li>Angka: 25, 22, 19, 16 → −3</li><li>16 − 3 = 13 = M</li></ol><b>Jawaban: M</b></div><div class=\"callout\"><b>Contoh 3 (mundur melewati A)</b><br>Lanjutkan: D, B, Z, X, ...?<ol><li>Angka: 4, 2, 0 (=26, Z), −2 (=24, X)</li><li>Loncat −2; berikutnya 24 − 2 = 22 = V</li></ol><b>Jawaban: V</b></div>"},{"title":"5. Siklus Melewati Z (kembali ke A)","html":"<p><b>Rumus:</b> bila jumlah &gt; 26, kurangi 26. Contoh: W (23) + 5 = 28 → 28 − 26 = 2 → B.</p><div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: W, Y, A, C, ...?<ol><li>Angka: 23, 25, 27, 29 → +2</li><li>27 = A, 29 = C (dikurangi 26)</li><li>Berikutnya 31 − 26 = 5 = E</li></ol><b>Jawaban: E</b></div><div class=\"callout\"><b>Contoh 2</b><br>Lanjutkan: Y, B, E, H, ...?<ol><li>Angka: 25, 28→2, 31→5, 34→8 → +3</li><li>Berikutnya 37 − 26 = 11 = K</li></ol><b>Jawaban: K</b></div>"},{"title":"6. Pasangan dan Kelompok Huruf","html":"<p>Tulis tiap pasangan sebagai angka, lalu analisis <b>huruf pertama</b> dan <b>huruf kedua</b> sebagai dua deret terpisah.</p><div class=\"callout\"><b>Contoh 1</b><br>Lanjutkan: AB, CD, EF, GH, ...?<ol><li>Huruf pertama: A, C, E, G → +2 (berikutnya I)</li><li>Huruf kedua: B, D, F, H → +2 (berikutnya J)</li></ol><b>Jawaban: IJ</b></div><div class=\"callout\"><b>Contoh 2 (cermin)</b><br>Lanjutkan: AZ, BY, CX, DW, ...?<ol><li>Huruf pertama naik: A, B, C, D → E</li><li>Huruf kedua turun: Z, Y, X, W → V</li></ol><b>Jawaban: EV</b></div><div class=\"callout\"><b>Contoh 3 (loncat 4)</b><br>Lanjutkan: BD, FH, JL, NP, ...?<ol><li>Pertama: 2, 6, 10, 14 → +4 (berikutnya 18 = R)</li><li>Kedua: 4, 8, 12, 16 → +4 (berikutnya 20 = T)</li></ol><b>Jawaban: RT</b></div><div class=\"callout\"><b>Contoh 4 (tiga huruf, gaya CPNS)</b><br>Lanjutkan: ABD, BCE, CDF, ...?<ol><li>Setiap huruf maju +1 tiap langkah</li><li>ABD → BCE → CDF → DEG</li></ol><b>Jawaban: DEG</b></div><div class=\"callout\"><b>Contoh 5 (tiga huruf, beda tetap)</b><br>Lanjutkan: ACE, BDF, CEG, ...?<ol><li>Tiap kelompok naik +1; dalam kelompok loncat +2</li><li>Berikutnya: DFH</li></ol><b>Jawaban: DFH</b></div>"},{"title":"7. Huruf + Angka","html":"<div class=\"callout\"><b>Contoh 1 (angka = kuadrat posisi)</b><br>Lanjutkan: A1, B4, C9, D16, ...?<ol><li>Angka: 1, 4, 9, 16 → kuadrat 1², 2², 3², 4²</li><li>E (posisi 5) → 5² = 25</li></ol><b>Jawaban: E25</b></div><div class=\"callout\"><b>Contoh 2 (angka = 2 × posisi)</b><br>Lanjutkan: A2, C6, E10, G14, ...?<ol><li>Posisi huruf: 1, 3, 5, 7 → angka 2, 6, 10, 14 = 2 × posisi</li><li>Huruf berikutnya I (9) → 18</li></ol><b>Jawaban: I18</b></div><div class=\"callout\"><b>Contoh 3 (angka + huruf)</b><br>Lanjutkan: 2B, 4D, 6F, 8H, ...?<ol><li>Angka: 2, 4, 6, 8 → +2 → 10</li><li>Huruf: B, D, F, H → +2 → J</li></ol><b>Jawaban: 10J</b></div>"},{"title":"Latihan Mandiri (kunci di bawah)","html":"<div class=\"callout\">Kerjakan tanpa melihat kunci:</div><ul><li>C, F, I, L, ...?</li><li>B, C, E, H, L, ...?</li><li>X, V, T, R, ...?</li><li>A, Y, C, W, E, U, ...?</li><li>AC, BD, CE, ...?</li><li>U, W, Y, A, ...?</li></ul><p><b>Kunci:</b> (1) O (+3); (2) Q (jarak 1,2,3,4,5 → 12 + 5 = 17); (3) P (−2); (4) G (ganjil +2); (5) DF; (6) C (21, 23, 25, 27→A, berikutnya 29→C).</p>"}],"tips":["Selalu ubah huruf ke angka (A=1…Z=26).","Hafal jangkar E=5, J=10, O=15, T=20, Y=25.","Sesudah Z kembali ke A: kurangi 26."]},{"id":"tiu-k-kuant","group":"TIU","title":"Perbandingan Kuantitatif (X vs Y): Strategi + Contoh Langkah","summary":"Hitung langsung, persen berbalik, kali silang pecahan, identitas kuadrat, uji nilai khusus untuk \"tidak dapat ditentukan\", diskon bertingkat, dengan contoh bertahap.","buckets":["SKD_TIU"],"subs":["Numerik - Perbandingan Kuantitatif"],"sections":[{"title":"Aturan Main & Urutan Strategi","html":"<table class=\"table table-sm\"><thead><tr><th>Opsi</th><th>Arti</th></tr></thead><tbody><tr><td>X &gt; Y</td><td>X selalu lebih besar</td></tr><tr><td>X &lt; Y</td><td>X selalu lebih kecil</td></tr><tr><td>X = Y</td><td>Nilainya sama</td></tr><tr><td>Hubungan tidak dapat ditentukan</td><td>Hasil bergantung pada nilai variabel (bisa &gt;, &lt;, atau =)</td></tr></tbody></table><div class=\"callout\"><b>Urutan strategi:</b> ① angka konkret → <b>hitung langsung</b> keduanya; ② ada bagian sama → <b>coret</b> dulu; ③ pecahan → <b>kali silang</b>; ④ persen → ubah ke pecahan/dalam bentuk \"a% dari b = b% dari a\"; ⑤ ada <b>variabel</b> → uji nilai khusus (positif besar, 1, 0, 0,5, negatif). Jika hasil berbeda → \"tidak dapat ditentukan\".</div><p><b>Kesalahan umum:</b> menjawab \"tidak dapat ditentukan\" padahal semua angka diketahui (jika semua konkret, jawabannya PASTI &gt;, &lt;, atau =). Sebaliknya, hanya menguji satu nilai variabel lalu memutuskan.</p>"},{"title":"1. Hitung Langsung (angka konkret)","html":"<div class=\"callout\"><b>Contoh 1</b><br>X = 15% dari 240; Y = 20% dari 180<ol><li>X = 0,15 × 240 = 36</li><li>Y = 0,20 × 180 = 36</li><li>36 = 36</li></ol><b>Jawaban: X = Y</b></div><div class=\"callout\"><b>Contoh 2 (pecahan dari)</b><br>X = 2/5 dari 150; Y = 3/8 dari 160<ol><li>X = 2/5 × 150 = 60</li><li>Y = 3/8 × 160 = 60</li></ol><b>Jawaban: X = Y</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>X = 30% dari 350; Y = 25% dari 400<ol><li>X = 0,30 × 350 = 105</li><li>Y = 0,25 × 400 = 100</li><li>105 &gt; 100</li></ol><b>Jawaban: X &gt; Y</b></div>"},{"title":"2. Persen Berbalik: a% dari b = b% dari a","html":"<p><b>Dasar:</b> a% × b = (a × b)/100 = b% × a. Kalau angka yang dipertukarkan, hasilnya sama. Tidak perlu menghitung.</p><div class=\"callout\"><b>Contoh 1</b><br>X = 8% dari 75; Y = 75% dari 8<ol><li>Angkanya tertukar (8 dan 75) → hasil sama</li><li>Cek: 0,08 × 75 = 6 dan 0,75 × 8 = 6</li></ol><b>Jawaban: X = Y</b></div><div class=\"callout\"><b>Contoh 2</b><br>X = 24% dari 50; Y = 50% dari 24<ol><li>Tertukar → sama</li><li>Cek: 12 dan 12</li></ol><b>Jawaban: X = Y</b></div><div class=\"callout\"><b>Contoh 3 (hampir sama, jangan terkecoh)</b><br>X = 36% dari 25; Y = 30% dari 32<ol><li>Angka tidak tertukar persis → hitung</li><li>X = 0,36 × 25 = 9</li><li>Y = 0,30 × 32 = 9,6</li><li>9 &lt; 9,6</li></ol><b>Jawaban: X &lt; Y</b></div>"},{"title":"3. Pecahan: Kali Silang","html":"<p><b>Rumus:</b> bandingkan a/b dan c/d (penyebut positif) dengan membandingkan <b>a×d</b> dan <b>c×b</b>. Yang hasil kali lebih besar → pecahan itu lebih besar.</p><div class=\"callout\"><b>Contoh 1</b><br>X = 7/9; Y = 8/11<ol><li>Kali silang: 7×11 = 77; 8×9 = 72</li><li>77 &gt; 72 → X lebih besar</li></ol><b>Jawaban: X &gt; Y</b></div><div class=\"callout\"><b>Contoh 2 (sangat dekat)</b><br>X = 13/17; Y = 19/25<ol><li>13×25 = 325; 19×17 = 323</li><li>325 &gt; 323</li></ol><b>Jawaban: X &gt; Y</b></div><div class=\"callout\"><b>Contoh 3 (gaya CPNS)</b><br>X = 5/12; Y = 7/16<ol><li>Kali silang: 5×16 = 80; 7×12 = 84</li><li>80 &lt; 84</li></ol><b>Jawaban: X &lt; Y</b></div><p><b>Cara cepat:</b> ubah ke 1 − sisa. 7/9 = 1 − 2/9; 8/11 = 1 − 3/11. Sisa 2/9 (0,22) lebih kecil dari 3/11 (0,27), maka 7/9 lebih besar.</p>"},{"title":"4. Kuadrat, Akar, dan Identitas (a−1)(a+1) = a² − 1","html":"<p><b>Identitas:</b> (a − 1)(a + 1) = a² − 1, jadi selalu <b>lebih kecil 1</b> dari a². Juga: √(a + b) ≠ √a + √b.</p><div class=\"callout\"><b>Contoh 1</b><br>X = 17²; Y = 16 × 18<ol><li>Y = (17 − 1)(17 + 1) = 17² − 1 = 288</li><li>X = 289</li><li>289 &gt; 288</li></ol><b>Jawaban: X &gt; Y</b></div><div class=\"callout\"><b>Contoh 2</b><br>X = 99²; Y = 98 × 100<ol><li>Y = (99 − 1)(99 + 1) = 99² − 1 = 9.800</li><li>X = 9.801</li></ol><b>Jawaban: X &gt; Y</b></div><div class=\"callout\"><b>Contoh 3 (akar jebakan)</b><br>X = √(36 + 64); Y = √36 + √64<ol><li>X = √100 = 10</li><li>Y = 6 + 8 = 14</li><li>10 &lt; 14</li></ol><b>Jawaban: X &lt; Y</b></div><div class=\"callout\"><b>Contoh 4 (gaya CPNS)</b><br>X = 999 × 1.001; Y = 1.000²<ol><li>999 × 1.001 = (1.000 − 1)(1.000 + 1) = 1.000² − 1 = 999.999</li><li>Y = 1.000.000</li></ol><b>Jawaban: X &lt; Y</b></div>"},{"title":"5. Ada Variabel: Uji Nilai Khusus → \"Tidak Dapat Ditentukan\"","html":"<p><b>Cara:</b> kalau ada variabel dan batas nilainya longgar, uji minimal tiga jenis nilai: <b>&gt; 1</b>, <b>= 1</b> (atau 0), <b>antara 0 dan 1</b>, dan juga <b>negatif</b>. Jika hasilnya berubah-ubah → <b>tidak dapat ditentukan</b>. Jika konsisten untuk semua nilai yang dibolehkan → jawab sesuai hasil itu.</p><div class=\"callout\"><b>Contoh 1</b><br>x bilangan real positif. X = x²; Y = x<ol><li>Uji x = 2: X = 4, Y = 2 → X &gt; Y</li><li>Uji x = 1: X = 1, Y = 1 → X = Y</li><li>Uji x = 0,5: X = 0,25, Y = 0,5 → X &lt; Y</li><li>Hasilnya berbeda-beda</li></ol><b>Jawaban: Tidak dapat ditentukan</b></div><div class=\"callout\"><b>Contoh 2 (bilangan bisa negatif)</b><br>a &gt; b (bilangan real). X = a²; Y = b²<ol><li>Uji a = 3, b = 2: X = 9 &gt; Y = 4</li><li>Uji a = 2, b = −3 (a &gt; b): X = 4 &lt; Y = 9</li><li>Hasilnya berbeda</li></ol><b>Jawaban: Tidak dapat ditentukan</b></div><div class=\"callout\"><b>Contoh 3 (batas jelas → pasti)</b><br>a &gt; b &gt; 0. X = a²; Y = b²<ol><li>Uji a = 3, b = 2: 9 &gt; 4</li><li>Uji a = 1,5, b = 0,5: 2,25 &gt; 0,25</li><li>Karena keduanya positif, kuadrat mempertahankan urutan</li></ol><b>Jawaban: X &gt; Y</b></div><p><b>Kesalahan umum:</b> menguji satu nilai saja lalu memutuskan. Satu nilai hanya cukup untuk <i>menunjukkan</i> \"tidak dapat ditentukan\" bila Anda sudah menemukan dua hasil berbeda.</p>"},{"title":"6. Aritmetika Sosial & Aljabar yang Sering Keluar","html":"<div class=\"callout\"><b>Contoh 1 (diskon bertingkat ≠ dijumlah)</b><br>Harga Rp10.000.000. X = harga setelah diskon 20% lalu 10%; Y = harga setelah diskon tunggal 28%<ol><li>Diskon bertingkat: 10.000.000 × 0,8 = 8.000.000; × 0,9 = 7.200.000</li><li>Diskon tunggal 28%: 10.000.000 × 0,72 = 7.200.000</li><li>Faktor bertingkat = 0,8 × 0,9 = 0,72 → ekuivalen 28%</li></ol><b>Jawaban: X = Y</b></div><div class=\"callout\"><b>Contoh 2 (aljabar: a² − b²)</b><br>a &gt; b bilangan bulat positif. X = (a² − b²)/(a − b); Y = a + b<ol><li>a² − b² = (a − b)(a + b)</li><li>Dibagi (a − b) → a + b (a ≠ b)</li><li>Uji: a = 5, b = 3 → 16/2 = 8 = 5 + 3</li></ol><b>Jawaban: X = Y</b></div><div class=\"callout\"><b>Contoh 3 (pecahan campur)</b><br>X = 3/4 + 5/6; Y = 4/5 + 2/3<ol><li>X: 9/12 + 10/12 = 19/12 ≈ 1,583</li><li>Y: 12/15 + 10/15 = 22/15 ≈ 1,467</li><li>1,583 &gt; 1,467</li></ol><b>Jawaban: X &gt; Y</b></div><div class=\"callout\"><b>Contoh 4 (desimal)</b><br>X = 0,25 × 0,4; Y = 0,5 × 0,2<ol><li>X = 0,10</li><li>Y = 0,10</li></ol><b>Jawaban: X = Y</b></div>"},{"title":"Latihan Mandiri (kunci di bawah)","html":"<div class=\"callout\">Tentukan hubungan X dan Y:</div><ul><li>X = 40% dari 90; Y = 90% dari 40</li><li>X = 11/13; Y = 12/14</li><li>X = 21²; Y = 20 × 22</li><li>x bilangan real. X = x + 1; Y = x²</li><li>X = 2/3 dari 90; Y = 3/5 dari 100</li></ul><p><b>Kunci:</b> (1) X = Y (persen berbalik); (2) 11×14 = 154 &lt; 12×13 = 156 → X &lt; Y; (3) 441 &gt; 440 → X &gt; Y; (4) uji x = 1: X = 2, Y = 1 (X &gt; Y); x = 2: X = 3, Y = 4 (X &lt; Y) → tidak dapat ditentukan; (5) X = 60, Y = 60 → X = Y.</p>"}],"tips":["Semua angka konkret → jawaban PASTI, tak mungkin \"tidak dapat ditentukan\".","Ada variabel → uji >1, =1, antara 0–1, negatif.","Kali silang untuk pecahan; (a−1)(a+1) = a²−1."]}]);
})();
/* Materi TIU "kelas intensif" (fork TIU-4): silogisme, analitis, verbal, figural.
   Semua contoh sudah diverifikasi (brute force / simulasi) di verify.js. */
(function () {
  var tbl = function (h, rows) {
    return '<table class="table table-sm"><thead><tr>' + h.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  };
  var ul = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
  var note = function (t) { return '<div class="callout">' + t + '</div>'; };
  var ex = function (judul, soal, langkah, jawaban) {
    return '<div class="callout"><b>' + judul + '</b><p>' + soal + '</p><ol>' +
      langkah.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ol><p><b>Jawaban:</b> ' + jawaban + '</p></div>';
  };

  /* ---------- helper SVG untuk figural ---------- */
  var arrow = function (deg, s) {
    s = s || 56;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s + '" viewBox="0 0 56 56" style="background:#fff;border:1px solid #94a3b8;margin:2px">' +
      '<g transform="rotate(' + deg + ' 28 28)"><polygon points="28,8 40,34 28,28 16,34" fill="#ef4444" stroke="#0f172a" stroke-width="2"/><circle cx="28" cy="42" r="4" fill="#0f172a"/></g></svg>';
  };
  var arrows = function (list) { return '<div style="display:flex;flex-wrap:wrap;align-items:center">' + list.map(function (d) { return d === '?' ? '<span style="display:inline-block;width:56px;height:56px;line-height:56px;text-align:center;border:1px dashed #64748b;margin:2px;font-weight:700">?</span>' : arrow(d); }).join('') + '</div>'; };
  var grid = function (cells, caption) {
    var o = '<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" style="background:#fff;margin:2px">';
    for (var r = 0; r < 3; r++) for (var c = 0; c < 3; c++) {
      var on = cells.some(function (x) { return x[0] === r && x[1] === c; });
      o += '<rect x="' + (3 + c * 20) + '" y="' + (3 + r * 20) + '" width="20" height="20" fill="' + (on ? '#0f172a' : '#fff') + '" stroke="#64748b"/>';
    }
    o += '</svg>';
    return '<span style="display:inline-block;text-align:center;font-size:12px;margin-right:8px">' + o + '<br>' + (caption || '') + '</span>';
  };
  var net = function (cells, labels) {
    var S = 26, maxR = 0, maxC = 0;
    cells.forEach(function (x) { maxR = Math.max(maxR, x[0]); maxC = Math.max(maxC, x[1]); });
    var o = '<svg xmlns="http://www.w3.org/2000/svg" width="' + ((maxC + 1) * S + 6) + '" height="' + ((maxR + 1) * S + 6) + '" viewBox="0 0 ' + ((maxC + 1) * S + 6) + ' ' + ((maxR + 1) * S + 6) + '" style="background:#fff;margin:2px 8px 2px 0">';
    cells.forEach(function (x, i) {
      o += '<rect x="' + (3 + x[1] * S) + '" y="' + (3 + x[0] * S) + '" width="' + S + '" height="' + S + '" fill="#e0f2fe" stroke="#0f172a"/>';
      if (labels) o += '<text x="' + (3 + x[1] * S + S / 2) + '" y="' + (3 + x[0] * S + S / 2 + 5) + '" font-size="13" text-anchor="middle" fill="#0f172a" font-family="sans-serif">' + labels[i] + '</text>';
    });
    return o + '</svg>';
  };
  var shape = function (kind, fill, s) {
    var f = { putih: '#ffffff', abu: '#94a3b8', hitam: '#0f172a' }[fill];
    var body = kind === 'lingkaran' ? '<circle cx="20" cy="20" r="13" fill="' + f + '" stroke="#0f172a" stroke-width="2"/>' :
      kind === 'persegi' ? '<rect x="7" y="7" width="26" height="26" fill="' + f + '" stroke="#0f172a" stroke-width="2"/>' :
        '<polygon points="20,6 34,33 6,33" fill="' + f + '" stroke="#0f172a" stroke-width="2"/>';
    return '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">' + body + '</svg>';
  };
  var matrix = function (rows) {
    return '<table style="border-collapse:collapse;background:#fff">' + rows.map(function (r) {
      return '<tr>' + r.map(function (c) { return '<td style="border:1px solid #64748b;width:46px;height:46px;text-align:center">' + (c === '?' ? '<b>?</b>' : shape(c[0], c[1])) + '</td>'; }).join('') + '</tr>';
    }).join('') + '</table>';
  };

  /* =================================================================
     1. SILOGISME & LOGIKA PROPOSISI
     ================================================================= */
  var silogisme = {
    id: 'tiu-k-silogisme', group: 'TIU',
    title: 'Silogisme & Logika Proposisi: Kuantor, Jika–Maka, Kontraposisi, Negasi',
    summary: 'Kuantor semua/sebagian/tidak ada, konversi, pasti benar vs mungkin, jika–maka (ponens, tollens, rantai), negasi, disertai contoh bertahap.',
    buckets: ['SKD_TIU'], subs: ['Verbal - Silogisme', 'Logika Silogisme'],
    sections: [
      {
        title: '1. Tiga Kuantor & Artinya',
        html: tbl(['Kuantor', 'Arti', 'Gambar Venn (teks)'], [
          ['<b>Semua A adalah B</b>', 'Setiap anggota A pasti anggota B', 'A berada <b>di dalam</b> B'],
          ['<b>Sebagian A adalah B</b>', 'Ada (minimal satu) A yang anggota B', 'A dan B <b>beririsan</b>'],
          ['<b>Tidak ada A yang B</b>', 'Tidak satu pun A adalah B', 'A dan B <b>terpisah</b>'],
          ['<b>Sebagian A bukan B</b>', 'Ada A yang di luar B', 'Sebagian A <b>di luar</b> B']
        ]) +
          note('<b>Langkah 3 detik:</b> (1) ganti tiap kalimat menjadi gambar lingkaran, (2) gabungkan premis, (3) pilih kesimpulan yang <b>selalu</b> benar pada <b>semua</b> gambar yang mungkin.') +
          ex('Contoh 1 (mudah) – Semua → anggota',
            'P1: Semua pegawai Dinas Kominfo disiplin.<br>P2: Budi adalah pegawai Dinas Kominfo.<br>Kesimpulan?',
            ['Gambar: lingkaran "pegawai Kominfo" berada di dalam lingkaran "disiplin".', 'Budi berada di dalam lingkaran pegawai Kominfo, jadi otomatis juga di dalam lingkaran disiplin.'],
            'Budi disiplin.') +
          ex('Contoh 2 (sedang) – Rantai "Semua"',
            'P1: Semua guru adalah pegawai.<br>P2: Semua pegawai wajib berseragam.<br>Kesimpulan?',
            ['Guru ⊂ pegawai, pegawai ⊂ berseragam.', 'Lingkaran bersarang: guru di dalam pegawai, pegawai di dalam berseragam.', 'Maka guru pasti berada di dalam berseragam.'],
            'Semua guru wajib berseragam.') +
          ex('Contoh 3 (gaya CPNS) – Semua + Sebagian',
            'P1: Semua pegawai Dinas Kominfo menguasai Excel.<br>P2: Sebagian pegawai yang menguasai Excel mahir SQL.<br>Manakah kesimpulan yang <b>pasti benar</b>?<br>A. Semua pegawai Kominfo mahir SQL<br>B. Sebagian pegawai Kominfo mahir SQL<br>C. Sebagian orang yang mahir SQL menguasai Excel<br>D. Tidak ada pegawai Kominfo yang mahir SQL',
            ['Gambar: Kominfo di dalam Excel; "mahir SQL" beririsan dengan Excel di bagian <i>mana saja</i> (bisa di dalam Kominfo, bisa di luarnya).', 'A dan D: tidak pasti (irisan SQL bisa di luar Kominfo, atau bisa mengenai Kominfo). B: <b>mungkin</b>, belum pasti.', 'C: kebalikan "sebagian Excel mahir SQL" adalah "sebagian mahir SQL menguasai Excel" – selalu benar karena irisan bersifat dua arah.'],
            'C.')
      },
      {
        title: '2. Konversi: Mana yang Boleh Dibalik?',
        html: tbl(['Pernyataan', 'Dibalik jadi', 'Sah?'], [
          ['Semua A adalah B', 'Semua B adalah A', '<b>TIDAK SAH</b>'],
          ['Semua A adalah B', 'Sebagian B adalah A', 'Sah (umumnya diterima di soal CPNS)'],
          ['Sebagian A adalah B', 'Sebagian B adalah A', '<b>Sah</b> (irisan simetris)'],
          ['Tidak ada A yang B', 'Tidak ada B yang A', '<b>Sah</b>'],
          ['Sebagian A bukan B', 'Sebagian B bukan A', '<b>TIDAK SAH</b>']
        ]) +
          note('<b>Jebakan umum:</b> membalik "Semua A adalah B" menjadi "Semua B adalah A". Contoh: Semua kucing adalah hewan, tetapi tidak semua hewan adalah kucing.') +
          ex('Contoh 1 (mudah)',
            'Diketahui: Semua kucing adalah hewan. Manakah yang <b>salah</b>?<br>A. Sebagian hewan adalah kucing<br>B. Semua hewan adalah kucing<br>C. Tidak ada kucing yang bukan hewan',
            ['A: kebalikan sah (kucing adalah bagian hewan) → benar.', 'B: membalik "Semua" → tidak sah → salah.', 'C: kucing di dalam hewan, jadi tidak ada kucing di luar hewan → benar.'],
            'B.') +
          ex('Contoh 2 (sedang)',
            'Diketahui: Sebagian mahasiswa adalah atlet. Manakah kesimpulan yang pasti benar?<br>A. Semua atlet adalah mahasiswa<br>B. Sebagian atlet adalah mahasiswa<br>C. Sebagian mahasiswa bukan atlet',
            ['B: konversi "Sebagian" sah → pasti benar.', 'A: tidak pasti (hanya sebagian yang beririsan).', 'C: <b>belum tentu</b>; mungkin semua mahasiswa adalah atlet (irisan bisa sama dengan seluruh mahasiswa). Pada "sebagian" tidak otomatis ada sisa.'],
            'B.') +
          ex('Contoh 3 (gaya CPNS) – Tidak ada',
            'P1: Tidak ada pegawai honorer yang menjadi pejabat struktural.<br>P2: Sebagian pegawai tetap adalah pejabat struktural.<br>Kesimpulan yang tepat?<br>A. Sebagian pegawai tetap bukan pegawai honorer<br>B. Semua pejabat struktural pegawai tetap<br>C. Tidak ada pegawai tetap yang honorer',
            ['Pejabat struktural terpisah dari honorer; sebagian pejabat adalah pegawai tetap.', 'Pegawai tetap yang menjadi pejabat tidak mungkin honorer (karena honorer terpisah dari pejabat) → sebagian pegawai tetap bukan honorer. Benar.', 'B dan C: tidak dijamin; pejabat bisa nonpegawai tetap, dan pegawai tetap yang lain belum diketahui statusnya.'],
            'A.')
      },
      {
        title: '3. Pasti Benar vs Mungkin Benar',
        html: ul([
          '<b>Pasti benar</b> = benar di <b>semua</b> kemungkinan gambar Venn yang sesuai premis.',
          '<b>Mungkin benar</b> = benar di sebagian gambar, salah di gambar lain → <b>bukan jawaban</b> pada soal "kesimpulan yang pasti".',
          'Kata penting: <i>pasti</i>, <i>selalu</i>, <i>tentu</i>, <i>dapat disimpulkan</i> → butuh kepastian. Kata <i>mungkin</i>, <i>dapat saja</i> → cukup ada satu gambar yang cocok.'
        ]) +
          ex('Contoh 1 (mudah)',
            'P1: Sebagian dokter adalah penulis.<br>P2: Semua penulis suka membaca.<br>Manakah yang pasti benar?<br>A. Semua dokter suka membaca<br>B. Sebagian dokter suka membaca<br>C. Semua penulis adalah dokter',
            ['Dokter beririsan dengan penulis; penulis seluruhnya di dalam "suka membaca".', 'Dokter yang berada dalam irisan dokter–penulis otomatis di dalam "suka membaca".', 'Maka sebagian dokter suka membaca. A tidak pasti (dokter di luar irisan belum diketahui). C membalik "Semua".'],
            'B.') +
          ex('Contoh 2 (sedang) – Dua kemungkinan gambar',
            'P1: Semua ASN adalah warga negara.<br>P2: Sebagian warga negara adalah wiraswasta.<br>Apakah "Sebagian ASN adalah wiraswasta" pasti benar?',
            ['Gambar 1: irisan wiraswasta–warga negara berada di luar ASN → tidak ada ASN wiraswasta.', 'Gambar 2: irisan itu menyentuh ASN → ada ASN wiraswasta.', 'Kedua gambar sesuai premis, sehingga pernyataan itu hanya <b>mungkin</b> benar.'],
            'Tidak pasti benar (hanya mungkin).') +
          ex('Contoh 3 (gaya CPNS) – "Tidak mungkin salah"',
            'P1: Semua peserta SKD membawa kartu ujian.<br>P2: Sebagian peserta SKD membawa laptop.<br>Pernyataan manakah yang <b>pasti</b> benar?<br>A. Sebagian yang membawa kartu ujian membawa laptop<br>B. Semua pembawa laptop adalah peserta SKD<br>C. Tidak ada pembawa laptop yang tanpa kartu ujian',
            ['Peserta SKD di dalam "kartu ujian"; sebagian peserta (yang bawa laptop) pasti juga di dalam "kartu ujian".', 'Sehingga sebagian pembawa kartu ujian membawa laptop → A pasti benar.', 'B: pembawa laptop bisa juga non-peserta. C: pembawa laptop non-peserta tidak dijamin memiliki kartu.'],
            'A.')
      },
      {
        title: '4. Negasi (Ingkaran) Kuantor',
        html: tbl(['Pernyataan', 'Ingkarannya'], [
          ['Semua A adalah B', '<b>Sebagian A bukan B</b>'],
          ['Sebagian A adalah B', '<b>Tidak ada A yang B</b> (semua A bukan B)'],
          ['Tidak ada A yang B', '<b>Sebagian A adalah B</b>'],
          ['Sebagian A bukan B', '<b>Semua A adalah B</b>']
        ]) +
          note('Ingatan kilat: ingkaran <b>menukar kuantor</b> dan <b>membalik</b> positif/negatif. "Semua … ya" ↔ "sebagian … bukan".') +
          ex('Contoh 1 (mudah)',
            'Ingkaran dari "Semua pegawai hadir rapat" adalah ...',
            ['Kuantor Semua → Sebagian; ya → bukan.'],
            'Sebagian pegawai tidak hadir rapat.') +
          ex('Contoh 2 (sedang)',
            'Ingkaran dari "Sebagian peserta lulus seleksi" adalah ...',
            ['Sebagian → Tidak ada; kalimat tetap positif "lulus".'],
            'Tidak ada peserta yang lulus seleksi (semua peserta tidak lulus).') +
          ex('Contoh 3 (gaya CPNS)',
            'Pernyataan "Semua laporan yang masuk sudah diverifikasi" ternyata <b>salah</b>. Manakah yang pasti benar?<br>A. Semua laporan belum diverifikasi<br>B. Sebagian laporan belum diverifikasi<br>C. Tidak ada laporan yang diverifikasi',
            ['Pernyataan salah → ingkarannya benar.', 'Ingkaran "Semua … sudah" adalah "Sebagian … belum".', 'A dan C terlalu kuat (bisa saja sebagian sudah diverifikasi).'],
            'B.')
      },
      {
        title: '5. Jika–Maka: Konvers, Invers, Kontraposisi',
        html: tbl(['Bentuk', 'Rumus', 'Ekuivalen dengan "Jika p maka q"?'], [
          ['Asli (implikasi)', 'p → q', '—'],
          ['Konvers', 'q → p', '<b>Tidak</b>'],
          ['Invers', '¬p → ¬q', '<b>Tidak</b>'],
          ['Kontraposisi', '¬q → ¬p', '<b>YA</b>']
        ]) +
          note('<b>Kontraposisi</b> adalah satu-satunya yang selalu sama artinya dengan pernyataan asli. Cara membuatnya: <b>tukar tempat</b> p dan q, lalu <b>beri "tidak"</b> pada keduanya.') +
          ex('Contoh 1 (mudah)',
            'Jika hujan, maka jalan basah. Jalan tidak basah. Kesimpulan?',
            ['Pakai kontraposisi: jika jalan tidak basah, maka tidak hujan.', 'Fakta: jalan tidak basah.'],
            'Tidak hujan (modus tollens).') +
          ex('Contoh 2 (sedang)',
            'Jika hujan, maka jalan basah. Jalan basah. Kesimpulan?',
            ['"Jalan basah" adalah q (akibat), bukan p (sebab).', 'Menegaskan q tidak menjamin p: jalan bisa basah karena disiram, tumpahan, dll.'],
            'Tidak dapat disimpulkan apakah hujan.') +
          ex('Contoh 3 (gaya CPNS)',
            'Pernyataan: "Jika pegawai lulus SKD, maka ia mengikuti SKB." Manakah yang <b>ekuivalen</b>?<br>A. Jika pegawai mengikuti SKB, maka ia lulus SKD<br>B. Jika pegawai tidak lulus SKD, maka ia tidak mengikuti SKB<br>C. Jika pegawai tidak mengikuti SKB, maka ia tidak lulus SKD',
            ['p = lulus SKD, q = mengikuti SKB.', 'A = konvers (q → p) → tidak ekuivalen.', 'B = invers (¬p → ¬q) → tidak ekuivalen.', 'C = kontraposisi (¬q → ¬p) → ekuivalen.'],
            'C.')
      },
      {
        title: '6. Modus Ponens, Modus Tollens, Silogisme Hipotetik (Rantai)',
        html: tbl(['Nama', 'Pola', 'Contoh'], [
          ['<b>Modus Ponens</b>', 'p → q; p benar ⇒ q benar', 'Jika rajin maka lulus; Ani rajin ⇒ Ani lulus'],
          ['<b>Modus Tollens</b>', 'p → q; q salah ⇒ p salah', 'Jika rajin maka lulus; Ani tidak lulus ⇒ Ani tidak rajin'],
          ['<b>Silogisme hipotetik</b>', 'p → q; q → r ⇒ p → r', 'Jika rajin maka lulus; jika lulus maka diangkat ⇒ jika rajin maka diangkat']
        ]) +
          note('<b>Jebakan:</b> "q benar ⇒ p benar" (menegaskan akibat) dan "p salah ⇒ q salah" (menyangkal sebab) <b>tidak sah</b>.') +
          ex('Contoh 1 (mudah) – Ponens',
            'Jika jaringan putus, maka layanan daring terhenti. Jaringan putus. Kesimpulan?',
            ['p = jaringan putus (benar).', 'p → q berlaku, maka q benar.'],
            'Layanan daring terhenti.') +
          ex('Contoh 2 (sedang) – Rantai + tollens',
            'P1: Jika Andi lembur, maka ia mendapat uang makan.<br>P2: Jika Andi mendapat uang makan, maka ia melapor ke bendahara.<br>P3: Andi tidak melapor ke bendahara.<br>Kesimpulan?',
            ['Rantai P1+P2: lembur → uang makan → lapor bendahara.', 'P3: tidak lapor bendahara → (tollens) tidak mendapat uang makan.', 'Tidak mendapat uang makan → (tollens P1) tidak lembur.'],
            'Andi tidak mendapat uang makan dan tidak lembur.') +
          ex('Contoh 3 (gaya CPNS) – Ada yang tak bisa disimpulkan',
            'P1: Jika sistem diperbarui, maka keamanan meningkat.<br>P2: Jika keamanan meningkat, maka insiden berkurang.<br>P3: Insiden berkurang.<br>Kesimpulan yang tepat?',
            ['Rantai: diperbarui → keamanan naik → insiden turun.', 'P3 menegaskan <b>akibat terakhir</b>. Menegaskan akibat tidak menjamin sebab.', 'Insiden bisa turun karena sebab lain.'],
            'Tidak dapat disimpulkan apakah sistem diperbarui.')
      },
      {
        title: '7. "Dan", "Atau", dan Ingkarannya (De Morgan)',
        html: tbl(['Pernyataan', 'Ingkaran'], [
          ['p <b>dan</b> q', '¬p <b>atau</b> ¬q'],
          ['p <b>atau</b> q', '¬p <b>dan</b> ¬q'],
          ['Jika p maka q', '<b>p dan ¬q</b>']
        ]) +
          note('Catatan: "Jika p maka q" setara dengan "¬p <b>atau</b> q". Dari sini ingkarannya p dan ¬q.') +
          ex('Contoh 1 (mudah)',
            'Ingkaran dari "Rina rajin dan Budi pintar" adalah ...',
            ['Ingkaran "dan" menjadi "atau" dengan tiap bagian diingkar.'],
            'Rina tidak rajin atau Budi tidak pintar.') +
          ex('Contoh 2 (sedang)',
            'Ingkaran dari "Rapat ditunda atau acara dibatalkan" adalah ...',
            ['"Atau" menjadi "dan"; tiap bagian diingkar.'],
            'Rapat tidak ditunda dan acara tidak dibatalkan.') +
          ex('Contoh 3 (gaya CPNS)',
            'Ingkaran dari "Jika peserta lulus SKD, maka peserta mengikuti SKB" adalah ...',
            ['Rumus: ingkaran (p → q) adalah p dan ¬q.', 'p = lulus SKD tetap, q = mengikuti SKB diingkar.'],
            'Peserta lulus SKD dan peserta tidak mengikuti SKB.')
      },
      {
        title: '8. Jebakan Umum & Cara Cepat',
        html: ul([
          '<b>Membalik "Semua"</b>: "Semua A B" ≠ "Semua B A".',
          '<b>Menyimpulkan "sebagian bukan"</b> dari "sebagian ya": belum tentu (bisa semua).',
          '<b>Menegaskan akibat</b> atau <b>menyangkal sebab</b> pada jika–maka: tidak sah.',
          '<b>Kuantor kuat dari premis lemah</b>: dari "sebagian" tidak boleh keluar "semua".',
          '<b>Opsi "semua pasti benar"</b> sering salah; periksa apakah premis menjaminnya.'
        ]) +
          tbl(['Langkah cepat', 'Isi'], [
            ['1', 'Tulis premis ringkas dengan simbol: A ⊂ B, A∩B ≠ ∅, A∩B = ∅, p → q'],
            ['2', 'Untuk jika–maka, buat kontraposisinya dan rantai semua premis'],
            ['3', 'Eliminasi opsi yang kuantornya lebih kuat dari premis'],
            ['4', 'Cek tiap sisa opsi dengan satu gambar tandingan (counter-example)']
          ])
      }
    ],
    tips: ['Kontraposisi selalu sah; konvers dan invers tidak.', 'Ingkaran "Semua … ya" = "Sebagian … bukan".', 'Jika opsi memakai kata "pasti", cari gambar tandingan yang membuatnya salah.']
  };

  /* =================================================================
     2. PENALARAN ANALITIS & LOGIS
     ================================================================= */
  var analitis = {
    id: 'tiu-k-analitis', group: 'TIU',
    title: 'Penalaran Analitis & Logis: Urutan, Posisi, Jadwal, Jujur–Bohong, Pencocokan',
    summary: 'Teknik menyelesaikan soal urutan, posisi duduk, penjadwalan, pembohong–jujur, tabel eliminasi, dan kesimpulan dari bacaan/data, lengkap dengan contoh terverifikasi.',
    buckets: ['SKD_TIU'], subs: ['Verbal - Analitis', 'Penalaran Logis'],
    sections: [
      {
        title: '1. Teknik Dasar: Tulis, Susun, Eliminasi',
        html: ul([
          '<b>Ubah kalimat menjadi simbol</b> (A &gt; B artinya A lebih tinggi/tua/besar dari B).',
          '<b>Susun garis bilangan</b> atau tabel kosong sebelum memikirkan jawaban.',
          '<b>Mulai dari informasi paling pasti</b> (posisi mutlak: "paling kiri", "hari Rabu").',
          '<b>Uji opsi</b> bila informasi belum cukup; hanya satu yang bisa selalu benar.'
        ])
      },
      {
        title: '2. Soal Urutan (Peringkat)',
        html: note('Gabungkan tiap pasangan perbandingan menjadi <b>satu rantai</b>: A &gt; B, B &gt; C ⇒ A &gt; B &gt; C. Jika dua rantai bertemu di satu nama, sambungkan di nama itu.') +
          ex('Contoh 1 (mudah)',
            'A lebih tinggi daripada B. B lebih tinggi daripada C. Siapa yang paling rendah?',
            ['Rantai: A &gt; B &gt; C.', 'Paling rendah = ujung kanan.'],
            'C.') +
          ex('Contoh 2 (sedang)',
            'P lebih tua daripada Q. R lebih muda daripada Q tetapi lebih tua daripada S. T lebih tua daripada P. Siapa yang berada di tengah (urutan ke-3)?',
            ['P &gt; Q, Q &gt; R, R &gt; S, T &gt; P.', 'Sambung: T &gt; P &gt; Q &gt; R &gt; S.', 'Urutan ke-3 dari yang tertua adalah Q.'],
            'Q.') +
          ex('Contoh 3 (gaya CPNS)',
            'Ani lebih tinggi daripada Budi. Cici lebih rendah daripada Dedi. Budi lebih tinggi daripada Dedi. Eka lebih rendah daripada Cici. Siapa yang tertinggi ke-3?',
            ['Rantai 1: Ani &gt; Budi &gt; Dedi.', 'Rantai 2: Dedi &gt; Cici &gt; Eka.', 'Sambung di Dedi: Ani &gt; Budi &gt; Dedi &gt; Cici &gt; Eka.', 'Tertinggi ke-3 = Dedi.'],
            'Dedi.')
      },
      {
        title: '3. Posisi Duduk (Berjajar dan Melingkar)',
        html: note('Berjajar: beri nomor kursi 1–n. Melingkar: beri nomor 0..n−1 searah jarum jam; berhadapan berarti selisih n/2 (pada 6 orang selisih 3).') +
          ex('Contoh 1 (mudah) – Berjajar',
            'Tiga orang duduk sebaris: X di ujung kiri, Z di ujung kanan. Siapa di tengah bila Y tidak di ujung?',
            ['X pada kursi 1, Z pada kursi 3.', 'Sisa kursi 2 diisi Y.'],
            'Y.') +
          ex('Contoh 2 (sedang) – Berjajar 5 orang',
            'A, B, C, D, E duduk sebaris. A di kursi paling kiri dan E di kursi paling kanan. B duduk tepat di sebelah kiri C. D tidak di ujung dan duduk di sebelah kiri B. Siapa yang duduk di kursi tengah (ke-3)?',
            ['Kursi 1 = A, kursi 5 = E.', 'B langsung di kiri C: pasangan (B,C) mengisi kursi (2,3) atau (3,4).', 'Jika (2,3): D harus di kursi 4, di kanan B → melanggar "D di sebelah kiri B".', 'Jika (3,4): D di kursi 2, di kiri B → sesuai.', 'Urutan: A D B C E → kursi 3 = B.'],
            'B.') +
          ex('Contoh 3 (gaya CPNS) – Melingkar 6 orang',
            'Enam orang A, B, C, D, E, F duduk mengelilingi meja bundar. A duduk di posisi 0. Searah jarum jam setelah A (posisi 1) adalah B, lalu C (posisi 2). D duduk berhadapan dengan A. C berhadapan dengan F. Siapa yang duduk di antara D dan F?',
            ['Posisi 0 = A, 1 = B, 2 = C, 3 = D (berhadapan dengan A: selisih 3).', 'C (posisi 2) berhadapan dengan posisi 5 → F di posisi 5.', 'Sisa posisi 4 → E.', 'Di antara D (3) dan F (5) adalah posisi 4.'],
            'E.')
      },
      {
        title: '4. Penjadwalan',
        html: note('Buat tabel hari × kegiatan. Letakkan dulu yang <b>tetap</b> ("hari Rabu"), lalu yang berurutan ("setelah", "sebelum"), lalu eliminasi yang dilarang.') +
          ex('Contoh 1 (mudah)',
            'Tiga kegiatan, satu per hari Senin–Rabu: Rapat, Audit, Pelatihan. Rapat pada hari Senin. Audit sesudah Pelatihan. Kapan Audit?',
            ['Rapat = Senin.', 'Sisa Selasa dan Rabu; Audit sesudah Pelatihan → Pelatihan Selasa, Audit Rabu.'],
            'Rabu.') +
          ex('Contoh 2 (sedang)',
            'Lima kegiatan (Rapat, Pelatihan, Audit, Monev, Bimtek) dilaksanakan Senin–Jumat, satu per hari. Audit hari Rabu. Monev setelah Audit dan tidak hari Jumat. Rapat sebelum Pelatihan. Bimtek tidak hari Senin atau Selasa. Kapan Bimtek?',
            ['Audit = Rabu.', 'Monev setelah Rabu dan bukan Jumat → Kamis.', 'Sisa Senin, Selasa, Jumat untuk Rapat, Pelatihan, Bimtek.', 'Bimtek bukan Senin/Selasa → Jumat.', 'Rapat sebelum Pelatihan → Rapat Senin, Pelatihan Selasa.'],
            'Jumat. Jadwal lengkap: Senin Rapat, Selasa Pelatihan, Rabu Audit, Kamis Monev, Jumat Bimtek.')
      },
      {
        title: '5. Pembohong dan Jujur',
        html: note('Aturan: orang <b>jujur</b> selalu benar, <b>pembohong</b> selalu salah. Coba satu orang jujur, telusuri akibatnya; bila bertentangan, ia pasti pembohong.') +
          ex('Contoh 1 (mudah)',
            'A berkata: "Kami berdua pembohong." Siapa jujur dan siapa pembohong (A, B)?',
            ['Misalkan A jujur: ucapannya benar → A pembohong → kontradiksi.', 'Jadi A pembohong; ucapannya salah, artinya <b>tidak</b> benar bahwa keduanya pembohong.', 'A pembohong, maka B tidak pembohong.'],
            'A pembohong, B jujur.') +
          ex('Contoh 2 (sedang)',
            'Andi: "Budi berbohong." Budi: "Cakra berbohong." Cakra: "Andi dan Budi sama-sama berbohong." Siapa yang jujur?',
            ['Misalkan Andi jujur → Budi bohong → ucapan Budi salah → Cakra jujur → ucapan Cakra benar: Andi dan Budi sama-sama bohong. Padahal Andi jujur → kontradiksi.', 'Maka Andi bohong → ucapan Andi salah → Budi jujur → Cakra bohong.', 'Cek Cakra bohong: ucapannya "Andi dan Budi sama-sama bohong" salah (karena Budi jujur) → konsisten.'],
            'Hanya Budi yang jujur; Andi dan Cakra berbohong.')
      },
      {
        title: '6. Tabel Eliminasi (Pencocokan)',
        html: note('Buat tabel baris = orang, kolom = pilihan. Tandai "tidak" dengan X. Jika sebuah baris atau kolom tinggal satu sel kosong, itu pasti "ya".') +
          ex('Contoh 1 (mudah)',
            'Dina, Eko, Fani memiliki pekerjaan programmer, analis, dan desainer (satu per orang). Dina bukan programmer. Eko bukan analis dan bukan programmer. Siapa programmer?',
            ['Eko: bukan analis, bukan programmer → Eko desainer.', 'Dina bukan programmer dan desainer sudah terpakai → Dina analis.', 'Sisa Fani → programmer.'],
            'Fani.') +
          ex('Contoh 2 (sedang) – 4 orang × 4 divisi',
            'Anto, Bela, Cahya, Dewa masing-masing bertugas di satu divisi: Jaringan, Aplikasi, Data, Keamanan. (1) Anto bukan di Jaringan atau Aplikasi. (2) Bela bukan di Data atau Keamanan. (3) Cahya bukan di Keamanan, Jaringan, atau Aplikasi. (4) Dewa bukan di Jaringan. Siapa di divisi Keamanan?',
            ['(3) Cahya hanya bisa di Data.', '(1) Anto tinggal Data atau Keamanan; Data sudah Cahya → Anto di Keamanan.', '(2) Bela tinggal Jaringan atau Aplikasi; (4) Dewa bukan Jaringan → Dewa di Aplikasi, Bela di Jaringan.'],
            'Anto (Keamanan). Lengkap: Anto–Keamanan, Bela–Jaringan, Cahya–Data, Dewa–Aplikasi.')
      },
      {
        title: '7. Menarik Kesimpulan dari Bacaan / Data',
        html: note('Tiga status pernyataan: <b>Benar</b> (pasti dari teks), <b>Salah</b> (bertentangan dengan teks), <b>Tidak dapat ditentukan</b> (teks tidak cukup). Jangan memakai pengetahuan luar.') +
          ex('Contoh 1 (mudah) – Teks',
            'Dinas Z memiliki tiga aplikasi layanan. Aplikasi A dipakai 5.000 pengguna. Aplikasi B dipakai lebih banyak daripada A. Aplikasi C paling sedikit penggunanya. Pernyataan: "Pengguna C kurang dari 5.000." Statusnya?',
            ['C paling sedikit → C &lt; A dan C &lt; B.', 'A = 5.000 → C &lt; 5.000.'],
            'Benar.') +
          ex('Contoh 2 (sedang) – Teks',
            'Dari soal yang sama: "Aplikasi B dipakai lebih dari 10.000 pengguna." Statusnya?',
            ['Yang diketahui hanya B &gt; A = 5.000.', 'Angka B tidak ditentukan; bisa 5.001 atau 12.000.'],
            'Tidak dapat ditentukan.') +
          ex('Contoh 3 (gaya CPNS) – Data',
            'Jumlah pegawai: Jaringan 12, Aplikasi 18, Data 10, Keamanan 8. Pernyataan: "Pegawai divisi Aplikasi lebih dari sepertiga seluruh pegawai." Statusnya?',
            ['Total = 12 + 18 + 10 + 8 = 48.', 'Sepertiga total = 48 : 3 = 16.', '18 &gt; 16.'],
            'Benar. (18/48 = 37,5% &gt; 33,3%.)')
      },
      {
        title: '8. Jebakan Umum & Cara Cepat',
        html: ul([
          '<b>Memakai informasi yang tidak ada</b> (anggapan pribadi). Hanya gunakan data soal.',
          '<b>Salah arah</b>: "A di sebelah kiri B" dari sudut siapa? Gunakan arah yang disebut soal.',
          '<b>Lupa bahwa tiap orang/kegiatan unik</b> (satu kursi, satu hari).',
          '<b>Menganggap "sebelum" berarti "berurutan langsung"</b>; kata "tepat" menandakan langsung.'
        ]) +
          tbl(['Jenis soal', 'Cara cepat'], [
            ['Urutan', 'Tulis semua rantai lalu sambung'],
            ['Posisi', 'Mulai dari posisi mutlak, uji dua kemungkinan'],
            ['Jadwal', 'Tabel hari, isi yang pasti dulu'],
            ['Jujur–bohong', 'Misalkan jujur, telusuri kontradiksi'],
            ['Pencocokan', 'Tabel X; sel tunggal = jawaban']
          ])
      }
    ],
    tips: ['Selalu mulai dari informasi yang paling pasti.', 'Pada soal jujur–bohong, uji satu orang jujur lalu telusuri.', 'Hanya gunakan data dari soal; jangan menambah asumsi.']
  };

  /* =================================================================
     3. ANALOGI, PADANAN KATA
     ================================================================= */
  var verbal = {
    id: 'tiu-k-verbal', group: 'TIU',
    title: 'Analogi, Padanan Kata & Kalimat: 14 Hubungan + 40 Pasang Sinonim–Antonim',
    summary: '14 jenis hubungan analogi dengan kalimat jembatan, contoh bertahap, daftar 40 pasang sinonim–antonim baku, dan trik membuat pilihan tepat.',
    buckets: ['SKD_TIU'], subs: ['Verbal - Analogi', 'Verbal - Padanan Kata'],
    sections: [
      {
        title: '1. Rumus Utama: Kalimat Jembatan',
        html: note('<b>Analogi A : B = C : D.</b> Buat satu <b>kalimat jembatan</b> yang menghubungkan A dan B, lalu pakai kalimat yang <b>sama</b> untuk C dan D. Uji pula arah sebaliknya (B : A) untuk memastikan.') +
          ex('Contoh 1 (mudah)',
            'Dokter : Rumah Sakit = Guru : ...<br>A. Murid &nbsp; B. Sekolah &nbsp; C. Buku &nbsp; D. Pelajaran',
            ['Kalimat jembatan: "Dokter bekerja di Rumah Sakit."', 'Terapkan: "Guru bekerja di ..." → Sekolah.'],
            'B. Sekolah (profesi : tempat kerja).') +
          ex('Contoh 2 (sedang)',
            'Hujan : Banjir = Kemarau : ...<br>A. Panas &nbsp; B. Kekeringan &nbsp; C. Dingin &nbsp; D. Musim',
            ['Jembatan: "Hujan (lebat) dapat menyebabkan banjir" (sebab : akibat).', 'Terapkan: "Kemarau (panjang) dapat menyebabkan ..." → Kekeringan.', 'A (panas) hanya ciri, bukan akibat langsung.'],
            'B. Kekeringan.') +
          ex('Contoh 3 (gaya CPNS)',
            'Kunci : Pintu = Kata sandi : ...<br>A. Komputer &nbsp; B. Akun &nbsp; C. Internet &nbsp; D. Pengguna',
            ['Jembatan: "Kunci digunakan untuk membuka/mengamankan pintu."', 'Kata sandi digunakan untuk membuka/mengamankan akun.', 'Komputer terlalu umum; pengguna adalah pelaku, bukan objek.'],
            'B. Akun.')
      },
      {
        title: '2. 14 Jenis Hubungan Analogi',
        html: tbl(['No', 'Hubungan', 'Contoh A : B', 'Kalimat jembatan'], [
          ['1', 'Sinonim', 'Pandai : Cerdas', 'A sama artinya dengan B'],
          ['2', 'Antonim', 'Tinggi : Rendah', 'A berlawanan dengan B'],
          ['3', 'Sebab–akibat', 'Hujan : Banjir', 'A menyebabkan B'],
          ['4', 'Alat–fungsi', 'Pisau : Memotong', 'A digunakan untuk B'],
          ['5', 'Pelaku–alat', 'Petani : Cangkul', 'A bekerja memakai B'],
          ['6', 'Profesi–tempat', 'Dokter : Rumah Sakit', 'A bekerja di B'],
          ['7', 'Bagian–keseluruhan', 'Roda : Mobil', 'A adalah bagian dari B'],
          ['8', 'Jenis–golongan', 'Kucing : Hewan', 'A termasuk jenis B'],
          ['9', 'Tingkatan/intensitas', 'Hangat : Panas', 'B lebih kuat dari A'],
          ['10', 'Bahan–hasil', 'Kayu : Meja', 'A bahan untuk membuat B'],
          ['11', 'Pelaku–hasil', 'Penulis : Buku', 'A menghasilkan B'],
          ['12', 'Tahapan/urutan', 'Benih : Tunas', 'A tahap sebelum B'],
          ['13', 'Ciri/sifat', 'Gula : Manis', 'A memiliki sifat B'],
          ['14', 'Satuan hitung', 'Sapi : Ekor', 'A dihitung dengan satuan B']
        ]) +
          ex('Contoh 1 (mudah) – Tingkatan',
            'Dingin : Beku = Hangat : ...<br>A. Sejuk &nbsp; B. Panas &nbsp; C. Basah &nbsp; D. Api',
            ['Jembatan: "Beku adalah dingin yang jauh lebih kuat."', 'Hangat yang lebih kuat adalah Panas.'],
            'B. Panas.') +
          ex('Contoh 2 (sedang) – Pelaku–hasil',
            'Penulis : Buku = Pelukis : ...<br>A. Kuas &nbsp; B. Lukisan &nbsp; C. Galeri &nbsp; D. Kanvas',
            ['Jembatan: "Penulis menghasilkan buku."', 'Pelukis menghasilkan lukisan. Kuas dan kanvas adalah alat/bahan; galeri adalah tempat.'],
            'B. Lukisan.') +
          ex('Contoh 3 (gaya CPNS) – Satuan hitung',
            'Sapi : Ekor = Kertas : ...<br>A. Lembar &nbsp; B. Buah &nbsp; C. Biji &nbsp; D. Batang',
            ['Jembatan: "Sapi dihitung dengan satuan ekor."', 'Kertas dihitung dengan satuan lembar.'],
            'A. Lembar.')
      },
      {
        title: '3. Analogi Kalimat & Uji Dua Arah',
        html: note('Jika dua pilihan tampak sama baiknya, <b>balik arah</b> hubungan (B : A). Pilihan yang tetap sahih dua arah menang. Contoh: "Pelaku : Hasil" gagal bila dibalik, tetapi "Sinonim" tetap benar dibalik.') +
          ex('Contoh 1 (sedang)',
            'Kata : Kalimat = Bata : ...<br>A. Dinding &nbsp; B. Semen &nbsp; C. Tukang &nbsp; D. Genteng',
            ['Jembatan: "Kata adalah unsur pembentuk kalimat" (bagian–keseluruhan).', 'Bata adalah unsur pembentuk dinding.', 'Semen: bahan pengikat, bukan bagian utama dengan hubungan yang sama.'],
            'A. Dinding.') +
          ex('Contoh 2 (gaya CPNS)',
            'Gaji : Pegawai = Honorarium : ...<br>A. Narasumber &nbsp; B. Presiden &nbsp; C. Dokumen &nbsp; D. Instansi',
            ['Jembatan: "Gaji diterima oleh pegawai" (imbalan : penerima).', 'Honorarium diterima oleh narasumber.'],
            'A. Narasumber.')
      },
      {
        title: '4. Padanan Kata: 20 Pasang Sinonim Baku',
        html: tbl(['Kata', 'Padanan', 'Kata', 'Padanan'], [
          ['aktual', 'terkini, mutakhir', 'kapabel', 'cakap, mampu'],
          ['apatis', 'acuh tak acuh', 'kolaborasi', 'kerja sama'],
          ['arif', 'bijaksana', 'kredibel', 'tepercaya'],
          ['bonafide', 'tepercaya, dapat dipercaya', 'mutlak', 'absolut, pasti'],
          ['ekspansi', 'perluasan', 'objektif', 'apa adanya'],
          ['fleksibel', 'luwes', 'optimal', 'terbaik, maksimal'],
          ['hipotesis', 'dugaan sementara', 'prinsip', 'asas'],
          ['implementasi', 'pelaksanaan', 'relevan', 'berkaitan, sesuai'],
          ['inisiatif', 'prakarsa', 'solusi', 'pemecahan'],
          ['urgen', 'mendesak', 'transparan', 'terbuka, jelas']
        ]) +
          ex('Contoh 1 (mudah)',
            'Padanan kata "implementasi" adalah ...<br>A. Pelaksanaan &nbsp; B. Perencanaan &nbsp; C. Penilaian &nbsp; D. Pengawasan',
            ['Implementasi = menerapkan/menjalankan rencana.'],
            'A. Pelaksanaan.') +
          ex('Contoh 2 (sedang)',
            'Kata yang sepadan dengan "urgen" adalah ...<br>A. Penting dan mendesak &nbsp; B. Sepele &nbsp; C. Biasa &nbsp; D. Rutin',
            ['Urgen = harus segera ditangani.'],
            'A. Penting dan mendesak.') +
          ex('Contoh 3 (gaya CPNS)',
            'Sikap "arif" dalam mengambil keputusan berarti ...<br>A. Cepat &nbsp; B. Bijaksana &nbsp; C. Tegas &nbsp; D. Hemat',
            ['Arif = bijaksana, mempertimbangkan banyak hal secara matang.'],
            'B. Bijaksana.')
      },
      {
        title: '5. Lawan Kata: 20 Pasang Antonim Baku',
        html: tbl(['Kata', 'Lawan kata', 'Kata', 'Lawan kata'], [
          ['abstrak', 'konkret', 'legal', 'ilegal'],
          ['altruis', 'egois', 'mikro', 'makro'],
          ['fiktif', 'nyata, faktual', 'pasif', 'aktif'],
          ['hulu', 'hilir', 'ofensif', 'defensif'],
          ['kolektif', 'individual', 'statis', 'dinamis'],
          ['konservatif', 'progresif', 'vertikal', 'horizontal'],
          ['kuantitas', 'kualitas', 'homogen', 'heterogen'],
          ['lahir', 'batin', 'inferior', 'superior'],
          ['optimis', 'pesimis', 'eksplisit', 'implisit'],
          ['prolog', 'epilog', 'kuno', 'modern']
        ]) +
          ex('Contoh 1 (mudah)',
            'Lawan kata "eksplisit" adalah ...<br>A. Implisit &nbsp; B. Jelas &nbsp; C. Nyata &nbsp; D. Terang',
            ['Eksplisit = tegas dinyatakan; lawannya tersirat.'],
            'A. Implisit.') +
          ex('Contoh 2 (sedang)',
            'Antonim "heterogen" adalah ...<br>A. Beragam &nbsp; B. Homogen &nbsp; C. Campuran &nbsp; D. Majemuk',
            ['Heterogen = beragam; lawannya sejenis/seragam.'],
            'B. Homogen.') +
          ex('Contoh 3 (gaya CPNS)',
            'Lawan kata "konservatif" adalah ...<br>A. Tradisional &nbsp; B. Progresif &nbsp; C. Ortodoks &nbsp; D. Kolot',
            ['Konservatif = mempertahankan cara lama.', 'Lawannya cenderung maju/mengubah → progresif.'],
            'B. Progresif.')
      },
      {
        title: '6. Jebakan Umum & Cara Cepat',
        html: ul([
          '<b>Memilih pilihan yang "mirip topik"</b> padahal hubungannya berbeda (misal sebab–akibat vs ciri).',
          '<b>Mencampur arah</b>: menjawab "Alat : Pekerjaan" padahal soal "Pekerjaan : Alat".',
          '<b>Pilihan lebih umum atau lebih khusus</b> dari yang diminta (misal "Komputer" vs "Akun").',
          '<b>Sinonim sebagian</b>: dua kata hampir sama tetapi nuansanya beda; pilih yang paling dekat.'
        ]) +
          tbl(['Langkah', 'Isi'], [
            ['1', 'Cari hubungan A–B, tulis dalam satu kalimat'],
            ['2', 'Uji pilihan C–D dengan kalimat yang sama'],
            ['3', 'Balik arah; sisakan yang konsisten'],
            ['4', 'Bila ragu, pilih yang paling spesifik dan sepasang tingkatannya']
          ])
      }
    ],
    tips: ['Selalu tulis kalimat jembatan sebelum melihat opsi.', 'Uji arah sebaliknya bila dua opsi mirip.', 'Hafalkan 40 pasang sinonim–antonim yang sering keluar.']
  };

  /* =================================================================
     4. FIGURAL
     ================================================================= */
  var figural = {
    id: 'tiu-k-figural', group: 'TIU',
    title: 'Figural: Serial Gambar, Matriks, Cermin, Jaring-Jaring Kubus & Dadu',
    summary: 'Pola rotasi, refleksi, penambahan elemen, warna bergilir, matriks 3×3 (kotak latin), odd-one-out, jaring-jaring kubus, dan dadu, lengkap dengan gambar contoh.',
    buckets: ['SKD_TIU'], subs: ['Figural'],
    sections: [
      {
        title: '1. Lima Pertanyaan Wajib',
        html: ul([
          '<b>Berapa</b> elemen/garis/titik pada tiap gambar? (kuantitas)',
          '<b>Di mana</b> posisinya berpindah? (letak)',
          '<b>Ke arah mana</b> berputar atau dicerminkan? (rotasi/refleksi)',
          '<b>Warna/isi</b> apa dan bagaimana berganti? (hitam–putih–abu)',
          '<b>Ukuran</b> membesar/mengecil? (skala)'
        ]) + note('Periksa satu aspek dalam satu waktu. Biasanya <b>dua aspek berjalan sekaligus</b> (misal bentuk berputar + warna berganti).')
      },
      {
        title: '2. Rotasi (Perputaran)',
        html: note('Rotasi searah jarum jam bernilai sudut positif. Kunci: cari <b>sudut tetap</b> tiap langkah, lalu tambah sekali lagi.') +
          ex('Contoh 1 (mudah) – 90° tiap langkah',
            arrows([0, 90, 180, 270, '?']),
            ['Arah panah: atas (0°) → kanan (90°) → bawah (180°) → kiri (270°).', 'Tambah 90° lagi dari 270° = 360° = 0° → kembali ke atas.'],
            'Panah menghadap ke atas (0°).') +
          ex('Contoh 2 (sedang) – 45° tiap langkah',
            arrows([0, 45, 90, 135, '?']),
            ['Selisih tetap 45° searah jarum jam.', '135° + 45° = 180°.'],
            'Panah menghadap ke bawah (180°).') +
          ex('Contoh 3 (gaya CPNS) – Putaran bertingkat',
            arrows([0, 45, 135, 270, '?']),
            ['Selisih: +45°, +90°, +135° → selisih bertambah 45° tiap langkah.', 'Selisih berikutnya +180°: 270° + 180° = 450° = 90°.'],
            'Panah menghadap ke kanan (90°).')
      },
      {
        title: '3. Refleksi (Pencerminan)',
        html: tbl(['Cermin', 'Yang tertukar'], [
          ['Kiri–kanan (sumbu tegak)', 'Kolom kiri ↔ kolom kanan; baris tetap'],
          ['Atas–bawah (sumbu mendatar)', 'Baris atas ↔ baris bawah; kolom tetap']
        ]) +
          note('Pindahkan <b>satu per satu kotak</b>: kolom ke-1 menjadi kolom ke-3 pada cermin kiri–kanan.') +
          '<p><b>Gambar asli:</b></p>' +
          grid([[0, 0], [0, 1], [1, 0], [2, 0]], 'Asli') +
          ex('Contoh 1 (mudah) – Cermin kiri–kanan',
            'Gambar asli: kotak hitam di (baris 1, kolom 1), (1,2), (2,1), (3,1). Bayangan kiri–kanannya?<br>' + grid([[0, 0], [0, 1], [1, 0], [2, 0]], 'Asli'),
            ['Kolom 1 ↔ kolom 3, kolom 2 tetap di tengah.', '(1,1) → (1,3); (1,2) → (1,2); (2,1) → (2,3); (3,1) → (3,3).'],
            'Kotak hitam di (1,3), (1,2), (2,3), (3,3).<br>' + grid([[0, 2], [0, 1], [1, 2], [2, 2]], 'Jawaban')) +
          ex('Contoh 2 (sedang) – Cermin atas–bawah',
            'Gambar asli yang sama, dicerminkan atas–bawah. Bayangannya?',
            ['Baris 1 ↔ baris 3, baris 2 tetap.', '(1,1) → (3,1); (1,2) → (3,2); (2,1) → (2,1); (3,1) → (1,1).'],
            'Kotak hitam di (3,1), (3,2), (2,1), (1,1).<br>' + grid([[2, 0], [2, 1], [1, 0], [0, 0]], 'Jawaban')) +
          ex('Contoh 3 (gaya CPNS) – Jebakan gambar simetris',
            'Gambar: kotak hitam di (1,1), (2,1), (2,2), (3,1). Bila dicerminkan atas–bawah, apakah bayangannya sama dengan aslinya?',
            ['Cermin atas–bawah: (1,1) ↔ (3,1), (2,1) tetap, (2,2) tetap.', 'Hasil: (3,1), (2,1), (2,2), (1,1) = kumpulan kotak yang <b>sama</b> dengan asli.', 'Gambar sudah simetris terhadap garis mendatar sehingga bayangannya identik.'],
            'Ya, bayangannya sama dengan aslinya.')
      },
      {
        title: '4. Penambahan atau Pengurangan Elemen',
        html: note('Hitung jumlah elemen tiap gambar, lalu cari rumus deret (aritmetika, bertingkat, dll.).') +
          ex('Contoh 1 (mudah)',
            'Jumlah titik pada gambar berurutan: 1, 2, 3, 4, ? titik.',
            ['Selisih tetap +1.'],
            '5 titik.') +
          ex('Contoh 2 (sedang) – Sisi poligon',
            'Gambar berurutan: segitiga, persegi, segi lima, segi enam, ...',
            ['Jumlah sisi: 3, 4, 5, 6 → +1 tiap langkah.', 'Berikutnya 7 sisi.'],
            'Segi tujuh.') +
          ex('Contoh 3 (gaya CPNS) – Selisih bertingkat',
            'Jumlah garis pada gambar: 2, 3, 5, 8, 12, ?',
            ['Selisih: 1, 2, 3, 4 → +1 tiap langkah.', 'Selisih berikutnya 5: 12 + 5 = 17.'],
            '17 garis.')
      },
      {
        title: '5. Isi/Warna Bergilir dan Pola Ganda',
        html: note('Jika dua sifat berubah dengan <b>periode berbeda</b>, hitung posisi ke-n dengan sisa pembagian (modulo). Contoh: bentuk berperiode 3, warna berperiode 2 → pola berulang tiap KPK(3,2) = 6.') +
          ex('Contoh 1 (mudah)',
            'Warna lingkaran berurutan: hitam, putih, abu, hitam, putih, ?',
            ['Siklus 3: hitam → putih → abu.', 'Setelah putih adalah abu.'],
            'Abu-abu.') +
          '<p><b>Gambar urutan ke-1 sampai ke-8:</b></p>' +
          '<div style="display:flex;flex-wrap:wrap;gap:4px;background:#fff;padding:4px">' +
          [['segitiga', 'putih'], ['persegi', 'hitam'], ['lingkaran', 'putih'], ['segitiga', 'hitam'], ['persegi', 'putih'], ['lingkaran', 'hitam'], ['segitiga', 'putih'], ['persegi', 'hitam']].map(function (p, i) { return '<span style="text-align:center;font-size:11px">' + shape(p[0], p[1]) + '<br>' + (i + 1) + '</span>'; }).join('') + '</div>' +
          ex('Contoh 2 (sedang) – Pola ganda',
            'Bentuk berulang: segitiga, persegi, lingkaran (periode 3). Warna berganti: putih, hitam (periode 2). Gambar ke-9 adalah ...',
            ['Bentuk: 9 mod 3 = 0 → bentuk ke-3 siklus = lingkaran.', 'Warna: 9 ganjil → putih (ganjil = putih, genap = hitam).'],
            'Lingkaran putih.') +
          ex('Contoh 3 (gaya CPNS)',
            'Dengan pola yang sama, gambar ke-14 adalah ...',
            ['Bentuk: 14 mod 3 = 2 → bentuk ke-2 siklus = persegi.', 'Warna: 14 genap → hitam.'],
            'Persegi hitam.')
      },
      {
        title: '6. Matriks 3×3 (Kotak Latin)',
        html: note('Aturan umum: di tiap baris dan kolom, setiap bentuk dan setiap warna muncul <b>tepat satu kali</b> (kotak latin). Cari yang <b>belum muncul</b> pada baris dan kolom sel kosong.') +
          ex('Contoh 1 (mudah) – Bentuk saja',
            'Baris 1: lingkaran, persegi, segitiga. Baris 2: persegi, segitiga, lingkaran. Baris 3: segitiga, lingkaran, ? Sel kosong berisi ...',
            ['Baris 3 sudah memuat segitiga dan lingkaran.', 'Yang belum muncul: persegi.'],
            'Persegi.') +
          ex('Contoh 2 (sedang) – Bentuk dan warna',
            matrix([[['lingkaran', 'putih'], ['persegi', 'abu'], ['segitiga', 'hitam']], [['persegi', 'hitam'], ['segitiga', 'putih'], ['lingkaran', 'abu']], [['segitiga', 'abu'], ['lingkaran', 'hitam'], '?']]),
            ['Baris 3 memuat segitiga abu dan lingkaran hitam → sisa bentuk: persegi; sisa warna: putih.', 'Cek kolom 3: segitiga hitam, lingkaran abu, ? → warna sisa putih, bentuk sisa persegi. Konsisten.'],
            'Persegi putih.') +
          ex('Contoh 3 (gaya CPNS) – Jumlah titik',
            'Matriks jumlah titik: baris 1: 2, 1, 3. Baris 2: 1, 3, 4. Baris 3: 3, 4, ? Kolom ke-3 = kolom ke-1 + kolom ke-2.',
            ['Cek baris 1: 2 + 1 = 3 ✔.', 'Cek baris 2: 1 + 3 = 4 ✔.', 'Baris 3: 3 + 4 = 7.'],
            '7 titik.')
      },
      {
        title: '7. Odd One Out (Gambar yang Berbeda)',
        html: note('Cari <b>sifat yang dimiliki empat gambar</b> tetapi tidak dimiliki satu gambar. Sifat umum: jumlah sisi, garis simetri, sudut siku-siku, warna, arah, jumlah titik.') +
          ex('Contoh 1 (mudah)',
            'Manakah yang berbeda: segitiga sama sisi, persegi, segi lima beraturan, segi enam beraturan, jajar genjang?',
            ['Empat bangun pertama adalah <b>poligon beraturan</b>: semua sisi dan sudut sama.', 'Jajar genjang umum tidak beraturan dan tidak punya garis simetri lipat.'],
            'Jajar genjang.') +
          ex('Contoh 2 (sedang)',
            'Lima gambar: panah ke atas, panah ke kanan, panah ke bawah, panah ke kiri, huruf "P". Mana yang berbeda?',
            ['Empat gambar pertama adalah <b>panah dalam rotasi</b> yang sama; huruf P bukan panah.'],
            'Huruf "P".') +
          ex('Contoh 3 (gaya CPNS)',
            'Gambar jumlah titik: 3, 5, 7, 9, 10. Mana yang berbeda?',
            ['Empat bilangan pertama adalah bilangan ganjil berurutan.', '10 adalah genap.'],
            '10.')
      },
      {
        title: '8. Jaring-Jaring Kubus',
        html: tbl(['Jenis jaring (11 yang sah)', 'Jumlah', 'Contoh baris'], [
          ['1–4–1 (baris tengah 4 persegi, 1 di atas, 1 di bawah)', '6', 'bagian atas dan bawah dapat di posisi mana saja'],
          ['2–3–1', '3', 'tangga pendek'],
          ['2–2–2', '1', 'tangga tiga baris'],
          ['3–3', '1', 'dua baris tiga persegi bergeser']
        ]) +
          note('<b>Tidak sah:</b> ada blok <b>2×2</b>, ada <b>5 persegi berderet</b>, atau pada pola 1–4–1 kedua persegi tambahan berada di <b>sisi yang sama</b>.') +
          '<p><b>Cara menentukan sisi berhadapan:</b> dalam satu deretan, dua persegi yang <b>terpisah satu persegi</b> saling berhadapan (1 dan 3, 2 dan 4). Dua persegi tambahan pada pola 1–4–1 yang berada di sisi berlawanan juga berhadapan.</p>' +
          ex('Contoh 1 (mudah) – Sisi berhadapan',
            'Jaring 1–4–1 berikut diberi nama sel: baris tengah A, B, C, D; E di atas B; F di bawah D.<br>' + net([[0, 1], [1, 0], [1, 1], [1, 2], [1, 3], [2, 3]], ['E', 'A', 'B', 'C', 'D', 'F']) + '<br>Sisi yang berhadapan dengan B adalah ...',
            ['Pada baris tengah, B dan D terpisah satu persegi (C berada di antara) → berhadapan.', 'Pasangan lain: A–C berhadapan, E–F berhadapan.'],
            'D.') +
          ex('Contoh 2 (sedang) – Jaring sah atau tidak',
            'Apakah jaring ini dapat dilipat menjadi kubus?<br>' + net([[0, 0], [0, 1], [1, 0], [1, 1], [2, 1], [3, 1]]),
            ['Ada blok 2×2 pada sudut kiri atas (empat persegi membentuk persegi besar).', 'Blok 2×2 membuat dua sisi bertabrakan saat dilipat.'],
            'Tidak, karena ada blok 2×2.') +
          ex('Contoh 3 (gaya CPNS) – Dua tambahan di sisi yang sama',
            'Apakah jaring berikut dapat membentuk kubus?<br>' + net([[0, 1], [0, 3], [1, 0], [1, 1], [1, 2], [1, 3]]),
            ['Pola 1–4–1: baris tengah 4 persegi; persegi tambahan berada <b>di atas</b> sel 2 dan sel 4 (keduanya di sisi atas).', 'Persegi tambahan harus berada di sisi yang berlawanan agar menjadi tutup atas dan bawah; kedua ini bertabrakan.'],
            'Tidak. (Sudah diverifikasi dengan simulasi lipatan.)')
      },
      {
        title: '9. Dadu',
        html: tbl(['Sisi', 'Berhadapan dengan'], [['1', '6'], ['2', '5'], ['3', '4']]) +
          note('Pada dadu standar, <b>jumlah sisi berhadapan selalu 7</b>.') +
          ex('Contoh 1 (mudah)',
            'Dadu menampilkan atas 1, depan 2, kanan 3. Berapa sisi bawah, belakang, dan kiri?',
            ['Bawah berhadapan dengan atas: 7 − 1 = 6.', 'Belakang berhadapan dengan depan: 7 − 2 = 5.', 'Kiri berhadapan dengan kanan: 7 − 3 = 4.'],
            'Bawah 6, belakang 5, kiri 4.') +
          ex('Contoh 2 (sedang) – Digulirkan ke depan',
            'Dadu awal: atas 1, depan 2, bawah 6, belakang 5. Dadu <b>digulirkan satu kali ke depan</b> (terguling ke arah Anda, sehingga sisi atas menjadi sisi depan). Sisi atas sekarang?',
            ['Gulir ke depan: sisi atas pindah ke depan, sisi depan pindah ke bawah, sisi bawah pindah ke belakang, sisi belakang pindah ke atas.', 'Sisi belakang awal = 5 → menjadi atas.'],
            '5. (Sekarang depan 1, bawah 2, belakang 6.)') +
          ex('Contoh 3 (gaya CPNS) – Digulirkan ke kanan',
            'Dari kondisi awal yang sama (atas 1, depan 2, kanan 3, kiri 4), dadu digulirkan satu kali ke kanan. Sisi atas sekarang?',
            ['Gulir ke kanan: atas pindah ke kanan, kanan pindah ke bawah, bawah pindah ke kiri, kiri pindah ke atas.', 'Sisi kiri awal = 4 → menjadi atas.'],
            '4. (Sekarang kanan 1, bawah 3, kiri 6.)')
      },
      {
        title: '10. Jebakan Umum & Cara Cepat',
        html: ul([
          '<b>Mengecek satu aspek saja</b> (misal hanya rotasi) padahal warna juga berubah.',
          '<b>Mencampur arah putar</b> (searah vs berlawanan jarum jam).',
          '<b>Cermin salah sumbu</b>: kiri–kanan ≠ atas–bawah.',
          '<b>Mengira semua 6 persegi dapat jadi kubus</b>; hanya 11 jaring yang sah.',
          '<b>Lupa bahwa gambar simetris</b> tidak berubah saat dicerminkan pada sumbunya.'
        ]) +
          tbl(['Soal', 'Cara cepat'], [
            ['Serial gambar', 'Periksa jumlah → posisi → rotasi → warna'],
            ['Cermin', 'Pindahkan kolom/baris satu per satu'],
            ['Matriks', 'Cari yang belum muncul di baris dan kolom'],
            ['Jaring-jaring', 'Cek 2×2 dan lima berderet; selang satu = berhadapan'],
            ['Dadu', 'Berhadapan = jumlah 7; ikuti sisi yang berpindah saat digulir']
          ])
      }
    ],
    tips: ['Periksa satu aspek per langkah: jumlah, posisi, putaran, warna, ukuran.', 'Pada jaring-jaring kubus: selang satu persegi berarti berhadapan.', 'Pada dadu: sisi berhadapan selalu berjumlah 7.']
  };

  window.__TIUK = (window.__TIUK || []).concat([silogisme, analitis, verbal, figural]);
})();
;(function(){
  var NEW=window.__TIUK||[];if(!NEW.length||!window.MATERI)return;
  var M=window.MATERI;
  var order=['tiu-k-kuant','tiu-k-ratio','tiu-k-hitung','tiu-k-deret','tiu-k-huruf','tiu-k-cerita','tiu-k-himpunan','tiu-k-silogisme','tiu-k-analitis','tiu-k-verbal','tiu-k-figural'];
  var byId={};NEW.forEach(function(m){byId[m.id]=m});
  var OLD=['soal-cerita','tiu-soal-cerita-lengkap','deret-angka','tiu-deret-lengkap','analogi','tiu-analogi-lengkap','silogisme','tiu-silogisme-lengkap','tiu-berhitung-cepat','perbandingan-kuantitatif','tiu-figural-lengkap','figural-analitis','tiu-logika-analitis','tiu-himpunan-peluang'];
  var home={'soal-cerita':'tiu-k-cerita','tiu-soal-cerita-lengkap':'tiu-k-cerita','figural-analitis':'tiu-k-figural','tiu-figural-lengkap':'tiu-k-figural','perbandingan-kuantitatif':'tiu-k-ratio','tiu-berhitung-cepat':'tiu-k-hitung'};
  // simpan gambar/diagram bawaan dari materi lama
  M.forEach(function(o){
    if(OLD.indexOf(o.id)<0||!home[o.id]||!byId[home[o.id]])return;
    var tgt=byId[home[o.id]];
    (o.sections||[]).forEach(function(s){
      if(/<img /.test(s.html||'')&&!tgt.sections.some(function(x){return x.html===s.html})) tgt.sections.splice(1,0,{title:s.title,html:s.html});
    });
  });
  var firstIdx=-1;
  for(var i=M.length-1;i>=0;i--){if(OLD.indexOf(M[i].id)>-1){M.splice(i,1);firstIdx=i}}
  if(firstIdx<0)firstIdx=M.length;
  var items=order.map(function(id){return byId[id]}).filter(Boolean);
  M.splice.apply(M,[firstIdx,0].concat(items));
})();
