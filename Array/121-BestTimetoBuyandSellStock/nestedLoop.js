/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max_diff = 0;

  // Lowest price
  let min = 99999;

  // Index of the lowest price
  let index_min = -1;

  // Find the lowest price (has to have at least the next price greater)
  // O(n)
  for (let i = 1; i <= prices.length; i++) {
    if (prices[i - 1] < prices[i] && prices[i - 1] < min) {
      min = prices[i - 1];
      index_min = i - 1;
      let max = -1;

      // O(n - C)
      for (let j = index_min; j < prices.length; j++) {
        if (prices[j] > max) {
          max = prices[j];
          if (max - min > max_diff) {
            max_diff = max - min;
          }
        }
      }
    }
  }

  // O(n) * O(n - C) = O(n)*O(n) = O(n^2)
  return max_diff;
};
