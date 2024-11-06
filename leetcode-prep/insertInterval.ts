function insert(intervals: number[][], newInterval: number[]): number[][] {
  const mergedIntervals : number[][] = [];
  if(intervals.length === 0) return [newInterval]

  for(let i = 0; i<intervals.length; i++) {
      const [min, max] = intervals[i];
      if(min >= newInterval[0]) {
          mergedIntervals.push(newInterval);
          mergedIntervals.push(intervals[i])
      } else {
          mergedIntervals.push(intervals[i])
      }
  }
  if(mergedIntervals.length === intervals.length) mergedIntervals.push(newInterval)
  
  const length = mergedIntervals.length;
  let currentMin = mergedIntervals[0][0];
  let currentMax = mergedIntervals[0][1];
  const results:number[][] = []
 
  for(let i = 1; i <= length - 1; i++) {
      const [min, max] = mergedIntervals[i];
      if(min <= currentMax) {
          currentMax = Math.max(max,currentMax)
         
      } else {
          results.push([currentMin, currentMax])
          currentMin = min;
          currentMax = max
      }

      if(i === length - 1) {
          results.push([currentMin, currentMax])
      }
  }

  return results
};