const LoginPage = require("../pages/LoginPage");
const MentoringPage = require("../pages/MentoringPage");
const UtilsMentor = require("../utils/MentorFunction");

async function SearchMentorName(page, mentorName) {
  const mentoringPage = new MentoringPage(page);
  
  await mentoringPage.goto();
  await mentoringPage.searchMentor(mentorName);
  await UtilsMentor.verifySearchMentor(page, mentorName);
}

async function ViewDetailMentor(page, mentorName, index) {
  const mentoringPage = new MentoringPage(page);

  await mentoringPage.goto();
  await mentoringPage.searchMentor(mentorName);
  await UtilsMentor.clickMentor(page, index);
  await UtilsMentor.verifyViewDetailMentor(page)
}

async function CreateSchedule(page, mentorName, email, password, index,index2, startDate, endDate, timeStart, timeFinish) {
  const mentoringPage = new MentoringPage(page);
  const loginPage = new LoginPage(page);
  await loginPage.gotourl();
  await loginPage.login(email, password);
   await page.click(
      "//div[contains(@class, 'LinkItem_navbar_link_item__Toizn')]//a[normalize-space(text()) = 'Mentoring']"
    );
    await page.waitForTimeout(5000);
    await mentoringPage.searchMentor(mentorName);
    await UtilsMentor.clickMentor(page, index);
    await UtilsMentor.verifyViewDetailMentor(page);
    await mentoringPage.scheduling(index2, startDate, endDate, timeStart, timeFinish );
}

async function verifyScheduling(page) {
  const mentoringPage = new MentoringPage(page);
  await mentoringPage.goto();
  await mentoringPage.checkScheduling();
}

module.exports = {
  SearchMentorName,
  ViewDetailMentor,
  CreateSchedule,
  verifyScheduling,
};
