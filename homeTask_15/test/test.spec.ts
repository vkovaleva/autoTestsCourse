import { Builder, Capabilities, Key } from 'selenium-webdriver';
import { expect } from 'chai';
import { waitForElementLocated, waitForElementVisibility } from '../helpers/waitings';
import * as Element from '../data/elements';
import { baseUrl } from '../data/urls';

describe('ChromeDriver website tests', () => {
  let driver: any;
  before(async () => {
    driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.manage().window().setSize({ width: 1920, height: 1200 });
  });

  after(async () => {
    await driver.quit();
  });

  it("main title text should be 'ChromeDriver' on main page", async () => {
    await driver.get(baseUrl);
    const pageTitle = await driver.getTitle();
    expect(pageTitle).to.include('ChromeDriver');
  });

  it("main title text should be 'Chrome Extensions' on extension page", async () => {
    await driver.get(baseUrl);
    const extensionsTab = await driver.findElement(Element.extensionsTab);
    await extensionsTab.click();
    const pageTitle = await waitForElementLocated(driver, Element.pageTitle);
    await driver.executeScript(
      "arguments[0].style.backgroundColor = '" + 'yellow' + "'",
      pageTitle,
    );
    const pageTitleText = await pageTitle.getText();
    expect(pageTitleText).to.include('Chrome Extensions');
  });

  it('first link from the search results should contain driver word', async () => {
    await driver.get(baseUrl);
    const searchButton = await driver.findElement(Element.searchButton);
    await searchButton.click();
    const searchInput = await waitForElementVisibility(driver, Element.searchInput);
    await driver.actions().sendKeys(searchInput, 'driver').keyDown(Key.ENTER).perform();
    const firstLink = await waitForElementLocated(driver, Element.firstLink);
    const linkText = await firstLink.getText();
    expect(linkText).to.match(/\bdriver\b/);
  });
});
