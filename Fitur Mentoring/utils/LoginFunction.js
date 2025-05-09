import { expect } from "@playwright/test";

export async function verifySuccessLogin(page) {
  const titleLocator = page.locator("//h1[contains(@class, 'text-center')]");

  // Tunggu sampai elemen tampil dan memiliki teks yang sesuai
  await expect(titleLocator).toBeVisible({ timeout: 13000 });
  await expect(titleLocator).toHaveText(
    "Cari Lowongan Kerja Pakai Dealls #LebihPasti",
    {
      timeout: 5000,
    }
  );

  console.log("Login Berhasil");
}
