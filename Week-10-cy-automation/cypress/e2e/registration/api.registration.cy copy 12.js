import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();
const firstName = faker.internet.userName();
const lastName = faker.name.lastName();

describe("Registration", () => {
 
  it.only ("Should register a new account via API", () => {
    cy.registerNewUser(firstName, lastName, email, password)
    cy.deleteNewUser()
  });
});