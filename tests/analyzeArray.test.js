import analyzeArray from '../code/analyzeArray';

// Test that analyzeArray returns the average, min, max and length of an array of numbers.
test('Input of [1,2,3,4,5] returns "3 ,1, 15, 5"', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toBe('3, 1, 15, 5');
});

test('Input of [43, 77, 77, 22] returns "54.75, 22, 77, 4"', () => {
  expect(analyzeArray([43, 77, 77, 22])).toBe('54.75, 22, 77, 4');
});

test('Input of [0, 0, 0, 0, 0, 0, 0] returns "0, 0, 0, 0, 0, 0, 0"', () => {
  expect(analyzeArray([0, 0, 0, 0, 0, 0, 0])).toBe('0, 0, 0, 0, 0, 0, 0');
});

// Test input of floats
test('Input of [2.5, 78.9563, 123123.6234] returns "41068.3599, 2.5, 123123.6234, 3"', () => {
  expect(analyzeArray([2.5, 78.9563, 123123.6234])).toBe(
    '41068.3599, 2.5, 123123.6234, 3'
  );
});

// Test input of string numbers
test('Input of ["43", "77", "77", "22"] returns "54.75, 22, 77, 4"', () => {
  expect(analyzeArray(['43', '77', '77', '22'])).toBe(54.75, 22, 77, 4);
});

// Test input of string values
test('Input of ["This is not a number", 1, 2] returns "Error: Array contains non-number strings."', () => {
  expect(analyzeArray(['This is not a number', 1, 2])).toBe(
    'Error: Array contains non-number strings.'
  );
});
