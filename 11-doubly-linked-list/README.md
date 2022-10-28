# Doubly Linked List

- [Doubly Linked List Slides](https://cs.slides.com/colt_steele/doubly-linked-lists)
- Each node points in 2 directions.

## Objectives

- Construct a Doubly Linked List
- Compare and contrast Doubly and Singly Linked Lists
- Implement basic operations on a Doubly Linked List.

## What is a Doubly Linked List?

- Almost identical to Singly Linked List, except every node has another pointer to the previous node.
- 2 pointers: next and prev
- Takes up more memory but its more flexible. 
    - tradeoff!

## Setup of Doubly Linked List

- Node
    - val, next, prev
- Doubly Linked List
    - head, tail, length

```js
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
}
```

## Doubly Linked List (push)

- Adding a node to the end of the Doubly Linked List

## Doubly Linked List (pop)

- Removing a node from the end of the Doubly Linked List

## Doubly Linked List (shift)

- Removing a node from the beginning of the Doubly Linked List

## Doubly Linked List (unshift)

- Adding a node to the beginning of the Doubly Linked List

## Doubly Linked List (get)

- Accessing a node in a Doubly Linked List by its position

## Doubly Linked List (set)

- Updating the value of a node based on its position in a Doubly Linked List

## Doubly Linked List (insert)

- Adding a node in a Doubly Linked List by a certain position.


