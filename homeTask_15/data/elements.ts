import { By } from 'selenium-webdriver';

export const extensionsTab = By.xpath(
  '//nav[@data-is-preview="false"]/ul/li[not(@more-menu-item)]//a[@href="/extensions"]',
);
export const pageTitle = By.xpath('//h1/span');
export const searchButton = By.xpath(
  '//nav[@role="navigation"]/following-sibling::div//div[@role="button"]',
);
export const searchInput = By.xpath('//input[@type="search"]');
export const firstLink = By.xpath('//a[@data-position="1"]/../div');
