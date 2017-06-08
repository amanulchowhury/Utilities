/*
 * Created on Wed Jun 07 2017
 * Created by Amanul Islam Chowdhury
 */

const IsPrime = (num) => {
	if(num < 2) {
		return false;
	}

	const max = Math.sqrt(num);
	let isPrime = false;

	for(let i = 2; i <= max; i++) {
		if(!(!!(num % i))) {
			return false;
		}
	}

	return true;
}

module.exports = IsPrime;
