# Sorting Algorithms

- [Sorting Algorithms Slides](https://cs.slides.com/colt_steele/elementary-sorting-algorithms)
- [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

## Objectives

- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it is important to learn these simpler sorting algorithms.

## What is sorting?

- Sorting is the proccess of rearranging the items in a collection (e.g., an array) so that the items are in some kind of order.
- Examples
  - Sorting numbers from ssmallest to largest
  - Sorting names alphabetically
  - Sorting movies based on release year
  - Sorting movies based on revenue

## Why sorting?

- Sorting is a common task.
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages.

## Built-in JavaScript `sort()` method

```js
// Sorted alphabetically
["Steele", "Colt", "Data Structures", "Algorithms"]
  .sort() // ["Algorithms", "Colt", "Data Structures", "Steele"]

  [
    // Not exactly what we want when sorting numerically
    (6, 4, 15, 10)
  ].sort(); // [10, 15, 4, 6]
```

## Telling JavaScript how to sort

- The built-in sort method accepts an optional _comparator_ function.
- Can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.
  - If it returns a negative number, a should come before b.
  - If it returns a positive number, a should come after b.
  - If it returns 0, a and b are the same as far as the sort is concerned.

## Bubble Sort

- Not very efficient (rarely implemented)
- A sorting algorithm where the largest values "bubble" up to the top.

```js
/*
[5,3,4,1,2]
[3,5,4,1,2]
[3,4,5,1,2]
[3,4,1,5,2]
[3,4,1,2,5] // sorted '5'
*/
```

- Before we sort, we must swap
- Many sorting algorithms involve some type of swapping functionality (e.g., swapping 2 numbers to ut them in order).

```js
// ES5 (Recommended)
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

- **Time Complexity**
    - Worst Case: O(N^2)
    - Best Case: If data is nearly sorted, it will be O(N)




