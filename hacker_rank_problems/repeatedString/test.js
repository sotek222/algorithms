const repeatedString = require('./index');

test('repeatedString is a function', () =>   {
  expect(typeof repeatedString).toEqual('function');
});

describe("repeatedString returns the correct number of char in substring", () => {
  test("repeatedString works with 'aba' & 10 & a", () => {
    expect(repeatedString('aba', 10, 'a')).toEqual(7);
  });

  test("repeatedString works with 'abcac' & 10 & a", () => {
    expect(repeatedString('abcac', 10 , 'a')).toEqual(4);
  }); 

  test("repeatedString works with 'a' & 100000 & a", () => {
    expect(repeatedString('a', 100000 , 'a')).toEqual(100000);
  });

  test("repeatedString works with 'gfcaaaecbg' & 547602 & a",() => {
    expect(repeatedString('gfcaaaecbg', 547602 , 'a')).toEqual(164280);
  });


  test("repeatedString works with 'abcac' & 10 & c", () => {
    expect(repeatedString('cbaca', 10, 'c')).toEqual(4);
  });
});