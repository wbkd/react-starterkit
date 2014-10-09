/**
 * you could use this file as a module template
 */


// dependencies
var utils = require('./utils'),

  // module name (exports)
  myModule = {},

  // private fields
  obj = {};



/* public functions */

myModule.getObj = function() {
  return obj;
}

myModule.fieldName = 123;


/* private functions */

function setObj(newObject) {
  obj = newObject;
}


module.exports = myModule;