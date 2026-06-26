---
name: Automated Testing
description: Membuat unit test dan integration test.
---

# Skill AI: Automated Testing

## Tujuan
Membuat unit test dan integration test.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Automated Testing**.

## Input
- docs/testing/test_plan.md
- tests/

## Langkah Kerja
1. Buat minimal 20 automated tests menggunakan Vitest.
2. Pisahkan konfigurasi testing ke vitest.config.ts agar terbebas dari intervensi plugin Cloudflare.
3. Jalankan pengujian otomatis dan pastikan seluruh test berstatus PASS.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- tests/unit/request-validation.test.ts
- tests/unit/business-rules.test.ts

## Aturan
- Semua test case wajib lulus (100% PASS).
- Skenario pengujian harus mencakup pembuktian kegagalan (negative testing) dan keberhasilan (positive testing).
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah ada minimal 20 test cases?
- Apakah tes berjalan sukses tanpa error saat dijalankan dengan `npm test`?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Test runner Vitest belum terinstal atau test plan tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
