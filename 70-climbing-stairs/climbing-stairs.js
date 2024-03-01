/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1;// 0
    let b = 1;// 1
    let temp = b;
    for (let i = 0; i < n - 1; i++) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};