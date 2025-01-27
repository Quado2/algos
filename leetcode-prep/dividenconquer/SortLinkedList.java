/*

Given the head of a linked list, return the list after sorting it in ascending order.



Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105


Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 */

public class SortLinkedList {
  public static void main(String[] args) {

  }
}

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }

  class Solution2 {

      public ListNode getMid(ListNode node) {
        ListNode slow = node;
        ListNode fast = node.next;
        while(fast!=null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
        }

        return slow;
      }

      public ListNode merge(ListNode l1, ListNode l2) {
        ListNode tail = new ListNode();
        ListNode dummy = tail;

        while(l1 != null && l2 != null) {
          if(l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
          }else {
            tail.next = l2;
            l2 = l2.next;
          }

          tail = tail.next;
        }

        if(l1 != null) {
          tail.next = l1;
        }

        if(l2 != null) {
          tail.next = l2;
        }

        return dummy.next;
      }
    public ListNode sortList(ListNode head) {
      if(head == null || head.next == null) return head;
      ListNode left = head;
      ListNode right = getMid(head);
      ListNode temp = right.next;
      right.next = null;
      right = temp;

      left = sortList(left);
      right = sortList(right);

      return merge(left, right);
    }
  }
 }


