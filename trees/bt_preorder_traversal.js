// return the preorder traversal of a binary tree

var preorderTraversal = function(root) {
    if (!root) return []

    var stack = [root]
    var arr = []
    
    while(stack.length) {
        var node = stack.pop()
        arr.push(node.val)
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
    
    return arr
}


// recursive
var preorderTraversal = function(root, arr = []) {
    if (root) {
        arr.push(root.val)
        if (root.left) preorderTraversal(root.left, arr)
        if (root.right) preorderTraversal(root.right, arr)
    }
    return arr
};

