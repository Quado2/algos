public class MaxSubArraySumCircular {
  public static void main(String[] args) {
    Solution6 sol = new Solution6();
    int[] nums = {1,-2,3,-2};
    System.out.println(sol.maxSubarraySumCircular(nums));
  }
}

class Solution6 {
  public int maxSubarraySumCircular(int[] nums) {
    int max = Integer.MIN_VALUE;
    int min = Integer.MAX_VALUE;
    int allSum = 0;
    int sumForMax = 0;
    int sumForMin = 0;
    for(int num: nums) {
      allSum += num;

      sumForMax += num;
      max = Math.max(sumForMax, max);
      if(sumForMax < 0) sumForMax = 0;

      sumForMin += num;
      min = Math.min(sumForMin, min);
      if(sumForMin > 0) sumForMin = 0;
    }
    // check for edge case where all values are less than zero
    if(max < 0) return max;

    return Math.max(max, allSum - min);
  }

}

