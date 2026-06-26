---
name: Specification
description: Membuat functional requirement, non-functional requirement, user story, dan acceptance criteria.
---

# Skill AI: Specification

## Tujuan
Membuat functional requirement, non-functional requirement, user story, dan acceptance criteria.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan specification.

## Input
- docs/requirements/elicitation.md

## Langkah Kerja
1. Definisikan minimal 12 Functional Requirements (FR).
2. Definisikan minimal 6 Non-functional Requirements (NFR).
3. Definisikan minimal 5 Business Rules (BR).
4. Buat minimal 10 User Stories (US) dengan minimal 2 Acceptance Criteria (AC) untuk masing-masing.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/requirements/specification.md (FR, NFR, BR, User Stories)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah jumlah minimum FR (12), NFR (6), BR (5), dan US (10) terpenuhi?
- Apakah setiap US memiliki minimal 2 AC?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
