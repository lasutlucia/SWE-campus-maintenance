---
name: Automated Testing
description: Membuat unit test dan integration test.
---

# Skill AI: Automated Testing

## Tujuan
Membuat unit test dan integration test.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan automated testing.

## Input
- docs/testing/test_plan.md

## Langkah Kerja
1. Buat minimal 20 automated tests menggunakan Vitest.
2. Uji validasi input deskripsi dan logika perubahan status di Workers.
5. Berhenti jika informasi tidak cukup.

## Output
- tests/unit/ (File unit tests)
- tests/integration/ (File integration tests)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah jumlah minimal 20 automated tests terpenuhi dan semuanya PASS?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
