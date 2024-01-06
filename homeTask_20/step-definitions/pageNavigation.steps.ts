import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ResultPage } from '../page/resultPage';
import { NavigationComponent } from '../page/components/navigationComponent';
import { context } from '../hooks/context';

let resultPage: ResultPage;
let navigationComponent: NavigationComponent;

Given('User goes to {string} tab', async (tabName: string) => {
  navigationComponent = new NavigationComponent(context.page);
  await navigationComponent.goToTab(tabName);
});

When('User goes to {string} page using navigation button', async (direction: string) => {
  resultPage = new ResultPage(context.page);
  await resultPage.navigateViaPagintor(direction);
});

Then('Page header text should be {string}', async (headerName: string) => {
  resultPage = new ResultPage(context.page);
  expect(await resultPage.getTitle).toBe(headerName);
});
