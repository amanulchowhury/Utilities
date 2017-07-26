let timeoutHandle = null;

/**
 * @description Sets a function to run only once with a delay
 * @param {Function} fn function to be debounced 
 * @param {Number} timeout delay in milliseconds 
 */
const debounce = (fn, timeout = 0) => {
  // check whether fn is a function
  if (!fn || typeof fn !== "function") {
    throw Error("fn needs to be a function");
  }

  // check whether timeout is a number
  if (isNaN(timeout)) {
    throw Error("timeout needs to be a number");
  }

  // return a function that invokes fn with a timeout
  // and takes all the arguments passed
  return (...args) => {
    // clear any timeout that already there.
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }

    // set timeout for fn with the passed in timeout
    timeoutHandle = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
};

module.exports = debounce;
