//import of class defined inside custom module
const Logger = require('./logger');
//instantiate class
const myLog = new Logger();

const os = require('os');
const fs = require('fs');

var tot = os.totalmem();
var free = os.freemem();

//use of the placeholder
function logMemory(){
    myLog(`Total mem: ${tot}`)
    myLog(`Free mem: ${free}`)
}

//use of fs module (async)
function readDir(){
    fs.readdir('./', (err, files) => {
        if(err) myLog('Error', err);
        else myLog('Result', files)
    })
}

//register a listener
myLog.on("messageLogged", (arg) => {
    console.log(`Listener called : ${arg.url} `)
});

myLog.log('message');