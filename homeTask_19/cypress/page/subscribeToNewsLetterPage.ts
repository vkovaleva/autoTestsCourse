import { BasePage } from './basePage';

class SubscribeToNewsLetterPage extends BasePage {
  constructor() {
    super();
  }

  subscribeError() {
    return cy.get('#subscribe-error');
  }

  subscribe(email: string) {
    cy.get('input#subscribe_email').type(email, { delay: 100 });
    cy.get('button').contains('Subscribe today').click();
  }
}

export default new SubscribeToNewsLetterPage();
