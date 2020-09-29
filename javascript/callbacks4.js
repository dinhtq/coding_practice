const _ = require('lodash')
// https://dev.to/internettradie/mastering-hard-parts-of-javascript-callbacks-iv-3ioe
// https://dev.to/internettradie/mastering-hard-parts-of-javascript-callbacks-v-2h02

/* Exercise 1:
Create a function commutative that accepts two callbacks and a value. 
commutative will return a boolean indicating if the passing the value into the first function, 
and then passing the resulting output into the second function, yields the same output as the 
same operation with the order of the functions reversed (passing the value into the second function, 
  and then passing the output into the first function).

const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // true
console.log(commutative(multBy3, subtract5, 10)); // false
console.log(commutative(divBy4, subtract5, 48)); // false

*/

const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;

function commutative(cb1, cb2, n) {}







console.log('Exercise 1:')
console.log(commutative(multBy3, divBy4, 11) === true)
console.log(commutative(multBy3, subtract5, 10) === false)
console.log(commutative(divBy4, subtract5, 48) === false)




/* Exercise 2:
Create a function rating that accepts an array (of functions) and a value. 
All the functions in the array will return true or false. rating should return the percentage of functions from 
the array that return true when the value is used as input.

const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];

console.log(rating(checks, 64)); // 100
console.log(rating(checks, 66)); // 75

*/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];


function rating(fns, n) {}





console.log('exercise 2:')
console.log(rating(checks, 64) === 100)
console.log(rating(checks, 66) === 75)


/* Exercise 3:

Create a function pipe that accepts an array (of functions) and a value. 
pipe should input the value into the first function in the array, and then use the output from that function as input 
for the second function, and then use the output from that function as input for the third function, and so forth, 
until we have an output from the last function in the array. pipe should return the final output.

const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat"));
should log 'CATcatCATcat'

*/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];


function pipe(fns, n) {}




console.log('exercise 4:')
console.log(pipe(capAddlowRepeat, "cat") === 'CATcatCATcat')



/* exercise 5:
Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). 
highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, 
when the subject is given as input.

const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5));
// should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11));
// should log: 'double'
console.log(highestFunc(groupOfFuncs, -20));
// should log: 'inverse'

*/

function highestFunc(obj, n) {}






console.log('exercise 5:')
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5) === 'addTen');
console.log(highestFunc(groupOfFuncs, 11) === 'double');
console.log(highestFunc(groupOfFuncs, -20) === 'inverse');
















// solutions
// function commutative(cb1, cb2, n) {
//   return cb1(cb2(n)) == cb2(cb1(n))
// }

// function rating(fns, n) {
//   const trueAmount = fns.reduce((acc, fn) => {
//     if (fn(n)) acc += 1
//     return acc
//   }, 0)
//   return (trueAmount / fns.length) * 100
// }

// function pipe(fns, n) {
//   return fns.reduce((acc, fn) => {
//     acc = acc ? fn(acc) : fn(n)
//     return acc
//   }, null)
// }

// function highestFunc(obj, n) {
//   let highest = null
//   Object.keys(obj).forEach(fn => {
//     if (!highest || obj[fn](n) > obj[highest](n)) {
//       highest = fn
//     }
//   })
//   return highest
// }