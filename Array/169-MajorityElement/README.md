# Simple Hash Map

Uses a hash map to store the frequency (number of occurrences) of each element, then returns the majority element (the one with the frequency greater than n/2).

It has linear complexity. O(n)

```javascript
let hm = new Map();
for (let i = 0; i < nums.length; i++) { // O(n)
  
  if (hm.has(nums[i])) { // O(1)
    hm.set(nums[i], hm.get(nums[i]) + 1) // O(1)
  } 
  
  else {
    hm.set(nums[i], 1) // O(1)
  }

  if (hm.get(nums[i]) > nums.length / 2) { // O(1)
    return nums[i]
  }
}
return 0;
```