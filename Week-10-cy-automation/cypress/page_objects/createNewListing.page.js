import newListingDetails from "../fixtures/testData/newListingDetails.json";
import userCredentials from "../fixtures/testData/userCredentials.json";

class CreateNewListingPage {
  get stateSelect() {return cy.get('[data-value="SD"]')}
  get imageSelect() {return cy.get('input[type="file"]')}
  get isPublished() {return cy.get('[name="isPublished"]')}

  createListing() {
    const uniqueTitle = `${newListingDetails.title}-${Date.now()}`;
    Cypress.env('uniqueTitle', uniqueTitle); 
    cy.login(userCredentials.admin.email, userCredentials.admin.password);
    cy.fixture("/images/houseimage.jpg", "binary").then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file);

      const formdata = new FormData();
      formdata.append("title", uniqueTitle);
      formdata.append("description", newListingDetails.description);
      formdata.append("city", newListingDetails.city);
      formdata.append("address", newListingDetails.address);
      formdata.append("zipCode", newListingDetails.zipcode);
      formdata.append("state", newListingDetails.state);
      formdata.append("images", blob);
      formdata.append("isPublished", "true");
      formdata.append("price", newListingDetails.price);
      formdata.append("bedrooms", newListingDetails.bedrooms);
      formdata.append("bathrooms", newListingDetails.bathrooms);
      formdata.append("garage", newListingDetails.garage);
      formdata.append("sqft", newListingDetails.sqft);
      formdata.append("lotSize", newListingDetails.lotSize);

      cy.request({
        method: "POST",
        url: "/api/estate-objects",
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        body: formdata,
      }).then((response) => {
        const newListingId = JSON.parse(new TextDecoder().decode(new Uint8Array(response.body))).id;
        Cypress.env("newListingId", newListingId);
      });
    });
  }
  deleteListing() {
    cy.request("DELETE", `/api/estate-objects/${Cypress.env("newListingId")}`).then((deleteResponse) => {
      Cypress.env('uniqueTitle', null);
      Cypress.env('newListingId', null);
    });
  }
}
export default new CreateNewListingPage();
