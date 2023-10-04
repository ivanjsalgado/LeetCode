// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

const maxProduct = (nums) => {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1], nums[0] * nums[1]);
  let min = (max = product = nums[0]);

  for (let i = 1; i < nums.length; i++) {
    const [minProduct, maxProduct] = [nums[i] * min, nums[i] * max];
    max = Math.max(maxProduct, nums[i], minProduct);
    min = Math.min(maxProduct, nums[i], minProduct);
    product = Math.max(product, max);
  }
  return product;
};

// console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([2, -5, -2, -4, 3])); // 24
