/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map1 = {};
    for (let value of nums1) {
        if (!map1[value]) {
            map1[value] = true;
        }
    }
    const result = [];
    const set = new Set(nums2);
    for (let value of set) {
        if (map1[value]) {
            result.push(value);
        }
    }
    return result;
};