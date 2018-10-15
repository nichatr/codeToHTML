const getFile = require('../getFile');
const klawSync = require('klaw-sync');
const path = require('path');
const _ = require('lodash');

// get in object all files, exclude directories.
const files = klawSync('./', { nodir: true });

_.forEach(files, function (value, key) {
    var workPath = path.parse(value.path).dir;
    var workFile = path.parse(value.path).base;

    //  remove the path up to the current working directory.
    var newPath = workPath.replace(__dirname, "");

    // add a new property to the object <files> with the file name.
    // if file in sub-directory add "./sub-directory" to filename.
    if (newPath) {
        value.filename = `${newPath}\\${workFile}`;
    } else {
        value.filename = workFile;
    }
});

_.forEach(files, function (value, key) {
    console.log(value.filename);
});




