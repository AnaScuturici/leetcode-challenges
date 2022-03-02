/** DYNAMIC PROGRAMMING 
 *You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top? 
 *
 * @param {number} n
 * @return {number}
 */
 const climbStairs = n => {
    if(n <= 1) return 1;
    return climbStairs(n-1) + climbStairs(n-2);
};

module.exports = { climbStairs };