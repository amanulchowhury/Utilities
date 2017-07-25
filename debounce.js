let timeoutHandle = null;

const debounce = (callback, timeout) => {
	// return a function that with a timeout
	// clear any timeout that already there.
	return (...args) => {
		if(timeoutHandle) {
			window.clearTimeout(timeoutHandle);
		}
		
		timeoutHandle = setTimeout(()=> {
			callback(...args);
		} , timeout);	
	}
}


module.exports = debounce;
