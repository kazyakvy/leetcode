/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let resultPointer = result;
    let l = l1;
    let r = l2;
    let temp = 0;
    while (l || r) {
        const sum = (l?.val || 0) + (r?.val || 0) + temp;
        temp = 0;
        if (sum >= 10) {
            temp = Math.floor(sum/10);
            resultPointer.val = sum%10;
        } else {
            resultPointer.val = sum;
        }
        l = l?.next;
        r = r?.next;
        if (l || r) {
            resultPointer.next = new ListNode();
            resultPointer = resultPointer.next;
        }
    }
    if (temp) {
        resultPointer.next = new ListNode(temp);
    }
    return result;
};