class DashboardPage {
  get nameLbl() {
    return cy.get("h6");
  }
  get roleLbl() {
    return cy.get("a p");
  }
  get accountIcon() {
    return cy.get('button [data-testid="PersonIcon"]');
  }
  get logout() {
    return cy.contains("Logout");
  }
}
export default new DashboardPage();
