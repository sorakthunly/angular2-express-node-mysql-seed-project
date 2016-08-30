import { WebpackcliPage } from './app.po';

describe('webpackcli App', function() {
  let page: WebpackcliPage;

  beforeEach(() => {
    page = new WebpackcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
