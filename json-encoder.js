/*
 * A Simple json encoder
 */

/**
 * Checks if value passed is an Array
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * Checks if value passed is an Object
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
  return typeof obj === "object";
}

/**
 * Checks if value passed is a String
 * @param str
 * @returns {boolean}
 */
function isString(str) {
  return typeof str === "string";
}

/**
 * Checks if value passed is a Number
 * @param num
 * @returns {boolean}
 */
function isNumber(num) {
  return typeof num === "number";
}

/**
 * Checks if value passed is a Function.
 * @param fn
 * @returns {boolean}
 */
function isFunction(fn) {
  return typeof fn === "function";
}

/**
 * Encodes passed value to JSON
 * @param obj
 * @returns {*}
 */
function jsonEncoder(obj) {
  let parts = [];

  //don't encode if function
  if (isFunction(obj)) {
    return;
  }

  //encode if string
  if (isString(obj)) {
    return '"' + obj + '"';
  }

  //encode if number
  if (isNumber(obj)) {
    return obj;
  }

  if (isObject(obj)) {
    if (isArray(obj)) {
      obj.map(item => {
        parts.push(jsonEncoder(item));
      });
    } else {
      Object.keys(obj)
        .filter(item => {
          return !isFunction(obj[item]);
        })
        .map(key => {
          parts.push('"' + key + '":' + jsonEncoder(obj[key]));
        });
    }
  }

  if (isArray(obj)) {
    return "[" + parts.join(",") + "]";
  }

  return "{" + parts.join(",") + "}";
}

module.exports = jsonEncoder;
