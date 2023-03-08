# Brute force method
```javascript
    for(i = 0; i < nums.length; i++) { // O(n)
        for(j = 0; j < nums.length; j++) { // O(n)
            if(i!=j && (nums[i] + nums[j] === target)) // O(1)
                return [i,j];
        }
    }
```

# HashMap method
```javascript
    let hm = new Map(); 
    for (let i = 0; i < nums.length; i++) { // O(n)
        let diff = target - nums[i]
        if (hm.has(diff)) { // O(1)
            return [i, hm.get(diff)] // O(1)
        }
        hm.set(nums[i], i) // O(1)
    }
```