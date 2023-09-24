// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
// The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas
// and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead
// and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Input: (piles = [3, 6, 7, 11]), (h = 8);
// Output: 4;

// Input: (piles = [30, 11, 23, 4, 20]), (h = 6);
// Output: 23;

// Input: (piles = [30, 11, 23, 4, 20]), (h = 5);
// Output: 30;

var minEatingSpeed = function (piles, h) {
  if (piles.length === 1) return Math.ceil(piles[0] / h);
  let start = 1;
  let end = Math.max(...piles);
  let middle;
  let rateArr = [];
  for (let i = start; i <= end; i++) {
    rateArr.push(i);
  }
  while (start < end) {
    middle = start + Math.floor((end - start) / 2);
    let time = 0;
    for (let i = 0; i < piles.length; i++) {
      let currentTime = Math.ceil(piles[i] / middle);
      time += currentTime;
    }
    if (time > h) start = middle + 1;
    else if (time <= h) end = middle;
  }
  return start;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
