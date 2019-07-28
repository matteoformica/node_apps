var _ = require('underscore');

//consume a custom library published to npm
var mf = require('js-library-mf')

//node will lookup the module in:
// core modules
// file or folder (e.g. ./underscore.js
// look in node_modules folder

var result = _.contains([1,2,3], 2);
console.log(result)
console.log(mf.add(2,3))
console.log(mf.multiply(2,3))
