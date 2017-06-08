/*
 * Created on Wed Jun 07 2017
 * Created by Amanul Islam Chowdhury
 */

let sieve = require('../EratosthenesSieve');

test('returns primes less than 10', () => {
	const expected = [2, 3, 5, 7];

	expect(sieve(10)).toEqual(expected);
});
