const assertEquals = require('../utils/assertEquals')
/*
Given a multidimensional array with depth of n, flatten it. Once flattened make it available as a method on array instance

Input: [1,2,[3,4]]
Output: [1,2,3,4]
*/

function myFlatten(arr) {}
























// Tests
let desc = 'is method on Array instance'
assertEquals(typeof Array.prototype.myFlatten, 'function', desc)
desc = 'shallow list depth ~ 2'
assertEquals([1, 2, [3, 4]].myFlatten(), [1, 2, 3, 4], desc)
desc = 'deep list depth ~ 4'
assertEquals([1,2,[3,4, [5,6, [7, [8, 9, 10]]]]].myFlatten(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], desc)



// solution
// function myFlatten(arr) {
//   return arr.reduce((acc, next) => {
//     return acc.concat(Array.isArray(next) ? myFlatten(next) : next) 
//   }, [])
// }

// Array.prototype.myFlatten = function() {
//   return myFlatten(this)
// }