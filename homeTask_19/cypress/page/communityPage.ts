import { BasePage } from './basePage';

class CommunityPage extends BasePage {
  constructor() {
    super();
  }

  newsCardsList() {
    return cy.get('section .card');
  }
}

export default new CommunityPage();
