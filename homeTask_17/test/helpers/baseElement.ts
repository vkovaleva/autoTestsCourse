export class BaseElements {
  async click(element: any) {
    await element.waitForClickable();
    await element.click();
  }

  async setValue(element: any, text: string) {
    await element.waitForDisplayed();
    await element.setValue(text);
  }

  async getText(element: any) {
    await element.waitForDisplayed();
    return element.getText();
  }
}
