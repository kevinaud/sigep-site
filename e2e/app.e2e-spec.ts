import { SigepPage } from './app.po';

describe('sigep App', function() {
  let page: SigepPage;

  beforeEach(() => {
    page = new SigepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
