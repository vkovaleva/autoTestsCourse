import { BasePage } from '../basePage';

class Header extends BasePage {
  constructor() {
    super();
  }

  moveToInstallWindow() {
    cy.get('[data-cy="header-install"]').click();
  }

  goToCommunityTab() {
    cy.get('[data-cy="dropdown-community"]').click();
  }
}

export default new Header();
