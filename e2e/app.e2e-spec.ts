import { MovieClubPage } from './app.po';

describe('movie-club App', () => {
  let page: MovieClubPage;

  beforeEach(() => {
    page = new MovieClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
