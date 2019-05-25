/*
  Find the most frequently occurring item in an array.
  You can assume that there is always a single, unique value that that appears most frequently unless
  the array is empty.
*/


function mostFrequent(arr) {

}



// mostFrequent(array1) should return 1.
const array1 = [1, 3, 1, 3, 2, 1]
console.log(mostFrequent(array1) === 1)
// mostFrequent(array2) should return 3.
const array2 = [3, 3, 1, 3, 2, 1]
console.log(mostFrequent(array2) === 3)
// mostFrequent(array3) should return null.
const array3 = []
console.log(mostFrequent(array3) === null)
// mostFrequent(array4) should return 0.
const array4 = [0]
console.log(mostFrequent(array4) === 0)
// mostFrequent(array5) should return -1.
const array5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1]
console.log(mostFrequent(array5) === -1)





// function mostFrequent(arr) {
//   let mostFrequentItem = null
//   let maxCount = 0

//   if (arr.length) {
//     const hashMap = {}

//     arr.forEach(val => {
//       if (hashMap[val]) {
//         hashMap[val] += 1
//       } else {
//         hashMap[val] = 1
//       }

//       // check if most recurring item so far
//       if (hashMap[val] >= maxCount) {
//         mostFrequentItem = parseInt(val)
//         maxCount = hashMap[val]
//       }
//     })
//   }

//   return mostFrequentItem
// }