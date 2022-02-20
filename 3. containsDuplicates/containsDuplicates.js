/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicates = (nums) => {
    const unique = new Set(nums);
    return nums.length !== [...unique].length; 
};

module.exports = containsDuplicates;