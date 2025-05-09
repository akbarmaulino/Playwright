import { expect } from "@playwright/test";
const Utils = require("../utils/MentorFunction");

class MentoringPage {
  constructor(page) {
    this.page = page;
    this.searchMentorField = page.locator('input[id="searchMentor"]');
    this.textAreaField = page.locator('textarea[id="notes"]');
    this.buttonScheduling = page.getByRole("button", { name: "Ajukan Jadwal" });
    this.goalSetting = page.getByRole("button", { name: "Goal Setting" });
    this.lpdp = page.getByRole("button", { name: "LPDP" });
    this.calender = page.getByRole("button", { name: "Select Date Range" });
    this.nextButtonSchedulingStep1 = page.locator(
      'button[id="mentoring-schedule-topic-request-session-btn"]'
    );
    this.nextButtonSchedulingStep2 = page.locator(
      'button[id="mentoring-schedule-pick-schedule-request-session-btn"]'
    );
    this.nextButtonSchedulingStep3 = page.locator(
      'button[id="mentoring-schedule-finish-request-session-btn"]'
    );
    this.startTime = page.locator('input[id="proposedTimes_0_startTime"]');
    this.endTime = page.locator('input[id="proposedTimes_0_endTime"]');
    this.mySessionPage = page.locator('a[href="/mentoring/my-session"]');
    this.gridSession = page.locator(
      "//div[contains(@class, 'relative overflow-hidden')]"
    );
  }

  async goto() {
    await this.page.goto("/mentoring");
  }

  async searchMentor(name) {
    await this.searchMentorField.fill(name);
    await this.searchMentorField.press("Enter");
  }

  async scheduling(index2, startDate, endDate, timeStart, timeFinish) {
    await this.buttonScheduling.click();
    await this.lpdp.click();
    await this.nextButtonSchedulingStep1.click();
    await this.calender.click();
    await Utils.pilihRentangTanggal(this.page, startDate, endDate);
    await this.startTime.fill(timeStart);
    await this.endTime.fill(timeFinish);
    await this.textAreaField.fill(
      "Halo, semoga harimu menyenangkan dan penuh berkahhh"
    );
    await this.nextButtonSchedulingStep2.click();
    const checkbox2 = this.page.locator('input[type="checkbox"][value="2"]');
    const checkbox3 = this.page.locator('input[type="checkbox"][value="3"]');

    if ((await checkbox2.count()) > 0 && (await checkbox3.count()) > 0) {
      await checkbox2.scrollIntoViewIfNeeded();
      await checkbox2.check();
      await checkbox3.scrollIntoViewIfNeeded();
      await checkbox3.check();
    } else {
      const checkbox = this.page.locator('input[type="checkbox"]');
      if ((await checkbox.count()) > 0) {
        await checkbox.scrollIntoViewIfNeeded();
        await checkbox.check();
      }
    }

    // await this.nextButtonSchedulingStep3.click();
  }

  async checkScheduling() {
    await this.mySessionPage.waitFor({ state: "visible" });
    await this.mySessionPage.click();
    await expect(this.gridSession).toBeVisible({ timeout: 5000 });
  }
}

module.exports = MentoringPage;
