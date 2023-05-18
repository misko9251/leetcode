// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    let ans = []
    for(let i = 0; i <= haystack.length; i++){
        // If first letter and next, so on, equals needle, proceed
        for(let j = i + 1; j <= haystack.length; j++){
            if(haystack.slice(i, j) == needle){
                ans.push(i)
            }
        }
    }
    return ans.length == 0 ? -1 : ans[0]
};

strStr("leetcode", "leeto")