/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 

Follow-up: Can you solve the problem in O(1) extra memory space?
*/

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
  ): ListNode | null {
    if (left === right) return head;

    let dummy = new ListNode();
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
    preLeftNode!.next = prev!;
    leftNode!.next = curr;

    return dummy.next;
  }

  //Get the length of the list;

  let curr = head;
  let count = 0;
  while (curr) {
    count++;
    curr = curr.next;
  }

  const numItr = Math.floor(count / k);
  const ranges: number[][] = [];
  for (let i = 0; i < numItr; i++) {
    const begIndex = k * i + 1;
    ranges.push([begIndex, begIndex + k - 1]);
  }

  for (let range of ranges) {
    const [left, right] = range;
    head = reverseBetween(head, left, right);
  }

  return head;
}

function reverseKGroup2(head: ListNode | null, k: number): ListNode | null {
  let dummy = new ListNode(0, head);
  let groupPrev = dummy;

  function getLastNode(startNode: ListNode, k: number) {
    let curr = startNode;
    for (let i = 0; i < k; i++) {
      curr = curr?.next!;
    }
    return curr ?? null;
  }

  while (true) {
    //Get the last node of the group;
    const lastNode = getLastNode(groupPrev, k);
    if (!lastNode) break;

    let prev = groupPrev;
    let curr = groupPrev.next;
    const endNode = lastNode.next;

    while (curr && curr !== endNode) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    const temp = groupPrev.next;
    groupPrev.next = prev;
    temp!.next = curr;

    groupPrev = temp!;
  }

  return dummy.next;
}
