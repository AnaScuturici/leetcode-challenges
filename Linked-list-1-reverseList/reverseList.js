/** LINKED LIST
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
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
 const reverseList = head => {
    let prev = null;
    let next = null;
    let curr = head;
    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

module.exports = { reverseList };