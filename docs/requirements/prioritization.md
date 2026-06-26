# Requirements Prioritization - Campus Service Request and Maintenance System

Dokumen ini mendokumentasikan metode prioritisasi kebutuhan untuk memastikan fitur-fitur kritis diselesaikan terlebih dahulu berdasarkan metode **MoSCoW**.

## Metode MoSCoW

### 1. Must Have (Kritis untuk Kelayakan Minimum)
Fitur-fitur yang wajib ada agar sistem dapat berfungsi sebagai aplikasi manajemen pemeliharaan dasar. Tanpa fitur ini, sistem tidak dapat dirilis.

- **FR-01 (Pembuatan Laporan Baru)**: Pelapor harus bisa mendokumentasikan kendala fasilitas kampus.
- **FR-02 (Validasi Input Laporan)**: Mencegah data sampah (seperti laporan kosong atau deskripsi yang tidak bermakna).
- **FR-03 (Daftar Laporan)**: Semua pengguna harus bisa melihat daftar laporan yang masuk.
- **FR-05 (Detail Laporan)**: Diperlukan untuk melihat penjelasan lengkap, riwayat, dan melakukan tindakan lanjut.
- **FR-06, FR-07, FR-08 (Alur Administrator)**: Admin wajib bisa meninjau, menentukan tingkat prioritas, dan menugaskan teknisi spesifik.
- **FR-09 (Alur Pembaruan Teknisi)**: Teknisi wajib bisa mengubah status pekerjaan ke `In Progress` dan `Resolved`.
- **FR-11 (Pencatatan Riwayat Status)**: Audit log perubahan status untuk transparansi pengerjaan.
- **FR-12 (Penutupan Laporan)**: Admin harus bisa menutup laporan (`Closed`) setelah selesai dikonfirmasi.

### 2. Should Have (Penting tapi Tidak Kritis untuk Rilis Awal)
Fitur-fitur berprioritas tinggi yang sangat meningkatkan efisiensi operasional harian.

- **FR-04 (Pencarian dan Penyaringan Laporan)**: Mempermudah admin dan teknisi menyortir ratusan laporan masuk. Karena skala proyek ini, fitur ini dijadikan wajib (fitur wajib di spesifikasi tugas).
- **FR-10 (Penambahan Komentar/Catatan)**: Penting untuk komunikasi multi-arah (misal: Pelapor memberi penjelasan tambahan, Teknisi melaporkan kendala suku cadang). Diimplementasikan pada rilis awal.

### 3. Could Have (Fungsionalitas Tambahan jika Waktu Tersedia)
Fitur opsional yang meningkatkan pengalaman pengguna tetapi dapat ditunda ke rilis berikutnya (Fitur Tidak Wajib pada spesifikasi tugas).

- **Upload Foto**: Melampirkan gambar bukti kerusakan (dikecualikan karena kuota object storage/layanan berbayar Cloudflare).
- **Email Notification**: Mengirim notifikasi email otomatis ke pelapor/teknisi jika status berubah.
- **Login Akun Google**: Otentikasi formal SSO Kampus.
- **QR Code Ruangan**: Penempelan QR code pada fasilitas fisik sehingga pelapor tinggal memindai untuk melapor.

### 4. Won't Have (Tidak Direncanakan untuk Rilis Ini)
Fitur di luar lingkup yang direncanakan untuk iterasi masa depan.

- **AI Penentu Kategori Otomatis**: Klasifikasi keluhan otomatis menggunakan LLM.
- **Inventory Spare Parts**: Pencatatan ketersediaan stok suku cadang di gudang kampus.
- **Vendor Management**: Integrasi dengan penyedia jasa perbaikan luar kampus.
