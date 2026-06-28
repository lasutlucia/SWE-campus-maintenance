# Change Request - Campus Service Request and Maintenance System

Dokumen ini mencatat permintaan perubahan (*Change Request*) terhadap spesifikasi kebutuhan sistem beserta analisis dampaknya.

---

## CR-01: Penambahan Fitur Multi-Role Switcher pada Antarmuka Pengguna

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-01 |
| **Nama Perubahan** | Multi-Role Switcher untuk Pengujian Lokal |
| **Diajukan Oleh** | Tim Pengembang / Mahasiswa |
| **Tanggal Pengajuan** | 2026-06-26 |
| **Status** | **Approved (Disetujui)** |

### 1. Deskripsi Perubahan
Menambahkan panel kontrol (Role Switcher) di bagian atas aplikasi frontend yang memungkinkan pengguna memilih/berpindah peran secara instan di antara 4 Aktor.

### 2. Latar Belakang (Rationale)
Memfasilitasi simulasi pengujian end-to-end tanpa mengharuskan sistem login yang kompleks di awal pengembangan.

---

## CR-02: Pemisahan Kolom Input Lokasi Form Pelaporan

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-02 |
| **Nama Perubahan** | Pemisahan Lokasi Gedung dan Lokasi Ruangan |
| **Diajukan Oleh** | Pelapor / Pengguna |
| **Tanggal Pengajuan** | 2026-06-27 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Memisahkan input kolom "Lokasi" pada form pembuatan aduan baru menjadi dua input teks terpisah: "Lokasi Gedung" dan "Lokasi Ruangan". Sistem menggabungkannya secara otomatis dengan format "Gedung - Ruangan" sebelum disimpan ke database.

### 2. Latar Belakang (Rationale)
Memudahkan Pelapor dalam memberikan kejelasan informasi kerusakan agar letak fisik fasilitas lebih terperinci dan mudah dipetakan oleh teknisi.

---

## CR-03: Label Laporan Kerusakan & Penghapusan Dropdown Kategori Form

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-03 |
| **Nama Perubahan** | Label Kerusakan Mandiri & Penghapusan Kategori Form |
| **Diajukan Oleh** | Pelapor |
| **Tanggal Pengajuan** | 2026-06-27 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Mengubah label input form pelaporan dari "Judul Masalah" menjadi "Laporan Kerusakan", serta menghapus kolom pilihan kategori kerusakan dari form pelapor.

### 2. Latar Belakang (Rationale)
Membuat pelaporan bersifat isian bebas secara deskriptif tanpa membebani Pelapor untuk memilah kategori fasilitas sendiri di awal keluhan dibuat.

---

## CR-04: Penghapusan Filter Dropdown di Dashboard Pelapor

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-04 |
| **Nama Perubahan** | Penyembunyian Filter Status dan Kategori Pelapor |
| **Diajukan Oleh** | Pelapor / Evaluator |
| **Tanggal Pengajuan** | 2026-06-27 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Menghapus dropdown penyaringan filter "Semua Kategori" dan "Semua Status" dari bagian atas tabel khusus pada antarmuka dashboard Pelapor.

### 2. Latar Belakang (Rationale)
Menyederhanakan visualisasi dashboard Pelapor agar lebih bersih dan minimalis, menghindari kebingungan atas filter klasifikasi internal yang tidak relevan dengan mahasiswa/dosen.

---

## CR-05: Pengaktifan Kembali Baris Aduan (Row Click) untuk Pelapor

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-05 |
| **Nama Perubahan** | Interaksi Panel Detail dan Komentar untuk Pelapor |
| **Diajukan Oleh** | Pelapor / Mahasiswa |
| **Tanggal Pengajuan** | 2026-06-27 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Mengaktifkan kembali kemampuan klik baris laporan (*row click*) untuk dashboard Pelapor agar panel samping dapat dimuat dengan layout yang disederhanakan (menyembunyikan alur stepper internal, riwayat log audit, dan dropdown prioritas/teknisi).

### 2. Latar Belakang (Rationale)
Memungkinkan mahasiswa atau dosen pelapor melihat rincian keluhan mereka serta ikut terlibat langsung memberikan masukan/komentar.

---

## CR-06: Ikon Komentar pada Tabel & Komentar Terhubung Lintas Peran

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-06 |
| **Nama Perubahan** | Tombol Aksi Komentar & Sistem Komentar Terintegrasi |
| **Diajukan Oleh** | Seluruh Aktor |
| **Tanggal Pengajuan** | 2026-06-28 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Mengubah penamaan "Diskusi" menjadi "Komentar Laporan" di semua peran, menambahkan kolom tombol aksi `💬 Komentar` di baris tabel, serta menghubungkan seluruh riwayat komentar antar-aktor secara transparan.

