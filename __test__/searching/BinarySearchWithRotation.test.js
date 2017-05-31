/**
 * Created by amanulchowdhury.
 */

let search = require('../../searching/BinarySearchWithRotation');

test('it should throw error', () => {
	"use strict";
	expect(search).toThrowError('input has to be a number or an array of numbers');
});

test('it should return the number', () => {
	let arr = 1;

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the sorted list', () => {
	let arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 8, 1, 2, 3, 4, 5, 6, 7 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 7, 8, 1, 2, 3, 4, 5, 6 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 6, 7, 8, 1, 2, 3, 4, 5 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 5, 6, 7, 8, 1, 2, 3, 4 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 4, 5, 6, 7, 8, 1, 2, 3 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 3, 4, 5, 6, 7, 8, 1, 2 ];

	expect(search(arr)).toEqual(1);
});

test('it should return the minimum from the rotated list', () => {
	let arr = [ 3, 2, 4, 5, 6, 7, 8, 1 ];

	expect(search(arr)).toEqual(1);
});
