/**
 * Created by amanulchowdhury.
 */

/**
 * Insertion Sort Implementation
 * @param {Array} items the array to be sorted
 * @returns {Array} the sorted array
 */
const insertionSort = items => {
  let len = items.length,
    i,
    j;

  for (i = 1; i < len; i++) {
    //store this value
    let value = items[i];

    //check behind if there is any value greater
    for (j = i - 1; j >= 0 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }

    //insert item to the empty slot
    items[j + 1] = value;
  }

  return items;
};

module.exports = insertionSort;
