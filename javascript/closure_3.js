// https://dev.to/internettradie/mastering-hard-parts-of-javascript-closure-iii-56m3

/* exercise 13:
There's no such thing as private properties on a JavaScript object! But, maybe there are? 
Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. 
getSecret() which returns the secret setSecret() which sets the secret
*/

function createSecretHolder(secret) {
  // do something
}

console.log('Exercise 13:')
const obj = createSecretHolder(5);
console.log(obj.getSecret() === 5);
obj.setSecret(2);
console.log(obj.getSecret() === 2);




/* ex: 14
Write a function, callTimes, that returns a new function. 
The new function should return the number of times it’s been called.
*/

function callTimes() {
  // do soemthing
}


console.log('Exercise 14:');
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1() === 1);
console.log(myNewFunc1() === 2);
console.log(myNewFunc2() === 1);
console.log(myNewFunc2() === 2);



/* ex: 15
Create a function russianRoulette that accepts a number (let us call it n), and returns a function. 
The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. 
On the very next invocation (the nth invocation), the returned function will return the string 'bang'. 
On every invocation after that, the returned function returns the string 'reload to play again'.
*/

function russianRoulette(bang) {
  // do soemthing
}

console.log('Exercise 15:');
const play = russianRoulette(3);
console.log(play() === 'click');
console.log(play() === 'click');
console.log(play() === 'bang');
console.log(play() === 'reload to play again');
console.log(play() === 'reload to play again');















// solutions

// // ex 13
// function createSecretHolder(secret) {
//   let _mysecret = secret
//   const obj = {
//     getSecret() {
//       return _mysecret
//     },
//     setSecret(s) {
//       _mysecret = s
//     }
//   }
//   return obj
// }

// // ex 14
// function callTimes() {
//   let times = 0
//   return () => {
//     times++
//     return times
//   }
// }

// // ex 15
// function russianRoulette(bang) {
//   let times = 0
//   return () => {
//     times++
//     if (times > bang) {
//       return 'reload to play again'
//     } else if (times === bang) {
//       return 'bang'
//     }

//     return 'click'
//   }
// }