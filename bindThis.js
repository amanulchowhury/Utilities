/*
 * implementation of function bind.
 */

/**
 * bind function context
 * @param context the context to bind to
 * @returns {Function}
 */
let myBind = function (context) {
	let that = this;
	return function () {
		return that.apply(context, arguments);
	}
};

Function.prototype.myBind = myBind;
