/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let pointer = head;
    while (pointer) {
        pointer = pointer.next;
        length++;
    }
    if (n === length) {
        return head.next;
    }
    pointer = head;
    let counter = length;
    while (counter - n > 1) {
        pointer = pointer.next;
        counter--;
    }
    const next = pointer.next;
    pointer.next = next?.next || null;
    return head;
};