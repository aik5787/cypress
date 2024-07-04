describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type('test12345@gmail.com');
    cy.get('[name="password"]').type('qwerty123');
    cy.contains('Login').click();
  });

  it("Log in successfully!", () => {
   
    cy.get('a p').should('have.text', 'role: user');
    cy.title().should('eq', 'User: Profile | Delek Homes');

  });

   it("Log out successfully!", () => {
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains('Logout').click();

    cy.url().should('include', 'auth/login')
    cy.title().should('eq', 'Login | Delek Homes');
  });
});
