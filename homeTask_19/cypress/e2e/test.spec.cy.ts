import MainPage from '../page/mainPage';
import ResultPage from '../page/resultPage';
import Header from '../page/components/header';
import InstallModalWindow from '../page/components/installModalWindow';
import CommunityPage from '../page/communityPage';

describe('Cypress website tests', () => {
  beforeEach(() => {
    MainPage.open();
    MainPage.closeCookieWindow();
  });
  it('path bread crumbs from main to documentation page should be Overview->Why Cypress?', () => {
    MainPage.moveToDocumentationPage();
    ResultPage.getBreadCrumbsList().then((item) => {
      expect(item[0]).to.contain.text('Overview');
      expect(item[1]).to.contain.text('Why Cypress?');
    });
  });
  it('install button from the header should lead to modal window with two install options', () => {
    Header.moveToInstallWindow();
    InstallModalWindow.npmInstallButton()
      .should('be.enabled')
      .then(($button) => {
        expect($button).to.contain.text('npm install cypress');
      });
    InstallModalWindow.downloadButton()
      .should('have.attr', 'href')
      .and('equal', 'https://download.cypress.io/app');
  });
  it('community page should contain 9 news cards', () => {
    Header.goToCommunityTab();
    CommunityPage.newsCardsList().then((item) => {
      expect(item.length).to.equal(9);
    });
  });
});
