const klawSync = require('klaw-sync');
const _ = require('lodash');

// var settings = {
//   root: './',          // './your-folder-path',
//   entryType: 'all',
//   fileFilter: ['!*.json', '!*.', '!TODO.', '!*.md'],
//   directoryFilter: ['!.git', '!*modules'],
// };

const files = klawSync('./', {nodir: true});

_.forEach(files, function(value,key) {
  console.log(value.path);
});