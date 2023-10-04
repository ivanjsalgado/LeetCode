// Given a collection of candidate numbers (candidates) and a target number (target), find all unique
// combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

const combinationSum2 = (candidates, target) => {
  let result = [];
  let sortedNums = candidates.sort((a, b) => a - b);

  const dfs = (index, currArr, currSum) => {
    if (currSum === 0) {
      result.push([...currArr]);
      return;
    }
    if (currSum < 0 || index >= sortedNums.length) {
      return;
    }

    for (let i = index; i < sortedNums.length; i++) {
      if (i > index && sortedNums[i] === sortedNums[i - 1]) {
        continue; // Skip duplicates
      }
      currArr.push(sortedNums[i]);
      dfs(i + 1, currArr, currSum - sortedNums[i]);
      currArr.pop();
    }
  };

  dfs(0, [], target);
  return result;
};
