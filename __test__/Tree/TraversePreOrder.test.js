/**
 * Created by amanulchowdhury.
 */

let inOrder = require("../../Tree/TraversePreOrder");
let Node = require("../../Tree/tree-node");

test("it should log all the values in the tree in order", () => {
  "use strict";
  let root = new Node();
  let left = new Node();
  let right = new Node();

  root.left = left;
  root.right = right;
  root.value = 5;
  left.value = 1;
  right.value = 10;
  let arr = [];
  let accumulator = val => {
    arr.push(val);
  };

  let traverse = inOrder(root, accumulator);

  expect(arr).toEqual([5, 1, 10]);
});
