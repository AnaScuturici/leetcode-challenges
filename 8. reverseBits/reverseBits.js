/** BINARY
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 const reverseBits = n => {
    let str = (n >>> 0).toString(2).padStart(32,"0");
    let reverse = str.split("").reverse().join("");
    let output = parseInt(reverse, 2);
    return output;
};

module.exports = { reverseBits };