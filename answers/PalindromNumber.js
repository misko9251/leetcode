// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') === x.toString()
 };
 
 isPalindrome(-121)