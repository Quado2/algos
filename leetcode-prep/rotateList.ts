/*
Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109

*/

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  //get the tail and the number of nodes in the head;
  let count = 0;
  let tail = null;

  let curr = head;
  while(curr){
      if(!curr.next){
          tail = curr;
      }
      count ++;
      curr = curr.next
  }
  if(count === 0) return head;

  // get the last rotation
  const lastK = k%count
  if(lastK === 0 ) return head;
  
  const nodeIndex = count - lastK;
  let preInterest = head;
  for(let i = 1; i<nodeIndex; i++){
      preInterest = preInterest!.next
  }

  const newHead = preInterest!.next;
  preInterest!.next = null;
  tail!.next = head;

  return newHead;
};