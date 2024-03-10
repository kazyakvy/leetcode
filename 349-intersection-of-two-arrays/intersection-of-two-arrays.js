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
    const map2 = {};
    for (let value of nums2) {
        if (!map2[value]) {
            map2[value] = true;
        }
    }
    const result = [];
    for (let key in map1) {
        if (map1[key] && map2[key]) {
            result.push(key);
        }
    }
    return result;
};