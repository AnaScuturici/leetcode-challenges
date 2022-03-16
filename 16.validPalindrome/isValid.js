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

    s = s.replace(/[^a-z0-9]/gi, '').trim().toLowerCase();
    
    let left = 0;
    let right = s.length - 1;

    while(right > left){
        if(s.charAt(right --) !== s.charAt(left++)){
            return false;
        } 
    }
    return true;
};

module.exports = { isValid };