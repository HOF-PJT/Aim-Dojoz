// ============================================================
//  KONFIGURASI AIMDOJO — edit 3 nilai di bawah, lalu simpan.
//  Aman untuk publik: Publishable/anon key memang boleh terlihat
//  (data dilindungi Row Level Security dari file SQL).
//  JANGAN PERNAH menaruh service_role / secret key di sini.
// ============================================================
window.AIMDOJO_CONFIG = {
  // Supabase > Project Settings > API > Project URL
  supabaseUrl: "PASTE_SUPABASE_PROJECT_URL_HERE",   // contoh: https://abcdefgh.supabase.co

  // Supabase > Project Settings > API > Publishable key (atau anon public key)
  supabaseAnonKey: "PASTE_SUPABASE_PUBLISHABLE_KEY_HERE",

  // Email kontak yang tampil di Privacy Policy & Terms
  contactEmail: "PASTE_YOUR_EMAIL_HERE",

  // Ubah ke true HANYA setelah situs disetujui jaringan iklan
  // dan kode iklannya sudah dipasang di index.html (#adSlot)
  adsEnabled: false
};
