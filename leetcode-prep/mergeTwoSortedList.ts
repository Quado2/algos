/*


You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head = null;
  let result = null;
  let val = 0;
  let l1 = list1;
  let l2 = list2;

  while (l1 !== null || l2 !== null) {
    if ((l1?.val ?? 101) < (l2?.val ?? 101)) {
      val = l1?.val!;
      l1 = l1?.next!;
    } else {
      val = l2?.val!;
      l2 = l2?.next!;
    }

    if (!result) {
      result = new ListNode(val);
      head = result;
    } else {
      result.next = new ListNode(val);
      result = result.next;
    }
  }

  return head;
}
