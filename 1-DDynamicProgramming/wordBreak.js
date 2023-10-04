// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into
// a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

const wordBreak = (s, wordDict) => {
  let strDP = new Array(s.length + 1).fill(false);
  strDP[0] = true;

  for (let i = 0; i <= s.length; i++) {
    if (strDP[i]) {
      for (let word of wordDict) {
        if (s.slice(i, i + word.length) === word) {
          strDP[i + word.length] = true;
        }
        if (strDP[s.length]) return true;
      }
    }
  }

  return strDP[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
