/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    let result = arr[0];
    result.next = arr[arr.length - 1];
    let pointer = result.next;
    pointer.next = null;
    for (let i = 1; i <= arr.length - 1 - i; i++) {
        pointer.next = arr[i];
        pointer = pointer.next;
        pointer.next = null;
        if (arr.length - 1 - i !== i) {
            arr[arr.length - 1 - i].next = null;
            pointer.next = arr[arr.length - 1 - i];
            pointer = pointer.next;
            pointer.next = null;
        }
        continue;
    }
    return result;
};