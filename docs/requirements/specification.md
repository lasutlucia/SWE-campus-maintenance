# Software Requirements Specification (SRS)

Spesifikasi kebutuhan perangkat lunak untuk Campus Service Request and Maintenance System.

---

## 1. Functional Requirements (FR)

Sistem harus memenuhi 12 kebutuhan fungsional berikut:

| ID | Nama Fitur | Deskripsi |
| :--- | :--- | :--- |
| **FR-01** | Pembuatan Laporan Baru | Pelapor dapat membuat laporan baru dengan menginput aduan laporan (judul), deskripsi, lokasi gedung, dan lokasi ruangan secara terpisah. |
| **FR-02** | Validasi Input Laporan | Sistem harus memvalidasi bahwa semua field wajib terisi dan deskripsi minimal terdiri dari 20 karakter. |
| **FR-03** | Daftar Laporan | Sistem menampilkan daftar semua laporan dengan status, prioritas, lokasi gabungan, dan tanggal pembuatannya. |
| **FR-04** | Pencarian Pengurutan Cerdas | Pengguna dapat mencari laporan berdasarkan kata kunci pencarian global. Aduan yang paling cocok dengan kata kunci (misal: "AC") otomatis diletakkan di posisi teratas daftar laporan. |
| **FR-05** | Detail Laporan | Sistem menampilkan detail lengkap dari laporan terpilih, termasuk riwayat perubahan status, informasi lokasi detail, dan kolom komentar. |
| **FR-06** | Peninjauan Laporan (Review) | Administrator dapat menandai laporan baru sebagai `Under Review` saat mulai memeriksa detail keluhan. |
| **FR-07** | Penentuan Prioritas | Staf Teknisi yang ditugaskan dapat menentukan dan memperbarui prioritas laporan menjadi `LOW`, `MEDIUM`, atau `HIGH`. |
| **FR-08** | Penugasan Teknisi | Administrator dapat menugaskan teknisi spesifik ke laporan yang sedang ditinjau melalui dropdown data teknisi dinamis dari database D1. |
| **FR-09** | Pembaruan Progres Pekerjaan | Teknisi dapat mengubah status laporan yang ditugaskan padanya menjadi `In Progress` atau `Resolved`. |
| **FR-10** | Penambahan Komentar | Pelapor, Administrator, Teknisi, dan Manajer dapat mengirim dan membaca komentar pada laporan secara terintegrasi (dilengkapi tombol ikon komentar di baris tabel). |
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
| **NFR-04** | Kebergunaan (Usability) | Antarmuka pengguna responsif, menggunakan tata letak perataan kiri premium, memformat waktu dengan zona waktu WITA (Asia/Makassar, UTC+8), serta melakukan sinkronisasi real-time background polling otomatis berkala setiap 4 detik. |
| **NFR-05** | Kemudahan Pemeliharaan | Kode harus ditulis dalam TypeScript dengan struktur folder modular yang memisahkan frontend, backend, dan database. |
| **NFR-06** | Kompatibilitas Browser | Aplikasi web dapat diakses dengan lancar pada Chrome, Firefox, Safari, dan Edge versi terbaru. |

---

## 3. Business Rules (BR)

Aturan bisnis berikut mengendalikan alur kerja aplikasi:

- **BR-01**: Setiap laporan yang baru dikirim oleh Pelapor otomatis berstatus `SUBMITTED` dan memiliki prioritas default `NONE` (Belum Ditentukan).
- **BR-02**: Penentuan prioritas hanya boleh dilakukan oleh aktor **Staf Teknisi yang ditugaskan** untuk laporan tersebut. Pendelegasian teknisi dilakukan oleh **Administrator**.
- **BR-03**: Status laporan hanya dapat dipindahkan ke `Closed` jika status terakhirnya adalah `Resolved` (pekerjaan telah diselesaikan oleh teknisi).
- **BR-04**: Komentar yang sudah dikirimkan tidak dapat diubah atau dihapus untuk menjaga keaslian log audit komunikasi.
- **BR-05**: Teknisi hanya diperbolehkan mengubah progres status dan prioritas laporan yang ditugaskan secara resmi kepada dirinya sendiri.
- **BR-06**: Pengguna baru atau kustom role baru yang terdaftar di database D1 disinkronisasi dan didukung log masuk secara instan secara real-time.

---

## 4. User Stories & Acceptance Criteria

Berikut adalah 10 User Stories dengan minimal 2 Acceptance Criteria untuk masing-masing:

### US-01: Pembuatan Laporan (Pelapor)
*Sebagai Pelapor, saya ingin melaporkan masalah fasilitas agar kerusakan segera diperbaiki.*
- **AC-01-01**: Halaman menyediakan form dengan input: Laporan Kerusakan (Judul), Deskripsi Masalah, Lokasi Gedung, dan Lokasi Ruangan secara terpisah.
- **AC-01-02**: Sistem menggabungkan lokasi gedung dan ruangan di latar belakang serta mengembalikan pesan error jika ada field kosong atau deskripsi < 20 karakter.

