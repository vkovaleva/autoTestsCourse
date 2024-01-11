import { BasePage } from '../basePage';

class InstallModalWindow extends BasePage {
  constructor() {
    super();
  }

  npmInstallButton() {
    return cy.get('[data-cy="modal-install-copy"]');
  }

  downloadButton() {
    return cy.get('[data-cy="modal-install-download"]');
  }
}

export default new InstallModalWindow();
