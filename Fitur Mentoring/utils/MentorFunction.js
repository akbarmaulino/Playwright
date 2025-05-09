import { expect } from "@playwright/test";

export async function clickMentor(page, index) {
  const xpath = `(//div[contains(@class, 'grid') and contains(@class, 'grid-cols-1')]/a)[${index}]`;
  const mentorElement = page.locator(`xpath=${xpath}`);


  await expect(mentorElement).toBeVisible({ timeout: 10000 }); 
  await expect(mentorElement).toBeEnabled();


  await mentorElement.click();
}


export async function verifyViewDetailMentor(page) {
  const button = page.getByRole("button", { name: "Ajukan Jadwal" });
  await expect(button).toBeVisible({ timeout: 13000 }); 
  await expect(button).toBeEnabled();
  if (await button.isVisible()) {
    console.log("Tombol muncul!");
  } else {
    console.log("Tombol tidak ada.");
  }
}


export async function verifyNameMentor(page, indexProduk, Mentor) {
  const xpath = `(//div[contains(@class, 'grid') and contains(@class, 'grid-cols-1')]/a)[${indexProduk}]//div[2]//div[1]//h4`;
  const nameMentor = await page.locator(xpath).textContent();

  if (nameMentor === Mentor) {
    console.log("Mentor Sesuai dengan yang dicari");
  } else {
    console.log("Mentor Tidak Sesuai dengan yang dicari");
  }
}

export async function verifySearchMentor(page, Mentor) {
  await page.waitForTimeout(5000);
  const totalResults = await page
    .locator(
      "//div[contains(@class, 'grid') and contains(@class, 'grid-cols-1')]/a"
    )
    .count();

  for (let indexProduk = 1; indexProduk <= totalResults; indexProduk++) {
    const xpath = `(//div[contains(@class, 'grid') and contains(@class, 'grid-cols-1')]/a)[${indexProduk}]//div[2]//div[1]//h4`;

    const nameMentor = await page.locator(xpath).textContent();

    if (nameMentor === Mentor) {
      console.log(`Mentor pada hasil ${indexProduk} sesuai dengan yang dicari`);
      console.log(nameMentor);
    } else {
      console.log(
        `Mentor pada hasil ${indexProduk} tidak sesuai dengan yang dicari`
      );
      console.log(nameMentor);
    }
  }
}

export async function pilihRentangTanggal(page, startDate, endDate) {
  await page.locator(`div.rmdp-day >> text=${startDate}`).nth(0).click();

  await page.locator(`div.rmdp-day >> text=${endDate}`).nth(0).click();
}
