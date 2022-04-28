let alpha = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipher(str, shiftNum) {
  let newShiftNum = checkShiftNumber(shiftNum);
  let shiftIndexArr = createShiftIndexArr(str, newShiftNum);
  let shiftArr = createShiftedArr(shiftIndexArr);
  let shiftedStr = joinShiftedArr(shiftArr);
  return capStr(str, shiftedStr);
}

// Check is shift number is too large and decrease it by 26.
function checkShiftNumber(shiftNum) {
  let newShiftNum = shiftNum;
  if (newShiftNum > 26) {
    newShiftNum = checkShiftNumber(newShiftNum - 26);
  } else {
    return newShiftNum;
  }
  return newShiftNum;
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

//caesarCipher('Test', 105);

export default caesarCipher;
