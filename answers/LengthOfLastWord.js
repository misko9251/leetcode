// Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let arr = s.split(' ').filter((item)=> item.length > 0)
    return arr[arr.length-1].length
};

lengthOfLastWord("   fly me   to   the moon  ")
