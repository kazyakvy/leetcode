/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const set = new Set(nums);
    let max = -1;
    for (let num of set) {
        if (set.has(-num)) {
            max = num > max ? num : max;
        }
    }
    return max;
};