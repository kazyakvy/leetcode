/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const n = Math.max(v1.length, v2.length);

    for (let i = 0; i < n; i++) {
        const num1 = +v1[i] || 0;
        const num2 = +v2[i] || 0;
        
        if (num1 === num2) {
            continue;
        }
        if (num1 < num2) {
            return -1;
        }
        return 1;
    }

    return 0;
};