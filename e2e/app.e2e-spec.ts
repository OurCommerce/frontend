import { OcFrontendPage } from './app.po';

describe('oc-frontend App', function() {
  let page: OcFrontendPage;

  beforeEach(() => {
    page = new OcFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
