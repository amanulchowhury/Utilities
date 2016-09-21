/*
* implementation of function bind.
*/
let myBind = function(context) {
	let that = this;
	return function() {
		that.apply(context, arguments);
	}
}

Function.prototype.myBind = myBind;
