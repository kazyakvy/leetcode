/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0;
    let result = 0;
    const map = {};

    while (right < s.length) {
        if (map[s[right]] === undefined) {
            map[s[right]] = right;
            if (right - left + 1 > result) {
                result = right - left + 1;
            }
        } else {
            left = map[s[right]] + 1;
            map[s[right]] = right;
            for (let key in map) {
                if (map[key] < left) {
                    delete map[key];
                }
            }
        }
        right++;
    }

    return result;
};