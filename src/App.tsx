import { useEffect, useState } from "react";
import "./App.css";

type ServiceRequest = {
  id: string;
  request_number: string;
  title: string;
  description: string;
  location: string;
  category: string;
  priority: string;
  status: string;
  assigned_technician: string | null;
  created_at: string;
};

type Comment = {
  id: string;
  author_name: string;
  author_role: string;
  content: string;
  created_at: string;
};

type StatusHistory = {
  id: string;
  old_status: string;
  new_status: string;
  changed_by_role: string;
  changed_by_name: string;
  created_at: string;
};

type RequestDetail = {
  request: ServiceRequest;
  comments: Comment[];
  status_history: StatusHistory[];
};

export default function App() {
  // Aktor Switcher State
  const [activeRole, setActiveRole] = useState("Pelapor");
  const [activeName, setActiveName] = useState("Rian (Mahasiswa)");

  // Lists & Filters
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Detail Modal / View
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [detailData, setDetailData] = useState<RequestDetail | null>(null);

  // Form Fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("AC");

  // Comment Text
  const [commentText, setCommentText] = useState("");

  // Feedbacks
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-sync activeName to role switcher
  useEffect(() => {
    if (activeRole === "Pelapor") {
      setActiveName("Rian (Mahasiswa)");
    } else if (activeRole === "Administrator") {
      setActiveName("Admin Sarpras");
    } else if (activeRole === "Teknisi - Budi") {
      setActiveName("Budi (Teknisi)");
    } else if (activeRole === "Teknisi - Agus") {
      setActiveName("Agus (Teknisi)");
    } else if (activeRole === "Manajer Fasilitas") {
      setActiveName("Manajer Sarpras");
    }
    // Close detail when swapping roles to avoid invalid operations
    setSelectedRequestId(null);
    setDetailData(null);
  }, [activeRole]);

  // Load Requests based on Filters and Active Role
  async function loadRequests() {
    try {
      const url = new URL("/api/requests", window.location.origin);
      if (searchQuery) url.searchParams.set("search", searchQuery);
      if (statusFilter) url.searchParams.set("status", statusFilter);
      if (categoryFilter) url.searchParams.set("category", categoryFilter);

      // If active role is a specific technician, filter to tasks assigned to him/her
      if (activeRole.startsWith("Teknisi -")) {
        url.searchParams.set("technician", activeName);
      }

      const response = await fetch(url.toString());
      const result = await response.json();
      if (response.ok) {
        setRequests(result.data || []);
      } else {
        setErrorMessage(result.error || "Gagal memuat daftar laporan.");
      }
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan saat memuat laporan.");
    }
  }

  // Load selected request detail (including comments & log history)
  async function loadRequestDetail(id: string) {
    try {
      const response = await fetch(`/api/requests/${id}`);
      const result = await response.json();
      if (response.ok) {
        setDetailData(result.data);
      } else {
        setErrorMessage(result.error || "Gagal memuat detail laporan.");
      }
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan saat memuat detail laporan.");
    }
  }

  // Refresh lists & details
  useEffect(() => {
    loadRequests();
  }, [searchQuery, statusFilter, categoryFilter, activeRole, activeName]);

  useEffect(() => {
    if (selectedRequestId) {
      loadRequestDetail(selectedRequestId);
    }
  }, [selectedRequestId]);

  // Form submission: Create new report
  async function handleSubmitRequest(event: React.FormEvent) {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, location, category }),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Gagal membuat laporan.");
        return;
      }

      setSuccessMessage(`Laporan berhasil dikirim! Nomor Tiket: ${result.requestNumber}`);
      setTitle("");
      setDescription("");
      setLocation("");
      setCategory("AC");
      loadRequests();
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan saat mengirim laporan.");
    }
  }

  // Submit new comment
  async function handleSubmitComment(event: React.FormEvent) {
    event.preventDefault();
    if (!commentText.trim() || !selectedRequestId) return;

    try {
      const response = await fetch(`/api/requests/${selectedRequestId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Role": activeRole.startsWith("Teknisi") ? "Teknisi" : activeRole,
          "X-User-Name": activeName,
        },
        body: JSON.stringify({ content: commentText }),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Gagal mengirim komentar.");
        return;
      }

      setCommentText("");
      loadRequestDetail(selectedRequestId);
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan saat mengirim komentar.");
    }
  }

  // Update Status / Priority / Category / Assignee
  async function handleUpdateStatus(
    statusUpdate?: string,
    priorityUpdate?: string,
    categoryUpdate?: string,
    technicianUpdate?: string | null
  ) {
    if (!selectedRequestId) return;

    try {
      const payload: any = {};
      if (statusUpdate !== undefined) payload.status = statusUpdate;
      if (priorityUpdate !== undefined) payload.priority = priorityUpdate;
      if (categoryUpdate !== undefined) payload.category = categoryUpdate;
      if (technicianUpdate !== undefined) payload.assigned_technician = technicianUpdate;

      const response = await fetch(`/api/requests/${selectedRequestId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-User-Role": activeRole.startsWith("Teknisi") ? "Teknisi" : activeRole,
          "X-User-Name": activeName,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        setErrorMessage(result.error || "Gagal memperbarui laporan.");
        return;
      }

      setSuccessMessage("Detail laporan berhasil diperbarui.");
      loadRequestDetail(selectedRequestId);
      loadRequests();
    } catch (err) {
      setErrorMessage("Terjadi kesalahan jaringan saat memperbarui laporan.");
    }
  }

  // Format Helpers for visual aesthetics
  function getStatusBadgeClass(status: string) {
    switch (status) {
      case "SUBMITTED": return "badge-status-submitted";
      case "UNDER REVIEW": return "badge-status-review";
      case "ASSIGNED": return "badge-status-assigned";
      case "IN PROGRESS": return "badge-status-progress";
      case "RESOLVED": return "badge-status-resolved";
      case "CLOSED": return "badge-status-closed";
      default: return "";
    }
  }

  function getPriorityBadgeClass(priority: string) {
    switch (priority) {
      case "LOW": return "badge-priority-low";
      case "MEDIUM": return "badge-priority-medium";
      case "HIGH": return "badge-priority-high";
      default: return "";
    }
  }

  function formatDate(isoString: string) {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  return (
    <div className="app-container">
      {/* Header and Switcher */}
      <header className="app-header">
        <div className="brand-section">
          <h1>Campus Service Request</h1>
          <p>Maintenance & Facility Management System</p>
        </div>
        <div className="role-switcher">
          <span className="role-switcher-label">Peran Pengguna:</span>
          <select
            className="role-select"
            value={activeRole}
            onChange={(e) => setActiveRole(e.target.value)}
          >
            <option value="Pelapor">Pelapor (Mahasiswa/Dosen)</option>
            <option value="Administrator">Administrator</option>
            <option value="Teknisi - Budi">Teknisi: Budi (AC/Listrik)</option>
            <option value="Teknisi - Agus">Teknisi: Agus (Kebersihan)</option>
            <option value="Manajer Fasilitas">Manajer Fasilitas (Statistik)</option>
          </select>
        </div>
      </header>

      {/* Alerts */}
      {successMessage && (
        <div className="alert alert-success" onClick={() => setSuccessMessage("")}>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-error" onClick={() => setErrorMessage("")}>
          {errorMessage}
        </div>
      )}

      {/* Aktor: Manajer Fasilitas Dashboard View */}
      {activeRole === "Manajer Fasilitas" ? (
        <div>
          {/* Dashboard Summary Cards */}
          <div className="dashboard-cards">
            <div className="card">
              <span className="card-title">Total Pengaduan</span>
              <span className="card-value">{requests.length}</span>
              <span className="card-desc">Laporan terdaftar secara keseluruhan</span>
            </div>
            <div className="card">
              <span className="card-title">Dalam Penanganan</span>
              <span className="card-value">
                {requests.filter(r => ["UNDER REVIEW", "ASSIGNED", "IN PROGRESS"].includes(r.status)).length}
              </span>
              <span className="card-desc">Laporan sedang direview/dikerjakan</span>
            </div>
            <div className="card">
              <span className="card-title">Selesai / Ditutup</span>
              <span className="card-value">
                {requests.filter(r => ["RESOLVED", "CLOSED"].includes(r.status)).length}
              </span>
              <span className="card-desc">Laporan terselesaikan sepenuhnya</span>
            </div>
          </div>

          {/* List Laporan */}
          <div className="panel">
            <h2 className="panel-title">Daftar Ringkasan Laporan Kampus</h2>
            <div className="table-container">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th>No. Tiket</th>
                    <th>Judul Masalah</th>
                    <th>Lokasi</th>
                    <th>Kategori</th>
                    <th>Prioritas</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-muted" style={{ textAlign: "center" }}>
                        Belum ada laporan yang terdaftar.
                      </td>
                    </tr>
                  ) : (
                    requests.map((req) => (
                      <tr key={req.id} onClick={() => setSelectedRequestId(req.id)}>
                        <td className="text-bold">{req.request_number}</td>
                        <td>{req.title}</td>
                        <td>{req.location}</td>
                        <td>{req.category}</td>
                        <td>
                          <span className={`badge ${getPriorityBadgeClass(req.priority)}`}>
                            {req.priority}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(req.status)}`}>
                            {req.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Aktor: Pelapor, Admin, Teknisi Views */
        <div className="dashboard-grid">
          {/* Left Column: Form Laporan (Hanya untuk Pelapor) / Task Switcher */}
          <div>
            {activeRole === "Pelapor" ? (
              <div className="panel">
                <h2 className="panel-title">Kirim Laporan Baru</h2>
                <form onSubmit={handleSubmitRequest}>
                  <div className="form-group">
                    <label className="form-label">Judul Masalah</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Contoh: AC Bocor, Lampu Kelas Padam"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Deskripsi Kerusakan (Min. 20 Karakter)</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Jelaskan secara detail masalah fasilitas agar memudahkan teknisi memeriksa..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Lokasi Ruang / Gedung</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Contoh: Gedung B, R. 302"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Kategori Masalah</label>
                    <select
                      className="form-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="AC">Pendingin Ruangan (AC)</option>
                      <option value="Listrik">Kelistrikan & Pencahayaan</option>
                      <option value="Internet">Koneksi Internet / Wi-Fi</option>
                      <option value="Kebersihan">Kebersihan & Sanitasi</option>
                      <option value="Sipil">Struktur Bangunan & Mebel</option>
                    </select>
                  </div>
                  <button type="submit" className="button-primary">Kirim Pengaduan</button>
                </form>
              </div>
            ) : (
              <div className="panel">
                <h2 className="panel-title">
                  {activeRole.startsWith("Teknisi") ? "Tugas Saya" : "Instruksi Kerja"}
                </h2>
                <p className="text-secondary" style={{ fontSize: "14px" }}>
                  {activeRole.startsWith("Teknisi")
                    ? `Halo ${activeName}, silakan pilih tugas Anda di tabel sebelah kanan untuk memperbarui status pengerjaan.`
                    : "Pilihlah salah satu baris laporan di sebelah kanan untuk meninjau prioritas, kategori, dan menugaskan teknisi pelaksana perbaikan."}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Daftar Laporan & Pencarian */}
          <div className="panel">
            <h2 className="panel-title">Daftar Laporan Pengaduan</h2>

            {/* Pencarian dan Penyaringan */}
            <div className="controls-row">
              <input
                type="text"
                className="form-input search-input"
                placeholder="Cari nomor tiket, judul, lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="form-select filter-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">Semua Status</option>
                <option value="SUBMITTED">Submitted</option>
                <option value="UNDER REVIEW">Under Review</option>
                <option value="ASSIGNED">Assigned</option>
                <option value="IN PROGRESS">In Progress</option>
                <option value="RESOLVED">Resolved</option>
                <option value="CLOSED">Closed</option>
              </select>
              <select
                className="form-select filter-select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">Semua Kategori</option>
                <option value="AC">AC</option>
                <option value="Listrik">Listrik</option>
                <option value="Internet">Internet</option>
                <option value="Kebersihan">Kebersihan</option>
                <option value="Sipil">Sipil</option>
              </select>
            </div>

            <div className="table-container">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th>No. Tiket</th>
                    <th>Judul Laporan</th>
                    <th>Lokasi</th>
                    <th>Prioritas</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-muted" style={{ textAlign: "center" }}>
                        Laporan tidak ditemukan.
                      </td>
                    </tr>
                  ) : (
                    requests.map((req) => (
                      <tr key={req.id} onClick={() => setSelectedRequestId(req.id)}>
                        <td className="text-bold">{req.request_number}</td>
                        <td>{req.title}</td>
                        <td>{req.location}</td>
                        <td>
                          <span className={`badge ${getPriorityBadgeClass(req.priority)}`}>
                            {req.priority}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(req.status)}`}>
                            {req.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Detail Laporan Section (Jika baris dipilih) */}
      {selectedRequestId && detailData && (
        <div className="detail-layout">
          {/* Main Info */}
          <div className="detail-main">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span className="text-bold" style={{ fontSize: "20px" }}>
                {detailData.request.request_number}: {detailData.request.title}
              </span>
              <button
                className="button-secondary"
                style={{ padding: "4px 12px" }}
                onClick={() => {
                  setSelectedRequestId(null);
                  setDetailData(null);
                }}
              >
                Tutup Detail
              </button>
            </div>

            <p style={{ fontSize: "14px", marginBottom: "20px" }}>{detailData.request.description}</p>

            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Lokasi Fisik</span>
                <span className="info-value">{detailData.request.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Kategori</span>
                <span className="info-value">{detailData.request.category}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Prioritas</span>
                <span className="info-value">
                  <span className={`badge ${getPriorityBadgeClass(detailData.request.priority)}`}>
                    {detailData.request.priority}
                  </span>
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Status Terkini</span>
                <span className="info-value">
                  <span className={`badge ${getStatusBadgeClass(detailData.request.status)}`}>
                    {detailData.request.status}
                  </span>
                </span>
              </div>
              <div className="info-item" style={{ gridColumn: "span 2" }}>
                <span className="info-label">Teknisi Pelaksana</span>
                <span className="info-value">
                  {detailData.request.assigned_technician || "Belum ditugaskan"}
                </span>
              </div>
            </div>

            {/* Riwayat Log Status */}
            <div style={{ marginTop: "24px" }}>
              <h3 className="action-title">Log Aktivitas & Riwayat Status</h3>
              <div className="timeline">
                {detailData.status_history.map((log) => (
                  <div className="timeline-item" key={log.id}>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-text">
                        Status diubah dari <strong>{log.old_status}</strong> ke{" "}
                        <strong>{log.new_status}</strong> oleh{" "}
                        <strong>{log.changed_by_name}</strong> ({log.changed_by_role})
                      </span>
                      <div className="timeline-date">{formatDate(log.created_at)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Actions & Comments */}
          <div className="detail-sidebar">
            {/* Actions Box */}
            <div className="action-box">
              <h3 className="action-title">Aksi & Perubahan Laporan</h3>
              <div className="action-btn-group">
                {/* Actions for Administrator */}
                {activeRole === "Administrator" && (
                  <>
                    {detailData.request.status === "SUBMITTED" && (
                      <button
                        className="button-primary"
                        onClick={() => handleUpdateStatus("UNDER REVIEW")}
                      >
                        Mulai Review Laporan
                      </button>
                    )}

                    {/* Change Priority & Category (Admin-only) */}
                    <div className="form-group">
                      <label className="form-label">Tingkat Prioritas</label>
                      <select
                        className="form-select"
                        value={detailData.request.priority}
                        onChange={(e) => handleUpdateStatus(undefined, e.target.value)}
                      >
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Sesuaikan Kategori</label>
                      <select
                        className="form-select"
                        value={detailData.request.category}
                        onChange={(e) => handleUpdateStatus(undefined, undefined, e.target.value)}
                      >
                        <option value="AC">AC</option>
                        <option value="Listrik">Listrik</option>
                        <option value="Internet">Internet</option>
                        <option value="Kebersihan">Kebersihan</option>
                        <option value="Sipil">Sipil</option>
                      </select>
                    </div>

                    {/* Assign Technician (Admin-only) */}
                    <div className="form-group">
                      <label className="form-label">Tugaskan Teknisi</label>
                      <select
                        className="form-select"
                        value={detailData.request.assigned_technician || ""}
                        onChange={(e) => handleUpdateStatus(undefined, undefined, undefined, e.target.value || null)}
                      >
                        <option value="">Pilih Teknisi</option>
                        <option value="Budi (Teknisi)">Budi (Teknisi AC/Listrik)</option>
                        <option value="Agus (Teknisi)">Agus (Teknisi Kebersihan)</option>
                      </select>
                    </div>

                    {detailData.request.status === "RESOLVED" && (
                      <button
                        className="button-primary"
                        style={{ background: "#10b981" }}
                        onClick={() => handleUpdateStatus("CLOSED")}
                      >
                        Tutup Tiket Laporan (Closed)
                      </button>
                    )}

                    {detailData.request.status === "CLOSED" && (
                      <button
                        className="button-secondary"
                        onClick={() => handleUpdateStatus("UNDER REVIEW")}
                      >
                        Buka Kembali Tiket Laporan
                      </button>
                    )}
                  </>
                )}

                {/* Actions for Technician */}
                {activeRole.startsWith("Teknisi") && (
                  <>
                    {detailData.request.assigned_technician === activeName ? (
                      <>
                        {detailData.request.status === "ASSIGNED" && (
                          <button
                            className="button-primary"
                            onClick={() => handleUpdateStatus("IN PROGRESS")}
                          >
                            Mulai Bekerja (In Progress)
                          </button>
                        )}
                        {detailData.request.status === "IN PROGRESS" && (
                          <button
                            className="button-primary"
                            style={{ background: "#10b981" }}
                            onClick={() => handleUpdateStatus("RESOLVED")}
                          >
                            Tandai Selesai (Resolved)
                          </button>
                        )}
                        {["RESOLVED", "CLOSED"].includes(detailData.request.status) && (
                          <p className="text-secondary" style={{ fontSize: "13px" }}>
                            Tugas ini telah ditandai selesai. Terima kasih atas kerja keras Anda!
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="text-muted" style={{ fontSize: "13px" }}>
                        Anda tidak ditugaskan untuk laporan ini. Hanya teknisi yang ditugaskan yang dapat memperbarui status pengerjaan.
                      </p>
                    )}
                  </>
                )}

                {/* Actions for Reporter (Pelapor) */}
                {activeRole === "Pelapor" && (
                  <p className="text-secondary" style={{ fontSize: "13px" }}>
                    Status laporan akan diperbarui oleh Admin dan Teknisi. Anda dapat menambahkan komentar di bawah untuk memberikan informasi tambahan.
                  </p>
                )}

                {/* Actions for Facility Manager */}
                {activeRole === "Manajer Fasilitas" && (
                  <p className="text-secondary" style={{ fontSize: "13px" }}>
                    Mode pemantauan dashboard aktif. Administrator dan Teknisi yang memproses pengerjaan.
                  </p>
                )}
              </div>
            </div>

            {/* Comments Box */}
            <div className="action-box">
              <h3 className="action-title">Komentar & Diskusi</h3>
              <div className="comments-container">
                {detailData.comments.length === 0 ? (
                  <p className="text-muted" style={{ fontSize: "13px", padding: "10px 0" }}>
                    Belum ada komentar. Silakan kirim komentar pertama Anda di bawah.
                  </p>
                ) : (
                  detailData.comments.map((comm) => (
                    <div className="comment-card" key={comm.id}>
                      <div className="comment-header">
                        <span className="comment-author">
                          {comm.author_name}
                          <span className="comment-role"> ({comm.author_role})</span>
                        </span>
                        <span className="comment-date">{formatDate(comm.created_at)}</span>
                      </div>
                      <div className="comment-body">{comm.content}</div>
                    </div>
                  ))
                )}
              </div>

              {/* Comment Input form (Except Facility Manager which is read-only) */}
              {activeRole !== "Manajer Fasilitas" ? (
                <form onSubmit={handleSubmitComment} className="comment-form">
                  <input
                    type="text"
                    className="form-input comment-input"
                    placeholder="Tulis tanggapan atau komentar..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  />
                  <button type="submit" className="button-secondary" style={{ padding: "0 16px" }}>
                    Kirim
                  </button>
                </form>
              ) : (
                <p className="text-muted" style={{ fontSize: "12px" }}>
                  Hanya Pelapor, Admin, dan Teknisi yang dapat mengirim komentar.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
