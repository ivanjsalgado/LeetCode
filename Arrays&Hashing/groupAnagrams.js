// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

// Input: strs = [""];
// Output: [[""]];

const groupAnagrams = (strs) => {
  if (strs.length === 1) return [strs];
  let tracker = {};

  for (let i = 0; i < strs.length; i++) {
    let arrTracker = new Array(26).fill(0);
    let word = strs[i];

    for (let j = 0; j < word.length; j++) {
      let index = word[j].charCodeAt() % 26;
      arrTracker[index]++;
    }
    let arrRepresentation = arrTracker.join();
    tracker[arrRepresentation] === undefined
      ? (tracker[arrRepresentation] = [word])
      : tracker[arrRepresentation].push(word);
  }

  return Object.values(tracker);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
