var fs = require('fs');
var _ = require('lodash');  // Load the full build.

/**
 * @param {string} filename the file (including path) to process
 * @returns {contents} parsed file contents
 * */
function getFile(filename) {
    const openingCode = "<pre><code class=";
    const postfix = "</code></pre>";
    var extension;
    var prefix;
    var convertedData;
    var language;
    var languages = {
        js: "language-javascript",
        html: "language-html",
        css: "language-css",
        other: "language-javascript"
    };

    // '<pre><code class="language-javascript">'

    var data = fs.readFileSync(filename, 'utf8')
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

module.exports = getFile;