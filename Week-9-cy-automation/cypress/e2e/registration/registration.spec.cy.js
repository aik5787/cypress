import { faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import dashboardPage from "../../page_objects/dashboard.page";
import registrationPage from "../../page_objects/registration_page";
import userCredentials from "../../fixtures/testData/userCredentials.json";
import verificationTexts from "../../fixtures/testData/verificationText.json";

const email = faker.internet.email();
const password = faker.internet.password();
const firstName = faker.internet.userName();
const lastName = faker.name.lastName();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.registartionBtn.click();
  });

  it("Should register a new account", () => {
    registrationPage.firstNmInp.type(firstName);
    registrationPage.lastNmInp.type(lastName);
    registrationPage.emailInp.type(email);
    registrationPage.passwordInp.type(password);
    registrationPage.submitBtn.click();

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

    registrationPage.alertMes
      .should("exist")
      .and("have.text", verificationTexts.registration.validationFailed);
  });

  it("Should not register without filling in required fields", () => {
    registrationPage.submitBtn.click();

    registrationPage.firstNmReqAl
      .should("exist")
      .and("have.text", verificationTexts.registration.firstNameRequired);
    registrationPage.lastNmReqAl
      .should("exist")
      .and("have.text", verificationTexts.registration.lastNameRequired);
    registrationPage.emailReqAl
      .should("exist")
      .and("have.text", verificationTexts.registration.emailRequired);
    registrationPage.passwordReqAl
      .should("exist")
      .and("have.text", verificationTexts.registration.passwordRequired);
  });
});
