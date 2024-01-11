import { BaseComponents } from './baseComponents';

class HeaderLinkComponent extends BaseComponents {
  constructor() {
    super();
  }

  get getGitHubLink() {
    return $('.header-github-link');
  }

  async getLinkByIcon(iconName: string) {
    switch (iconName) {
      case 'gitHub':
        return await this.getGitHubLink.getAttribute('href');
        break;
      default:
        return 'There is no such link';
    }
  }
}

export default new HeaderLinkComponent();
