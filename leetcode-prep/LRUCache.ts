export class DLNode {
  key;
  val;
  next: DLNode | null;
  prev: DLNode | null;
  constructor(key: number, val: number, next?: DLNode, prev?: DLNode) {
    this.key = key;
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LRUCache {
  right: DLNode;
  left: DLNode;
  capacity: number;
  cache: Map<number, DLNode>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.left = new DLNode(0, 0);
    this.right = new DLNode(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
    this.cache = new Map<number, DLNode>();
  }

  private removeNode(node: DLNode) {
    const prev = node.prev;
    const next = node.next;
    prev!.next = next;
    next!.prev = prev;
  }

  private addNode(node: DLNode) {
    const first = this.right.prev;
    first!.next = node;
    node.prev = first;
    node.next = this.right;
    this.right.prev = node;
  }

  get(key: number): number {
    const node = this.cache.get(key);
    if(!node) return -1
    this.removeNode(node);
    this.addNode(node);
    return node.val;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key) as DLNode;
      this.removeNode(node);
      this.cache.delete(key);
      const newNode = new DLNode(key, value)
      this.addNode(newNode);
      this.cache.set(key, newNode)
    } else {
      const node = new DLNode(key, value);
      this.addNode(node);
      this.cache.set(key, node);

      if (this.cache.size > this.capacity) {
        const leastUsedNode = this.left.next as DLNode;
        this.cache.delete(leastUsedNode.key);
        this.removeNode(leastUsedNode);
      }
    }
  }
}


const lru = new LRUCache(2);
lru.put(2,1)
lru.put(2,2);
console.log(lru.get(2))


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
