const _ = require('lodash')

/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Ex:

Input:  left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

*/







function selfDividingNumbers(left, right) {

}






























console.log(_.isEqual(selfDividingNumbers(1, 22),[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]))







// function selfDividingNumbers(left, right) {
//   const values = []
//   for(let i = left; i <= right; i++) {
//       if (isSelfDivide(i)) {
//           values.push(i)
//       }
//   }
  
//   return values
// };

// function isSelfDivide(n) {
//   let digits = n
  
//   while(digits) {
//       let currentDigit = digits % 10
//       if (n % currentDigit !== 0) {
//           return false
//       }
//       digits = Math.floor(digits/10)
//   }
  
//   return true
// }