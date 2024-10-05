class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.value = [];
  }

  enqueue(node) {
    this.value.push(node);
    let currentIndex = this.value.length - 1;
    if (currentIndex === 0) return;

    //bubble it to the right position
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    let currentNode = this.value[currentIndex];
    let parentNode = this.value[parentIndex];
    while (parentNode && currentNode.priority < parentNode.priority) {
      //swap
      const temp = this.value[currentIndex];
      this.value[currentIndex] = this.value[parentIndex];
      this.value[parentIndex] = temp;

      //update current index and parent index
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
      currentNode = this.value[currentIndex];
      parentNode = this.value[parentIndex];
    }

    return this;
  }

  swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  dequeue() {
    if (this.value.length === 0) return null;
    const max = this.value.shift();
    const length = this.value.length;
    if (length <= 1) return max;
    const lastNode = this.value.pop();
    this.value.unshift(lastNode);

    let currentIndex = 0;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let currentNode = this.value[currentIndex];
    let leftChildNode = this.value[leftChildIndex];
    let rightChildNode = this.value[rightChildIndex];

    //while any of the children is greater than the parent.
    while (true) {
      if (leftChildIndex >= length) break;

      let swapIndex;
      //if the left child index's value is higher than the current parent
      // then that should be the one we will swap
      if (currentNode.priority > leftChildNode.priority) {
        swapIndex = leftChildIndex;
      }

      //if the right child's index value is higher than the parent too,
      // then for us to take it as the swap index, then we must check if it
      // is higher than the left child index's value.
      if (
        rightChildIndex < length &&
        currentNode.priority > rightChildNode.priority &&
        rightChildNode.priority < leftChildNode.priority
      ) {
        swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      //we can now swap and update the variables for further looping
      this.swap(this.value, currentIndex, swapIndex);
      currentIndex = swapIndex;
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 1;
      currentNode = this.value[currentIndex];
      leftChildNode = this.value[leftChildIndex];
      rightChildNode = this.value[rightChildIndex];
    }

    return max;
  }
}

module.exports = {
  QueueNode: Node,
  PriorityQueue,
};

const prQueue = new PriorityQueue();

prQueue.enqueue(new Node(30, 5));
prQueue.dequeue();

