// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    for(let i = 0; i <= nums.length; i++){
        let firstNum = nums.indexOf(nums[i])
        let secondNum = nums.lastIndexOf(nums[i])
        if(firstNum == secondNum){
            return nums[i]
        }
    }
};

singleNumber([4,1,2,1,2])