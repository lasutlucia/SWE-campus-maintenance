---
name: Prioritization
description: Menentukan prioritas dan menyelesaikan konflik kebutuhan.
---

# Skill AI: Prioritization

## Tujuan
Menentukan prioritas dan menyelesaikan konflik kebutuhan.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan prioritization.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Klasifikasikan setiap kebutuhan ke dalam kategori Must Have, Should Have, Could Have, atau Won't Have.
2. Selesaikan konflik kepentingan antar aktor.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/requirements/prioritization.md (Prioritas kebutuhan MoSCoW)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah ada kesepakatan jelas mengenai fitur krusial yang harus dirilis pertama kali?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
