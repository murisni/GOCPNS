/* v23: Peta Pasal UUD 1945 (hasil amandemen I–IV) per Bab, ditambahkan ke materi UUD agar sesuai dengan soal. */
(function(){
  var R=[
  ['I Bentuk & Kedaulatan','1','(1) Negara Kesatuan berbentuk Republik; (2) kedaulatan di tangan rakyat, dilaksanakan menurut UUD; (3) Indonesia adalah negara hukum'],
  ['II MPR','2','MPR = anggota DPR + DPD, dipilih melalui pemilu; bersidang sedikitnya sekali dalam 5 tahun'],
  ['II MPR','3','MPR berwenang: mengubah &amp; menetapkan UUD; melantik Presiden/Wapres; memberhentikan Presiden/Wapres dalam masa jabatan menurut UUD'],
  ['III Kekuasaan Pemerintahan','4','Presiden memegang kekuasaan pemerintahan menurut UUD; dalam melakukan kewajibannya dibantu satu Wakil Presiden'],
  ['III','5','Presiden berhak mengajukan RUU ke DPR; menetapkan Peraturan Pemerintah'],
  ['III','6 / 6A','6: calon Presiden WNI sejak kelahirannya, tidak pernah mengkhianati negara. 6A: dipilih langsung sepasang; menang bila &gt;50% suara dan sedikitnya 20% di lebih dari setengah jumlah provinsi; bila tidak, putaran kedua dua pasangan teratas'],
  ['III','7 / 7A / 7B / 7C','7: masa jabatan 5 tahun, dapat dipilih kembali hanya untuk satu kali masa jabatan. 7A: dapat diberhentikan MPR atas usul DPR (pengkhianatan negara, korupsi, penyuapan, tindak pidana berat lain, perbuatan tercela, tidak lagi memenuhi syarat). 7B: DPR usul → <b>MK</b> memeriksa (paling lama 90 hari) → MPR memutuskan. 7C: <b>Presiden tidak dapat membekukan/membubarkan DPR</b>'],
  ['III','8','Presiden mangkat/berhenti → Wapres menggantikan. Bila keduanya berhalangan: <b>Mendagri, Menlu, Menhan</b> bersama-sama sebagai pelaksana tugas; MPR memilih pengganti paling lama 30 hari'],
  ['III','9 / 10 / 11 / 12','9: sumpah/janji Presiden. 10: Presiden pemegang kekuasaan tertinggi atas AD, AL, AU. 11: menyatakan perang, damai, dan perjanjian dengan negara lain <b>dengan persetujuan DPR</b>. 12: keadaan bahaya'],
  ['III','13','Mengangkat duta &amp; konsul; mengangkat duta <b>dengan pertimbangan DPR</b>; menerima duta negara lain dengan pertimbangan DPR'],
  ['III','14','<b>Grasi &amp; rehabilitasi</b> = pertimbangan <b>MA</b>; <b>amnesti &amp; abolisi</b> = pertimbangan <b>DPR</b>'],
  ['III','15 / 16','15: gelar, tanda jasa, kehormatan. 16: dewan pertimbangan'],
  ['V Kementerian','17','Menteri diangkat dan diberhentikan Presiden; tiap menteri membidangi urusan tertentu dalam pemerintahan'],
  ['VI Pemda','18 / 18A / 18B','18: daerah provinsi, kabupaten, kota; otonomi seluas-luasnya; kepala daerah dipilih secara demokratis. 18A: hubungan wewenang pusat–daerah. 18B: mengakui satuan pemerintahan daerah khusus/istimewa dan kesatuan masyarakat hukum adat'],
  ['VII DPR','19 / 20 / 20A / 21','19: anggota DPR dipilih lewat pemilu. 20: DPR memegang kekuasaan membentuk UU; RUU dibahas &amp; disetujui bersama DPR–Presiden; RUU sah otomatis bila tidak disahkan Presiden dalam 30 hari. 20A: fungsi <b>legislasi, anggaran, pengawasan</b>; hak <b>interpelasi, angket, menyatakan pendapat</b>. 21: anggota DPR berhak mengajukan usul RUU'],
  ['VII','22','<b>Perppu</b> ditetapkan Presiden dalam kegentingan yang memaksa; harus mendapat persetujuan DPR pada persidangan berikutnya (bila tidak, dicabut)'],
  ['VIIA DPD','22C / 22D','22C: anggota DPD dari tiap provinsi dipilih lewat pemilu, jumlahnya sama, seluruhnya tidak lebih dari 1/3 anggota DPR. 22D: mengajukan &amp; ikut membahas RUU otda, hubungan pusat–daerah, pemekaran, SDA, perimbangan keuangan; memberi pertimbangan RUU APBN, pajak, pendidikan, agama; mengawasi pelaksanaan UU tertentu'],
  ['VIIB Pemilu','22E','Pemilu <b>tiap 5 tahun</b>, asas <b>luber jurdil</b>; peserta: partai politik (DPR/DPRD), perseorangan (DPD); diselenggarakan KPU yang nasional, tetap, mandiri'],
  ['VIII Keuangan','23 / 23A–23D','23: APBN ditetapkan UU tiap tahun. 23A: pajak &amp; pungutan yang bersifat memaksa diatur UU. 23B: macam &amp; harga mata uang diatur UU. 23C: hal lain keuangan negara diatur UU. 23D: negara memiliki <b>bank sentral</b> (independen)'],
  ['VIII','23E / 23F / 23G','<b>BPK</b>: 23E memeriksa pengelolaan &amp; tanggung jawab keuangan negara (hasil ke DPR, DPD, DPRD); 23F anggota dipilih DPR dengan pertimbangan DPD, diresmikan Presiden; 23G berkedudukan di ibu kota, perwakilan di tiap provinsi'],
  ['IX Kekuasaan Kehakiman','24','Kekuasaan kehakiman merdeka; dilakukan oleh <b>MA</b> beserta badan peradilan di bawahnya (umum, agama, militer, tata usaha negara) dan oleh <b>MK</b>'],
  ['IX','24A','<b>MA</b>: mengadili tingkat kasasi; menguji peraturan di bawah UU terhadap UU. Hakim agung diusulkan KY ke DPR, ditetapkan Presiden'],
  ['IX','24B','<b>KY</b>: mandiri; mengusulkan pengangkatan hakim agung; menjaga kehormatan, keluhuran martabat, perilaku hakim'],
  ['IX','24C','<b>MK</b> (tingkat pertama &amp; terakhir, putusan final): <b>(1) menguji UU terhadap UUD, (2) sengketa kewenangan lembaga negara, (3) pembubaran partai politik, (4) perselisihan hasil pemilu</b>; wajib memutus pendapat DPR soal dugaan pelanggaran Presiden/Wapres. <b>9 hakim</b>: 3 dari MA, 3 dari DPR, 3 dari Presiden'],
  ['IXA Wilayah','25A','NKRI adalah negara kepulauan berciri Nusantara; wilayah &amp; batasnya diatur UU'],
  ['X Warga Negara','26 / 27 / 28','26: warga negara = bangsa Indonesia asli &amp; bangsa lain yang disahkan UU. 27: (1) sama kedudukan dalam hukum &amp; pemerintahan, (2) hak atas pekerjaan &amp; penghidupan layak, (3) <b>hak &amp; kewajiban membela negara</b>. 28: kemerdekaan berserikat, berkumpul, mengeluarkan pikiran'],
  ['XA HAM','28A–28J','28A hak hidup; 28B keluarga, anak; 28C pendidikan &amp; pengembangan diri; 28D kepastian hukum, bekerja, kewarganegaraan; 28E agama, memilih tempat tinggal; 28F informasi; 28G perlindungan diri, bebas penyiksaan; 28H sejahtera, kesehatan, jaminan sosial; 28I hak yang <b>tidak dapat dikurangi dalam keadaan apa pun</b> (hidup, tidak disiksa, pikiran &amp; hati nurani, beragama, tidak diperbudak, diakui sebagai pribadi, tidak dituntut atas hukum berlaku surut); 28J kewajiban menghormati HAM orang lain &amp; dibatasi UU'],
  ['XI Agama','29','(1) Negara berdasar atas <b>Ketuhanan Yang Maha Esa</b>; (2) negara menjamin kemerdekaan memeluk agama &amp; beribadat'],
  ['XII Hankam','30','Hak &amp; kewajiban warga ikut usaha pertahanan &amp; keamanan; sistem <b>hankamrata</b> (rakyat semesta); <b>TNI</b> (AD, AL, AU) mempertahankan kedaulatan; <b>Polri</b> menjaga keamanan &amp; ketertiban, melindungi, mengayomi, melayani, menegakkan hukum'],
  ['XIII Pendidikan &amp; Kebudayaan','31 / 32','31: hak pendidikan; wajib pendidikan dasar dibiayai pemerintah; anggaran pendidikan <b>minimal 20%</b> dari APBN dan APBD. 32: memajukan kebudayaan nasional; menghormati &amp; memelihara bahasa daerah'],
  ['XIV Ekonomi &amp; Kesejahteraan','33','(1) usaha bersama, asas kekeluargaan; (2) cabang produksi penting yang menguasai hajat hidup orang banyak dikuasai negara; (3) bumi, air, kekayaan alam dikuasai negara untuk sebesar-besar kemakmuran rakyat; (4) kebersamaan, efisiensi berkeadilan, berkelanjutan, berwawasan lingkungan, kemandirian'],
  ['XIV','34','Fakir miskin &amp; anak terlantar dipelihara negara; sistem jaminan sosial; fasilitas pelayanan kesehatan &amp; umum'],
  ['XV Simbol Negara','35 / 36 / 36A–C','35 Sang Merah Putih; 36 Bahasa Indonesia; 36A Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika; 36B Indonesia Raya; 36C diatur UU'],
  ['XVI Perubahan','37','Usul perubahan diajukan <b>≥ 1/3</b> anggota MPR; sidang dihadiri <b>≥ 2/3</b>; putusan disetujui <b>≥ 50% + 1</b>; <b>bentuk NKRI tidak dapat diubah</b>']
  ];
  var h='<table class="table table-sm"><thead><tr><th>Bab</th><th>Pasal</th><th>Isi inti</th></tr></thead><tbody>'+R.map(function(r){return '<tr><td>'+r[0]+'</td><td><b>'+r[1]+'</b></td><td>'+r[2]+'</td></tr>'}).join('')+'</tbody></table><div class="callout"><b>Sering keluar:</b> 24C (empat wewenang MK), 7A–7C (pemberhentian Presiden), 14 (grasi/amnesti), 20A (hak DPR), 22 (Perppu), 22E (pemilu), 27(3) &amp; 30 (bela negara), 31(4) (20%), 33, 37.</div>';
  (window.MATERI||[]).forEach(function(m){
    if(m.id==='twk-uud-lengkap'||m.id==='uud-1945'){
      if((m.sections||[]).some(function(s){return s.title==='Peta Pasal UUD 1945 per Bab'})) return;
      m.sections=(m.sections||[]).concat([{title:'Peta Pasal UUD 1945 per Bab',html:h}]);
    }
  });
})();
