'use strict';
const readdirp = require('readdirp');

var settingsAPI = {
    root: './',          // './your-folder-path',
    entryType: 'all',
    fileFilter: ['!*.json', '!*.', '!TODO.', '!*.md'],
    directoryFilter: ['!.git', '!*modules'],
};

function readAllFilesAPI(myCallback, root) {
    var allFilePaths = [];
    settingsAPI.root = root;

    // Iterate recursively through a folder
    readdirp(settingsAPI)
        // execute everytime a file is found in the providen directory
        .on('data', function (entry) {
            // Store the fullPath of the file/directory in our custom array
            if (!entry.stat.isDirectory()) {
                allFilePaths.push(
                    entry.path
                );
            }
        })
        .on('warn', function (warn) {
            console.log("Warn: ", warn);
        })
        .on('error', function (err) {
            console.log("Error: ", err);
        })
        .on('end', function () {
            myCallback(allFilePaths);
        });
}

module.exports = readAllFilesAPI;