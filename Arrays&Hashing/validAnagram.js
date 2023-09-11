// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically
// using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram");
// Output: true;

// Input: (s = "rat"), (t = "car");
// Output: false;

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const trackerFunction = (str) => {
    let tracker = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() % 26;
      tracker[index]++;
    }
    return tracker;
  };

  let trackSLetters = trackerFunction(s);
  let trackTLetters = trackerFunction(t);

  for (let i = 0; i < trackSLetters.length; i++) {
    if (trackSLetters[i] !== trackTLetters[i]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
