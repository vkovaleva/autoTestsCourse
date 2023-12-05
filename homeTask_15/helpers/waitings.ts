import { By, until, WebDriver } from 'selenium-webdriver';

export async function waitForElementLocated(
  driver: WebDriver,
  locator: By,
  timeout: number = 10000,
) {
  await driver.wait(until.elementLocated(locator), timeout);
  return await driver.findElement(locator);
}

export async function waitForElementVisibility(
  driver: WebDriver,
  locator: By,
  timeout: number = 10000,
) {
  await driver.wait(until.elementIsVisible(driver.findElement(locator)), timeout);
  return await driver.findElement(locator);
}
