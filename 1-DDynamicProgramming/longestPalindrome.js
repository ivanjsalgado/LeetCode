// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

const longestPalindrome = (s) => {
  let result = "";

  const findSubstring = (left, right) => {
    while (s[left] === s[right] && left >= 0) {
      if (result.length < s.slice(left, right + 1).length) {
        result = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    findSubstring(i, i);
    findSubstring(i, i + 1);
  }
  return result;
};

console.log(longestPalindrome("babad"));
