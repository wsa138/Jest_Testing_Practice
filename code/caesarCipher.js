let alpha = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipher(str, shiftNum) {
  let shiftIndexArr = createShiftIndexArr(str, shiftNum);
  let shiftArr = createShiftedArr(shiftIndexArr);
  let shiftedStr = joinShiftedArr(shiftArr);
  return capStr(str, shiftedStr);
}

// Create array of the shifted index numbers.
function createShiftIndexArr(str, shiftNum) {
  let shiftIndexArr = [];
  for (let i = 0; i < str.length; i++) {
    let newIndexNum = alpha.indexOf(str[i].toLowerCase());
    // If newIndexNum is -1, add non letter character to array. Else continue.
    if (newIndexNum === -1) {
      shiftIndexArr.push(str[i]);
    } else {
      let indexNumShifted = newIndexNum + shiftNum;
      if (indexNumShifted > 25) {
        shiftIndexArr.push(indexNumShifted - 26);
      } else {
        shiftIndexArr.push(indexNumShifted);
      }
    }
  }
  return shiftIndexArr;
}

// Create array of the shifted letters
function createShiftedArr(indexArr) {
  let shiftedArr = indexArr.map((indexNum) => {
    return isNaN(indexNum) || typeof indexNum === 'string' || indexNum === ' '
      ? indexNum
      : alpha[indexNum];
  });
  return shiftedArr;
}

// Join shifted array to create new string.
function joinShiftedArr(shiftedArr) {
  return shiftedArr.join('');
}

// Find index of capitalized letters and capitalize new string at same index.
function capStr(mainStr, shiftedStr) {
  let capIndexArr = [];
  let capStr = '';
  for (let i = 0; i < mainStr.length; i++) {
    if (/[a-z]/i.test(mainStr[i]) && mainStr[i].toUpperCase() === mainStr[i]) {
      capIndexArr.push(i);
    }
  }
  for (let i = 0; i < shiftedStr.length; i++) {
    if (capIndexArr.includes(i)) {
      capStr += shiftedStr[i].toUpperCase();
    } else {
      capStr += shiftedStr[i];
    }
  }
  return capStr;
}

//caesarCipher('Test Number 52.', 5);

export default caesarCipher;
