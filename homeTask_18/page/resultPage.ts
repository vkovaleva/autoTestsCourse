import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ResultPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get paginationNavLinkPrev() {
    return this.page.locator('.pagination-nav__link--prev');
  }

  get paginationNavLinkNext() {
    return this.page.locator('.pagination-nav__link--next');
  }

  get paginationNavLinkPrevLabel() {
    return this.page.locator('.pagination-nav__link--prev  .pagination-nav__label');
  }

  get paginationNavLinkNextLabel() {
    return this.page.locator('.pagination-nav__link--next  .pagination-nav__label');
  }

  get getTitle() {
    return this.page.locator('header>h1').textContent();
  }

  async navigateViaPagintor(direction: string) {
    switch (direction) {
      case 'prev':
        return await this.paginationNavLinkPrev.click();
      case 'next':
        return await this.paginationNavLinkNext.click();
      default:
        return 'The direction is not defined';
    }
  }

  async getPaginatorText(direction: string) {
    switch (direction) {
      case 'prev':
        return await this.paginationNavLinkPrevLabel.textContent();
      case 'next':
        return await this.paginationNavLinkNextLabel.textContent();
      default:
        return 'The direction is not defined';
    }
  }
}
