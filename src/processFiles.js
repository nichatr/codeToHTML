'use strict';
const convertFileToHtml = require('./convertFileToHtml');
const { settingsHTML } = require("./settingsHTML");

// var filename = 'basics.html';
// console.log(getFile(filename));

function processFiles(files, settings) {
    var allFiles;
    files.forEach(file => {
        allFiles += convertFileToHtml(file);
    });
    // now allFiles contains the rendered files.
    // it remains to add the html elements for the complete html document.
    // ...
    console.log(allFiles);
}

module.exports = processFiles;