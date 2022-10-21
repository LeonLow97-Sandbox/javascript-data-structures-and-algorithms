function search(arr, num) {
  if (num > arr.length) {
    return -1;
  }

  let min = 0;
  let max = arr.length;
  while (min < max) {
    middle = (min + max) / 2;
    let currentNumber = arr[middle];

    if (currentNumber > num) {
      max = middle - 1;
    } else if (currentNumber < num) {
      min = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
