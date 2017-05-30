/**
 * Created by amanulchowdhury.
 * Binary search to return minimum with ability to
 * handle rotation of the sorted list
 * example input [4, 5, 6, 7, 8, 3, 2, 1]
 */

const search = (arr) => {
	"use strict";
	if(!Array.isArray(arr) && !isNaN(arr)){
		return arr;
	}

	if(arr.length === 1) {
		return arr[0];
	}

	if(arr[0] < arr[arr.length - 1]) {
		return arr[0];
	}

	let partitionKey = Math.floor(arr.length/2) - 1;


	if(arr[0] > arr[partitionKey]) {
		return search(arr.slice(0, partitionKey + 1));
	} else {
		return search(arr.slice(partitionKey + 1, arr.length));
	}
};

module.exports = search;
