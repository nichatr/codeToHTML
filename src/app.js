'use strict';
const readAllFilesCallback = require('./readdirp-callback');
const readAllFilesAPI = require('./readdirp-api');

console.log('API:');
readAllFilesAPI(console.log);
console.log('Callback:');
readAllFilesCallback(console.log);