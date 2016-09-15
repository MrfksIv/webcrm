import { WebcrmPage } from './app.po';

describe('webcrm App', function() {
  let page: WebcrmPage;

  beforeEach(() => {
    page = new WebcrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
