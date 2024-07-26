import homePage from "../../page_objects/home.page";
import featuredListingPage from "../../page_objects/featuredListings.page";
import listingDetails from "../../fixtures/testData/listingDetails.json";

describe("Search", () => {
  beforeEach(() => {
    cy.errorHandler(); 
    cy.visit("/");
    homePage.toggle.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInp.eq(0).type(listingDetails.keyWord);
    cy.contains("Start Search").click();
    cy.contains(listingDetails.title);
    cy.contains(listingDetails.city);
    cy.contains(listingDetails.price);
  });

  it("Should search by bedrooms", () => {
    cy.contains("label", "Bedrooms").parent().click();
    homePage.bedrmsDrpdwnSelect.click();
    cy.contains("Start Search").click();

    featuredListingPage.bedroomIcn.parent().each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const numberBedrooms = Number(text.replace(/\D/g, ""));
          expect(numberBedrooms).to.be.greaterThan(1);
        });
    });

    cy.contains("More Info").click();

    featuredListingPage.bedroomIcn
      .parent()
      .invoke("text")
      .then((text) => {
        const numberBedrooms = Number(text.replace(/\D/g, ""));
        expect(numberBedrooms).to.be.greaterThan(1);
      });
  });

  it("Should search by city", () => {
    cy.contains("label", "City").parent().type(listingDetails.city);
    cy.contains("Start Search").click();
    cy.contains(listingDetails.city).should("have.length", 1);
    cy.contains(listingDetails.title);
    cy.contains(listingDetails.address);
    cy.contains(listingDetails.state);
    cy.contains(listingDetails.sqft);
    cy.contains(listingDetails.bedrooms);
    cy.contains(listingDetails.garage);
    cy.contains(listingDetails.bathrooms);

    cy.contains("More Info").click();

    cy.contains(listingDetails.title);
    cy.contains(listingDetails.address);
    cy.contains(listingDetails.price);
    cy.contains(listingDetails.lotSize);
    cy.contains(listingDetails.garage);
    cy.contains(listingDetails.bedrooms);
    cy.contains(listingDetails.sqft);
    cy.contains(listingDetails.bathrooms);
    cy.contains(listingDetails.realtorName);
    cy.contains(listingDetails.description);
  });

  it("Should search by price", () => {
    const minPrice = listingDetails.minPrice;
    const maxPrice = listingDetails.maxPrice;
    cy.visit(`/featured-listings?price=${minPrice}-${maxPrice}`);
    featuredListingPage.priceBox.each(($el) => {
      cy.wrap($el)
        .find(".MuiBox-root")
        .eq(0)
        .invoke("text")
        .then((text) => {
          const currentPrice = parseInt(text.replace(/\D/g, "").trim());
          expect(currentPrice).to.be.above(minPrice - 1);
          expect(currentPrice).to.be.below(maxPrice + 1);
        });
    });
  });
});
