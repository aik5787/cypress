import userCredentials from "../fixtures/testData/userCredentials.json";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add(
  "login",
  (email = userCredentials.realtor.email, password = userCredentials.realtor.password) => {
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
      cy.visit("dashboard/user/profile");
    });
  }
);

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("errorHandler", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});
