// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Input: (s1 = "ab"), (s2 = "eidboaoo");
// Output: false;

const checkInclusion = (s1, s2) => {
  if (s2.length < s1.length) return false;
  let s1Arr = new Array(26).fill(0);
  let s2Arr = new Array(26).fill(0);

  const checkEqual = (s1Arr, s2Arr) => {
    for (let i = 0; i < s1Arr.length; i++) {
      if (s1Arr[i] !== s2Arr[i]) return false;
    }
    return true;
  };

  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Arr[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  if (checkEqual(s1Arr, s2Arr)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    s2Arr[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Arr[s2.charCodeAt(i - s1.length) - "a".charCodeAt(0)]--;
    if (checkEqual(s1Arr, s2Arr)) return true;
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
