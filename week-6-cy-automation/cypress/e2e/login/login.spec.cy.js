describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("test12345@gmail.com");
    cy.get('[name="password"]').type("qwerty123");
    cy.contains("Login").click();
  });

  it("Should Log in with existing account", () => {
    cy.get("h6").should("have.text", "Test  Test");
    cy.get("a p").should("have.text", "role: user");
    cy.title().should("eq", "User: Profile | Delek Homes");
  });

  it("Should Log out", () => {
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

    cy.url().should("include", "auth/login");
    cy.title().should("eq", "Login | Delek Homes");
  });
});
