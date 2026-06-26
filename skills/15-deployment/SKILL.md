---
name: Deployment
description: Mempublikasikan aplikasi dan memeriksa hasilnya.
---

# Skill AI: Deployment

## Tujuan
Mempublikasikan aplikasi dan memeriksa hasilnya.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Deployment**.

## Input
- wrangler.jsonc
- dist/client/

## Langkah Kerja
1. Jalankan kueri migrasi database di server produksi Cloudflare.
2. Jalankan perintah kompilasi dan deploy (`npm run deploy`).
3. Verifikasi tautan publik yang dihasilkan di browser.
4. Buat dokumen deployment_info.md berisi info tautan, konfigurasi database, checklist pemeriksaan pasca-deploy, dan release notes.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- URL Cloudflare publik aktif
- docs/deployment/deployment_info.md (Informasi Deployment)

## Aturan
- Aplikasi harus dapat diakses di internet secara publik tanpa error.
- Database produksi D1 harus dalam keadaan siap pakai dengan skema tabel relasional yang bersih.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah aplikasi dapat diakses di internet secara publik dan berfungsi normal?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Deployment gagal karena konfigurasi Wrangler salah atau otentikasi Cloudflare gagal.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
