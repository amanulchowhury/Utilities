"use strict";

let memoize = require("./memoize.js");

const fibonacciIter = index => {
  if (index < 1) {
    return 0;
  }

  if (index <= 2) {
    return 1;
  }

  let fibn = 0,
    fibn1 = 1,
    fib = 0;

  for (let i = 1; i < index; i++) {
    fib = fibn + fibn1;
    fibn = fibn1;
    fibn1 = fib;
  }

  return fib;
};

const fibonacciRecursive = index => {
  if (index === 0 || index === 1) {
    return index;
  }

  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
};

class Fibonacci {
  constructor() {
    this.iterative = fibonacciIter;
    this.recursive = memoize(fibonacciRecursive);
  }
}

module.exports = Fibonacci;
