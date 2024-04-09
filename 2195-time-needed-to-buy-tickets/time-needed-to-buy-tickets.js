/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const val = tickets[k];
    return tickets.reduce((acc, el, i) => {
        if (i <= k) {
            return acc + (el < val ? el : val);
        }
        if (i > k) {
            return acc + (el < val ? el : val - 1);
        }
    }, 0);
};