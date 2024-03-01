/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const hashMap = nums.reduce((acc, num, index) => {
        acc[num] = index;
        return acc;
    }, {});
    for (let i = 0; i < nums.length; i++) {
        const j = hashMap[target - nums[i]];
        if (j !== undefined && i !== j) {
            return [i, j];
        }
    }
};