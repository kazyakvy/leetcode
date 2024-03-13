/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const nSum = n * (n + 1) / 2;
    for (let i = Math.floor(n / 2); i <= n; i++) {
        const leftSum = i * (i + 1) / 2;
        const rightSum = nSum - i * (i - 1) / 2;
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};