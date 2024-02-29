/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const index = Math.floor((left + right) / 2);
        const value = nums[index];
        if (target === value) {
            return index;
        }
        if (target < value) {
            right = index - 1;
            continue;
        }
        left = index + 1;
    }
    
    return -1;
};