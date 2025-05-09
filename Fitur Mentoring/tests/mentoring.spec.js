const { test } = require("@playwright/test");
const pages = require("../steps/mentoringSteps");
const LoginPage = require("../pages/LoginPage");

const mentorName = "Cika";
const index = 1;
const index2 = 2;
const email = "mentee2@gmail.com";
const password = "P@ssw0rd";
const startDate = "15";
const endDate = "18"; 
const timeStart = "2000";
const timeFinish = "2100";

test.describe("Mentoring Feature", () => {

  test("Search Mentor Name", async ({ page }) => {
    await pages.SearchMentorName(page, mentorName); 
  });



  test("View Detail Mentor", async ({ page }) => {
    await pages.ViewDetailMentor(page, mentorName, index);
  });

  test("Scheduling", async ({ page }) => {
    await pages.CreateSchedule(page, mentorName, email, password, index,index2, startDate, endDate, timeStart, timeFinish);
    await pages.verifyScheduling(page);
  });


});
