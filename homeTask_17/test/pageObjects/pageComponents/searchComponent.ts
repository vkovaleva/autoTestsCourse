import { BaseComponents } from './baseComponents';

class SearchComponent extends BaseComponents {
  constructor() {
    super();
  }

  get searchButton() {
    return $('.DocSearch-Button');
  }

  get searchInput() {
    return $('#docsearch-input');
  }

  get getSearchResults() {
    return $('#docsearch-item-0 span');
  }

  async searchByText(searchText: string) {
    await this.click(this.searchButton);
    await this.setValue(this.searchInput, searchText);
  }

  async selectSearchResultByNumber(searchResultNumber: number) {
    const searchItemText = await this.getText(this.getSearchResults);
    await this.click(this.getSearchResults);
    return searchItemText;
  }
}

export default new SearchComponent();
