function calcEquation(
  equations: [string, string][],
  values: number[],
  queries: [string, string][]
): number[] {
  // Step 1: Build the graph
  const graph: Record<string, Record<string, number>> = {};

  equations.forEach(([a, b], index) => {
    const value = values[index];
    if (!graph[a]) graph[a] = {};
    if (!graph[b]) graph[b] = {};
    graph[a][b] = value; // a / b = value
    graph[b][a] = 1 / value; // b / a = 1 / value
  });

  // Step 2: DFS function
  function dfs(
    node: string,
    target: string,
    visited: Set<string>,
    currentProduct: number
  ): number {
    if (!graph[node]) return -1.0; // Node doesn't exist
    if (node === target) return currentProduct; // Found the target

    visited.add(node);
    for (const neighbor in graph[node]) {
      if (!visited.has(neighbor)) {
        const result = dfs(
          neighbor,
          target,
          visited,
          currentProduct * graph[node][neighbor]
        );
        if (result !== -1.0) return result;
      }
    }
    return -1.0; // No valid path found
  }

  // Step 3: Evaluate each query
  return queries.map(([x, y]) => {
    if (!graph[x] || !graph[y]) return -1.0; // Variables not in graph
    if (x === y) return 1.0; // Same variable
    return dfs(x, y, new Set(), 1.0); // Start DFS
  });
}

// Example Usage
const equations: [string, string][] = [
  ["a", "b"],
  ["b", "c"],
];
const values: number[] = [2.0, 3.0];
const queries: [string, string][] = [
  ["a", "c"],
  ["b", "a"],
  ["a", "e"],
  ["a", "a"],
  ["x", "x"],
];

console.log(calcEquation(equations, values, queries));
// Output: [6.0, 0.5, -1.0, 1.0, -1.0]
