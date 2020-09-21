const _ = require('lodash')

/*

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Ex:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

*/

function rotateImage(matrix) {
  return false
}


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let expected = [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

rotateImage(matrix)

console.log(_.isEqual(matrix, expected))

matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

expected = [
  [13,9,5,1],
  [14,10,6,2],
  [15,11,7,3],
  [16,12,8,4]
]

rotateImage(matrix)

console.log(_.isEqual(matrix, expected))




// solutions

// function rotateImage(matrix) {

//   if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;

//   const n = matrix.length;
//   console.log('n', n)

//   for(let layer = 0; layer < n / 2; layer++) {
//     const first = layer;
//     const last = n - 1 - layer;
//     for(let i = first; i < last; i++) {
//       const offset = i - first;
      
//       const top = matrix[first][i]; // save top

//       // left -> top
//       matrix[first][i] = matrix[last - offset][first];

//       // bottom -> left
//       matrix[last - offset][first] = matrix[last][last - offset];

//       // right -> bottom
//       matrix[last][last - offset] = matrix[i][last];

//       // top -> right
//       matrix[i][last] = top; // right, saved top
//     }
//   }

//   return true;
// }


// another solution

// function rotateImage(matrix) {
//   const N = matrix.length
//   // swap rows and columns
//   for (let i = 0; i < N; i++) {
//     for (let j = i; j < N; j++) {
//       const temp = matrix[i][j]
//       matrix[i][j] = matrix[j][i]
//       matrix[j][i] = temp
//     }
//   }

//   // flip horizontally
//   for (let i= 0; i < N; i++) {
//     for (let j=0; j < (N/2); j++) {
//       const temp = matrix[i][j]
//       matrix[i][j] = matrix[i][N - 1 - j]
//       matrix[i][N - 1 - j] = temp
//     }
//   }
//   return true
// }