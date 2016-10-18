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
 * Section Sort implementation
 * @param {Array} items the array to be sorted
 * @returns {Array} the sorted array
 */
const selectionSort = (items) => {
	let len = items.length,
		min;

	for(let i = 0; i < len; i++) {
		//set the minimum
		min = i;

		//check the rest of array with this minimum
		for(let j = i + 1; j < len; j++) {
			if(items[j] < items[min]) {
				//update min
				min = j;
			}
		}

		//swap if min is not in position
		if(i != min) {
			swap(items, i, min);
		}
	}


	return items;
};
