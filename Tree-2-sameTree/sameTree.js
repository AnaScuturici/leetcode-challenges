/** TREE
Given the roots of two binary trees p and q, 
write a function to check if they are the same or not.
Two binary trees are considered the same 
if they are structurally identical, and the nodes have the same value.

 * 
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 const isSameTree = (p, q) => {
    if(!p && !q) return true;
    if(!p || !q) return false;
    else {
        return (p.value === q.value 
        && isSameTree(p.left, q.left) 
        && isSameTree(p.right, q.right));
    }
};

module.exports = { isSameTree };