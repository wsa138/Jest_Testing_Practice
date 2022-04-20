import calculator from '../code/calculator.js';

test('adds 4 + 3 to equal 7', () => {
  expect(calculator(4, 3, 'add')).toBe(7);
});

test('subtracts 10 - 34 to equal 24', () => {
  expect(calculator(34, 10, 'subtract')).toBe(24);
});

test('divides 25 / 5 to equal 5', () => {
  expect(calculator(25, 5, 'divide')).toBe(5);
});

test('multiplies 11 * 6 to equal 66', () => {
  expect(calculator(11, 6, 'multiply')).toBe(66);
});
