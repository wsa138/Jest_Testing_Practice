import analyzeArray from '../code/analyzeArray';

// Test that analyzeArray returns the average, min, max and length of an array of numbers.
test('Input of [1,2,3,4,5] returns "3 ,1, 5, 5"', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toBe('3, 1, 5, 5');
});

test('Input of [43, 77, 77, 22] returns "54.75, 22, 77, 4"', () => {
  expect(analyzeArray([43, 77, 77, 22])).toBe('54.75, 22, 77, 4');
});

test('Input of [0, 0, 0, 0, 0, 0, 0] returns "0, 0, 0, 0, 7"', () => {
  expect(analyzeArray([0, 0, 0, 0, 0, 0, 0])).toBe('0, 0, 0, 7');
});

// Test input of floats
test('Input of [2.4, 78] returns "40.2, 2.4, 78, 2"', () => {
  expect(analyzeArray([2.4, 78])).toBe('40.2, 2.4, 78, 2');
});

// Test input of string numbers
test('Input of ["43", "77", "77", "22"] returns "54.75, 22, 77, 4"', () => {
  expect(analyzeArray(['43', '77', '77', '22'])).toBe('54.75, 22, 77, 4');
});

// Test input of string values
test('Input of ["This is not a number", 1, 2] returns "Error: Array contains non-number strings."', () => {
  expect(analyzeArray(['This is not a number', 1, 2])).toBe(
    'Error: Array contains non-number strings.'
  );
});
