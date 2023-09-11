// Given an integer array nums, return true if any value appears at least twice in the array, and return false
// if every element is distinct.

// Input: nums = [1, 2, 3, 1];
// Output: true;

// Input: nums = [1, 2, 3, 4];
// Output: false;

const containsDuplicate = (nums) => {
  let tracker = {};

  for (let i = 0; i < nums.length; i++) {
    if (tracker[nums[i]] !== undefined) return true;
    tracker[nums[i]] = 1;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
