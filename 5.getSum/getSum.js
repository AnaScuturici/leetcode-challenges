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

module.exports = { getSum };