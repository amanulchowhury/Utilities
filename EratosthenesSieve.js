/*
 * Created on Wed Jun 07 2017
 * Created by Amanul Islam Chowdhury
 */

/**
 * @description Returns all prime numbers smaller than the input
 * @param {number} max 
 * @returns {Array} primes An array containing the prime number small than max
 */
const getPrimes = (max) => {
	let primes = [], sieve = [];
	
	for(let i = 2; i <= max; ++i) {
		if(!sieve[i]) {
			primes.push(i);
		}
		for(let j = i << 1; j <= max; j+= i) {
			sieve[j] = true;
		}
	}

	console.log(sieve);
	return primes;
};

module.exports = getPrimes;
