import capitalize from '../code/capitalize.js';

test('Capitalizes the word "test.', () => {
  expect(capitalize('test')).toBe('Test');
});
