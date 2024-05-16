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
var evaluateTree = function(root) {
    const evaluate = (head) => {
        if (head.val === 2) {
            return evaluate(head.left) || evaluate(head.right);
        }
        if (head.val === 3) {
            return evaluate(head.left) && evaluate(head.right);
        }
        return head.val;
    };

    return evaluate(root);
};