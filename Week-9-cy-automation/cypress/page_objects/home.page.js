class HomePage {
  get loginBtn() {return cy.get('[href="/auth/login"]')}
  get registartionBtn() {return cy.get('[href="/auth/register"]')}
  get searchInp() {return cy.get('[class*="MuiInputBase-input"]')}
  get toggle() {return cy.get('[type="checkbox"]')}
  get bedroomsDrpdwnSel() {return cy.get('[data-value="2"]')}
}
export default new HomePage();
