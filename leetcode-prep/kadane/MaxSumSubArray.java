public class MaxSumSubArray {
  public static void main(String[] args) {
    Solution5 sol = new Solution5();
    int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    System.out.println(sol.maxSubArray(nums));
  }
}

class Solution5 {
  public int maxSubArray(int[] nums) {
    int max = Integer.MIN_VALUE;
    int sum = 0;
    for (int num : nums) {
      sum += num;

      max = Math.max(sum, max);
      if (sum < 0) sum = 0;
    }

    return max;
  }
}