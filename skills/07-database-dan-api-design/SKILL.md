---
name: Database dan API Design
description: Membuat tabel database dan endpoint API.
---

# Skill AI: Database dan API Design

## Tujuan
Membuat tabel database dan endpoint API.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan database dan api design.

## Input
- docs/design/architecture.md
- docs/requirements/specification.md

## Langkah Kerja
1. Rancang skema database relasional (tabel service_requests, comments, status_history).
2. Tentukan primary key, foreign key, dan default value.
3. Rancang endpoint REST API lengkap dengan request/response payload.
5. Berhenti jika informasi tidak cukup.

## Output
- docs/design/database.md (Rancangan tabel SQL)
- docs/design/api.md (Spesifikasi endpoints)
- database/migrations/0001_initial.sql (Skema SQLite D1)

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah skema database mendukung penyimpanan riwayat status dan komentar?
- Apakah rancangan API memuat simulasi role switcher?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
