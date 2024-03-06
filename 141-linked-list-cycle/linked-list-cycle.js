/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const memory = [];
    while (head) {
        if (memory.includes(head.next)) {
            return true;
        }
        memory.push(head);
        head = head.next;
    }
    return false;
};