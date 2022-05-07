//
function analyzeArray(arr) {
  let allNums = checkForNums(arr);
  if (!allNums) {
    return 'Error: Array contains non-number strings.';
  }
  let averageNum = findAverage(arr);
  let minNum = findMin(arr);
  let maxNum = findMax(arr);
  let arrLength = arr.length;
  return `${averageNum}, ${minNum}, ${maxNum}, ${arrLength}`;
}

// Checks that all items in the array are numbers.
function checkForNums(arr) {
  let allNums = true;
  arr.forEach((ele) => {
    if (ele != parseInt(ele) && ele != parseFloat(ele)) {
      allNums = false;
    }
  });
  return allNums;
}

// Returns the average from array
function findAverage(arr) {
  let total = arr.reduce((accumulator, currentValue) => {
    return parseFloat(accumulator) + parseFloat(currentValue);
  }, 0);
  return total / arr.length;
}

// Returns minimum number from array
function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Returns maximum number from array
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

export default analyzeArray;
