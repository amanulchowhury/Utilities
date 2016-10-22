/**
 * Created by amanulchowdhury.
 */

let minMax = require('../MinMax');

test('find min and max iteratively', () => {
	let input = [ 4, 5, 6, 7, 8, 10, 12, 4, 3 ], expected = { min: 4, max: 12 };

	expect(minMax(input)).toEqual(expected);
});

test('returns null when cannot find max iteratively', () => {
	let input = [ 4, 5, 6, 7, 8, 10, 12 ], expected = { min: 4, max: null };

	expect(minMax(input)).toEqual(expected);
});

test('find min and max recursively', () => {
	let input = [ 4, 5, 6, 7, 8, 10, 12, 4, 3 ], expected = { min: 4, max: 12 };

	expect(minMax(input, true)).toEqual(expected);
});

test('returns null when cannot find max recursively', () => {
	let input = [ 4, 5, 6, 7, 8, 10, 12 ], expected = { min: 4, max: null };

	expect(minMax(input, true)).toEqual(expected);
});
