---
name: Prioritization
description: Menentukan prioritas dan menyelesaikan konflik kebutuhan.
---

# Skill AI: Prioritization

## Tujuan
Menentukan prioritas dan menyelesaikan konflik kebutuhan.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Prioritization**.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Analisis seluruh daftar FR dan US dari dokumen spesifikasi.
2. Terapkan metode MoSCoW (Must, Should, Could, Won't Have) untuk menyortir tingkat urgensi pengerjaan.
3. Berikan justifikasi logis mengapa suatu fitur dikategorikan ke dalam prioritas tertentu.
4. Dokumentasikan hasil prioritisasi secara terstruktur.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/requirements/prioritization.md (Prioritas kebutuhan MoSCoW)

## Aturan
- Semua fitur wajib di spesifikasi tugas harus berada di kategori Must atau Should.
- Fitur tidak wajib (seperti upload foto atau login Google) harus dikategorikan di Could atau Won't.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah ada kesepakatan jelas mengenai fitur krusial yang harus dirilis pertama kali?
- Apakah terdapat penjelasan/justifikasi logis untuk setiap klasifikasi?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Dokumen spesifikasi kebutuhan specification.md tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
