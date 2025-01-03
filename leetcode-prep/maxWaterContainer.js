"use strict";
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/
function maxArea(height) {
    /*
    The idea is to point the pointers to the begining and end of the array, This marks the
    maximum container that we can have using the two bars involved. Then we move the left pointer to right if the
    left pointer's bar is lower than the right or the right pointer in the reverse case.
    */
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while (i <= j) {
        const lHeight = height[i];
        const rHeight = height[j];
        if (lHeight > rHeight) {
            const area = rHeight * (j - i);
            max = Math.max(max, area);
            j--;
        }
        else {
            const area = lHeight * (j - i);
            max = Math.max(max, area);
            i++;
        }
    }
    return max;
}
