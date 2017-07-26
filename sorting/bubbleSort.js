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
 * Bubble sort implementation
 * @param {Array} array of items to sort
 * @returns {Array} the sorted array.
 */
const bubleSort = items => {
  let len = items.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (items[j] > items[j + 1]) {
        swap(items, j, j + 1);
      }
    }
  }

  return items;
};

module.exports = bubleSort;
