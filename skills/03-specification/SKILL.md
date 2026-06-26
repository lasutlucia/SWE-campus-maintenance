---
name: Specification
description: Membuat functional requirement, non-functional requirement, user story, dan acceptance criteria.
---

# Skill AI: Specification

## Tujuan
Membuat functional requirement, non-functional requirement, user story, dan acceptance criteria.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Specification**.

## Input
- docs/requirements/elicitation.md

## Langkah Kerja
1. Terjemahkan kebutuhan stakeholder menjadi minimal 12 Functional Requirements (FR-01 s.d FR-12) yang spesifik dan terukur.
2. Tentukan minimal 6 Non-functional Requirements (NFR-01 s.d NFR-06) mencakup kinerja, keamanan, keandalan, kebergunaan, dll.
3. Susun minimal 5 Business Rules (BR-01 s.d BR-05) yang mengatur alur logika bisnis (misal status awal, hak akses role).
4. Buat minimal 10 User Stories (US-01 s.d US-10) lengkap dengan minimal 2 Acceptance Criteria (AC) untuk setiap story.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/requirements/specification.md (Daftar FR, NFR, BR, dan User Stories)

## Aturan
- Pastikan setiap FR, NFR, BR, dan US memiliki ID unik yang terurut.
- Acceptance criteria harus terukur dan dapat diuji secara biner (Lulus/Gagal).
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah jumlah minimal FR (12), NFR (6), BR (5), dan US (10) terpenuhi?
- Apakah setiap User Story memiliki minimal 2 Acceptance Criteria?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Dokumen elicitation.md tidak ditemukan atau kebutuhan stakeholder tidak terdefinisi.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
