/*


You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.


*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let res = null;
  let resHead = null;
  let carry = 0;
  let nums1 = l1;
  let nums2 = l2;
  while (nums1 !== null || nums2 !== null) {
    let tempRes = (nums1?.val || 0) + (nums2?.val || 0) + carry;

    if (tempRes < 10) {
      carry = 0;
    } else {
      tempRes -= 10;
      carry = 1;
    }

    if (res) {
      res.next = new ListNode(tempRes);
      res = res.next;
    } else {
      res = new ListNode(tempRes);
      resHead = res;
    }

    if (nums1) nums1 = nums1.next;
    if (nums2) nums2 = nums2.next;
  }

  if (carry > 0) res!.next = new ListNode(carry);

  return resHead;
}
