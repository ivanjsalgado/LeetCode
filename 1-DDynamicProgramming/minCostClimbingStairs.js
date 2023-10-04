// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost,
// you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

const minCostClimbStairs = (cost) => {
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);
  let resultArr = new Array(cost.length).fill(0);
  [resultArr[0], resultArr[1]] = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    resultArr[i] = Math.min(resultArr[i - 1], resultArr[i - 2] + cost[i]);
  }
  return Math.min(
    resultArr[resultArr.length - 1],
    resultArr[resultArr.length - 2]
  );
};
console.log(minCostClimbStairs([10, 15, 20]));
// console.log(minCostClimbStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
