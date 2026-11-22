/* Validasi bank setelah materi, perbaikan soal lama, dan seluruh paket bawaan dimuat. */
(function () {
  const db = window.MASTER_DB;
  const fix = id => Object.values(db).flat().find(q => q.id === id);

  // Kedua pilihan hanya berbeda tanda titik. Jadikan opsi E benar-benar salah sesuai soal imbuhan.
  const ejaan = fix('SKD-TWK-X0222');
  if (ejaan) ejaan.options[4] = 'E. Berkas itu dipindah kan ke kantor pusat.';

  // Soal bubble sort yang sama juga muncul dengan pembuka yang berbeda.
  const bubble = fix('SKB-PRAKOM-N0444');
  const first = fix('SKB-PRAKOM-N0070');
  if (bubble && first) {
    bubble.q = first.q;
    bubble.options = first.options.slice();
    bubble.ans = first.ans;
    bubble.scores = first.scores.slice();
  }

  // Jawaban ini adalah orang yang sama, ditulis dengan ejaan nama berbeda.
  const indische = fix('SKD-TWK-X0065');
  const firstIndische = fix('SKD-TWK-0068');
  if (indische && firstIndische) indische.options[indische.ans] = firstIndische.options[firstIndische.ans];

  window.__dedupeRemoved = window.finalizeCPNSBank();
})();
