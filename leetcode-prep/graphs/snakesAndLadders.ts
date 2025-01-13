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

class Queue2<T> {
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

function getPosition(length:number, value: number) {
    const row = Math.floor((value - 1)/length);
    let col = (value-1)%length
    if(row%2) col = length - 1 - col

    return [row, col]
}

function snakesAndLadders(board: number[][]): number {
    board.reverse();
    const length = board.length;

    const q = new Queue2<number[]>();
    const visited = new Set<number>();
    q.enqueue([1,0]) //[position, number of steps]
    while(q.count) {
        const [pos, step] = q.dequeue();
        for(let i = 1; i <= 6; i++) {
            let currPos = pos + i
            const [row, col] = getPosition(length, currPos);
            let val = board[row][col]
            if(val !== -1) {
                currPos = val
            }
            if(length*length === currPos) return step+1;
            if(!visited.has(currPos)) {
                q.enqueue([currPos,step+1])
                visited.add(currPos)
            }
        }
    }

    return -1
};