// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const subsets = (nums) => {
  let result = [];

  const dfs = (index, currArr) => {
    // Base Case
    if (index >= nums.length) {
      result.push([...currArr]);
      return;
    }
    // Include current index (Path 1)
    currArr.push(nums[index]);
    dfs(index + 1, currArr);
    // Exclude the index (Path 2)
    currArr.pop();
    dfs(index + 1, currArr);
  };
  dfs(0, []);
  return result;
};

console.log(subsets([1, 2, 3]));
