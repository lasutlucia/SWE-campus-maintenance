---
name: Database dan API Design
description: Membuat tabel database dan endpoint API.
---

# Skill AI: Database dan API Design

## Tujuan
Membuat tabel database dan endpoint API.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Database dan API Design**.

## Input
- docs/design/architecture.md
- docs/requirements/specification.md

## Langkah Kerja
1. Rancang skema database relasional SQLite D1 (tabel service_requests, comments, status_history) lengkap dengan primary key, foreign key, dan default value.
2. Definisikan spesifikasi REST API (GET, POST, PUT) lengkap dengan format JSON request, response body, HTTP status code, dan header simulasi role switcher (`X-User-Role`, `X-User-Name`).
3. Tulis file migrasi SQL pertama di folder database/migrations/.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/design/database.md (Rancangan Skema SQL Relasional)
- docs/design/api.md (Spesifikasi REST API Endpoints)
- database/migrations/0001_initial.sql (Berkas Migrasi SQL D1)

## Aturan
- Database harus relasional dan dinormalisasi secara logis.
- Desain API harus mendukung semua wewenang aktor yang telah didefinisikan.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah skema database mendukung penelusuran riwayat status?
- Apakah format API lengkap dengan kode status HTTP (200, 201, 422, 404)?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Dokumen arsitektur atau spesifikasi tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
