---
name: Elicitation
description: Menyusun pertanyaan dan menemukan kebutuhan stakeholder.
---

# Skill AI: Elicitation

## Tujuan
Menyusun pertanyaan dan menemukan kebutuhan stakeholder.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan elicitation.

## Input
- docs/requirements/inception.md
- Feedback atau catatan wawancara awal

## Langkah Kerja
1. Rancang pertanyaan kunci untuk masing-masing aktor.
2. Identifikasi keluhan operasional saat ini.
3. Petakan kebutuhan fungsional tingkat tinggi dari masing-masing aktor.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/requirements/elicitation.md (Daftar keluhan dan kebutuhan stakeholder)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah keluhan dari setiap aktor sudah terwakili oleh solusi kebutuhan?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
