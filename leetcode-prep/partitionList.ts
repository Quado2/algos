/*

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

 

Example 1:


Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2]
 

Constraints:

The number of nodes in the list is in the range [0, 200].

*/

function partition(head: ListNode | null, x: number): ListNode | null {
  let lowerDummy = new ListNode(0);
  let lowerHead = lowerDummy;
  let higherDummy = new ListNode(0);
  let firstHigher = higherDummy;

  while (head) {
    if (head.val < x) {
      lowerDummy.next = head;
      lowerDummy = lowerDummy.next;
    } else {
      higherDummy.next = head;
      higherDummy = higherDummy.next;
    }
    head = head.next;
  }

  higherDummy.next = null;
  lowerDummy!.next = firstHigher.next;

  return lowerHead.next;
}
