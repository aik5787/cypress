import userCredentials from "../fixtures/testData/userCredentials.json";
import newListingDetails from "../fixtures/testData/newListingDetails.json";
import "cypress-file-upload";
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
Cypress.Commands.add("login", (email = userCredentials.realtor.email, password = userCredentials.realtor.password) => {
  cy.request("POST", "/api/users/login", {
    email: email,
    password: password,
  }).then((response) => {
    window.localStorage.setItem("accessToken", response.body.accessToken);
    cy.visit("dashboard/user/profile");
  });
});

Cypress.Commands.add("createListing", () => {
  cy.login(userCredentials.admin.email, userCredentials.admin.password);
  cy.fixture("/images/houseimage.jpg", "binary").then((file) => {
    const blob = Cypress.Blob.binaryStringToBlob(file);

    const formdata = new FormData();
    formdata.append("title", newListingDetails.title);
    formdata.append("description", newListingDetails.description);
    formdata.append("city", newListingDetails.city);
    formdata.append("address", newListingDetails.address);
    formdata.append("zipCode", newListingDetails.zipcode);
    formdata.append("state", newListingDetails.state);
    formdata.append("images", blob);
    formdata.append("isPublished", "true");
    formdata.append("price", newListingDetails.price);
    formdata.append("bedrooms", newListingDetails.bedrooms);
    formdata.append("bathrooms", newListingDetails.bathrooms);
    formdata.append("garage", newListingDetails.garage);
    formdata.append("sqft", newListingDetails.sqft);
    formdata.append("lotSize", newListingDetails.lotSize);

    cy.request({
      method: "POST",
      url: "/api/estate-objects",
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      body: formdata,
    }).then((response) => {
      const newListingId = JSON.parse(new TextDecoder().decode(new Uint8Array(response.body))).id;
      Cypress.env("newListingId", newListingId);
    });
  });
});

Cypress.Commands.add("deleteListing", () => {
  cy.request("DELETE", `/api/estate-objects/${Cypress.env("newListingId")}`).then((deleteResponse) => {
    Cypress.env("newListingId", null);
  });
});

Cypress.Commands.add("registerNewUser", (firstName, lastName, email, password) => {
  cy.request("POST", "/api/users/registration", {
    username: firstName,
    user_surname: lastName,
    email: email,
    password: password,
    isRealtor: "false",
  }).then((response) => {
    const newUserId = response.body.user.id;
    Cypress.env("newUserId", newUserId);
    window.localStorage.setItem("accessToken", response.body.accessToken);
    cy.visit("dashboard/user/profile");
  });
});

Cypress.Commands.add("deleteNewUser", () => {
  const newUserId = Cypress.env("newUserId");

  cy.login(userCredentials.admin.email, userCredentials.admin.password).then(() => {
    const adminAccessToken = window.localStorage.getItem("accessToken");

    cy.request({
      method: "DELETE",
      url: `/api/users/${newUserId}`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    }).then((deleteResponse) => {
      Cypress.env("newUserId", null);
      window.localStorage.removeItem("accessToken");
    });
  });
});


Cypress.Commands.add("overwriteRole", (newRoleTypes) => {
  const newUserId = Cypress.env("newUserId");

  cy.login(userCredentials.admin.email, userCredentials.admin.password).then(() => {
    const adminAccessToken = window.localStorage.getItem("accessToken");

    cy.request({
      method: "PUT",
      url: `/api/user/roles`,
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
        'Content-Type': 'application/json' 
      },
      body: {
        userId: newUserId,
        newRoleTypes: 'realtor'
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
    });
  });
});
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
