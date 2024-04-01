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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const compareTrees = (one, two) => {
    if (!one && !two) {
        return true;
    }
    if (one?.val === two?.val) {
        return compareTrees(one.left, two.left) && compareTrees(one.right, two.right);
    }
    return false;
};

var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (compareTrees(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};