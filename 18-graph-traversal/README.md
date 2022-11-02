# Graph Traversal

- [Graph Traversal Slides](https://cs.slides.com/colt_steele/graphs#/44)

## Introduction

- Visiting / Updating / Checking each vertex in a graph.
- There are multiple ways to reach a vertex in a graph and can have different starting points
  - Unlike trees, there is only one way to reach a node and its only starting point is the root.

## Graph Traversal Uses

- Peer to peer networking
- Web crawlers
  - A computer program that is used to search and automatically index website content and other information over the internet.
  - These programs, or bots, are most commonly used to create entries for a search engine index.
- Find "closest" matches / recommendations
  - Facebook Friends Graph
- Shortest path problems
  - GPS Navigation
  - Solving mazes
  - AI (shortest path to win the game)

## Depth First Graph Traversal

- Start from any vertex/node.
- Visit the next lowest number.
- Backtracking

## DFS PseudoCode (Recursive)

```
DFS(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor
```

- The function should accept a starting node.
- Create a list to store the end result, to be returned at the very end.
- Create an object to store visited vertices
- Create a helper function which accepts a vertex
    - The helper function should return early if the vertex is empty.
    - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    - Loop over all of the values in the adjacencyList for that vertex.
    - If any of those values have not been visited, recursively invoke the helper function with that vertex.
- Invoke the helper function with the starting vertex.

