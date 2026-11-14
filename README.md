# AimDojo — Aim Trainer (siap deploy)

Web statis (HTML) + Supabase untuk akun & simpan progres. Hosting gratis di Netlify/Vercel/Cloudflare Pages.

## Isi folder
| File | Fungsi |
|---|---|
| `index.html` | Halaman **login / daftar / Main sebagai Tamu** |
| `train.html` | Arena latihan (fullscreen, Mulai/Reset/Akhiri, kalibrasi sens) |
| `style.css` | Desain bersama |
| `old/` | Versi lama (arsip, tidak dipakai) |
| `config.js` | **Satu-satunya file yang kamu edit** (URL & key Supabase, email kontak, saklar iklan) |
| `aimdojo-supabase.sql` | Setup database (jalankan sekali) |
| `lang.js` | 7 bahasa: Indonesia, English, 中文, Español, 日本語, 한국어, Русский. Tambah bahasa: tambah kode di `LANGS` + 1 elemen di tiap baris `D` |
| `panduan.html` | Artikel panduan (konten orisinal, penting untuk persetujuan iklan) |
| `privacy.html`, `terms.html` | Halaman legal (email diambil otomatis dari `config.js`) |
| `robots.txt`, `_headers` | SEO dasar & header keamanan (Netlify/Cloudflare) |

## Langkah setup (±20 menit)
1. **Supabase** → buat project gratis di supabase.com.
2. **SQL Editor** → New query → tempel seluruh isi `aimdojo-supabase.sql` → Run.
3. **Project Settings → API** → salin *Project URL* dan *Publishable key* (atau *anon public*). **Jangan** pakai `service_role`/secret key.
4. Buka `config.js`, ganti 3 nilai `PASTE_...` (URL, key, email kontak). Simpan.
5. **Deploy**: di Netlify pilih *Add new site → Deploy manually*, seret **isi folder ini**. Kamu dapat URL `https://nama.netlify.app`.
6. **Supabase → Authentication → URL Configuration**: isi *Site URL* dengan URL situsmu dan tambahkan ke *Redirect URLs* (tanpa ini link verifikasi/reset password salah arah).
7. **Email (penting sebelum promosi):** email bawaan Supabase dibatasi sangat ketat dan hanya cocok untuk uji coba. Untuk publik, atur *Authentication → SMTP Settings* dengan layanan SMTP (misalnya Brevo/Resend, ada paket gratis).

## Checklist tes (pakai akun uji)
- [ ] Buat akun → verifikasi email → login
- [ ] Jalankan 1 drill → sesi muncul di *Progress & Coach*
- [ ] Buka dari browser/HP lain → login → progres ter-restore
- [ ] Forgot password → klik link → simpan password baru
- [ ] Privacy/Terms menampilkan email kontakmu
- [ ] Coba di HP (layout & tap)

## Catatan keamanan
- Publishable/anon key memang tampil di frontend; datamu dilindungi Row Level Security dari file SQL (tiap pemain hanya akses barisnya sendiri, ukuran data dibatasi ±1 MB).
- Project Supabase gratis bisa di-pause bila lama tidak aktif; cek dashboard secara berkala.

## Monetisasi (urutan yang disarankan)
1. Kumpulkan pengguna dulu (TikTok/YouTube Shorts/komunitas gaming).
2. Pasang **donasi** (Saweria/Trakteer) dan **link affiliate** (mouse, mousepad) — bisa langsung.
3. Tambah artikel di `panduan.html`, lalu daftar **AdSense** dengan domain sendiri. Setelah disetujui: tempel kode iklan ke `#adSlot` di `index.html`, set `adsEnabled: true` di `config.js`, dan perbarui Privacy Policy.
4. Hasil dan persetujuan iklan tidak dijamin.

## Merek
Nama "AimDojo" dipilih netral (tanpa merek game). **Cek ketersediaan nama/domain** sebelum branding serius. Dropdown "Game" di kalibrasi hanya menyebut nama game untuk konstanta rotasi 360°; hapus bila ingin sepenuhnya netral.

## Menambah bahasa
Buka `i18n.js`: tambahkan kode bahasa di `LANGS`, lalu tambah satu kolom terjemahan di setiap baris tabel `R`. Teks yang belum diterjemahkan otomatis tampil dalam bahasa aslinya.
