/** STRING
 * A phrase is a palindrome if, 
 * after converting all uppercase letters into lowercase letters 
 * and removing all non-alphanumeric characters, 
 * it reads the same forward and backward. 
 * Alphanumeric characters include letters and numbers.
 * 
 * @param {string} s
 * @return {boolean}
 */
 const isValid = s => {
    if(s.length < 2) return true;

    let stripped = s.replace(/[^a-z0-9]/gi, '').trim().toLowerCase();
    let reversed = stripped.split("").reverse().join("");
    
    return stripped === reversed;
};

module.exports = { isValid };