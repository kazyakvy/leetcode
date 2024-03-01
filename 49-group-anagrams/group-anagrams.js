/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    for (let value of strs) {
        const sorted = value.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [value];
            continue;
        } 
        map[sorted].push(value);
    }
    return Object.values(map);
};