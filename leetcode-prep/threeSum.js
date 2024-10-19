"use strict";
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
function twoSum(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let resp = [];
    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
            resp.push([nums[i], nums[j]]);
            i++;
        }
        else {
            if (sum > target)
                j--;
            if (sum < target)
                i++;
        }
    }
    return resp;
}
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let i = 0;
    let length = nums.length;
    const result = [];
    const resultSet = new Set();
    while (i <= length - 3) {
        const target = 0 - nums[i];
        let sums2 = twoSum(nums.slice(i + 1), target);
        if (sums2.length > 0) {
            sums2.forEach((sum2) => {
                const sum3 = [nums[i], ...sum2];
                const sum3String = sum3.toString();
                if (!resultSet.has(sum3String)) {
                    result.push(sum3);
                    resultSet.add(sum3String);
                }
            });
        }
        i++;
    }
    return result;
}
;
