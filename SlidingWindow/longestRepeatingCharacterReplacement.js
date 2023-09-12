// You are given a string s and an integer k. You can choose any character of the string and change it to any other
// uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the
// above operations.

// Input: s = "ABAB", k = 2
// Output: 4

// Input: s = "AABABBA", k = 1
// Output: 4

const characterReplacement = (s, k) => {
  if (s.length === 1) return s.length;
  let tracker = {};
  let left = 0;
  let result = 0;
  let maxCharacter = 0;

  for (let i = 0; i < s.length; i++) {
    tracker[s[i]] === undefined ? (tracker[s[i]] = 1) : tracker[s[i]]++;
    if (tracker[s[i]] > maxCharacter) maxCharacter = tracker[s[i]];
    if (i - left - maxCharacter + 1 > k) {
      tracker[s[left]]--;
      left++;
    }
    result = Math.max(result, i - left + 1);
  }

  return result;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
