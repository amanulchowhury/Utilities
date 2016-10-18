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
 * buble sort implementation
 * @param {Array} items
 * @returns {Array}
 */
const bubleSort = (items) => {

};
