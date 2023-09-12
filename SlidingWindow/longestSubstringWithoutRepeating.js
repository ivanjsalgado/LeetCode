// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "pwwkew"
// Output: 3

const lengthOfLongestSubstring = (s) => {
  let resultSet = new Set();
  let result = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    while (resultSet.has(s[i])) {
      resultSet.delete(s[left]);
      left++;
    }
    resultSet.add(s[i]);
    result = Math.max(result, resultSet.size);
  }

  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
