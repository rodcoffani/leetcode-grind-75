# Nested Loop Solution

```javascript
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
```

# Min Max Solution
```javascript
 // O(n)
for (let i = 0; i < prices.length; i++) {
  // Get the lowest price (minimum between the current price and the lowest price)
  buyPrice = Math.min(buyPrice, prices[i]); // O(1)

  // Get the maximum gap between maxGap and the current gap
  maxGap = Math.max(maxGap, prices[i] - buyPrice);
}
```
