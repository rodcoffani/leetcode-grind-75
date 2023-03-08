/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    // Using a hashMap to store
    let hm = new Map();
    
    for (let i = 0; i < nums.length; i++) { // O(n)
        let diff = target - nums[i]
        
        if (hm.has(diff)) { // O(1)
            return [i, hm.get(diff)] // O(1)
        }
        
        hm.set(nums[i], i) // O(1)
    }
};