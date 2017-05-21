import { AppInteractionPage } from './app.po';

describe('app-interaction App', () => {
  let page: AppInteractionPage;

  beforeEach(() => {
    page = new AppInteractionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