### 2. Latar Belakang (Rationale)
Memberi petunjuk visual yang jelas agar pengguna mengetahui bahwa mengklik baris/tombol tersebut akan memunculkan percakapan, serta memfasilitasi komunikasi kolaboratif di antara Pelapor, Admin, dan Teknisi.

---

## CR-07: Pengurutan Cerdas Hasil Pencarian & Efek Click Illusion

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-07 |
| **Nama Perubahan** | Cerdas Urut Hasil Pencarian & Auto-Select Pertama |
| **Diajukan Oleh** | Pengguna Dashboard |
| **Tanggal Pengajuan** | 2026-06-28 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Menyaring dan mengurutkan laporan yang paling cocok dengan kata kunci pencarian (misal: mencari kata "AC") ke baris teratas daftar, disertai visual neon menyala (Click Illusion) dan otomatis memuat isi detail aduan tersebut.

### 2. Latar Belakang (Rationale)
Mempercepat peninjauan laporan di dashboard oleh admin/teknisi saat mencari kata kunci tertentu tanpa mengharuskan mereka mencari barisnya secara manual.

---

## CR-08: Format Penyesuaian Zona Waktu WITA

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-08 |
| **Nama Perubahan** | Lokalisasi Zona Waktu WITA (Asia/Makassar) |
| **Diajukan Oleh** | Administrator / Pengguna |
| **Tanggal Pengajuan** | 2026-06-28 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Menyelaraskan seluruh timestamp pembuatan laporan, log audit, dan riwayat komentar menggunakan format zona waktu WITA (UTC+8) lengkap dengan label akhiran "WITA".

### 2. Latar Belakang (Rationale)
Menyesuaikan waktu pengerjaan dengan waktu operasional kampus asli agar tidak ada selisih jam saat pelaporan dibuat.

---

## CR-09: Sinkronisasi Data Real-Time (4 Detik Polling)

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-09 |
| **Nama Perubahan** | Background Polling Otomatis 4 Detik |
| **Diajukan Oleh** | Teknisi / Administrator |
| **Tanggal Pengajuan** | 2026-06-28 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Mengimplementasikan background polling otomatis di frontend yang melakukan penarikan data berkala ke API Workers setiap 4 detik untuk memperbarui tabel utama dan isi log komentar/audit aduan terpilih.

### 2. Latar Belakang (Rationale)
Menjamin seluruh aduan baru langsung terkirim dan sinkron seketika ke layar admin, teknisi, dan manajer tanpa perlu me-refresh halaman secara manual.

---

## CR-10: Pemindahan Otoritas Prioritas Laporan ke Pihak Teknisi

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-10 |
| **Nama Perubahan** | Pemindahan Otoritas Prioritas & Default NONE |
| **Diajukan Oleh** | Administrator / Teknisi |
| **Tanggal Pengajuan** | 2026-06-28 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Mengubah prioritas awal laporan baru menjadi `NONE` (Belum Ditentukan). Menghapus penentuan prioritas dari panel Admin dan memberikannya sebagai dropdown pilihan khusus bagi Teknisi saat mereka memproses perbaikan.

### 2. Latar Belakang (Rationale)
Teknisi yang ditugaskan di lapangan merupakan pihak yang paling memahami urgensi dan kapasitas perbaikan fasilitas, sehingga penentuan skala prioritas (LOW, MEDIUM, HIGH) diserahkan penuh kepada mereka.

---

## CR-11: Otentikasi Login Database Manajer & Perataan Tata Letak

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-11 |
| **Nama Perubahan** | Login Dinamis Manajer D1 & Perataan Layout Kiri Premium |
| **Diajukan Oleh** | Manajer Fasilitas / Pengembang |
| **Tanggal Pengajuan** | 2026-06-28 |
| **Status** | **Approved (Disetujui & Diimplementasikan)** |

### 1. Deskripsi Perubahan
Menghapus garis vertikal kiri-kanan pada root layout utama, meratakan dashboard ke kiri (`text-align: left`), memetakan login peran `Manajer Fasilitas` D1 secara benar, serta mendukung penambahan peran kustom secara dinamis di database.

### 2. Latar Belakang (Rationale)
Memperbaiki kendala visual layout yang meluap (*overflow*) serta memastikan data login terhubung penuh secara real-time dengan skema users di Cloudflare D1.
