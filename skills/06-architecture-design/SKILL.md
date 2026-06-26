---
name: Architecture Design
description: Menentukan bagian utama aplikasi.
---

# Skill AI: Architecture Design

## Tujuan
Menentukan bagian utama aplikasi.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan architecture design.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Rancang arsitektur monorepo Full-stack (React + Workers + D1).
2. Definisikan struktur folder proyek dan tanggung jawab masing-masing komponen.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/design/architecture.md (Deskripsi arsitektur monorepo)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah pembagian struktur monorepo sudah memisahkan frontend, backend, dan DB?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
