/**
 * Created by amanulchowdhury.
 */

const _value = Symbol('value');
const _left = Symbol('left');
const _right = Symbol('right');

class Node {
	constructor() {
		this.left = null;
		this.right = null;
		this.value = null;
	}

	get value() {
		return this[_value];
	}

	set value(val) {
		return this[_value] = val;
	}

	get left() {
		return this[_left];
	}

	set left(node) {
		return this[_left] = node;
	}

	get right() {
		return this[_right];
	}

	set right(node) {
		return this[_right] = node;
	}
}

module.exports = Node;
