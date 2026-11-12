# Memasang server akun (Cloudflare Worker, gratis)

1. Daftar/masuk di https://dash.cloudflare.com (gratis, tanpa kartu kredit).
2. **Buat tempat penyimpanan**: Storage & Databases → **KV** → *Create* → nama `cpns-akun-kv`.
3. **Buat Worker**: Workers & Pages → *Create* → *Create Worker* → nama `cpns-akun` → *Deploy* →
   *Edit code* → hapus isinya, tempel seluruh isi `worker/worker.js` → *Deploy*.
4. **Sambungkan KV**: Worker `cpns-akun` → Settings → Bindings → *Add* → KV namespace →
   Variable name **`AKUN`** (huruf besar persis) → pilih `cpns-akun-kv` → Save.
5. **(Disarankan) Batasi asal**: Settings → Variables → *Add* → `ALLOWED_ORIGIN` =
   `https://USERNAME.github.io` (tanpa garis miring dan tanpa nama repo) → Deploy.
6. Salin alamat Worker (mis. `https://cpns-akun.nama-anda.workers.dev`) lalu isi ke
   `js/auth.js` pada baris `const API = '...'`. Commit & push ke GitHub Pages.
7. Tes: buka alamat Worker di browser, harus tampil `{"error":"Metode tidak didukung."}`.

Folder `api/` dan `data/` (versi PHP) tidak dipakai di GitHub Pages; boleh dihapus.
