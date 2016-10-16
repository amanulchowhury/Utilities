/*
 * implementation of function bind.
 */
let myBind = function (context) {
	let that = this;
	return function () {
		return that.apply(context, arguments);
	}
};

Function.prototype.myBind = myBind;
