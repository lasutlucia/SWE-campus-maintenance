---
name: Implementation
description: Mengerjakan satu issue menjadi kode.
---

# Skill AI: Implementation

## Tujuan
Mengerjakan satu issue menjadi kode.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan implementation.

## Input
- docs/design/database.md
- docs/design/api.md

## Langkah Kerja
1. Tulis kode backend Worker untuk melayani routes API relasional.
2. Tulis kode React untuk merender form laporan, list, filter, detail, riwayat status, dan kolom komentar.
3. Terapkan visual estetis dengan CSS premium (dark mode sleek, micro-animations, layout grid).
5. Berhenti jika informasi tidak cukup.

## Output
- src/App.tsx (Frontend React)
- worker/index.ts (Backend Worker API)
- src/App.css (Aestetika Premium CSS)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah frontend terintegrasi penuh dengan backend Workers dan database lokal D1?
- Apakah visual antarmuka terlihat premium dan responsif?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
