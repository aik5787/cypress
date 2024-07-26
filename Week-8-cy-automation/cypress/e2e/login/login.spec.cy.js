import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should Log in with exusting account", () => {
    homePage.loginBtn.click();
    loginPage.emailInput.type("test12345@gmail.com");
    loginPage.passwordInput.type("qwerty123");
    loginPage.loginBtn.click();

    dashboardPage.nameLbl.should("have.text", "Test  Testerov");
    dashboardPage.roleLbl.should("have.text", "role: realtor");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should Log out", () => {
    loginPage.login("test12345@gmail.com", "qwerty123");
    dashboardPage.accountIcon.click();
    dashboardPage.logout.click();

    cy.url().should("include", "auth/login");
    cy.title().should("eq", "Login | Delek Homes");
  });
});
