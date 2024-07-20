class FeaturedListing {
  get toggle() {return cy.get('[type="checkbox"]')}
  get searchInp() {return cy.get('[id=":r1:"]')}
  get bedroomsDrpdwnSel() {return cy.get('[data-value="2"]')}
  get bedroomIcn() {return cy.get('[viewBox="0 0 2048 1280"]')}
  get priceBox() {return cy.get('[class*="MuiPaper-rounded"]')}
}
export default new FeaturedListing();
