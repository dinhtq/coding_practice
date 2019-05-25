const _ = require('lodash')

/*
  Return the common elements (as an array) between two sorted arrays
  of integers (ascending order).
*/

function common_elements(list1, list2) {
}


const arr1 = [1, 3, 4, 6, 7, 9]
const arr2 = [1, 2, 4, 5, 9, 10]
console.log(_.isEqual(common_elements(arr1, arr2), [1, 4, 9]))

const arr3 = [1, 2, 9, 10, 11, 12]
const arr4 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
console.log(_.isEqual(common_elements(arr3, arr4), [1, 2, 9, 10, 12]))

const arr5 = [0, 1, 2, 3, 4, 5]
const arr6 = [6, 7, 8, 9, 10, 11]
console.log(_.isEqual(common_elements(arr5, arr6), []))
























// good solution
// function common_elements(list1, list2) {
//   let p1 = 0
//   let p2 = 0
//   const common = []

//   while(p1 < list1.length && p2 < list2.length) {
//     if (list1[p1] === list2[p2]) {
//       common.push(list1[p1])
//       p1 += 1
//       p2 += 1
//     } else if (list1[p1] > list2[p2]) {
//       p2 += 1
//     } else {
//       p1 += 1
//     }
//   }

//   return common
// }


// WACK solution
// function common_elements(list1, list2) {
//   let commonElements = []

//   if (list1.length && list2.length) {
//     const shorterList = list1.length >= list2.length ? list1 : list2
//     const longerList = shorterList.length === list1.length ? list2 : list1

//     const shorterHashMap = {}
//     let maxShortElement = 0
//     shorterList.forEach(n => {
//       if (!shorterHashMap[n]) {
//         shorterHashMap[n] = true

//         if (n >= maxShortElement) {
//           maxShortElement = n
//         }
//       }
//     })

//     for(let i = 0; i < longerList.length; i++) {
//       const nLong = longerList[i]
//       if (shorterHashMap[nLong]) {
//         commonElements.push(nLong)
//       }

//       // check to see if we need to continue iterating long list
//       if (nLong >= maxShortElement) {
//         break
//       }
//     }
//   }

//   return commonElements
// }