---
name: Acceptance Testing
description: Menguji alur lengkap pengguna.
---

# Skill AI: Acceptance Testing

## Tujuan
Menguji alur lengkap pengguna.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Acceptance Testing**.

## Input
- src/App.tsx
- docs/testing/test_plan.md

## Langkah Kerja
1. Jalankan aplikasi secara lokal.
2. Lakukan simulasi manual E2E: Pelapor membuat aduan -> Admin merating prioritas & assign teknisi -> Teknisi memproses kerja & menyelesaikannya -> Pelapor memberi komentar konfirmasi -> Admin menutup tiket.
3. Verifikasi persistensi data dengan melakukan refresh browser di setiap tahapan.
4. Catat seluruh hasil pengujian secara rinci.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/testing/acceptance_test_results.md (Hasil Pengujian Terima)

## Aturan
- Setiap tahapan alur harus tervalidasi sukses (PASS).
- Data harus tetap utuh setelah browser direfresh.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah semua langkah pengujian manual berstatus PASS?
- Apakah log aktivitas riwayat status terekam dengan benar di UI?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Aplikasi gagal dijalankan secara lokal atau database D1 tidak aktif.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
