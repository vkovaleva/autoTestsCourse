import { BaseComponents } from './baseComponents';

class NavigationComponent extends BaseComponents {
  constructor() {
    super();
  }

  get getApiNavTab() {
    return $('.navbar__items [href="/docs/api"]');
  }

  async goToTab(tabName: string) {
    switch (tabName) {
      case 'api':
        return await this.click(this.getApiNavTab);
        break;
      default:
        return 'There is no such tab';
    }
  }
}

export default new NavigationComponent();
