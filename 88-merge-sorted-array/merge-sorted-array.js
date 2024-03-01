/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    let i, j;
    for (i = 0, j = 0; i < m && j < n; i++) {
        if (nums2[j] <= nums1[i]) {
            nums1.splice(i, 0, nums2[j]);
            m++;
            j++;
        }
    }
    if (j < n) {
        nums1.push(...nums2.slice(j));
    }
};