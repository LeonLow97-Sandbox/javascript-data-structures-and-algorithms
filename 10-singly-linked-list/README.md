# Singly Linked List

- [Singly Linked List Slides](https://nlbsg.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344202#reviews)

## Objectives

- Define what a Singly Linked List is.
- Compare and contrast Linked Lists with Arrays
- Implement insertion, removal and traversal methods on Singly Linked Lists.

## What is a Linked List?

- A data structure that contains a **head, tail and length** property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null.
- Connection of one direction to the next node.

## Comparisons with Arrays

|                    Lists                    |                   Arrays                    |
| :-----------------------------------------: | :-----------------------------------------: |
|             Do not have indexes             |              Indexed in order               |
| Connected via nodes with a **next** pointer |   Insertion and deletion can be expensive   |
|        Random access is not allowed         | Can quickly be accessed at a specific index |

## Singly Linked List (Push) 

- Adding a new node to the end of the linked list.

## Singly Linked List (Pop) 

- Removing a node from the end of the Linked List.
- Have to assign a new tail when you remove the current tail.
- new tail: second last node.
- Have to traverse the linked list

## Singly Linked List (Shift)

- Removing a new node from the beginning of the Linked List
- Return the old head

## Singly Linked List (Unshift)

- Adding a new node to the beginning of the Linked List.

## Singly Linked List (Get) 

- Retrieving a node by it's position in the Linked List.
- Start in the beginning and count how many times we did `.next`
- Not as efficient as an array

## Singly Linked List (Set)

- Changing/Updating the **value** of a node based on it's position in the Linked List.
- Accepts **index** and **value**