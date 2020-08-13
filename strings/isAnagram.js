const assertEquals = require('../utils/assertEquals')
/*

Check if two strings are anagrams. Assume only english lowercase letters.

 "anagram" and "nagaram" are anagrams
*/

var isAnagram = function(s1, s2) {}
























let w1 = "anagram"
let w2 = 'nagaram'
let desc = `Should be true`
assertEquals(isAnagram(w1, w2), true, desc)

w1 = 'abcd'
w2 = 'abc'
desc = 'Should be false'
assertEquals(isAnagram(w1, w2), false, desc)






// O(nlogn) runtime, O(n) space
// var isAnagram = function(s, t) {
//   if (s.length !== t.length) {
//       return false
//   }
  
//   // sort strings and compare
//   var sArray = s.split('')
//   var tArray = t.split('')
//   var sArraySorted = sArray.sort()
//   var tArraySorted = tArray.sort()
//   var sSortedStr = sArraySorted.join()
//   var tSortedStr = tArraySorted.join()
  
//   return sSortedStr === tSortedStr
// }

