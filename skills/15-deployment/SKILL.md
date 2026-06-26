---
name: Deployment
description: Mempublikasikan aplikasi dan memeriksa hasilnya.
---

# Skill AI: Deployment

## Tujuan
Mempublikasikan aplikasi dan memeriksa hasilnya.

## Kapan Digunakan
Digunakan pada tahap pengerjaan proyek ketika melakukan aktivitas yang berhubungan dengan deployment.

## Input
- wrangler.jsonc
- .github/workflows/ci.yml

## Langkah Kerja
1. Jalankan migrasi ke database D1 Cloudflare produksi.
2. Deploy aplikasi ke Cloudflare Pages/Workers (`npm run deploy`).
3. Hubungkan repositori GitHub ke Cloudflare untuk auto-deploy dari branch main.
5. Berhenti jika informasi tidak cukup.

## Output
- URL Cloudflare publik aktif
- Status build & deploy sukses di Cloudflare Dashboard

## Aturan
- Jangan membuat fakta baru.
- Tandai asumsi.
- Gunakan ID requirement.
- Jangan melewati scope.

## Quality Check
- Apakah aplikasi dapat diakses di internet secara publik dan berfungsi normal?

## Kondisi Gagal
AI harus berhenti jika:
- Informasi input tidak lengkap.
- Terjadi konflik kebutuhan yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa/Dosen harus memeriksa kesesuaian output terhadap spesifikasi tugas.
