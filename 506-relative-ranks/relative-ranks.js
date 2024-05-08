/**
 * @param {number[]} score
 * @return {string[]}
 */
const map = {
    0: 'Gold Medal',
    1: 'Silver Medal',
    2: 'Bronze Medal',
};

var findRelativeRanks = function(score) {
    const sorted = score.toSorted((a, b) => b - a);
    const ranks = {};
    for (let i = 0; i < sorted.length; i++) {
        ranks[sorted[i]] = map[i] || `${i + 1}`;
    }
    return score.map((el) => ranks[el]);
};