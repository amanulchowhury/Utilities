/**
 * Created by amanulchowdhury.
 */

let search = require('../BinarySearchWithRotation');

test('it should return the minimum from the sorted list', () => {
	let arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 4, 5, 6, 7, 8, 1, 2, 3 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 3, 2, 4, 5, 6, 7, 8, 1 ];

	expect(search(arr)).toEqual(1);
});
