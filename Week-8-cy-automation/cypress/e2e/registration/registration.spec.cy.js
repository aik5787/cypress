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
    registrationPage.firstNameInput.type("Test");
    registrationPage.lastNameInput.type("Testerov");
    registrationPage.emailInput.type(email);
    registrationPage.paswwordInput.type(password);
    registrationPage.submitBtn.click();

    dashboardPage.roleLbl.should("have.text", "role: user");
    dashboardPage.nameLbl.should("have.text", "Test  Testerov");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should not register with an already existing email account", () => {
    registrationPage.registration("Test", "Testerov", email, password);

    registrationPage.alertMessage
      .should("exist")
      .and("have.text", "Input data validation failed");
  });

  it("Should not register without filling in required fields", () => {
    registrationPage.submitBtn.click();

    registrationPage.firstNameReqAlert
      .should("exist")
      .and("have.text", "First name required");
    registrationPage.lastNameReqAlert
      .should("exist")
      .and("have.text", "Last name required");
    registrationPage.emailReqAlert
      .should("exist")
      .and("have.text", "Email is required");
    registrationPage.passwordReqAlert
      .should("exist")
      .and("have.text", "Password is required");
  });
});
