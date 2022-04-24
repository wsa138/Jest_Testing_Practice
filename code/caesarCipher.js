let alpha = 'abcdefghijklmnopqrstuvwxyz';

//FIX testing error.
function caesarCipher(str, shiftNum) {
  let cipherArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      let upperCase = str[i] === str[i].toUpperCase();
      let index = alpha.indexOf(str[i]);
      let newIndex =
        index + shiftNum > 26 ? index + shiftNum - 26 : index + shiftNum;
      let newLetter = alpha[newIndex];
      cipherArr.push(newLetter);
    } else {
      cipherArr.push(str[i]);
    }
  }
  return cipherArr.join('');
}

export default caesarCipher;
