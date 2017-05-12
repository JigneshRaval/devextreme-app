import { DevextremeAppPage } from './app.po';

describe('devextreme-app App', () => {
  let page: DevextremeAppPage;

  beforeEach(() => {
    page = new DevextremeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
