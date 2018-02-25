const Node = require("../singleNode");

/** @todo Write tests */

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  traverse(fn, position) {
    let currentNode = this.head;

    // keep moving the pointer forward till current node is null
    while (currentNode) {
      // invoke callback with current node
      fn(currentNode);
      // assign currentNode to the next node
      currentNode = currentNode.next;
    }
  }

  // get a node at the zero indexed position
  getNode(position) {
    let currentNode = this.head;
    let currentPosition = 0;
    let found;

    if (position > this.length) {
      throw Error(`position does not exist`);
    }

    // keep moving the pointer forward till current node is null and current position
    // is less than or equal to position searching for
    while (currentNode && currentPosition <= position) {
      // if current position is equal to searched position then we have found the node
      if (currentPosition === position) {
        found = currentNode;
      }

      // assign current node to the next node
      currentNode = currentNode.next;
      // increment current position
      currentPosition++;
    }

    return found;
  }

  // inserts after desired position if a zero indexed position is passed and
  // insert at the end if no position is passed
  insert(data, position) {
    const newNode = new Node(data);
    let currentNode = this.head;
    let currentPosition = 0;

    // if no position is passed, set position to the end of the list
    if (typeof position === "undefined") {
      position = this.length;
    }

    if (!this.length) {
      newNode.next = currentNode;
      this.head = newNode;
      this.length++;
    } else {
      if (position > this.length) {
        throw Error(`position does not exist`);
      }

      while (currentNode.next && currentPosition < position) {
        currentPosition++;
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  remove(position) {
    let currentNode = this.head;
    let currentPosition = 0;

    if (position > this.length - 1) {
      throw Error(`position does not exist`);
    }
    // keep advancing current node to the node before the desired position
    while (currentNode.next && currentPosition < position) {
      // increment current position
      currentPosition++;
      currentNode = currentNode.next;
    }

    let toDelete = currentNode.next;
    // assign current node next to the next of node to be deleted.
    currentNode.next = toDelete.next;
    this.length--;
  }
}

module.exports = LinkedList;
