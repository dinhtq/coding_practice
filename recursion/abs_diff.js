/*
  Return absolute difference between all items in two arrays of integers of same length.
*/


function totalDiff(arr1, arr2) {

}























// TEST CASE
const arr1 = [15, -4, 56, 10, -23]
const arr2 = [14, -9, 56, 14, -23]


console.log(totalDiff(arr1, arr2) === 10)


// iterative
// function totalDiff(arr1, arr2) {
//   return arr1.reduce((sum, item, index) => {
//     return sum += Math.abs(item - arr2[index])
//   }, 0)
// }

// recursive
// function totalDiff(arr1, arr2) {
//   // base case
//   if (!arr1.length) return 0

//   const diff = Math.abs(arr1[0] - arr2[0])

//   return diff + totalDiff(arr1.slice(1), arr2.slice(1))
// }