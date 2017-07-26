/*
 * Created on Wed Jun 07 2017
 * Created by Amanul Islam Chowdhury
 */
let IsPrime = require("../IsPrime");

test("returns false number less than 2", () => {
  expect(IsPrime(1)).toBe(false);
});

test("returns false for non prime number", () => {
  expect(IsPrime(4)).toBe(false);
});

test("returns true for prime number", () => {
  expect(IsPrime(7)).toBe(true);
});
