class LoginPage {
  get emailInp() {return cy.get('[name="email"]')}
  get passwordInp() {return cy.get('[name="password"]')}
  get loginBtn() {return cy.contains("Login")}
}
export default new LoginPage();
