/* ==========================================================================
   KemenSuite — Lab SKB Non-CAT Prakom Kementerian, Kalkulator 40:60,
   & Bank Evaluasi (Error Vault + Bookmark Soal Sulit)
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

  /* ========================================================================
     1. LAB SKB NON-CAT PRAKOM KEMENTERIAN (Wawancara STAR, Kraepelin/Pauli, Praktik)
     ======================================================================== */
  const INTERVIEW_CASES = [
    {
      id: 'w-motivasi', cat: 'Komitmen & BerAKHLAK',
      q: 'Mengapa Anda memilih melamar Pranata Komputer di Kementerian ini, dan nilai apa yang siap Anda bawa saat menghadapi tekanan target proyek SPBE?',
      star: [
        'Situation/Task: Pengalaman mengerjakan sistem berbatas waktu ketat / perbaikan proses kerja.',
        'Action: Fokus ke solusi berbasis data, dokumentasi rapi, koordinasi lintas unit, tidak menyalahkan tim.',
        'Result: Layanan stabil/hemat waktu proses; kaitkan dengan nilai Adaptif & Kolaboratif ASN BerAKHLAK.'
      ],
      rubric: ['Menyebut alasan kontribusi publik (bukan sekadar cari aman PNS)', 'Paham tugas pokok JF Prakom & transformasi layanan digital kementerian', 'Nada suara tenang, struktur STAR ringkas ±90 detik']
    },
    {
      id: 'w-insiden', cat: 'Kompetensi Teknis Prakom',
      q: 'Bayangkan portal layanan publik kementerian mendadak down pukul 09.00 pagi saat ribuan pemohon mendaftar. Langkah 15 menit pertama Anda sebagai Prakom?',
      star: [
        'Triage & Komunikasi (0–5 mnt): Cek status halaman/monitoring/API Gateway, aktifkan halaman pengumuman resmi agar pemohon tidak panik.',
        'Isolasi & Pemulihan (5–15 mnt): Cek log error, resource DB/CPU, jalankan failover/rollback Blue-Green jika pasca-rilis atau circuit breaker.',
        'Post-Incident: Setelah layanan pulih, susun RCA (Root Cause Analysis) dan perbaikan agar tidak berulang (Problem Management ITIL).'
      ],
      rubric: ['Memisahkan pemulihan layanan (Incident) vs investigasi akar (Problem)', 'Tidak asal mematikan server/menghapus log audit', 'Koordinasi jelas dengan atasan dan tim humas layanan']
    },
    {
      id: 'w-uupdp', cat: 'Integritas & Keamanan Data',
      q: 'Seorang pejabat struktural meminta salinan mentah seluruh data NIK dan alamat pemohon layanan lewat WhatsApp untuk keperluan cepat di luar kantor. Apa tindakan Anda?',
      star: [
        'Menolak permintaan pengiriman data mentah via jalur tidak aman secara santun dan tegas.',
        'Menjelaskan kewajiban UU PDP No. 27/2022 & risiko kebocoran data pribadi.',
        'Memberi solusi resmi: penyediaan ringkasan data teragregasi/teranonim melalui mekanisme permohonan akses resmi tercatat.'
      ],
      rubric: ['Patuh prosedur keamanan data meskipun yang meminta adalah atasan', 'Tetap memberi solusi alternatif yang sah & cepat (tidak kaku pasif)']
    },
    {
      id: 'w-suap', cat: 'Integritas Pengadaan TI',
      q: 'Dalam tim penyusunan spesifikasi teknis (KAK) aplikasi kementerian, salah satu vendor mengajak bertemu dan menawarkan komisi. Sikap dan langkah Anda?',
      star: [
        'Tolak langsung dengan sopan dan tegaskan proses pengadaan berjalan netral.',
        'Susun spesifikasi teknis berbasis kebutuhan fungsional & standar terbuka (tanpa mengarah ke merek).',
        'Laporkan upaya gratifikasi/suap ke atasan/inspektorat atau UPG/KPK maksimal 30 hari kerja.'
      ],
      rubric: ['Berani menolak tegas tanpa kompromi', 'Menggunakan mekanisme pelaporan resmi (WBS/UPG)']
    },
    {
      id: 'w-conflict', cat: 'Jejaring & Kolaborasi',
      q: 'Unit bisnis meminta fitur baru harus rilis 3 hari lagi, sedangkan menurut standar keamanan aplikasi masih ada celah kritis IDOR/XSS. Bagaimana Anda menyelesaikannya?',
      star: [
        'Tunjukkan bukti dampak risiko keamanan secara konkret dalam bahasa non-teknis kepada unit bisnis.',
        'Tawarkan prioritas perbaikan cepat (hotfix fokus celah kritis) dalam 1–2 hari atau fitur diaktifkan bertahap tanpa menunda seluruh program.',
        'Dokumentasikan persetujuan risiko jika pimpinan meminta penyesuaian jadwal.'
      ],
      rubric: ['Tidak mengorbankan keamanan produksi demi deadline semu', 'Mampu menerjemahkan risiko teknis jadi bahasa bisnis/publik']
    },
    {
      id: 'w-legacy', cat: 'Arsitektur & SPBE',
      q: 'Kementerian memiliki banyak aplikasi silo dari direktorat berbeda yang datanya saling tidak cocok. Jika Anda ditunjuk mengintegrasikannya, dari mana Anda mulai?',
      star: [
        'Mulai dari pemetaan proses bisnis & kamus data otoritatif (Perpres 39/2019 Satu Data & Perpres 95/2018 SPBE).',
        'Tetapkan Walidata/sumber otoritatif tunggal untuk data master, lalu bangun interoperabilitas API melalui Sistem Penghubung Layanan (API Gateway).',
        'Lakukan migrasi bertahap dengan shadow testing / CDC tanpa mematikan layanan lama mendadak.'
      ],
      rubric: ['Tidak langsung menyarankan tulis ulang semua kode dari nol tanpa tata kelola', 'Memahami prinsip Satu Data & keterpaduan Perpres 82/2023']
    },
    {
      id: 'w-rag-ai', cat: 'Inovasi AI Pemerintahan',
      q: 'Pimpinan ingin segera memasang chatbot AI publik memakai LLM agar menjawab cepat aturan kementerian. Risiko apa yang harus Anda ingatkan dan bagaimana mengatasinya?',
      star: [
        'Risiko: halusinasi pasal hukum, bias jawaban, dan kebocoran data sensitif bila prompt memakai dokumen internal.',
        'Solusi teknis: terapkan arsitektur RAG berbasis regulasi resmi terkurasi + sitasi sumber pasal + filter DLP/PII + disclaimer resmi manusia-in-the-loop.'
      ],
      rubric: ['Menunjukkan sikap Adaptif terhadap AI tetapi tetap terukur & patuh UU PDP', 'Mengerti konsep RAG vs LLM mentah']
    },
    {
      id: 'w-radikalisme', cat: 'Wawasan Kebangsaan & Moderasi',
      q: 'Di grup internal tim TI kantor, seorang rekan mengirim pesan provokatif yang mempertanyakan ideologi Pancasila dan memboikot kerja sama dengan unit lain. Tindakan Anda?',
      star: [
        'Tidak ikut menyebarkan; merespons secara tenang berbasis fakta dengan mengajak menjaga persatuan serta fokus profesionalisme pelayanan publik.',
        'Ajak dialog pribadi terlebih dulu; jika terus berlanjut atau mengarah ekstrem, dokumentasikan dan laporkan ke atasan/pejabat pembina kepegawaian.'
      ],
      rubric: ['Konsisten memegang nilai kesetiaan pada NKRI & Pancasila', 'Menyelesaikan dengan dialog santun dan prosedur pembinaan ASN']
    }
  ];

  const PRAKTIK_CASES = [
    {
      title: 'Studi Kasus 1 — Desain Basis Data Anti-Duplikasi Pendaftar / Penerima Bantuan',
      prompt: 'Rancang skema minimal & mekanisme backend agar pengajuan paralel dari ponsel tidak membuat dua baris kembar di PostgreSQL.',
      points: [
        'Gunakan `UNIQUE CONSTRAINT` komposit pada `(nik_hash_atau_id_pemohon, periode_id)` di level basis data sebagai jaring pengaman final.',
        'Terapkan `Idempotency-Key` pada header POST API yang disimpan pada tabel transaksi atomik (`INSERT ... ON CONFLICT DO NOTHING`).',
        'Simpan waktu & metadata `created_at` berzona waktu (`TIMESTAMPTZ`) + audit trail status.',
        'Lindungi NIK/data sensitif memakai enkripsi kolom/hashing aman serta pembatasan privilege user aplikasi.'
      ]
    },
    {
      title: 'Studi Kasus 2 — Optimasi Query Lambat & Masalah N+1 Saat Jam Sibuk',
      prompt: 'Halaman dasbor laporan instansi memuat 8 detik dengan CPU database 95% saat 300 user membuka bersamaan.',
      points: [
        'Periksa rencana eksekusi lewat `EXPLAIN (ANALYZE, BUFFERS)` dan cek slow query log.',
        'Hilangkan kueri N+1 dalam loop kode aplikasi memakai `JOIN` atau batch query `WHERE id = ANY(...)`.',
        'Buat composite B-Tree index dengan kolom filter kesetaraan (`=`) di depan kolom rentang/urutan (`>=`, `ORDER BY`).',
        'Terapkan caching agregasi (Redis dengan TTL wajar) atau Materialized View untuk laporan berat yang tidak perlu real-time tiap detik.'
      ]
    },
    {
      title: 'Studi Kasus 3 — Respons Insiden Kebocoran Data & Ransomware',
      prompt: 'Terdeteksi anomali enkripsi file di 2 peladen file kantor dan dugaan eksfiltrasi data warga.',
      points: [
        'Isolasi segmen jaringan / host terdampak (jangan langsung matikan RAM agar bukti forensik tetap ada).',
        'Aktifkan tim CSIRT instansi & cabut seluruh sesi token / kredensial terkait.',
        'Siapkan pemberitahuan tertulis sesuai Pasal 46 UU PDP dalam maksimal **3 × 24 jam**.',
        'Pulihkan layanan dari salinan cadangan **immutable / air-gapped (3-2-1-1-0)** yang sudah teruji bersih malware.'
      ]
    },
    {
      title: 'Studi Kasus 4 — Arsitektur Tahan Lonjakan Pendaftaran Nasional (HA)',
      prompt: 'Kementerian membuka pendaftaran daring serentak dengan lonjakan trafik 20× lipat di hari terakhir.',
      points: [
        'Pisahkan aset statis ke CDN + pasang API Gateway dengan rate limiting/queue room agar backend tidak kolaps.',
        'Operasikan container stateless di atas orkestrator dengan Horizontal Pod Autoscaler + `ReadinessProbe`.',
        'Pindahkan unggah/konversi dokumen berat ke Message Broker (RabbitMQ/Kafka) + Worker asinkron.',
        'Terapkan Connection Pooling DB (mis. PgBouncer) dan Read Replica untuk trafik pembacaan status.'
      ]
    }
  ];

  let ncState = { tab: 'wawancara', wIdx: 0, wSec: 120, wTimer: null, wShowStar: false };
  let pauli = null;

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
    const tabs = [
      ['wawancara', '🎙️ Wawancara (STAR)'],
      ['pauli', '⚡ Tes Koran Kraepelin'],
      ['praktik', '💻 Praktik Kerja Prakom']
    ].map(([id, lbl]) => `<button type="button" class="rkg-pill ${tab === id ? 'on twk' : ''}" onclick="KemenSuite.ncTab('${id}')">${lbl}</button>`).join('');

    let body = '';
    if (tab === 'wawancara') {
      const c = INTERVIEW_CASES[ncState.wIdx] || INTERVIEW_CASES[0];
      const notes = b.store.get(NOTE_KEY, {});
      const nav = INTERVIEW_CASES.map((it, idx) =>
        `<button type="button" class="km-qdot${idx === ncState.wIdx ? ' on' : ''}${notes[it.id] ? ' has' : ''}" onclick="KemenSuite.ncPickW(${idx})" title="${esc(it.cat)}">${idx + 1}</button>`
      ).join('');
      body = `
        <div class="km-nav-dots">${nav}</div>
        <div class="km-card mt-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="badge badge-primary badge-sm">${esc(c.cat)}</span>
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
              <div class="pt-1 font-extrabold text-amber-900">Yang Dinilai Asesor Kementerian:</div>
              <ul class="list-disc space-y-1 pl-4 text-slate-800">${c.rubric.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
            </div>` : ''}
          <label class="mt-3 block">
            <span class="text-xs font-bold text-slate-600">Draf catatan jawaban pribadi Anda (otomatis tersimpan):</span>
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
            <p class="mt-1 text-xs leading-relaxed text-slate-600">Jumlahkan 2 angka berpasangan lalu masukkan <b>digit terakhir (satuan)</b> secepat mungkin (contoh: <code>7 + 8 = 15 → tekan 5</code>). Melatih ritme fokus & ketelitian untuk Psikotes SKB Kementerian.</p>
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
    } else {
      body = `<div class="mt-3 space-y-3">${PRAKTIK_CASES.map(c => `
        <details class="rk-item" open>
          <summary><span class="rk-num">★</span><span class="rk-sum-t">${esc(c.title)}</span><span class="rk-chev" aria-hidden="true">▾</span></summary>
          <div class="rk-in">
            <p class="mt-2 text-sm font-semibold text-slate-700">${esc(c.prompt)}</p>
            <div class="mt-2 rounded-xl bg-sky-50 p-3 text-xs leading-relaxed text-slate-800">
              <b>Checklist Jawaban Teknis Sempurna:</b>
              <ul class="mt-1 list-disc space-y-1 pl-4">${c.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
            </div>
          </div>
        </details>`).join('')}</div>`;
    }

    d.innerHTML = `
      <div class="modal-box max-w-2xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Lab SKB Non-CAT Prakom Kementerian</h3>
          <p class="text-xs text-base-content/70">Latihan Wawancara User/Integritas, Kraepelin/Pauli, dan Praktik Kerja Teknis.</p></div>
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
     2. KALKULATOR NILAI AKHIR CPNS KEMENTERIAN (40% SKD + 60% SKB)
     ======================================================================== */
  function estimateDefaultScores() {
    const hist = B().getHistory ? B().getHistory() : [];
    const skdRecs = hist.filter(h => h.group === 'SKD_FULL').sort((a, b) => b.score - a.score);
    const skbRecs = hist.filter(h => h.group === 'SKB_PRAKOM').sort((a, b) => b.score - a.score);
    const bestSkd = skdRecs[0]?.score || 395;
    const bestSkb = skbRecs[0]?.max ? Math.round(skbRecs[0].score / skbRecs[0].max * 100) : 78;
    return { bestSkd, bestSkb };
  }

  let calcState = null;
  function renderCalc(prefSkd) {
    const def = estimateDefaultScores();
    if (!calcState) calcState = { skd: prefSkd || def.bestSkd, skbCat: def.bestSkb, nonCat: 80, nonCatPct: 30, rivalSkd: 425 };
    else if (Number.isFinite(prefSkd)) calcState.skd = prefSkd;
    const d = dlg('dlg-kemen');
    const c = calcState;
    const skdPct = Math.min(100, Math.max(0, c.skd / 550 * 100));
    const skdWeighted = skdPct * 0.4;
    const catWeight = Math.max(0, Math.min(100, 100 - c.nonCatPct)) / 100;
    const nonCatWeight = 1 - catWeight;
    const skbCombined = c.skbCat * catWeight + c.nonCat * nonCatWeight;
    const skbWeighted = skbCombined * 0.6;
    const totalFinal = skdWeighted + skbWeighted;

    const rivalSkdWeighted = (Math.min(550, Math.max(0, c.rivalSkd)) / 550 * 100) * 0.4;
    const rivalSkbAt75 = rivalSkdWeighted + 75 * 0.6;
    const needSkbToBeat75 = (rivalSkbAt75 - skdWeighted) / 0.6;
    const diffSkd = c.rivalSkd - c.skd;
    const needExtraSkbPts = diffSkd > 0 ? (diffSkd / 550 * 100 * 0.4) / 0.6 : 0;

    const presets = [[0, '100% CAT'], [25, '75% CAT + 25% Non-CAT'], [30, '70% CAT + 30% Non-CAT'], [40, '60% CAT + 40% Non-CAT']]
      .map(([p, l]) => `<button type="button" class="pl-chip ${c.nonCatPct === p ? 'on' : ''}" onclick="KemenSuite.calcPreset(${p})">${l}</button>`).join('');

    const zone = c.skd >= 420 ? 'Zona Aman Kementerian Ketat' : c.skd >= 360 ? 'Zona Persaingan Tengah (Wajib Ngebut di SKB)' : 'Perlu Dongkrak SKD +60 Poin';

    d.innerHTML = `
      <div class="modal-box max-w-2xl">
        <div class="flex items-start justify-between gap-3">
          <div><h3 class="text-lg font-extrabold text-neutral">Kalkulator Nilai Akhir CPNS (40% SKD + 60% SKB)</h3>
          <p class="text-xs text-base-content/70">Simulasikan strategi mengalahkan pesaing di kementerian lewat bobot 60% SKB.</p></div>
          <button type="button" class="btn btn-ghost btn-sm btn-circle" onclick="KemenSuite.closeAll()" aria-label="Tutup">✕</button>
        </div>

        <div class="mt-3 rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 p-4 text-white">
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
            <span class="text-xs font-bold text-slate-600">Skor SKD Anda (0–550)</span>
            <input type="number" min="0" max="550" value="${c.skd}" class="input input-bordered input-sm mt-1 w-full font-bold" oninput="KemenSuite.calcSet('skd', this.value)">
          </label>
          <label class="block rounded-xl border border-base-300 p-3">
            <span class="text-xs font-bold text-slate-600">Skor SKB CAT Prakom (0–100)</span>
            <input type="number" min="0" max="100" value="${c.skbCat}" class="input input-bordered input-sm mt-1 w-full font-bold" oninput="KemenSuite.calcSet('skbCat', this.value)">
          </label>
          <label class="block rounded-xl border border-base-300 p-3">
            <span class="text-xs font-bold text-slate-600">Skor SKB Non-CAT / Wawancara (0–100)</span>
            <input type="number" min="0" max="100" value="${c.nonCat}" class="input input-bordered input-sm mt-1 w-full font-bold" ${c.nonCatPct === 0 ? 'disabled' : ''} oninput="KemenSuite.calcSet('nonCat', this.value)">
          </label>
          <label class="block rounded-xl border border-base-300 p-3">
            <span class="text-xs font-bold text-slate-600">Estimasi Skor SKD Pesaing Terdekat (0–550)</span>
            <input type="number" min="0" max="550" value="${c.rivalSkd}" class="input input-bordered input-sm mt-1 w-full font-bold" oninput="KemenSuite.calcSet('rivalSkd', this.value)">
          </label>
        </div>

        <div class="mt-3">
          <div class="text-xs font-bold text-slate-600 mb-1.5">Porsi Bobot SKB Tambahan (Non-CAT) Kementerian:</div>
          <div class="pl-chips">${presets}</div>
        </div>

        <div class="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-slate-800">
          <b>Analisis Posisi vs Pesaing (SKD Pesaing = ${c.rivalSkd}):</b>
          <ul class="mt-1 list-disc space-y-1 pl-4">
            <li>Setiap <b>10 poin keunggulan SKD</b> hanya bernilai <b>0,73 poin akhir</b> (setara hanya <b>1,21 poin</b> di nilai SKB!).</li>
            ${diffSkd > 0
              ? `<li>Saat ini Anda tertinggal <b>${diffSkd} poin SKD</b>, artinya Anda hanya butuh unggul <b>+${needExtraSkbPts.toFixed(1)} poin di SKB</b> untuk membalikkan peringkat!</li>`
              : `<li>Anda sudah unggul <b>+${Math.abs(diffSkd)} poin SKD</b> atas pesaing tersebut.</li>`}
            <li>Jika pesaing mendapat SKB <b>75,0</b>, nilai SKB minimal Anda agar menyalipnya adalah <b>${Math.max(0, Math.min(100, needSkbToBeat75)).toFixed(1)}</b> ${needSkbToBeat75 > 100 ? '(sulit terkejar jika pesaing di atas 75 — naikkan target SKD!)' : ''}.</li>
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
            return `<div class="km-item"><div class="flex items-start justify-between gap-2"><span class="badge badge-xs ${due ? 'badge-error text-white' : 'badge-ghost'}">${due ? 'Perlu diulang sekarang' : 'Terjadwal ulang'}</span><button type="button" class="btn btn-ghost btn-xs text-slate-400" onclick="KemenSuite.vaultDelWrong('${esc(w.id)}')">Hapus</button></div>
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
        <div class="mt-3 max-h-[45vh] space-y-2 overflow-y-auto pr-1">${listHtml}</div>`;
    } else {
      const listHtml = bms.length
        ? bms.map(bm => {
            const q = idx.get(bm.id);
            return `<div class="km-item"><div class="flex items-start justify-between gap-2"><span class="badge badge-xs badge-warning">${esc(q.category)}</span><button type="button" class="btn btn-ghost btn-xs text-error" onclick="KemenSuite.vaultDelBm('${esc(bm.id)}')">Hapus</button></div>
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
        <div class="mt-3 max-h-[45vh] space-y-2 overflow-y-auto pr-1">${listHtml}</div>`;
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

  function pauliNextPair() {
    pauli.a = Math.floor(Math.random() * 9) + 1;
    pauli.b = Math.floor(Math.random() * 9) + 1;
  }

  window.KemenSuite = {
    openNonCat(tab = 'wawancara') { ncStopTimers(); ncState.tab = tab; renderNonCat(); },
    ncTab(tab) { ncStopTimers(); ncState.tab = tab; renderNonCat(); },
    ncPickW(i) { ncStopTimers(); ncState.wIdx = i; ncState.wSec = 120; ncState.wShowStar = false; renderNonCat(); },
    ncToggleStar() { ncState.wShowStar = !ncState.wShowStar; renderNonCat(); },
    ncSaveNote: saveNote,
    ncToggleTimer() {
      if (ncState.wTimer) { clearInterval(ncState.wTimer); ncState.wTimer = null; renderNonCat(); return; }
      ncState.wSec = 120;
      ncState.wTimer = setInterval(() => {
        ncState.wSec = Math.max(0, ncState.wSec - 1);
        const el = document.getElementById('km-w-timer');
        if (el) el.textContent = `⏱️ ${Math.floor(ncState.wSec / 60)}:${String(ncState.wSec % 60).padStart(2, '0')}`;
        if (ncState.wSec <= 0) { clearInterval(ncState.wTimer); ncState.wTimer = null; B().toast?.('Waktu 2 menit selesai!'); renderNonCat(); }
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

    openCalc(skdScore) { renderCalc(skdScore); },
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

    closeAll() {
      ncStopTimers();
      const d = document.getElementById('dlg-kemen');
      if (d && d.open) d.close();
      B().rerender();
    }
  };
})();
