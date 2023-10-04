// Given an integer array nums, return true if you can partition the array into two subsets such that the
// sum of the elements in both subsets is equal or false otherwise.

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

const canPartition = (nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }

  if (total % 2 !== 0) return false;
  let target = total / 2;
  let dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }
  return dp[target];
};

console.log(canPartition([1, 5, 11, 5]));
