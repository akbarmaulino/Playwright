const { test, expect } = require("@playwright/test");
const Utils = require("../utils/MentorFunction");
const MentoringPage = require("../pages/MentoringPage");
const LoginPage = require("../pages/LoginPage");
const mentorName = "Cika";

test.describe("Mentoring Feature", () => {
  test("Search Mentor Name", async ({ page }) => {
    const mentoringPage = new MentoringPage(page);
    await mentoringPage.goto();
    await mentoringPage.searchMentor(mentorName);
    await Utils.verifySearchMentor(page, mentorName);
  });

  test("View Detail Mentor", async ({ page }) => {
    const mentoringPage = new MentoringPage(page);
    await mentoringPage.goto();
    await mentoringPage.searchMentor(mentorName);
    await Utils.klikMentor(page, 1);
    await Utils.verifyViewDetailMentor(page);
  });

  test("Scheduling", async ({ page }) => {
    const mentoringPage = new MentoringPage(page);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("mentee2@gmail.com", "P@ssw0rd");
    await page.click(
      "//div[contains(@class, 'LinkItem_navbar_link_item__Toizn')]//a[normalize-space(text()) = 'Mentoring']"
    );
    await mentoringPage.searchMentor(mentorName);
    await Utils.klikMentor(page, 1);
    await Utils.verifyViewDetailMentor(page);
    await mentoringPage.scheduling();
  });
});
