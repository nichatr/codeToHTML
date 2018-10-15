'use strict';

// const readAllFilesCallback = require('./readdirp-callback');
const readAllFilesAPI = require('./readdirp-api');
const processFiles = require('./processFiles');

// 1. read filenames from the specified directory downwards,
// 2. push the filenames in an array,
// 3. execute the specified callback on the created array.
readAllFilesAPI(processFiles);

