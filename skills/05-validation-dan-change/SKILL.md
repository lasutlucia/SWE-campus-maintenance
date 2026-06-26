---
name: Validation dan Change
description: Memeriksa requirement dan menganalisis perubahan.
---

# Skill AI: Validation dan Change

## Tujuan
Memeriksa requirement dan menganalisis perubahan.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan validation dan change.

## Input
- docs/requirements/specification.md
- Permintaan perubahan (Change Request) jika ada

## Langkah Kerja
1. Verifikasi alur transisi status laporan agar tidak ada kondisi buntu (dead-end).
2. Analisis dampak perubahan kebutuhan (CR) terhadap kode, database, dan testing.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/requirements/validation.md (Verifikasi alur logika status)
- docs/requirements/change_request.md (Draf CR)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah alur transisi status sudah logis dari Submitted hingga Closed?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
