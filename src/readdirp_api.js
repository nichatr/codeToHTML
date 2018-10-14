const readdirp = require('readdirp');

var settings = {
    root: './',          // './your-folder-path',
    entryType: 'all',
    fileFilter: ['!*.json', '!*.', '!TODO.', '!*.md'],
    directoryFilter: ['!.git', '!*modules'],
};

var allFilePaths = [];

function readAllFiles() {

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
            console.log(allFilePaths);
            // return allFilePaths;
        });
}

module.exports = readAllFiles;