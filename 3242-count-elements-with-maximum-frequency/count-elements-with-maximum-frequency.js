/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map = {};
    let max = -Infinity;
    for (let value of nums) {
        if (map[value]) {
            map[value]++;
        } else {
            map[value] = 1;
        }
        if (map[value] > max) {
            max = map[value];
        }
    }
    let result = 0;
    for (let key in map) {
        if (map[key] === max) {
            result += max;
        }
    }
    return result;
};