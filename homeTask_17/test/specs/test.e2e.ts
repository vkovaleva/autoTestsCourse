import { expect } from 'chai';
import homePage from '../pageObjects/homePage';
import searchComponent from '../pageObjects/pageComponents/searchComponent';
import searchResultPage from '../pageObjects/searchResultPage';
import headerLinkComponent from '../pageObjects/pageComponents/headerLinkComponent';
import navigationComponent from '../pageObjects/pageComponents/navigationComponent';
import apiPage from '../pageObjects/apiPage';

describe('WebdriverIO website tests', async () => {
  beforeEach(async () => {
    await homePage.navigate();
  });

  it('first link from the search results should contain WebdriverIO word', async () => {
    await searchComponent.searchByText('WebdriverIO');
    const firstSearchLinkText = await searchComponent.selectSearchResultByNumber(1);
    expect(firstSearchLinkText).to.match(/\bWebdriverIO\b/);
  });

  it('page header text should correspond to link text', async () => {
    await searchComponent.searchByText('WebdriverIO');
    const firstSearchLinkText = await searchComponent.selectSearchResultByNumber(1);
    const openedPageHeaderText = await searchResultPage.getTitleText();
    expect(openedPageHeaderText).to.equal(firstSearchLinkText);
  });

  it('gitHub icon should contain link to webdriverio gitHub', async () => {
    const gitHubIconLinkText = await headerLinkComponent.getLinkByIcon('gitHub');
    expect(gitHubIconLinkText).to.equal('https://github.com/webdriverio/webdriverio');
  });

  it('page header text should be Introduction after click on API tab', async () => {
    await navigationComponent.goToTab('api');
    const openedPageHeaderText = await apiPage.getTitleText();
    expect(openedPageHeaderText).to.equal('Introduction');
  });
});
