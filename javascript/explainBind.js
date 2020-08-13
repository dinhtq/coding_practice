/*

Explain what .bind() does?

Also, predict the logs:

*/

x = 9

var module = {
  x: 81,
  getX: function() {
    return this.x
  }
}

var module2 = {
  x: 91
}

console.log(module.getX())

var getX = module.getX
console.log(getX())

var boundX = module.getX.bind(module)
console.log(boundX())

var boundX2 = module.getX.bind(module2)
console.log(boundX2())





















/*
https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method

bind() makes sure that a function has a particular 'this' value

logs:
81
9
81
91

*/
