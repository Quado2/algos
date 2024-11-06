function groupAnagrams(strs: string[]): string[][] {
  const sorteds = strs.map((str: string) => str.split("").sort().join(""));
  const anagramMap = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    let existing = anagramMap.get(sorteds[i]);
    if (existing) {
      existing.push(strs[i]);
    } else {
      existing = [strs[i]];
    }
    anagramMap.set(sorteds[i], existing);
  }
  return Array.from(anagramMap.values());
}

function groupAnagramsImproved(strs: string[]): string[][] {
  const anagramMap = new Map<string, string[]>();
  for (const str of strs) {
    const strArr = Array(26).fill(0);
    for (const chr of str) {
      const charIdx = chr.charCodeAt(0) - "a".charCodeAt(0);
      strArr[charIdx] = strArr[charIdx] + 1;
    }
    const strArrKey = strArr.join("_");

    let existing = anagramMap.get(strArrKey);
    if (existing) {
      existing.push(str);
    } else {
      existing = [str];
    }
    anagramMap.set(strArrKey, existing);
  }
  return Array.from(anagramMap.values());
}
