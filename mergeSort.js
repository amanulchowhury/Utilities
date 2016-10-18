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

	while(il < left.length && ir < right.length) {
		if(left[il] < right[ir]) {
			result.push(left[il++]);
		} else {
			result.push(right[ir++]);
		}
	}

	return result.concat(left.slice(il)).concat(right.slice(ir));
}

/**
 * Merge Sort Class
 */
class MergeSort {
	/**
	 * Merge Sort implementation
	 * @param arr
	 * @returns {*}
	 */
	sort(arr) {
		if(arr.length < 2) {
			return arr;
		}
		let middle = Math.floor(arr.length / 2),
			left = arr.slice(0, middle),
			right = arr.slice(middle);

		return merge(this.sort(left), this.sort(right));
	}
}

export default MergeSort;
