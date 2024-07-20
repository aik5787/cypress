import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import registrationPage from "../../page_objects/registration_page";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.registartionBtn.click();
  });

  it("Should register a new account", () => {
    registrationPage.firstNmInp.type("Test");
    registrationPage.lastNmInp.type("Testerov");
    registrationPage.emailInp.type(email);
    registrationPage.paswwordInp.type(password);
    registrationPage.submitBtn.click();

    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.nameLbl.should("have.text", "Test  Testerov");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should not register with an already existing email account", () => {
    registrationPage.registration("Test", "Testerov", email, password);

    registrationPage.alertMes
      .should("exist")
      .and("have.text", "Input data validation failed");
  });

  it("Should not register without filling in required fields", () => {
    registrationPage.submitBtn.click();

    registrationPage.firstNmReqAl
      .should("exist")
      .and("have.text", "First name required");
    registrationPage.lastNmReqAl
      .should("exist")
      .and("have.text", "Last name required");
    registrationPage.emailReqAl
      .should("exist")
      .and("have.text", "Email is required");
    registrationPage.passwordReqAl
      .should("exist")
      .and("have.text", "Password is required");
  });
});
