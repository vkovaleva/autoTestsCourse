import { BasePage } from './basePage';

class CommunityPage extends BasePage {
  constructor() {
    super();
  }

  newsCardsList() {
    return cy.get('section .card');
  }

  searchInput() {
    return cy.get('input[type="search"]');
  }
}

export default new CommunityPage();
