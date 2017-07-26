/**
 * Created by amanulchowdhury.
 */

const postOrderTraverse = (root, operation) => {
  "use strict";
  if (typeof operation !== "function") {
    throw Error("operation is not a function");
  }
  if (!root) {
    return;
  }
  postOrderTraverse(root.left, operation);
  postOrderTraverse(root.right, operation);
  operation(root.value);
};

module.exports = postOrderTraverse;
