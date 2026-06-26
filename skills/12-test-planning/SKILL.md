---
name: Test Planning
description: Membuat rencana pengujian.
---

# Skill AI: Test Planning

## Tujuan
Membuat rencana pengujian.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Test Planning**.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Analisis seluruh Acceptance Criteria dari User Stories.
2. Rancang skenario pengujian unit otomatis untuk mencakup validasi input dan aturan bisnis.
3. Rancang skenario pengujian manual terima (Acceptance Test) untuk menguji alur transisi status oleh semua peran aktor.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/testing/test_plan.md (Skenario Pengujian Unit dan Manual)

## Aturan
- Rencana pengujian harus terpetakan ke Acceptance Criteria spesifikasi.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah rencana pengujian mencakup minimal 20 skenario unit test?
- Apakah alur pengujian manual end-to-end terpetakan dengan jelas?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Spesifikasi kebutuhan tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
