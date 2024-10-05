class MaxHeap {
  constructor() {
    this.value = [];
  }

  insert(val) {
    this.value.push(val);
    let currentIndex = this.value.length - 1;
    if (currentIndex === 0) return;

    //bubble it to the right position
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (this.value[currentIndex] > this.value[parentIndex]) {
      //swap
      const temp = this.value[currentIndex];
      this.value[currentIndex] = this.value[parentIndex];
      this.value[parentIndex] = temp;

      //update current index and parent index
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }

    return this;
  }

  swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  extractMax() {
    if (this.value.length === 0) return null;
    const max = this.value.shift();
    if (this.value.length === 0) return max;
    const lastValue = this.value.pop();
    this.value.unshift(lastValue);

    let currentIndex = 0;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;

    //while any of the children is greater than the parent.
    while (
      this.value[currentIndex] < this.value[leftChildIndex] ||
      this.value[currentIndex] < this.value[rightChildIndex]
    ) {
      let swapIndex;

      //if the left child index's value is higher than the current parent
      // then that should be the one we will swap
      if (this.value[currentIndex] < this.value[leftChildIndex]) {
        swapIndex = leftChildIndex;
      }

      //if the right child's index value is higher than the parent too,
      // then for us to take it as the swap index, then we must check if it
      // is higher than the left child index's value.
      if (
        this.value[currentIndex] < this.value[rightChildIndex] &&
        this.value[rightChildIndex] > this.value[leftChildIndex]
      ) {
        swapIndex = rightChildIndex;
      }

      //we can now swap and update the variables for further looping
      this.swap(this.value, currentIndex, swapIndex);
      currentIndex = swapIndex;
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 1;
    }

    return max;
  }
}

const heap = new MaxHeap();
heap.insert(20);
heap.insert(30);
heap.insert(10);
heap.insert(42);
console.log(heap.value);
console.log(heap.extractMax());
console.log(heap.value);
console.log(heap.extractMax());
console.log(heap.value);
console.log(heap.extractMax());
console.log(heap.value);
console.log(heap.extractMax());
console.log(heap.value);
console.log(heap.extractMax());
console.log(heap.value);
