/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Simple bruteforce O(n^2)
    for(i = 0; i < nums.length; i++) { // O(n)
        for(j = 0; j < nums.length; j++) { // O(n)
            if(i!=j && (nums[i] + nums[j] === target))
                return [i,j];
        }
    }
};