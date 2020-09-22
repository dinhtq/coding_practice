const _ = require('lodash')
// https://dev.to/internettradie/mastering-hard-parts-of-javascript-callbacks-iii-19g0

/* Exercise 1:

Create a function majority that accepts an array and a callback. The callback will return either true or false. 
majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. 
If the number of true returns is equal to the number of false returns, majority should return false.

const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd)) -> true
console.log(majority([2, 3, 4, 5], isOdd)) -> false
*/

const isOdd = function (num) {
  return num % 2 === 1;
}

function majority(list, cb) {}



console.log('Exercise 1:')
console.log(majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd) === true)
console.log(majority([2, 3, 4, 5], isOdd) === false)




/* Exercise 2:

Create a function prioritize that accepts an array and a callback. The callback will return either true or false. 
prioritize will iterate through the array and perform the callback on each element, and return a new array, where all 
the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);
Should log ['sunny', 'seinfeld', 'curb', 'rickandmorty', 'friends']
*/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
}

function prioritize(list, cb) {}

console.log('Exercise 2:')
let list = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"]
let expected = ['sunny', 'seinfeld', 'curb', 'rickandmorty', 'friends']
console.log(_.isEqual(prioritize(list, startsWithS), expected))



/* Exercise 3:

Create a function countBy that accepts an array and a callback, and returns an object. 
countBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be the number of times that particular return value was returned.

console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
)
should log { odd: 3, even: 2 }

*/

function isEvenOrOdd(num) {
  if (num % 2 === 0) return "even"
  else return "odd"
}

function countBy(list, cb) {}




console.log('Exercise 3:')
list = [1, 2, 3, 4, 5]
console.log(_.isEqual(countBy(list, isEvenOrOdd), { odd: 3, even: 2 }))


/* Exercise 4:
Create a function groupBy that accepts an array and a callback, and returns an object. 
groupBy will iterate through the array and perform the callback on each element. 
Each return value from the callback will be saved as a key on the object. 
The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored));
should log { 1: [1.3], 2: [2.1, 2.4] }
*/

const floored = function (num) {
  return Math.floor(num)
}

function groupBy(list, cb) {}




console.log('Exercise 4:')
list = [1.3, 2.1, 2.4, 2.9, 8.5]
console.log(_.isEqual(groupBy(list, floored), { 1: [1.3], 2: [2.1, 2.4, 2.9], 8: [8.5] }))


/* Exercise 5:
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. 
goodKeys will iterate through the object and perform the callback on each value. 
goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)) -> ['charlie', 'dee']

*/

const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird"
}


function goodKeys(obj, cb) {}





const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
}
console.log('Exercise 5:')
console.log(_.isEqual(goodKeys(sunny, startsWithBird), ['charlie', 'dee']))






/* Solutions:

function majority(list, cb) {
  let isTrue = 0
  let isFalse = 0
  list.forEach(item => {
    cb(item) ? isTrue++ : isFalse++
  })
  return isTrue > isFalse
}

function prioritize(list, cb) {
  return list.reduce((accum, item) => {
    cb(item) ? accum.unshift(item) : accum.push(item);
    return accum;
  }, [])
}


function countBy(list, cb) {
  return list.reduce((acc, item) => {
    const key = cb(item)
    acc[key] = acc[key] ? acc[key] + 1 : 1
    return acc
  }, {})
}

function groupBy(list, cb) {
  return list.reduce((acc, item) => {
    const value = cb(item)
    acc[value] ? acc[value].push(item) : acc[value] = [item]
    return acc
  }, {})
}

function goodKeys(obj, cb) {
  return Object.keys(obj).reduce((acc, key) => {
    if (cb(obj[key])) {
      acc.push(key)
    }
    return acc
  }, [])
}

*/