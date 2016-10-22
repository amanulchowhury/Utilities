/**
 * Created by amanulchowdhury.
 */

/**
 * Finds the min and max from an array that is partially
 * sorted in ascending order and then partially descending order
 * @param arr the input array, e.g., [ 4, 5, 6, 7, 8, 10, 12, 4, 3 ]
 * @returns {{min: number, max: number}}
 * @example minMax(input)
 */
function minMax(arr, recursive) {
	let result = { min: 0, max: 0 };

	result.min = arr[0];

	if(!recursive) {
		result.max = max(arr);
	} else {
		result.max = maxRecursive(arr);
	}


	return result;
}

/**
 * Iterative Max search
 * @param arr
 * @returns {number}
 */
function max(arr) {
	let minIndex = 0, maxIndex = arr.length - 1;

	while(minIndex <= maxIndex) {
		let currentIndex = Math.floor((maxIndex + minIndex) / 2);

		if(arr[currentIndex] > arr[currentIndex + 1]) {
			return arr[currentIndex];
		} else {
			minIndex = currentIndex + 1;
		}
	}

	return null;
}

/**
 * Recursive Max search
 * @param arr
 * @returns {*}
 */
function maxRecursive(arr) {
	let result = null, currentIndex = Math.floor(arr.length / 2);

	if(arr[currentIndex] > arr[currentIndex + 1]) {
		result = arr[currentIndex];
	} else if(arr[currentIndex] < arr[currentIndex + 1]) {
		result = maxRecursive(arr.slice(currentIndex));
	}

	return result;
}

module.exports = minMax;

