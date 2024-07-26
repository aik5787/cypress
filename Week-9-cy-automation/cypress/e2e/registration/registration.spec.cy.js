import { faker } from "@faker-js/faker";
import dashboardPage from "../../page_objects/dashboard.page";
import registrationPage from "../../page_objects/registration_page";
import userCredentials from "../../fixtures/testData/userCredentials.json";
import registrationValidationErrors from "../../fixtures/testData/registrationValidationErrors.json";

const email = faker.internet.email();
const password = faker.internet.password();
const firstName = faker.internet.userName();
const lastName = faker.name.lastName();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  it("Should register a new account", () => {
    registrationPage.registration(
      firstName,
      lastName,
      email,
      password
    );

    dashboardPage.roleLbl.should("have.text", userCredentials.user.role);
    dashboardPage.nameLbl.should("have.text", `${firstName}  ${lastName}`);
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should not register with an already existing email account", () => {
    registrationPage.registration(
      firstName,
      lastName,
      userCredentials.realtor.email,
      password
    );

    registrationPage.alertMssg
      .should("exist")
      .and("have.text", registrationValidationErrors.validationFailed);
  });

  it ("Should not register without filling in required fields", () => {
    registrationPage.submitBtn.click();

    cy.contains(registrationValidationErrors.firstNameRequired)
    cy.contains(registrationValidationErrors.lastNameRequired)
    cy.contains(registrationValidationErrors.emailRequired)
    cy.contains(registrationValidationErrors.passwordRequired)
  });
});
