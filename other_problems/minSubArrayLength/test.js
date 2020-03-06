const msal = require('./index');

test('msal is a function', () => {
  expect(typeof msal).toEqual('function');
});

describe('msal can return the minimum sub-array length', () => {
  test('msal can return the minmum length from [2, 3, 1, 2, 4, 3], 7', () => {
    expect(msal([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
  });

  test('msal can return the minmum length from [1, 1, 2, 1, 1, 1], 4', () => {
    expect(msal([1, 1, 2, 1, 1, 1], 4)).toEqual(3);
  });

  test('msal can return the minmum length from [1, 1, 6, 1, 2, 5, 7, 1, 1], 11', () => {
    expect(msal([1, 1, 6, 1, 2, 5, 7, 1, 1], 11)).toEqual(2);
  }); 

  test('msal can return the minmum length from [50, 10, 1, 5, 65, 100, 20, 12, 10, 1, 56, 12, 11], 254', () => {
    expect(msal([50, 10, 1, 5, 65, 100, 20, 12, 10, 1, 56, 12, 11], 254)).toEqual(7);
  }); 
});