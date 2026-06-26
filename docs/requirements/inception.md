# Inception - Campus Service Request and Maintenance System

Dokumen ini mendefinisikan visi, ruang lingkup, konteks sistem, dan para stakeholder/aktor untuk sistem Campus Service Request and Maintenance System.

## Visi Sistem
Sistem ini dirancang untuk mempermudah civitas akademika (mahasiswa dan dosen) dalam melaporkan kerusakan atau masalah fasilitas kampus. Dengan adanya sistem berbasis web ini, alur pelaporan, verifikasi oleh administrator, penugasan teknisi, hingga penyelesaian masalah dapat terpantau secara transparan dan efisien.

## Ruang Lingkup (Scope)
Sistem mencakup:
- Pembuatan laporan masalah fasilitas (misal: AC tidak dingin, proyektor rusak, ruangan kotor).
- Pelacakan status laporan (dari *Submitted* hingga *Closed*).
- Manajemen penugasan teknisi oleh administrator.
- Kolom komentar/catatan pada setiap laporan untuk komunikasi multi-arah.
- Dashboard visual sederhana untuk melihat ringkasan performa dan laporan fasilitas kampus.

Sistem **tidak mencakup** (out of scope):
- Upload foto/berkas fisik (menghemat kuota penyimpanan gratis Cloudflare).
- Notifikasi email otomatis.
- Sistem inventaris suku cadang (inventory spare parts).
- Sistem manajemen vendor pihak ketiga.

## Konteks Sistem & Aktor
Sistem melibatkan 4 aktor utama dengan wewenang masing-masing:

| Aktor | Peran & Deskripsi | Tindakan yang Dapat Dilakukan |
| :--- | :--- | :--- |
| **Pelapor** (Dosen/Mahasiswa) | Pengguna fasilitas kampus yang melaporkan kendala | - Membuat laporan baru<br>- Melihat daftar & detail laporan miliknya<br>- Menambahkan komentar pada laporan<br>- Memberikan konfirmasi hasil pekerjaan (*Resolved* -> *Closed*) |
| **Administrator** | Staf pengelola operasional fasilitas kampus | - Memeriksa laporan baru<br>- Menentukan kategori & prioritas laporan<br>- Menugaskan teknisi untuk laporan<br>- Menutup laporan jika telah selesai |
| **Teknisi** | Staf teknis yang memperbaiki kerusakan | - Melihat tugas yang didelegasikan padanya<br>- Menerima tugas & memperbarui progres pekerjaan<br>- Menandai pekerjaan sebagai selesai (*Resolved*) |
| **Manajer Fasilitas** | Kepala bagian sarana dan prasarana kampus | - Melihat dashboard statistik kerusakan<br>- Melihat laporan ringkas waktu penyelesaian |
