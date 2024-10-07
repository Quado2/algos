/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

function trap(height: number[]): number {
  let maxLtoR: number[] = [];

  let maxHeight = 0;
  for (let i = 0; i < height.length; i++) {
    maxHeight = Math.max(maxHeight, height[i]);
    maxLtoR.push(maxHeight);
  }

  let maxRtoL: number[] = [];
  maxHeight = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxHeight = Math.max(maxHeight, height[i]);
    maxRtoL.push(maxHeight);
  }
  maxRtoL.reverse();

  const minMax: number[] = [];
  for (let i = 0; i < height.length; i++) {
    minMax.push(Math.min(maxRtoL[i], maxLtoR[i]));
  }

  const rains: number[] = [];
  for (let i = 0; i < height.length; i++) {
    const sub = minMax[i] - height[i];
    rains.push(sub < 0 ? 0 : sub);
  }

  const totalRain = rains.reduce(
    (acc: number, curr: number) => (acc += curr),
    0
  );

  return totalRain;
}

function trap2(height: number[]): number {
  let maxFromLeft = 0;
  let maxFromRight = 0;
  let i = 0;
  let j = height.length - 1;
  const rains: number[] = [];
  while (i < j) {
    maxFromLeft = Math.max(maxFromLeft, height[i]);
    maxFromRight = Math.max(maxFromRight, height[j]);
    if (maxFromRight >= maxFromLeft) {
      //deal with moving from left
      const retainedWater = maxFromLeft - height[i];
      rains.push(retainedWater < 0 ? 0 : retainedWater);
      i++;
    } else {
      //deal with moving from right
      const retainedWater = maxFromRight - height[j];
      rains.push(retainedWater < 0 ? 0 : retainedWater);
      j--;
    }
  }
  const totalRain = rains.reduce(
    (acc: number, curr: number) => (acc += curr),
    0
  );
  return totalRain;
}
