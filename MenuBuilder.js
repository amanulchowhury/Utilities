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

MenuBuilder = function () {
	this.tree = {
		name: 'root',
		id: null,
		children: []
	};
};

MenuBuilder.prototype.compareNodes = function (firstObj, secondObj) {
	return firstObj.ordinal - secondObj.ordinal;
};

MenuBuilder.prototype.parseTree = function (data) {
	return this.buildTree.call(this, data, this.tree);
};

MenuBuilder.prototype.buildTree = function (data, tree) {
	var i = 0;
	if (Object.prototype.toString.call(data) === '[object Array]' && !data.length) {
		return;
	}

	if (!tree.children) {
		tree.children = [];
	}

	while (i < data.length) {
		if (data[i].parentId === tree._id) {
			tree.children.push(this.buildTree(data, data[i]));
		}

		i++;
	}
	if (tree.children.length) {
		tree.children.sort(this.compareNodes);
	}

	return tree;
};

MenuBuilder.prototype.printTree = function (tree) {
	var ul = '<ul>';
	for (var i = 0; i < tree.children.length; i++) {
		ul += '<li>' + tree.children[i].name + this.printTree.call(this, tree.children[i]);
		ul += '</li>';
	}

	ul += '</ul>';
	return ul;
};

/*********** Usage ***********/
// var builder = new MenuBuilder();
// var tree = builder.parseTree(data);
// document.write(builder.printTree(tree));
