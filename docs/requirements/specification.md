# Software Requirements Specification (SRS)

Spesifikasi kebutuhan perangkat lunak untuk Campus Service Request and Maintenance System.

---

## 1. Functional Requirements (FR)

Sistem harus memenuhi 12 kebutuhan fungsional berikut:

| ID | Nama Fitur | Deskripsi |
| :--- | :--- | :--- |
| **FR-01** | Pembuatan Laporan Baru | Pelapor dapat membuat laporan baru dengan menginput judul, deskripsi, lokasi, dan kategori masalah. |
| **FR-02** | Validasi Input Laporan | Sistem harus memvalidasi bahwa semua field wajib terisi dan deskripsi minimal terdiri dari 20 karakter. |
| **FR-03** | Daftar Laporan | Sistem menampilkan daftar semua laporan dengan status, kategori, prioritas, dan tanggal pembuatannya. |
| **FR-04** | Pencarian dan Penyaringan | Pengguna dapat mencari laporan berdasarkan kata kunci judul/lokasi dan menyaring berdasarkan kategori, prioritas, atau status. |
| **FR-05** | Detail Laporan | Sistem menampilkan detail lengkap dari laporan terpilih, termasuk riwayat perubahan status dan komentar. |
| **FR-06** | Peninjauan Laporan (Review) | Administrator dapat menandai laporan baru sebagai `Under Review` saat mulai memeriksa detail keluhan. |
| **FR-07** | Penentuan Prioritas | Administrator dapat menentukan prioritas laporan menjadi `LOW`, `MEDIUM`, atau `HIGH`. |
| **FR-08** | Penugasan Teknisi | Administrator dapat menugaskan teknisi spesifik ke laporan yang sedang ditinjau. |
| **FR-09** | Pembaruan Progres Pekerjaan | Teknisi dapat mengubah status laporan yang ditugaskan padanya menjadi `In Progress` atau `Resolved`. |
| **FR-10** | Penambahan Komentar | Pelapor, Administrator, dan Teknisi dapat menambahkan komentar atau catatan pada laporan. |
| **FR-11** | Riwayat Status | Sistem harus mencatat dan menampilkan log perubahan status laporan secara kronologis. |
| **FR-12** | Penutupan Laporan | Administrator dapat menutup laporan yang telah selesai (`Closed`) atau membukanya kembali (`Reopened`). |

---

## 2. Non-Functional Requirements (NFR)

Sistem harus memenuhi 6 kebutuhan non-fungsional berikut:

| ID | Kategori | Spesifikasi Kebutuhan |
| :--- | :--- | :--- |
| **NFR-01** | Kinerja (Performance) | API Workers dan halaman frontend harus dimuat dalam waktu kurang dari 2 detik pada kondisi jaringan normal. |
| **NFR-02** | Keamanan (Security) | Validasi input harus mencegah serangan XSS dan SQL Injection pada parameter pencarian atau komentar. |
| **NFR-03** | Keandalan (Reliability) | Sistem memanfaatkan arsitektur serverless Cloudflare Workers dan D1 SQL dengan target uptime > 99.9%. |
| **NFR-04** | Kebergunaan (Usability) | Antarmuka pengguna harus responsif (beradaptasi otomatis pada layar ponsel, tablet, dan desktop) serta menggunakan desain modern. |
| **NFR-05** | Kemudahan Pemeliharaan | Kode harus ditulis dalam TypeScript dengan struktur folder modular yang memisahkan frontend, backend, dan database. |
| **NFR-06** | Kompatibilitas Browser | Aplikasi web dapat diakses dengan lancar pada Chrome, Firefox, Safari, dan Edge versi terbaru. |

---

## 3. Business Rules (BR)

Aturan bisnis berikut mengendalikan alur kerja aplikasi:

- **BR-01**: Setiap laporan yang baru dikirim oleh Pelapor otomatis berstatus `SUBMITTED` dan memiliki prioritas default `MEDIUM`.
- **BR-02**: Penentuan prioritas, kategori akhir, dan penugasan teknisi hanya boleh dilakukan oleh aktor dengan peran **Administrator**.
- **BR-03**: Status laporan hanya dapat dipindahkan ke `Closed` jika status terakhirnya adalah `Resolved` (pekerjaan telah diselesaikan oleh teknisi).
- **BR-04**: Komentar yang sudah dikirimkan tidak dapat diubah atau dihapus untuk menjaga keaslian log audit komunikasi.
- **BR-05**: Teknisi hanya diperbolehkan mengubah progres status laporan yang ditugaskan secara resmi kepada dirinya.

---

## 4. User Stories & Acceptance Criteria

Berikut adalah 10 User Stories dengan minimal 2 Acceptance Criteria untuk masing-masing:

### US-01: Pembuatan Laporan (Pelapor)
*Sebagai Pelapor, saya ingin melaporkan masalah fasilitas agar kerusakan segera diperbaiki.*
- **AC-01-01**: Halaman menyediakan form dengan input: Judul Laporan, Deskripsi Masalah, Lokasi Gedung/Ruang, dan Dropdown Kategori (AC, Listrik, Internet, Kebersihan, Sipil).
- **AC-01-02**: Sistem mengembalikan pesan error jika ada field kosong atau deskripsi < 20 karakter, serta menyimpan data jika valid.

