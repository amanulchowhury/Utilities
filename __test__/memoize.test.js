let memoize = require('../memoize.js');

test('should not call add twice with same arguments', () => {
	let adder = { add: (a, b) => a + b },
		spy = jest.spyOn(adder, 'add'),
		memoizedAdd = memoize(adder.add);

	memoizedAdd(1, 2);

	expect(spy).toHaveBeenCalledWith(1, 2);

	spy.mockReset();
  spy.mockRestore();

	memoizedAdd(1, 2);

	expect(spy).not.toHaveBeenCalled();
});
