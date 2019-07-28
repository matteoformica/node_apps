const EventEmitter = require('events'); //this is a class, which contains properties of methods

var url = "http://whatever";

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messageLogged', {id:1 , url:url});
    }
}


//export an object
//module.exports.log = log;

//export a single function
module.exports = Logger;