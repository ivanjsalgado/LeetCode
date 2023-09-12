// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water
// it can trap after raining.

// Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6;

const trap = (height) => {
  if (height.length <= 1) return 0;
  let maxHeightLeft = new Array(height.length).fill(0);
  let maxHeightRight = new Array(height.length).fill(0);
  let result = 0;
  let currentMax = 0;
  for (let i = 1; i < height.length; i++) {
    currentMax = Math.max(height[i - 1], currentMax);
    maxHeightLeft[i] = currentMax;
  }
  currentMax = 0;
  for (let i = height.length - 2; i > 0; i--) {
    currentMax = Math.max(height[i + 1], currentMax);
    maxHeightRight[i] = currentMax;
  }

  for (let i = 1; i < height.length; i++) {
    let calculation = Math.min(maxHeightLeft[i], maxHeightRight[i]) - height[i];
    if (calculation > 0) result += calculation;
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
