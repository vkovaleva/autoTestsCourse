import { BasePage } from './basePage';

class MainPage extends BasePage {
  constructor() {
    super();
  }

  closeCookieWindow() {
    cy.get("[role='dialog'] .osano-cm-dialog__close").click();
  }

  moveToDocumentationPage() {
    cy.get('[href="https://on.cypress.io"].border').click();
  }
}

export default new MainPage();
