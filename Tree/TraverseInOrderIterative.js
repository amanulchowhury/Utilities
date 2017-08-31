const inorderIterative = (root, operation) => {
  const stack = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    if (!stack.length) {
      break;
    }

    root = stack.pop();
    operation(root.value);
    root = root.right;
  }
};

module.exports = inorderIterative;
