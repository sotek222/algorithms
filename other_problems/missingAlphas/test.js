const missingAlphas = require('./index');

test('missingAlphas is a function', () => {
  expect(typeof missingAlphas).toEqual('function');
});

describe('missingAlphas returns missing letters from many sentences', () => {
  test('missingAlphas returns the missing letters from "A lazy dog jumps over the quick brown fox."', () => {
    expect(missingAlphas("A lazy dog jumps over the quick brown fox.")).toEqual("");
  });
  test('missingAlphas returns the missing letters from an empty sentence', () => {
    expect(missingAlphas("")).toEqual("abcdefghijklmnopqrstuvwxyz");
  });
  test('missingAlphas returns the missing letters from "Let\'s fly to Hawaii in May!"', () => {
    expect(missingAlphas("Let's fly to Hawaii in May!")).toEqual("bcdgjkpqruvxz");
  });
  test('missingAlphas returns the missing letters from "Hello World!!!"', () => {
    expect(missingAlphas("Hello World!!!")).toEqual("abcfgijkmnpqstuvxyz");
  });
  test('missingAlphas returns the missing letters from "1011001100101"', () => {
    expect(missingAlphas("1011001100101")).toEqual("abcdefghijklmnopqrstuvwxyz");
  });
});