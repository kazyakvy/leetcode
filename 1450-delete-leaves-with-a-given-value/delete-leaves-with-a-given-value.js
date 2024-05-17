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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target, parent, direction) {
    if (!root) {
        return null;
    }

    removeLeafNodes(root.left, target, root, 0);
    removeLeafNodes(root.right, target, root, 1);

    if (root.val === target && !root.left && !root.right) {
        if (parent) {
            direction ? parent.right = null : parent.left = null;
        }
        return null;
    }

    return root;
};