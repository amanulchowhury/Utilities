/**
 * Created by amanulchowdhury.
 */

let sum = require("../recursiveArraySum");

test("add all the numbers in a nested array", () => {
  let input = ["a", 1, 2, [4, "b", 6]];

  expect(sum(input)).toEqual(13);
});

test("returns the number if input is a number", () => {
  let input = 1;

  expect(sum(input)).toEqual(1);
});
