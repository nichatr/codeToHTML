const getFile = require('./getFile');
const klawSync = require('klaw-sync');
const path = require('path');
const _ = require('lodash');


// const files = klawSync('./', { nodir: true });
// var workPath = path.parse(files[5].path).dir;
// var workFile = path.parse(files[5].path).base;
// console.log(workPath);
// console.log(__dirname);
// var newPath = workPath.replace(__dirname, "");
// console.log(`.${newPath}\\${workFile}`);

const files = klawSync('./', { nodir: true });
_.forEach(files, function (value, key) {
  var workPath = path.parse(value.path).dir;
  var workFile = path.parse(value.path).base;
  var newPath = workPath.replace(__dirname, "");
  if (newPath) {
    console.log(`.${newPath}\\${workFile}`);
  } else {
    console.log(workFile);
  }
});






// var filename = 'basics.html';
// console.log(getFile(filename));

// function processOneFile(filename) {
//     var files = readdirp_api.readDirp();
//     // var oneFile = getFile(filename);

//     console.log(files);

// }