class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[id="basic_email"]');
    this.passwordInput = page.locator('input[id="basic_password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async gotourl() {
    await this.page.goto("/sign-in?returnUrl=%2F");
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
