// import featuredListingPage from "../../page_objects/featuredListings.page";
// import listingDetailsCheck from "../../fixtures/testData/listingDetailsCheck.json";
// import newListingDetails from "../../fixtures/testData/newListingDetails.json"

// describe("Search", () => {
//   before(() => {
//     cy.createListing();
//   });

//   beforeEach(() => {
//     cy.errorHandler();
//     cy.visit("/featured-listings");
//     featuredListingPage.toggle.click();
//   });
  
//   after(() => {
//     cy.deleteListing();
//   });

//   it("Should search by keyword", () => {
//     featuredListingPage.searchInp.type(newListingDetails.title);
//     cy.contains("Start Search").click();
//     cy.contains(newListingDetails.title);
//     cy.contains(listingDetailsCheck.city);
//     cy.contains(listingDetailsCheck.price);
//   });

//   it("Should search by bedrooms", () => {
//     cy.contains("label", "Bedrooms").parent().click();
//     featuredListingPage.bedrmsDrpdwnSelect.click();
//     cy.contains("Start Search").click();

//     featuredListingPage.bedroomIcn.parent().each(($el) => {
//       cy.wrap($el)
//         .invoke("text")
//         .then((text) => {
//           const numberBedrooms = Number(text.replace(/\D/g, ""));
//           expect(numberBedrooms).to.be.greaterThan(1);
//         });
//     });

//     cy.contains("More Info").click();

//     featuredListingPage.bedroomIcn
//       .parent()
//       .invoke("text")
//       .then((text) => {
//         const numberBedrooms = Number(text.replace(/\D/g, ""));
//         expect(numberBedrooms).to.be.greaterThan(1);
//       });
//   });

//   it("Should search by city", () => {
//     cy.contains("label", "City").parent().type(listingDetailsCheck.city);
//     cy.contains("Start Search").click();
//     cy.contains(listingDetailsCheck.city).should("have.length", 1);
//     cy.contains(newListingDetails.title);
//     cy.contains(listingDetailsCheck.address);
//     cy.contains(listingDetailsCheck.state);
//     cy.contains(listingDetailsCheck.sqft);
//     cy.contains(listingDetailsCheck.bedrooms);
//     cy.contains(listingDetailsCheck.garage);
//     cy.contains(listingDetailsCheck.bathrooms);

//     cy.contains("More Info").click();

//     cy.contains(newListingDetails.title);
//     cy.contains(listingDetailsCheck.address);
//     cy.contains(listingDetailsCheck.price);
//     cy.contains(listingDetailsCheck.lotSize);
//     cy.contains(listingDetailsCheck.garage);
//     cy.contains(listingDetailsCheck.bedrooms);
//     cy.contains(listingDetailsCheck.sqft);
//     cy.contains(listingDetailsCheck.bathrooms);
//     cy.contains(listingDetailsCheck.descriptio);
//   });

//   it("Should search by price", () => {
//     const minPrice = listingDetailsCheck.minPrice;
//     const maxPrice = listingDetailsCheck.maxPrice;
//     cy.visit(`/featured-listings?price=${minPrice}-${maxPrice}`);
//     featuredListingPage.priceBox.each(($el) => {
//       cy.wrap($el)
//         .find(".MuiBox-root")
//         .eq(0)
//         .invoke("text")
//         .then((text) => {
//           const currentPrice = parseInt(text.replace(/\D/g, "").trim());
//           expect(currentPrice).to.be.above(minPrice - 1);
//           expect(currentPrice).to.be.below(maxPrice + 1);
//         });
//     });
//   });
// });
