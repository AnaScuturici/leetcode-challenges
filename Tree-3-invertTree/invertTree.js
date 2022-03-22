/** TREE
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 const invertTree = root => {
    if(root === null || root.left === null && root.right === null){
        return root;
    }

    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

module.exports = { invertTree };