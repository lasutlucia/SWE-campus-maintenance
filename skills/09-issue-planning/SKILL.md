---
name: Issue Planning
description: Mengubah requirement menjadi GitHub Issues.
---

# Skill AI: Issue Planning

## Tujuan
Mengubah requirement menjadi GitHub Issues.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan issue planning.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Ubah setiap fitur utama/FR menjadi minimal 10 GitHub Issues terpisah.
2. Lengkapi detail isu dengan mengaitkan ID requirement (FR/US) dan Acceptance Criteria.
5. Berhenti jika informasi tidak cukup.

## Output
- Rencana pengerjaan / daftar isu GitHub (misal di docs/requirements/issues.md)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah ada minimal 10 issues yang terdaftar dan terpetakan ke FR/US?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
