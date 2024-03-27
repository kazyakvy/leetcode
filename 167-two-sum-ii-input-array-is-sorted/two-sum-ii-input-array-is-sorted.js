/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = {};
    for (let i = 0; i < numbers.length; i++) {
        map[numbers[i]] = i;
    }
    for (let i = 0; i < numbers.length; i++) {
        const val = numbers[i];
        if (map[target - val] !== undefined && map[target - val] !== i) {
            return [i + 1, map[target - val] + 1];
        }
    }
};