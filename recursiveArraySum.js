// input [ 1, 2, 3, [3, 4], 'a', 'b', 1 ]

/**
 * Finds sum of numbers from a nested arrray recursively
 * @param arr The input Array
 * @returns {Number}
 */
function recursiveArraySum(arr) {
	let sum = 0;
	if (Math.round(arr) === arr) {
		return arr;
	}

	if (!Array.isArray(arr)) {
		throw Error('should be a number or an array');
	}

	return arr.reduce((prev, current) => {
		if (Array.isArray(current)) {
			prev += recursiveArraySum(current);
		}

		if (Math.round(current) === current) {
			prev += current;
		}

		return prev;
	}, 0);
}
