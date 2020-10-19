// https://dev.to/internettradie/mastering-hard-parts-of-javascript-closure-i-kg2

// What is a closure?

// Dan Abramoc: You have a closure when a function accesses variables defined outside of it




// create a function addByX that returns a function that will add an input by x.

function addByX(x) {
  function addByNum(num) {
    return x + num
  }
  return addByNum
}

console.log('exercise 3:')
const addByTwo = addByX(2)
console.log(addByTwo(1) === 3)
console.log(addByTwo(2) === 4)
console.log(addByTwo(3) === 5)



/* exercise 4:
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and return that output. 
If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

function once(cb) {
  let value = null

  function runOnce(num) {
    if (!value) {
      value = cb(num)
    }
    return value
  }
  return runOnce
}

console.log('exercise 4:')
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6


/* exercise 5:
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the 
callback as the second parameter.
*/

function after(times, cb) {
  let counter = 0
  function called() {
    counter++
    if (counter === times) {
      return cb()
    }
  }
  return called
}

const called = function () {
  return 'hello'
};
const afterCalled = after(3, called);
console.log('exercise 5:')
console.log(afterCalled() === undefined); // => nothing is printed
console.log(afterCalled() === undefined); // => nothing is printed
console.log(afterCalled() === 'hello'); // => hello is printed


/* exercise 6:
Write function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to 
be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

function delay(cb, wait, ...args) {
  function delayRun() {
    cb(...args)
  }
  setTimeout(delayRun, wait)
}



/* exercise 7:
Write a function rollCall that accepts an array of names and returns a function. 
The first time the returned function is invoked, it should log the first name to the console. 
The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. 
Once all names have been called, it should log 'Everyone accounted for'.
*/

function rollCall(names) {
  let curIndex = 0

  function accountFor() {
    if (curIndex === names.length) {
      console.log('Everyone accounted for')
    } else {
      console.log(names[curIndex])
      curIndex++
    }
  }
  return accountFor
}

console.log('exercise 7:')
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'



/* exercise 8:
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, 
except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
*/

function saveOutput(cb, password) {
  const valuesObj = {}

  function save(arg) {
    if (arg === password) {
      return valuesObj
    } else {
      const val = cb(arg)
      valuesObj[arg] = val
      return val
    }
  }
  return save
}
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");

console.log('exercise 8:')
console.log(multBy2AndLog(2));
// => should log 4
console.log(multBy2AndLog(9));
// => should log 18
console.log(multBy2AndLog("boo"));
// => should log { 2: 4, 9: 18 }