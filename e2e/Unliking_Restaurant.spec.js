Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/detail/ughslf146iqkfw1e867');
});

Scenario('test Unliked one of the restaurants', ({ I }) => {
  I.seeElement('#likeButton');
  I.see('[aria-label="unlike this restaurant"]', '.like');
});
