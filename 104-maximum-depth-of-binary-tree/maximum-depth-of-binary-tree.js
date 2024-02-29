/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;
    
    const iterate = (node, level = 1) => {
        if (!node) return;
        
        if (level > depth) {
            depth = level;
        }
        
        iterate(node.left, level + 1);
        iterate(node.right, level + 1);
    };
    iterate(root);
    
    return depth;
};