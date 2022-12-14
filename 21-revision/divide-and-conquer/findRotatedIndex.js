/*
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
The function should return the index of the integer in the array. If the value is not found, return -1.

Constraints:

Time Complexity - O(log n)

Space Complexity - O(1)

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/

function findRotatedIndex(arr, num) {
    let left = 0
    let right = arr.length

    while (left < right) {
        let middle = Math.floor((left + right) / 2)

        if (arr[middle] === num) return middle;
        
    }
}

console.log(findRotatedIndex([3,4,1,2],4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)) // 5