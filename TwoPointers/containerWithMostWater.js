// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
// of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49;

const maxArea = (height) => {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let width;
  let vertical;
  let area;

  while (left < right) {
    width = right - left;
    vertical = Math.min(height[left], height[right]);
    area = vertical * width;
    height[left] > height[right] ? right-- : left++;
    result = Math.max(result, area);
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
