class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
    return this.stack;
  }

  pop() {
    if (!this.stack.length) {
      return;
    }

    return this.stack.splice(this.stack.length - 1)[0];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  inc(k, e) {
    if (e >= this.stack.length) {
      throw Error("Exceeds stack length");
    }

    for (let i = 0; i < e; i++) {
      this.stack[i] += k;
    }

    return this.stack;
  }
}

module.exports = Stack;
