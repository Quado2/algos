function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let count = 1;
  const dummy = new ListNode(0, head);
  let curr = dummy;
  let preNode = dummy;
  while (curr) {
    if (count > n + 1) {
      preNode = preNode.next!;
    }
    curr = curr.next!;
    count++;
  }

  preNode.next = preNode.next?.next ?? null;

  return dummy.next;
}
