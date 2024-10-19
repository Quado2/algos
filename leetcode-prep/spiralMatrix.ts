class LinkedNode<T> {
  private value: T;
  private next: LinkedNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T) {
    this.value = value;
  }

  setNext(next: LinkedNode<T>) {
    this.next = next;
  }

  getNext() {
    return this.next;
  }
}

class CircularLinkedList<T> {
  head: LinkedNode<T> | null = null;

  append(value: T) {
    const newNode = new LinkedNode(value);
    if (!this.head) {
      this.head = newNode;
      newNode.setNext(this.head);
    } else {
      let current: LinkedNode<T> = this.head;
      while (current.getNext() !== this.head) {
        current = current.getNext() as LinkedNode<T>;
      }

      current.setNext(newNode);
      newNode.setNext(this.head);
    }
  }
}

function spiralOrder(matrix: number[][]): number[] {
  function moveRight(x: number, y: number) {
    return [x + 1, y];
  }

  function moveDown(x: number, y: number) {
    return [x, y + 1];
  }
  function moveLeft(x: number, y: number) {
    return [x - 1, y];
  }

  function moveUp(x: number, y: number) {
    return [x, y - 1];
  }

  function isXBoundaryReached(x: number, y: number, boundary: number) {
    return x === boundary;
  }

  function isYBoundaryReached(x: number, y: number, boundary: number) {
    return y === boundary;
  }

  const reduceBoudaryBySub = (boundary: number) => boundary - 1;
  const reduceBoudaryByAdd = (boundary: number) => boundary + 1;

  const yLength = matrix.length;
  const xLength = matrix[0].length;

  const nodeList = new CircularLinkedList<
    [
      number,
      typeof moveRight,
      typeof isXBoundaryReached,
      typeof reduceBoudaryByAdd
    ]
  >();
  nodeList.append([
    xLength - 1,
    moveRight,
    isXBoundaryReached,
    reduceBoudaryBySub,
  ]);
  nodeList.append([
    yLength - 1,
    moveDown,
    isYBoundaryReached,
    reduceBoudaryBySub,
  ]);
  nodeList.append([0, moveLeft, isXBoundaryReached, reduceBoudaryByAdd]);
  nodeList.append([1, moveUp, isYBoundaryReached, reduceBoudaryByAdd]);

  let x = 0,
    y = 0;
  const result: number[] = [];
  let currentSize = 0;
  const totalLength = yLength * xLength;

  let node = nodeList.head as LinkedNode<any>;

  while (currentSize < totalLength) {
    const boundary = node?.getValue()?.[0];
    const move = node?.getValue()?.[1];
    let checkBoundary = node?.getValue()?.[2];
    let isboundaryReached = checkBoundary?.(x, y, boundary as number);
    let reduceBoundary = node?.getValue()?.[3];
    while (!isboundaryReached && currentSize < totalLength) {
      result.push(matrix[y][x]);
      currentSize++;
      [x, y] = move?.(x, y) || [];
      isboundaryReached = checkBoundary?.(x, y, boundary as number);
    }

    const newBoundary = reduceBoundary?.(boundary as number);
    node?.setValue?.([newBoundary, move, checkBoundary, reduceBoundary]);

    node = node.getNext() as LinkedNode<any>;
  }

  return result;
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let mat2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const resp = spiralOrder(mat);
const resp2 = spiralOrder(mat2);

console.log({ resp, resp2 });
