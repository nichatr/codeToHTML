const readdirp = require('readdirp');

var settings = {
    root: './',          // './your-folder-path',
    entryType: 'all',
    fileFilter: ['!*.json', '!*.','!TODO.','!*.md'],
    directoryFilter: ['!.git', '!*modules'],
};

// In this example, this variable will store all the paths of the files and directories inside the providen path
var allFilePaths = [];

// Iterate recursively through a folder
readdirp(settings)
    .on('data', function (entry) {
        // execute everytime a file is found in the providen directory

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

        // return allFilePaths;

        console.log(allFilePaths);
        // ["c:/file.txt","c:/other-file.txt" ...]
    });

    module.exports = readdirp;