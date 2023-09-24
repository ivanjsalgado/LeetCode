// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "pwwkew"
// Output: 3

const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0;
  let workingSet = new Set();
  let left = 0;
  let result = 1;

  for (let i = 0; i < s.length; i++) {
    while (workingSet.has(s[i])) {
      workingSet.delete(s[left]);
      left++;
    }
    workingSet.add(s[i]);
    result = Math.max(workingSet.size, result);
  }

  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
