---
name: UI Design
description: Membuat halaman, navigasi, form, dan wireframe.
---

# Skill AI: UI Design

## Tujuan
Membuat halaman, navigasi, form, dan wireframe.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **UI Design**.

## Input
- docs/requirements/specification.md

## Langkah Kerja
1. Petakan alur visual navigasi halaman dari sudut pandang masing-masing aktor.
2. Rancang bentuk layout antarmuka secara skematis dalam bentuk wireframe teks (dashboard utama, detail panel modal, kolom komentar, timeline log).
3. Dokumentasikan alur navigasi dan wireframe di folder docs/design/.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/design/ui_flow.md (Alur Navigasi UI)
- docs/design/wireframe.md (Wireframe Teks Layout UI)

## Aturan
- Desain UI harus responsif (ramah ponsel dan desktop).
- Tata letak harus bersih dan memudahkan perpindahan peran aktor.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah wireframe mencakup visualisasi form input dan detail modal?
- Apakah alur navigasi dari ke-4 peran aktor sudah terwakili?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Spesifikasi kebutuhan tidak ditemukan.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
