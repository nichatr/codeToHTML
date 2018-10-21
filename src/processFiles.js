'use strict';
const fs = require('fs');

const convertFileToHtml = require('./convertFileToHtml');
const { settingsHTML } = require("./settingsHTML");

/**
 * process all files.
 * @param {array} files array of filepaths under the root.
 * */
function processFiles(files) {
    if (files.length === 0) return;

    writeHeader();

    files.forEach((file) => {
        // ignore the output file.
        if (file !== settingsHTML.appTitle) {
            let fileText = convertFileToHtml(file);
            let filepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
            fs.writeFileSync(filepath, fileText, { encoding: 'utf8', flag: 'a' });
        }
    });

    writeFooter();
}

/* write the html header */
function writeHeader() {
    let header = fs.readFileSync('header.html', 'utf8');

    // let strHeader = header.toString('utf8').replace('TITLE-APP', settingsHTML.outputFilename);
    // header = Buffer.from(strHeader, 'utf8');
    header = header.replace('TITLE-APP', settingsHTML.appTitle);
    let filepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
    fs.writeFileSync(filepath, header, { encoding: 'utf8', flag: 'w' });
}

/* write the html footer */
function writeFooter() {
    let footer = fs.readFileSync('footer.html', 'utf8');
    let filepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
    fs.writeFileSync(filepath, footer, { encoding: 'utf8', flag: 'a' });
}

module.exports = processFiles;