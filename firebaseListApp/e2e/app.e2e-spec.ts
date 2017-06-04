import { FirebaseListAppPage } from './app.po';

describe('firebase-list-app App', () => {
  let page: FirebaseListAppPage;

  beforeEach(() => {
    page = new FirebaseListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
