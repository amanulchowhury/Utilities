const preorderIterative = (root, operation) => {
  const stack = [];

  while (true) {
    while (root) {
      operation(root.value);
      stack.push(root);
      root = root.left;
    }

    if (!stack.length) {
      break;
    }

    root = stack.pop();
    root = root.right;
  }
};

module.exports = preorderIterative;
