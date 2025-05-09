const LoginPage = require("../pages/LoginPage");
const utilsLogin = require("../utils/LoginFunction");

async function LoginSteps(page, email, password) {
  const loginPage = new LoginPage(page);
  await loginPage.gotourl();
  await loginPage.login(email, password);
  await utilsLogin.verifySuccessLogin(page);
}

module.exports = {
  LoginSteps,
};
