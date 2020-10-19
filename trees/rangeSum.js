/*
  Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

  The binary search tree is guaranteed to have unique values.

  https://leetcode.com/problems/range-sum-of-bst/
*/

var rangeSumBST = function (root, L, R) {}



















// Tests

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

const _ = require('lodash')

// Tests
let desc = 'full tree'
let root = new BinaryTreeNode(8)
let firstLeft = root.insertLeft(3)
firstLeft.insertLeft(1)
firstLeft.insertRight(6)
let firstRight = root.insertRight(10).insertRight(14).insertLeft(13)
let L = 5
let R = 14
assertEquals(rangeSumBST(root, L, R), 6 + 8 + 10 + 14 + 13, desc)





















// recursive
// var rangeSumBST = function (root, L, R) {
  
//   let sum = 0

//   function dfs(node) {
//     if (node) {
//       if (L <= node.value && R >= node.value) {
//         sum += node.value
//       }
//       if (L < node.value) {
//         dfs(node.left)
//       }
//       if (R > node.value) {
//         dfs(node.right)
//       }
//     }
//   }
//   dfs(root)
//   return sum
// }

// iterative
// var rangeSumBST = function(root, L, R) {
//   var stack = [root]
//   var sum = 0
  
//   while(stack.length) {
//       var node = stack.pop()
      
//       if(!node) {
//           continue
//       }
      
//       if (node.val >= L && node.val <= R) {
//           sum += node.val
//       }
      
//       if (node.left) stack.push(node.left)
//       if (node.right) stack.push(node.right)
//   }
  
//   return sum
// }
