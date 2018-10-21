'use strict';
var fs = require('fs');
var _ = require('lodash');

const { settingsHTML } = require("./settingsHTML");

/**
 * @param {string} filename the file (including path) to process
 * @returns {contents} parsed file contents
 * */
function convertFileToHtml(filename) {
    const openingCode = "<pre><code class=";
    const postfix = "</code></pre>";
    var extension,
        prefix,
        convertedData,
        language,
        data,
        languages = {
            js: "language-javascript",
            html: "language-html",
            css: "language-css",
            other: "language-javascript"
        };

    try {
        data = fs.readFileSync(filename, 'utf8');
    } catch (error) {
        data = 'File not found.';
    }

    extension = filename.split('.').pop();

    if (extension === 'html' ||
        extension === 'js' ||
        extension === 'ejs') {
        convertedData = _.escape(data);
    } else {
        convertedData = data;
    }

    language = languages[extension] ? languages[extension] : languages.other;
    prefix = `${openingCode}"${language}">`;
    convertedData = prefix + convertedData + postfix;

    return convertedData;
}

module.exports = convertFileToHtml;