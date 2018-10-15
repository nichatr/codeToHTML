'use strict';
const getFile = require('./getFile');

// var filename = 'basics.html';
// console.log(getFile(filename));

function processFiles(files) {
    var allFiles;
    files.forEach(file => {
        allFiles += getFile(file);
    });
    // now allFiles contains the rendered files.
    // it remains to add the html elements for the complete html document.
    // ...
    console.log(allFiles);
}

module.exports = processFiles;