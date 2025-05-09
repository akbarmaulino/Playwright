import { expect } from "@playwright/test";

export async function verifySuccessLogin(page) {
  const titleLocator = page.locator("//h1[contains(@class, 'text-center')]");
  
  await expect(titleLocator).toBeVisible({ timeout: 13000 });
  await expect(titleLocator).toHaveText(
    "Cari Lowongan Kerja Pakai Dealls #LebihPasti",
    {
      timeout: 5000,
    }
  );

  const header = await titleLocator.textContent();


  console.log("Login Berhasil");
  console.log("Berhasil Masuk Ke Halaman Utama : " + header )
}
