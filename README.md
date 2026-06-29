# 🏫 Campus Maintenance System - Service Request & Maintenance

Sistem Pengaduan dan Pemeliharaan Sarana Prasarana Kampus (*Campus Service Request and Maintenance System*) adalah aplikasi berbasis web modern yang dirancang untuk mendigitalisasi, melacak, dan mempercepat penanganan keluhan fasilitas di lingkungan kampus secara real-time.

Aplikasi ini telah ter-deploy secara publik dan dapat diakses melalui link berikut:
👉 **[Campus Service Request and Maintenance System](https://campus-maintenance.lasutlucia.workers.dev)**

---

## 🚀 Fitur Utama & Keunggulan Sistem

Sistem ini memfasilitasi kolaborasi erat antara 4 peran utama secara terintegrasi:
*   **Pelapor (Mahasiswa & Dosen)**: Membuat laporan kerusakan dengan input lokasi terpisah (Gedung & Ruangan), memantau status aduan secara interaktif, berdiskusi di kolom komentar, dan memberikan konfirmasi selesai.
*   **Administrator**: Melakukan peninjauan aduan (`UNDER REVIEW`), menentukan klasifikasi kategori fasilitas, menunjuk Teknisi pelaksana (`ASSIGNED`), serta menutup aduan secara formal (`CLOSED`).
*   **Staf Teknisi**: Menentukan prioritas penanganan (`LOW`/`MEDIUM`/`HIGH`), memperbarui status pengerjaan (`IN PROGRESS`), menyelesaikan perbaikan (`RESOLVED`), dan memberikan catatan pengerjaan.
*   **Manajer Fasilitas (FM)**: Memantau ringkasan statistik (total laporan, status pengerjaan, aduan selesai), grafik visualisasi kategori, dan log percakapan aduan secara *read-only*.

### 💎 Inisiatif Fitur Premium Tambahan (AI-Enhanced):
*   **Pencarian Pintar & Highlight Denyut Neon (*Pulsing Glow*)**: Mengetik kata kunci pencarian akan mengurutkan aduan paling cocok ke posisi teratas dan memberikan visual berdenyut menyala (*pulsing*) tanpa interupsi membuka detail aduan secara paksa.
*   **Tema Gelap/Terang (*Dark/Light Mode Theme Switcher*)**: Pengalih warna antarmuka yang tersimpan otomatis di `localStorage`.
*   **Bar Progres Validasi Karakter**: Umpan balik visual real-time di kolom deskripsi formulir aduan untuk memastikan panjang teks memenuhi batas minimum 20 karakter.
*   **Sinkronisasi Real-Time (4s Auto-Polling)**: Pembaruan data tabel dan log komentar di latar belakang setiap 4 detik untuk mendukung alur diskusi interaktif lintas peran.
*   **Zona Waktu WITA**: Semua timestamp jam pembuatan aduan, pembaruan status, dan komentar diselaraskan secara konsisten ke zona waktu Waktu Indonesia Tengah (UTC+8).

---

## 🛠️ Spesifikasi Teknologi (*Tech Stack*)

*   **Frontend**: React.js 18 (Vite) + TypeScript
*   **Styling**: Vanilla CSS (Modern CSS Custom Properties, Flexbox, Grid, Glassmorphic Glass-Blur, Keyframe Animations)
*   **Backend API**: Cloudflare Workers (Serverless Runtime)
*   **Database**: Cloudflare D1 (Serverless Relational SQL Database)
*   **Testing Framework**: Vitest (Unit & Integration Testing)

---

## 📁 Struktur Repositori

Struktur direktori repositori ini dirancang secara sistematis sesuai standar rekayasa perangkat lunak:
```text
SWE-campus-maintenance/
├── .github/              # Alur kerja otomasi CI/CD (GitHub Actions)
├── docs/                 # Dokumentasi rekayasa perangkat lunak
│   ├── requirements/     # Inception, Elicitation, Specification (SRS), MoSCoW, Traceability, CR
│   └── design/           # Architecture, Database Schema, REST API, UI Flow, Wireframe
├── database/             # Skema D1 SQLite Migrations (schema.sql & seed.sql)
├── src/                  # Kode sumber Frontend React (TypeScript & CSS)
├── worker/               # Kode sumber Backend Serverless Worker (TypeScript & D1 queries)
├── tests/                # Automated Test Cases (Vitest)
├── CASE.md               # Laporan ringkas pengumpulan & jawaban refleksi tugas
├── wrangler.jsonc        # File konfigurasi deployment Cloudflare Workers
└── README.md             # Dokumen panduan utama sistem (file ini)
```

---

## 🔑 Kredensial Pengguna untuk Pengujian

Gunakan akun simulasi di bawah ini untuk mencoba alur kerja antar-aktor pada halaman login aplikasi:

| Peran Aktor (Role) | Nama Pengguna (Username) | Kata Sandi (Password) |
| :--- | :--- | :--- |
| **Pelapor (Mahasiswa)** | `Lucia` | `lucia123` |
| **Pelapor (Dosen)** | `Dosen` | `dosen123` |
| **Staf Teknisi** | `Andi` | `andi123` |
| **Administrator** | `Administrator` | `admin123` |
| **Manajer Fasilitas** | `Manajer` | `manajer123` |

---

## 💻 Panduan Menjalankan Secara Lokal (*Local Setup*)

### Prasyarat:
*   [Node.js](https://nodejs.org/) (versi 18 ke atas)
*   NPM (bawaan Node.js)

### 1. Kloning Repositori & Instal Dependensi
```bash
# Clone repositori ini
git clone https://github.com/lasutlucia/SWE-campus-maintenance.git
cd SWE-campus-maintenance

# Install semua modul dependensi
npm install
```

### 2. Jalankan Migrasi Database D1 Lokal
Untuk menyimulasikan database relasional di komputer lokal Anda, jalankan perintah berikut:
```bash
# Inisialisasi skema tabel & data seed awal pada SQLite lokal wrangler
npm run db:setup
```

### 3. Jalankan Server Pengembangan (Local Dev Server)
Jalankan server frontend dan API backend secara bersamaan secara lokal:
```bash
npm run dev
```
Buka **[http://localhost:5173](http://localhost:5173)** pada browser Anda untuk menjalankan aplikasi.

### 4. Menjalankan Pengujian Otomatis (Vitest)
Untuk memverifikasi fungsionalitas validasi formulir dan aturan bisnis status berjalan dengan benar:
```bash
npm run test
```

---

## ☁️ Panduan Deployment ke Cloudflare Workers

Aplikasi ini dikonfigurasi untuk dapat dideploy langsung ke akun Cloudflare Anda. Pastikan Anda sudah login ke CLI wrangler menggunakan `npx wrangler login`.

Untuk meluncurkan pembaruan terbaru ke Cloudflare secara otomatis:
```bash
npm run deploy
```

---

## ✅ Checklist Setelah Deployment (Sesuai Ketentuan PDF Page 16)
- [x] **Aplikasi dapat dibuka melalui URL publik**: Link Cloudflare Workers aktif.
- [x] **Form laporan dapat digunakan**: Formulir "Laporan Kerusakan" di dashboard Pelapor berfungsi menyimpan data ke database D1.
- [x] **API dapat menerima data**: Router Worker (`worker/index.ts`) memproses method GET/POST/PUT/DELETE.
- [x] **Data tersimpan di D1**: Kueri SQL berjalan pada Cloudflare D1.
- [x] **Tidak ada token atau password di GitHub**: Kredensial sensitif diamankan (menggunakan D1 bindings di Workers).
- [x] **Test di GitHub Actions lulus**: Seluruh 20 Vitest unit test otomatis PASS pada alur CI/CD.
- [x] **README berisi URL aplikasi**: Tercantum tautan proyek di bagian atas dan bagian deployment.
- [x] **Traceability matrix diperbarui**: Tersimpan di berkas `docs/requirements/traceability.md`.
- [x] **Release note dibuat**: Didokumentasikan lengkap pada berkas `docs/requirements/change_request.md` dan `walkthrough.md`.
- [x] **Keterbatasan sistem dituliskan**: Tercantum di berkas `CASE.md` dan `README.md`.

---

## 🔍 Panduan Penanganan Masalah (Troubleshooting / Error yang Sering Terjadi)

| Error | Penyebab Umum | Solusi Pemula |
| :--- | :--- | :--- |
| `node: command not found` | Node.js belum terbaca di sistem PATH. | Instal Node.js dari situs resmi, tutup Terminal/VS Code, lalu buka kembali. |
| `npm run dev gagal` | Modul dependensi belum terinstal sempurna. | Jalankan perintah `npm install` terlebih dahulu. |
| `no such table` | Berkas migrasi database lokal D1 belum dieksekusi. | Jalankan perintah `npm run db:setup` untuk inisialisasi tabel lokal. |
| `DB is undefined` | Binding D1 belum terkonfigurasi dengan benar di `wrangler.jsonc`. | Periksa kesamaan nama binding `DB` dan `database_id` di berkas `wrangler.jsonc`. |
| `404 pada /api/requests` | Handler rute Worker belum diimplementasikan atau server lokal mati. | Periksa kecocokan rute di `worker/index.ts` dan jalankan kembali `npm run dev`. |
| `Data hilang setelah deploy` | Migrasi database produksi Cloudflare D1 belum dijalankan. | Jalankan perintah D1 execute ke remote dengan opsi `--remote`. |
| `Git push ditolak` | Terjadi ketidakcocokan riwayat commit lokal dengan repositori GitHub. | Lakukan `git pull` atau gunakan `--force` jika Anda melakukan penggabungan/amend riwayat. |
| `GitHub Actions gagal` | Terdapat kegagalan kompilasi TypeScript atau test case ada yang gagal (FAIL). | Periksa tab log detail job GitHub Actions yang merah untuk melihat baris kode penyebab error. |

---

*Proyek ini dikembangkan secara kolaboratif bersama asisten coding AI Google DeepMind Team - Antigravity.*
