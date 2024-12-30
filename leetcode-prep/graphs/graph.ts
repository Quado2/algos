class DNode2<T> {
  val: T;
  next: DNode2<T> | null;
  prev: DNode2<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Queue<T> {
  head: DNode2<T | null>;
  tail: DNode2<T | null>;
  count = 0;

  constructor() {
    this.head = new DNode2(null);
    this.tail = new DNode2(null);
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  enqueue(val: T) {
    const newNode = new DNode2(val);
    const lastNode = this.tail.next;
    this.tail.next = newNode;
    newNode.prev = this.tail as DNode2<T>;
    newNode.next = lastNode as DNode2<T>;
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

export class GNode {
  val: number | string;
  adjacentList: GNode[];
  color: string | null;

  constructor(val: number | string) {
    this.val = val;
    this.adjacentList = [];
    this.color = null;
  }

  connect(node: GNode, bidirectional = true) {
    if (
      !this.adjacentList.find((innerNode: GNode) => innerNode.val === node.val)
    ) {
      this.adjacentList.push(node);
      if (bidirectional) node.adjacentList.push(this);
    }
  }

  disconnect(node: GNode) {
    this.adjacentList = this.adjacentList.filter(
      (innerNode: GNode) => innerNode.val !== node.val
    );
    node.adjacentList = node.adjacentList.filter(
      (innerNode: GNode) => innerNode.val !== this.val
    );
  }

  isConnected(node: GNode): boolean {
    return !!this.adjacentList.find(
      (innerNode: GNode) => innerNode.val === node.val
    );
  }

  getAdjacentNodes(): GNode[] {
    return this.adjacentList;
  }
}

class Graph {
  nodes: GNode[];

  constructor(nodes: GNode[]) {
    this.nodes = [...nodes];
  }

  addNode(node: GNode) {
    this.nodes.push(node);
  }

  bfs(startNode: GNode) {
    const queue = new Queue<GNode>();
    const list: (string | number)[] = [];
    queue.enqueue(startNode);
    const visited = new Set<GNode>();

    while (queue.count) {
      const node = queue.dequeue() as GNode;
      list.push(node.val);
      visited.add(node);
      for (const nodeAdj of node.adjacentList) {
        if (!visited.has(nodeAdj)) {
          visited.add(nodeAdj);
          queue.enqueue(nodeAdj);
        }
      }
    }

    return list;
  }

  constructPath(
    visitedNodes: Map<string | number, GNode | null>,
    startNode: GNode,
    endNode: GNode
  ): GNode[] {
    let currNode = endNode;
    const path: GNode[] = [];
    while (currNode) {
      path.push(currNode);
      currNode = visitedNodes.get(currNode.val) as GNode;
    }
    return path.reverse();
  }

  shortestDistanceBetween(startNode: GNode, endNode: GNode): GNode[] {
    const queue = new Queue<GNode>();
    queue.enqueue(startNode);
    const visitedNodes = new Map<string | number, GNode | null>();
    visitedNodes.set(startNode.val, null);

    while (queue.count) {
      const node = queue.dequeue() as GNode;
      if (node.val === endNode.val)
        return this.constructPath(visitedNodes, startNode, endNode);
      for (const adjacentNode of node.adjacentList) {
        if (!visitedNodes.has(adjacentNode.val)) {
          queue.enqueue(adjacentNode);
          visitedNodes.set(adjacentNode.val, node);
        }
      }
    }
    return [];
  }

  dfs(startNode: GNode): GNode[] {
    const list: GNode[] = [];
    const visited = new Set<GNode>();

    function traverse(node: GNode, visitedNodes: Set<GNode>) {
      if (!node) return;
      list.push(node);
      for (const adjacentNode of node.adjacentList) {
        if (!visitedNodes.has(adjacentNode)) {
          visitedNodes.add(adjacentNode);
          traverse(adjacentNode, visitedNodes);
        }
      }
    }
    visited.add(startNode);
    traverse(startNode, visited);
    return list;
  }

  topologicalSort(){
    const visited = new Set<GNode>()
    const list:GNode[]  = []
    for(const node of this.nodes) {
      dftraversal(node, visited)
    }

    function dftraversal(node:GNode, visited: Set<GNode>) {
      if(visited.has(node)) return;

      
      visited.add(node)
      for(const adjacentNode of node.adjacentList) {
        if(!visited.has(adjacentNode)) {
          dftraversal(adjacentNode, visited)
        }
        
      }
      list.push(node)
    }

    return list.reverse()
  }
}

const nodeA = new GNode("A");
const nodeB = new GNode("B");
const nodeC = new GNode("C");
const nodeD = new GNode("D");
const nodeE = new GNode("E");
const nodeF = new GNode("F");
const nodeG = new GNode("G");

const graph = new Graph([nodeE, nodeA, nodeB, nodeC, nodeD, nodeF]);

// nodeA.connect(nodeB);
// nodeA.connect(nodeD);
// nodeB.connect(nodeF);
// nodeB.connect(nodeC);
// nodeG.connect(nodeF);
// nodeD.connect(nodeE);
// nodeG.connect(nodeF);
// nodeC.connect(nodeG);

// for(let node of graph.nodes) {
//   for(let innerNode of node.adjacentList){
//     console.log(`Node ${node.val} is connected to node: ${innerNode.val}`)
//   }
// }

// console.log(nodeA.isConnected(nodeB));
// nodeA.disconnect(nodeB);
// console.log(nodeA.isConnected(nodeB));

// console.log(graph.bfs(nodeA));
// console.log(graph.shortestDistanceBetween(nodeA, nodeF))
// console.log(graph.shortestDistanceBetween(nodeB, nodeF))
// console.log(graph.shortestDistanceBetween(nodeB, nodeG))
// console.log(graph.shortestDistanceBetween(nodeB, nodeE))
// console.log(graph.shortestDistanceBetween(nodeA, nodeA))

// console.log(graph.dfs(nodeA));

// nodeA.connect(nodeB, false);
// nodeA.connect(nodeC, false);
// nodeB.connect(nodeD, false);
// nodeD.connect(nodeF,false);
// nodeE.connect(nodeC, false);
// nodeE.connect(nodeF, false);

// console.log(graph.topologicalSort())
