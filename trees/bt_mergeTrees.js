/*
  https://leetcode.com/problems/merge-two-binary-trees/
  Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
  You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */


var mergeTrees = (t1, t2) => {

  
}

















function inorder(root, arr = []) {
  if (!root) return []

  if (root.left) inorder(root.left, arr)
  arr.push(root.value)
  if (root.right) inorder(root.right, arr)
  return arr
}



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

function assertEqualsObject(a, b, desc) {
  if (_.isEqual(a, b)) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

const _ = require('lodash')

// Tests
let desc = 'full tree'
let tree1Root = new BinaryTreeNode(1)
let tree2Root = new BinaryTreeNode(2)
tree1Root.insertLeft(3).insertLeft(5)
tree1Root.insertRight(2)
tree2Root.insertLeft(1).insertRight(4)
tree2Root.insertRight(3).insertRight(7)
const mergedRoot = mergeTrees(tree1Root, tree2Root)
assertEqualsObject(inorder(mergedRoot), [5, 4, 4, 3, 5, 7], desc)


 // recursive
// var mergeTrees = function(t1, t2) {
//   // bail case
//   if (t1 === null) return t2
//   if (t2 === null) return t1
  
//   // process and/or recurse
//   t2.val += t1.val
  
//   t2.right = mergeTrees(t1.right, t2.right)
//   t2.left = mergeTrees(t1.left, t2.left)
  
//   // return
//   return t2
// }

// iterative
// var mergeTrees = function(t1, t2) {
//   if (t1 === null) return t2
  
//   var stack = [[t1, t2]]
  
//   while (stack.length) {
//       var nodesPair = stack.pop()
      
//       if (nodesPair[0] === null || nodesPair[1] === null) {
//           continue
//       }
      
//       nodesPair[0].val += nodesPair[1].val
      
//       if (nodesPair[0].left === null) {
//           nodesPair[0].left = nodesPair[1].left
//       } else {
//           stack.push([nodesPair[0].left, nodesPair[1].left])   
//       }
      
//       if (nodesPair[0].right === null) {
//           nodesPair[0].right = nodesPair[1].right
//       } else {
//           stack.push([nodesPair[0].right, nodesPair[1].right])   
//       }
//   }
  
//   return t1
// };
