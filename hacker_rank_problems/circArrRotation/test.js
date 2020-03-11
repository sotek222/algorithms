const circularArrayRotation = require('./index');

test('circularArrayRotation is a function', () => {
  expect(typeof circularArrayRotation).toEqual('function')
});

describe('circularArrayRotation can rotate and return correct value at given indices', () => {
  test('circularArrayRotation with [3,4,5] and 2 rotations', () => {
    expect(circularArrayRotation([3,4,5], 2, [1,2])).toEqual([5,3]);
  });
  test('circularArrayRotation with [10,20,7,5,6,1] and 5 rotations', () => {
    expect(circularArrayRotation([10,20,7,5,6,1], 5, [3,4,1,2])).toEqual([6,1,7,5]);
  });
  test('circularArrayRotation with [1,2,3,4,5] and 10 rotations', () => {
    expect(circularArrayRotation([1,2,3,4,5], 10, [1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });
  test('circularArrayRotation with ["World ", "!", "Hello"] and 1 rotations', () => {
    expect(circularArrayRotation(["World ", "!", "Hello"], 1, [0,1,2].join(""))).toEqual("Hello World!");
  });
  test('circularArrayRotation with [5,4,3,2,1] and 8 rotations', () => {
    expect(circularArrayRotation([5,4,3,2,1], 8, [3,1,0])).toEqual([5,2,3]);
  });
});