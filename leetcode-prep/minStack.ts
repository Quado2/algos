/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

*/

class MinStack {
  private stack: number[];
  private minStack: number[];
  private currentMin: number;
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.currentMin = +Infinity;
  }

  push(val: number): void {
    if (this.minStack.length === 0 || val <= this.currentMin) {
      this.minStack.push(val);
      this.currentMin = val;
    }
    this.stack.push(val);
  }

  pop(): void {
    const val = this.stack.pop();
    if (val === this.currentMin) this.minStack.pop();
    this.currentMin = this.minStack[this.minStack.length - 1];
  }

  top(): number {
    if (this.stack.length < 1) return 0;
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.currentMin;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
