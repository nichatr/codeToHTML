'use strict';
const fs = require('fs');

const { settingsHTML } = require("./settingsHTML");


function processFiles(files) {

    fs.readFile('header.html', (err, header) => {
        if (err) throw err;
        let strHeader = header.toString('utf8').replace('TITLE-APP', settingsHTML.outputFilename);
        header = Buffer.from(strHeader, 'utf8');
        fs.writeFile(__dirname + `/${settingsHTML.outputFilename}.html`, header, { flag: 'w' }, (err) => {
            if (err) throw err;
        });
    });
}

processFiles();