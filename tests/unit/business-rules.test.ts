import { describe, expect, it } from "vitest";

// Logika Bisnis untuk Pengujian Unit
function canChangePriority(role: string): boolean {
  return role === "Administrator";
}

function canChangeCategory(role: string): boolean {
  return role === "Administrator";
}

function canAssignTechnician(role: string): boolean {
  return role === "Administrator";
}

function canCloseReport(currentStatus: string, role: string): boolean {
  return role === "Administrator" && currentStatus === "RESOLVED";
}

function canTechnicianUpdate(techName: string, assignedTech: string | null, newStatus: string): boolean {
  if (techName !== assignedTech) return false;
  return ["IN PROGRESS", "RESOLVED"].includes(newStatus);
}

function isValidStatusTransition(oldStatus: string, newStatus: string): boolean {
  const allowed: Record<string, string[]> = {
    "SUBMITTED": ["UNDER REVIEW", "ASSIGNED"],
    "UNDER REVIEW": ["ASSIGNED", "CLOSED"],
    "ASSIGNED": ["IN PROGRESS"],
    "IN PROGRESS": ["RESOLVED"],
    "RESOLVED": ["CLOSED", "UNDER REVIEW"],
    "CLOSED": ["UNDER REVIEW"]
  };
  return allowed[oldStatus]?.includes(newStatus) || false;
}

describe("Unit Tests - Business Rules & Permissions (BR-01 s.d. BR-05)", () => {
  // 11. Can change priority
  it("11. Hanya Administrator yang dapat mengubah prioritas", () => {
    expect(canChangePriority("Administrator")).toBe(true);
    expect(canChangePriority("Pelapor")).toBe(false);
    expect(canChangePriority("Teknisi")).toBe(false);
  });

  // 12. Can change category
  it("12. Hanya Administrator yang dapat mengubah kategori", () => {
    expect(canChangeCategory("Administrator")).toBe(true);
    expect(canChangeCategory("Pelapor")).toBe(false);
    expect(canChangeCategory("Teknisi")).toBe(false);
  });

  // 13. Can assign technician
  it("13. Hanya Administrator yang dapat menugaskan teknisi", () => {
    expect(canAssignTechnician("Administrator")).toBe(true);
    expect(canAssignTechnician("Pelapor")).toBe(false);
    expect(canAssignTechnician("Teknisi")).toBe(false);
  });

  // 14. Close report condition - Success
  it("14. Admin dapat menutup laporan jika statusnya sudah RESOLVED", () => {
    expect(canCloseReport("RESOLVED", "Administrator")).toBe(true);
  });

  // 15. Close report condition - Failed due to status
  it("15. Admin tidak dapat menutup laporan jika statusnya belum RESOLVED (misal: IN PROGRESS)", () => {
    expect(canCloseReport("IN PROGRESS", "Administrator")).toBe(false);
  });

  // 16. Close report condition - Failed due to role
  it("16. Pelapor atau Teknisi tidak dapat menutup laporan", () => {
    expect(canCloseReport("RESOLVED", "Pelapor")).toBe(false);
    expect(canCloseReport("RESOLVED", "Teknisi")).toBe(false);
  });

  // 17. Technician update - Success
  it("17. Teknisi dapat memperbarui status laporan yang ditugaskan kepada dirinya sendiri", () => {
    expect(canTechnicianUpdate("Budi", "Budi", "IN PROGRESS")).toBe(true);
    expect(canTechnicianUpdate("Budi", "Budi", "RESOLVED")).toBe(true);
  });

  // 18. Technician update - Failed due to mismatch
  it("18. Teknisi tidak dapat memperbarui status laporan jika ditugaskan ke orang lain", () => {
    expect(canTechnicianUpdate("Agus", "Budi", "IN PROGRESS")).toBe(false);
  });

  // 19. Valid transitions
  it("19. Harus mengizinkan transisi status yang valid", () => {
    expect(isValidStatusTransition("SUBMITTED", "UNDER REVIEW")).toBe(true);
    expect(isValidStatusTransition("ASSIGNED", "IN PROGRESS")).toBe(true);
    expect(isValidStatusTransition("IN PROGRESS", "RESOLVED")).toBe(true);
    expect(isValidStatusTransition("RESOLVED", "CLOSED")).toBe(true);
  });

  // 20. Invalid transitions
  it("20. Harus menolak transisi status yang tidak valid", () => {
    expect(isValidStatusTransition("SUBMITTED", "CLOSED")).toBe(false);
    expect(isValidStatusTransition("ASSIGNED", "RESOLVED")).toBe(false);
  });
});
