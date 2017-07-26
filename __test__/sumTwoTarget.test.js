/**
 * Created by amanulchowdhury.
 */
let sumTwo = require("../sumTwoTarget");

test("should return indices of numbers that add upto the target", () => {
  let input = [3, 4, 10, 5, 12, 9],
    target = 9,
    expected = [1, 3];

  expect(sumTwo(input, target)).toEqual(expected);
});
