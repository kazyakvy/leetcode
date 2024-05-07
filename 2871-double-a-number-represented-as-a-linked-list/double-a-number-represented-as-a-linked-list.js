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
var doubleIt = function(head) {
    if (head.val > 4) {
        head = new ListNode(0, head);
    }
    let curr = head;
    while (curr !== null) {
        curr.val = (curr.val * 2) % 10;
        if (curr.next !== null && curr.next.val > 4) {
            curr.val += 1;
        }
        curr = curr.next;
    }
    return head;
};