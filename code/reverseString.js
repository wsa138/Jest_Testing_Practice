// function reverseString(str) {
//   let strArr = []
//   let revStr = ""
//   for (let i = 0; i < str.length; i++) {
//     strArr.push(str[i])
//   }

//   for (let i = 0; i < str.length; i++) {
//     revStr += strArr.pop();
//   }

//   return revStr;
// }

function reverseString(str) {
  return str.split('').reverse().join('');
}

export default reverseString;
