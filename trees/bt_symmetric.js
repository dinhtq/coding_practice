// check whether the binary tree is a mirror of itself (symmetric around its center)
// https://leetcode.com/problems/symmetric-tree/





function isSymmetric(root) {
  
}



























// iterative
// var isSymmetric = function(root) {
//   var stack = [[root, root]]
  
//   while(stack.length) {
//       const nodesPair = stack.pop()
      
//       const left = nodesPair[0]
//       const right = nodesPair[1]

      
//       if (left === null && right === null) {
//           continue
//       }
      
//        if (left === null || right === null) {
//           return false
//       }
      
//       if (left.val !== right.val) {
//           return false
//       }
      
//       stack.push([left.left, right.right])
//       stack.push([left.right, right.left])
//   }
  
//   return true
// }




















// recursive
// function isSymmetric(root) {
//   return isMirror(root, root)
// }

// function isMirror(node1, node2) {
//   if (node1 === null && node2 === null) {
//     return true
//   }
//   if (node1 === null || node2 === null) {
//     return false
//   }

//   return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
// }
