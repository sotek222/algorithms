const angryProf = require('./index');

test('angryProfessor is a function', () => {
  expect(typeof angryProf).toEqual('function');
});

test('angryProfessor doesn\'t cancel class if enough students arrive on time', () => {
  expect(angryProf(2, [0, -1, 2, 1])).toEqual('NO');
});

test('angryProfessor cancels class if enough students arrive late', () => {
  expect(angryProf(3, [-1, -3, 4, 2])).toEqual('YES');
});

describe('angryProfessor works with large classes', () => {
  test('angryProfessor with 10 students, 5 out 4 students arrive on time doesn\'t cancel class', () => {
    expect(angryProf(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67])).toEqual('NO');
  });

  test('angryProfessor with 10 students, 7 out 10 arrive on time does cancel class', () => {
    expect(angryProf(10, [23, -35, -2, 58, -67, -56, -42, -73, -19, 37])).toEqual('YES');
  });

});
