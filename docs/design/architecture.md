# System Architecture - Campus Service Request and Maintenance System

Dokumen ini mendeskripsikan arsitektur sistem dari Campus Service Request and Maintenance System yang dibangun menggunakan teknologi serverless Cloudflare.

## Diagram Arsitektur Tingkat Tinggi (High-Level Architecture)

Aplikasi ini menggunakan model **Single Page Application (SPA) Monorepo** di mana frontend React dan backend API Workers berada dalam satu folder proyek dan dideploy ke infrastruktur global Cloudflare.

```
       ┌─────────────────────────────────────────────────────────┐
       │                   Browser Pengguna                      │
       │  (Frontend React SPA, dimuat via Cloudflare Assets)     │
       └───────────────────────────┬─────────────────────────────┘
                                   │
                               HTTP Requests
                                   │
                                   ▼
       ┌─────────────────────────────────────────────────────────┐
       │                Cloudflare Workers API                   │
       │       (Backend/Routing di worker/index.ts)              │
       └───────────────────────────┬─────────────────────────────┘
                                   │
                           env.DB (SQL Query)
                                   │
                                   ▼
       ┌─────────────────────────────────────────────────────────┐
       │                Cloudflare D1 Database                   │
       │          (Penyimpanan Relasional SQLite)                │
       └─────────────────────────────────────────────────────────┘
```

## Komponen Utama Arsitektur

### 1. Frontend: React + TypeScript + Vite
- Ditempatkan di folder `src/`.
- Merupakan antarmuka pengguna berbasis komponen. Halaman utama berada di [App.tsx](file:///C:/Users/ASUS/.gemini/antigravity/scratch/campus-maintenance/src/App.tsx) dan styling visual ditangani oleh [App.css](file:///C:/Users/ASUS/.gemini/antigravity/scratch/campus-maintenance/src/App.css).
- Berkomunikasi secara asinkron dengan backend Workers menggunakan HTTP `fetch` API.

### 2. Backend: Cloudflare Workers
- Ditempatkan di folder `worker/`.
- Entry point berada di [index.ts](file:///C:/Users/ASUS/.gemini/antigravity/scratch/campus-maintenance/worker/index.ts) yang mengimplementasikan `ExportedHandler<Env>`.
- Bertindak sebagai REST API gateway yang melakukan:
  - Routing berdasarkan request URL path (misal: `/api/requests`).
  - Validasi input payload (misal: panjang deskripsi laporan minimal 20 karakter).
  - Eksekusi query database SQL menggunakan API binding D1 (`env.DB.prepare(...)`).
  - Pengembalian data berformat JSON dengan kode status HTTP yang tepat (200, 201, 404, 422, 500).

### 3. Database: Cloudflare D1
- Ditempatkan di folder `database/` untuk berkas migrasi SQL.
- Merupakan database relasional SQLite serverless yang dikelola oleh Cloudflare.
- Terikat (*bind*) ke runtime Worker lewat variabel penampung `env.DB` seperti yang dikonfigurasikan pada `wrangler.jsonc`.
