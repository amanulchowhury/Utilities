/**
 * Created by amanulchowdhury.
 */

/**
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target
 * e.g., [1, 2, 3, 6, 10], target = 9
 * answer [2, 3]
 */


function twoSum (input, target) {
	let hash = {};

	for(let i = 0; i < input.length; i++) {
		let complement = target - input[i];

		if(complement in hash) {
			return [hash[complement], i];
		}

		hash[input[i]] = i;
	}
}

module.exports = twoSum;
