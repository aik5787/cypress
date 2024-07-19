class FeaturedListing {
  get modeSwitcher() {
    return cy.get('[type="checkbox"]');
  }
  get searchInput() {
    return cy.get('[id=":r1:"]');
  }
  get bedroomsDropdownSelect() {
    return cy.get('[data-value="2"]');
  }
  get bedroomIcon() {
    return cy.get('[viewBox="0 0 2048 1280"]');
  }
  get priceContainer() {
    return cy.get('[class*="MuiPaper-rounded"]');
  }

  // qantityBedrooms(num){
  //     this.bedroomIcon.parent().each($el => {
  //         cy.wrap($el).invoke('text').then(text => {
  //             const numberBedrooms = Number(text.replace(/\D/g,''));
  //             expect(numberBedrooms).to.be.greaterThan(num);
  //         });
  //     });
  // }

  // price(min, max){
  //     this.priceContainer.each($el => {
  //         cy.wrap($el).find('.MuiBox-root').eq(0).invoke('text').then(text => {
  //             const currentPrice = parseInt(text.replace(/\D/g,'').trim());
  //             expect(currentPrice).to.be.above(min);
  //             expect(currentPrice).to.be.below(max);
  //         });
  //     });
  // }
}
export default new FeaturedListing();
