//
function analyzeArray(arr) {
  let analyzedArr = [];
  let averageNum = average(arr);
  let minNum;
  let maxNum;
  let arrLength;
  return averageNum;

  // Find the mininum
  // Find the maximum
  // Find the length
}

// Find average
function average(arr) {
  let total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return total / arr.length;
}

export default analyzeArray;
