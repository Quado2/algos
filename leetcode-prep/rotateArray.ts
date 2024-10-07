/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

*/

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  //if k > nums.length. after every nums.length rotation, the array returns to initial arrangement
  // so we need to only rotate it with what is left with the array
  /*
  eg: if we have [1,2] and k = 5
  then we need k to be 1. becuase after 2 and 4 the array is same as what it was at the begining
  therefore we need to continuous subtract 2 from 5 until 5 is less than 2. 
  Note that 2 in this case is the length of the array
  */
  while (k >= nums.length) {
    k = Math.abs(k - nums.length);
  }
  const cutFrom = nums.length - k;
  const cutArr = nums.slice(cutFrom);
  for (let i = cutFrom - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < cutArr.length; i++) {
    nums[i] = cutArr[i];
  }
}
