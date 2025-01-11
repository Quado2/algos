/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.

*/

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: Record<string, number[]> = {};
  for (let i = 0; i < numCourses; i++) graph[i] = [];

  prerequisites.forEach((requisite: number[]) => {
    const [a, b] = requisite;
    graph[a].push(b);
  });
  console.log({ graph });

  const visitedNodes = new Set<number>();

  function dfs(course: number) {
    if (visitedNodes.has(course)) return false;
    if (graph[course].length === 0) return true;

    visitedNodes.add(course);
    const requisites = graph[course];
    for (const requisite of requisites) {
      if (!dfs(requisite)) return false;
    }
    visitedNodes.delete(course);
    graph[course] = [];
    return true;
  }

  for (const requisite of prerequisites) {
    const [course] = requisite;
    if (!dfs(course)) return false;
  }

  return true;
}

console.log(
  canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ])
);
