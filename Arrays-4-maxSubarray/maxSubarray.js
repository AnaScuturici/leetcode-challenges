/** ARRAYS
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

 * @param {number[]} nums
 * @return {number}
 */

//solution using dynamic programming, Kandane's algorithm

 const maxSubarray = (nums) => {
    let maxSum = -Infinity;
    let currSum = 0;

    for(let i = 0; i < nums.length; i++){
        currSum = Math.max(nums[i], nums[i] + currSum);
        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
};

module.exports = { maxSubarray };