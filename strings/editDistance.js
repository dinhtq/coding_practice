/*

The edit distance between two strings refers to the minimum number of character insertions,
deletions, and substitutions required to change one string to the other.

For example, the edit distance between “kitten” and “sitting” is three:
substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.

*/

function getEditDistance(str1, str2) {

}





function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

assertEquals(getEditDistance('kitten', 'sitting'), 3, 'two full strings')



