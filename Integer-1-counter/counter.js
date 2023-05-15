/** Intergers
 Given an integer n, return a counter function. 
 This counter function initially returns n 
 and then returns 1 more than the previous value every subsequent time 
 it is called (n, n + 1, n + 2, etc).
 */

/**
* @param {number} n
* @return {Function} counter
*/
const createCounter = function (n) {
    return function () {
        return n++;
        /** n = n + 1 
         returns n+1 and updates its value for the next call
         so calling counter() the first time returns 11

         n++ return the current value of n and THEN increments it on the next call
         */
    };
};

/**
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/

module.exports = { createCounter };