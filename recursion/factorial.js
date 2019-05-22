/*
  Return factorial of n.
*/


function factorial(n) {
  // base case
  if (n === 1) return 1

  return n * factorial(n - 1)
}























// TEST CASE

// 6 * 5 * 4 * 3 * 2 * 1 = 
console.log(factorial(6) === (6 * 5 * 4 * 3 * 2 * 1))
console.log(factorial(7) === 5040)
