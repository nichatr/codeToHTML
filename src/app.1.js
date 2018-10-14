const readdirp = require('readdirp');

var settings = {
  root: './',          // './your-folder-path',
  entryType: 'all',
  fileFilter: ['!*.json', '!*.', '!TODO.', '!*.md'],
  directoryFilter: ['!.git', '!*modules'],
};

function readAllFiles() {
  var allFilePaths = [];

  // Iterate recursively through a folder
  readdirp(settings)
    .on('data', function (entry) {
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
      return allFilePaths;
    });
}

var files;

try {
  files = readAllFiles();

} catch (error) {
  console.log(error);
}

console.log(files);
