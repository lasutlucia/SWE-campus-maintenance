---
name: Elicitation
description: Menyusun pertanyaan dan menemukan kebutuhan stakeholder.
---

# Skill AI: Elicitation

## Tujuan
Menyusun pertanyaan dan menemukan kebutuhan stakeholder.

## Kapan Digunakan
Digunakan oleh agen AI ketika berada pada tahap pengerjaan proyek yang memerlukan aktivitas **Elicitation**.

## Input
- docs/requirements/inception.md
- Feedback tambahan dari wawancara awal

## Langkah Kerja
1. Analisis peran aktor dari dokumen inception.md.
2. Buat daftar pertanyaan terstruktur untuk menggali rasa tidak nyaman (pain points) yang dialami masing-masing aktor di lapangan.
3. Petakan solusi kebutuhan fungsional tingkat tinggi untuk mengatasi keluhan tersebut.
4. Tulis hasil wawancara simulasi ini ke dalam elicitation.md dengan format yang rapi dan terstruktur.
6. Berhenti jika informasi input tidak cukup atau terjadi inkonsistensi data.

## Output
- docs/requirements/elicitation.md (Catatan Keluhan dan Kebutuhan Stakeholder)

## Aturan
- Fokus pada masalah operasional nyata (pain points) dari masing-masing peran.
- Solusi yang diajukan harus relevan dengan batasan arsitektur sistem.
- Selalu patuhi standar penulisan kode TypeScript dan regulasi monorepo.
- Pastikan penomoran ID kebutuhan (FR/US/NFR) konsisten untuk memelihara traceability.

## Quality Check
- Apakah keluhan operasional masing-masing dari 4 aktor utama telah diakomodasi?
- Apakah dokumen menggunakan bahasa Indonesia yang baik dan profesional?

## Kondisi Gagal
AI harus segera menghentikan pengerjaan apabila:
- Dokumen inception.md tidak ditemukan atau isinya tidak memuat pemetaan aktor.
- Terjadi kesalahan sintaksis atau konflik dependensi yang tidak dapat diselesaikan secara otomatis.

## Human Review
- Mahasiswa wajib melakukan verifikasi manual terhadap keselarasan output dokumen/kode ini terhadap rubrik penilaian tugas rekayasa perangkat lunak.
- Reviewer/Dosen dapat memberikan catatan korektif untuk diiterasikan oleh AI kembali.
