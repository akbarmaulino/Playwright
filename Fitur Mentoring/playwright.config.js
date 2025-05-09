const { devices } = require("@playwright/test");

module.exports = {
  use: {
    baseURL: "https://job-portal-user-dev-skx7zw44dq-et.a.run.app",
    browserName: "chromium",
    headless: false,
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
    },
  },
  testDir: "./tests",
  retries: 1,
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["list"],
  ],
};
