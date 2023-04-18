// function greet(name) {
//     console.log('Hello ' + name);
// }
// greet('Fazla Rabbi');

/**
 * In node every file considered as module. Every variable and 
 * function that are defined in that file are scoped in that
 * module. They are not available outside of the module
 */
// console.log(module);


/*
Now we have created a new file logger.js. According to node
it will be in another module. To use the variables and functions
of logger.js we have require() and export logger.js
*/

// const log = require('./logger');
// log('Hello');




// OS module
const os = require('os');
let totMem = os.totalmem();
let freeMem = os.freemem();
console.log(`Total Memory ${totMem}`);
console.log(`Total Memory ${freeMem}`);


// file system
const fs = require('fs');
const log = require('./logger');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function (err, files) {
//     if (err) console.log(err);
//     else console.log(files);
// })



const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.addListeer