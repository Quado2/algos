const { PriorityQueue, QueueNode: Node } = require("./priorityQueue");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  setEdge(originVertex, destinationVertex, weight) {
    //check if it already exists
    const existingIndex = this.adjacencyList[originVertex].findIndex(
      (edges) => edges.node === destinationVertex
    );
    if (existingIndex === -1) {
      this.adjacencyList[originVertex].push({
        node: destinationVertex,
        weight,
      });
    } else {
      this.adjacencyList[originVertex][existingIndex] = {
        node: destinationVertex,
        weight,
      };
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.setEdge(vertex1, vertex2, weight);
    this.setEdge(vertex2, vertex1, weight);
  }

  dijkstraShortest(startVertex, endVertex) {
    //declare the variables to be used
    let distances = {};
    let nexts = new PriorityQueue();
    let previous = {};
    let visited = {};
    let path = [];

    //loop through all the vertices and initialize the distances to
    //infinity and the previous to null.
    Object.keys(this.adjacencyList).forEach((vertex) => {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    });

    //the distances represent the distance of the vertices from the starting Vertex
    //so the distance to A should be initialized to zero
    distances[startVertex] = 0;

    //We start by pushin the starting Vertex to the priority queue. the value will be the vertex
    //while the priority will represent the distance between the vertex in question
    //and the starting Vertex.
    //Since we are starting with the starting vertex, the distance will be initiallized to 0.
    nexts.enqueue(new Node(startVertex, 0));

    //we will continue to loop while there is something in the priority queue
    while (nexts.value.length) {
      const currentVertex = nexts.dequeue();

      //if we pick out the ending Vertex, then it means that we are done.
      //we should then connect the route and break out of the loop
      if (currentVertex.value === endVertex) {
        let last = endVertex;
        while (last) {
          path.push(last);
          last = previous[last];
        }
        break;
      }

      //we will mark it as now visited.
      visited[currentVertex.value] = true;

      //get all the linked vertices to the one in question
      const linkedVertices = this.adjacencyList[currentVertex.value];

      //if there is any linked Vertice
      if (linkedVertices) {
        linkedVertices.forEach((vertex) => {
          //check if it has not been visited otherwise, do nothing
          if (!visited[vertex.node]) {
            const vertexNode = vertex.node;
            //get the distance from the currentNode to the origin.
            //This is gotten by adding it's weight to the already gotten distance
            //between the preceeeding vertex and the origin Verex
            const distanceToOrigin =
              vertex.weight + distances[currentVertex.value];

            //if the distance is lower than the already exisiting distance
            //to the origin, then we update all the information
            if (distanceToOrigin < distances[vertex.node]) {
              previous[vertexNode] = currentVertex.value;
              distances[vertexNode] = distanceToOrigin;
              nexts.enqueue(new Node(vertexNode, distances[vertexNode]));
            }
          }
        });
      }
    }

    return { distance: distances[endVertex], path: path.reverse() };
  }
}

let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "F", 1);
wg.addEdge("D", "E", 3);
wg.addEdge("F", "E", 1);
wg.addEdge("B", "E", 3);
console.log(wg.dijkstraShortest("B", "E"));
