import { describe, expect, it } from "vitest";

// Validation helper functions
function isValidDescription(desc: string): boolean {
  return desc.trim().length >= 20;
}

function isValidTitle(title: string): boolean {
  return title.trim().length > 0;
}

function isValidLocation(loc: string): boolean {
  return loc.trim().length > 0;
}

function isValidCategory(cat: string): boolean {
  const allowed = ["AC", "Listrik", "Internet", "Kebersihan", "Sipil"];
  return allowed.includes(cat);
}

describe("Unit Tests - Validasi Pembuatan Laporan Baru (FR-02)", () => {
  // 1. Deny empty description
  it("1. Harus menolak deskripsi kosong", () => {
    expect(isValidDescription("")).toBe(false);
    expect(isValidDescription("   ")).toBe(false);
  });

  // 2. Deny short description (< 20 chars)
  it("2. Harus menolak deskripsi yang terlalu pendek (< 20 karakter)", () => {
    expect(isValidDescription("AC rusak")).toBe(false);
    expect(isValidDescription("Lampu kelas padam")).toBe(false); // 17 chars
  });

  // 3. Accept exact 20 chars description
  it("3. Harus menerima deskripsi dengan panjang tepat 20 karakter", () => {
    expect(isValidDescription("AC kelas B302 mati!!")).toBe(true); // 20 chars
  });

  // 4. Accept long description (> 20 chars)
  it("4. Harus menerima deskripsi panjang (> 20 karakter)", () => {
    expect(isValidDescription("Proyektor kelas A101 berkedip merah dan tidak mau menyala meskipun sudah diganti kabel HDMI.")).toBe(true);
  });

  // 5. Deny empty title
  it("5. Harus menolak judul kosong", () => {
    expect(isValidTitle("")).toBe(false);
    expect(isValidTitle("   ")).toBe(false);
  });

  // 6. Accept valid title
  it("6. Harus menerima judul yang valid", () => {
    expect(isValidTitle("AC Bocor")).toBe(true);
  });

  // 7. Deny empty location
  it("7. Harus menolak lokasi kosong", () => {
    expect(isValidLocation("")).toBe(false);
  });

  // 8. Accept valid location
  it("8. Harus menerima lokasi yang valid", () => {
    expect(isValidLocation("Gedung Kuliah Bersama R.301")).toBe(true);
  });

  // 9. Deny empty category
  it("9. Harus menolak kategori kosong", () => {
    expect(isValidCategory("")).toBe(false);
  });

  // 10. Accept valid categories
  it("10. Harus menerima kategori yang diperbolehkan", () => {
    expect(isValidCategory("AC")).toBe(true);
    expect(isValidCategory("Listrik")).toBe(true);
    expect(isValidCategory("Internet")).toBe(true);
    expect(isValidCategory("Kebersihan")).toBe(true);
    expect(isValidCategory("Sipil")).toBe(true);
    expect(isValidCategory("Lainnya")).toBe(false);
  });
});
