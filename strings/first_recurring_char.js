const assertEquals = require('../utils/assertEquals')

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














assertEquals(firstChar('ABCA'), 'A', 'ABCA')
assertEquals('BCABA', 'B', 'BCABA')
assertEquals(firstChar('ABC'), null, 'ABC')






























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

