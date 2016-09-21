/*
* A Simple json encoder
*/

var isArray = function(arr) {
    return Array.isArray(arr);
};

var isObject = function(obj) {
    return typeof(obj) === 'object';
};

var isString = function(str) {
    return typeof(str) === 'string';
};

var isNumber = function(num) {
    return typeof(num) === 'number';
};

var objEncoder = function(obj) {
    if(!isObject(obj)) {
        return obj;
    }

    let objStr = '{'; 
    let len = Object.keys(obj).length;
    let i = 0;
        
    for(let attr in obj) {
        
        if(typeof(obj[attr]) === 'object' || isArray(obj[attr])) {
            objStr + attr + '"' + jsonEncoder(obj[attr]);   
        } else {
            objStr += '"' + attr + '":' + '"' + obj[attr] + '"';
            if(i < len - 1) {
                objStr += ',';
            }
            
        }
        
        i++;
    }
    
    objStr += '}'

    return objStr;
};

var arrayEncoder = function(obj) {
    let objStr = '[';
        
    for(let i=0; i < obj.length; i++) {

        objStr += jsonEncoder(obj[i]);    
        
        if(i < obj.length -1) {
            objStr += ',';
        }
    }
    
    objStr += ']';

    return objStr;
}

var jsonEncoder = function(obj) {
    let objStr = '';

    //encode if string
    if(isString(obj)) {
      return objStr += '"' + obj + '"';
    }
    
    //encode if number
    if(isNumber(obj)) {
        return obj;
    }
    
    //encode object
    if(isObject(obj) && !isArray(obj)) {
        objStr += objEncoder(obj);
        
    }
    
    //encode array
    if(isArray(obj)) {
        objStr += arrayEncoder(obj);
    }
    
    return objStr;
};
