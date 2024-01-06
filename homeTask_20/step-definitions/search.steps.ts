import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SearchComponent } from '../page/components/searchComponent';
import { ResultPage } from '../page/resultPage';
import { context } from '../hooks/context';

let searchComponent: SearchComponent;
let resultPage: ResultPage;
let searchResultText: string | null = '';

Given('User enter {string} world in a search', async (searchInput: string) => {
  searchComponent = new SearchComponent(context.page);
  await searchComponent.enterTextToSearch(searchInput);
});

When('User get {int} st link in a search', async (linkNumber: number) => {
  searchResultText = await searchComponent.getResultByNumber(linkNumber);
});

When('User go to {int} st link from a search', async (linkNumber: number) => {
  await searchComponent.openSearchResultByNumber(linkNumber);
});

Then('Link should contain {string} world', async (searchInput: string) => {
  const regExp = new RegExp(searchInput, 'i');
  expect(searchResultText).toMatch(regExp);
});

Then('Page header text should correspond to link text', async () => {
  resultPage = new ResultPage(context.page);
  expect(await resultPage.getTitle).toBe(searchResultText);
});
