/**
 * Created by amanulchowdhury.
 */

const preOrderTraverse = (root, operation) => {
  "use strict";
  if (typeof operation !== "function") {
    throw Error("operation is not a function");
  }
  if (!root) {
    return;
  }
  operation(root.value);
  preOrderTraverse(root.left, operation);
  preOrderTraverse(root.right, operation);
};

module.exports = preOrderTraverse;
