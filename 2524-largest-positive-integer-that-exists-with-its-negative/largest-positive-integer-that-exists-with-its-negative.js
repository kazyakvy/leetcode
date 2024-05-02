/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const map = {};
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (-num > max && map[-num]) {
            max = -num;
        }
        if (num > max && map[-num]) {
            max = num;
        }
        map[num] = true;
    }
    return max;
};