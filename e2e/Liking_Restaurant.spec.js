Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/detail/s1knt6za9kkfw1e867');
});

Scenario('test Liked one of the restaurants', ({ I }) => {
  I.seeElement('#likeButton');
  I.see('[aria-label="like this restaurant"]', '.like');
});
