class DashboardPage {
  get nameLbl() {return cy.get("h6");}
  get roleLbl() {return cy.get("a p");}
  get accountIcn() {return cy.get('[class*="MuiAvatar-root"]').eq(0)}
}
export default new DashboardPage();