### US-02: Melihat Riwayat Laporan (Pelapor)
*Sebagai Pelapor, saya ingin melihat daftar laporan yang pernah saya buat untuk memantau perkembangannya.*
- **AC-02-01**: Halaman menampilkan list laporan milik pengguna beserta nomor laporan unik `CSR-xxxx`, judul, lokasi gabungan, status, prioritas, dan tanggal pelaporan.
- **AC-02-02**: Filter dropdown "Semua Status" dan "Semua Kategori" dihilangkan dari dashboard Pelapor agar tampilan terfokus.

### US-03: Menambah Komentar Tambahan (Semua Peran)
*Sebagai Pengguna, saya ingin mengirim komentar pada detail laporan untuk berdiskusi dengan peran lainnya.*
- **AC-03-01**: Halaman detail laporan menyediakan kolom komentar teks segaris (*inline flex*) dan tombol kirim, serta tabel menyediakan tombol aksi cepat `💬 Komentar`.
- **AC-03-02**: Komentar yang dikirim langsung tersimpan di database D1 secara real-time dan muncul di bawah aduan secara kronologis dengan waktu WITA.

### US-04: Daftar Semua Laporan (Admin)
*Sebagai Administrator, saya ingin melihat daftar seluruh laporan yang dikirim civitas akademika agar bisa dikelola.*
- **AC-04-01**: Halaman Administrator menampilkan seluruh daftar laporan dari semua pelapor secara terurut berdasarkan tanggal terbaru secara real-time.
- **AC-04-02**: Admin dapat melakukan pencarian berbasis pengurutan cerdas (aduan paling cocok diposisikan teratas dengan efek visual click illusion).

### US-05: Peninjauan Laporan (Admin)
*Sebagai Administrator, saya ingin meninjau laporan agar penanganan lebih terstruktur.*
- **AC-05-01**: Di detail laporan baru, Admin dapat menekan tombol "Start Review" untuk mengubah status laporan dari `SUBMITTED` menjadi `UNDER REVIEW`.
- **AC-05-02**: Menu penentuan prioritas dinonaktifkan dari halaman Admin agar diserahkan kepada Teknisi penanggung jawab.

### US-06: Penugasan Teknisi (Admin)
*Sebagai Administrator, saya ingin menugaskan teknisi tertentu ke laporan yang sedang ditinjau agar perbaikan dapat dieksekusi.*
- **AC-06-01**: Detail laporan berstatus `UNDER REVIEW` menyediakan opsi dropdown nama teknisi dinamis yang ditarik dari database D1.
- **AC-06-02**: Setelah Admin memilih teknisi dan menyimpan, status laporan otomatis berubah menjadi `ASSIGNED` dan nama teknisi tertera di detail laporan tersebut.

### US-07: Daftar Pekerjaan Teknisi (Teknisi)
*Sebagai Teknisi, saya ingin melihat daftar laporan secara lengkap agar saya tahu pekerjaan baru apa saja yang harus diselesaikan.*
- **AC-07-01**: Halaman Teknisi menampilkan seluruh daftar laporan terdaftar agar mereka dapat melihat aduan baru berstatus unassigned.
- **AC-07-02**: Teknisi dapat melihat aduan dengan prioritas awal `Belum Ditentukan` (NONE).

### US-08: Pembaruan Status & Prioritas (Teknisi)
*Sebagai Teknisi, saya ingin memperbarui progres tugas dan prioritas aduan agar pelapor mengetahui perkembangan perbaikan secara terperinci.*
- **AC-08-01**: Ketika memulai perbaikan, Teknisi yang ditugaskan dapat memilih prioritas aduan (`LOW`, `MEDIUM`, `HIGH`) dan mengklik tombol "Mulai Bekerja" yang merubah status laporan menjadi `IN PROGRESS`.
- **AC-08-02**: Setelah perbaikan selesai, Teknisi dapat mengklik tombol "Selesai Perbaikan" yang merubah status laporan menjadi `RESOLVED`.

### US-09: Log Audit Perubahan Status (Semua Aktor)
*Sebagai Pengguna, saya ingin melihat log riwayat status laporan agar alur penanganan transparan dan terdokumentasi.*
- **AC-09-01**: Detail laporan menampilkan daftar log aktivitas yang berisi pencatatan perubahan status.
- **AC-09-02**: Log aktivitas mencantumkan format waktu WITA: `[Tanggal WITA] - Status diubah dari [Status Lama] ke [Status Baru] oleh [Peran Aktor]`.

### US-10: Menutup Siklus Laporan (Admin)
*Sebagai Administrator, saya ingin menutup laporan secara resmi setelah perbaikan dikonfirmasi agar statusnya final.*
- **AC-10-01**: Pada detail laporan berstatus `RESOLVED`, Administrator dapat menekan tombol "Tutup Laporan" (Close Report).
- **AC-10-02**: Tindakan tersebut mengubah status menjadi `CLOSED` dan memblokir modifikasi status lebih lanjut (kecuali jika laporan dibuka kembali). Klien pelapor dapat memberikan tombol konfirmasi perbaikan selesai pada detail tiket berstatus `RESOLVED`.
