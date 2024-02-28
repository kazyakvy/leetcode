/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0, i = 0; j = 1;
    while (j < prices.length) {
        if (prices[j] - prices[i] > result) {
            result = prices[j] - prices[i];
        }
        if (prices[j] <= prices[i]) {
            i = j;
        }
        j++;
    }
    
    return result;
};