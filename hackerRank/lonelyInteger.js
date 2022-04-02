const array = [2, 1, 2, 5, 5];

const result = [
  ...array.reduce((r, n) => r.set(n, (r.get(n) || 0) + 1), new Map()),
];
console.log({ result });
const finalResult = result.reduce((r, v) => r[1] > v[1] ? v : r)[0]; // get the the item that appear less times

console.log(finalResult);
