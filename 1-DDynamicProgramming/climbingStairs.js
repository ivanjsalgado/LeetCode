// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) => {
  let resultArr = new Array(n + 1).fill(1);
  for (let i = resultArr.length - 3; i >= 0; i--) {
    resultArr[i] = resultArr[i + 1] + resultArr[i + 2];
  }
  return resultArr[0];
};

console.log(climbStairs(3));
console.log(climbStairs(5));
