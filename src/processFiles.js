'use strict';
const fs = require('fs');

const convertFileToHtml = require('./convertFileToHtml');
const { settingsHTML } = require("./settingsHTML");

function processFiles(files) {
    if (files.length === 0) return;

    if (writeHeader() === false) return;

    files.forEach(file => {
        let fileText = convertFileToHtml(file);
        fs.writeFile(__dirname + `/${settingsHTML.outputFilename}`, fileText, { flag: 'a' }, (err) => {
            if (err) throw err;
        });
    });

    writeFooter();
}

function writeHeader() {
    fs.readFile('header.html', (err, header) => {
        if (err) return false;
        let strHeader = header.toString('utf8').replace('TITLE-APP', settingsHTML.outputFilename);
        header = Buffer.from(strHeader, 'utf8');
        fs.writeFile(__dirname + `/${settingsHTML.outputFilename}`, header, { flag: 'w' }, (err) => {
            if (err) return false;
            return true;
        });
    });
}

function writeFooter() {
    fs.readFile('footer.html', (err, footer) => {
        if (err) return false;
        fs.writeFile(__dirname + `/${settingsHTML.outputFilename}`, footer, { flag: 'a' }, (err) => {
            if (err) throw err;
        });
    });
}

module.exports = processFiles;