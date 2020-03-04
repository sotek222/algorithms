const repeatedString = require('./index');

test('repeatedString is a function', () =>   {
  expect(typeof repeatedString).toEqual('function');
});

describe("repeatedString returns the correct number of 'a'", () => {
  test("repeatedString works with 'aba' & 10", () => {
    expect(repeatedString('aba', 10)).toEqual(7);
  });

  test("repeatedString works with 'abcac' & 10", () => {
    expect(repeatedString('abcac', 10)).toEqual(4);

  }); 

  test("repeatedString works with 'a' & 100000", () => {
    expect(repeatedString('a', 100000)).toEqual(100000);
  });
});