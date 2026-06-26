---
name: Code Review
description: Memeriksa kode dan test.
---

# Skill AI: Code Review

## Tujuan
Memeriksa kode dan test.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan code review.

## Input
- src/App.tsx
- worker/index.ts

## Langkah Kerja
1. Periksa kesesuaian kode dengan standar penulisan (ESLint/TypeScript).
2. Pastikan tidak ada hardcoded secret/token di repositori.
3. Evaluasi efisiensi kueri database.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/testing/code_review.md (Hasil pemeriksaan baris kode)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah kode bebas dari peringatan linter dan rahasia sensitif?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
