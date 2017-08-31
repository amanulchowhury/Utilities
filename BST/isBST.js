const inorder = require("../Tree/TraverseInOrder");

const isBST = root => {
  let arr = [];
  inorder(root, val => {
    arr.push(val);
  });

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length && arr[i] > arr[i + 1]) {
      return false;
    } else {
      continue;
    }
  }

  return true;
};

module.exports = isBST;
