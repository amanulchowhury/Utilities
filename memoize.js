const memoize = (func) => {
	let memo = {},
		slice = Array.prototype.slice;

	return function() {
		let args = slice.call(arguments);

		if(args in memo) {
				return memo[args];
		}

		return (memo[args] = func.apply(this, args));
	};
};


module.exports = memoize;
