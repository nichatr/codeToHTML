const getFile = require('./getFile');
var readAllFiles = require('./readdirp_api');
// const readAllFiles = require('./readdirp_callback');

// var filename = 'basics.html';
// console.log(getFile(filename));


console.log(readAllFiles());

// function processOneFile(filename) {
//     var files = readdirp_api.readDirp();
//     // var oneFile = getFile(filename);

//     console.log(files);

// }