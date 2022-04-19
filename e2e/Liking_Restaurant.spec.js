Feature('Like Restaurant');

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('#/');

  I.executeScript('window.scrollTo(0, 1000);');
  I.wait(5);
  I.seeElement('a.button-detail');
  I.waitForElement('a.button-detail');
  I.click(locate('a.button-detail').first());
  I.wait(20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.button-detail');
});
