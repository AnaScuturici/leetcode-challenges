/*
Given an array, rotate the array to the right by k steps, 
where k is non-negative. 
Try to come up as many solutions as you can — 
there are at least three different ways to solve this problem. 
Could you do it in place with O(1) extra space?
*/


//  linear time (O(n)) and linear space (O(1))
const rotate = (nums, k) => {
    k = k % nums.length;
    
    const reverse = (nums, start, end) => {
        while(start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
        return nums;
    }

    reverse(nums, 0, nums.length -1 );
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    return nums;
};

module.exports = { rotate };