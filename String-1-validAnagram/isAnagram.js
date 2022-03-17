/** STRING
 * Given two strings s and t, 
 * return true if t is an anagram of s, 
 * and false otherwise.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, 
typically using all the original letters exactly once.
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const isAnagram = (s, t) => {
    let obj1 = {};
    let obj2 = {};
    let result = false;

    if(s.length !== t.length) return false;

    for(let i = 0; i < s.length; i++){
        if(Object.keys(obj1).includes(s[i])){
            obj1[s[i]]++;
        } else obj1[s[i]] = 1;
        if(Object.keys(obj2).includes(t[i])){
            obj2[t[i]]++;
        } else obj2[t[i]] = 1;
    }

    for(let i = 0; i < s.length; i++){
        if(obj1[s[i]] === obj2[s[i]]){
            result = true;
        } else return false;
    }
    return result;
};

module.exports = { isAnagram };