class RegistrationPage {
  get firstNmInp() {return cy.get('[name="firstName"]')}
  get lastNmInp() {return cy.get('[name="lastName"]')}
  get emailInp() {return cy.get('[name="email"]')}
  get paswwordInp() {return cy.get('[name="password"]')}
  get submitBtn() {return cy.get('[type="submit"]')}
  get alertMes() {return cy.get("form .MuiAlert-message")}
  get firstNmReqAl() {return cy.get('[id=":r5:-helper-text"]')}
  get lastNmReqAl() {return cy.get('[id=":r6:-helper-text"]')}
  get emailReqAl() {return cy.get('[id=":r7:-helper-text"]')}
  get passwordReqAl() {return cy.get('[id=":r8:-helper-text"]')}

  registration(firstName, lastName, email, password) {
    this.firstNmInp.type(firstName);
    this.lastNmInp.type(lastName);
    this.emailInp.type(email);
    this.paswwordInp.type(password);
    this.submitBtn.click();
  }
}
export default new RegistrationPage();
