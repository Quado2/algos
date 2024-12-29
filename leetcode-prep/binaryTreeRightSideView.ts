/*

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:

Input: root = [1,2,3,null,5,null,4]

Output: [1,3,4]

Explanation:



Example 2:

Input: root = [1,2,3,4,null,null,null,5]

Output: [1,3,4,5]

Explanation:



Example 3:

Input: root = [1,null,3]

Output: [1,3]

Example 4:

Input: root = []

Output: []

 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class DNode<T> {
  val: T;
  next: DNode<T> | null;
  prev: DNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class CQueue<T> {
  head: DNode<T | null>;
  tail: DNode<T | null>;
  count = 0;

  constructor() {
    this.head = new DNode(null);
    this.tail = new DNode(null);
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  enqueue(val: T) {
    const newNode = new DNode(val);
    const lastNode = this.tail.next;
    this.tail.next = newNode;
    newNode.prev = this.tail as DNode<T>;
    newNode.next = lastNode as DNode<T>;
    lastNode!.prev = newNode;
    this.count++;
  }

  dequeue(): T | null {
    if (!this.count) return null;
    const firstNode = this.head.prev;
    const secondNode = firstNode!.prev;
    secondNode!.next = this.head;
    this.head.prev = secondNode;
    this.count--;
    return firstNode!.val;
  }
}

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const list: number[] = [];
  const q = new CQueue<TreeNode>();
  q.enqueue(root);
  while (q.count) {
    const size = q.count;
    for (let i = 0; i < size; i++) {
      const node = q.dequeue() as TreeNode;
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
      if (i === size - 1) list.push(node.val);
    }
  }

  return list;
}
