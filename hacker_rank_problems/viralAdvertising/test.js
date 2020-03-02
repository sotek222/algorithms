const viralAds = require('./index');


test('viralAds is a function', () => {
  expect(typeof viralAds).toEqual('function');
});

describe('viralAds works with several different days', () => {
  test('viralAds gets the cumulative after 3 days', () => {
    expect(viralAds(3)).toEqual(9);
  });
});