// Given an integer array nums that may contain duplicates, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: nums = [1, 2, 2];
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];

const subsetsWithDup = (nums) => {
  let result = [];
  let sortedNums = nums.sort((a, b) => a - b);
  const dfs = (index, currArr) => {
    if (index >= sortedNums.length) {
      result.push([...currArr]);
      return;
    }
    // Path 1: Include the index
    currArr.push(sortedNums[index]);
    dfs(index + 1, currArr);
    // Path2: Exclude the index and avoid duplicates
    currArr.pop();
    while (
      index < sortedNums.length &&
      sortedNums[index] === sortedNums[index + 1]
    ) {
      index++;
    }
    dfs(index + 1, currArr);
  };
  dfs(0, []);
  return result;
};
console.log(subsetsWithDup([1, 2, 2]));
