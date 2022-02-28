/** BINARY
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */

// solution using Gauss summation: maxNum * (maxNum + 1) / 2;

 const missingNumber = nums => {
    let max = nums.length;
    let expectedSum = max * (max + 1) / 2;
    let currentSum = nums.reduce((a,b) => a + b, 0);
    return expectedSum - currentSum;
};

module.exports = { missingNumber };