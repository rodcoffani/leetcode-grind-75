/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hm = new Map();
  
  for (let i = 0; i < nums.length; i++) { // O(n)
    if (hm.has(nums[i])) { // O(1)
          return true
      } else {
          hm.set(nums[i], 1) // O(1)
      }
  }
  return false;
};