/*
Given an array, rotate the array to the right by k steps, 
where k is non-negative. 
Try to come up as many solutions as you can — 
there are at least three different ways to solve this problem. 
Could you do it in place with O(1) extra space?
*/

const rotate = (nums, k) => {
    k = k % nums.length;

    for(let i = 0; i < k; i++){
        const last = nums.pop();
        nums.unshift(last);
    }
    return nums;
};

module.exports = { rotate };