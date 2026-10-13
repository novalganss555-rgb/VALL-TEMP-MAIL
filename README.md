# VALL TEMP MAIL

Website email sementara berbasis Next.js + Mail.tm. Gratis, tanpa API key.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Deploy Vercel

1. Buat repository GitHub baru dan unggah seluruh isi folder proyek (bukan ZIP).
2. Masuk https://vercel.com/new dan pilih **Import Git Repository**.
3. Pilih repository, pastikan framework **Next.js** dan root directory `./`.
4. Klik **Deploy**. Tidak perlu environment variable.
5. Buka URL Vercel yang diberikan dan klik **Buat Email Gratis**.

## Penting

- API Mail.tm diakses **langsung dari browser**, bukan melalui proxy backend, sesuai kebijakan provider yang melarang layanan proxy/mirror. Endpoint `/api/status` adalah backend internal aplikasi, bukan proxy email.
- Provider membatasi 8 request/detik per IP; jangan memodifikasi interval polling menjadi terlalu cepat.
- Aplikasi menyimpan kredensial sesi di localStorage perangkat pengguna. Hindari komputer bersama dan jangan gunakan untuk email sensitif.
- Email HTML sengaja tidak dirender agar konten tidak tepercaya tidak mengeksekusi script atau melacak pengguna. Email teks dan kode verifikasi dapat dibaca.
- Tidak ada jaminan semua situs menerima domain email sementara.
- Aplikasi tidak mengirim email dan tidak mendukung domain email sendiri.
- Jangan jual ulang akses API Mail.tm; sertakan atribusi Mail.tm.
- Jika browser memblokir koneksi lintas asal (CORS), fitur email tidak akan berjalan pada browser tersebut; gunakan provider dengan izin CORS yang sesuai, bukan proxy yang melanggar ketentuan.

## Perbaikan v2
- Mencoba Mail.tm lalu Mail.gw jika daftar domain tidak dapat diambil.
- Pesan error jaringan/CORS lebih jelas.
- Provider sesi disimpan agar inbox memakai API yang sesuai.
- Browser tetap terhubung langsung ke provider; tidak ada proxy email.
- Tidak menjamin akses jika kedua provider memblokir browser/CORS.
