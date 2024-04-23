/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (nums, target, left, right) => {
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
}

var search = function(nums, target) {
    let div;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            div = i;
        }
    }
    if (div === undefined) {
        return binarySearch(nums, target, 0, nums.length - 1);
    }
    if (target < nums[0]) {
        return binarySearch(nums, target, div, nums.length - 1);
    }
    return binarySearch(nums, target, 0, div - 1);
};