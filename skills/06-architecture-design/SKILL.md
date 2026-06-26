---
name: Architecture Design
description: Menentukan bagian utama aplikasi.
---

# Skill AI: Architecture Design

## Tujuan
Menentukan bagian utama aplikasi.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Architecture Design**.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Rancang arsitektur monorepo Full-stack (React + Cloudflare Workers + D1 Database).
2. Buat diagram arsitektur tingkat tinggi (High-level Architecture) menggunakan format teks atau diagram mermaid.
3. Deskripsikan peran dan tanggung jawab masing-masing folder utama (`src/`, `worker/`, `database/`, `tests/`).
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/design/architecture.md (Deskripsi Arsitektur Monorepo)

## Aturan
- Arsitektur harus dirancang agar optimal berjalan pada platform serverless Cloudflare Workers gratis.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah arsitektur monorepo digambarkan dengan jelas?
- Apakah diagram mermaid atau diagram teks mudah dibaca dan dipahami?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Dokumen requirements tidak lengkap atau tidak ada.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
