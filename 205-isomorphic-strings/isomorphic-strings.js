/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map1 = {}, map2 = {};
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!map1[t[i]] && !map2[s[i]]) {
            map1[t[i]] = s[i];
            map2[s[i]] = t[i];
        }
        result += map1[t[i]];
    }
    console.log(result);
    return result === s;
};