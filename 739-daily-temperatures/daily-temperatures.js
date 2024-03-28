/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(nums) {
    const result = new Array(nums.length).fill(0);
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > stack[stack.length - 1]?.value) {
            const prev = stack.pop();
            result[prev.index] = i - prev.index;
        }
        stack.push({
            value: nums[i],
            index: i,
        });
    }
    return result;
};