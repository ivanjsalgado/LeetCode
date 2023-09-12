// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Input: nums = [100, 4, 200, 1, 3, 2];
// Output: 4;

const longestSequence = (nums) => {
  if (nums.length <= 1) return nums.length;
  let numsSet = new Set(nums);
  let result = 1;

  for (const num of numsSet) {
    if (numsSet.has(num - 1)) {
      continue;
    }
    let currentValue = num;
    let currentCount = 1;
    while (numsSet.has(currentValue + 1)) {
      currentValue++;
      currentCount++;
    }
    result = Math.max(result, currentCount);
  }

  return result;
};

console.log(longestSequence([100, 4, 200, 1, 3, 2]));
