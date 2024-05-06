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
var removeNodes = function(head) {
    const stack = [];
    while (head) {
        while (head.val > stack.at(-1)?.val) {
            stack.pop();
        }
        stack.push(head);
        const temp = head.next;
        head.next = null;
        head = temp;
    }
    console.log(stack);
    const res = new ListNode();
    let pointer = res;
    for (let i = 0; i < stack.length; i++) {
        pointer.next = stack[i];
        pointer = pointer.next;
    }
    return res.next;
};