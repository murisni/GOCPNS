(function(){
  if(!window.MATERI) window.MATERI=[];
  var tbl=function(h,r){return '<table class="table table-sm"><thead><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead><tbody>'+r.map(function(a){return '<tr>'+a.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>'};
  var ul=function(a){return '<ul>'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>'};
  var note=function(t){return '<div class="callout">'+t+'</div>'};
  var M=function(id,title,summary,subs,sections,tips){return {id:id,group:'SKB',skbCategory:'PRAKOM',title:title,summary:summary,buckets:['SKB_PRAKOM'],subs:subs,sections:sections,tips:tips}};
  var items=[
  M('prakom-risiko-ti','Manajemen Risiko TI: ISO 31000, Matriks Risiko & Respons Risiko',
    'Proses ISO 31000, rumus risiko, 4 respons risiko, risiko inheren vs residual, BIA, kontrol, studi kasus.',
    ['Manajemen Risiko TI'],[
    {title:'Konsep & Rumus',html:ul(['<b>Risiko = Kemungkinan (likelihood) × Dampak (impact)</b>. Ancaman memanfaatkan <b>kerentanan</b> pada <b>aset</b>.',
      '<b>Risiko inheren</b> = sebelum kontrol; <b>risiko residual</b> = sisa setelah kontrol; <b>risk appetite</b> = tingkat risiko yang mau diterima organisasi.',
      '<b>ISO 31000</b> (pedoman manajemen risiko): prinsip, kerangka kerja, proses. <b>ISO 27005</b> khusus risiko keamanan informasi. <b>PermenPANRB 5/2020</b> &amp; <b>Perpres 95/2018 (SPBE)</b> mewajibkan manajemen risiko SPBE.',
      '<b>BIA</b> (Business Impact Analysis) menentukan proses kritis, <b>RTO</b> &amp; <b>RPO</b>; hasilnya dipakai menyusun BCP/DRP.'])},
    {title:'Proses ISO 31000 & Empat Respons Risiko',html:tbl(['Tahap','Isi'],[['1','Menetapkan konteks (lingkup, kriteria)'],['2','<b>Identifikasi</b> risiko'],['3','<b>Analisis</b> (kemungkinan × dampak)'],['4','<b>Evaluasi</b> (bandingkan dengan kriteria/selera risiko)'],['5','<b>Perlakuan</b> risiko'],['Sepanjang proses','Komunikasi-konsultasi &amp; pemantauan-reviu']])+
      tbl(['Respons','Arti','Contoh'],[['<b>Mitigasi/Reduce</b>','Menurunkan kemungkinan/dampak','Pasang firewall, backup, patching'],['<b>Transfer/Share</b>','Memindahkan ke pihak lain','Asuransi, outsourcing/cloud SLA'],['<b>Avoid</b>','Menghentikan aktivitas berisiko','Menutup layanan lama yang rentan'],['<b>Accept</b>','Menerima bila di bawah selera risiko','Risiko kecil, biaya kontrol &gt; manfaat']])+
      note('<b>Jebakan:</b> membeli asuransi/cloud = <b>transfer</b>, bukan mitigasi. Risiko residual yang masih di atas selera risiko harus diperlakukan lagi.')},
    {title:'Kontrol & Ancaman',html:tbl(['Jenis kontrol','Fungsi','Contoh'],[['Preventif','Mencegah kejadian','Enkripsi, MFA, firewall'],['Detektif','Mendeteksi','Log, IDS, audit'],['Korektif','Memulihkan/memperbaiki','Restore backup, patch'],['Deterren','Menakut-nakuti','Peringatan, CCTV terlihat']])+
      ul(['Aset TI: data, perangkat keras/lunak, SDM, layanan. Ancaman: malware, <i>ransomware</i>, DDoS, <i>insider</i>, bencana.','Skor sederhana: matriks 5×5 → rendah/sedang/tinggi/ekstrem; prioritaskan yang tertinggi.'])}
  ],['Risiko = peluang × dampak.','4 respons: <b>Mitigasi, Transfer, Hindari, Terima</b>.','BIA → RTO/RPO → DRP.']),
  M('prakom-ea-togaf','Arsitektur Enterprise: TOGAF ADM, Domain Arsitektur & Zachman',
    'Empat domain arsitektur, fase ADM A–H, Zachman, SPBE (Arsitektur SPBE Nasional/Instansi), interoperabilitas.',
    ['Arsitektur Enterprise'],[
    {title:'Empat Domain & ADM',html:tbl(['Domain','Isi'],[['Bisnis','Proses, organisasi, tata kelola'],['Data','Entitas &amp; sumber data'],['Aplikasi','Sistem &amp; interaksinya'],['Teknologi','Infrastruktur, jaringan, platform']])+
      tbl(['Fase ADM','Nama'],[['Prelim','Persiapan'],['A','Architecture Vision'],['B','Business Architecture'],['C','Information Systems (Data &amp; Aplikasi)'],['D','Technology Architecture'],['E','Opportunities &amp; Solutions'],['F','Migration Planning'],['G','Implementation Governance'],['H','Architecture Change Management'],['Pusat','Requirements Management']])+note('Urutan <b>B-C-D</b> = Bisnis → Sistem informasi → Teknologi. Siklus bersifat <b>iteratif</b>.')},
    {title:'Zachman, SPBE & Interoperabilitas',html:ul(['<b>Zachman</b> = matriks 6 pertanyaan (What, How, Where, Who, When, Why) × 6 perspektif; sebuah <b>skema klasifikasi</b>, bukan proses.',
      '<b>Arsitektur SPBE</b> (Perpres 95/2018): referensi Bisnis, Data &amp; Informasi, Infrastruktur, Aplikasi, Keamanan; ada <b>Arsitektur SPBE Nasional</b> dan <b>Arsitektur SPBE Instansi Pusat/Pemda</b>.',
      '<b>Interoperabilitas</b>: pertukaran data antar sistem lewat standar terbuka/API; <b>Satu Data Indonesia</b> (Perpres 39/2019) = satu standar, metadata, interoperabel, kode referensi.','Enterprise architecture menyelaraskan <b>bisnis dan TI</b> (business-IT alignment) dan mencegah aplikasi tumpang tindih.'])}
  ],['ADM: Prelim, A Vision, B Bisnis, C IS, D Tek, E Solusi, F Migrasi, G Governance, H Change.','Zachman = klasifikasi 6W×6 perspektif.']),
  M('prakom-data-governance','Pengelolaan Data: Tata Kelola Data, Satu Data, Kualitas & PDP',
    'DAMA, dimensi kualitas data, siklus hidup data, Satu Data Indonesia, UU PDP, data warehouse vs data lake, ETL.',
    ['Pengelolaan Data'],[
    {title:'Tata Kelola & Kualitas Data',html:tbl(['Dimensi kualitas','Arti'],[['Akurasi','Sesuai fakta'],['Kelengkapan','Tidak ada nilai kosong penting'],['Konsistensi','Sama di semua sistem'],['Ketepatan waktu','Mutakhir'],['Keunikan','Tanpa duplikasi'],['Validitas','Sesuai format/aturan']])+
      ul(['<b>Data steward</b> = penjaga kualitas data domain; <b>data owner</b> = pemilik/penanggung jawab; <b>data custodian</b> = pengelola teknis.','<b>Master data</b> = data referensi inti (kode wilayah, NIK); <b>metadata</b> = data tentang data.','Siklus hidup: buat → simpan → gunakan → bagikan → arsipkan → <b>musnahkan</b>.'])},
    {title:'Satu Data, PDP & Penyimpanan Analitik',html:ul(['<b>Satu Data Indonesia (Perpres 39/2019)</b>: standar data, metadata, interoperabilitas, kode referensi &amp; data induk. Peran: <b>Walidata</b> (pengelola data), <b>Produsen Data</b>, Pembina Data.',
      '<b>UU 27/2022 PDP</b>: ada <b>pengendali</b> dan <b>prosesor</b> data pribadi; data spesifik (kesehatan, biometrik, anak, keuangan) perlu perlindungan lebih; wajib notifikasi kegagalan perlindungan paling lambat <b>3×24 jam</b>.',
      '<b>Data warehouse</b>: terstruktur, skema ditentukan di awal (schema-on-write), untuk laporan. <b>Data lake</b>: data mentah segala format (schema-on-read). <b>ETL</b> = Extract–Transform–Load.',
      '<b>OLTP</b> = transaksi harian (normalisasi); <b>OLAP</b> = analisis multidimensi (cube, dimensi &amp; fakta, <i>star schema</i>).'])+note('<b>Jebakan:</b> Walidata ≠ produsen; produsen menghasilkan data, Walidata mengelola &amp; menyebarluaskan.')}
  ],['Dimensi kualitas: akurasi, lengkap, konsisten, tepat waktu, unik, valid.','PDP: notifikasi 3×24 jam.','Warehouse = schema-on-write; lake = schema-on-read.'])
  ];
  var idx=window.MATERI.findIndex(function(m){return m.id==='prakom-regulasi'});
  if(idx<0) idx=window.MATERI.length;
  window.MATERI.splice.apply(window.MATERI,[idx,0].concat(items.filter(function(it){return !window.MATERI.some(function(m){return m.id===it.id})})));
})();
