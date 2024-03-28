/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    while (left <= right) {
        const cell = Math.floor((left + right) / 2);
        const i = Math.floor(cell/n);
        const j = cell%n;
        if (matrix[i][j] === target) {
            return true;
        }
        if (target < matrix[i][j]) {
            right = cell - 1;
            continue;
        }
        left = cell + 1;
    }
    return false;
};