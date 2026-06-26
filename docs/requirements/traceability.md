# Traceability Matrix - Campus Service Request and Maintenance System

Dokumen ini menghubungkan setiap kebutuhan fungsional (FR) ke User Story, rancangan UI/API, Issue, file kode sumber, berkas pengujian otomatis (Test Case), dan status pengerjaannya untuk menjamin penelusuran (*traceability*).

| ID FR | Deskripsi | User Story | UI & API Design | Issue ID | Kode Sumber | Test Case ID | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **FR-01** | Pembuatan Laporan Baru | US-01 | Form Laporan, POST `/api/requests` | #1 | `App.tsx`, `index.ts` | UT-03, UT-04 | Selesai |
| **FR-02** | Validasi Input Laporan | US-01 | Validasi Form, POST `/api/requests` | #2 | `App.tsx`, `index.ts` | UT-01, UT-02 | Selesai |
| **FR-03** | Daftar Laporan | US-02, US-04 | Tabel List Laporan, GET `/api/requests` | #3 | `App.tsx`, `index.ts` | UT-19, UT-20 | Selesai |
| **FR-04** | Pencarian dan Penyaringan | US-04 | Controls Row, GET `/api/requests` | #4 | `App.tsx`, `index.ts` | UT-19, UT-20 | Selesai |
| **FR-05** | Detail Laporan | US-02 | Detail Panel, GET `/api/requests/:id` | #5 | `App.tsx`, `index.ts` | UT-19, UT-20 | Selesai |
| **FR-06** | Peninjauan Laporan (Review) | US-05 | Admin Actions, PUT `/api/requests/:id/status` | #6 | `App.tsx`, `index.ts` | UT-19, UT-20 | Selesai |
| **FR-07** | Penentuan Prioritas | US-05 | Dropdown Prioritas, PUT `/api/requests/:id/status` | #6 | `App.tsx`, `index.ts` | UT-11, UT-12 | Selesai |
| **FR-08** | Penugasan Teknisi | US-06 | Dropdown Teknisi, PUT `/api/requests/:id/status` | #7 | `App.tsx`, `index.ts` | UT-13 | Selesai |
| **FR-09** | Pembaruan Progres Kerja | US-08 | Tech Buttons, PUT `/api/requests/:id/status` | #8 | `App.tsx`, `index.ts` | UT-17, UT-18 | Selesai |
| **FR-10** | Penambahan Komentar | US-03 | Comment Box, POST `/api/requests/:id/comments` | #9 | `App.tsx`, `index.ts` | UT-17, UT-18 | Selesai |
| **FR-11** | Riwayat Status | US-09 | Timeline, GET `/api/requests/:id` | #9 | `App.tsx`, `index.ts` | UT-19, UT-20 | Selesai |
| **FR-12** | Penutupan Laporan | US-10 | Admin Close Button, PUT `/api/requests/:id/status` | #10 | `App.tsx`, `index.ts` | UT-14, UT-15, UT-16 | Selesai |
