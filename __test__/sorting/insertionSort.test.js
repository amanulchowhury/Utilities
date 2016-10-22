/**
 * Created by amanulchowdhury.
 */

let sorter = require('../../sorting/insertionSort');

test('sorts an array', () => {
	let unsorted = [5,7,1,2,10], sorted = [1,2,5,7,10];

	expect(sorter(unsorted)).toEqual(sorted);
});
