export class BasePage {
  constructor() {}

  open() {
    cy.visit(`${Cypress.env('baseURL')}`);
  }
}
