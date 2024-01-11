import { BasePage } from '../basePage';

class Footer extends BasePage {
  constructor() {
    super();
  }

  moveToSubscribeNewsLetterPage() {
    cy.get('[data-cy="footer-newsletter"]').click();
  }
}

export default new Footer();
