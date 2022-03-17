/** STRING
 * Given a string s containing just the characters 
 * '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

 * 
 * @param {string} s
 * @return {boolean}
 */
 const isValid = s => {
   const brackets = {
       "(": ")",
       "[": "]",
       "{": "}"
   }

   const stack = [];

   for(let i = 0; i < s.length; i++){
       if(Object.keys(brackets).includes(s[i])){
           stack.push(s[i]);
       } else {
           if(s[i] !== brackets[stack.pop()]){
               return false;
           }
       }
    
   }
   return stack.length === 0;
};

module.exports = { isValid };