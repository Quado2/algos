class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v1) => v1 != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v2) => v2 != vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfsRecursive(startNode) {
    //check if it's in the graph and return undefined if not
    if (!this.adjacencyList[startNode]) return undefined;

    let result = [];
    let visitedVertices = {};

    const traverse = (node) => {
      //base case is when the node is empty
      if (!node) return;

      //we record it in the result and mark it as visited
      visitedVertices[node] = true;
      result.push(node);

      //get the neighboring vertices
      const neighborVertices = this.adjacencyList[node];

      //if there is something, then loop through the neighbors and call
      //recursively the traverse on all the neighbors if they have not been visited
      if (neighborVertices)
        neighborVertices.forEach((element) => {
          if (!visitedVertices[element]) traverse(element);
        });
    };
    traverse(startNode);

    return result;
  }

  dfsIterative(startNode) {
    //check if it's in the graph and return undefined if not
    if (!this.adjacencyList[startNode]) return undefined;
    let result = [];
    const stack = [];
    const visitedVertices = {};

    //push the starting node to the stack;
    stack.push(startNode);

    //while there is still something in the stack
    while (stack.length) {
      //remve the last element
      const currentNode = stack.pop();

      //if it has not been visited then add it to the result and mark as visited
      if (!visitedVertices[currentNode]) {
        result.push(currentNode);
        visitedVertices[currentNode] = true;
        // push all the neighbors to the stack and start over
        const neighborVertices = this.adjacencyList[currentNode];
        if (neighborVertices)
          neighborVertices.forEach((vertice) => stack.push(vertice));
      }
    }

    return result;
  }

  bfs(startNode) {
    //check if it's in the graph and return undefined if not
    if (!this.adjacencyList[startNode]) return undefined;
    let result = [];
    const queue = [];
    const visitedVertices = {};

    //push the starting node to the queue;
    queue.push(startNode);

    //while there is still something in the queue
    while (queue.length) {
      //remve the last element
      const currentNode = queue.shift();

      //if it has not been visited then add it to the result and mark as visited
      if (!visitedVertices[currentNode]) {
        result.push(currentNode);
        visitedVertices[currentNode] = true;
        // push all the neighbors to the queue and start over
        const neighborVertices = this.adjacencyList[currentNode];
        if (neighborVertices)
          neighborVertices.forEach((vertice) => queue.push(vertice));
      }
    }

    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("E"));
console.log(g.bfs("A"));
