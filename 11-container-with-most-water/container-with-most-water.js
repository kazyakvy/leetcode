/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        const currentSquare = (j - i) * Math.min(height[i], height[j]);
        if (currentSquare > max) {
            max = currentSquare;
        }
        if (height[i] > height[j]) {
            j--;
            continue;
        }
        i++;
    }
    return max;
};