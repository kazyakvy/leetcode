/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let result = new ListNode();
    let pointer = result;
    lists = lists.filter(Boolean);
    while (lists.length) {
        let min = 0;
        for (let i = 0; i < lists.length; i++) {
            lists[i].val < lists[min].val && (min = i);
        }

        pointer.next = lists[min];
        pointer = pointer.next;
        lists[min] = lists[min].next;
        if (!lists[min]) {
            lists.splice(min, 1);
        }
    }
    return result.next;
};