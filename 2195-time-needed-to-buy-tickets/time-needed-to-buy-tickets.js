/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const val = tickets[k];
    return tickets.reduce((acc, el, i, arr) => {
        if (i < k) {
            return acc + (arr[i] < val ? arr[i] : val);
        }
        if (i > k) {
            return acc + (arr[i] < val ? arr[i] : val - 1);
        }
        return acc + val;
    }, 0);
};