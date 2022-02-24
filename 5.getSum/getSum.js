/**
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.

 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 const getSum = (a, b) => {
    if(b === 0){
        return a;
    }
    return getSum(a ^ b, (a & b) << 1);
};

/*
2 in binary = 10;
3 in binary = 11;

2 ^ 3 = 01; // in binary => 1
(2 & 3) << 1 = 100; // in binary => 4 (2 & 3 = 10, shift by 1 bit to the left => 100)
*/

module.exports = { getSum };