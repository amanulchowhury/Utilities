let fibonacci = require('../fibonacci');
let Fibonacci = new fibonacci();

describe('Iterative', () => {
	test('should return 0 when index is 0', () => {
		expect(Fibonacci.iterative(0)).toEqual(0);
	});

	test('should return 1 when index is 1', () => {
		expect(Fibonacci.iterative(1)).toEqual(1);
	});

	test('should return 2 when index is 1', () => {
		expect(Fibonacci.iterative(2)).toEqual(1);
	});

	test('should return 3 when index is 2', () => {
		expect(Fibonacci.iterative(3)).toEqual(2);
	});

	test('should return 5 when index is 5', () => {
		expect(Fibonacci.iterative(5)).toEqual(5);
	});

	test('should return 6 when index is 8', () => {
		expect(Fibonacci.iterative(6)).toEqual(8);
	});
});

describe('Recursive', () => {
	test('should return 0 when index is 0', () => {
		expect(Fibonacci.recursive(0)).toEqual(0);
	});

	test('should return 1 when index is 1', () => {
		expect(Fibonacci.recursive(1)).toEqual(1);
	});

	test('should return 2 when index is 1', () => {
		expect(Fibonacci.recursive(2)).toEqual(1);
	});

	test('should return 2 when index is 1', () => {
		expect(Fibonacci.recursive(3)).toEqual(2);
	});

	test('should return 5 when index is 5', () => {
		expect(Fibonacci.recursive(5)).toEqual(5);
	});

	test('should return 6 when index is 8', () => {
		expect(Fibonacci.recursive(6)).toEqual(8);
	});
})
