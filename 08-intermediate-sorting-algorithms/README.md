# Intermediate Sorting Algorithms

## Objectives

- Understand the limitations of the basic sorting algorithms (selection, bubble, and insertion sort)
- Implement merge sort
- Implement quick sort
- Implement radix sort

## Faster Sorts

- There is a family of sorting algorithms that can improve time complexity from O(N^2) to O(N log N).
- There's a tradeoff between efficiency and simplicity.
- The more efficient algorithms are less simple, and generally take longer to understand.

## Merge Sort

- [Merge Sort Slides](https://cs.slides.com/colt_steele/intermediate-sorting-algorithms)
- Combination of 2 things - merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

```js
/*
                    [8, 3, 5, 4, 7, 6 , 1, 2]
                [8, 3, 5 ,4]              [7, 6, 1, 2]    
        [8, 3]      [5, 4]           [7, 6]      [1, 2]
    [8]    [3]    [5]    [4]       [7]    [6]    [1]    [2] 
        [3, 8]        [4, 5]          [6, 7]         [1, 2]     // sorting starts here (starts with smaller size arrays)
            [3, 4, 5, 8]                 [1, 2, 6, 7]
                    [1, 2, 3, 4, 5, 6, 7, 8]

*/
```

### Merging Arrays (First step for Merge Sort)

- Merging 2 _sorted_ arrays
- In order to implement merge sort, it's useful to first implement a function responsible for merging 2 sorted arrays.
- Given 2 arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the 2 input arrays.
- This function should run in **O(n + m)** time and **O(n + m)** space and should not modify the parameters passed to it.

---

### Merging Arrays PseudoCode

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid)); // waits for the recursion of 'left' above until it returns something.
  return mergeArray(left, right);
}
```

---

### Big O of mergeSort

|Time Complexity (Best)|Time Complexity (Average)|Time Complexity (Worst)|Space Complexity|
|:-:|:-:|:-:|:-:|
|O(n log n)|O(n log n)|O(n log n)|O(n)|

- O(log n) decompositions
    - making splits until arr.length <= 1
- O(n) comparisons per decomposition
    - comparing 2 arrays, it will be the size of the original array.

