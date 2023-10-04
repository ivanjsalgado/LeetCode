// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

const countSubstrings = (s) => {
  let result = 0;

  const findSubstring = (left, right) => {
    while (s[left] === s[right] && left >= 0) {
      result++;
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

console.log(countSubstrings("aaa"));
