// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: (matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ]),
//   (target = 3);
// Output: true;

const searchMatrix = (matrix, target) => {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top < bottom) {
    let middle = top + Math.floor((bottom - top) / 2);
    if (matrix[middle][left] > target) {
      bottom = middle - 1;
    } else if (matrix[middle][right] < target) {
      top = middle + 1;
    } else if (
      matrix[middle][left] <= target &&
      target <= matrix[middle][right]
    ) {
      bottom = middle;
    } else {
      top = middle;
    }
  }

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (matrix[top][middle] === target) return true;
    if (matrix[top][middle] < target) {
      left = middle + 1;
    } else if (matrix[top][middle] > target) {
      right = middle - 1;
    }
  }

  return matrix[top][left] === target ? true : false;
};

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
