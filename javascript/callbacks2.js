const _ = require('lodash')
/*

Construct a function union that compares input arrays and returns a new array that contains all elements. 
If there are duplicate elements, only add it once to the new array. 
Preserve the order of the elements starting from the first element of the first input array. 
BONUS: Use reduce!

*/

function union(...arrays) {
  // do something
}

console.log('exercise 1:')
console.log(_.isEqual(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]), [5, 10, 15, 88, 1, 7 , 100]))



/*

exercise 2:

Construct a function objOfMatches that accepts two arrays and a callback. 
objOfMatches will build an object and return it. To build the object, objOfMatches will test 
each element of the first array using the callback to see if the output matches the 
corresponding element (by index) of the second array. If there is a match, the element from the first array 
becomes a key in an object, and the element from the second array becomes the corresponding value.

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
)

Should log { hi: 'HI', bye: 'BYE', later: 'LATER' }

*/

function objOfMatches(arr1, arr2, cb) {
  // do something
}

let arr1 = ["hi", "howdy", "bye", "later", "hello"]
let arr2 = ["HI", "Howdy", "BYE", "LATER", "hello", "something"]
let expectedObj = { hi: 'HI', bye: 'BYE', later: 'LATER' }
console.log('exercise 2:')
console.log(_.isEqual(objOfMatches(arr1, arr2, str => str.toUpperCase()), expectedObj))


/*
exercise 3:
Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. 
multiMap will return an object whose keys match the elements in the array of values. 
The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, 
where the input to each callback is the key.

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
)

should output {
  catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
  glue: ['GLUE', 'Glue', 'glueglue'],
  beer: ['BEER', 'Beer', 'beerbeer']
}

*/

function multiMap(valArray, cbArrays) {
  // do something
}

let results = multiMap(
  ["catfood", "glue", "beer"],
  [
    function (str) {
      return str.toUpperCase();
    },
    function (str) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    },
    function (str) {
      return str + str;
    },
  ]
)
expectedObj = { 
  catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
  glue: ['GLUE', 'Glue', 'glueglue'],
  beer: ['BEER', 'Beer', 'beerbeer']
}
console.log('exercise 3:')
console.log(_.isEqual(results, expectedObj))


/*
Exercise 4:

Construct a function objectFilter that accepts an object as the first parameter and a callback function 
as the second parameter. objectFilter will return a new object. The new object will contain only the properties 
from the input object such that the property's value is equal to the property's key passed into the callback.

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));

Should output { London: 'LONDON', Paris: 'PARIS'}

*/

function objectFilter(obj, cb) {
  // do something
}

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
}

console.log('exercise 4:')
console.log(_.isEqual(objectFilter(cities, (city) => city.toUpperCase()), { London: 'LONDON', Paris: 'PARIS' }))









/*
Solutions:

exercise 1:

function union(...arrays) {
  return arrays.reduce((acc, array) => {
    const newItems = array.filter(val => !acc.includes(val))
    return acc.concat(newItems)
  })
}



exercise 2:

function objOfMatches(arr1, arr2, cb) {
  return arr2.reduce((accObj, val, index) => {
    if (arr1[index] && val === cb(arr1[index])) {
      accObj[arr1[index]] = val
    }
    return accObj
  }, {})
}

exercise 3:

function multiMap(valArray, cbArrays) {
  return valArray.reduce((accObj, val) => {
    accObj[val] = cbArrays.map(cb => cb(val))
    return accObj
  }, {})
}

exercise 4:

function objectFilter(obj, cb) {
  return Object.keys(obj).reduce((accObj, key) => {
    if (obj[key] === cb(key)) {
      accObj[key] = obj[key]
    }
    return accObj
  }, {})
}

*/