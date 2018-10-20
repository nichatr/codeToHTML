'use strict';
const fs = require('fs');

const convertFileToHtml = require('./convertFileToHtml');
const { settingsHTML } = require("./settingsHTML");

function processFiles(files) {
    if (files.length === 0) return;

    writeHeader();

    files.forEach((file) => {
        // ignore the output file.
        if (file !== settingsHTML.outputFilename) {
            let fileText = convertFileToHtml(file);
            let filepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
            fs.writeFileSync(filepath, fileText, { encoding: 'utf8', flag: 'a' });
        }
    });

    writeFooter();
}

function writeHeader() {
    let header = fs.readFileSync('header.html', 'utf8');

    // let strHeader = header.toString('utf8').replace('TITLE-APP', settingsHTML.outputFilename);
    // header = Buffer.from(strHeader, 'utf8');
    header.replace('TITLE-APP', settingsHTML.outputFilename);
    let filepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
    fs.writeFileSync(filepath, header, { encoding: 'utf8', flag: 'w' });
}

function writeFooter() {
    let footer = fs.readFileSync('footer.html', 'utf8');
    let filepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
    fs.writeFileSync(filepath, footer, { encoding: 'utf8', flag: 'a' });
}

module.exports = processFiles;