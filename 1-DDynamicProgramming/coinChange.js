// You are given an integer array coins representing coins of different denominations and an integer amount
// representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made
// up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

const coinChange = (coins, amount) => {
  let dpCoins = new Array(amount + 1).fill(Infinity);
  dpCoins[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dpCoins[i] = Math.min(dpCoins[i - coin] + 1, dpCoins[i]);
    }
  }
  return dpCoins[amount] === Infinity ? -1 : dpCoins[amount];
};

console.log(coinChange([1, 2, 5], 11));
