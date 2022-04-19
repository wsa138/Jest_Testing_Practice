import reverseString from '../code/reverseString.js';

test("Reverses the string 'This is a test.'", () => {
  expect(reverseString('This is a test.')).toBe('.tset a si sihT');
});
