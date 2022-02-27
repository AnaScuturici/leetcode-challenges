/**
ARRAYS

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n2) time complexity

//  const twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
// };

// O(n) time complexity
const twoSum = function(nums, target) {
    let result = {};
    for(let i = 0; i < nums.length; i++){
        let currVal = nums[i];
        let targetVal = target - currVal;
        let i2 = result[targetVal];
        if(i2 != null){
            return [i2, i];
        } else {
            result[currVal] = i;
        }
    }
};

module.exports = {  twoSum };