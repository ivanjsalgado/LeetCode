// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day
// in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];
// Output: 5;

const maxProfit = (prices) => {
  if (prices.length === 1) return 0;
  let result = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    result = Math.max(result, prices[i] - minPrice);
  }

  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
