const Node = require("../doubleNode");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse(fn, node, reverse = false) {
    let currentNode = node ? node : reverse ? this.tail : this.head;

    // keep moving the pointer forward till current node is null
    while (currentNode) {
      // invoke callback with current node
      fn(currentNode);
      // assign currentNode to the next node if reverse is false or prev node if reverse is true
      currentNode = reverse ? currentNode.prev : currentNode.next;
    }
  }

  // inserts after desired position if a zero indexed position is passed and
  // insert at the end if no position is passed
  insert(data, position) {
    const newNode = new Node(data);
    let currentNode = this.head;
    let currentPosition = 0;

    // if position is not passed, set position to the end of the list
    if (typeof position === "undefined") {
      position = this.length;
    }

    if (!this.length) {
      newNode.next = currentNode;
      this.head = newNode;
      this.tail = newNode;
      if (currentNode) {
        currentNode.prev = newNode;
      }
      this.length++;
      return;
    }

    if (position > this.length) {
      throw Error(`position does not exist`);
    }

    while (currentNode.next && currentPosition < position) {
      currentPosition++;
      currentNode = currentNode.next;
    }

    if (this.tail === currentNode) {
      this.tail = newNode;
    }
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next = newNode;
    this.length++;
  }
}

module.exports = DoublyLinkedList;
