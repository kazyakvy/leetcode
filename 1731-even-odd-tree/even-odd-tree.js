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
var isEvenOddTree = function(root) {
    let levelsMap = {};
    
    const getLevels = (root, lvl = 0) => {
        if (!root) {
            return;
        }
        
        if (!levelsMap[lvl]) {
            levelsMap[lvl] = [root.val];
        } else {
            levelsMap[lvl].push(root.val);
        }
        
        getLevels(root.left, lvl + 1);
        getLevels(root.right, lvl + 1);
    };
    
    getLevels(root);
    
    for (let key in levelsMap) {
        if (+key%2 === 0) {
            let prev;
            for (let val of levelsMap[key]) {
                if ((prev !== undefined && val <= prev) || val%2 !== 1) {
                    return false;
                }
                prev = val;
            }
        } else {
            let prev;
            for (let val of levelsMap[key]) {
                if ((prev !== undefined && val >= prev) || val%2 !== 0) {
                    return false;
                }
                prev = val;
            }
        }
    }
    
    return true;
};