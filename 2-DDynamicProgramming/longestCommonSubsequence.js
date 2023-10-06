// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

const longestCommonSubsequence = (text1, text2) => {
  let dp = Array(text1.length + 1)
    .fill(0)
    .map((_) => new Array(text2.length + 1).fill(0));
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      text1[i - 1] === text2[j - 1]
        ? (dp[i][j] = dp[i - 1][j - 1] + 1)
        : (dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]));
    }
  }
  return dp[text1.length][text2.length];
};

console.log(longestCommonSubsequence("abcde", "ace"));
