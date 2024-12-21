

  class _Node {
      val: number
      left: _Node | null
      right: _Node | null
      next: _Node | null
  
      constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
          this.next = (next===undefined ? null : next)
      }
 }
 

class LNode<T> {
  val: T;
  next: LNode<T> | null;
  prev: LNode<T> | null
  constructor(val:T){
      this.val = val;
      this.next = null;
      this.prev = null
  }
}

class Queue2<T> {
  count = 0;
  head: LNode<T | null>
  tail: LNode<T | null>

  constructor(){
      this.head = new LNode<T>(null);
      this.tail = new LNode<T>(null);
      this.tail.next = this.head;
      this.head.prev = this.tail;
  }

  enqueue(val:T){
      const newNode = new LNode(val);
      const lastNode = this.tail.next;
      this.tail.next = newNode;
      newNode.prev = this.tail as LNode<T>;
      newNode.next = lastNode as LNode<T>;
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

  peek():T|null{
      if(!this.count) return null;
      return this.head.prev!.val
  }

  
}


function connect(root: _Node | null): _Node | null {
  if(!root) return root
  const q = new Queue2<_Node>();
  q.enqueue(root);
  while(q.count) {
      const count = q.count;
      for(let i = 0; i < count; i++){
          const node = q.dequeue();
          const nextNode = q.peek();
          node!.next = i+1 === count ? null:  nextNode
          if(node!.left) q.enqueue(node!.left);
          if(node!.right) q.enqueue(node!.right)   
      }
  }


  return root
};