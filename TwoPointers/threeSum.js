// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

const threeSum = (nums) => {
  let result = [];
  let numsSorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < numsSorted.length - 2; i++) {
    let left = i + 1;
    let right = numsSorted.length - 1;
    if (numsSorted[right] < 0) return result;
    if (i > 0 && numsSorted[i] === numsSorted[i - 1]) continue;
    while (left < right) {
      let sum = numsSorted[i] + numsSorted[left] + numsSorted[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([numsSorted[i], numsSorted[left], numsSorted[right]]);
        left++;
        right--;
        while (numsSorted[left] === numsSorted[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
