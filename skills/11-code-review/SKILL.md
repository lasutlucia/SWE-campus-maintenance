---
name: Code Review
description: Memeriksa kode dan test.
---

# Skill AI: Code Review

## Tujuan
Memeriksa kode dan test.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Code Review**.

## Input
- src/App.tsx
- worker/index.ts
- tests/unit/

## Langkah Kerja
1. Periksa baris kode untuk mendeteksi kesalahan TypeScript atau potensi bug logika.
2. Verifikasi keamanan: Pastikan tidak ada token, password, atau credential sensitif yang ter-hardcode.
3. Pastikan kode mengikuti prinsip pemisahan tanggung jawab (separation of concerns).
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/testing/code_review.md atau catatan review di PR

## Aturan
- Hasil code review harus objektif dan mencantumkan daftar perbaikan jika ada.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah kode bersih dari secret/token?
- Apakah kode TypeScript bebas dari kompilasi error?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Kode sumber aplikasi tidak lengkap atau tidak ada.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
