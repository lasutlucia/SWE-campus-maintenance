# Database Schema Design - Campus Service Request and Maintenance System

Dokumen ini menjelaskan rancangan skema database relasional SQLite untuk Cloudflare D1 yang digunakan dalam sistem ini.

## Skema Relasi Antar Tabel (Entity-Relationship Diagram)

```
  ┌──────────────────────┐
  │   service_requests   │
  ├──────────────────────┤
  │ id (PK)              │◄──┐
  │ request_number (U)   │   │ (1 to Many)
  │ title                │   │
  │ description          │   │
  │ location             │   │
  │ category             │   │
  │ priority             │   │
  │ status               │   │
  │ assigned_technician  │   │
  │ created_at           │   │
  └──────────────────────┘   │
              │              │
              │ (1 to Many)  │
              ▼              │
        ┌───────────┐  ┌──────────────┐
        │ comments  │  │status_history│
        ├───────────┤  ├──────────────┤
        │ id (PK)   │  │ id (PK)      │
        │ request_id│  │ request_id   │
        │author_name│  │ old_status   │
        │author_role│  │ new_status   │
        │ content   │  │changed_by_role
        │ created_at│  │changed_by_name
        └───────────┘  │ created_at   │
                       └──────────────┘
```

---

## Spesifikasi Tabel

### 1. Tabel `service_requests`
Menyimpan data keluhan utama yang diajukan oleh pengguna.

| Nama Kolom | Tipe Data | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| `id` | TEXT | PRIMARY KEY | ID unik acak (UUID). |
| `request_number` | TEXT | NOT NULL, UNIQUE | Nomor pelaporan format unik (misal: `CSR-1719391039`). |
| `title` | TEXT | NOT NULL | Judul ringkas keluhan. |
| `description` | TEXT | NOT NULL | Deskripsi detail keluhan (minimal 20 karakter). |
| `location` | TEXT | NOT NULL | Lokasi kejadian (nama gedung, kelas, lantai). |
| `category` | TEXT | NOT NULL | Kategori masalah (`AC`, `Listrik`, `Internet`, `Kebersihan`, `Sipil`). |
| `priority` | TEXT | NOT NULL | Prioritas laporan (`LOW`, `MEDIUM`, `HIGH`). Default: `MEDIUM`. |
| `status` | TEXT | NOT NULL | Status alur perbaikan (`SUBMITTED`, `UNDER REVIEW`, `ASSIGNED`, `IN PROGRESS`, `RESOLVED`, `CLOSED`). Default: `SUBMITTED`. |
| `assigned_technician` | TEXT | DEFAULT NULL | Nama teknisi yang ditugaskan untuk menangani perbaikan. |
| `created_at` | TEXT | NOT NULL | Tanggal dan waktu pembuatan entri. Default: `CURRENT_TIMESTAMP`. |

### 2. Tabel `comments`
Menyimpan komentar/catatan yang ditambahkan oleh aktor di halaman detail laporan.

| Nama Kolom | Tipe Data | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| `id` | TEXT | PRIMARY KEY | ID unik acak (UUID). |
| `request_id` | TEXT | NOT NULL | Foreign Key merujuk ke `service_requests(id)` dengan efek `ON DELETE CASCADE`. |
| `author_name` | TEXT | NOT NULL | Nama pengguna yang mengirim komentar. |
| `author_role` | TEXT | NOT NULL | Peran pengirim (`Pelapor`, `Administrator`, `Teknisi`). |
| `content` | TEXT | NOT NULL | Isi komentar/catatan tertulis. |
| `created_at` | TEXT | NOT NULL | Tanggal dan waktu komentar dibuat. Default: `CURRENT_TIMESTAMP`. |

### 3. Tabel `status_history`
Mencatat setiap peristiwa perubahan status laporan untuk kebutuhan log audit dan penelusuran.

| Nama Kolom | Tipe Data | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| `id` | TEXT | PRIMARY KEY | ID unik acak (UUID). |
| `request_id` | TEXT | NOT NULL | Foreign Key merujuk ke `service_requests(id)` dengan efek `ON DELETE CASCADE`. |
| `old_status` | TEXT | NOT NULL | Status sebelum perubahan dilakukan (misal: `SUBMITTED`). |
| `new_status` | TEXT | NOT NULL | Status sesudah perubahan dilakukan (misal: `UNDER REVIEW`). |
| `changed_by_role` | TEXT | NOT NULL | Peran aktor yang melakukan perubahan. |
| `changed_by_name` | TEXT | NOT NULL | Nama aktor yang melakukan perubahan. |
| `created_at` | TEXT | NOT NULL | Tanggal dan waktu status diperbarui. Default: `CURRENT_TIMESTAMP`. |
