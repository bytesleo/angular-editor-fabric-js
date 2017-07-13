import { A4Page } from './app.po';

describe('a4 App', () => {
  let page: A4Page;

  beforeEach(() => {
    page = new A4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
