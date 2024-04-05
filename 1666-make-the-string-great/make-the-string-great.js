/**
 * @param {string} s
 * @return {string}
 */
const lettersValid = (a, b) => {
    if (a === b) {
        return true;
    }
    if (a.toLowerCase() === b.toLowerCase()) {
        return false;
    }
    return true;
};

const isGreat = (s) => {
    for (let i = 0; i <= s.length - 2; i++) {
        if (!lettersValid(s[i], s[i + 1])) {
            return false;
        }
    }
    return true;
};

var makeGood = function(s) {
    while (!isGreat(s)) {
        for (let i = 0; i < s.length - 1; i++) {
            if (!lettersValid(s[i], s[i + 1])) {
                s = s.split(s[i] + s[i + 1]).join('');
            }
        }
    }
    return s;
};