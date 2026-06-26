# Requirements Validation - Campus Service Request and Maintenance System

Dokumen ini mendokumentasikan proses tinjauan kualitas, pemeriksaan ambiguitas, dan verifikasi alur logika kebutuhan (*requirements validation*) bersama stakeholder.

## Alur Logika Status (State Transition)
Sistem memiliki alur status laporan yang harus linier dan logis. Kami memverifikasi alur transisi sebagai berikut:

```
[Submitted] ──(Admin Start Review)──> [Under Review]
      │
      └─(Admin Assigns Tech)────────> [Assigned]
                                           │
                                    (Tech Start Work)
                                           │
                                           ▼
[Closed] <──(Admin Closes) <─── [Resolved] <──(Tech Resolves) <── [In Progress]
```

**Verifikasi Alur**:
1. Laporan baru masuk: Status default `SUBMITTED`.
2. Administrator meninjau atau langsung menugaskan: Laporan berpindah ke `UNDER REVIEW` atau langsung ke `ASSIGNED`.
3. Teknisi mulai bekerja: Status berpindah ke `IN PROGRESS`.
4. Teknisi menyelesaikan perbaikan: Status berpindah ke `RESOLVED`.
5. Pelapor memberikan konfirmasi hasil pekerjaan di lapangan.
6. Administrator menutup tiket: Status berpindah ke `CLOSED`.
7. **Resolusi Ambiguitas Reopen**: Jika pekerjaan ternyata belum selesai secara sempurna, Administrator berhak memindahkan kembali status dari `RESOLVED` atau `CLOSED` ke `UNDER REVIEW` untuk penugasan ulang.

## Checklist Validasi Kualitas Requirements

Tabel di bawah ini mendokumentasikan pemeriksaan keselarasan requirements terhadap standar kualitas perangkat lunak:

| Kriteria | Item Pemeriksaan | Status | Catatan / Tindakan |
| :--- | :--- | :--- | :--- |
| **Konsistensi** | Apakah ada konflik antar-FR atau BR? | **OK** | BR-02 (Hanya Admin yang mengubah prioritas) selaras dengan FR-07. |
| **Kelengkapan** | Apakah ada aktor yang tidak memiliki akses fitur kunci? | **OK** | Keempat aktor (Pelapor, Admin, Teknisi, FM) terakomodasi sepenuhnya di User Stories. |
| **Dapat Diuji (Testability)** | Apakah kriteria keberhasilan (*acceptance criteria*) terukur? | **OK** | Semua US memiliki minimal 2 AC yang dapat diuji secara otomatis dan manual. |
| **Kelayakan Teknis** | Apakah batasan teknologi (Cloudflare + React) memadai? | **OK** | Penghapusan fitur upload foto dari scope menjamin fungsionalitas aman pada Cloudflare Workers paket gratis. |
| **Unik** | Apakah setiap laporan dapat diidentifikasi secara unik? | **OK** | Sistem akan menghasilkan kode unik `CSR-xxxx` menggunakan timestamp saat entri dibuat di database. |
