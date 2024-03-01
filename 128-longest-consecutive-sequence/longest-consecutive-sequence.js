/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let result = [];
    for (let value of set) {
        if (!set.has(value - 1)) {
            let seq = [value];
            while (set.has(value + 1)) {
                value = value + 1;
                seq.push(value);
            };
            if (seq.length > result.length) {
                result = seq;
            }
        }
    }
    return result.length;
};