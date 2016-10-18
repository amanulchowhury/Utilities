/**
 * Created by amanulchowdhury.
 */

let MergeSort = require('../mergeSort');

test('sorts an array', () => {
	let unsorted = [5,7,1,2,10], sorted = [1,2,5,7,10];
	const sorter = new MergeSort();

	expect(sorter.sort(unsorted)).toEqual(sorted);
});
