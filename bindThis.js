/*
 * implementation of function bind.
 */
function myBind(context) {
	let that = this;
	return function () {
		return that.apply(context, arguments);
	}
}

Function.prototype.myBind = myBind;
