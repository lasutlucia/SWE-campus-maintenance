---
name: Test Planning
description: Membuat rencana pengujian.
---

# Skill AI: Test Planning

## Tujuan
Membuat rencana pengujian.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan test planning.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Rancang skenario pengujian untuk setiap Acceptance Criteria.
2. Tentukan metode pengujian (unit, integration, acceptance).
5. Berhenti jika informasi tidak cukup.

## Output
- docs/testing/test_plan.md (Skenario pengujian)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah rencana pengujian mencakup verifikasi untuk semua aktor?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
