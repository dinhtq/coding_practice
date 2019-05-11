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
var mergeTrees = function(t1, t2) {
  // bail case
  if (t1 === null) return t2
  if (t2 === null) return t1
  
  // process and/or recurse
  t2.val += t1.val
  
  t2.right = mergeTrees(t1.right, t2.right)
  t2.left = mergeTrees(t1.left, t2.left)
  
  // return
  return t2
};