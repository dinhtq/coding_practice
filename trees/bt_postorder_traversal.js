// traverse binary tree in order
// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/

function postorder(root) {}



























class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
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

function assertEqualsObject(a, b, desc) {
  if (_.isEqual(a, b)) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

const _ = require("lodash");

// Tests
let desc = "full tree";
let treeRoot = new BinaryTreeNode(1);
let firstLeft = treeRoot.insertLeft(2);
firstLeft.insertLeft(4);
firstLeft.insertRight(5);
let firstRight = treeRoot.insertRight(3);
assertEqualsObject(postorder(treeRoot), [4, 5, 2, 3, 1], desc);

desc = "Empty tree";
treeRoot = null;
assertEqualsObject(postorder(treeRoot), [], desc);

// recursive
// function postorder(root, arr = []) {
//   if (root) {
//     if (root.left) postorder(root.left, arr);
//     if (root.right) postorder(root.right, arr);
//     arr.push(root.value);
//   }

//   return arr;
// }

// iterative - two stacks
// function postorder(root) {
//   if (!root) return [];

//   const s1 = [root];
//   const s2 = [];
//   const results = [];

//   while (s1.length) {
//     const node = s1.pop();
//     s2.push(node);

//     if (node.left) {
//       s1.push(node.left);
//     }
//     if (node.right) {
//       s1.push(node.right);
//     }
//   }

//   while (s2.length) {
//     const node = s2.pop();
//     results.push(node.value);
//   }

//   return results;
// }
