import { test, expect } from '@playwright/test';
import { BasePage } from '../page/basePage';
import { SearchComponent } from '../page/components/searchComponent';
import { ResultPage } from '../page/resultPage';
import { NavigationComponent } from '../page/components/navigationComponent';

test.describe('Playwright website tests', function () {
  let basePage: BasePage;
  let searchComponent: SearchComponent;
  let resultPage: ResultPage;
  let navigationComponent: NavigationComponent;

  test.beforeEach(async ({ page, baseURL }) => {
    basePage = new BasePage(page);
    searchComponent = new SearchComponent(page);
    navigationComponent = new NavigationComponent(page);
    await basePage.navigate(`${baseURL}`);
  });

  test('main page should have Playwright title', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  const dropDownItems = ['Python', 'Java', '.NET'];
  for (const name of dropDownItems) {
    test(`navigation title should contain ${name} if ${name} was set in navigation dropdown`, async () => {
      await navigationComponent.selectOptionInNavigationDropdown(name);
      expect(await navigationComponent.getNavigationTitleText()).toContain(name);
    });
  }

  test('first link from the search results should contain Playwright word', async () => {
    const searchResultText = await searchComponent.getSearchResultByNumber('Playwright', 1);
    expect(searchResultText).toMatch(/Playwright/i);
  });

  test('page header text should correspond to link text from search', async ({ page }) => {
    const searchResultText = await searchComponent.getSearchResultByNumber('Playwright', 1);
    resultPage = new ResultPage(page);
    expect(await resultPage.getTitle).toBe(searchResultText);
  });

  test('page paginator should lead to definite page', async ({ page }) => {
    await navigationComponent.goToTab('API');
    resultPage = new ResultPage(page);
    const currentPageTitle = await resultPage.getTitle;
    const prevPaginatorText = await resultPage.getPaginatorText('prev');
    const nextPaginatorText = await resultPage.getPaginatorText('next');
    await resultPage.navigateViaPagintor('prev');
    resultPage = new ResultPage(page);
    expect(await resultPage.getTitle).toBe(prevPaginatorText);
    await resultPage.navigateViaPagintor('next');
    resultPage = new ResultPage(page);
    expect(await resultPage.getTitle).toBe(currentPageTitle);
    await resultPage.navigateViaPagintor('next');
    resultPage = new ResultPage(page);
    expect(nextPaginatorText).toBe(await resultPage.getTitle);
  });
});
