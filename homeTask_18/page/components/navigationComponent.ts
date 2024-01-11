import { Page } from '@playwright/test';
import { BasePage } from '../basePage';

export class NavigationComponent extends BasePage {
  dropDownOptionName: string = '';
  navigationTabName: string = '';

  constructor(page: Page) {
    super(page);
  }

  get navigationTitle() {
    return this.page.locator('.navbar__title');
  }

  get navigationDropdown() {
    return this.page.locator('.navbar__item.dropdown');
  }

  get dropDowhLink() {
    return this.page.locator('.dropdown__link', { hasText: `${this.dropDownOptionName}` });
  }

  get getNavTabLink() {
    return this.page.locator('.navbar__link', { hasText: `${this.navigationTabName}` });
  }

  async getNavigationTitleText() {
    return await this.navigationTitle.textContent();
  }

  async selectOptionInNavigationDropdown(optionName: string) {
    await this.navigationDropdown.hover();
    this.dropDownOptionName = optionName;
    await this.dropDowhLink.click();
  }

  async goToTab(tabName: string) {
    this.navigationTabName = tabName;
    await this.getNavTabLink.click();
  }
}
