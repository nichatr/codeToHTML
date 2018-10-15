'use strict';
const readdirp = require('readdirp');

var settings = {
    root: './',          // './your-folder-path',
    entryType: 'all',
    fileFilter: ['!*.json', '!*.', '!TODO.', '!*.md'],
    directoryFilter: ['!.git', '!*modules'],
};

function readAllFilesAPI(myCallback, root) {
    var allFilePaths = [];
    settings.root = root;

    // Iterate recursively through a folder
    readdirp(settings)
        // execute everytime a file is found in the providen directory
        .on('data', function (entry) {
            // Store the fullPath of the file/directory in our custom array
            if (!entry.stat.isDirectory()) {
                allFilePaths.push(
                    entry.path //+ "---" + entry.stat.isDirectory()
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