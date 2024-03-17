/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        nums[i] = undefined;
        if (!nums.includes(val)) {
            nums[j] = val;
            j++;
        }
    }

    nums.length = j;
    return nums.length;
};