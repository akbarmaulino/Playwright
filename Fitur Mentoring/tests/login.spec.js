const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const Utils = require("../utils/LoginFunction");
const email = "mentee2@gmail.com";
const password = "P@ssw0rd";

test.describe("Login Feature", () => {
  test("Mentee login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(email, password);

    await Utils.verifySuccessLogin(page);
  });
});
