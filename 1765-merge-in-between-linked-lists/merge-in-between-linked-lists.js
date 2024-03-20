/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    const result = list1;
    let left, right;
    
    for (let i = 0; i <= b; i++) {
        if (i === a - 1) {
            left = list1;
        }
        if (i === b) {
            right = list1.next;
        }
        list1 = list1.next;
    }
    
    left.next = list2;
    console.log(left.val, right.val);
    
    while (list2) {
        if (!list2.next) {
            list2.next = right;
            break;
        }
        list2 = list2.next;
    }
    
    return result;
};