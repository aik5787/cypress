import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";
import userCredentials from "../../fixtures/testData/userCredentials.json";


describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should Log in with exusting account",{ tags: '@smoke' }, () => {
    loginPage.login(userCredentials.user.email, userCredentials.user.password);

    // dashboardPage.nameLbl.should("have.text", userCredentials.user.name);
    dashboardPage.roleLbl.should("have.text", userCredentials.user.role);
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should Log out", () => {
    cy.login();
    dashboardPage.accountIcn.click();
    cy.contains("Logout").click();

    cy.url().should("include", "auth/login");
    cy.title().should("eq", "Login | Delek Homes");
  });
});
