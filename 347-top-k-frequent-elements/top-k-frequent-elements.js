/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const value = map[nums[i]];
        map[nums[i]] = value ? value + 1 : 1; 
    }

    let result = [];
    
    while (k) {
        let maxKey;
        for (let key in map) {
            if (!maxKey) {
                maxKey = key;
                continue;
            }
            maxKey = map[key] > map[maxKey] ? key : maxKey;
        }
        delete map[maxKey];
        result.push(+maxKey);
        k--;
    }
    
    return result;
};