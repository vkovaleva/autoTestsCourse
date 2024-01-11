import { Given } from '@cucumber/cucumber';
import { BasePage } from '../page/basePage';
import { context } from '../hooks/context';

let basePage: BasePage;

Given('User navigate to {string}', async (url: string) => {
  basePage = new BasePage(context.page);
  await basePage.navigate(url);
});
