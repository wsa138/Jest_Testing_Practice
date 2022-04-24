import caesarCipher from '../code/caesarCipher.js';

test('Input of ("az", 3) returns "dc"', () => {
  expect(caesarCipher('az', 3)).toBe('dc');
});

test('Input of ("Test two! This is a test.", 13) returns "Grfg gjb! Guvf vf n grfg."', () => {
  expect(caesarCipher('Test two! This is a test.')).toBe(
    'Grfg gjb! Guvf vf n grfg.'
  );
});

// Add more test for non-strings, and large numbers
