/** BINARY
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight). 
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
 const hammingWeight = n => {
    return n.toString(2).split(1).length - 1;
};

module.exports = { hammingWeight };