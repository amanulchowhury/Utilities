/**
 * Created by amanulchowdhury.
 */

let isUnique = require('../UniqueStringWithSet');

test('it returns not unique', () => {
	"use strict";
	let str = 'Apple';

	expect(isUnique(str)).toEqual(false);
});

test('it returns unique', () => {
	"use strict";
	let str = 'Orange';

	expect(isUnique(str)).toEqual(true);
});
