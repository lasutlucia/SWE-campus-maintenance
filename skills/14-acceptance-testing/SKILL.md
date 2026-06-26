---
name: Acceptance Testing
description: Menguji alur lengkap pengguna.
---

# Skill AI: Acceptance Testing

## Tujuan
Menguji alur lengkap pengguna.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan acceptance testing.

## Input
- src/App.tsx
- tests/unit/

## Langkah Kerja
1. Lakukan pengujian manual end-to-end dari keempat peran aktor.
2. Verifikasi persistensi data setelah refresh halaman browser.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/testing/acceptance_test_results.md (Hasil uji terima)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah siklus hidup laporan (Submitted -> Closed) berhasil dijalankan tanpa error?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
