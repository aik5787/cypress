import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Registration successfully!", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Test");
    cy.get('[name="lastName"]').type("Testerov");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get("a p").should("have.text", "role: user");
    cy.get("h6").should("have.text", "Test  Testerov");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should not register with an already existing email account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Test");
    cy.get('[name="lastName"]').type("Testerov");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get("form .MuiAlert-message")
      .should("exist")
      .and("have.text", "Input data validation failed");
  });

  it("Should not register without filling in required fields", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[type="submit"]').click();

    cy.get('[id=":r5:-helper-text"]')
      .should("exist")
      .and("have.text", "First name required");
    cy.get('[id=":r6:-helper-text"]')
      .should("exist")
      .and("have.text", "Last name required");
    cy.get('[id=":r7:-helper-text"]')
      .should("exist")
      .and("have.text", "Email is required");
    cy.get('[id=":r8:-helper-text"]')
      .should("exist")
      .and("have.text", "Password is required");
  });
});
