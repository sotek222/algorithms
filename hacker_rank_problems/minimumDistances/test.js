const minDistance = require('./index');

test('minDistance is a function', () => {
  expect(typeof minDistance).toEqual('function')
});

describe('minDistance returns the minimum distance for different arrays', () => {
  test('minDistance returns the minimum distance of [7, 1, 3, 4, 1, 7]', () => {
    expect(minDistance([7, 1, 3, 4, 1, 7])).toEqual(3);
  });

  test('minDistance can determine if there is no min distance', () => {
    expect(minDistance([1, 2, 3, 4, 10])).toEqual(-1);
  });

  test('minDistance returns the minimum distance of a large array', () => {
    expect(minDistance([6,1,5,3,4,2,7,5,4,3,6,7,3,2,5,6,8,2,1])).toEqual(3);
  });

  test('minDistance returns the minimum distance of ["a", "b", "c", "d", "f", "g", "a", "c", "d", "e","c"]', () => {
    expect(minDistance(["a", "b", "c", "d", "f", "g", "a", "c", "d", "e", "c"])).toEqual(3);
  });

  test('minDistance returns the minimum distance of [1, 1]', () => {
    expect(minDistance([1,1])).toEqual(1);
  });
});