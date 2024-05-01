/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const arr = [];
    let index = -1;
    for (let i = 0; i < word.length; i++) {
        arr.push(word[i]);
        if (arr[i] === ch) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        return word;
    }
    return arr.reverse().join('') + word.substring(index + 1)
};