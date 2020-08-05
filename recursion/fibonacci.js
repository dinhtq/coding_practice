const assertEquals = require('../utils/assertEquals')

/* return the nth fibonacci number
Input: 6
Output: 8
*/



function fib(n) {}





















// Tests

const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946]

let n = 0
let desc = `n = ${n}`
assertEquals(fib(n), fibSequence[n], desc);

n = 6
desc = `n = ${n}`
assertEquals(fib(n), fibSequence[n], desc);

n = fibSequence.length - 1
desc = `n = ${n}`
assertEquals(fib(n), fibSequence[n], desc);




// recursive solution
// function fib(n) {
//   if (n < 2) {
//     return n
//   }

//   return fib(n - 1) + fib(n - 2)
// }

// iterative
// function fib(n) {
//   let a = 1
//   let b = 0
//   let temp
//   while(n > 0) {
//     temp = a
//     a += b
//     b = temp
//     n--
//   }
//   return b
// }
