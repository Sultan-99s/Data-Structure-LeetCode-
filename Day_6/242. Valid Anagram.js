/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false;

    let a = s.split('').sort().join('');
    let b = t.split('').sort().join('');

    for(let i=0; i<s.length; i++){
        if(a[i] != b[i])
            return false;
    }
    return true;
};
