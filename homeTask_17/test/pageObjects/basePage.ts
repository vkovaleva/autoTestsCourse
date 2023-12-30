import { baseUrl } from '../data/urls';

export class BasePage {
  async navigate() {
    const url = baseUrl;
    await browser.url(url);
  }
  get pageTitle() {
    return $('header>h1');
  }

  async getTitleText() {
    const pageTitle = await this.pageTitle.getText();
    return pageTitle;
  }
}
