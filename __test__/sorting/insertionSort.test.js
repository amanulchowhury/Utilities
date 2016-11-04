/**
 * Created by amanulchowdhury.
 */

let sorter = require('../../sorting/insertionSort');

test('sorts an array', () => {
	let unsorted = [5,7,1,2,10,0,3,12], sorted = [0,1,2,3,5,7,10,12];

	expect(sorter(unsorted)).toEqual(sorted);
});
