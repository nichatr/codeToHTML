'use strict';
const fs = require('fs');

const convertFileToHtml = require('./convertFileToHtml');
const { settingsHTML } = require("./settingsHTML");

/**
 * process all files.
 * @param {array} files array of outFilepaths under the root.
 * */
function processFiles(files) {
    if (files.length === 0) return;

    writeHeader(files);
    writeBody(files);
    writeFooter();
}

/* write each file to output html file,
    adding links to top */
function writeBody(files) {
    let outFilepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
    let body = fs.readFileSync('body1.html', 'utf8');

    // for each pathname:
    //  1. add filename as link to top of the page.
    //  2. convert the code to the output in html format.
    files.forEach((file) => {
        let regex = /app.js/gi;

        // ignore the output file created just now!
        if (file !== settingsHTML.appTitle) {
            let filepath = settingsHTML.root + '\\' + file;
            let fileText = body.replace(regex, file);
            fileText += convertFileToHtml(filepath);
            fs.writeFileSync(outFilepath, fileText, { encoding: 'utf8', flag: 'a' });
        }
    });
}

/* write the html header */
function writeHeader(files) {
    let outFilepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
    let header = fs.readFileSync('header1.html', 'utf8');
    let header1 = "";

    header = header.replace('TITLE-APP', settingsHTML.appTitle);
    fs.writeFileSync(outFilepath, header, { encoding: 'utf8', flag: 'w' });

    // for each pathname:
    //      1. create dropdown-item
    //      2. add to header var.
    // read header2.html and add to header var.
    header = fs.readFileSync('header2.html', 'utf8');
    files.forEach((file) => {
        let regex = /app.js/gi;

        // ignore the output file created just now!
        if (file !== settingsHTML.appTitle) {
            header1 += '\r\n' + header.replace(regex, file);
        }
    });
    fs.writeFileSync(outFilepath, header1, { encoding: 'utf8', flag: 'a' });
    header = fs.readFileSync('header3.html', 'utf8');
    fs.writeFileSync(outFilepath, header, { encoding: 'utf8', flag: 'a' });
}

/* write the html footer */
function writeFooter() {
    let footer = fs.readFileSync('footer.html', 'utf8');
    let outFilepath = __dirname + '\\' + `${settingsHTML.outputFilename}`;
    fs.writeFileSync(outFilepath, footer, { encoding: 'utf8', flag: 'a' });
}

module.exports = processFiles;