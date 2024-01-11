import { Page } from '@playwright/test';
import { BasePage } from '../basePage';

export class SearchComponent extends BasePage {
  searchItemNumber: number = 0;
  constructor(page: Page) {
    super(page);
  }

  get searchButton() {
    return this.page.locator('.DocSearch.DocSearch-Button');
  }

  get searchField() {
    return this.page.locator('.DocSearch-Input');
  }

  get searchItems() {
    return this.page.locator(`#docsearch-item-${this.searchItemNumber}`);
  }

  async getSearchResultByNumber(searchText: string, searchItemNumber: number) {
    await this.searchButton.click();
    await this.searchField.fill(searchText);
    this.searchItemNumber = searchItemNumber - 1;
    const searchItemText = await this.searchItems.textContent();
    await this.searchItems.click();
    return searchItemText;
  }

  async enterTextToSearch(searchInput: string) {
    await this.searchButton.click();
    await this.searchField.fill(searchInput);
  }

  async getResultByNumber(searchItemNumber: number) {
    this.searchItemNumber = searchItemNumber - 1;
    const searchItemText = await this.searchItems.textContent();
    return searchItemText;
  }

  async openSearchResultByNumber(searchItemNumber: number) {
    this.searchItemNumber = searchItemNumber - 1;
    await this.searchItems.click();
  }
}
