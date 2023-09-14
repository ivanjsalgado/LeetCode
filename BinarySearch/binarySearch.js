// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to
// search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: (nums = [-1, 0, 3, 5, 9, 12]), (target = 9);
// Output: 4;

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return nums[left] === target ? left : -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
