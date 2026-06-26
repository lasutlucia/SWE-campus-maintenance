# Change Request - Campus Service Request and Maintenance System

Dokumen ini mencatat permintaan perubahan (*Change Request*) terhadap spesifikasi kebutuhan sistem beserta analisis dampaknya.

## CR-01: Penambahan Fitur Multi-Role Switcher pada Antarmuka Pengguna

| Detail Permintaan | Keterangan |
| :--- | :--- |
| **ID Permintaan** | CR-01 |
| **Nama Perubahan** | Multi-Role Switcher untuk Pengujian Lokal |
| **Diajukan Oleh** | Tim Pengembang / Mahasiswa |
| **Tanggal Pengajuan** | 2026-06-26 |
| **Status** | **Approved (Disetujui)** |

### 1. Deskripsi Perubahan
Menambahkan panel kontrol (Role Switcher) di bagian atas aplikasi frontend yang memungkinkan pengguna memilih/berpindah peran secara instan di antara 4 Aktor:
1. **Pelapor** (Mahasiswa/Dosen)
2. **Administrator**
3. **Teknisi** (misal: "Budi" atau "Agus")
4. **Manajer Fasilitas**

Sistem kemudian akan menyimulasikan identitas peran tersebut pada setiap interaksi dengan API Workers dan database D1.

### 2. Latar Belakang (Rationale)
Karena spesifikasi tugas melarang penggunaan autentikasi Google atau sistem login yang berbayar/kompleks, pengujian manual alur perbaikan (dari pengiriman keluhan hingga penutupan) akan sangat sulit dilakukan jika pengembang harus mengganti-ganti status session secara hardcode di file `App.tsx`. Multi-role switcher memfasilitasi simulasi end-to-end yang mudah dilakukan langsung dari antarmuka web.

### 3. Analisis Dampak (Impact Analysis)

#### A. Dampak pada Requirements
- Menambahkan fungsionalitas baru di area visualisasi UI (tidak mengubah logika inti transisi status laporan).
- Melonggarkan otentikasi keamanan di tingkat API agar dapat menerima header identitas simulasi (misal: `X-User-Role` dan `X-User-Name`).

#### B. Dampak pada Kode Sumber
- **Frontend (`src/App.tsx`)**: Menambahkan komponen Header dengan tombol dropdown/radio button pilihan peran aktif. Mengirimkan peran aktif tersebut dalam request header atau payload API.
- **Backend (`worker/index.ts`)**: Memperbarui logika API agar memproses hak akses berdasarkan header `X-User-Role` dan `X-User-Name` yang dikirim dari frontend.

#### C. Dampak pada Database
- Tidak mengubah skema tabel utama `service_requests`. Namun, untuk mendukung komentar multi-aktor, data komentar harus mencatat nama dan peran aktor pengirim.

#### D. Dampak pada Pengujian (Testing)
- Diperlukan pembuatan skenario test tambahan untuk memverifikasi bahwa user dengan role Pelapor tidak bisa menembak endpoint penugasan teknisi (Admin-only).
