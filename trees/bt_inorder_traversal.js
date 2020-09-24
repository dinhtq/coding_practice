

// traverse binary tree in order
// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/

function inorderTraversal(root) {}





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

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}

const _ = require('lodash')

// Tests
let desc = 'full tree'
let treeRoot = new BinaryTreeNode(1)
let firstLeft = treeRoot.insertLeft(2)
firstLeft.insertLeft(3)
firstLeft.insertRight(4)
let firstRight = treeRoot.insertRight(5)
firstRight.insertLeft(6)
firstRight.insertRight(7)
assertEqualsObject(inorderTraversal(treeRoot), [3, 2, 4, 1, 6, 5, 7], desc)

desc = 'Partial tree'
treeRoot = new BinaryTreeNode(1)
firstRight = treeRoot.insertRight(2)
firstRight.insertLeft(3)
assertEqualsObject(inorderTraversal(treeRoot), [1, 3, 2], desc)

desc = 'Empty tree'
treeRoot = null
assertEqualsObject(inorderTraversal(treeRoot), [], desc)
































// recursive
// function inorderTraversal(root, arr) {
//   if (!root) return []
  
//   if (root.left) inorderTraversal(root.left, arr)
  
//   arr.push(root.val)
  
//   if (root.right) inorderTraversal(root.right, arr)
  
//   return arr
// }

// iterative
// function inorderTraversal(root) {
//   var stack = []
//   var arr = []
//   var curNode = root
  
//   while(stack.length || curNode) {
//       if (curNode) {
//           stack.push(curNode)
//           curNode = curNode.left
//       } else {
//           curNode = stack.pop()
//           arr.push(curNode.val)
//           curNode = curNode.right
//       }
//   }
  
//   return arr
// }
