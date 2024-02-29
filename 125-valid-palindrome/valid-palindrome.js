/**
 * @param {string} s
 * @return {boolean}
 */
const toRemove = [' ', ',', '.', ':'];

var isPalindrome = function(s) {
    const string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const l = string.length;
    for (let i = 0; i < Math.floor(l / 2); i++) {
        if (string[i] !== string[l - i - 1]) {
            return false;
        }
    }
    return true;
};