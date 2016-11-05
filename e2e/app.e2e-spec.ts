import { SsoidhFirePage } from './app.po';

describe('ssoidh-fire App', function() {
  let page: SsoidhFirePage;

  beforeEach(() => {
    page = new SsoidhFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
