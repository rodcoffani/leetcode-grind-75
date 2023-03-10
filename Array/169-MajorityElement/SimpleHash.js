/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // Hashmap
  let hm = new Map();
  
  // Add all elements to the hashmap
  for (let i = 0; i < nums.length; i++) { // O(n)
    // If the element is already in the hashmap, increment its value
    if (hm.has(nums[i])) { // O(1)
          hm.set(nums[i], hm.get(nums[i]) + 1) // O(1)
      } else {
        // If the element is not in the hashmap, add it
          hm.set(nums[i], 1) // O(1)
      }

      // If the element's value is greater than the length of the array divided by 2 (majority), return it
      if (hm.get(nums[i]) > nums.length / 2) { // O(1)
          return nums[i]
      }
  }
  return 0;
};