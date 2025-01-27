/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.



Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []


Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104g
 */


import java.util.ArrayList;
import java.util.List;

public class MergeKSortedList {
  public static void main(String[] args) {

  }
}



 //Definition for singly-linked list.
// public class ListNode {
//    int val;
//    ListNode next;
//    ListNode() {}
//   ListNode(int val) { this.val = val; }
//  ListNode(int val, ListNode next) { this.val = val; this.next = next; }
// }

class Solution4 {

  public ListNode mergeNodes(ListNode l1, ListNode l2) {
    ListNode tail = new ListNode();
    ListNode dummy = tail;

    while(l1 != null && l2 != null) {
      if(l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
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
  public ListNode mergeKLists(ListNode[] lists) {
    if(lists.length == 0) return null;
    ListNode[] currList = lists;
    while(currList.length > 1) {
      List<ListNode> mergedList = new ArrayList<>();
      for(int i = 0; i < currList.length; i+=2) {
        ListNode l1 = currList[i];
        ListNode l2 = (i + 1) < currList.length ? currList[i+1] : null;
        ListNode mergedNode = mergeNodes(l1, l2);
        mergedList.add(mergedNode);
      }
      currList =  mergedList.toArray(new ListNode[0]);
    }
    return currList[0];
  }
}
