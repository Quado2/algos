/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105


*/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const mergedIntervals: number[][] = [];
  if (intervals.length === 0) return [newInterval];

  for (let i = 0; i < intervals.length; i++) {
    const [min, max] = intervals[i];
    if (min >= newInterval[0]) {
      mergedIntervals.push(newInterval);
      mergedIntervals.push(intervals[i]);
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }
  if (mergedIntervals.length === intervals.length)
    mergedIntervals.push(newInterval);

  const length = mergedIntervals.length;
  let currentMin = mergedIntervals[0][0];
  let currentMax = mergedIntervals[0][1];
  const results: number[][] = [];

  for (let i = 1; i <= length - 1; i++) {
    const [min, max] = mergedIntervals[i];
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
