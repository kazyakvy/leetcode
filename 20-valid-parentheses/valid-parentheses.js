/**
 * @param {string} s
 * @return {boolean}
 */
const opens = ['(', '{', '['];
const map = {
    ')': '(',
    '}': '{',
    ']': '[',
};

var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (opens.includes(s[i])) {
            stack.push(s[i]);
            continue;
        }
        const last = stack.pop();
        if (map[s[i]] !== last) {
            return false;
        }
    }
    return stack.length === 0;
};