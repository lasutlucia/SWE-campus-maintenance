# UI Flow - Campus Service Request and Maintenance System

Dokumen ini mendeskripsikan alur antarmuka pengguna (UI Flow) dan alur navigasi halaman berdasarkan peran aktor yang sedang aktif.

## Alur Navigasi Masuk (Authentication Flow)
Sistem menggunakan **Halaman Login Database-Driven (Dua Tahap)** sebelum pengguna dapat masuk ke Dashboard masing-masing:

```
                  ┌───────────────────────────────────┐
                  │ Halaman Login Tahap 1: Pilih Role │
                  │  [Pelapor] [Teknisi] [Admin] [FM] │
                  └─────────────────┬─────────────────┘
                                    │
                                    ▼
                  ┌───────────────────────────────────┐
                  │ Halaman Login Tahap 2: Kredensial │
                  │     Input Username & Password     │
                  └─────────────────┬─────────────────┘
                                    │
                         (Autentikasi Database D1)
                                    ▼
                   ┌─────────────────────────────────┐
                   │    Masuk ke Dashboard Utama     │
                   └─────────────────────────────────┘
```

---

## Alur Halaman Per Aktor

### 1. Alur Pelapor (Mahasiswa / Dosen)
1. Pelapor memilih opsi login Pelapor dan memasukkan kredensial terdaftar (misal: `Lucia` / `lucia123`).
2. **Dashboard Pelapor**:
   * **Panel Kiri**: Form pembuatan laporan dengan input Laporan Kerusakan (Judul), Deskripsi Masalah (Min 20 Karakter), Lokasi Gedung, dan Lokasi Ruangan secara terpisah. Kategori dihilangkan dari isian pelapor.
   * **Panel Kanan**: Daftar laporan pengaduan tanpa dropdown filter (filter disembunyikan agar bersih).
3. Pelapor dapat mengklik baris laporan atau tombol aksi cepat `💬 Komentar` untuk memuat panel detail aduan sederhana (stepper status, linimasa audit, dan menu aksi disembunyikan untuk Pelapor).
4. Pelapor dapat melihat percakapan komentar dari seluruh peran dan memberikan komentar balasan secara langsung.
5. Pelapor dapat menekan tombol **"Konfirmasi Perbaikan Selesai"** ketika aduan telah berstatus `RESOLVED`.

### 2. Alur Administrator
1. Admin masuk menggunakan kredensial (misal: `Administrator` / `admin123`).
2. **Dashboard Administrator**:
   * Menampilkan daftar seluruh laporan secara lengkap dengan fitur pencarian teks pintar (mengurutkan aduan tercocok di posisi teratas dengan efek visual click-illusion).
3. Admin mengklik baris aduan berstatus `SUBMITTED` untuk memuat detail laporan.
4. Admin menekan tombol **"Start Review"** untuk mengubah status laporan dari `SUBMITTED` menjadi `UNDER REVIEW`.
5. Admin menunjuk staf teknisi pelaksana melalui dropdown yang diambil secara dinamis dari database D1 (termasuk teknisi `Andi`).
6. Menyimpan penugasan secara otomatis memicu alur status menjadi `ASSIGNED`.
7. Setelah teknisi menyelesaikan tugas (status `RESOLVED`), Admin meninjau perbaikan dan menekan tombol **"Close Report"** untuk merubah status final laporan menjadi `CLOSED`.

### 3. Alur Staf Teknisi
1. Teknisi masuk menggunakan kredensial terdaftar (misal: `Andi` / `andi123`).
2. **Dashboard Teknisi**:
   * Menampilkan seluruh daftar laporan (akses menyeluruh tanpa filterisasi tugas personal agar dapat memantau aduan unassigned baru yang masuk secara real-time).
3. Teknisi mengklik baris tugas yang didelegasikan padanya untuk memuat detail laporan.
4. Sebelum memulai pengerjaan, Teknisi **wajib menentukan tingkat prioritas** (`LOW`, `MEDIUM`, `HIGH`) melalui dropdown aksi khusus di panel Teknisi, lalu mengklik tombol **"Mulai Bekerja"** (status berubah menjadi `IN PROGRESS`).
5. Setelah perbaikan selesai di lapangan, Teknisi mengklik tombol **"Selesai Perbaikan"** (status berubah menjadi `RESOLVED`).
6. Teknisi dapat mengirim komentar teknis/catatan perbaikan di panel percakapan komentar.

### 4. Alur Manajer Fasilitas (FM View)
1. Manajer masuk menggunakan kredensial terdaftar (`Manajer` / `manajer123`).
2. **Dashboard Manajer**:
   * Menampilkan tiga kartu metrik ringkasan status real-time (Total Laporan, Dalam Pengerjaan, Tuntas Terselesaikan).
   * Menampilkan bar persentase kontribusi laporan berdasarkan kategori fasilitas kampus.
   * Menampilkan tabel ringkasan laporan kampus (*read-only monitoring view*).
3. Manajer dapat memantau log audit status alur kerja dan seluruh percakapan komentar secara real-time.
