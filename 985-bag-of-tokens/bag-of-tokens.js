/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    const sorted = tokens.sort((a, b) => a - b);
    let maxScore = 0, currentScore = 0;
    while (power >= tokens[0] || currentScore > 0) {
        if (power >= tokens[0]) {
            power -= tokens.shift();
            currentScore++;
        } else if (currentScore) {
            power += tokens.pop();
            currentScore--;
        }
        maxScore = currentScore > maxScore ? currentScore : maxScore;
    }
    return maxScore;
};