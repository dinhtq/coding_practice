var _ = require('lodash')
const assertEquals = require('../utils/assertEquals')
/*

Exercise 1:

Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

console.log(map([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]
*/

function addTwo(n) {
  return n + 2
}

function map(list, cb) {
  var results = []
  list.forEach(i => {
    results.push(cb(i))
  })
  return results
}

console.log('exercise 1:')
console.log(_.isEqual( map([1, 2, 3], addTwo),[3,4,5]))



/*

Exercise 2:

The function forEach takes an array and a callback, and runs the callback on each element of the array. 
forEach does not return anything.

*/

function myForEach(list, cb) {
  for(let i = 0; i < list.length; i++) {
    cb(list[i])
  }
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
myForEach(letters, function (char) {
  alphabet += char;
});

console.log('exercise 2:')
console.log(alphabet === 'abcd')



/*

Exercise 3:

Rebuild your map function, this time instead of using a for loop, 
use your own forEach function that you just defined. Call this new function mapWith.

console.log(mapWith([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]

*/

function mapWith(list, cb) {
  const results = []
  myForEach(list, n => {
    results.push(cb(n))
  })
  return results
}

console.log('Exercise 3:')
console.log(_.isEqual(mapWith([1, 2, 3], addTwo),[3,4,5]))



/*
Exercise 4:

Implement reduce(array, cb, accumulator).


const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
}
console.log(reduce(nums, add, 0)) // 8
*/

function myReduce(list, cb, acc) {
  acc = acc === 0 || aa ? acc : list[0]
  list.forEach(n => {
    acc = cb(acc, n)
  })
  return acc
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
}

console.log('exercise 4:')
console.log(myReduce(nums, add, 0) === 8)


/*

exercise 5:

Construct a function intersection that compares input arrays and returns a new array 
with elements found in all of the inputs. BONUS: Use reduce!
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
)

*/

function intersection(...arrays) {
  return arrays.reduce((acc, array) => {
    return array.filter(item => acc.includes(item))
  })
}

console.log('exercise 5:')
console.log(
  _.isEqual(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]), [15, 5])
)
