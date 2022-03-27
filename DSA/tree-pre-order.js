/* 
    Preorder Traversal:
        Algorithm Preorder(tree)
        1. Visit the root.
        2. Traverse the left subtree, i.e., call Preorder(left-subtree)
        3. Traverse the right subtree, i.e., call Preorder(right-subtree)     
*/

function printPreOrder(node) {
    if (node === null) return;

    printPreOrder(node.data)
    printPreOrder(node.left)
    printPreOrder(node.right)
}

printPreOrder(root)