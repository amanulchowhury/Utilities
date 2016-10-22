/**
 * Created by amanulchowdhury.
 */

const sorter = require('../../sorting/quickSort');

test('sorts an array', () => {
	let unsorted = [5,7,1,2,10], sorted = [1,2,5,7,10];

	expect(sorter(unsorted)).toEqual(sorted);
});