### US-02: Melihat Riwayat Laporan (Pelapor)
*Sebagai Pelapor, saya ingin melihat daftar laporan yang pernah saya buat untuk memantau perkembangannya.*
- **AC-02-01**: Halaman menampilkan list laporan milik pengguna beserta nomor laporan unik `CSR-xxxx`, judul, lokasi, status, dan prioritasnya.
- **AC-02-02**: Setiap kali status laporan diperbarui oleh admin/teknisi, status di daftar laporan pengguna otomatis ikut berubah.

### US-03: Menambah Komentar Tambahan (Pelapor)
*Sebagai Pelapor, saya ingin mengirim komentar pada detail laporan untuk memberikan info tambahan kepada teknisi.*
- **AC-03-01**: Halaman detail laporan menyediakan kolom komentar teks dan tombol kirim.
- **AC-03-02**: Komentar yang dikirim langsung tersimpan di database dan muncul di bawah laporan secara kronologis dengan mencantumkan nama aktor dan waktu kirim.

### US-04: Daftar Semua Laporan (Admin)
*Sebagai Administrator, saya ingin melihat daftar seluruh laporan yang dikirim civitas akademika agar bisa dikelola.*
- **AC-04-01**: Halaman Administrator menampilkan seluruh daftar laporan dari semua pelapor secara terurut berdasarkan tanggal terbaru.
- **AC-04-02**: Admin dapat melakukan penyaringan berdasarkan kategori (misal: "AC") dan status (misal: "Submitted") secara bersamaan.

### US-05: Penilaian Awal & Peninjauan (Admin)
*Sebagai Administrator, saya ingin mengubah status laporan menjadi 'Under Review' dan menetapkan prioritasnya agar penanganan lebih terstruktur.*
- **AC-05-01**: Di detail laporan baru, Admin dapat menekan tombol "Start Review" untuk mengubah status laporan dari `SUBMITTED` menjadi `UNDER REVIEW`.
- **AC-05-02**: Admin dapat mengubah tingkat prioritas laporan via dropdown pilihan `LOW`, `MEDIUM`, atau `HIGH`.

### US-06: Penugasan Teknisi (Admin)
*Sebagai Administrator, saya ingin menugaskan teknisi tertentu ke laporan yang sedang ditinjau agar perbaikan dapat dieksekusi.*
- **AC-06-01**: Detail laporan berstatus `UNDER REVIEW` menyediakan opsi dropdown nama teknisi yang terdaftar di sistem.
- **AC-06-02**: Setelah Admin memilih teknisi dan menyimpan, status laporan otomatis berubah menjadi `ASSIGNED` dan nama teknisi tertera di detail laporan tersebut.

### US-07: Daftar Pekerjaan Teknisi (Teknisi)
*Sebagai Teknisi, saya ingin melihat daftar laporan yang ditugaskan kepada saya agar saya tahu pekerjaan apa saja yang harus diselesaikan.*
- **AC-07-01**: Halaman Teknisi menyaring dan menampilkan hanya laporan yang kolom teknisinya cocok dengan nama teknisi yang sedang login.
- **AC-07-02**: Teknisi dapat menyaring daftar tugas berdasarkan status `ASSIGNED` (tugas baru) dan `IN PROGRESS` (sedang dikerjakan).

### US-08: Pembaruan Status Pekerjaan (Teknisi)
*Sebagai Teknisi, saya ingin memperbarui progres tugas menjadi 'In Progress' dan 'Resolved' agar pelapor mengetahui perkembangan perbaikan.*
- **AC-08-01**: Ketika memulai perbaikan, Teknisi dapat mengklik tombol "Mulai Bekerja" yang merubah status laporan menjadi `IN PROGRESS`.
- **AC-08-02**: Setelah perbaikan selesai, Teknisi dapat mengklik tombol "Selesai Perbaikan" yang merubah status laporan menjadi `RESOLVED`.

### US-09: Log Audit Perubahan Status (Semua Aktor)
*Sebagai Pengguna, saya ingin melihat log riwayat status laporan agar alur penanganan transparan dan terdokumentasi.*
- **AC-09-01**: Detail laporan menampilkan daftar log aktivitas yang berisi pencatatan perubahan status.
- **AC-09-02**: Log aktivitas mencantumkan format: `[Tanggal] - Status diubah dari [Status Lama] ke [Status Baru] oleh [Peran Aktor]`.

### US-10: Menutup Siklus Laporan (Admin)
*Sebagai Administrator, saya ingin menutup laporan secara resmi setelah perbaikan dikonfirmasi agar statusnya final.*
- **AC-10-01**: Pada detail laporan berstatus `RESOLVED`, Administrator dapat menekan tombol "Tutup Laporan" (Close Report).
- **AC-10-02**: Tindakan tersebut mengubah status menjadi `CLOSED` dan memblokir modifikasi status lebih lanjut (kecuali jika laporan dibuka kembali).
