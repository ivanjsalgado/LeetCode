// Given an array nums of distinct integers, return all the possible permutations. You can return the
// answer in any order.

// Input: nums = [1, 2, 3];
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1],
// ];

const permute = (nums) => {
  let result = [];
  const dfs = (currArr, currNums) => {
    if (currNums.length === 0) {
      result.push([...currArr]);
      return;
    }
    for (let i = 0; i < currNums.length; i++) {
      // Include the index
      currArr.push(currNums[i]);
      let remainingNums = currNums.filter((_, index) => index !== i);
      dfs(currArr, remainingNums);
      currArr.pop();
    }
  };
  dfs([], nums);
  return result;
};
console.log(permute([1, 2, 3]));
