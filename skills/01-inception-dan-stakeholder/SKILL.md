---
name: Inception dan Stakeholder
description: Memahami masalah, tujuan, stakeholder, scope, asumsi, dan pertanyaan terbuka.
---

# Skill AI: Inception dan Stakeholder

## Tujuan
Memahami masalah, tujuan, stakeholder, scope, asumsi, dan pertanyaan terbuka.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Inception dan Stakeholder**.

## Input
- Dokumen studi kasus awal dari pengguna
- Catatan deskripsi awal

## Langkah Kerja
1. Baca seluruh studi kasus secara mendalam untuk memahami inti masalah.
2. Identifikasi semua aktor yang berinteraksi langsung dengan sistem dan tentukan wewenang unik mereka.
3. Petakan batasan sistem (apa saja yang masuk dalam ruang lingkup pengerjaan dan apa saja yang ditiadakan/out-of-scope).
4. Catat asumsi dasar.
5. Buat draf dokumen inception.md yang terstruktur menggunakan format Markdown standar.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/requirements/inception.md (Visi, Ruang Lingkup, dan Peran Aktor)

## Aturan
- Jangan mengarang fakta baru yang tidak tertulis di studi kasus asli.
- Jika ada informasi yang kurang, tandai sebagai asumsi secara eksplisit.
- Batasan scope harus jelas untuk menghindari scope creep.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah 4 aktor utama (Pelapor, Admin, Teknisi, Manajer Fasilitas) sudah dipetakan dengan tepat?
- Apakah batasan scope gratis Cloudflare sudah dicantumkan?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Informasi dasar studi kasus kosong atau tidak dapat diakses.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
