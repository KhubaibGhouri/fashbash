import { FashbashPage } from './app.po';

describe('fashbash App', () => {
  let page: FashbashPage;

  beforeEach(() => {
    page = new FashbashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
