/*

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104


*/

function merge(intervals: number[][]): number[][] {
  const sortedIntervals = intervals.sort(
    (a: number[], b: number[]) => a[0] - b[0]
  );
  const length = intervals.length;
  let currentMin = sortedIntervals[0][0];
  let currentMax = sortedIntervals[0][1];
  const results: number[][] = [];

  if (length === 1) {
    return [[currentMin, currentMax]];
  }

  for (let i = 1; i < length; i++) {
    const [min, max] = sortedIntervals[i];
    if (min <= currentMax) {
      currentMax = Math.max(max, currentMax);
    } else {
      results.push([currentMin, currentMax]);
      currentMin = min;
      currentMax = max;
    }

    if (i === length - 1) {
      results.push([currentMin, currentMax]);
    }
  }

  return results;
}
