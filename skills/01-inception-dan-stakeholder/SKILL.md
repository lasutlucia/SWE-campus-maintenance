---
name: Inception dan Stakeholder
description: Memahami masalah, tujuan, stakeholder, scope, asumsi, dan pertanyaan terbuka.
---

# Skill AI: Inception dan Stakeholder

## Tujuan
Memahami masalah, tujuan, stakeholder, scope, asumsi, dan pertanyaan terbuka.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan inception dan stakeholder.

## Input
- Dokumen studi kasus awal atau deskripsi dari pengguna
- Aturan bisnis awal

## Langkah Kerja
1. Analisis studi kasus awal untuk mengidentifikasi tujuan sistem.
2. Petakan aktor-aktor sistem dan hak aksesnya.
3. Definisikan batasan sistem (apa yang masuk scope dan out-of-scope).
4. Catat asumsi dasar.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/requirements/inception.md (Visi, ruang lingkup, aktor)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah semua aktor sudah didefinisikan dengan jelas?
- Apakah batasan sistem (scope) sudah eksplisit?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
