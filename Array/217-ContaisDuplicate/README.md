# Nested Loop Solution
A nested loop that compares, for each element, if that element appears in the array after. But, being O(n^2), causes to be very slow. 
Runtime: 5565ms (beats 9.46%).
Memory: 49.2 MB (beats 95.64%).

```javascript
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      return true;
    }
  }
}
return false;
```


# Hashmap Solution
A hashmap which stores 1 for each number that has appeared. If a number appears more than once, then it returns true. If it never appears, then it returns false.
Runtime: 98ms (beats 62.69%).
Memory: 59.2 MB (beats 5.65%)

```javascript
let hm = new Map();

for (let i = 0; i < nums.length; i++) { // O(n)
  if (hm.has(nums[i])) { // O(1)
    return true
  } else {
    hm.set(nums[i], 1) // O(1)
  }
}
return false;
```