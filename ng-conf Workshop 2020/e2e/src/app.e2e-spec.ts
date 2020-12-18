import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('ng-conf Workshop 2020 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display project name in navigation', () => {
    page.navigateTo();
    page.getNavText().then((result) => {
      expect(result).toEqual('ng-conf Workshop 2020');
    });
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getWelcomeText()).toEqual('Welcome to Ignite UI for Angular!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
