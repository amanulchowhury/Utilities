const debounce = (callback, timeout) => {
	// implementation goes here
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
