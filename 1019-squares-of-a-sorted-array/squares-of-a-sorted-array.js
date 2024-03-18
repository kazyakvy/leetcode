/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const stack = [], result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const currentSquared = nums[i]**2;
        if (nums[i] < 0) {
            stack.push(currentSquared);
            continue;
        }
        if (stack.length) {
            while (stack[stack.length - 1] < currentSquared) {
                const value = stack.pop();
                result.push(value);
            }
        }
        result.push(currentSquared);
    }
    
    if (stack.length) {
        while (stack.length) {
            const value = stack.pop();
            result.push(value);
        }
    }
    
    return result;
};