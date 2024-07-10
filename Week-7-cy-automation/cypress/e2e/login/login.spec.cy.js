import loginPage from "../../page_objects/login.page";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Log in successfully!", () => {
    homePage.loginBtn.click();
    loginPage.emailInput.type("test12345@gmail.com");
    loginPage.passwordInput.type("qwerty123");
    loginPage.loginBtn.click();

    dashboardPage.nameLbl.should("have.text", "Test  Test");
    dashboardPage.roleLbl.should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Log out successfully!", () => {
    loginPage.login("test12345@gmail.com", "qwerty123");
    dashboardPage.accountIcon.click();
    dashboardPage.logout.click();

    cy.url().should("include", "auth/login");
    cy.title().should("eq", "Login | Delek Homes");
  });
});
