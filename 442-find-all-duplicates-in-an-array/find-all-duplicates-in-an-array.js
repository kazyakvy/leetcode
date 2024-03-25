/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const map = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
            continue;
        }
        if (map[nums[i]] === 1) {
            result.push(nums[i]);
        }
        map[nums[i]]++;
    }
    return result;
};