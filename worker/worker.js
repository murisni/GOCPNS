/* Backend akun untuk GitHub Pages — Cloudflare Worker + KV (gratis).
   1 akun = 1 entri KV "u:<nama>" berisi PIN ter-hash (PBKDF2) + progres. Tanpa database. */
const KEYS = ['cpns_lesson_v1', 'cpns_seen_qids_v2', 'cpns_results_v3'];
const MAX_BYTES = 400000, MAX_FAIL = 5, LOCK_MS = 15 * 60 * 1000;
const enc = new TextEncoder();
const hex = b => Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
const unhex = h => Uint8Array.from(h.match(/../g).map(x => parseInt(x, 16)));
const rand = n => hex(crypto.getRandomValues(new Uint8Array(n)));
const sha = async s => hex(await crypto.subtle.digest('SHA-256', enc.encode(s)));
async function hashPin(pin, saltHex) {
  const salt = saltHex ? unhex(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256);
  return { salt: hex(salt), hash: hex(bits) };
}
const same = (a, b) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; };
const clean = d => { const o = {}; if (d && typeof d === 'object') KEYS.forEach(k => { if (d[k] !== undefined) o[k] = d[k]; }); return o; };

export default {
  async fetch(req, env) {
    const cors = {
      'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400', 'Cache-Control': 'no-store'
    };
    const out = (code, obj) => new Response(JSON.stringify(obj), { status: code, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method !== 'POST') return out(405, { error: 'Metode tidak didukung.' });

    let b; try { b = await req.json(); } catch (e) { b = {}; }
    const act = b.action, u = String(b.username || '').trim().toLowerCase(), key = 'u:' + u;
    if (!/^[a-z0-9_]{3,20}$/.test(u)) return out(400, { error: 'Nama panggilan 3–20 karakter: huruf, angka, atau _.' });
    const load = async () => JSON.parse((await env.AKUN.get(key)) || 'null');
    const save = a => env.AKUN.put(key, JSON.stringify(a));

    if (act === 'register') {
      const pin = String(b.pin || '');
      if (!/^\d{6}$/.test(pin)) return out(400, { error: 'PIN harus 6 digit angka.' });
      if (await env.AKUN.get(key)) return out(409, { error: 'Nama panggilan sudah dipakai. Coba nama lain.' });
      const token = rand(24), h = await hashPin(pin);
      await save({ salt: h.salt, pin: h.hash, tokens: [await sha(token)], fail: 0, lock: 0, created: Date.now(), data: clean(b.data) });
      return out(200, { token });
    }

    const acc = await load();

    if (act === 'login') {
      const pin = String(b.pin || '');
      if (!acc) return out(401, { error: 'Nama panggilan atau PIN salah.' });
      if ((acc.lock || 0) > Date.now()) return out(429, { error: 'Terlalu banyak percobaan. Coba lagi beberapa menit lagi.' });
      const ok = /^\d{6}$/.test(pin) && same((await hashPin(pin, acc.salt)).hash, acc.pin);
      if (!ok) {
        acc.fail = (acc.fail || 0) + 1;
        if (acc.fail >= MAX_FAIL) { acc.fail = 0; acc.lock = Date.now() + LOCK_MS; }
        await save(acc); return out(401, { error: 'Nama panggilan atau PIN salah.' });
      }
      const token = rand(24);
      acc.tokens = (acc.tokens || []).concat(await sha(token)).slice(-5);   // maks 5 perangkat
      acc.fail = 0; acc.lock = 0; await save(acc);
      return out(200, { token, data: acc.data || {} });
    }

    if (act === 'push') {
      const t = await sha(String(b.token || ''));
      if (!acc || !(acc.tokens || []).some(x => same(x, t))) return out(401, { error: 'Sesi berakhir. Silakan masuk lagi.' });
      const data = clean(b.data);
      if (JSON.stringify(data).length > MAX_BYTES) return out(413, { error: 'Data terlalu besar.' });
      acc.data = data; acc.updated = Date.now(); await save(acc);
      return out(200, { ok: true });
    }
    return out(400, { error: 'Aksi tidak dikenal.' });
  }
};
