function longestConsecutive(nums: number[]): number {
  const numsSet = new Set<number>(nums);
  let max = 0;

  for (const num of nums) {
    let newMax = 1;
    let numb = num;
    if (!numsSet.has(numb - 1)) {
      while (numsSet.has(numb + 1)) {
        newMax++;
        numb++;
      }
      max = Math.max(max, newMax);
    }
  }

  return max;
}
