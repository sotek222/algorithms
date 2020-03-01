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