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
  constructor(id = null, name = '', ordinal = 0) {
    this.name = name;
    this.id = id;
    this.children = [];
    this.ordinal = ordinal;
  }
}

/**
 * Menubuilder Class
 */
class Tree {
  constructor(data) {
    const treeMap = this.buildTreeMap(data);
    this.root = this.buildTree(treeMap, new Node('root'));
  }

  /**
   * builds map of parent -> child
   * @param {Array} data 
   */
  buildTreeMap(data) {
    const map = new Map();

    data.forEach((record) => {
      const {parentId} = record;
      const parent = parentId ?? 'root';

      if (!map.has(parent)) {
        map.set(parent, []);
      }

      const children = map.get(parent);
      map.set(parent, [...children, record]);
    });

    return map;
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
  buildTree(treeMap, root) {
    if (!root.children) {
      root.children = [];
    }

    const children = treeMap.get(root.id);

    if (children && children.length) {
      children.forEach((child) => {
        const childNode = this.buildTree(treeMap, new Node(child._id, child.name, child.ordinal))
        root.children.push(childNode);
      })
    }
    
    return root;
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
// var builder = new Tree(data);
// document.write(builder.printTree());
