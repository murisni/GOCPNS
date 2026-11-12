<?php
/* Akun sederhana tanpa database: 1 akun = 1 file JSON di folder /data
   (data/u_<username>.json). PIN disimpan ter-hash (password_hash), bukan teks asli. */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const DIR  = __DIR__ . '/../data/';
const KEYS = ['cpns_lesson_v1', 'cpns_seen_qids_v2', 'cpns_results_v3'];
const MAX_BYTES = 400000;   // batas ukuran data progres per akun
const MAX_FAIL  = 5;        // salah PIN berturut-turut sebelum dikunci
const LOCK_SEC  = 900;      // lama dikunci (15 menit)

function out($code, $arr) { http_response_code($code); echo json_encode($arr, JSON_UNESCAPED_UNICODE); exit; }
function load($f) { return is_file($f) ? json_decode(file_get_contents($f), true) : null; }
function save($f, $d) { file_put_contents($f, json_encode($d, JSON_UNESCAPED_UNICODE), LOCK_EX); }
function clean($d) { $o = []; if (is_array($d)) foreach (KEYS as $k) if (isset($d[$k])) $o[$k] = $d[$k]; return $o; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['error' => 'Metode tidak didukung.']);
$in  = json_decode(file_get_contents('php://input'), true) ?: [];
$act = $in['action'] ?? '';
$u   = strtolower(trim($in['username'] ?? ''));
if (!preg_match('/^[a-z0-9_]{3,20}$/', $u)) out(400, ['error' => 'Nama panggilan 3–20 karakter: huruf, angka, atau _.']);
if (!is_dir(DIR)) @mkdir(DIR, 0750, true);
$f = DIR . 'u_' . $u . '.json';

if ($act === 'register') {
    $pin = (string)($in['pin'] ?? '');
    if (!preg_match('/^\d{6}$/', $pin)) out(400, ['error' => 'PIN harus 6 digit angka.']);
    $h = @fopen($f, 'x');                       // atomik: gagal bila nama sudah dipakai
    if (!$h) out(409, ['error' => 'Nama panggilan sudah dipakai. Coba nama lain.']);
    fclose($h);
    $token = bin2hex(random_bytes(24));
    $data = clean($in['data'] ?? []);
    save($f, ['pin' => password_hash($pin, PASSWORD_DEFAULT), 'tokens' => [hash('sha256', $token)],
              'fail' => 0, 'lock' => 0, 'created' => time(), 'data' => $data]);
    out(200, ['token' => $token]);
}

$acc = load($f);

if ($act === 'login') {
    $pin = (string)($in['pin'] ?? '');
    if (!$acc) out(401, ['error' => 'Nama panggilan atau PIN salah.']);
    if (($acc['lock'] ?? 0) > time()) out(429, ['error' => 'Terlalu banyak percobaan. Coba lagi beberapa menit lagi.']);
    if (!preg_match('/^\d{6}$/', $pin) || !password_verify($pin, $acc['pin'])) {
        $acc['fail'] = ($acc['fail'] ?? 0) + 1;
        if ($acc['fail'] >= MAX_FAIL) { $acc['fail'] = 0; $acc['lock'] = time() + LOCK_SEC; }
        save($f, $acc);
        out(401, ['error' => 'Nama panggilan atau PIN salah.']);
    }
    $token = bin2hex(random_bytes(24));
    $acc['tokens'] = array_slice(array_merge($acc['tokens'] ?? [], [hash('sha256', $token)]), -5); // maks 5 perangkat
    $acc['fail'] = 0; $acc['lock'] = 0;
    save($f, $acc);
    out(200, ['token' => $token, 'data' => $acc['data'] ?? new stdClass()]);
}

if ($act === 'push') {
    $t = hash('sha256', (string)($in['token'] ?? ''));
    $ok = false;
    if ($acc) foreach ($acc['tokens'] ?? [] as $x) if (hash_equals($x, $t)) $ok = true;
    if (!$ok) out(401, ['error' => 'Sesi berakhir. Silakan masuk lagi.']);
    $data = clean($in['data'] ?? []);
    if (strlen(json_encode($data)) > MAX_BYTES) out(413, ['error' => 'Data terlalu besar.']);
    $acc['data'] = $data; $acc['updated'] = time();
    save($f, $acc);
    out(200, ['ok' => true]);
}

out(400, ['error' => 'Aksi tidak dikenal.']);
