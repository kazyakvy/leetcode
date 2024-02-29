/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const generate = (arr, open, close) => {
        // stop if n exceeded
        if (open > n) return;
        
        // case where we can apply both '(' and ')'
        if (close < open) {
            generate([...arr, '('], open + 1, close);
            generate([...arr, ')'], open, close + 1);
            return;
        }
        
        // all parentheses applied, push string to result array
        if (open === n) {
            result.push(arr.join(''));
            return;
        }
        
        // case where can apply only '('
        generate([...arr, '('], open + 1, close);
    };
    generate(['('], 1, 0, n);
    return result;
};