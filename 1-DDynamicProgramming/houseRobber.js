// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems
//  connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money
// you can rob tonight without alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

const houseRobber = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let money = new Array(nums.length).fill(0);
  money[0] = nums[0];
  money[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    money[i] = Math.max(nums[i] + money[i - 2], money[i - 1]);
  }
  return Math.max(money[money.length - 1], money[money.length - 2]);
};

console.log(houseRobber([1, 2, 3, 1])); // 4
console.log(houseRobber([2, 7, 9, 3, 1])); // 12
console.log(houseRobber([1, 2, 3, 1])); // 4
console.log(houseRobber([2, 1, 1, 2])); // 4
