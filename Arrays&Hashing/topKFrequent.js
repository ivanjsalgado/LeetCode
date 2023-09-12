// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Input: (nums = [1, 1, 1, 2, 2, 3]), (k = 2);
// Output: [1, 2];

const topFrequent = (nums, k) => {
  let tracker = {};

  for (let i = 0; i < nums.length; i++) {
    tracker[nums[i]] === undefined
      ? (tracker[nums[i]] = 1)
      : tracker[nums[i]]++;
  }

  let sortTracker = Object.keys(tracker).sort((a, b) => {
    return tracker[b] - tracker[a];
  });

  return sortTracker.slice(0, k);
};

console.log(topFrequent([1, 1, 1, 2, 2, 3], 2));
