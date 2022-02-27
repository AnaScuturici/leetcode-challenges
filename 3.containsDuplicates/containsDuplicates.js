/** ARRAYS
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicates = (nums) => {
    const unique = new Set(nums);
    return nums.length !== [...unique].length; 
};

module.exports = containsDuplicates;