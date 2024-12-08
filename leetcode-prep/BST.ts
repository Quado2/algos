import { Query } from "mongoose";
import { DLNode } from "./LRUCache";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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

class Queue<T> {
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

class BST {
  head: TreeNode | null;
  count = 0;

  constructor() {
    this.head = null;
  }

  insert(val: number) {
    this.count++;
    const newNode = new TreeNode(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    const insertToLastLeaf = (node: TreeNode) => {
      if (val > node.val) {
        if (!node.right) return (node.right = newNode);
        insertToLastLeaf(node.right);
      } else if (val < node.val) {
        if (!node.left) return (node.left = newNode);
        insertToLastLeaf(node.left);
      } else {
        this.count--;
        console.log("Val already exists");
      }
    };

    insertToLastLeaf(this.head);
  }

  max() {
    let node = this.head;
    while (node?.right) {
      node = node?.right;
    }
    return node?.val;
  }

  min() {
    let node = this.head;
    while (node?.left) {
      node = node?.left;
    }
    return node?.val;
  }

  contains(val: number) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) return true;

      if (curr.val > val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  dfsInorder(): number[] {
    let results: number[] = [];
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left);
      results.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.head!);
    return results;
  }

  dfsPreOrder(): number[] {
    let result: number[] = [];
    function traverse(node: TreeNode) {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.head!);
    return result;
  }

  dfsPostOrder(): number[] {
    let result: number[] = [];
    function traverse(node: TreeNode) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }
    traverse(this.head!);
    return result;
  }

  bfs(): number[] {
    const queue = new Queue<TreeNode>();
    const result: number[] = [];
    queue.enqueue(this.head as TreeNode);
    while(queue.count){
      const node = queue.dequeue() as TreeNode;
      result.push(node.val);
      if(node.left)queue.enqueue(node.left)
      if(node.right) queue.enqueue(node.right)
    }

    return result
  }

  remove(val:number){
    const removeNode = (head:TreeNode | null, val: number):TreeNode | null => {
      if(!head) return head;

      if(val < head.val){
        head.left = removeNode(head.left, val);
      } else if(val > head.val) {
        head.right = removeNode(head.right, val);
      }else {
        //We have found the node of interest
        if(!head.right && !head.left) return null
        
        if(!head.right) return head.left
        if(!head.left) return head.right
        
        //on the right node, find the min value. This will be the left most value on the right node
        let tempNode = head.right;
        while(tempNode.left) {
          tempNode = tempNode.left
        }
        head.val = tempNode.val;
        head.right = removeNode(head.right, tempNode.val);
      }
      return head;
    }

    this.head = removeNode(this.head!, val)
  }

  invert(){
    const reverseNode =(node:TreeNode|null) => {
      if(!node) return null

      const temp = node.left;
      node.left = node.right;
      node.right = temp;

      reverseNode(node.left);
      reverseNode(node.right);
    }

    reverseNode(this.head)
  }
}


const bst = new BST();
bst.insert(6);
bst.insert(5);
bst.insert(7);
bst.insert(4);
bst.insert(0);
bst.insert(10);
bst.insert(3);
bst.insert(9);

// console.log(
//   bst.head!.val,
//   bst.head!.left!.val,
//   bst.head?.right?.val,
//   bst.count
// );
// console.log(bst.min(), bst.max(), bst.contains(3), bst.contains(7));
// console.log(bst.dfsInorder());
// console.log(bst.dfsPreOrder());
// console.log(bst.dfsPostOrder());
console.log(bst.bfs())
console.log(bst.remove(6))
console.log(bst.bfs())
console.log(bst.invert())
console.log(bst.bfs())
