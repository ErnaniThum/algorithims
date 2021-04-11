// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
	const hash = {}
	for (const index in nums) {
			const num = nums[index];
			if (hash[num]) {
					hash[num].push(index);
			} else {
					hash[num] = [index];
			}
	}
	
	for (const index in nums) {
			const num = nums[index];
			const remaining = target - num;
			if (num === remaining && hash[num].length > 1) {
					return [hash[num][0], hash[num][1]];
			} else {
				if (num === remaining) continue;
				if (hash[remaining]) {
					return [index, hash[remaining][0]]
				}	
			}
	}
};


console.log(twoSum([3,3], 6));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));

