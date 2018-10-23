'use strict';
var readdirp = require('readdirp');
const util = require('util');

var settingsAPI = {
    root: './',          // './your-folder-path',
    entryType: 'all',
    fileFilter: ['!*.json'],
    directoryFilter: ['!*.*', '!.git', '!*modules'],
};

function readAllFilesAPI(myCallback, root) {
    // In this example, this variable will store all the paths of the files and directories inside the providen path
    var allFilePaths = [];
    settingsAPI.root = root;
    const readdirpPromise = util.promisify(readdirp);
    callReaddirpPromise();

    async function callReaddirpPromise() {
        const reads = await readdirpPromise(settingsAPI,
            // This callback is executed everytime a file or directory is found inside the providen path
            function (entry) {
                // Store the fullPath of the file/directory in our custom array 
                if (!entry.stat.isDirectory()) {
                    allFilePaths.push(entry.path);
                }
            },

            // This callback is executed once 
            function (err, res) {
                if (err) {
                    throw err;
                }

                // An array with all the fileEntry objects of the folder 
                myCallback(allFilePaths);
            }
        );
    }
}

module.exports = readAllFilesAPI;