import featuredListing from "../../page_objects/featuredListings.page";
import verificationTexts from "../../fixtures/testData/verificationText.json";

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/featured-listings");
    featuredListing.toggle.click();
  });

  it("Should search by keyword", () => {
    featuredListing.searchInp.type(verificationTexts.search.keyWord);
    cy.contains("Start Search").click();
    cy.contains(verificationTexts.search.title);
    cy.contains(verificationTexts.search.city);
    cy.contains(verificationTexts.search.price);
  });

  it("Should search by bedrooms", () => {
    cy.contains("label", "Bedrooms").parent().click();
    featuredListing.bedroomsDrpdwnSel.click();
    cy.contains("Start Search").click();

    featuredListing.bedroomIcn.parent().each(($el) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          const numberBedrooms = Number(text.replace(/\D/g, ""));
          expect(numberBedrooms).to.be.greaterThan(1);
        });
    });

    cy.contains("More Info").click();

    featuredListing.bedroomIcn
      .parent()
      .invoke("text")
      .then((text) => {
        const numberBedrooms = Number(text.replace(/\D/g, ""));
        expect(numberBedrooms).to.be.greaterThan(1);
      });
  });

  it("Should search by city", () => {
    cy.contains("label", "City").parent().type(verificationTexts.search.city);
    cy.contains("Start Search").click();
    cy.contains(verificationTexts.search.city).should("have.length", 1);
    cy.contains(verificationTexts.search.title);
    cy.contains(verificationTexts.search.address);
    cy.contains(verificationTexts.search.state);
    cy.contains(verificationTexts.search.sqft);
    cy.contains(verificationTexts.search.bedrooms);
    cy.contains(verificationTexts.search.garage);
    cy.contains(verificationTexts.search.bathrooms);

    cy.contains("More Info").click();

    cy.contains(verificationTexts.search.title);
    cy.contains(verificationTexts.search.address);
    cy.contains(verificationTexts.search.price);
    cy.contains(verificationTexts.search.lotSize);
    cy.contains(verificationTexts.search.garage);
    cy.contains(verificationTexts.search.bedrooms);
    cy.contains(verificationTexts.search.sqft);
    cy.contains(verificationTexts.search.bathrooms);
    cy.contains(verificationTexts.search.realtorName);
    cy.contains(verificationTexts.search.description);
  });

  it("Should search by price", () => {
    const minPrice = verificationTexts.search.minPrice;
    const maxPrice = verificationTexts.search.maxPrice;
    cy.visit(`/featured-listings?price=${minPrice}-${maxPrice}`);
    featuredListing.priceBox.each(($el) => {
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
