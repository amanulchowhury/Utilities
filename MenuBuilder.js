// ********** Sample Input ***********
// var data = [
//   {
//       "name":"b1",
//       "_id":"b1_id",
//       "ordinal": 1
//    },
//    {
//       "name":"a1",
//       "_id":"a1_id",
//       "ordinal": 0
//    },
//    {
//       "name":"a2",
//       "parentId":"a1_id",
//       "_id":"a2_id",
//    },
//    {
//       "name":"a3",
//       "parentId":"a2_id",
//       "_id":"a3_id",
//    },
//    {
//       "name":"b2",
//       "parentId":"b1_id",
//       "_id":"b2_id",
//       "ordinal": 1
//    },
//    {
//       "name":"b3",
//       "parentId":"b1_id",
//       "_id":"b3_id",
//       "ordinal": 0
//    }
// ];
// ***********************************

/**
 * Prints the root to nav menu
 * @param tree
 * @returns {string}
 */
const printTree = tree => {
  var ul = "<ul>";
  for (var i = 0; i < tree.children.length; i++) {
    ul += "<li>" + tree.children[i].name + printTree(tree.children[i]);
    ul += "</li>";
  }

  ul += "</ul>";
  return ul;
};

/**
 * Class to represent a root node.
 */
class Node {
  constructor() {
    this.name = "";
    this.id = null;
    this.children = [];
    this.ordinal = 0;
  }
}

/**
 * Menubuilder Class
 */
class Tree {
  constructor(data) {
    this.root = new Node();
    this.buildTree(data, this.root);
  }

  /**
	 * Compare two nodes based on the ordinal value
	 * @param firstObj
	 * @param secondObj
	 * @returns {number}
	 */
  compareNodes(firstObj, secondObj) {
    return firstObj.ordinal - secondObj.ordinal;
  }

  /**
	 * Build root structure
	 * @param data tree data
	 * @param root root of the tree
	 */
  buildTree(data, root) {
    var i = 0;
    if (Array.isArray(data) && !data.length) {
      return;
    }

    if (!root.children) {
      root.children = [];
    }

    while (i < data.length) {
      if (data[i].parentId === root._id) {
        root.children.push(this.buildTree(data, data[i]));
      }

      i++;
    }
    if (root.children.length) {
      root.children.sort(this.compareNodes);
    }
  }

  /**
	 * Prints the tree
	 * @returns {string}
	 */
  printTree() {
    return printTree(this.root);
  }
}

module.exports = Tree;

/*********** Usage ***********/
// var builder = new Tree(data);
// document.write(builder.printTree());
