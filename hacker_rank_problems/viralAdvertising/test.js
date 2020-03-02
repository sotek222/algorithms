const viralAds = require('./index');


test('viralAds is a function', () => {
  expect(typeof viralAds).toEqual('function');
});

describe('viralAds works with several different days', () => {
  test('viralAds gets the cumulative likes after 3 days', () => {
    expect(viralAds(3)).toEqual(9);
  });

  test('viralAds gets the cumulative likes after 5 days', () => {
    expect(viralAds(5)).toEqual(24);
  });

  test('viralAds gets the cumulative likes after 1 day', () => {
    expect(viralAds(1)).toEqual(2);
  });

  test('viralAds gets the cumulative after 10 days', () => {
    expect(viralAds(10)).toEqual(189);
  });
});