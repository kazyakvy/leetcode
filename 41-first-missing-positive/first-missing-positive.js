/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const map = {};
    let min = Infinity;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val < min && val > 0) {
            min = val;
        }
        if (val > max) {
            max = val;
        }
        map[val] = true;
    }
    if (min > 1) {
        return 1;
    }
    for (let i = min + 1; i < max; i++) {
        if (!map[i]) {
            return i;
        }
    }
    return max + 1;
};