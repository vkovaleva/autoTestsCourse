import { BasePage } from './basePage';

class ResultPage extends BasePage {
  constructor() {
    super();
  }

  getBreadCrumbsList() {
    return cy.get('.breadcrumbs__item span');
  }
}

export default new ResultPage();
