/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const val = tickets[k];
    let result = 0;
    for (let i = 0; i < tickets.length; i++) {
        const curr = tickets[i];
        if (i <= k) {
            result += curr < val ? curr : val;
            continue;
        }
        result += curr < val ? curr : val - 1;
    }
    return result;
};