class HomePage {
  get loginBtn() {
    return cy.get('[href="/auth/login"]');
  }
  get registartionBtn() {
    return cy.get('[href="/auth/register"]');
  }
  get searchInput() {
    return cy.get('[id=":r1:"]');
  }
  get modeSwitcher() {
    return cy.get('[type="checkbox"]');
  }
  get bedroomsDropdownSelect() {
    return cy.get('[data-value="2"]');
  }
}
export default new HomePage();
