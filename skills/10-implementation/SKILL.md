---
name: Implementation
description: Mengerjakan satu issue menjadi kode.
---

# Skill AI: Implementation

## Tujuan
Mengerjakan satu issue menjadi kode.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Implementation**.

## Input
- docs/design/database.md
- docs/design/api.md
- docs/requirements/github_issues.md

## Langkah Kerja
1. Implementasikan router API di worker/index.ts untuk memproses query database D1 relasional.
2. Rancang antarmuka frontend React di src/App.tsx dengan panel role switcher, form input laporan, filter pencarian, log riwayat status, dan kolom komentar.
3. Hias visual menggunakan CSS premium di src/App.css dengan warna gelap modern (glassmorphism), badge status berkilau, dan micro-animations.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- src/App.tsx (Frontend React)
- worker/index.ts (Backend Workers Router)
- src/App.css (Vanilla CSS Premium)

## Aturan
- Tulis kode yang aman dari SQL Injection (selalu gunakan parameter binding D1).
- Hindari placeholder; semua data simulasi harus terhubung ke database.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah aplikasi dapat dibangun tanpa error (`npm run build` sukses)?
- Apakah visual antarmuka terlihat premium dan rapi?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Berkas desain database atau API tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
