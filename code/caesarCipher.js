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
    let newIndexNum = alpha.indexOf(str[i].toLowerCase()) + shiftNum;
    if (newIndexNum > 25) {
      shiftIndexArr.push(newIndexNum - 26);
    } else {
      shiftIndexArr.push(newIndexNum);
    }
  }
  return shiftIndexArr;
}

// Create array of the shifted letters.
function createShiftedArr(indexArr) {
  let shiftedArr = indexArr.map((indexNum) => {
    return alpha[indexNum];
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
    if (mainStr[i].toUpperCase() === mainStr[i]) {
      capIndexArr.push(mainStr.indexOf(mainStr[i]));
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

export default caesarCipher;
