---
name: Issue Planning
description: Mengubah requirement menjadi GitHub Issues.
---

# Skill AI: Issue Planning

## Tujuan
Mengubah requirement menjadi GitHub Issues.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Issue Planning**.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Analisis seluruh daftar FR dan User Stories.
2. Pecah pengerjaan proyek menjadi minimal 10 GitHub Issues terpisah.
3. Gunakan template issue standar: Judul, Deskripsi, Kaitan FR/US, Kriteria Penerimaan, Daftar Tugas, dan Kriteria Selesai.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/requirements/github_issues.md (Daftar 10 GitHub Issues)

## Aturan
- Setiap issue wajib dikaitkan dengan ID requirement (FR-XX atau US-XX) untuk menjaga traceability.
- Urutan pengerjaan harus logis (basis data & backend dahulu sebelum frontend).
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah ada minimal 10 issues terdaftar?
- Apakah setiap issue mengikuti format template di Bagian III PDF?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Dokumen specification.md tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
