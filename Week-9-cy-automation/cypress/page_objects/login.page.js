class LoginPage {
  get emailInp() {return cy.get('[name="email"]')}
  get passwordInp() {return cy.get('[name="password"]')}
  get loginBtn() {return cy.contains("Login")}

  login(email, password) {
    this.loginBtn.click();
    this.emailInp.type(email);
    this.passwordInp.type(password);
    this.loginBtn.click();
  }
}
export default new LoginPage();
