function calculator(first, second, operator) {
  if (operator === 'add') {
    return first + second;
  }
  if (operator === 'subtract') {
    return first - second;
  }
  if (operator === 'divide') {
    return first / second;
  }
  if (operator === 'multiply') {
    return first * second;
  }
}

export default calculator;
