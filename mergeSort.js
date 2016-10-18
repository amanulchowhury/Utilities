/**
 * Created by amanulchowdhury.
 */

/**
 * Merge two arrays
 * @param left The left array
 * @param right The right array
 * @returns {Array} The merged array
 */
function merge(left, right) {
	let result = [],
		il = 0, ir = 0;

	//while either of the array has more values.
	while(il < left.length && ir < right.length) {
		if(left[il] < right[ir]) {
			result.push(left[il++]);
		} else {
			result.push(right[ir++]);
		}
	}

	//concatenate the remaining of both arrays to result from the last index read.
	return result.concat(left.slice(il)).concat(right.slice(ir));
}

/**
 * Merge Sort Class
 */
class MergeSort {
	/**
	 * Merge Sort implementation
	 * @param {Array} arr array to be sorted
	 * @returns {Array} sorted array
	 */
	sort(arr) {
		if(arr.length < 2) {
			return arr;
		}
		let middle = Math.floor(arr.length / 2), //determine the middle
			left = arr.slice(0, middle), //sub-array upto the middle
			right = arr.slice(middle); //sub-array from the middle to the end

		return merge(this.sort(left), this.sort(right));
	}
}

module.exports = MergeSort;
