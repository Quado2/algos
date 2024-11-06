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
