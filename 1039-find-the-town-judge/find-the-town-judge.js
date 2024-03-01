/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const degree = new Array(n + 1).fill(0);

    for (let [a, b] of trust) {
        degree[a]--;
        degree[b]++;
    }

    for (let i = 1; i <= n; ++i) {
        if (degree[i] === n - 1)
            return i;
    }

    return -1;
};