/*

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n

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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right) return head;

  let preLeftNode = null,
    leftNode = null,
    postLeftNode = null;
  let preRightNode = null,
    rightNode = null,
    postRightNode = null;
  let curr = head;
  let nodeIndex = 1;
  while (curr) {
    if (nodeIndex + 1 === left) preLeftNode = curr;
    if (nodeIndex === left) leftNode = curr;
    if (nodeIndex - 1 === left) postLeftNode = curr;
    if (nodeIndex + 1 === right) preRightNode = curr;
    if (nodeIndex === right) rightNode = curr;
    if (nodeIndex - 1 === right) postRightNode = curr;
    curr = curr.next;
    nodeIndex++;
  }

  //case when they are neighbors
  if (left + 1 === right) {
    if (preLeftNode) {
      preLeftNode.next = rightNode;
    } else {
      head = rightNode;
    }
    rightNode!.next = leftNode;
    leftNode!.next = postRightNode;

    return head;
  }

  if (preLeftNode) {
    preLeftNode.next = rightNode;
  } else {
    head = rightNode;
  }
  rightNode!.next = postLeftNode;
  preRightNode!.next = leftNode ?? null;
  leftNode!.next = postRightNode ?? null;

  if (right - left > 2) {
    let prev = leftNode;
    let curr = postLeftNode;

    while (curr !== leftNode) {
      let next = curr!.next;
      curr!.next = prev;
      prev = curr;
      curr = next;
    }
    rightNode!.next = preRightNode;
  }

  return head;
}

//Bettter approach with one pass
function reverseBetween2(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (left === right) return head;

  let dummy: null | ListNode = new ListNode();
  dummy.next = head;

  let curr = dummy;
  let preLeftNode = null,
    leftNode = null;

  for (let i = 0; i < left; i++) {
    preLeftNode = curr;
    leftNode = curr.next;
    curr = curr.next!;
  }

  let prev = null;
  let timesRun = right - left + 1;
  curr = leftNode!;
  for (let i = 0; i < timesRun; i++) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next!;
  }
  preLeftNode!.next = prev;
  leftNode!.next = curr;

  return dummy.next;
}
