/**
 * Created by amanulchowdhury.
 */

/**
 * Swaps two values
 * @param {Array} items The array containing the items
 * @param {int} firstIdx Index of the first item to swap
 * @param {int} secondIdx Index of the second item to swap
 * @returns {void}
 */
const swap = (items, firstIdx, secondIdx) => {
	let temp = items[firstIdx];

	items[firstIdx] = items[secondIdx];
	items[secondIdx] = temp;
};

/**
 * Partitions given array
 * @param {Array} items array to be partitioned
 * @param {Number} left start index
 * @param {Number} right end index
 * @returns {Number} index
 */
const partition = (items, left, right) => {
	let pivot = items[Math.floor((left + right) / 2)],
		i = left,
		j = right;

	while(i <= j) {
		while(items[i] < pivot) {
			i++;
		}

		while(items[j] > pivot) {
			j--;
		}

		if(i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}

	return i;
};

/**
 * Quick Sort Implementation
 * @param {Array} items array to be sorted
 * @param {Number} start index
 * @param {Number} end index
 * @returns {Array} the sorted array
 */
const quickSort = (items, left, right) => {
	let index;

	left = left || 0;
	right = right || (items.length - 1);

	if(items.length > 1) {
		index = partition(items, left, right);

		if(left < index - 1) {
			quickSort(items, left, index - 1);
		}

		if(index < right) {
			quickSort(items, index, right);
		}
	}

	return items;
};


module.exports = quickSort;
