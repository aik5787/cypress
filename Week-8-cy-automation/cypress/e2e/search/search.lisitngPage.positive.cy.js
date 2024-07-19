import featuredListing from "../../page_objects/featuredListings.page";

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/featured-listings");
    featuredListing.modeSwitcher.click();
  });

  it("Should search by keyword", () => {
    featuredListing.searchInput.type("Sprucewood");
    cy.contains("Start Search").click();
    cy.contains("Test Real Estate Object");
    cy.contains("Dacotious");
    cy.contains("$ 555,777");
  });

  it("Should search by bedrooms", () => {
    cy.contains("label", "Bedrooms").parent().click();
    featuredListing.bedroomsDropdownSelect.click();
    cy.contains("Start Search").click();

    featuredListing.bedroomIcon.parent().each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const numberBedrooms = Number(text.replace(/\D/g, ""));
          expect(numberBedrooms).to.be.greaterThan(1);
        });
    });
    cy.contains("More Info").click();
    featuredListing.bedroomIcon
      .parent()
      .invoke("text")
      .then((text) => {
        const numberBedrooms = Number(text.replace(/\D/g, ""));
        expect(numberBedrooms).to.be.greaterThan(1);
      });
  });

  it("Should search by city", () => {
    cy.contains("label", "City").parent().type("Dacotious");
    cy.contains("Start Search").click();
    cy.contains("Dacotious").should("have.length", 1);
    cy.contains("Test Real Estate Object");
    cy.contains("8985 S Durango dr");
    cy.contains("State: SD");
    cy.contains("1122");
    cy.contains("Bedrooms: 2");
    cy.contains("Garage: 1");
    cy.contains("Bathrooms: 2");

    cy.contains("More Info").click();

    cy.contains("Test Real Estate Object");
    cy.contains("8985 S Durango dr");
    cy.contains("$ 555,777");
    cy.contains("Lot Size: 5600");
    cy.contains("Garage: 1");
    cy.contains("Bathrooms: 2");
    cy.contains("1122");
    cy.contains("Bedrooms: 2");
    cy.contains("Test Testerov");
    cy.contains("Sprucewood");
  });

  it ("Should search by price", () => {
    cy.visit("/featured-listings?price=500000-700000");
    featuredListing.priceContainer.each(($el) => {
      cy.wrap($el)
        .find(".MuiBox-root")
        .eq(0)
        .invoke("text")
        .then((text) => {
          const currentPrice = parseInt(text.replace(/\D/g, "").trim());
          expect(currentPrice).to.be.above(499999);
          expect(currentPrice).to.be.below(700001);
        });
    });
  });
});
