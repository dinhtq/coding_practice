const assertEquals = require('../utils/assertEquals')

// reverse string recursively
// jason -> nosaj

function reverse(str) {

}







































assertEquals(reverse('jason'), 'nosaj', 'jason')
assertEquals(reverse('jason was here'), 'ereh saw nosaj', 'jason was here')


// function reverse(string) {
//   // bail case
//   if (string.length === 1) return string
//   // process + recurse
//   return reverse(string.slice(1)) + string[0]
// }
