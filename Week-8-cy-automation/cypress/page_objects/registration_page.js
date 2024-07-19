class RegistrationPage {
  get firstNameInput() {
    return cy.get('[name="firstName"]');
  }
  get lastNameInput() {
    return cy.get('[name="lastName"]');
  }
  get emailInput() {
    return cy.get('[name="email"]');
  }
  get paswwordInput() {
    return cy.get('[name="password"]');
  }
  get submitBtn() {
    return cy.get('[type="submit"]');
  }
  get alertMessage() {
    return cy.get("form .MuiAlert-message");
  }
  get firstNameReqAlert() {
    return cy.get('[id=":r5:-helper-text"]');
  }
  get lastNameReqAlert() {
    return cy.get('[id=":r6:-helper-text"]');
  }
  get emailReqAlert() {
    return cy.get('[id=":r7:-helper-text"]');
  }
  get passwordReqAlert() {
    return cy.get('[id=":r8:-helper-text"]');
  }

  registration(firstName, lastName, email, password) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.paswwordInput.type(password);
    this.submitBtn.click();
  }
}
export default new RegistrationPage();
