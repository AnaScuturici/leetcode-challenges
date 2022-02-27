/**
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight). 
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
 const hammingWeight = n => {
    let count = 0;
    let array = n.toString(2);

    for(let num of array){
        if(num == 1) count++;
    }
    return count;
};

module.exports = { hammingWeight };