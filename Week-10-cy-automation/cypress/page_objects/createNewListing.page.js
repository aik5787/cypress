class CreateNewListingPage {
  get stateSelect() {return cy.get('[data-value="SD"]')}
  get imageSelect() {return cy.get('input[type="file"]')}
  get isPublished() {return cy.get('[name="isPublished"]')}
}
export default new CreateNewListingPage();
