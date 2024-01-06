import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium } from '@playwright/test';
import { context } from './context';

let browser: Browser;
let contextBrowser: BrowserContext;

setDefaultTimeout(60000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async () => {
  contextBrowser = await browser.newContext();
  const page = await contextBrowser.newPage();
  context.page = page;
});

After(async () => {
  await context.page.close();
  await contextBrowser.close();
});

AfterAll(async () => {
  await browser.close();
});
