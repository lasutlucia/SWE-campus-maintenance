# AI Evidence Log - Campus Service Request and Maintenance System

Dokumen ini mencatat bukti penggunaan AI (*AI Evidence*) selama proses pengerjaan proyek dari tahap analisis requirements hingga deployment.

---

## Log Invocasi & Output AI

### 1. Tahap Inception & Requirements (Fase 2)
- **Prompt Pengguna**: "Saya ingin membuat aplikasi pelaporan fasilitas kampus untuk mahasiswa/dosen. Tolong buatkan draf kebutuhan fungsional (FR) dan user stories-nya."
- **Output AI Draft**: Draft awal berupa list FR-01 s.d FR-12 dan beberapa User Stories dasar di `docs/requirements/specification.md`.
- **Human Review & Perbaikan**: Mahasiswa meninjau draft dan menambahkan batasan aturan bisnis (Business Rules BR-01 s.d BR-05) agar alur transisi status laporan lebih aman dan konsisten dengan kebutuhan kampus asli.

### 2. Tahap Desain Database & API (Fase 3)
- **Prompt Pengguna**: "Rancang skema tabel SQLite D1 untuk menampung data keluhan, riwayat perubahan status, dan diskusi komentar."
- **Output AI Draft**: Kode SQL migrasi awal yang membuat tabel `service_requests`, `comments`, dan `status_history`.
- **Human Review & Perbaikan**: Mahasiswa menyetujui skema dan menguji integritas relasi foreign key secara lokal menggunakan perintah `npx wrangler d1 execute --local`.

### 3. Tahap Koding Frontend & Backend (Fase 5)
- **Prompt Pengguna**: "Buat komponen utama React `App.tsx` dengan visual glassmorphic premium bertema gelap dan endpoint routing backend Workers di `worker/index.ts`."
- **Output AI Draft**: Kode React yang memiliki form pelaporan dan kueri database relasional Worker.
- **Human Review & Perbaikan**: Mahasiswa menambahkan fitur switcher peran aktor di header web untuk memudahkan simulasi 4 peran tanpa menggunakan otentikasi luar.

### 4. Tahap Pengujian Otomatis (Fase 6)
- **Prompt Pengguna**: "Tulis 20 unit tests menggunakan Vitest untuk memverifikasi validasi input dan aturan izin peran aktor."
- **Output AI Draft**: Kode uji di `request-validation.test.ts` dan `business-rules.test.ts`.
- **Human Review & Perbaikan**:
  1. **Kesalahan AI**: AI menggunakan teks uji deskripsi `"Lampu padam sejak pagi"` (22 karakter) pada test case deskripsi pendek yang seharusnya gagal.
  2. **Tindakan Perbaikan**: Mahasiswa mempersingkat teks uji menjadi `"Lampu kelas padam"` (17 karakter) agar test case berhasil dijalankan.
  3. **Kesalahan Dependensi**: Konfigurasi `@cloudflare/vite-plugin` di `vite.config.ts` menolak inisialisasi Vitest.
  4. **Tindakan Perbaikan**: Mahasiswa memisahkan konfigurasi pengujian ke berkas `vitest.config.ts` agar test run berhasil.
