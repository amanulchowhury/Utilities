/**
 * Created by amanulchowdhury.
 */

let sorter = require('../../sorting/insertionSort');

test('sorts an single item array', () => {
	let unsorted = [5], sorted = [5];

	expect(sorter(unsorted)).toEqual(sorted);
});

test('sorts an sorted array', () => {
	let unsorted = [3, 4, 5], sorted = [3, 4, 5];

	expect(sorter(unsorted)).toEqual(sorted);
});

test('sorts an array', () => {
	let unsorted = [5,7,1,2,10,0,3,12], sorted = [0,1,2,3,5,7,10,12];

	expect(sorter(unsorted)).toEqual(sorted);
});
