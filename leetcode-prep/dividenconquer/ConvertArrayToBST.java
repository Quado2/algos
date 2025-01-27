/*

Given an integer array nums where the elements are sorted in ascending order, convert it to a
height-balanced
 binary search tree.



Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.


 */

public class ConvertArrayToBST {
  public static void main(String[] args) {
    Solution1 sol = new Solution1();
    int[] arr = {-10,-3,0,5,9};
    System.out.println(sol.sortedArrayToBST(arr).left.val);
  }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
      this.val = val;
      this.left = left;
      this.right = right;
      }
  }

class Solution1 {

  public TreeNode helper(int left, int right, int[] nums)  {
    if(left > right) return null;

    int mid = (left + right) / 2;
    TreeNode root = new TreeNode(nums[mid]);
    root.left = helper(left, mid-1, nums);
    root.right = helper(mid+1, right, nums);
    return root;
  }
  public TreeNode sortedArrayToBST(int[] nums) {
    return helper(0, nums.length-1, nums);
  }
}


