const pdfViewer = require('./index');

test('pdfViewer is a function', () => {
  expect(typeof pdfViewer).toEqual('function');
});

describe('pdfViewer works with different words', () => {

  test('pdfViewer works with the word abc', () => {
    const alphabet = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    expect(pdfViewer(alphabet, 'abc')).toEqual(9);
  });

  test('pdfViewer works with the word zaba', () => {
    const alphabet = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
    expect(pdfViewer(alphabet, 'zaba')).toEqual(28)
  });  

  test('pdfViewer works with the word torn', () => {
    const alphabet = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    expect(pdfViewer(alphabet, 'torn')).toEqual(20);
  });
});