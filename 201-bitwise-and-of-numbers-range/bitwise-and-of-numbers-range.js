/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const highestPowerOf2 = (num) => {
  return Math.pow(2, Math.floor(Math.log2(num)));
}

var rangeBitwiseAnd = function(left, right) {
    const powerOf2 = highestPowerOf2(right);
    if (left === powerOf2) {
        return left;
    }
    if (powerOf2 > left && powerOf2 <= right) {
        return 0;
    }
    let result = left;
    for (let i = left + 1; i <= right; i++) {
        result = result & i;
    }
    return result;
};