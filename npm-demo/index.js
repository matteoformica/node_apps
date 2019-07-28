var _ = require('underscore');

//node will lookup the module in:
// core modules
// file or folder (e.g. ./underscore.js
// look in node_modules folder

var result = _.contains([1,2,3], 2);
console.log(result)