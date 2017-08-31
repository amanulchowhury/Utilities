/**
 * Created by amanulchowdhury.
 */

const isBST = require("../../BST/isBST");
let Node = require("../../Tree/tree-node");

test("it should return true", () => {
  "use strict";
  let root = new Node();
  let left = new Node();
  let right = new Node();

  root.left = left;
  root.right = right;
  root.value = 5;
  left.value = 1;
  right.value = 10;

  expect(isBST(root)).toBe(true);
});

test("it should return false", () => {
  "use strict";
  let root = new Node();
  let left = new Node();
  let right = new Node();

  root.left = left;
  root.right = right;
  root.value = 5;
  left.value = 6;
  right.value = 10;

  expect(isBST(root)).toBe(false);
});
