import analyzeArray from '../code/analyzeArray';

// Test that analyzeArray returns the average, min, max and length of an array of numbers.
test('Input of [1,2,3,4,5] returns "3 ,1, 15, 5"', () => {
  expect(caesarCipher([1, 2, 3, 4, 5])).toBe('3, 1, 15, 5');
});

test('Input of [43, 77, 77, 22] returns "54.75, 22, 77, 4"', () => {
  expect(caesarCipher([43, 77, 77, 22])).toBe('54.75, 22, 77, 4');
});
