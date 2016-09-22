/*
* A Simple json encoder
*/

function isArray(arr) {
    return Array.isArray(arr);
}

function isObject(obj) {
    return typeof obj === 'object';
}

function isString(str) {
    return typeof str === 'string';
}

function isNumber(num) {
    return typeof num === 'number';
}

function isFunction(fn) {
    return typeof fn === 'function';
}

function jsonEncoder(obj) {
    let parts = [ ];

    //don't encode if function
    if(isFunction(obj)) {
        return;
    }

    //encode if string
    if(isString(obj)) {
      return '"' + obj + '"';
    }

    //encode if number
    if(isNumber(obj)) {
        return obj;
    }
    
    if(isObject(obj)) {
        if(isArray(obj)) {
            obj.map((item) => {
                parts.push(jsonEncoder(item));
            })
        } else {
            Object.keys(obj)
                .filter((item) => {
                    return !isFunction(obj[item]);
                })
                .map((key) => {
                    parts.push('"' + key + '":' + jsonEncoder(obj[key]));
                });
        }
    }

    if(isArray(obj)) {
        return '[' + parts.join(',') + ']';
    }

    return '{' + parts.join(',') + '}';
}
