/** DYNAMIC PROGRAMMING 
 *You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top? 
 *
 * @param {number} n
 * @return {number}
 */
 const climbStairs = n => {
    if(n === 1) return 1;
    let first = 1;
    let second = 2;
    let next;

    for(let i = 2; i < n; i++){
        next = first + second;
        first = second;
        second = next;
    } 

    return second;
    
};

module.exports = { climbStairs };