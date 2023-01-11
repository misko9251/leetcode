// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    //We need to know how the first word compares to the rest. So lets loop as many times as the first word is long
    for(let i = 0; i <= strs[0].length; i++){
        // Does first letter in EVERY word match first letter of the word at the zero index? What about second? etc.
        if(!strs.every((string)=> string[i] === strs[0][i])){
            //If not, we want to stop our loop and slice the appropriate amt of letters off, and return that
            return strs[0].slice(0, i)
        }
    }
    //Otherwise, all words in the arr are the same, so return just the first word
    return strs[0]
};

//Write a function to find the longest common prefix string amongst an array of strings.
//Compare first word with every other word
//Does the first word have every letter as the other words?
//If not, stop and return
//Is every word the same? Return the full word
longestCommonPrefix(["flower","flow","flight"])
