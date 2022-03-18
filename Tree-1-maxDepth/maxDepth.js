/** TREE
 Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes
along the longest path from the root node down to the farthest leaf node.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 const maxDepth = root => {
    
    if(root.value === null) return 0;
    if(root.left === null & root.right === null) return 1;
    else return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

module.exports = { maxDepth };