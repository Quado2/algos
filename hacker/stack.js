function processData(input) {
  //Enter your code here
  const queue = [];
  const newInput = input.split("\n");
  const items = newInput.map((item) => {
    return item.split(" ");
  });
  for (let i = 1; i < items.length; i++) {
    switch (items[i][0]) {
      case "1": {
        queue.push(items[i][1]);
        break;
      }

      case "2": {
        queue.splice(0, 1);
        break;
      }

      case "3": {
        console.log(queue[0]);
        break;
      }
    }
  }

  return queue;
}

const arr = [1, 3, 5, 6];
arr.splice(0, 1);
console.log(arr);
