/**
 * Created by amanulchowdhury.
 */

const inorderTraverse = (root, operation) => {
	if(typeof operation !== 'function') {
		throw Error('operation is not a function');
	}
	if( !root ) { return; }
	inorderTraverse(root.left, operation);
	operation(root.value);
	inorderTraverse(root.right, operation);
};

module.exports = inorderTraverse;
