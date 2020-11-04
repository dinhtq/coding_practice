// https://dev.to/internettradie/mastering-hard-parts-of-javascript-closure-ii-2i3j

/* example 9:
Create a function cycleIterator that accepts an array, and returns a function.
The returned function will accept zero arguments.
When first invoked, the returned function will return the first element of the array.
When invoked a second time, the returned function will return the second element of the array, and so forth. 
After returning the last element of the array, the next invocation will return the first element 
of the array again, and continue on with the second after that, and so forth.
*/

function cycleIterator(arr) {
  // do stuff
}


const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);

console.log('exercise 9:')
console.log(getDay() === 'Fri')
console.log(getDay() === 'Sat')
console.log(getDay() === 'Sun')
console.log(getDay() === 'Fri')



/* exercise 10:

Create a function defineFirstArg that accepts a function and an argument. 
Also, the function being passed in will accept at least one argument. 
defineFirstArg will return a new function that invokes the passed-in function with 
the passed-in argument as the passed-in function's first argument. 
Additional arguments needed by the passed-in function will need to be passed into the returned function.
*/

function defineFirstArg(fn, arg) {
  // do stuff
}


const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);


console.log('exercise 10:')
console.log(subFrom20(5) === 15)
console.log(subFrom20(15) === 5)




/* ex: 11
Create a function dateStamp that accepts a function and returns a function. 
The returned function will accept however many arguments the passed-in function accepts, 
and return an object with a date key that contains a timestamp with the time of invocation, 
and an output key that contains the result from invoking the passed-in function. 
HINT: You may need to research how to access information on Date objects.
*/

function dateStamp(fn) {
  // do stuff
}
const stampedMultBy2 = dateStamp((n) => n * 2);

console.log('ex: 11')
console.log(stampedMultBy2(4));
// => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6));
// => should log { date: (today's date), output: 12 }


/* ex: 12
Create a function censor that accepts no arguments. censor will return a function that will 
accept either two strings, or one string. When two strings are given, the returned function will hold onto 
the two strings as a pair, for future use. When one string is given, the returned function will return the same string, 
except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
*/

function censor() {
  // do stuff
}

const changeScene = censor();

console.log('ex: 12')
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.") === 'The slow, brown fox jumps over the lazy cats.');



















/* solutions

ex 9:
function cycleIterator(arr) {
  let idx = 0
  return () => {
    idx++
    return arr[(idx - 1) % arr.length]
  }
}



ex 10:

function defineFirstArg(fn, arg) {
  return (subArg) => {
    return fn(arg, subArg)
  }
}

ex 11:

function dateStamp(fn) {
  return (n) => {
    return {
      date: new Date().toLocaleTimeString(),
      output: fn(n)
    }
  }
}


ex 12:

function censor() {
  const pairs = new Map()
  return (s1, s2) => {
    if (s1 && s2) {
      pairs.set(s1, s2)
      return
    }
    let input = s1
    for(let [key, value] of pairs) {
      input = input.replace(key, value)
    }
    return input
  }
}


*/