// return the first recurring character in a string
// https://www.youtube.com/watch?v=GJdiM-muYqc


/*
  ex:
    'ABCA' => 'A'
    'BCABA' => 'B'
    'ABC' => null
*/

function firstChar(str) {

}















console.log(firstChar('ABCA') === 'A')
console.log(firstChar('BCABA') === 'B')
console.log(firstChar('ABC') === null || firstChar('ABC') === '')






























// function firstChar(str) {
//   if (!str.length) return null

//   const uniqueChars = {}
//   for (let i = 0; i < str.length; i++) {
//     if (uniqueChars[str[i]]) {
//       return str[i]
//     } else {
//       uniqueChars[str[i]] = true
//     }
//   }

//   return null
// }

