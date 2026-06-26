---
name: Validation dan Change
description: Memeriksa requirement dan menganalisis perubahan.
---

# Skill AI: Validation dan Change

## Tujuan
Memeriksa requirement dan menganalisis perubahan.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Validation dan Change**.

## Input
- docs/requirements/specification.md
- docs/requirements/prioritization.md

## Langkah Kerja
1. Lakukan verifikasi alur transisi status laporan (Submitted -> Under Review -> Assigned -> In Progress -> Resolved -> Closed).
2. Pastikan tidak ada alur transisi status yang mengalami jalan buntu (dead-end) atau tidak berizin.
3. Rancang draf Change Request (CR) minimal 1 kasus untuk mendokumentasikan analisis dampak perubahan terhadap kode, database, dan testing.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/requirements/validation.md (Verifikasi Alur Status)
- docs/requirements/change_request.md (Draf Analisis Perubahan)

## Aturan
- Alur transisi status harus digambarkan secara visual atau kronologis yang logis.
- Dokumen Change Request harus memiliki ID (misal CR-01) dan status persetujuan.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah transisi status dari awal hingga akhir digambarkan secara logis?
- Apakah analisis dampak pada change_request.md mencantumkan pengaruhnya terhadap kode & test?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- File specification.md tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
