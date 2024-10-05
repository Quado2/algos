const array = [2, 1, 2, 5, 5];

const result = [
  ...array.reduce((r, n) => r.set(n, (r.get(n) || 0) + 1), new Map()),
];
const finalResult = result.reduce((r, v) => r[1] > v[1] ? v : r)[0]; // get the the item that appear less times


function arrayFromArgs(args) {
  console.log(arguments)
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);

const arr = [1,2,3];
arr[0]++
console.log(arr)
