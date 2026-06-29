# 🏫 Campus Maintenance System
> **Campus Service Request and Maintenance System**
> 
> *Sistem Pengaduan dan Pemeliharaan Sarana Prasarana Kampus berbasis Cloudflare Workers, D1 Database, dan React.*

---

## 📊 Status Proyek & Deployment

![Vite Version](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&style=flat-square)
![React Version](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&style=flat-square)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-Active-F38020?logo=cloudflare&style=flat-square)
![Cloudflare D1 Database](https://img.shields.io/badge/Cloudflare_D1-Connected-F38020?logo=cloudflare&style=flat-square)
![Vitest Tests](https://img.shields.io/badge/Tests-20_Passed-30A64A?logo=vitest&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

*   **Tautan Aplikasi (Cloudflare Workers)**: 👉 **[Campus Service Request and Maintenance System](https://campus-maintenance.lasutlucia.workers.dev)**
*   **Repositori GitHub**: 👉 **[SWE-campus-maintenance](https://github.com/lasutlucia/SWE-campus-maintenance)**
*   **Commit Terakhir**: `Lihat di repositori GitHub (Cabang main)`

---

## 🚀 Fitur Utama & Segregasi Peran

Aplikasi ini membagi alur kerja secara kolaboratif menjadi 4 peran aktor utama dengan tingkat hak akses yang disesuaikan secara ketat:

| Peran Aktor | Modul Fitur Utama | Batas Akses & Keamanan |
| :--- | :--- | :--- |
| **Mahasiswa & Dosen (Pelapor)** | Pembuatan Laporan Kerusakan, Detail Alur Laporan Sederhana, Percakapan Komentar, Konfirmasi Selesai | Dapat membuat aduan secara bebas dengan validasi deskripsi > 20 karakter & input Gedung/Ruang terpisah. |
| **Administrator** | Peninjauan Aduan (`UNDER REVIEW`), Klasifikasi Kategori, Penugasan Staf Teknisi (`ASSIGNED`), Penutupan Tiket (`CLOSED`) | Berhak mengubah kategori fasilitas, menugaskan teknisi dari data D1, dan menutup laporan pasca konfirmasi. |
| **Staf Teknisi** | Penentuan Prioritas (`LOW`/`MEDIUM`/`HIGH`), Progres Pengerjaan (`IN PROGRESS`), Penyelesaian Kerja (`RESOLVED`) | Hanya dapat memproses aduan yang ditugaskan kepada dirinya. Memegang hak eksklusif penyelesaian teknis. |
| **Manajer Fasilitas (FM)** | Dashboard Statistik Executive, Grafik Bar Analisis Kategori, Pemantauan Log Diskusi Komentar | Akses bersifat **Read-Only** untuk tujuan pemantauan (monitoring) tanpa hak manipulasi data aduan. |

### 💎 Inovasi Fitur Tambahan (AI-Enhanced UX)
*   **Dark/Light Mode Switcher**: Tombol pengalih tema dinamis yang persisten (tersimpan di `localStorage` browser).
*   **Character Counter Validation Bar**: Bar indikator visual interaktif di bawah input deskripsi aduan (berwarna merah saat < 20 karakter, hijau centang saat memenuhi syarat).
*   **Pulsing Glow Search Matches**: Baris tabel aduan yang cocok dengan kata kunci pencarian (misal: "AC") akan menyala berdenyut secara visual sebagai isyarat fokus, tanpa membuka panel samping detail secara paksa.
*   **Auto-Polling Real-Time (4 Detik)**: Pengambilan data berkala di latar belakang pada tabel dan percakapan komentar untuk menjaga sinkronisasi status antar-aktor.
*   **Zona Waktu WITA**: Sinkronisasi seluruh catatan waktu (pembuatan laporan, perubahan status, komentar) ke format Waktu Indonesia Tengah (UTC+8).

---

## 📁 Struktur Direktori Repositori

```text
SWE-campus-maintenance/
├── .github/
│   └── workflows/        # Otomasi CI/CD Test & Build (GitHub Actions)
├── docs/                 # Dokumentasi rekayasa perangkat lunak lengkap
│   ├── requirements/     # Inception, Elicitation, Specification, Prioritization, Validation, Traceability, CR
│   └── design/           # Architecture, Database Schema, REST API, UI Flow, Wireframe
├── database/             # Berkas skema SQL & Seed data untuk Cloudflare D1
│   ├── schema.sql
│   └── seed.sql
├── src/                  # Kode sumber Frontend React (TypeScript & CSS)
├── worker/               # Kode sumber Backend Worker (TypeScript Serverless API Router)
├── tests/                # Uji unit otomatis (Vitest)
├── wrangler.jsonc        # Konfigurasi deployment serverless Cloudflare Workers
├── CASE.md               # Laporan pengumpulan resmi & jawaban 8 pertanyaan refleksi
└── README.md             # Dokumen panduan utama ini
```

---

## 🔑 Kredensial Akun untuk Pengujian

| Aktor Pengguna | Nama Pengguna (Username) | Kata Sandi (Password) |
| :--- | :--- | :--- |
| **Pelapor (Mahasiswa)** | `Lucia` | `lucia123` |
| **Pelapor (Dosen)** | `Dosen` | `dosen123` |
| **Staf Teknisi** | `Andi` | `andi123` |
| **Administrator** | `Administrator` | `admin123` |
| **Manajer Fasilitas (FM)** | `Manajer` | `manajer123` |

---

## 📖 Panduan Skenario Penggunaan & Uji Coba Aktor (Simulasi Alur Kerja)

Untuk menguji alur kerja perangkat lunak ini secara utuh dari awal sampai akhir, Anda dapat mengikuti skenario simulasi lintas peran berikut:

### 1. Pelapor (Mahasiswa) - Membuat Laporan Baru
1. Masuk ke aplikasi menggunakan username **`Lucia`** dan password **`lucia123`**.
2. Di panel sebelah kiri, isi formulir pelaporan:
   * **Laporan Kerusakan**: `AC Bocor di Kelas B302`
   * **Deskripsi Masalah**: `AC mengeluarkan tetesan air cukup deras sejak pagi hari, menetes ke area meja mahasiswa paling belakang.` (minimal 20 karakter)
   * **Lokasi Gedung**: `Gedung B`
   * **Lokasi Ruangan**: `Ruang 302`
3. Klik **Kirim Pengaduan**. Laporan baru akan terdaftar pada tabel di sisi kanan dengan nomor unik (contoh: `CSR-171939...`) dan berstatus **`SUBMITTED`**.

### 2. Administrator - Memeriksa & Menugaskan Teknisi
1. Klik **Keluar** di pojok kanan atas, lalu login sebagai **`Administrator`** (password: **`admin123`**).
2. Temukan aduan baru dari `Lucia` pada daftar tabel, lalu klik aduan tersebut untuk membuka panel detail di sisi kanan.
3. Klik tombol **Mulai Tinjauan (Start Review)**. Status laporan akan bertransisi ke **`UNDER REVIEW`**.
4. Pada panel tindakan, tentukan kategori fasilitas (pilih **`AC`**) dan pilih teknisi pelaksana (pilih **`Andi`**).
5. Klik **Simpan Penugasan**. Status laporan otomatis bertransisi ke **`ASSIGNED`** dan log audit tersimpan.

### 3. Staf Teknisi (Andi) - Memproses & Menyelesaikan Pekerjaan
1. Keluar dan login kembali sebagai staf teknisi **`Andi`** (password: **`andi123`**).
2. Klik aduan ditugaskan `AC Bocor di Kelas B302` yang ada pada tabel untuk membuka detail laporan.
3. Di sisi kanan, tentukan prioritas penanganan (pilih **`HIGH`**).
4. Klik tombol **Mulai Bekerja (Start Work)**. Status laporan bertransisi ke **`IN PROGRESS`**.
5. Setelah perbaikan selesai dilakukan di lapangan, klik tombol **Selesai Perbaikan (Resolve)**. Status laporan akan bertransisi ke **`RESOLVED`**.

### 4. Pelapor & Administrator - Konfirmasi & Penutupan Tiket
1. Login kembali sebagai Pelapor **`Lucia`** (password: **`lucia123`**).
2. Klik aduan tersebut yang kini berstatus **`RESOLVED`**. Pada panel detail samping, klik tombol **Konfirmasi Perbaikan Selesai** untuk memberikan feedback bahwa AC sudah berfungsi normal.
3. Login kembali sebagai **`Administrator`** (password: **`admin123`**).
4. Klik aduan tersebut, lalu klik tombol **Tutup Laporan (Close)** pada panel detail. Status laporan bertransisi secara permanen menjadi **`CLOSED`** (Selesai sepenuhnya).

### 5. Manajer Fasilitas (FM) - Pemantauan Eksekutif
1. Login sebagai **`Manajer`** (password: **`manajer123`**).
2. Manajer dapat memantau penambahan data aduan secara real-time pada 3 kartu metrik statistik utama, melihat persentase aduan berdasarkan grafik bar kategori, serta membaca log diskusi komentar di panel samping secara aman (*read-only*).

---

## 💻 Panduan Instalasi & Menjalankan Lokal

> [!IMPORTANT]
> Pastikan komputer Anda telah terinstal [Node.js](https://nodejs.org/) (versi 18+) dan NPM.

### 1. Kloning Repositori & Instal Dependensi
```bash
git clone https://github.com/lasutlucia/SWE-campus-maintenance.git
cd SWE-campus-maintenance
npm install
```

### 2. Jalankan Migrasi Database D1 Lokal
Untuk membuat database lokal simulasi di komputer Anda:
```bash
npm run db:setup
```

### 3. Jalankan Server Pengembangan (Vite + Cloudflare Plugin)
```bash
npm run dev
```
Setelah server aktif, buka **[http://localhost:5173](http://localhost:5173)** pada browser Anda.

### 4. Eksekusi Unit Test Otomatis (Vitest)
```bash
npm run test
```

---

## ☁️ Panduan Deployment ke Cloudflare Workers

Pastikan Anda sudah login ke wrangler menggunakan perintah `npx wrangler login`. Untuk melakukan deploy frontend & backend secara instan:
```bash
npm run deploy
```

---

## ✅ Checklist Setelah Deployment (Sesuai Ketentuan PDF Halaman 16)

- [x] **Aplikasi dapat dibuka melalui URL publik**: Terhubung secara aman di subdomain workers.dev.
- [x] **Form laporan dapat digunakan**: Menyimpan data pengaduan ke tabel database D1 Cloudflare.
- [x] **API dapat menerima data**: Router endpoints Workers memproses method GET, POST, PUT, dan DELETE.
- [x] **Data tersimpan di D1**: Log riwayat status dan komentar tersimpan di Cloudflare D1.
- [x] **Tidak ada token atau password di GitHub**: Menggunakan Cloudflare D1 environment bindings untuk keamanan.
- [x] **Test di GitHub Actions lulus**: Alur kerja CI/CD berjalan tanpa kegagalan (100% Green).
- [x] **README berisi URL aplikasi**: Tersemat link URL di bagian atas dan bagian deployment.
- [x] **Traceability matrix diperbarui**: Didokumentasikan lengkap pada berkas `traceability.md`.
- [x] **Release note dibuat**: Didokumentasikan pada berkas `change_request.md` dan `walkthrough.md`.
- [x] **Keterbatasan sistem dituliskan**: Tercantum di berkas `CASE.md`.

---

## 🔍 Panduan Penanganan Masalah (Troubleshooting / Error yang Sering Terjadi)

| Error | Penyebab Umum | Solusi Pemula |
| :--- | :--- | :--- |
| `node: command not found` | Node.js belum ditambahkan ke sistem environment PATH. | Unduh & instal Node.js, tutup semua terminal, lalu buka kembali terminal Anda. |
| `npm run dev gagal` | Dependensi modul `node_modules` belum terinstal atau corrupt. | Hapus folder `node_modules` lalu jalankan perintah `npm install`. |
| `no such table` | Migrasi skema database D1 simulasi lokal belum dijalankan. | Jalankan perintah `npm run db:setup` untuk memuat schema & data awal. |
| `DB is undefined` | Nama binding D1 di `wrangler.jsonc` tidak cocok dengan pemanggilan kode backend. | Pastikan nama binding pada `wrangler.jsonc` bernilai `DB` (huruf kapital). |
| `404 pada /api/requests` | Rute backend Workers belum terdaftar atau server Vite tidak memuat plugin Cloudflare. | Jalankan `npm run dev` untuk memastikan plugin `@cloudflare/vite-plugin` berjalan. |
| `Data hilang setelah deploy` | Migrasi database Cloudflare D1 produksi belum dieksekusi. | Jalankan perintah eksekusi SQL migrasi ke remote menggunakan flag `--remote`. |
| `Git push ditolak` | Terdapat perubahan terbaru di remote main branch yang belum Anda tarik ke lokal. | Lakukan `git pull origin main` terlebih dahulu, atau gunakan `--force` jika riwayat diubah. |
| `GitHub Actions gagal` | Kompilasi tipe TypeScript gagal atau unit test tidak lolos (FAIL). | Periksa baris kode error pada tab log rincian job GitHub Actions yang berwarna merah. |

---

*Proyek ini dikembangkan secara kolaboratif bersama asisten coding AI Google DeepMind Team - Antigravity.*
