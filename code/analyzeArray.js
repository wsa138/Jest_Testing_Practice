//
function analyzeArray(arr) {
  let analyzedArr = [];
  let averageNum = findAverage(arr);
  let minNum = findMin(arr);
  let maxNum;
  let arrLength;
  return `${averageNum}, ${minNum}`;

  // Find the mininum
  // Find the maximum
  // Find the length
}

// Returns the average from array
function findAverage(arr) {
  let total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
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

export default analyzeArray;
