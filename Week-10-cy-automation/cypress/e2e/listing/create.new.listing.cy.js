// import userCredentials from "../../fixtures/testData/userCredentials.json";
// import listingDetailsCheck from "../../fixtures/testData/listingDetailsCheck.json";
// import newListingDetails from "../../fixtures/testData/newListingDetails.json";
// import createNewListingPage from "../../page_objects/createNewListing.page";
// import homePage from "../../page_objects/home.page";
// describe("Listing", () => {
//   beforeEach(() => {
//     cy.errorHandler();
//     cy.visit("/");
//   });
  

//   it("Should create a new listing", () => {
//     cy.login(userCredentials.admin.email, userCredentials.admin.password);
//     cy.visit("/dashboard/real-estate/new");

//     cy.contains("label", "Title").parent().type(newListingDetails.title);
//     cy.contains("label", "Description").parent().type(newListingDetails.description);
//     cy.contains("label", "City").parent().type(newListingDetails.city);
//     cy.contains("label", "Address").parent().type(newListingDetails.address);
//     cy.contains("label", "Zip Code").parent().type(newListingDetails.zipcode);
//     cy.contains("label", "State").parent().click();
//     createNewListingPage.stateSelect.click();
//     createNewListingPage.imageSelect.attachFile("images/houseimage.jpg");
//     cy.contains("label", "Price").parent().type(newListingDetails.price);
//     cy.contains("label", "Bedrooms").parent().type(newListingDetails.bedrooms);
//     cy.contains("label", "Bathrooms").parent().type(newListingDetails.bathrooms);
//     cy.contains("label", "Garage").parent().type(newListingDetails.garage);
//     cy.contains("label", "Sqft").parent().type(newListingDetails.sqft);
//     cy.contains("label", "Lot Size").parent().type(newListingDetails.lotSize);
//     createNewListingPage.isPublished.click();
//     cy.contains("button", "Post").click();

//     cy.visit("/");

//     homePage.searchInp.eq(0).type(newListingDetails.title);
//     cy.contains("Start Search").click();

//     cy.contains("More Info").click();

//     cy.contains(newListingDetails.title);
//     cy.contains(listingDetailsCheck.address);
//     cy.contains(listingDetailsCheck.price);
//     cy.contains(listingDetailsCheck.lotSize);
//     cy.contains(listingDetailsCheck.garage);
//     cy.contains(listingDetailsCheck.bedrooms);
//     cy.contains(listingDetailsCheck.sqft);
//     cy.contains(listingDetailsCheck.bathrooms);
//     cy.contains(listingDetailsCheck.description);
//     // cy.get('img[src*="houseimage"]').should("be.visible").and("have.attr", "src").and("include", "houseimage");
//   });
// });
