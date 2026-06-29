# REST API Specification - Campus Service Request and Maintenance System

Dokumen ini mendefinisikan antarmuka API (endpoints) yang dilayani oleh Cloudflare Workers untuk berkomunikasi dengan frontend React.

## Simulasi Identitas Aktor
Untuk mendukung *multi-role switcher* tanpa sistem login berbayar, setiap request modifikasi data (tambah komentar, ubah status) harus menyertakan HTTP request headers berikut:
- `X-User-Role`: Peran aktif aktor pengirim (`Pelapor`, `Administrator`, `Teknisi`).
- `X-User-Name`: Nama pengguna pengirim (misal: `Rian (Mahasiswa)`, `Admin`, `Budi (Teknisi)`).

---

## Daftar Endpoints API

### 1. Check Health Status
Memastikan API berjalan dengan baik.
- **Method**: `GET`
- **URL**: `/api/health`
- **Response**: `200 OK`
  ```json
  {
    "status": "ok"
  }
  ```

### 2. Dapatkan Semua Laporan
Mengambil daftar laporan. Mendukung filter pencarian opsional.
- **Method**: `GET`
- **URL**: `/api/requests`
- **Query Parameters (Optional)**:
  - `search`: Pencarian teks pada judul atau lokasi.
  - `status`: Filter berdasarkan status (misal: `SUBMITTED`, `ASSIGNED`).
  - `category`: Filter berdasarkan kategori (misal: `AC`, `Listrik`).
  - `technician`: Filter berdasarkan nama teknisi yang ditugaskan (untuk halaman Teknisi).
- **Response**: `200 OK`
  ```json
  {
    "data": [
      {
        "id": "2ea7bf18-091a-4d2c-986c-cf0b9f71c4c1",
        "request_number": "CSR-1719391039",
        "title": "AC Kelas B302 Tidak Dingin",
        "description": "AC mengeluarkan udara hangat sejak pagi hari, ruang kelas menjadi sangat panas.",
        "location": "Gedung B, Ruang 302",
        "category": "AC",
        "priority": "MEDIUM",
        "status": "SUBMITTED",
        "assigned_technician": null,
        "created_at": "2026-06-26T12:00:00Z"
      }
    ]
  }
  ```

### 3. Buat Laporan Baru
Mengirim pengaduan fasilitas baru.
- **Method**: `POST`
- **URL**: `/api/requests`
- **Request Body**:
  ```json
  {
    "title": "Proyektor Kelas A101 Mati",
    "description": "Proyektor berkedip merah dan tidak mau menyala meskipun kabel HDMI sudah diganti.",
    "location": "Gedung A, Ruang 101",
    "category": "Listrik"
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "id": "9a930fd1-512c-47bc-841f-846104bc18e0",
    "request_number": "CSR-1719391500",
    "status": "SUBMITTED"
  }
  ```
- **Errors**:
  - `422 Unprocessable Entity`: Field tidak lengkap atau deskripsi kurang dari 20 karakter.
    ```json
    { "error": "Deskripsi minimal 20 karakter." }
    ```

### 4. Dapatkan Detail Satu Laporan
Mengambil data detail keluhan beserta seluruh komentar dan log riwayat statusnya.
- **Method**: `GET`
- **URL**: `/api/requests/:id`
- **Response**: `200 OK`
  ```json
  {
    "data": {
      "request": {
        "id": "2ea7bf18-091a-4d2c-986c-cf0b9f71c4c1",
        "request_number": "CSR-1719391039",
        "title": "AC Kelas B302 Tidak Dingin",
        "description": "AC mengeluarkan udara hangat sejak pagi hari, ruang kelas menjadi sangat panas.",
        "location": "Gedung B, Ruang 302",
        "category": "AC",
        "priority": "MEDIUM",
        "status": "ASSIGNED",
        "assigned_technician": "Budi (Teknisi)",
        "created_at": "2026-06-26T12:00:00Z"
      },
      "comments": [
        {
          "id": "f8a7e0da-bf01-447a-8b83-d9d150cbfe8d",
          "author_name": "Rian (Mahasiswa)",
          "author_role": "Pelapor",
          "content": "Mohon segera diperbaiki, besok pagi jam 8 ada ujian di kelas ini.",
          "created_at": "2026-06-26T12:15:00Z"
        }
      ],
      "status_history": [
        {
          "id": "76ba3ef2-01fa-40ea-9bb1-39589dbe39f1",
          "old_status": "SUBMITTED",
          "new_status": "UNDER REVIEW",
          "changed_by_role": "Administrator",
          "changed_by_name": "Admin",
          "created_at": "2026-06-26T12:05:00Z"
        },
        {
          "id": "a908de1f-ffda-411a-8bb8-12c8e9fdb78e",
          "old_status": "UNDER REVIEW",
          "new_status": "ASSIGNED",
          "changed_by_role": "Administrator",
          "changed_by_name": "Admin",
          "created_at": "2026-06-26T12:10:00Z"
        }
      ]
    }
  }
  ```
- **Errors**:
  - `404 Not Found`: Laporan dengan ID tersebut tidak ditemukan.

### 5. Tambahkan Komentar
Menulis pesan atau tanggapan pada laporan.
- **Method**: `POST`
- **URL**: `/api/requests/:id/comments`
- **Headers**:
  - `X-User-Role`: `Pelapor`
  - `X-User-Name`: `Rian (Mahasiswa)`
- **Request Body**:
  ```json
  {
    "content": "Baik, kami tunggu kehadirannya di ruang kelas."
  }
  ```
- **Response**: `201 Created`
  ```json
  {
    "id": "1b08fe3c-418f-4ba3-ab01-d8ea8f7d983e",
    "request_id": "2ea7bf18-091a-4d2c-986c-cf0b9f71c4c1",
    "author_name": "Rian (Mahasiswa)",
    "author_role": "Pelapor",
    "content": "Baik, kami tunggu kehadirannya di ruang kelas.",
    "created_at": "2026-06-26T12:20:00Z"
  }
  ```

### 6. Perbarui Status dan Detail Laporan
Memperbarui status, prioritas, kategori, atau penugasan teknisi. Endpoint ini juga otomatis mencatat data ke tabel `status_history`.
- **Method**: `PUT`
- **URL**: `/api/requests/:id/status`
- **Headers**:
  - `X-User-Role`: `Administrator`
  - `X-User-Name`: `Admin`
- **Request Body**:
  ```json
  {
    "status": "ASSIGNED",
    "priority": "HIGH",
    "category": "AC",
    "assigned_technician": "Budi (Teknisi)"
  }
  ```
- **Response**: `200 OK`
  ```json
  {
    "message": "Status berhasil diperbarui.",
    "status": "ASSIGNED",
    "priority": "HIGH",
    "assigned_technician": "Budi (Teknisi)"
  }
  ```
- **Errors**:
  - `400 Bad Request`: Transaksi status melanggar aturan bisnis (Business Rules).
