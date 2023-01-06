// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function(nums) {
    let ans = []
    for(let i = 1; i <= nums.length; i++){
        let arr = nums.slice(0, i)
        ans.push(arr.reduce((a,b)=>a+b))
    }
    return ans
};

runningSum[1, 2, 3, 4]