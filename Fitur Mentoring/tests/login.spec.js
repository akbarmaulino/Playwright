const { test} = require("@playwright/test");
const pages = require("../steps/loginSteps");
const email = "mentee2@gmail.com";
const password = "P@ssw0rd";


test.describe("Login Feature", () => {
  test("Mentee login with valid credentials", async ({ page }) => {
    await pages.LoginSteps(page, email, password);
  });
});


