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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const helper = (node, val, depth, currdepth) => {
        if (depth === 1) {
            const newRoot = new TreeNode(val);
            newRoot.left = node;
            return newRoot;
        }

        if (!node) {
            return null;
        }

        if (currdepth === depth - 1) {
            const leftman = node.left;
            const rightman = node.right;

            node.left = new TreeNode(val);
            node.left.left = leftman;
            node.left.right = null;

            node.right = new TreeNode(val);
            node.right.left = null;
            node.right.right = rightman;
            
            return node;
        }

        node.left = helper(node.left, val, depth, currdepth + 1);
        node.right = helper(node.right, val, depth, currdepth + 1);

        return node;
    };

var addOneRow = function(root, val, depth) {
    return helper(root, val, depth, 1);
};