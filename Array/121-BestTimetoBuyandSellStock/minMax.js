/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = 999999; // Max value
  let maxGap = 0;

  // O(n)
  for (let i = 0; i < prices.length; i++) {
    // Get the lowest price (minimum between the current price and the lowest price)
    buyPrice = Math.min(buyPrice, prices[i]); // O(1)

    // Get the maximum gap between maxGap and the current gap
    maxGap = Math.max(maxGap, prices[i] - buyPrice);
  }

  return maxGap;
};
