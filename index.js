console.log('hi!')

const greeter = require('./greeter');

console.log(greeter.hello()); // 'hello!'
console.log(greeter.goodbye()); // 'goodbye!'

const shortid = require('shortid');
console.log(shortid.generate());