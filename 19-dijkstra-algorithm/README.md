# Dijkstra's Algorithm

- Uses Graph and Priority Queue (Binary Heap)
- [Dijkstra's Algorithm Slides](https://cs.slides.com/colt_steele/graphs#/70)

## Objectives

- Understand the importance of Dijkstra's
- Implement a **Weighted Graph**
- Walk through the steps of Dijkstra's
- Implement Dijkstra's using a naive priority queue.
- Implement Dijkstra's using a binary heap priority queue.

## What is Dijkstra's Algorithm?

- Finds the shortest path between 2 vertices on a graph
- "What's the fastest way to get from point A to point B?"

## Why is it useful?

- GPS: finding fastest route
- Network routing: finds open shortest path for data
    - break up messages into a pieces.
- Biology: used to model the spread of viruses among humans
- Airline tickets: finding cheapest route to your destination

## Writing a Weighted Graph

```js
{
    "A": [{node: "B", weight: 10}]
}
```
