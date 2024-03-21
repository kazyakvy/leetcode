/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let arr = [];
    while (head) {
        arr.push(head);
        head= head.next;
    }
    const first = arr[arr.length - 1];
    let pointer = first;
    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i].next = null;
        pointer.next = arr[i];
        pointer = pointer.next;
    }
    return first || null;
};