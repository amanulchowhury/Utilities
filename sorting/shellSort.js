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
 * Shell Sort implementation
 * @param arr
 * @returns [] arr
 */
const shellSort = arr => {
  let len = arr.length,
    h = 1;

  while (h < Math.round(len / 3)) {
    h = 3 * h + 1;
  }

  console.log("h-sorter is ", h);
  console.log("starting --- ", arr);

  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        swap(arr, j, j - h);
        console.log("after swap ---- ", arr);
      }
    }

    h = Math.round(h / 3);
  }

  return arr;
};

module.exports = shellSort;
