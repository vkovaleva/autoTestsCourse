import { expect } from 'chai';

describe('WebdriverIO website tests', async () => {
  beforeEach(async () => {
    await browser.url(`https://webdriver.io/`);
  });

  it('first link from the search results should contain WebdriverIO word', async () => {
    const searchButton = await $('.DocSearch-Button');
    await searchButton.click();
    const searchInput = await $('#docsearch-input');
    await searchInput.setValue('WebdriverIO');
    const firstSearchLink = await $('#docsearch-item-0 span');
    const firstSearchLinkText = await firstSearchLink.getText();
    expect(firstSearchLinkText).to.match(/\bWebdriverIO\b/);
  });

  it('page header text should correspond to link text', async () => {
    const searchButton = await $('.DocSearch-Button');
    await searchButton.click();
    const searchInput = await $('#docsearch-input');
    await searchInput.setValue('WebdriverIO');
    const firstSearchLink = await $('#docsearch-item-0 span');
    const firstSearchLinkText = await firstSearchLink.getText();
    await firstSearchLink.click();
    const openedPageHeader = await $('header>h1');
    const openedPageHeaderText = await openedPageHeader.getText();
    expect(openedPageHeaderText).to.equal(firstSearchLinkText);
  });

  it('gitHub icon should contain link to webdriverio gitHub', async () => {
    const gitHubIcon = await $('.header-github-link');
    const gitHubIconLinkText = await gitHubIcon.getAttribute('href');
    expect(gitHubIconLinkText).to.equal('https://github.com/webdriverio/webdriverio');
  });

  it('page header text should be Introduction after click on API tab', async () => {
    const apiNavTab = await $('.navbar__items [href="/docs/api"]');
    await apiNavTab.click();
    const openedPageHeader = await $('header>h1');
    const openedPageHeaderText = await openedPageHeader.getText();
    expect(openedPageHeaderText).to.equal('Introduction');
  });
});
