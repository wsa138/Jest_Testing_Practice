import caesarCipher from '../code/caesarCipher.js';

test('Input of ("az", 3) returns "dc"', () => {
  expect(caesarCipher('az', 3)).toBe('dc');
});

test('Input of ("Cd", 5) returns "Hi"', () => {
  expect(caesarCipher('Cd', 5)).toBe('Hi');
});

test('Input of ("Test.", 1) returns "Uftu."', () => {
  expect(caesarCipher('Test.', 1)).toBe('Uftu.');
});

test('Input of ("Test two! This is a test.", 13) returns "Grfg gjb! Guvf vf n grfg."', () => {
  expect(caesarCipher('Test two! This is a test.', 13)).toBe(
    'Grfg gjb! Guvf vf n grfg.'
  );
});

// Test for input string containing numbers.
test('Input of ("Test Number 52.", 5) returns "Yjxy Szrgjw 52."', () => {
  expect(caesarCipher('Test Number 52.', 5)).toBe('Yjxy Szrgjw 52.');
});

// Test for numbers larger than 26
