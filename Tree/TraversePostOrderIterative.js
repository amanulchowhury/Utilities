const postorderIterative = (root, operation) => {
  const stack = [];
  let prev = null;

  stack.push(root);

  while (stack.length) {
    // peek the current value from the queue.
    let current = stack[stack.length - 1];
    // going down the tree
    if (!prev || prev.left === current || prev.right === current) {
      if (current.left) {
        stack.push(current.left);
      } else if (current.right) {
        stack.push(current.right);
      }
    } else if (current.left === prev) {
      // going up the tree
      // if current.left is prev then we are going up the left sub-tree
      // we need to skip and jump to the right sub-tree if it exist in this case
      if (current.right) {
        stack.push(current.right);
      }
    } else {
      operation(current.value);
      stack.pop();
    }

    prev = current;
  }
};

module.exports = postorderIterative;
