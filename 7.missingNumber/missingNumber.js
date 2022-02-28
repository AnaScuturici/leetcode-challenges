/** BINARY
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */

// index = num (summing up the differences between the index and each num, 
//and deducting it from the length results in missing number)

 const missingNumber = nums => {
    let missingNum = 0;
    for(let i = 0; i < nums.length; i++){
        missingNum += nums[i] - i;
    }
    return nums.length - missingNum;
};

module.exports = { missingNumber };