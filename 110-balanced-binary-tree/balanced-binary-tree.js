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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) {
        return true;
    } 
    
    let map = {
        left: 0,
        right: 0,
    };
    const getLevel = (node, key, lvl = 1) => {
        if (!node) return;
        
        if (map[key] < lvl) {
            map[key] = lvl;
        }
        
        getLevel(node.left, key, lvl + 1);
        getLevel(node.right, key, lvl + 1);
    };
    
    getLevel(root.left, 'left');
    getLevel(root.right, 'right');
    
    return Math.abs(map.left - map.right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};