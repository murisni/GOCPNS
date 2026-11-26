/* ==========================================================================
   KemenSuite — Lab SKB Non-CAT & Studi Kasus (Kementerian & Pemda),
   Kalkulator 40:60, & Bank Evaluasi (Error Vault + Bookmark Soal Sulit)
   ========================================================================== */
(function () {
  'use strict';

  const NOTE_KEY = 'cpns_interview_notes_v1';
  const PAULI_BEST_KEY = 'cpns_pauli_best_v1';

  function B() { return window.GocpnsBridge || {}; }
  function esc(s) { return (B().esc || (x => String(x || '')))(s); }
  function dlg(id, cls = 'modal-box max-w-3xl') {
    const b = B();
    const d = b.planDlg ? b.planDlg(id) : document.createElement('dialog');
    d.dataset.boxClass = cls;
    return d;
  }
  function activeTargetBucket() {
    const b = B();
    return (b.getTargetBucket && b.getTargetBucket()) || '';
  }
  function roleShortLabel(bucket) {
    const map = {
      ALL: 'Umum Kemen & Pemda',
      SKB_PRAKOM: 'Prakom',
      SKB_HUKUM: 'Hukum',
      SKB_KEUANGAN: 'Keuangan',
      SKB_KESEHATAN: 'Kesehatan',
      SKB_PENDIDIKAN: 'Pendidikan',
      SKB_KEBIJAKAN: 'Kebijakan',
      SKB_SDMA: 'SDMA & Arsip',
      SKB_AUDITOR: 'Auditor & PBJ',
      SKB_TEKNIK: 'Teknik & PUPR',
      SKB_STATISTIK: 'Statistisi',
      SKB_SOSIAL: 'Sosial & Peksos',
      SKB_INGGRIS: 'B. Inggris'
    };
    return map[bucket] || bucket.replace('SKB_', '');
  }

  /* ========================================================================
     1. LAB SKB NON-CAT KEMENTERIAN & PEMDA (Wawancara STAR, Kraepelin/Pauli, Praktik)
     ======================================================================== */
  const INTERVIEW_CASES = [
    {
      id: 'w-umum-motivasi', role: 'ALL', cat: 'Komitmen ASN & BerAKHLAK',
      q: 'Mengapa Anda memilih melamar formasi ini di Kementerian/Pemda, dan kontribusi nyata apa yang siap Anda hadirkan pada 100 hari pertama kerja?',
      star: [
        'Situation/Task: Pengalaman menyelesaikan masalah layanan publik atau pekerjaan berbatas waktu ketat dengan sumber daya terbatas.',
        'Action: Fokus pada pemetaan SOP/masalah riil, kerja kolaboratif lintas unit/OPD, dokumentasi rapi berbasis data, dan zero complaint attitude.',
        'Result: Proses layanan lebih cepat/transparan; kaitkan langsung dengan nilai Berorientasi Pelayanan, Akuntabel, Adaptif & Kolaboratif (BerAKHLAK).'
      ],
      rubric: ['Menyebut alasan pengabdian layanan publik (bukan sekadar status aman ASN)', 'Memahami mandat instansi pusat/pemda & tugas pokok jabatan dilamar', 'Struktur STAR ringkas ±90 detik, tenang, dan konkret']
    },
    {
      id: 'w-uupdp', role: 'ALL', cat: 'Integritas & Perlindungan Data',
      q: 'Seorang pejabat atau rekan dekat meminta salinan mentah seluruh data NIK, nomor telepon, dan rekening penerima layanan lewat pesan WhatsApp untuk urusan cepat. Apa tindakan Anda?',
      star: [
        'Menolak pengiriman data pribadi mentah melalui kanal pribadi tidak aman secara santun namun tegas.',
        'Menjelaskan kewajiban UU PDP No. 27/2022, kode etik rahasia jabatan, serta risiko penyalahgunaan data warga.',
        'Memberi solusi cepat dan sah: menyiapkan ringkasan statistik teragregasi atau akses resmi tercatat melalui mekanisme pejabat berwenang.'
      ],
      rubric: ['Patuh aturan pelindungan data & etika ASN meski diminta pimpinan', 'Tetap memberi solusi alternatif yang sah & akuntabel (tidak pasif kaku)']
    },
    {
      id: 'w-suap', role: 'ALL', cat: 'Integritas & Anti-Korupsi',
      q: 'Dalam tugas penyusunan dokumen teknis, verifikasi berkas izin, atau pengawasan kegiatan instansi, salah satu pihak eksternal menawarkan komisi atau bingkisan terima kasih. Sikap dan langkah Anda?',
      star: [
        'Menolak langsung dengan santun serta menegaskan pelayanan/pengadaan pemerintah berjalan netral tanpa biaya tambahan di luar ketentuan resmi.',
        'Jika bingkisan terlanjur dikirim diam-diam, tidak memakainya dan segera melapor ke UPG instansi/KPK maksimal 30 hari kerja sesuai Pasal 12C UU Tipikor.',
        'Memastikan seluruh proses kerja tetap transparan dengan rekam jejak dokumen yang dapat diaudit.'
      ],
      rubric: ['Menolak tegas tanpa kompromi sekecil apa pun', 'Mengetahui mekanisme UPG/WBS/KPK maksimal 30 hari kerja']
    },
    {
      id: 'w-radikalisme', role: 'ALL', cat: 'Wawasan Kebangsaan & Netralitas',
      q: 'Di grup kerja instansi, rekan kerja membagikan pesan bernuansa intoleran/anti-Pancasila atau ajakan memihak salah satu kontestan politik jelang pemilu/pilkada. Tindakan Anda?',
      star: [
        'Tidak ikut menyebarkan; mengingatkan secara sejuk dan santun tentang kewajiban netralitas ASN (UU 20/2023) dan kesetiaan pada Pancasila serta Bhinneka Tunggal Ika.',
        'Mengajak dialog pribadi yang konstruktif; jika terus mengancam harmoni/ideologi atau melanggar hukum disiplin, mencatat bukti dan melaporkan berjenjang ke atasan/PPK.'
      ],
      rubric: ['Konsisten memegang kesetiaan NKRI, Pancasila & Netralitas ASN', 'Mengedepankan dialog profesional dan prosedur pembinaan resmi']
    },
    {
      id: 'w-motivasi', role: 'SKB_PRAKOM', cat: 'Kompetensi Teknis Prakom',
      q: 'Mengapa Anda memilih melamar Pranata Komputer, dan strategi apa yang Anda bawa untuk menyatukan aplikasi silo menjadi layanan SPBE terpadu?',
      star: [
        'Situation/Task: Banyak unit kerja membuat aplikasi terpisah dengan format data tidak seragam.',
        'Action: Pemetaan proses bisnis & kamus data otoritatif (Perpres 39/2019 Satu Data & Perpres 95/2018), bangun API Gateway & SSO, migrasi bertahap tanpa gangguan layanan.',
        'Result: Layanan lintas unit/Pemda terhubung tanpa input data warga berulang (Once-Only Principle).'
      ],
      rubric: ['Paham peran JF Prakom & keterpaduan SPBE (Perpres 82/2023)', 'Tidak langsung membongkar sistem produksi tanpa strategi migrasi aman']
    },
    {
      id: 'w-insiden', role: 'SKB_PRAKOM', cat: 'Respons Insiden & Keamanan TI',
      q: 'Bayangkan portal layanan publik instansi mendadak down pukul 09.00 pagi saat ribuan pemohon mendaftar. Langkah 15 menit pertama Anda sebagai Prakom?',
      star: [
        'Triage & Komunikasi (0–5 mnt): Cek status halaman/monitoring/API Gateway, siapkan pengumuman resmi humas agar warga tidak panik.',
        'Isolasi & Pemulihan (5–15 mnt): Cek log error, resource DB/CPU, jalankan failover atau rollback Blue-Green jika pasca-rilis.',
        'Post-Incident: Susun RCA (Root Cause Analysis) dan perbaikan preventif (Problem Management ITIL).'
      ],
      rubric: ['Memisahkan pemulihan cepat (Incident) vs RCA akar masalah (Problem)', 'Tidak menghapus log audit atau bertindak tanpa koordinasi']
    },
    {
      id: 'w-conflict', role: 'SKB_PRAKOM', cat: 'DevSecOps & Manajemen Rilis',
      q: 'Unit bisnis meminta fitur baru harus rilis 3 hari lagi, sedangkan pengujian masih menemukan celah kritis IDOR/XSS. Bagaimana Anda menyelesaikannya?',
      star: [
        'Tunjukkan bukti dampak risiko kebocoran data/UU PDP secara konkret dalam bahasa bisnis.',
        'Tawarkan hotfix cepat fokus celah kritis 1–2 hari atau rilis fitur bertahap lewat feature flag yang aman.',
        'Dokumentasikan persetujuan risiko tertulis bila pimpinan tetap menghendaki jadwal khusus.'
      ],
      rubric: ['Tidak mengorbankan keamanan produksi demi target semu', 'Mampu menjelaskan risiko teknis ke pimpinan non-TI']
    },
    {
      id: 'w-rag-ai', role: 'SKB_PRAKOM', cat: 'Inovasi AI Pemerintahan',
      q: 'Pimpinan ingin segera memasang chatbot AI publik memakai LLM agar menjawab cepat aturan kementerian/Pemda. Risiko apa yang harus Anda mitigasi?',
      star: [
        'Risiko: halusinasi pasal hukum, bias jawaban, dan kebocoran data sensitif bila prompt memakai dokumen internal.',
        'Solusi teknis: terapkan arsitektur RAG berbasis regulasi resmi terkurasi + sitasi pasal + filter DLP/PII + peninjauan manusia (human-in-the-loop).'
      ],
      rubric: ['Sikap Adaptif terhadap AI namun tetap terukur dan patuh UU PDP', 'Mengerti keunggulan RAG dibanding LLM mentah']
    },
    {
      id: 'w-hkm-perda', role: 'SKB_HUKUM', cat: 'Hukum Pemerintahan & AUPB',
      q: 'Kepala unit mendesak Anda segera menerbitkan draf keputusan izin atau Perda baru tanpa melibatkan Uji Konsekuensi/Konsultasi Publik karena dikejar target seremonial. Bagaimana sikap Anda sebagai Analis/Perancang Hukum?',
      star: [
        'Sampaikan telaahan hukum tertulis secara santun mengenai syarat formil UU 12/2011 jo 13/2022 (Meaningful Participation) dan AUPB kecermatan UU 30/2014.',
        'Jelaskan risiko hukum: keputusan berpotensi digugat ke PTUN atau Perda dibatalkan/diuji materi ke MA sehingga malah menghambat program.',
        'Usulkan percepatan jadwal paralel rapat harmonisasi & konsultasi publik terarah agar tetap tepat waktu tanpa cacat prosedur.'
      ],
      rubric: ['Menjaga kepatuhan prosedur hukum agar instansi terlindungi dari gugatan PTUN/MA', 'Memberikan solusi jadwal percepatan yang sah, bukan sekadar menghambat']
    },
    {
      id: 'w-keu-revisi', role: 'SKB_KEUANGAN', cat: 'Akuntabilitas Keuangan & Pajak',
      q: 'Menjelang tutup tahun anggaran Desember, rekan kerja mengajukan kuitansi perjalanan dinas & pemecahan transaksi pengadaan agar bebas pajak PPN. Langkah Anda sebagai staf/bendahara/analis keuangan?',
      star: [
        'Menolak dokumen yang memecah nilai transaksi (splitting) atau tidak sesuai biaya riil (at cost) secara tegas dan profesional.',
        'Menjelaskan dasar PMK Instansi Pemerintah & SBM agar terhindar dari temuan Kerugian Negara BPK/Inspektorat.',
        'Membantu merapikan kelengkapan bukti sah riil dan melakukan pemotongan/penyetoran PPN-PPh sesuai ketentuan sebelum batas akhir SPM/SP2D.'
      ],
      rubric: ['Tegas menegakkan aturan at-cost & larangan splitting faktur', 'Mengedepankan pencegahan temuan BPK sekaligus membantu proses SPJ yang sah']
    },
    {
      id: 'w-kes-darurat', role: 'SKB_KESEHATAN', cat: 'Pelayanan Klinis & Keselamatan Pasien',
      q: 'IGD Puskesmas/RSUD sedang penuh sementara datang pasien gawat darurat nyeri dada hebat tanpa membawa kartu identitas/uang muka, dan di sisi lain ada keluarga pasien umum memaksa didahulukan. Apa keputusan Anda?',
      star: [
        'Terapkan Triase klinis & amanat UU Kesehatan 17/2023: langsung stabilisasi nyawa pasien nyeri dada (Prioritas Merah) TANPA meminta uang muka atau menolak.',
        'Berikan komunikasi empatik SBAR/edukasi terbuka kepada keluarga pasien ringan terkait urutan prioritas kegawatdaruratan agar antrean kondusif.',
        'Catat dokumentasi tindakan medis dan kelengkapan administrasi JKN/sosial menyusul setelah pasien stabil.'
      ],
      rubric: ['Mengutamakan keselamatan nyawa pasien & aturan non-penolakan darurat UU 17/2023', 'Komunikasi empatik menurunkan ketegangan di IGD']
    },
    {
      id: 'w-pdk-konflik', role: 'SKB_PENDIDIKAN', cat: 'Pedagogik & Sekolah Aman',
      q: 'Anda menemukan siswa berprestasi menjadi korban perundungan di grup kelas sementara sebagian guru menganggap hal itu sekadar candaan biasa agar tak merusak citra sekolah. Tindakan Anda?',
      star: [
        'Aktifkan protokol TPPK sesuai Permendikbudristek 46/2023: lindungi rasa aman korban dan jaga kerahasiaan identitas terlebih dahulu.',
        'Terapkan pendekatan Segitiga Restitusi/konseling edukatif untuk menyadarkan pelaku bersama orang tua (tanpa kekerasan fisik/permalukan) dan perkuat budaya positif kelas.',
        'Pastikan kasus tertangani tuntas secara objektif — mutu sekolah dinilai dari keberanian melindungi anak, bukan menyembunyikan masalah.'
      ],
      rubric: ['Paham Permen 46/2023 PPKSP & Disiplin Positif Restitusi', 'Berpihak jelas kepada perlindungan psikologis peserta didik']
    },
    {
      id: 'w-kbj-lintasopd', role: 'SKB_KEBIJAKAN', cat: 'Analisis Kebijakan & Perencanaan',
      q: 'Program prioritas penurunan kemiskinan/stunting di instansi Anda mengalami ego sektoral antarbidang sehingga serapan anggaran tinggi tetapi indikator outcome warga tetap stagnan. Bagaimana Anda merumuskan solusinya?',
      star: [
        'Susun analisis akar masalah (Problem Tree) & pemetaan Pohon Kinerja SAKIP untuk membuktikan kesenjangan Output vs Outcome.',
        'Ajukan Policy Brief ringkas ke pimpinan mendorong konvergensi sasaran data tunggal (DTSEN/Regsosek) dan skema Money Follow Program lintas unit/OPD.',
        'Usulkan indikator kinerja bersama yang mengikat kolaborasi antarpimpinan unit serta pantau berkala triwulanan.'
      ],
      rubric: ['Membedakan jelas Output vs Outcome & paham prinsip Money Follow Program', 'Mampu memfasilitasi kolaborasi lintas unit tanpa menyalahkan satu pihak']
    },
    {
      id: 'w-sdm-hoaks-mutasi', role: 'SKB_SDMA', cat: 'Sistem Merit, Arsip & Humas',
      q: 'Bagaimana sikap Anda menghadapi tekanan permintaan mutasi jabatan non-prosedural di daerah, atau saat beredar hoaks rekrutmen yang menyerang kredibilitas instansi Anda?',
      star: [
        'Untuk mutasi: berpegang pada Peta Jabatan, Anjab-ABK, syarat Sistem Merit UU 20/2023 & izin Mendagri/Pertek BKN bila terkait masa pembatasan Pilkada.',
        'Untuk krisis hoaks/layanan: aktivasi respon cepat Golden Hour humas dengan rilis fakta terverifikasi & kanal resmi (PPID/SRIKANDI digital) dalam satu narasi.'
      ],
      rubric: ['Menjaga netralitas & meritokrasi kepegawaian sekaligus respons krisis cepat', 'Mengerti keterkaitan dokumen merit, kearsipan SRIKANDI, dan PPID']
    },
    {
      id: 'w-aud-temuan', role: 'SKB_AUDITOR', cat: 'Independensi APIP & PBJ',
      q: 'Saat mengaudit proyek strategis daerah/kementerian, Anda menemukan indikasi spesifikasi merek tunggal & kekurangan volume, lalu pihak auditi menawarkan kompensasi agar temuan dihapus. Bagaimana Anda bersikap?',
      star: [
        'Menolak tegas sesuai Kode Etik AAIPI (Integritas & Objektivitas) dan melaporkannya kepada pimpinan penugasan/UPG.',
        'Menyusun temuan audit berbasis 5C lengkap (Kondisi, Kriteria Perpres 16/2018, Sebab, Akibat, Rekomendasi perbaikan sistem & pengembalian kerugian ke kas).',
        'Memberi kesempatan klarifikasi profesional saat Exit Meeting berbasis bukti Kertas Kerja Audit (KKA) tanpa kompromi atas fakta riil.'
      ],
      rubric: ['Integritas mutlak tanpa kompromi temuan fisik/hukum', 'Menyusun rekomendasi 5C menyasar akar penyebab SPIP']
    },
    {
      id: 'w-tek-mutu', role: 'SKB_TEKNIK', cat: 'Mutu Konstruksi & Tata Ruang',
      q: 'Kontraktor jalan mengusulkan pengurangan ketebalan aspal atau penambahan air pada truk beton segar agar pekerjaan cepat selesai mengejar PHO, dan di sisi lain ada permohonan pembangunan di atas sempadan sungai. Keputusan Anda?',
      star: [
        'Menolak tegas penambahan air bebas di luar Job Mix Formula maupun pengurangan spesifikasi (melanggar SNI 2847/Bina Marga dan berisiko Kegagalan Bangunan UU 2/2017 10 tahun).',
        'Memanfaatkan plasticizer terukur untuk beton dan uji Core Drill/Marshall untuk memverifikasi mutu aktual sebelum BAST ditandatangani.',
        'Untuk sempadan sungai/LP2B, menegakkan RDTR/KKPR OSS sambil memberi alternatif zona lahan sesuai ketentuan tata ruang.'
      ],
      rubric: ['Paham mutu teknis sipil, kegagalan bangunan 10 tahun & aturan KKPR tata ruang', 'Tidak berkompromi keselamatan struktur demi target waktu']
    },
    {
      id: 'w-stat-integritas', role: 'SKB_STATISTIK', cat: 'Independensi Data & Privasi',
      q: 'Pimpinan wilayah meminta Anda mengecilkan angka pengangguran atau kemiskinan hasil survei sebelum rilis resmi agar citra kinerja terlihat baik, atau meminta tabel mikro menampilkan identitas dua pabrik besar. Sikap Statistisi/Pranata Data?',
      star: [
        'Menjelaskan secara profesional kode etik statistik resmi (UNFPOS & UU 16/1997) bahwa metodologi dan angka hasil tidak boleh dimanipulasi.',
        'Menerapkan Statistical Disclosure Control (SDC) untuk melindungi kerahasiaan data mikro perusahaan maupun warga sesuai UU PDP 27/2022.',
        'Membantu menyusun narasi analitis faktor penyebab lonjakan dan rekomendasi kebijakan berbasis bukti (mis. Small Area Estimation) untuk perbaikan tahun berjalan.'
      ],
      rubric: ['Menjaga independensi profesional metodologi & kerahasiaan responden (SDC)', 'Tetap konstruktif menyajikan wawasan kebijakan berbasis fakta']
    },
    {
      id: 'w-sos-etik', role: 'SKB_SOSIAL', cat: 'Perlindungan Korban & Akurasi DTSEN',
      q: 'Anda mendampingi kasus kekerasan anak dan mendapati pula adanya usulan penerima bantuan sosial titipan oknum desa yang sebenarnya mampu secara ekonomi. Langkah Anda sebagai Pekerja/Penyuluh Sosial?',
      star: [
        'Untuk anak korban: utamakan keselamatan psikososial, kerahasiaan identitas (UU SPPA/TPKS), larang perdamaian paksa, serta rujuk terpadu UPTD PPA & layanan rumah aman.',
        'Untuk DTSEN/bansos: pegang prinsip keadilan objektif lewat verifikasi Musdes/Muskel, pemadanan SIKS-NG & Dukcapil agar miskin ekstrem terakomodasi tanpa titipan.'
      ],
      rubric: ['Mengedepankan perlindungan korban berbasis hak & bebas victim-blaming', 'Menjaga netralitas verifikasi DTSEN berbasis bukti musdes']
    }
  ];

  const PRAKTIK_CASES = [
    {
      role: 'SKB_PRAKOM',
      title: 'Prakom 1 — Desain Basis Data Anti-Duplikasi Pendaftar / Penerima Bantuan',
      prompt: 'Rancang skema minimal & mekanisme backend agar pengajuan paralel dari ponsel tidak membuat dua baris kembar di PostgreSQL.',
      points: [
        'Gunakan `UNIQUE CONSTRAINT` komposit pada `(nik_hash_atau_id_pemohon, periode_id)` di level basis data sebagai jaring pengaman final.',
        'Terapkan `Idempotency-Key` pada header POST API yang disimpan pada tabel transaksi atomik (`INSERT ... ON CONFLICT DO NOTHING`).',
        'Simpan waktu & metadata `created_at` berzona waktu (`TIMESTAMPTZ`) + audit trail status.',
        'Lindungi NIK/data sensitif memakai enkripsi kolom/hashing aman serta pembatasan privilege user aplikasi.'
      ]
    },
    {
      role: 'SKB_PRAKOM',
      title: 'Prakom 2 — Optimasi Query Lambat & Masalah N+1 Saat Jam Sibuk',
      prompt: 'Halaman dasbor laporan instansi memuat 8 detik dengan CPU database 95% saat 300 user membuka bersamaan.',
      points: [
        'Periksa rencana eksekusi lewat `EXPLAIN (ANALYZE, BUFFERS)` dan cek slow query log.',
        'Hilangkan kueri N+1 dalam loop kode aplikasi memakai `JOIN` atau batch query `WHERE id = ANY(...)`.',
        'Buat composite B-Tree index dengan kolom filter kesetaraan (`=`) di depan kolom rentang/urutan (`>=`, `ORDER BY`).',
        'Terapkan caching agregasi (Redis dengan TTL wajar) atau Materialized View untuk laporan berat yang tidak perlu real-time tiap detik.'
      ]
    },
    {
      role: 'SKB_PRAKOM',
      title: 'Prakom 3 — Respons Insiden Kebocoran Data & Ransomware',
      prompt: 'Terdeteksi anomali enkripsi file di 2 peladen file kantor dan dugaan eksfiltrasi data warga.',
      points: [
        'Isolasi segmen jaringan / host terdampak (jangan langsung matikan RAM agar bukti forensik tetap ada).',
        'Aktifkan tim CSIRT instansi & cabut seluruh sesi token / kredensial terkait.',
        'Siapkan pemberitahuan tertulis sesuai Pasal 46 UU PDP dalam maksimal **3 × 24 jam**.',
        'Pulihkan layanan dari salinan cadangan **immutable / air-gapped (3-2-1-1-0)** yang sudah teruji bersih malware.'
      ]
    },
    {
      role: 'SKB_PRAKOM',
      title: 'Prakom 4 — Arsitektur Tahan Lonjakan Pendaftaran Nasional (HA)',
      prompt: 'Kementerian membuka pendaftaran daring serentak dengan lonjakan trafik 20× lipat di hari terakhir.',
      points: [
        'Pisahkan aset statis ke CDN + pasang API Gateway dengan rate limiting/queue room agar backend tidak kolaps.',
        'Operasikan container stateless di atas orkestrator dengan Horizontal Pod Autoscaler + `ReadinessProbe`.',
        'Pindahkan unggah/konversi dokumen berat ke Message Broker (RabbitMQ/Kafka) + Worker asinkron.',
        'Terapkan Connection Pooling DB (mis. PgBouncer) dan Read Replica untuk trafik pembacaan status.'
      ]
    },
    {
      role: 'SKB_HUKUM',
      title: 'Hukum — Telaah Legal Drafting & Penyelesaian Sengketa PTUN',
      prompt: 'Dinas daerah mengeluarkan SK pencabutan izin usaha mendadak tanpa teguran tertulis, sementara ada Ranperda yang menabrak OSS-RBA PP 5/2021. Rancang langkah koreksi hukum Anda.',
      points: [
        'Identifikasi cacat prosedural SK menurut UU 30/2014 (asas kecermatan & hak didengar) sebelum berujung gugatan di PTUN (tenggang 90 hari pasca-upaya administratif Perma 6/2018).',
        'Terapkan asas Lex superior derogat legi inferiori: usulkan revisi/penyelarasan norma Ranperda bersama Bagian Hukum, Biro Hukum/Kanwil Kemenkum (harmonisasi UU 13/2022) & GWPP/Kemendagri.',
        'Siapkan Legal Opinion tertulis + daftar bukti kronologis untuk koordinasi Jaksa Pengacara Negara (JPN) bila sengketa berlanjut.'
      ]
    },
    {
      role: 'SKB_KEUANGAN',
      title: 'Keuangan — Rekonsiliasi LRA vs LO & Pemotongan Pajak Bendahara',
      prompt: 'Instansi membeli perangkat IT senilai Rp111.000.000 (sudah termasuk PPN 11%) + menyewa jasa instalasi PT sebesar Rp10.000.000 (sebelum PPN), serta terdapat BAST barang belum dibayar per 31 Desember. Uraikan perlakuan akuntansi & pajaknya.',
      points: [
        'Hitung DPP Barang = 100/111 × Rp111 jt = Rp100 jt -> PPN Rp11 jt & PPh Pasal 22 (1,5%) = Rp1,5 jt.',
        'Jasa instalasi PT kena PPh Pasal 23 sebesar 2% × Rp10 jt = Rp200.000 (wajib potong berapapun nilainya tanpa syarat batas Rp2 jt!).',
        'Akuntansi SAP PP 71/2010: Barang ber-BAST akhir tahun belum lunas dicatat di Neraca sebagai Aset Tetap berpasangan Utang Belanja (bukan beban penuh sekaligus di LO; LO hanya susutkan periodik).'
      ]
    },
    {
      role: 'SKB_KESEHATAN',
      title: 'Kesehatan — Aktivasi Respons KLB 24 Jam & Audit Keselamatan Obat LASA',
      prompt: 'Terjadi peningkatan mendadak 18 kasus diare berdarah akut dalam 2 hari di satu kecamatan disertai stok cairan dan obat High Alert menipis di Puskesmas/RSUD BLUD.',
      points: [
        'Laporkan Alert SKDR dalam maksimal 1 × 24 jam dan terjunkan Tim Gerak Cepat (TGC) untuk Penyelidikan Epidemiologi (PE), pengambilan sampel sumber air/pangan, & tatalaksana MTBS/oralit-zinc.',
        'Terapkan prinsip BLUD/kedaruratan pengadaan cepat BMHP/obat mengacu FORNAS serta tata kelola gudang FEFO dan pelabelan Tall Man Lettering / Stiker Merah bagi elektrolit pekat & LASA.',
        'Terapkan 5 Momen Kebersihan Tangan PPI & pemilahan limbah kuning/safety box 3/4 di posko layanan.'
      ]
    },
    {
      role: 'SKB_PENDIDIKAN',
      title: 'Pendidikan — Desain Modul Ajar Deep Learning & Tindak Lanjut Remedial >50%',
      prompt: 'Setelah asesmen formatif pada kelas dengan kemampuan membaca beragam, 65% murid gagal memahami teks informasi numerasi. Susun skenario perbaikan pembelajaran.',
      points: [
        'Jalankan Pembelajaran Ulang Klasikal dengan metode & media baru (karena ketidaktuntasan >50%, bukan mengulang tes persis sama atau memberi nilai katrol fiktif).',
        'Gunakan prinsip Deep Learning (Mindful, Meaningful, Joyful) + perancah (Scaffolding ZPD Vygotsky / contoh bertahap Bruner Enaktif-Ikonik-Simbolik) berbasis asesmen awal.',
        'Siswa yang sudah tuntas diberi tugas pengayaan HOTS (C4–C6 / SOLO Extended Abstract) berbasis konteks nyata lingkungan sekitar.'
      ]
    },
    {
      role: 'SKB_KEBIJAKAN',
      title: 'Kebijakan & Perencanaan — Struktur Policy Brief Rasionalisasi APBD/APBN & Stunting',
      prompt: 'Pendapatan transfer menurun 15% sementara angka kemiskinan ekstrem dan stunting di kabupaten/kementerian masih di atas target. Susun garis besar Policy Brief ke pimpinan.',
      points: [
        'Amankan lebih dahulu Belanja Wajib Mengikat & 6 SPM Layanan Dasar; pangkas belanja penunjang seremonial/perjalanan dinas ber-outcome rendah (Money Follow Program).',
        'Fokuskan konvergensi lintas sektor pada lokus data tunggal (DTSEN/Regsosek): 70% sensitif (air/sanitasi/PAUD) + 30% spesifik gizi.',
        'Sertakan perbandingan opsi kebijakan memakai kriteria MCDA (Efektivitas, Biaya, Keadilan, Kelayakan) serta indikator SMART hasil vs keluaran.'
      ]
    },
    {
      role: 'SKB_SDMA',
      title: 'SDMA, Arsiparis & Humas — Hitungan ABK Formasi & Penyelamatan Arsip Vital',
      prompt: 'Sebuah biro memproses 3.750 layanan surat/izin per tahun (norma waktu 1 jam/berkas) dengan 2 pegawai eksisting, sekaligus mendapati arsip aset BMD dan kontrak berisiko banjir.',
      points: [
        'Hitung ABK: `(3.750 × 1 jam) ÷ 1.250 jam efektif = 3 pegawai dibutuhkan`; karena bezetting 2 -> usulkan tambahan +1 formasi lewat Peta Jabatan & SIASN.',
        'Terapkan 4 Pilar Kearsipan SRIKANDI (TND, Klasifikasi, JRA, SKKAAD) dan pisahkan Arsip Vital (sertifikat aset/kontrak) ke ruang aman + alih media digital terenkripsi off-site.',
        'Atur skema kinerja SKP pegawai berdasarkan Hasil Kerja × Perilaku BerAKHLAK (PermenPANRB 6/2022) & konversi AK tahunan (PermenPANRB 1/2023).'
      ]
    },
    {
      role: 'SKB_AUDITOR',
      title: 'Auditor & PBJ — Deteksi Red Flags Probity Audit Tender & Audit KKA 5C',
      prompt: 'Paket pengadaan alat kesehatan Rp1,5 M menunjuk spesifikasi satu merek tanpa dasar suku cadang, sementara penyedia pemenang menawar 76% dari HPS namun fisik Desember baru 70% menjelang tutup tahun.',
      points: [
        'Probity Audit Ps 19 Perpres 16/2018: koreksi spesifikasi sebelum tayang agar terbuka berdasar standar teknis/fungsi umum (kecuali pengecualian sah) + cek kewajaran HPS berbasis survei pasar riil.',
        'Penawaran menang 76% (< 80% HPS) wajib menyerahkan Jaminan Pelaksanaan sebesar 5% dari TOTAL HPS (bukan dari nilai kontrak murah!).',
        'Larang keras BAST 100% fiktif! Catat temuan secara 5C di Kertas Kerja Audit (KKA), terapkan denda 1 permil/hari / skema pemberian kesempatan resmi atau pemutusan + Daftar Hitam.'
      ]
    },
    {
      role: 'SKB_TEKNIK',
      title: 'Teknik Sipil & PUPR — Penanganan Kontrak Kritis Kurva-S & Gagal Mutu Beton',
      prompt: 'Proyek jembatan kabupaten mengalami deviasi keterlambatan -12% pada progres rencana 45% (SPI=0,82, CPI=0,88), sementara hasil uji silinder 28 hari di bawah f\'c rencana.',
      points: [
        'Terbitkan Surat Peringatan dan gelar Show Cause Meeting (SCM) dengan target uji coba pemulihan terukur pada kegiatan Jalur Kritis (Total Float = 0).',
        'Lakukan pengujian NDT (Hammer Test + UPV) dilanjutkan Core Drill destruktif pada elemen beton diragukan; wajibkan perkuatan struktural atau pembongkaran bila melanggar batas SNI 2847.',
        'Awasi ketat pemasangan kait sengkang 135°, selimut beton decking, serta kelengkapan Ahli/Petugas K3 SMKK Permen PUPR 10/2021.'
      ]
    },
    {
      role: 'SKB_STATISTIK',
      title: 'Statistisi — Mengoreksi Bias Non-Response Survei & Memilih Uji Inferensia Tepat',
      prompt: 'Survei ekonomi usaha kabupaten memiliki margin of error terlalu lebar di desa terpencil sementara kelompok usaha elit banyak menolak wawancara, dan distribusi omzet sangat menceng kanan.',
      points: [
        'Jangan menaikkan n acak secara membabi-buta bila masalah utamanya Non-Response Bias: terapkan callback terstruktur + Weighting Adjustment (post-stratification/raking) agar proporsi strata terwakili.',
        'Gunakan Median & IQR (bukan Mean) untuk menggambarkan nilai tipikal data omzet skewed; jika membutuhkan angka tingkat kecamatan/desa dengan sampel minim, terapkan Small Area Estimation (SAE).',
        'Publikasikan ke portal Satu Data dalam format machine-readable (CSV/JSON) dilengkapi Metadata MS-Keg/Var/Ind dan perlindungan kerahasiaan sel (SDC).'
      ]
    },
    {
      role: 'SKB_SOSIAL',
      title: 'Peksos & Penyuluh — Case Management Keluarga Multipel Masalah & Bebas Pasung',
      prompt: 'Ditemukan keluarga miskin ekstrem tanpa NIK/KTP dengan anggota keluarga ODGJ berat dipasung di gudang dan anak usia 10 tahun putus sekolah.',
      points: [
        'Aktifkan Case Management holistik BPSS + Genogram/Eco-Map: gandeng Dukcapil untuk perekaman biometrik jemput bola membuka akses NIK, PBI-JKN, dan DTSEN/PKH.',
        'Edukasi keluarga tanpa menghakimi bersama TPKJM/Puskesmas untuk stabilisasi obat jiwa gratis lalu pelepasan pasung aman disertai rehabilitasi komunitas.',
        'Hubungkan anak ke sekolah inklusif/kesetaraan dan Program Indonesia Pintar (PIP), serta dorong kemandirian keluarga lewat ATENSI/PENA menuju graduasi.'
      ]
    }
  ];

  const LGD_CASES = [
    {
      id: 'lgd-spbe',
      title: 'LGD 1 — Ego Sektoral Aplikasi Digital & Interoperabilitas Satu Data',
      scenario: 'Kementerian/Pemda mewajibkan integrasi layanan ke satu portal terpadu dalam 6 bulan, namun 5 unit/dinas mempertahankan aplikasi masing-masing karena sudah menganggarkan biaya pemeliharaan server sendiri.',
      roles: [
        'Inisiator: Tetapkan masalah inti bersama ("warga repot unggah KTP berulang"), ajukan agenda 30 menit diskusi: akar masalah -> opsi integrasi -> peta peran.',
        'Analis Data: Soroti duplikasi anggaran server & ketidaksesuaian standar metadata Satu Data Perpres 39/2019; usulkan integrasi bertahap via API SPLP & SSO.',
        'Mediator: Hormati investasi unit yang sudah berjalan baik dengan menjadikannya modul back-office terhubung, bukan langsung dimatikan mendadak.',
        'Penyimpul: Rangkum kesepakatan tim secara adil menyebut kontribusi gagasan rekan lain, lengkap jadwal uji coba migrasi dan PJ tiap dinas.'
      ],
      antiTrap: 'Jangan memotong pembicaraan rekan dengan nada agresif ("Ide Anda salah total!"), jangan mendominasi waktu bicara (>40%), dan jangan diam pasif sampai akhir.'
    },
    {
      id: 'lgd-anggaran',
      title: 'LGD 2 — Dilema Rasionalisasi Anggaran & Prioritas Layanan Dasar',
      scenario: 'Pendapatan daerah terkoreksi 15% tahun berjalan sementara batas UU HKPD mewajibkan pengurangan belanja pegawai dan peningkatan belanja layanan dasar (Stunting, Pendidikan, Sanitasi, Jalan Rusak).',
      roles: [
        'Inisiator: Bagi kerangka pembahasan menjadi belanja wajib mengikat (gaji/SPM dasar) vs belanja penunjang fleksibel (perdin/rapat hotel/seremonial).',
        'Analis Risiko: Ingatkan konsekuensi hukum & dampak sosial jika memangkas layanan IGD puskesmas, BOSDA sekolah, atau pemeliharaan jalan logistik.',
        'Mediator: Jembatani konflik antara usulan pemotongan rata semua dinas (across-the-board) vs pemotongan selektif berbasis Pohon Kinerja SAKIP.',
        'Penyimpul: Tetapkan rekomendasi komposisi rasionalisasi terukur + indikator monitoring triwulan sebelum diserahkan ke pimpinan.'
      ],
      antiTrap: 'Hindari solusi populis tak realistis ("hapus saja seluruh gaji pegawai besok") atau membela ego satu bidang tanpa melihat keterbatasan APBN/APBD.'
    },
    {
      id: 'lgd-bencana',
      title: 'LGD 3 — Koordinasi Lintas Instansi Penanganan Bencana & Pemulihan Warga',
      scenario: 'Banjir bandang memutus jembatan antar-kecamatan dan membuat 800 warga termasuk lansia, ibu hamil, serta disabilitas mengungsi dengan risiko penularan penyakit di pengungsian.',
      roles: [
        'Inisiator: Prioritaskan menyelamatkan nyawa 24 jam pertama (evakuasi kelompok rentan, jalur darurat PU, dapur umum Dinsos, pos kesehatan Dinkes/Puskesmas).',
        'Analis Teknis: Minta validasi data tunggal korban/lokus pengungsi agar distribusi logistik tidak menumpuk di pinggir jalan raya sementara desa terpencil kosong.',
        'Mediator: Sinkronkan komando satu pintu posko bersama BPBD/Basarnas/TNI-Polri dan aktifkan CFS ramah anak + pengawasan kebersihan sanitasi air minum.',
        'Penyimpul: Bagi fase respon tanggap darurat (H1–7) dan fase transisi jembatan darurat Bailey + validasi data DTSEN adaptif.'
      ],
      antiTrap: 'Dalam LGD, asesor menilai Kematangan Emosi, Kemampuan Mendengar Aktif, Pengaruh Persuasif, & Kolaborasi Inklusif.'
    }
  ];

  const PSIKOTES_PAIRS = [
    ['Integritas', 'Kolaborasi', 'Menolak keras kompromi terhadap penyimpangan data sekecil apa pun meski mengecewakan atasan', 'Menjaga keharmonisan hubungan agar seluruh rekan di unit tetap nyaman bekerja sama'],
    ['Kepemimpinan', 'Ketekunan', 'Mengambil inisiatif membagi tugas dan mengarahkan tim saat rapat buntu mengambil keputusan', 'Menuntaskan pemeriksaan rinci angka dan dokumen satu per satu hingga tidak ada salah ketik'],
    ['Pelayanan', 'Adaptabilitas', 'Meluangkan waktu ekstra memastikan warga awam memahami alur layanan sampai beres', 'Segera mempelajari perangkat aplikasi kerja baru di luar jam rutin agar cepat mahir'],
    ['Ketekunan', 'Kolaborasi', 'Memeriksa ulang kualitas pekerjaan pribadi dua kali sebelum dikirim agar nol kesalahan', 'Aktif berdiskusi bertukar gagasan lintas bidang untuk menemukan pendekatan terbaik'],
    ['Adaptabilitas', 'Integritas', 'Cepat menyesuaikan metode kerja saat kebijakan nasional atau SOP mendadak berubah', 'Tetap berpegang teguh pada aturan tertulis meski prosedur lama memakan waktu lebih lama'],
    ['Kepemimpinan', 'Pelayanan', 'Berani mengambil tanggung jawab keputusan strategis tim di situasi krisis mendadak', 'Menempatkan kenyamanan dan kepuasan warga penerima manfaat sebagai prioritas harian'],
    ['Integritas', 'Pelayanan', 'Menolak segala bentuk hadiah/ucapan terima kasih pribadi setelah berkas warga rampung', 'Menyelesaikan berkas warga secara ramah, cepat, dan membantu melampaui ekspektasi'],
    ['Ketekunan', 'Adaptabilitas', 'Konsisten mengikuti rencana belajar/jadwal harian terstruktur hingga seluruh target selesai', 'Mengeksplorasi metode cara cepat dan teknologi kreatif untuk memangkas pekerjaan berulang'],
    ['Kolaborasi', 'Kepemimpinan', 'Mendengar aktif masukan anggota pendiam dan meramu titik tengah saat tim berbeda pendapat', 'Menetapkan tenggat waktu tegas dan memantau progres harian anggota tim tanpa ragu'],
    ['Pelayanan', 'Ketekunan', 'Tanggap menenangkan warga yang marah di loket dan langsung memberi solusi nyata', 'Bekerja fokus berjam-jam merapikan basis data arsip instansi tanpa mudah bosan'],
    ['Adaptabilitas', 'Kepemimpinan', 'Terbuka menerima kritik atas ide pribadi lalu memodifikasinya demi hasil sistem lebih baik', 'Memotivasi tim tetap tenang dan berkinerja tinggi di bawah tekanan tenggat ketat'],
    ['Integritas', 'Ketekunan', 'Melaporkan secara transparan temuan kekeliruan kerja tim agar segera diperbaiki', 'Menuntaskan seluruh kewajiban laporan kerja sebelum pulang meski tugas menumpuk']
  ];

  let ncState = { tab: 'wawancara', roleFilter: 'AUTO', wIdx: 0, wSec: 120, wTimer: null, wShowStar: false, lgdIdx: 0, eppsAns: {} };
  let pauli = null;

  function resolveRoleFilter() {
    const pref = activeTargetBucket();
    if (ncState.roleFilter === 'AUTO') return pref || 'ALL';
    return ncState.roleFilter || 'ALL';
  }
  function visibleInterviews() {
    const rf = resolveRoleFilter();
    if (rf === 'ALL_TOPICS') return INTERVIEW_CASES;
    if (rf === 'ALL') return INTERVIEW_CASES.filter(c => c.role === 'ALL');
    const own = INTERVIEW_CASES.filter(c => c.role === rf);
    const univ = INTERVIEW_CASES.filter(c => c.role === 'ALL');
    return own.concat(univ);
  }
  function visiblePraktik() {
    const rf = resolveRoleFilter();
    if (rf === 'ALL_TOPICS' || rf === 'ALL' || !rf) return PRAKTIK_CASES;
    const own = PRAKTIK_CASES.filter(c => c.role === rf);
    return own.length ? own.concat(PRAKTIK_CASES.filter(c => c.role !== rf)) : PRAKTIK_CASES;
  }

  function ncStopTimers() {
    if (ncState.wTimer) { clearInterval(ncState.wTimer); ncState.wTimer = null; }
    if (pauli && pauli.timer) { clearInterval(pauli.timer); pauli.timer = null; }
  }

  function saveNote(id, val) {
    const notes = B().store.get(NOTE_KEY, {});
    notes[id] = String(val || '').slice(0, 1200);
    B().store.set(NOTE_KEY, notes);
  }

  function renderNonCat() {
    const d = dlg('dlg-kemen');
    const b = B();
    const tab = ncState.tab;
    const pref = activeTargetBucket();
    const rf = resolveRoleFilter();
    const tabs = [
      ['wawancara', '🎙️ Wawancara STAR'],
      ['pauli', '⚡ Kraepelin'],
      ['praktik', '💼 Studi Kasus'],
      ['lgd', '🗣️ Simulasi LGD'],
      ['psikotes', '🧠 Kepribadian Kerja']
    ].map(([id, lbl]) => `<button type="button" class="rkg-pill ${tab === id ? 'on twk' : ''}" onclick="KemenSuite.ncTab('${id}')">${lbl}</button>`).join('');

    const filterChoices = [
      ['AUTO', pref ? `🎯 Profil (${roleShortLabel(pref)})` : '🏛️ Umum Kemen & Pemda'],
      ['ALL_TOPICS', '📚 Semua Bidang'],
      'SKB_PRAKOM', 'SKB_HUKUM', 'SKB_KEUANGAN', 'SKB_KESEHATAN', 'SKB_PENDIDIKAN', 'SKB_KEBIJAKAN', 'SKB_SDMA', 'SKB_AUDITOR', 'SKB_TEKNIK', 'SKB_STATISTIK', 'SKB_SOSIAL'
    ].map(item => {
      const id = Array.isArray(item) ? item[0] : item;
      const lbl = Array.isArray(item) ? item[1] : roleShortLabel(item);
      const isOn = ncState.roleFilter === id;
      return `<button type="button" class="pl-chip ${isOn ? 'on' : ''}" onclick="KemenSuite.ncRole('${id}')">${esc(lbl)}</button>`;
    }).join('');

    let body = '';
    if (tab === 'wawancara') {
      const list = visibleInterviews();
      if (ncState.wIdx >= list.length) ncState.wIdx = 0;
      const c = list[ncState.wIdx] || list[0];
      const notes = b.store.get(NOTE_KEY, {});
      const nav = list.map((it, idx) =>
        `<button type="button" class="km-qdot${idx === ncState.wIdx ? ' on' : ''}${notes[it.id] ? ' has' : ''}" onclick="KemenSuite.ncPickW(${idx})" title="${esc(it.cat)}">${idx + 1}</button>`
      ).join('');
      body = `
        <div class="pl-chips mt-2.5">${filterChoices}</div>
        <div class="km-nav-dots mt-2">${nav}</div>
        <div class="km-card mt-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="flex flex-wrap items-center gap-1.5"><span class="badge badge-primary badge-sm">${esc(c.cat)}</span><span class="badge badge-ghost badge-sm">${esc(roleShortLabel(c.role))}</span></span>
            <span id="km-w-timer" class="badge badge-ghost font-mono text-xs">⏱️ Target ${Math.floor(ncState.wSec / 60)}:${String(ncState.wSec % 60).padStart(2, '0')}</span>
          </div>
          <p class="mt-3 text-base font-extrabold leading-relaxed text-neutral">"${esc(c.q)}"</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <button type="button" class="btn btn-primary btn-sm" onclick="KemenSuite.ncToggleTimer()">${ncState.wTimer ? '⏸ Hentikan Timer' : '▶ Mulai Simulasi Jawab 2 Menit'}</button>
            <button type="button" class="btn btn-outline btn-sm" onclick="KemenSuite.ncToggleStar()">${ncState.wShowStar ? 'Sembunyikan Kerangka STAR' : '💡 Lihat Kerangka STAR & Rubrik'}</button>
          </div>
          ${ncState.wShowStar ? `
            <div class="mt-3 space-y-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm">
              <div class="font-extrabold text-amber-900">Kerangka Jawaban Ideal (Metode STAR):</div>
              <ul class="list-disc space-y-1 pl-4 text-slate-800">${c.star.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
              <div class="pt-1 font-extrabold text-amber-900">Yang Dinilai Asesor Kementerian &amp; Pemda:</div>
              <ul class="list-disc space-y-1 pl-4 text-slate-800">${c.rubric.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
            </div>` : ''}
          <label class="mt-3 block">
            <span class="text-xs font-bold text-slate-600">Draf catatan jawaban pribadi Anda (otomatis tersimpan offline):</span>
            <textarea class="textarea textarea-bordered mt-1 w-full text-sm" rows="3" placeholder="Tulis poin Situation, Task, Action, Result versi pengalaman Anda..." oninput="KemenSuite.ncSaveNote('${c.id}', this.value)">${esc(notes[c.id] || '')}</textarea>
          </label>
        </div>`;
    } else if (tab === 'pauli') {
      const best = b.store.get(PAULI_BEST_KEY, null);
      if (!pauli || !pauli.running) {
        const res = pauli && pauli.done ? `
          <div class="km-pauli-res mt-3">
            <div class="grid grid-cols-3 gap-2 text-center">
              <div class="rounded-xl bg-sky-50 p-2.5"><b class="block text-xl text-primary">${pauli.correct}</b><span class="text-xs text-slate-600">Benar</span></div>
              <div class="rounded-xl bg-emerald-50 p-2.5"><b class="block text-xl text-success">${pauli.total ? Math.round(pauli.correct / pauli.total * 100) : 0}%</b><span class="text-xs text-slate-600">Akurasi</span></div>
              <div class="rounded-xl bg-violet-50 p-2.5"><b class="block text-xl text-secondary">${Math.round(pauli.correct * 60 / pauli.dur)}</b><span class="text-xs text-slate-600">Item/Menit</span></div>
            </div>
            <p class="mt-2 text-xs text-slate-600">Evaluasi stabilitas: tiap 30 detik (${pauli.splits.map((s, idx) => `T${idx + 1}: ${s}`).join(' · ')}). Usahakan grafik konsisten stabil/naik tanpa penurunan tajam di akhir!</p>
          </div>` : '';
        body = `
          <div class="km-card mt-3">
            <h4 class="text-base font-extrabold text-neutral">Simulasi Tes Koran / Kecepatan Konsentrasi (Kraepelin-Pauli)</h4>
            <p class="mt-1 text-xs leading-relaxed text-slate-600">Jumlahkan 2 angka berpasangan lalu masukkan <b>digit terakhir (satuan)</b> secepat mungkin (contoh: <code>7 + 8 = 15 → tekan 5</code>). Melatih ketahanan konsentrasi psikotes SKB Kementerian maupun Pemda.</p>
            ${best ? `<p class="mt-2 text-xs font-bold text-primary">Rekor pribadi: ${best.rate} item/menit · Akurasi ${best.acc}%</p>` : ''}
            ${res}
            <div class="mt-3 flex flex-wrap gap-2">
              <button type="button" class="btn btn-primary btn-sm" onclick="KemenSuite.pauliStart(60)">Mulai 1 Menit</button>
              <button type="button" class="btn btn-outline btn-sm" onclick="KemenSuite.pauliStart(180)">Mulai 3 Menit</button>
              <button type="button" class="btn btn-outline btn-sm" onclick="KemenSuite.pauliStart(300)">Mulai 5 Menit</button>
            </div>
          </div>`;
      } else {
        const pads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n =>
          `<button type="button" class="km-pad-btn" onclick="KemenSuite.pauliInput(${n})">${n}</button>`
        ).join('');
        body = `
          <div class="km-card mt-3 text-center">
            <div class="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Terjawab: <b id="km-p-tot">${pauli.total}</b> (Benar: <b id="km-p-ok" class="text-success">${pauli.correct}</b>)</span>
              <span id="km-p-clock" class="badge badge-primary font-mono">${Math.floor(pauli.left / 60)}:${String(pauli.left % 60).padStart(2, '0')}</span>
            </div>
            <div class="km-pauli-pair my-4">
              <span id="km-p-a">${pauli.a}</span> + <span id="km-p-b">${pauli.b}</span> = <span class="text-primary">?</span>
            </div>
            <div class="km-pad">${pads}</div>
            <p class="mt-2 text-[0.7rem] text-slate-500">Gunakan tombol angka di atas atau keyboard angka <code>0–9</code>. Isi digit satuannya saja.</p>
            <button type="button" class="btn btn-ghost btn-xs mt-2 text-error" onclick="KemenSuite.pauliFinish()">Hentikan &amp; lihat hasil</button>
          </div>`;
      }
    } else if (tab === 'lgd') {
      const idx = Math.min(LGD_CASES.length - 1, Math.max(0, ncState.lgdIdx || 0));
      const lc = LGD_CASES[idx];
      const nav = LGD_CASES.map((it, i) => `<button type="button" class="pl-chip ${i === idx ? 'on' : ''}" onclick="KemenSuite.ncPickLgd(${i})">${esc(it.title.split('—')[0].trim())}</button>`).join('');
      body = `
        <div class="pl-chips mt-2.5">${nav}</div>
        <div class="km-card mt-3 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h4 class="text-base font-extrabold text-neutral">${esc(lc.title)}</h4>
            <span id="km-w-timer" class="badge badge-ghost font-mono text-xs">⏱️ Target ${Math.floor(ncState.wSec / 60)}:${String(ncState.wSec % 60).padStart(2, '0')}</span>
          </div>
          <p class="rounded-xl bg-sky-50 p-3 text-sm leading-relaxed text-slate-800">${esc(lc.scenario)}</p>
          <div><button type="button" class="btn btn-primary btn-sm" onclick="KemenSuite.ncToggleTimer(180)">${ncState.wTimer ? '⏸ Hentikan Timer' : '▶ Mulai Timer Bicara LGD (3 Menit)'}</button></div>
          <div>
            <b class="text-xs uppercase tracking-wide text-slate-600">4 Peran Strategis &amp; Poin Argumen Berkualitas:</b>
            <ul class="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-700">${lc.roles.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
          </div>
          <div class="rounded-xl border border-amber-200 bg-amber-50 p-2.5 text-xs text-amber-900"><b>⚠ Hindari Jebakan LGD:</b> ${esc(lc.antiTrap)}</div>
        </div>`;
    } else if (tab === 'psikotes') {
      const doneN = Object.keys(ncState.eppsAns).length;
      const scores = { Integritas: 0, Kepemimpinan: 0, Ketekunan: 0, Adaptabilitas: 0, Pelayanan: 0, Kolaborasi: 0 };
      PSIKOTES_PAIRS.forEach((p, idx) => {
        const pick = ncState.eppsAns[idx];
        if (pick === 0) scores[p[0]] = (scores[p[0]] || 0) + 1;
        else if (pick === 1) scores[p[1]] = (scores[p[1]] || 0) + 1;
      });
      const listHtml = PSIKOTES_PAIRS.map((p, idx) => {
        const cur = ncState.eppsAns[idx];
        return `<div class="km-item space-y-1">
          <div class="text-[0.68rem] font-extrabold text-slate-500">Pasangan ${idx + 1} dari ${PSIKOTES_PAIRS.length} — Pilih pernyataan yang PALING menggambarkan diri Anda:</div>
          <button type="button" class="w-full rounded-xl border-2 px-3 py-2 text-left text-xs font-semibold transition ${cur === 0 ? 'border-primary bg-sky-50 text-sky-900' : 'border-base-300 bg-base-100'}" onclick="KemenSuite.eppsPick(${idx}, 0)"><b>A.</b> ${esc(p[2])}</button>
          <button type="button" class="w-full rounded-xl border-2 px-3 py-2 text-left text-xs font-semibold transition ${cur === 1 ? 'border-primary bg-sky-50 text-sky-900' : 'border-base-300 bg-base-100'}" onclick="KemenSuite.eppsPick(${idx}, 1)"><b>B.</b> ${esc(p[3])}</button>
        </div>`;
      }).join('');
      const summaryBars = Object.entries(scores).sort((a, b) => b[1] - a[1]).map(([dim, v]) =>
        `<div class="flex items-center gap-2 text-xs"><span class="km-epps-dim shrink-0 font-bold">${esc(dim)}</span><div class="lx-track !h-2.5 flex-1"><div class="lx-fill" style="width:${Math.round((v / 4) * 100)}%"></div></div><b class="text-right">${v}/4</b></div>`
      ).join('');
      body = `
        <div class="mt-3 rounded-xl bg-sky-50 p-3 text-xs text-slate-700">
          <b>Simulasi Kepribadian Kerja (Forced-Choice EPPS/PAPI ASN):</b> Tidak ada jawaban salah mutlak; pilih secara spontan &amp; konsisten (${doneN}/${PSIKOTES_PAIRS.length} terisi).
          ${doneN === PSIKOTES_PAIRS.length ? `<div class="mt-2.5 space-y-1 border-t border-base-300 pt-2.5"><b class="text-sky-900">Profil Kecenderungan Kerja Anda:</b>${summaryBars}</div>` : ''}
        </div>
        <div class="mt-3 max-h-[46vh] space-y-2 overflow-y-auto pr-1">${listHtml}</div>
        ${doneN ? '<div class="mt-2 text-right"><button type="button" class="btn btn-ghost btn-xs text-error" onclick="KemenSuite.eppsReset()">Ulangi Pilihan</button></div>' : ''}`;
    } else {
      const pList = visiblePraktik();
      body = `
        <div class="pl-chips mt-2.5">${filterChoices}</div>
        <div class="mt-3 space-y-3">${pList.map((c, idx) => `
        <details class="rk-item" ${idx < 2 || (rf && c.role === rf) ? 'open' : ''}>
          <summary><span class="rk-num">★</span><span class="rk-sum-t">${esc(c.title)} <span class="badge badge-ghost badge-sm ml-1">${esc(roleShortLabel(c.role))}</span></span><span class="rk-chev" aria-hidden="true">▾</span></summary>
          <div class="rk-in">
            <p class="mt-2 text-sm font-semibold text-slate-700">${esc(c.prompt)}</p>
            <div class="mt-2 rounded-xl bg-sky-50 p-3 text-xs leading-relaxed text-slate-800">
              <b>Checklist Jawaban Teknis &amp; Substansi Sempurna:</b>
              <ul class="mt-1 list-disc space-y-1 pl-4">${c.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
            </div>
          </div>
        </details>`).join('')}</div>`;
    }

    const headSub = pref
      ? `Fokus bidang profil: ${roleShortLabel(pref)} — beserta materi universal Kementerian & Pemda.`
      : 'Latihan Wawancara User/Integritas, Psikotes Kraepelin, & Studi Kasus seluruh formasi Kementerian dan Pemda.';

    d.innerHTML = `
      <div class="modal-box max-w-2xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Lab SKB Non-CAT &amp; Studi Kasus (${pref ? esc(roleShortLabel(pref)) : 'Semua Formasi'})</h3>
          <p class="text-xs text-base-content/70">${esc(headSub)}</p></div>
          <button type="button" class="btn btn-ghost btn-sm btn-circle" onclick="KemenSuite.closeAll()" aria-label="Tutup">✕</button>
        </div>
        <div class="rkg-tabs mt-3">${tabs}</div>
        ${body}
        <div class="modal-action"><button type="button" class="btn btn-ghost btn-sm" onclick="KemenSuite.closeAll()">Tutup</button></div>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    d.onclose = ncStopTimers;
    if (!d.open) d.showModal();
  }

  /* ========================================================================
     2. KALKULATOR NILAI AKHIR CPNS KEMENTERIAN & PEMDA (40% SKD + 60% SKB)
     ======================================================================== */
  function estimateDefaultScores() {
    const hist = B().getHistory ? B().getHistory() : [];
    const targetBucket = activeTargetBucket();
    const skdRecs = hist.filter(h => h.group === 'SKD_FULL').sort((a, b) => b.score - a.score);
    const skbRecs = hist.filter(h => targetBucket ? h.group === targetBucket : String(h.group || '').startsWith('SKB_'))
      .sort((a, b) => (b.score / Math.max(1, b.max)) - (a.score / Math.max(1, a.max)));
    const bestSkd = skdRecs[0]?.score || 505;
    const bestSkb = skbRecs[0]?.max ? Math.round(skbRecs[0].score / skbRecs[0].max * 100) : 85;
    return { bestSkd, bestSkb, targetBucket: targetBucket || skbRecs[0]?.group || '' };
  }

  let calcState = null;
  function renderCalc(prefSkd) {
    const def = estimateDefaultScores();
    const defaultNonCatPct = activeTargetBucket() === 'SKB_PRAKOM' || activeTargetBucket() === 'SKB_INGGRIS' ? 30 : 0;
    if (!calcState) calcState = { skd: prefSkd || def.bestSkd, skbCat: def.bestSkb, nonCat: 85, nonCatPct: defaultNonCatPct, rivalSkd: 450 };
    else if (Number.isFinite(prefSkd)) calcState.skd = prefSkd;
    const d = dlg('dlg-kemen');
    const c = calcState;
    const skbLabel = def.targetBucket ? roleShortLabel(def.targetBucket) : 'Formasi Pilihan';
    const skdPct = Math.min(100, Math.max(0, c.skd / 550 * 100));
    const skdWeighted = skdPct * 0.4;
    const catWeight = Math.max(0, Math.min(100, 100 - c.nonCatPct)) / 100;
    const nonCatWeight = 1 - catWeight;
    const skbCombined = c.skbCat * catWeight + c.nonCat * nonCatWeight;
    const skbWeighted = skbCombined * 0.6;
    const totalFinal = skdWeighted + skbWeighted;

    const rivalSkdWeighted = (Math.min(550, Math.max(0, c.rivalSkd)) / 550 * 100) * 0.4;
    const rivalSkbAt80 = rivalSkdWeighted + 80 * 0.6;
    const needSkbToBeat80 = (rivalSkbAt80 - skdWeighted) / 0.6;
    const diffSkd = c.rivalSkd - c.skd;
    const needExtraSkbPts = diffSkd > 0 ? (diffSkd / 550 * 100 * 0.4) / 0.6 : 0;

    const presets = [[0, '100% CAT (Pemda & Standar BKN)'], [25, '75% CAT + 25% Non-CAT (Kemen)'], [30, '70% CAT + 30% Non-CAT (Kemen)'], [40, '60% CAT + 40% Non-CAT']]
      .map(([p, l]) => `<button type="button" class="pl-chip ${c.nonCatPct === p ? 'on' : ''}" onclick="KemenSuite.calcPreset(${p})">${l}</button>`).join('');

    const zone = c.skd >= 500 ? 'Target Elit 500++ Tercapai (Kemen & Pemda Top!)' : c.skd >= 420 ? 'Zona Persaingan Ketat (Kejar SKD 500++ & SKB >=90)' : c.skd >= 360 ? 'Zona Menengah (Wajib Ngebut +SKD & SKB >=90)' : 'Perlu Dongkrak SKD +100 Poin Menuju 500++';

    d.innerHTML = `
      <div class="modal-box max-w-2xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Kalkulator Nilai Akhir CPNS (40% SKD + 60% SKB)</h3>
          <p class="text-xs text-base-content/70">Simulasikan peluang lolos formasi Kementerian (CAT + Non-CAT) maupun Pemda (100% CAT) dengan target skor elit 500++.</p></div>
          <button type="button" class="btn btn-ghost btn-sm btn-circle" onclick="KemenSuite.closeAll()" aria-label="Tutup">✕</button>
        </div>

        <div class="mt-3 rounded-2xl bg-gradient-to-br from-primary to-secondary p-4 text-white">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <div><span class="text-xs font-bold opacity-85">Nilai Akhir Terintegrasi</span>
              <div class="text-4xl font-black">${totalFinal.toFixed(2)}</div></div>
            <div class="text-right text-xs">
              <div>SKD (40%): <b>${skdWeighted.toFixed(2)}</b></div>
              <div>SKB (60%): <b>${skbWeighted.toFixed(2)}</b></div>
              <div class="mt-1 rounded-full bg-white/20 px-2.5 py-0.5 font-bold">${zone}</div>
            </div>
          </div>
        </div>

        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <label class="block rounded-xl border border-base-300 p-3">
            <span class="text-xs font-bold text-slate-600">Skor SKD Anda (Target Utama 500++ / 550)</span>
            <input type="number" min="0" max="550" value="${c.skd}" class="input input-bordered input-sm mt-1 w-full font-bold" oninput="KemenSuite.calcSet('skd', this.value)">
          </label>
          <label class="block rounded-xl border border-base-300 p-3">
            <span class="text-xs font-bold text-slate-600">Skor SKB CAT — ${esc(skbLabel)} (0–100)</span>
            <input type="number" min="0" max="100" value="${c.skbCat}" class="input input-bordered input-sm mt-1 w-full font-bold" oninput="KemenSuite.calcSet('skbCat', this.value)">
          </label>
          <label class="block rounded-xl border border-base-300 p-3">
            <span class="text-xs font-bold text-slate-600">Skor SKB Non-CAT / Wawancara (0–100)</span>
            <input type="number" min="0" max="100" value="${c.nonCat}" class="input input-bordered input-sm mt-1 w-full font-bold" ${c.nonCatPct === 0 ? 'disabled' : ''} oninput="KemenSuite.calcSet('nonCat', this.value)">
          </label>
          <label class="block rounded-xl border border-base-300 p-3">
            <span class="text-xs font-bold text-slate-600">Estimasi Skor SKD Pesaing Terkuat (0–550)</span>
            <input type="number" min="0" max="550" value="${c.rivalSkd}" class="input input-bordered input-sm mt-1 w-full font-bold" oninput="KemenSuite.calcSet('rivalSkd', this.value)">
          </label>
        </div>

        <div class="mt-3">
          <div class="text-xs font-bold text-slate-600 mb-1.5">Skema Komposisi SKB (Pemda 100% CAT vs Kementerian CAT + Non-CAT):</div>
          <div class="pl-chips">${presets}</div>
        </div>

        <div class="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-slate-800">
          <b>Analisis Posisi vs Pesaing (SKD Pesaing = ${c.rivalSkd}):</b>
          <ul class="mt-1 list-disc space-y-1 pl-4">
            <li>Setiap <b>10 poin keunggulan SKD</b> bernilai <b>0,73 poin akhir</b> (setara <b>1,21 poin</b> di nilai SKB), namun skor SKD <b>500++</b> memastikan lolos perangkingan 3× formasi SKD sekaligus memimpin tabungan awal!</li>
            ${diffSkd > 0
              ? `<li>Saat ini Anda tertinggal <b>${diffSkd} poin SKD</b>, artinya Anda butuh unggul minimal <b>+${needExtraSkbPts.toFixed(1)} poin di SKB</b> untuk menyalip total nilainya.</li>`
              : `<li>Anda unggul <b>+${Math.abs(diffSkd)} poin SKD</b> atas pesaing tersebut — jaga stabilitas SKB >= 90 untuk mengunci peringkat 1!</li>`}
            <li>Jika pesaing mendapat SKB <b>80,0</b>, nilai SKB minimal Anda agar menyalipnya adalah <b>${Math.max(0, Math.min(100, needSkbToBeat80)).toFixed(1)}</b> ${needSkbToBeat80 > 100 ? '(tidak terkejar dari SKB saja — kejar target SKD 500++!)' : ''}.</li>
          </ul>
        </div>
        <div class="modal-action"><button type="button" class="btn btn-primary btn-sm" onclick="KemenSuite.closeAll()">Tutup</button></div>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    if (!d.open) d.showModal();
  }

  /* ========================================================================
     3. BANK EVALUASI: ERROR VAULT (SOAL SALAH) & BOOKMARK SOAL SULIT
     ======================================================================== */
  let vaultTab = 'wrong';
  function renderVault() {
    const b = B();
    const d = dlg('dlg-kemen');
    const idx = b.planQIndex();
    const wrongs = Object.values(b.getWrongMap()).filter(w => idx.get(w.id)).sort((a, b2) => (a.nextDueAt || 0) - (b2.nextDueAt || 0));
    const bms = Object.values(b.getBookmarks()).filter(bm => idx.get(bm.id)).sort((a, b2) => (b2.at || 0) - (a.at || 0));
    const now = Date.now();
    const dueCount = wrongs.filter(w => (w.nextDueAt || 0) <= now).length;

    const tabs = [
      ['wrong', `❌ Soal Pernah Salah (${wrongs.length})`],
      ['bm', `⭐ Bookmark Soal (${bms.length})`]
    ].map(([id, lbl]) => `<button type="button" class="rkg-pill ${vaultTab === id ? 'on twk' : ''}" onclick="KemenSuite.vaultTab('${id}')">${lbl}</button>`).join('');

    let content = '';
    if (vaultTab === 'wrong') {
      const listHtml = wrongs.length
        ? wrongs.slice(0, 30).map(w => {
            const q = idx.get(w.id);
            const due = (w.nextDueAt || 0) <= now;
            return `<div class="km-item"><div class="flex items-start justify-between gap-2"><span class="badge badge-sm ${due ? 'badge-error text-white' : 'badge-ghost'}">${due ? 'Perlu diulang sekarang' : 'Terjadwal ulang'}</span><button type="button" class="btn btn-ghost btn-xs text-slate-400" onclick="KemenSuite.vaultDelWrong('${esc(w.id)}')">Hapus</button></div>
              <div class="mt-1 text-xs font-bold text-slate-600">${esc(q.category)} · ${esc(q.sub)} (Salah ${w.count}×)</div>
              <div class="mt-1 text-sm font-semibold text-slate-900 line-clamp-2">${esc(q.q)}</div></div>`;
          }).join('')
        : '<div class="rkg-empty">Belum ada daftar soal salah yang tercatat. Kerjakan latihan atau tryout untuk melacak butir soal yang meleset.</div>';
      content = `
        <div class="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-900">
          <span><b>${dueCount} soal</b> jatuh tempo untuk diulang (spaced repetition).</span>
          <div class="flex gap-2">
            <button type="button" class="btn btn-primary btn-xs" ${wrongs.length ? '' : 'disabled'} onclick="KemenSuite.vaultStartWrong()">▶ Latih Soal Salah (${Math.min(20, wrongs.length)})</button>
            ${wrongs.length ? '<button type="button" class="btn btn-ghost btn-xs text-error" onclick="KemenSuite.vaultClearWrong()">Kosongkan</button>' : ''}
          </div>
        </div>
        <div class="mt-3 max-h-[46vh] space-y-2 overflow-y-auto pr-1">${listHtml}</div>`;
    } else {
      const listHtml = bms.length
        ? bms.map(bm => {
            const q = idx.get(bm.id);
            return `<div class="km-item"><div class="flex items-start justify-between gap-2"><span class="badge badge-sm badge-warning">${esc(q.category)}</span><button type="button" class="btn btn-ghost btn-xs text-error" onclick="KemenSuite.vaultDelBm('${esc(bm.id)}')">Hapus</button></div>
              <div class="mt-1 text-xs font-bold text-slate-600">${esc(q.sub)}</div>
              <div class="mt-1 text-sm font-semibold text-slate-900 line-clamp-2">${esc(q.q)}</div>
              <input type="text" class="input input-bordered input-xs mt-2 w-full" placeholder="Tulis catatan ingat pribadi..." value="${esc(bm.note || '')}" onchange="KemenSuite.vaultSaveNote('${esc(bm.id)}', this.value)"></div>`;
          }).join('')
        : '<div class="rkg-empty">Belum ada soal yang ditandai. Ketuk "☆ Simpan sulit" saat ujian atau membaca rangkuman.</div>';
      content = `
        <div class="mt-3 flex items-center justify-between gap-2 rounded-xl bg-sky-50 p-3 text-xs text-slate-700">
          <span>Latih kembali kumpulan soal sulit yang Anda simpan.</span>
          <button type="button" class="btn btn-primary btn-xs" ${bms.length ? '' : 'disabled'} onclick="KemenSuite.vaultStartBm()">▶ Latih Bookmark (${bms.length})</button>
        </div>
        <div class="mt-3 max-h-[46vh] space-y-2 overflow-y-auto pr-1">${listHtml}</div>`;
    }

    d.innerHTML = `
      <div class="modal-box max-w-2xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Bank Soal Salah &amp; Bookmark Pribadi</h3>
          <p class="text-xs text-base-content/70">Ulangi persis soal yang meleset dan kumpulkan catatan jebakan Anda sendiri.</p></div>
          <button type="button" class="btn btn-ghost btn-sm btn-circle" onclick="KemenSuite.closeAll()" aria-label="Tutup">✕</button>
        </div>
        <div class="rkg-tabs mt-3">${tabs}</div>
        ${content}
        <div class="modal-action"><button type="button" class="btn btn-ghost btn-sm" onclick="KemenSuite.closeAll()">Tutup</button></div>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    if (!d.open) d.showModal();
  }

  /* Global keyboard handler during Kraepelin Pauli mini-test */
  document.addEventListener('keydown', e => {
    if (!pauli || !pauli.running) return;
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      window.KemenSuite.pauliInput(Number(e.key));
    }
  });

  /* ========================================================================
     4. ANALITIK TREN SKOR & KELULUSAN TARGET 500++
     ======================================================================== */
  let anaScope = 'SKD_FULL';
  function trendSvg(points, max, targetVal) {
    const w = 440, h = 150, l = 34, r = 424, t = 16, b = 126;
    const y = v => b - (b - t) * Math.max(0, Math.min(max, v)) / max;
    const x = i => points.length <= 1 ? (l + r) / 2 : l + (r - l) * i / (points.length - 1);
    const poly = points.map((p, i) => `${x(i)},${y(p.score)}`).join(' ');
    const targetY = y(targetVal);
    return `<svg viewBox="0 0 ${w} ${h}" class="km-chart w-full" role="img" aria-label="Grafik tren skor tryout">
      <line x1="${l}" y1="${t}" x2="${l}" y2="${b}" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="${l}" y1="${b}" x2="${r}" y2="${b}" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="${l}" y1="${targetY}" x2="${r}" y2="${targetY}" stroke="#10b981" stroke-dasharray="5 4" stroke-width="1.5"/>
      <text x="${r - 2}" y="${Math.max(11, targetY - 4)}" text-anchor="end" fill="#059669" font-size="9" font-weight="bold">Target ${targetVal}</text>
      <text x="4" y="${t + 4}" fill="#64748b" font-size="9">${max}</text>
      <text x="4" y="${b + 3}" fill="#64748b" font-size="9">0</text>
      <polyline fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${poly}"/>
      ${points.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.score)}" r="4.5" fill="#0284c7" stroke="#fff" stroke-width="1.5"><title>Tryout ${i + 1}: ${p.score}/${max}</title></circle>
        <text x="${x(i)}" y="${h - 6}" text-anchor="middle" fill="#475569" font-size="9">#${i + 1}</text>
        <text x="${x(i)}" y="${Math.max(11, y(p.score) - 8)}" text-anchor="middle" fill="#0f172a" font-size="9" font-weight="bold">${p.score}</text>`).join('')}
    </svg>`;
  }

  function renderAnalytics(scopeOverride) {
    if (scopeOverride) anaScope = scopeOverride;
    const b = B(), d = dlg('dlg-kemen');
    const hist = (b.getHistory ? b.getHistory() : []).slice().sort((a, x) => a.date - x.date);
    const pref = activeTargetBucket();
    const isSkd = anaScope === 'SKD_FULL';
    const pool = isSkd
      ? hist.filter(h => h.group === 'SKD_FULL')
      : hist.filter(h => anaScope === 'ALL_SKB' ? String(h.group || '').startsWith('SKB_') : h.group === anaScope);
    const maxScale = isSkd ? 550 : 100;
    const normPts = pool.slice(-12).map((h, i) => ({
      score: isSkd ? Math.round(h.score * (550 / Math.max(1, h.max))) : Math.round((h.score / Math.max(1, h.max)) * 100),
      raw: h, no: i + 1
    }));
    const latest = normPts.at(-1)?.score || 0;
    const best = normPts.length ? Math.max(...normPts.map(x => x.score)) : 0;
    const avg = normPts.length ? Math.round(normPts.reduce((s, x) => s + x.score, 0) / normPts.length) : 0;
    const targetMark = isSkd ? 500 : 90;

    const statusBadge = !normPts.length
      ? 'Belum ada data tryout di kategori ini'
      : isSkd
        ? (latest >= 500 ? '🏆 Kandidat Elit Kementerian & Pemda (500++)' : latest >= 430 ? '⚡ Kompetitif Pemda (Kejar 500++ untuk Kemen Pusat)' : latest >= 311 ? '⚠ Lolos PG Dasar — Perlu Kebut +80 Poin' : '🚨 Belum Aman PG — Fokus Materi Kelemahan')
        : (latest >= 90 ? '🏆 Dominan 60% Bobot SKB (>= 90%)' : latest >= 75 ? '⚡ Cukup Baik — Tingkatkan ke >= 90%' : '🚨 Masih di bawah target SKB 90%');

    // Agregasi subtes SKD terbaru & kelemahan topik
    const latestRaw = normPts.at(-1)?.raw;
    const subPartsHtml = isSkd && latestRaw?.parts
      ? `<div class="mt-3 grid grid-cols-3 gap-2 text-center">${['TWK', 'TIU', 'TKP'].map(k => {
          const p = latestRaw.parts[k];
          return p ? `<div class="rounded-xl border border-base-300 bg-base-100 p-2"><div class="text-[0.68rem] font-bold text-slate-500">${k}</div><div class="text-lg font-extrabold text-neutral">${p.score}<span class="text-xs font-normal text-slate-400">/${p.max}</span></div></div>` : '';
        }).join('')}</div>`
      : '';

    const revMap = b.getReviews ? b.getReviews() : {};
    const weakTopics = [];
    Object.entries(revMap).forEach(([bk, rec]) => {
      if (isSkd && !bk.startsWith('SKD_')) return;
      if (!isSkd && anaScope !== 'ALL_SKB' && bk !== anaScope) return;
      (rec?.issues || []).forEach(it => weakTopics.push(it.sub));
    });
    const topWeak = [...weakTopics.reduce((m, s) => m.set(s, (m.get(s) || 0) + 1), new Map()).entries()]
      .sort((a, x) => x[1] - a[1]).slice(0, 5);

    const tabs = [
      ['SKD_FULL', '📊 Tren SKD (Target 500++)'],
      [pref || 'ALL_SKB', pref ? `🎯 Tren SKB ${roleShortLabel(pref)}` : '🏛️ Tren Semua SKB']
    ];
    if (pref && pref !== 'ALL_SKB') tabs.push(['ALL_SKB', '📚 Semua SKB']);

    d.innerHTML = `
      <div class="modal-box max-w-2xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Analitik Tren &amp; Proyeksi Peluang 500++</h3>
          <p class="text-xs text-base-content/70">Pantau konsistensi skor tryout, kecepatan, dan topik terlemah lintas sesi.</p></div>
          <button type="button" class="btn btn-ghost btn-sm btn-circle" onclick="KemenSuite.closeAll()" aria-label="Tutup">✕</button>
        </div>
        <div class="rkg-tabs mt-3">${tabs.map(([id, lbl]) => `<button type="button" class="rkg-pill ${anaScope === id ? 'on twk' : ''}" onclick="KemenSuite.openAnalytics('${esc(id)}')">${esc(lbl)}</button>`).join('')}</div>
        <div class="mt-3 grid grid-cols-3 gap-2 text-center">
          <div class="rounded-xl bg-sky-50 p-2.5"><span class="text-[0.68rem] font-bold text-slate-600">Terbaru</span><b class="block text-xl text-primary">${latest}${isSkd ? '' : '%'}</b></div>
          <div class="rounded-xl bg-emerald-50 p-2.5"><span class="text-[0.68rem] font-bold text-slate-600">Rekor Terbaik</span><b class="block text-xl text-success">${best}${isSkd ? '' : '%'}</b></div>
          <div class="rounded-xl bg-violet-50 p-2.5"><span class="text-[0.68rem] font-bold text-slate-600">Rata-rata (${normPts.length}×)</span><b class="block text-xl text-secondary">${avg}${isSkd ? '' : '%'}</b></div>
        </div>
        <div class="mt-2.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-extrabold text-amber-900">${statusBadge}</div>
        <div class="km-card mt-3">
          ${normPts.length ? trendSvg(normPts, maxScale, targetMark) : '<div class="py-4 text-center text-xs text-slate-500">Selesaikan minimal 1 paket Tryout Penuh atau SKB untuk melihat grafik tren skor Anda.</div>'}
          ${subPartsHtml}
        </div>
        ${topWeak.length ? `<div class="mt-3 rounded-xl border border-base-300 p-3"><b class="text-xs text-neutral">5 Sub-Topik Paling Sering Salah:</b>
          <div class="mt-1.5 flex flex-wrap gap-1.5">${topWeak.map(([s, n]) => `<span class="badge badge-warning badge-sm font-semibold">${esc(s)} (${n}×)</span>`).join('')}</div></div>` : ''}
        <div class="modal-action flex-wrap justify-between gap-2">
          <button type="button" class="btn btn-outline btn-sm" onclick="KemenSuite.openReport()">🖨️ Cetak / Simpan PDF Laporan</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="KemenSuite.closeAll()">Tutup</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    if (!d.open) d.showModal();
  }

  /* ========================================================================
     5. FLASHCARD HAFALAN KILAT (SPACED PRACTICE 5 MENIT SEBELUM TES)
     ======================================================================== */
  let fcState = { scope: 'ALL', idx: 0, flipped: false };
  function collectFlashcards(scope) {
    const b = B();
    const list = b.getMateriList ? b.getMateriList() : (window.MATERI || []);
    const pref = activeTargetBucket();
    const cards = [];
    list.forEach(t => {
      if (t.hidden) return;
      if (scope === 'TWK' || scope === 'TIU' || scope === 'TKP') {
        if (t.group !== scope) return;
      } else if (scope === 'SKB') {
        if (t.group !== 'SKB') return;
        if (pref && 'SKB_' + t.skbCategory !== pref) return;
      }
      (t.sections || []).forEach(st => {
        const plain = String(st.body || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        if (!plain) return;
        const isRead = b.isRkRead ? b.isRkRead(t.id, st.title) : false;
        if (scope === 'UNREAD' && isRead) return;
        cards.push({
          tId: t.id,
          badge: t.group === 'SKB' ? `SKB ${t.skbCategory || ''}` : t.group,
          topic: t.title,
          stepTitle: st.title,
          front: `${t.title} — ${st.title}`,
          back: plain.slice(0, 320) + (plain.length > 320 ? '…' : ''),
          tips: (t.tips || [])[0] || '',
          read: isRead
        });
      });
    });
    return cards;
  }

  function renderFlashcards(scopeOverride) {
    if (scopeOverride) { fcState.scope = scopeOverride; fcState.idx = 0; fcState.flipped = false; }
    const d = dlg('dlg-kemen');
    const pref = activeTargetBucket();
    const cards = collectFlashcards(fcState.scope);
    if (fcState.idx >= cards.length) fcState.idx = 0;
    const card = cards[fcState.idx];
    const scopes = [
      ['ALL', 'Semua'], ['UNREAD', 'Belum Hafal'], ['TWK', 'TWK'], ['TIU', 'TIU'], ['TKP', 'TKP'],
      ['SKB', pref ? `SKB ${roleShortLabel(pref)}` : 'SKB']
    ];
    d.innerHTML = `
      <div class="modal-box max-w-xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Flashcard Hafalan Kilat (Mode H-1 / 5 Menit)</h3>
          <p class="text-xs text-base-content/70">Ketuk kartu untuk menguji hafalan pasal, rumus cepat TIU, dan poin SKB Anda.</p></div>
          <button type="button" class="btn btn-ghost btn-sm btn-circle" onclick="KemenSuite.closeAll()" aria-label="Tutup">✕</button>
        </div>
        <div class="pl-chips mt-3">${scopes.map(([id, lbl]) => `<button type="button" class="pl-chip ${fcState.scope === id ? 'on' : ''}" onclick="KemenSuite.openFlashcards('${id}')">${esc(lbl)}</button>`).join('')}</div>
        ${card ? `
          <div class="mt-3 flex items-center justify-between text-xs font-bold text-slate-600">
            <span>Kartu ${fcState.idx + 1} dari ${cards.length}</span>
            <span class="badge badge-sm ${card.read ? 'badge-success text-white' : 'badge-ghost'}">${card.read ? '✓ Sudah Hafal' : esc(card.badge)}</span>
          </div>
          <button type="button" class="km-flashcard mt-2 w-full text-left" onclick="KemenSuite.fcFlip()">
            <span class="text-[0.68rem] font-extrabold uppercase tracking-wide text-primary">${esc(card.badge)} · ${fcState.flipped ? 'INTI JAWABAN / RUMUS' : 'KETUK UNTUK BUKA JAWABAN'}</span>
            <div class="mt-2 text-base font-extrabold text-neutral leading-snug">${esc(card.front)}</div>
            ${fcState.flipped ? `
              <div class="mt-3 rounded-xl bg-sky-50 p-3 text-xs leading-relaxed text-slate-800">${esc(card.back)}</div>
              ${card.tips ? `<div class="mt-2 rounded-xl bg-amber-50 p-2.5 text-xs text-amber-900"><b>⚡ Trik Cepat:</b> ${esc(card.tips)}</div>` : ''}
            ` : `<div class="mt-4 text-xs text-slate-500">Sebutkan isi/rumus utama topik di atas dalam hati, lalu klik kartu ini...</div>`}
          </button>
          <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
            <div class="flex gap-1.5">
              <button type="button" class="btn btn-ghost btn-sm" onclick="KemenSuite.fcStep(-1)">← Sebelumnya</button>
              <button type="button" class="btn btn-outline btn-sm" onclick="KemenSuite.fcMark(false)">Ulangi Lagi</button>
            </div>
            <button type="button" class="btn btn-success btn-sm text-white" onclick="KemenSuite.fcMark(true)">✓ Tandai Hafal &amp; Lanjut →</button>
          </div>`
        : '<div class="rkg-empty mt-4">Semua kartu pada filter ini sudah ditandai hafal! Pilih filter "Semua" untuk mengulang kembali.</div>'}
        <div class="modal-action"><button type="button" class="btn btn-ghost btn-sm" onclick="KemenSuite.closeAll()">Tutup</button></div>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    if (!d.open) d.showModal();
  }

  /* ========================================================================
     6. EKSPOR LAPORAN BELAJAR & KELEMAHAN SIAP CETAK / SAVE PDF
     ======================================================================== */
  function openReport() {
    const b = B(), d = dlg('dlg-kemen');
    const pref = activeTargetBucket();
    const role = (b.getTargetRole ? b.getTargetRole() : '') || 'CPNS Kementerian / Pemda';
    const hist = (b.getHistory ? b.getHistory() : []).slice(-8).reverse();
    const wrongs = Object.values(b.getWrongMap ? b.getWrongMap() : {});
    const idx = b.planQIndex ? b.planQIndex() : new Map();
    const wrongRows = wrongs.slice(0, 15).map(w => {
      const q = idx.get(w.id);
      return q ? `<li><b>[${esc(q.category)}] ${esc(q.sub)}:</b> ${esc(q.q)}<br><small>Kunci: ${esc(q.options?.[q.ans] || '')}${q.trick ? ' · Trik: ' + esc(q.trick) : ''}</small></li>` : '';
    }).filter(Boolean).join('');
    d.innerHTML = `
      <div id="km-print-report" class="modal-box max-w-2xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Laporan Progres &amp; Diktat Kelemahan GOCPNS</h3>
          <p class="text-xs text-base-content/70">Target: ${esc(role)}${pref ? ` · Bidang SKB: ${esc(roleShortLabel(pref))}` : ''} · Dicetak ${new Date().toLocaleDateString('id-ID')}</p></div>
          <button type="button" class="btn btn-ghost btn-sm btn-circle no-print" onclick="KemenSuite.closeAll()" aria-label="Tutup">✕</button>
        </div>
        <div class="mt-3 space-y-3 text-xs leading-relaxed">
          <div class="rounded-xl border border-base-300 p-3">
            <b class="text-sm text-neutral">Riwayat Tryout Terbaru (${hist.length} Sesi)</b>
            ${hist.length ? `<ul class="mt-1.5 space-y-1">${hist.map(h => `<li>• <b>${esc(h.group)}</b>: Skor <b>${h.score}/${h.max}</b> (${Math.round((h.score / Math.max(1, h.max)) * 100)}%) — ${new Date(h.date).toLocaleDateString('id-ID')}</li>`).join('')}</ul>`
              : '<p class="mt-1 text-slate-500">Belum ada riwayat tryout selesai.</p>'}
          </div>
          <div class="rounded-xl border border-base-300 p-3">
            <b class="text-sm text-neutral">Ringkasan Soal Pernah Salah &amp; Trik Cepat (${Math.min(15, wrongs.length)} Teratas)</b>
            ${wrongRows ? `<ol class="mt-1.5 list-decimal space-y-2 pl-4">${wrongRows}</ol>`
              : '<p class="mt-1 text-slate-500">Tidak ada catatan soal salah tertunda saat ini.</p>'}
          </div>
        </div>
        <div class="modal-action no-print">
          <button type="button" class="btn btn-outline btn-sm" onclick="window.print()">🖨️ Cetak / Save as PDF</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="KemenSuite.closeAll()">Tutup</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop"><button aria-label="Tutup">tutup</button></form>`;
    if (!d.open) d.showModal();
  }

  function pauliNextPair() {
    pauli.a = Math.floor(Math.random() * 9) + 1;
    pauli.b = Math.floor(Math.random() * 9) + 1;
  }

  window.KemenSuite = {
    openNonCat(tab = 'wawancara') { ncStopTimers(); ncState.tab = tab; renderNonCat(); },
    ncTab(tab) { ncStopTimers(); ncState.tab = tab; renderNonCat(); },
    ncRole(r) { ncStopTimers(); ncState.roleFilter = r; ncState.wIdx = 0; ncState.wShowStar = false; renderNonCat(); },
    ncPickW(i) { ncStopTimers(); ncState.wIdx = i; ncState.wSec = 120; ncState.wShowStar = false; renderNonCat(); },
    ncPickLgd(i) { ncStopTimers(); ncState.lgdIdx = i; ncState.wSec = 180; renderNonCat(); },
    eppsPick(idx, val) { ncState.eppsAns[idx] = val; renderNonCat(); },
    eppsReset() { ncState.eppsAns = {}; renderNonCat(); },
    ncToggleStar() { ncState.wShowStar = !ncState.wShowStar; renderNonCat(); },
    ncSaveNote: saveNote,
    ncToggleTimer(targetSec = 120) {
      if (ncState.wTimer) { clearInterval(ncState.wTimer); ncState.wTimer = null; renderNonCat(); return; }
      ncState.wSec = targetSec;
      ncState.wTimer = setInterval(() => {
        ncState.wSec = Math.max(0, ncState.wSec - 1);
        const el = document.getElementById('km-w-timer');
        if (el) el.textContent = `⏱️ ${Math.floor(ncState.wSec / 60)}:${String(ncState.wSec % 60).padStart(2, '0')}`;
        if (ncState.wSec <= 0) { clearInterval(ncState.wTimer); ncState.wTimer = null; B().toast?.('Waktu selesai!'); renderNonCat(); }
      }, 1000);
      renderNonCat();
    },

    pauliStart(dur = 60) {
      ncStopTimers();
      pauli = { running: true, done: false, dur, left: dur, correct: 0, total: 0, splits: [], sliceOk: 0, a: 3, b: 6, timer: null };
      pauliNextPair();
      pauli.timer = setInterval(() => {
        if (!pauli || !pauli.running) return;
        pauli.left--;
        const elapsed = pauli.dur - pauli.left;
        if (elapsed % 30 === 0) { pauli.splits.push(pauli.sliceOk); pauli.sliceOk = 0; }
        const cl = document.getElementById('km-p-clock');
        if (cl) cl.textContent = `${Math.floor(pauli.left / 60)}:${String(pauli.left % 60).padStart(2, '0')}`;
        if (pauli.left <= 0) window.KemenSuite.pauliFinish();
      }, 1000);
      renderNonCat();
    },
    pauliInput(digit) {
      if (!pauli || !pauli.running) return;
      const expected = (pauli.a + pauli.b) % 10;
      pauli.total++;
      if (digit === expected) { pauli.correct++; pauli.sliceOk++; }
      pauliNextPair();
      const elA = document.getElementById('km-p-a'), elB = document.getElementById('km-p-b');
      const elTot = document.getElementById('km-p-tot'), elOk = document.getElementById('km-p-ok');
      if (elA) elA.textContent = pauli.a;
      if (elB) elB.textContent = pauli.b;
      if (elTot) elTot.textContent = pauli.total;
      if (elOk) elOk.textContent = pauli.correct;
    },
    pauliFinish() {
      if (!pauli) return;
      if (pauli.timer) { clearInterval(pauli.timer); pauli.timer = null; }
      if (pauli.sliceOk > 0 || !pauli.splits.length) pauli.splits.push(pauli.sliceOk);
      pauli.running = false; pauli.done = true;
      const rate = Math.round(pauli.correct * 60 / Math.max(1, pauli.dur - pauli.left));
      const acc = pauli.total ? Math.round(pauli.correct / pauli.total * 100) : 0;
      const prev = B().store.get(PAULI_BEST_KEY, null);
      if (pauli.correct >= 5 && (!prev || rate > prev.rate)) B().store.set(PAULI_BEST_KEY, { rate, acc });
      renderNonCat();
    },

    openCalc(skdScore) { const tb = activeTargetBucket(); if (calcState && calcState._bucket !== tb) calcState = null; renderCalc(skdScore); if (calcState) calcState._bucket = tb; },
    calcPreset(p) { if (calcState) { calcState.nonCatPct = p; renderCalc(); } },
    calcSet(field, val) {
      if (!calcState) return;
      const num = Number(val);
      if (!Number.isFinite(num)) return;
      const max = field === 'skd' || field === 'rivalSkd' ? 550 : 100;
      calcState[field] = Math.max(0, Math.min(max, num));
      renderCalc();
    },

    openVault() { renderVault(); },
    vaultTab(t) { vaultTab = t; renderVault(); },
    vaultDelWrong(id) { B().removeWrong(id); renderVault(); B().rerender(); },
    vaultClearWrong() { B().clearWrong(); renderVault(); B().rerender(); },
    vaultDelBm(id) { B().removeBookmark(id); renderVault(); B().rerender(); },
    vaultSaveNote(id, txt) { B().setBookmarkNote(id, txt); },
    vaultStartWrong() {
      const b = B(), idx = b.planQIndex(), now = Date.now();
      const list = Object.values(b.getWrongMap())
        .sort((a, x) => ((a.nextDueAt <= now ? 0 : 1) - (x.nextDueAt <= now ? 0 : 1)) || (x.count - a.count))
        .map(w => idx.get(w.id)).filter(Boolean).slice(0, 20);
      if (!list.length) { b.toast('Belum ada soal salah tersimpan.'); return; }
      this.closeAll();
      b.startCustomExam({
        key: 'VAULT-WRONG', group: 'REVIEW', kind: 'LATIHAN', mode: 'REVIEW', noSave: true, minutes: 0,
        title: 'Latih Ulang Soal Pernah Salah', compose: `${list.length} butir soal evaluasi`, questions: list
      }, { instant: true });
    },
    vaultStartBm() {
      const b = B(), idx = b.planQIndex();
      const list = Object.values(b.getBookmarks()).map(bm => idx.get(bm.id)).filter(Boolean).slice(0, 30);
      if (!list.length) { b.toast('Belum ada soal di Bookmark.'); return; }
      this.closeAll();
      b.startCustomExam({
        key: 'VAULT-BM', group: 'REVIEW', kind: 'LATIHAN', mode: 'REVIEW', noSave: true, minutes: 0,
        title: 'Latihan Soal Bookmark Sulit', compose: `${list.length} soal simpanan pribadi`, questions: list
      }, { instant: true });
    },

    openAnalytics(scope) { ncStopTimers(); renderAnalytics(scope); },
    openFlashcards(scope) { ncStopTimers(); renderFlashcards(scope); },
    fcFlip() { fcState.flipped = !fcState.flipped; renderFlashcards(); },
    fcStep(delta) { fcState.idx = Math.max(0, fcState.idx + delta); fcState.flipped = false; renderFlashcards(); },
    fcMark(memorized) {
      const cards = collectFlashcards(fcState.scope);
      const card = cards[fcState.idx];
      if (card && memorized && B().setRkReadState) {
        B().setRkReadState(card.tId, card.stepTitle, true);
      }
      fcState.idx = cards.length ? (fcState.idx + 1) % cards.length : 0;
      fcState.flipped = false;
      renderFlashcards();
    },
    openReport() { ncStopTimers(); openReport(); },

    closeAll() {
      ncStopTimers();
      const d = document.getElementById('dlg-kemen');
      if (d && d.open) d.close();
      B().rerender();
    }
  };
})();
