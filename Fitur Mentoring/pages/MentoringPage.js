const { expect } = require("@playwright/test");
const Utils = require("../utils/MentorFunction");
class MentoringPage {
  constructor(page) {
    this.page = page;
    this.searchMentorField = page.locator('input[id="searchMentor"]');
    this.buttonScheduling = page.getByRole("button", { name: "Ajukan Jadwal" });
    this.goalSetting = page.getByRole("button", { name: "Goal Setting" });
    this.lpdp = page.getByRole("button", { name: "LPDP" });
    this.calender = page.getByRole("button", { name: "Select Date Range" });
    this.nextButtonScheduling = page.locator(
      'button[id="mentoring-schedule-topic-request-session-btn"]'
    );
  }

  async goto() {
    await this.page.goto("/mentoring");
  }

  async goto1() {
    await this.page.goto("/mentoring/bi-598");
  }

  async searchMentor(name) {
    await this.searchMentorField.fill(name);
    await this.searchMentorField.press("Enter");
  }

  async scheduling() {
    await this.buttonScheduling.click();
    await this.lpdp.click();
    await this.nextButtonScheduling.click();
    await this.calender.click();
    await Utils.pilihRentangTanggal(this.page, "15", "18");
  }
}

module.exports = MentoringPage;
